goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51199){
var map__51200 = p__51199;
var map__51200__$1 = (((((!((map__51200 == null))))?(((((map__51200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51200):map__51200);
var m = map__51200__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51200__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51200__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51213_51598 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51214_51599 = null;
var count__51215_51600 = (0);
var i__51216_51601 = (0);
while(true){
if((i__51216_51601 < count__51215_51600)){
var f_51605 = chunk__51214_51599.cljs$core$IIndexed$_nth$arity$2(null,i__51216_51601);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51605], 0));


var G__51606 = seq__51213_51598;
var G__51607 = chunk__51214_51599;
var G__51608 = count__51215_51600;
var G__51609 = (i__51216_51601 + (1));
seq__51213_51598 = G__51606;
chunk__51214_51599 = G__51607;
count__51215_51600 = G__51608;
i__51216_51601 = G__51609;
continue;
} else {
var temp__5735__auto___51613 = cljs.core.seq(seq__51213_51598);
if(temp__5735__auto___51613){
var seq__51213_51614__$1 = temp__5735__auto___51613;
if(cljs.core.chunked_seq_QMARK_(seq__51213_51614__$1)){
var c__4556__auto___51616 = cljs.core.chunk_first(seq__51213_51614__$1);
var G__51621 = cljs.core.chunk_rest(seq__51213_51614__$1);
var G__51622 = c__4556__auto___51616;
var G__51623 = cljs.core.count(c__4556__auto___51616);
var G__51624 = (0);
seq__51213_51598 = G__51621;
chunk__51214_51599 = G__51622;
count__51215_51600 = G__51623;
i__51216_51601 = G__51624;
continue;
} else {
var f_51640 = cljs.core.first(seq__51213_51614__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51640], 0));


var G__51641 = cljs.core.next(seq__51213_51614__$1);
var G__51642 = null;
var G__51643 = (0);
var G__51644 = (0);
seq__51213_51598 = G__51641;
chunk__51214_51599 = G__51642;
count__51215_51600 = G__51643;
i__51216_51601 = G__51644;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51645 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_51645], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_51645)))?cljs.core.second(arglists_51645):arglists_51645)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51234_51681 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51235_51682 = null;
var count__51236_51683 = (0);
var i__51237_51684 = (0);
while(true){
if((i__51237_51684 < count__51236_51683)){
var vec__51268_51686 = chunk__51235_51682.cljs$core$IIndexed$_nth$arity$2(null,i__51237_51684);
var name_51687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51268_51686,(0),null);
var map__51271_51688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51268_51686,(1),null);
var map__51271_51689__$1 = (((((!((map__51271_51688 == null))))?(((((map__51271_51688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51271_51688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51271_51688):map__51271_51688);
var doc_51690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51271_51689__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51271_51689__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51687], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51691], 0));

if(cljs.core.truth_(doc_51690)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51690], 0));
} else {
}


var G__51701 = seq__51234_51681;
var G__51702 = chunk__51235_51682;
var G__51703 = count__51236_51683;
var G__51704 = (i__51237_51684 + (1));
seq__51234_51681 = G__51701;
chunk__51235_51682 = G__51702;
count__51236_51683 = G__51703;
i__51237_51684 = G__51704;
continue;
} else {
var temp__5735__auto___51706 = cljs.core.seq(seq__51234_51681);
if(temp__5735__auto___51706){
var seq__51234_51707__$1 = temp__5735__auto___51706;
if(cljs.core.chunked_seq_QMARK_(seq__51234_51707__$1)){
var c__4556__auto___51708 = cljs.core.chunk_first(seq__51234_51707__$1);
var G__51709 = cljs.core.chunk_rest(seq__51234_51707__$1);
var G__51710 = c__4556__auto___51708;
var G__51711 = cljs.core.count(c__4556__auto___51708);
var G__51712 = (0);
seq__51234_51681 = G__51709;
chunk__51235_51682 = G__51710;
count__51236_51683 = G__51711;
i__51237_51684 = G__51712;
continue;
} else {
var vec__51285_51717 = cljs.core.first(seq__51234_51707__$1);
var name_51718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51285_51717,(0),null);
var map__51288_51719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51285_51717,(1),null);
var map__51288_51720__$1 = (((((!((map__51288_51719 == null))))?(((((map__51288_51719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51288_51719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51288_51719):map__51288_51719);
var doc_51721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51288_51720__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51288_51720__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51718], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51722], 0));

if(cljs.core.truth_(doc_51721)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51721], 0));
} else {
}


var G__51734 = cljs.core.next(seq__51234_51707__$1);
var G__51735 = null;
var G__51736 = (0);
var G__51737 = (0);
seq__51234_51681 = G__51734;
chunk__51235_51682 = G__51735;
count__51236_51683 = G__51736;
i__51237_51684 = G__51737;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__51299 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51300 = null;
var count__51301 = (0);
var i__51302 = (0);
while(true){
if((i__51302 < count__51301)){
var role = chunk__51300.cljs$core$IIndexed$_nth$arity$2(null,i__51302);
var temp__5735__auto___51748__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51748__$1)){
var spec_51749 = temp__5735__auto___51748__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51749)], 0));
} else {
}


var G__51750 = seq__51299;
var G__51751 = chunk__51300;
var G__51752 = count__51301;
var G__51753 = (i__51302 + (1));
seq__51299 = G__51750;
chunk__51300 = G__51751;
count__51301 = G__51752;
i__51302 = G__51753;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__51299);
if(temp__5735__auto____$1){
var seq__51299__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__51299__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51299__$1);
var G__51758 = cljs.core.chunk_rest(seq__51299__$1);
var G__51759 = c__4556__auto__;
var G__51760 = cljs.core.count(c__4556__auto__);
var G__51761 = (0);
seq__51299 = G__51758;
chunk__51300 = G__51759;
count__51301 = G__51760;
i__51302 = G__51761;
continue;
} else {
var role = cljs.core.first(seq__51299__$1);
var temp__5735__auto___51762__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51762__$2)){
var spec_51763 = temp__5735__auto___51762__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51763)], 0));
} else {
}


