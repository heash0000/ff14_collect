<template>
  <div class="container">
    <div class="total-counter">
      <h2>총 {{ showData.length }}개의 검색 결과</h2>
    </div>
    <div class="table-header">
      <div class="header-box check-area">
        <h2>보유</h2>
      </div>
      <!-- <div class="header-box img-area">
        <h2>이미지</h2>
      </div> -->
      <div class="header-box type-area" v-if="pathName == 'music'">
        <h2>구분</h2>
      </div>
      <div class="header-box name-area">
        <h2>이름</h2>
      </div>
      <div class="header-box obtain-area">
        <h2>획득처</h2>
      </div>
      <div class="header-box change-area">
        <h2>거래</h2>
      </div>
      <div class="header-box version-area">
        <h2>버전</h2>
      </div>
    </div>
    <div class="table-container" >
      <div class="table-list " v-for="(list, index) in showData" :key="index" :class="{active: list.check}">
        <div class="header-box check-area">
          <div class="check-box"  @click="checkList(list)">
            <img src="@/assets/check-icon.svg">
          </div>
        </div>
        <!-- <div class="header-box img-area">
          <h2>{{ list.id }}</h2>
        </div> -->
        <div class="header-box type-area" v-if="pathName == 'music'">
          <h2>{{ list.type }}</h2>
        </div>
        <div class="header-box name-area">
          <!-- <h2>{{ list.name }}</h2> -->
          <h2 v-html="list.highlightedName"></h2>
        </div>
        <div class="header-box obtain-area">
          <!-- <h2>{{ list.obtain }}</h2> -->
          <h2 v-html="list.highlightedObtain"></h2>
        </div>
        <div class="header-box change-area">
          <h2>{{ list.change? "O":"X" }}</h2>
        </div>
        <div class="header-box version-area">
          <h2>{{ list.version }}</h2>
        </div>
      </div>
    </div>
  </div>
  <button
    v-if="showButton"
    @click="scrollToTop"
    class="back-to-top"
  >
    ↑ Top
  </button>
</template>
<script lang="ts">
import { defineComponent, computed, watch, onMounted, ref, onBeforeUnmount } from 'vue';
import { useFilterStore } from '@/store/filterData';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    // NavBar
  },
  props:{
    data:{
      type: Array,
      required: true
    }
  },
  emits:['checkList'],
  setup(props, {emit}) {
    const filterStore = useFilterStore();
    const searchText = computed(() => filterStore.getSearchText);
    const router = useRouter();
    const pathName = router.currentRoute.value.name;

    const flattenedCheckedValues = computed(() => {
      return filterStore.filter.flatMap((filterItem) => 
        filterItem.data.map((dataItem) => dataItem.checked)
      );
    });

    watch(
      flattenedCheckedValues,
      (newValues, oldValues) => {
        filterShowData();
      },
      { deep: true }
    );

    watch(() => searchText.value, () => {
      filterShowData();
    })

    const showData = ref<any>([]);
    const showButton = ref(false);

    function checkList(list:any){
      emit('checkList', list);
      // list.check = !list.check;
    }

    function filterShowData() {
      const filterData = computed(() => filterStore.getFilter);
      showData.value = [];

      props.data.forEach((element : any) => {
        let versionFlag = false;
        let checkFlag = false;
        let searchFlag = false;

        // Version filtering
        filterData.value[0].data.forEach((version) => {
          if (version.checked && element.version.toString().indexOf(version.value.toString()) === 0) {
            versionFlag = true;
          }
        });

        // Check filtering
        filterData.value[1].data.forEach((check) => {
          if (check.checked && ((check.value === 'checked' && element.check) || (check.value === 'unchecked' && !element.check))) {
            checkFlag = true;
          }
        });

        // Search text filtering
        if (!searchText.value || element.name.includes(searchText.value) || element.obtain.includes(searchText.value)) {
          searchFlag = true;
          // 강조 표시할 텍스트 처리
          element.highlightedName = highlightText(element.name, searchText.value);
          element.highlightedObtain = highlightText(element.obtain, searchText.value);
        }

        // Add element if all conditions are met
        if (versionFlag && checkFlag && searchFlag) {
          showData.value.push(element);
        }
      });

    }

    // 텍스트 강조 함수
    function highlightText(text: string, searchText: string): string {
      if (!searchText) return text;
      const regex = new RegExp(`(${searchText})`, 'gi');
      return text.replace(regex, '<mark>$1</mark>');
    }

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      // 스크롤 위치가 300px 이상일 때 버튼을 표시
      showButton.value = window.scrollY > 300;
    };

    // 최상단으로 스크롤하는 함수
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 컴포넌트가 마운트되었을 때 스크롤 이벤트 리스너 추가
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      filterShowData();
    });

    // 컴포넌트가 언마운트되었을 때 스크롤 이벤트 리스너 제거
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });
    
    return {
      checkList,
      showData,
      showButton,
      scrollToTop,
      pathName,
    };
  },
});
</script>
<style scoped>
.total-counter{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1em;
}
.total-counter h2{
  color: var(--point-color1);
  font-size: 1em;
}
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--point-color1);
  padding: 0.5em 0;
}
.table-header h2{
  color: white;
  font-size: 1em;
}
.table-header > div, .table-list > div {
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
}
.check-area{
  width: 5%;
}
.img-area{
  width: 8%;
}
.type-area{
  width: 7%;
}
.name-area{
  width: 20%;
}
.obtain-area{
  width: 50%;
}
.change-area{
  width: 5%;
}
.version-area{
  width: 5%;
}

.table-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--point-color3);
  height: 2.5em;
  transition: .3s;
}
.table-list h2{
  font-size: 0.9em;
}
.table-list:hover{
  background-color: var(--point-color4);
}
.check-box{
  width: 1.5em;
  height: 1.5em;
  border: 1px solid var(--point-color2);
  border-radius: 0.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.check-box img{
  display: none;
  width: 60%;
  height: 60%;
}
.active .check-box{
  background-color: var(--point-color2);
}
.active .check-box img{
  display: block;
}
.active .header-box{
  opacity: 0.4;
}
.active:hover{
  background-color: var(--point-color4-op);
}
.active h2 {
  /* color: var(--gray); */
  text-decoration-line: line-through;
}
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: inline-block;
  background-color: var(--point-color2);
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

</style>
<style>
mark{
  background-color: var(--point-color3);
  color: black;
}
</style>