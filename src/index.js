import {
  Viewer,
  Cartesian3,
  Math,
  Terrain,
  Model,
  createOsmBuildingsAsync,
  Cesium3DTileset,
  HeadingPitchRoll,
  Transforms,
  Ion,
  IonResource
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./css/main.css";


const viewer = new Viewer("cesiumContainer", {
  terrain: Terrain.fromWorldTerrain(),
});



try {

  let resource0 = await Cesium3DTileset.fromUrl("https://mjd-tokan/mjd-taitou/cesiumStatic/Assets/3Dtiles/CesiumION_bldg_1/bldg/tileset.json");

  viewer.scene.primitives.add(resource0);
  viewer.flyTo(resource0);
  resource0.show = true;

  //let resource1 = await Cesium3DTileset.fromIonAssetId("https://mjd-tokan/mjd-taitou/cesiumStatic/Assets/3Dtiles/CesiumION_brig/13106_taito-ku_pref_2023_citygml_1_op_brid_3dtiles_lod2/tileset.json");

  //viewer.scene.primitives.add(resource1);
  //resource1.show = true;

  //let resource2 = await Cesium3DTileset.fromIonAssetId("https://mjd-tokan/mjd-taitou/cesiumStatic/Assets/3Dtiles/CesiumION_plan/tileset.json");

  //viewer.scene.primitives.add(resource2);
  //resource2.show = true;




} catch (error) {
  console.log(`Error loading tileset: ${error}`);
} 

