goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__44087 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__44088 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__44088);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___44181 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___44181)){
var new_db_44182 = temp__5735__auto___44181;
var fexpr__44091_44183 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__44091_44183.cljs$core$IFn$_invoke$arity$1 ? fexpr__44091_44183.cljs$core$IFn$_invoke$arity$1(new_db_44182) : fexpr__44091_44183.call(null,new_db_44182));
} else {
}

var seq__44092 = cljs.core.seq(effects_without_db);
var chunk__44093 = null;
var count__44094 = (0);
var i__44095 = (0);
while(true){
if((i__44095 < count__44094)){
var vec__44105 = chunk__44093.cljs$core$IIndexed$_nth$arity$2(null,i__44095);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44105,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44105,(1),null);
var temp__5733__auto___44184 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44184)){
var effect_fn_44185 = temp__5733__auto___44184;
(effect_fn_44185.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44185.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44185.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44186 = seq__44092;
var G__44187 = chunk__44093;
var G__44188 = count__44094;
var G__44189 = (i__44095 + (1));
seq__44092 = G__44186;
chunk__44093 = G__44187;
count__44094 = G__44188;
i__44095 = G__44189;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44092);
if(temp__5735__auto__){
var seq__44092__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44092__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44092__$1);
var G__44190 = cljs.core.chunk_rest(seq__44092__$1);
var G__44191 = c__4556__auto__;
var G__44192 = cljs.core.count(c__4556__auto__);
var G__44193 = (0);
seq__44092 = G__44190;
chunk__44093 = G__44191;
count__44094 = G__44192;
i__44095 = G__44193;
continue;
} else {
var vec__44109 = cljs.core.first(seq__44092__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44109,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44109,(1),null);
var temp__5733__auto___44194 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44194)){
var effect_fn_44195 = temp__5733__auto___44194;
(effect_fn_44195.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44195.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44195.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44196 = cljs.core.next(seq__44092__$1);
var G__44197 = null;
var G__44198 = (0);
var G__44199 = (0);
seq__44092 = G__44196;
chunk__44093 = G__44197;
count__44094 = G__44198;
i__44095 = G__44199;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__43765__auto___44201 = re_frame.interop.now();
var duration__43766__auto___44202 = (end__43765__auto___44201 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__43766__auto___44202,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__43765__auto___44201);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__44087);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___44204 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___44204)){
var new_db_44205 = temp__5735__auto___44204;
var fexpr__44113_44206 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__44113_44206.cljs$core$IFn$_invoke$arity$1 ? fexpr__44113_44206.cljs$core$IFn$_invoke$arity$1(new_db_44205) : fexpr__44113_44206.call(null,new_db_44205));
} else {
}

