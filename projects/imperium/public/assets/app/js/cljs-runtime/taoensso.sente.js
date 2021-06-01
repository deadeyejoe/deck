goog.provide('taoensso.sente');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(105),(0)], null));
} else {
taoensso.encore.assert_min_encore_version(2.105);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
if((typeof taoensso !== 'undefined') && (typeof taoensso.sente !== 'undefined') && (typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined')){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if((!(cljs.core.vector_QMARK_(x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected(new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not((function (){var G__60346 = cljs.core.count(x);
var fexpr__60345 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__60345.cljs$core$IFn$_invoke$arity$1 ? fexpr__60345.cljs$core$IFn$_invoke$arity$1(G__60346) : fexpr__60345.call(null,G__60346));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__60347 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60347,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60347,(1),null);
if((!((ev_id instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected(new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not(cljs.core.namespace(ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected(new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__5735__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5735__auto__)){
var errs = temp__5735__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event(x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__5733__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5733__auto__)){
var errs = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
if(cljs.core.map_QMARK_(x)){
if(taoensso.encore.ks_GT__EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x)){
var map__60354 = x;
var map__60354__$1 = (((((!((map__60354 == null))))?(((((map__60354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60354):map__60354);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60354__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60354__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60354__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60354__$1,new cljs.core.Keyword(null,"event","event",301435442));
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (cljs.core.ifn_QMARK_(send_fn)) && (taoensso.encore.atom_QMARK_(state)) && (taoensso.sente.event_QMARK_(event)));
} else {
return false;
}
} else {
return false;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
if(cljs.core.map_QMARK_(x)){
if(taoensso.encore.ks_GT__EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x)){
var map__60360 = x;
var map__60360__$1 = (((((!((map__60360 == null))))?(((((map__60360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60360):map__60360);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60360__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60360__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60360__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var send_buffers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60360__$1,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787));
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60360__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60360__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60360__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60360__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (cljs.core.ifn_QMARK_(send_fn)) && (taoensso.encore.atom_QMARK_(connected_uids)) && (taoensso.encore.atom_QMARK_(send_buffers)) && (cljs.core.map_QMARK_(ring_req)) && (taoensso.encore.nblank_str_QMARK_(client_id)) && (taoensso.sente.event_QMARK_(event)) && ((((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_(_QMARK_reply_fn)))));
} else {
return false;
}
} else {
return false;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__60362){
var map__60363 = p__60362;
var map__60363__$1 = (((((!((map__60363 == null))))?(((((map__60363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60363):map__60363);
var ev_msg = map__60363__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60363__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60363__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__60365 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60365,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60365,(1),null);
var valid_event = vec__60365;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null)], 0));
if((!(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,194,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
}),null)),null,1216547014,null);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__60368 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null);
return (fexpr__60368.cljs$core$IFn$_invoke$arity$1 ? fexpr__60368.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__60368.call(null,cb_reply_clj));
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not(taoensso.sente.cb_error_QMARK_(cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",208,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_(prefixed_pstr,"+");
var pstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack(packer,pstr);
}catch (e60372){var t = e60372;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,215,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
}),null)),null,1018429299,null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__60369 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60369,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60369,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,221,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
}),null)),null,-2050548985,null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__60374 = arguments.length;
switch (G__60374) {
case 2:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2 = (function (packer,clj){
var pstr = ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,228,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",clj,pstr], null);
}),null)),null,-1326017847,null);

return pstr;
}));

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,237,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
}),null)),null,-23035680,null);

return pstr;
}));

(taoensso.sente.pack.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
});
(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1(x);
}));

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(s);
}));

(taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.sente.EdnPacker.cljs$lang$type = true);

(taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker");

(taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.sente/EdnPacker");
}));

/**
 * Positional factory function for taoensso.sente/EdnPacker.
 */
taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__60375_SHARP_){
if((!((p1__60375_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__60375_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__60375_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__60375_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__60375_SHARP_);
}
})(x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60376){if((e60376 instanceof Error)){
var e = e60376;
return e;
} else {
throw e60376;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",250,"((fn* [p1__60375#] (satisfies? interfaces/IPacker p1__60375#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = (taoensso.encore.idx_fn.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.idx_fn.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.idx_fn.call(null));


/**
 * Alpha, subject to change.
 *   Returns true iff given Ring request is allowed by `allowed-origins`.
 *   `allowed-origins` may be `:all` or #{<origin>}.
 */
taoensso.sente.allow_origin_QMARK_ = (function taoensso$sente$allow_origin_QMARK_(allowed_origins,ring_req){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allowed_origins,new cljs.core.Keyword(null,"all","all",892129742))){
return true;
} else {
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"headers","headers",-835030129));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers,"origin",new cljs.core.Keyword(null,"nx","nx",-1996436366));
var have_origin_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"nx","nx",-1996436366));
if(((have_origin_QMARK_) && (cljs.core.contains_QMARK_(cljs.core.set(allowed_origins),origin)))){
return true;
} else {
var referer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers,"referer","");
if(cljs.core.truth_((((!(have_origin_QMARK_)))?taoensso.encore.rsome((function (p1__60378_SHARP_){
return clojure.string.starts_with_QMARK_(referer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60378_SHARP_),"/"].join(''));
}),allowed_origins):false))){
return true;
} else {
return false;
}
}
}
});
/**
 * Takes a web server adapter[1] and returns a map with keys:
 * 
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn                     ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req])  for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req])  for Ring GET + chsk URL.
 * 
 *  :connected-uids ;             Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 *  :send-buffers   ; Implementation detail, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Security options:
 * 
 *  :allowed-origins   ; e.g. #{"http://site.com" ...}, defaults to :all. ; Alpha
 * 
 *  :csrf-token-fn     ; ?(fn [ring-req]) -> CSRF-token for Ajax POSTs and WS handshake.
 *                     ; CSRF check will be skipped iff nil (NOT RECOMMENDED!).
 * 
 *  :authorized?-fn    ; ?(fn [ring-req]) -> When non-nil, (authorized?-fn <ring-req>)
 *                     ; must return truthy, otherwise connection requests will be
 *                     ; rejected with (unauthorized-fn <ring-req>) response.
 *                     ;
 *                     ; May check Authroization HTTP header, etc.
 * 
 *  :?unauthorized-fn  ; An alternative API to `authorized?-fn`+`unauthorized-fn` pair.
 *                     ; ?(fn [ring-req)) -> <?rejection-resp>. I.e. when return value
 *                     ; is non-nil, connection requests will be rejected with that
 *                     ; non-nil value.
 * 
 *   Other common options:
 * 
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61157 = arguments.length;
var i__4737__auto___61158 = (0);
while(true){
if((i__4737__auto___61158 < len__4736__auto___61157)){
args__4742__auto__.push((arguments[i__4737__auto___61158]));

var G__61159 = (i__4737__auto___61158 + (1));
i__4737__auto___61158 = G__61159;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__60382){
var vec__60383 = p__60382;
var map__60386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60383,(0),null);
var map__60386__$1 = (((((!((map__60386 == null))))?(((((map__60386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60386):map__60386);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60386__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(25)], 0)));
var _QMARK_unauthorized_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60386__$1,new cljs.core.Keyword(null,"?unauthorized-fn","?unauthorized-fn",-1883475616));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60386__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var allowed_origins = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60386__$1,new cljs.core.Keyword(null,"allowed-origins","allowed-origins",1477851683),new cljs.core.Keyword(null,"all","all",892129742));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60386__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60386__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),(function (ring_req){
var or__4126__auto__ = new cljs.core.Keyword(null,"anti-forgery-token","anti-forgery-token",806990841).cljs$core$IFn$_invoke$arity$1(ring_req);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
}
}));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60386__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var unauthorized_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60386__$1,new cljs.core.Keyword(null,"unauthorized-fn","unauthorized-fn",-2032603957),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(401),new cljs.core.Keyword(null,"body","body",-2049205669),"Unauthorized request"], null);
}));
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60386__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var bad_origin_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60386__$1,new cljs.core.Keyword(null,"bad-origin-fn","bad-origin-fn",1385595727),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Unauthorized origin"], null);
}));
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60386__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),(function (ring_req){
return null;
}));
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60386__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),(function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
}));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60386__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((1000)));
var authorized_QMARK__fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60386__$1,new cljs.core.Keyword(null,"authorized?-fn","authorized?-fn",-1334669261));
var bad_csrf_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60386__$1,new cljs.core.Keyword(null,"bad-csrf-fn","bad-csrf-fn",16619032),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Bad CSRF token"], null);
}));
var e_61161 = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60388){if((e60388 instanceof Error)){
var e_61161 = e60388;
return e_61161;
} else {
throw e60388;

}
}})();
if((e_61161 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",394,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e_61161,null);
}

var e_61162 = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60389){if((e60389 instanceof Error)){
var e_61162 = e60389;
return e_61162;
} else {
throw e60389;

}
}})();
if((e_61162 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",394,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e_61162,null);
}


var e_61163 = (function (){try{if((function (p1__60379_SHARP_){
if((!((p1__60379_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__60379_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__60379_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__60379_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__60379_SHARP_);
}
})(web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60390){if((e60390 instanceof Error)){
var e_61163 = e60390;
return e_61163;
} else {
throw e60390;

}
}})();
if((e_61163 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",395,"((fn* [p1__60379#] (satisfies? interfaces/IServerChanAdapter p1__60379#)) web-server-ch-adapter)",web_server_ch_adapter,e_61163,null);
}

var max_ms_61164 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_61164)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_61164)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_61164], null));
} else {
}

var allowed_origins__$1 = (cljs.core.truth_((function (x){
var or__4126__auto__ = cljs.core.set_QMARK_(x);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__60393 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),null], null), null);
return (fexpr__60393.cljs$core$IFn$_invoke$arity$1 ? fexpr__60393.cljs$core$IFn$_invoke$arity$1(x) : fexpr__60393.call(null,x));
}
})(allowed_origins))?allowed_origins:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",404,"([:or set? #{:all}] allowed-origins)",allowed_origins,null,null));
var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = (function (ring_req,client_id){
var or__4126__auto__ = (function (){var G__60395 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__60395) : user_id_fn.call(null,G__60395));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});
var conns_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = (function() {
var G__61165 = null;
var G__61165__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var vec__60396 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60396,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60396,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
}));
});
var G__61165__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
}));
});
G__61165 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__61165__3.call(this,conn_type,uid,client_id);
case 4:
return G__61165__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__61165.cljs$core$IFn$_invoke$arity$3 = G__61165__3;
G__61165.cljs$core$IFn$_invoke$arity$4 = G__61165__4;
return G__61165;
})()
;
var connect_uid_BANG_ = (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60399){if((e60399 instanceof Error)){
var e = e60399;
return e;
} else {
throw e60399;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",440,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__60400){
var map__60401 = p__60400;
var map__60401__$1 = (((((!((map__60401 == null))))?(((((map__60401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60401):map__60401);
var old_m = map__60401__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60401__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60401__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60401__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__60403 = conn_type;
var G__60403__$1 = (((G__60403 instanceof cljs.core.Keyword))?G__60403.fqn:null);
switch (G__60403__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60403__$1)].join('')));

}
})();
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((((!(cljs.core.contains_QMARK_(old_any,uid)))) && (cljs.core.contains_QMARK_(new_any,uid)))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
}));
return newly_connected_QMARK_;
});
var upd_connected_uid_BANG_ = (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60404){if((e60404 instanceof Error)){
var e = e60404;
return e;
} else {
throw e60404;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",457,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__60405){
var map__60406 = p__60405;
var map__60406__$1 = (((((!((map__60406 == null))))?(((((map__60406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60406):map__60406);
var old_m = map__60406__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60406__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60406__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60406__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref(conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = ((any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_));
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(any,uid))], null);
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if(((cljs.core.contains_QMARK_(old_any,uid)) && ((!(cljs.core.contains_QMARK_(new_any,uid)))))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
}));
return newly_disconnected_QMARK_;
});
var send_fn = (function() { 
var G__61167__delegate = function (user_id,ev,p__60408){
var vec__60409 = p__60408;
var map__60412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60409,(0),null);
var map__60412__$1 = (((((!((map__60412 == null))))?(((((map__60412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60412):map__60412);
var opts = map__60412__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60412__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_61168 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __61169 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,483,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_61168,ev], null);
}),null)),null,-1875535910,null);
var __61170__$1 = (cljs.core.truth_(uid_61168)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __61171__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_61172 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__61173 = (function (conn_type){
var temp__5735__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),(function (m){
var vec__60414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_61168);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60414,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60414,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_61172)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_61168),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_61168));
} else {
return taoensso.encore.swapped(m,null);
}
}));
if(cljs.core.truth_(temp__5735__auto__)){
var pulled = temp__5735__auto__;
var vec__60417 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60417,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60417,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",511,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",512,"(set? ev-uuids)",ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,buffered_evs);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,515,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s",buffered_evs_ppstr], null);
}),null)),null,-379188259,null);

var G__60420 = conn_type;
var G__60420__$1 = (((G__60420 instanceof cljs.core.Keyword))?G__60420.fqn:null);
switch (G__60420__$1) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_61168,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_61168,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_61168,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_61168,buffered_evs_ppstr));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60420__$1)].join('')));

}
} else {
return null;
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,524,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_61168], null);
}),null)),null,1298057949,null);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__61173(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__61173(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__60421_61175 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_61168], null))));
var chunk__60422_61176 = null;
var count__60423_61177 = (0);
var i__60424_61178 = (0);
while(true){
if((i__60424_61178 < count__60423_61177)){
var vec__60431_61179 = chunk__60422_61176.cljs$core$IIndexed$_nth$arity$2(null,i__60424_61178);
var _QMARK_sch_61180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60431_61179,(0),null);
var _udt_61181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60431_61179,(1),null);
var temp__5735__auto___61182 = _QMARK_sch_61180;
if(cljs.core.truth_(temp__5735__auto___61182)){
var sch_61183 = temp__5735__auto___61182;
taoensso.sente.interfaces.sch_close_BANG_(sch_61183);
} else {
}


var G__61184 = seq__60421_61175;
var G__61185 = chunk__60422_61176;
var G__61186 = count__60423_61177;
var G__61187 = (i__60424_61178 + (1));
seq__60421_61175 = G__61184;
chunk__60422_61176 = G__61185;
count__60423_61177 = G__61186;
i__60424_61178 = G__61187;
continue;
} else {
var temp__5735__auto___61188 = cljs.core.seq(seq__60421_61175);
if(temp__5735__auto___61188){
var seq__60421_61189__$1 = temp__5735__auto___61188;
if(cljs.core.chunked_seq_QMARK_(seq__60421_61189__$1)){
var c__4556__auto___61190 = cljs.core.chunk_first(seq__60421_61189__$1);
var G__61191 = cljs.core.chunk_rest(seq__60421_61189__$1);
var G__61192 = c__4556__auto___61190;
var G__61193 = cljs.core.count(c__4556__auto___61190);
var G__61194 = (0);
seq__60421_61175 = G__61191;
chunk__60422_61176 = G__61192;
count__60423_61177 = G__61193;
i__60424_61178 = G__61194;
continue;
} else {
var vec__60434_61195 = cljs.core.first(seq__60421_61189__$1);
var _QMARK_sch_61196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60434_61195,(0),null);
var _udt_61197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60434_61195,(1),null);
var temp__5735__auto___61198__$1 = _QMARK_sch_61196;
if(cljs.core.truth_(temp__5735__auto___61198__$1)){
var sch_61199 = temp__5735__auto___61198__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_61199);
} else {
}


var G__61200 = cljs.core.next(seq__60421_61189__$1);
var G__61201 = null;
var G__61202 = (0);
var G__61203 = (0);
seq__60421_61175 = G__61200;
chunk__60422_61176 = G__61201;
count__60423_61177 = G__61202;
i__60424_61178 = G__61203;
continue;
}
} else {
}
}
break;
}

var seq__60437_61204 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_61168], null))));
var chunk__60438_61205 = null;
var count__60439_61206 = (0);
var i__60440_61207 = (0);
while(true){
if((i__60440_61207 < count__60439_61206)){
var vec__60447_61208 = chunk__60438_61205.cljs$core$IIndexed$_nth$arity$2(null,i__60440_61207);
var _QMARK_sch_61209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60447_61208,(0),null);
var _udt_61210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60447_61208,(1),null);
var temp__5735__auto___61211 = _QMARK_sch_61209;
if(cljs.core.truth_(temp__5735__auto___61211)){
var sch_61212 = temp__5735__auto___61211;
taoensso.sente.interfaces.sch_close_BANG_(sch_61212);
} else {
}


var G__61213 = seq__60437_61204;
var G__61214 = chunk__60438_61205;
var G__61215 = count__60439_61206;
var G__61216 = (i__60440_61207 + (1));
seq__60437_61204 = G__61213;
chunk__60438_61205 = G__61214;
count__60439_61206 = G__61215;
i__60440_61207 = G__61216;
continue;
} else {
var temp__5735__auto___61217 = cljs.core.seq(seq__60437_61204);
if(temp__5735__auto___61217){
var seq__60437_61218__$1 = temp__5735__auto___61217;
if(cljs.core.chunked_seq_QMARK_(seq__60437_61218__$1)){
var c__4556__auto___61219 = cljs.core.chunk_first(seq__60437_61218__$1);
var G__61220 = cljs.core.chunk_rest(seq__60437_61218__$1);
var G__61221 = c__4556__auto___61219;
var G__61222 = cljs.core.count(c__4556__auto___61219);
var G__61223 = (0);
seq__60437_61204 = G__61220;
chunk__60438_61205 = G__61221;
count__60439_61206 = G__61222;
i__60440_61207 = G__61223;
continue;
} else {
var vec__60450_61224 = cljs.core.first(seq__60437_61218__$1);
var _QMARK_sch_61225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60450_61224,(0),null);
var _udt_61226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60450_61224,(1),null);
var temp__5735__auto___61227__$1 = _QMARK_sch_61225;
if(cljs.core.truth_(temp__5735__auto___61227__$1)){
var sch_61228 = temp__5735__auto___61227__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_61228);
} else {
}


var G__61229 = cljs.core.next(seq__60437_61218__$1);
var G__61230 = null;
var G__61231 = (0);
var G__61232 = (0);
seq__60437_61204 = G__61229;
chunk__60438_61205 = G__61230;
count__60439_61206 = G__61231;
i__60440_61207 = G__61232;
continue;
}
} else {
}
}
break;
}
} else {
var seq__60453_61233 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__60454_61234 = null;
var count__60455_61235 = (0);
var i__60456_61236 = (0);
while(true){
if((i__60456_61236 < count__60455_61235)){
var conn_type_61237 = chunk__60454_61234.cljs$core$IIndexed$_nth$arity$2(null,i__60456_61236);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_61237,uid_61168], null),((function (seq__60453_61233,chunk__60454_61234,count__60455_61235,i__60456_61236,conn_type_61237,uid_61168,__61169,__61170__$1,__61171__$2,ev_uuid_61172,flush_buffer_BANG__61173,vec__60409,map__60412,map__60412__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60383,map__60386,map__60386__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_61172])], null);
} else {
var vec__60463 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60463,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60463,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_61172)], null);
}
});})(seq__60453_61233,chunk__60454_61234,count__60455_61235,i__60456_61236,conn_type_61237,uid_61168,__61169,__61170__$1,__61171__$2,ev_uuid_61172,flush_buffer_BANG__61173,vec__60409,map__60412,map__60412__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60383,map__60386,map__60386__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn))
);


var G__61238 = seq__60453_61233;
var G__61239 = chunk__60454_61234;
var G__61240 = count__60455_61235;
var G__61241 = (i__60456_61236 + (1));
seq__60453_61233 = G__61238;
chunk__60454_61234 = G__61239;
count__60455_61235 = G__61240;
i__60456_61236 = G__61241;
continue;
} else {
var temp__5735__auto___61242 = cljs.core.seq(seq__60453_61233);
if(temp__5735__auto___61242){
var seq__60453_61243__$1 = temp__5735__auto___61242;
if(cljs.core.chunked_seq_QMARK_(seq__60453_61243__$1)){
var c__4556__auto___61244 = cljs.core.chunk_first(seq__60453_61243__$1);
var G__61245 = cljs.core.chunk_rest(seq__60453_61243__$1);
var G__61246 = c__4556__auto___61244;
var G__61247 = cljs.core.count(c__4556__auto___61244);
var G__61248 = (0);
seq__60453_61233 = G__61245;
chunk__60454_61234 = G__61246;
count__60455_61235 = G__61247;
i__60456_61236 = G__61248;
continue;
} else {
var conn_type_61249 = cljs.core.first(seq__60453_61243__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_61249,uid_61168], null),((function (seq__60453_61233,chunk__60454_61234,count__60455_61235,i__60456_61236,conn_type_61249,seq__60453_61243__$1,temp__5735__auto___61242,uid_61168,__61169,__61170__$1,__61171__$2,ev_uuid_61172,flush_buffer_BANG__61173,vec__60409,map__60412,map__60412__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60383,map__60386,map__60386__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_61172])], null);
} else {
var vec__60466 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60466,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60466,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_61172)], null);
}
});})(seq__60453_61233,chunk__60454_61234,count__60455_61235,i__60456_61236,conn_type_61249,seq__60453_61243__$1,temp__5735__auto___61242,uid_61168,__61169,__61170__$1,__61171__$2,ev_uuid_61172,flush_buffer_BANG__61173,vec__60409,map__60412,map__60412__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60383,map__60386,map__60386__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn))
);


var G__61250 = cljs.core.next(seq__60453_61243__$1);
var G__61251 = null;
var G__61252 = (0);
var G__61253 = (0);
seq__60453_61233 = G__61250;
chunk__60454_61234 = G__61251;
count__60455_61235 = G__61252;
i__60456_61236 = G__61253;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__61173(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__61173(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_61254 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_61255 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__52192__auto___61256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52193__auto__ = (function (){var switch__52101__auto__ = (function (state_60473){
var state_val_60474 = (state_60473[(1)]);
if((state_val_60474 === (1))){
var state_60473__$1 = state_60473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60473__$1,(2),ws_timeout_61254);
} else {
if((state_val_60474 === (2))){
var inst_60470 = (state_60473[(2)]);
var inst_60471 = flush_buffer_BANG__61173(new cljs.core.Keyword(null,"ws","ws",86841443));
var state_60473__$1 = (function (){var statearr_60475 = state_60473;
(statearr_60475[(7)] = inst_60470);

return statearr_60475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60473__$1,inst_60471);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__52102__auto__ = null;
var taoensso$sente$state_machine__52102__auto____0 = (function (){
var statearr_60476 = [null,null,null,null,null,null,null,null];
(statearr_60476[(0)] = taoensso$sente$state_machine__52102__auto__);

(statearr_60476[(1)] = (1));

return statearr_60476;
});
var taoensso$sente$state_machine__52102__auto____1 = (function (state_60473){
while(true){
var ret_value__52103__auto__ = (function (){try{while(true){
var result__52104__auto__ = switch__52101__auto__(state_60473);
if(cljs.core.keyword_identical_QMARK_(result__52104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52104__auto__;
}
break;
}
}catch (e60477){var ex__52105__auto__ = e60477;
var statearr_60478_61257 = state_60473;
(statearr_60478_61257[(2)] = ex__52105__auto__);


if(cljs.core.seq((state_60473[(4)]))){
var statearr_60479_61258 = state_60473;
(statearr_60479_61258[(1)] = cljs.core.first((state_60473[(4)])));

} else {
throw ex__52105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61259 = state_60473;
state_60473 = G__61259;
continue;
} else {
return ret_value__52103__auto__;
}
break;
}
});
taoensso$sente$state_machine__52102__auto__ = function(state_60473){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__52102__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__52102__auto____1.call(this,state_60473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__52102__auto____0;
taoensso$sente$state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__52102__auto____1;
return taoensso$sente$state_machine__52102__auto__;
})()
})();
var state__52194__auto__ = (function (){var statearr_60480 = f__52193__auto__();
(statearr_60480[(6)] = c__52192__auto___61256);

return statearr_60480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52194__auto__);
}));


var c__52192__auto___61260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52193__auto__ = (function (){var switch__52101__auto__ = (function (state_60485){
var state_val_60486 = (state_60485[(1)]);
if((state_val_60486 === (1))){
var state_60485__$1 = state_60485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60485__$1,(2),ajax_timeout_61255);
} else {
if((state_val_60486 === (2))){
var inst_60482 = (state_60485[(2)]);
var inst_60483 = flush_buffer_BANG__61173(new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_60485__$1 = (function (){var statearr_60487 = state_60485;
(statearr_60487[(7)] = inst_60482);

return statearr_60487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60485__$1,inst_60483);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__52102__auto__ = null;
var taoensso$sente$state_machine__52102__auto____0 = (function (){
var statearr_60488 = [null,null,null,null,null,null,null,null];
(statearr_60488[(0)] = taoensso$sente$state_machine__52102__auto__);

(statearr_60488[(1)] = (1));

return statearr_60488;
});
var taoensso$sente$state_machine__52102__auto____1 = (function (state_60485){
while(true){
var ret_value__52103__auto__ = (function (){try{while(true){
var result__52104__auto__ = switch__52101__auto__(state_60485);
if(cljs.core.keyword_identical_QMARK_(result__52104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52104__auto__;
}
break;
}
}catch (e60489){var ex__52105__auto__ = e60489;
var statearr_60490_61261 = state_60485;
(statearr_60490_61261[(2)] = ex__52105__auto__);


if(cljs.core.seq((state_60485[(4)]))){
var statearr_60491_61262 = state_60485;
(statearr_60491_61262[(1)] = cljs.core.first((state_60485[(4)])));

} else {
throw ex__52105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61263 = state_60485;
state_60485 = G__61263;
continue;
} else {
return ret_value__52103__auto__;
}
break;
}
});
taoensso$sente$state_machine__52102__auto__ = function(state_60485){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__52102__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__52102__auto____1.call(this,state_60485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__52102__auto____0;
taoensso$sente$state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__52102__auto____1;
return taoensso$sente$state_machine__52102__auto__;
})()
})();
var state__52194__auto__ = (function (){var statearr_60492 = f__52193__auto__();
(statearr_60492[(6)] = c__52192__auto___61260);

return statearr_60492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52194__auto__);
}));

}
}

return null;
};
var G__61167 = function (user_id,ev,var_args){
var p__60408 = null;
if (arguments.length > 2) {
var G__61264__i = 0, G__61264__a = new Array(arguments.length -  2);
while (G__61264__i < G__61264__a.length) {G__61264__a[G__61264__i] = arguments[G__61264__i + 2]; ++G__61264__i;}
  p__60408 = new cljs.core.IndexedSeq(G__61264__a,0,null);
} 
return G__61167__delegate.call(this,user_id,ev,p__60408);};
G__61167.cljs$lang$maxFixedArity = 2;
G__61167.cljs$lang$applyTo = (function (arglist__61265){
var user_id = cljs.core.first(arglist__61265);
arglist__61265 = cljs.core.next(arglist__61265);
var ev = cljs.core.first(arglist__61265);
var p__60408 = cljs.core.rest(arglist__61265);
return G__61167__delegate(user_id,ev,p__60408);
});
G__61167.cljs$core$IFn$_invoke$arity$variadic = G__61167__delegate;
return G__61167;
})()
;
var bad_csrf_QMARK_ = (function (ring_req){
if((csrf_token_fn == null)){
return false;
} else {
var temp__5733__auto__ = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null,ring_req));
if(cljs.core.truth_(temp__5733__auto__)){
var reference_csrf_token = temp__5733__auto__;
var csrf_token_from_client = (function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-csrf-token"], null));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-xsrf-token"], null));
}
}
})();
return cljs.core.not(taoensso.encore.const_str_EQ_(reference_csrf_token,csrf_token_from_client));
} else {
return true;
}
}
});
var unauthorized_QMARK_ = (function (ring_req){
if((authorized_QMARK__fn == null)){
return false;
} else {
return cljs.core.not((authorized_QMARK__fn.cljs$core$IFn$_invoke$arity$1 ? authorized_QMARK__fn.cljs$core$IFn$_invoke$arity$1(ring_req) : authorized_QMARK__fn.call(null,ring_req)));
}
});
var possible_rejection_resp = (function (ring_req){
if(bad_csrf_QMARK_(ring_req)){
return (bad_csrf_fn.cljs$core$IFn$_invoke$arity$1 ? bad_csrf_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_csrf_fn.call(null,ring_req));
} else {
if(taoensso.sente.allow_origin_QMARK_(allowed_origins__$1,ring_req)){
if(unauthorized_QMARK_(ring_req)){
return (unauthorized_fn.cljs$core$IFn$_invoke$arity$1 ? unauthorized_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : unauthorized_fn.call(null,ring_req));
} else {
var b2__52938__auto__ = (function (){var temp__5735__auto__ = _QMARK_unauthorized_fn;
if(cljs.core.truth_(temp__5735__auto__)){
var uf = temp__5735__auto__;
return (uf.cljs$core$IFn$_invoke$arity$1 ? uf.cljs$core$IFn$_invoke$arity$1(ring_req) : uf.call(null,ring_req));
} else {
return null;
}
})();
if((b2__52938__auto__ == null)){
return null;
} else {
var unauthorized_resp = b2__52938__auto__;
return unauthorized_resp;
}
}
} else {
return (bad_origin_fn.cljs$core$IFn$_invoke$arity$1 ? bad_origin_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_origin_fn.call(null,ring_req));
}
}
});
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787),send_buffers_], null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787),send_buffers_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),(function (ring_req){
var b2__52922__auto__ = possible_rejection_resp(ring_req);
if(cljs.core.truth_(b2__52922__auto__)){
var resp = b2__52922__auto__;
return resp;
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__60493 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60493,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60493,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,642,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
}),null)),null,2051526900,null);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,resp_clj));
} else {
return null;
}
});
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1(ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5735__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5735__auto__)){
var ms = temp__5735__auto__;
var c__52192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52193__auto__ = (function (){var switch__52101__auto__ = (function (state_60501){
var state_val_60502 = (state_60501[(1)]);
if((state_val_60502 === (1))){
var inst_60496 = cljs.core.async.timeout(ms);
var state_60501__$1 = state_60501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60501__$1,(2),inst_60496);
} else {
if((state_val_60502 === (2))){
var inst_60498 = (state_60501[(2)]);
var inst_60499 = reply_fn(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_60501__$1 = (function (){var statearr_60503 = state_60501;
(statearr_60503[(7)] = inst_60498);

return statearr_60503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60501__$1,inst_60499);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__52102__auto__ = null;
var taoensso$sente$state_machine__52102__auto____0 = (function (){
var statearr_60504 = [null,null,null,null,null,null,null,null];
(statearr_60504[(0)] = taoensso$sente$state_machine__52102__auto__);

(statearr_60504[(1)] = (1));

return statearr_60504;
});
var taoensso$sente$state_machine__52102__auto____1 = (function (state_60501){
while(true){
var ret_value__52103__auto__ = (function (){try{while(true){
var result__52104__auto__ = switch__52101__auto__(state_60501);
if(cljs.core.keyword_identical_QMARK_(result__52104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52104__auto__;
}
break;
}
}catch (e60505){var ex__52105__auto__ = e60505;
var statearr_60506_61266 = state_60501;
(statearr_60506_61266[(2)] = ex__52105__auto__);


if(cljs.core.seq((state_60501[(4)]))){
var statearr_60507_61267 = state_60501;
(statearr_60507_61267[(1)] = cljs.core.first((state_60501[(4)])));

} else {
throw ex__52105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61268 = state_60501;
state_60501 = G__61268;
continue;
} else {
return ret_value__52103__auto__;
}
break;
}
});
taoensso$sente$state_machine__52102__auto__ = function(state_60501){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__52102__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__52102__auto____1.call(this,state_60501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__52102__auto____0;
taoensso$sente$state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__52102__auto____1;
return taoensso$sente$state_machine__52102__auto__;
})()
})();
var state__52194__auto__ = (function (){var statearr_60508 = f__52193__auto__();
(statearr_60508[(6)] = c__52192__auto__);

return statearr_60508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52194__auto__);
}));

return c__52192__auto__;
} else {
return null;
}
} else {
return reply_fn(new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
})], null));
}
}),new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),(function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1(ring_req,client_id);
var receive_event_msg_BANG_ = (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.cljs$core$IFn$_invoke$arity$2(event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)], 0)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;
var send_handshake_BANG_ = (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,686,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
}),null)),null,2009558058,null);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,699,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": %s"].join(''),ring_req], null);
}),null)),null,-560869970,null);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
var b2__52922__auto__ = possible_rejection_resp(ring_req);
if(cljs.core.truth_(b2__52922__auto__)){
var resp = b2__52922__auto__;
return resp;
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,710,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
}),null)),null,1179187750,null);
var updated_conn = upd_conn_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_(server_ch,websocket_QMARK_);

var temp__5735__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__5735__auto__)){
var ms = temp__5735__auto__;
var c__52192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52193__auto__ = (function (){var switch__52101__auto__ = (function (state_60545){
var state_val_60546 = (state_60545[(1)]);
if((state_val_60546 === (7))){
var inst_60541 = (state_60545[(2)]);
var state_60545__$1 = state_60545;
var statearr_60547_61269 = state_60545__$1;
(statearr_60547_61269[(2)] = inst_60541);

(statearr_60547_61269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60546 === (1))){
var inst_60509 = udt_open;
var inst_60510 = inst_60509;
var state_60545__$1 = (function (){var statearr_60548 = state_60545;
(statearr_60548[(7)] = inst_60510);

return statearr_60548;
})();
var statearr_60549_61270 = state_60545__$1;
(statearr_60549_61270[(2)] = null);

(statearr_60549_61270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60546 === (4))){
var inst_60519 = (state_60545[(8)]);
var inst_60514 = (state_60545[(2)]);
var inst_60515 = cljs.core.deref(conns_);
var inst_60516 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60517 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_60518 = (new cljs.core.PersistentVector(null,3,(5),inst_60516,inst_60517,null));
var inst_60519__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_60515,inst_60518);
var state_60545__$1 = (function (){var statearr_60550 = state_60545;
(statearr_60550[(9)] = inst_60514);

(statearr_60550[(8)] = inst_60519__$1);

return statearr_60550;
})();
if(cljs.core.truth_(inst_60519__$1)){
var statearr_60551_61271 = state_60545__$1;
(statearr_60551_61271[(1)] = (5));

} else {
var statearr_60552_61272 = state_60545__$1;
(statearr_60552_61272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60546 === (13))){
var inst_60525 = (state_60545[(10)]);
var inst_60534 = (state_60545[(2)]);
var inst_60510 = inst_60525;
var state_60545__$1 = (function (){var statearr_60553 = state_60545;
(statearr_60553[(7)] = inst_60510);

(statearr_60553[(11)] = inst_60534);

return statearr_60553;
})();
var statearr_60554_61273 = state_60545__$1;
(statearr_60554_61273[(2)] = null);

(statearr_60554_61273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60546 === (6))){
var state_60545__$1 = state_60545;
var statearr_60555_61274 = state_60545__$1;
(statearr_60555_61274[(2)] = null);

(statearr_60555_61274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60546 === (3))){
var inst_60543 = (state_60545[(2)]);
var state_60545__$1 = state_60545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60545__$1,inst_60543);
} else {
if((state_val_60546 === (12))){
var state_60545__$1 = state_60545;
var statearr_60556_61275 = state_60545__$1;
(statearr_60556_61275[(2)] = null);

(statearr_60556_61275[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60546 === (2))){
var inst_60512 = cljs.core.async.timeout(ms);
var state_60545__$1 = state_60545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60545__$1,(4),inst_60512);
} else {
if((state_val_60546 === (11))){
var inst_60530 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_60531 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_60530);
var state_60545__$1 = state_60545;
var statearr_60557_61276 = state_60545__$1;
(statearr_60557_61276[(2)] = inst_60531);

(statearr_60557_61276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60546 === (9))){
var state_60545__$1 = state_60545;
var statearr_60558_61277 = state_60545__$1;
(statearr_60558_61277[(2)] = null);

(statearr_60558_61277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60546 === (5))){
var inst_60519 = (state_60545[(8)]);
var inst_60524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60519,(0),null);
var inst_60525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60519,(1),null);
var inst_60526 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_60545__$1 = (function (){var statearr_60559 = state_60545;
(statearr_60559[(10)] = inst_60525);

(statearr_60559[(12)] = inst_60524);

return statearr_60559;
})();
if(cljs.core.truth_(inst_60526)){
var statearr_60560_61278 = state_60545__$1;
(statearr_60560_61278[(1)] = (8));

} else {
var statearr_60561_61279 = state_60545__$1;
(statearr_60561_61279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60546 === (10))){
var inst_60538 = (state_60545[(2)]);
var state_60545__$1 = state_60545;
var statearr_60562_61280 = state_60545__$1;
(statearr_60562_61280[(2)] = inst_60538);

(statearr_60562_61280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60546 === (8))){
var inst_60510 = (state_60545[(7)]);
var inst_60525 = (state_60545[(10)]);
var inst_60528 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60525,inst_60510);
var state_60545__$1 = state_60545;
if(inst_60528){
var statearr_60563_61281 = state_60545__$1;
(statearr_60563_61281[(1)] = (11));

} else {
var statearr_60564_61282 = state_60545__$1;
(statearr_60564_61282[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__52102__auto__ = null;
var taoensso$sente$state_machine__52102__auto____0 = (function (){
var statearr_60565 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60565[(0)] = taoensso$sente$state_machine__52102__auto__);

(statearr_60565[(1)] = (1));

return statearr_60565;
});
var taoensso$sente$state_machine__52102__auto____1 = (function (state_60545){
while(true){
var ret_value__52103__auto__ = (function (){try{while(true){
var result__52104__auto__ = switch__52101__auto__(state_60545);
if(cljs.core.keyword_identical_QMARK_(result__52104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52104__auto__;
}
break;
}
}catch (e60566){var ex__52105__auto__ = e60566;
var statearr_60567_61283 = state_60545;
(statearr_60567_61283[(2)] = ex__52105__auto__);


if(cljs.core.seq((state_60545[(4)]))){
var statearr_60568_61284 = state_60545;
(statearr_60568_61284[(1)] = cljs.core.first((state_60545[(4)])));

} else {
throw ex__52105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61285 = state_60545;
state_60545 = G__61285;
continue;
} else {
return ret_value__52103__auto__;
}
break;
}
});
taoensso$sente$state_machine__52102__auto__ = function(state_60545){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__52102__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__52102__auto____1.call(this,state_60545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__52102__auto____0;
taoensso$sente$state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__52102__auto____1;
return taoensso$sente$state_machine__52102__auto__;
})()
})();
var state__52194__auto__ = (function (){var statearr_60569 = f__52193__auto__();
(statearr_60569[(6)] = c__52192__auto__);

return statearr_60569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52194__auto__);
}));

return c__52192__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,739,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
}),null)),null,-518049752,null);
var updated_conn = upd_conn_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_(server_ch,websocket_QMARK_);
} else {
var temp__5735__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5735__auto__)){
var ms = temp__5735__auto__;
var c__52192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52193__auto__ = (function (){var switch__52101__auto__ = (function (state_60595){
var state_val_60596 = (state_60595[(1)]);
if((state_val_60596 === (1))){
var inst_60570 = cljs.core.async.timeout(ms);
var state_60595__$1 = state_60595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60595__$1,(2),inst_60570);
} else {
if((state_val_60596 === (2))){
var inst_60577 = (state_60595[(7)]);
var inst_60572 = (state_60595[(2)]);
var inst_60573 = cljs.core.deref(conns_);
var inst_60574 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60575 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_60576 = (new cljs.core.PersistentVector(null,3,(5),inst_60574,inst_60575,null));
var inst_60577__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_60573,inst_60576);
var state_60595__$1 = (function (){var statearr_60597 = state_60595;
(statearr_60597[(7)] = inst_60577__$1);

(statearr_60597[(8)] = inst_60572);

return statearr_60597;
})();
if(cljs.core.truth_(inst_60577__$1)){
var statearr_60598_61286 = state_60595__$1;
(statearr_60598_61286[(1)] = (3));

} else {
var statearr_60599_61287 = state_60595__$1;
(statearr_60599_61287[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60596 === (3))){
var inst_60577 = (state_60595[(7)]);
var inst_60582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60577,(0),null);
var inst_60583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60577,(1),null);
var inst_60584 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60583,udt_open);
var state_60595__$1 = (function (){var statearr_60600 = state_60595;
(statearr_60600[(9)] = inst_60582);

return statearr_60600;
})();
if(inst_60584){
var statearr_60601_61288 = state_60595__$1;
(statearr_60601_61288[(1)] = (6));

} else {
var statearr_60602_61289 = state_60595__$1;
(statearr_60602_61289[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60596 === (4))){
var state_60595__$1 = state_60595;
var statearr_60603_61290 = state_60595__$1;
(statearr_60603_61290[(2)] = null);

(statearr_60603_61290[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60596 === (5))){
var inst_60593 = (state_60595[(2)]);
var state_60595__$1 = state_60595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60595__$1,inst_60593);
} else {
if((state_val_60596 === (6))){
var inst_60586 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_60587 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_60586);
var state_60595__$1 = state_60595;
var statearr_60604_61291 = state_60595__$1;
(statearr_60604_61291[(2)] = inst_60587);

(statearr_60604_61291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60596 === (7))){
var state_60595__$1 = state_60595;
var statearr_60605_61292 = state_60595__$1;
(statearr_60605_61292[(2)] = null);

(statearr_60605_61292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60596 === (8))){
var inst_60590 = (state_60595[(2)]);
var state_60595__$1 = state_60595;
var statearr_60606_61293 = state_60595__$1;
(statearr_60606_61293[(2)] = inst_60590);

(statearr_60606_61293[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__52102__auto__ = null;
var taoensso$sente$state_machine__52102__auto____0 = (function (){
var statearr_60607 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60607[(0)] = taoensso$sente$state_machine__52102__auto__);

(statearr_60607[(1)] = (1));

return statearr_60607;
});
var taoensso$sente$state_machine__52102__auto____1 = (function (state_60595){
while(true){
var ret_value__52103__auto__ = (function (){try{while(true){
var result__52104__auto__ = switch__52101__auto__(state_60595);
if(cljs.core.keyword_identical_QMARK_(result__52104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52104__auto__;
}
break;
}
}catch (e60608){var ex__52105__auto__ = e60608;
var statearr_60609_61294 = state_60595;
(statearr_60609_61294[(2)] = ex__52105__auto__);


if(cljs.core.seq((state_60595[(4)]))){
var statearr_60610_61295 = state_60595;
(statearr_60610_61295[(1)] = cljs.core.first((state_60595[(4)])));

} else {
throw ex__52105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61296 = state_60595;
state_60595 = G__61296;
continue;
} else {
return ret_value__52103__auto__;
}
break;
}
});
taoensso$sente$state_machine__52102__auto__ = function(state_60595){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__52102__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__52102__auto____1.call(this,state_60595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__52102__auto____0;
taoensso$sente$state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__52102__auto____1;
return taoensso$sente$state_machine__52102__auto__;
})()
})();
var state__52194__auto__ = (function (){var statearr_60611 = f__52193__auto__();
(statearr_60611[(6)] = c__52192__auto__);

return statearr_60611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52194__auto__);
}));

return c__52192__auto__;
} else {
return null;
}
}
}
}),new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),(function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__60612 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60612,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60612,(1),null);
return receive_event_msg_BANG_(clj,(cljs.core.truth_(_QMARK_cb_uuid)?(function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,769,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
}),null)),null,-405969723,null);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
}):null));
}),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,778,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
}),null)),null,1849891783,null);
var updated_conn = upd_conn_BANG_(conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__52192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52193__auto__ = (function (){var switch__52101__auto__ = (function (state_60666){
var state_val_60667 = (state_60666[(1)]);
if((state_val_60667 === (7))){
var state_60666__$1 = state_60666;
var statearr_60668_61297 = state_60666__$1;
(statearr_60668_61297[(2)] = null);

(statearr_60668_61297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (1))){
var inst_60615 = cljs.core.async.timeout((5000));
var state_60666__$1 = state_60666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60666__$1,(2),inst_60615);
} else {
if((state_val_60667 === (4))){
var state_60666__$1 = state_60666;
var statearr_60669_61298 = state_60666__$1;
(statearr_60669_61298[(2)] = null);

(statearr_60669_61298[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (13))){
var state_60666__$1 = state_60666;
var statearr_60670_61299 = state_60666__$1;
(statearr_60670_61299[(2)] = null);

(statearr_60670_61299[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (6))){
var inst_60625 = (state_60666[(7)]);
var inst_60627 = (state_60666[(8)]);
var inst_60626 = (state_60666[(9)]);
var inst_60643 = (state_60666[(10)]);
var inst_60638 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60639 = [conn_type,uid,client_id];
var inst_60640 = (new cljs.core.PersistentVector(null,3,(5),inst_60638,inst_60639,null));
var inst_60642 = (function (){var vec__60618 = inst_60625;
var __QMARK_sch = inst_60626;
var udt_t1 = inst_60627;
return (function (p__60641){
var vec__60671 = p__60641;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60671,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60671,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_sch,udt_t1__$1], null),false);
}
});
})();
var inst_60643__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_60640,inst_60642);
var state_60666__$1 = (function (){var statearr_60674 = state_60666;
(statearr_60674[(10)] = inst_60643__$1);

return statearr_60674;
})();
if(cljs.core.truth_(inst_60643__$1)){
var statearr_60675_61300 = state_60666__$1;
(statearr_60675_61300[(1)] = (9));

} else {
var statearr_60676_61301 = state_60666__$1;
(statearr_60676_61301[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (3))){
var inst_60625 = (state_60666[(7)]);
var inst_60627 = (state_60666[(8)]);
var inst_60626 = (state_60666[(9)]);
var inst_60630 = (function (){var vec__60618 = inst_60625;
var __QMARK_sch = inst_60626;
var udt_t1 = inst_60627;
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
})();
var inst_60631 = (new cljs.core.Delay(inst_60630,null));
var inst_60632 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,792,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_60631,null,-1480498149,null);
var state_60666__$1 = state_60666;
var statearr_60677_61302 = state_60666__$1;
(statearr_60677_61302[(2)] = inst_60632);

(statearr_60677_61302[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (12))){
var inst_60652 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60653 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_60654 = (new cljs.core.PersistentVector(null,2,(5),inst_60652,inst_60653,null));
var inst_60655 = receive_event_msg_BANG_(inst_60654);
var state_60666__$1 = state_60666;
var statearr_60678_61303 = state_60666__$1;
(statearr_60678_61303[(2)] = inst_60655);

(statearr_60678_61303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (2))){
var inst_60625 = (state_60666[(7)]);
var inst_60617 = (state_60666[(2)]);
var inst_60621 = cljs.core.deref(conns_);
var inst_60622 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60623 = [conn_type,uid,client_id];
var inst_60624 = (new cljs.core.PersistentVector(null,3,(5),inst_60622,inst_60623,null));
var inst_60625__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_60621,inst_60624);
var inst_60626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60625__$1,(0),null);
var inst_60627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60625__$1,(1),null);
var inst_60628 = cljs.core.deref(taoensso.sente.debug_mode_QMARK__);
var state_60666__$1 = (function (){var statearr_60679 = state_60666;
(statearr_60679[(11)] = inst_60617);

(statearr_60679[(7)] = inst_60625__$1);

(statearr_60679[(8)] = inst_60627);

(statearr_60679[(9)] = inst_60626);

return statearr_60679;
})();
if(cljs.core.truth_(inst_60628)){
var statearr_60680_61304 = state_60666__$1;
(statearr_60680_61304[(1)] = (3));

} else {
var statearr_60681_61305 = state_60666__$1;
(statearr_60681_61305[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (11))){
var inst_60661 = (state_60666[(2)]);
var state_60666__$1 = state_60666;
var statearr_60682_61306 = state_60666__$1;
(statearr_60682_61306[(2)] = inst_60661);

(statearr_60682_61306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (9))){
var inst_60625 = (state_60666[(7)]);
var inst_60627 = (state_60666[(8)]);
var inst_60626 = (state_60666[(9)]);
var inst_60643 = (state_60666[(10)]);
var inst_60645 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60646 = [conn_type,uid];
var inst_60647 = (new cljs.core.PersistentVector(null,2,(5),inst_60645,inst_60646,null));
var inst_60648 = (function (){var vec__60618 = inst_60625;
var __QMARK_sch = inst_60626;
var udt_t1 = inst_60627;
var disconnect_QMARK_ = inst_60643;
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
})();
var inst_60649 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_60647,inst_60648);
var inst_60650 = upd_connected_uid_BANG_(uid);
var state_60666__$1 = (function (){var statearr_60683 = state_60666;
(statearr_60683[(12)] = inst_60649);

return statearr_60683;
})();
if(cljs.core.truth_(inst_60650)){
var statearr_60684_61307 = state_60666__$1;
(statearr_60684_61307[(1)] = (12));

} else {
var statearr_60685_61308 = state_60666__$1;
(statearr_60685_61308[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (5))){
var inst_60627 = (state_60666[(8)]);
var inst_60635 = (state_60666[(2)]);
var inst_60636 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60627,udt_close);
var state_60666__$1 = (function (){var statearr_60686 = state_60666;
(statearr_60686[(13)] = inst_60635);

return statearr_60686;
})();
if(inst_60636){
var statearr_60687_61309 = state_60666__$1;
(statearr_60687_61309[(1)] = (6));

} else {
var statearr_60688_61310 = state_60666__$1;
(statearr_60688_61310[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (14))){
var inst_60658 = (state_60666[(2)]);
var state_60666__$1 = state_60666;
var statearr_60689_61311 = state_60666__$1;
(statearr_60689_61311[(2)] = inst_60658);

(statearr_60689_61311[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (10))){
var state_60666__$1 = state_60666;
var statearr_60690_61312 = state_60666__$1;
(statearr_60690_61312[(2)] = null);

(statearr_60690_61312[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (8))){
var inst_60664 = (state_60666[(2)]);
var state_60666__$1 = state_60666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60666__$1,inst_60664);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__52102__auto__ = null;
var taoensso$sente$state_machine__52102__auto____0 = (function (){
var statearr_60691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60691[(0)] = taoensso$sente$state_machine__52102__auto__);

(statearr_60691[(1)] = (1));

return statearr_60691;
});
var taoensso$sente$state_machine__52102__auto____1 = (function (state_60666){
while(true){
var ret_value__52103__auto__ = (function (){try{while(true){
var result__52104__auto__ = switch__52101__auto__(state_60666);
if(cljs.core.keyword_identical_QMARK_(result__52104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52104__auto__;
}
break;
}
}catch (e60692){var ex__52105__auto__ = e60692;
var statearr_60693_61313 = state_60666;
(statearr_60693_61313[(2)] = ex__52105__auto__);


if(cljs.core.seq((state_60666[(4)]))){
var statearr_60694_61314 = state_60666;
(statearr_60694_61314[(1)] = cljs.core.first((state_60666[(4)])));

} else {
throw ex__52105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61315 = state_60666;
state_60666 = G__61315;
continue;
} else {
return ret_value__52103__auto__;
}
break;
}
});
taoensso$sente$state_machine__52102__auto__ = function(state_60666){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__52102__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__52102__auto____1.call(this,state_60666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__52102__auto____0;
taoensso$sente$state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__52102__auto____1;
return taoensso$sente$state_machine__52102__auto__;
})()
})();
var state__52194__auto__ = (function (){var statearr_60695 = f__52193__auto__();
(statearr_60695[(6)] = c__52192__auto__);

return statearr_60695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52194__auto__);
}));

return c__52192__auto__;
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,814,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
}),null)),null,1258967303,null);
})], null));
}
}
})], null);
}));

(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq60380){
var G__60381 = cljs.core.first(seq60380);
var seq60380__$1 = cljs.core.next(seq60380);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60381,seq60380__$1);
}));

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,820,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-1226014041,null);

var seq__60696 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__60697 = null;
var count__60698 = (0);
var i__60699 = (0);
while(true){
if((i__60699 < count__60698)){
var vec__60712 = chunk__60697.cljs$core$IIndexed$_nth$arity$2(null,i__60699);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60712,(0),null);
var vec__60715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60712,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60715,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60715,(1),null);
var temp__5735__auto___61316 = _QMARK_sch;
if(cljs.core.truth_(temp__5735__auto___61316)){
var sch_61317 = temp__5735__auto___61316;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id) : upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id));

taoensso.sente.interfaces.sch_send_BANG_(sch_61317,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__61318 = seq__60696;
var G__61319 = chunk__60697;
var G__61320 = count__60698;
var G__61321 = (i__60699 + (1));
seq__60696 = G__61318;
chunk__60697 = G__61319;
count__60698 = G__61320;
i__60699 = G__61321;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60696);
if(temp__5735__auto__){
var seq__60696__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60696__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60696__$1);
var G__61322 = cljs.core.chunk_rest(seq__60696__$1);
var G__61323 = c__4556__auto__;
var G__61324 = cljs.core.count(c__4556__auto__);
var G__61325 = (0);
seq__60696 = G__61322;
chunk__60697 = G__61323;
count__60698 = G__61324;
i__60699 = G__61325;
continue;
} else {
var vec__60718 = cljs.core.first(seq__60696__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60718,(0),null);
var vec__60721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60718,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60721,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60721,(1),null);
var temp__5735__auto___61326__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5735__auto___61326__$1)){
var sch_61327 = temp__5735__auto___61326__$1;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id) : upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id));

taoensso.sente.interfaces.sch_send_BANG_(sch_61327,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__61328 = cljs.core.next(seq__60696__$1);
var G__61329 = null;
var G__61330 = (0);
var G__61331 = (0);
seq__60696 = G__61328;
chunk__60697 = G__61329;
count__60698 = G__61330;
i__60699 = G__61331;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,830,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,1833050596,null);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__52192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52193__auto__ = (function (){var switch__52101__auto__ = (function (state_60770){
var state_val_60771 = (state_60770[(1)]);
if((state_val_60771 === (7))){
var inst_60726 = (state_60770[(7)]);
var inst_60725 = (state_60770[(8)]);
var inst_60732 = (state_60770[(9)]);
var inst_60742 = (function (){var n = inst_60725;
var client_ids_satisfied = inst_60726;
var _QMARK_pulled = inst_60732;
return (function (s,client_id,p__60741){
var vec__60772 = p__60741;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60772,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60772,(1),null);
var sent_QMARK_ = (function (){var temp__5735__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__5735__auto__)){
var sch = temp__5735__auto__;
return taoensso.sente.interfaces.sch_send_BANG_(_QMARK_sch,cljs.core.not(new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,client_id);
} else {
return s;
}
});
})();
var inst_60743 = cljs.core.PersistentHashSet.EMPTY;
var inst_60744 = cljs.core.reduce_kv(inst_60742,inst_60743,inst_60732);
var state_60770__$1 = state_60770;
var statearr_60775_61332 = state_60770__$1;
(statearr_60775_61332[(2)] = inst_60744);

(statearr_60775_61332[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60771 === (1))){
var inst_60724 = cljs.core.PersistentHashSet.EMPTY;
var inst_60725 = (0);
var inst_60726 = inst_60724;
var state_60770__$1 = (function (){var statearr_60776 = state_60770;
(statearr_60776[(7)] = inst_60726);

(statearr_60776[(8)] = inst_60725);

return statearr_60776;
})();
var statearr_60777_61333 = state_60770__$1;
(statearr_60777_61333[(2)] = null);

(statearr_60777_61333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60771 === (4))){
var state_60770__$1 = state_60770;
var statearr_60778_61334 = state_60770__$1;
(statearr_60778_61334[(2)] = true);

(statearr_60778_61334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60771 === (15))){
var inst_60763 = (state_60770[(2)]);
var state_60770__$1 = state_60770;
var statearr_60779_61335 = state_60770__$1;
(statearr_60779_61335[(2)] = inst_60763);

(statearr_60779_61335[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60771 === (13))){
var inst_60749 = (state_60770[(10)]);
var inst_60754 = cljs.core.rand_int(inst_60749);
var inst_60755 = (inst_60749 + inst_60754);
var inst_60756 = cljs.core.async.timeout(inst_60755);
var state_60770__$1 = state_60770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60770__$1,(16),inst_60756);
} else {
if((state_val_60771 === (6))){
var inst_60732 = (state_60770[(9)]);
var inst_60739 = (state_60770[(2)]);
var state_60770__$1 = (function (){var statearr_60780 = state_60770;
(statearr_60780[(11)] = inst_60739);

return statearr_60780;
})();
if(cljs.core.truth_(inst_60732)){
var statearr_60781_61336 = state_60770__$1;
(statearr_60781_61336[(1)] = (7));

} else {
var statearr_60782_61337 = state_60770__$1;
(statearr_60782_61337[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60771 === (3))){
var inst_60768 = (state_60770[(2)]);
var state_60770__$1 = state_60770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60770__$1,inst_60768);
} else {
if((state_val_60771 === (12))){
var inst_60766 = (state_60770[(2)]);
var state_60770__$1 = state_60770;
var statearr_60783_61338 = state_60770__$1;
(statearr_60783_61338[(2)] = inst_60766);

(statearr_60783_61338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60771 === (2))){
var inst_60726 = (state_60770[(7)]);
var inst_60725 = (state_60770[(8)]);
var inst_60732 = (state_60770[(9)]);
var inst_60728 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60729 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_60730 = (new cljs.core.PersistentVector(null,2,(5),inst_60728,inst_60729,null));
var inst_60731 = (function (){var n = inst_60725;
var client_ids_satisfied = inst_60726;
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){
var vec__60784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60784,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60784,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
}),m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
})();
var inst_60732__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_60730,inst_60731);
var inst_60733 = (function (){var n = inst_60725;
var client_ids_satisfied = inst_60726;
var _QMARK_pulled = inst_60732__$1;
return (function (x){
var or__4126__auto__ = (x == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_)(x);
}
});
})();
var inst_60734 = inst_60733(inst_60732__$1);
var state_60770__$1 = (function (){var statearr_60787 = state_60770;
(statearr_60787[(9)] = inst_60732__$1);

return statearr_60787;
})();
if(cljs.core.truth_(inst_60734)){
var statearr_60788_61339 = state_60770__$1;
(statearr_60788_61339[(1)] = (4));

} else {
var statearr_60789_61340 = state_60770__$1;
(statearr_60789_61340[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60771 === (11))){
var state_60770__$1 = state_60770;
var statearr_60790_61341 = state_60770__$1;
(statearr_60790_61341[(2)] = null);

(statearr_60790_61341[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60771 === (9))){
var inst_60726 = (state_60770[(7)]);
var inst_60725 = (state_60770[(8)]);
var inst_60749 = (state_60770[(10)]);
var inst_60747 = (state_60770[(2)]);
var inst_60748 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_60726,inst_60747);
var inst_60749__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_60725);
var state_60770__$1 = (function (){var statearr_60791 = state_60770;
(statearr_60791[(12)] = inst_60748);

(statearr_60791[(10)] = inst_60749__$1);

return statearr_60791;
})();
if(cljs.core.truth_(inst_60749__$1)){
var statearr_60792_61342 = state_60770__$1;
(statearr_60792_61342[(1)] = (10));

} else {
var statearr_60793_61343 = state_60770__$1;
(statearr_60793_61343[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60771 === (5))){
var inst_60732 = (state_60770[(9)]);
var inst_60737 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",857,"([:or nil? map?] ?pulled)",inst_60732,null,null);
var state_60770__$1 = state_60770;
var statearr_60794_61344 = state_60770__$1;
(statearr_60794_61344[(2)] = inst_60737);

(statearr_60794_61344[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60771 === (14))){
var state_60770__$1 = state_60770;
var statearr_60795_61345 = state_60770__$1;
(statearr_60795_61345[(2)] = null);

(statearr_60795_61345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60771 === (16))){
var inst_60725 = (state_60770[(8)]);
var inst_60748 = (state_60770[(12)]);
var inst_60758 = (state_60770[(2)]);
var inst_60759 = (inst_60725 + (1));
var inst_60725__$1 = inst_60759;
var inst_60726 = inst_60748;
var state_60770__$1 = (function (){var statearr_60796 = state_60770;
(statearr_60796[(7)] = inst_60726);

(statearr_60796[(8)] = inst_60725__$1);

(statearr_60796[(13)] = inst_60758);

return statearr_60796;
})();
var statearr_60797_61346 = state_60770__$1;
(statearr_60797_61346[(2)] = null);

(statearr_60797_61346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60771 === (10))){
var inst_60748 = (state_60770[(12)]);
var inst_60751 = cljs.core.complement(inst_60748);
var inst_60752 = taoensso.encore.rsome(inst_60751,client_ids_unsatisfied);
var state_60770__$1 = state_60770;
if(cljs.core.truth_(inst_60752)){
var statearr_60798_61347 = state_60770__$1;
(statearr_60798_61347[(1)] = (13));

} else {
var statearr_60799_61348 = state_60770__$1;
(statearr_60799_61348[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60771 === (8))){
var state_60770__$1 = state_60770;
var statearr_60800_61349 = state_60770__$1;
(statearr_60800_61349[(2)] = null);

(statearr_60800_61349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__52102__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__52102__auto____0 = (function (){
var statearr_60801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60801[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__52102__auto__);

(statearr_60801[(1)] = (1));

return statearr_60801;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__52102__auto____1 = (function (state_60770){
while(true){
var ret_value__52103__auto__ = (function (){try{while(true){
var result__52104__auto__ = switch__52101__auto__(state_60770);
if(cljs.core.keyword_identical_QMARK_(result__52104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52104__auto__;
}
break;
}
}catch (e60802){var ex__52105__auto__ = e60802;
var statearr_60803_61350 = state_60770;
(statearr_60803_61350[(2)] = ex__52105__auto__);


if(cljs.core.seq((state_60770[(4)]))){
var statearr_60804_61351 = state_60770;
(statearr_60804_61351[(1)] = cljs.core.first((state_60770[(4)])));

} else {
throw ex__52105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61352 = state_60770;
state_60770 = G__61352;
continue;
} else {
return ret_value__52103__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__52102__auto__ = function(state_60770){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__52102__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__52102__auto____1.call(this,state_60770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__52102__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__52102__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__52102__auto__;
})()
})();
var state__52194__auto__ = (function (){var statearr_60805 = f__52193__auto__();
(statearr_60805[(6)] = c__52192__auto__);

return statearr_60805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52194__auto__);
}));

return c__52192__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

var taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_61353 = (function (chsk){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4429__auto__.call(null,chsk));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_connect_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4426__auto__.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-connect!",chsk);
}
}
});
taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
return taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_61353(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_61354 = (function (chsk,reason){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__4429__auto__.call(null,chsk,reason));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__4426__auto__.call(null,chsk,reason));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-disconnect!",chsk);
}
}
});
taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
return taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_61354(chsk,reason);
}
});

var taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_61355 = (function (chsk){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4429__auto__.call(null,chsk));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4426__auto__.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-reconnect!",chsk);
}
}
});
taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
return taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_61355(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_61356 = (function (chsk,ev,opts){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__4429__auto__.call(null,chsk,ev,opts));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_send_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__4426__auto__.call(null,chsk,ev,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-send!",chsk);
}
}
});
taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
return taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_61356(chsk,ev,opts);
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_(chsk);
});
taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_(chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});
/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_(chsk);
});
/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var G__60807 = arguments.length;
switch (G__60807) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,904,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$(new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,2134820709,null);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
}));

(taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4);

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,908,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,590061299,null);

if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264)));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event(x);

if((((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null)))) || (taoensso.encore.nat_int_QMARK_(_QMARK_timeout_ms)))){
} else {
throw (new Error(["Assert failed: ",["cb requires a timeout; timeout-ms should be a +ive integer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join(''),"\n","(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))"].join('')));
}

if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)) || (taoensso.encore.chan_QMARK_(_QMARK_cb)))){
return null;
} else {
throw (new Error(["Assert failed: ",["cb should be nil, an ifn, or a channel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(_QMARK_cb))].join(''),"\n","(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))"].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__5735__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5735__auto__)){
var cb_uuid = temp__5735__auto__;
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),(function (_QMARK_f){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
}));
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__60808 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60808,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60808,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_61358 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60811){if((e60811 instanceof Error)){
var e_61358 = e60811;
return e_61358;
} else {
throw e60811;

}
}})();
if((e_61358 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",951,"(map? state)",state,e_61358,null);
}

var e_61359 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__60813 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__60813) : taoensso.truss.impl.set_STAR_.call(null,G__60813));
})(),x);
})(reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60812){if((e60812 instanceof Error)){
var e_61359 = e60812;
return e_61359;
} else {
throw e60812;

}
}})();
if((e_61359 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",952,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_61359,null);
}

if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(reason,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new cljs.core.Keyword(null,"open?","open?",1238443125),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null)], 0));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)))){
return _QMARK_cb;
} else {
var e_61360 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60814){if((e60814 instanceof Error)){
var e_61360 = e60814;
return e_61360;
} else {
throw e60814;

}
}})();
if((e_61360 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",972,"(enc/chan? ?cb)",_QMARK_cb,e_61360,null);
}

taoensso.sente.assert_event(ev);

var vec__60815 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60815,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60815,(1),null);
var cb_ch = _QMARK_cb;
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([taoensso.encore.as_qname(ev_id),".cb"].join('')),reply], null));
});
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,982,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,183905309,null);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",983,"(vector? clj)",clj,null,null));
var seq__60818 = cljs.core.seq(buffered_evs);
var chunk__60819 = null;
var count__60820 = (0);
var i__60821 = (0);
while(true){
if((i__60821 < count__60820)){
var ev = chunk__60819.cljs$core$IIndexed$_nth$arity$2(null,i__60821);
taoensso.sente.assert_event(ev);

var vec__60828_61361 = ev;
var id_61362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60828_61361,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_61362),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__61363 = seq__60818;
var G__61364 = chunk__60819;
var G__61365 = count__60820;
var G__61366 = (i__60821 + (1));
seq__60818 = G__61363;
chunk__60819 = G__61364;
count__60820 = G__61365;
i__60821 = G__61366;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60818);
if(temp__5735__auto__){
var seq__60818__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60818__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60818__$1);
var G__61367 = cljs.core.chunk_rest(seq__60818__$1);
var G__61368 = c__4556__auto__;
var G__61369 = cljs.core.count(c__4556__auto__);
var G__61370 = (0);
seq__60818 = G__61367;
chunk__60819 = G__61368;
count__60820 = G__61369;
i__60821 = G__61370;
continue;
} else {
var ev = cljs.core.first(seq__60818__$1);
taoensso.sente.assert_event(ev);

var vec__60831_61371 = ev;
var id_61372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60831_61371,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_61372),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__61373 = cljs.core.next(seq__60818__$1);
var G__61374 = null;
var G__61375 = (0);
var G__61376 = (0);
seq__60818 = G__61373;
chunk__60819 = G__61374;
count__60820 = G__61375;
i__60821 = G__61376;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
if(cljs.core.vector_QMARK_(x)){
var vec__60837 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60837,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return false;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_61377 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__60842 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__60842) : taoensso.truss.impl.set_STAR_.call(null,G__60842));
})(),x);
})(chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60841){if((e60841 instanceof Error)){
var e_61377 = e60841;
return e_61377;
} else {
throw e60841;

}
}})();
if((e_61377 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",995,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_61377,null);
}

var e_61378 = (function (){try{if(taoensso.sente.handshake_QMARK_(clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60843){if((e60843 instanceof Error)){
var e_61378 = e60843;
return e_61378;
} else {
throw e60843;

}
}})();
if((e_61378 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",996,"(handshake? clj)",clj,e_61378,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,997,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,361863280,null);

var vec__60844 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60844,(0),null);
var vec__60847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60844,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60847,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60847,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60847,(2),null);
var map__60850 = chsk;
var map__60850__$1 = (((((!((map__60850 == null))))?(((((map__60850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60850):map__60850);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60850__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60850__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,null,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

taoensso.sente.swap_chsk_state_BANG_(chsk,(function (p1__60840_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__60840_SHARP_,new_state], 0));
}));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (function (){var make_package_name = (function (prefix){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"socket"].join('');
});
var require_fn = (((typeof require !== 'undefined'))?require:cljs.core.constantly(new cljs.core.Keyword(null,"no-op","no-op",-93046065)));
return (new cljs.core.Delay((function (){
if(((taoensso.sente.node_target_QMARK_) && ((typeof require !== 'undefined')))){
try{var G__60853 = make_package_name("web");
return (require_fn.cljs$core$IFn$_invoke$arity$1 ? require_fn.cljs$core$IFn$_invoke$arity$1(G__60853) : require_fn.call(null,G__60853));
}catch (e60852){var e = e60852;
return null;
}} else {
return null;
}
}),null));
})();
taoensso.sente.create_js_client_websocket_BANG_ = (function taoensso$sente$create_js_client_websocket_BANG_(p__60854){
var map__60855 = p__60854;
var map__60855__$1 = (((((!((map__60855 == null))))?(((((map__60855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60855):map__60855);
var opts = map__60855__$1;
var onerror_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword(null,"onerror-fn","onerror-fn",1069372505));
var onmessage_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword(null,"onmessage-fn","onmessage-fn",1633804172));
var onclose_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword(null,"onclose-fn","onclose-fn",-1388163785));
var uri_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword(null,"uri-str","uri-str",304128675));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var temp__5735__auto__ = (function (){var or__4126__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"WebSocket");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"MozWebSocket");
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var WebSocket = temp__5735__auto__;
var socket = (new WebSocket(uri_str));
var G__60857_61379 = socket;
(G__60857_61379["onerror"] = onerror_fn);

(G__60857_61379["onmessage"] = onmessage_fn);

(G__60857_61379["onclose"] = onclose_fn);


return socket;
} else {
return null;
}
});
taoensso.sente.create_websocket_BANG_ = (function taoensso$sente$create_websocket_BANG_(p__60858){
var map__60859 = p__60858;
var map__60859__$1 = (((((!((map__60859 == null))))?(((((map__60859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60859):map__60859);
var opts = map__60859__$1;
var onerror_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60859__$1,new cljs.core.Keyword(null,"onerror-fn","onerror-fn",1069372505));
var onmessage_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60859__$1,new cljs.core.Keyword(null,"onmessage-fn","onmessage-fn",1633804172));
var onclose_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60859__$1,new cljs.core.Keyword(null,"onclose-fn","onclose-fn",-1388163785));
var uri_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60859__$1,new cljs.core.Keyword(null,"uri-str","uri-str",304128675));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60859__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
return taoensso.sente.create_js_client_websocket_BANG_(opts);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,headers,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.headers = headers;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k60868,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__60872 = k60868;
var G__60872__$1 = (((G__60872 instanceof cljs.core.Keyword))?G__60872.fqn:null);
switch (G__60872__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "headers":
return self__.headers;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "socket_":
return self__.socket_;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60868,else__4383__auto__);

}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__60873){
var vec__60874 = p__60873;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60874,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60874,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60867){
var self__ = this;
var G__60867__$1 = this;
return (new cljs.core.RecordIter((0),G__60867__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (15 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60869,other60870){
var self__ = this;
var this60869__$1 = this;
return (((!((other60870 == null)))) && ((this60869__$1.constructor === other60870.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60869__$1.client_id,other60870.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60869__$1.chs,other60870.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60869__$1.params,other60870.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60869__$1.headers,other60870.headers)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60869__$1.packer,other60870.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60869__$1.url,other60870.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60869__$1.ws_kalive_ms,other60870.ws_kalive_ms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60869__$1.state_,other60870.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60869__$1.instance_handle_,other60870.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60869__$1.retry_count_,other60870.retry_count_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60869__$1.ever_opened_QMARK__,other60870.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60869__$1.backoff_ms_fn,other60870.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60869__$1.cbs_waiting_,other60870.cbs_waiting_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60869__$1.socket_,other60870.socket_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60869__$1.udt_last_comms_,other60870.udt_last_comms_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60869__$1.__extmap,other60870.__extmap)));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"headers","headers",-835030129),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__60867){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__60877 = cljs.core.keyword_identical_QMARK_;
var expr__60878 = k__4388__auto__;
if(cljs.core.truth_((pred__60877.cljs$core$IFn$_invoke$arity$2 ? pred__60877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__60878) : pred__60877.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__60878)))){
return (new taoensso.sente.ChWebSocket(G__60867,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60877.cljs$core$IFn$_invoke$arity$2 ? pred__60877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__60878) : pred__60877.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__60878)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__60867,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60877.cljs$core$IFn$_invoke$arity$2 ? pred__60877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__60878) : pred__60877.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__60878)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__60867,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60877.cljs$core$IFn$_invoke$arity$2 ? pred__60877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"headers","headers",-835030129),expr__60878) : pred__60877.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129),expr__60878)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__60867,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60877.cljs$core$IFn$_invoke$arity$2 ? pred__60877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__60878) : pred__60877.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__60878)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,G__60867,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60877.cljs$core$IFn$_invoke$arity$2 ? pred__60877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__60878) : pred__60877.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__60878)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,G__60867,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60877.cljs$core$IFn$_invoke$arity$2 ? pred__60877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__60878) : pred__60877.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__60878)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,G__60867,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60877.cljs$core$IFn$_invoke$arity$2 ? pred__60877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__60878) : pred__60877.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__60878)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,G__60867,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60877.cljs$core$IFn$_invoke$arity$2 ? pred__60877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__60878) : pred__60877.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__60878)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__60867,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60877.cljs$core$IFn$_invoke$arity$2 ? pred__60877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__60878) : pred__60877.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__60878)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__60867,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60877.cljs$core$IFn$_invoke$arity$2 ? pred__60877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__60878) : pred__60877.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__60878)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__60867,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60877.cljs$core$IFn$_invoke$arity$2 ? pred__60877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__60878) : pred__60877.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__60878)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__60867,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60877.cljs$core$IFn$_invoke$arity$2 ? pred__60877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__60878) : pred__60877.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__60878)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__60867,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60877.cljs$core$IFn$_invoke$arity$2 ? pred__60877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__60878) : pred__60877.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__60878)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__60867,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60877.cljs$core$IFn$_invoke$arity$2 ? pred__60877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__60878) : pred__60877.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__60878)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__60867,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__60867),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__60867){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__60867,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__60861_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__60861_SHARP_,reason);
}));

var temp__5735__auto__ = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__60880 = opts;
var map__60880__$1 = (((((!((map__60880 == null))))?(((((map__60880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60880):map__60880);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60880__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60880__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60880__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5735__auto___61381 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5735__auto___61381)){
var cb_uuid_61382 = temp__5735__auto___61381;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_61382], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60882){if((e60882 instanceof Error)){
var e = e60882;
return e;
} else {
throw e60882;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1141,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5735__auto___61383__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5735__auto___61383__$1)){
var timeout_ms_61384 = temp__5735__auto___61383__$1;
var c__52192__auto___61385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52193__auto__ = (function (){var switch__52101__auto__ = (function (state_60893){
var state_val_60894 = (state_60893[(1)]);
if((state_val_60894 === (1))){
var inst_60883 = cljs.core.async.timeout(timeout_ms_61384);
var state_60893__$1 = state_60893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60893__$1,(2),inst_60883);
} else {
if((state_val_60894 === (2))){
var inst_60886 = (state_60893[(7)]);
var inst_60885 = (state_60893[(2)]);
var inst_60886__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_60893__$1 = (function (){var statearr_60895 = state_60893;
(statearr_60895[(8)] = inst_60885);

(statearr_60895[(7)] = inst_60886__$1);

return statearr_60895;
})();
if(cljs.core.truth_(inst_60886__$1)){
var statearr_60896_61386 = state_60893__$1;
(statearr_60896_61386[(1)] = (3));

} else {
var statearr_60897_61387 = state_60893__$1;
(statearr_60897_61387[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (3))){
var inst_60886 = (state_60893[(7)]);
var inst_60888 = (inst_60886.cljs$core$IFn$_invoke$arity$1 ? inst_60886.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : inst_60886.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
var state_60893__$1 = state_60893;
var statearr_60898_61388 = state_60893__$1;
(statearr_60898_61388[(2)] = inst_60888);

(statearr_60898_61388[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (4))){
var state_60893__$1 = state_60893;
var statearr_60899_61389 = state_60893__$1;
(statearr_60899_61389[(2)] = null);

(statearr_60899_61389[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (5))){
var inst_60891 = (state_60893[(2)]);
var state_60893__$1 = state_60893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60893__$1,inst_60891);
} else {
return null;
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__52102__auto__ = null;
var taoensso$sente$state_machine__52102__auto____0 = (function (){
var statearr_60900 = [null,null,null,null,null,null,null,null,null];
(statearr_60900[(0)] = taoensso$sente$state_machine__52102__auto__);

(statearr_60900[(1)] = (1));

return statearr_60900;
});
var taoensso$sente$state_machine__52102__auto____1 = (function (state_60893){
while(true){
var ret_value__52103__auto__ = (function (){try{while(true){
var result__52104__auto__ = switch__52101__auto__(state_60893);
if(cljs.core.keyword_identical_QMARK_(result__52104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52104__auto__;
}
break;
}
}catch (e60901){var ex__52105__auto__ = e60901;
var statearr_60902_61390 = state_60893;
(statearr_60902_61390[(2)] = ex__52105__auto__);


if(cljs.core.seq((state_60893[(4)]))){
var statearr_60903_61391 = state_60893;
(statearr_60903_61391[(1)] = cljs.core.first((state_60893[(4)])));

} else {
throw ex__52105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61392 = state_60893;
state_60893 = G__61392;
continue;
} else {
return ret_value__52103__auto__;
}
break;
}
});
taoensso$sente$state_machine__52102__auto__ = function(state_60893){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__52102__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__52102__auto____1.call(this,state_60893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__52102__auto____0;
taoensso$sente$state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__52102__auto____1;
return taoensso$sente$state_machine__52102__auto__;
})()
})();
var state__52194__auto__ = (function (){var statearr_60904 = f__52193__auto__();
(statearr_60904[(6)] = c__52192__auto___61385);

return statearr_60904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52194__auto__);
}));

} else {
}
} else {
}

try{cljs.core.deref(self__.socket_).send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e60905){var t = e60905;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1155,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Chsk send error"], null);
}),null)),null,-1499736618,null);

var temp__5735__auto___61393 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5735__auto___61393)){
var cb_uuid_61394 = temp__5735__auto___61393;
var cb_fn_STAR__61395 = (function (){var or__4126__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_61394);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60906){if((e60906 instanceof Error)){
var e = e60906;
return e;
} else {
throw e60906;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1158,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
}
})();
(cb_fn_STAR__61395.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__61395.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : cb_fn_STAR__61395.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
} else {
}

return false;
}}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});
var connect_fn = (function taoensso$sente$connect_fn(){
if(have_handle_QMARK_()){
var retry_fn = (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,cljs.core.inc);
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1174,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
}),null)),null,-691437004,null);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__60862_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60862_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
var onerror_fn = (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e60907){var _ = e60907;
return ws_ev;
}})()], null);
}),null)),null,-416007891,null);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__60863_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60863_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null));
}));
});
var onmessage_fn = (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__60908 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60908,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60908,(1),null);
cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

var or__4126__auto__ = ((taoensso.sente.handshake_QMARK_(clj))?(function (){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_(self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5733__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5733__auto__)){
var cb_uuid = temp__5733__auto__;
var temp__5733__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__5733__auto____$1)){
var cb_fn = temp__5733__auto____$1;
return (cb_fn.cljs$core$IFn$_invoke$arity$1 ? cb_fn.cljs$core$IFn$_invoke$arity$1(clj) : cb_fn.call(null,clj));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1231,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
}),null)),null,686441116,null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});
var onclose_fn = (function (ws_ev){
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean"),new cljs.core.Keyword(null,"code","code",1586293142),taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code"),new cljs.core.Keyword(null,"reason","reason",-2070751759),taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason")], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"clean?","clean?",-1675631009).cljs$core$IFn$_invoke$arity$1(last_ws_close))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,1257,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
}),null)),null,-1457850464,null);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__60865_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60865_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__60866_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__60866_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));

return retry_fn();
}
});
var _QMARK_socket = (function (){try{return taoensso.sente.create_websocket_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"onerror-fn","onerror-fn",1069372505),onerror_fn,new cljs.core.Keyword(null,"onmessage-fn","onmessage-fn",1633804172),onmessage_fn,new cljs.core.Keyword(null,"onclose-fn","onclose-fn",-1388163785),onclose_fn,new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers,new cljs.core.Keyword(null,"uri-str","uri-str",304128675),taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))], null)], 0)))], null));
}catch (e60911){var t = e60911;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1280,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"WebSocket error"], null);
}),null)),null,-52112494,null);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
var temp__5735__auto___61396 = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5735__auto___61396)){
var old_socket_61397 = temp__5735__auto___61396;
old_socket_61397.close();
} else {
}

return cljs.core.reset_BANG_(self__.socket_,_QMARK_socket);
}
} else {
return null;
}
});
var temp__5735__auto___61398 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5735__auto___61398)){
var ms_61399 = temp__5735__auto___61398;
var c__52192__auto___61400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52193__auto__ = (function (){var switch__52101__auto__ = (function (state_60939){
var state_val_60940 = (state_60939[(1)]);
if((state_val_60940 === (7))){
var inst_60935 = (state_60939[(2)]);
var state_60939__$1 = state_60939;
var statearr_60941_61401 = state_60939__$1;
(statearr_60941_61401[(2)] = inst_60935);

(statearr_60941_61401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60940 === (1))){
var state_60939__$1 = state_60939;
var statearr_60942_61402 = state_60939__$1;
(statearr_60942_61402[(2)] = null);

(statearr_60942_61402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60940 === (4))){
var inst_60916 = (state_60939[(2)]);
var inst_60917 = have_handle_QMARK_();
var state_60939__$1 = (function (){var statearr_60943 = state_60939;
(statearr_60943[(7)] = inst_60916);

return statearr_60943;
})();
if(inst_60917){
var statearr_60944_61403 = state_60939__$1;
(statearr_60944_61403[(1)] = (5));

} else {
var statearr_60945_61404 = state_60939__$1;
(statearr_60945_61404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60940 === (6))){
var state_60939__$1 = state_60939;
var statearr_60946_61405 = state_60939__$1;
(statearr_60946_61405[(2)] = null);

(statearr_60946_61405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60940 === (3))){
var inst_60937 = (state_60939[(2)]);
var state_60939__$1 = state_60939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60939__$1,inst_60937);
} else {
if((state_val_60940 === (2))){
var inst_60913 = cljs.core.deref(self__.udt_last_comms_);
var inst_60914 = cljs.core.async.timeout(ms_61399);
var state_60939__$1 = (function (){var statearr_60947 = state_60939;
(statearr_60947[(8)] = inst_60913);

return statearr_60947;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60939__$1,(4),inst_60914);
} else {
if((state_val_60940 === (9))){
var state_60939__$1 = state_60939;
var statearr_60948_61406 = state_60939__$1;
(statearr_60948_61406[(2)] = null);

(statearr_60948_61406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60940 === (5))){
var inst_60913 = (state_60939[(8)]);
var inst_60919 = cljs.core.deref(self__.udt_last_comms_);
var inst_60920 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60913,inst_60919);
var state_60939__$1 = state_60939;
if(inst_60920){
var statearr_60949_61407 = state_60939__$1;
(statearr_60949_61407[(1)] = (8));

} else {
var statearr_60950_61408 = state_60939__$1;
(statearr_60950_61408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60940 === (10))){
var inst_60931 = (state_60939[(2)]);
var state_60939__$1 = (function (){var statearr_60951 = state_60939;
(statearr_60951[(9)] = inst_60931);

return statearr_60951;
})();
var statearr_60952_61409 = state_60939__$1;
(statearr_60952_61409[(2)] = null);

(statearr_60952_61409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60940 === (8))){
var inst_60922 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60923 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_60924 = (new cljs.core.PersistentVector(null,1,(5),inst_60922,inst_60923,null));
var inst_60925 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_60926 = [true];
var inst_60927 = cljs.core.PersistentHashMap.fromArrays(inst_60925,inst_60926);
var inst_60928 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,inst_60924,inst_60927);
var state_60939__$1 = state_60939;
var statearr_60953_61410 = state_60939__$1;
(statearr_60953_61410[(2)] = inst_60928);

(statearr_60953_61410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__52102__auto__ = null;
var taoensso$sente$state_machine__52102__auto____0 = (function (){
var statearr_60954 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60954[(0)] = taoensso$sente$state_machine__52102__auto__);

(statearr_60954[(1)] = (1));

return statearr_60954;
});
var taoensso$sente$state_machine__52102__auto____1 = (function (state_60939){
while(true){
var ret_value__52103__auto__ = (function (){try{while(true){
var result__52104__auto__ = switch__52101__auto__(state_60939);
if(cljs.core.keyword_identical_QMARK_(result__52104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52104__auto__;
}
break;
}
}catch (e60955){var ex__52105__auto__ = e60955;
var statearr_60956_61411 = state_60939;
(statearr_60956_61411[(2)] = ex__52105__auto__);


if(cljs.core.seq((state_60939[(4)]))){
var statearr_60957_61412 = state_60939;
(statearr_60957_61412[(1)] = cljs.core.first((state_60939[(4)])));

} else {
throw ex__52105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61413 = state_60939;
state_60939 = G__61413;
continue;
} else {
return ret_value__52103__auto__;
}
break;
}
});
taoensso$sente$state_machine__52102__auto__ = function(state_60939){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__52102__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__52102__auto____1.call(this,state_60939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__52102__auto____0;
taoensso$sente$state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__52102__auto____1;
return taoensso$sente$state_machine__52102__auto__;
})()
})();
var state__52194__auto__ = (function (){var statearr_60958 = f__52193__auto__();
(statearr_60958[(6)] = c__52192__auto___61400);

return statearr_60958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52194__auto__);
}));

} else {
}

cljs.core.reset_BANG_(self__.retry_count_,(0));

connect_fn();

return chsk__$1;
}));

(taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"headers","headers",805501398,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null)], null);
}));

(taoensso.sente.ChWebSocket.cljs$lang$type = true);

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChWebSocket",null,(1),null));
}));

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"taoensso.sente/ChWebSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChWebSocket.
 */
taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,headers,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,headers,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChWebSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__60871){
var extmap__4419__auto__ = (function (){var G__60959 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60871,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], 0));
if(cljs.core.record_QMARK_(G__60871)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60959);
} else {
return G__60959;
}
})();
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__60871),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__60871),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__60871),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(G__60871),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__60871),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__60871),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__60871),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__60871),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__60871),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__60871),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__60871),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__60871),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__60871),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__60871),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__60871),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChWebSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(60)], 0));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k60967,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__60971 = k60967;
var G__60971__$1 = (((G__60971 instanceof cljs.core.Keyword))?G__60971.fqn:null);
switch (G__60971__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60967,else__4383__auto__);

}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__60972){
var vec__60973 = p__60972;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60973,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60973,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60966){
var self__ = this;
var G__60966__$1 = this;
return (new cljs.core.RecordIter((0),G__60966__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60968,other60969){
var self__ = this;
var this60968__$1 = this;
return (((!((other60969 == null)))) && ((this60968__$1.constructor === other60969.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60968__$1.client_id,other60969.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60968__$1.chs,other60969.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60968__$1.params,other60969.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60968__$1.packer,other60969.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60968__$1.url,other60969.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60968__$1.state_,other60969.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60968__$1.instance_handle_,other60969.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60968__$1.ever_opened_QMARK__,other60969.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60968__$1.backoff_ms_fn,other60969.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60968__$1.ajax_opts,other60969.ajax_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60968__$1.curr_xhr_,other60969.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60968__$1.__extmap,other60969.__extmap)));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__60966){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__60976 = cljs.core.keyword_identical_QMARK_;
var expr__60977 = k__4388__auto__;
if(cljs.core.truth_((pred__60976.cljs$core$IFn$_invoke$arity$2 ? pred__60976.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__60977) : pred__60976.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__60977)))){
return (new taoensso.sente.ChAjaxSocket(G__60966,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60976.cljs$core$IFn$_invoke$arity$2 ? pred__60976.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__60977) : pred__60976.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__60977)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__60966,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60976.cljs$core$IFn$_invoke$arity$2 ? pred__60976.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__60977) : pred__60976.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__60977)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__60966,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60976.cljs$core$IFn$_invoke$arity$2 ? pred__60976.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__60977) : pred__60976.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__60977)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__60966,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60976.cljs$core$IFn$_invoke$arity$2 ? pred__60976.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__60977) : pred__60976.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__60977)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__60966,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60976.cljs$core$IFn$_invoke$arity$2 ? pred__60976.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__60977) : pred__60976.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__60977)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__60966,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60976.cljs$core$IFn$_invoke$arity$2 ? pred__60976.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__60977) : pred__60976.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__60977)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__60966,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60976.cljs$core$IFn$_invoke$arity$2 ? pred__60976.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__60977) : pred__60976.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__60977)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__60966,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60976.cljs$core$IFn$_invoke$arity$2 ? pred__60976.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__60977) : pred__60976.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__60977)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__60966,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60976.cljs$core$IFn$_invoke$arity$2 ? pred__60976.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__60977) : pred__60976.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__60977)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__60966,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60976.cljs$core$IFn$_invoke$arity$2 ? pred__60976.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__60977) : pred__60976.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__60977)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__60966,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__60966),null));
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__60966){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__60966,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__60960_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__60960_SHARP_,reason);
}));

