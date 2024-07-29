<template>
  <div class="main-area container">
    <div class="total-area">
      <div class="total-target" v-for="(data, index) in totalData" :key="index">
        <div class="total-title">
          <!-- <h2>{{ data.title }}</h2> -->
          <div class="svg-area" v-if="data.type === 'mini'">
          
          </div>
          <div class="svg-area" v-if="data.type === 'ride'">
            
          </div>
          <div class="svg-area" v-if="data.type === 'music'">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100" height="100" viewBox="0 0 120 120" style="enable-background:new 0 0 100 100;" xml:space="preserve">
              <g transform="translate(10,10)">
                <path d="M74.5,18C65,4.7,50.8,2.8,50.2,2.7c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0  c-1.1,0.1-2,1-2,2.2v66.7c-4.3-3.6-11.2-4.7-17.8-2.3c-9.1,3.3-14.4,12-11.7,19.4C21,96.1,30.5,99.4,39.7,96c7-2.5,11.7-8.2,12.3-14  c0.1-0.2,0.1-0.4,0.1-0.6V15.6c13.6,4.7,21.8,13.8,24.4,27.2c1.4,6.9,0.9,13.3,0.3,17.1c-0.2,1.2-0.4,2.4-0.7,3.6  c-0.2,1.2,0.5,2.3,1.6,2.6c0.2,0,0.3,0.1,0.5,0.1c1,0,1.8-0.6,2.1-1.6c0-0.2,0.5-1.8,0.8-4.4C84.1,42.5,81.9,28.3,74.5,18z"/>
              </g>
            </svg>
          </div>
          <div class="svg-area" v-if="data.type === 'emotion'">
            
          </div>
          <div class="svg-area" v-if="data.type === 'hair'">
            
          </div>
          <div class="svg-area" v-if="data.type === 'chocobo'">
          
          </div>
          <div class="svg-area" v-if="data.type === 'fashion'">
            <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
              <g transform="translate(0,-950)">
                <path style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:#000000;enable-background:accumulate;" d="m 42.419038,965.3622 c -12.738,0 -25.9125,10.30454 -35.0173999,17.38877 -0.3969,0.29268 -0.522,0.89694 -0.2741,1.3233 0.248,0.42636 0.835,0.61613 1.2855,0.41558 6.8356999,-1.32559 12.9454999,4.57688 15.9283999,9.67448 0.2042,0.37071 0.6589,0.58479 1.0746,0.50586 9.1019,-1.71928 15.6391,3.21083 21.5223,8.97891 l -8.7859,20.3607 c -0.7529,0.09 -1.4315,0.641 -1.675,1.3595 l -4.0453,11.1288 c -0.4736,1.0166 0.096,2.3814 1.1512,2.7597 1.0554,0.3784 2.3616,-0.3141 2.6413,-1.4002 l 4.0453,-11.1288 c 0.2362,-0.6355 0.1252,-1.3885 -0.2845,-1.9286 l 9.102,-21.1511 c 9.0127,-0.6477 14.6269,1.4271 25.0936,9.0422 0.3503,0.2693 0.8823,0.2693 1.2326,0 4.6329,-3.7077 10.9756,-2.8789 15.7704,2.877 0.272,0.3589 0.7999,0.4962 1.2122,0.3153 0.4124,-0.1809 0.669,-0.6624 0.5893,-1.1057 -2.0163,-13.1103 -4.0573,-27.5956 -15.4544,-36.99063 -1.6646,-1.38192 -3.5991,-2.10717 -5.0882,-2.84544 -2.101,-1.05089 -4.8431,-2.63877 -8.5015,-5.7541 l 0.6321,-1.42272 c 0.2124,-0.47288 -0.059,-1.057 -0.4977,-1.30522 -0.5071,-0.2327 -1.0769,0.14044 -1.3354,0.51482 l -0.6005,1.42272 c -4.6566,-0.0496 -7.7088,-0.75949 -10.4926,-1.48595 -2.8868,-0.75336 -5.5442,-1.54918 -9.2283,-1.54918 z" fill="#000000" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/>
              </g>
            </svg>
          </div>
          <div class="svg-area" v-if="data.type === 'portrait'">
          
          </div>
        </div>
        <div class="total-percent">
          <div class="count-area">
            <h2>{{data.count}}/{{ data.allCount }}</h2>
          </div>
          <div class="percent-area">
            <h3>{{roundToTwoDecimalPlaces((data.count / data.allCount)*100)}}%</h3>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useDatabaseStore } from '@/store/totalData';

