<template>
  <div>
    <CategoryTab/>
    <DataViewTable
      :data="hairData"
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
    const hairData = computed(() => databaseStore.getHairData);

    function checkList(list:any) {
      databaseStore.checkHairData(list);
    }

    return {
      hairData,
      checkList
    };
  },
});
</script>
<style scoped>
</style>