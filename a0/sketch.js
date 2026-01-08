// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
}
// draw() is called 60 times per second
function draw() {
    //drawing from computer system clock
    let hr = hour(); //0-23
    let min = minute(); //0-59
    let sec = second(); //0-59
    let hrColor;
    let minColor;
    let secColor;

// color logic (working for AM and PM)
if (hr >= 12) {
    // PM Colors
    hrColor = color('#7950f280'); 
    minColor = color('#9c36b580');
    secColor = color('#4dabf780');
} else {
    // AM Colors
    hrColor = color('#ffd43b80'); 
    minColor = color('#e0313180');
    secColor = color('#38d9a980');
}
    //rect parameters: x, y, width, height, radius (for rounded corners)
    //draw background
    background(250);
    fill(240);
    stroke(200);
    rect(40, 20, 400, 400, 15)

    //draw hours rect
    let hrDim;
    if (hr >= 12) {
        hrDim = (hr-12) * (400/12) //12-23
    }
    else{
        hrDim = hr * (400/12) //0-11
    }
    fill(hrColor);
    stroke(0);
    rect(40, 20, hrDim, hrDim, 15);

    //draw minutes rect
    let minX = (40 + (60-min) * (400/60))
    let minDim = (min/60) * 400;
    fill(minColor);
    rect(minX, 20, minDim, minDim, 15);

    //draw seconds rect
    let secY = (20 + (60-sec) * (400/60))
    let secDim = (sec/60) * 400;
    fill(secColor);
    rect(40, secY, 400, secDim, 15);
}