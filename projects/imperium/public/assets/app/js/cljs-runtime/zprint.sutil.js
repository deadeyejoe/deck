goog.provide('zprint.sutil');
/**
 * The string value of this sexpr.
 */
zprint.sutil.sstring = (function zprint$sutil$sstring(sexpr){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sexpr], 0));
});
/**
 * Does pr-str.
 */
zprint.sutil.snumstr = (function zprint$sutil$snumstr(zloc,hex_QMARK_,shift_seq){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zloc], 0));
});
/**
 * Return a seq of everything after this. Maps get
 *   special handling here, as a seq of a map is a bunch
 *   of map elements, which are pretty much vectors of
 *   [k v] pairs.
 */
zprint.sutil.sseqnws = (function zprint$sutil$sseqnws(sexpr){
if(cljs.core.map_QMARK_(sexpr)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(sexpr));
} else {
return cljs.core.seq(sexpr);
}
});
/**
 * Considering the current sexpr a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end.
 */
zprint.sutil.stake_append = (function zprint$sutil$stake_append(n,sexpr,end_sexpr){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,sexpr),(new cljs.core.List(null,end_sexpr,null,(1),null)));
});
/**
 * Take the various inputs and come up with a style.  But we
 *   don't do focus, so that's easy.
 */
zprint.sutil.sfocus_style = (function zprint$sutil$sfocus_style(style,_,sexpr){
return style;
});
/**
 * Find the nthnext of this sexpr.
 */
