(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{375:function(e,t,n){"use strict";n.r(t);var o=n(299),c=n(301),s={components:{"y-button":o.a,"y-table":c.a},data:function(){return{selectedItems:[],columns:[{text:"姓名",key:"name",width:100},{text:"分数",key:"score",width:100},{text:"学校",key:"company"}],orderBy:{score:"desc"},loading:!1,dataSource:[{id:1,name:"小张",company:"浙江工业大学",score:100,description:"xxxx xxxx"},{id:2,name:"小红",company:"浙江工业大学",score:99,description:"xxxx xxxx"},{id:3,name:"小李",company:"浙江工业大学",score:100},{id:4,name:"小陈",company:"浙江工业大学",score:99},{id:5,name:"小黄",company:"浙江工业大学",score:100},{id:6,name:"小张",company:"浙江工业大学",score:100},{id:7,name:"小李",company:"浙江工业大学",score:100},{id:8,name:"小陈",company:"浙江工业大学",score:99},{id:9,name:"小黄",company:"浙江工业大学",score:100},{id:10,name:"小张",company:"浙江工业大学",score:100},{id:11,name:"小李",company:"浙江工业大学",score:100},{id:12,name:"小陈",company:"浙江工业大学",score:99},{id:13,name:"小黄",company:"浙江工业大学",score:100},{id:14,name:"小张",company:"浙江工业大学",score:100}],contentVisible:!1,content:'<y-table\n  :columns="columns"\n  :data-source="dataSource"\n  :selected-items.sync="selectedItems"\n  stripe\n  :height="400"\n  numberVisible\n>\n  <template slot-scope="row">\n    <y-button style="margin-right: 5px">编辑</y-button>\n    <y-button>查看</y-button>\n  </template>\n</y-table>'}},methods:{clickLoading:function(){var e=this;this.loading=!0,setTimeout((function(){e.loading=!1}),3e3)}}},a=n(41),i=Object(a.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h4",[e._v("示例10：固定表头")]),e._v(" "),n("y-table",{attrs:{columns:e.columns,"data-source":e.dataSource,"selected-items":e.selectedItems,stripe:"",height:400,numberVisible:""},on:{"update:selectedItems":function(t){e.selectedItems=t},"update:selected-items":function(t){e.selectedItems=t}},scopedSlots:e._u([{key:"default",fn:function(t){return[n("y-button",{staticStyle:{"margin-right":"5px"}},[e._v("编辑")]),e._v(" "),n("y-button",[e._v("查看")])]}}])}),e._v(" "),e.contentVisible?n("y-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary"},on:{click:function(t){e.contentVisible=!1}}},[e._v("隐藏代码")]):n("y-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary"},on:{click:function(t){e.contentVisible=!0}}},[e._v("查看代码")]),e._v(" "),e.contentVisible?n("pre",[n("code",[e._v(e._s(e.content))])]):e._e()],1)}),[],!1,null,null,null);t.default=i.exports}}]);