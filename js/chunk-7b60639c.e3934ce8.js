(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b60639c"],{"0234":function(e,t,r){"use strict";function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.pushParams=l,t.popParams=c,t.withParams=m,t._setTarget=t.target=void 0;var u=[],o=null;t.target=o;var s=function(e){t.target=o=e};function l(){null!==o&&u.push(o),t.target=o={}}function c(){var e=o,r=t.target=o=u.pop()||null;return r&&(Array.isArray(r.$sub)||(r.$sub=[]),r.$sub.push(e)),e}function f(e){if("object"!==i(e)||Array.isArray(e))throw new Error("params must be an object");t.target=o=n({},o,e)}function d(e,t){return p((function(r){return function(){r(e);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return t.apply(this,a)}}))}function p(e){var t=e(f);return function(){l();try{for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(this,r)}finally{c()}}}function m(e,t){return"object"===i(e)&&void 0!==t?d(e,t):p(e)}t._setTarget=s},1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=a},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=a},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t.default=a},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=a},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("numeric",/^[0-9]*$/);t.default=a},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=a},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,i=(0,n.regex)("email",a);t.default=i},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=a},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=a},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t.default=a},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,i=(0,n.regex)("url",a);t.default=i},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=a(r("8750"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var u=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===i(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=u;var o=function(e){return Array.isArray(e)?e.length:"object"===i(e)?Object.keys(e).length:String(e).length};t.len=o;var s=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=s;var l=function(e,t){return(0,n.default)({type:e},(function(e){return!u(e)||t.test(e)}))};t.regex=l},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",BASE_URL:"/my-project/"}).BUILD?r("cb69").withParams:r("0234").withParams,a=n;t.default=a},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(i)}))};t.default=a;var i=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=a},b5ae:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return j.default}}),t.helpers=void 0;var n=w(r("6235")),a=w(r("3a54")),i=w(r("45b8")),u=w(r("ec11")),o=w(r("5d75")),s=w(r("c99d")),l=w(r("91d3")),c=w(r("2a12")),f=w(r("5db3")),d=w(r("d4f4")),p=w(r("aa82")),m=w(r("e652")),v=w(r("b6cb")),b=w(r("772d")),y=w(r("d294")),g=w(r("3360")),h=w(r("6417")),_=w(r("eb66")),x=w(r("46bc")),P=w(r("1331")),j=w(r("c301")),$=O(r("78ef"));function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function w(e){return e&&e.__esModule?e:{default:e}}t.helpers=$},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t.default=a},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=a},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(i)}));t.default=a;var i=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},a=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},i=n.vuelidate?n.vuelidate.withParams:a;t.withParams=i}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t.default=a},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=a},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=a},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=a},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=a},ef2c:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"max-w-screen flex md:flex-row-reverse flex-col "},[r("div",{staticClass:"w-full "},[r("span",[r("userHeader",{staticClass:"z-20"})],1),r("div",{staticClass:"pl-0 pt-36 md:pl-24 min-h-screen bg-gray-200 flex flex-col"},[e._m(0),r("div",{staticClass:"z-0 lg:z-10 bg-white p-10 mb-20 w-full lg:w-11/12 rounded-lg"},[r("form",{staticClass:"flex flex-col w-full",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("label",{staticClass:"text-2xl",attrs:{for:"affair"}},[e._v("Asunto")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.asunto.$model,expression:"$v.asunto.$model",modifiers:{trim:!0}}],staticClass:" w-1/3 p-1 border focus:outline-none focus:ring-2 focus:border-transparent rounded-lg shadow-2xl",class:{postin:e.$v.asunto.$error},attrs:{type:"text",id:"affair"},domProps:{value:e.$v.asunto.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.asunto,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("div",{staticClass:"py-10 grid gap-10 grid-cols-1 md:grid-cols-3 flex justify-between"},[r("div",{staticClass:"divin"},[r("label",{staticClass:"text-2xl",attrs:{for:"empresa"}},[e._v("Empresa destinataria")]),r("p",[e._v("Recuerde revisar el correo correcto")]),r("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.empresa.$model,expression:"$v.empresa.$model",modifiers:{trim:!0}}],staticClass:" z-0 lg:z-10 p-1 border focus:outline-none focus:ring-2 focus:border-transparent rounded-lg shadow-2xl",class:{postin:e.$v.empresa.$error},attrs:{name:"",id:"empresa"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$v.empresa,"$model",t.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",value:""}},[e._v("Seleccione un elemento")]),e._l(this.$store.getters["b/getNamesBusi"],(function(t,n){return r("option",{key:n,domProps:{value:t.id}},[e._v(" "+e._s(t.bussiness_name)+", "+e._s(t.mail)+" ")])}))],2)]),r("div",{staticClass:"divin"},[r("label",{staticClass:"text-2xl",attrs:{for:"pqrtype"}},[e._v("Tipo de PQR")]),r("p"),r("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.type.$model,expression:"$v.type.$model",modifiers:{trim:!0}}],staticClass:" z-0 lg:z-10 p-1 border focus:outline-none focus:ring-2 focus:border-transparent rounded-lg shadow-2xl",class:{postin:e.$v.type.$error},attrs:{name:"",id:"pqrtype"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$v.type,"$model",t.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",value:""}},[e._v("Seleccione un elemento")]),r("option",{attrs:{value:"1"}},[e._v("pregunta")]),r("option",{attrs:{value:"2"}},[e._v("queja")]),r("option",{attrs:{value:"3"}},[e._v("reclamo")])])]),r("div",{staticClass:"divin"},[r("label",{staticClass:"text-2xl",attrs:{for:"d"}},[e._v("Fecha del momento")]),r("p",[e._v("fechas antes de hoy.")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.fecha.$model,expression:"$v.fecha.$model",modifiers:{trim:!0}}],staticClass:"inputs",class:{postin:e.$v.fecha.$error},attrs:{type:"date",id:"d"},domProps:{value:e.$v.fecha.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.fecha,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("label",{staticClass:"text-2xl",attrs:{for:"desc"}},[e._v("Descripcion")]),r("p",[e._v("Recuerda ser lo mas puntual posible")]),r("vue-editor",{class:{postin:e.$v.content.$error},attrs:{editorToolbar:e.customToolbar,id:"desc"},model:{value:e.$v.content.$model,callback:function(t){e.$set(e.$v.content,"$model","string"===typeof t?t.trim():t)},expression:"$v.content.$model"}}),r("p",[e._v("Caracteres maximos 60.000 usted lleva ("+e._s(e.content.length)+")")]),r("div",{staticClass:"mt-10"},[r("div",[r("p",{staticClass:"text-2xl",on:{click:e.prueba}},[e._v("Adjuntos")]),r("p",[e._v("Solo se permiten archivos jpeg, png, pdf de maximo 1000KB.")]),e.ar.length>0?r("p",[e._v("Archivos subidos: "+e._s(e.ar.length)+" ")]):e._e(),r("div",{staticClass:"grid grid-colos-1 w-1/2"},[r("label",{attrs:{for:"url"}},[e._v("Url (no necesaria)")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.ur.$model,expression:"$v.ur.$model",modifiers:{trim:!0}}],staticClass:"inputs",class:{postin:e.$v.ur.$error},attrs:{type:"url",id:"url"},domProps:{value:e.$v.ur.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.ur,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"text-3xl"},[r("i",{staticClass:"fas fa-plus",on:{click:e.sum}}),r("br"),r("i",{staticClass:"fas fa-minus",on:{click:e.less}})])]),r("div",{staticClass:"grid gap-3 grid-cols-1 md:grid-cols-2"},e._l(e.numadj,(function(t,n){return r("div",{key:n,staticClass:"grid gap-3 grid-cols-1"},[r("label",{attrs:{for:"file"}}),r("input",{staticClass:"inputs",class:{postin:e.$v.ar.$error},attrs:{type:"file",id:"file"},on:{change:e.onFilePicked}})])})),0)]),e._m(1)],1)])])]),r("span",[this.$store.getters.bar?r("p",{staticClass:"md:w-60 w-0 md:min-h-screen h-0"}):e._e()]),r("span",{staticClass:"fixed inset-x-0 top-16 z-0"},[this.$store.getters.bar?r("task"):e._e()],1)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pb-10"},[r("h1",{staticClass:"text-3xl z-0 lg:z-10"},[r("b",[e._v("Bienvenido")])]),r("p",{staticClass:"text-xl z-0 lg:z-10"},[e._v("Aqui puedes crear tus Pqr.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-10"},[r("input",{staticClass:"text-gray-200 bg-gray-700 hover:bg-gray-500 py-2 px-4 rounded w-20",attrs:{type:"submit",value:"enviar"}})])}],i=r("5530"),u=r("402b"),o=r("cd06"),s=r("2f62"),l=r("5873"),c=r("b5ae"),f=r("3d20"),d=r.n(f),p={name:"createpqr",components:{userHeader:u["a"],task:o["a"],VueEditor:l["a"]},data:function(){return{content:"",numadj:0,asunto:"",empresa:"",type:0,fecha:"",ar:[],ur:"",customToolbar:[[{font:[]}],[{header:[!1,1,2,3,4,5,6]}],[{size:["small",!1,"large","huge"]}],["bold","italic","underline","strike"],[{align:""},{align:"center"},{align:"right"},{align:"justify"}],[{list:"ordered"},{list:"bullet"}],[{color:[]},{background:[]}],["video"]]}},validations:{asunto:{required:c["required"],maxLength:Object(c["maxLength"])(54)},empresa:{required:c["required"]},type:{required:c["required"]},fecha:{required:c["required"]},content:{required:c["required"],maxLength:Object(c["maxLength"])(59999)},ur:{maxLength:Object(c["maxLength"])(354)},ar:{required:Object(c["requiredIf"])((function(){return this.numadj>0}))}},created:function(){this.getBusName()},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(s["b"])("b",["getBusName"])),Object(s["b"])("d",["savePqrs"])),{},{sum:function(){this.numadj++},onFilePicked:function(e){var t=e.target.files,r=t[0].size;r>=1e6?(d.a.fire("Error","El archivo es demaciado pesado.","error"),this.numadj--):"image/jpeg"===t[0].type||"application/pdf"===t[0].type||"image/png"===t[0].type?(console.log("holabueno"),console.log(this.ar),this.ar.push({archive:t[0],url:this.ur})):(this.numadj--,console.log("hola malo"))},prueba:function(){console.log(this.ar.length),console.log(this.ar)},less:function(){this.numadj--},savePqr:function(){console.log(this.type);var e=new FormData;e.append("affair",this.asunto),e.append("description",this.content),e.append("date",this.fecha),e.append("fk_user_id",JSON.parse(localStorage.getItem("user")).id),e.append("fk_bussiness_id",this.empresa),e.append("fk_pqr_Type_id",this.type);for(var t=1;t<=this.ar.length;t++)e.append("attachment[".concat(t,"][archive]"),this.ar[t-1].archive),e.append("attachment[".concat(t,"][url]"),this.ar[t-1].url);this.savePqrs(e)},submit:function(){this.$v.$touch(),this.$v.$invalid?this.submitStatus="ERROR":(this.savePqr(),console.log("submit!"))}})},m=p,v=r("2877"),b=Object(v["a"])(m,n,a,!1,null,"60a6bc50",null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-7b60639c.e3934ce8.js.map