(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520],{7397:function(e,t,s){Promise.resolve().then(s.bind(s,7222))},7222:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return i}});var r=s(7437);function n(e){let{car:t}=e;return(0,r.jsx)("div",{class:"lg:w-1/4 md:w-1/2 p-10 md:p-4 w-full",children:(0,r.jsxs)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:[(0,r.jsx)("a",{class:"block relative h-48 rounded overflow-hidden",children:(0,r.jsx)("img",{alt:"".concat(t.make," ").concat(t.model),class:"object-cover object-center w-full h-full block",src:t.image})}),(0,r.jsxs)("div",{class:"mt-4",children:[(0,r.jsx)("h3",{class:"text-gray-500 text-xs tracking-widest title-font mb-1",children:t.year}),(0,r.jsxs)("h2",{class:"text-white title-font text-lg font-medium",children:[t.make," ",t.model]}),(0,r.jsxs)("p",{class:"mt-1",children:["$",t.price.toLocaleString()," | ",t.mileage.toLocaleString()," Miles"]})]})]})})}function l(e){let{carGrid:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{class:"text-gray-400 bg-gray-950 body-font m-0 p-5",children:(0,r.jsx)("div",{class:"container p mx-auto mt-0",children:(0,r.jsx)("div",{class:"flex flex-wrap -m-4",children:Array.isArray(t)?t.map(e=>(0,r.jsx)(n,{car:e},e._id)):(0,r.jsx)("p",{children:"Loading Cars..."})})})})})}var a=s(4368),c=s(2265);function i(){let[e,t]=(0,c.useState)([]),[s,n]=(0,c.useState)(null),[i,o]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{fetch("https://car-marketplace-api.web.app/listings").then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.error("Failed to fetch:",e),n("Failed to get listings. Please try again.")}).finally(()=>{o(!1)})},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{setCarGrid:t}),(0,r.jsx)("main",{className:" min-h-screen flex-col items-center justify-between bg-gray-950",children:(0,r.jsx)(l,{carGrid:e})})]})}}},function(e){e.O(0,[368,971,596,744],function(){return e(e.s=7397)}),_N_E=e.O()}]);