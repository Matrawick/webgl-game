
function transformVec3ByMat4(outVec3, inVec3, mat) {
    var tempVec4 = vec4.fromValues(inVec3[0], inVec3[1], inVec3[2], 1);
    vec4.transformMat4(tempVec4, tempVec4, mat);
    vec3.set(outVec3, tempVec4[0], tempVec4[1], tempVec4[2]);
}


/*

transformMat = mat4.create();
mat4.multiply(transformMat, projMat, viewMat);
mat4.scale(transformMat, transformMat, vec3.fromValues(0.5, 0.5, 0.5));
while (matStack.length !== 0) {
  mat4.multiply(transformMat, transformMat, matStack.pop());
}
*/
