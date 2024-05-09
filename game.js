const htd = "0123456789abcdefghijklmnopqrstuvwxyz"
function dec_to_hex(dec) {
    if (dec == 0) {
        return "0";
    };
    let ans = "";
    let places = [];
    while (dec != 0){
        places.push(dec % 16);
        dec -= dec % 16;
        dec /= 16;
    };
    for (let i = places.length - 1; i > -1; i--) {
        for (let x = 0; x < htd.length; x++) {
            if (places[i] == x) {
                ans += htd[x];
                break;
            };
        };
    };
    return ans;
};


function hex_to_colour(red, green, blue) {
    if (red.length == 1) {
        red = "0" + red;
    };
    if (green.length == 1) {
        green = "0" + green;
    };
    if (blue.length == 1) {
        blue = "0" + blue;
    };

    return "#" + red + green + blue;
};


let red = "00";
let green = "00";
let blue = "00";

let x = 0;
let y = 0;
let r = 0;

let objects = [[200, 1, 210, -1], [0, 5, 0, 4], [-100, -5, -100, -10]];

const background = document.getElementById("background");
background.style = "background-color: #000000";
background.addEventListener("keydown", function(event) {
    if (event.code == "KeyW") {
        if (r == 0) {
            x += 1;
            if (collide(0) == true) {
                x -= 1;
            };
        }
        else if (r == 180) {
            x -= 1;
            if (collide(0) == true) {
                x += 1;
            };
        }
        else if (r == 270) {
            y += 1;
            if (collide(1) == true) {
                y -= 1;
            };
        }
        else {
            y -= 1;
            if (collide(1) == true) {
                y += 1;
            };
        };
      };
    if (event.code == "KeyS") {
        if (r == 0) {
            x -= 1;
            if (collide(0) == true) {
                x += 1;
            };
        }
        else if (r == 180) {
            x += 1;
            if (collide(0) == true) {
                x -= 1;
            };
        }
        else if (r == 270) {
            y -= 1;
            if (collide(1) == true)  {
                y += 1;
            };
        }
        else {
            y += 1;
            if (collide(1) == true) {
                y -= 1;
            };
        };
    };
    if (event.code == "KeyA") {
        if (r == 0) {
            y += 1;
            if (collide(1) == true) {
                y -= 1;
            };
        }
        else if (r == 180) {
            y -= 1;
            if (collide(1) == true) {
                y += 1;
            };
        }
        else if (r == 270) {
            x -= 1;
            if (collide(0) == true) {
                x += 1;
            };
        }
        else {
            x += 1;
            if (collide(0) == true) {
                x -= 1;
            };
        };
    };
    if (event.code == "KeyD") {
        if (r == 0) {
            y -= 1;
            if (collide(1) == true) {
                y += 1;
            };
        }
        else if (r == 180) {
            y += 1;
            if (collide(1) == true) {
                y -= 1;
            };
        }
        else if (r == 270) {
            x += 1;
            if (collide(0) == true) {
                x -= 1;
            };
        }
        else {
            x -= 1;
            if (collide(0) == true) {
                x += 1;
            };
        };
    };

    if (event.code == "ArrowLeft") {
        if (r == 0) {
            r = 270;
        }
        else {
            r -= 90;
        };
    };
    if(event.code == "ArrowRight") {
        if (r == 270) {
            r = 0;
        }
        else {
            r += 90;
        };
    }

    update();
});

function collide(dir) {
    if (dir == 0) {
        for (let i = 0; i > objects.length; i++) {
            if (x == object[i][0] || x == objects[i][2]) {
                return true;
            };
        };
    }
    else {
        for (let i = 0; i > objects.length; i++) {
            if (y == object[i][1] || y == objects[i][3]) {
                return true;
            };
        };
    };
    return false;
};

function update() {
    console.log(x, y, r);
    blue = "00";
    for (let i = 0; i < objects.length; i++) {
        if (x <= objects[i][0] && r == 0) {
            if (y <= objects[i][1] && y >= objects[i][3] && x >= objects[i][0] - 255) {
                blue = dec_to_hex(255 + x - objects[i][0]);
            };
            continue;
        };
        if (x >= objects[i][2] && r == 180) {
            if (y <= objects[i][1] && y >= objects[i][3] && x <= objects[i][2] + 255) {
                blue = dec_to_hex(255 - x + objects[i][2]);
            };
        };
        if (y <= objects[i][1] && r == 270) {
            if (x <= objects[i][0] && x >= objects[i][2] && y >= objects[i][1] - 255) {
                blue = dec_to_hex(255 + y - objects[i][1]);
            };
            continue;
        };
        if (y >= objects[i][3] && r == 90) {
            if (x <= objects[i][0] && x >= objects[i][2] && y <= objects[i][3] + 255) {
                blue = dec_to_hex(255 - y + objects[i][3]);
            };
        };
    };

    console.log(hex_to_colour(red, green, blue));
    background.style = "background-color: " + hex_to_colour(red, green, blue);
};

update()
