import{s as L,u as S,r as E,b as T,e as r,D,f as j,z as w,q as p,h as O,o as m,c as R,a as g,i as A,w as d,k as v,v as z,n as c,M as f,C,H as I,R as V}from"./vendor-de077561.js";import{U as N,a as q}from"./UiTabButton-64316c89.js";import{_ as M}from"./index-d398c97a.js";const x={"nav-tab":"_nav-tab_zr60e_1","nav-tab__inner":"_nav-tab__inner_zr60e_4","nav-tab__list":"_nav-tab__list_zr60e_44","nav-tab__item":"_nav-tab__item_zr60e_52","nav-tab__button":"_nav-tab__button_zr60e_59","nav-tab__text":"_nav-tab__text_zr60e_92","nav-tab__item--active":"_nav-tab__item--active_zr60e_99","nav-tab__item--disabled":"_nav-tab__item--disabled_zr60e_113","nav-tab__scroller":"_nav-tab__scroller_zr60e_125","nav-tab--auto":"_nav-tab--auto_zr60e_160","nav-tab--type-popup":"_nav-tab--type-popup_zr60e_166","nav-tab--type-popup-head":"_nav-tab--type-popup-head_zr60e_181"},B=()=>({wrap:"",inner:"",scroller:"",list:""}),H={components:{UiTabList:N,Simplebar:L},props:{classNames:{Type:Object,default(){return B()}},useUiTab:{Type:Boolean,default:!1},auto:{Type:Boolean,default:!1},type:{Type:String,default:null}},setup(a){const o=S(),t=E({useUiTab:{value:null}}),e=T(null),n=T(null),u=r(()=>{const{classNames:s}=a;return Object.assign(B(),s)}),_=r(()=>{const{useUiTab:s}=a;return s?N:"ul"}),b=()=>{const{auto:s}=a;if(!s)return;const l=e.value.scrollElement,i=n.value.el||n.value,y=(()=>n.value.el?i.getElementsByClassName("is-tab-opened"):i.getElementsByClassName(o["nav-tab__item--active"]))(),h=i.getElementsByClassName(o["nav-tab__item"])[0].offsetLeft-i.offsetLeft;if(!y.length)return;const k=y[0].offsetLeft-i.offsetLeft-h;l.scrollLeft=k};return D(()=>{t.useUiTab.value=a.useUiTab}),j(()=>{b()}),w(()=>a.useUiTab,s=>{t.useUiTab.value=s}),p("navTabStyleModule",o),p("navTab",{useUiTab:t.useUiTab}),{scroller:e,list:n,customClassNames:u,setComponent:_,scrollToActive:b}}};function P(a,o,t,e,n,u){const _=O("Simplebar");return m(),R("div",{class:c([a.$style["nav-tab"],{[a.$style["nav-tab--auto"]]:t.auto,[a.$style[`nav-tab--type-${t.type}`]]:t.type},e.customClassNames.wrap])},[g("div",{class:c([a.$style["nav-tab__inner"],e.customClassNames.inner])},[A(_,{ref:"scroller","data-simplebar-auto-hide":"false",class:c([a.$style["nav-tab__scroller"],e.customClassNames.scroller])},{default:d(()=>[(m(),v(f(e.setComponent),{ref:"list",class:c([a.$style["nav-tab__list"],e.customClassNames.list])},{default:d(()=>[z(a.$slots,"default")]),_:3},8,["class"]))]),_:3},8,["class"])],2)],2)}const F={$style:x},X=M(H,[["render",P],["__cssModules",F]]),U=()=>({item:"",button:"",text:""}),G={inheritAttrs:!1,props:{classNames:{Type:Object,default(){return U()}},link:{Type:String,default:null},tagName:{Type:String,default:"div"},active:{Type:Boolean,default:!1},disabled:{Type:Boolean,default:!1}},setup(a){const o=C("navTabStyleModule"),t=C("navTab",{}),e=r(()=>{const{classNames:s}=a;return Object.assign(U(),s)}),n=r(()=>{const{useUiTab:s}=t;return s.value?q:"li"}),u=r(()=>{const{useUiTab:s}=t,{tagName:l}=a;return s.value?"div":l==="RouterLink"?V:l}),_=r(()=>{const{useUiTab:s}=t,{disabled:l}=a;return s.value&&l||null}),b=r(()=>{const{useUiTab:s}=t,{tagName:l,disabled:i}=a;return s.value?null:l==="button"?i:null});return{styleModule:o,customClassNames:e,setItemComponent:n,setButtonComponent:u,itemDisabled:_,buttonDisabled:b}}};function J(a,o,t,e,n,u){return m(),v(f(e.setItemComponent),{class:c([e.styleModule["nav-tab__item"],{[e.styleModule["nav-tab__item--active"]]:t.active,[e.styleModule["nav-tab__item--disabled"]]:t.disabled},e.customClassNames.item]),link:t.link,disabled:e.itemDisabled},{default:d(()=>[(m(),v(f(e.setButtonComponent),I(a.$attrs,{class:[e.styleModule["nav-tab__button"],e.customClassNames.button],title:t.active?"선택 됨":null,disabled:e.buttonDisabled}),{default:d(()=>[g("span",{class:c([e.styleModule["nav-tab__text"],e.customClassNames.text])},[z(a.$slots,"default")],2)]),_:3},16,["class","title","disabled"]))]),_:3},8,["class","link","disabled"])}const Y=M(G,[["render",J]]);export{X as N,Y as a};
//# sourceMappingURL=NavTabButton-20a3859b.js.map
