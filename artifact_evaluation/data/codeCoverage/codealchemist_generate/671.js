var v0 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("7f3a769704ab79b74c4762420e21c6d7.svg");
});
var v1 = (function (v1, v2){
var v3 = (v2[0]) - (v1[0]), v4 = (v2[1]) - (v1[1]);
return ((v3) * (v3)) + ((v4) * (v4));
});
var v2 = (function (v1, v2, v3){
var v4 = v3(2090), v5 = v3(2087), v6 = v3(2085);
(v1.exports) = (function (v1){
return v6(v5(v1, void 0, v4), (v1) + (""));
});
});
function v3(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v2(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v0(v1)) ? (v1(v3)[1]) : (v1(v3)[0]));
}else {
if(v4){
return (v5) + (v1(v3)[1]);
}else {
return (v5) + ((v0(v1)) ? (v1(v3)[1]) : (v1(v3)[2]));
}
}
}
}
var v4 = (function (){
function v4(){
}
(v4.ClearCache) = (function (){
(v1) = [];
});
(v4.Serialize) = (function (v2){
var v3 = ({});
(v3.useDelayedTextureLoading) = v2.useDelayedTextureLoading;
(v3.autoClear) = v2.autoClear;
(v3.clearColor) = v2.clearColor.asArray();
(v3.ambientColor) = v2.ambientColor.asArray();
(v3.gravity) = v2.gravity.asArray();
(v3.collisionsEnabled) = v2.collisionsEnabled;
(v3.workerCollisions) = v2.workerCollisions;
if((v2.fogMode) && ((v2.fogMode) !== (0))){
(v3.fogMode) = v2.fogMode;
(v3.fogColor) = v2.fogColor.asArray();
(v3.fogStart) = v2.fogStart;
(v3.fogEnd) = v2.fogEnd;
(v3.fogDensity) = v2.fogDensity;
}
if(v2.isPhysicsEnabled()){
(v3.physicsEnabled) = true;
(v3.physicsGravity) = v2.getPhysicsEngine().gravity.asArray();
(v3.physicsEngine) = v2.getPhysicsEngine().getPhysicsPluginName();
}
if(v2.metadata){
(v3.metadata) = v2.metadata;
}
(v3.lights) = [];
var v4;
var v5;
for((v4) = 0;(v4) < (v2.lights.length);v4++){
(v5) = v2.lights[v4];
if(! v5.doNotSerialize){
v3.lights.push(v5.serialize());
}
}
(v3.cameras) = [];
for((v4) = 0;(v4) < (v2.cameras.length);v4++){
var v6 = v2.cameras[v4];
if(! v6.doNotSerialize){
v3.cameras.push(v6.serialize());
}
}
if(v2.activeCamera){
(v3.activeCameraID) = v2.activeCamera.id;
}
v7.Animation.AppendSerializedAnimations(v2, v3);
(v3.materials) = [];
(v3.multiMaterials) = [];
var v8;
for((v4) = 0;(v4) < (v2.materials.length);v4++){
(v8) = v2.materials[v4];
if(! v8.doNotSerialize){
v3.materials.push(v8.serialize());
}
}
(v3.multiMaterials) = [];
for((v4) = 0;(v4) < (v2.multiMaterials.length);v4++){
var v9 = v2.multiMaterials[v4];
v3.multiMaterials.push(v9.serialize());
}
(v3.skeletons) = [];
for((v4) = 0;(v4) < (v2.skeletons.length);v4++){
v3.skeletons.push(v2.skeletons[v4].serialize());
}
(v3.geometries) = ({});
(v3.geometries.boxes) = [];
(v3.geometries.spheres) = [];
(v3.geometries.cylinders) = [];
(v3.geometries.toruses) = [];
(v3.geometries.grounds) = [];
(v3.geometries.planes) = [];
(v3.geometries.torusKnots) = [];
(v3.geometries.vertexData) = [];
(v1) = [];
var v10 = v2.getGeometries();
for((v4) = 0;(v4) < (v10.length);v4++){
var v11 = v10[v4];
if(v11.isReady()){
v3(v11, v3.geometries);
}
}
(v3.meshes) = [];
for((v4) = 0;(v4) < (v2.meshes.length);v4++){
var v13 = v2.meshes[v4];
if((v13) instanceof (v7.Mesh)){
var v14 = v13;
if(! v14.doNotSerialize){
if(((v14.delayLoadState) === (v7.Engine.DELAYLOADSTATE_LOADED)) || ((v14.delayLoadState) === (v7.Engine.DELAYLOADSTATE_NONE))){
v3.meshes.push(v2(v14, v3));
}
}
}
}
(v3.particleSystems) = [];
for((v4) = 0;(v4) < (v2.particleSystems.length);v4++){
v3.particleSystems.push(v2.particleSystems[v4].serialize());
}
(v3.lensFlareSystems) = [];
for((v4) = 0;(v4) < (v2.lensFlareSystems.length);v4++){
v3.lensFlareSystems.push(v2.lensFlareSystems[v4].serialize());
}
(v3.shadowGenerators) = [];
for((v4) = 0;(v4) < (v2.lights.length);v4++){
(v5) = v2.lights[v4];
var v16 = v5.getShadowGenerator();
if((v16) && ((v16) instanceof (v7.ShadowGenerator))){
v3.shadowGenerators.push(v16.serialize());
}
}
if(v2.actionManager){
(v3.actions) = v2.actionManager.serialize("scene");
}
(v3.sounds) = [];
for((v4) = 0;(v4) < (v2.soundTracks.length);v4++){
var v17 = v2.soundTracks[v4];
for(var v18 = 0;(v18) < (v17.soundCollection.length);v18++){
v3.sounds.push(v17.soundCollection[v18].serialize());
}
}
return v3;
});
(v4.SerializeMesh) = (function (v19, v20, v21){
if((v20) === (void 0)){
(v20) = false;
}
if((v21) === (void 0)){
(v21) = false;
}
var v3 = ({});
(v19) = ((v19) instanceof (Array)) ? (v19) : ([]);
if((v20) || (v21)){
for(var v23 = 0;(v23) < (v19.length);++v23){
if(v21){
v19[v23].getDescendants().forEach((function (v24){
if(((v24) instanceof (v7.Mesh)) && ((v19.indexOf(v24)) < (0))){
v19.push(v24);
}
}));
}
if(((v20) && (v19[v23].parent)) && ((v19.indexOf(v19[v23].parent)) < (0))){
v19.push(v19[v23].parent);
}
}
}
v19.forEach((function (v14){
v0(v14, v3);
}));
return v3;
});
return v4;
})();
// GenBlkBrick
for(var v0 in v4.prototype){
// GenBlkBrick
while((v0) && (v1)){
var v5 = (function (){
return this.m_angularDamping;
});
}
var v6 = (function (v1, v2, v3){
var v4 = v4(v1, v2);
var v6 = v4(v1, v3);
return v5(v4.min, v4.max, v6.min, v6.max);
});
}
// GenBlkBrick
for((v7) = 0;(v7) < (1e6);v7++){
function v8(v1, v2){
for(var v3 = 0;(v3) < (v2.length);v3++){
var v4 = v1.hasEntity(v2[v3]);
if((! v4) || (! Object.keys(v4.tags).length)){
continue ;
}
var v6 = ({});
for(var v7 in v4.tags){
(v6[v1(v7)]) = v3(v7, v4.tags[v7]);
}
(v1) = v1.replace(v4.update(({tags : v6})));
}
return v1;
}
v4(v3, v1);
}
v6(v0);
