
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
   vec3 c = mix(vec3(1., .5, 0.), vec3(0.,.5,1.), .5 + .5 * y);//colors


   float z = D(7. * p + vec2(-6.5 * cos(uTime * 1.), 5. * sin(uTime * 1.)));//sin wave animation




   if (z > 0.)// needed to set sun color only
     c = vec3(50, 50, 0);


   if (y < 0.)
     c = vec3(0,0,0);


   gl_FragColor = vec4(sqrt(c), 1.);             // Final pixel color
}
