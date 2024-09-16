import{w as i,x as c,u as d,j as a,L as o,h as s}from"./index-DE2IoC2z.js";const l=()=>{const e=i(c),r=d(),t=async()=>{e(""),localStorage.removeItem("token"),r("/auth/login")};return a.jsxs("nav",{className:"bg-gray-100 px-10 xl:px-32 w-full h-20 flex justify-between items-center",children:[a.jsxs("div",{className:"flex gap-16 items-center",children:[a.jsx(o,{to:"/dashboard",className:"text-3xl font-bold",children:"Logo"}),a.jsxs("div",{className:"flex gap-4 items-center capitalize font-medium",children:[a.jsx(o,{to:"/dashboard",className:`${location.pathname==="/dashboard"?"underline text-main":""} hover:underline`,children:"Booking"}),a.jsx(o,{to:"/dashboard/prices",className:`${location.pathname==="/dashboard/prices"?"underline text-main":""} hover:underline`,children:"Prices"})]})]}),a.jsx("button",{onClick:t,className:"hover:underline text-sm font-bold",children:"Logout"})]})},m=async()=>{try{const e=await s.get("/admin/get-orders");if(e)return e.data}catch(e){throw console.error(`Error getting orders ${e.message}`),new Error(`Error getting orders ${e.message}`)}},p=async(e,r)=>{try{const t=new FormData;t.append("ticket",r);const n=await s.post(`/admin/upload-ticket/${e}`,t,{headers:{"Content-Type":"multipart/form-data"}});if(n)return n.data}catch(t){throw console.error(`Error uploading invoice ${t.message}`),new Error(`Error uploading invoice ${t.message}`)}},u=async e=>{try{const r=await s.get(`/admin/get-single-order/${e}`);if(r)return r.data}catch(r){throw console.error(`Error getting order status ${r.message}`),new Error(`Error getting order status ${r.message}`)}},h=async()=>{try{const e=await s.get("/admin/getPriceList");if(e)return e.data}catch(e){throw console.error(`Error getting price list ${e.message}`),new Error(`Error getting price list ${e.message}`)}},w=async e=>{try{const r=await s.post("/admin/addPrice",e);if(r)return r.data}catch(r){throw console.error(`Error adding price ${r.message}`),new Error(`Error adding price ${r.message}`)}},x=async e=>{try{const r=await s.put("/admin/updatePrice",e);if(r)return r.data}catch(r){throw console.error(`Error updating price ${r.message}`),new Error(`Error updating price ${r.message}`)}},E=async e=>{try{const r=await s.patch("/admin/deletePrice",{_id:e});if(r)return r.data}catch(r){throw console.error(`Error updating price ${r.message}`),new Error(`Error updating price ${r.message}`)}};export{l as N,u as a,h as b,x as c,E as d,w as e,m as g,p as u};
