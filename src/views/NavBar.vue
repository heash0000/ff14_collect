<template>
  <div class="nav-area container">
    <div class="home-btn" @click="goPage('home')">
      <h1>HOME</h1>
    </div>
    <div class="router-area">
      <div class="router-btn" v-for="(list, index) in menu" :key="index" @click="goPage(list.type)" :class="{active:router.currentRoute.value.name == list.type}" :title="list.title">
        <h2>{{ list.title }}</h2>
        <div class="svg-area" v-if="list.type === 'mini'">
          
        </div>
        <div class="svg-area" v-if="list.type === 'ride'">
          
        </div>
        <div class="svg-area" v-if="list.type === 'music'">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100" height="100" viewBox="0 0 120 120" style="enable-background:new 0 0 100 100;" xml:space="preserve">
            <g transform="translate(10,10)">
              <path d="M74.5,18C65,4.7,50.8,2.8,50.2,2.7c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0  c-1.1,0.1-2,1-2,2.2v66.7c-4.3-3.6-11.2-4.7-17.8-2.3c-9.1,3.3-14.4,12-11.7,19.4C21,96.1,30.5,99.4,39.7,96c7-2.5,11.7-8.2,12.3-14  c0.1-0.2,0.1-0.4,0.1-0.6V15.6c13.6,4.7,21.8,13.8,24.4,27.2c1.4,6.9,0.9,13.3,0.3,17.1c-0.2,1.2-0.4,2.4-0.7,3.6  c-0.2,1.2,0.5,2.3,1.6,2.6c0.2,0,0.3,0.1,0.5,0.1c1,0,1.8-0.6,2.1-1.6c0-0.2,0.5-1.8,0.8-4.4C84.1,42.5,81.9,28.3,74.5,18z"/>
            </g>
          </svg>
        </div>
        <div class="svg-area" v-if="list.type === 'emotion'">
          
        </div>
        <div class="svg-area" v-if="list.type === 'hair'">
          
        </div>
        <div class="svg-area" v-if="list.type === 'chocobo'">
        
        </div>
        <div class="svg-area" v-if="list.type === 'fashion'">
          <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
            <g transform="translate(0,-950)">
              <path style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:#000000;enable-background:accumulate;" d="m 42.419038,965.3622 c -12.738,0 -25.9125,10.30454 -35.0173999,17.38877 -0.3969,0.29268 -0.522,0.89694 -0.2741,1.3233 0.248,0.42636 0.835,0.61613 1.2855,0.41558 6.8356999,-1.32559 12.9454999,4.57688 15.9283999,9.67448 0.2042,0.37071 0.6589,0.58479 1.0746,0.50586 9.1019,-1.71928 15.6391,3.21083 21.5223,8.97891 l -8.7859,20.3607 c -0.7529,0.09 -1.4315,0.641 -1.675,1.3595 l -4.0453,11.1288 c -0.4736,1.0166 0.096,2.3814 1.1512,2.7597 1.0554,0.3784 2.3616,-0.3141 2.6413,-1.4002 l 4.0453,-11.1288 c 0.2362,-0.6355 0.1252,-1.3885 -0.2845,-1.9286 l 9.102,-21.1511 c 9.0127,-0.6477 14.6269,1.4271 25.0936,9.0422 0.3503,0.2693 0.8823,0.2693 1.2326,0 4.6329,-3.7077 10.9756,-2.8789 15.7704,2.877 0.272,0.3589 0.7999,0.4962 1.2122,0.3153 0.4124,-0.1809 0.669,-0.6624 0.5893,-1.1057 -2.0163,-13.1103 -4.0573,-27.5956 -15.4544,-36.99063 -1.6646,-1.38192 -3.5991,-2.10717 -5.0882,-2.84544 -2.101,-1.05089 -4.8431,-2.63877 -8.5015,-5.7541 l 0.6321,-1.42272 c 0.2124,-0.47288 -0.059,-1.057 -0.4977,-1.30522 -0.5071,-0.2327 -1.0769,0.14044 -1.3354,0.51482 l -0.6005,1.42272 c -4.6566,-0.0496 -7.7088,-0.75949 -10.4926,-1.48595 -2.8868,-0.75336 -5.5442,-1.54918 -9.2283,-1.54918 z" fill="#000000" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/>
            </g>
          </svg>
        </div>
        <div class="svg-area" v-if="list.type === 'portrait'">
          
        </div>
      </div>
    </div>
    <div class="setting-area">
      <div class="setting-icon" @click="showSetting=!showSetting">
        <div class="svg-area">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
            <path d="m88.988 56.559v-13.281l-7.8906-1.0898-3.8516-8.8906 4.75-6.3281-9.1992-9.7305-6.9102 5.1016-8.4609-3.5898-1.4102-8.75h-12.031l-1.4102 8.75-8.4609 3.5898-6.9102-5.1016-9.1992 9.7305 4.75 6.3281-3.8516 8.8906-7.8906 1.0898v13.281l8.1992 1.3281 3.4414 9.1406-4.5312 6.6406 9.4492 9.2188 6.4805-4.7695 8.6719 3.9102 1.0195 7.9688h12.5l1.0195-7.9688 8.6719-3.9102 6.4805 4.7695 9.4492-9.2188-4.5312-6.6406 3.4414-9.1406 8.1992-1.3281zm-38.988 11.57c-10 0-18.129-8.1289-18.129-18.129s8.1289-18.129 18.129-18.129 18.129 8.1289 18.129 18.129-8.1289 18.129-18.129 18.129z"/>
            <path d="m63.559 50c0 7.4883-6.0703 13.559-13.559 13.559s-13.559-6.0703-13.559-13.559 6.0703-13.559 13.559-13.559 13.559 6.0703 13.559 13.559"/>
          </svg>
        </div>
      </div>
      <div class="setting-box" :class="{show:showSetting}">
        <div class="setting-btn import-data">
          <div class="svg-area">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100" x="0px" y="0px">
              <path d="M18.14,65h6.27a1,1,0,0,1,1,1V75H74.57V66a1,1,0,0,1,1-1h6.27a1,1,0,0,1,1,1V82.26a1,1,0,0,1-1,1H18.14a1,1,0,0,1-1-1V66A1,1,0,0,1,18.14,65Z"/>
              <rect x="38.98" y="60.6" width="22.05" height="7.72" rx="1.19"/>
              <path d="M36.56,30.88,48,17.52a3,3,0,0,1,4.08,0l11.4,13.36,11.4,13.35c.9,1.07-.23,2.4-2,2.4h-12v11a1,1,0,0,1-1,1h-20a1,1,0,0,1-1-1v-11H27.21c-1.82,0-2.95-1.33-2-2.4Z"/>
            </svg>
          </div>
          <h3>데이터 업로드</h3>
          <!-- <div class="tooltip">
            <h4>데이터 파일을 이용해 저장된 값을 불러옵니다.</h4>
          </div> -->
        </div>
        <div class="setting-btn export-data">
          <div class="svg-area">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100" x="0px" y="0px">
              <path d="M81.16,65H75a1,1,0,0,0-1,1v8.72H26V66a1,1,0,0,0-1-1H18.84a1,1,0,0,0-1,1V81.83a1,1,0,0,0,1,1H81.16a1,1,0,0,0,1-1V66A1,1,0,0,0,81.16,65Z"/>
              <rect x="39.22" y="17.17" width="21.57" height="7.55" rx="1.16"/>
              <path d="M36.86,53.8,48,66.86a3,3,0,0,0,4,0L63.15,53.8,74.29,40.73c.89-1-.22-2.34-2-2.34H60.61V27.6a1,1,0,0,0-1-1H40.05a1,1,0,0,0-1,1V38.39H27.71c-1.78,0-2.89,1.3-2,2.34Z"/>
            </svg>
          </div>
          <h3>데이터 다운로드</h3>
          <!-- <div class="tooltip">
            <h4>현재 웹에 설정한 정보를 저장합니다.</h4>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useFilterStore } from '@/store/filterData';