var temp__5735__auto__ = cljs.core.deref(self__.curr_xhr_);
if(cljs.core.truth_(temp__5735__auto__)){
var x = temp__5735__auto__;
return x.abort();
} else {
return null;
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__60979 = opts;
var map__60979__$1 = (((((!((map__60979 == null))))?(((((map__60979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60979):map__60979);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60979__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60979__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60979__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_));
var G__60981_61415 = self__.url;
var G__60982_61416 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4126__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)], 0)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null)], 0));
})()], null)], 0));
var G__60983_61417 = (function taoensso$sente$ajax_cb(p__60984){
var map__60985 = p__60984;
var map__60985__$1 = (((((!((map__60985 == null))))?(((((map__60985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60985):map__60985);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60985__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60985__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__60961_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__60961_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__60987 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60987,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60987,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1404,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
}),null)),null,246587126,null);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__60962_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60962_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));
}
});
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__60981_61415,G__60982_61416,G__60983_61417) : taoensso.sente.ajax_lite.call(null,G__60981_61415,G__60982_61416,G__60983_61417));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});
var poll_fn = (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1414,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
}),null)),null,449450136,null);

if(have_handle_QMARK_()){
var retry_fn = (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1422,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
}),null)),null,9326852,null);

goog.global.setTimeout((function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
}),backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__60963_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60963_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__60990 = self__.url;
var G__60991 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null))], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))], null)], 0))], null)], 0));
var G__60992 = (function taoensso$sente$poll_fn_$_ajax_cb(p__60993){
var map__60994 = p__60993;
var map__60994__$1 = (((((!((map__60994 == null))))?(((((map__60994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60994):map__60994);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60994__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60994__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__60964_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__60964_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__60996 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60996,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__60965_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60965_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));

taoensso$sente$poll_fn((0));

if(handshake_QMARK_){
return null;
} else {
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref(taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_(self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__60990,G__60991,G__60992) : taoensso.sente.ajax_lite.call(null,G__60990,G__60991,G__60992));
})());
} else {
return null;
}
});
poll_fn((0));

return chsk__$1;
}));

(taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$type = true);

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAjaxSocket",null,(1),null));
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"taoensso.sente/ChAjaxSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAjaxSocket.
 */
taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAjaxSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__60970){
var extmap__4419__auto__ = (function (){var G__60999 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60970,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], 0));
if(cljs.core.record_QMARK_(G__60970)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60999);
} else {
return G__60999;
}
})();
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__60970),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__60970),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__60970),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__60970),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__60970),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__60970),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__60970),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__60970),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__60970),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__60970),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__60970),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAjaxSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k61001,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__61005 = k61001;
var G__61005__$1 = (((G__61005 instanceof cljs.core.Keyword))?G__61005.fqn:null);
switch (G__61005__$1) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61001,else__4383__auto__);

}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__61006){
var vec__61007 = p__61006;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61007,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61007,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61000){
var self__ = this;
var G__61000__$1 = this;
return (new cljs.core.RecordIter((0),G__61000__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61002,other61003){
var self__ = this;
var this61002__$1 = this;
return (((!((other61003 == null)))) && ((this61002__$1.constructor === other61003.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61002__$1.ws_chsk_opts,other61003.ws_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61002__$1.ajax_chsk_opts,other61003.ajax_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61002__$1.state_,other61003.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61002__$1.impl_,other61003.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61002__$1.__extmap,other61003.__extmap)));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__61000){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__61010 = cljs.core.keyword_identical_QMARK_;
var expr__61011 = k__4388__auto__;
if(cljs.core.truth_((pred__61010.cljs$core$IFn$_invoke$arity$2 ? pred__61010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__61011) : pred__61010.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__61011)))){
return (new taoensso.sente.ChAutoSocket(G__61000,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61010.cljs$core$IFn$_invoke$arity$2 ? pred__61010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__61011) : pred__61010.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__61011)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__61000,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61010.cljs$core$IFn$_invoke$arity$2 ? pred__61010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__61011) : pred__61010.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__61011)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__61000,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61010.cljs$core$IFn$_invoke$arity$2 ? pred__61010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__61011) : pred__61010.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__61011)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__61000,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__61000),null));
}
}
}
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__61000){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__61000,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__5735__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5735__auto__)){
var impl = temp__5735__auto__;
return taoensso.sente._chsk_disconnect_BANG_(impl,reason);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5735__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5735__auto__)){
var impl = temp__5735__auto__;
taoensso.sente._chsk_disconnect_BANG_(impl,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5733__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5733__auto__)){
var impl = temp__5733__auto__;
return taoensso.sente._chsk_send_BANG_(impl,ev,opts);
} else {
var map__61013 = opts;
var map__61013__$1 = (((((!((map__61013 == null))))?(((((map__61013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61013):map__61013);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61013__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = (function (){
cljs.core.remove_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))).taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});
var ws_conn_BANG_ = (function (){
var downgraded_QMARK___61419 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),(function (_,___$1,old_state,new_state){
var temp__5735__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5735__auto__)){
var impl = temp__5735__auto__;
var temp__5735__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ever_opened_QMARK__ = temp__5735__auto____$1;
if(cljs.core.truth_(cljs.core.deref(ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.compare_and_set_BANG_(downgraded_QMARK___61419,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1555,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
}),null)),null,1921635820,null);

taoensso.sente._chsk_disconnect_BANG_(impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_(self__.impl_,ajax_conn_BANG_());
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
}));

return taoensso.sente.new_ChWebSocket(ws_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))).taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});
cljs.core.reset_BANG_(self__.impl_,(function (){var or__4126__auto__ = ws_conn_BANG_();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ajax_conn_BANG_();
}
})());

