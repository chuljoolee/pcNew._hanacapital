import{_ as O,I as R,a as $,B as A,b as U}from"./index-d398c97a.js";import{P as G}from"./PageContents-dce8af0f.js";import{L as J}from"./LocationBar-cda5e9d6.js";import{P as Q,a as W}from"./PageTitle-41c83c03.js";import{S as X}from"./StepProgress-89b3fdfc.js";import{P as Y}from"./PageHeadRow-55682868.js";import{P as Z}from"./PageMainText-a4108181.js";import{N as tt}from"./NoticeText-46024976.js";import{B as et}from"./BasicBox-ab7d7c5d.js";import{K as ot,a as at,b as lt,c as st}from"./KeyValueText-5e11de8c.js";import{C as rt,a as nt}from"./CheckBoxObject-e4e3f2bc.js";import{C as it}from"./CheckBoxLabelText-a2d36a76.js";import{B as _t,a as ct}from"./ButtonListItem-c0517c0d.js";import{B as ut}from"./BasicButton-08e34afc.js";import{F as dt,a as mt}from"./FormListItem-1e89ed4d.js";import{F as ft}from"./FormInvalid-36b11f3d.js";import{F as pt}from"./FormInvalidMessage-258f4718.js";import{B as gt}from"./BasicDatepicker-9dd5f3d1.js";import{B as bt,a as Bt}from"./BoxCheckLabel-f17124cf.js";import{B as kt,a as xt}from"./BoxCheckListItem-fcbcad4b.js";import{B as ht}from"./BasicTooltip-e1339465.js";import{I as yt}from"./tooltip-da783c6a.js";import{r as wt,f as Pt,I as It,h as o,k as Ct,w as e,o as Mt,i as t,l as a,a as l,n}from"./vendor-de077561.js";import"./check-l-3f8bc26b.js";import"./calendar-4ec6bab2.js";const Tt={"tooltip-section":"_tooltip-section_kkqr7_1","tooltip-section__title":"_tooltip-section__title_kkqr7_4","tooltip-section__text":"_tooltip-section__text_kkqr7_13","basic-list":"_basic-list_kkqr7_23","basic-list__item":"_basic-list__item_kkqr7_29","basic-list__symbol":"_basic-list__symbol_kkqr7_48","basic-list__content":"_basic-list__content_kkqr7_102","basic-list--regular":"_basic-list--regular_kkqr7_107","basic-list--medium":"_basic-list--medium_kkqr7_118","basic-list--regular-margin":"_basic-list--regular-margin_kkqr7_132","basic-list--normal-margin":"_basic-list--normal-margin_kkqr7_135","basic-list--small-margin":"_basic-list--small-margin_kkqr7_138","tooltip-icon":"_tooltip-icon_kkqr7_142"},Lt={components:{PageContents:G,LocationBar:J,PageHead:Q,PageTitle:W,PageHeadRow:Y,StepProgress:X,PageMainText:Z,NoticeText:tt,BasicBox:et,KeyValue:ot,KeyValueItem:at,KeyValueTitle:lt,KeyValueText:st,CheckBox:rt,CheckBoxObject:nt,CheckBoxLabelText:it,ButtonList:_t,ButtonListItem:ct,BasicButton:ut,FormList:dt,FormListItem:mt,FormInvalid:ft,FormInvalidMessage:pt,InputBlock:R,InputBlockCell:$,BasicInput:A,BasicDatepicker:gt,BoxCheck:bt,BoxCheckLabel:Bt,BoxCheckList:kt,BoxCheckListItem:xt,BasicTooltip:ht,IconTooltip:yt},setup(){const s={ui:{header:U()}},y=wt({nameError:!1,address001Error:!1,address002Error:!1,collectionError:!1,dateError:!1});return Pt(()=>{s.ui.header.setActive(()=>"onlineBranch")}),It(()=>{s.ui.header.setActive()}),{state:y}}},Et={class:"row-margin-block row-margin-bottom-none"},vt={class:"row-margin-block"},Vt=l("h3",{class:"text-title-1 row-margin-contents"},"매수인 정보",-1),Ft={class:"flex-box row-margin-item-medium"},Nt=l("div",{class:"flex-box__cell"},[l("p",{class:"text-body-3 color-gray"},"매도용인감 주소")],-1),qt={class:"flex-box__cell flex-box__cell--small"},Kt=l("span",{class:"for-a11y"},"(도움말)",-1),St={class:"row-margin-block"},Ht=l("h3",{class:"text-title-1 row-margin-contents"},"수령/수취 정보",-1),jt={class:"row-margin-block"},zt=l("h3",{class:"text-title-1 row-margin-contents"},"정산 정보",-1),Dt=l("br",null,null,-1);function Ot(s,y,$t,r,At,Ut){const L=o("LocationBar"),E=o("PageTitle"),v=o("StepProgress"),V=o("PageHeadRow"),F=o("PageMainText"),N=o("PageHead"),u=o("KeyValueTitle"),d=o("KeyValueText"),m=o("KeyValueItem"),b=o("KeyValue"),B=o("BasicBox"),k=o("NoticeText"),w=o("CheckBoxObject"),P=o("CheckBoxLabelText"),I=o("CheckBox"),c=o("BasicInput"),i=o("InputBlockCell"),_=o("InputBlock"),f=o("FormInvalidMessage"),p=o("FormInvalid"),g=o("FormListItem"),x=o("BasicButton"),q=o("IconTooltip"),K=o("BasicTooltip"),h=o("FormList"),C=o("BoxCheckLabel"),M=o("BoxCheck"),T=o("BoxCheckListItem"),S=o("BoxCheckList"),H=o("BasicDatepicker"),j=o("ButtonListItem"),z=o("ButtonList"),D=o("PageContents");return Mt(),Ct(D,null,{head:e(()=>[t(L,{data:[{text:"홈",to:"/main/home"},{text:"온라인 지점",to:"/"},{text:"계약정보"},{text:"만기후처리"},{text:"구매 신청",to:"/"}]})]),default:e(()=>[t(N,null,{default:e(()=>[t(V,null,{right:e(()=>[t(v,{total:5,current:2})]),default:e(()=>[t(E,{align:"left"},{default:e(()=>[a("만기후처리 구매 신청")]),_:1})]),_:1}),t(F,{align:"left"},{default:e(()=>[a("구매 정보를 입력해 주세요")]),_:1})]),_:1}),l("div",null,[t(B,null,{default:e(()=>[t(b,null,{default:e(()=>[t(m,null,{default:e(()=>[t(u,null,{default:e(()=>[a("이전서류발송예정일자")]),_:1}),t(d,null,{default:e(()=>[a("2023.01.10")]),_:1})]),_:1})]),_:1})]),_:1}),t(k,{classNames:{wrap:"color-red row-margin-contents-small"}},{default:e(()=>[a(" 매도용인감 발급 사정에 따라 변경될 수 있습니다. ")]),_:1})]),l("div",Et,[l("section",vt,[Vt,t(I,{id:"My_P08_p026_agree001",theme:"tertiary"},{default:e(()=>[t(w),t(P,null,{default:e(()=>[a("계약자 정보와 동일")]),_:1})]),_:1}),t(h,{classNames:{wrap:"row-margin-contents"}},{default:e(()=>[t(g,{titleText:"매수인명",target:"#My_P08_p026_name"},{default:e(()=>[t(p,{error:r.state.nameError},{default:e(()=>[t(_,{error:r.state.nameError},{default:e(()=>[t(i,{flexible:!0},{default:e(()=>[t(c,{title:"매수인명",id:"My_P08_p026_name"})]),_:1})]),_:1},8,["error"]),t(f,null,{default:e(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),t(g,{titleText:"매도용인감 주소",forceFocus:!0,target:"#My_P08_p026_address001Search"},{default:e(()=>[t(p,{error:r.state.address001Error},{default:e(()=>[t(_,{error:r.state.address001Error},{right:e(()=>[t(x,{size:"small",theme:"tertiary",id:"My_P08_p026_address001Search"},{default:e(()=>[a(" 검색 ")]),_:1})]),default:e(()=>[t(i,{flexible:!0},{default:e(()=>[t(c,{title:"매도용인감 주소 우편번호",disabled:!0,defaultValue:"01000"})]),_:1})]),_:1},8,["error"]),t(_,{error:r.state.address001Error,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:e(()=>[t(i,{flexible:!0},{default:e(()=>[t(c,{title:"매도용인감 도로명 주소",disabled:!0,defaultValue:"인천 서구 에코로 181"})]),_:1})]),_:1},8,["error"]),t(_,{error:r.state.address001Error,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:e(()=>[t(i,{flexible:!0},{default:e(()=>[t(c,{title:"매도용인감 상세 주소",disabled:!0,defaultValue:"하나금융 로비"})]),_:1})]),_:1},8,["error"]),t(f,null,{default:e(()=>[a("Error Message")]),_:1}),l("div",Ft,[Nt,l("div",qt,[t(K,null,{contents:e(()=>[l("section",{class:n(s.$style["tooltip-section"])},[l("h3",{class:n(s.$style["tooltip-section__title"])}," 매도용인감주소 안내 ",2),l("ul",{class:n([s.$style["basic-list"],s.$style["basic-list--small-margin"]])},[l("li",{class:n([s.$style["basic-list__item"],"color-white"])},[l("div",{class:n(s.$style["basic-list__symbol"])},null,2),l("div",{class:n(s.$style["basic-list__content"])}," 개인/개인사업자 : 등본지 주소 ",2)],2),l("li",{class:n([s.$style["basic-list__item"],"color-white"])},[l("div",{class:n(s.$style["basic-list__symbol"])},null,2),l("div",{class:n(s.$style["basic-list__content"])}," 법인사업자 : 사업자 주소 ",2)],2)],2)],2)]),default:e(()=>[t(q,{class:n(s.$style["tooltip-icon"])},null,8,["class"]),Kt]),_:1})])])]),_:1},8,["error"])]),_:1})]),_:1})]),l("section",St,[Ht,t(I,{id:"My_P08_p026_agree002",theme:"tertiary"},{default:e(()=>[t(w),t(P,null,{default:e(()=>[a("매도용 인감주소와 동일")]),_:1})]),_:1}),t(h,{classNames:{wrap:"row-margin-contents"}},{default:e(()=>[t(g,{titleText:"수령주소",forceFocus:!0,target:"#My_P08_p026_address002Search"},{default:e(()=>[t(p,{error:r.state.address002Error},{default:e(()=>[t(_,{error:r.state.address002Error},{right:e(()=>[t(x,{size:"small",theme:"tertiary",id:"My_P08_p026_address002Search"},{default:e(()=>[a(" 검색 ")]),_:1})]),default:e(()=>[t(i,{flexible:!0},{default:e(()=>[t(c,{title:"수령주소 우편번호",disabled:!0,defaultValue:"01000"})]),_:1})]),_:1},8,["error"]),t(_,{error:r.state.address002Error,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:e(()=>[t(i,{flexible:!0},{default:e(()=>[t(c,{title:"수령주소 주소",disabled:!0,defaultValue:"인천 서구 에코로 181"})]),_:1})]),_:1},8,["error"]),t(_,{error:r.state.address002Error,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:e(()=>[t(i,{flexible:!0},{default:e(()=>[t(c,{title:"수령주소 상세 주소",disabled:!0,defaultValue:"하나금융 로비"})]),_:1})]),_:1},8,["error"]),t(f,null,{default:e(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),t(g,{titleText:"수취방법",forceFocus:!0},{default:e(()=>[t(p,{error:r.state.collectionError},{default:e(()=>[t(S,null,{default:e(()=>[t(T,null,{default:e(()=>[t(M,{name:"My_P08_p026_collection_type",id:"My_P08_p026_collection_type_001",defaultChecked:!0},{default:e(()=>[t(C,null,{default:e(()=>[a("등기")]),_:1})]),_:1})]),_:1}),t(T,null,{default:e(()=>[t(M,{name:"My_P08_p026_collection_type",id:"My_P08_p026_collection_type_002"},{default:e(()=>[t(C,null,{default:e(()=>[a("퀵착불")]),_:1})]),_:1})]),_:1})]),_:1}),t(f,null,{default:e(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),l("section",jt,[zt,l("div",null,[t(B,null,{default:e(()=>[t(b,{wrap:!0},{default:e(()=>[t(m,null,{default:e(()=>[t(u,null,{default:e(()=>[a("정산금액")]),_:1}),t(d,null,{default:e(()=>[a("99,999,999 원")]),_:1})]),_:1}),t(m,null,{default:e(()=>[t(u,null,{default:e(()=>[a("입금계좌번호")]),_:1}),t(d,null,{default:e(()=>[a(" 하나"),Dt,a(" 21556-412-94556 ")]),_:1})]),_:1})]),_:1})]),_:1}),t(h,{classNames:{wrap:"row-margin-contents"}},{default:e(()=>[t(g,{titleText:"입금예약일자",target:"#My_P08_p020_dateButton"},{default:e(()=>[t(p,{error:r.state.dateError},{default:e(()=>[t(_,{error:r.state.dateError},{default:e(()=>[t(i,{flexible:!0},{default:e(()=>[t(H,{title:"입금예약일자",id:"My_P08_p020_date",buttonId:"My_P08_p020_dateButton"})]),_:1})]),_:1},8,["error"]),t(f,null,{default:e(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),t(k,{classNames:{wrap:"row-margin-item-medium"}},{default:e(()=>[a(" 차량번호 혹은 계약자명으로 입금 부탁드립니다. ")]),_:1})]),l("div",null,[t(B,null,{default:e(()=>[t(b,{wrap:!0},{default:e(()=>[t(m,null,{default:e(()=>[t(u,null,{default:e(()=>[a("정산금액")]),_:1}),t(d,null,{default:e(()=>[a("-99,999,999 원")]),_:1})]),_:1}),t(m,null,{default:e(()=>[t(u,null,{default:e(()=>[a("환불예정일자")]),_:1}),t(d,null,{default:e(()=>[a("2023.01.10")]),_:1})]),_:1})]),_:1})]),_:1}),t(k,{classNames:{wrap:"row-margin-contents-small"}},{default:e(()=>[a(" 환불예정일자는 회사 내부사정에 따라 변경 될 수 있습니다. ")]),_:1})])])]),t(z,null,{default:e(()=>[t(j,null,{default:e(()=>[t(x,null,{default:e(()=>[a("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const Rt={$style:Tt},Be=O(Lt,[["render",Ot],["__cssModules",Rt]]);export{Be as default};
//# sourceMappingURL=My_P08_p026-1023b59b.js.map
