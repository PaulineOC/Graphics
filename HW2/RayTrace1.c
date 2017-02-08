
varying vec3 vPos;                               // Position in image
uniform float uTime;                             // Time



//vec3 LDir = normalize(vec3(1.,-sin(uTime),.5));  // Light1 direction


vec3 LDir2 =  normalize(vec3(1.,-sin(uTime),.5));

vec2 raytraceSphere(vec3 V, vec3 W, vec4 S) {
   V -= S.xyz;
   float B = 2. * dot(V, W);
   float C = dot(V, V) - S.w * S.w;
   float discrim = B*B - 4.*C;
   return discrim < 0. ? vec2(-1., -1)
                       : vec2(-B - discrim, -B + discrim) / 2.;
}

void main() {

vec3 c = mix(vec3(1.,.0, 0.), vec3(0.,0.,2.), 0.5 +vPos.y);


   vec3 V = vec3(0.,0.,0.);                      // Ray origin
   vec3 W = normalize(vec3(vPos.xy, -3.));       // Ray direction
   vec4 S = vec4(cos(uTime),sin(uTime),-5.,.5);  // Animate sphere

   vec2 t = raytraceSphere(V, W, S);             // Ray trace sphere

   if (t.x > 0.) {
      vec3 P = V + t.x * W;                      // Point on sphere
      vec3 N = normalize(P - S.xyz);             // Surface normal
      float brightness = max(0., dot(N, LDir2));
      vec3 b = mix(vec3(0., 0.5, 1.), vec3(0.,2.,.2), .1); // Diffuse surface
      c = vec3(1.,1.,1.) * brightness + b;
   }

   gl_FragColor = vec4(sqrt(c), 1.);             // Final pixel color
}
