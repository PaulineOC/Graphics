
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

  vec3 c = mix(vec3(5., .5, 0.), vec3(0.,.5,1.), .5 + .5 * y);//original color gradient


  //changing colors of blue and green for sky with time 
  float b = 1. - 1. * sin(1. * uTime);
  float g = 0.3 - 0.3 * sin(1. * uTime);
  

//comment this out below and get the gradient back
  //c = vec3(0,g,b);

   if (sun > 0.){// needed to set sun color only
  
      c = vec3(50, 50, 0);
   }
   //color the earth
   if (earth > 0.)
     c = vec3(0., 0.5, 0);


//gradient 


   gl_FragColor = vec4(sqrt(c), 1.);             // Final pixel color
}
