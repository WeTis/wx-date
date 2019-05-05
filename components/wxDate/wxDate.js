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
      console.log(this.data.list.month);
      let list = getshowDate(this.data.list.year,this.data.list.month+1);
      this.setData({
        list: list
      })
    },
    getPrevDate() {
      console.log(this.data.list.month);
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
      console.log(year,month);
      let date = year + "-" + (month > 9 ? month : "0"+month) +"-"+(value > 9 ? value : "0"+value);
      
      let selectDate = this.data.selectDate;
      selectDate.push(date);
      this.setData({
        selectDate: selectDate
      })
      console.log(this.data.selectDate);
    }
  }
})
