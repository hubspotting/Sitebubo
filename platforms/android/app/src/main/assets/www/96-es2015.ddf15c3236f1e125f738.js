(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{"64dr":function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class u{}var o=e("pMnS"),i=e("MKJQ"),a=e("sZkV"),d=e("SVse"),s=e("RGvM"),r=e("TX0D"),c=e("HlEa"),m=e("jnzs"),g=e("f4Ot"),f=e("qnoi"),p=e("s7LF"),h=e("xMZ5"),C=e("ufWp"),b=e("mrSG"),R=e("HF2u"),_=e("u8hY"),P=e("xehS"),O=e("uz1x");class M{constructor(n,l,e,t,u,o,i,a,d,s){this.generalSerive=n,this.tempService=l,this.router=e,this.monitorAPI=t,this.ionService=u,this.storage=o,this.actionCtrl=i,this.noyear=a,this.onlytime=d,this.cdr=s,this.filterLabel="3 hours",this.filter=.3,this.downtimeFilterLabel="24 hours",this.downtimeRecord=[],this.filterType=1,this.event={hide:!1,show:!1}}ngOnInit(){this.initData()}openFeedback(){this.generalSerive.openFeedback()}initData(){this.storage.get("userInfo").then(n=>{this.userID=n.id,this.token=n.token,this.getUptimeStatus(this.filter)})}getUptimeStatus(n){this.tempService.dashboardParams?this.monitorAPI.getUptimeStatus(n,this.tempService.dashboardParams.domainName,this.tempService.dashboardParams.domainUserID,this.userID,this.token).subscribe(n=>{console.log(n),1===n.RESPONSECODE?(this.uptimeStatus=n.data.uptime[0],this.prepareChart(this.uptimeStatus),this.defineRecords(this.downtimeFilterLabel)):this.ionService.presentToast(n.RESPONSE)},n=>{this.router.navigate(["dashboard"])}):this.router.navigate(["domain-list"],{replaceUrl:!0})}prepareChart(n){this.uptimeChart?(this.uptimeChart.dataTable=[["Status","Loading Time"]],this.cdr.detectChanges(),this.drawChart(n)):this.drawChart(n)}drawChart(n){const l=n.chart.details;console.log(l),l.length>0?(this.uptimeChart={chartType:"LineChart",dataTable:[["Status","Loading Time"]],options:{legend:{position:"top",alignment:"center"},chartArea:{width:"80%",left:"15%",right:"5%"},series:{0:{lineWidth:1},1:{color:"#a6ddea",lineWidth:1}},position:"center",alignment:"center",curveType:"function",vAxis:{maxValue:.3,gridlines:{count:3}},hAxis:{slantedText:!1,maxAlternation:1}}},l.forEach(this.filter<1?n=>{const l=[this.onlytime.transform(n.time),parseFloat(n.score)];this.uptimeChart.dataTable.push(l)}:n=>{const l=[this.noyear.transform(n.time)+":00",parseFloat(n.score)];this.uptimeChart.dataTable.push(l)})):this.cdr.detectChanges()}defineRecords(n){"24 hours"===n?this.downtimeRecord=this.uptimeStatus.downtimes_24hours:"7 days"===n?this.downtimeRecord=this.uptimeStatus.downtimes_7days:(this.downtimeRecord=this.uptimeStatus.downtimes_30days,console.log(this.downtimeRecord))}downtimeFilter(){return b.a(this,void 0,void 0,(function*(){const n=yield this.actionCtrl.create({buttons:[{text:"Last 24 hours",handler:()=>{this.downtimeFilterLabel="24 hours",this.defineRecords("24 hours")}},{text:"Last 7 days",handler:()=>{this.downtimeFilterLabel="7 days",this.defineRecords("7 days")}},{text:"Last 30 days",handler:()=>{this.downtimeFilterLabel="30 days",this.defineRecords("30 days")}},{text:"Cancel",role:"cancel"}]});yield n.present()}))}calcuateDuration(n){return new Promise(l=>{let e=[];e=n;const t=[];e.forEach(n=>{let l,e;console.log(n),"0"!==n.days&&(e+=n.days+" days "),"0"!==n.hours&&(e+=n.hours+" hours "),"0"!==n.minutes&&(e+=n.days+" minutes "),l={duration:e,date:n.date,time:n.time},t.push(l)}),l(t)})}openFilter(){return b.a(this,void 0,void 0,(function*(){const n=yield this.actionCtrl.create({buttons:[{text:"Last 3 hours",handler:()=>{this.filter=.3,this.filterLabel="3 hours",this.getUptimeStatus(.3)}},{text:"Last 6 hours",handler:()=>{this.filter=.6,this.filterLabel="6 hours",this.getUptimeStatus(.6)}},{text:"Last 12 hours",handler:()=>{this.filter=.12,this.filterLabel="12 hours",this.getUptimeStatus(.12)}},{text:"Last 24 hours",handler:()=>{this.filter=.24,this.filterLabel="24 hours",this.getUptimeStatus(.24)}},{text:"Last 3 days",handler:()=>{this.filter=3,this.filterLabel="3 days",this.getUptimeStatus(3)}},{text:"Last 7 days",handler:()=>{this.filter=7,this.filterLabel="7 days",this.getUptimeStatus(7)}},{text:"Last 30 days",handler:()=>{this.filter=30,this.filterLabel="30 days",this.getUptimeStatus(30)}},{text:"Cancel",role:"cancel"}]});n.onDidDismiss().then(()=>{}),yield n.present()}))}}var v=e("iInd"),N=e("xgBC"),x=t["\u0275crt"]({encapsulation:0,styles:[["ion-header.underHeader[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]{min-height:50px}ion-header.underHeader[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{min-height:48px;--color-checked:white;--indicator-color:#a586fd;--indicator-color-checked:#a586fd!important}ion-content[_ngcontent-%COMP%]{--padding-top:25px;--padding-bottom:30px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{padding:15px 0}ion-content[_ngcontent-%COMP%]   ion-card.first-card[_ngcontent-%COMP%]{margin-top:0}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{width:100%;padding:0 5%;display:flex;align-items:center}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{margin-left:20px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{margin-left:5px}ion-content[_ngcontent-%COMP%]   ion-card.status[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:block;text-align:center;color:#000}ion-content[_ngcontent-%COMP%]   ion-card.status[_ngcontent-%COMP%]   div.status[_ngcontent-%COMP%]{padding:15px;display:flex;justify-content:center;align-items:center}ion-content[_ngcontent-%COMP%]   ion-card.status[_ngcontent-%COMP%]   div.status[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:52px;margin-right:8px}ion-content[_ngcontent-%COMP%]   ion-card.status[_ngcontent-%COMP%]   div.status[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:32px}ion-content[_ngcontent-%COMP%]   ion-card.percentage[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:block;text-align:center;margin-bottom:10px}ion-content[_ngcontent-%COMP%]   ion-card.percentage[_ngcontent-%COMP%]   .uptimes[_ngcontent-%COMP%]{padding:5px 5%;display:flex;justify-content:flex-start;align-items:center}ion-content[_ngcontent-%COMP%]   ion-card.percentage[_ngcontent-%COMP%]   .uptimes[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20px}ion-content[_ngcontent-%COMP%]   ion-card.percentage[_ngcontent-%COMP%]   .uptimes[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:17px}ion-content[_ngcontent-%COMP%]   ion-card.percentage[_ngcontent-%COMP%]   .uptimes[_ngcontent-%COMP%]   ion-label.filters[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-card.percentage[_ngcontent-%COMP%]   .uptimes[_ngcontent-%COMP%]   ion-label.green[_ngcontent-%COMP%]{margin-left:7px}ion-content[_ngcontent-%COMP%]   ion-label.label[_ngcontent-%COMP%]{font-size:24px;color:#000}ion-content[_ngcontent-%COMP%]   ion-label.green[_ngcontent-%COMP%]{color:#2f932e!important;font-weight:700}ion-content[_ngcontent-%COMP%]   ion-label.red[_ngcontent-%COMP%]{color:#d43810!important;font-weight:700}ion-content[_ngcontent-%COMP%]   ion-label.description[_ngcontent-%COMP%]{display:block;padding:15px 5%;color:#000}ion-content[_ngcontent-%COMP%]   ion-label.filters[_ngcontent-%COMP%]{font-size:15px;color:#000}ion-content[_ngcontent-%COMP%]   ion-label.filter-label[_ngcontent-%COMP%]{display:block;text-align:center;font-size:20px;font-weight:700}ion-content[_ngcontent-%COMP%]   ion-label.no-result[_ngcontent-%COMP%]{display:block;text-align:center;margin-top:15px}ion-content[_ngcontent-%COMP%]   div.filter[_ngcontent-%COMP%]{display:flex;padding:0 40px}ion-content[_ngcontent-%COMP%]   div.filter[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:block;margin:auto}ion-content[_ngcontent-%COMP%]   ion-card.status-card[_ngcontent-%COMP%]{display:flex;align-items:center;padding:20px;margin:24px 0}ion-content[_ngcontent-%COMP%]   ion-card.status-card[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:55px!important}ion-content[_ngcontent-%COMP%]   ion-card.status-card[_ngcontent-%COMP%]   .status-des[_ngcontent-%COMP%]{display:block;padding-left:20px}ion-content[_ngcontent-%COMP%]   ion-card.status-card[_ngcontent-%COMP%]   .status-des[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:block}ion-content[_ngcontent-%COMP%]   ion-card.status-card[_ngcontent-%COMP%]   .status-des[_ngcontent-%COMP%]   ion-label.title[_ngcontent-%COMP%]{font-size:20px;font-weight:400}ion-content[_ngcontent-%COMP%]   ion-card.status-card[_ngcontent-%COMP%]   .status-des[_ngcontent-%COMP%]   ion-label.des[_ngcontent-%COMP%]{color:#979797;font-size:13px}ion-content[_ngcontent-%COMP%]   ion-card.status-card[_ngcontent-%COMP%]   div.status[_ngcontent-%COMP%]{padding:0 15px}"]],data:{}});function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-label",[["class","no-result"]],null,null,null,i.mb,i.w)),t["\u0275did"](1,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](2,0,["No down time results in ",""]))],null,(function(n,l){n(l,2,0,l.component.filterLabel)}))}function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-label",[["class","no-result"]],null,null,null,i.mb,i.w)),t["\u0275did"](1,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["No down time records so far"]))],null,null)}function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,14,"ion-card",[["class","status-card"],["mode","ios"]],null,null,null,i.X,i.e)),t["\u0275did"](1,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["class","m-down"]],null,null,null,i.gb,i.q)),t["\u0275did"](3,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](4,0,null,0,10,"div",[["class","status-des"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,2,"ion-label",[["class","title"]],null,null,null,i.mb,i.w)),t["\u0275did"](6,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Downtime"])),(n()(),t["\u0275eld"](8,0,null,null,3,"ion-label",[["class","des"]],null,null,null,i.mb,i.w)),t["\u0275did"](9,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](10,0,["on "," at ",""])),t["\u0275ppd"](11,1),(n()(),t["\u0275eld"](12,0,null,null,2,"ion-label",[["class","des"]],null,null,null,i.mb,i.w)),t["\u0275did"](13,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](14,0,["for "," hrs "," mins"]))],(function(n,l){n(l,1,0,"ios")}),(function(n,l){var e=t["\u0275unv"](l,10,0,n(l,11,0,t["\u0275nov"](l.parent.parent.parent,0),l.context.$implicit.date));n(l,10,0,e,l.context.$implicit.time),n(l,14,0,l.context.$implicit.hours,l.context.$implicit.minutes)}))}function E(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","status"],["style","padding: 0 15px;"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,S)),t["\u0275did"](2,278528,null,0,d.j,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.component.downtimeRecord)}),null)}function y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,84,"div",[["class","main"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,15,"ion-card",[["class","first-card"],["mode","ios"]],null,null,null,i.X,i.e)),t["\u0275did"](2,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](3,0,null,0,8,"div",[["class","header"]],null,null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,1,"ion-icon",[["class","filter-extra"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.openFilter()&&t),t}),i.gb,i.q)),t["\u0275did"](5,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,null,2,"ion-label",[["class","label"]],null,null,null,i.mb,i.w)),t["\u0275did"](7,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Response Time "])),(n()(),t["\u0275eld"](9,0,null,null,2,"ion-label",[["class","green"]],null,null,null,i.mb,i.w)),t["\u0275did"](10,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](11,0,["last ",""])),(n()(),t["\u0275eld"](12,0,null,0,2,"ion-label",[["class","description"]],null,null,null,i.mb,i.w)),t["\u0275did"](13,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](14,0,[' Shows the "instant" that the monitor started running a response in seconds (checked every '," mins) "])),(n()(),t["\u0275eld"](15,0,null,0,1,"google-chart",[],null,null,null,s.b,s.a)),t["\u0275did"](16,573440,null,0,r.a,[t.ElementRef,c.a],{data:[0,"data"]},null),(n()(),t["\u0275eld"](17,0,null,null,23,"ion-card",[["class","status"],["mode","ios"]],null,null,null,i.X,i.e)),t["\u0275did"](18,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](19,0,null,0,2,"ion-label",[["class","label"]],null,null,null,i.mb,i.w)),t["\u0275did"](20,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Current Status"])),(n()(),t["\u0275eld"](22,0,null,0,11,"div",[["class","status"]],null,null,null,null,null)),(n()(),t["\u0275eld"](23,0,null,null,4,"ion-icon",[],null,null,null,i.gb,i.q)),t["\u0275prd"](512,null,d.u,d.v,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](25,278528,null,0,d.i,[d.u],{ngClass:[0,"ngClass"]},null),t["\u0275pod"](26,{"d-siteDown":0,"d-siteUp":1}),t["\u0275did"](27,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](28,0,null,null,5,"ion-label",[],null,null,null,i.mb,i.w)),t["\u0275prd"](512,null,d.u,d.v,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](30,278528,null,0,d.i,[d.u],{ngClass:[0,"ngClass"]},null),t["\u0275pod"](31,{green:0,red:1}),t["\u0275did"](32,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](33,0,[" ",""])),(n()(),t["\u0275eld"](34,0,null,0,2,"ion-label",[["class","last-uptime-ago"]],null,null,null,i.mb,i.w)),t["\u0275did"](35,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](36,0,["Since "," days, "," hours, "," minutes"])),(n()(),t["\u0275eld"](37,0,null,0,3,"ion-label",[["class","last-uptime-date"]],null,null,null,i.mb,i.w)),t["\u0275did"](38,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](39,0,[" ("," at ",") "])),t["\u0275ppd"](40,1),(n()(),t["\u0275eld"](41,0,null,null,31,"ion-card",[["class","percentage"],["mode","ios"]],null,null,null,i.X,i.e)),t["\u0275did"](42,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](43,0,null,0,2,"ion-label",[["class","label"]],null,null,null,i.mb,i.w)),t["\u0275did"](44,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Uptime"])),(n()(),t["\u0275eld"](46,0,null,0,8,"div",[["class","uptimes"]],null,null,null,null,null)),(n()(),t["\u0275eld"](47,0,null,null,1,"ion-icon",[["class","m-up"]],null,null,null,i.gb,i.q)),t["\u0275did"](48,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](49,0,null,null,2,"ion-label",[["class","green"]],null,null,null,i.mb,i.w)),t["\u0275did"](50,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](51,0,["","%"])),(n()(),t["\u0275eld"](52,0,null,null,2,"ion-label",[["class","filters"]],null,null,null,i.mb,i.w)),t["\u0275did"](53,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,[" (last 24 hours)"])),(n()(),t["\u0275eld"](55,0,null,0,8,"div",[["class","uptimes"]],null,null,null,null,null)),(n()(),t["\u0275eld"](56,0,null,null,1,"ion-icon",[["class","m-up"]],null,null,null,i.gb,i.q)),t["\u0275did"](57,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](58,0,null,null,2,"ion-label",[["class","green"]],null,null,null,i.mb,i.w)),t["\u0275did"](59,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](60,0,["","%"])),(n()(),t["\u0275eld"](61,0,null,null,2,"ion-label",[["class","filters"]],null,null,null,i.mb,i.w)),t["\u0275did"](62,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,[" (last 7 days)"])),(n()(),t["\u0275eld"](64,0,null,0,8,"div",[["class","uptimes"]],null,null,null,null,null)),(n()(),t["\u0275eld"](65,0,null,null,1,"ion-icon",[["class","m-up"]],null,null,null,i.gb,i.q)),t["\u0275did"](66,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](67,0,null,null,2,"ion-label",[["class","green"]],null,null,null,i.mb,i.w)),t["\u0275did"](68,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](69,0,["","%"])),(n()(),t["\u0275eld"](70,0,null,null,2,"ion-label",[["class","filters"]],null,null,null,i.mb,i.w)),t["\u0275did"](71,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,[" (last 30 days)"])),(n()(),t["\u0275eld"](73,0,null,null,5,"div",[["class","filter"]],null,null,null,null,null)),(n()(),t["\u0275eld"](74,0,null,null,1,"ion-icon",[["class","filter-extra"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.downtimeFilter()&&t),t}),i.gb,i.q)),t["\u0275did"](75,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](76,0,null,null,2,"ion-label",[["class","filter-label"]],null,null,null,i.mb,i.w)),t["\u0275did"](77,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](78,0,["Last ",""])),(n()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](80,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,D)),t["\u0275did"](82,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,E)),t["\u0275did"](84,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,2,0,"ios"),n(l,16,0,e.uptimeChart),n(l,18,0,"ios");var t=n(l,26,0,"DOWN"===(null==e.uptimeStatus?null:e.uptimeStatus.status),"UP"===(null==e.uptimeStatus?null:e.uptimeStatus.status));n(l,25,0,t);var u=n(l,31,0,"UP"===(null==e.uptimeStatus?null:e.uptimeStatus.status),"UP"!==(null==e.uptimeStatus?null:e.uptimeStatus.status));n(l,30,0,u),n(l,42,0,"ios"),n(l,80,0,e.uptimeStatus&&0===e.downtimeRecord.length&&(null==e.uptimeStatus?null:e.uptimeStatus.last_downtime.date)),n(l,82,0,e.uptimeStatus&&0===e.downtimeRecord.length&&!(null!=e.uptimeStatus&&e.uptimeStatus.last_downtime.date)),n(l,84,0,e.downtimeRecord.length>0)}),(function(n,l){var e=l.component;n(l,11,0,e.filterLabel),n(l,14,0,null==e.uptimeStatus?null:e.uptimeStatus.checkmins),n(l,33,0,null==e.uptimeStatus?null:e.uptimeStatus.status),n(l,36,0,null==e.uptimeStatus?null:e.uptimeStatus.last_uptime.days,null==e.uptimeStatus?null:e.uptimeStatus.last_uptime.hours,null==e.uptimeStatus?null:e.uptimeStatus.last_uptime.minutes);var u=t["\u0275unv"](l,39,0,n(l,40,0,t["\u0275nov"](l.parent,0),null==e.uptimeStatus?null:e.uptimeStatus.last_uptime.date));n(l,39,0,u,null==e.uptimeStatus?null:e.uptimeStatus.last_uptime.time),n(l,51,0,null==e.uptimeStatus?null:e.uptimeStatus.percentage.last_24_hours),n(l,60,0,null==e.uptimeStatus?null:e.uptimeStatus.percentage.last_24_hours),n(l,69,0,null==e.uptimeStatus?null:e.uptimeStatus.percentage.last_24_hours),n(l,78,0,e.downtimeFilterLabel)}))}function Z(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","skeleton"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"app-sdomain-list",[],null,null,null,m.b,m.a)),t["\u0275did"](2,114688,null,0,g.a,[],null,null)],(function(n,l){n(l,2,0)}),null)}function k(n){return t["\u0275vid"](0,[t["\u0275pid"](0,f.a,[]),t["\u0275qud"](671088640,1,{content:0}),(n()(),t["\u0275eld"](2,0,null,null,16,"ion-header",[["class","underHeader"]],null,null,null,i.fb,i.p)),t["\u0275did"](3,49152,null,0,a.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](4,0,null,0,14,"ion-toolbar",[["class","toolbar"]],null,null,null,i.Fb,i.P)),t["\u0275did"](5,49152,null,0,a.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,0,12,"ion-segment",[["mode","md"],["value","1"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0;return"ionBlur"===l&&(u=!1!==t["\u0275nov"](n,9)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t["\u0275nov"](n,9)._handleChangeEvent(e.target)&&u),u}),i.wb,i.F)),t["\u0275prd"](5120,null,p.i,(function(n){return[n]}),[a.Lb]),t["\u0275did"](8,49152,null,0,a.ib,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"],value:[1,"value"]},null),t["\u0275did"](9,16384,null,0,a.Lb,[t.ElementRef],null,null),(n()(),t["\u0275eld"](10,0,null,0,4,"ion-segment-button",[["checked",""],["value","1"]],null,null,null,i.vb,i.G)),t["\u0275did"](11,49152,null,0,a.jb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{value:[0,"value"]},null),(n()(),t["\u0275eld"](12,0,null,0,2,"ion-label",[],null,null,null,i.mb,i.w)),t["\u0275did"](13,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Uptime"])),(n()(),t["\u0275eld"](15,0,null,0,1,"ion-segment-button",[],null,null,null,i.vb,i.G)),t["\u0275did"](16,49152,null,0,a.jb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"]},null),(n()(),t["\u0275eld"](17,0,null,0,1,"ion-segment-button",[],null,null,null,i.vb,i.G)),t["\u0275did"](18,49152,null,0,a.jb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"]},null),(n()(),t["\u0275eld"](19,0,null,null,5,"ion-content",[],null,null,null,i.bb,i.l)),t["\u0275did"](20,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,y)),t["\u0275did"](22,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,Z)),t["\u0275did"](24,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,8,0,"md","1"),n(l,11,0,"1"),n(l,16,0,!0),n(l,18,0,!0),n(l,22,0,e.uptimeStatus),n(l,24,0,!e.uptimeStatus)}),null)}function L(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"app-uptime",[],null,null,null,k,x)),t["\u0275prd"](512,null,h.a,h.a,[]),t["\u0275prd"](512,null,C.a,C.a,[]),t["\u0275did"](3,114688,null,0,M,[R.a,_.a,v.m,O.a,P.a,N.b,a.a,h.a,C.a,t.ChangeDetectorRef],null,null)],(function(n,l){n(l,3,0)}),null)}var F=t["\u0275ccf"]("app-uptime",M,L,{},{},[]),I=e("s5RH"),U=e("B0QU"),T=e("LtGu"),z=e("5Bek"),V=e("zMNK"),H=e("c9fC"),q=e("7++P"),j=e("j1ZV");class A{}e.d(l,"UptimePageModuleNgFactory",(function(){return B}));var B=t["\u0275cmf"](u,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,F]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,d.m,d.l,[t.LOCALE_ID,[2,d.x]]),t["\u0275mpd"](4608,p.q,p.q,[]),t["\u0275mpd"](4608,a.c,a.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,a.Fb,a.Fb,[a.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,a.Jb,a.Jb,[a.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,c.a,c.a,[t.LOCALE_ID,[2,"googleChartsVersion"],[2,"mapsApiKey"]]),t["\u0275mpd"](4608,I.a,I.a,[]),t["\u0275mpd"](1073742336,d.b,d.b,[]),t["\u0275mpd"](1073742336,p.p,p.p,[]),t["\u0275mpd"](1073742336,p.f,p.f,[]),t["\u0275mpd"](1073742336,a.Bb,a.Bb,[]),t["\u0275mpd"](1073742336,v.q,v.q,[[2,v.v],[2,v.m]]),t["\u0275mpd"](1073742336,U.c,U.c,[]),t["\u0275mpd"](1073742336,T.a,T.a,[]),t["\u0275mpd"](1073742336,z.c,z.c,[]),t["\u0275mpd"](1073742336,V.b,V.b,[]),t["\u0275mpd"](1073742336,H.d,H.d,[]),t["\u0275mpd"](1073742336,q.CountoModule,q.CountoModule,[]),t["\u0275mpd"](1073742336,j.a,j.a,[]),t["\u0275mpd"](1073742336,A,A,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](256,"googleChartsVersion","46",[]),t["\u0275mpd"](256,"mapsApiKey","AIzaSyCHjrW83Zc1vwk4mzxztYbvk2by0PQZoIE",[]),t["\u0275mpd"](256,U.b,{radius:70,outerStrokeWidth:10,innerStrokeWidth:5,showTitle:!1,showSubtitle:!1,showUnits:!1,showBackground:!1,startFromZero:!1},[]),t["\u0275mpd"](1024,v.k,(function(){return[[{path:"",component:M}]]}),[])])}))},RGvM:function(n,l,e){"use strict";e.d(l,"a",(function(){return u})),e.d(l,"b",(function(){return o}));var t=e("8Y7J"),u=(e("TX0D"),e("HlEa"),t["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function o(n){return t["\u0275vid"](2,[(n()(),t["\u0275eld"](0,0,null,null,0,"div",[],null,null,null,null,null))],null,null)}},f4Ot:function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));class t{constructor(){}ngOnInit(){}}},jnzs:function(n,l,e){"use strict";var t=e("8Y7J"),u=e("MKJQ"),o=e("sZkV");e("f4Ot"),e.d(l,"a",(function(){return i})),e.d(l,"b",(function(){return a}));var i=t["\u0275crt"]({encapsulation:0,styles:[["ion-list[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{height:200px}ion-list[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%]{height:100%}"]],data:{}});function a(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,31,"ion-list",[["mode","ios"]],null,null,null,u.ob,u.x)),t["\u0275did"](1,49152,null,0,o.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](2,0,null,0,9,"ion-card",[["mode","ios"]],null,null,null,u.X,u.e)),t["\u0275did"](3,49152,null,0,o.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](4,0,null,0,3,"ion-card-header",[],null,null,null,u.V,u.g)),t["\u0275did"](5,49152,null,0,o.o,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,u.xb,u.H)),t["\u0275did"](7,49152,null,0,o.mb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{animated:[0,"animated"]},null),(n()(),t["\u0275eld"](8,0,null,0,3,"ion-card-content",[],null,null,null,u.U,u.f)),t["\u0275did"](9,49152,null,0,o.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](10,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,u.xb,u.H)),t["\u0275did"](11,49152,null,0,o.mb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{animated:[0,"animated"]},null),(n()(),t["\u0275eld"](12,0,null,0,9,"ion-card",[["mode","ios"]],null,null,null,u.X,u.e)),t["\u0275did"](13,49152,null,0,o.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](14,0,null,0,3,"ion-card-header",[],null,null,null,u.V,u.g)),t["\u0275did"](15,49152,null,0,o.o,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](16,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,u.xb,u.H)),t["\u0275did"](17,49152,null,0,o.mb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{animated:[0,"animated"]},null),(n()(),t["\u0275eld"](18,0,null,0,3,"ion-card-content",[],null,null,null,u.U,u.f)),t["\u0275did"](19,49152,null,0,o.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](20,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,u.xb,u.H)),t["\u0275did"](21,49152,null,0,o.mb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{animated:[0,"animated"]},null),(n()(),t["\u0275eld"](22,0,null,0,9,"ion-card",[["mode","ios"]],null,null,null,u.X,u.e)),t["\u0275did"](23,49152,null,0,o.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](24,0,null,0,3,"ion-card-header",[],null,null,null,u.V,u.g)),t["\u0275did"](25,49152,null,0,o.o,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](26,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,u.xb,u.H)),t["\u0275did"](27,49152,null,0,o.mb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{animated:[0,"animated"]},null),(n()(),t["\u0275eld"](28,0,null,0,3,"ion-card-content",[],null,null,null,u.U,u.f)),t["\u0275did"](29,49152,null,0,o.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](30,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,u.xb,u.H)),t["\u0275did"](31,49152,null,0,o.mb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{animated:[0,"animated"]},null)],(function(n,l){n(l,1,0,"ios"),n(l,3,0,"ios"),n(l,7,0,""),n(l,11,0,""),n(l,13,0,"ios"),n(l,17,0,""),n(l,21,0,""),n(l,23,0,"ios"),n(l,27,0,""),n(l,31,0,"")}),null)}}}]);