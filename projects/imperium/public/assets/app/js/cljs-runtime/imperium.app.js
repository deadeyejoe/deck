goog.provide('imperium.app');
akiroz.re_frame.storage.reg_co_fx_BANG_(new cljs.core.Keyword(null,"imperium","imperium",-36755038),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword(null,"cofx","cofx",2013202907),new cljs.core.Keyword(null,"local","local",-1497766724)], null));
re_frame.core.reg_cofx(new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.random_uuid());
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"websocket","websocket",-1714963101),(function (p__50301){
var vec__50302 = p__50301;
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50302,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50302,(1),null);
var G__50305 = action;
var G__50305__$1 = (((G__50305 instanceof cljs.core.Keyword))?G__50305.fqn:null);
switch (G__50305__$1) {
case "ws/start":
return imperium.client_beta.start_BANG_(value);

break;
case "ws/send":
return imperium.client_beta.send_BANG_(value);

break;
default:
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Unrecognized action: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join('')], 0));

}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"initialize","initialize",609952913),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"local","local",-1497766724)),re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uuid","uuid",-2145095719))], null),(function (cofx,_){
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword(null,"user","user",1532431356)], null));
if(cljs.core.truth_(temp__5733__auto__)){
var user = temp__5733__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),user], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connect","connect",1232828233),null], null)], null);
} else {
var user = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(cofx)], null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),user], null),new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),user], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connect","connect",1232828233),null], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"connect","connect",1232828233),(function (cofx,_){
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"user","user",1532431356)], null));
if(cljs.core.truth_(temp__5733__auto__)){
var user = temp__5733__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","start","ws/start",-355205673),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(user)], null)], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"send","send",-652151114),(function (cofx,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","send","ws/send",-652154486),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"content","content",15833224),"blah"], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"save-name","save-name",1140918739),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"local","local",-1497766724))], null),(function (cofx,p__50307){
var vec__50308 = p__50307;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50308,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50308,(1),null);
var map__50311 = cofx;
var map__50311__$1 = (((((!((map__50311 == null))))?(((((map__50311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50311):map__50311);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50311__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50311__$1,new cljs.core.Keyword(null,"local","local",-1497766724));
var update = (function (p1__50306_SHARP_){
return cljs.core.assoc_in(p1__50306_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"name","name",1843675177)], null),new_name);
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),update(db),new cljs.core.Keyword(null,"local","local",-1497766724),update(local)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"connected","connected",-169833045),(function (db,p__50313){
var vec__50314 = p__50313;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50314,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50314,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"connected","connected",-169833045),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586),(function (db,p__50317){
var vec__50318 = p__50317;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50318,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50318,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"connected","connected",-169833045));
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("user","uuid","user/uuid",2146253734),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("user","name","user/name",1848814598),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"name","name",1843675177)], null));
})], 0));
imperium.app.text_input = (function imperium$app$text_input(atom){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(atom),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__50321_SHARP_){
return cljs.core.reset_BANG_(atom,p1__50321_SHARP_.target.value);
})], null)], null);
});
imperium.app.user_input = (function imperium$app$user_input(){
var atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Name: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [imperium.app.text_input,atom], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Set",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-name","save-name",1140918739),cljs.core.deref(atom)], null));
})], null)], null)], null);
});
imperium.app.ui = (function imperium$app$ui(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Uuid: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","uuid","user/uuid",2146253734)], null))))].join('')], null),(function (){var temp__5733__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598)], null)));
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Name: ",name], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [imperium.app.user_input], null);
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Connect",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connect","connect",1232828233)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"send",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send","send",-652151114)], null));
})], null)], null)], null);
});
imperium.app.render = (function imperium$app$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [imperium.app.ui], null),document.getElementById("app"));
});
imperium.app.stop = (function imperium$app$stop(){
return null;
});
imperium.app.start = (function imperium$app$start(){
re_frame.core.clear_subscription_cache_BANG_();

return imperium.app.render();
});
imperium.app.init = (function imperium$app$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return imperium.app.render();
});

//# sourceMappingURL=imperium.app.js.map
