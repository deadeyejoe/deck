goog.provide('cljs.pprint');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47091 = arguments.length;
var i__4737__auto___47093 = (0);
while(true){
if((i__4737__auto___47093 < len__4736__auto___47091)){
args__4742__auto__.push((arguments[i__4737__auto___47093]));

var G__47095 = (i__4737__auto___47093 + (1));
i__4737__auto___47093 = G__47095;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
}));

(cljs.pprint.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.print.cljs$lang$applyTo = (function (seq42806){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42806));
}));

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47101 = arguments.length;
var i__4737__auto___47103 = (0);
while(true){
if((i__4737__auto___47103 < len__4736__auto___47101)){
args__4742__auto__.push((arguments[i__4737__auto___47103]));

var G__47104 = (i__4737__auto___47103 + (1));
i__4737__auto___47103 = G__47104;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
}));

(cljs.pprint.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.println.cljs$lang$applyTo = (function (seq42813){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42813));
}));

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__42821 = cljs.core._EQ_;
var expr__42822 = c;
if(cljs.core.truth_((function (){var G__42824 = "\b";
var G__42825 = expr__42822;
return (pred__42821.cljs$core$IFn$_invoke$arity$2 ? pred__42821.cljs$core$IFn$_invoke$arity$2(G__42824,G__42825) : pred__42821.call(null,G__42824,G__42825));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__42826 = " ";
var G__42827 = expr__42822;
return (pred__42821.cljs$core$IFn$_invoke$arity$2 ? pred__42821.cljs$core$IFn$_invoke$arity$2(G__42826,G__42827) : pred__42821.call(null,G__42826,G__42827));
})())){
return "\\space";
} else {
if(cljs.core.truth_((function (){var G__42828 = "\t";
var G__42829 = expr__42822;
return (pred__42821.cljs$core$IFn$_invoke$arity$2 ? pred__42821.cljs$core$IFn$_invoke$arity$2(G__42828,G__42829) : pred__42821.call(null,G__42828,G__42829));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__42830 = "\n";
var G__42831 = expr__42822;
return (pred__42821.cljs$core$IFn$_invoke$arity$2 ? pred__42821.cljs$core$IFn$_invoke$arity$2(G__42830,G__42831) : pred__42821.call(null,G__42830,G__42831));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__42832 = "\f";
var G__42833 = expr__42822;
return (pred__42821.cljs$core$IFn$_invoke$arity$2 ? pred__42821.cljs$core$IFn$_invoke$arity$2(G__42832,G__42833) : pred__42821.call(null,G__42832,G__42833));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__42834 = "\r";
var G__42835 = expr__42822;
return (pred__42821.cljs$core$IFn$_invoke$arity$2 ? pred__42821.cljs$core$IFn$_invoke$arity$2(G__42834,G__42835) : pred__42821.call(null,G__42834,G__42835));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__42836 = "\"";
var G__42837 = expr__42822;
return (pred__42821.cljs$core$IFn$_invoke$arity$2 ? pred__42821.cljs$core$IFn$_invoke$arity$2(G__42836,G__42837) : pred__42821.call(null,G__42836,G__42837));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__42838 = "\\";
var G__42839 = expr__42822;
return (pred__42821.cljs$core$IFn$_invoke$arity$2 ? pred__42821.cljs$core$IFn$_invoke$arity$2(G__42838,G__42839) : pred__42821.call(null,G__42838,G__42839));
})())){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47125 = arguments.length;
var i__4737__auto___47126 = (0);
while(true){
if((i__4737__auto___47126 < len__4736__auto___47125)){
args__4742__auto__.push((arguments[i__4737__auto___47126]));

var G__47129 = (i__4737__auto___47126 + (1));
i__4737__auto___47126 = G__47129;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
}));

(cljs.pprint.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.pr.cljs$lang$applyTo = (function (seq42844){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42844));
}));

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47136 = arguments.length;
var i__4737__auto___47137 = (0);
while(true){
if((i__4737__auto___47137 < len__4736__auto___47136)){
args__4742__auto__.push((arguments[i__4737__auto___47137]));

var G__47140 = (i__4737__auto___47137 + (1));
i__4737__auto___47137 = G__47140;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
}));

(cljs.pprint.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.prn.cljs$lang$applyTo = (function (seq42851){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42851));
}));

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && ((!(isNaN(n)))) && ((!((n === Infinity)))) && ((!((parseFloat(n) === parseInt(n,(10)))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__42870 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42870,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42870,(1),null);
var G__47155 = new_context;
var G__47156 = remainder;
var G__47157 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__47155;
lis__$1 = G__47156;
acc = G__47157;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__42884 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42884,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42884,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__47171 = new_context;
var G__47172 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__47171;
acc = G__47172;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__42898 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42898,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42898,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42898,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__47184 = new_context;
var G__47185 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__47184;
acc = G__47185;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs$pprint$unzip_map_$_iter__42904(s__42905){
return (new cljs.core.LazySeq(null,(function (){
var s__42905__$1 = s__42905;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42905__$1);
if(temp__5735__auto__){
var s__42905__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42905__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42905__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42907 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42906 = (0);
while(true){
if((i__42906 < size__4528__auto__)){
var vec__42910 = cljs.core._nth(c__4527__auto__,i__42906);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42910,(0),null);
var vec__42913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42910,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42913,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42913,(1),null);
cljs.core.chunk_append(b__42907,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__47192 = (i__42906 + (1));
i__42906 = G__47192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42907),cljs$pprint$unzip_map_$_iter__42904(cljs.core.chunk_rest(s__42905__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42907),null);
}
} else {
var vec__42917 = cljs.core.first(s__42905__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42917,(0),null);
var vec__42920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42917,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42920,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42920,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__42904(cljs.core.rest(s__42905__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs$pprint$unzip_map_$_iter__42923(s__42924){
return (new cljs.core.LazySeq(null,(function (){
var s__42924__$1 = s__42924;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42924__$1);
if(temp__5735__auto__){
var s__42924__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42924__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42924__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42926 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42925 = (0);
while(true){
if((i__42925 < size__4528__auto__)){
var vec__42930 = cljs.core._nth(c__4527__auto__,i__42925);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42930,(0),null);
var vec__42933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42930,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42933,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42933,(1),null);
cljs.core.chunk_append(b__42926,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__47195 = (i__42925 + (1));
i__42925 = G__47195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42926),cljs$pprint$unzip_map_$_iter__42923(cljs.core.chunk_rest(s__42924__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42926),null);
}
} else {
var vec__42937 = cljs.core.first(s__42924__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42937,(0),null);
var vec__42940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42937,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42940,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42940,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__42923(cljs.core.rest(s__42924__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs$pprint$tuple_map_$_iter__42947(s__42948){
return (new cljs.core.LazySeq(null,(function (){
var s__42948__$1 = s__42948;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42948__$1);
if(temp__5735__auto__){
var s__42948__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42948__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42948__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42950 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42949 = (0);
while(true){
if((i__42949 < size__4528__auto__)){
var vec__42958 = cljs.core._nth(c__4527__auto__,i__42949);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42958,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42958,(1),null);
cljs.core.chunk_append(b__42950,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__47206 = (i__42949 + (1));
i__42949 = G__47206;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42950),cljs$pprint$tuple_map_$_iter__42947(cljs.core.chunk_rest(s__42948__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42950),null);
}
} else {
var vec__42961 = cljs.core.first(s__42948__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42961,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42961,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__42947(cljs.core.rest(s__42948__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__47211 = (n - (1));
n = G__47211;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__47221 = (n + (1));
n = G__47221;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__42969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__42969) : test.call(null,G__42969));
})())))){
return pos;
} else {
var G__47224 = (pos + (1));
pos = G__47224;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

var cljs$pprint$IPrettyFlush$_ppflush$dyn_47225 = (function (pp){
var x__4428__auto__ = (((pp == null))?null:pp);
var m__4429__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4429__auto__.call(null,pp));
} else {
var m__4426__auto__ = (cljs.pprint._ppflush["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4426__auto__.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
});
cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((((!((pp == null)))) && ((!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
return cljs$pprint$IPrettyFlush$_ppflush$dyn_47225(pp);
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__42971 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__42971) : sym.call(null,G__42971));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__42989 = arguments.length;
switch (G__42989) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
}));

(cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint42994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint42994 = (function (writer,max_columns,fields,meta42995){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta42995 = meta42995;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint42994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42996,meta42995__$1){
var self__ = this;
var _42996__$1 = this;
return (new cljs.pprint.t_cljs$pprint42994(self__.writer,self__.max_columns,self__.fields,meta42995__$1));
}));

(cljs.pprint.t_cljs$pprint42994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42996){
var self__ = this;
var _42996__$1 = this;
return self__.meta42995;
}));

(cljs.pprint.t_cljs$pprint42994.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
}));

(cljs.pprint.t_cljs$pprint42994.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint42994.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__43001 = cljs.core._EQ_;
var expr__43002 = cljs.core.type(x);
if(cljs.core.truth_((pred__43001.cljs$core$IFn$_invoke$arity$2 ? pred__43001.cljs$core$IFn$_invoke$arity$2(String,expr__43002) : pred__43001.call(null,String,expr__43002)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42983_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__42983_SHARP_,"\n");
}),s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_((pred__43001.cljs$core$IFn$_invoke$arity$2 ? pred__43001.cljs$core$IFn$_invoke$arity$2(Number,expr__43002) : pred__43001.call(null,Number,expr__43002)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43002)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint42994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta42995","meta42995",1879966233,null)], null);
}));

(cljs.pprint.t_cljs$pprint42994.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint42994.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint42994");

(cljs.pprint.t_cljs$pprint42994.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint42994");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint42994.
 */
cljs.pprint.__GT_t_cljs$pprint42994 = (function cljs$pprint$__GT_t_cljs$pprint42994(writer__$1,max_columns__$1,fields__$1,meta42995){
return (new cljs.pprint.t_cljs$pprint42994(writer__$1,max_columns__$1,fields__$1,meta42995));
});

}

return (new cljs.pprint.t_cljs$pprint42994(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2);


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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k43005,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__43014 = k43005;
var G__43014__$1 = (((G__43014 instanceof cljs.core.Keyword))?G__43014.fqn:null);
switch (G__43014__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43005,else__4383__auto__);

}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__43015){
var vec__43016 = p__43015;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43016,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43016,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.logical-block{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43004){
var self__ = this;
var G__43004__$1 = this;
return (new cljs.core.RecordIter((0),G__43004__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43006,other43007){
var self__ = this;
var this43006__$1 = this;
return (((!((other43007 == null)))) && ((this43006__$1.constructor === other43007.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43006__$1.parent,other43007.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43006__$1.section,other43007.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43006__$1.start_col,other43007.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43006__$1.indent,other43007.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43006__$1.done_nl,other43007.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43006__$1.intra_block_nl,other43007.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43006__$1.prefix,other43007.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43006__$1.per_line_prefix,other43007.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43006__$1.suffix,other43007.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43006__$1.logical_block_callback,other43007.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43006__$1.__extmap,other43007.__extmap)));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__43004){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__43036 = cljs.core.keyword_identical_QMARK_;
var expr__43037 = k__4388__auto__;
if(cljs.core.truth_((pred__43036.cljs$core$IFn$_invoke$arity$2 ? pred__43036.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),expr__43037) : pred__43036.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__43037)))){
return (new cljs.pprint.logical_block(G__43004,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43036.cljs$core$IFn$_invoke$arity$2 ? pred__43036.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"section","section",-300141526),expr__43037) : pred__43036.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__43037)))){
return (new cljs.pprint.logical_block(self__.parent,G__43004,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43036.cljs$core$IFn$_invoke$arity$2 ? pred__43036.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__43037) : pred__43036.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__43037)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__43004,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43036.cljs$core$IFn$_invoke$arity$2 ? pred__43036.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indent","indent",-148200125),expr__43037) : pred__43036.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__43037)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__43004,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43036.cljs$core$IFn$_invoke$arity$2 ? pred__43036.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__43037) : pred__43036.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__43037)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__43004,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43036.cljs$core$IFn$_invoke$arity$2 ? pred__43036.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__43037) : pred__43036.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__43037)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__43004,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43036.cljs$core$IFn$_invoke$arity$2 ? pred__43036.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__43037) : pred__43036.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__43037)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__43004,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43036.cljs$core$IFn$_invoke$arity$2 ? pred__43036.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__43037) : pred__43036.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__43037)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__43004,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43036.cljs$core$IFn$_invoke$arity$2 ? pred__43036.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__43037) : pred__43036.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__43037)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__43004,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43036.cljs$core$IFn$_invoke$arity$2 ? pred__43036.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__43037) : pred__43036.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__43037)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__43004,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__43004),null));
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

(cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"section","section",-300141526),self__.section,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback,null))], null),self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__43004){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__43004,self__.__extmap,self__.__hash));
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
}));

(cljs.pprint.logical_block.cljs$lang$type = true);

(cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
}));

(cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/logical-block");
}));

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__43010){
var extmap__4419__auto__ = (function (){var G__43049 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43010,new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], 0));
if(cljs.core.record_QMARK_(G__43010)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43049);
} else {
return G__43049;
}
})();
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__43010),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__43010),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__43010),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__43010),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__43010),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__43010),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__43010),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__43010),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__43010),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__43010),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__47392 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__47392;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k43060,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__43088 = k43060;
var G__43088__$1 = (((G__43088 instanceof cljs.core.Keyword))?G__43088.fqn:null);
switch (G__43088__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43060,else__4383__auto__);

}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__43090){
var vec__43091 = p__43090;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43091,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43091,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43059){
var self__ = this;
var G__43059__$1 = this;
return (new cljs.core.RecordIter((0),G__43059__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43062,other43063){
var self__ = this;
var this43062__$1 = this;
return (((!((other43063 == null)))) && ((this43062__$1.constructor === other43063.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43062__$1.type_tag,other43063.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43062__$1.data,other43063.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43062__$1.trailing_white_space,other43063.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43062__$1.start_pos,other43063.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43062__$1.end_pos,other43063.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43062__$1.__extmap,other43063.__extmap)));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__43059){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__43108 = cljs.core.keyword_identical_QMARK_;
var expr__43109 = k__4388__auto__;
if(cljs.core.truth_((pred__43108.cljs$core$IFn$_invoke$arity$2 ? pred__43108.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43109) : pred__43108.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43109)))){
return (new cljs.pprint.buffer_blob(G__43059,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43108.cljs$core$IFn$_invoke$arity$2 ? pred__43108.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__43109) : pred__43108.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__43109)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__43059,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43108.cljs$core$IFn$_invoke$arity$2 ? pred__43108.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__43109) : pred__43108.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__43109)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__43059,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43108.cljs$core$IFn$_invoke$arity$2 ? pred__43108.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43109) : pred__43108.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43109)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__43059,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43108.cljs$core$IFn$_invoke$arity$2 ? pred__43108.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43109) : pred__43108.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43109)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__43059,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__43059),null));
}
}
}
}
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__43059){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__43059,self__.__extmap,self__.__hash));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.buffer_blob.cljs$lang$type = true);

(cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
}));

(cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/buffer-blob");
}));

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__43065){
var extmap__4419__auto__ = (function (){var G__43119 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43065,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__43065)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43119);
} else {
return G__43119;
}
})();
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__43065),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__43065),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__43065),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__43065),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__43065),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__42724__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__42724__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k43123,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__43136 = k43123;
var G__43136__$1 = (((G__43136 instanceof cljs.core.Keyword))?G__43136.fqn:null);
switch (G__43136__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43123,else__4383__auto__);

}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__43140){
var vec__43148 = p__43140;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43148,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43148,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.nl-t{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43122){
var self__ = this;
var G__43122__$1 = this;
return (new cljs.core.RecordIter((0),G__43122__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43124,other43125){
var self__ = this;
var this43124__$1 = this;
return (((!((other43125 == null)))) && ((this43124__$1.constructor === other43125.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43124__$1.type_tag,other43125.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43124__$1.type,other43125.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43124__$1.logical_block,other43125.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43124__$1.start_pos,other43125.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43124__$1.end_pos,other43125.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43124__$1.__extmap,other43125.__extmap)));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__43122){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__43173 = cljs.core.keyword_identical_QMARK_;
var expr__43174 = k__4388__auto__;
if(cljs.core.truth_((pred__43173.cljs$core$IFn$_invoke$arity$2 ? pred__43173.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43174) : pred__43173.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43174)))){
return (new cljs.pprint.nl_t(G__43122,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43173.cljs$core$IFn$_invoke$arity$2 ? pred__43173.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__43174) : pred__43173.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__43174)))){
return (new cljs.pprint.nl_t(self__.type_tag,G__43122,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43173.cljs$core$IFn$_invoke$arity$2 ? pred__43173.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__43174) : pred__43173.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__43174)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__43122,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43173.cljs$core$IFn$_invoke$arity$2 ? pred__43173.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43174) : pred__43173.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43174)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__43122,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43173.cljs$core$IFn$_invoke$arity$2 ? pred__43173.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43174) : pred__43173.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43174)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__43122,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__43122),null));
}
}
}
}
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__43122){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__43122,self__.__extmap,self__.__hash));
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.nl_t.cljs$lang$type = true);

(cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
}));

(cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/nl-t");
}));

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__43126){
var extmap__4419__auto__ = (function (){var G__43187 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43126,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__43126)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43187);
} else {
return G__43187;
}
})();
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__43126),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__43126),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__43126),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__43126),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__43126),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__42724__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__42724__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k43190,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__43195 = k43190;
var G__43195__$1 = (((G__43195 instanceof cljs.core.Keyword))?G__43195.fqn:null);
switch (G__43195__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43190,else__4383__auto__);

}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__43197){
var vec__43198 = p__43197;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43198,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43198,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43189){
var self__ = this;
var G__43189__$1 = this;
return (new cljs.core.RecordIter((0),G__43189__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43191,other43192){
var self__ = this;
var this43191__$1 = this;
return (((!((other43192 == null)))) && ((this43191__$1.constructor === other43192.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43191__$1.type_tag,other43192.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43191__$1.logical_block,other43192.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43191__$1.start_pos,other43192.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43191__$1.end_pos,other43192.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43191__$1.__extmap,other43192.__extmap)));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__43189){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__43211 = cljs.core.keyword_identical_QMARK_;
var expr__43212 = k__4388__auto__;
if(cljs.core.truth_((pred__43211.cljs$core$IFn$_invoke$arity$2 ? pred__43211.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43212) : pred__43211.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43212)))){
return (new cljs.pprint.start_block_t(G__43189,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43211.cljs$core$IFn$_invoke$arity$2 ? pred__43211.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__43212) : pred__43211.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__43212)))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__43189,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43211.cljs$core$IFn$_invoke$arity$2 ? pred__43211.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43212) : pred__43211.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43212)))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__43189,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43211.cljs$core$IFn$_invoke$arity$2 ? pred__43211.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43212) : pred__43211.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43212)))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__43189,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__43189),null));
}
}
}
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__43189){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__43189,self__.__extmap,self__.__hash));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.start_block_t.cljs$lang$type = true);

(cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
}));

(cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/start-block-t");
}));

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__43193){
var extmap__4419__auto__ = (function (){var G__43233 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43193,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__43193)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43233);
} else {
return G__43233;
}
})();
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__43193),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__43193),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__43193),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__43193),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__42724__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__42724__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k43241,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__43256 = k43241;
var G__43256__$1 = (((G__43256 instanceof cljs.core.Keyword))?G__43256.fqn:null);
switch (G__43256__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43241,else__4383__auto__);

}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__43259){
var vec__43260 = p__43259;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43260,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43260,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43240){
var self__ = this;
var G__43240__$1 = this;
return (new cljs.core.RecordIter((0),G__43240__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43242,other43243){
var self__ = this;
var this43242__$1 = this;
return (((!((other43243 == null)))) && ((this43242__$1.constructor === other43243.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43242__$1.type_tag,other43243.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43242__$1.logical_block,other43243.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43242__$1.start_pos,other43243.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43242__$1.end_pos,other43243.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43242__$1.__extmap,other43243.__extmap)));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__43240){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__43281 = cljs.core.keyword_identical_QMARK_;
var expr__43282 = k__4388__auto__;
if(cljs.core.truth_((pred__43281.cljs$core$IFn$_invoke$arity$2 ? pred__43281.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43282) : pred__43281.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43282)))){
return (new cljs.pprint.end_block_t(G__43240,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43281.cljs$core$IFn$_invoke$arity$2 ? pred__43281.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__43282) : pred__43281.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__43282)))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__43240,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43281.cljs$core$IFn$_invoke$arity$2 ? pred__43281.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43282) : pred__43281.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43282)))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__43240,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43281.cljs$core$IFn$_invoke$arity$2 ? pred__43281.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43282) : pred__43281.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43282)))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__43240,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__43240),null));
}
}
}
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__43240){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__43240,self__.__extmap,self__.__hash));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.end_block_t.cljs$lang$type = true);

(cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
}));

(cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/end-block-t");
}));

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__43244){
var extmap__4419__auto__ = (function (){var G__43303 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43244,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__43244)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43303);
} else {
return G__43303;
}
})();
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__43244),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__43244),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__43244),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__43244),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__42724__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__42724__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k43341,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__43353 = k43341;
var G__43353__$1 = (((G__43353 instanceof cljs.core.Keyword))?G__43353.fqn:null);
switch (G__43353__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43341,else__4383__auto__);

}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__43361){
var vec__43362 = p__43361;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43362,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43362,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.indent-t{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43340){
var self__ = this;
var G__43340__$1 = this;
return (new cljs.core.RecordIter((0),G__43340__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43342,other43343){
var self__ = this;
var this43342__$1 = this;
return (((!((other43343 == null)))) && ((this43342__$1.constructor === other43343.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43342__$1.type_tag,other43343.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43342__$1.logical_block,other43343.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43342__$1.relative_to,other43343.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43342__$1.offset,other43343.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43342__$1.start_pos,other43343.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43342__$1.end_pos,other43343.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43342__$1.__extmap,other43343.__extmap)));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__43340){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__43412 = cljs.core.keyword_identical_QMARK_;
var expr__43413 = k__4388__auto__;
if(cljs.core.truth_((pred__43412.cljs$core$IFn$_invoke$arity$2 ? pred__43412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43413) : pred__43412.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__43413)))){
return (new cljs.pprint.indent_t(G__43340,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43412.cljs$core$IFn$_invoke$arity$2 ? pred__43412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__43413) : pred__43412.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__43413)))){
return (new cljs.pprint.indent_t(self__.type_tag,G__43340,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43412.cljs$core$IFn$_invoke$arity$2 ? pred__43412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__43413) : pred__43412.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__43413)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__43340,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43412.cljs$core$IFn$_invoke$arity$2 ? pred__43412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),expr__43413) : pred__43412.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__43413)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__43340,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43412.cljs$core$IFn$_invoke$arity$2 ? pred__43412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43413) : pred__43412.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__43413)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__43340,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43412.cljs$core$IFn$_invoke$arity$2 ? pred__43412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43413) : pred__43412.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__43413)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__43340,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__43340),null));
}
}
}
}
}
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__43340){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__43340,self__.__extmap,self__.__hash));
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.indent_t.cljs$lang$type = true);

(cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
}));

(cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/indent-t");
}));

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__43346){
var extmap__4419__auto__ = (function (){var G__43458 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43346,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__43346)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43458);
} else {
return G__43458;
}
})();
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__43346),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__43346),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__43346),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__43346),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__43346),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__43346),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__42724__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__42724__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.write_token !== 'undefined')){
} else {
cljs.pprint.write_token = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43499 = cljs.core.get_global_hierarchy;
return (fexpr__43499.cljs$core$IFn$_invoke$arity$0 ? fexpr__43499.cljs$core$IFn$_invoke$arity$0() : fexpr__43499.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),(function (p1__43491_SHARP_,p2__43489_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__43489_SHARP_);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__5735__auto___47764 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto___47764)){
var cb_47765 = temp__5735__auto___47764;
(cb_47765.cljs$core$IFn$_invoke$arity$1 ? cb_47765.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981)) : cb_47765.call(null,new cljs.core.Keyword(null,"start","start",-355208981)));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__5735__auto___47766 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5735__auto___47766)){
var prefix_47767 = temp__5735__auto___47766;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_47767);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__5735__auto___47769 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto___47769)){
var cb_47776 = temp__5735__auto___47769;
(cb_47776.cljs$core$IFn$_invoke$arity$1 ? cb_47776.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958)) : cb_47776.call(null,new cljs.core.Keyword(null,"end","end",-268185958)));
} else {
}

var temp__5735__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5735__auto__)){
var suffix = temp__5735__auto__;
return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__43562 = cljs.core._EQ_;
var expr__43563 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((pred__43562.cljs$core$IFn$_invoke$arity$2 ? pred__43562.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),expr__43563) : pred__43562.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__43563)))){
return cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((pred__43562.cljs$core$IFn$_invoke$arity$2 ? pred__43562.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current","current",-1088038603),expr__43563) : pred__43562.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__43563)))){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43563)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889))))){
return cljs.core.deref(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return false;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5733__auto___47790 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5733__auto___47790)){
var tws_47791 = temp__5733__auto___47790;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_47791);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__43603 = cljs.core.seq(tokens);
var chunk__43604 = null;
var count__43605 = (0);
var i__43606 = (0);
while(true){
if((i__43606 < count__43605)){
var token = chunk__43604.cljs$core$IIndexed$_nth$arity$2(null,i__43606);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5733__auto___47794 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5733__auto___47794)){
var tws_47795 = temp__5733__auto___47794;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_47795);
} else {
}
} else {
}

cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_47796 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__4115__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4115__auto__)){
return tws_47796;
} else {
return and__4115__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_47796);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__47800 = seq__43603;
var G__47801 = chunk__43604;
var G__47802 = count__43605;
var G__47803 = (i__43606 + (1));
seq__43603 = G__47800;
chunk__43604 = G__47801;
count__43605 = G__47802;
i__43606 = G__47803;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43603);
if(temp__5735__auto__){
var seq__43603__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43603__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43603__$1);
var G__47804 = cljs.core.chunk_rest(seq__43603__$1);
var G__47805 = c__4556__auto__;
var G__47806 = cljs.core.count(c__4556__auto__);
var G__47807 = (0);
seq__43603 = G__47804;
chunk__43604 = G__47805;
count__43605 = G__47806;
i__43606 = G__47807;
continue;
} else {
var token = cljs.core.first(seq__43603__$1);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5733__auto___47811 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5733__auto___47811)){
var tws_47812 = temp__5733__auto___47811;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_47812);
} else {
}
} else {
}

cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_47815 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__4115__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4115__auto__)){
return tws_47815;
} else {
return and__4115__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_47815);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__47816 = cljs.core.next(seq__43603__$1);
var G__47817 = null;
var G__47818 = (0);
var G__47819 = (0);
seq__43603 = G__47816;
chunk__43604 = G__47817;
count__43605 = G__47818;
i__43606 = G__47819;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__4126__auto__ = cljs.core.deref(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (!(cljs.pprint.tokens_fit_QMARK_(this$,section)));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width(this$);
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__4115__auto__ = miser_width;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = maxcol;
if(cljs.core.truth_(and__4115__auto____$1)){
if((cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width))){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined')){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43689 = cljs.core.get_global_hierarchy;
return (fexpr__43689.cljs$core$IFn$_invoke$arity$0 ? fexpr__43689.cljs$core$IFn$_invoke$arity$0() : fexpr__43689.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),(function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__4126__auto__ = cljs.core.deref(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (!(cljs.pprint.tokens_fit_QMARK_(this$,subsection)));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__43702_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_(p1__43702_SHARP_)) && (cljs.pprint.ancestor_QMARK_(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__43702_SHARP_),lb)))));
}),cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__43715_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__43715_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_(p1__43715_SHARP_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_(nl_lb,lb)))))));
}),cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__47875 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__47875;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_47882 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_47882);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__43742_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_(p1__43742_SHARP_)));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__43754 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43754,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43754,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__43760 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43760,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43760,(1),null);
var newl = cljs.core.first(b);
var do_nl = cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(newl,this$,section,cljs.pprint.get_sub_section(b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = (!(cljs.pprint.tokens_fit_QMARK_(this$,result)));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if((!(cljs.pprint.tokens_fit_QMARK_(this$,buffer)))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if((!((buffer === new_buffer)))){
var G__47893 = new_buffer;
buffer = G__47893;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if((!(cljs.pprint.tokens_fit_QMARK_(this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5733__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5733__auto__)){
var buf = temp__5733__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5735__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto__)){
var tws = temp__5735__auto__;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_47907 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_47908 = (oldpos_47907 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_47908);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_47907,newpos_47908));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__43804_47929 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__43805_47930 = null;
var count__43806_47931 = (0);
var i__43807_47932 = (0);
while(true){
if((i__43807_47932 < count__43806_47931)){
var l_47934__$1 = chunk__43805_47930.cljs$core$IIndexed$_nth$arity$2(null,i__43807_47932);
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_47934__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__47940 = seq__43804_47929;
var G__47941 = chunk__43805_47930;
var G__47942 = count__43806_47931;
var G__47943 = (i__43807_47932 + (1));
seq__43804_47929 = G__47940;
chunk__43805_47930 = G__47941;
count__43806_47931 = G__47942;
i__43807_47932 = G__47943;
continue;
} else {
var temp__5735__auto___47944 = cljs.core.seq(seq__43804_47929);
if(temp__5735__auto___47944){
var seq__43804_47945__$1 = temp__5735__auto___47944;
if(cljs.core.chunked_seq_QMARK_(seq__43804_47945__$1)){
var c__4556__auto___47947 = cljs.core.chunk_first(seq__43804_47945__$1);
var G__47952 = cljs.core.chunk_rest(seq__43804_47945__$1);
var G__47953 = c__4556__auto___47947;
var G__47954 = cljs.core.count(c__4556__auto___47947);
var G__47956 = (0);
seq__43804_47929 = G__47952;
chunk__43805_47930 = G__47953;
count__43806_47931 = G__47954;
i__43807_47932 = G__47956;
continue;
} else {
var l_47970__$1 = cljs.core.first(seq__43804_47945__$1);
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_47970__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__47979 = cljs.core.next(seq__43804_47945__$1);
var G__47980 = null;
var G__47981 = (0);
var G__47982 = (0);
seq__43804_47929 = G__47979;
chunk__43805_47930 = G__47980;
count__43806_47931 = G__47981;
i__43807_47932 = G__47982;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint43844 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint43844 = (function (writer,max_columns,miser_width,lb,fields,meta43845){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta43845 = meta43845;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint43844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43846,meta43845__$1){
var self__ = this;
var _43846__$1 = this;
return (new cljs.pprint.t_cljs$pprint43844(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta43845__$1));
}));

(cljs.pprint.t_cljs$pprint43844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43846){
var self__ = this;
var _43846__$1 = this;
return self__.meta43845;
}));

(cljs.pprint.t_cljs$pprint43844.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
}));

(cljs.pprint.t_cljs$pprint43844.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__43856 = cljs.core._EQ_;
var expr__43857 = cljs.core.type(x);
if(cljs.core.truth_((pred__43856.cljs$core$IFn$_invoke$arity$2 ? pred__43856.cljs$core$IFn$_invoke$arity$2(String,expr__43857) : pred__43856.call(null,String,expr__43857)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,((s).length));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__43856.cljs$core$IFn$_invoke$arity$2 ? pred__43856.cljs$core$IFn$_invoke$arity$2(Number,expr__43857) : pred__43856.call(null,Number,expr__43857)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43857)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint43844.prototype.cljs$core$IWriter$_flush$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
}));

(cljs.pprint.t_cljs$pprint43844.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.pprint.t_cljs$pprint43844.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens(this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
}));

(cljs.pprint.t_cljs$pprint43844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta43845","meta43845",2061610229,null)], null);
}));

(cljs.pprint.t_cljs$pprint43844.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint43844.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint43844");

(cljs.pprint.t_cljs$pprint43844.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint43844");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint43844.
 */
cljs.pprint.__GT_t_cljs$pprint43844 = (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint43844(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta43845){
return (new cljs.pprint.t_cljs$pprint43844(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta43845));
});

}

return (new cljs.pprint.t_cljs$pprint43844(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

var temp__5735__auto___48014 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto___48014)){
var cb_48015 = temp__5735__auto___48014;
(cb_48015.cljs$core$IFn$_invoke$arity$1 ? cb_48015.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981)) : cb_48015.call(null,new cljs.core.Keyword(null,"start","start",-355208981)));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(lb.start_col,col);

return cljs.core.reset_BANG_(lb.indent,col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5735__auto___48016 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto___48016)){
var cb_48017 = temp__5735__auto___48016;
(cb_48017.cljs$core$IFn$_invoke$arity$1 ? cb_48017.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958)) : cb_48017.call(null,new cljs.core.Keyword(null,"end","end",-268185958)));
} else {
}
} else {
var oldpos_48019 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_48020 = (oldpos_48019 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_48020);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_48019,newpos_48020));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__43920 = cljs.core._EQ_;
var expr__43921 = relative_to;
if(cljs.core.truth_((pred__43920.cljs$core$IFn$_invoke$arity$2 ? pred__43920.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),expr__43921) : pred__43920.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__43921)))){
return cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((pred__43920.cljs$core$IFn$_invoke$arity$2 ? pred__43920.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current","current",-1088038603),expr__43921) : pred__43920.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__43921)))){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43921)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined')){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__43928_SHARP_){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__43928_SHARP_));
if(cljs.core.truth_(temp__5735__auto__)){
var v = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__43928_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x))){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return false;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__4115__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__4115__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.not(cljs.pprint._STAR_print_pretty_STAR_)){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
(cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1)));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48039 = arguments.length;
var i__4737__auto___48040 = (0);
while(true){
if((i__4737__auto___48040 < len__4736__auto___48039)){
args__4742__auto__.push((arguments[i__4737__auto___48040]));

var G__48041 = (i__4737__auto___48040 + (1));
i__4737__auto___48040 = G__48041;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR__orig_val__43958 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__43959 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__43960 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__43961 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__43962 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__43963 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__43964 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__43965 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__43966 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__43967 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__43968 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__43969 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__43970 = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__43971 = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__43972 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__43973 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__43974 = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__43975 = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__43976 = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__43977 = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__43978 = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__43979 = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__43980 = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__43981 = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__43970);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__43971);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__43972);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__43973);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__43974);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__43975);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__43976);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__43977);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__43978);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__43979);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__43980);

(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__43981);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)){
var base_writer__42705__auto___48049 = base_writer;
var new_writer__42706__auto___48050 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__42705__auto___48049));
var _STAR_out_STAR__orig_val__43999_48051 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__44000_48052 = ((new_writer__42706__auto___48050)?cljs.pprint.make_pretty_writer(base_writer__42705__auto___48049,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__42705__auto___48049);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__44000_48052);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__43999_48051);
}} else {
var _STAR_out_STAR__orig_val__44004_48053 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__44005_48054 = base_writer;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__44005_48054);

try{cljs.pprint.pr.call(null,object);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__44004_48053);
}}

if(optval === true){
cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
}

if((optval == null)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
}finally {}}finally {(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__43969);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__43968);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__43967);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__43966);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__43965);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__43964);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__43963);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__43962);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__43961);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__43960);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__43959);

(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__43958);
}}));

(cljs.pprint.write.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.pprint.write.cljs$lang$applyTo = (function (seq43954){
var G__43955 = cljs.core.first(seq43954);
var seq43954__$1 = cljs.core.next(seq43954);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43955,seq43954__$1);
}));

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__44017 = arguments.length;
switch (G__44017) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__44023 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__44024 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__44024);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__44023);
}}));

(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__42705__auto__ = writer;
var new_writer__42706__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__42705__auto__));
var _STAR_out_STAR__orig_val__44027 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__44028 = ((new_writer__42706__auto__)?cljs.pprint.make_pretty_writer(base_writer__42705__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__42705__auto__);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__44028);

try{var _STAR_print_pretty_STAR__orig_val__44029_48062 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__44030_48063 = true;
(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__44030_48063);

try{cljs.pprint.write_out(object);
}finally {(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__44029_48062);
}
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_))))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__44027);
}}));

(cljs.pprint.pprint.cljs$lang$maxFixedArity = 2);

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$);

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__4115__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__4115__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48076 = arguments.length;
var i__4737__auto___48077 = (0);
while(true){
if((i__4737__auto___48077 < len__4736__auto___48076)){
args__4742__auto__.push((arguments[i__4737__auto___48077]));

var G__48079 = (i__4737__auto___48077 + (1));
i__4737__auto___48077 = G__48079;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format(format_in):format_in);
var navigator = cljs.pprint.init_navigator(args);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator);
}));

(cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq44058){
var G__44059 = cljs.core.first(seq44058);
var seq44058__$1 = cljs.core.next(seq44058);
var G__44060 = cljs.core.first(seq44058__$1);
var seq44058__$2 = cljs.core.next(seq44058__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44059,G__44060,seq44058__$2);
}));

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^","\n"].join('');
throw Error(full_message);
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k44077,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__44093 = k44077;
var G__44093__$1 = (((G__44093 instanceof cljs.core.Keyword))?G__44093.fqn:null);
switch (G__44093__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44077,else__4383__auto__);

}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__44103){
var vec__44104 = p__44103;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44104,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44104,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44076){
var self__ = this;
var G__44076__$1 = this;
return (new cljs.core.RecordIter((0),G__44076__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44078,other44079){
var self__ = this;
var this44078__$1 = this;
return (((!((other44079 == null)))) && ((this44078__$1.constructor === other44079.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44078__$1.seq,other44079.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44078__$1.rest,other44079.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44078__$1.pos,other44079.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44078__$1.__extmap,other44079.__extmap)));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__44076){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__44119 = cljs.core.keyword_identical_QMARK_;
var expr__44120 = k__4388__auto__;
if(cljs.core.truth_((pred__44119.cljs$core$IFn$_invoke$arity$2 ? pred__44119.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__44120) : pred__44119.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__44120)))){
return (new cljs.pprint.arg_navigator(G__44076,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44119.cljs$core$IFn$_invoke$arity$2 ? pred__44119.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__44120) : pred__44119.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__44120)))){
return (new cljs.pprint.arg_navigator(self__.seq,G__44076,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44119.cljs$core$IFn$_invoke$arity$2 ? pred__44119.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220),expr__44120) : pred__44119.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__44120)))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__44076,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__44076),null));
}
}
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null))], null),self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__44076){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__44076,self__.__extmap,self__.__hash));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
}));

(cljs.pprint.arg_navigator.cljs$lang$type = true);

(cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
}));

(cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/arg-navigator");
}));

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__44083){
var extmap__4419__auto__ = (function (){var G__44137 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44083,new cljs.core.Keyword(null,"seq","seq",-1817803783),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], 0));
if(cljs.core.record_QMARK_(G__44083)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44137);
} else {
return G__44137;
}
})();
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__44083),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__44083),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__44083),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__44155 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44155,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44155,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format(raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
var G__44160 = navigator;
var G__44161 = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__44160,G__44161) : cljs.pprint.relative_reposition.call(null,G__44160,G__44161));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k44169,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__44183 = k44169;
var G__44183__$1 = (((G__44183 instanceof cljs.core.Keyword))?G__44183.fqn:null);
switch (G__44183__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44169,else__4383__auto__);

}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__44187){
var vec__44189 = p__44187;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44189,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44189,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44168){
var self__ = this;
var G__44168__$1 = this;
return (new cljs.core.RecordIter((0),G__44168__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44170,other44171){
var self__ = this;
var this44170__$1 = this;
return (((!((other44171 == null)))) && ((this44170__$1.constructor === other44171.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44170__$1.func,other44171.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44170__$1.def,other44171.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44170__$1.params,other44171.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44170__$1.offset,other44171.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44170__$1.__extmap,other44171.__extmap)));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__44168){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__44211 = cljs.core.keyword_identical_QMARK_;
var expr__44212 = k__4388__auto__;
if(cljs.core.truth_((pred__44211.cljs$core$IFn$_invoke$arity$2 ? pred__44211.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040),expr__44212) : pred__44211.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__44212)))){
return (new cljs.pprint.compiled_directive(G__44168,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44211.cljs$core$IFn$_invoke$arity$2 ? pred__44211.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"def","def",-1043430536),expr__44212) : pred__44211.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__44212)))){
return (new cljs.pprint.compiled_directive(self__.func,G__44168,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44211.cljs$core$IFn$_invoke$arity$2 ? pred__44211.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__44212) : pred__44211.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__44212)))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__44168,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44211.cljs$core$IFn$_invoke$arity$2 ? pred__44211.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),expr__44212) : pred__44211.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__44212)))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__44168,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__44168),null));
}
}
}
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"func","func",-238706040),self__.func,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"def","def",-1043430536),self__.def,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null))], null),self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__44168){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__44168,self__.__extmap,self__.__hash));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
}));

(cljs.pprint.compiled_directive.cljs$lang$type = true);

(cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
}));

(cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/compiled-directive");
}));

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__44177){
var extmap__4419__auto__ = (function (){var G__44229 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44177,new cljs.core.Keyword(null,"func","func",-238706040),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], 0));
if(cljs.core.record_QMARK_(G__44177)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44229);
} else {
return G__44229;
}
})();
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__44177),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__44177),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__44177),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__44177),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__44244,navigator){
var vec__44246 = p__44244;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44246,(0),null);
var vec__44249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44246,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44249,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44249,(1),null);
var vec__44258 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44258,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44258,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__44271 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44271,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44271,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str(cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__44283 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44283,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44283,(1),null);
var base_output = (function (){var or__4126__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__44298_SHARP_){
if((p1__44298_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__44298_SHARP_,base),cljs.core.quot(p1__44298_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44299_SHARP_){
if((p1__44299_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__44299_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__44299_SHARP_ - (10))));
}
}),cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__44358 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44358,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44358,(1),null);
if(cljs.pprint.integral_QMARK_(arg)){
var neg_48171 = (arg < (0));
var pos_arg_48172 = ((neg_48171)?(- arg):arg);
var raw_str_48173 = cljs.pprint.opt_base_str(base,pos_arg_48172);
var group_str_48174 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44345_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__44345_SHARP_);
}),cljs.pprint.group_by_STAR_(new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_48173));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_48173);
var signed_str_48175 = ((neg_48171)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_48174)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_48174)].join(''):group_str_48174
));
var padded_str_48176 = (((signed_str_48175.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_48175.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_48175)].join(''):signed_str_48175);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_48176], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),(((((!(cljs.core.empty_QMARK_(this$)))) && ((!(cljs.core.empty_QMARK_(acc))))))?", ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),(((((!(cljs.core.empty_QMARK_(this$)))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null)].join('');
} else {
var G__48223 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__48224 = (pos - (1));
var G__48225 = cljs.core.first(remainder);
var G__48226 = cljs.core.next(remainder);
acc = G__48223;
pos = G__48224;
this$ = G__48225;
remainder = G__48226;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__44596 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44596,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44596,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_48230 = (((arg < (0)))?(- arg):arg);
var parts_48231 = cljs.pprint.remainders((1000),abs_arg_48230);
if((cljs.core.count(parts_48231) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_48233 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_48231);
var full_str_48234 = cljs.pprint.add_english_scales(parts_strs_48233,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(((arg < (0)))?"minus ":null),full_str_48234].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if((((ten_digit > (0))) && ((!((unit_digit > (0))))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__44675 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44675,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44675,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_48241 = (((arg < (0)))?(- arg):arg);
var parts_48242 = cljs.pprint.remainders((1000),abs_arg_48241);
if((cljs.core.count(parts_48242) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_48246 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_48242));
var head_str_48247 = cljs.pprint.add_english_scales(parts_strs_48246,(1));
var tail_str_48248 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_48242));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(((arg < (0)))?"minus ":null),(((((!(cljs.core.empty_QMARK_(head_str_48247)))) && ((!(cljs.core.empty_QMARK_(tail_str_48248))))))?[head_str_48247,", ",tail_str_48248].join(''):(((!(cljs.core.empty_QMARK_(head_str_48247))))?[head_str_48247,"th"].join(''):tail_str_48248
))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_48257 = cljs.core.rem(arg,(100));
var not_teens_48258 = ((((11) < low_two_digits_48257)) || (((19) > low_two_digits_48257)));
var low_digit_48259 = cljs.core.rem(low_two_digits_48257,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((low_digit_48259 === (1))) && (not_teens_48258)))?"st":(((((low_digit_48259 === (2))) && (not_teens_48258)))?"nd":(((((low_digit_48259 === (3))) && (not_teens_48258)))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__44821 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44821,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44821,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_48266 = cljs.pprint.remainders((10),arg);
var acc_48267 = cljs.core.PersistentVector.EMPTY;
var pos_48268 = (cljs.core.count(digits_48266) - (1));
var digits_48269__$1 = digits_48266;
while(true){
if(cljs.core.empty_QMARK_(digits_48269__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_48267)], 0));
} else {
var digit_48271 = cljs.core.first(digits_48269__$1);
var G__48272 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_48271))?acc_48267:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_48267,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_48268),(digit_48271 - (1)))));
var G__48273 = (pos_48268 - (1));
var G__48274 = cljs.core.next(digits_48269__$1);
acc_48267 = G__48272;
pos_48268 = G__48273;
digits_48269__$1 = G__48274;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__44880 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44880,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44880,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__44919 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44919,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44919,(1),null);
var pred__44924_48323 = cljs.core._EQ_;
var expr__44925_48324 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__44929 = "o";
var G__44930 = expr__44925_48324;
return (pred__44924_48323.cljs$core$IFn$_invoke$arity$2 ? pred__44924_48323.cljs$core$IFn$_invoke$arity$2(G__44929,G__44930) : pred__44924_48323.call(null,G__44929,G__44930));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__44936 = "u";
var G__44937 = expr__44925_48324;
return (pred__44924_48323.cljs$core$IFn$_invoke$arity$2 ? pred__44924_48323.cljs$core$IFn$_invoke$arity$2(G__44936,G__44937) : pred__44924_48323.call(null,G__44936,G__44937));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__44924_48323.cljs$core$IFn$_invoke$arity$2 ? pred__44924_48323.cljs$core$IFn$_invoke$arity$2(null,expr__44925_48324) : pred__44924_48323.call(null,null,expr__44925_48324)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__44925_48324)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__44984 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44984,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44984,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.pprint.abort_QMARK_(context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__45018 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45018,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45018,(1),null);
var vec__45021 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45021,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45021,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(f));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,cljs.core.str.cljs$core$IFn$_invoke$arity$1((((s).length) - (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1)))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc)].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__45055 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45055,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45055,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = (((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+"))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__48350 = (i - (1));
i = G__48350;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__4126__auto__ = d;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4214__auto__ = (2);
var y__4215__auto__ = w;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4214__auto__ = (e + (1));
var y__4215__auto__ = (w__$1 - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})():(w__$1 + e)
));
var vec__45109 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45109,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45109,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45109,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45109,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > ((result).length));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__45132 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45132,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45132,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc),".",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc)].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k),".",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k)].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var vec__45189 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45189,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45189,(1),null);
var vec__45192 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45192,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45192,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__45195 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45195,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45195,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp)));
var vec__45198 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45198,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45198,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45198,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = w;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = d;
if(cljs.core.truth_(and__4115__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((((fixed_repr).length) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_48378 = ((fixed_repr__$1).length);
var signed_len_48379 = (cljs.core.truth_(add_sign)?(len_48378 + (1)):len_48378);
var prepend_zero_48380__$1 = ((prepend_zero) && ((!((signed_len_48379 >= w)))));
var append_zero_48381__$1 = ((append_zero) && ((!((signed_len_48379 >= w)))));
var full_len_48382 = ((((prepend_zero_48380__$1) || (append_zero_48381__$1)))?(signed_len_48379 + (1)):signed_len_48379);
if(cljs.core.truth_((((full_len_48382 > w))?new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params):false))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_48382),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero_48380__$1)?"0":null),fixed_repr__$1,((append_zero_48381__$1)?"0":null)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero)?"0":null),fixed_repr__$1,((append_zero)?"0":null)].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__45251 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45251,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45251,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__45266_48392 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__45270_48393 = G__45266_48392;
var mantissa_48394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45270_48393,(0),null);
var exp_48395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45270_48393,(1),null);
var G__45266_48396__$1 = G__45266_48392;
while(true){
var vec__45275_48398 = G__45266_48396__$1;
var mantissa_48399__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45275_48398,(0),null);
var exp_48400__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45275_48398,(1),null);
var w_48401 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_48402 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_48403 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_48404 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_48405 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "E";
}
})();
var add_sign_48406 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_48407 = (k_48404 <= (0));
var scaled_exp_48408 = (exp_48400__$1 - (k_48404 - (1)));
var scaled_exp_str_48409 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_48408));
var scaled_exp_str_48410__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_48405),(((scaled_exp_48408 < (0)))?"-":"+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_48403)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_48403 - ((scaled_exp_str_48409).length)),"0")):null)),scaled_exp_str_48409].join('');
var exp_width_48411 = ((scaled_exp_str_48410__$1).length);
var base_mantissa_width_48412 = cljs.core.count(mantissa_48399__$1);
var scaled_mantissa_48413 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_48404),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_48399__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_48402)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_48402 - (base_mantissa_width_48412 - (1))) - (((k_48404 < (0)))?(- k_48404):(0))),"0")):null))].join('');
var w_mantissa_48414 = (cljs.core.truth_(w_48401)?(w_48401 - exp_width_48411):null);
var vec__45278_48415 = cljs.pprint.round_str(scaled_mantissa_48413,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_48404,(0)))?(d_48402 - (1)):(((k_48404 > (0)))?d_48402:(((k_48404 < (0)))?(d_48402 - (1)):null))),(cljs.core.truth_(w_mantissa_48414)?(w_mantissa_48414 - (cljs.core.truth_(add_sign_48406)?(1):(0))):null));
var rounded_mantissa_48416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45278_48415,(0),null);
var __48417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45278_48415,(1),null);
var incr_exp_48418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45278_48415,(2),null);
var full_mantissa_48419 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_48416,k_48404);
var append_zero_48420 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_48404,cljs.core.count(rounded_mantissa_48416))) && ((d_48402 == null)));
if(cljs.core.not(incr_exp_48418)){
if(cljs.core.truth_(w_48401)){
var len_48425 = (((full_mantissa_48419).length) + exp_width_48411);
var signed_len_48426 = (cljs.core.truth_(add_sign_48406)?(len_48425 + (1)):len_48425);
var prepend_zero_48427__$1 = ((prepend_zero_48407) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_48426,w_48401)))));
var full_len_48428 = ((prepend_zero_48427__$1)?(signed_len_48426 + (1)):signed_len_48426);
var append_zero_48429__$1 = ((append_zero_48420) && ((full_len_48428 < w_48401)));
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = (full_len_48428 > w_48401);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = e_48403;
if(cljs.core.truth_(and__4115__auto__)){
return ((exp_width_48411 - (2)) > e_48403);
} else {
return and__4115__auto__;
}
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_48401,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_48401 - full_len_48428) - ((append_zero_48429__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(add_sign_48406)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_48427__$1)?"0":null),full_mantissa_48419,((append_zero_48429__$1)?"0":null),scaled_exp_str_48410__$1].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(cljs.core.truth_(add_sign_48406)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_48407)?"0":null),full_mantissa_48419,((append_zero_48420)?"0":null),scaled_exp_str_48410__$1].join('')], 0));
}
} else {
var G__48433 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_48416,(exp_48400__$1 + (1))], null);
G__45266_48396__$1 = G__48433;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__45336 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45336,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45336,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__45339 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45339,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45339,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4214__auto__ = cljs.core.count(mantissa);
var y__4215__auto__ = (function (){var x__4217__auto__ = n;
var y__4218__auto__ = (7);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__45342 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45342,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45342,(1),null);
var vec__45345 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45345,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45345,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (arg < (0));
}
})();
var vec__45348 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45348,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45348,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45348,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),fixed_repr].join('');
var full_len = (((full_repr).length) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return add_sign;
} else {
return and__4115__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params)))?add_sign:false))?(((arg < (0)))?"-":"+"):null),full_repr].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__45351 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45351,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45351,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses)))))?cljs.core.first(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__45354 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45354,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45354,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__45360 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45360,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45360,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__45365 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45365,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45365,(1),null);
var vec__45368 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45368,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45368,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__48454 = (count + (1));
var G__48455 = iter_result;
var G__48456 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__48454;
args__$1 = G__48455;
last_pos = G__48456;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__45374 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45374,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45374,(1),null);
var vec__45377 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45377,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45377,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_(arg_list__$1)) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__48462 = (count + (1));
var G__48463 = cljs.core.next(arg_list__$1);
count = G__48462;
arg_list__$1 = G__48463;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__45463 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45463,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45463,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__48484 = (count + (1));
var G__48485 = iter_result;
var G__48486 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__48484;
navigator__$2 = G__48485;
last_pos = G__48486;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__45486 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45486,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45486,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__45502 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45502,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45502,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__48498 = (count + (1));
var G__48499 = navigator__$3;
count = G__48498;
navigator__$2 = G__48499;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block(params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses(params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__45520 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__45523 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__45524 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__45524);

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__45523);
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45520,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45520,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__48517 = cljs.core.next(clauses__$1);
var G__48518 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__48519 = iter_result;
clauses__$1 = G__48517;
acc = G__48518;
navigator__$1 = G__48519;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__45533 = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5735__auto__)){
var else$ = temp__5735__auto__;
return cljs.pprint.render_clauses(else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__45536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45533,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45536,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45533,(1),null);
var navigator__$1 = (function (){var or__4126__auto__ = new_navigator;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return navigator;
}
})();
var vec__45539 = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5735__auto__)){
var p = temp__5735__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45539,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45539,(1),null);
var navigator__$2 = (function (){var or__4126__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__4126__auto__ = cljs.core.first(new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__4126__auto__ = cljs.core.first(new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__45542 = cljs.pprint.render_clauses(clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45542,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45542,(1),null);
var slots = (function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4214__auto__ = minpad;
var y__4215__auto__ = cljs.core.quot(total_pad,slots);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__4115__auto__ = eol_str;
if(cljs.core.truth_(and__4115__auto__)){
return (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__4115__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_48541__$1 = slots;
var extra_pad_48542__$1 = extra_pad;
var strs_48543__$1 = strs;
var pad_only_48544 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_48543__$1),(1))) && (cljs.core.not(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq(strs_48543__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_48544))?cljs.core.first(strs_48543__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__4126__auto__ = pad_only_48544;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.next(strs_48543__$1);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_48542__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__48561 = (slots_48541__$1 - (1));
var G__48562 = (extra_pad_48542__$1 - (1));
var G__48563 = (cljs.core.truth_(pad_only_48544)?strs_48543__$1:cljs.core.next(strs_48543__$1));
var G__48564 = false;
slots_48541__$1 = G__48561;
extra_pad_48542__$1 = G__48562;
strs_48543__$1 = G__48563;
pad_only_48544 = G__48564;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint45600 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint45600 = (function (writer,meta45601){
this.writer = writer;
this.meta45601 = meta45601;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint45600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45602,meta45601__$1){
var self__ = this;
var _45602__$1 = this;
return (new cljs.pprint.t_cljs$pprint45600(self__.writer,meta45601__$1));
}));

(cljs.pprint.t_cljs$pprint45600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45602){
var self__ = this;
var _45602__$1 = this;
return self__.meta45601;
}));

(cljs.pprint.t_cljs$pprint45600.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint45600.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__45605 = cljs.core._EQ_;
var expr__45606 = cljs.core.type(x);
if(cljs.core.truth_((pred__45605.cljs$core$IFn$_invoke$arity$2 ? pred__45605.cljs$core$IFn$_invoke$arity$2(String,expr__45606) : pred__45605.call(null,String,expr__45606)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__45605.cljs$core$IFn$_invoke$arity$2 ? pred__45605.cljs$core$IFn$_invoke$arity$2(Number,expr__45606) : pred__45605.call(null,Number,expr__45606)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__45606)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint45600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta45601","meta45601",-813288714,null)], null);
}));

(cljs.pprint.t_cljs$pprint45600.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint45600.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint45600");

(cljs.pprint.t_cljs$pprint45600.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint45600");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint45600.
 */
cljs.pprint.__GT_t_cljs$pprint45600 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint45600(writer__$1,meta45601){
return (new cljs.pprint.t_cljs$pprint45600(writer__$1,meta45601));
});

}

return (new cljs.pprint.t_cljs$pprint45600(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint45617 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint45617 = (function (writer,meta45618){
this.writer = writer;
this.meta45618 = meta45618;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint45617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45619,meta45618__$1){
var self__ = this;
var _45619__$1 = this;
return (new cljs.pprint.t_cljs$pprint45617(self__.writer,meta45618__$1));
}));

(cljs.pprint.t_cljs$pprint45617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45619){
var self__ = this;
var _45619__$1 = this;
return self__.meta45618;
}));

(cljs.pprint.t_cljs$pprint45617.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint45617.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__45623 = cljs.core._EQ_;
var expr__45624 = cljs.core.type(x);
if(cljs.core.truth_((pred__45623.cljs$core$IFn$_invoke$arity$2 ? pred__45623.cljs$core$IFn$_invoke$arity$2(String,expr__45624) : pred__45623.call(null,String,expr__45624)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__45623.cljs$core$IFn$_invoke$arity$2 ? pred__45623.cljs$core$IFn$_invoke$arity$2(Number,expr__45624) : pred__45623.call(null,Number,expr__45624)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__45624)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint45617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta45618","meta45618",-624229966,null)], null);
}));

(cljs.pprint.t_cljs$pprint45617.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint45617.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint45617");

(cljs.pprint.t_cljs$pprint45617.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint45617");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint45617.
 */
cljs.pprint.__GT_t_cljs$pprint45617 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint45617(writer__$1,meta45618){
return (new cljs.pprint.t_cljs$pprint45617(writer__$1,meta45618));
});

}

return (new cljs.pprint.t_cljs$pprint45617(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = first_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = f;
if(cljs.core.truth_(and__4115__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())?[clojure.string.upper_case(f),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume((function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__4115__auto__ = m;
if(cljs.core.truth_(and__4115__auto__)){
return (m.index + (1));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset),clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
}),s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint45636 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint45636 = (function (writer,last_was_whitespace_QMARK_,meta45637){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta45637 = meta45637;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint45636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45638,meta45637__$1){
var self__ = this;
var _45638__$1 = this;
return (new cljs.pprint.t_cljs$pprint45636(self__.writer,self__.last_was_whitespace_QMARK_,meta45637__$1));
}));

(cljs.pprint.t_cljs$pprint45636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45638){
var self__ = this;
var _45638__$1 = this;
return self__.meta45637;
}));

(cljs.pprint.t_cljs$pprint45636.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint45636.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__45646 = cljs.core._EQ_;
var expr__45647 = cljs.core.type(x);
if(cljs.core.truth_((pred__45646.cljs$core$IFn$_invoke$arity$2 ? pred__45646.cljs$core$IFn$_invoke$arity$2(String,expr__45647) : pred__45646.call(null,String,expr__45647)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__45646.cljs$core$IFn$_invoke$arity$2 ? pred__45646.cljs$core$IFn$_invoke$arity$2(Number,expr__45647) : pred__45646.call(null,Number,expr__45647)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__45647)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint45636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta45637","meta45637",-1339802560,null)], null);
}));

(cljs.pprint.t_cljs$pprint45636.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint45636.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint45636");

(cljs.pprint.t_cljs$pprint45636.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint45636");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint45636.
 */
cljs.pprint.__GT_t_cljs$pprint45636 = (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint45636(writer__$1,last_was_whitespace_QMARK___$1,meta45637){
return (new cljs.pprint.t_cljs$pprint45636(writer__$1,last_was_whitespace_QMARK___$1,meta45637));
});

}

return (new cljs.pprint.t_cljs$pprint45636(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint45657 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint45657 = (function (writer,capped,meta45658){
this.writer = writer;
this.capped = capped;
this.meta45658 = meta45658;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint45657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45659,meta45658__$1){
var self__ = this;
var _45659__$1 = this;
return (new cljs.pprint.t_cljs$pprint45657(self__.writer,self__.capped,meta45658__$1));
}));

(cljs.pprint.t_cljs$pprint45657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45659){
var self__ = this;
var _45659__$1 = this;
return self__.meta45658;
}));

(cljs.pprint.t_cljs$pprint45657.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint45657.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__45669 = cljs.core._EQ_;
var expr__45670 = cljs.core.type(x);
if(cljs.core.truth_((pred__45669.cljs$core$IFn$_invoke$arity$2 ? pred__45669.cljs$core$IFn$_invoke$arity$2(String,expr__45670) : pred__45669.call(null,String,expr__45670)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__4115__auto__ = m;
if(cljs.core.truth_(and__4115__auto__)){
return m.index;
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset),clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset)),clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__45669.cljs$core$IFn$_invoke$arity$2 ? pred__45669.cljs$core$IFn$_invoke$arity$2(Number,expr__45670) : pred__45669.call(null,Number,expr__45670)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_(((cljs.core.not(cljs.core.deref(self__.capped)))?goog.string.isUnicodeChar(c):false))){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__45670)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint45657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta45658","meta45658",-415991375,null)], null);
}));

(cljs.pprint.t_cljs$pprint45657.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint45657.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint45657");

(cljs.pprint.t_cljs$pprint45657.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint45657");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint45657.
 */
cljs.pprint.__GT_t_cljs$pprint45657 = (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint45657(writer__$1,capped__$1,meta45658){
return (new cljs.pprint.t_cljs$pprint45657(writer__$1,capped__$1,meta45658));
});

}

return (new cljs.pprint.t_cljs$pprint45657(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__45679 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__45680 = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__45680);

try{return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__45679);
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if((((!((cljs.core._STAR_out_STAR_ == null))))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_48643 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_48644 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_48645 = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_48646 = (((current_48645 < colnum_48643))?(colnum_48643 - current_48645):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_48644,(0)))?(0):(colinc_48644 - cljs.core.rem((current_48645 - colnum_48643),colinc_48644))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_48646," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_48651 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_48652 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_48653 = (colrel_48651 + cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_48654 = (((colinc_48652 > (0)))?cljs.core.rem(start_col_48653,colinc_48652):(0));
var space_count_48655 = (colrel_48651 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_48654))?(0):(colinc_48652 - offset_48654)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_48655," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__45694 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45694,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45694,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__45700_48669 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__45701_48670 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__45702_48671 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__45703_48672 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__45702_48671);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__45703_48672);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__45701_48670);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__45700_48669);
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent(relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__45714_SHARP_,p2__45715_SHARP_,p3__45716_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__45714_SHARP_,p2__45715_SHARP_,p3__45716_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__45717_SHARP_,p2__45718_SHARP_,p3__45719_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__45717_SHARP_,p2__45718_SHARP_,p3__45719_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__45722_SHARP_,p2__45723_SHARP_,p3__45724_SHARP_){
return cljs.pprint.format_integer((10),p1__45722_SHARP_,p2__45723_SHARP_,p3__45724_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__45725_SHARP_,p2__45726_SHARP_,p3__45727_SHARP_){
return cljs.pprint.format_integer((2),p1__45725_SHARP_,p2__45726_SHARP_,p3__45727_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__45729_SHARP_,p2__45730_SHARP_,p3__45731_SHARP_){
return cljs.pprint.format_integer((8),p1__45729_SHARP_,p2__45730_SHARP_,p3__45731_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__45732_SHARP_,p2__45733_SHARP_,p3__45734_SHARP_){
return cljs.pprint.format_integer((16),p1__45732_SHARP_,p2__45733_SHARP_,p3__45734_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__45735_SHARP_,p2__45736_SHARP_,p3__45737_SHARP_){
return cljs.pprint.format_integer(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__45735_SHARP_),p1__45735_SHARP_,p2__45736_SHARP_,p3__45737_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())){
return (function (p1__45738_SHARP_,p2__45739_SHARP_,p3__45740_SHARP_){
return cljs.pprint.format_old_roman(p1__45738_SHARP_,p2__45739_SHARP_,p3__45740_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__45741_SHARP_,p2__45742_SHARP_,p3__45743_SHARP_){
return cljs.pprint.format_new_roman(p1__45741_SHARP_,p2__45742_SHARP_,p3__45743_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__45744_SHARP_,p2__45745_SHARP_,p3__45746_SHARP_){
return cljs.pprint.format_ordinal_english(p1__45744_SHARP_,p2__45745_SHARP_,p3__45746_SHARP_);
});
} else {
return (function (p1__45747_SHARP_,p2__45748_SHARP_,p3__45749_SHARP_){
return cljs.pprint.format_cardinal_english(p1__45747_SHARP_,p2__45748_SHARP_,p3__45749_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__45801 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45801,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45801,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4613__auto___48757 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_48758 = (0);
while(true){
if((i_48758 < n__4613__auto___48757)){
cljs.pprint.prn();

var G__48759 = (i_48758 + (1));
i_48758 = G__48759;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_48761 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_48761 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__4613__auto___48763 = (cnt_48761 - (1));
var i_48764 = (0);
while(true){
if((i_48764 < n__4613__auto___48763)){
cljs.pprint.prn();

var G__48765 = (i_48764 + (1));
i_48764 = G__48765;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4613__auto___48768 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_48769 = (0);
while(true){
if((i_48769 < n__4613__auto___48768)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__48770 = (i_48769 + (1));
i_48769 = G__48770;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__45754_SHARP_,p2__45755_SHARP_,p3__45756_SHARP_){
return cljs.pprint.relative_tabulation(p1__45754_SHARP_,p2__45755_SHARP_,p3__45756_SHARP_);
});
} else {
return (function (p1__45757_SHARP_,p2__45758_SHARP_,p3__45759_SHARP_){
return cljs.pprint.absolute_tabulation(p1__45757_SHARP_,p2__45758_SHARP_,p3__45759_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__45837 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45837,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45837,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__45846 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45846,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45846,(1),null);
var vec__45849 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45849,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45849,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return (function (p1__45760_SHARP_,p2__45761_SHARP_,p3__45762_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__45760_SHARP_,p2__45761_SHARP_,p3__45762_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__4115__auto__ = arg1;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = arg2;
if(cljs.core.truth_(and__4115__auto____$1)){
return arg3;
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = arg1;
if(cljs.core.truth_(and__4115__auto__)){
return arg2;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return (function (params__$1,navigator,offsets){
var vec__45908 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45908,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45908,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
} else {
return (function (params__$1,navigator,offsets){
var vec__45914 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45914,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45914,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__45927){
var vec__45932 = p__45927;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45932,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45932,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45932,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__45957){
var vec__45958 = p__45957;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45958,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45958,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__45969){
var vec__45970 = p__45969;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45970,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45970,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45970,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_(((cljs.core.not(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed)))?new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags):false))){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_(((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed)))?new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags):false))){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_(((cljs.core.not(new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed)))?(function (){var and__4115__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4115__auto__;
}
})():false))){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__4217__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__4218__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__46033_SHARP_,p2__46034_SHARP_){
var val = cljs.core.first(p1__46033_SHARP_);
if((!((((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__46034_SHARP_)),cljs.core.type(val))))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.name(cljs.core.first(p2__46034_SHARP_))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__46033_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__4529__auto__ = (function cljs$pprint$map_params_$_iter__46047(s__46048){
return (new cljs.core.LazySeq(null,(function (){
var s__46048__$1 = s__46048;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46048__$1);
if(temp__5735__auto__){
var s__46048__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46048__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46048__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46050 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46049 = (0);
while(true){
if((i__46049 < size__4528__auto__)){
var vec__46058 = cljs.core._nth(c__4527__auto__,i__46049);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46058,(0),null);
var vec__46061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46058,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46061,(0),null);
cljs.core.chunk_append(b__46050,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__48929 = (i__46049 + (1));
i__46049 = G__48929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46050),cljs$pprint$map_params_$_iter__46047(cljs.core.chunk_rest(s__46048__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46050),null);
}
} else {
var vec__46069 = cljs.core.first(s__46048__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46069,(0),null);
var vec__46072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46069,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46072,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__46047(cljs.core.rest(s__46048__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__46035_SHARP_,p2__46037_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__46035_SHARP_,p2__46037_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46038_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__46038_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__46082 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46082,(0),null);
var vec__46085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46082,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46085,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46085,(1),null);
var vec__46088 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46088,(0),null);
var vec__46091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46088,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46091,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46091,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46091,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__46098 = new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__46098.cljs$core$IFn$_invoke$arity$2 ? fexpr__46098.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__46098.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__4115__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__4115__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__46124 = cljs.pprint.collect_clauses(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46124,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46124,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))], 0)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__46162){
var vec__46163 = p__46162;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46163,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46163,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46163,(2),null);
var vec__46168 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46168,(0),null);
var vec__46171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46168,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46171,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46171,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46171,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46171,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR__orig_val__46181 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__46182 = format_str;
(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__46182);

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume((function (p__46185){
var vec__46186 = p__46185;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46186,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46186,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__46181);
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__49030 = cljs.core.next(format__$1);
format__$1 = G__49030;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__46210 = arguments.length;
switch (G__46210) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not(stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = ((((cljs.pprint.needs_pretty(format)) && (cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream)))))?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR__orig_val__46227 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__46228 = wrapped_stream;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__46228);

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if((!((real_stream === wrapped_stream)))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if(stream === true){
return cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
return null;

}
}
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__46227);
}}));

(cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.pprint.abort_QMARK_(context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__46234 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46234,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46234,(1),null);
var vec__46237 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46237,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46237,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
}));

(cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3);

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__46248 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__46248) : cljs.pprint.reader_macros.call(null,G__46248));
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = macro_char;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__4115__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__46255_49059 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__46256_49060 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__46257_49061 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__46258_49062 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__46257_49061);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__46258_49062);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count46260_49065 = (0);
var alis_49066__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count46260_49065 < cljs.core._STAR_print_length_STAR_)))){
if(alis_49066__$1){
cljs.pprint.write_out(cljs.core.first(alis_49066__$1));

if(cljs.core.next(alis_49066__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__49074 = (length_count46260_49065 + (1));
var G__49075 = cljs.core.next(alis_49066__$1);
length_count46260_49065 = G__49074;
alis_49066__$1 = G__49075;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__46256_49060);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__46255_49059);
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__46274_49081 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__46275_49082 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__46276_49083 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__46277_49084 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__46276_49083);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__46277_49084);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count46280_49085 = (0);
var aseq_49086 = cljs.core.seq(avec);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count46280_49085 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_49086){
cljs.pprint.write_out(cljs.core.first(aseq_49086));

if(cljs.core.next(aseq_49086)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__49089 = (length_count46280_49085 + (1));
var G__49090 = cljs.core.next(aseq_49086);
length_count46280_49085 = G__49089;
aseq_49086 = G__49090;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__46275_49082);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__46274_49081);
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__42782__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49095__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49095 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49098__i = 0, G__49098__a = new Array(arguments.length -  0);
while (G__49098__i < G__49098__a.length) {G__49098__a[G__49098__i] = arguments[G__49098__i + 0]; ++G__49098__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49098__a,0,null);
} 
return G__49095__delegate.call(this,args__42784__auto__);};
G__49095.cljs$lang$maxFixedArity = 0;
G__49095.cljs$lang$applyTo = (function (arglist__49099){
var args__42784__auto__ = cljs.core.seq(arglist__49099);
return G__49095__delegate(args__42784__auto__);
});
G__49095.cljs$core$IFn$_invoke$arity$variadic = G__49095__delegate;
return G__49095;
})()
;
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__46302 = (((!(cljs.core.record_QMARK_(amap))))?(function (){var fexpr__46322 = new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",15,1,10307,10307,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__46322.cljs$core$IFn$_invoke$arity$1 ? fexpr__46322.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__46322.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46302,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46302,(1),null);
var amap__$1 = (function (){var or__4126__auto__ = lift_map;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__46328_49107 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__46329_49108 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__46330_49109 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__46331_49110 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__46330_49109);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__46331_49110);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count46333_49118 = (0);
var aseq_49119 = cljs.core.seq(amap__$1);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count46333_49118 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_49119){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__46339_49128 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__46340_49129 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__46341_49130 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__46342_49131 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__46341_49130);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__46342_49131);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_49119));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

