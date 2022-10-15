const fragmentShader = `
uniform sampler2D globeTexture;
uniform vec3 atmosphereColor;
uniform vec3 atmosphereIntensity;
varying vec2 vertexUV;
varying vec3 vectorNormal;

void main(){
  float intensity = 1.05 - dot(vectorNormal, atmosphereIntensity);
  vec3 atmosphere = atmosphereColor * pow(intensity, 1.5);
  vec3 updatedTexture = atmosphere + texture2D(globeTexture, vertexUV).xyz;
  gl_FragColor = vec4(updatedTexture, 1.0);
}`;

export default fragmentShader;