zprint.sutil.snthnext = (function zprint$sutil$snthnext(sexpr,n){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.nthnext(sexpr,n);
} else {
return null;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.sutil.sfind = (function zprint$sutil$sfind(zthing_QMARK_,sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
var sloc = sexpr;
var i = (0);
while(true){
if(cljs.core.truth_(sloc)){
if(cljs.core.truth_((function (){var G__48256 = cljs.core.first(sloc);
return (zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(G__48256) : zthing_QMARK_.call(null,G__48256));
})())){
return i;
} else {
var G__48410 = cljs.core.next(sloc);
var G__48411 = (i + (1));
sloc = G__48410;
i = G__48411;
continue;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
/**
 * How many children does sexpr have?
 */
zprint.sutil.scount = (function zprint$sutil$scount(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.count(sexpr);
} else {
return (0);
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every element inside of sexpr.
 */
zprint.sutil.smap = (function zprint$sutil$smap(zfn,sexpr){
var v = ((cljs.core.coll_QMARK_(sexpr))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,sexpr):cljs.core.PersistentVector.EMPTY);
return v;
});
/**
 * Is this an anonymous fn?
 */
zprint.sutil.sfn_QMARK_ = (function zprint$sutil$sfn_QMARK_(sexpr){
return cljs.core.fn_QMARK_(sexpr);
});
/**
 * Is this the focus.  It is possible that this could
 *   be implemented with path's and such, but that is not a goal
 *   at this point.
 */
zprint.sutil.sfocus = (function zprint$sutil$sfocus(sexpr,fsexpr){
return null;
});
/**
 * This is inherently impossible, as we don't have
 *   an up capability.  But we could build one as we
 *   go down which would give us an up capability (or
 *   at least we would always know where we were).  An
 *   interesting idea, but for now, return essentially
 *   nothing.
 */
zprint.sutil.sfind_root_and_path = (function zprint$sutil$sfind_root_and_path(sexpr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["root",cljs.core.PersistentVector.EMPTY], null);
});
/**
 * Return true if this is whitespace.  But as we
 *   don't have any whitespace in regular s-expressions,
 *   we will always return false.
 */
zprint.sutil.swhitespace_QMARK_ = (function zprint$sutil$swhitespace_QMARK_(sexpr){
return null;
});
/**
 * Do the first thing, with the right amount of arguments.
 */
zprint.sutil.sfirst = (function zprint$sutil$sfirst(sexpr){
return cljs.core.first(sexpr);
});
/**
 * Do the second thing, with the right amount of arguments.
 */
zprint.sutil.ssecond = (function zprint$sutil$ssecond(sexpr){
return cljs.core.second(sexpr);
});
/**
 * Define a third since we need one, and znth isn't really nth.
 */
zprint.sutil.sthird = (function zprint$sutil$sthird(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(2));
});
/**
 * Define a fourth since we need one, and znth isn't really nth.
 */
zprint.sutil.sfourth = (function zprint$sutil$sfourth(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(3));
});
/**
 * A list? that includes cons.
 */
zprint.sutil.slist_QMARK_ = (function zprint$sutil$slist_QMARK_(sexpr){
return ((cljs.core.list_QMARK_(sexpr)) || (cljs.core.seq_QMARK_(sexpr)));
});
/**
 * last which can take two arguments.
 */
zprint.sutil.slast = (function zprint$sutil$slast(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.last(sexpr);
} else {
return sexpr;
}
});
/**
 * Is this an array?
 */
zprint.sutil.sarray_QMARK_ = (function zprint$sutil$sarray_QMARK_(x){
if(cljs.core.truth_(x)){
return cljs.core.array_QMARK_(x);
} else {
return null;
}
});
/**
 * Is this an atom?
 */
zprint.sutil.satom_QMARK_ = (function zprint$sutil$satom_QMARK_(x){
if(cljs.core.truth_(x)){
return (x instanceof cljs.core.Atom);
} else {
return null;
}
});
/**
 * Deref this thing.
 */
zprint.sutil.sderef = (function zprint$sutil$sderef(x){
return cljs.core.deref(x);
});
/**
 * Blow an array out into a vector.
 */
zprint.sutil.sexpandarray = (function zprint$sutil$sexpandarray(a){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,a);
});
/**
 * Is this a namespace?
 */
zprint.sutil.sns_QMARK_ = (function zprint$sutil$sns_QMARK_(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.find_ns(x);
} else {
return null;
}
});
/**
 * Turn something whose pr-str starts with #object into a vector.
 *   obj is the thing that prints as #object, and val is its value.
 *   Two forms, one with and one w/out val.  val could be nil, or
 *   anything, so there isn't a particularly good sentinal here.
 */
zprint.sutil.sobj_to_vec = (function zprint$sutil$sobj_to_vec(var_args){
var G__48258 = arguments.length;
switch (G__48258) {
case 2:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2 = (function (obj,val){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),val], null);
}));

(zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1 = (function (obj){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/\]$/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(obj_term,(2)))], null);
}));

(zprint.sutil.sobj_to_vec.cljs$lang$maxFixedArity = 2);

/**
 * Is this a promise?
 */
zprint.sutil.spromise_QMARK_ = (function zprint$sutil$spromise_QMARK_(x){
return null;
});
/**
 * Is this an agent?
 */
zprint.sutil.sagent_QMARK_ = (function zprint$sutil$sagent_QMARK_(x){
return null;
});
/**
 * Is this a constant?
 */