(cljs.pprint._STAR_current_length_STAR_ = (0));

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_49119)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__46340_49129);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__46339_49128);
}}


if(cljs.core.next(aseq_49119)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__49143 = (length_count46333_49118 + (1));
var G__49144 = cljs.core.next(aseq_49119);
length_count46333_49118 = G__49143;
aseq_49119 = G__49144;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__46329_49108);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__46328_49107);
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__42782__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49151__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49151 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49152__i = 0, G__49152__a = new Array(arguments.length -  0);
while (G__49152__i < G__49152__a.length) {G__49152__a[G__49152__i] = arguments[G__49152__i + 0]; ++G__49152__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49152__a,0,null);
} 
return G__49151__delegate.call(this,args__42784__auto__);};
G__49151.cljs$lang$maxFixedArity = 0;
G__49151.cljs$lang$applyTo = (function (arglist__49153){
var args__42784__auto__ = cljs.core.seq(arglist__49153);
return G__49151__delegate(args__42784__auto__);
});
G__49151.cljs$core$IFn$_invoke$arity$variadic = G__49151__delegate;
return G__49151;
})()
;
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__4126__auto__ = (function (){var temp__5735__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5735__auto__)){
var match = temp__5735__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__46391_49163 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__46392_49164 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__46393_49165 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__46394_49166 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__46393_49165);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__46394_49166);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(- (((prefix).length) - (2))));

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out((((((((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o)))?(!(cljs.core._realized_QMARK_(o))):false))?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__46392_49164);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__46391_49163);
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__42782__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49179__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49179 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49182__i = 0, G__49182__a = new Array(arguments.length -  0);
while (G__49182__i < G__49182__a.length) {G__49182__a[G__49182__i] = arguments[G__49182__i + 0]; ++G__49182__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49182__a,0,null);
} 
return G__49179__delegate.call(this,args__42784__auto__);};
G__49179.cljs$lang$maxFixedArity = 0;
G__49179.cljs$lang$applyTo = (function (arglist__49183){
var args__42784__auto__ = cljs.core.seq(arglist__49183);
return G__49179__delegate(args__42784__auto__);
});
G__49179.cljs$core$IFn$_invoke$arity$variadic = G__49179__delegate;
return G__49179;
})()
;
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_(obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_(obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_(obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_(obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.simple_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__46439 = cljs.core.get_global_hierarchy;
return (fexpr__46439.cljs$core$IFn$_invoke$arity$0 ? fexpr__46439.cljs$core$IFn$_invoke$arity$0() : fexpr__46439.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__46451 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46451,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46451,(1),null);
var vec__46454 = reference;
var seq__46455 = cljs.core.seq(vec__46454);
var first__46456 = cljs.core.first(seq__46455);
var seq__46455__$1 = cljs.core.next(seq__46455);
var keyw = first__46456;
var args = seq__46455__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__46463_49228 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__46464_49229 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__46465_49230 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__46466_49231 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__46465_49230);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__46466_49231);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__42782__auto__ = "~w~:i";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49243__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49243 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49248__i = 0, G__49248__a = new Array(arguments.length -  0);
while (G__49248__i < G__49248__a.length) {G__49248__a[G__49248__i] = arguments[G__49248__i + 0]; ++G__49248__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49248__a,0,null);
} 
return G__49243__delegate.call(this,args__42784__auto__);};
G__49243.cljs$lang$maxFixedArity = 0;
G__49243.cljs$lang$applyTo = (function (arglist__49250){
var args__42784__auto__ = cljs.core.seq(arglist__49250);
return G__49243__delegate(args__42784__auto__);
});
G__49243.cljs$core$IFn$_invoke$arity$variadic = G__49243__delegate;
return G__49243;
})()
;
})()(keyw);

