const fragmentShader = `
uniform vec3 atmosphereColor;
uniform vec3 atmosphereIntensity;
varying vec3 vectorNormal;

void main(){
  float dotResult = dot(vectorNormal, atmosphereIntensity);
  float intensity = pow(0.8 - dotResult, 2.0);
  vec3 atmosphere = atmosphereColor;
  gl_FragColor = vec4(atmosphere, 1.0) * intensity;
}`;

export default fragmentShader;