export default defineComponent({
  components: {
    // NavBar
  },
  setup() {
    const databaseStore = useDatabaseStore();

    let totalData = [
      {title:"꼬마친구", allCount: computed(() => databaseStore.getMiniData).value.length, count: computed(() => databaseStore.getMiniCount).value, icon:"", color:"#d1e3ff", type:"mini"},
      {title:"탈것", allCount: computed(() => databaseStore.getRideData).value.length, count: computed(() => databaseStore.getRideCount).value, icon:"", color:"#d1e3ff", type:"ride"},
      {title:"악보", allCount: computed(() => databaseStore.getMusicData).value.length, count: computed(() => databaseStore.getMusicCount).value, icon:"", color:"#d1e3ff", type:"music"},
      {title:"감정표현", allCount: computed(() => databaseStore.getEmotionData).value.length, count: computed(() => databaseStore.getEmotionCount).value, icon:"", color:"#d1e3ff", type:"emotion"},
      {title:"헤어", allCount: computed(() => databaseStore.getHairData).value.length, count: computed(() => databaseStore.getHairCount).value, icon:"", color:"#d1e3ff", type:"hair"},
      {title:"초코보 갑주", allCount: computed(() => databaseStore.getChocoboData).value.length, count: computed(() => databaseStore.getChocoboCount).value, icon:"", color:"#d1e3ff", type:"chocobo"},
      {title:"패션 소품", allCount: computed(() => databaseStore.getFashionData).value.length, count: computed(() => databaseStore.getFashionCount).value, icon:"", color:"#d1e3ff", type:"fashion"},
      {title:"초상화", allCount: computed(() => databaseStore.getPortraitData).value.length, count: computed(() => databaseStore.getPortraitCount).value, icon:"", color:"#d1e3ff", type:"portrait"},
    ];

    function roundToTwoDecimalPlaces(num:any) {
      // console.log('num >> ', num);
      // 숫자를 소수 둘째자리에서 반올림
      const roundedNum = Math.round(num * 100) / 100;
      
      // 소수점이 없는 경우 그대로 반환
      if (Number.isInteger(roundedNum)) {
          return roundedNum.toString();
      }
      
      // 소수점 한자리만 있는 경우
      const roundedStr = roundedNum.toString();
      if (roundedStr.split('.')[1].length === 1) {
          return roundedStr;
      }

      // 소수점 둘째자리까지 표시
      return roundedNum.toFixed(2);
    }

    onMounted(() => {
      databaseStore.setData();
    })
    
    return {
      totalData,
      roundToTwoDecimalPlaces
    };
  },
});
</script>
<style scoped>
.main-area{
  display: flex;
  flex-wrap: wrap;
  padding: 2em 0;
}
.total-area{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 20%);
  justify-content: space-evenly;
  padding: 4em 0;
}
.total-target{
  /* border: 1px solid black; */
  margin: 3em 0;
  display: flex;
}
.total-title{
  padding: 1em 0.25em;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5em;
  background-color: var(--point-color4);
  /* height: 2em; */
}
.total-title h2{
  font-weight: 500;
  font-size: 1.4em;
}
.total-percent{
  display: flex;
  width: 50%;
  align-items: center;
  padding: 3em 0.5em;
  flex-direction: column;
  justify-content: center;
}
.total-percent > div{
  width: 50%;
}
.count-area h2{
  font-size: 1.2em;
}
.percent-area h3{
  font-size: 1.8em;
  font-weight: 700;
}
.svg-area{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.svg-area svg{
  width: 90%;
  /* height: 90%; */
}
.svg-area svg path {
  fill: var(--point-color1);
  transition: .3s;
}
</style>