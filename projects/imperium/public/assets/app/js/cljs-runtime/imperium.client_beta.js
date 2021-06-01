goog.provide('imperium.client_beta');
imperium.client_beta.log = (function imperium$client_beta$log(message,data){
return console.log(message,JSON.stringify(cljs.core.clj__GT_js(data)));
});
if((typeof imperium !== 'undefined') && (typeof imperium.client_beta !== 'undefined') && (typeof imperium.client_beta.handle_event !== 'undefined')){
} else {
imperium.client_beta.handle_event = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__50343 = cljs.core.get_global_hierarchy;
return (fexpr__50343.cljs$core$IFn$_invoke$arity$0 ? fexpr__50343.cljs$core$IFn$_invoke$arity$0() : fexpr__50343.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("imperium.client-beta","handle-event"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
imperium.client_beta.on_message_handler = (function imperium$client_beta$on_message_handler(event){
imperium.client_beta.log("Received message",event);

var vec__50344 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(event.data);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50344,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50344,(1),null);
return imperium.client_beta.handle_event.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),key,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
imperium.client_beta.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__50347){
var map__50348 = p__50347;
var map__50348__$1 = (((((!((map__50348 == null))))?(((((map__50348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50348):map__50348);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50348__$1,new cljs.core.Keyword(null,"event","event",301435442));
return imperium.client_beta.log("Unhandled event:",event);
}));
imperium.client_beta.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__50350){
var map__50351 = p__50350;
var map__50351__$1 = (((((!((map__50351 == null))))?(((((map__50351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50351):map__50351);
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50351__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return imperium.client_beta.log("Push event from server:",_QMARK_data);
}));
if((typeof imperium !== 'undefined') && (typeof imperium.client_beta !== 'undefined') && (typeof imperium.client_beta.socket !== 'undefined')){
} else {
imperium.client_beta.socket = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
imperium.client_beta.handlers = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-message","on-message",1662987808),imperium.client_beta.on_message_handler,new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Opening a new connection"], 0));
}),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Closing a connection"], 0));
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An error occurred"], 0));
})], null);
imperium.client_beta.send_BANG_ = (function imperium$client_beta$send_BANG_(event){
return wscljs.client.send.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(imperium.client_beta.socket),event,wscljs.format.edn);
});
imperium.client_beta.websocket_url = (function imperium$client_beta$websocket_url(uuid){
return ["ws://localhost:8890/ws?uuid=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join('');
});
imperium.client_beta.start_BANG_ = (function imperium$client_beta$start_BANG_(uuid){
return cljs.core.reset_BANG_(imperium.client_beta.socket,wscljs.client.create(imperium.client_beta.websocket_url(uuid),imperium.client_beta.handlers));
});
imperium.client_beta.stop_BANG_ = (function imperium$client_beta$stop_BANG_(){
wscljs.client.close(cljs.core.deref(imperium.client_beta.socket));

return cljs.core.reset_BANG_(imperium.client_beta.socket,null);
});

//# sourceMappingURL=imperium.client_beta.js.map
