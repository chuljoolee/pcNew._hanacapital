import{u as o,C as n,e as d,z as t,f as _,q as c,o as m,c as f,v,n as u}from"./vendor-de077561.js";import{_ as p}from"./index-d398c97a.js";const y="_invalid_dfs8s_1",C="_invalid__message_dfs8s_4",b="_invalid__help_dfs8s_10",h={invalid:y,invalid__message:C,"invalid--error":"_invalid--error_dfs8s_7",invalid__help:b,"invalid--disabled":"_invalid--disabled_dfs8s_13"},i=()=>({wrap:""}),$={props:{classNames:{Type:Object,default(){return i()}},error:{Type:Boolean,default:!1},disabled:{Type:Boolean,default:!1}},setup(e){const l=o(),s=n("formListItem",{}),r=d(()=>{const{classNames:a}=e;return Object.assign(i(),a)});return t(()=>e.error,a=>{s&&s.error&&s.error(a)}),_(()=>{s&&s.error&&e.error&&s.error(!0)}),c("formInvalid",{messageClass:l.invalid__message,helpClass:l.invalid__help}),{customClassNames:r}}};function g(e,l,s,r,a,B){return m(),f("div",{class:u([e.$style.invalid,{[e.$style["invalid--error"]]:s.error,[e.$style["invalid--disabled"]]:s.disabled},r.customClassNames.wrap])},[v(e.$slots,"default")],2)}const N={$style:h},j=p($,[["render",g],["__cssModules",N]]);export{j as F};
//# sourceMappingURL=FormInvalid-36b11f3d.js.map