var seq__44114 = cljs.core.seq(effects_without_db);
var chunk__44115 = null;
var count__44116 = (0);
var i__44117 = (0);
while(true){
if((i__44117 < count__44116)){
var vec__44127 = chunk__44115.cljs$core$IIndexed$_nth$arity$2(null,i__44117);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44127,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44127,(1),null);
var temp__5733__auto___44207 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44207)){
var effect_fn_44208 = temp__5733__auto___44207;
(effect_fn_44208.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44208.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44208.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44210 = seq__44114;
var G__44211 = chunk__44115;
var G__44212 = count__44116;
var G__44213 = (i__44117 + (1));
seq__44114 = G__44210;
chunk__44115 = G__44211;
count__44116 = G__44212;
i__44117 = G__44213;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44114);
if(temp__5735__auto__){
var seq__44114__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44114__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44114__$1);
var G__44215 = cljs.core.chunk_rest(seq__44114__$1);
var G__44216 = c__4556__auto__;
var G__44217 = cljs.core.count(c__4556__auto__);
var G__44218 = (0);
seq__44114 = G__44215;
chunk__44115 = G__44216;
count__44116 = G__44217;
i__44117 = G__44218;
continue;
} else {
var vec__44130 = cljs.core.first(seq__44114__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44130,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44130,(1),null);
var temp__5733__auto___44219 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44219)){
var effect_fn_44220 = temp__5733__auto___44219;
(effect_fn_44220.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44220.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44220.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44221 = cljs.core.next(seq__44114__$1);
var G__44222 = null;
var G__44223 = (0);
var G__44224 = (0);
seq__44114 = G__44221;
chunk__44115 = G__44222;
count__44116 = G__44223;
i__44117 = G__44224;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__44134){
var map__44135 = p__44134;
var map__44135__$1 = (((((!((map__44135 == null))))?(((((map__44135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44135):map__44135);
var effect = map__44135__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44135__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44135__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__44137 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__44138 = null;
var count__44139 = (0);
var i__44140 = (0);
while(true){
if((i__44140 < count__44139)){
var effect = chunk__44138.cljs$core$IIndexed$_nth$arity$2(null,i__44140);
re_frame.fx.dispatch_later(effect);


var G__44227 = seq__44137;
var G__44228 = chunk__44138;
var G__44229 = count__44139;
var G__44230 = (i__44140 + (1));
seq__44137 = G__44227;
chunk__44138 = G__44228;
count__44139 = G__44229;
i__44140 = G__44230;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44137);
if(temp__5735__auto__){
var seq__44137__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44137__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44137__$1);
var G__44231 = cljs.core.chunk_rest(seq__44137__$1);
var G__44232 = c__4556__auto__;
var G__44233 = cljs.core.count(c__4556__auto__);
var G__44234 = (0);
seq__44137 = G__44231;
chunk__44138 = G__44232;
count__44139 = G__44233;
i__44140 = G__44234;
continue;
} else {
var effect = cljs.core.first(seq__44137__$1);
re_frame.fx.dispatch_later(effect);


var G__44235 = cljs.core.next(seq__44137__$1);
var G__44236 = null;
var G__44237 = (0);
var G__44238 = (0);
seq__44137 = G__44235;
chunk__44138 = G__44236;
count__44139 = G__44237;
i__44140 = G__44238;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__44141 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__44142 = null;
var count__44143 = (0);
var i__44144 = (0);
while(true){
if((i__44144 < count__44143)){
var vec__44152 = chunk__44142.cljs$core$IIndexed$_nth$arity$2(null,i__44144);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44152,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44152,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___44241 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44241)){
var effect_fn_44242 = temp__5733__auto___44241;
(effect_fn_44242.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44242.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44242.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__44243 = seq__44141;
var G__44244 = chunk__44142;
var G__44245 = count__44143;
var G__44246 = (i__44144 + (1));
seq__44141 = G__44243;
chunk__44142 = G__44244;
count__44143 = G__44245;
i__44144 = G__44246;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44141);
if(temp__5735__auto__){
var seq__44141__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44141__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44141__$1);
var G__44247 = cljs.core.chunk_rest(seq__44141__$1);
var G__44248 = c__4556__auto__;
var G__44249 = cljs.core.count(c__4556__auto__);
var G__44250 = (0);
seq__44141 = G__44247;
chunk__44142 = G__44248;
count__44143 = G__44249;
i__44144 = G__44250;
continue;
} else {
var vec__44157 = cljs.core.first(seq__44141__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44157,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44157,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___44252 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44252)){
var effect_fn_44254 = temp__5733__auto___44252;
(effect_fn_44254.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44254.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44254.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__44255 = cljs.core.next(seq__44141__$1);
var G__44256 = null;
var G__44257 = (0);
var G__44258 = (0);
seq__44141 = G__44255;
chunk__44142 = G__44256;
count__44143 = G__44257;
i__44144 = G__44258;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__44160 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__44161 = null;
var count__44162 = (0);
var i__44163 = (0);
while(true){
if((i__44163 < count__44162)){
var event = chunk__44161.cljs$core$IIndexed$_nth$arity$2(null,i__44163);
re_frame.router.dispatch(event);


var G__44259 = seq__44160;
var G__44260 = chunk__44161;
var G__44261 = count__44162;
var G__44262 = (i__44163 + (1));
seq__44160 = G__44259;
chunk__44161 = G__44260;
count__44162 = G__44261;
i__44163 = G__44262;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44160);
if(temp__5735__auto__){
var seq__44160__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44160__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44160__$1);
var G__44263 = cljs.core.chunk_rest(seq__44160__$1);
var G__44264 = c__4556__auto__;
var G__44265 = cljs.core.count(c__4556__auto__);
var G__44266 = (0);
seq__44160 = G__44263;
chunk__44161 = G__44264;
count__44162 = G__44265;
i__44163 = G__44266;
continue;
} else {
var event = cljs.core.first(seq__44160__$1);
re_frame.router.dispatch(event);


var G__44267 = cljs.core.next(seq__44160__$1);
var G__44268 = null;
var G__44269 = (0);
var G__44270 = (0);
seq__44160 = G__44267;
chunk__44161 = G__44268;
count__44162 = G__44269;
i__44163 = G__44270;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__44165 = cljs.core.seq(value);
var chunk__44166 = null;
var count__44167 = (0);
var i__44168 = (0);
while(true){
if((i__44168 < count__44167)){
var event = chunk__44166.cljs$core$IIndexed$_nth$arity$2(null,i__44168);
clear_event(event);


var G__44273 = seq__44165;
var G__44274 = chunk__44166;
var G__44275 = count__44167;
var G__44276 = (i__44168 + (1));
seq__44165 = G__44273;
chunk__44166 = G__44274;
count__44167 = G__44275;
i__44168 = G__44276;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44165);
if(temp__5735__auto__){
var seq__44165__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44165__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44165__$1);
var G__44277 = cljs.core.chunk_rest(seq__44165__$1);
var G__44278 = c__4556__auto__;
var G__44279 = cljs.core.count(c__4556__auto__);
var G__44280 = (0);
seq__44165 = G__44277;
chunk__44166 = G__44278;
count__44167 = G__44279;
i__44168 = G__44280;
continue;
} else {
var event = cljs.core.first(seq__44165__$1);
clear_event(event);


var G__44281 = cljs.core.next(seq__44165__$1);
var G__44282 = null;
var G__44283 = (0);
var G__44284 = (0);
seq__44165 = G__44281;
chunk__44166 = G__44282;
count__44167 = G__44283;
i__44168 = G__44284;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
