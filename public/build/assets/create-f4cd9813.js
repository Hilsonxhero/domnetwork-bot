import{d as R,r as i,u as U,p as B,o as N,c as s,l as S,g as t,w as u,A as p,f as A,k as D,i as n,j as _}from"./app-d91952c3.js";const M=n("div",{class:"mb-6"},[n("h2",{class:"text-xl"},"ایجاد پکیج")],-1),j={class:"grid grid-cols-12 gap-4"},E={class:"col-span-6"},F={class:"col-span-6"},T={class:"col-span-12"},$=n("div",null,"وضعیت",-1),G=R({__name:"create",setup(q){const r=i(!1),m=i(null),a=i({name:null,value:0,is_active:"active"}),c=i(!1),f=i([v=>v?!0:"نام   پکیج  الزامی می باشد"]),b=U(),g=B(),V=async v=>{const{valid:e}=await m.value.validate();if(e){r.value=!0;const l=new FormData;l.append("name",a.value.name),l.append("value",a.value.value),l.append("is_active",a.value.is_active);const{data:d}=await p.post("/api/panel/packages",l);d.status==200&&(c.value=!0,b.push({name:"panel-packages-index"}))}},h=async()=>{await p.get(`/api/panel/packages/${g.params.id}`)};return N(()=>{h()}),(v,e)=>{const l=s("v-text-field"),d=s("v-radio"),k=s("v-radio-group"),x=s("v-btn"),w=s("v-form"),y=s("v-sheet"),C=s("v-snackbar");return A(),S("div",null,[t(y,null,{default:u(()=>[M,t(w,{ref_key:"formRef",ref:m,"validate-on":"submit",onSubmit:D(V,["prevent"])},{default:u(()=>[n("div",j,[n("div",E,[t(l,{modelValue:a.value.name,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value.name=o),rules:f.value,label:"نام",density:"compact","single-line":"",variant:"solo"},null,8,["modelValue","rules"])]),n("div",F,[t(l,{type:"number",modelValue:a.value.value,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value.value=o),label:"مقدار",density:"compact","single-line":"","persistent-hint":"",variant:"solo",hint:"مقدار 0 به معنی بی نهایت می باشد"},null,8,["modelValue"])]),n("div",T,[t(k,{modelValue:a.value.is_active,"onUpdate:modelValue":e[2]||(e[2]=o=>a.value.is_active=o)},{label:u(()=>[$]),default:u(()=>[t(d,{label:"فعال",value:"1"}),t(d,{label:"غیرفعال",value:"0"})]),_:1},8,["modelValue"])])]),t(x,{loading:r.value,color:"light-blue-accent-4",type:"submit",block:"",class:"mt-2"},{default:u(()=>[_("ایجاد")]),_:1},8,["loading"])]),_:1},8,["onSubmit"])]),_:1}),t(C,{absolute:"",modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=o=>c.value=o),timeout:2e4},{default:u(()=>[_(" پکیج با موفقیت ایجاد شد. ")]),_:1},8,["modelValue"])])}}});export{G as default};