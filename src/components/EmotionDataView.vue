<template>
  <div>
    <CategoryTab/>
    <DataViewTable
      :data="emotionData"
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
    const emotionData = computed(() => databaseStore.getEmotionData);

    function checkList(list:any) {
      databaseStore.checkEmotionData(list);
    }

    return {
      emotionData,
      checkList
    };
  },
});
</script>
<style scoped>
</style>