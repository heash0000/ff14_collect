<template>
  <div>
    <CategoryTab/>
    <DataViewTable
      :data="chocoboData"
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
    const chocoboData = computed(() => databaseStore.getChocoboData);

    function checkList(list:any) {
      databaseStore.checkChocoboData(list);
    }

    return {
      chocoboData,
      checkList
    };
  },
});
</script>
<style scoped>
</style>