var args_49252__$1 = args;
while(true){
if(cljs.core.seq(args_49252__$1)){
(function (){var format_in__42782__auto__ = " ";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return ((function (args_49252__$1,format_in__42782__auto__,cf__42783__auto__,_STAR_current_level_STAR__orig_val__46463_49228,_STAR_current_length_STAR__orig_val__46464_49229,_STAR_current_level_STAR__temp_val__46465_49230,_STAR_current_length_STAR__temp_val__46466_49231,vec__46451,start,end,vec__46454,seq__46455,first__46456,seq__46455__$1,keyw,args){
return (function() { 
var G__49253__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49253 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49259__i = 0, G__49259__a = new Array(arguments.length -  0);
while (G__49259__i < G__49259__a.length) {G__49259__a[G__49259__i] = arguments[G__49259__i + 0]; ++G__49259__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49259__a,0,null);
} 
return G__49253__delegate.call(this,args__42784__auto__);};
G__49253.cljs$lang$maxFixedArity = 0;
G__49253.cljs$lang$applyTo = (function (arglist__49262){
var args__42784__auto__ = cljs.core.seq(arglist__49262);
return G__49253__delegate(args__42784__auto__);
});
G__49253.cljs$core$IFn$_invoke$arity$variadic = G__49253__delegate;
return G__49253;
})()
;
;})(args_49252__$1,format_in__42782__auto__,cf__42783__auto__,_STAR_current_level_STAR__orig_val__46463_49228,_STAR_current_length_STAR__orig_val__46464_49229,_STAR_current_level_STAR__temp_val__46465_49230,_STAR_current_length_STAR__temp_val__46466_49231,vec__46451,start,end,vec__46454,seq__46455,first__46456,seq__46455__$1,keyw,args))
})()();

var arg_49263 = cljs.core.first(args_49252__$1);
if(cljs.core.sequential_QMARK_(arg_49263)){
var vec__46484_49264 = cljs.pprint.brackets(arg_49263);
var start_49265__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46484_49264,(0),null);
var end_49266__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46484_49264,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__46487_49271 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__46488_49272 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__46489_49273 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__46490_49274 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__46489_49273);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__46490_49274);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_49265__$1,null,end_49266__$1);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_49263),(3))) && ((cljs.core.second(arg_49263) instanceof cljs.core.Keyword)))){
var vec__46497_49279 = arg_49263;
var ns_49280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46497_49279,(0),null);
var kw_49281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46497_49279,(1),null);
var lis_49282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46497_49279,(2),null);
(function (){var format_in__42782__auto__ = "~w ~w ";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return ((function (args_49252__$1,format_in__42782__auto__,cf__42783__auto__,vec__46497_49279,ns_49280,kw_49281,lis_49282,_STAR_current_level_STAR__orig_val__46487_49271,_STAR_current_length_STAR__orig_val__46488_49272,_STAR_current_level_STAR__temp_val__46489_49273,_STAR_current_length_STAR__temp_val__46490_49274,vec__46484_49264,start_49265__$1,end_49266__$1,arg_49263,_STAR_current_level_STAR__orig_val__46463_49228,_STAR_current_length_STAR__orig_val__46464_49229,_STAR_current_level_STAR__temp_val__46465_49230,_STAR_current_length_STAR__temp_val__46466_49231,vec__46451,start,end,vec__46454,seq__46455,first__46456,seq__46455__$1,keyw,args){
return (function() { 
var G__49296__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49296 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49298__i = 0, G__49298__a = new Array(arguments.length -  0);
while (G__49298__i < G__49298__a.length) {G__49298__a[G__49298__i] = arguments[G__49298__i + 0]; ++G__49298__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49298__a,0,null);
} 
return G__49296__delegate.call(this,args__42784__auto__);};
G__49296.cljs$lang$maxFixedArity = 0;
G__49296.cljs$lang$applyTo = (function (arglist__49302){
var args__42784__auto__ = cljs.core.seq(arglist__49302);
return G__49296__delegate(args__42784__auto__);
});
G__49296.cljs$core$IFn$_invoke$arity$variadic = G__49296__delegate;
return G__49296;
})()
;
;})(args_49252__$1,format_in__42782__auto__,cf__42783__auto__,vec__46497_49279,ns_49280,kw_49281,lis_49282,_STAR_current_level_STAR__orig_val__46487_49271,_STAR_current_length_STAR__orig_val__46488_49272,_STAR_current_level_STAR__temp_val__46489_49273,_STAR_current_length_STAR__temp_val__46490_49274,vec__46484_49264,start_49265__$1,end_49266__$1,arg_49263,_STAR_current_level_STAR__orig_val__46463_49228,_STAR_current_length_STAR__orig_val__46464_49229,_STAR_current_level_STAR__temp_val__46465_49230,_STAR_current_length_STAR__temp_val__46466_49231,vec__46451,start,end,vec__46454,seq__46455,first__46456,seq__46455__$1,keyw,args))
})()(ns_49280,kw_49281);

if(cljs.core.sequential_QMARK_(lis_49282)){
(function (){var format_in__42782__auto__ = ((cljs.core.vector_QMARK_(lis_49282))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return ((function (args_49252__$1,format_in__42782__auto__,cf__42783__auto__,vec__46497_49279,ns_49280,kw_49281,lis_49282,_STAR_current_level_STAR__orig_val__46487_49271,_STAR_current_length_STAR__orig_val__46488_49272,_STAR_current_level_STAR__temp_val__46489_49273,_STAR_current_length_STAR__temp_val__46490_49274,vec__46484_49264,start_49265__$1,end_49266__$1,arg_49263,_STAR_current_level_STAR__orig_val__46463_49228,_STAR_current_length_STAR__orig_val__46464_49229,_STAR_current_level_STAR__temp_val__46465_49230,_STAR_current_length_STAR__temp_val__46466_49231,vec__46451,start,end,vec__46454,seq__46455,first__46456,seq__46455__$1,keyw,args){
return (function() { 
var G__49320__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49320 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49321__i = 0, G__49321__a = new Array(arguments.length -  0);
while (G__49321__i < G__49321__a.length) {G__49321__a[G__49321__i] = arguments[G__49321__i + 0]; ++G__49321__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49321__a,0,null);
} 
return G__49320__delegate.call(this,args__42784__auto__);};
G__49320.cljs$lang$maxFixedArity = 0;
G__49320.cljs$lang$applyTo = (function (arglist__49323){
var args__42784__auto__ = cljs.core.seq(arglist__49323);
return G__49320__delegate(args__42784__auto__);
});
G__49320.cljs$core$IFn$_invoke$arity$variadic = G__49320__delegate;
return G__49320;
})()
;
;})(args_49252__$1,format_in__42782__auto__,cf__42783__auto__,vec__46497_49279,ns_49280,kw_49281,lis_49282,_STAR_current_level_STAR__orig_val__46487_49271,_STAR_current_length_STAR__orig_val__46488_49272,_STAR_current_level_STAR__temp_val__46489_49273,_STAR_current_length_STAR__temp_val__46490_49274,vec__46484_49264,start_49265__$1,end_49266__$1,arg_49263,_STAR_current_level_STAR__orig_val__46463_49228,_STAR_current_length_STAR__orig_val__46464_49229,_STAR_current_level_STAR__temp_val__46465_49230,_STAR_current_length_STAR__temp_val__46466_49231,vec__46451,start,end,vec__46454,seq__46455,first__46456,seq__46455__$1,keyw,args))
})()(lis_49282);
} else {
cljs.pprint.write_out(lis_49282);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__42782__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return ((function (args_49252__$1,format_in__42782__auto__,cf__42783__auto__,_STAR_current_level_STAR__orig_val__46487_49271,_STAR_current_length_STAR__orig_val__46488_49272,_STAR_current_level_STAR__temp_val__46489_49273,_STAR_current_length_STAR__temp_val__46490_49274,vec__46484_49264,start_49265__$1,end_49266__$1,arg_49263,_STAR_current_level_STAR__orig_val__46463_49228,_STAR_current_length_STAR__orig_val__46464_49229,_STAR_current_level_STAR__temp_val__46465_49230,_STAR_current_length_STAR__temp_val__46466_49231,vec__46451,start,end,vec__46454,seq__46455,first__46456,seq__46455__$1,keyw,args){
return (function() { 
var G__49324__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49324 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49328__i = 0, G__49328__a = new Array(arguments.length -  0);
while (G__49328__i < G__49328__a.length) {G__49328__a[G__49328__i] = arguments[G__49328__i + 0]; ++G__49328__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49328__a,0,null);
} 
return G__49324__delegate.call(this,args__42784__auto__);};
G__49324.cljs$lang$maxFixedArity = 0;
G__49324.cljs$lang$applyTo = (function (arglist__49329){
var args__42784__auto__ = cljs.core.seq(arglist__49329);
return G__49324__delegate(args__42784__auto__);
});
G__49324.cljs$core$IFn$_invoke$arity$variadic = G__49324__delegate;
return G__49324;
})()
;
;})(args_49252__$1,format_in__42782__auto__,cf__42783__auto__,_STAR_current_level_STAR__orig_val__46487_49271,_STAR_current_length_STAR__orig_val__46488_49272,_STAR_current_level_STAR__temp_val__46489_49273,_STAR_current_length_STAR__temp_val__46490_49274,vec__46484_49264,start_49265__$1,end_49266__$1,arg_49263,_STAR_current_level_STAR__orig_val__46463_49228,_STAR_current_length_STAR__orig_val__46464_49229,_STAR_current_level_STAR__temp_val__46465_49230,_STAR_current_length_STAR__temp_val__46466_49231,vec__46451,start,end,vec__46454,seq__46455,first__46456,seq__46455__$1,keyw,args))
})(),arg_49263);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__46488_49272);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__46487_49271);
}}


