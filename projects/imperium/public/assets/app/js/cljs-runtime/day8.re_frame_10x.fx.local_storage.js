goog.provide('day8.re_frame_10x.fx.local_storage');
day8.re_frame_10x.fx.local_storage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.fx.local_storage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.fx.local_storage.safe_key = (function day8$re_frame_10x$fx$local_storage$safe_key(key){

return [day8.re_frame_10x.fx.local_storage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.fx.local_storage.get = (function day8$re_frame_10x$fx$local_storage$get(var_args){
var G__46464 = arguments.length;
switch (G__46464) {
case 1:
return day8.re_frame_10x.fx.local_storage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.fx.local_storage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.fx.local_storage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.fx.local_storage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.fx.local_storage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.fx.local_storage.storage.get(day8.re_frame_10x.fx.local_storage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.fx.local_storage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.fx.local_storage.save_BANG_ = (function day8$re_frame_10x$fx$local_storage$save_BANG_(key,value){
return day8.re_frame_10x.fx.local_storage.storage.set(day8.re_frame_10x.fx.local_storage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.fx.local_storage.delete_all_keys_BANG_ = (function day8$re_frame_10x$fx$local_storage$delete_all_keys_BANG_(){
var seq__46465 = cljs.core.seq(Object.keys(localStorage));
var chunk__46466 = null;
var count__46467 = (0);
var i__46468 = (0);
while(true){
if((i__46468 < count__46467)){
var k = chunk__46466.cljs$core$IIndexed$_nth$arity$2(null,i__46468);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__46478 = seq__46465;
var G__46479 = chunk__46466;
var G__46480 = count__46467;
var G__46481 = (i__46468 + (1));
seq__46465 = G__46478;
chunk__46466 = G__46479;
count__46467 = G__46480;
i__46468 = G__46481;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46465);
if(temp__5735__auto__){
var seq__46465__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46465__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46465__$1);
var G__46482 = cljs.core.chunk_rest(seq__46465__$1);
var G__46483 = c__4556__auto__;
var G__46484 = cljs.core.count(c__4556__auto__);
var G__46485 = (0);
seq__46465 = G__46482;
chunk__46466 = G__46483;
count__46467 = G__46484;
i__46468 = G__46485;
continue;
} else {
var k = cljs.core.first(seq__46465__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__46486 = cljs.core.next(seq__46465__$1);
var G__46487 = null;
var G__46488 = (0);
var G__46489 = (0);
seq__46465 = G__46486;
chunk__46466 = G__46487;
count__46467 = G__46488;
i__46468 = G__46489;
continue;
}
} else {
return null;
}
}
break;
}
});
day8.re_frame_10x.fx.local_storage.after = (function day8$re_frame_10x$fx$local_storage$after(var_args){
var G__46473 = arguments.length;
switch (G__46473) {
case 1:
return day8.re_frame_10x.fx.local_storage.after.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___46491 = arguments.length;
var i__4737__auto___46492 = (0);
while(true){
if((i__4737__auto___46492 < len__4736__auto___46491)){
args_arr__4757__auto__.push((arguments[i__4737__auto___46492]));

var G__46493 = (i__4737__auto___46492 + (1));
i__4737__auto___46492 = G__46493;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return day8.re_frame_10x.fx.local_storage.after.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(day8.re_frame_10x.fx.local_storage.after.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.after((function (x){
return day8.re_frame_10x.fx.local_storage.save_BANG_(key,x);
}));
}));

(day8.re_frame_10x.fx.local_storage.after.cljs$core$IFn$_invoke$arity$variadic = (function (key,ks){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.after((function (x){
return cljs.core.run_BANG_((function (k){
var v = ((cljs.core.vector_QMARK_(k))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(x,k):day8.re_frame_10x.fx.local_storage.get.cljs$core$IFn$_invoke$arity$2(x,k));
return day8.re_frame_10x.fx.local_storage.save_BANG_(key,v);
}),ks);
}));
}));

/** @this {Function} */
(day8.re_frame_10x.fx.local_storage.after.cljs$lang$applyTo = (function (seq46471){
var G__46472 = cljs.core.first(seq46471);
var seq46471__$1 = cljs.core.next(seq46471);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46472,seq46471__$1);
}));

(day8.re_frame_10x.fx.local_storage.after.cljs$lang$maxFixedArity = (1));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_cofx(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","get","day8.re-frame-10x.fx.local-storage/get",-1118544055),(function (coeffects,p__46474){
var map__46475 = p__46474;
var map__46475__$1 = (((((!((map__46475 == null))))?(((((map__46475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46475):map__46475);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46475__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var or = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46475__$1,new cljs.core.Keyword(null,"or","or",235744169));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key),day8.re_frame_10x.fx.local_storage.get.cljs$core$IFn$_invoke$arity$2(key,or));
}));

//# sourceMappingURL=day8.re_frame_10x.fx.local_storage.js.map
