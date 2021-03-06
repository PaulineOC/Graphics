// THIS IS THE FRAGMENT SHADER WE CREATED IN CLASS.
varying vec3 vPos;                               // Pixel position
uniform float uTime;                             // Time

float D(vec2 p) {          // Unit sphere: return z value.
   float rr = dot(p, p);
   return rr >= 1. ? 0. : sqrt(1. - rr);
}

void main() {
  float x = vPos.x;
  float y = vPos.y;
  vec2 p = vPos.xy;

float sunSpeed=1.;

//Shapes
   float sun = D(7. * p + vec2(-6.5 * cos(uTime * sunSpeed), 5. * sin(uTime * sunSpeed)));
   //get x and y value in regards to uTime w/ cos & sin function for parametric rotation
   //-6.5 * cos(uTime * 1.) = X coordinate
   //5. * sin(uTime * 1. = Y coordinate
  float earth = D(0.8 * p + vec2(0,1.2));

//Colors section
//Color 1: 
float r1=1.;
float g1=.2;
float b1=0.;
//Color 2:
float r2 =0.;
float g2=.5;
float b2=1.5;

float saturation = 1.8;
//saturation gets closer to 1 == more blue/less red --> more afternoon time* 
//saturation gets closer to 0 == more red/less blue --> more sunrise/sunset
float sunRiseSet =0.1; //lowerlimit for saturation

float actualGradient = 1.5;
//when actualGradient approaches infinity = 
//when actualGradient approaches 0. = 
float horizonOffset =.7;
float speedOfSunsetSunRise=1.;

//vec3 c = mix(vec3(r1, g1, b1), vec3(r2,g2,b2), sunRiseSet + actualGradient * y);//original static color gradient
//this is the gradient from the middle that changes outwards
float test = pow(y+horizonOffset,(.95+.95*sin(speedOfSunsetSunRise*uTime)));
//other test for gradient change 
float t = 0.5+0.5*sin(uTime+3.14);
//make it vary between 1 and 0 --> adding or subtracting 


float earthColor = 0.5;
if (-6.5 * sin(1. * uTime) < 0.) {
//-6.5 is from the sun's 
//Oscillates each color between black and itself at its brightest overall
//Multiply by the color (r1) to get the magnitude of the sin wave (eg: height)
//Multiply by -1 to flip it
//Add the color itself (eg: r1) to offset so that its lowest value is 0
   r1 = r1 - sin(uTime * 1.) * r1;
   r2 = r2 - sin(uTime * 1.) * r2;
   b2 = b2 - sin(uTime * 1.) * b2;
   b1 = b1 - sin(uTime * 1.) * b1;
   g1 = g1 - sin(uTime * 1.) * g1;
   g2 = g2 - sin(uTime * 1.) * g2;

   earthColor = earthColor - sin(uTime * 1.) * earthColor * 0.9;
}

vec3 c = mix(vec3(r1,g1,b1),vec3(r2,g2,b2),test);

//interpolant with y raised to a power 
//wants on something 
//whatever you add with sin function to add 
//need it to be cyclic aka sin or cos 
float exp=1.+0.5+sin(uTime);
  //changing colors of blue and green for sky with time 
  float b = 1. - 1. * sin(1. * uTime);
  float g = 0.3 - 0.3 * sin(.85 * uTime);
//comment this out below and get the gradient back
  //c = vec3(0,g,b);
   if (sun > 0.){// needed to set sun color only
      c = vec3(50, 50, 0);
   }
   //color the earth
   if (earth > 0.)
     c = vec3(0., earthColor, 0);
   gl_FragColor = vec4(sqrt(c), 1.);             // Final pixel color
}

</script>
   
<script>

var vs = vs_script.innerHTML, fs = fs_script.innerHTML;

addTextEditor(fs, function() { canvas1.setShaders(vs, this.value); });

gl_start(canvas1, vs, fs);

</script>