if(cljs.core.next(args_49252__$1)){
(function (){var format_in__42782__auto__ = "~_";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return ((function (args_49252__$1,format_in__42782__auto__,cf__42783__auto__,vec__46484_49264,start_49265__$1,end_49266__$1,arg_49263,_STAR_current_level_STAR__orig_val__46463_49228,_STAR_current_length_STAR__orig_val__46464_49229,_STAR_current_level_STAR__temp_val__46465_49230,_STAR_current_length_STAR__temp_val__46466_49231,vec__46451,start,end,vec__46454,seq__46455,first__46456,seq__46455__$1,keyw,args){
return (function() { 
var G__49336__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49336 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49341__i = 0, G__49341__a = new Array(arguments.length -  0);
while (G__49341__i < G__49341__a.length) {G__49341__a[G__49341__i] = arguments[G__49341__i + 0]; ++G__49341__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49341__a,0,null);
} 
return G__49336__delegate.call(this,args__42784__auto__);};
G__49336.cljs$lang$maxFixedArity = 0;
G__49336.cljs$lang$applyTo = (function (arglist__49342){
var args__42784__auto__ = cljs.core.seq(arglist__49342);
return G__49336__delegate(args__42784__auto__);
});
G__49336.cljs$core$IFn$_invoke$arity$variadic = G__49336__delegate;
return G__49336;
})()
;
;})(args_49252__$1,format_in__42782__auto__,cf__42783__auto__,vec__46484_49264,start_49265__$1,end_49266__$1,arg_49263,_STAR_current_level_STAR__orig_val__46463_49228,_STAR_current_length_STAR__orig_val__46464_49229,_STAR_current_level_STAR__temp_val__46465_49230,_STAR_current_length_STAR__temp_val__46466_49231,vec__46451,start,end,vec__46454,seq__46455,first__46456,seq__46455__$1,keyw,args))
})()();
} else {
}
} else {
cljs.pprint.write_out(arg_49263);

if(cljs.core.next(args_49252__$1)){
(function (){var format_in__42782__auto__ = "~:_";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return ((function (args_49252__$1,format_in__42782__auto__,cf__42783__auto__,arg_49263,_STAR_current_level_STAR__orig_val__46463_49228,_STAR_current_length_STAR__orig_val__46464_49229,_STAR_current_level_STAR__temp_val__46465_49230,_STAR_current_length_STAR__temp_val__46466_49231,vec__46451,start,end,vec__46454,seq__46455,first__46456,seq__46455__$1,keyw,args){
return (function() { 
var G__49346__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49346 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49351__i = 0, G__49351__a = new Array(arguments.length -  0);
while (G__49351__i < G__49351__a.length) {G__49351__a[G__49351__i] = arguments[G__49351__i + 0]; ++G__49351__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49351__a,0,null);
} 
return G__49346__delegate.call(this,args__42784__auto__);};
G__49346.cljs$lang$maxFixedArity = 0;
G__49346.cljs$lang$applyTo = (function (arglist__49352){
var args__42784__auto__ = cljs.core.seq(arglist__49352);
return G__49346__delegate(args__42784__auto__);
});
G__49346.cljs$core$IFn$_invoke$arity$variadic = G__49346__delegate;
return G__49346;
})()
;
;})(args_49252__$1,format_in__42782__auto__,cf__42783__auto__,arg_49263,_STAR_current_level_STAR__orig_val__46463_49228,_STAR_current_length_STAR__orig_val__46464_49229,_STAR_current_level_STAR__temp_val__46465_49230,_STAR_current_length_STAR__temp_val__46466_49231,vec__46451,start,end,vec__46454,seq__46455,first__46456,seq__46455__$1,keyw,args))
})()();
} else {
}
}

var G__49359 = cljs.core.next(args_49252__$1);
args_49252__$1 = G__49359;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__46464_49229);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__46463_49228);
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__46531 = alis;
var seq__46532 = cljs.core.seq(vec__46531);
var first__46533 = cljs.core.first(seq__46532);
var seq__46532__$1 = cljs.core.next(seq__46532);
var ns_sym = first__46533;
var first__46533__$1 = cljs.core.first(seq__46532__$1);
var seq__46532__$2 = cljs.core.next(seq__46532__$1);
var ns_name = first__46533__$1;
var stuff = seq__46532__$2;
var vec__46534 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46534,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46534,(1),null);
var vec__46537 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46537,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46537,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__46554_49373 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__46555_49374 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__46556_49375 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__46557_49376 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__46556_49375);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__46557_49376);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__42782__auto__ = "~w ~1I~@_~w";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49388__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49388 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49392__i = 0, G__49392__a = new Array(arguments.length -  0);
while (G__49392__i < G__49392__a.length) {G__49392__a[G__49392__i] = arguments[G__49392__i + 0]; ++G__49392__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49392__a,0,null);
} 
return G__49388__delegate.call(this,args__42784__auto__);};
G__49388.cljs$lang$maxFixedArity = 0;
G__49388.cljs$lang$applyTo = (function (arglist__49393){
var args__42784__auto__ = cljs.core.seq(arglist__49393);
return G__49388__delegate(args__42784__auto__);
});
G__49388.cljs$core$IFn$_invoke$arity$variadic = G__49388__delegate;
return G__49388;
})()
;
})()(ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__4126__auto__ = doc_str;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = attr_map;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
(function (){var format_in__42782__auto__ = "~@:_";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49397__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49397 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49405__i = 0, G__49405__a = new Array(arguments.length -  0);
while (G__49405__i < G__49405__a.length) {G__49405__a[G__49405__i] = arguments[G__49405__i + 0]; ++G__49405__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49405__a,0,null);
} 
return G__49397__delegate.call(this,args__42784__auto__);};
G__49397.cljs$lang$maxFixedArity = 0;
G__49397.cljs$lang$applyTo = (function (arglist__49410){
var args__42784__auto__ = cljs.core.seq(arglist__49410);
return G__49397__delegate(args__42784__auto__);
});
G__49397.cljs$core$IFn$_invoke$arity$variadic = G__49397__delegate;
return G__49397;
})()
;
})()();
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__4126__auto__ = attr_map;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__42782__auto__ = "~w~:[~;~:@_~]";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49421__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49421 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49423__i = 0, G__49423__a = new Array(arguments.length -  0);
while (G__49423__i < G__49423__a.length) {G__49423__a[G__49423__i] = arguments[G__49423__i + 0]; ++G__49423__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49423__a,0,null);
} 
return G__49421__delegate.call(this,args__42784__auto__);};
G__49421.cljs$lang$maxFixedArity = 0;
G__49421.cljs$lang$applyTo = (function (arglist__49424){
var args__42784__auto__ = cljs.core.seq(arglist__49424);
return G__49421__delegate(args__42784__auto__);
});
G__49421.cljs$core$IFn$_invoke$arity$variadic = G__49421__delegate;
return G__49421;
})()
;
})()(attr_map,cljs.core.seq(references));
} else {
}

var references_49426__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_49426__$1));

var temp__5735__auto___49432 = cljs.core.next(references_49426__$1);
if(temp__5735__auto___49432){
var references_49433__$2 = temp__5735__auto___49432;
cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__49437 = references_49433__$2;
references_49426__$1 = G__49437;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__46555_49374);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__46554_49373);
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__42782__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49439__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49439 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49440__i = 0, G__49440__a = new Array(arguments.length -  0);
while (G__49440__i < G__49440__a.length) {G__49440__a[G__49440__i] = arguments[G__49440__i + 0]; ++G__49440__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49440__a,0,null);
} 
return G__49439__delegate.call(this,args__42784__auto__);};
G__49439.cljs$lang$maxFixedArity = 0;
G__49439.cljs$lang$applyTo = (function (arglist__49441){
var args__42784__auto__ = cljs.core.seq(arglist__49441);
return G__49439__delegate(args__42784__auto__);
});
G__49439.cljs$core$IFn$_invoke$arity$variadic = G__49439__delegate;
return G__49439;
})()
;
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__42782__auto__ = " ~_";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49448__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49448 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49449__i = 0, G__49449__a = new Array(arguments.length -  0);
while (G__49449__i < G__49449__a.length) {G__49449__a[G__49449__i] = arguments[G__49449__i + 0]; ++G__49449__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49449__a,0,null);
} 
return G__49448__delegate.call(this,args__42784__auto__);};
G__49448.cljs$lang$maxFixedArity = 0;
G__49448.cljs$lang$applyTo = (function (arglist__49450){
var args__42784__auto__ = cljs.core.seq(arglist__49450);
return G__49448__delegate(args__42784__auto__);
});
G__49448.cljs$core$IFn$_invoke$arity$variadic = G__49448__delegate;
return G__49448;
})()
;
})()();
} else {
(function (){var format_in__42782__auto__ = " ~@_";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49456__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49456 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49457__i = 0, G__49457__a = new Array(arguments.length -  0);
while (G__49457__i < G__49457__a.length) {G__49457__a[G__49457__i] = arguments[G__49457__i + 0]; ++G__49457__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49457__a,0,null);
} 
return G__49456__delegate.call(this,args__42784__auto__);};
G__49456.cljs$lang$maxFixedArity = 0;
G__49456.cljs$lang$applyTo = (function (arglist__49464){
var args__42784__auto__ = cljs.core.seq(arglist__49464);
return G__49456__delegate(args__42784__auto__);
});
G__49456.cljs$core$IFn$_invoke$arity$variadic = G__49456__delegate;
return G__49456;
})()
;
})()();
}

