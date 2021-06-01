goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__43154 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__43155 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__43155);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___43358 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___43358)){
var new_db_43359 = temp__5735__auto___43358;
var fexpr__43158_43360 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__43158_43360.cljs$core$IFn$_invoke$arity$1 ? fexpr__43158_43360.cljs$core$IFn$_invoke$arity$1(new_db_43359) : fexpr__43158_43360.call(null,new_db_43359));
} else {
}

var seq__43159 = cljs.core.seq(effects_without_db);
var chunk__43160 = null;
var count__43161 = (0);
var i__43162 = (0);
while(true){
if((i__43162 < count__43161)){
var vec__43191 = chunk__43160.cljs$core$IIndexed$_nth$arity$2(null,i__43162);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43191,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43191,(1),null);
var temp__5733__auto___43363 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43363)){
var effect_fn_43367 = temp__5733__auto___43363;
(effect_fn_43367.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43367.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43367.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43368 = seq__43159;
var G__43369 = chunk__43160;
var G__43370 = count__43161;
var G__43371 = (i__43162 + (1));
seq__43159 = G__43368;
chunk__43160 = G__43369;
count__43161 = G__43370;
i__43162 = G__43371;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43159);
if(temp__5735__auto__){
var seq__43159__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43159__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43159__$1);
var G__43373 = cljs.core.chunk_rest(seq__43159__$1);
var G__43374 = c__4556__auto__;
var G__43375 = cljs.core.count(c__4556__auto__);
var G__43376 = (0);
seq__43159 = G__43373;
chunk__43160 = G__43374;
count__43161 = G__43375;
i__43162 = G__43376;
continue;
} else {
var vec__43199 = cljs.core.first(seq__43159__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43199,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43199,(1),null);
var temp__5733__auto___43377 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43377)){
var effect_fn_43378 = temp__5733__auto___43377;
(effect_fn_43378.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43378.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43378.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43381 = cljs.core.next(seq__43159__$1);
var G__43382 = null;
var G__43383 = (0);
var G__43384 = (0);
seq__43159 = G__43381;
chunk__43160 = G__43382;
count__43161 = G__43383;
i__43162 = G__43384;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__42783__auto___43387 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__42784__auto___43388 = (end__42783__auto___43387 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__42784__auto___43388,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__42783__auto___43387);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__43154);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___43390 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___43390)){
var new_db_43392 = temp__5735__auto___43390;
var fexpr__43239_43394 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__43239_43394.cljs$core$IFn$_invoke$arity$1 ? fexpr__43239_43394.cljs$core$IFn$_invoke$arity$1(new_db_43392) : fexpr__43239_43394.call(null,new_db_43392));
} else {
}

