(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{371:function(e,t,n){"use strict";n.r(t);var c=n(299),o=n(302),s={components:{"y-button":c.a,"y-table":o.a},data:function(){return{selectedItems:[],columns:[{type:"selection"},{text:"姓名",key:"name",width:100},{text:"分数",key:"score",width:100},{text:"学校",key:"company"}],orderBy:{score:"desc"},loading:!1,dataSource:[{id:1,name:"小张",company:"浙江工业大学",score:100,description:"xxxx xxxx"},{id:2,name:"小红",company:"浙江工业大学",score:99,description:"xxxx xxxx"},{id:3,name:"小李",company:"浙江工业大学",score:100},{id:4,name:"小陈",company:"浙江工业大学",score:99},{id:5,name:"小黄",company:"浙江工业大学",score:100},{id:6,name:"小张",company:"浙江工业大学",score:100}],contentVisible:!1,content:"<y-table\n  :columns=\"columns\"\n  :data-source=\"dataSource\"\n  :selected-items.sync=\"selectedItems\"\n  stripe\n  border\n  @update:orderBy=\"changeOrderBy\"\n>\n</y-table>\ncolumns: [\n    { type: 'selection' },\n    { text: '姓名', key: 'name', width: 100 },\n    { text: '分数', key: 'score', width: 100 },\n    {\n      text: '学校',\n      key: 'company',\n    },\n  ]"}},methods:{changeOrderBy:function(){var e=this;this.loading=!0,setTimeout((function(){e.loading=!1}),1e3)}}},a=n(41),i=Object(a.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h4",[e._v("示例4：可选择")]),e._v(" "),n("y-table",{attrs:{columns:e.columns,"data-source":e.dataSource,"selected-items":e.selectedItems,stripe:"",border:""},on:{"update:selectedItems":function(t){e.selectedItems=t},"update:selected-items":function(t){e.selectedItems=t},"update:orderBy":e.changeOrderBy}}),e._v(" "),e.contentVisible?n("y-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary"},on:{click:function(t){e.contentVisible=!1}}},[e._v("隐藏代码")]):n("y-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary"},on:{click:function(t){e.contentVisible=!0}}},[e._v("查看代码")]),e._v(" "),e.contentVisible?n("pre",[n("code",[e._v(e._s(e.content))])]):e._e()],1)}),[],!1,null,null,null);t.default=i.exports}}]);