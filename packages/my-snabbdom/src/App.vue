<script setup>
// import { RouterLink, RouterView } from "vue-router";
import { getUser } from "@xy/apis";
import Button from "@xy/components";
import { onMounted, reactive } from "vue";

const tk = "0d4c365964be4c290a7d70c198f42e0b";
const wmtsSourceMapUrl = `https://t{0-6}.tianditu.gov.cn/img_c/wmts?tk=${tk}`;
// const xyzSourceMapUrl = `https://t{0-6}.tianditu.gov.cn/vec_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${tk}`
const xyzSourceMapUrl = `http://106.52.119.53:28081/PGIS_S_TileMapServer/Maps/tdtWMTSSL/EzMap?Service=getImage&Type=RGB&ZoomOffset=0&Col={x}&Row={y}&Zoom={z}&V=0.3&key=`
// //'https://t{0-6}.tianditu.gov.cn/DataServer?T=vec_w&tk=0d4c365964be4c290a7d70c198f42e0b&x={x}&y={y}&l={z}'
function loadMap() {
  let map = new icui_ol.TdtMap({
    mapUrl: xyzSourceMapUrl,
    sourceType: icui_ol.MapConstants.MAP_SOURCE_XYZ,
    projection: 'EPSG:4326',
    containerId: "map",
    zoomLevel: 4
  });
  map.init();
  map.show();
  console.log("=====", map);
}


const list = reactive([3,5,1,7,9,2,4,7,12,2]);
const templist = reactive([]);

// 冒泡正序
function bubbleSort() {
  for (let i = 0; i < list.length; i++) {
    for(let j = list.length - 1; j >= i; j--) {
      if(list[j - 1] > list[j]) {
        let temp = list[j - 1];
        list[j-1] = list[j];
        list[j] = temp;
      }
    }
  }
}

// 插入排序倒序
function insertSort() {
  for (let i = 0; i < list.length; i++) {
    if(templist.length == 0) {
      templist.push(list[i]);
      continue;
    }
    let j = 0;
    for (; j < templist.length; j++) {
      if(list[i] >= templist[j]) {
        templist.splice(j, 0, list[i]);
        break;
      }
    }
    if(j == templist.length) templist.push(list[i]);
  }
}


onMounted(() => {
  loadMap();
}) 
</script>

<template>
  <div>
    <ul>
      <li v-for="el in list">{{ el }}</li>
    </ul>
    <button type="button" @click="bubbleSort">冒泡排序</button>
    <ul>
      <li v-for="el in templist">{{ el }}</li>
    </ul>
    <button type="button" @click="insertSort">插入排序</button>
    <div>MonoRepos测试</div>
    <div id="map" style="height: 300px; width: 300px"></div>
  </div>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