var seq__43240 = cljs.core.seq(effects_without_db);
var chunk__43241 = null;
var count__43242 = (0);
var i__43243 = (0);
while(true){
if((i__43243 < count__43242)){
var vec__43279 = chunk__43241.cljs$core$IIndexed$_nth$arity$2(null,i__43243);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43279,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43279,(1),null);
var temp__5733__auto___43397 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43397)){
var effect_fn_43398 = temp__5733__auto___43397;
(effect_fn_43398.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43398.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43398.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43403 = seq__43240;
var G__43404 = chunk__43241;
var G__43405 = count__43242;
var G__43406 = (i__43243 + (1));
seq__43240 = G__43403;
chunk__43241 = G__43404;
count__43242 = G__43405;
i__43243 = G__43406;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43240);
if(temp__5735__auto__){
var seq__43240__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43240__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43240__$1);
var G__43409 = cljs.core.chunk_rest(seq__43240__$1);
var G__43410 = c__4556__auto__;
var G__43411 = cljs.core.count(c__4556__auto__);
var G__43412 = (0);
seq__43240 = G__43409;
chunk__43241 = G__43410;
count__43242 = G__43411;
i__43243 = G__43412;
continue;
} else {
var vec__43286 = cljs.core.first(seq__43240__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43286,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43286,(1),null);
var temp__5733__auto___43415 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43415)){
var effect_fn_43416 = temp__5733__auto___43415;
(effect_fn_43416.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43416.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43416.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43417 = cljs.core.next(seq__43240__$1);
var G__43418 = null;
var G__43419 = (0);
var G__43420 = (0);
seq__43240 = G__43417;
chunk__43241 = G__43418;
count__43242 = G__43419;
i__43243 = G__43420;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__43289){
var map__43290 = p__43289;
var map__43290__$1 = (((((!((map__43290 == null))))?(((((map__43290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43290):map__43290);
var effect = map__43290__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43290__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43290__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__43292 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__43293 = null;
var count__43294 = (0);
var i__43295 = (0);
while(true){
if((i__43295 < count__43294)){
var effect = chunk__43293.cljs$core$IIndexed$_nth$arity$2(null,i__43295);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__43432 = seq__43292;
var G__43433 = chunk__43293;
var G__43434 = count__43294;
var G__43435 = (i__43295 + (1));
seq__43292 = G__43432;
chunk__43293 = G__43433;
count__43294 = G__43434;
i__43295 = G__43435;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43292);
if(temp__5735__auto__){
var seq__43292__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43292__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43292__$1);
var G__43436 = cljs.core.chunk_rest(seq__43292__$1);
var G__43437 = c__4556__auto__;
var G__43438 = cljs.core.count(c__4556__auto__);
var G__43439 = (0);
seq__43292 = G__43436;
chunk__43293 = G__43437;
count__43294 = G__43438;
i__43295 = G__43439;
continue;
} else {
var effect = cljs.core.first(seq__43292__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__43440 = cljs.core.next(seq__43292__$1);
var G__43441 = null;
var G__43442 = (0);
var G__43443 = (0);
seq__43292 = G__43440;
chunk__43293 = G__43441;
count__43294 = G__43442;
i__43295 = G__43443;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__43302 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__43303 = null;
var count__43304 = (0);
var i__43305 = (0);
while(true){
if((i__43305 < count__43304)){
var vec__43313 = chunk__43303.cljs$core$IIndexed$_nth$arity$2(null,i__43305);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43313,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43313,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___43444 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43444)){
var effect_fn_43445 = temp__5733__auto___43444;
(effect_fn_43445.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43445.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43445.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__43446 = seq__43302;
var G__43447 = chunk__43303;
var G__43448 = count__43304;
var G__43449 = (i__43305 + (1));
seq__43302 = G__43446;
chunk__43303 = G__43447;
count__43304 = G__43448;
i__43305 = G__43449;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43302);
if(temp__5735__auto__){
var seq__43302__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43302__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43302__$1);
var G__43450 = cljs.core.chunk_rest(seq__43302__$1);
var G__43451 = c__4556__auto__;
var G__43452 = cljs.core.count(c__4556__auto__);
var G__43453 = (0);
seq__43302 = G__43450;
chunk__43303 = G__43451;
count__43304 = G__43452;
i__43305 = G__43453;
continue;
} else {
var vec__43316 = cljs.core.first(seq__43302__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43316,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43316,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___43454 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43454)){
var effect_fn_43455 = temp__5733__auto___43454;
(effect_fn_43455.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43455.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43455.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__43456 = cljs.core.next(seq__43302__$1);
var G__43457 = null;
var G__43458 = (0);
var G__43459 = (0);
seq__43302 = G__43456;
chunk__43303 = G__43457;
count__43304 = G__43458;
i__43305 = G__43459;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__43326 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__43327 = null;
var count__43328 = (0);
var i__43329 = (0);
while(true){
if((i__43329 < count__43328)){
var event = chunk__43327.cljs$core$IIndexed$_nth$arity$2(null,i__43329);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__43460 = seq__43326;
var G__43461 = chunk__43327;
var G__43462 = count__43328;
var G__43463 = (i__43329 + (1));
seq__43326 = G__43460;
chunk__43327 = G__43461;
count__43328 = G__43462;
i__43329 = G__43463;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43326);
if(temp__5735__auto__){
var seq__43326__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43326__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43326__$1);
var G__43464 = cljs.core.chunk_rest(seq__43326__$1);
var G__43465 = c__4556__auto__;
var G__43466 = cljs.core.count(c__4556__auto__);
var G__43467 = (0);
seq__43326 = G__43464;
chunk__43327 = G__43465;
count__43328 = G__43466;
i__43329 = G__43467;
continue;
} else {
var event = cljs.core.first(seq__43326__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__43468 = cljs.core.next(seq__43326__$1);
var G__43469 = null;
var G__43470 = (0);
var G__43471 = (0);
seq__43326 = G__43468;
chunk__43327 = G__43469;
count__43328 = G__43470;
i__43329 = G__43471;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__43335 = cljs.core.seq(value);
var chunk__43336 = null;
var count__43337 = (0);
var i__43338 = (0);
while(true){
if((i__43338 < count__43337)){
var event = chunk__43336.cljs$core$IIndexed$_nth$arity$2(null,i__43338);
clear_event(event);


var G__43473 = seq__43335;
var G__43474 = chunk__43336;
var G__43475 = count__43337;
var G__43476 = (i__43338 + (1));
seq__43335 = G__43473;
chunk__43336 = G__43474;
count__43337 = G__43475;
i__43338 = G__43476;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43335);
if(temp__5735__auto__){
var seq__43335__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43335__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43335__$1);
var G__43482 = cljs.core.chunk_rest(seq__43335__$1);
var G__43483 = c__4556__auto__;
var G__43484 = cljs.core.count(c__4556__auto__);
var G__43485 = (0);
seq__43335 = G__43482;
chunk__43336 = G__43483;
count__43337 = G__43484;
i__43338 = G__43485;
continue;
} else {
var event = cljs.core.first(seq__43335__$1);
clear_event(event);


var G__43487 = cljs.core.next(seq__43335__$1);
var G__43488 = null;
var G__43489 = (0);
var G__43490 = (0);
seq__43335 = G__43487;
chunk__43336 = G__43488;
count__43337 = G__43489;
i__43338 = G__43490;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
