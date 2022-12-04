import{C as g,j as b,k as R,c as W,w as e,M as L,o as j,a as o,$ as T,_,v as t,e as n,f as l,Q as v,d as p,a2 as y,N as k,a3 as O,W as $,P as E,R as f,a4 as J,a5 as Q,a6 as q,a7 as z,a8 as F,a9 as M,aa as G,ab as m,ac as H}from"./index.8a2bd1dd.js";import{_ as w}from"./SectionTitle.7d46d6a4.js";import{_ as A}from"./FormField.4411d742.js";import{_ as I}from"./FormCheckRadioGroup.e1c03a0f.js";import{C as K}from"./CardBoxComponentEmpty.f7dee3ce.js";import"./FormCheckRadio.9b52e34c.js";const X=t("p",null,"This is sample modal",-1),Y=t("p",null,"Lorem ipsum dolor",-1),Z=t("p",null,"This is sample modal",-1),ll=t("p",null,"Lorem ipsum dolor",-1),ol=t("p",null,"This is sample modal",-1),el=t("p",null,"Lorem ipsum dolor",-1),nl=f("Dark mode"),tl={class:"text-center py-24 lg:py-12 text-gray-500 dark:text-slate-400"},al=f("Modal examples"),il={class:"space-y-12"},ul=t("div",{class:"space-y-3"},[t("p",null,"Click to see in action")],-1),sl=t("div",{class:"space-y-3"},[t("p",null,"Click to see in action")],-1),dl=t("div",{class:"space-y-3"},[t("p",null,"Click to see in action")],-1),cl=t("h1",{class:"text-2xl text-gray-500 dark:text-slate-400"},"Notifications",-1),rl={class:"flex items-center justify-center mt-6"},ml=t("b",null,"Info state",-1),fl=f(". NotificationBar "),_l=t("b",null,"Success state",-1),bl=f(". NotificationBar "),pl=t("b",null,"Warning state",-1),hl=f(". NotificationBar "),gl=t("b",null,"Danger state",-1),vl=f(". NotificationBar "),wl=t("b",null,"Contrast",-1),xl=f(". NotificationBar "),Cl=f("Buttons"),Bl=f("Pills"),Vl=f("Cards"),kl={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},$l=t("div",{class:"space-y-3"},[t("p",null,"Card with title, icon & footer")],-1),yl=f(" Just body & footer "),Al={__name:"UiView",setup(Ol){const S=g(!1),D=g(!1),N=g(!1),U=g([]),r=b(()=>U.value.indexOf("outline")>-1),h=g([]),i=b(()=>h.value.indexOf("outline")>-1),u=b(()=>h.value.indexOf("small")>-1),s=b(()=>h.value.indexOf("disabled")>-1),d=b(()=>h.value.indexOf("rounded")>-1),x=g(["icon"]),C=b(()=>x.value.indexOf("outline")>-1),B=b(()=>x.value.indexOf("small")>-1),V=b(()=>x.value.indexOf("icon")>-1?J:null),P=R();return(Sl,a)=>(j(),W(L,null,{default:e(()=>[o(T,{modelValue:S.value,"onUpdate:modelValue":a[0]||(a[0]=c=>S.value=c),title:"Please confirm action","button-label":"Confirm","has-cancel":""},{default:e(()=>[X,Y]),_:1},8,["modelValue"]),o(T,{modelValue:D.value,"onUpdate:modelValue":a[1]||(a[1]=c=>D.value=c),title:"Unhandled exception",button:"danger"},{default:e(()=>[Z,ll]),_:1},8,["modelValue"]),o(T,{modelValue:N.value,"onUpdate:modelValue":a[2]||(a[2]=c=>N.value=c),title:"Success",button:"success"},{default:e(()=>[ol,el]),_:1},8,["modelValue"]),o(w,{first:""},{default:e(()=>[nl]),_:1}),o(v,null,{default:e(()=>[o(_,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"},{default:e(()=>[t("div",tl,[o(n,{label:"Toggle",color:"contrast",onClick:a[3]||(a[3]=c=>l(P).setDarkMode())})])]),_:1})]),_:1}),o(w,null,{default:e(()=>[al]),_:1}),o(v,null,{default:e(()=>[t("div",il,[o(_,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:a[4]||(a[4]=c=>S.value=!0)},{footer:e(()=>[o(p,null,{default:e(()=>[o(n,{label:"Confirm",color:"info"}),o(n,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[o(y,{title:"Please confirm action"},{default:e(()=>[o(n,{icon:l(Q),color:"whiteDark",small:"","rounded-full":""},null,8,["icon"])]),_:1}),ul]),_:1}),o(_,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:a[5]||(a[5]=c=>D.value=!0)},{footer:e(()=>[o(p,null,{default:e(()=>[o(n,{label:"Done",color:"danger"})]),_:1})]),default:e(()=>[o(y,{title:"Unhandled exception"}),sl]),_:1}),o(_,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:a[6]||(a[6]=c=>N.value=!0)},{footer:e(()=>[o(n,{label:"Done",color:"success"})]),default:e(()=>[o(y,{title:"Success"}),dl]),_:1})])]),_:1}),o(w,{custom:""},{default:e(()=>[cl,t("div",rl,[o(I,{modelValue:U.value,"onUpdate:modelValue":a[7]||(a[7]=c=>U.value=c),type:"switch",name:"notifications-switch",options:{outline:"Outline"}},null,8,["modelValue"])])]),_:1}),o(v,null,{default:e(()=>[o(k,{color:"info",icon:l(q),outline:l(r)},{right:e(()=>[o(n,{label:"Button",color:l(r)?"info":"white",outline:l(r),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[ml,fl]),_:1},8,["icon","outline"]),o(k,{color:"success",icon:l(z),outline:l(r)},{right:e(()=>[o(n,{label:"Button",color:l(r)?"success":"white",outline:l(r),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[_l,bl]),_:1},8,["icon","outline"]),o(k,{color:"warning",icon:l(F),outline:l(r)},{right:e(()=>[o(n,{label:"Button",color:l(r)?"warning":"white",outline:l(r),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[pl,hl]),_:1},8,["icon","outline"]),o(k,{color:"danger",icon:l(M),outline:l(r)},{right:e(()=>[o(n,{label:"Button",color:l(r)?"danger":"white",outline:l(r),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[gl,vl]),_:1},8,["icon","outline"]),o(k,{color:"contrast",icon:l(G),outline:l(r)},{default:e(()=>[wl,xl]),_:1},8,["icon","outline"])]),_:1}),o(w,null,{default:e(()=>[Cl]),_:1}),o(v,null,{default:e(()=>[o(_,null,{default:e(()=>[o(A,{label:"Settings"},{default:e(()=>[o(I,{modelValue:h.value,"onUpdate:modelValue":a[8]||(a[8]=c=>h.value=c),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",rounded:"Rounded",disabled:"Disabled"}},null,8,["modelValue"])]),_:1}),o(O),o(p,null,{default:e(()=>[o(n,{color:"lightDark",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"contrast",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"info",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"success",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"warning",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"danger",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"])]),_:1}),o(O),o(p,null,{default:e(()=>[o(n,{color:"lightDark",label:"Button",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"contrast",label:"Button",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"info",label:"Button",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"success",label:"Button",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"warning",label:"Button",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"danger",label:"Button",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"])]),_:1}),o(O),o(p,null,{default:e(()=>[o(n,{color:"lightDark",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"contrast",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"info",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"success",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"warning",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"danger",icon:l(m),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"])]),_:1})]),_:1})]),_:1}),o(w,null,{default:e(()=>[Bl]),_:1}),o(v,null,{default:e(()=>[o(_,null,{default:e(()=>[o(A,{label:"Settings"},{default:e(()=>[o(I,{modelValue:x.value,"onUpdate:modelValue":a[9]||(a[9]=c=>x.value=c),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",icon:"Icon"}},null,8,["modelValue"])]),_:1}),o(O),o(p,null,{default:e(()=>[o($,{color:"contrast",label:"Contrast",small:l(B),outline:l(C),icon:l(V)},null,8,["small","outline","icon"]),o($,{color:"info",label:"Info",small:l(B),outline:l(C),icon:l(V)},null,8,["small","outline","icon"]),o($,{color:"success",label:"Success",small:l(B),outline:l(C),icon:l(V)},null,8,["small","outline","icon"]),o($,{color:"warning",label:"Warning",small:l(B),outline:l(C),icon:l(V)},null,8,["small","outline","icon"]),o($,{color:"danger",label:"Danger",small:l(B),outline:l(C),icon:l(V)},null,8,["small","outline","icon"])]),_:1})]),_:1})]),_:1}),o(w,null,{default:e(()=>[Vl]),_:1}),o(v,null,{default:e(()=>[t("div",kl,[o(_,null,{footer:e(()=>[o(p,null,{default:e(()=>[o(n,{label:"Confirm",color:"info"}),o(n,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[o(y,{title:"With title & icon"},{default:e(()=>[o(n,{icon:l(H),color:"whiteDark","rounded-full":""},null,8,["icon"])]),_:1}),$l]),_:1}),o(_,null,{footer:e(()=>[o(p,null,{default:e(()=>[o(n,{label:"Confirm",color:"info"}),o(n,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[yl]),_:1})]),o(E,{icon:l(M),title:"Empty variation"},null,8,["icon"]),o(_,null,{default:e(()=>[o(K)]),_:1})]),_:1})]),_:1}))}};export{Al as default};