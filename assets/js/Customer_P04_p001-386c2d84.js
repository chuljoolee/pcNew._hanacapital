import{_ as x,I as C,a as $,B as I,S,b as E}from"./index-d398c97a.js";import{P as A}from"./PageContents-dce8af0f.js";import{L}from"./LocationBar-cda5e9d6.js";import{P as R,a as z}from"./PageTitle-41c83c03.js";import{P as F,a as H,b as T}from"./PaginationNavNumber-d00e7f77.js";import{P as M}from"./PaginationNavEllipsis-a9ce0f18.js";import{E as V}from"./EventBanner-9014a289.js";import{R as D}from"./RoundStatus-88229120.js";import{f as U,I as j,h as s,k as q,w as e,o as c,i as t,l as a,a as l,n as i,c as g,j as h,F as y}from"./vendor-de077561.js";import"./pagination-next-e99400ae.js";const G="_empty_1kbke_27",J="_empty__text_1kbke_32",K={"board-search-bar":"_board-search-bar_1kbke_1","event-list":"_event-list_1kbke_6","event-list__list":"_event-list__list_1kbke_10","event-list__item":"_event-list__item_1kbke_20",empty:G,empty__text:J,"empty--secondary":"_empty--secondary_1kbke_40"},O={components:{PageContents:A,LocationBar:L,PageHead:R,PageTitle:z,InputBlock:C,InputBlockCell:$,BasicInput:I,SearchButton:S,PaginationNav:F,PaginationNavArrow:H,PaginationNavEllipsis:M,PaginationNavNumber:T,EventBanner:V,RoundStatus:D},setup(){const o={ui:{header:E()}};U(()=>{o.ui.header.setActive(()=>"customer"),o.ui.header.setDepthActive(()=>"customer004")}),j(()=>{o.ui.header.setActive(),o.ui.header.setDepthActive()})}},Q={class:"inline-wrap row-margin-item-medium"},W=l("h3",{class:"text-title-1 font-weight-medium ellipsis"}," 타이틀 노출 최대 1줄 타이틀 노출 최대 1줄 타이틀 노출 최대 1줄 ",-1),X=l("p",{class:"text-body-1 font-weight-light row-margin-small multi-ellipsis"}," 설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄 ",-1),Y=l("p",{class:"text-body-3 font-weight-light color-gray-tertiary row-margin-item-medium"}," 2022.12.01 ~ 2022.12.31 ",-1),Z={class:"inline-wrap row-margin-item-medium"},tt=l("h3",{class:"text-title-1 font-weight-medium ellipsis"}," 타이틀 노출 최대 1줄 타이틀 노출 최대 1줄 타이틀 노출 최대 1줄 ",-1),et=l("p",{class:"text-body-1 font-weight-light row-margin-small multi-ellipsis"}," 설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄 ",-1),at=l("p",{class:"text-body-3 font-weight-light color-gray-tertiary row-margin-item-medium"}," 2022.12.01 ~ 2022.12.31 ",-1);function nt(o,st,ot,it,ut,_t){const v=s("LocationBar"),b=s("PageTitle"),k=s("PageHead"),P=s("BasicInput"),d=s("InputBlockCell"),B=s("SearchButton"),w=s("InputBlock"),p=s("RoundStatus"),f=s("EventBanner"),u=s("PaginationNavArrow"),n=s("PaginationNavNumber"),_=s("PaginationNavEllipsis"),r=s("PaginationNav"),N=s("PageContents");return c(),q(N,{size:"wide"},{head:e(()=>[t(v,{data:[{text:"홈",to:"/main/home"},{text:"고객센터",to:"/"},{text:"이벤트",to:"/"}]})]),default:e(()=>[t(k,null,{default:e(()=>[t(b,null,{default:e(()=>[a("이벤트")]),_:1})]),_:1}),l("div",{class:i(o.$style["board-search-bar"])},[t(w,null,{default:e(()=>[t(d,{flexible:!0},{default:e(()=>[t(P,{type:"search",title:"게시물 검색어",placeholder:"검색어 입력"})]),_:1}),t(d,{type:"search"},{default:e(()=>[t(B)]),_:1})]),_:1})],2),l("div",{class:i(o.$style.empty)},[l("p",{class:i(o.$style.empty__text)},"검색된 결과가 없습니다.",2)],2),l("div",null,[l("div",{class:i(o.$style["event-list"])},[l("ul",{class:i(o.$style["event-list__list"])},[(c(),g(y,null,h(8,m=>l("li",{key:m,class:i(o.$style["event-list__item"])},[t(f,{thumb:"/images/_dummy/img-area.png",thumbFit:!0,tagName:"RouterLink",to:"/customer/Customer_P04_p002"},{default:e(()=>[l("div",Q,[t(p,{size:"small",theme:"duodenary"},{default:e(()=>[a("진행중")]),_:1})]),W,X,Y]),_:1})],2)),64)),(c(),g(y,null,h(4,m=>l("li",{key:m,class:i(o.$style["event-list__item"])},[t(f,{thumb:"/images/_dummy/img-area.png",thumbFit:!0,tagName:"RouterLink",to:"/customer/Customer_P04_p002",disabledStyle:!0},{default:e(()=>[l("div",Z,[t(p,{size:"small",theme:"duodenary"},{default:e(()=>[a("종료")]),_:1})]),tt,et,at]),_:1})],2)),64))],2)],2),t(r,null,{default:e(()=>[t(u,{type:"prev",disabled:!0}),t(n,{active:!0},{default:e(()=>[a("1")]),_:1}),t(n,null,{default:e(()=>[a("2")]),_:1}),t(n,null,{default:e(()=>[a("3")]),_:1}),t(n,null,{default:e(()=>[a("4")]),_:1}),t(n,null,{default:e(()=>[a("5")]),_:1}),t(n,null,{default:e(()=>[a("6")]),_:1}),t(n,null,{default:e(()=>[a("7")]),_:1}),t(_),t(n,null,{default:e(()=>[a("999")]),_:1}),t(u,{type:"next"})]),_:1}),t(r,null,{default:e(()=>[t(u,{type:"prev"}),t(n,null,{default:e(()=>[a("1")]),_:1}),t(_),t(n,null,{default:e(()=>[a("13")]),_:1}),t(n,null,{default:e(()=>[a("14")]),_:1}),t(n,{active:!0},{default:e(()=>[a("15")]),_:1}),t(n,null,{default:e(()=>[a("16")]),_:1}),t(n,null,{default:e(()=>[a("17")]),_:1}),t(_),t(n,null,{default:e(()=>[a("99")]),_:1}),t(u,{type:"next"})]),_:1}),t(r,null,{default:e(()=>[t(u,{type:"prev"}),t(n,null,{default:e(()=>[a("1")]),_:1}),t(_),t(n,null,{default:e(()=>[a("93")]),_:1}),t(n,null,{default:e(()=>[a("94")]),_:1}),t(n,null,{default:e(()=>[a("95")]),_:1}),t(n,null,{default:e(()=>[a("96")]),_:1}),t(n,null,{default:e(()=>[a("97")]),_:1}),t(n,null,{default:e(()=>[a("98")]),_:1}),t(n,{active:!0},{default:e(()=>[a("99")]),_:1}),t(u,{type:"next",disabled:!0})]),_:1})])]),_:1})}const lt={$style:K},bt=x(O,[["render",nt],["__cssModules",lt]]);export{bt as default};
//# sourceMappingURL=Customer_P04_p001-386c2d84.js.map