return chsk__$1;
}));

(taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
}));

(taoensso.sente.ChAutoSocket.cljs$lang$type = true);

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAutoSocket",null,(1),null));
}));

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"taoensso.sente/ChAutoSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAutoSocket.
 */
taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAutoSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__61004){
var extmap__4419__auto__ = (function (){var G__61015 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61004,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], 0));
if(cljs.core.record_QMARK_(G__61004)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61015);
} else {
return G__61015;
}
})();
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__61004),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__61004),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__61004),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__61004),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__61016 = protocol;
var G__61016__$1 = (((G__61016 instanceof cljs.core.Keyword))?G__61016.fqn:null);
switch (G__61016__$1) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__61018 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__61018) : taoensso.truss.impl.set_STAR_.call(null,G__61018));
})(),x);
})(protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e61017){if((e61017 instanceof Error)){
var e = e61017;
return e;
} else {
throw e61017;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1574,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__61019 = type;
var G__61019__$1 = (((G__61019 instanceof cljs.core.Keyword))?G__61019.fqn:null);
switch (G__61019__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__61020 = protocol__$2;
switch (G__61020) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61020)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61019__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),"//",taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([host,path], 0))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :port           ; Server port (defaults to current page's port).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :headers        ; Map of additional headers to include in the initiating request
 *                     ; (currently only for Java clients).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61423 = arguments.length;
var i__4737__auto___61424 = (0);
while(true){
if((i__4737__auto___61424 < len__4736__auto___61423)){
args__4742__auto__.push((arguments[i__4737__auto___61424]));

var G__61425 = (i__4737__auto___61424 + (1));
i__4737__auto___61424 = G__61425;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,_QMARK_csrf_token,p__61024){
var vec__61025 = p__61024;
var map__61028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61025,(0),null);
var map__61028__$1 = (((((!((map__61028 == null))))?(((((map__61028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61028):map__61028);
var opts = map__61028__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61028__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61028__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61028__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61028__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61028__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61028__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61028__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61028__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61028__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61028__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61028__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61028__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61028__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61025,(1),null);
var e_61426 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__61031 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__61031) : taoensso.truss.impl.set_STAR_.call(null,G__61031));
})(),x);
})(type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e61030){if((e61030 instanceof Error)){
var e_61426 = e61030;
return e_61426;
} else {
throw e61030;

}
}})();
if((e_61426 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1618,"([:in #{:ws :ajax :auto}] type)",type,e_61426,null);
}

