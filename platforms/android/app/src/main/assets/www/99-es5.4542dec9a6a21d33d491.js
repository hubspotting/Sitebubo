function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{"vRU+":function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),o=function n(){_classCallCheck(this,n)},i=e("pMnS"),u=e("MKJQ"),a=e("sZkV"),d=e("SVse"),r=e("s7LF"),c=e("mrSG"),s=e("kScs"),g=e("YCZo"),m=e("SPri"),f=e("HF2u"),p=e("E2f4"),v=e("nBjy"),h=e("xehS"),b=function(){function n(l,e,t,o,i,u,a,d,r){_classCallCheck(this,n),this.platform=l,this.fb=e,this.fcm=t,this.formBuilder=o,this.router=i,this.generalService=u,this.ionService=a,this.storageService=d,this.authAPI=r,this.email="",this.pwd="",this.readyForSubmit=!1,this.facebookReady=!1,this.invalidEmail=!1,this.invalidPassword=!1,this.validationMessages={email:[{type:"required",message:"Email is required."},{type:"pattern",message:"Please enter a valid email."}],password:[{type:"required",message:"Password is required."},{type:"minlength",message:"Password must be at least 6 characters long."}]},this.validateEmail=!1,this.validatePassword=!1}return _createClass(n,[{key:"ngOnInit",value:function(){this.initForm(),this.getToken()}},{key:"getToken",value:function(){var n=this;this.platform.ready().then((function(){n.fcm.subscribeToTopic("all"),n.fcm.getToken().then((function(l){console.log("Token=====================  ",l),n.deviceID=l,n.deviceType=l.split(":").length>1?"I":"A"})),n.fcm.onTokenRefresh().subscribe((function(l){n.deviceID=l,n.deviceType=l.split(":").length>1?"I":"A"}))}))}},{key:"initForm",value:function(){this.validateSigninform=this.formBuilder.group({email:new r.c("",r.o.compose([r.o.required,r.o.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),password:new r.c("",r.o.compose([r.o.minLength(6),r.o.required]))})}},{key:"setEmailValidation",value:function(n){this.validateEmail=n,!1===n&&(this.invalidEmail=!1)}},{key:"setPasswordValidation",value:function(n){this.validatePassword=n,!1===n&&(this.invalidPassword=!1)}},{key:"onSigninSubmit",value:function(){this.validateEmail=!0,this.validatePassword=!0,this.validateSigninform.valid&&this.DoSignIn()}},{key:"openSignup",value:function(){this.router.navigate(["signup"])}},{key:"openForgot",value:function(){this.generalService.openForgotPassword()}},{key:"DoSignIn",value:function(){var n=this;this.readyForSubmit=!0;var l=s.Md5.hashStr(this.pwd);console.log(this.deviceID),this.authAPI.login(this.email,l,this.deviceID,this.deviceType).subscribe((function(l){console.log(l),1===l.RESPONSECODE?0===(l=l.data).user.verified?(n.readyForSubmit=!1,n.router.navigate(["verifyemail"],{queryParams:{userID:l.user.id}})):n.storageService.setStorage(l).then((function(l){l&&n.generalService.defineInitialRoutering()})):"Couldn't find your mail Account"===l.RESPONSE?(n.extraError=l.RESPONSE,n.readyForSubmit=!1,n.invalidEmail=!0):"Wrong password. Try again"===l.RESPONSE?(n.readyForSubmit=!1,n.invalidPassword=!0):(n.extraError=l.RESPONSE,n.readyForSubmit=!1,n.invalidEmail=!0)}),(function(l){n.readyForSubmit=!1,n.ionService.presentToast("Log In Failed due to bad server"),n.readyForSubmit=!1,console.log(l)}))}},{key:"logInFB",value:function(){var n=this;this.validateEmail=!1,this.validatePassword=!1,this.fb.getLoginStatus().then((function(l){"connected"===l.status?n.fb.logout().then((function(){n.logInFBStep2()})):n.logInFBStep2()}))}},{key:"logInFBStep2",value:function(){var n=this;this.fb.login(["public_profile","email"]).then((function(l){"connected"===l.status?n.getUserDetail(l.authResponse.userID):(n.ionService.presentToast("Facebook Login Failed"),n.facebookReady=!1)})).catch((function(l){n.facebookReady=!1}))}},{key:"getUserDetail",value:function(n){var l=this;this.fb.api("/"+n+"/?fields=id,email,name,picture,gender",["public_profile"]).then((function(n){n?l.facebookSignUp(n.email,n.name):(l.ionService.presentToast("Your account might not be valid enough"),l.facebookReady=!1)})).catch((function(n){l.ionService.presentToast(JSON.stringify(n)),l.facebookReady=!1}))}},{key:"facebookSignUp",value:function(n,l){var e=this;this.authAPI.facebookSignUp(n,l,this.deviceID).subscribe((function(l){return c.a(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.facebookReady=!0,console.log(l),1===l.RESPONSECODE||"Email Already Exists"===l.RESPONSE?this.facebookSignIn(n):(this.facebookReady=!1,this.ionService.presentToast(l.RESPONSE));case 1:case"end":return e.stop()}}),e,this)})))}),(function(n){e.facebookReady=!1,e.ionService.presentToast("Server API Problem")}))}},{key:"facebookSignIn",value:function(n){var l=this;this.authAPI.facebookLogIn(n,this.deviceID).subscribe((function(n){console.log(n),l.facebookReady=!1,1===n.RESPONSECODE?0===(n=n.data).user.verified?(l.readyForSubmit=!1,l.router.navigate(["verifymail"],{queryParams:{userID:n.user.id}})):l.storageService.setStorage(n).then((function(n){n&&l.generalService.defineInitialRoutering()})):l.ionService.presentToast("Sign In by Facebook Failed due to bad response")}),(function(n){l.facebookReady=!1,l.ionService.presentToast("Sign In by Facebook Failed due to bad server")}))}}]),n}(),C=e("iInd"),P=t["\u0275crt"]({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:transparent}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]{width:100%}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{background-image:url(login_header.8905e106ef689c9313c0.png)!important;background-size:100% 100%;background-repeat:no-repeat!important;width:100%;min-height:33vh;display:flex;align-content:center!important;align-items:center}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:77%;padding-bottom:2%;padding-right:2%;display:block;margin:auto}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]{background-image:url(login_footer.b7ad487681981e97d954.png)!important;background-color:#fff;background-size:contain;background-repeat:no-repeat!important;background-position-y:bottom;display:flex;flex-direction:column;justify-content:space-around;min-height:67vh;padding-left:5%;padding-right:5%;padding-bottom:15px}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   .pageName[_ngcontent-%COMP%]{display:block;font-size:24px;font-weight:700;padding-left:5%}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{--border-color:transparent;padding-top:3%}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-top:15px}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:0;color:#757575}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{margin-left:3%;--border-color:transparent;border-left:.5px solid #c2c3c5;--padding-start:14px;height:48px;--padding-end:14px}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-button.login[_ngcontent-%COMP%]{width:84%;height:53px;font-size:19px;margin:20px auto auto;display:block;--border-radius:30px;text-transform:none}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   div.social-login[_ngcontent-%COMP%]{width:100%;margin-top:2vh;text-align:center;display:block}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   div.social-login[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{padding-left:15%;padding-right:15%;display:flex;align-content:center;align-items:center;justify-content:center;margin-bottom:2vh}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   div.social-login[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .each[_ngcontent-%COMP%]{width:20%;height:1px;background-color:#000}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   div.social-login[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{width:60%;font-size:3.2vw}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   div.social-login[_ngcontent-%COMP%]   ion-button.facebook[_ngcontent-%COMP%]{width:47%;height:47px;display:block;margin:auto;--color-activated:white;--border-radius:30px;--background:#4064AD;--background-activated:rgb(87, 114, 168);--background-focused:rgb(87, 114, 168);--background-hover:rgb(87, 114, 168);text-transform:none;font-size:15px;font-weight:inherit}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   div.social-login[_ngcontent-%COMP%]   ion-icon.logo-facebook[_ngcontent-%COMP%]{background-image:url(facebook-logo.cc01044baf8daaf19773.svg);background-repeat:no-repeat;background-size:100% 100%}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   div.accident[_ngcontent-%COMP%]{text-align:center}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   div.accident[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:block;padding-top:5%}"]],data:{}});function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","error-message"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"ion-icon",[["class","error"]],null,null,null,u.gb,u.q)),t["\u0275did"](2,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,null,2,"ion-label",[],null,null,null,u.mb,u.w)),t["\u0275did"](4,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](5,0,["",""]))],null,(function(n,l){n(l,5,0,l.parent.context.$implicit.message)}))}function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](2,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](0,null,null,0))],(function(n,l){n(l,2,0,l.component.validateSigninform.get("email").hasError(l.context.$implicit.type))}),null)}function y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,O)),t["\u0275did"](2,278528,null,0,d.j,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.component.validationMessages.email)}),null)}function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,7,"div",[["class","validation-errors"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,6,null,null,null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,5,"div",[["class","error-message"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,1,"ion-icon",[["class","error"]],null,null,null,u.gb,u.q)),t["\u0275did"](4,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](5,0,null,null,2,"ion-label",[],null,null,null,u.mb,u.w)),t["\u0275did"](6,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](7,0,["",""]))],null,(function(n,l){n(l,7,0,l.component.extraError)}))}function M(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","error-message"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"ion-icon",[["class","error"]],null,null,null,u.gb,u.q)),t["\u0275did"](2,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,null,2,"ion-label",[],null,null,null,u.mb,u.w)),t["\u0275did"](4,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](5,0,["",""]))],null,(function(n,l){n(l,5,0,l.parent.context.$implicit.message)}))}function k(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](2,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](0,null,null,0))],(function(n,l){n(l,2,0,l.component.validateSigninform.get("password").hasError(l.context.$implicit.type))}),null)}function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](2,278528,null,0,d.j,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.component.validationMessages.password)}),null)}function E(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,7,"div",[["class","validation-errors"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,6,null,null,null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,5,"div",[["class","error-message"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,1,"ion-icon",[["class","error"]],null,null,null,u.gb,u.q)),t["\u0275did"](4,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](5,0,null,null,2,"ion-label",[],null,null,null,u.mb,u.w)),t["\u0275did"](6,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Invalid Password"]))],null,null)}function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ion-spinner",[["name","lines-small"]],null,null,null,u.yb,u.I)),t["\u0275did"](1,49152,null,0,a.pb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"lines-small")}),null)}function I(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-label",[],null,null,null,u.mb,u.w)),t["\u0275did"](1,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Log In"]))],null,null)}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ion-spinner",[["name","lines-small"]],null,null,null,u.yb,u.I)),t["\u0275did"](1,49152,null,0,a.pb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"lines-small")}),null)}function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-label",[],null,null,null,u.mb,u.w)),t["\u0275did"](1,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Facebook"]))],null,null)}function F(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,83,"ion-content",[],null,null,null,u.bb,u.l)),t["\u0275did"](1,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,81,"div",[["class","content"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","logo"],["id","logo"]],null,null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,0,"img",[["alt",""],["src","assets/imgs/sub_logo.svg"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,78,"div",[["class","email-login"],["id","login"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,53,"form",[["class","custom-body"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,e){var o=!0,i=n.component;return"submit"===l&&(o=!1!==t["\u0275nov"](n,8).onSubmit(e)&&o),"reset"===l&&(o=!1!==t["\u0275nov"](n,8).onReset()&&o),"ngSubmit"===l&&(o=!1!==i.onSigninSubmit()&&o),o}),null,null)),t["\u0275did"](7,16384,null,0,r.s,[],null,null),t["\u0275did"](8,540672,null,0,r.e,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,r.a,null,[r.e]),t["\u0275did"](10,16384,null,0,r.l,[[4,r.a]],null,null),(n()(),t["\u0275eld"](11,0,null,null,2,"ion-label",[["class","pageName"]],null,null,null,u.mb,u.w)),t["\u0275did"](12,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Log In"])),(n()(),t["\u0275eld"](14,0,null,null,39,"ion-list",[["mode","ios"]],null,null,null,u.ob,u.x)),t["\u0275did"](15,49152,null,0,a.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](16,0,null,0,15,"ion-item",[["class","item-input"],["lines","none"],["mode","ios"]],null,null,null,u.lb,u.s)),t["\u0275prd"](512,null,d.u,d.v,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](18,278528,null,0,d.i,[d.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](19,{"error-input":0}),t["\u0275did"](20,49152,null,0,a.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"],lines:[1,"lines"],mode:[2,"mode"]},null),(n()(),t["\u0275eld"](21,0,null,0,1,"ion-icon",[["class","email"],["slot","start"]],null,null,null,u.gb,u.q)),t["\u0275did"](22,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](23,0,null,0,8,"ion-input",[["formControlName","email"],["minlength","6"],["mode","ios"],["name","email"],["placeholder","Email Address"],["type","email"]],[[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionFocus"],[null,"ionChange"]],(function(n,l,e){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,26)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,26)._handleInputEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(i.email=e)&&o),"ionBlur"===l&&(o=!1!==i.setEmailValidation(!0)&&o),"ionFocus"===l&&(o=!1!==i.setEmailValidation(!1)&&o),o}),u.hb,u.r)),t["\u0275did"](24,540672,null,0,r.g,[],{minlength:[0,"minlength"]},null),t["\u0275prd"](1024,null,r.h,(function(n){return[n]}),[r.g]),t["\u0275did"](26,16384,null,0,a.Mb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,r.i,(function(n){return[n]}),[a.Mb]),t["\u0275did"](28,671744,null,0,r.d,[[3,r.a],[6,r.h],[8,null],[6,r.i],[2,r.r]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,r.j,null,[r.d]),t["\u0275did"](30,16384,null,0,r.k,[[4,r.j]],null,null),t["\u0275did"](31,49152,null,0,a.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{minlength:[0,"minlength"],mode:[1,"mode"],name:[2,"name"],placeholder:[3,"placeholder"],type:[4,"type"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,y)),t["\u0275did"](33,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,_)),t["\u0275did"](35,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](36,0,null,0,13,"ion-item",[["class","item-input"],["mode","md"]],null,null,null,u.lb,u.s)),t["\u0275prd"](512,null,d.u,d.v,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](38,278528,null,0,d.i,[d.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](39,{"error-input":0}),t["\u0275did"](40,49152,null,0,a.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"],mode:[1,"mode"]},null),(n()(),t["\u0275eld"](41,0,null,0,1,"ion-icon",[["class","password"],["slot","start"]],null,null,null,u.gb,u.q)),t["\u0275did"](42,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](43,0,null,0,6,"ion-input",[["formControlName","password"],["mode","md"],["name","password"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionFocus"],[null,"ionChange"]],(function(n,l,e){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,44)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,44)._handleInputEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(i.pwd=e)&&o),"ionBlur"===l&&(o=!1!==i.setPasswordValidation(!0)&&o),"ionFocus"===l&&(o=!1!==i.setPasswordValidation(!1)&&o),o}),u.hb,u.r)),t["\u0275did"](44,16384,null,0,a.Mb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,r.i,(function(n){return[n]}),[a.Mb]),t["\u0275did"](46,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.i],[2,r.r]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,r.j,null,[r.d]),t["\u0275did"](48,16384,null,0,r.k,[[4,r.j]],null,null),t["\u0275did"](49,49152,null,0,a.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"],name:[1,"name"],placeholder:[2,"placeholder"],type:[3,"type"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,S)),t["\u0275did"](51,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,E)),t["\u0275did"](53,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](54,0,null,null,5,"ion-button",[["class","red login"],["mode","md"],["size","large"],["type","submit"]],null,null,null,u.S,u.c)),t["\u0275did"](55,49152,null,0,a.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"],mode:[1,"mode"],size:[2,"size"],type:[3,"type"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,w)),t["\u0275did"](57,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,I)),t["\u0275did"](59,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](60,0,null,null,14,"div",[["class","social-login"]],null,null,null,null,null)),(n()(),t["\u0275eld"](61,0,null,null,5,"div",[["class","line"]],null,null,null,null,null)),(n()(),t["\u0275eld"](62,0,null,null,0,"div",[["class","each left"]],null,null,null,null,null)),(n()(),t["\u0275eld"](63,0,null,null,2,"ion-label",[],null,null,null,u.mb,u.w)),t["\u0275did"](64,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["OR CONNECT WITH"])),(n()(),t["\u0275eld"](66,0,null,null,0,"div",[["class","each right"]],null,null,null,null,null)),(n()(),t["\u0275eld"](67,0,null,null,7,"ion-button",[["class","facebook"],["mode","md"],["size","default"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.logInFB()&&t),t}),u.S,u.c)),t["\u0275did"](68,49152,null,0,a.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"],mode:[1,"mode"],size:[2,"size"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,N)),t["\u0275did"](70,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](71,0,null,0,1,"ion-icon",[["class","logo-facebook"],["slot","start"]],null,null,null,u.gb,u.q)),t["\u0275did"](72,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,D)),t["\u0275did"](74,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](75,0,null,null,8,"div",[["class","accident"]],null,null,null,null,null)),(n()(),t["\u0275eld"](76,0,null,null,2,"ion-label",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.openForgot()&&t),t}),u.mb,u.w)),t["\u0275did"](77,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Forgot your password?"])),(n()(),t["\u0275eld"](79,0,null,null,4,"ion-label",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.openSignup()&&t),t}),u.mb,u.w)),t["\u0275did"](80,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,['Don"t have an account? '])),(n()(),t["\u0275eld"](82,0,null,0,1,"b",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Create"]))],(function(n,l){var e=l.component;n(l,8,0,e.validateSigninform),n(l,15,0,"ios");var t=n(l,19,0,e.validateEmail&&e.validateSigninform.get("email").hasError("pattern"));n(l,18,0,"item-input",t),n(l,20,0,e.readyForSubmit||e.facebookReady,"none","ios"),n(l,24,0,"6"),n(l,28,0,"email",e.email),n(l,31,0,"6","ios","email","Email Address","email"),n(l,33,0,e.validateEmail),n(l,35,0,e.invalidEmail);var o=n(l,39,0,e.validatePassword&&(e.validateSigninform.get("password").hasError("pattern")||e.validateSigninform.get("password").hasError("minlength")));n(l,38,0,"item-input",o),n(l,40,0,e.readyForSubmit||e.facebookReady,"md"),n(l,46,0,"password",e.pwd),n(l,49,0,"md","password","Password","password"),n(l,51,0,e.validatePassword),n(l,53,0,e.invalidPassword),n(l,55,0,e.readyForSubmit||e.facebookReady,"md","large","submit"),n(l,57,0,e.readyForSubmit),n(l,59,0,!e.readyForSubmit),n(l,68,0,e.readyForSubmit||e.facebookReady,"md","default"),n(l,70,0,e.facebookReady),n(l,74,0,!e.facebookReady)}),(function(n,l){n(l,6,0,t["\u0275nov"](l,10).ngClassUntouched,t["\u0275nov"](l,10).ngClassTouched,t["\u0275nov"](l,10).ngClassPristine,t["\u0275nov"](l,10).ngClassDirty,t["\u0275nov"](l,10).ngClassValid,t["\u0275nov"](l,10).ngClassInvalid,t["\u0275nov"](l,10).ngClassPending),n(l,23,0,t["\u0275nov"](l,24).minlength?t["\u0275nov"](l,24).minlength:null,t["\u0275nov"](l,30).ngClassUntouched,t["\u0275nov"](l,30).ngClassTouched,t["\u0275nov"](l,30).ngClassPristine,t["\u0275nov"](l,30).ngClassDirty,t["\u0275nov"](l,30).ngClassValid,t["\u0275nov"](l,30).ngClassInvalid,t["\u0275nov"](l,30).ngClassPending),n(l,43,0,t["\u0275nov"](l,48).ngClassUntouched,t["\u0275nov"](l,48).ngClassTouched,t["\u0275nov"](l,48).ngClassPristine,t["\u0275nov"](l,48).ngClassDirty,t["\u0275nov"](l,48).ngClassValid,t["\u0275nov"](l,48).ngClassInvalid,t["\u0275nov"](l,48).ngClassPending)}))}var x=t["\u0275ccf"]("app-login",b,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-login",[],null,null,null,F,P)),t["\u0275did"](1,114688,null,0,b,[a.Ib,m.a,g.a,r.b,C.m,f.a,h.a,p.a,v.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),T=function n(){_classCallCheck(this,n)};e.d(l,"LoginPageModuleNgFactory",(function(){return Z}));var Z=t["\u0275cmf"](o,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,x]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,d.m,d.l,[t.LOCALE_ID,[2,d.x]]),t["\u0275mpd"](4608,r.q,r.q,[]),t["\u0275mpd"](4608,r.b,r.b,[]),t["\u0275mpd"](4608,a.c,a.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,a.Fb,a.Fb,[a.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,a.Jb,a.Jb,[a.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,d.b,d.b,[]),t["\u0275mpd"](1073742336,r.p,r.p,[]),t["\u0275mpd"](1073742336,r.f,r.f,[]),t["\u0275mpd"](1073742336,r.n,r.n,[]),t["\u0275mpd"](1073742336,a.Bb,a.Bb,[]),t["\u0275mpd"](1073742336,C.q,C.q,[[2,C.v],[2,C.m]]),t["\u0275mpd"](1073742336,T,T,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,C.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);