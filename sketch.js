/*
   Mohamed Elshorbagy
   30/5/2017
   Phyllotaxis Shape


 */ 

/* Declaration Of Global Variables */ 

var n = 0;
var c = 4;




function setup() {

createCanvas(400 ,400);
angleMode(DEGREES);
colorMode(HSB);
background(0);

}


function draw() {


/* 
  # Equation Of Phyllotaxis : 
        ==> Phi = n * 137.5 
        ==> r = c * sqrt(n)

  # Polar Co-ordinates Transformation : 
     x = r * cos(phi)
     y = r * sin(phi)
*/

/*
  You can Adjust the Number of 137.6 to { 137.5 , 137.3 }

  # It will Give you another Shapes of the Phyllotaxis 
 */

var phi = n * 137.6;
var r = c * sqrt(n);



/* To put the Center in the Half of the Canavas */ 
var x = r * cos(phi) + (width/2);
var y = r * sin(phi) + (height/2);

//fill(random(255) , random(255) , random(255));
fill((phi) % 256 , 200 , 100);
noStroke();
ellipse(x,y,4,4);
n++;

}

