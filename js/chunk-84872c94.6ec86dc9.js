(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84872c94"],{2828:function(t,e,r){"use strict";var s=r("b03c"),a=r.n(s);a.a},b03c:function(t,e,r){},bd69:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"articles"}},[r("v-container",{attrs:{fluid:"","grid-list-sm":""}},[t._l(t.articles,function(e,s){return r("v-layout",{key:s,attrs:{"justify-center":"",row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""},on:{click:function(r){t.handleClick(e.number)}}},[r("a",[r("v-card",{staticClass:"little-shadow custom-ripple mb-2 post-title-link",attrs:{ripple:{class:"primary--text"},flat:""},on:{mouseout:function(e){t.removeShadow(e)},mouseover:function(e){t.addShadow(e)}}},[r("v-card-text",{staticClass:"word"},[t._v(t._s(e.title))])],1)],1)])],1)}),r("v-layout",{attrs:{"justify-center":""}},[t.isProgress?[r("v-progress-circular",{attrs:{color:"indigo darken-2",indeterminate:""}})]:t.hasMore?[r("v-btn",{attrs:{ripple:{class:"primary--text"},color:"white"},on:{click:function(e){t.loadMore()}}},[t._v("加载更多...")])]:[r("v-btn",{attrs:{ripple:{class:"primary--text"},color:"white"}},[t._v("没有了...")])]],2)],2)],1)},a=[],i=r("365c"),o=r("db49"),n={data:function(){return{page:1,size:9,articles:[],hasMore:!0,isProgress:!1,repoName:o["a"].repo,label:o["a"].label}},created:function(){this.getArticles()},methods:{handleClick:function(t){this.$router.push("/algorithm/"+t)},addShadow:function(t){t.currentTarget.className+=" elevation-3"},removeShadow:function(t){t.currentTarget.className=t.currentTarget.className.replace(/ elevation-3/g," ")},loadMore:function(){this.getArticles()},getArticles:function(){var t=this;this.isProgress=!0,Object(i["c"])(this.repoName,this.page,this.size,this.label).then(function(e){t.hasMore=e.length==t.size,t.articles=t.articles.concat(e),t.isProgress=!1,t.hasMore&&t.page++})}}},c=n,l=(r("2828"),r("2877")),u=Object(l["a"])(c,s,a,!1,null,"89009df2",null);u.options.__file="Algorithm.vue";e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-84872c94.6ec86dc9.js.map