import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', {
  state: () => ({
    filter : [
      {
        title:"버전", 
        data:[
          {name:"1.x", value:1, checked: true},
          {name:"2.x", value:2, checked: true},
          {name:"3.x", value:3, checked: true},
          {name:"4.x", value:4, checked: true},
          {name:"5.x", value:5, checked: true},
          {name:"6.x", value:6, checked: true},
        ]
      },
      {
        title:"보유",
        data:[
          {name:"보유", value:"checked", checked: true},
          {name:"미보유", value:"unchecked", checked: true},
        ]
      }
    ],
    searchText: "",
  }),
  actions: {
    checkFilterData(listIndex:any, dataIndex:any){
      this.filter[listIndex].data[dataIndex].checked = !this.filter[listIndex].data[dataIndex].checked;
    },
    setSearchText(item:any){
      this.searchText = item;
    },
    initFilter(){
      this.filter = [
        {
          title:"버전", 
          data:[
            {name:"1.x", value:1, checked: true},
            {name:"2.x", value:2, checked: true},
            {name:"3.x", value:3, checked: true},
            {name:"4.x", value:4, checked: true},
            {name:"5.x", value:5, checked: true},
            {name:"6.x", value:6, checked: true},
          ]
        },
        {
          title:"보유",
          data:[
            {name:"보유", value:"checked", checked: true},
            {name:"미보유", value:"unchecked", checked: true},
          ]
        }
      ];
      this.searchText = "";
    }
  },
  getters: {
    getFilter(state){
      return state.filter;
    },
    getSearchText(state){
      return state.searchText;
    }
  }
})
