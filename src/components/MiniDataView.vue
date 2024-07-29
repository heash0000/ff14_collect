<template>
  <div>
    <CategoryTab/>
    <DataViewTable
      :data="miniData"
      @checkList="checkList"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
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
    const miniData = computed(() => databaseStore.getMiniData);

    function checkList(list:any) {
      databaseStore.checkMiniData(list);
    }

    onMounted(() => {
      databaseStore.setData();
    })

    return {
      miniData,
      checkList
    };
  },
});
</script>
<style scoped>
</style>