var G__51764 = cljs.core.next(seq__51299__$1);
var G__51765 = null;
var G__51766 = (0);
var G__51767 = (0);
seq__51299 = G__51764;
chunk__51300 = G__51765;
count__51301 = G__51766;
i__51302 = G__51767;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__51772 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51773 = cljs.core.ex_cause(t);
via = G__51772;
t = G__51773;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__51348 = datafied_throwable;
var map__51348__$1 = (((((!((map__51348 == null))))?(((((map__51348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51348):map__51348);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51348__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51348__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51348__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__51349 = cljs.core.last(via);
var map__51349__$1 = (((((!((map__51349 == null))))?(((((map__51349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51349):map__51349);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51349__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51349__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51349__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__51350 = data;
var map__51350__$1 = (((((!((map__51350 == null))))?(((((map__51350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51350):map__51350);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51350__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51350__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51350__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__51351 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__51351__$1 = (((((!((map__51351 == null))))?(((((map__51351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51351):map__51351);
var top_data = map__51351__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51351__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__51359 = phase;
var G__51359__$1 = (((G__51359 instanceof cljs.core.Keyword))?G__51359.fqn:null);
switch (G__51359__$1) {
case "read-source":
var map__51361 = data;
var map__51361__$1 = (((((!((map__51361 == null))))?(((((map__51361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51361):map__51361);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51361__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51361__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__51363 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__51363__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51363,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51363);
var G__51363__$2 = (cljs.core.truth_((function (){var fexpr__51364 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51364.cljs$core$IFn$_invoke$arity$1 ? fexpr__51364.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51364.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51363__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51363__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51363__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51363__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__51370 = top_data;
var G__51370__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51370,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51370);
var G__51370__$2 = (cljs.core.truth_((function (){var fexpr__51371 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51371.cljs$core$IFn$_invoke$arity$1 ? fexpr__51371.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51371.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51370__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51370__$1);
var G__51370__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51370__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51370__$2);
var G__51370__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51370__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51370__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51370__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51370__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__51372 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51372,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51372,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51372,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51372,(3),null);
var G__51379 = top_data;
var G__51379__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51379,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__51379);
var G__51379__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51379__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__51379__$1);
var G__51379__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51379__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__51379__$2);
var G__51379__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51379__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51379__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51379__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51379__$4;
}

break;
case "execution":
var vec__51389 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51389,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51389,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51389,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51389,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51343_SHARP_){
var or__4126__auto__ = (p1__51343_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__51404 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51404.cljs$core$IFn$_invoke$arity$1 ? fexpr__51404.cljs$core$IFn$_invoke$arity$1(p1__51343_SHARP_) : fexpr__51404.call(null,p1__51343_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__51408 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__51408__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51408,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__51408);
var G__51408__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51408__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51408__$1);
var G__51408__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51408__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__51408__$2);
var G__51408__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51408__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__51408__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51408__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51408__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51359__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__51454){
var map__51455 = p__51454;
var map__51455__$1 = (((((!((map__51455 == null))))?(((((map__51455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51455):map__51455);
var triage_data = map__51455__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51455__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51455__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51455__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51455__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51455__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51455__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51455__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51455__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__51479 = phase;
var G__51479__$1 = (((G__51479 instanceof cljs.core.Keyword))?G__51479.fqn:null);
switch (G__51479__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__51487 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__51488 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51489 = loc;
var G__51491 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51492_51847 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51493_51848 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51494_51849 = true;
var _STAR_print_fn_STAR__temp_val__51495_51850 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51494_51849);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51495_51850);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51436_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51436_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51493_51848);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51492_51847);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51487,G__51488,G__51489,G__51491) : format.call(null,G__51487,G__51488,G__51489,G__51491));

break;
case "macroexpansion":
var G__51507 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__51508 = cause_type;
var G__51509 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51510 = loc;
var G__51511 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51507,G__51508,G__51509,G__51510,G__51511) : format.call(null,G__51507,G__51508,G__51509,G__51510,G__51511));

break;
case "compile-syntax-check":
var G__51512 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__51513 = cause_type;
var G__51514 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51515 = loc;
var G__51516 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51512,G__51513,G__51514,G__51515,G__51516) : format.call(null,G__51512,G__51513,G__51514,G__51515,G__51516));

break;
case "compilation":
var G__51517 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__51518 = cause_type;
var G__51519 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51520 = loc;
var G__51521 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51517,G__51518,G__51519,G__51520,G__51521) : format.call(null,G__51517,G__51518,G__51519,G__51520,G__51521));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__51522 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__51523 = symbol;
var G__51524 = loc;
var G__51525 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51526_51857 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51527_51858 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51528_51859 = true;
var _STAR_print_fn_STAR__temp_val__51529_51860 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51528_51859);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51529_51860);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51447_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51447_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51527_51858);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51526_51857);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51522,G__51523,G__51524,G__51525) : format.call(null,G__51522,G__51523,G__51524,G__51525));
} else {
var G__51534 = "Execution error%s at %s(%s).\n%s\n";
var G__51535 = cause_type;
var G__51536 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51537 = loc;
var G__51538 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51534,G__51535,G__51536,G__51537,G__51538) : format.call(null,G__51534,G__51535,G__51536,G__51537,G__51538));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51479__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