return (function (){var format_in__42782__auto__ = "~{~w~^ ~_~}";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49468__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49468 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49472__i = 0, G__49472__a = new Array(arguments.length -  0);
while (G__49472__i < G__49472__a.length) {G__49472__a[G__49472__i] = arguments[G__49472__i + 0]; ++G__49472__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49472__a,0,null);
} 
return G__49468__delegate.call(this,args__42784__auto__);};
G__49468.cljs$lang$maxFixedArity = 0;
G__49468.cljs$lang$applyTo = (function (arglist__49473){
var args__42784__auto__ = cljs.core.seq(arglist__49473);
return G__49468__delegate(args__42784__auto__);
});
G__49468.cljs$core$IFn$_invoke$arity$variadic = G__49468__delegate;
return G__49468;
})()
;
})()(alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
return (function (){var format_in__42782__auto__ = " ~_~{~w~^ ~_~}";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49474__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49474 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49475__i = 0, G__49475__a = new Array(arguments.length -  0);
while (G__49475__i < G__49475__a.length) {G__49475__a[G__49475__i] = arguments[G__49475__i + 0]; ++G__49475__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49475__a,0,null);
} 
return G__49474__delegate.call(this,args__42784__auto__);};
G__49474.cljs$lang$maxFixedArity = 0;
G__49474.cljs$lang$applyTo = (function (arglist__49476){
var args__42784__auto__ = cljs.core.seq(arglist__49476);
return G__49474__delegate(args__42784__auto__);
});
G__49474.cljs$core$IFn$_invoke$arity$variadic = G__49474__delegate;
return G__49474;
})()
;
})()(alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__46725 = alis;
var seq__46726 = cljs.core.seq(vec__46725);
var first__46727 = cljs.core.first(seq__46726);
var seq__46726__$1 = cljs.core.next(seq__46726);
var defn_sym = first__46727;
var first__46727__$1 = cljs.core.first(seq__46726__$1);
var seq__46726__$2 = cljs.core.next(seq__46726__$1);
var defn_name = first__46727__$1;
var stuff = seq__46726__$2;
var vec__46728 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46728,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46728,(1),null);
var vec__46731 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46731,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46731,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__46740_49493 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__46741_49494 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__46742_49495 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__46743_49496 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__46742_49495);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__46743_49496);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__42782__auto__ = "~w ~1I~@_~w";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49498__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49498 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49500__i = 0, G__49500__a = new Array(arguments.length -  0);
while (G__49500__i < G__49500__a.length) {G__49500__a[G__49500__i] = arguments[G__49500__i + 0]; ++G__49500__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49500__a,0,null);
} 
return G__49498__delegate.call(this,args__42784__auto__);};
G__49498.cljs$lang$maxFixedArity = 0;
G__49498.cljs$lang$applyTo = (function (arglist__49501){
var args__42784__auto__ = cljs.core.seq(arglist__49501);
return G__49498__delegate(args__42784__auto__);
});
G__49498.cljs$core$IFn$_invoke$arity$variadic = G__49498__delegate;
return G__49498;
})()
;
})()(defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__42782__auto__ = " ~_~w";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49503__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49503 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49504__i = 0, G__49504__a = new Array(arguments.length -  0);
while (G__49504__i < G__49504__a.length) {G__49504__a[G__49504__i] = arguments[G__49504__i + 0]; ++G__49504__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49504__a,0,null);
} 
return G__49503__delegate.call(this,args__42784__auto__);};
G__49503.cljs$lang$maxFixedArity = 0;
G__49503.cljs$lang$applyTo = (function (arglist__49506){
var args__42784__auto__ = cljs.core.seq(arglist__49506);
return G__49503__delegate(args__42784__auto__);
});
G__49503.cljs$core$IFn$_invoke$arity$variadic = G__49503__delegate;
return G__49503;
})()
;
})()(doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__42782__auto__ = " ~_~w";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49510__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49510 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49511__i = 0, G__49511__a = new Array(arguments.length -  0);
while (G__49511__i < G__49511__a.length) {G__49511__a[G__49511__i] = arguments[G__49511__i + 0]; ++G__49511__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49511__a,0,null);
} 
return G__49510__delegate.call(this,args__42784__auto__);};
G__49510.cljs$lang$maxFixedArity = 0;
G__49510.cljs$lang$applyTo = (function (arglist__49512){
var args__42784__auto__ = cljs.core.seq(arglist__49512);
return G__49510__delegate(args__42784__auto__);
});
G__49510.cljs$core$IFn$_invoke$arity$variadic = G__49510__delegate;
return G__49510;
})()
;
})()(attr_map);
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__4126__auto__ = doc_str;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__4126__auto__ = doc_str;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__46741_49494);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__46740_49493);
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__46759_49521 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__46760_49522 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__46761_49523 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__46762_49524 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__46761_49523);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__46762_49524);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count46764_49527 = (0);
var binding_49528 = binding_vec;
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count46764_49527 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq(binding_49528)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__46765_49531 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__46766_49532 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__46767_49533 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__46768_49534 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__46767_49533);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__46768_49534);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_49528));

if(cljs.core.next(binding_49528)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(binding_49528));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__46766_49532);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__46765_49531);
}}


if(cljs.core.next(cljs.core.rest(binding_49528))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__49538 = (length_count46764_49527 + (1));
var G__49539 = cljs.core.next(cljs.core.rest(binding_49528));
length_count46764_49527 = G__49538;
binding_49528 = G__49539;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__46760_49522);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__46759_49521);
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__46788_49542 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__46789_49543 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__46790_49544 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__46791_49545 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__46790_49544);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__46791_49545);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis))))){
(function (){var format_in__42782__auto__ = "~w ~1I~@_";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49548__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49548 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49549__i = 0, G__49549__a = new Array(arguments.length -  0);
while (G__49549__i < G__49549__a.length) {G__49549__a[G__49549__i] = arguments[G__49549__i + 0]; ++G__49549__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49549__a,0,null);
} 
return G__49548__delegate.call(this,args__42784__auto__);};
G__49548.cljs$lang$maxFixedArity = 0;
G__49548.cljs$lang$applyTo = (function (arglist__49551){
var args__42784__auto__ = cljs.core.seq(arglist__49551);
return G__49548__delegate(args__42784__auto__);
});
G__49548.cljs$core$IFn$_invoke$arity$variadic = G__49548__delegate;
return G__49548;
})()
;
})()(base_sym);

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

(function (){var format_in__42782__auto__ = " ~_~{~w~^ ~_~}";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49555__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49555 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49558__i = 0, G__49558__a = new Array(arguments.length -  0);
while (G__49558__i < G__49558__a.length) {G__49558__a[G__49558__i] = arguments[G__49558__i + 0]; ++G__49558__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49558__a,0,null);
} 
return G__49555__delegate.call(this,args__42784__auto__);};
G__49555.cljs$lang$maxFixedArity = 0;
G__49555.cljs$lang$applyTo = (function (arglist__49559){
var args__42784__auto__ = cljs.core.seq(arglist__49559);
return G__49555__delegate(args__42784__auto__);
});
G__49555.cljs$core$IFn$_invoke$arity$variadic = G__49555__delegate;
return G__49555;
})()
;
})()(cljs.core.next(cljs.core.rest(alis)));
} else {
cljs.pprint.pprint_simple_code_list(alis);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__46789_49543);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__46788_49542);
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__42782__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49564__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49564 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49565__i = 0, G__49565__a = new Array(arguments.length -  0);
while (G__49565__i < G__49565__a.length) {G__49565__a[G__49565__i] = arguments[G__49565__i + 0]; ++G__49565__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49565__a,0,null);
} 
return G__49564__delegate.call(this,args__42784__auto__);};
G__49564.cljs$lang$maxFixedArity = 0;
G__49564.cljs$lang$applyTo = (function (arglist__49566){
var args__42784__auto__ = cljs.core.seq(arglist__49566);
return G__49564__delegate(args__42784__auto__);
});
G__49564.cljs$core$IFn$_invoke$arity$variadic = G__49564__delegate;
return G__49564;
})()
;
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__46808_49567 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__46809_49568 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__46810_49569 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__46811_49570 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__46810_49569);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__46811_49570);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count46813_49574 = (0);
var alis_49575__$1 = cljs.core.next(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count46813_49574 < cljs.core._STAR_print_length_STAR_)))){
if(alis_49575__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__46815_49578 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__46816_49579 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__46817_49580 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__46818_49581 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__46817_49580);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__46818_49581);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_49575__$1));

if(cljs.core.next(alis_49575__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(alis_49575__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__46816_49579);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__46815_49578);
}}


if(cljs.core.next(cljs.core.rest(alis_49575__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__49585 = (length_count46813_49574 + (1));
var G__49586 = cljs.core.next(cljs.core.rest(alis_49575__$1));
length_count46813_49574 = G__49585;
alis_49575__$1 = G__49586;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__46809_49568);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__46808_49567);
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__46831_49590 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__46832_49591 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__46833_49592 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__46834_49593 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__46833_49592);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__46834_49593);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__42782__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49602__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49602 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49603__i = 0, G__49603__a = new Array(arguments.length -  0);
while (G__49603__i < G__49603__a.length) {G__49603__a[G__49603__i] = arguments[G__49603__i + 0]; ++G__49603__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49603__a,0,null);
} 
return G__49602__delegate.call(this,args__42784__auto__);};
G__49602.cljs$lang$maxFixedArity = 0;
G__49602.cljs$lang$applyTo = (function (arglist__49604){
var args__42784__auto__ = cljs.core.seq(arglist__49604);
return G__49602__delegate(args__42784__auto__);
});
G__49602.cljs$core$IFn$_invoke$arity$variadic = G__49602__delegate;
return G__49602;
})()
;
})(),alis);

var length_count46840_49606 = (0);
var alis_49607__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count46840_49606 < cljs.core._STAR_print_length_STAR_)))){
if(alis_49607__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__46842_49609 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__46843_49610 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__46844_49611 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__46845_49612 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__46844_49611);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__46845_49612);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_49607__$1));

if(cljs.core.next(alis_49607__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(alis_49607__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__46843_49610);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__46842_49609);
}}


if(cljs.core.next(cljs.core.rest(alis_49607__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__49618 = (length_count46840_49606 + (1));
var G__49619 = cljs.core.next(cljs.core.rest(alis_49607__$1));
length_count46840_49606 = G__49618;
alis_49607__$1 = G__49619;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__46832_49591);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__46831_49590);
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR__orig_val__46864 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__46865 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__46860_SHARP_,p2__46861_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__46860_SHARP_,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__46861_SHARP_)].join('')],null));
}),args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));
(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__46865);

try{return (function (){var format_in__42782__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__42783__auto__ = ((typeof format_in__42782__auto__ === 'string')?cljs.pprint.cached_compile(format_in__42782__auto__):format_in__42782__auto__);
return (function() { 
var G__49624__delegate = function (args__42784__auto__){
var navigator__42785__auto__ = cljs.pprint.init_navigator(args__42784__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__42783__auto__,navigator__42785__auto__);
};
var G__49624 = function (var_args){
var args__42784__auto__ = null;
if (arguments.length > 0) {
var G__49625__i = 0, G__49625__a = new Array(arguments.length -  0);
while (G__49625__i < G__49625__a.length) {G__49625__a[G__49625__i] = arguments[G__49625__i + 0]; ++G__49625__i;}
  args__42784__auto__ = new cljs.core.IndexedSeq(G__49625__a,0,null);
} 
return G__49624__delegate.call(this,args__42784__auto__);};
G__49624.cljs$lang$maxFixedArity = 0;
G__49624.cljs$lang$applyTo = (function (arglist__49626){
var args__42784__auto__ = cljs.core.seq(arglist__49626);
return G__49624__delegate(args__42784__auto__);
});
G__49624.cljs$core$IFn$_invoke$arity$variadic = G__49624__delegate;
return G__49624;
})()
;
})()(nlis);
}finally {(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__46864);
}} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__46872_49629 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__46873_49630 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__46874_49631 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__46875_49632 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__46874_49631);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__46875_49632);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count46878_49633 = (0);
var alis_49634__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count46878_49633 < cljs.core._STAR_print_length_STAR_)))){
if(alis_49634__$1){
cljs.pprint.write_out(cljs.core.first(alis_49634__$1));

if(cljs.core.next(alis_49634__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__49636 = (length_count46878_49633 + (1));
var G__49637 = cljs.core.next(alis_49634__$1);
length_count46878_49633 = G__49636;
alis_49634__$1 = G__49637;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__46873_49630);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__46872_49629);
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function cljs$pprint$two_forms_$_iter__46880(s__46881){
return (new cljs.core.LazySeq(null,(function (){
var s__46881__$1 = s__46881;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46881__$1);
if(temp__5735__auto__){
var s__46881__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46881__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46881__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46883 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46882 = (0);
while(true){
if((i__46882 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__46882);
cljs.core.chunk_append(b__46883,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__49649 = (i__46882 + (1));
i__46882 = G__49649;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46883),cljs$pprint$two_forms_$_iter__46880(cljs.core.chunk_rest(s__46881__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46883),null);
}
} else {
var x = cljs.core.first(s__46881__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__46880(cljs.core.rest(s__46881__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46889_SHARP_){
var vec__46893 = p1__46889_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46893,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46893,(1),null);
if(cljs.core.not((function (){var or__4126__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__46889_SHARP_;
}
}),amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5733__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first(alis));
if(cljs.core.truth_(temp__5733__auto__)){
var special_form = temp__5733__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5733__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5733__auto__)){
var arg_num = temp__5733__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.code_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__46902 = cljs.core.get_global_hierarchy;
return (fexpr__46902.cljs$core$IFn$_invoke$arity$0 ? fexpr__46902.cljs$core$IFn$_invoke$arity$0() : fexpr__46902.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (width - cljs.core.count(s));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__46918 = arguments.length;
switch (G__46918) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,((cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)).length),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46911_SHARP_){
return ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__46911_SHARP_,k))).length);
}),rows));
}),ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46912_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__46912_SHARP_,"-"));
}),widths);
var fmt_row = (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__4529__auto__ = (function cljs$pprint$iter__46942(s__46943){
return (new cljs.core.LazySeq(null,(function (){
var s__46943__$1 = s__46943;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46943__$1);
if(temp__5735__auto__){
var s__46943__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46943__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46943__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46945 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46944 = (0);
while(true){
if((i__46944 < size__4528__auto__)){
var vec__46950 = cljs.core._nth(c__4527__auto__,i__46944);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46950,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46950,(1),null);
cljs.core.chunk_append(b__46945,cljs.pprint.add_padding(width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__49726 = (i__46944 + (1));
i__46944 = G__49726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46945),cljs$pprint$iter__46942(cljs.core.chunk_rest(s__46943__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46945),null);
}
} else {
var vec__46955 = cljs.core.first(s__46943__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46955,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46955,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__46942(cljs.core.rest(s__46943__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46913_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__46913_SHARP_);
}),ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__46959 = cljs.core.seq(rows);
var chunk__46960 = null;
var count__46961 = (0);
var i__46962 = (0);
while(true){
if((i__46962 < count__46961)){
var row = chunk__46960.cljs$core$IIndexed$_nth$arity$2(null,i__46962);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__49733 = seq__46959;
var G__49734 = chunk__46960;
var G__49735 = count__46961;
var G__49736 = (i__46962 + (1));
seq__46959 = G__49733;
chunk__46960 = G__49734;
count__46961 = G__49735;
i__46962 = G__49736;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46959);
if(temp__5735__auto__){
var seq__46959__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46959__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46959__$1);
var G__49737 = cljs.core.chunk_rest(seq__46959__$1);
var G__49738 = c__4556__auto__;
var G__49739 = cljs.core.count(c__4556__auto__);
var G__49740 = (0);
seq__46959 = G__49737;
chunk__46960 = G__49738;
count__46961 = G__49739;
i__46962 = G__49740;
continue;
} else {
var row = cljs.core.first(seq__46959__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__49741 = cljs.core.next(seq__46959__$1);
var G__49742 = null;
var G__49743 = (0);
var G__49744 = (0);
seq__46959 = G__49741;
chunk__46960 = G__49742;
count__46961 = G__49743;
i__46962 = G__49744;
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
}));

(cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
}));

(cljs.pprint.print_table.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=cljs.pprint.js.map
