import{d as h,u as V,a as C,s as A,b as B,r as D,o as N,c as t,e as M,w as a,f as R,g as e,h as r,i as d,j as T,k as j}from"./app-19e5455c.js";const O={class:"pa-2"},P={class:"p-5"},E=h({__name:"Panel",setup(S){const c=V(),p=C(),{user:u}=A(p),{mobile:l,smAndDown:U,mdAndDown:$}=B(),o=D(!0),m=()=>{p.logout().then(()=>{c.push({name:"auth-login"})})};return N(()=>{l.value&&(o.value=!1)}),(q,i)=>{const n=t("v-list-item"),v=t("v-btn"),_=t("v-divider"),f=t("v-list"),g=t("v-navigation-drawer"),b=t("v-app-bar-nav-icon"),x=t("v-app-bar"),k=t("router-view"),w=t("v-main"),y=t("v-layout");return R(),M(y,null,{default:a(()=>[e(g,{temporary:r(l),permanent:!r(l),modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=s=>o.value=s),location:"right"},{prepend:a(()=>{var s;return[e(n,{lines:"two","prepend-avatar":"/panel/media/avatars/blank.png",title:(s=r(u))==null?void 0:s.username,subtitle:"کاربر ادمین"},null,8,["title"])]}),append:a(()=>[d("div",O,[e(v,{onClick:m,block:""},{default:a(()=>[T(" خروج از حساب کاربری ")]),_:1})])]),default:a(()=>[e(_),e(f,{density:"compact",nav:""},{default:a(()=>[e(n,{link:"","prepend-icon":"mdi-home-city",title:"داشبورد",to:{name:"panel-dashboard"}}),e(n,{"prepend-icon":"mdi-server-outline",title:"سرورها",value:"servers",to:{name:"panel-servers-index"}}),e(n,{"prepend-icon":"mdi-calendar-clock",title:"بازه های زمانی",value:"durations",to:{name:"panel-durations-index"}}),e(n,{"prepend-icon":"mdi-package-variant-closed",title:"پکیج ها",value:"packages",to:{name:"panel-packages-index"}}),e(n,{"prepend-icon":"mdi-access-point",title:" مدیریت سرویس ها",value:"services",to:{name:"panel-services-index"}}),e(n,{"prepend-icon":"mdi-credit-card-outline",title:" مدیریت تراکنش ها",value:"payments",to:{name:"panel-payments-index"}}),e(n,{"prepend-icon":"mdi-connection",title:"راهنمای اتصال",value:"platforms",to:{name:"panel-platforms-index"}}),e(n,{"prepend-icon":"mdi-lifebuoy",title:"پیام های پشتیبانی",value:"messages",to:{name:"panel-messages-index"}}),e(n,{"prepend-icon":"mdi-account-group",title:"کاربران",value:"users",to:{name:"panel-users-index"}})]),_:1})]),_:1},8,["temporary","permanent","modelValue"]),e(x,{title:""},{default:a(()=>[e(b,{variant:"text",onClick:i[1]||(i[1]=j(s=>o.value=!o.value,["stop"]))})]),_:1}),e(w,null,{default:a(()=>[d("div",P,[e(k)])]),_:1})]),_:1})}}});export{E as default};