zprint.sutil.sconstant_QMARK_ = (function zprint$sutil$sconstant_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string') || (typeof x === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.sutil.slift_ns = (function zprint$sutil$slift_ns(p__48259,pair_seq,ns){
var map__48260 = p__48259;
var map__48260__$1 = (((((!((map__48260 == null))))?(((((map__48260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48260):map__48260);
var map_options = map__48260__$1;
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48260__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var lift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48260__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48260__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var unlift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48260__$1,new cljs.core.Keyword(null,"unlift-ns?","unlift-ns?",1065087867));
if(cljs.core.truth_((function (){var and__4115__auto__ = lift_ns_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return lift_ns_in_code_QMARK_;
} else {
return true;
}
} else {
return and__4115__auto__;
}
})())){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
}
});
var ns__$1 = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__48267 = cljs.core.first(pair_seq__$1);
var seq__48268 = cljs.core.seq(vec__48267);
var first__48269 = cljs.core.first(seq__48268);
var seq__48268__$1 = cljs.core.next(seq__48268);
var k = first__48269;
var rest_of_pair = seq__48268__$1;
var pair = vec__48267;
var current_ns = ((((rest_of_pair) && ((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))))?cljs.core.namespace(k):null);
if(cljs.core.not(k)){
if(cljs.core.truth_(ns__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1)].join(''),out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns__$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns__$1,current_ns)){
var G__48413 = ns__$1;
var G__48414 = cljs.core.next(pair_seq__$1);
var G__48415 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns__$1 = G__48413;
pair_seq__$1 = G__48414;
out = G__48415;
continue;
} else {
return null;
}
} else {
var G__48416 = current_ns;
var G__48417 = cljs.core.next(pair_seq__$1);
var G__48418 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns__$1 = G__48416;
pair_seq__$1 = G__48417;
out = G__48418;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__48419 = ns__$1;
var G__48420 = cljs.core.next(pair_seq__$1);
var G__48421 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
ns__$1 = G__48419;
pair_seq__$1 = G__48420;
out = G__48421;
continue;
} else {
return null;
}
}
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,pair_seq], null);
}
});
/**
 * Redefine all of the traversal functions for s-expressions, then
 *   call the function of no arguments passed in.
 */
