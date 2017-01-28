

// THIS IS THE FRAGMENT SHADER WE CREATED IN CLASS.

varying vec3 vPos;                               // Pixel position
uniform float uTime;                             // Time
vec2 A[3];

float D(vec2 p) {          // Unit sphere: return z value.
   float rr = dot(p, p);
   return rr >= 1. ? 0. : sqrt(1. - rr);
}

void main() {

   A[0] = vec2(.6, .2);
   A[1] = vec2(-.3, .3);
   A[2] = vec2(.4, .5);

   float x = vPos.x;
   float y = vPos.y;
   vec2 p = vPos.xy;

   vec3 c = mix(vec3(1., .5, 0.), vec3(0.,.5,1.), .5 + .5 * y);//colors


   float z = D(2. * p + vec2(1, .1 * sin(uTime * 2.)));//need to make ball smaller

   for (int i = 0 ; i < 3 ; i++) {
      if (z > 0.)
         c = vec3(z, z, z);
   }

   gl_FragColor = vec4(sqrt(c), 1.);             // Final pixel color
}
