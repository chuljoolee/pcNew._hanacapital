import{P as x}from"./PageContents-dce8af0f.js";import{B as L}from"./BasicButton-08e34afc.js";import{B as N,a as C}from"./ButtonListItem-c0517c0d.js";import{V as h,W as S,r as E,b as g,f as T,X as V,Y as H,h as s,o as b,k as y,w as e,i as a,a as t,n as _,l as B,G as I}from"./vendor-de077561.js";import{_ as w,U}from"./index-d398c97a.js";import{P as O}from"./PopupButton-80f186b4.js";import{M as z,a as G}from"./ModalPopupHead-a88a195b.js";import{T as A}from"./TextButton-9ca2b6ee.js";const u="/pcNew._hanacapital/assets/images/box-detail-3-5d8a3cc7.png",W="_banner_awle4_19",X="_banner__block_awle4_22",Y={"image-view":"_image-view_awle4_1","image-view--popup-full":"_image-view--popup-full_awle4_4","body-inner":"_body-inner_awle4_14",banner:W,banner__block:X,"banner-pagination":"_banner-pagination_awle4_34"},j={components:{Swiper:h,SwiperSlide:S,UiLayer:U,PopupButton:O,ModalPopup:z,ModalPopupHead:G,TextButton:A},setup(){const n=E({paginationEl:null}),o=g(null),r=g(null);return T(()=>{n.paginationEl=r.value}),{state:n,layer:o,pagination:r,modules:[V,H]}}},q=["alt"],D=["alt"],F=["alt"],J=["alt"],K={class:"flex-box"},Q={class:"flex-box__cell flex-1"},R={class:"flex-box__cell flex-box__cell--regular"};function Z(n,o,r,c,P,k){const p=s("PopupButton"),d=s("ModalPopupHead"),i=s("SwiperSlide"),m=s("Swiper"),f=s("TextButton"),v=s("ModalPopup"),$=s("UiLayer");return b(),y($,{ref:"layer"},{default:e(M=>[a(v,{classNames:{bodyInner:n.$style["body-inner"]}},{head:e(()=>[a(d,null,{right:e(()=>[a(p,{onClick:l=>M.close()},null,8,["onClick"])]),_:2},1024)]),outerBottom:e(()=>[t("div",K,[t("div",Q,[t("div",{ref:"pagination",class:_(n.$style["banner-pagination"])},null,2)]),t("div",R,[a(f,{textSize:"regular",underline:!0,block:!0,classNames:{wrap:"color-white"}},{default:e(()=>[B(" 오늘 하루 보지 않기 ")]),_:1})])])]),default:e(()=>[t("div",{class:_(n.$style.banner)},[c.state.paginationEl?(b(),y(m,{key:0,modules:c.modules,pagination:{el:c.state.paginationEl,clickable:!0},autoHeight:!0},{default:e(()=>[a(i,null,{default:e(()=>[t("div",{class:_(n.$style.banner__block)},[t("img",{src:u,alt:"배너 설명 넣어주세요.",onError:o[0]||(o[0]=l=>{l.target.parentNode.classList.add("is-error")})},null,40,q)],2)]),_:1}),a(i,null,{default:e(()=>[t("a",{href:"",class:_(n.$style.banner__block)},[t("img",{src:u,alt:"배너 설명 넣어주세요.",onError:o[1]||(o[1]=l=>{l.target.parentNode.classList.add("is-error")})},null,40,D)],2)]),_:1}),a(i,null,{default:e(()=>[t("div",{class:_(n.$style.banner__block)},[t("img",{src:u,alt:"배너 설명 넣어주세요.",onError:o[2]||(o[2]=l=>{l.target.parentNode.classList.add("is-error")})},null,40,F)],2)]),_:1}),a(i,null,{default:e(()=>[t("div",{class:_(n.$style.banner__block)},[t("img",{src:u,alt:"배너 설명 넣어주세요.",onError:o[3]||(o[3]=l=>{l.target.parentNode.classList.add("is-error")})},null,40,J)],2)]),_:1})]),_:1},8,["modules","pagination"])):I("",!0)],2)]),_:2},1032,["classNames"])]),_:1},512)}const ee={$style:Y},ne=w(j,[["render",Z],["__cssModules",ee]]),te={components:{PageContents:x,BasicButton:L,ButtonList:N,ButtonListItem:C,Main_P01_l001:ne},setup(){const n=g(null);return{layer001:n,layer001Open:(r={})=>{n.value.layer.open(r.target)}}}},oe=t("br",null,null,-1);function ae(n,o,r,c,P,k){const p=s("BasicButton"),d=s("ButtonListItem"),i=s("ButtonList"),m=s("Main_P01_l001"),f=s("PageContents");return b(),y(f,null,{default:e(()=>[a(i,{classNames:{wrap:"row-margin-none"},align:"full"},{default:e(()=>[a(d,null,{default:e(()=>[a(p,{onClick:c.layer001Open},{default:e(()=>[B(" 공지팝업"),oe,B("Main_P01_l001 ")]),_:1},8,["onClick"])]),_:1})]),_:1}),a(m,{ref:"layer001"},null,512)]),_:1})}const de=w(te,[["render",ae]]);export{de as default};
//# sourceMappingURL=GuideMain001-0d0f4623.js.map
