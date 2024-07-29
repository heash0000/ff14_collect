<template>
  <div class="container">
    <div class="category-list" v-for="(category, index) in filterData" :key="index">
      <div class="category-title">
        <h2>{{ category.title }}</h2>
      </div>
      <div class="category-data">
        <div class="category-data-box" v-for="(data, i) in category.data" :key="i" :class="{active:data.checked}" @click="checkCategory(index, i)">
          <h3>{{ data.name }}</h3>
        </div>
      </div>
    </div>
    <div class="search-area">
      <h2>검색</h2>
      <input placeholder="검색어를 입력하세요." v-model="searchText" @input="inputSearch">
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useFilterStore } from '@/store/filterData';

export default defineComponent({
  components: {
    // NavBar
  },
  setup() {
    const filterStore = useFilterStore();
    const filterData = computed(() => filterStore.getFilter);
    const searchText = ref<any>("");

    function checkCategory(listIndex:any, dataIndex:any){
      filterStore.checkFilterData(listIndex, dataIndex);
    }

    function inputSearch(){
      filterStore.setSearchText(searchText.value);
    }
    
    return {
      filterData,
      checkCategory,
      searchText,
      inputSearch
    };
  },
});
</script>
<style scoped>
.container{
  margin-top: 1em;
  padding-left: 1em;
}
.category-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 0.5em;
}
.category-data{
  display: flex;
  align-items: center;
}

.category-data-box{
  padding: 0 0.5em;
  /* width: 3em; */
  background-color: var(--point-color4);
  margin-right: 0.5em;
  border-radius: 0.3em;
  border: 1px solid transparent;
  cursor: pointer;
}
.category-data-box h3{
  color: var(--gray);
}
.category-data-box.active{
  border: 1px solid var(--point-color3);
}
.category-data-box.active h3{
  color: black;
}
.search-area{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 0.5em;
}
.search-area input{
  border: none;
  width: 20em;
  background-color: var(--point-color4);
  border-bottom: 1px solid var(--point-color1);
  border-top-left-radius: 0.3em;
  border-top-right-radius: 0.3em;
  text-align: left;
  padding: 0.2em 0.5em;
}
.search-area input::placeholder{
  color: var(--gray);
}
.search-area input:focus{
  outline: none;
}
</style>