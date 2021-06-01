goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__52045,p__52046){
var map__52052 = p__52045;
var map__52052__$1 = (((((!((map__52052 == null))))?(((((map__52052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52052):map__52052);
var svc = map__52052__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52052__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52052__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52052__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__52053 = p__52046;
var map__52053__$1 = (((((!((map__52053 == null))))?(((((map__52053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52053):map__52053);
var msg = map__52053__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52053__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52053__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52053__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52053__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__52060,p__52061){
var map__52062 = p__52060;
var map__52062__$1 = (((((!((map__52062 == null))))?(((((map__52062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52062):map__52062);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52062__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__52066 = p__52061;
var map__52066__$1 = (((((!((map__52066 == null))))?(((((map__52066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52066):map__52066);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52066__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__52073,p__52074){
var map__52075 = p__52073;
var map__52075__$1 = (((((!((map__52075 == null))))?(((((map__52075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52075):map__52075);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52075__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52075__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__52076 = p__52074;
var map__52076__$1 = (((((!((map__52076 == null))))?(((((map__52076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52076):map__52076);
var msg = map__52076__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52076__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__52087,tid){
var map__52088 = p__52087;
var map__52088__$1 = (((((!((map__52088 == null))))?(((((map__52088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52088):map__52088);
var svc = map__52088__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52088__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__52094 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__52095 = null;
var count__52096 = (0);
var i__52097 = (0);
while(true){
if((i__52097 < count__52096)){
var vec__52113 = chunk__52095.cljs$core$IIndexed$_nth$arity$2(null,i__52097);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52113,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52113,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__52129 = seq__52094;
var G__52130 = chunk__52095;
var G__52131 = count__52096;
var G__52132 = (i__52097 + (1));
seq__52094 = G__52129;
chunk__52095 = G__52130;
count__52096 = G__52131;
i__52097 = G__52132;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52094);
if(temp__5735__auto__){
var seq__52094__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52094__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52094__$1);
var G__52133 = cljs.core.chunk_rest(seq__52094__$1);
var G__52134 = c__4556__auto__;
var G__52135 = cljs.core.count(c__4556__auto__);
var G__52136 = (0);
seq__52094 = G__52133;
chunk__52095 = G__52134;
count__52096 = G__52135;
i__52097 = G__52136;
continue;
} else {
var vec__52116 = cljs.core.first(seq__52094__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52116,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52116,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__52137 = cljs.core.next(seq__52094__$1);
var G__52138 = null;
var G__52139 = (0);
var G__52140 = (0);
seq__52094 = G__52137;
chunk__52095 = G__52138;
count__52096 = G__52139;
i__52097 = G__52140;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__52090_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__52090_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__52091_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__52091_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__52092_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__52092_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__52093_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__52093_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__52122){
var map__52123 = p__52122;
var map__52123__$1 = (((((!((map__52123 == null))))?(((((map__52123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52123):map__52123);
var svc = map__52123__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52123__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52123__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
