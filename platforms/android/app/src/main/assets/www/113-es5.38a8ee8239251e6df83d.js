function _defineProperties(l,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{E1z8:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),u=function l(){_classCallCheck(this,l)},o=e("pMnS"),i=e("MKJQ"),a=e("sZkV"),d=e("SVse"),r=function(){function l(n){_classCallCheck(this,l),this.router=n}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"addDomain",value:function(){this.router.navigate(["add-site"])}},{key:"changePlan",value:function(){this.router.navigate(["plans"],{replaceUrl:!0,queryParams:{newUser:!0}})}}]),l}(),c=e("iInd"),s=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function f(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,15,"div",[["class","c-content"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"ion-label",[["class","c-header"]],null,null,null,i.mb,i.w)),t["\u0275did"](2,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Welcome, Friend! "])),(l()(),t["\u0275eld"](4,0,null,null,8,"ion-label",[["class","c-welcome"]],null,null,null,i.mb,i.w)),t["\u0275did"](5,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,[" We hope this is the begining of a "])),(l()(),t["\u0275eld"](7,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,["long and fruitful friendship where"])),(l()(),t["\u0275eld"](9,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,[" we hope to provide you enough"])),(l()(),t["\u0275eld"](11,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,[" peace of mind. "])),(l()(),t["\u0275eld"](13,0,null,null,2,"ion-label",[["class","c-freecls"]],null,null,null,i.mb,i.w)),t["\u0275did"](14,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["FREE PLAN"]))],null,null)}function m(l){return t["\u0275vid"](0,[(l()(),t["\u0275and"](16777216,null,null,1,null,f)),t["\u0275did"](1,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,n.component.details)}),null)}var g=e("5miV"),p=function(){function l(n,e){_classCallCheck(this,l),this.router=n,this.memberService=e}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"changeMembership",value:function(){this.router.navigate(["plans"])}},{key:"deleteMembership",value:function(){this.memberService.deleteAccount()}}]),l}(),h=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,21,"div",[["class","c-content"],["id","freeuser"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"ion-label",[["class","c-header"]],null,null,null,i.mb,i.w)),t["\u0275did"](2,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Welcome, Friend! "])),(l()(),t["\u0275eld"](4,0,null,null,2,"ion-label",[["class","c-welcome"]],null,null,null,i.mb,i.w)),t["\u0275did"](5,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,[" Since you are no longer subscribed to any of our paid plans, your monthly subscription has closed with immediate affect. "])),(l()(),t["\u0275eld"](7,0,null,null,2,"ion-label",[["class","c-freecls"]],null,null,null,i.mb,i.w)),t["\u0275did"](8,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["FREE"])),(l()(),t["\u0275eld"](10,0,null,null,2,"ion-label",[["class","c-plancls"]],null,null,null,i.mb,i.w)),t["\u0275did"](11,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](12,0,[""," plan"])),(l()(),t["\u0275eld"](13,0,null,null,2,"ion-button",[["class","c-greenButton red"],["expand","block"],["mode","md"],["size","large"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.changeMembership()&&t),t}),i.S,i.c)),t["\u0275did"](14,49152,null,0,a.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{expand:[0,"expand"],mode:[1,"mode"],size:[2,"size"]},null),(l()(),t["\u0275ted"](-1,0,["Upgrade"])),(l()(),t["\u0275eld"](16,0,null,null,5,"div",[["class","c-btmdiv"]],null,null,null,null,null)),(l()(),t["\u0275eld"](17,0,null,null,1,"ion-icon",[["class","c-cancel-membership"]],null,null,null,i.gb,i.q)),t["\u0275did"](18,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](19,0,null,null,2,"ion-label",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.deleteMembership()&&t),t}),i.mb,i.w)),t["\u0275did"](20,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Delete Free Account"]))],(function(l,n){l(n,14,0,"block","md","large")}),(function(l,n){l(n,12,0,n.component.details.name)}))}function w(l){return t["\u0275vid"](0,[(l()(),t["\u0275and"](16777216,null,null,1,null,b)),t["\u0275did"](1,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,n.component.details)}),null)}var R=function(){function l(n){_classCallCheck(this,l),this.router=n}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"gotoDomainList",value:function(){this.router.navigate(["domain-list"],{replaceUrl:!0})}},{key:"upgrade",value:function(){this.router.navigate(["plans"])}}]),l}(),v=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function C(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"ion-icon",[["class","c-paypal"]],null,null,null,i.gb,i.q)),t["\u0275did"](1,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null)],null,null)}function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"ion-icon",[["class","c-inapp"]],null,null,null,i.gb,i.q)),t["\u0275did"](1,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null)],null,null)}function y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,29,"div",[["class","c-content"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,8,"ion-label",[["class","c-welcome"]],null,null,null,i.mb,i.w)),t["\u0275did"](2,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Your first payment has been"])),(l()(),t["\u0275eld"](4,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,[" taken successfully, Thank you! "])),(l()(),t["\u0275eld"](6,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,[" feel free to keep us updated "])),(l()(),t["\u0275eld"](8,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,[" your feedback"])),(l()(),t["\u0275eld"](10,0,null,null,2,"ion-label",[["class","c-norfnt"]],null,null,null,i.mb,i.w)),t["\u0275did"](11,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Next payment"])),(l()(),t["\u0275eld"](13,0,null,null,4,"ion-label",[["class","c-bigfnt"]],null,null,null,i.mb,i.w)),t["\u0275did"](14,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](15,0,["\xa3","."])),(l()(),t["\u0275eld"](16,0,null,0,1,"span",[["class","c-smallfnt"]],null,null,null,null,null)),(l()(),t["\u0275ted"](17,null,["",""])),(l()(),t["\u0275eld"](18,0,null,null,4,"ion-label",[["class","c-norfnt"]],null,null,null,i.mb,i.w)),t["\u0275did"](19,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["will be taken on "])),(l()(),t["\u0275eld"](21,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](22,null,["",""])),(l()(),t["\u0275and"](16777216,null,null,1,null,C)),t["\u0275did"](24,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](26,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](27,0,null,null,2,"ion-label",[["class","c-norfnt"]],null,null,null,i.mb,i.w)),t["\u0275did"](28,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](29,0,[""," Plan"]))],(function(l,n){var e=n.component;l(n,24,0,"Paypal"===e.details.payment_method),l(n,26,0,"Inapp"===e.details.payment_method)}),(function(l,n){var e=n.component;l(n,15,0,e.details.bigprc),l(n,17,0,e.details.smallprc),l(n,22,0,e.details.next_payment_date),l(n,29,0,e.details.name)}))}function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275and"](16777216,null,null,1,null,y)),t["\u0275did"](1,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,n.component.details)}),null)}var I=e("Kzq5"),D=e("TGN4"),E=e("LtMM"),S=e("tVJU"),P=e("9B/o"),_=e("mrSG"),Z=e("HF2u"),T=e("xehS"),U=e("Tddt"),O=e("HTWg"),V=e("uSrh"),x=e("G1Oi"),M=function(){function l(n,e,t,u,o,i,a,d,r,c){_classCallCheck(this,l),this.activatedRoute=n,this.storage=e,this.ionService=t,this.subscriptionAPI=u,this.events=o,this.cdr=i,this.generalService=a,this.transactionAPI=d,this.domainAPI=r,this.router=c,this.newUser=!1}return _createClass(l,[{key:"ngOnInit",value:function(){this.initialize(),this.getPlanInfo(),this.resetDomainInfo()}},{key:"ionViewWillEnter",value:function(){}},{key:"initialize",value:function(){var l=this;this.activatedRoute.queryParams.subscribe((function(n){console.log(n),n&&(void 0!==n.isNewUser&&(l.newUser=JSON.parse(n.isNewUser)),void 0!==n.isFreeTrial&&(l.isFreeTrial=JSON.parse(n.isFreeTrial)),l.platform=n.platform,l.status=n.status,l.oldPlan=n.oldPlan)}))}},{key:"resetDomainInfo",value:function(){var l=this;this.storage.get("userInfo").then((function(n){l.domainAPI.getDomainList(n.id,n.token).subscribe((function(n){1===n.RESPONSECODE&&(l.events.publish("domainInfo_set",n),l.domainCounts=n.domains.my_domains)}))}))}},{key:"getTransactionHistory",value:function(l,n){var e=this,t=0;return this.ionService.showLoading(),new Promise((function(u,o){e.transactionAPI.getTransactionHistory(l,n).subscribe((function(l){e.ionService.closeLoading(),console.log(l),1===l.RESPONSECODE?(l.data&&l.data.length>0&&(e.details.invoice_pdf=l.data[0].invoice_pdf,e.details.lastpaymentAmount=l.data[0].amount,e.details.payment_method=l.data[0].payment_method,l.data.forEach((function(l){t++}))),u(t)):o(null)}),(function(l){e.ionService.closeLoading(),e.ionService.presentToast("Error happened from server")}))}))}},{key:"defineDisplayAndroid",value:function(){var l=this;return new Promise((function(n,e){var t;l.newUser&&1===l.subscriptionID?(t=1,console.log("free")):l.newUser||1!==l.subscriptionID?l.subscriptionID>1&&l.isFreeTrial?(t=4,console.log("trial")):l.firstPay&&l.subscriptionID>1?(t=3,console.log("pay")):(t=5,console.log("no")):(t=2,console.log("old")),n(t)}))}},{key:"defineDisplayIOS",value:function(){var l=this;return new Promise((function(n){l.newUser&&1===l.subscriptionID||(l.newUser&&l.subscriptionID>1||l.newUser||l.subscriptionID)}))}},{key:"getPlanInfo",value:function(){return _.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:this.storage.get("userInfo").then((function(l){n.subscriptionAPI.currentSubscription(l.id,l.token).subscribe((function(e){if(console.log(e.data),1===e.RESPONSECODE){n.events.publish("planInfo_set",e.data),n.subscriptionID=e.data.id,n.newPlan=e.data.name+" Plan";var t=e.data,u=t.price.toString().split(".");t.bigprc=u[0],t.smallprc=u[1],n.details=t,console.log(n.details),n.getTransactionHistory(l.id,l.token).then((function(l){n.firstPay=1===l,"ios"===n.details.platform?n.defineDisplayIOS().then((function(l){n.displayValue=l,n.cdr.detectChanges()})):n.defineDisplayAndroid().then((function(l){n.displayValue=l,n.cdr.detectChanges()}))}))}else n.ionService.showAlert("Error from Server",e.RESPONSE)}),(function(l){n.ionService.showAlert("Error from Server","Unable to call Server API")}))}));case 1:case"end":return l.stop()}}),l,this)})))}},{key:"toggleMenu",value:function(){this.ionService.toggleMenu()}},{key:"openFeedback",value:function(){this.generalService.openFeedback()}},{key:"gotoAddSite",value:function(){this.router.navigate(["add-site"])}},{key:"gotoDomainList",value:function(){this.router.navigate(["domain-list"])}}]),l}(),F=e("xgBC"),z=t["\u0275crt"]({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{position:absolute;z-index:1}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button.menu[_ngcontent-%COMP%]{right:0}ion-content[_ngcontent-%COMP%]{--padding-bottom:20px}ion-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:block}ion-content[_ngcontent-%COMP%]   ion-label.c-header[_ngcontent-%COMP%]{font-size:22px;font-weight:700;display:block;margin-top:20px;text-align:center}ion-content[_ngcontent-%COMP%]   ion-label.c-welcome[_ngcontent-%COMP%]{display:block;text-align:center;font-size:18px;margin:20px auto}ion-content[_ngcontent-%COMP%]   ion-label.c-notice[_ngcontent-%COMP%]{margin-top:10px;display:block;text-align:center;font-size:15px;color:gray}ion-content[_ngcontent-%COMP%]   .c-greenButton[_ngcontent-%COMP%]{height:56px;max-width:70%;display:block;margin:30px auto auto;--border-radius:30px;text-transform:none;font-size:20px}"]],data:{}});function A(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ion-button",[["class","menu"],["mode","md"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.toggleMenu()&&t),t}),i.S,i.c)),t["\u0275did"](1,49152,null,0,a.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(l()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["class","menu"],["slot","icon-only"]],null,null,null,i.gb,i.q)),t["\u0275did"](3,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null)],(function(l,n){l(n,1,0,"md")}),null)}function L(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"ion-header",[["class","small-header"]],null,null,null,i.fb,i.p)),t["\u0275did"](1,49152,null,0,a.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,8,"ion-toolbar",[["class","toolbar"],["mode","md"]],null,null,null,i.Fb,i.P)),t["\u0275did"](3,49152,null,0,a.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(l()(),t["\u0275eld"](4,0,null,0,6,"ion-buttons",[],null,null,null,i.T,i.d)),t["\u0275did"](5,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](6,0,null,0,2,"ion-title",[],null,null,null,i.Db,i.N)),t["\u0275did"](7,49152,null,0,a.xb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Your membership"])),(l()(),t["\u0275and"](16777216,null,0,1,null,A)),t["\u0275did"](10,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,3,0,"md"),l(n,10,0,!e.newUser)}),null)}function q(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-label",[["class","c-header"]],null,null,null,i.mb,i.w)),t["\u0275did"](1,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Welcome Friend!"]))],null,null)}function B(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-label",[["class","c-welcome"],["style","margin:15px"]],null,null,null,i.mb,i.w)),t["\u0275did"](1,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,[" We hope this is the begining of a long and fruitful friendship where we hope to provide you enough peace of mind. "]))],null,null)}function W(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-label",[["class","c-header"]],null,null,null,i.mb,i.w)),t["\u0275did"](1,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Successfully Downgraded!"]))],null,null)}function J(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,6,"ion-label",[["class","c-notice"]],null,null,null,i.mb,i.w)),t["\u0275did"](1,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](3,null,["",""])),(l()(),t["\u0275ted"](-1,0,[" to "])),(l()(),t["\u0275eld"](5,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](6,null,["",""]))],null,(function(l,n){var e=n.component;l(n,3,0,e.oldPlan),l(n,6,0,e.newPlan)}))}function H(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-label",[["class","c-welcome"],["style","margin:15px"]],null,null,null,i.mb,i.w)),t["\u0275did"](1,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,[" You have now been switched to your new plan "]))],null,null)}function j(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-label",[["class","c-header"]],null,null,null,i.mb,i.w)),t["\u0275did"](1,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Successfully Upgraded"]))],null,null)}function Y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,6,"ion-label",[["class","c-notice"]],null,null,null,i.mb,i.w)),t["\u0275did"](1,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](3,null,["",""])),(l()(),t["\u0275ted"](-1,0,[" to "])),(l()(),t["\u0275eld"](5,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](6,null,["",""]))],null,(function(l,n){var e=n.component;l(n,3,0,e.oldPlan),l(n,6,0,e.newPlan)}))}function G(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-label",[["class","c-welcome"],["style","margin:15px"]],null,null,null,i.mb,i.w)),t["\u0275did"](1,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,[" You can now start enjoying the benefilts on your new plan. "]))],null,null)}function K(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-first-free",[],null,null,null,m,s)),t["\u0275did"](1,114688,null,0,r,[c.m],{details:[0,"details"]},null)],(function(l,n){l(n,1,0,n.component.details)}),null)}function Q(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-old-free",[],null,null,null,w,h)),t["\u0275did"](1,114688,null,0,p,[c.m,g.a],{details:[0,"details"]},null)],(function(l,n){l(n,1,0,n.component.details)}),null)}function X(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-first-pay",[],null,null,null,N,v)),t["\u0275did"](1,114688,null,0,R,[c.m],{details:[0,"details"],newUser:[1,"newUser"]},null)],(function(l,n){var e=n.component;l(n,1,0,e.details,e.newUser)}),null)}function $(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-free-trial",[],null,null,null,I.b,I.a)),t["\u0275did"](1,114688,null,0,D.a,[c.m],{details:[0,"details"],newUser:[1,"newUser"]},null)],(function(l,n){var e=n.component;l(n,1,0,e.details,e.newUser)}),null)}function ll(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-no-trial",[],null,null,null,E.b,E.a)),t["\u0275did"](1,114688,null,0,S.a,[c.m,P.a],{details:[0,"details"],newUser:[1,"newUser"]},null)],(function(l,n){var e=n.component;l(n,1,0,e.details,e.newUser)}),null)}function nl(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-button",[["block",""],["class","c-greenButton red"],["id","paypal-checkout"],["mode","md"],["size","large"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.gotoAddSite()&&t),t}),i.S,i.c)),t["\u0275did"](1,49152,null,0,a.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"],size:[1,"size"]},null),(l()(),t["\u0275ted"](-1,0,[" Get Started "]))],(function(l,n){l(n,1,0,"md","large")}),null)}function el(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-button",[["block",""],["class","c-greenButton red"],["id","paypal-checkout"],["mode","md"],["size","large"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.gotoDomainList()&&t),t}),i.S,i.c)),t["\u0275did"](1,49152,null,0,a.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"],size:[1,"size"]},null),(l()(),t["\u0275ted"](-1,0,[" Domain List "]))],(function(l,n){l(n,1,0,"md","large")}),null)}function tl(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,38,"ion-content",[],null,null,null,i.bb,i.l)),t["\u0275did"](1,16384,null,0,d.n,[],{ngSwitch:[0,"ngSwitch"]},null),t["\u0275did"](2,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,q)),t["\u0275did"](4,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,B)),t["\u0275did"](6,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,W)),t["\u0275did"](8,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,J)),t["\u0275did"](10,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,H)),t["\u0275did"](12,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,j)),t["\u0275did"](14,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,Y)),t["\u0275did"](16,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,G)),t["\u0275did"](18,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,K)),t["\u0275did"](20,278528,null,0,d.o,[t.ViewContainerRef,t.TemplateRef,d.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,Q)),t["\u0275did"](22,278528,null,0,d.o,[t.ViewContainerRef,t.TemplateRef,d.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,X)),t["\u0275did"](24,278528,null,0,d.o,[t.ViewContainerRef,t.TemplateRef,d.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,$)),t["\u0275did"](26,278528,null,0,d.o,[t.ViewContainerRef,t.TemplateRef,d.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,ll)),t["\u0275did"](28,278528,null,0,d.o,[t.ViewContainerRef,t.TemplateRef,d.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,nl)),t["\u0275did"](30,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,el)),t["\u0275did"](32,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](33,0,null,0,5,"ion-fab",[["class","feedback-fab"],["horizontal","start"],["slot","fixed"],["vertical","bottom"]],null,null,null,i.db,i.m)),t["\u0275did"](34,49152,null,0,a.w,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t["\u0275eld"](35,0,null,0,3,"ion-fab-button",[["class","feedback"],["mode","md"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.openFeedback()&&t),t}),i.cb,i.n)),t["\u0275did"](36,49152,null,0,a.x,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(l()(),t["\u0275eld"](37,0,null,0,1,"ion-icon",[["class","feedback"]],null,null,null,i.gb,i.q)),t["\u0275did"](38,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null)],(function(l,n){var e=n.component;l(n,1,0,e.displayValue),l(n,4,0,e.newUser&&"ios"===e.platform),l(n,6,0,e.newUser&&"ios"===e.platform),l(n,8,0,!e.newUser&&"downgrade"===e.status&&!e.isFreeTrial),l(n,10,0,!e.newUser&&"downgrade"===e.status&&!e.isFreeTrial),l(n,12,0,!e.newUser&&"downgrade"===e.status),l(n,14,0,!e.newUser&&"upgrade"===e.status),l(n,16,0,!e.newUser&&"upgrade"===e.status),l(n,18,0,!e.newUser&&"upgrade"===e.status),l(n,20,0,1),l(n,22,0,2),l(n,24,0,3),l(n,26,0,4),l(n,28,0,5),l(n,30,0,e.newUser||0===e.domainCounts),l(n,32,0,!e.newUser&&e.domainCounts>0),l(n,34,0,"start","bottom"),l(n,36,0,"md")}),null)}function ul(l){return t["\u0275vid"](0,[(l()(),t["\u0275and"](16777216,null,null,1,null,L)),t["\u0275did"](1,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,tl)),t["\u0275did"](3,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,1,0,e.details),l(n,3,0,e.details)}),null)}var ol=t["\u0275ccf"]("app-subscription-welcome",M,(function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-subscription-welcome",[],null,null,null,ul,z)),t["\u0275did"](1,114688,null,0,M,[c.a,F.b,T.a,U.a,V.a,t.ChangeDetectorRef,Z.a,O.a,x.a,c.m],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),il=e("s7LF"),al=e("HlEa"),dl=e("s5RH"),rl=e("B0QU"),cl=e("LtGu"),sl=e("5Bek"),fl=e("zMNK"),ml=e("c9fC"),gl=e("7++P"),pl=e("j1ZV"),hl=function l(){_classCallCheck(this,l)};e.d(n,"SubscriptionWelcomePageModuleNgFactory",(function(){return bl}));var bl=t["\u0275cmf"](u,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,ol]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,d.m,d.l,[t.LOCALE_ID,[2,d.x]]),t["\u0275mpd"](4608,il.q,il.q,[]),t["\u0275mpd"](4608,a.c,a.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,a.Fb,a.Fb,[a.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,a.Jb,a.Jb,[a.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,al.a,al.a,[t.LOCALE_ID,[2,"googleChartsVersion"],[2,"mapsApiKey"]]),t["\u0275mpd"](4608,dl.a,dl.a,[]),t["\u0275mpd"](1073742336,d.b,d.b,[]),t["\u0275mpd"](1073742336,il.p,il.p,[]),t["\u0275mpd"](1073742336,il.f,il.f,[]),t["\u0275mpd"](1073742336,a.Bb,a.Bb,[]),t["\u0275mpd"](1073742336,c.q,c.q,[[2,c.v],[2,c.m]]),t["\u0275mpd"](1073742336,rl.c,rl.c,[]),t["\u0275mpd"](1073742336,cl.a,cl.a,[]),t["\u0275mpd"](1073742336,sl.c,sl.c,[]),t["\u0275mpd"](1073742336,fl.b,fl.b,[]),t["\u0275mpd"](1073742336,ml.d,ml.d,[]),t["\u0275mpd"](1073742336,gl.CountoModule,gl.CountoModule,[]),t["\u0275mpd"](1073742336,pl.a,pl.a,[]),t["\u0275mpd"](1073742336,hl,hl,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](256,"googleChartsVersion","46",[]),t["\u0275mpd"](256,"mapsApiKey","AIzaSyCHjrW83Zc1vwk4mzxztYbvk2by0PQZoIE",[]),t["\u0275mpd"](256,rl.b,{radius:70,outerStrokeWidth:10,innerStrokeWidth:5,showTitle:!1,showSubtitle:!1,showUnits:!1,showBackground:!1,startFromZero:!1},[]),t["\u0275mpd"](1024,c.k,(function(){return[[{path:"",component:M}]]}),[])])}))}}]);