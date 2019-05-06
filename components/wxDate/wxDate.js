import { getshowDate } from './utils/getDate.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list: getshowDate(),
    selectDate: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getNextDate(){
      let list = getshowDate(this.data.list.year,this.data.list.month+1);
      this.setData({
        list: list
      })
    },
    getPrevDate() {
      let list = getshowDate(this.data.list.month - 1 == 0 ? this.data.list.year-1 : this.data.list.year, this.data.list.month - 1 == 0 ? 12 : this.data.list.month - 1);
      this.setData({
        list: list
      })
    },
    getNextYear(){
      let list = getshowDate(this.data.list.year+1, this.data.list.month);
      this.setData({
        list: list
      })
    },
    getPrevYear(){
      let list = getshowDate(this.data.list.year - 1, this.data.list.month);
      this.setData({
        list: list
      })
    },
    getDateValue(e){
      // console.log(e);
      let value = e.currentTarget.dataset.value;
      let clicked = e.currentTarget.dataset.disable;
      if(!clicked){
        return false;
      }
      
      let year = this.data.list.year;
      let month = this.data.list.month;

      let date = year + "-" + (month > 9 ? month : "0"+month) +"-"+(value > 9 ? value : "0"+value);
      if (this.checkSelecData(date)){
        this.triggerEvent('clickGetDateArr', { date: this.data.selectDate });
        return false;
      }


      let selectDate = this.data.selectDate;
      selectDate.push(date);
      this.setData({
        selectDate: selectDate
      })
      this.triggerEvent('clickGetDateArr', { date: this.data.selectDate });
      // console.log(this.data.selectDate);
    },
    checkSelecData(item){
      let arr = this.data.selectDate;
      let isExistence = false;
      for(let i = 0; i < arr.length; i++){
        if(arr[i] == item){
          arr.splice(i,1);
          isExistence = true;
          break;
        }
      }
      this.setData({
        selectDate: arr
      })
      return isExistence;
    }
  }
})
