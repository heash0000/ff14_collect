<template>
  <div>
    <CategoryTab/>
    <DataViewTable
      :data="musicData"
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
    const musicData = computed(() => databaseStore.getMusicData);

    function checkList(list:any) {
      databaseStore.checkMusicData(list);
    }

    return {
      musicData,
      checkList
    };
  },
});
</script>
<style scoped>
</style>