import { defineStore } from 'pinia'
import miniData from "@/data/mini.json";
import rideData from "@/data/ride.json";
import musicData from "@/data/music.json";
import emotionData from "@/data/emotion.json";
import hairData from "@/data/hair.json";
import chocoboData from "@/data/chocobo.json";
import fashionData from "@/data/fashion.json";
import portraitData from "@/data/portrait.json";
import { useCookies } from "vue3-cookies";

export const useDatabaseStore = defineStore('data', {
  state: () => ({
    miniData : miniData,
    miniCount : 0,
    rideData : rideData,
    rideCount : 0,
    musicData : musicData,
    musicCount : 0, 
    emotionData : emotionData,
    emotionCount : 0,
    hairData : hairData,
    hairCount : 0,
    chocoboData : chocoboData,
    chocoboCount : 0,
    fashionData : fashionData,
    fashionCount : 0,
    portraitData : portraitData,
    portraitCount : 0,
  }),
  actions: {
    checkMiniData(value: any){
      this.miniData[value.id -1].check = !this.miniData[value.id -1].check;
      this.miniCount = this.miniData.filter(item => item.check).length;
      this.saveData();
    },
    checkRideData(value: any){
      this.rideData[value.id -1].check = !this.rideData[value.id -1].check;
      this.rideCount = this.rideData.filter(item => item.check).length;
      this.saveData();
    },
    checkMusicData(value: any){
      this.musicData[value.id -1].check = !this.musicData[value.id -1].check;
      this.musicCount = this.musicData.filter(item => item.check).length;
      this.saveData();
    },
    checkEmotionData(value: any){
      this.emotionData[value.id -1].check = !this.emotionData[value.id -1].check;
      this.emotionCount = this.emotionData.filter(item => item.check).length;
      this.saveData();
    },
    checkHairData(value: any){
      this.hairData[value.id -1].check = !this.hairData[value.id -1].check;
      this.hairCount = this.hairData.filter(item => item.check).length;
      this.saveData();
    },
    checkChocoboData(value: any){
      this.chocoboData[value.id -1].check = !this.chocoboData[value.id -1].check;
      this.chocoboCount = this.chocoboData.filter(item => item.check).length;
      this.saveData();
    },
    checkFashionData(value: any){
      this.fashionData[value.id -1].check = !this.fashionData[value.id -1].check;
      this.fashionCount = this.fashionData.filter(item => item.check).length;
      this.saveData();
    },
    checkPortraitData(value: any){
      this.portraitData[value.id -1].check = !this.portraitData[value.id -1].check;
      this.portraitCount = this.portraitData.filter(item => item.check).length;
      this.saveData();
    },
    saveData(){
      const { cookies } = useCookies();

      const miniCheck = this.miniData.filter(item => item.check);
      const rideCheck = this.rideData.filter(item => item.check);
      const musicCheck = this.musicData.filter(item => item.check);
      const emotionCheck = this.emotionData.filter(item => item.check);
      const hairCheck = this.hairData.filter(item => item.check);
      const chocoboCheck = this.chocoboData.filter(item => item.check);
      const fashionCheck = this.fashionData.filter(item => item.check);
      const portraitCheck = this.portraitData.filter(item => item.check);

      const saveData = {
        mini: miniCheck,
        ride: rideCheck,
        music: musicCheck,
        emotion: emotionCheck,
        hair: hairCheck,
        chocobo: chocoboCheck,
        fashion: fashionCheck,
        portrait: portraitCheck
      };

      cookies.set("ff14_collect_data", JSON.stringify(saveData));
    },
    setData(){
      const { cookies } = useCookies();
      const cookieData = cookies.get("ff14_collect_data");
      console.log('cookie data >> ', cookieData);

      if(cookieData !== undefined && cookieData !== null){
        let userData;
        if (typeof cookieData === 'string') {
          try {
            userData = JSON.parse(cookieData);
          } catch (error) {
            console.error("Error parsing user data:", error);
            return;
          }
        } else {
          userData = cookieData;
        }
        
        // 꼬친 넣기
        const miniIds = new Set(userData.mini.map((item: any) => item.id));
        this.miniData.forEach(item => {
          if (miniIds.has(item.id)) {
            item.check = true;
          }
        });
        console.log(this.miniData.filter(item => item.check))
        this.miniCount = this.miniData.filter(item => item.check).length;
        console.log('miniCount >> ',this.miniCount);
  
        // 탈것 넣기
        const rideIds = new Set(userData.ride.map((item: any) => item.id));
        this.rideData.forEach(item => {
          if (rideIds.has(item.id)) {
            item.check = true;
          }
        });
        this.rideCount = this.rideData.filter(item => item.check).length;
  
        // 악보 넣기
        const musicIds = new Set(userData.music.map((item: any) => item.id));
        this.musicData.forEach(item => {
          if (musicIds.has(item.id)) {
            item.check = true;
          }
        });
        this.musicCount = this.musicData.filter(item => item.check).length;
  
        // 감표 넣기
        const emotionIds = new Set(userData.emotion.map((item: any) => item.id));
        this.emotionData.forEach(item => {
          if (emotionIds.has(item.id)) {
            item.check = true;
          }
        });
        this.emotionCount = this.emotionData.filter(item => item.check).length;
  
        // 헤어 넣기
        const hairIds = new Set(userData.hair.map((item: any) => item.id));
        this.hairData.forEach(item => {
          if (hairIds.has(item.id)) {
            item.check = true;
          }
        });
        this.hairCount = this.hairData.filter(item => item.check).length;
  
        // 초코보 갑주 넣기
        const chocoboIds = new Set(userData.chocobo.map((item: any) => item.id));
        this.chocoboData.forEach(item => {
          if (chocoboIds.has(item.id)) {
            item.check = true;
          }
        });
        this.chocoboCount = this.chocoboData.filter(item => item.check).length;
  
        // 패션소품 넣기
        const fashionIds = new Set(userData.fashion.map((item: any) => item.id));
        this.fashionData.forEach(item => {
          if (fashionIds.has(item.id)) {
            item.check = true;
          }
        });
        this.fashionCount = this.fashionData.filter(item => item.check).length;
  
        // 초상화 넣기
        const portraitIds = new Set(userData.portrait.map((item: any) => item.id));
        this.portraitData.forEach(item => {
          if (portraitIds.has(item.id)) {
            item.check = true;
          }
        });
        this.portraitCount = this.portraitData.filter(item => item.check).length;
      }
    }
  },
  getters: {
    getMiniData(state){
      return state.miniData;
    },
    getMiniCount(state){
      return state.miniCount;
    },
    getRideData(state){
      return state.rideData;
    },
    getRideCount(state){
      return state.rideCount;
    },
    getMusicData(state){
      return state.musicData;
    },
    getMusicCount(state){
      return state.musicCount;
    },
    getEmotionData(state){
      return state.emotionData;
    },
    getEmotionCount(state){
      return state.emotionCount;
    },
    getHairData(state){
      return state.hairData;
    },
    getHairCount(state){
      return state.hairCount;
    },
    getChocoboData(state){
      return state.chocoboData;
    },
    getChocoboCount(state){
      return state.chocoboCount;
    },
    getFashionData(state){
      return state.fashionData;
    },
    getFashionCount(state){
      return state.fashionCount;
    },
    getPortraitData(state){
      return state.portraitData;
    },
    getPortraitCount(state){
      return state.portraitCount;
    },
  }
})
