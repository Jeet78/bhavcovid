import{p as a,a as e,r as t,o as n,c as o,b as s,w as i,d as l,F as r,t as c,e as d,f as p,g as h,h as m,l as u,i as f,j as g,k as v,m as b,n as y,q as k,s as x,u as S,v as A,x as w,y as O,z as B}from"./vendor.28216193.js";!function(a=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(t){const n=new URL(a,location),o=a=>{URL.revokeObjectURL(a.src),a.remove()};self[e]=a=>new Promise(((t,s)=>{const i=new URL(a,n);if(self[e].moduleMap[i])return t(self[e].moduleMap[i]);const l=new Blob([`import * as m from '${i}';`,`${e}.moduleMap['${i}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){s(new Error(`Failed to import: ${a}`)),o(r)},onload(){t(self[e].moduleMap[i]),o(r)}});document.head.appendChild(r)})),self[e].moduleMap={}}}("/assets/");const I={},T=i();a("data-v-f696055c");const R={class:"header bg-blue-300"},M={class:"container mx-auto"},F={class:"app-title"},P=l("Bhav"),_=l("COVID "),j=s("p",{class:"app-subtitle"},"Covid Resources for Bhavnagar.",-1),C=s("p",null,null,-1);e();const H=T(((a,e,i,l,r,c)=>{const d=t("font-awesome-icon");return n(),o("header",R,[s("div",M,[s("h1",F,[s("span",null,[s(d,{icon:"hand-holding-medical",class:"inner-icon"}),P]),_]),j,C])])}));I.render=H,I.__scopeId="data-v-f696055c";const E={},L=i();a("data-v-4c7973d8");const N={class:"container mx-auto px-3"},K=l(" Disclaimer & Terms of use ");e();const G=L(((a,e,i,l,r,c)=>{const d=t("router-link");return n(),o("div",N,[s(d,{class:"footer-link",to:"/disclaimer"},{default:L((()=>[K])),_:1})])}));E.render=G,E.__scopeId="data-v-4c7973d8";const D={expose:[],setup:a=>(a,e)=>{const i=t("router-view");return n(),o(r,null,[s(I),s(i),s(E)],64)}};const U={props:{title:String,subtitle:String,link:String,icon:String}},V=i();a("data-v-70d042a7");const Y={class:"tile-icon pr-4"},q={class:"tile-content"},J={class:"tile-title"},$={class:"tile-description"};e();const W=V(((a,e,i,l,r,d)=>{const p=t("font-awesome-icon"),h=t("router-link");return n(),o(h,{class:"tile flex justify-items-center",to:i.link},{default:V((()=>[s("div",Y,[s(p,{icon:i.icon},null,8,["icon"])]),s("div",q,[s("p",J,c(i.title),1),s("p",$,c(i.subtitle),1)])])),_:1},8,["to"])}));U.render=W,U.__scopeId="data-v-70d042a7";const z={data:function(){return{items:[{icon:"vial",title:"Test Laboratories",subtitle:"RT-PCR & Blood Test Laboratory locations and details.",link:"/labs"},{icon:"stethoscope",title:"Home Covid Treatement",subtitle:"Information of all hospitals providing home treatement for covid.",link:"/homecare"},{icon:"utensils",title:"Food & Tiffin For Patients",subtitle:"Information of all organisations and persons providing Free / Affordable Food & Snacks for patients.",link:"/food"},{icon:"burn",title:"Oxygen Cylinders",subtitle:"Information of all organisations and persons providing Oxygen Bottle & Refill services.",link:"/oxygen"},{icon:"cogs",title:"Medical Equipements",subtitle:"Information of all organisations and persons providing BIPAP, Flow meters.",link:"/equipments"}]}},components:{homeTile:U}},X=i();a("data-v-9a8cf382");const Z={class:"container mx-auto px-3 md:px-0 mt-4 mb-8"},Q={class:"flex w-full pb-3"},aa={type:"button",class:"btn",href:"tel:9971779959"},ea=l(" 24x7 Bhavnagar Covid Helpline "),ta={class:"tile flex justify-items-center",href:"https://datastudio.google.com/reporting/725a9cdb-c898-4caf-b241-00d9831be3f2",target:"_blank"},na={class:"tile-icon pr-4"},oa=s("div",{class:"tile-content"},[s("p",{class:"tile-title"},"Hospital & Bed Availability"),s("p",{class:"tile-description"}," Link for All Hospital's contact, address and Available bed info. ")],-1);e();const sa=X(((a,e,i,l,c,p)=>{const h=t("font-awesome-icon"),m=t("homeTile");return n(),o("div",Z,[s("div",Q,[s("a",aa,[s(h,{icon:"phone-alt",class:"mr-3"}),ea])]),s("a",ta,[s("div",na,[s(h,{icon:"hospital"})]),oa]),(n(!0),o(r,null,d(a.items,(a=>(n(),o(m,{key:a.title,icon:a.icon,title:a.title,subtitle:a.subtitle,link:a.link},null,8,["icon","title","subtitle","link"])))),128))])}));z.render=sa,z.__scopeId="data-v-9a8cf382";const ia={},la=i();a("data-v-52dccbad");const ra=l(" Go Back ");e();const ca=la(((a,e,i,l,r,c)=>{const d=t("font-awesome-icon"),p=t("router-link");return n(),o(p,{to:"/",class:"back"},{default:la((()=>[s(d,{icon:"arrow-left",class:"mr-1"}),ra])),_:1})}));ia.render=ca,ia.__scopeId="data-v-52dccbad";const da={components:{goBack:ia},data:function(){return{homecare:["assets/images/hospital-1.jpeg","assets/images/hospital-2.jpeg","assets/images/hospital-3.jpeg","assets/images/hospital-4.jpeg","assets/images/hospital-5.jpeg","assets/images/hospital-6.jpeg","assets/images/hospital-7.jpeg","assets/images/hospital-8.jpeg","assets/images/hospital-9.jpeg","assets/images/hospital-10.jpeg"]}}},pa=i();a("data-v-f9045282");const ha={class:"container mx-auto px-3 my-6 text-left"},ma={class:"page-inside-header"},ua={class:"page-title"},fa={class:"pg-icon"},ga=l(" Home Covid Treatement "),va=s("br",null,null,-1),ba={class:"grid-container"};e();const ya=pa(((a,e,i,l,c,p)=>{const h=t("go-back"),m=t("font-awesome-icon");return n(),o("div",ha,[s("div",ma,[s(h),s("h4",ua,[s("span",fa,[s(m,{icon:"stethoscope"})]),ga])]),va,s("div",ba,[(n(!0),o(r,null,d(a.homecare,(a=>(n(),o("img",{key:a.id,src:a,alt:""},null,8,["src"])))),128))])])}));da.render=ya,da.__scopeId="data-v-f9045282";const ka={components:{goBack:ia},data:function(){return{labs:[{title:"Vision Laboratory",details:"Home Sample Collection Available.",add:"Carlton Square Complex, Kalanala Road, Near Dada Saheb Jain Mandir Road, Kalanala, Bhavnagar - 364001.",phn:"02782224143",map:"https://goo.gl/maps/L1sfxdz6tNMHJzeU7"},{title:"Arogya Pathology Laboratory",details:"Affordable Rates & Home Sample Collection Available.",add:"3, Ground floor, Sai Ganga Complex, Kalubha Rd, near GenX Hotel, Bhavnagar, Gujarat 364002",phn:"02782522434",map:"https://goo.gl/maps/v1xVxKZj2up5EWDJ6"},{title:"Dev Pathology Laboratory",details:"Home Sample Collection Available.",add:"No 6, Ground Floor, Samip Complex, Kalubha Road, Bhavnagar - 364001, Opposite Sir T Hospital Bus Stop",phn:"02782513738",map:"https://goo.gl/maps/CAugfdunt2YKmGTM6"},{title:"Green Cross Pathology Laboratory",details:"Home Sample Collection Available. (Also For Blood)",add:"PL. 2247, D2 Hill Drive, Fullwadi Chowk,Bhavnagar, Bhavnagar, Gujarat 364002, India",phn:"02782515731"}]}}},xa=i();a("data-v-473d35cb");const Sa={class:"container mx-auto px-3 my-6 text-left"},Aa={class:"page-inside-header"},wa={class:"page-title"},Oa={class:"pg-icon"},Ba=l(" Test Laboratories "),Ia=s("br",null,null,-1),Ta={class:"tile-upper"},Ra={class:"tile-title"},Ma={class:"tile-details"},Fa={class:"tile-address"},Pa={class:"tile-btns"},_a=l(" Get Directions ");e();const ja=xa(((a,e,i,h,m,u)=>{const f=t("go-back"),g=t("font-awesome-icon");return n(),o("div",Sa,[s("div",Aa,[s(f),s("h4",wa,[s("span",Oa,[s(g,{icon:"vial"})]),Ba])]),Ia,(n(!0),o(r,null,d(a.labs,(a=>(n(),o("div",{class:"tile",key:a.title},[s("div",Ta,[s("h6",Ra,c(a.title),1),s("p",Ma,c(a.details),1),s("p",Fa,c(a.add),1)]),s("div",Pa,[s("a",{href:`tel:${a.phn}`,type:"button",class:"tile-btn"},[s(g,{icon:"phone-alt",class:"mr-1"}),l(" "+c(a.phn),1)],8,["href"]),a.map?(n(),o("a",{key:0,href:a.map,target:"_blank",type:"button",class:"tile-btn-variant"},[_a,s(g,{icon:"directions",class:"ml-1"})],8,["href"])):p("",!0)])])))),128))])}));ka.render=ja,ka.__scopeId="data-v-473d35cb";const Ca={components:{goBack:ia},data:function(){return{food:[{title:"Free Food for Patients",details:"Kindly call before a day and send all the details.",morning:"11 AM - 1 PM",evening:"6 PM - 7 PM",org:"WeHelp Bhavnagar.",phn1:"8401284777"},{title:"Free Meal for Patients",details:"Kindly call before 1 day and send all the details.",morning:"11 AM - 1 PM",evening:"6 PM - 7 PM",org:"Bharwaad Samaaj, Bhavnagar.",phn1:"9825505005",phn2:"9825217804"},{title:"Free Meal for Patients",details:"Kindly call before 1 day and send all the details.",morning:"Before 7 AM",evening:"Before 6 PM",org:"Sihor Sampraday Bhramhan Gnati.",phn1:"9879557075",phn2:"9925574380"},{title:"Free Breakfast for Patients",details:"Kindly send address and details of patient on whatsapp.",morning:"8 AM - 10 AM",evening:"Before 9PM",org:"Amitbhai & Aashishbhai.",phn1:"7567244189",phn2:"7383412348"},{title:"Mosambi, Limbu at 30 Rs/kg For Covid Patients.",org:"Bharatbhai Vaghela",phn1:"7878070578"},{title:"Mosambi at 30-40 Rs/kg For Needy Patients.",details:"This is for needy patients only, Kindly Bring Patient Prescription and covid positive report along",org:"Pramodbhai Vora",phn1:"9427780880"},{title:"Free Coconut Water (Nariyel Pani)",details:"Organised by & for people of bhavnagar. (Volunteers can join)",org:"Unknown",phn1:"6357675555"},{title:"Hygenic Tiffin service at affordable price",details:"Kindly call before a day and send all the details.",org:"Rasthaal Caterers",phn1:"7567246827"},{title:"Param Tiffin",details:"Kindly call before 1 day and send all the details.",org:"Arham Yuva Seva Group",phn1:"9136442493"}]}}},Ha=i();a("data-v-f26d7900");const Ea={class:"container mx-auto px-3 my-6 text-left"},La={class:"page-inside-header"},Na={class:"page-title"},Ka={class:"pg-icon"},Ga=l(" Food & Tiffin For Patients "),Da=s("br",null,null,-1),Ua={class:"tile-upper"},Va={class:"tile-title"},Ya={class:"tile-details"},qa={class:"tile-address"},Ja=s("i",{class:"fa fa-users"},null,-1),$a={class:"tile-btns"};e();const Wa=Ha(((a,e,i,h,m,u)=>{const f=t("go-back"),g=t("font-awesome-icon");return n(),o("div",Ea,[s("div",La,[s(f),s("h4",Na,[s("span",Ka,[s(g,{icon:"utensils"})]),Ga])]),Da,(n(!0),o(r,null,d(a.food,(a=>(n(),o("div",{class:"tile",key:a.title},[s("div",Ua,[s("h6",Va,c(a.title),1),s("p",Ya,c(a.details),1),s("p",qa,[Ja,l(" "+c(a.org),1)])]),s("div",$a,[s("a",{href:`tel:${a.phn}`,type:"button",class:"tile-btn"},[s(g,{icon:"phone-alt",class:"mr-1"}),l(" "+c(a.phn1),1)],8,["href"]),a.phn2?(n(),o("a",{key:0,href:a.phn2,target:"_blank",type:"button",class:"tile-btn2"},[s(g,{icon:"phone-alt",class:"mr-1"}),l(" "+c(a.phn2),1)],8,["href"])):p("",!0)])])))),128))])}));Ca.render=Wa,Ca.__scopeId="data-v-f26d7900";const za={components:{goBack:ia},data:function(){return{oxygen:[{name:"Oxygen Bank",details:"Free of charge, 1000 Rs Deposit.",contact:"9428787217",phn2:"02782425322",org:"Jito Seva Group, Dadasaheb Jain Derasar, Kalanala."},{name:"Oxygen Clylinder Bank",details:"Free of charge, with condition to return after use.",contact:"7016871131",org:"Ship Recycling Industries Association"},{name:"Oxygen Cylinders",details:"Free service & Home Fitting",contact:"7016871131",name:"Citizen Health & Education Trust"},{name:"Gujju Group",contact:"7016871131"},{name:"Gujju Group",contact:"7016871131"},{name:"IRFAN Oxygen",contact:"9909931645"},{name:"Mahir Oxygen",contact:"9274752797"},{name:"Manavta Oxygen",contact:"7874313873"},{name:"Rashid Bata Oxygen",contact:"9374150066"},{name:"Sahil Oxygen",contact:"9904253709"},{name:"Shahrukh Oxygen",contact:"8733843412"},{name:"Shilpa Oxygen",contact:"8238892149"},{name:"Gunubhai Delawala",contact:"9824040889"},{name:"Hitesh Kunjadiya",contact:"9427434465"},{name:"Sadbhavna Trust Nishant Khagram",contact:"8758770770"},{name:"Kishor Hapaliya",contact:"9825507171"},{name:"Shravan Virani",contact:"9824505706"},{name:"Sanjay Hirani Kranti",contact:"9825077454"},{name:"Ajitsinh Dodiya Freedom Yuva Group",contact:" 8200329881"},{name:"Nilesh Harsoda",contact:"9898575606"},{name:"Vibhash Sheth Kanaiya Mitra mandal",contact:"8140901234"},{name:"Milan Kothari",contact:"9824294531"},{name:"Ashish Joshi",contact:"9426900500"}]}}},Xa=i();a("data-v-68f7f056");const Za={class:"container mx-auto px-3 my-6 text-left"},Qa={class:"page-inside-header"},ae={class:"page-title"},ee={class:"pg-icon"},te=l(" Oxygen Cylinders "),ne=s("br",null,null,-1),oe={class:"tile-upper"},se={class:"tile-title"},ie={class:"tile-details"},le={key:0,class:"tile-address"},re=s("i",{class:"fa fa-users"},null,-1),ce={class:"tile-btns"};e();const de=Xa(((a,e,i,h,m,u)=>{const f=t("go-back"),g=t("font-awesome-icon");return n(),o("div",Za,[s("div",Qa,[s(f),s("h4",ae,[s("span",ee,[s(g,{icon:"burn"})]),te])]),ne,(n(!0),o(r,null,d(a.oxygen,(a=>(n(),o("div",{class:"tile",key:a.title},[s("div",oe,[s("h6",se,c(a.name),1),s("p",ie,c(a.details),1),a.org?(n(),o("p",le,[re,l(" "+c(a.org),1)])):p("",!0)]),s("div",ce,[s("a",{href:`tel:${a.contact}`,type:"button",class:"tile-btn"},[s(g,{icon:"phone-alt",class:"mr-1"}),l(" "+c(a.contact),1)],8,["href"]),a.phn2?(n(),o("a",{key:0,href:a.phn2,target:"_blank",type:"button",class:"tile-btn2"},[s(g,{icon:"phone-alt",class:"mr-1"}),l(" "+c(a.phn2),1)],8,["href"])):p("",!0)])])))),128))])}));za.render=de,za.__scopeId="data-v-68f7f056";const pe={components:{goBack:ia},data:function(){return{equipments:[{title:"BIPAP Machine.",details:"Kindly call and know more details.",org:"Madhav Rajai & Rajesh Rajai",phn1:"9376222111",phn2:"9824485088"},{title:"BIPAP Machine on Rent.",details:"Kindly call and know more details.",org:"Unknown",phn1:"9898317316"},{title:"Oxygen Flow-meter",details:"Oxygen flow meter which is fixed on cylinder. ",org:"Dhavalbhai Gulvani",phn1:"9313746010",phn2:"7096885050"},{title:"Oxygen Flow-meters",details:"Free of charge, Aadhar card needed. ",org:"Hemantbhai Patel & Abhibhai Soni",phn1:"9427202526",phn2:"9879489500"},{title:"Oxygen Valve & Flow-meters",details:"Please visit : Jay Traders, M.G. Road (Opposite Khodiyar Icecream) OR Bhagat Trading Opposite Vaishali talkies. ",org:"Jay Traders & Bhagat Trading"}]}}},he=i();a("data-v-19ff7958");const me={class:"container mx-auto px-3 my-6 text-left"},ue={class:"page-inside-header"},fe={class:"page-title"},ge={class:"pg-icon"},ve=l(" Medical Equipments "),be=s("br",null,null,-1),ye={class:"tile-upper"},ke={class:"tile-title"},xe={class:"tile-details"},Se={key:0,class:"tile-address"},Ae={key:0,class:"tile-btns"};e();const we=he(((a,e,i,h,m,u)=>{const f=t("go-back"),g=t("font-awesome-icon"),v=t("font-awesone-icon");return n(),o("div",me,[s("div",ue,[s(f),s("h4",fe,[s("span",ge,[s(g,{icon:"cogs"})]),ve])]),be,(n(!0),o(r,null,d(a.equipments,(a=>(n(),o("div",{class:"tile",key:a.title},[s("div",ye,[s("h6",ke,c(a.title),1),s("p",xe,c(a.details),1),a.org?(n(),o("p",Se,[s(v,{icon:"cogs"}),l(" "+c(a.org),1)])):p("",!0)]),a.phn1||a.phn2?(n(),o("div",Ae,[s("a",{href:`tel:${a.phn1}`,type:"button",class:"tile-btn"},[s(g,{icon:"phone-alt",class:"mr-1"}),l(" "+c(a.phn1),1)],8,["href"]),a.phn2?(n(),o("a",{key:0,href:a.phn2,target:"_blank",type:"button",class:"tile-btn2"},[s(g,{icon:"phone-alt",class:"mr-1"}),l(" "+c(a.phn2),1)],8,["href"])):p("",!0)])):p("",!0)])))),128))])}));pe.render=we,pe.__scopeId="data-v-19ff7958";const Oe={components:{goBack:ia}},Be=i();a("data-v-5420f8dc");const Ie={class:"container px-3 mx-auto"},Te={class:"text-left mt-5"},Re=s("h3",{class:"title"},"Disclaimer & Terms of Use",-1),Me=s("p",null," The information provided by BhavCovid (“we,” “us” or “our”) on bhavcovid.netlify.app (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE ",-1),Fe=s("p",null,' The information shared on this site is taken from various social media platforms and other sources and the intent is to centralise the information so people can access it from single source when needed and access it effortlessly, also we are hoping help people of Bhavnagar in this panademic as much as possible, The information is not verified by the SITE "bhavcovid.netlify.app" or people related to the SITE/ORGANISATION thus use at your own risk. ',-1),Pe=s("p",null," The Site cannot and does not contain medical/health advice. The medical/health information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of medical/health advice. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THIS SITE IS SOLELY AT YOUR OWN RISK. ",-1);e();const _e=Be(((a,e,i,l,r,c)=>{const d=t("goBack");return n(),o("div",Ie,[s("div",Te,[s(d)]),Re,Me,Fe,Pe])}));Oe.render=_e,Oe.__scopeId="data-v-5420f8dc";const je=[{path:"/",name:"home",component:z},{path:"/labs",name:"labs",component:ka},{path:"/homecare",name:"homecare",component:da},{path:"/food",name:"food",component:Ca},{path:"/oxygen",name:"oxygen",component:za},{path:"/equipments",name:"equipments",component:pe},{path:"/disclaimer",name:"disclaimer",component:Oe}],Ce=h({history:m(),routes:je,scrollBehavior(){document.getElementById("app").scrollIntoView()}});u.add([f,g,v,b,y,k,x,S,A,w]),O(D).use(Ce).component("font-awesome-icon",B).mount("#app");
