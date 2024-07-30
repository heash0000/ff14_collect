<template>
  <div class="background">
    <div class="container">
      <div class="notice">
        <h2>기재되어있는 회사명 · 제품명 · 시스템 이름은 해당 소유자의 상표 또는 등록 상표입니다.</h2>  
        <h2>© 2010 - 2024 SQUARE ENIX CO., LTD. All Rights Reserved. Published in Korea by ACTOZ SOFT CO., LTD.</h2>     
        <h2>수정/오류 문의는 해당 폼을 이용해주시기 바랍니다.</h2> 
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  components: {
    // NavBar
  },
  setup() {
    
    return {

    };
  },
});
</script>
<style scoped>
.background{
  padding: 3em 0 3.5em 0;
  background-color: var(--point-color1);
  margin-top: 2em;
  /* height: calc(100vh - 60px - 4em - 30vh - 6em - 2em -); */
  /* margin-bottom: 2em; */
}
.notice h2{
  color: white;
  text-align: left;
  font-size: 0.8em;
  line-height: 2em;
}

</style>