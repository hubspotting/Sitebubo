function _defineProperties(n,e){for(var t=0;t<e.length;t++){var l=e[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{AArb:function(n,e,t){"use strict";t.r(e);var l=t("8Y7J"),o=function n(){_classCallCheck(this,n)},i=t("pMnS"),a=t("MKJQ"),u=t("sZkV"),c=t("iInd"),r=t("SVse"),d=t("HF2u"),b=t("u8hY"),g=t("xehS"),s=t("RZ0V"),m=t("uSrh"),f=function(){function n(e,t,l,o,i,a,u,c){_classCallCheck(this,n),this.tempSerivce=e,this.events=t,this.ionService=l,this.generalService=o,this.storage=i,this.cdr=a,this.activatedRoute=u,this.admob=c,this.unreadCount=0}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.activatedRoute.queryParams.subscribe((function(e){e.reload&&n.events.publish("reloadresult",!0)})),this.defineAdmobShow(),this.initData()}},{key:"ngOnDestroy",value:function(){this.admob.removeBanner()}},{key:"defineAdmobShow",value:function(){var n=this;this.storage.get("planInfo").then((function(e){1===e.id?n.admob.showAdmobBanner():n.admob.removeBanner()}))}},{key:"initData",value:function(){var n=this;this.storage.get("userInfo").then((function(e){n.userID=e.id,n.token=e.token}))}},{key:"ionViewWillEnter",value:function(){this.tempSerivce.dashboardParams&&(this.domainName=this.tempSerivce.dashboardParams.domainName,this.notifications=this.tempSerivce.notifications.notifications,this.unreadCount=this.tempSerivce.unreadCount,this.cdr.detectChanges())}},{key:"toggleMenu",value:function(){this.ionService.toggleMenu()}},{key:"openNotificationModal",value:function(){var n=this;this.generalService.openNotifications(this.notifications,1).then((function(e){e&&n.generalService.updateNotifications(n.domainName,n.userID,n.token).then((function(e){e&&(n.unreadCount=0,n.cdr.detectChanges())}))})).catch((function(n){console.log(n)}))}}]),n}(),C=t("xgBC"),h=l["\u0275crt"]({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]{height:50px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-title.domain-name[_ngcontent-%COMP%]{text-transform:uppercase}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{position:absolute}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button.back[_ngcontent-%COMP%]{left:0}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button.menu[_ngcontent-%COMP%]{right:0}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button.bell[_ngcontent-%COMP%]{right:35px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button.filter[_ngcontent-%COMP%]{left:0}ion-tab-bar[_ngcontent-%COMP%]{height:65px}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:contain}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20px}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.t-uptime[_ngcontent-%COMP%]{background-image:url(tab-uptime.d942a340c6ad310b0973.png)}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.t-security[_ngcontent-%COMP%]{background-image:url(tab-security.9f4f3ead772b179513be.png)}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.t-speed[_ngcontent-%COMP%]{background-image:url(tab-speed.fa2fccc4e05c877b9047.png)}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.t-seo[_ngcontent-%COMP%]{background-image:url(tab-seo.f514b2e9335e00b08f68.png)}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.t-more[_ngcontent-%COMP%]{background-image:url(tab_more.ec484218a0a9299d40d0.png)}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:11px;color:#9b9b9b;margin-top:5px}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button.tab-selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{-webkit-animation:1.5s both bounce-in-top;animation:1.5s both bounce-in-top}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button.tab-selected[_ngcontent-%COMP%]   ion-icon.t-uptime[_ngcontent-%COMP%]{background-image:url(tab-activeuptime.d04c2ccaf1514ab598bf.png)!important}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button.tab-selected[_ngcontent-%COMP%]   ion-icon.t-security[_ngcontent-%COMP%]{background-image:url(tab-activesecurity.ab8acf86cbe04f5bb7bd.png)!important}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button.tab-selected[_ngcontent-%COMP%]   ion-icon.t-speed[_ngcontent-%COMP%]{background-image:url(tab-activespeed.804e93a4f5f18bd82656.png)!important}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button.tab-selected[_ngcontent-%COMP%]   ion-icon.t-seo[_ngcontent-%COMP%]{background-image:url(tab-activeseo.6159c4dd651356231c68.png)!important}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button.tab-selected[_ngcontent-%COMP%]   ion-icon.t-more[_ngcontent-%COMP%]{background-image:url(tab_activemore.b25f40e239e1671340b6.png)!important}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button.tab-selected[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#fe7a80!important}"]],data:{}});function p(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"div",[["class","notification-div"]],null,null,null,null,null)),(n()(),l["\u0275ted"](1,null,["",""]))],null,(function(n,e){n(e,1,0,e.component.unreadCount)}))}function P(n){return l["\u0275vid"](0,[l["\u0275qud"](671088640,1,{header:0}),l["\u0275qud"](671088640,2,{tabs:0}),(n()(),l["\u0275eld"](2,0,null,null,25,"ion-header",[["class","small-header"],["id","header"]],null,null,null,a.fb,a.p)),l["\u0275did"](3,49152,null,0,u.B,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](4,0,null,0,23,"ion-toolbar",[["class","toolbar"],["mode","md"]],null,null,null,a.Fb,a.P)),l["\u0275did"](5,49152,null,0,u.zb,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{mode:[0,"mode"]},null),(n()(),l["\u0275eld"](6,0,null,0,21,"ion-buttons",[],null,null,null,a.T,a.d)),l["\u0275did"](7,49152,null,0,u.l,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](8,0,null,0,2,"ion-title",[["class","domain-name"]],null,null,null,a.Db,a.N)),l["\u0275did"](9,49152,null,0,u.xb,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275ted"](10,0,["",""])),(n()(),l["\u0275eld"](11,0,null,0,6,"ion-button",[["class","back"],["mode","md"],["routerDirection","forward"]],null,[[null,"click"]],(function(n,e,t){var o=!0;return"click"===e&&(o=!1!==l["\u0275nov"](n,13).onClick()&&o),"click"===e&&(o=!1!==l["\u0275nov"](n,15).onClick(t)&&o),o}),a.S,a.c)),l["\u0275did"](12,49152,null,0,u.k,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{mode:[0,"mode"],routerDirection:[1,"routerDirection"]},null),l["\u0275did"](13,16384,null,0,c.n,[c.m,c.a,[8,null],l.Renderer2,l.ElementRef],{routerLink:[0,"routerLink"]},null),l["\u0275pad"](14,1),l["\u0275did"](15,737280,null,0,u.Kb,[r.h,u.Gb,l.ElementRef,c.m,[2,c.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),l["\u0275eld"](16,0,null,0,1,"ion-icon",[["class","back"],["mode","ios"],["name","arrow-back"],["slot","icon-only"]],null,null,null,a.gb,a.q)),l["\u0275did"](17,49152,null,0,u.C,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),l["\u0275eld"](18,0,null,0,5,"ion-button",[["class","bell"],["mode","md"]],null,[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.openNotificationModal()&&l),l}),a.S,a.c)),l["\u0275did"](19,49152,null,0,u.k,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{mode:[0,"mode"]},null),(n()(),l["\u0275eld"](20,0,null,0,1,"ion-icon",[["class","d-notificationBell"],["slot","icon-only"]],null,null,null,a.gb,a.q)),l["\u0275did"](21,49152,null,0,u.C,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275and"](16777216,null,0,1,null,p)),l["\u0275did"](23,16384,null,0,r.k,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275eld"](24,0,null,0,3,"ion-button",[["class","menu"],["mode","md"]],null,[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.toggleMenu()&&l),l}),a.S,a.c)),l["\u0275did"](25,49152,null,0,u.k,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{mode:[0,"mode"]},null),(n()(),l["\u0275eld"](26,0,null,0,1,"ion-icon",[["class","menu"],["slot","icon-only"]],null,null,null,a.gb,a.q)),l["\u0275did"](27,49152,null,0,u.C,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](28,0,null,null,39,"ion-tabs",[["class","monitor-tabs"],["id","tabs"],["mode","ios"]],null,[[null,"ionTabButtonClick"]],(function(n,e,t){var o=!0;return"ionTabButtonClick"===e&&(o=!1!==l["\u0275nov"](n,29).select(t.detail.tab)&&o),o}),a.Bb,a.L)),l["\u0275did"](29,49152,null,1,u.tb,[u.Gb],null,null),l["\u0275qud"](603979776,3,{tabBar:0}),(n()(),l["\u0275eld"](31,0,null,1,36,"ion-tab-bar",[["slot","bottom"]],null,null,null,a.zb,a.J)),l["\u0275did"](32,49152,[[3,4]],0,u.rb,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](33,0,null,0,6,"ion-tab-button",[["tab","uptime"]],null,null,null,a.Ab,a.K)),l["\u0275did"](34,49152,null,0,u.sb,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{tab:[0,"tab"]},null),(n()(),l["\u0275eld"](35,0,null,0,1,"ion-icon",[["class","t-uptime"]],null,null,null,a.gb,a.q)),l["\u0275did"](36,49152,[["tabIcon",4]],0,u.C,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](37,0,null,0,2,"ion-label",[],null,null,null,a.mb,a.w)),l["\u0275did"](38,49152,null,0,u.N,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275ted"](-1,0,["Uptime"])),(n()(),l["\u0275eld"](40,0,null,0,6,"ion-tab-button",[["tab","security"]],null,null,null,a.Ab,a.K)),l["\u0275did"](41,49152,null,0,u.sb,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{tab:[0,"tab"]},null),(n()(),l["\u0275eld"](42,0,null,0,1,"ion-icon",[["class","t-security"]],null,null,null,a.gb,a.q)),l["\u0275did"](43,49152,[["tabIcon",4]],0,u.C,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](44,0,null,0,2,"ion-label",[],null,null,null,a.mb,a.w)),l["\u0275did"](45,49152,null,0,u.N,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275ted"](-1,0,["Security"])),(n()(),l["\u0275eld"](47,0,null,0,6,"ion-tab-button",[["tab","speed"]],null,null,null,a.Ab,a.K)),l["\u0275did"](48,49152,null,0,u.sb,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{tab:[0,"tab"]},null),(n()(),l["\u0275eld"](49,0,null,0,1,"ion-icon",[["class","t-speed"]],null,null,null,a.gb,a.q)),l["\u0275did"](50,49152,[["tabIcon",4]],0,u.C,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](51,0,null,0,2,"ion-label",[],null,null,null,a.mb,a.w)),l["\u0275did"](52,49152,null,0,u.N,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275ted"](-1,0,["Speed"])),(n()(),l["\u0275eld"](54,0,null,0,6,"ion-tab-button",[["tab","seo"]],null,null,null,a.Ab,a.K)),l["\u0275did"](55,49152,null,0,u.sb,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{tab:[0,"tab"]},null),(n()(),l["\u0275eld"](56,0,null,0,1,"ion-icon",[["class","t-seo"]],null,null,null,a.gb,a.q)),l["\u0275did"](57,49152,[["tabIcon",4]],0,u.C,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](58,0,null,0,2,"ion-label",[],null,null,null,a.mb,a.w)),l["\u0275did"](59,49152,null,0,u.N,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275ted"](-1,0,["Seo"])),(n()(),l["\u0275eld"](61,0,null,0,6,"ion-tab-button",[["tab","more"]],null,null,null,a.Ab,a.K)),l["\u0275did"](62,49152,null,0,u.sb,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{tab:[0,"tab"]},null),(n()(),l["\u0275eld"](63,0,null,0,1,"ion-icon",[["class","t-more"]],null,null,null,a.gb,a.q)),l["\u0275did"](64,49152,[["tabIcon",4]],0,u.C,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](65,0,null,0,2,"ion-label",[],null,null,null,a.mb,a.w)),l["\u0275did"](66,49152,null,0,u.N,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275ted"](-1,0,["More"]))],(function(n,e){var t=e.component;n(e,5,0,"md"),n(e,12,0,"md","forward");var l=n(e,14,0,"/dashboard");n(e,13,0,l),n(e,15,0,"forward"),n(e,17,0,"ios","arrow-back"),n(e,19,0,"md"),n(e,23,0,t.unreadCount),n(e,25,0,"md"),n(e,34,0,"uptime"),n(e,41,0,"security"),n(e,48,0,"speed"),n(e,55,0,"seo"),n(e,62,0,"more")}),(function(n,e){n(e,10,0,e.component.domainName)}))}var M=l["\u0275ccf"]("app-tabs",f,(function(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"app-tabs",[],null,null,null,P,h)),l["\u0275did"](1,245760,null,0,f,[b.a,m.a,g.a,d.a,C.b,l.ChangeDetectorRef,c.a,s.a],null,null)],(function(n,e){n(e,1,0)}),null)}),{},{},[]),_=t("s7LF"),O=function(){return Promise.all([t.e(0),t.e(96)]).then(t.bind(null,"64dr")).then((function(n){return n.UptimePageModuleNgFactory}))},R=function(){return t.e(103).then(t.bind(null,"uUwv")).then((function(n){return n.SecurityPageModuleNgFactory}))},v=function(){return Promise.all([t.e(4),t.e(105)]).then(t.bind(null,"T1i2")).then((function(n){return n.SpeedPageModuleNgFactory}))},k=function(){return Promise.all([t.e(4),t.e(0),t.e(104)]).then(t.bind(null,"fB+1")).then((function(n){return n.SeoPageModuleNgFactory}))},N=function(){return Promise.all([t.e(3),t.e(0),t.e(98)]).then(t.bind(null,"JfEH")).then((function(n){return n.MorePageModuleNgFactory}))},D=function(){return t.e(5).then(t.bind(null,"e3rT")).then((function(n){return n.DomainListPageModuleNgFactory}))},y=function n(){_classCallCheck(this,n)};t.d(e,"TabsPageModuleNgFactory",(function(){return E}));var E=l["\u0275cmf"](o,[],(function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,M]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,r.m,r.l,[l.LOCALE_ID,[2,r.x]]),l["\u0275mpd"](4608,_.q,_.q,[]),l["\u0275mpd"](4608,u.c,u.c,[l.NgZone,l.ApplicationRef]),l["\u0275mpd"](4608,u.Fb,u.Fb,[u.c,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](4608,u.Jb,u.Jb,[u.c,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](1073742336,r.b,r.b,[]),l["\u0275mpd"](1073742336,_.p,_.p,[]),l["\u0275mpd"](1073742336,_.f,_.f,[]),l["\u0275mpd"](1073742336,u.Bb,u.Bb,[]),l["\u0275mpd"](1073742336,c.q,c.q,[[2,c.v],[2,c.m]]),l["\u0275mpd"](1073742336,y,y,[]),l["\u0275mpd"](1073742336,o,o,[]),l["\u0275mpd"](1024,c.k,(function(){return[[{path:"",component:f,children:[{path:"uptime",children:[{path:"",loadChildren:O}]},{path:"security",children:[{path:"",loadChildren:R}]},{path:"speed",children:[{path:"",loadChildren:v}]},{path:"seo",children:[{path:"",loadChildren:k}]},{path:"more",children:[{path:"",loadChildren:N},{path:"domain",loadChildren:D}]}]}]]}),[])])}))}}]);