export default defineComponent({
  components: {
    // NavBar
  },
  setup() {
    const router = useRouter();
    const filterStore = useFilterStore();
    const showSetting = ref<any>(false);

    const menu = [
      {title:"꼬마친구", type:"mini"},
      {title:"탈것", type:"ride"},
      {title:"악보", type:"music"},
      {title:"감정표현", type:"emotion"},
      {title:"헤어", type:"hair"},
      {title:"초코보 갑주", type:"chocobo"},
      {title:"패션 소품", type:"fashion"},
      {title:"초상화", type:"portrait"},
    ];

    function goPage(type:string) {
      filterStore.initFilter();
      router.push({'name':type});
    }

    return {
      menu,
      goPage,
      router,
      showSetting
    };
  },
});
</script>
<style scoped>
.nav-area{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  border-bottom: 1px solid black;
}
.home-btn{
  padding: 0 2em;
  display: flex;
  text-align: center;
  align-items: center;
  cursor: pointer;
}
.router-area{
  display: flex;
  align-items: center;
}
.router-btn{
  margin: 0 0.5em;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  /* padding: 0.5em 1em; */
  cursor: pointer;
  /* font-weight: bold; */
  transition: .3s;
}
.router-btn h2{
  font-size: 1.1em;
}
.router-btn:hover h2{
  
}
.router-btn:hover{
   /* background-color: var(--point-color4); */
}
.router-btn.active{
  background-color: var(--point-color1);
  color: white;
  font-weight: bold;
}
.svg-area{
  display: flex;
  align-items: center;
  justify-content: center;
}
.svg-area svg{
  width: 3em;
  height: 3em;
}
.svg-area svg path {
  fill: var(--point-color1);
  transition: .3s;
}
.router-btn:hover .svg-area svg path{
  fill: var(--point-color2);
}
.setting-area{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
}
.setting-icon{
  cursor: pointer;
}

.setting-icon:hover .svg-area svg path{
  fill: var(--point-color2);
}
.setting-box{
  position: absolute;
  background-color: white;
  border: 1px solid black;
  bottom: calc(-4em - 0.8em - 1.4em);
  right: 0;
  height: calc(4em + 0.8em + 1.4em);
  padding: 0.4em;
  border-radius: 0.1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  transition: .3s;
}
.setting-box.show{
  opacity: 1;
}
.setting-btn{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid var(--point-color1);
  padding: 0.2em;
  border-radius: 0.2em;
  /* width: 9em; */
  justify-content: space-around;
  /* margin-bottom: 0.2em; */
}
.setting-btn h3{
  font-size: 0.8em;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  width: 8em;
  text-align: center;
}
.setting-btn .svg-area{
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.setting-btn .svg-area svg{
  width: 100%;
  height: 100%;
}
.tooltip{
  position: absolute;
  bottom: -1.5em;
  right: 0;
  background-color: white;
  z-index: 1;
  border: 1px solid var(--point-color1);
  padding: 0.2em;
  opacity: 0;
  /* transition: .3s; */
}
.tooltip h4{
  font-size: 0.7em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}
.import-data:hover .tooltip, .export-data:hover .tooltip{
  opacity: 1;
}

</style>
