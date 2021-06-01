goog.provide('imperium.ws_handlers');
imperium.ws_handlers.log = (function imperium$ws_handlers$log(message,data){
return console.log(message,JSON.stringify(cljs.core.clj__GT_js(data)));
});
if((typeof imperium !== 'undefined') && (typeof imperium.ws_handlers !== 'undefined') && (typeof imperium.ws_handlers._event_msg_handler !== 'undefined')){
} else {
imperium.ws_handlers._event_msg_handler = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__56355 = cljs.core.get_global_hierarchy;
return (fexpr__56355.cljs$core$IFn$_invoke$arity$0 ? fexpr__56355.cljs$core$IFn$_invoke$arity$0() : fexpr__56355.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("imperium.ws-handlers","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
imperium.ws_handlers.event_msg_handler = (function imperium$ws_handlers$event_msg_handler(p__56356){
var map__56357 = p__56356;
var map__56357__$1 = (((((!((map__56357 == null))))?(((((map__56357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56357):map__56357);
var ev_msg = map__56357__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56357__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56357__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56357__$1,new cljs.core.Keyword(null,"event","event",301435442));
return imperium.ws_handlers._event_msg_handler.cljs$core$IFn$_invoke$arity$1(ev_msg);
});
imperium.ws_handlers._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__56359){
var map__56360 = p__56359;
var map__56360__$1 = (((((!((map__56360 == null))))?(((((map__56360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56360):map__56360);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56360__$1,new cljs.core.Keyword(null,"event","event",301435442));
return imperium.ws_handlers.log("Unhandled event:",event);
}));
imperium.ws_handlers._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__56362){
var map__56363 = p__56362;
var map__56363__$1 = (((((!((map__56363 == null))))?(((((map__56363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56363):map__56363);
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56363__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return imperium.ws_handlers.log("Push event from server:",_QMARK_data);
}));

//# sourceMappingURL=imperium.ws_handlers.js.map
