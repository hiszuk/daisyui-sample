import{R as f,a as B,j as t,b as e,c as g,d as w,L as h,r as m,F as M,u as P,O as A,H as j,e as U,f as V,C as $,X as z,Y as H,g as W,h as L,i as S,k as N,l as D,N as F,m as R,n as O,o as Z,B as G}from"./vendor.fb8ac605.js";const T=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}};T();const v=f({key:"DarkMode",default:!1}),_=(a,r)=>Array.from(a.reduce((i,n,s,l)=>{const c=r(n,s,l),o=i.get(c);return o?o.push(n):i.set(c,[n]),i},new Map)),x=f({key:"GlobalCart",default:[]}),q=B({key:"GlobalCartAmount",get:({get:a})=>{const r=a(x),i=_(r,s=>s.id).map(([s,l])=>{var c;return{id:s,title:((c=l.find(o=>o.id===s))==null?void 0:c.title)||"",qty:l.reduce(o=>o+1,0),amount:l.reduce((o,p)=>o+p.unitPrice,0)}}),n=i.reduce((s,l)=>s+l.amount,0);return{cartItems:i,totalAmount:n}}}),y=f({key:"NarrowSidebar",default:!1}),d="/daisyui-sample",K=({cartItems:a,totalAmount:r})=>{const i=new Intl.NumberFormat("ja-JP",{style:"currency",currency:"USD"}).format(r);return t("div",{children:[t("table",{className:"table table-compact table-zebra w-full",children:[e("thead",{children:t("tr",{children:[e("th",{children:"Items"}),e("th",{children:"Qty"}),e("th",{children:"Subtotal"})]})}),e("tbody",{children:a.map(n=>t("tr",{children:[e("td",{children:n.title}),e("td",{className:"text-right",children:n.qty}),e("td",{className:"text-right font-mono",children:new Intl.NumberFormat("ja-JP",{style:"currency",currency:"USD"}).format(n.amount)})]},n.id))})]}),e("div",{className:"my-4 w-full stats shadow",children:t("div",{className:"stat",children:[e("div",{className:"stat-title",children:"Total Amount"}),e("div",{className:"stat-value text-accent text-right text-3xl",children:i})]})})]})},Y=()=>{const[a,r]=g(v),[i,n]=g(y),[s,l]=g(x),c=()=>{l([])},o=w(q);return t("div",{className:"navbar bg-base-300 shadow-xl",children:[e("div",{className:"flex-none",children:e("button",{className:"btn btn-square btn-ghost",onClick:()=>n(!i),children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-5 h-5 stroke-current",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})}),e("div",{className:"flex-1",children:e("a",{className:"btn btn-ghost normal-case text-xl",children:"daisyUI"})}),t("div",{className:"flex-none items-center",children:[e("div",{children:t("label",{className:"swap swap-rotate btn btn-ghost btn-circle",children:[e("input",{type:"checkbox",onClick:()=>r(!a)}),e("svg",{className:"swap-on fill-current w-6 h-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:e("path",{d:"M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"})}),e("svg",{className:"swap-off fill-current w-6 h-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:e("path",{d:"M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"})})]})}),t("div",{className:"dropdown dropdown-end",children:[e("label",{tabIndex:0,className:"btn btn-ghost btn-circle",children:t("div",{className:"indicator",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),s.length>0&&e("span",{className:"badge badge-sm indicator-item bg-primary-focus border-0",children:s.length>99?"99+":s.length})]})}),s.length>0&&e("div",{tabIndex:0,className:"mt-3 card card-compact dropdown-content w-64 bg-base-200 shadow",children:t("div",{className:"card-body",children:[e(K,{cartItems:o.cartItems,totalAmount:o.totalAmount}),e("div",{className:"card-actions",children:e("button",{className:"btn btn-primary btn-block",onClick:c,children:"Clear cart"})})]})})]}),t("div",{className:"dropdown dropdown-end",children:[e("label",{tabIndex:0,className:"btn btn-ghost btn-circle avatar",children:e("div",{className:"w-10 rounded-full",children:e("img",{src:"https://api.lorem.space/image/face?hash=33791"})})}),t("ul",{tabIndex:0,className:"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52",children:[e("li",{children:t("a",{className:"justify-between",children:["Profile",e("span",{className:"badge bg-primary-focus border-0",children:"New"})]})}),e("li",{children:e("a",{children:"Settings"})}),e("li",{children:e(h,{to:`${d}/logout`,children:"Logout"})})]})]})]})]})},J=()=>t("footer",{className:"footer items-center p-4 bg-neutral text-neutral-content",children:[t("div",{className:"items-center grid-flow-col",children:[e("svg",{width:"30",height:"30",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",className:"fill-current",children:e("path",{d:"M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"})}),t("p",{children:["Copyright \xA9 ",new Date().getFullYear()," - All right reserved"]})]}),t("div",{className:"grid-flow-col gap-4 md:place-self-center md:justify-self-end",children:[e("a",{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:e("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})}),e("a",{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:e("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"})})}),e("a",{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:e("path",{d:"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"})})})]})]}),u=[`${d}/`,`${d}/info`,`${d}/stats`],X=()=>{const a="text-primary-content bg-primary",[r,i]=m.exports.useState([a,"",""]),n=P();return m.exports.useEffect(()=>{const s=n.pathname,l=u.findIndex(o=>o===s)||0,c=r.map((o,p)=>p===l?a:"");i(c)},[n]),t("ul",{className:"menu bg-base-200 w-48",children:[e("li",{className:r[0],children:t(h,{to:u[0],children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),"Home"]})}),e("li",{className:r[1],children:t(h,{to:u[1],children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Info"]})}),e("li",{className:r[2],children:t(h,{to:u[2],children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),"Stats"]})})]})},Q=()=>{const a="text-primary-content bg-primary",[r,i]=m.exports.useState([a,"",""]),n=P();return m.exports.useEffect(()=>{const s=n.pathname,l=u.findIndex(o=>o===s)||0,c=r.map((o,p)=>p===l?a:"");i(c)},[n]),t("ul",{className:"menu bg-base-200",children:[e("li",{className:r[0],children:e("div",{className:"tooltip tooltip-right tooltip-secondary z-40","data-tip":"Home",children:e(h,{to:u[0],children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})})})}),e("li",{className:r[1],children:e("div",{className:"tooltip tooltip-right tooltip-secondary z-40","data-tip":"Info",children:e(h,{to:u[1],children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})})})}),e("li",{className:r[2],children:e("div",{className:"tooltip tooltip-right tooltip-secondary z-40","data-tip":"Stats",children:e(h,{to:u[2],children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})})})})})]})},ee=()=>{const a=w(y),[r,i]=m.exports.useState(""),[n,s]=m.exports.useState("");return m.exports.useEffect(()=>{const l=a?"hidden":"hidden md:block",c=a?"block":"block md:hidden";s(l),i(c)},[a]),t(M,{children:[e("div",{className:`${r}`,children:e(Q,{})}),e("div",{className:`${n}`,children:e(X,{})})]})},te=()=>{const a=w(v),[r,i]=m.exports.useState("dark");return m.exports.useEffect(()=>{i(a?"dark":"garden")},[a]),t("div",{"data-theme":r,className:"text-base-content bg-base-100 flex flex-col min-h-screen",children:[e("header",{children:e(Y,{})}),t("main",{className:"grow flex",children:[e("div",{className:"flex-none h-f bg-base-200",children:e(ee,{})}),e("div",{className:"flex-auto justify-center",children:e("div",{className:"w-11/12 mx-auto my-8",children:e(A,{})})})]}),e("footer",{children:e(J,{})})]})},ae=()=>{const a=w(v),[r,i]=m.exports.useState("dark");return m.exports.useEffect(()=>{i(a?"dark":"garden")},[a]),e("main",{className:"h-screen w-full flex flex-col justify-center items-center bg-gray-800",children:e("div",{"data-theme":r,children:e(A,{})})})},se=({id:a,title:r="NO TITLE",description:i="Lorem ipsam",imageUrl:n="https://fakeimg.pl/400x225/?text=NO%20IMAGE",unitPrice:s=0})=>{const[l,c]=g(x),o=(p,I,E)=>{const C=[...l];C.push({id:p,title:I,unitPrice:E}),c(C)};return t("div",{className:"card card-compact bg-base-100 shadow-xl md:h-96",children:[e("figure",{children:e("img",{src:n,alt:r})}),t("div",{className:"card-body",children:[e("h2",{className:"card-title",children:r}),e("p",{children:i}),t("div",{className:"card-actions justify-between items-center",children:[t("div",{className:"ml-5 text-3xl font-bold text-accent-focus",children:["$",s]}),e("button",{className:"btn btn-primary",onClick:()=>o(a,r,s),children:"Buy Now"})]})]})]})},k=({title:a})=>{const r="vite x react x daisyUI sample";return t(j,{children:[e("title",{children:`${a}::${r}`}),e("meta",{name:"description",content:`${r}\u306E\u30B5\u30A4\u30C8\u3067\u3059 \u{1F449} ${a}`})]})},re=[{id:1,title:"Shoes",description:"If a dog chews shoes whose shoes does he choose?",imageUrl:"https://api.lorem.space/image/shoes?w=450&h=250",unitPrice:100},{id:2,title:"Watch",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",imageUrl:"https://api.lorem.space/image/watch?w=450&h=250",unitPrice:300},{id:3,title:"Fashion",description:"Sed do eiusmod tempor incididunt ut labore.",imageUrl:"https://api.lorem.space/image/fashion?w=450&h=250",unitPrice:200},{id:4,title:"Pizza",description:"Est ullamcorper eget nulla facilisi.",imageUrl:"https://api.lorem.space/image/pizza?w=450&h=250",unitPrice:20},{id:5,title:"Burger",description:"Gravida quis blandit turpis cursus in hac.",imageUrl:"https://api.lorem.space/image/burger?w=450&h=250",unitPrice:15},{id:6,title:"Drink",description:"Arcu cursus euismod quis viverra.",imageUrl:"https://api.lorem.space/image/drink?w=450&h=250",unitPrice:10}],ie=()=>t("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-5",children:[e(k,{title:"Home/Shopping Items"}),re.map(a=>e("div",{children:e(se,{id:a.id,title:a.title,description:a.description,imageUrl:a.imageUrl,unitPrice:a.unitPrice})},a.id))]}),b=({title:a="NO TITLE",description:r="Lorem ipsam",imageUrl:i="https://fakeimg.pl/400x225/?text=NO%20IMAGE",price:n=0,choosen:s})=>t("div",{className:"indicator",children:[s&&e("span",{className:"indicator-item indicator-center badge badge-accent text-primary-content",children:"Most Popular"}),t("div",{className:`card card-compact bg-base-100 ${s?"border-2 border-accent shadow-xl":"shadow-md"} transition duration-300`,children:[e("figure",{className:"h-48",children:e("img",{src:i,alt:a,className:"object-cover w-full h-full"})}),t("div",{className:"card-body mx-5 my-2",children:[e("h2",{className:"card-title",children:a}),e("p",{children:r}),t("div",{className:"mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl",children:["$",n]}),e("div",{className:"card-actions",children:t("button",{className:"btn btn-primary btn-block",children:["Buy ",a]})})]})]})]}),le=()=>t("div",{className:"px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20",children:[t("div",{className:"max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12",children:[e("div",{children:e("div",{className:"badge badge-primary",children:"Brand new"})}),e("h2",{className:"max-w-4xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto",children:"Choose your way. Advance everyday."}),e("p",{className:"text-base md:text-lg",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."})]}),t("div",{className:"grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto",children:[e(b,{title:"Basic",description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque.",imageUrl:"https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:12}),e(b,{title:"Advanced",description:"A flower in my garden, a mystery in my panties. Heart attack never was so close.",imageUrl:"https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:38,choosen:!0}),e(b,{title:"Pro",description:"We never had the chance to. Maybe it was the eleven months he spent in the womb.",imageUrl:"https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:78})]})]}),ne=()=>t("div",{children:[e(k,{title:"Info"}),e(le,{})]}),ce=[{name:"2013\u5E74",User:4e3,PV:2400},{name:"2014\u5E74",User:3e3,PV:1398},{name:"2015\u5E74",User:2e3,PV:9800},{name:"2016\u5E74",User:2780,PV:3908},{name:"2017\u5E74",User:1890,PV:4800},{name:"2018\u5E74",User:2390,PV:3800},{name:"2019\u5E74",User:3490,PV:4300},{name:"2020\u5E74",User:5700,PV:6300},{name:"2021\u5E74",User:6920,PV:6800}],oe=()=>e("div",{className:"max-w-xs md:max-w-5xl py-5 md:px-8 md:py-10 mx-auto",children:e("div",{className:"flex justify-center rounded-2xl bg-base-100 shadow-md text-xs py-2 md:text-sm md:py-5 md:px-5",children:e(U,{width:"100%",height:400,children:t(V,{width:900,height:400,data:ce,children:[e($,{strokeDasharray:"3 3"}),e(z,{dataKey:"name",interval:"preserveStartEnd"}),e(H,{interval:"preserveStartEnd"}),e(W,{}),e(L,{type:"natural",dataKey:"User",stroke:"#8884d8",strokeWidth:3,animationDuration:1e3}),e(L,{type:"monotone",dataKey:"PV",stroke:"#82ca9d",strokeWidth:3,animationDuration:1e3})]})})})}),de=()=>t("div",{className:"max-w-screen-xl px-4 md:px-8 mx-auto",children:[t("div",{className:"mb-8 md:mb-12",children:[e("h2",{className:"text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6",children:"Our Team by the numbers"}),e("p",{className:"max-w-screen-md text-primary md:text-lg text-center mx-auto",children:"This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated."})]}),e("div",{className:"flex justify-center",children:t("div",{className:"stats stats-vertical lg:stats-horizontal shadow",children:[t("div",{className:"stat",children:[e("div",{className:"stat-figure text-primary",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})})}),e("div",{className:"stat-title",children:"Total Likes"}),e("div",{className:"stat-value text-primary",children:"25.6K"}),e("div",{className:"stat-desc",children:"21% more than last month"})]}),t("div",{className:"stat",children:[e("div",{className:"stat-figure text-secondary",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e("div",{className:"stat-title",children:"Page Views"}),e("div",{className:"stat-value text-secondary",children:"2.6M"}),e("div",{className:"stat-desc",children:"21% more than last month"})]}),t("div",{className:"stat",children:[e("div",{className:"stat-figure text-secondary",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"})})}),e("div",{className:"stat-title",children:"New Users"}),e("div",{className:"stat-value",children:"4,200"}),e("div",{className:"stat-desc",children:"\u2197\uFE0E 400 (22%)"})]}),t("div",{className:"stat",children:[e("div",{className:"stat-figure text-secondary",children:e("div",{className:"avatar online",children:e("div",{className:"w-16 rounded-full",children:e("img",{src:"https://api.lorem.space/image/face?w=128&h=128"})})})}),e("div",{className:"stat-value",children:"86%"}),e("div",{className:"stat-title",children:"Tasks done"}),e("div",{className:"stat-desc text-secondary",children:"31 tasks remaining"})]})]})})]}),me=()=>t(M,{children:[e(k,{title:"Stats"}),e(de,{}),e(oe,{})]}),he=()=>{const a=S();return t("div",{className:"card lg:card-side text-neutral bg-base-100 shadow-xl",children:[e("figure",{children:e("img",{src:"https://picsum.photos/300/550",alt:"Login"})}),t("div",{className:"card-body",children:[e("h1",{className:"card-title text-2xl lg:text-3xl font-extrabold mb-5",children:"Welcome back!"}),t("button",{className:"btn btn-block",children:[e("div",{className:"pr-4",children:t("svg",{className:"w-6 h-6",viewBox:"0 0 40 40",children:[e("path",{d:"M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z",fill:"#FFC107"}),e("path",{d:"M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z",fill:"#FF3D00"}),e("path",{d:"M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z",fill:"#4CAF50"}),e("path",{d:"M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z",fill:"#1976D2"})]})}),"Sign in with google"]}),e("div",{className:"divider text-xs mb-0",children:"OR LOGIN WITH EMAIL"}),t("div",{className:"form-control w-full max-w-xs",children:[e("label",{className:"label",children:e("span",{className:"label-text",children:"Email Address"})}),e("input",{type:"text",placeholder:"your email address here",className:"input input-bordered input-primary w-full max-w-xs"})]}),t("div",{className:"form-control w-full max-w-xs",children:[t("label",{className:"label",children:[e("span",{className:"label-text",children:"Password"}),e("span",{className:"label-text-alt",children:e(h,{to:`${d}/`,className:"link-primary",children:"Forget Password?"})})]}),e("input",{type:"password",placeholder:"your password here",className:"input input-bordered input-primary w-full max-w-xs"})]}),e("div",{className:"card-actions justify-center mt-5",children:e("button",{className:"btn btn-block btn-primary",onClick:()=>a(`${d}/`),children:"Login"})}),e("div",{className:"divider text-xs mb-0",children:e(h,{to:`${d}/`,className:"link-primary",children:"OR SIGN UP"})})]})]})},ue=()=>{const a=N(v),r=N(x),i=N(y),n=S();return m.exports.useEffect(()=>{a(!1),r([]),i(!1),n(`${d}/login`)}),e("div",{className:"stats bg-warning text-warning-content w-80",children:t("div",{className:"stat",children:[e("div",{className:"stat-title text-2xl",children:"Logout in"}),e("div",{className:"stat-value text-5xl text-center",children:"Progress..."})]})})},pe=()=>e("div",{className:"stats bg-warning text-warning-content w-80",children:t("div",{className:"stat",children:[e("div",{className:"stat-title text-2xl",children:"Page Not Found..."}),e("div",{className:"stat-value text-7xl text-center",children:"404"}),e("div",{className:"stat-actions text-right",children:e(h,{to:`${d}`,children:e("button",{className:"btn btn-secondary",children:"GO HOME"})})})]})}),ge=()=>D([{element:e(te,{}),children:[{path:`${d}/`,element:e(ie,{})},{path:`${d}/info`,element:e(ne,{})},{path:`${d}/stats`,element:e(me,{})}]},{element:e(ae,{}),children:[{path:`${d}/login`,element:e(he,{})},{path:`${d}/logout`,element:e(ue,{})},{path:`${d}/404`,element:e(pe,{})}]},{path:"*",element:e(F,{to:`${d}/404`})}]);R.render(e(O.StrictMode,{children:e(Z,{children:e(G,{children:e(ge,{})})})}),document.getElementById("root"));