zprint.sutil.sredef_call = (function zprint$sutil$sredef_call(body_fn){
var zstring_orig_val__48270 = zprint.zfns.zstring;
var znumstr_orig_val__48271 = zprint.zfns.znumstr;
var zcomment_QMARK__orig_val__48272 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__48273 = zprint.zfns.zsexpr;
var zseqnws_orig_val__48274 = zprint.zfns.zseqnws;
var zseqnws_w_nl_orig_val__48275 = zprint.zfns.zseqnws_w_nl;
var zseqnws_w_bl_orig_val__48276 = zprint.zfns.zseqnws_w_bl;
var zfocus_style_orig_val__48277 = zprint.zfns.zfocus_style;
var zstart_orig_val__48278 = zprint.zfns.zstart;
var zfirst_orig_val__48279 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__48280 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__48281 = zprint.zfns.zsecond;
var zsecond_no_comment_orig_val__48282 = zprint.zfns.zsecond_no_comment;
var zthird_orig_val__48283 = zprint.zfns.zthird;
var zthird_no_comment_orig_val__48284 = zprint.zfns.zthird_no_comment;
var zfourth_orig_val__48285 = zprint.zfns.zfourth;
var znextnws_orig_val__48286 = zprint.zfns.znextnws;
var znextnws_w_nl_orig_val__48287 = zprint.zfns.znextnws_w_nl;
var znthnext_orig_val__48288 = zprint.zfns.znthnext;
var zcount_orig_val__48289 = zprint.zfns.zcount;
var zcount_zloc_seq_nc_nws_orig_val__48290 = zprint.zfns.zcount_zloc_seq_nc_nws;
var zmap_orig_val__48291 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__48292 = zprint.zfns.zmap_w_nl;
var zmap_w_bl_orig_val__48293 = zprint.zfns.zmap_w_bl;
var zmap_w_nl_comma_orig_val__48294 = zprint.zfns.zmap_w_nl_comma;
var zanonfn_QMARK__orig_val__48295 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__48296 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__48297 = zprint.zfns.zfocus;
var zfind_path_orig_val__48298 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__48299 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__48300 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__48301 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__48302 = zprint.zfns.zmap_QMARK_;
var znamespacedmap_QMARK__orig_val__48303 = zprint.zfns.znamespacedmap_QMARK_;
var zset_QMARK__orig_val__48304 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__48305 = zprint.zfns.zcoll_QMARK_;
var zmeta_QMARK__orig_val__48306 = zprint.zfns.zmeta_QMARK_;
var zuneval_QMARK__orig_val__48307 = zprint.zfns.zuneval_QMARK_;
var ztag_orig_val__48308 = zprint.zfns.ztag;
var zlast_orig_val__48309 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__48310 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__48311 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__48312 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__48313 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__48314 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__48315 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__48316 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__48317 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__48318 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__48319 = zprint.zfns.zmap_all;
var zfuture_QMARK__orig_val__48320 = zprint.zfns.zfuture_QMARK_;
var zpromise_QMARK__orig_val__48321 = zprint.zfns.zpromise_QMARK_;
var zkeyword_QMARK__orig_val__48322 = zprint.zfns.zkeyword_QMARK_;
var zdelay_QMARK__orig_val__48323 = zprint.zfns.zdelay_QMARK_;
var zconstant_QMARK__orig_val__48324 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__48325 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__48326 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__48327 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__48328 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__48329 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__48330 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__48331 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__48332 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__48333 = zprint.zfns.zlift_ns;
var zfind_orig_val__48334 = zprint.zfns.zfind;
var ztake_append_orig_val__48335 = zprint.zfns.ztake_append;
var zstring_temp_val__48336 = zprint.sutil.sstring;
var znumstr_temp_val__48337 = zprint.sutil.snumstr;
var zcomment_QMARK__temp_val__48338 = cljs.core.constantly(false);
var zsexpr_temp_val__48339 = cljs.core.identity;
var zseqnws_temp_val__48340 = zprint.sutil.sseqnws;
var zseqnws_w_nl_temp_val__48341 = zprint.sutil.sseqnws;
var zseqnws_w_bl_temp_val__48342 = zprint.sutil.sseqnws;
var zfocus_style_temp_val__48343 = zprint.sutil.sfocus_style;
var zstart_temp_val__48344 = zprint.sutil.sfirst;
var zfirst_temp_val__48345 = zprint.sutil.sfirst;
var zfirst_no_comment_temp_val__48346 = zprint.sutil.sfirst;
var zsecond_temp_val__48347 = zprint.sutil.ssecond;
var zsecond_no_comment_temp_val__48348 = zprint.sutil.ssecond;
var zthird_temp_val__48349 = zprint.sutil.sthird;
var zthird_no_comment_temp_val__48350 = zprint.sutil.sthird;
var zfourth_temp_val__48351 = zprint.sutil.sfourth;
var znextnws_temp_val__48352 = cljs.core.next;
var znextnws_w_nl_temp_val__48353 = cljs.core.next;
var znthnext_temp_val__48354 = zprint.sutil.snthnext;
var zcount_temp_val__48355 = zprint.sutil.scount;
var zcount_zloc_seq_nc_nws_temp_val__48356 = zprint.sutil.scount;
var zmap_temp_val__48357 = zprint.sutil.smap;
var zmap_w_nl_temp_val__48358 = zprint.sutil.smap;
var zmap_w_bl_temp_val__48359 = zprint.sutil.smap;
var zmap_w_nl_comma_temp_val__48360 = zprint.sutil.smap;
var zanonfn_QMARK__temp_val__48361 = cljs.core.constantly(false);
var zfn_obj_QMARK__temp_val__48362 = cljs.core.fn_QMARK_;
var zfocus_temp_val__48363 = zprint.sutil.sfocus;
var zfind_path_temp_val__48364 = zprint.sutil.sfind_root_and_path;
var zwhitespace_QMARK__temp_val__48365 = zprint.sutil.swhitespace_QMARK_;
var zlist_QMARK__temp_val__48366 = zprint.sutil.slist_QMARK_;
var zvector_QMARK__temp_val__48367 = cljs.core.vector_QMARK_;
var zmap_QMARK__temp_val__48368 = cljs.core.map_QMARK_;
var znamespacedmap_QMARK__temp_val__48369 = cljs.core.constantly(false);
var zset_QMARK__temp_val__48370 = cljs.core.set_QMARK_;
var zcoll_QMARK__temp_val__48371 = cljs.core.coll_QMARK_;
var zmeta_QMARK__temp_val__48372 = cljs.core.constantly(false);
var zuneval_QMARK__temp_val__48373 = cljs.core.constantly(false);
var ztag_temp_val__48374 = cljs.core.constantly(null);
var zlast_temp_val__48375 = zprint.sutil.slast;
var zarray_QMARK__temp_val__48376 = zprint.sutil.sarray_QMARK_;
var zatom_QMARK__temp_val__48377 = zprint.sutil.satom_QMARK_;
var zderef_temp_val__48378 = zprint.sutil.sderef;
var zrecord_QMARK__temp_val__48379 = cljs.core.record_QMARK_;
var zns_QMARK__temp_val__48380 = cljs.core.constantly(false);
var zobj_to_vec_temp_val__48381 = zprint.sutil.sobj_to_vec;
var zexpandarray_temp_val__48382 = zprint.sutil.sexpandarray;
var znewline_QMARK__temp_val__48383 = cljs.core.constantly(false);
var zwhitespaceorcomment_QMARK__temp_val__48384 = cljs.core.constantly(false);
var zmap_all_temp_val__48385 = cljs.core.map;
var zfuture_QMARK__temp_val__48386 = cljs.core.constantly(false);
var zpromise_QMARK__temp_val__48387 = zprint.sutil.spromise_QMARK_;
var zkeyword_QMARK__temp_val__48388 = cljs.core.keyword_QMARK_;
var zdelay_QMARK__temp_val__48389 = cljs.core.delay_QMARK_;
var zconstant_QMARK__temp_val__48390 = zprint.sutil.sconstant_QMARK_;
var zagent_QMARK__temp_val__48391 = zprint.sutil.sagent_QMARK_;
var zreader_macro_QMARK__temp_val__48392 = cljs.core.constantly(false);
var zarray_to_shift_seq_temp_val__48393 = null;
var zdotdotdot_temp_val__48394 = cljs.core.constantly(new cljs.core.Symbol(null,"...","...",-1926939749,null));
var zsymbol_QMARK__temp_val__48395 = cljs.core.symbol_QMARK_;
var znil_QMARK__temp_val__48396 = cljs.core.nil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__48397 = cljs.core.constantly(false);
var zreader_cond_w_coll_QMARK__temp_val__48398 = cljs.core.constantly(false);
var zlift_ns_temp_val__48399 = zprint.sutil.slift_ns;
var zfind_temp_val__48400 = zprint.sutil.sfind;
var ztake_append_temp_val__48401 = zprint.sutil.stake_append;
(zprint.zfns.zstring = zstring_temp_val__48336);

(zprint.zfns.znumstr = znumstr_temp_val__48337);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__48338);

(zprint.zfns.zsexpr = zsexpr_temp_val__48339);

(zprint.zfns.zseqnws = zseqnws_temp_val__48340);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_temp_val__48341);

