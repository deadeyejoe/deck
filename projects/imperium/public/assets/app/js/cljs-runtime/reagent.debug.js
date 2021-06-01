goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__42760__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42760 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42761__i = 0, G__42761__a = new Array(arguments.length -  0);
while (G__42761__i < G__42761__a.length) {G__42761__a[G__42761__i] = arguments[G__42761__i + 0]; ++G__42761__i;}
  args = new cljs.core.IndexedSeq(G__42761__a,0,null);
} 
return G__42760__delegate.call(this,args);};
G__42760.cljs$lang$maxFixedArity = 0;
G__42760.cljs$lang$applyTo = (function (arglist__42762){
var args = cljs.core.seq(arglist__42762);
return G__42760__delegate(args);
});
G__42760.cljs$core$IFn$_invoke$arity$variadic = G__42760__delegate;
return G__42760;
})()
);

(o.error = (function() { 
var G__42764__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42764 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42765__i = 0, G__42765__a = new Array(arguments.length -  0);
while (G__42765__i < G__42765__a.length) {G__42765__a[G__42765__i] = arguments[G__42765__i + 0]; ++G__42765__i;}
  args = new cljs.core.IndexedSeq(G__42765__a,0,null);
} 
return G__42764__delegate.call(this,args);};
G__42764.cljs$lang$maxFixedArity = 0;
G__42764.cljs$lang$applyTo = (function (arglist__42766){
var args = cljs.core.seq(arglist__42766);
return G__42764__delegate(args);
});
G__42764.cljs$core$IFn$_invoke$arity$variadic = G__42764__delegate;
return G__42764;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
