(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{w56J:function(e,t,n){"use strict";n.r(t),n.d(t,"ScanPageModule",(function(){return f}));var o=n("ofXK"),i=n("3Pt+"),s=n("tyNb"),r=n("c7TG"),c=n("mrSG"),a=n("WdVq"),l=n("SmVF"),d=n("HSMY"),h=n("fXoL"),m=n("e8h1"),u=n("tk/3");function b(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"ion-item"),h["\u0275\u0275elementStart"](1,"ion-row"),h["\u0275\u0275elementStart"](2,"ion-col",3),h["\u0275\u0275elementStart"](3,"ion-label"),h["\u0275\u0275elementStart"](4,"b"),h["\u0275\u0275text"](5),h["\u0275\u0275elementEnd"](),h["\u0275\u0275text"](6),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](7,"ion-col",3),h["\u0275\u0275elementStart"](8,"ion-label"),h["\u0275\u0275text"](9),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](10,"ion-col",3),h["\u0275\u0275elementStart"](11,"ion-label"),h["\u0275\u0275text"](12),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;h["\u0275\u0275advance"](5),h["\u0275\u0275textInterpolate"](e.key),h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate2"](" ",e.consignee_name," ",e.consignee_company,""),h["\u0275\u0275advance"](3),h["\u0275\u0275textInterpolate"](e.consignee_address),h["\u0275\u0275advance"](3),h["\u0275\u0275textInterpolate"](e.consignee_phone)}}function p(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"ion-item"),h["\u0275\u0275elementStart"](1,"ion-row"),h["\u0275\u0275elementStart"](2,"ion-col",12),h["\u0275\u0275elementStart"](3,"ion-button",13),h["\u0275\u0275listener"]("click",(function(){h["\u0275\u0275restoreView"](e);const n=t.$implicit;return h["\u0275\u0275nextContext"]().rmBarcode(n)})),h["\u0275\u0275element"](4,"ion-icon",14),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](5,"ion-col",15),h["\u0275\u0275text"](6),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;h["\u0275\u0275advance"](6),h["\u0275\u0275textInterpolate1"](" ",e," ")}}const g=[{path:"",component:(()=>{class e{constructor(e,t,n,o,i,s,r,c,a,l){this.barcodeScanner=e,this.toastCtrl=t,this.api=n,this.toast=o,this.storage=i,this.route=s,this.toastController=r,this.loadingController=c,this.http=a,this.router=l,this.barcodeInput=[],this.barcodePush=[],this.connote_new=[],this.count_connote=0,this.objVal=[],this.connotes=[]}ngOnInit(){this.id_booking=this.route.snapshot.paramMap.get("id"),console.log(this.id_booking),this.getJobDetail()}ionViewWillEnter(){this.getJobDetail()}getJobDetail(){return Object(c.b)(this,void 0,void 0,(function*(){const e=yield this.loadingController.create({});yield this.api.getJobDetail(this.route.snapshot.paramMap.get("id")).subscribe(t=>{console.log("getJobDetail"),console.log(t),this.connotes=t.connotes,console.log(t.connotes),this.count_connote=Number(t.count_connotes),console.log("start connote"),console.log(t.count_connotes),e.dismiss()},t=>{console.log(t),e.dismiss()})}))}scan(){this.options={prompt:"Place a barcode inside the scan area",disableSuccessBeep:!1,resultDisplayDuration:500,saveHistory:!0,showTorchButton:!0,showFlipCameraButton:!0},this.barcodeScanner.scan(this.options).then(e=>{if(this.barcode=e.text,e.cancelled)return console.log("User cancelled the action!"),!1;this.check_loop=0,""!=this.barcode&&(this.barcodePush.forEach(e=>{e==this.barcode&&(this.check_loop=1)}),0==this.check_loop?(this.barcodePush.push(this.barcode),this.count_connote=Number(this.count_connote)+1,this.storage.set("keyOfData",JSON.stringify(this.barcodePush)),this.alert(this.barcode),this.connote_new.push(this.barcode),this.toast.show(e.text,"200","center").subscribe(e=>{console.log(e)})):this.alert(this.barcode+" Dupplicate.")),this.barcode=""},e=>{this.toast.show(e,"5000","center").subscribe(e=>{console.log(e)})})}saveConnote(){return Object(c.b)(this,void 0,void 0,(function*(){const e=yield this.loadingController.create({});yield e.present();const t=new FormData;t.append("booking_id",this.route.snapshot.paramMap.get("id")),yield this.api.saveConnote(t,this.route.snapshot.paramMap.get("id"),this.barcodePush).subscribe(t=>{e.dismiss(),"success"==t.result?(this.alert("Success"),this.router.navigate(["members/job-detail/"+this.route.snapshot.paramMap.get("id")])):this.alert("Error booking_id: "+this.route.snapshot.paramMap.get("id"))},t=>{console.log(t),e.dismiss()})}))}rmBarcode(e){return Object(c.b)(this,void 0,void 0,(function*(){const t=yield this.loadingController.create({});yield t.present(),this.api.deleteJob(e).subscribe(n=>{if(console.log(n),"success"==n.result){this.count_connote=Number(this.count_connote)-1,this.count_connote<0&&(this.count_connote=0);const o=this.barcodePush.indexOf(e);-1!==o&&this.barcodePush.splice(o,1),t.dismiss(),this.alert(n.result+" "+n.desc)}else this.alert(n.result+" "+n.desc)},e=>{this.alert(e),console.log(e),t.dismiss()})}))}editBarcode(e){return Object(c.b)(this,void 0,void 0,(function*(){const t=yield this.loadingController.create({});yield t.present(),this.api.deleteJob(e).subscribe(n=>{if(console.log(n),"success"==n.result){this.count_connote=Number(this.count_connote)-1,this.count_connote<0&&(this.count_connote=0);const o=this.barcodePush.indexOf(e);-1!==o&&this.barcodePush.splice(o,1),t.dismiss(),this.alert(n.result+" "+n.desc)}else this.alert(n.result+" "+n.desc)},e=>{this.alert(e),console.log(e),t.dismiss()})}))}removeBarcode(){this.storage.set("keyOfData","")}submitForm(){this.check_loop=0,""!=this.barcode&&(this.barcodePush.forEach(e=>{e==this.barcode&&(this.check_loop=1)}),0==this.check_loop?(this.barcodePush.push(this.barcode),this.count_connote=Number(this.count_connote)+1,this.storage.set("keyOfData",JSON.stringify(this.barcodePush)),this.alert(this.barcode),this.connote_new.push(this.barcode)):this.alert(this.barcode+" Dupplicate."),this.barcode="")}jobDetail(){return Object(c.b)(this,void 0,void 0,(function*(){this.router.navigate(["members/job-detail/"+this.route.snapshot.paramMap.get("id")])}))}alert(e){return Object(c.b)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:"Add connote "+e,duration:2e3})).present()}))}}return e.\u0275fac=function(t){return new(t||e)(h["\u0275\u0275directiveInject"](a.a),h["\u0275\u0275directiveInject"](r.K),h["\u0275\u0275directiveInject"](d.a),h["\u0275\u0275directiveInject"](l.a),h["\u0275\u0275directiveInject"](m.b),h["\u0275\u0275directiveInject"](s.a),h["\u0275\u0275directiveInject"](r.K),h["\u0275\u0275directiveInject"](r.E),h["\u0275\u0275directiveInject"](u.a),h["\u0275\u0275directiveInject"](s.f))},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["app-scan"]],decls:32,vars:5,consts:[[1,"header"],["slot","start"],["color","warning","expand","full",3,"click"],["size","12"],[4,"ngFor","ngForOf"],[3,"ngSubmit"],["form","ngForm"],["name","barcode","type","text","placeholder","\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e25\u0e02\u0e1a\u0e32\u0e23\u0e4c\u0e42\u0e04\u0e49\u0e14","required","",3,"ngModel","ngModelChange"],["size","6"],["expand","full","type","submit","color","primary",3,"disabled"],["expand","full","type","button","color","primary",3,"click"],["color","primary","size","small","expand","full",3,"click"],["size","4"],["color","danger","expand","",3,"click"],["name","close"],["size","8"]],template:function(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"ion-header"),h["\u0275\u0275elementStart"](1,"ion-toolbar",0),h["\u0275\u0275elementStart"](2,"ion-buttons",1),h["\u0275\u0275elementStart"](3,"ion-button",2),h["\u0275\u0275listener"]("click",(function(){return t.jobDetail()})),h["\u0275\u0275text"](4,"< \u0e01\u0e25\u0e31\u0e1a"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](5,"ion-title"),h["\u0275\u0275text"](6,"\u0e41\u0e2a\u0e01\u0e19\u0e1a\u0e32\u0e23\u0e4c\u0e42\u0e04\u0e14 Connote"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](7,"ion-content"),h["\u0275\u0275elementStart"](8,"ion-item"),h["\u0275\u0275elementStart"](9,"ion-row"),h["\u0275\u0275elementStart"](10,"ion-col",3),h["\u0275\u0275text"](11),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](12,b,13,5,"ion-item",4),h["\u0275\u0275template"](13,p,7,1,"ion-item",4),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](14,"form",5,6),h["\u0275\u0275listener"]("ngSubmit",(function(){return t.submitForm()})),h["\u0275\u0275elementStart"](16,"ion-grid"),h["\u0275\u0275elementStart"](17,"ion-row"),h["\u0275\u0275elementStart"](18,"ion-col",3),h["\u0275\u0275elementStart"](19,"ion-item"),h["\u0275\u0275elementStart"](20,"ion-input",7),h["\u0275\u0275listener"]("ngModelChange",(function(e){return t.barcode=e})),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](21,"ion-row"),h["\u0275\u0275elementStart"](22,"ion-col",8),h["\u0275\u0275elementStart"](23,"ion-button",9),h["\u0275\u0275text"](24,"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19 \u0e1a\u0e32\u0e23\u0e4c\u0e42\u0e04\u0e49\u0e14"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](25,"ion-col",8),h["\u0275\u0275elementStart"](26,"ion-button",10),h["\u0275\u0275listener"]("click",(function(){return t.scan()})),h["\u0275\u0275text"](27,"\u0e43\u0e0a\u0e49\u0e01\u0e25\u0e49\u0e2d\u0e07\u0e2a\u0e41\u0e01\u0e19"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](28,"ion-row"),h["\u0275\u0275elementStart"](29,"ion-col",3),h["\u0275\u0275elementStart"](30,"ion-button",11),h["\u0275\u0275listener"]("click",(function(){return t.saveConnote()})),h["\u0275\u0275text"](31,"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19 Connote"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&e){const e=h["\u0275\u0275reference"](15);h["\u0275\u0275advance"](11),h["\u0275\u0275textInterpolate1"](" \u0e08\u0e33\u0e19\u0e27\u0e19 Connote ",t.count_connote," "),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngForOf",t.connotes),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngForOf",t.barcodePush),h["\u0275\u0275advance"](7),h["\u0275\u0275property"]("ngModel",t.barcode),h["\u0275\u0275advance"](3),h["\u0275\u0275property"]("disabled",e.invalid)}},directives:[r.n,r.B,r.g,r.f,r.A,r.k,r.q,r.w,r.j,o.i,i.j,i.e,i.f,r.m,r.p,r.J,i.i,i.d,i.g,r.r,r.o],styles:[".header[_ngcontent-%COMP%]{padding:20px 0;--background:#3f51b5}.header[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{color:#fff}"]}),e})()}];let f=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.b,i.b,r.C,s.h.forChild(g)]]}),e})()}}]);