var e_61427 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e61032){if((e61032 instanceof Error)){
var e_61427 = e61032;
return e_61427;
} else {
throw e61032;

}
}})();
if((e_61427 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1619,"(enc/nblank-str? client-id)",client_id,e_61427,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1621,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
}),null)),null,418790857,null);
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1622,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
}),null)),null,-1287820220,null);
} else {
}

if((((!(typeof _QMARK_csrf_token === 'string'))) || (clojure.string.blank_QMARK_(_QMARK_csrf_token)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1625,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING: no CSRF token provided. Connections will FAIL if server-side CSRF check is enabled (as it is by default)."], null);
}),null)),null,1908739503,null);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__61033 = (function (){var win_loc = taoensso.encore.get_win_loc();
var path__$1 = (function (){var z = (function (){try{var or__4126__auto__ = path;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
}catch (e61036){if((e61036 instanceof Error)){
var e = e61036;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e61036;

}
}})();
var e = (function (){try{if((z instanceof taoensso.truss.impl.WrappedError)){
return z;
} else {
if(taoensso.truss.impl.some_QMARK_(z)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}
}catch (e61037){if((e61037 instanceof Error)){
var e = e61037;
return e;
} else {
throw e61037;

}
}})();
if((e == null)){
return z;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1633,"(taoensso.truss.impl/some? (or path (:pathname win-loc)))",z,e,null);
}
})();
var temp__5733__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)) : f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443))),(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549)) : f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549)))], null);
} else {
var protocol__$1 = (function (){var or__4126__auto__ = protocol;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (cljs.core.truth_(host)?(cljs.core.truth_(port)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''):host):(cljs.core.truth_(port)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hostname","hostname",2105669933).cljs$core$IFn$_invoke$arity$1(win_loc)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''):new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61033,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61033,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
})));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__61038 = type;
var G__61038__$1 = (((G__61038 instanceof cljs.core.Keyword))?G__61038.fqn:null);
switch (G__61038__$1) {
case "ws":
return taoensso.sente.new_ChWebSocket(ws_chsk_opts,_QMARK_csrf_token);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts,_QMARK_csrf_token);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket(auto_chsk_opts,_QMARK_csrf_token);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61038__$1)].join('')));

}
})());
var temp__5733__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5733__auto__)){
var chsk = temp__5733__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
var vec__61039 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61039,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61039,(1),null);
var ev__$1 = vec__61039;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
})));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1727,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
}),null)),null,497286993,null);
}
}));

