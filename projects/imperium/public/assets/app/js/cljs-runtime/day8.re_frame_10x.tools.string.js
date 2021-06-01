goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48354 = arguments.length;
var i__4737__auto___48355 = (0);
while(true){
if((i__4737__auto___48355 < len__4736__auto___48354)){
args__4742__auto__.push((arguments[i__4737__auto___48355]));

var G__48356 = (i__4737__auto___48355 + (1));
i__4737__auto___48355 = G__48356;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__48339){
var vec__48340 = p__48339;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48340,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__4126__auto__ = plural;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq48336){
var G__48337 = cljs.core.first(seq48336);
var seq48336__$1 = cljs.core.next(seq48336);
var G__48338 = cljs.core.first(seq48336__$1);
var seq48336__$2 = cljs.core.next(seq48336__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48337,G__48338,seq48336__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48357 = arguments.length;
var i__4737__auto___48358 = (0);
while(true){
if((i__4737__auto___48358 < len__4736__auto___48357)){
args__4742__auto__.push((arguments[i__4737__auto___48358]));

var G__48359 = (i__4737__auto___48358 + (1));
i__4737__auto___48358 = G__48359;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__48350){
var vec__48351 = p__48350;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48351,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__4126__auto__ = plural;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq48347){
var G__48348 = cljs.core.first(seq48347);
var seq48347__$1 = cljs.core.next(seq48347);
var G__48349 = cljs.core.first(seq48347__$1);
var seq48347__$2 = cljs.core.next(seq48347__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48348,G__48349,seq48347__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
