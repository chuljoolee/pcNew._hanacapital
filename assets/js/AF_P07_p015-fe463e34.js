import{_ as w,b as A}from"./index-d398c97a.js";import{P as F}from"./PageContents-dce8af0f.js";import{L as T}from"./LocationBar-cda5e9d6.js";import{P as L,a as C}from"./PageTitle-41c83c03.js";import{P as H}from"./PageHeadRow-55682868.js";import{P as M}from"./PageMainText-a4108181.js";import{S as z}from"./StepProgress-89b3fdfc.js";import{B as S}from"./BasicButton-08e34afc.js";import{B as q,a as j}from"./ButtonListItem-c0517c0d.js";import{B as N}from"./BasicTooltip-e1339465.js";import{I as R}from"./img-color-f0e2e077.js";import{I as V}from"./img-2f3204a7.js";import{I as D}from"./tooltip-da783c6a.js";import{f as U,I as E,h as e,k as G,w as o,o as p,i,l as a,a as s,n as t,c as b,j as y,F as r}from"./vendor-de077561.js";const J={"basic-list":"_basic-list_1kin4_1","basic-list__item":"_basic-list__item_1kin4_7","basic-list__symbol":"_basic-list__symbol_1kin4_26","basic-list__content":"_basic-list__content_1kin4_80","basic-list--regular":"_basic-list--regular_1kin4_85","basic-list--medium":"_basic-list--medium_1kin4_96","basic-list--regular-margin":"_basic-list--regular-margin_1kin4_110","basic-list--normal-margin":"_basic-list--normal-margin_1kin4_113","basic-list--small-margin":"_basic-list--small-margin_1kin4_116","upload-file":"_upload-file_1kin4_120","upload-file__list":"_upload-file__list_1kin4_123","upload-file__item":"_upload-file__item_1kin4_128","upload-file__icon":"_upload-file__icon_1kin4_134","upload-file__content":"_upload-file__content_1kin4_142","upload-file__button":"_upload-file__button_1kin4_150","upload-file__name":"_upload-file__name_1kin4_153","upload-file__date":"_upload-file__date_1kin4_159","upload-file--inside":"_upload-file--inside_1kin4_172","upload-file--child":"_upload-file--child_1kin4_176","upload-button":"_upload-button_1kin4_181","upload-button__input":"_upload-button__input_1kin4_184","upload-button__block":"_upload-button__block_1kin4_194","upload-button__label":"_upload-button__label_1kin4_194","upload-button__img":"_upload-button__img_1kin4_203","upload-button__tooltip":"_upload-button__tooltip_1kin4_256","tooltip-section":"_tooltip-section_1kin4_263","tooltip-section__title":"_tooltip-section__title_1kin4_266","tooltip-section__text":"_tooltip-section__text_1kin4_275"},K={components:{PageContents:F,LocationBar:T,PageHead:L,PageHeadRow:H,PageTitle:C,PageMainText:M,StepProgress:z,BasicButton:S,ButtonList:q,ButtonListItem:j,BasicTooltip:N,IconImgColor:R,IconImg:V,IconTooltip:D},setup(){const l={ui:{header:A()}};U(()=>{l.ui.header.setActive(()=>"auto")}),E(()=>{l.ui.header.setActive()})}},O={class:"reset-list"},Q={class:"row-margin-contents"},W={class:"row-margin-contents"},X=s("span",{class:"for-a11y"},"(도움말)",-1),Y={class:"row-margin-contents"},Z=s("span",{class:"for-a11y"},"(도움말)",-1),x={class:"row-margin-contents"},ll=s("span",{class:"for-a11y"},"(도움말)",-1);function sl(l,il,ol,el,al,nl){const f=e("LocationBar"),$=e("PageTitle"),g=e("StepProgress"),v=e("PageHeadRow"),k=e("PageMainText"),h=e("PageHead"),n=e("IconImg"),d=e("IconImgColor"),_=e("BasicButton"),c=e("IconTooltip"),m=e("BasicTooltip"),P=e("ButtonListItem"),B=e("ButtonList"),I=e("PageContents");return p(),G(I,null,{head:o(()=>[i(f,{data:[{text:"홈",to:"/main/home"},{text:"오토금융",to:"/"},{text:"오토승계",to:"/"}]})]),default:o(()=>[i(h,null,{default:o(()=>[i(v,null,{right:o(()=>[i(g,{total:3,current:2})]),default:o(()=>[i($,{align:"left"},{default:o(()=>[a("오토승계")]),_:1})]),_:1}),i(k,{align:"left"},{default:o(()=>[a("서류를 등록해 주세요")]),_:1})]),_:1}),s("div",null,[s("ul",O,[s("li",Q,[s("div",{class:t(l.$style["upload-button"])},[s("input",{type:"file",id:"AF_P07_p015_upload001",class:t(l.$style["upload-button__input"])},null,2),s("div",{class:t(l.$style["upload-button__block"])},[s("span",{class:t(l.$style["upload-button__img"])},[i(n)],2),s("label",{for:"AF_P07_p015_upload001",class:t(l.$style["upload-button__label"])}," 운전면허증(운전경력증명서) ",2)],2)],2),s("div",{class:t(l.$style["upload-button"])},[s("input",{type:"file",id:"AF_P07_p015_upload001Disabled",class:t(l.$style["upload-button__input"]),disabled:!0},null,2),s("div",{class:t(l.$style["upload-button__block"])},[s("span",{class:t(l.$style["upload-button__img"])},[i(n)],2),s("label",{for:"AF_P07_p015_upload001Disabled",class:t(l.$style["upload-button__label"])}," 운전면허증(운전경력증명서) ",2)],2)],2),s("div",{class:t([l.$style["upload-file"],l.$style["upload-file--inside"],l.$style["upload-file--child"]])},[s("ul",{class:t(l.$style["upload-file__list"])},[s("li",{class:t(l.$style["upload-file__item"])},[s("div",{class:t(l.$style["upload-file__icon"])},[i(d)],2),s("div",{class:t(l.$style["upload-file__content"])},[s("div",{class:t(l.$style["upload-file__name"])}," 첨부된파일명입력.pdf ",2)],2),s("div",{class:t(l.$style["upload-file__button"])},[i(_,{line:!0,theme:"quaternary",size:"small"},{default:o(()=>[a(" 삭제 ")]),_:1})],2)],2)],2)],2)]),s("li",W,[s("div",{class:t(l.$style["upload-button"])},[s("input",{type:"file",id:"AF_P07_p015_upload002",class:t(l.$style["upload-button__input"])},null,2),s("div",{class:t(l.$style["upload-button__block"])},[s("span",{class:t(l.$style["upload-button__img"])},[i(n)],2),s("label",{for:"AF_P07_p015_upload002",class:t(l.$style["upload-button__label"])}," 건강보험자격득실확인서 ",2),s("div",{class:t(l.$style["upload-button__tooltip"])},[i(m,null,{contents:o(()=>[s("section",{class:t(l.$style["tooltip-section"])},[s("h3",{class:t(l.$style["tooltip-section__title"])}," 건강보험득실확인서 ",2),s("ul",{class:t([l.$style["basic-list"],l.$style["basic-list--small-margin"]])},[s("li",{class:t([l.$style["basic-list__item"],"color-white"])},[s("div",{class:t(l.$style["basic-list__symbol"])},null,2),s("div",{class:t(l.$style["basic-list__content"])}," 재직확인을 위한 서류: 건강보험자격득실확인서, 재직증명서 등 ",2)],2)],2)],2)]),default:o(()=>[i(c,{class:"display-block"}),X]),_:1})],2)],2)],2),s("div",{class:t([l.$style["upload-file"],l.$style["upload-file--inside"],l.$style["upload-file--child"]])},[s("ul",{class:t(l.$style["upload-file__list"])},[(p(),b(r,null,y(4,u=>s("li",{key:u,class:t(l.$style["upload-file__item"])},[s("div",{class:t(l.$style["upload-file__icon"])},[i(d)],2),s("div",{class:t(l.$style["upload-file__content"])},[s("div",{class:t(l.$style["upload-file__name"])}," 첨부된파일명입력.pdf ",2)],2),s("div",{class:t(l.$style["upload-file__button"])},[i(_,{line:!0,theme:"quaternary",size:"small"},{default:o(()=>[a(" 삭제 ")]),_:1})],2)],2)),64))],2)],2)]),s("li",Y,[s("div",{class:t(l.$style["upload-button"])},[s("input",{type:"file",id:"AF_P07_p015_upload003",class:t(l.$style["upload-button__input"])},null,2),s("div",{class:t(l.$style["upload-button__block"])},[s("span",{class:t(l.$style["upload-button__img"])},[i(n)],2),s("label",{for:"AF_P07_p015_upload003",class:t(l.$style["upload-button__label"])}," 소득금액증명원 ",2),s("div",{class:t(l.$style["upload-button__tooltip"])},[i(m,null,{contents:o(()=>[s("section",{class:t(l.$style["tooltip-section"])},[s("h3",{class:t(l.$style["tooltip-section__title"])}," 소득금액증명원 ",2),s("ul",{class:t([l.$style["basic-list"],l.$style["basic-list--small-margin"]])},[s("li",{class:t([l.$style["basic-list__item"],"color-white"])},[s("div",{class:t(l.$style["basic-list__symbol"])},null,2),s("div",{class:t(l.$style["basic-list__content"])}," 소득확인을 위한 서류: 소득금액증명원, 원천징수영수증, 건강보험료납부확인서 등 ",2)],2)],2)],2)]),default:o(()=>[i(c,{class:"display-block"}),Z]),_:1})],2)],2)],2),s("div",{class:t([l.$style["upload-file"],l.$style["upload-file--inside"],l.$style["upload-file--child"]])},[s("ul",{class:t(l.$style["upload-file__list"])},[(p(),b(r,null,y(4,u=>s("li",{key:u,class:t(l.$style["upload-file__item"])},[s("div",{class:t(l.$style["upload-file__icon"])},[i(d)],2),s("div",{class:t(l.$style["upload-file__content"])},[s("div",{class:t(l.$style["upload-file__name"])}," 첨부된파일명입력.pdf ",2)],2),s("div",{class:t(l.$style["upload-file__button"])},[i(_,{line:!0,theme:"quaternary",size:"small"},{default:o(()=>[a(" 삭제 ")]),_:1})],2)],2)),64))],2)],2)]),s("li",x,[s("div",{class:t(l.$style["upload-button"])},[s("input",{type:"file",id:"AF_P07_p015_upload004",class:t(l.$style["upload-button__input"])},null,2),s("div",{class:t(l.$style["upload-button__block"])},[s("span",{class:t(l.$style["upload-button__img"])},[i(n)],2),s("label",{for:"AF_P07_p015_upload004",class:t(l.$style["upload-button__label"])}," 기타서류 ",2),s("div",{class:t(l.$style["upload-button__tooltip"])},[i(m,null,{contents:o(()=>[s("section",{class:t(l.$style["tooltip-section"])},[s("h3",{class:t(l.$style["tooltip-section__title"])}," 기타서류 ",2),s("ul",{class:t([l.$style["basic-list"],l.$style["basic-list--small-margin"]])},[s("li",{class:t([l.$style["basic-list__item"],"color-white"])},[s("div",{class:t(l.$style["basic-list__symbol"])},null,2),s("div",{class:t(l.$style["basic-list__content"])}," 심사를 위한 추가서류: 재산세납입증명원, 전문직증빙서류 등 ",2)],2)],2)],2)]),default:o(()=>[i(c,{class:"display-block"}),ll]),_:1})],2)],2)],2),s("div",{class:t([l.$style["upload-file"],l.$style["upload-file--inside"],l.$style["upload-file--child"]])},[s("ul",{class:t(l.$style["upload-file__list"])},[(p(),b(r,null,y(4,u=>s("li",{key:u,class:t(l.$style["upload-file__item"])},[s("div",{class:t(l.$style["upload-file__icon"])},[i(d)],2),s("div",{class:t(l.$style["upload-file__content"])},[s("div",{class:t(l.$style["upload-file__name"])}," 첨부된파일명입력.pdf ",2)],2),s("div",{class:t(l.$style["upload-file__button"])},[i(_,{line:!0,theme:"quaternary",size:"small"},{default:o(()=>[a(" 삭제 ")]),_:1})],2)],2)),64))],2)],2)])]),s("ul",{class:t([l.$style["basic-list"],l.$style["basic-list--regular-margin"],"row-margin-contents"])},[s("li",{class:t(l.$style["basic-list__item"])},[s("div",{class:t(l.$style["basic-list__symbol"])},null,2),s("div",{class:t([l.$style["basic-list__content"],"font-weight-light"])}," 서류등록파일은 이미지 파일만 가능합니다. (jpg, jpeg, png, gif 파일) ",2)],2),s("li",{class:t(l.$style["basic-list__item"])},[s("div",{class:t(l.$style["basic-list__symbol"])},null,2),s("div",{class:t([l.$style["basic-list__content"],"font-weight-light"])}," 서류등록파일은 1회 접속 시 최대 5개까지 등록 가능하며 추가적인 서류등록을 원하실 경우 서류등록 메뉴에 재접속하여 추가등록해 주세요. ",2)],2),s("li",{class:t(l.$style["basic-list__item"])},[s("div",{class:t(l.$style["basic-list__symbol"])},null,2),s("div",{class:t([l.$style["basic-list__content"],"font-weight-light"])}," 고객님께서 제출하신 서류는 본 금융거래 이외의 다른 목적으로 사용되지 않습니다. ",2)],2),s("li",{class:t(l.$style["basic-list__item"])},[s("div",{class:t(l.$style["basic-list__symbol"])},null,2),s("div",{class:t([l.$style["basic-list__content"],"font-weight-light"])}," 외국인 : 국내거소사실증명원, 국내거소신고증(앞/뒷면) ",2)],2),s("li",{class:t(l.$style["basic-list__item"])},[s("div",{class:t(l.$style["basic-list__symbol"])},null,2),s("div",{class:t([l.$style["basic-list__content"],"font-weight-light"])}," 렌터카 임직원 상품 승계 시 임직원 증빙자료를 꼭 등록해주세요. ",2)],2)],2)]),i(B,null,{default:o(()=>[i(P,null,{default:o(()=>[i(_,null,{default:o(()=>[a("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const tl={$style:J},hl=w(K,[["render",sl],["__cssModules",tl]]);export{hl as default};
//# sourceMappingURL=AF_P07_p015-fe463e34.js.map
