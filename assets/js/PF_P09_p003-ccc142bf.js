import{_ as V,I as H,a as z,B as R,b as D}from"./index-d398c97a.js";import{L as U}from"./LocationBar-cda5e9d6.js";import{F as q}from"./FormInvalid-36b11f3d.js";import{F as O}from"./FormInvalidMessage-258f4718.js";import{F as j,a as G}from"./FormListItem-1e89ed4d.js";import{P as J}from"./PageContents-dce8af0f.js";import{S as K}from"./StepProgress-89b3fdfc.js";import{P as Q,a as W}from"./PageTitle-41c83c03.js";import{P as X}from"./PageHeadRow-55682868.js";import{P as Y}from"./PageMainText-a4108181.js";import{P as Z}from"./PageSubText-1ff5e6e4.js";import{S as $}from"./SecurityInput-3cdfd48b.js";import{B as ee,a as te}from"./BoxCheckListItem-fcbcad4b.js";import{B as re,a as ae}from"./BoxCheckLabel-f17124cf.js";import{B as oe}from"./BasicButton-08e34afc.js";import{F as le}from"./FormHelpText-cb903f0d.js";import{B as se,a as ne}from"./ButtonListItem-c0517c0d.js";import{B as ie}from"./BasicSelect-e31e6bad.js";import{N as ue}from"./NoticeText-46024976.js";import{T as _e}from"./TextButton-9ca2b6ee.js";import{r as de,f as me,I as ce,h as o,k as fe,w as t,o as pe,i as e,l as a,a as r,n as f}from"./vendor-de077561.js";const be={"basic-table":"_basic-table_1cnaf_1","basic-table__left-line":"_basic-table__left-line_1cnaf_75","basic-table--secondary":"_basic-table--secondary_1cnaf_78","not-table":"_not-table_1cnaf_82","text-button":"_text-button_1cnaf_95","estate-setting-info":"_estate-setting-info_1cnaf_99"},ge={components:{PageContents:J,LocationBar:U,PageHead:Q,PageTitle:W,PageHeadRow:X,StepProgress:K,PageMainText:Y,PageSubText:Z,FormList:j,FormListItem:G,FormInvalid:q,InputBlock:H,InputBlockCell:z,BasicInput:R,FormInvalidMessage:O,SecurityInput:$,BoxCheckList:ee,BoxCheckListItem:te,BoxCheck:re,BoxCheckLabel:ae,BasicButton:oe,FormHelpText:le,ButtonList:se,ButtonListItem:ne,BasicSelect:ie,NoticeText:ue,TextButton:_e},setup(){const d={ui:{header:D()}},h=de({nameError:!1,idNumberError:!1,businessNameError:!1,businessNumberError:!1,businessAddressError:!1,apartmentInfoError:!1,setAmountError:!1,residenceError:!1,limitAmountError:!1});return me(()=>{d.ui.header.setActive(()=>"personalLoan")}),ce(()=>{d.ui.header.setActive()}),{state:h}}},xe={class:"row-margin-block-small row-margin-bottom-none"},Pe=r("h3",{class:"text-title-1 row-margin-contents"},"소득구분",-1),he={class:"row-margin-block-small row-margin-bottom-none"},Be=r("h3",{class:"text-title-1 row-margin-contents"},"아파트 정보",-1),Fe=r("div",{class:"text-body-1 font-weight-medium"},"만원",-1),we={class:"flex-box align-items-start row-margin-item-medium"},Ie={class:"flex-box__cell flex-1"},Ee={class:"flex-box__cell flex-box__cell--medium"},Ne={class:"row-margin-container-medium"},Te=r("h4",{class:"text-body-1 row-margin-item-group"},"부동산설정정보",-1),ke=r("table",null,[r("colgroup",null,[r("col",{style:{width:"80px"}}),r("col",{style:{width:"120px"}}),r("col",{style:{width:"131px"}}),r("col"),r("col",{style:{width:"92px"}})]),r("thead",null,[r("tr",null,[r("th",null,"순위번호"),r("th",null,"등기목적"),r("th",null,"접수정보"),r("th",null,"주요등기사항"),r("th",null,"대상소유자")])]),r("tbody",null,[r("tr",null,[r("td",null,"3"),r("td",null,"근저당권설정"),r("td",null,"2021년2월5일 제4845호"),r("td",null,[a(" 채권최고금액"),r("br"),a("금330,000,000원"),r("br"),a(" 근저당권자 주식회사"),r("br"),a("국민은행 ")]),r("td",null,"박지혜")])])],-1),ye=[ke],Le=r("section",{class:"row-margin-container-medium"},[r("h4",{class:"text-body-1 row-margin-item-group"}," 표제부(전유 부분의 건물의 표시) 건물내역 "),r("p",{class:"text-body-3"},"철근콘크리트조60.69㎡")],-1),Ce=r("div",{class:"text-body-1 font-weight-medium"},"만원",-1);function ve(d,h,Se,l,Me,Ve){const E=o("LocationBar"),N=o("PageTitle"),T=o("StepProgress"),k=o("PageHeadRow"),y=o("PageMainText"),L=o("PageSubText"),C=o("PageHead"),n=o("BasicInput"),s=o("InputBlockCell"),i=o("InputBlock"),m=o("FormInvalidMessage"),u=o("FormInvalid"),_=o("FormListItem"),v=o("SecurityInput"),p=o("FormList"),b=o("BoxCheckLabel"),g=o("BoxCheck"),x=o("BoxCheckListItem"),B=o("BoxCheckList"),c=o("BasicButton"),F=o("FormHelpText"),w=o("ButtonListItem"),I=o("ButtonList"),A=o("BasicSelect"),P=o("NoticeText"),S=o("TextButton"),M=o("PageContents");return pe(),fe(M,null,{head:t(()=>[e(E,{data:[{text:"홈",to:"/main/home"},{text:"개인금융",to:"/"},{text:"사업자 주택담보대출",to:"/"}]})]),default:t(()=>[e(C,null,{default:t(()=>[e(k,null,{right:t(()=>[e(T,{total:3,current:2})]),default:t(()=>[e(N,{align:"left"},{default:t(()=>[a("사업자 주택담보대출")]),_:1})]),_:1}),e(y,{align:"left"},{default:t(()=>[a("고객정보를 입력해 주세요")]),_:1}),e(L,{align:"left"},{default:t(()=>[a(" 실제 정보와 상이할 경우 한도 및 금리가 달라질 수 있습니다. ")]),_:1})]),_:1}),e(p,null,{default:t(()=>[e(_,{titleText:"이름",target:"#PF_P09_p003_name",disabled:!0},{default:t(()=>[e(u,{error:l.state.nameError},{default:t(()=>[e(i,{error:l.state.nameError,disabled:!0},{default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{title:"이름",id:"PF_P09_p003_name",defaultValue:"김하나",disabled:!0})]),_:1})]),_:1},8,["error"]),e(m,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"주민등록번호",target:"#PF_P09_p003_idNumber",disabled:!0},{default:t(()=>[e(u,{error:l.state.idNumberError},{default:t(()=>[e(i,{error:l.state.idNumberError,disabled:!0},{default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{type:"number",pattern:"\\d*",title:"주민등록번호 앞 6자리",id:"PF_P09_p003_idNumber",defaultValue:"123456",disabled:!0})]),_:1}),e(s,{type:"sub"},{default:t(()=>[a("-")]),_:1}),e(s,{flexible:!0},{default:t(()=>[e(v,{title:"주민등록번호 뒤 7자리",dot:[!0,!0,!0,!0,!0,!0,!0],disabled:!0})]),_:1})]),_:1},8,["error"]),e(m,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),r("section",xe,[Pe,e(B,null,{default:t(()=>[e(x,null,{default:t(()=>[e(g,{name:"PF_P09_p003_incomeCheck",id:"PF_P09_p003_incomeCheck",defaultChecked:!0,disabled:!1},{default:t(()=>[e(b,null,{default:t(()=>[a("자영업자")]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{classNames:{wrap:"row-margin-container-medium"}},{default:t(()=>[e(_,{titleText:"상호명",target:"#PF_P09_p003_businessName",disabled:!1},{default:t(()=>[e(u,{error:l.state.businessNameError},{default:t(()=>[e(i,{error:l.state.businessNameError,disabled:!1},{default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{title:"상호명",id:"PF_P09_p003_businessName",disabled:!1})]),_:1})]),_:1},8,["error"]),e(m,null,{default:t(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"사업자번호",target:"#PF_P09_p003_businessNumber",disabled:!1},{default:t(()=>[e(u,{error:l.state.businessNumberError},{default:t(()=>[e(i,{error:l.state.businessNumberError,disabled:!1},{right:t(()=>[e(c,{size:"small",theme:"quaternary",disabled:!1},{default:t(()=>[a("확인")]),_:1})]),default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{pattern:"\\d*",title:"사업자번호",id:"PF_P09_p003_businessNumber",disabled:!1})]),_:1})]),_:1},8,["error"]),e(m,null,{default:t(()=>[a("Error Message")]),_:1}),e(F,null,{default:t(()=>[a("‘-’를 제외하고 입력해주세요.")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"사업자주소",target:"#PF_P09_p003_businessAddress",disabled:!1},{default:t(()=>[e(u,{error:l.state.businessAddressError},{default:t(()=>[e(i,{error:l.state.businessAddressError},{right:t(()=>[e(c,{size:"small",theme:"tertiary",id:"PF_P09_p003_businessAddress",disabled:!1},{default:t(()=>[a("검색")]),_:1})]),default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{title:"사업자주소",defaultValue:"01000",disabled:!0})]),_:1})]),_:1},8,["error"]),e(i,{error:l.state.businessAddressError,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{title:"사업자주소",defaultValue:"인천 서구 에코로 181",disabled:!0})]),_:1})]),_:1},8,["error"]),e(i,{error:l.state.businessAddressError,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{title:"사업자주소",defaultValue:"하나금융 로비",disabled:!0})]),_:1})]),_:1},8,["error"])]),_:1},8,["error"])]),_:1})]),_:1})]),e(I,null,{default:t(()=>[e(w,null,{default:t(()=>[e(c,null,{default:t(()=>[a("다음")]),_:1})]),_:1})]),_:1}),r("section",he,[Be,e(p,null,{default:t(()=>[e(_,{titleText:"아파트 정보",target:"#PF_P09_p003_apartmentInfo"},{default:t(()=>[e(u,{error:l.state.apartmentInfoError},{default:t(()=>[e(i,{error:l.state.apartmentInfoError},{right:t(()=>[e(c,{size:"small",theme:"tertiary",id:"PF_P09_p003_apartmentInfo"},{default:t(()=>[a("아파트 검색")]),_:1})]),default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{title:"아파트 정보",defaultValue:"인천광역시 연수구 송도동 39-1",disabled:!0})]),_:1})]),_:1},8,["error"]),e(i,{error:l.state.apartmentInfoError,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{title:"아파트 정보",defaultValue:"더샵 랜드마크시티",disabled:!0})]),_:1}),e(s,null,{default:t(()=>[e(A,{options:[{value:"1",label:"85㎡"},{value:"2",label:"100㎡"}],title:"아파트 평형",inputId:"PF_P09_p003_apartmentInfoArea",classNames:{wrap:"input-width-area"},defaultValue:"1"})]),_:1})]),_:1},8,["error"]),e(P,{classNames:{wrap:"row-margin-item-medium"}},{default:t(()=>[a(" 본인 소유 또는 배우자 공동소유만 대출진행 가능합니다. ")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"부동산 설정금액",titleOptionalText:"(선택)",target:"#PF_P09_p003_amount"},{default:t(()=>[e(u,{error:l.state.setAmountError},{default:t(()=>[e(i,{error:l.state.setAmountError},{innerRight:t(()=>[Fe]),default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{pattern:"\\d*",id:"PF_P09_p003_amount",title:"부동산 설정금액 (선택)",useDelete:!1,align:"right"})]),_:1})]),_:1},8,["error"]),e(m,null,{default:t(()=>[a("Error Message")]),_:1}),r("div",we,[r("div",Ie,[e(P,null,{default:t(()=>[a(" 등기부등본 조회버튼을 클릭하여 확인되는 하단의 채권최고액을 부동산설정금액란에 입력바랍니다. (근저당설정이 2건 이상일 경우 합산하여 입력) ")]),_:1})]),r("div",Ee,[r("div",{class:f(d.$style["text-button"])},[e(S,{theme:"secondary",underline:!0,block:!0,textSize:"regular"},{default:t(()=>[a(" 등기부등본 조회 ")]),_:1})],2)])])]),_:1},8,["error"]),r("div",{class:f(d.$style["estate-setting-info"])},[r("section",Ne,[Te,r("div",{class:f(d.$style["basic-table"])},ye,2),r("div",{class:f(d.$style["not-table"])},"기록사항 없음",2)]),Le],2)]),_:1}),e(_,{titleText:"소유지 거주여부",forceFocus:!0},{default:t(()=>[e(u,{error:l.state.residenceError},{default:t(()=>[e(B,null,{default:t(()=>[e(x,null,{default:t(()=>[e(g,{minSide:!0,name:"PF_P09_p003_residence",id:"PF_P09_p003_residence01",defaultChecked:!0},{default:t(()=>[e(b,null,{default:t(()=>[a("예")]),_:1})]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(g,{minSide:!0,name:"PF_P09_p003_residence",id:"PF_P09_p003_residence02"},{default:t(()=>[e(b,null,{default:t(()=>[a("아니오")]),_:1})]),_:1})]),_:1})]),_:1}),e(m,null,{default:t(()=>[a("Error Message")]),_:1}),e(P,{classNames:{wrap:"row-margin-item-medium"}},{default:t(()=>[a(" 주민등록등본 주소와 아파트 주소가 일치하면 ‘예‘, 다르면 ‘아니오’를 선택해주세요. ")]),_:1})]),_:1},8,["error"])]),_:1}),e(_,{titleText:"희망한도",target:"#PF_P09_p003_limitAmount"},{default:t(()=>[e(u,{error:l.state.limitAmountError},{default:t(()=>[e(i,{error:l.state.limitAmountError},{innerRight:t(()=>[Ce]),default:t(()=>[e(s,{flexible:!0},{default:t(()=>[e(n,{pattern:"\\d*",id:"PF_P09_p003_limitAmount",title:"희망한도",useDelete:!1,align:"right"})]),_:1})]),_:1},8,["error"]),e(m,null,{default:t(()=>[a("Error Message")]),_:1}),e(F,{classNames:{wrap:"align-right"}},{default:t(()=>[a("구천만원")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),e(I,null,{default:t(()=>[e(w,null,{default:t(()=>[e(c,null,{default:t(()=>[a("확인")]),_:1})]),_:1})]),_:1})]),_:1})}const Ae={$style:be},ot=V(ge,[["render",ve],["__cssModules",Ae]]);export{ot as default};
//# sourceMappingURL=PF_P09_p003-ccc142bf.js.map
