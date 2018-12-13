webpackJsonp([1],{119:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{md12:"","offset-md":"",xs12:""}},[a("h1",[t._v("Livros Cadastrados")]),t._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.cbook},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.livro))]),t._v(" "),a("td",[t._v(t._s(e.item.paginas))]),t._v(" "),a("td",{staticClass:"justify-center layout px-0"},[a("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(e){t.remove(t.cbook.item)}}},[a("v-icon",{attrs:{color:"pink"}},[t._v("delete")])],1)],1)]}}])},[a("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"})],1)],1)],1),t._v(" "),a("v-snackbar",{attrs:{timeout:3e3,top:!0,right:!0,"multi-line":!0,vertical:!1},model:{value:t.snackbar.show,callback:function(e){t.$set(t.snackbar,"show",e)},expression:"snackbar.show"}},[t._v("\n      "+t._s(t.snackbar.text)+"\n      "),a("v-btn",{attrs:{flat:""},nativeOn:{click:function(e){t.snackbar.show=!1}}},[t._v("fechar")])],1)],1)},n=[],s={render:r,staticRenderFns:n};e.a=s},120:function(t,e,a){"use strict";var r=a(52),n=a(121),s=a(9),o=s(r.a,n.a,!1,null,null,null);e.a=o.exports},121:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{md12:"","offset-md0":"",xs12:""}},[a("v-form",[a("v-text-field",{attrs:{label:"livro",required:""},model:{value:t.cbook.livro,callback:function(e){t.$set(t.cbook,"livro",e)},expression:"cbook.livro"}}),t._v(" "),a("v-text-field",{attrs:{label:"paginas",required:""},model:{value:t.cbook.paginas,callback:function(e){t.$set(t.cbook,"paginas",e)},expression:"cbook.paginas"}}),t._v(" "),a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[a("v-btn",{attrs:{color:"info",loading:t.saving,disabled:t.saving},on:{click:function(e){t.save()}}},[t._v("\n                      Salvar\n                  ")]),t._v(" "),a("v-btn",{attrs:{color:"red"}},[t._v("\n                      Cancelar\n                  ")])],1)],1)],1)],1),t._v(" "),a("v-snackbar",{attrs:{timeout:3e3,top:!0,right:!0,"multi-line":!0,vertical:!1},model:{value:t.snackbar.show,callback:function(e){t.$set(t.snackbar,"show",e)},expression:"snackbar.show"}},[t._v("\n      "+t._s(t.snackbar.text)+"\n      "),a("v-btn",{attrs:{flat:""},nativeOn:{click:function(e){t.snackbar.show=!1}}},[t._v("fechar")])],1)],1)},n=[],s={render:r,staticRenderFns:n};e.a=s},124:function(t,e){},28:function(t,e,a){"use strict";e.a={data:function(){return{clipped:!0,drawer:!1,fixed:!0,items:[{icon:"home",title:"Lembretes",url:"/"},{icon:"book",title:"Livros",url:"/livro"},{icon:"book",title:"Cadastro",url:"/cadastrar"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Lembrete de Leitura"}},name:"App"}},29:function(t,e,a){"use strict";e.a={data:function(){return{dialog:!1}}}},30:function(t,e,a){"use strict";var r=a(31),n=a.n(r),s=a(32),o=a.n(s),i=a(46),c=a.n(i);e.a={data:function(){return{saving:!1,snackbar:{show:!1,text:""},headers:[{text:"Livro",align:"left",sortable:!0,value:"livro"},{text:"Paginas",value:"paginas"},{text:"Ações",sortable:!1}],cbook:[]}},methods:{showSnackBar:function(t){this.snackbar.text=t,this.snackbar.show=!0},findAll:function(){var t=this;return o()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.get(t.$store.state.apiLink+"/livro");case 3:a=e.sent,t.cbook=a.data,e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Falha ao carregar livros."),console.log("Erro ao carregar livros: "+e.t0);case 11:case"end":return e.stop()}},e,t,[[0,7]])}))()},remove:function(t){var e=this;return o()(n.a.mark(function a(){return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!confirm("Deseja realmente remover este livro?")){a.next=6;break}return a.next=4,c.a.delete(e.$store.state.apiLink+"/livro",{data:{_id:t}});case 4:e.showSnackBar("Excluido"),e.findAll();case 6:a.next=12;break;case 8:a.prev=8,a.t0=a.catch(0),console.log("Erro ao deletar livro: "+a.t0),e.showSnackBar("Não Foi Possível Excluir");case 12:case"end":return a.stop()}},a,e,[[0,8]])}))()}},mounted:function(){this.findAll()}}},52:function(t,e,a){"use strict";var r=a(31),n=a.n(r),s=a(32),o=a.n(s),i=a(46),c=a.n(i);e.a={data:function(){return{cbook:{},snackbar:{show:!1,text:""}}},methods:{showSnackBar:function(t){this.snackbar.text=t,this.snackbar.show=!0},save:function(){var t=this;return o()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.saving=!0,e.prev=1,e.next=4,c.a.post(t.$store.state.apiLink+"/livro",t.cbook);case 4:a=e.sent,t.showSnackBar("Salvo com sucesso"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t.showSnackBar("Não Foi Possível Cadastrar"),console.log("Erro ao salvar cliente: "+e.t0);case 12:return e.prev=12,t.saving=!1,e.finish(12);case 15:case"end":return e.stop()}},e,t,[[1,8,12,15]])}))()}}}},53:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(16),n=a(56),s=a(58),o=a(122),i=a.n(o),c=a(123),l=a(124);a.n(l);r.default.use(i.a),r.default.use(c.a),r.default.config.productionTip=!1;var v=new c.a.Store({state:{apiLink:"http://192.168.1.3:3000"}});new r.default({el:"#app",router:s.a,store:v,components:{App:n.a},template:"<App/>"})},56:function(t,e,a){"use strict";var r=a(28),n=a(57),s=a(9),o=s(r.a,n.a,!1,null,null,null);e.a=o.exports},57:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.items,function(e,r){return a("v-list-tile",{key:r,attrs:{to:e.url}},[a("v-list-tile-action",[a("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}),1)],1),t._v(" "),a("v-toolbar",{attrs:{color:"light-blue",dark:"",app:"","clipped-left":t.clipped}},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),a("h1",[a("v-toolbar-title",{domProps:{textContent:t._s(t.title)}})],1)],1),t._v(" "),a("v-content",[a("router-view")],1)],1)},n=[],s={render:r,staticRenderFns:n};e.a=s},58:function(t,e,a){"use strict";var r=a(16),n=a(59),s=a(60),o=a(62),i=a(120);r.default.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Lembretes",component:s.a},{path:"/livro",name:"livro",component:o.a},{path:"/cadastrar",name:"livro",component:i.a}]})},60:function(t,e,a){"use strict";var r=a(29),n=a(61),s=a(9),o=s(r.a,n.a,!1,null,null,null);e.a=o.exports},61:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("v-btn",{staticClass:"mb-4",attrs:{dark:"",color:"pink",absolute:"",bottom:"",right:"",fab:""},on:{click:function(e){t.dialog=!0}}},[a("v-icon",[t._v("add")])],1),t._v(" "),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Cadastrar Lembrete")])]),t._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Livro*",required:""}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-select",{attrs:{items:["17hrs"],label:"Hora*",required:""}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-select",{attrs:{items:["13/12/2018"],label:"Data*",required:""}})],1)],1)],1),t._v(" "),a("small",[t._v("*indicates required field")])],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1)],1)],1)],1)},n=[],s={render:r,staticRenderFns:n};e.a=s},62:function(t,e,a){"use strict";var r=a(30),n=a(119),s=a(9),o=s(r.a,n.a,!1,null,null,null);e.a=o.exports}},[53]);
//# sourceMappingURL=app.b35067de279f222fb76b.js.map