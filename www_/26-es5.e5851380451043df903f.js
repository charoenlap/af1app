!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{Asgv:function(n,i,a){"use strict";a.r(i),a.d(i,"SendConfirmPageModule",(function(){return k}));var r=a("ofXK"),o=a("3Pt+"),s=a("tyNb"),c=a("c7TG"),l=a("mrSG"),u=a("BSjz"),d=a("KqBo"),m=a("HSMY"),g=a("fXoL"),p=a("e8h1"),h=a("tk/3"),f=a("Zw0B");function v(e,t){if(1&e&&g["\u0275\u0275element"](0,"img",14),2&e){var n=g["\u0275\u0275nextContext"]();g["\u0275\u0275property"]("src",n.base64Image,g["\u0275\u0275sanitizeUrl"])}}function S(e,t){if(1&e){var n=g["\u0275\u0275getCurrentView"]();g["\u0275\u0275elementStart"](0,"ion-button",6),g["\u0275\u0275listener"]("click",(function(){return g["\u0275\u0275restoreView"](n),g["\u0275\u0275nextContext"]().Upload()})),g["\u0275\u0275elementStart"](1,"ion-icon",8),g["\u0275\u0275text"](2," Upload"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"]()}}var b,y,E=function(e){return{"drawing-active":e}},w=[{path:"",component:(b=function(){function n(t,i,a,r,o,s,c,l,u){e(this,n),this.navController=t,this.storage=i,this.toastCtrl=a,this.api=r,this.loadingController=o,this.camera=s,this.route=c,this.http=l,this.router=u,this.signature="",this.isDrawing=!1,this.signaturePadOptions={minWidth:2,canvasWidth:400,canvasHeight:200,backgroundColor:"#f6fbff",penColor:"#666a73"}}var i,a,r;return i=n,(a=[{key:"ngOnInit",value:function(){}},{key:"ionViewDidEnter",value:function(){var e=this;this.signaturePad.clear(),this.storage.get("savedSignature").then((function(t){e.signature=t}))}},{key:"drawComplete",value:function(){this.isDrawing=!1}},{key:"drawStart",value:function(){this.isDrawing=!0}},{key:"savePad",value:function(){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.signature=this.signaturePad.toDataURL("png",80),this.storage.set("savedSignature",this.signature),e.next=3,this.loadingController.create({});case 3:return t=e.sent,this.connote_new_string_url="",this.storage.get("keyOfDataSend").then((function(e){i.objVal=e})),e.next=8,t.present();case 8:return this.signature&&(this.signature=this.signature.replace(/data/gi,"")),this.base64Image&&(this.base64Image=this.base64Image.replace(/data/gi,"")),(n=new FormData).append("signature",this.signature),n.append("barcode",this.objVal),n.append("image",this.base64Image),n.append("comment",this.comment),n.append("jobs_id",this.route.snapshot.paramMap.get("id")),e.next=18,this.api.confirmSend(n,this.route.snapshot.paramMap.get("id"),this.objVal).subscribe((function(e){i.sendDetail=e,i.storage.set("keyOfDataSend",""),t.dismiss(),console.log(e),"success"==e.result&&i.router.navigate(["members/dashboard/send"])}),(function(e){console.log(e),t.dismiss()}));case 18:case"end":return e.stop()}}),e,this)})))}},{key:"clearPad",value:function(){this.signaturePad.clear()}},{key:"AccessCamera",value:function(){var e=this;this.camera.getPicture({targetWidth:512,targetHeight:512,correctOrientation:!0,sourceType:this.camera.PictureSourceType.CAMERA,destinationType:this.camera.DestinationType.DATA_URL}).then((function(t){e.base64Image="data:image/jpeg;base64,"+t,e.picture=t}),(function(e){console.log(e)}))}},{key:"AccessGallery",value:function(){var e=this;this.camera.getPicture({sourceType:this.camera.PictureSourceType.SAVEDPHOTOALBUM,destinationType:this.camera.DestinationType.DATA_URL}).then((function(t){e.base64Image="data:image/jpeg;base64,"+t,e.picture=t}),(function(e){console.log(e)}))}},{key:"Upload",value:function(){}}])&&t(i.prototype,a),r&&t(i,r),n}(),b.\u0275fac=function(e){return new(e||b)(g["\u0275\u0275directiveInject"](c.F),g["\u0275\u0275directiveInject"](p.b),g["\u0275\u0275directiveInject"](c.K),g["\u0275\u0275directiveInject"](m.a),g["\u0275\u0275directiveInject"](c.E),g["\u0275\u0275directiveInject"](d.a),g["\u0275\u0275directiveInject"](s.a),g["\u0275\u0275directiveInject"](h.a),g["\u0275\u0275directiveInject"](s.f))},b.\u0275cmp=g["\u0275\u0275defineComponent"]({type:b,selectors:[["app-send-confirm"]],viewQuery:function(e,t){var n;1&e&&g["\u0275\u0275viewQuery"](u.SignaturePad,!0,!1),2&e&&g["\u0275\u0275queryRefresh"](n=g["\u0275\u0275loadQuery"]())&&(t.signaturePad=n.first)},decls:38,vars:7,consts:[[1,"header"],["slot","start"],["padding","","no-bounce",""],[1,"title"],[3,"ngClass"],[3,"options","onBeginEvent","onEndEvent"],["color","primary",3,"click"],["name","camera"],["name","image"],[3,"src",4,"ngIf"],["color","primary",3,"click",4,"ngIf"],["size","12"],["name","comment","type","text","placeholder","\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e2b\u0e15\u0e38 \u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e40\u0e0b\u0e19\u0e15\u0e4c\u0e23\u0e31\u0e1a\u0e02\u0e2d\u0e07",3,"ngModel","ngModelChange"],["color","danger",3,"click"],[3,"src"]],template:function(e,t){1&e&&(g["\u0275\u0275elementStart"](0,"ion-header"),g["\u0275\u0275elementStart"](1,"ion-toolbar",0),g["\u0275\u0275elementStart"](2,"ion-buttons",1),g["\u0275\u0275element"](3,"ion-back-button"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](4,"ion-title"),g["\u0275\u0275text"](5,"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e2a\u0e48\u0e07\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](6,"ion-content",2),g["\u0275\u0275elementStart"](7,"div",3),g["\u0275\u0275text"](8,"\u0e25\u0e32\u0e22\u0e40\u0e0b\u0e19\u0e15\u0e4c"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](9,"ion-row",4),g["\u0275\u0275element"](10,"ion-col"),g["\u0275\u0275elementStart"](11,"ion-col"),g["\u0275\u0275elementStart"](12,"signature-pad",5),g["\u0275\u0275listener"]("onBeginEvent",(function(){return t.drawStart()}))("onEndEvent",(function(){return t.drawComplete()})),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](13,"ion-col"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](14,"ion-row"),g["\u0275\u0275elementStart"](15,"ion-col"),g["\u0275\u0275elementStart"](16,"ion-button",6),g["\u0275\u0275listener"]("click",(function(){return t.AccessCamera()})),g["\u0275\u0275elementStart"](17,"ion-icon",7),g["\u0275\u0275text"](18," Camera"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](19,"ion-button",6),g["\u0275\u0275listener"]("click",(function(){return t.AccessGallery()})),g["\u0275\u0275elementStart"](20,"ion-icon",8),g["\u0275\u0275text"](21," Gallery"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](22,"ion-row"),g["\u0275\u0275elementStart"](23,"ion-col"),g["\u0275\u0275template"](24,v,1,1,"img",9),g["\u0275\u0275template"](25,S,3,0,"ion-button",10),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](26,"ion-row"),g["\u0275\u0275elementStart"](27,"ion-col",11),g["\u0275\u0275elementStart"](28,"ion-item"),g["\u0275\u0275elementStart"](29,"ion-input",12),g["\u0275\u0275listener"]("ngModelChange",(function(e){return t.comment=e})),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](30,"ion-footer"),g["\u0275\u0275elementStart"](31,"ion-grid"),g["\u0275\u0275elementStart"](32,"ion-row"),g["\u0275\u0275elementStart"](33,"ion-col"),g["\u0275\u0275elementStart"](34,"ion-button",13),g["\u0275\u0275listener"]("click",(function(){return t.clearPad()})),g["\u0275\u0275text"](35,"Clear"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](36,"ion-button",6),g["\u0275\u0275listener"]("click",(function(){return t.savePad()})),g["\u0275\u0275text"](37,"Save"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"]()),2&e&&(g["\u0275\u0275advance"](9),g["\u0275\u0275property"]("ngClass",g["\u0275\u0275pureFunction1"](5,E,t.isDrawing)),g["\u0275\u0275advance"](3),g["\u0275\u0275property"]("options",t.signaturePadOptions),g["\u0275\u0275advance"](12),g["\u0275\u0275property"]("ngIf",t.base64Image),g["\u0275\u0275advance"](1),g["\u0275\u0275property"]("ngIf",t.base64Image),g["\u0275\u0275advance"](4),g["\u0275\u0275property"]("ngModel",t.comment))},directives:[c.n,c.B,c.g,c.c,c.d,c.A,c.k,c.a,c.w,r.h,c.j,f.SignaturePad,c.f,c.o,r.j,c.q,c.p,c.J,o.d,o.g,c.l,c.m],styles:[""]}),b)}],k=((y=function t(){e(this,t)}).\u0275mod=g["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=g["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},imports:[[r.b,o.b,c.C,s.h.forChild(w),f.SignaturePadModule]]}),y)}}])}();