(zprint.zfns.zseqnws_w_bl = zseqnws_w_bl_temp_val__48342);

(zprint.zfns.zfocus_style = zfocus_style_temp_val__48343);

(zprint.zfns.zstart = zstart_temp_val__48344);

(zprint.zfns.zfirst = zfirst_temp_val__48345);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__48346);

(zprint.zfns.zsecond = zsecond_temp_val__48347);

(zprint.zfns.zsecond_no_comment = zsecond_no_comment_temp_val__48348);

(zprint.zfns.zthird = zthird_temp_val__48349);

(zprint.zfns.zthird_no_comment = zthird_no_comment_temp_val__48350);

(zprint.zfns.zfourth = zfourth_temp_val__48351);

(zprint.zfns.znextnws = znextnws_temp_val__48352);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_temp_val__48353);

(zprint.zfns.znthnext = znthnext_temp_val__48354);

(zprint.zfns.zcount = zcount_temp_val__48355);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_temp_val__48356);

(zprint.zfns.zmap = zmap_temp_val__48357);

(zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__48358);

(zprint.zfns.zmap_w_bl = zmap_w_bl_temp_val__48359);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_temp_val__48360);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__48361);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__48362);

(zprint.zfns.zfocus = zfocus_temp_val__48363);

(zprint.zfns.zfind_path = zfind_path_temp_val__48364);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__48365);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__48366);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__48367);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__48368);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__temp_val__48369);

(zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__48370);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__48371);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__48372);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__48373);

(zprint.zfns.ztag = ztag_temp_val__48374);

(zprint.zfns.zlast = zlast_temp_val__48375);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__48376);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__48377);

(zprint.zfns.zderef = zderef_temp_val__48378);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__48379);

(zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__48380);

(zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__48381);

(zprint.zfns.zexpandarray = zexpandarray_temp_val__48382);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__48383);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__48384);

(zprint.zfns.zmap_all = zmap_all_temp_val__48385);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__48386);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__48387);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__48388);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__48389);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__48390);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__48391);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__48392);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__48393);

(zprint.zfns.zdotdotdot = zdotdotdot_temp_val__48394);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__48395);

(zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__48396);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__48397);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__48398);

(zprint.zfns.zlift_ns = zlift_ns_temp_val__48399);

(zprint.zfns.zfind = zfind_temp_val__48400);

(zprint.zfns.ztake_append = ztake_append_temp_val__48401);

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {(zprint.zfns.ztake_append = ztake_append_orig_val__48335);

(zprint.zfns.zfind = zfind_orig_val__48334);

(zprint.zfns.zlift_ns = zlift_ns_orig_val__48333);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__48332);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__48331);

(zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__48330);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__48329);

(zprint.zfns.zdotdotdot = zdotdotdot_orig_val__48328);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__48327);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__48326);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__48325);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__48324);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__48323);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__48322);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__48321);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__48320);

(zprint.zfns.zmap_all = zmap_all_orig_val__48319);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__48318);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__48317);

(zprint.zfns.zexpandarray = zexpandarray_orig_val__48316);

(zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__48315);

(zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__48314);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__48313);

(zprint.zfns.zderef = zderef_orig_val__48312);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__48311);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__48310);

(zprint.zfns.zlast = zlast_orig_val__48309);

(zprint.zfns.ztag = ztag_orig_val__48308);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__48307);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__48306);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__48305);

(zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__48304);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__orig_val__48303);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__48302);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__48301);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__48300);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__48299);

(zprint.zfns.zfind_path = zfind_path_orig_val__48298);

(zprint.zfns.zfocus = zfocus_orig_val__48297);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__48296);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__48295);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_orig_val__48294);

(zprint.zfns.zmap_w_bl = zmap_w_bl_orig_val__48293);

(zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__48292);

(zprint.zfns.zmap = zmap_orig_val__48291);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_orig_val__48290);

(zprint.zfns.zcount = zcount_orig_val__48289);

(zprint.zfns.znthnext = znthnext_orig_val__48288);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_orig_val__48287);

(zprint.zfns.znextnws = znextnws_orig_val__48286);

(zprint.zfns.zfourth = zfourth_orig_val__48285);

(zprint.zfns.zthird_no_comment = zthird_no_comment_orig_val__48284);

(zprint.zfns.zthird = zthird_orig_val__48283);

(zprint.zfns.zsecond_no_comment = zsecond_no_comment_orig_val__48282);

(zprint.zfns.zsecond = zsecond_orig_val__48281);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__48280);

(zprint.zfns.zfirst = zfirst_orig_val__48279);

(zprint.zfns.zstart = zstart_orig_val__48278);

(zprint.zfns.zfocus_style = zfocus_style_orig_val__48277);

(zprint.zfns.zseqnws_w_bl = zseqnws_w_bl_orig_val__48276);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_orig_val__48275);

(zprint.zfns.zseqnws = zseqnws_orig_val__48274);

(zprint.zfns.zsexpr = zsexpr_orig_val__48273);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__48272);

(zprint.zfns.znumstr = znumstr_orig_val__48271);

(zprint.zfns.zstring = zstring_orig_val__48270);
}});

//# sourceMappingURL=zprint.sutil.js.map
