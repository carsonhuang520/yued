(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{374:function(t,e,n){"use strict";n.r(e);var o=n(299),c=n(301),s={components:{"y-button":o.a,"y-table":c.a},data:function(){return{selectedItems:[],columns:[{text:"姓名",key:"name",width:100},{text:"分数",key:"score",width:100},{text:"学校",key:"company"}],orderBy:{score:"desc"},loading:!1,dataSource:[{id:1,name:"小张",company:"浙江工业大学",score:100,description:"xxxx xxxx"},{id:2,name:"小红",company:"浙江工业大学",score:99,description:"xxxx xxxx"},{id:3,name:"小李",company:"浙江工业大学",score:100},{id:4,name:"小陈",company:"浙江工业大学",score:99},{id:5,name:"小黄",company:"浙江工业大学",score:100},{id:6,name:"小张",company:"浙江工业大学",score:100}],contentVisible:!1,content:'<y-table\n  :columns="columns"\n  :data-source="dataSource"\n  :selected-items.sync="selectedItems"\n  stripe\n  border\n  numberVisible\n>\n  <template slot-scope="row">\n    <y-button style="margin-right: 5px">编辑</y-button>\n    <y-button>查看</y-button>\n  </template>\n</y-table>'}},methods:{clickLoading:function(){var t=this;this.loading=!0,setTimeout((function(){t.loading=!1}),3e3)}}},i=n(41),a=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",[t._v("示例9：自定义操作")]),t._v(" "),n("y-table",{attrs:{columns:t.columns,"data-source":t.dataSource,"selected-items":t.selectedItems,stripe:"",border:"",numberVisible:""},on:{"update:selectedItems":function(e){t.selectedItems=e},"update:selected-items":function(e){t.selectedItems=e}},scopedSlots:t._u([{key:"default",fn:function(e){return[n("y-button",{staticStyle:{"margin-right":"5px"}},[t._v("编辑")]),t._v(" "),n("y-button",[t._v("查看")])]}}])}),t._v(" "),t.contentVisible?n("y-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary"},on:{click:function(e){t.contentVisible=!1}}},[t._v("隐藏代码")]):n("y-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary"},on:{click:function(e){t.contentVisible=!0}}},[t._v("查看代码")]),t._v(" "),t.contentVisible?n("pre",[n("code",[t._v(t._s(t.content))])]):t._e()],1)}),[],!1,null,null,null);e.default=a.exports}}]);