goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__43787){
var map__43788 = p__43787;
var map__43788__$1 = (((((!((map__43788 == null))))?(((((map__43788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43788):map__43788);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43788__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43788__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43788__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43788__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__43792_43829 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__43793_43830 = null;
var count__43794_43831 = (0);
var i__43795_43832 = (0);
while(true){
if((i__43795_43832 < count__43794_43831)){
var vec__43807_43835 = chunk__43793_43830.cljs$core$IIndexed$_nth$arity$2(null,i__43795_43832);
var k_43836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43807_43835,(0),null);
var cb_43837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43807_43835,(1),null);
try{var G__43811_43842 = cljs.core.deref(re_frame.trace.traces);
(cb_43837.cljs$core$IFn$_invoke$arity$1 ? cb_43837.cljs$core$IFn$_invoke$arity$1(G__43811_43842) : cb_43837.call(null,G__43811_43842));
}catch (e43810){var e_43843 = e43810;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_43836,"while storing",cljs.core.deref(re_frame.trace.traces),e_43843], 0));
}

var G__43847 = seq__43792_43829;
var G__43848 = chunk__43793_43830;
var G__43849 = count__43794_43831;
var G__43850 = (i__43795_43832 + (1));
seq__43792_43829 = G__43847;
chunk__43793_43830 = G__43848;
count__43794_43831 = G__43849;
i__43795_43832 = G__43850;
continue;
} else {
var temp__5735__auto___43851 = cljs.core.seq(seq__43792_43829);
if(temp__5735__auto___43851){
var seq__43792_43852__$1 = temp__5735__auto___43851;
if(cljs.core.chunked_seq_QMARK_(seq__43792_43852__$1)){
var c__4556__auto___43853 = cljs.core.chunk_first(seq__43792_43852__$1);
var G__43854 = cljs.core.chunk_rest(seq__43792_43852__$1);
var G__43855 = c__4556__auto___43853;
var G__43856 = cljs.core.count(c__4556__auto___43853);
var G__43857 = (0);
seq__43792_43829 = G__43854;
chunk__43793_43830 = G__43855;
count__43794_43831 = G__43856;
i__43795_43832 = G__43857;
continue;
} else {
var vec__43812_43858 = cljs.core.first(seq__43792_43852__$1);
var k_43859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43812_43858,(0),null);
var cb_43860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43812_43858,(1),null);
try{var G__43817_43861 = cljs.core.deref(re_frame.trace.traces);
(cb_43860.cljs$core$IFn$_invoke$arity$1 ? cb_43860.cljs$core$IFn$_invoke$arity$1(G__43817_43861) : cb_43860.call(null,G__43817_43861));
}catch (e43815){var e_43862 = e43815;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_43859,"while storing",cljs.core.deref(re_frame.trace.traces),e_43862], 0));
}

var G__43866 = cljs.core.next(seq__43792_43852__$1);
var G__43867 = null;
var G__43868 = (0);
var G__43869 = (0);
seq__43792_43829 = G__43866;
chunk__43793_43830 = G__43867;
count__43794_43831 = G__43868;
i__43795_43832 = G__43869;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
