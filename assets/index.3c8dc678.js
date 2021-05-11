import{p as a,a as e,o as t,c as n,w as s,b as o,d as i,r as l,F as r,t as c,e as d,f as p,g as h,h as m,l as u,_ as f,i as g,j as v}from"./vendor.5b6481d3.js";!function(a=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(t){const n=new URL(a,location),s=a=>{URL.revokeObjectURL(a.src),a.remove()};self[e]=a=>new Promise(((t,o)=>{const i=new URL(a,n);if(self[e].moduleMap[i])return t(self[e].moduleMap[i]);const l=new Blob([`import * as m from '${i}';`,`${e}.moduleMap['${i}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){o(new Error(`Failed to import: ${a}`)),s(r)},onload(){t(self[e].moduleMap[i]),s(r)}});document.head.appendChild(r)})),self[e].moduleMap={}}}("/assets/");const b={},y=s();a("data-v-b8c18a78");const x={class:"header bg-blue-300"},k=o("div",{class:"container mx-auto"},[o("h1",{class:"app-title"},[o("span",null,[o("i",{class:"fa fa-hand-holding-medical"}),i("Bhav")]),i("COVID ")]),o("p",{class:"app-subtitle"},"Covid Resources for Bhavnagar."),o("p")],-1);e();const S=y(((a,e,s,o,i,l)=>(t(),n("header",x,[k]))));b.render=S,b.__scopeId="data-v-b8c18a78";const A={},w=s();a("data-v-4c7973d8");const O={class:"container mx-auto px-3"},I=i(" Disclaimer & Terms of use ");e();const T=w(((a,e,s,i,r,c)=>{const d=l("router-link");return t(),n("div",O,[o(d,{class:"footer-link",to:"/disclaimer"},{default:w((()=>[I])),_:1})])}));A.render=T,A.__scopeId="data-v-4c7973d8";const R={expose:[],setup:a=>(a,e)=>{const s=l("router-view");return t(),n(r,null,[o(b),o(s),o(A)],64)}};const B={props:{title:String,subtitle:String,link:String,icon:String}},M=s();a("data-v-70d042a7");const F={class:"tile-icon pr-4"},P={class:"tile-content"},_={class:"tile-title"},j={class:"tile-description"};e();const C=M(((a,e,s,i,r,d)=>{const p=l("font-awesome-icon"),h=l("router-link");return t(),n(h,{class:"tile flex justify-items-center",to:s.link},{default:M((()=>[o("div",F,[o(p,{icon:s.icon},null,8,["icon"])]),o("div",P,[o("p",_,c(s.title),1),o("p",j,c(s.subtitle),1)])])),_:1},8,["to"])}));B.render=C,B.__scopeId="data-v-70d042a7";const H={data:function(){return{items:[{icon:"vial",title:"Test Laboratories",subtitle:"RT-PCR & Blood Test Laboratory locations and details.",link:"/labs"},{icon:"stethoscope",title:"Home Covid Treatement",subtitle:"Information of all hospitals providing home treatement for covid.",link:"/homecare"},{icon:"utensils",title:"Food & Tiffin For Patients",subtitle:"Information of all organisations and persons providing Free / Affordable Food & Snacks for patients.",link:"/food"},{icon:"burn",title:"Oxygen Cylinders",subtitle:"Information of all organisations and persons providing Oxygen Bottle & Refill services.",link:"/oxygen"},{icon:"cogs",title:"Medical Equipements",subtitle:"Information of all organisations and persons providing BIPAP, Flow meters.",link:"/equipments"}]}},components:{homeTile:B}},E=s();a("data-v-9a8cf382");const L={class:"container mx-auto px-3 md:px-0 mt-4 mb-8"},N={class:"flex w-full pb-3"},K={type:"button",class:"btn",href:"tel:9971779959"},G=i(" 24x7 Bhavnagar Covid Helpline "),D={class:"tile flex justify-items-center",href:"https://datastudio.google.com/reporting/725a9cdb-c898-4caf-b241-00d9831be3f2",target:"_blank"},U={class:"tile-icon pr-4"},V=o("div",{class:"tile-content"},[o("p",{class:"tile-title"},"Hospital & Bed Availability"),o("p",{class:"tile-description"}," Link for All Hospital's contact, address and Available bed info. ")],-1);e();const Y=E(((a,e,s,i,c,p)=>{const h=l("font-awesome-icon"),m=B;return t(),n("div",L,[o("div",N,[o("a",K,[o(h,{icon:"phone-alt",class:"mr-3"}),G])]),o("a",D,[o("div",U,[o(h,{icon:"hospital"})]),V]),(t(!0),n(r,null,d(a.items,(a=>(t(),n(m,{key:a.title,icon:a.icon,title:a.title,subtitle:a.subtitle,link:a.link},null,8,["icon","title","subtitle","link"])))),128))])}));H.render=Y,H.__scopeId="data-v-9a8cf382";const q={},J=s();a("data-v-52dccbad");const $=i(" Go Back ");e();const W=J(((a,e,s,i,r,c)=>{const d=l("font-awesome-icon"),p=l("router-link");return t(),n(p,{to:"/",class:"back"},{default:J((()=>[o(d,{icon:"arrow-left",class:"mr-1"}),$])),_:1})}));q.render=W,q.__scopeId="data-v-52dccbad";const z={data:function(){return{homecare:["assets/images/hospital-1.jpeg","assets/images/hospital-2.jpeg","assets/images/hospital-3.jpeg","assets/images/hospital-4.jpeg","assets/images/hospital-5.jpeg","assets/images/hospital-6.jpeg","assets/images/hospital-7.jpeg","assets/images/hospital-8.jpeg","assets/images/hospital-9.jpeg","assets/images/hospital-10.jpeg"]}}},X=s();a("data-v-564ff944");const Z={class:"container mx-auto px-3 my-6 text-left"},Q={class:"page-inside-header"},aa={class:"page-title"},ea={class:"pg-icon"},ta=i(" Home Covid Treatement "),na=o("br",null,null,-1),sa={class:"grid-container"};e();const oa=X(((a,e,s,i,c,p)=>{const h=q,m=l("font-awesome-icon");return t(),n("div",Z,[o("div",Q,[o(h),o("h4",aa,[o("span",ea,[o(m,{icon:"stethoscope"})]),ta])]),na,o("div",sa,[(t(!0),n(r,null,d(a.homecare,(a=>(t(),n("img",{key:a.id,src:a,alt:""},null,8,["src"])))),128))])])}));z.render=oa,z.__scopeId="data-v-564ff944";const ia={components:{goBack:q},data:function(){return{labs:[{title:"Vision Laboratory",details:"Home Sample Collection Available.",add:"Carlton Square Complex, Kalanala Road, Near Dada Saheb Jain Mandir Road, Kalanala, Bhavnagar - 364001.",phn:"02782224143",map:"https://goo.gl/maps/L1sfxdz6tNMHJzeU7"},{title:"Arogya Pathology Laboratory",details:"Affordable Rates & Home Sample Collection Available.",add:"3, Ground floor, Sai Ganga Complex, Kalubha Rd, near GenX Hotel, Bhavnagar, Gujarat 364002",phn:"02782522434",map:"https://goo.gl/maps/v1xVxKZj2up5EWDJ6"},{title:"Dev Pathology Laboratory",details:"Home Sample Collection Available.",add:"No 6, Ground Floor, Samip Complex, Kalubha Road, Bhavnagar - 364001, Opposite Sir T Hospital Bus Stop",phn:"02782513738",map:"https://goo.gl/maps/CAugfdunt2YKmGTM6"},{title:"Green Cross Pathology Laboratory",details:"Home Sample Collection Available. (Also For Blood)",add:"PL. 2247, D2 Hill Drive, Fullwadi Chowk,Bhavnagar, Bhavnagar, Gujarat 364002, India",phn:"02782515731"}]}}},la=s();a("data-v-1f3b7010");const ra={class:"container mx-auto px-3 my-6 text-left"},ca={class:"page-inside-header"},da={class:"page-title"},pa={class:"pg-icon"},ha=i(" Test Laboratories "),ma=o("br",null,null,-1),ua={class:"tile-upper"},fa={class:"tile-title"},ga={class:"tile-details"},va={class:"tile-address"},ba={class:"tile-btns"},ya=o("i",{class:"fa fa-phone-alt"},null,-1),xa=i(" Get Directions ");e();const ka=la(((a,e,s,h,m,u)=>{const f=q,g=l("font-awesome-icon");return t(),n("div",ra,[o("div",ca,[o(f),o("h4",da,[o("span",pa,[o(g,{icon:"vial"})]),ha])]),ma,(t(!0),n(r,null,d(a.labs,(a=>(t(),n("div",{class:"tile",key:a.title},[o("div",ua,[o("h6",fa,c(a.title),1),o("p",ga,c(a.details),1),o("p",va,c(a.add),1)]),o("div",ba,[o("a",{href:`tel:${a.phn}`,type:"button",class:"tile-btn"},[ya,i(" "+c(a.phn),1)],8,["href"]),a.map?(t(),n("a",{key:0,href:a.map,target:"_blank",type:"button",class:"tile-btn-variant"},[xa,o(g,{icon:"directions",class:"ml-1"})],8,["href"])):p("",!0)])])))),128))])}));ia.render=ka,ia.__scopeId="data-v-1f3b7010";const Sa={data:function(){return{food:[{title:"Free Food for Patients",details:"Kindly call before a day and send all the details.",morning:"11 AM - 1 PM",evening:"6 PM - 7 PM",org:"WeHelp Bhavnagar.",phn1:"8401284777"},{title:"Free Meal for Patients",details:"Kindly call before 1 day and send all the details.",morning:"11 AM - 1 PM",evening:"6 PM - 7 PM",org:"Bharwaad Samaaj, Bhavnagar.",phn1:"9825505005",phn2:"9825217804"},{title:"Free Meal for Patients",details:"Kindly call before 1 day and send all the details.",morning:"Before 7 AM",evening:"Before 6 PM",org:"Sihor Sampraday Bhramhan Gnati.",phn1:"9879557075",phn2:"9925574380"},{title:"Free Breakfast for Patients",details:"Kindly send address and details of patient on whatsapp.",morning:"8 AM - 10 AM",evening:"Before 9PM",org:"Amitbhai & Aashishbhai.",phn1:"7567244189",phn2:"7383412348"},{title:"Mosambi, Limbu at 30 Rs/kg For Covid Patients.",org:"Bharatbhai Vaghela",phn1:"7878070578"},{title:"Mosambi at 30-40 Rs/kg For Needy Patients.",details:"This is for needy patients only, Kindly Bring Patient Prescription and covid positive report along",org:"Pramodbhai Vora",phn1:"9427780880"},{title:"Free Coconut Water (Nariyel Pani)",details:"Organised by & for people of bhavnagar. (Volunteers can join)",org:"Unknown",phn1:"6357675555"},{title:"Hygenic Tiffin service at affordable price",details:"Kindly call before a day and send all the details.",org:"Rasthaal Caterers",phn1:"7567246827"},{title:"Param Tiffin",details:"Kindly call before 1 day and send all the details.",org:"Arham Yuva Seva Group",phn1:"9136442493"}]}}},Aa=s();a("data-v-1a6b431e");const wa={class:"container mx-auto px-3 my-6 text-left"},Oa={class:"page-inside-header"},Ia={class:"page-title"},Ta={class:"pg-icon"},Ra=i(" Food & Tiffin For Patients "),Ba=o("br",null,null,-1),Ma={class:"tile-upper"},Fa={class:"tile-title"},Pa={class:"tile-details"},_a={class:"tile-address"},ja=o("i",{class:"fa fa-users"},null,-1),Ca={class:"tile-btns"},Ha=o("i",{class:"fa fa-phone-alt"},null,-1);e();const Ea=Aa(((a,e,s,h,m,u)=>{const f=q,g=l("font-awesome-icon");return t(),n("div",wa,[o("div",Oa,[o(f),o("h4",Ia,[o("span",Ta,[o(g,{icon:"utensils"})]),Ra])]),Ba,(t(!0),n(r,null,d(a.food,(a=>(t(),n("div",{class:"tile",key:a.title},[o("div",Ma,[o("h6",Fa,c(a.title),1),o("p",Pa,c(a.details),1),o("p",_a,[ja,i(" "+c(a.org),1)])]),o("div",Ca,[o("a",{href:`tel:${a.phn}`,type:"button",class:"tile-btn"},[Ha,i(" "+c(a.phn1),1)],8,["href"]),a.phn2?(t(),n("a",{key:0,href:a.phn2,target:"_blank",type:"button",class:"tile-btn2"},c(a.phn2),9,["href"])):p("",!0)])])))),128))])}));Sa.render=Ea,Sa.__scopeId="data-v-1a6b431e";const La={data:function(){return{oxygen:[{name:"Oxygen Bank",details:"Free of charge, 1000 Rs Deposit.",contact:"9428787217",phn2:"02782425322",org:"Jito Seva Group, Dadasaheb Jain Derasar, Kalanala."},{name:"Oxygen Clylinder Bank",details:"Free of charge, with condition to return after use.",contact:"7016871131",org:"Ship Recycling Industries Association"},{name:"Oxygen Cylinders",details:"Free service & Home Fitting",contact:"7016871131",name:"Citizen Health & Education Trust"},{name:"Gujju Group",contact:"7016871131"},{name:"Gujju Group",contact:"7016871131"},{name:"IRFAN Oxygen",contact:"9909931645"},{name:"Mahir Oxygen",contact:"9274752797"},{name:"Manavta Oxygen",contact:"7874313873"},{name:"Rashid Bata Oxygen",contact:"9374150066"},{name:"Sahil Oxygen",contact:"9904253709"},{name:"Shahrukh Oxygen",contact:"8733843412"},{name:"Shilpa Oxygen",contact:"8238892149"},{name:"Gunubhai Delawala",contact:"9824040889"},{name:"Hitesh Kunjadiya",contact:"9427434465"},{name:"Sadbhavna Trust Nishant Khagram",contact:"8758770770"},{name:"Kishor Hapaliya",contact:"9825507171"},{name:"Shravan Virani",contact:"9824505706"},{name:"Sanjay Hirani Kranti",contact:"9825077454"},{name:"Ajitsinh Dodiya Freedom Yuva Group",contact:" 8200329881"},{name:"Nilesh Harsoda",contact:"9898575606"},{name:"Vibhash Sheth Kanaiya Mitra mandal",contact:"8140901234"},{name:"Milan Kothari",contact:"9824294531"},{name:"Ashish Joshi",contact:"9426900500"}]}}},Na=s();a("data-v-b869fe80");const Ka={class:"container mx-auto px-3 my-6 text-left"},Ga={class:"page-inside-header"},Da={class:"page-title"},Ua={class:"pg-icon"},Va=i(" Oxygen Cylinders "),Ya=o("br",null,null,-1),qa={class:"tile-upper"},Ja={class:"tile-title"},$a={class:"tile-details"},Wa={key:0,class:"tile-address"},za=o("i",{class:"fa fa-users"},null,-1),Xa={class:"tile-btns"},Za=o("i",{class:"fa fa-phone-alt"},null,-1),Qa=o("i",{class:"fa fa-phone-alt"},null,-1);e();const ae=Na(((a,e,s,h,m,u)=>{const f=q,g=l("font-awesome-icon");return t(),n("div",Ka,[o("div",Ga,[o(f),o("h4",Da,[o("span",Ua,[o(g,{icon:"burn"})]),Va])]),Ya,(t(!0),n(r,null,d(a.oxygen,(a=>(t(),n("div",{class:"tile",key:a.title},[o("div",qa,[o("h6",Ja,c(a.name),1),o("p",$a,c(a.details),1),a.org?(t(),n("p",Wa,[za,i(" "+c(a.org),1)])):p("",!0)]),o("div",Xa,[o("a",{href:`tel:${a.contact}`,type:"button",class:"tile-btn"},[Za,i(" "+c(a.contact),1)],8,["href"]),a.phn2?(t(),n("a",{key:0,href:a.phn2,target:"_blank",type:"button",class:"tile-btn2"},[Qa,i(" "+c(a.phn2),1)],8,["href"])):p("",!0)])])))),128))])}));La.render=ae,La.__scopeId="data-v-b869fe80";const ee={data:function(){return{equipments:[{title:"BIPAP Machine.",details:"Kindly call and know more details.",org:"Madhav Rajai & Rajesh Rajai",phn1:"9376222111",phn2:"9824485088"},{title:"BIPAP Machine on Rent.",details:"Kindly call and know more details.",org:"Unknown",phn1:"9898317316"},{title:"Oxygen Flow-meter",details:"Oxygen flow meter which is fixed on cylinder. ",org:"Dhavalbhai Gulvani",phn1:"9313746010",phn2:"7096885050"},{title:"Oxygen Flow-meters",details:"Free of charge, Aadhar card needed. ",org:"Hemantbhai Patel & Abhibhai Soni",phn1:"9427202526",phn2:"9879489500"},{title:"Oxygen Valve & Flow-meters",details:"Please visit : Jay Traders, M.G. Road (Opposite Khodiyar Icecream) OR Bhagat Trading Opposite Vaishali talkies. ",org:"Jay Traders & Bhagat Trading"}]}}},te=s();a("data-v-be4763fa");const ne={class:"container mx-auto px-3 my-6 text-left"},se={class:"page-inside-header"},oe={class:"page-title"},ie={class:"pg-icon"},le=i(" Medical Equipments "),re=o("br",null,null,-1),ce={class:"tile-upper"},de={class:"tile-title"},pe={class:"tile-details"},he={key:0,class:"tile-address"},me={key:0,class:"tile-btns"},ue=o("i",{class:"fa fa-phone-alt"},null,-1),fe=o("i",{class:"fa fa-phone-alt"},null,-1);e();const ge=te(((a,e,s,h,m,u)=>{const f=q,g=l("font-awesome-icon"),v=l("font-awesone-icon");return t(),n("div",ne,[o("div",se,[o(f),o("h4",oe,[o("span",ie,[o(g,{icon:"cogs"})]),le])]),re,(t(!0),n(r,null,d(a.equipments,(a=>(t(),n("div",{class:"tile",key:a.title},[o("div",ce,[o("h6",de,c(a.title),1),o("p",pe,c(a.details),1),a.org?(t(),n("p",he,[o(v,{icon:"cogs"}),i(" "+c(a.org),1)])):p("",!0)]),a.phn1||a.phn2?(t(),n("div",me,[o("a",{href:`tel:${a.phn1}`,type:"button",class:"tile-btn"},[ue,i(" "+c(a.phn1),1)],8,["href"]),a.phn2?(t(),n("a",{key:0,href:a.phn2,target:"_blank",type:"button",class:"tile-btn2"},[fe,i(" "+c(a.phn2),1)],8,["href"])):p("",!0)])):p("",!0)])))),128))])}));ee.render=ge,ee.__scopeId="data-v-be4763fa";const ve={},be=s();a("data-v-4217f8c4");const ye={class:"container px-3 mx-auto"},xe={class:"text-left mt-5"},ke=o("h3",{class:"title"},"Disclaimer & Terms of Use",-1),Se=o("p",null," The information provided by BhavCovid (“we,” “us” or “our”) on bhavcovid.netlify.app (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE ",-1),Ae=o("p",null,' The information shared on this site is taken from various social media platforms and other sources and the intent is to centralise the information so people can access it from single source when needed and access it effortlessly, also we are hoping help people of Bhavnagar in this panademic as much as possible, The information is not verified by the SITE "bhavcovid.netlify.app" or people related to the SITE/ORGANISATION thus use at your own risk. ',-1),we=o("p",null," The Site cannot and does not contain medical/health advice. The medical/health information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of medical/health advice. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THIS SITE IS SOLELY AT YOUR OWN RISK. ",-1);e();const Oe=be(((a,e,s,i,l,r)=>{const c=q;return t(),n("div",ye,[o("div",xe,[o(c)]),ke,Se,Ae,we])}));ve.render=Oe,ve.__scopeId="data-v-4217f8c4";const Ie=[{path:"/",name:"home",component:H},{path:"/labs",name:"labs",component:ia},{path:"/homecare",name:"homecare",component:z},{path:"/food",name:"food",component:Sa},{path:"/oxygen",name:"oxygen",component:La},{path:"/equipments",name:"equipments",component:ee},{path:"/disclaimer",name:"disclaimer",component:ve}],Te=h({history:m(),routes:Ie,scrollBehavior(){document.getElementById("app").scrollIntoView()}});u.add(f),g(R).use(Te).component("font-awesome-icon",v).mount("#app");