(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq61021){
var G__61022 = cljs.core.first(seq61021);
var seq61021__$1 = cljs.core.next(seq61021);
var G__61023 = cljs.core.first(seq61021__$1);
var seq61021__$2 = cljs.core.next(seq61021__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61022,G__61023,seq61021__$2);
}));

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__61042 = opts;
var map__61042__$1 = (((((!((map__61042 == null))))?(((((map__61042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61042):map__61042);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61042__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61042__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61042__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var c__52192__auto___61429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52193__auto__ = (function (){var switch__52101__auto__ = (function (state_61091){
var state_val_61092 = (state_61091[(1)]);
if((state_val_61092 === (7))){
var inst_61087 = (state_61091[(2)]);
var state_61091__$1 = state_61091;
var statearr_61093_61430 = state_61091__$1;
(statearr_61093_61430[(2)] = inst_61087);

(statearr_61093_61430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61092 === (1))){
var state_61091__$1 = state_61091;
var statearr_61094_61431 = state_61091__$1;
(statearr_61094_61431[(2)] = null);

(statearr_61094_61431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61092 === (4))){
var inst_61052 = (state_61091[(7)]);
var inst_61057 = (state_61091[(8)]);
var inst_61054 = (state_61091[(9)]);
var inst_61053 = (state_61091[(10)]);
var inst_61052__$1 = (state_61091[(2)]);
var inst_61053__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61052__$1,(0),null);
var inst_61054__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61052__$1,(1),null);
var inst_61055 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_61054__$1,ch_ctrl);
var inst_61056 = (inst_61053__$1 == null);
var inst_61057__$1 = ((inst_61055) || (inst_61056));
var state_61091__$1 = (function (){var statearr_61095 = state_61091;
(statearr_61095[(7)] = inst_61052__$1);

(statearr_61095[(8)] = inst_61057__$1);

(statearr_61095[(9)] = inst_61054__$1);

(statearr_61095[(10)] = inst_61053__$1);

return statearr_61095;
})();
if(cljs.core.truth_(inst_61057__$1)){
var statearr_61096_61432 = state_61091__$1;
(statearr_61096_61432[(1)] = (5));

} else {
var statearr_61097_61433 = state_61091__$1;
(statearr_61097_61433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61092 === (15))){
var inst_61053 = (state_61091[(10)]);
var state_61091__$1 = state_61091;
var statearr_61098_61434 = state_61091__$1;
(statearr_61098_61434[(2)] = inst_61053);

(statearr_61098_61434[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61092 === (13))){
var inst_61073 = (state_61091[(2)]);
var state_61091__$1 = state_61091;
var statearr_61099_61435 = state_61091__$1;
(statearr_61099_61435[(2)] = inst_61073);

(statearr_61099_61435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61092 === (6))){
var inst_61053 = (state_61091[(10)]);
var inst_61062 = (inst_61053 == null);
var inst_61063 = cljs.core.not(inst_61062);
var state_61091__$1 = state_61091;
if(inst_61063){
var statearr_61100_61436 = state_61091__$1;
(statearr_61100_61436[(1)] = (8));

} else {
var statearr_61101_61437 = state_61091__$1;
(statearr_61101_61437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61092 === (3))){
var inst_61089 = (state_61091[(2)]);
var state_61091__$1 = state_61091;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61091__$1,inst_61089);
} else {
if((state_val_61092 === (12))){
var state_61091__$1 = state_61091;
var statearr_61102_61438 = state_61091__$1;
(statearr_61102_61438[(2)] = false);

(statearr_61102_61438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61092 === (2))){
var inst_61048 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61049 = [ch_recv,ch_ctrl];
var inst_61050 = (new cljs.core.PersistentVector(null,2,(5),inst_61048,inst_61049,null));
var state_61091__$1 = state_61091;
return cljs.core.async.ioc_alts_BANG_(state_61091__$1,(4),inst_61050);
} else {
if((state_val_61092 === (11))){
var state_61091__$1 = state_61091;
var statearr_61103_61439 = state_61091__$1;
(statearr_61103_61439[(2)] = true);

(statearr_61103_61439[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61092 === (9))){
var state_61091__$1 = state_61091;
var statearr_61104_61440 = state_61091__$1;
(statearr_61104_61440[(2)] = false);

(statearr_61104_61440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61092 === (5))){
var state_61091__$1 = state_61091;
var statearr_61105_61441 = state_61091__$1;
(statearr_61105_61441[(2)] = null);

(statearr_61105_61441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61092 === (14))){
var inst_61053 = (state_61091[(10)]);
var inst_61078 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61053);
var state_61091__$1 = state_61091;
var statearr_61106_61442 = state_61091__$1;
(statearr_61106_61442[(2)] = inst_61078);

(statearr_61106_61442[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61092 === (16))){
var inst_61052 = (state_61091[(7)]);
var inst_61057 = (state_61091[(8)]);
var inst_61054 = (state_61091[(9)]);
var inst_61053 = (state_61091[(10)]);
var inst_61081 = (state_61091[(2)]);
var inst_61082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61081,new cljs.core.Keyword(null,"event","event",301435442));
var inst_61083 = (function (){var vec__61045 = inst_61052;
var v = inst_61053;
var p = inst_61054;
var stop_QMARK_ = inst_61057;
var map__61060 = inst_61081;
var event_msg = inst_61081;
var event = inst_61082;
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1754,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
}),null)),null,-320421646,null);
} else {
}

var G__61109 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(taoensso.sente.server_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e61110){if((e61110 instanceof Error)){
var e = e61110;
return e;
} else {
throw e61110;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1757,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(taoensso.sente.client_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e61111){if((e61111 instanceof Error)){
var e = e61111;
return e;
} else {
throw e61111;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1758,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__61109) : event_msg_handler.call(null,G__61109));
}catch (e61107){var e1 = e61107;
try{var temp__5733__auto__ = error_handler;
if(cljs.core.truth_(temp__5733__auto__)){
var eh = temp__5733__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1763,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
}),null)),null,1653156601,null);
}
}catch (e61108){var e2 = e61108;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1764,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
}),null)),null,-1088186059,null);
}}});
})();
var inst_61084 = execute1(inst_61083);
var state_61091__$1 = (function (){var statearr_61112 = state_61091;
(statearr_61112[(11)] = inst_61084);

return statearr_61112;
})();
var statearr_61113_61443 = state_61091__$1;
(statearr_61113_61443[(2)] = null);

(statearr_61113_61443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61092 === (10))){
var inst_61076 = (state_61091[(2)]);
var state_61091__$1 = state_61091;
if(cljs.core.truth_(inst_61076)){
var statearr_61114_61444 = state_61091__$1;
(statearr_61114_61444[(1)] = (14));

} else {
var statearr_61115_61445 = state_61091__$1;
(statearr_61115_61445[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61092 === (8))){
var inst_61053 = (state_61091[(10)]);
var inst_61065 = inst_61053.cljs$lang$protocol_mask$partition0$;
var inst_61066 = (inst_61065 & (64));
var inst_61067 = inst_61053.cljs$core$ISeq$;
var inst_61068 = (cljs.core.PROTOCOL_SENTINEL === inst_61067);
var inst_61069 = ((inst_61066) || (inst_61068));
var state_61091__$1 = state_61091;
if(cljs.core.truth_(inst_61069)){
var statearr_61116_61446 = state_61091__$1;
(statearr_61116_61446[(1)] = (11));

} else {
var statearr_61117_61447 = state_61091__$1;
(statearr_61117_61447[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__52102__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__52102__auto____0 = (function (){
var statearr_61118 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61118[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__52102__auto__);

(statearr_61118[(1)] = (1));

return statearr_61118;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__52102__auto____1 = (function (state_61091){
while(true){
var ret_value__52103__auto__ = (function (){try{while(true){
var result__52104__auto__ = switch__52101__auto__(state_61091);
if(cljs.core.keyword_identical_QMARK_(result__52104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52104__auto__;
}
break;
}
}catch (e61119){var ex__52105__auto__ = e61119;
var statearr_61120_61448 = state_61091;
(statearr_61120_61448[(2)] = ex__52105__auto__);


if(cljs.core.seq((state_61091[(4)]))){
var statearr_61121_61449 = state_61091;
(statearr_61121_61449[(1)] = cljs.core.first((state_61091[(4)])));

} else {
throw ex__52105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61450 = state_61091;
state_61091 = G__61450;
continue;
} else {
return ret_value__52103__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__52102__auto__ = function(state_61091){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__52102__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__52102__auto____1.call(this,state_61091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__52102__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__52102__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__52102__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__52102__auto__;
})()
})();
var state__52194__auto__ = (function (){var statearr_61122 = f__52193__auto__();
(statearr_61122[(6)] = c__52192__auto___61429);

return statearr_61122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52194__auto__);
}));


return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61451 = arguments.length;
var i__4737__auto___61452 = (0);
while(true){
if((i__4737__auto___61452 < len__4736__auto___61451)){
args__4742__auto__.push((arguments[i__4737__auto___61452]));

var G__61453 = (i__4737__auto___61452 + (1));
i__4737__auto___61452 = G__61453;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__61126){
var vec__61127 = p__61126;
var map__61130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61127,(0),null);
var map__61130__$1 = (((((!((map__61130 == null))))?(((((map__61130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61130):map__61130);
var opts = map__61130__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61130__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61130__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61130__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_(new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq61123){
var G__61124 = cljs.core.first(seq61123);
var seq61123__$1 = cljs.core.next(seq61123);
var G__61125 = cljs.core.first(seq61123__$1);
var seq61123__$2 = cljs.core.next(seq61123__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61124,G__61125,seq61123__$2);
}));

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61454 = arguments.length;
var i__4737__auto___61455 = (0);
while(true){
if((i__4737__auto___61455 < len__4736__auto___61454)){
args__4742__auto__.push((arguments[i__4737__auto___61455]));

var G__61456 = (i__4737__auto___61455 + (1));
i__4737__auto___61455 = G__61456;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__61135){
var vec__61136 = p__61135;
var map__61139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61136,(0),null);
var map__61139__$1 = (((((!((map__61139 == null))))?(((((map__61139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61139):map__61139);
var opts = map__61139__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61139__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61139__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq61132){
var G__61133 = cljs.core.first(seq61132);
var seq61132__$1 = cljs.core.next(seq61132);
var G__61134 = cljs.core.first(seq61132__$1);
var seq61132__$2 = cljs.core.next(seq61132__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61133,G__61134,seq61132__$2);
}));

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,(function (ev_msg){
var G__61141 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__61142 = new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__61141,G__61142) : event_handler.call(null,G__61141,G__61142));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__61143,websocket_QMARK_){
var map__61144 = p__61143;
var map__61144__$1 = (((((!((map__61144 == null))))?(((((map__61144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61144):map__61144);
var location = map__61144__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61144__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61144__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61144__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = path;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=taoensso.sente.js.map
