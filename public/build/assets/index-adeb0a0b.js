import{d as U,r as d,o as $,c as l,l as w,g as s,w as a,h as k,A as b,f as n,i as e,F as E,m as I,j as o,t as r,e as u,n as m}from"./app-fa5d0039.js";import{a as L,B as M}from"./index-db91f07a.js";const T={class:"grid grid-cols-12 gap-4"},q={class:"col-span-12 lg:col-span-12"},z=e("div",{class:"flex justify-between mb-12 items-center"},[e("h2",{class:"text-xl"},"لیست کاربران")],-1),G=e("thead",null,[e("tr",null,[e("th",{class:"text-right whitespace-nowrap"}," نام کاربری "),e("th",{class:"text-right whitespace-nowrap"},"نام"),e("th",{class:"text-right whitespace-nowrap"},"ایمیل"),e("th",{class:"text-right whitespace-nowrap"}," سطح کاربری "),e("th",{class:"text-right whitespace-nowrap"}," آیدی تلگرام "),e("th",{class:"text-right whitespace-nowrap"}," کیف پول "),e("th",{class:"text-right whitespace-nowrap"},"وضعیت"),e("th",{class:"text-right whitespace-nowrap"}," زمان ایجاد "),e("th",{class:"text-right whitespace-nowrap"},"عملیات")])],-1),H={class:"whitespace-nowrap"},J={class:"whitespace-nowrap"},K={class:"whitespace-nowrap"},O={class:"whitespace-nowrap"},P={class:"whitespace-nowrap"},Q={class:"whitespace-nowrap"},R={class:"whitespace-nowrap"},W={class:"whitespace-nowrap"},X={class:"flex items-center"},te=U({__name:"index",setup(Y){const f=d(!0),i=d(!1),h=d(!1),x=d([]),y=d(null),g=async()=>{const{data:_}=await b.get("/api/panel/users");x.value=_.data,f.value=!1},V=async()=>{const{data:_}=await b.delete(`/api/panel/users/${y.value.id}`);_.status==200&&(i.value=!1,g(),h.value=!0)};return $(()=>{g()}),(_,c)=>{const p=l("v-chip"),v=l("v-btn"),B=l("v-table"),C=l("v-card-title"),N=l("v-card-text"),S=l("v-spacer"),D=l("v-card-actions"),j=l("v-card"),A=l("v-dialog"),F=l("v-snackbar");return n(),w("div",null,[s(k(M),{animated:"",loading:f.value},{template:a(()=>[e("div",T,[e("div",q,[s(k(L),{variant:"card",class:"h-[300px]"})])])]),default:a(()=>[z,s(B,{"fixed-header":""},{default:a(()=>[G,e("tbody",null,[(n(!0),w(E,null,I(x.value,t=>(n(),w("tr",{key:t.id},[e("td",null,[e("div",H,r(t==null?void 0:t.username),1)]),e("td",null,[e("div",J,r(t==null?void 0:t.first_name),1)]),e("td",null,[e("div",K,r(t==null?void 0:t.email),1)]),e("td",null,[e("div",O,[t.is_superuser?(n(),u(p,{key:0,color:"primary","text-color":"white"},{default:a(()=>[o(" ادمین ")]),_:1})):(n(),u(p,{key:1,"text-color":"white"},{default:a(()=>[o(" کاربر عادی ")]),_:1}))])]),e("td",null,[e("div",P,r(t==null?void 0:t.uid),1)]),e("td",null,[e("div",Q,r(t==null?void 0:t.wallet),1)]),e("td",null,[e("div",R,[t.status=="active"?(n(),u(p,{key:0,color:"green","text-color":"white"},{default:a(()=>[o(" فعال ")]),_:1})):m("",!0),t.status=="ban"?(n(),u(p,{key:1,color:"red","text-color":"white"},{default:a(()=>[o(" مسدود شده ")]),_:1})):m("",!0)])]),e("td",null,[e("div",W,r(t==null?void 0:t.created_at),1)]),e("td",null,[e("div",X,[s(v,{to:{name:"panel-users-edit",params:{id:t.id}},"prepend-icon":"mdi-pencil-box-outline",class:"mr-4"},{default:a(()=>[o(" مشاهده ")]),_:2},1032,["to"])])])]))),128))])]),_:1})]),_:1},8,["loading"]),s(A,{modelValue:i.value,"onUpdate:modelValue":c[1]||(c[1]=t=>i.value=t),persistent:"",width:"350px"},{default:a(()=>[s(j,null,{default:a(()=>[s(C,{class:""},{default:a(()=>[o(" آیا از حذف این آیتم اطمینان دارید؟ ")]),_:1}),s(N,null,{default:a(()=>[o("آیا از حذف این آیتم اطمینان دارید؟")]),_:1}),s(D,null,{default:a(()=>[s(S),s(v,{color:"green-darken-1",variant:"text",onClick:c[0]||(c[0]=t=>i.value=!1)},{default:a(()=>[o(" نه ")]),_:1}),s(v,{color:"green-darken-1",onClick:V},{default:a(()=>[o(" بله ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(F,{modelValue:h.value,"onUpdate:modelValue":c[2]||(c[2]=t=>h.value=t),timeout:2e3},{default:a(()=>[o(" کاربر با موفقیت حذف شد. ")]),_:1},8,["modelValue"])])}}});export{te as default};