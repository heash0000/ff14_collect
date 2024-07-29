<template>
  <div>
    <CategoryTab/>
    <DataViewTable
      :data="fashionData"
      @checkList="checkList"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useDatabaseStore } from '@/store/totalData';
import DataViewTable from '@/form/DataViewTable.vue';
import CategoryTab from '@/form/CategoryTab.vue';

export default defineComponent({
  components: {
    DataViewTable,
    CategoryTab
  },
  setup() {
    const databaseStore = useDatabaseStore();
    const fashionData = computed(() => databaseStore.getFashionData);

    function checkList(list:any) {
      databaseStore.checkFashionData(list);
    }

    return {
      fashionData,
      checkList
    };
  },
});
</script>
<style scoped>
</style>