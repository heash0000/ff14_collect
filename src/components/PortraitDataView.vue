<template>
  <div>
    <CategoryTab/>
    <DataViewTable
      :data="portraitData"
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
    const portraitData = computed(() => databaseStore.getPortraitData);

    function checkList(list:any) {
      databaseStore.checkPortraitData(list);
    }

    return {
      portraitData,
      checkList
    };
  },
});
</script>
<style scoped>
</style>