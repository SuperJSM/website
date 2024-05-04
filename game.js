const htd = "0123456789abcdefghijklmnopqrstuvwxyz"
function dec_to_hex(dec) {
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


function hex_to_colour(red, blue, green) {
    if (red.length == 1) {
        red = "0" + red
    };
    if (blue.length == 1) {
        blue = "0" + blue
    };
    if (green.length == 1) {
        green = "0" + green
    };

    return "#" + red + blue + green
};


let red = 0
let blue = 0
let green = 0

const background = document.getElementById("background");
background.style = "background-color: #000000";
background.addEventListener("keydown", function(event) {
    if (event.code == "Space") {
        keyPress();
      };
});

function keyPress() {
    background.style.background = "#0000ff";
};