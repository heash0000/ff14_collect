<template>
  <div>
    <CategoryTab/>
    <DataViewTable
      :data="rideData"
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
    const rideData = computed(() => databaseStore.getRideData);

    function checkList(list:any) {
      databaseStore.checkRideData(list);
    }

    return {
      rideData,
      checkList
    };
  },
});
</script>
<style scoped>
</style>