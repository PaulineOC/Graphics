
   varying vec3 vPos;                               // Position in image
   uniform float uTime;                             // Time


   //Ray Trace 
   vec2 raytraceSphere(vec3 V, vec3 W, vec4 S) {
      V -= S.xyz;
      float B = 2. * dot(V, W);
      float C = dot(V, V) - S.w * S.w;
      float discrim = B*B - 4.*C;
      return discrim < 0. ? vec2(-1., -1)
                          : vec2(-B - discrim, -B + discrim) / 2.;
   }


   //Lights
   vec3 LDir1 = normalize(vec3(1.25,-sin(uTime),.75));
   vec3 LDir2 =  normalize(vec3(1.25,sin(uTime),.75));

   //Spheres
   vec4 S = vec4(1.35*-sin(-uTime*.75),.0,-5.,.3);  //Sphere1
   vec4 S2 = vec4(1.35*-sin(uTime*.75),.0,-5.,.3);  //Sphere2


   void main() {
      //Gradient Background
      vec3 c = mix(vec3(1.,.05, 1.5), vec3(0.,0.,0.5), 0.5 +vPos.y*sin(uTime));

      vec3 V = vec3(0.,0.,0.);                      // Ray origin
      vec3 W = normalize(vec3(vPos.xy, -3.));       // Ray direction

      //Multiple Ray Tracings
      vec2 ray1 = raytraceSphere(V, W, S);             // Ray trace sphere1
      vec2 ray2=raytraceSphere(V,W,S2);

      if (ray1.x > 0.) {
         vec3 P = V + ray1.x * W;                      // Point on sphere
         vec3 N = normalize(P - S.xyz);             // Surface normal
         float brightness = max(0., dot(N, LDir1));
         vec3 lightColor1 = mix(vec3(1., 0., 0), vec3(0.,0.,.0), .1); // Diffuse surface
         c = vec3(1.,1.,1.) * brightness + vec3(1.0,0.,0.);
      }
      if(ray2.x>0.){
         vec3 P = V + ray2.x * W;                      // Point on sphere
         vec3 N = normalize(P - S2.xyz);             // Surface normal
         float brightness = max(0., dot(N, LDir2));
         vec3 lightColor2 = mix(vec3(0., 0., 1.0), vec3(0.,0.,.0), .1); // Diffuse surface
         c = vec3(1.,1.,1.) * brightness + lightColor2;
      }

      gl_FragColor = vec4(sqrt(c), 1.);             // Final pixel color
   }