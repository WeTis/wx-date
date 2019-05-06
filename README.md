# wx-date
微信小程序日期组件
## 1.0版本
- 日期多选返回选择日期数组
- 引入方式
```
<wxDate bind:clickGetDateArr="自定义获取时间的方法"/>
<wxDate bind:clickGetDateArr="onDateOfBirth" choice="false" startTime="1995-08-09" start="1995-08-09" end="1995-08-25"/>
```
- 组件开始时间
```
startTime="2000-01-02"
```
- 组件单选还是多选
```
choice  true 单选 false 多选
```
- 组件的可选范围
```
start="1995-08-09" end="1995-08-25"
开始和结束时间可以只填一个
```