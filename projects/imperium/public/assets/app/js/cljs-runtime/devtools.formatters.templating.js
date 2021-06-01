goog.provide('devtools.formatters.templating');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x41238_41317 = value;
(x41238_41317.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x41245_41322 = value;
(x41245_41322.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x41247_41325 = value;
(x41247_41325.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
return ((devtools.formatters.templating.group_QMARK_(value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((value[(0)]),"object")));
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41330 = arguments.length;
var i__4737__auto___41331 = (0);
while(true){
if((i__4737__auto___41331 < len__4736__auto___41330)){
args__4742__auto__.push((arguments[i__4737__auto___41331]));

var G__41332 = (i__4737__auto___41331 + (1));
i__4737__auto___41331 = G__41332;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_([]);
var seq__41250_41341 = cljs.core.seq(items);
var chunk__41251_41342 = null;
var count__41252_41343 = (0);
var i__41253_41344 = (0);
while(true){
if((i__41253_41344 < count__41252_41343)){
var item_41349 = chunk__41251_41342.cljs$core$IIndexed$_nth$arity$2(null,i__41253_41344);
if((!((item_41349 == null)))){
if(cljs.core.coll_QMARK_(item_41349)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_41349)));
} else {
group.push(devtools.formatters.helpers.pref(item_41349));
}
} else {
}


var G__41350 = seq__41250_41341;
var G__41351 = chunk__41251_41342;
var G__41352 = count__41252_41343;
var G__41353 = (i__41253_41344 + (1));
seq__41250_41341 = G__41350;
chunk__41251_41342 = G__41351;
count__41252_41343 = G__41352;
i__41253_41344 = G__41353;
continue;
} else {
var temp__5735__auto___41354 = cljs.core.seq(seq__41250_41341);
if(temp__5735__auto___41354){
var seq__41250_41355__$1 = temp__5735__auto___41354;
if(cljs.core.chunked_seq_QMARK_(seq__41250_41355__$1)){
var c__4556__auto___41356 = cljs.core.chunk_first(seq__41250_41355__$1);
var G__41357 = cljs.core.chunk_rest(seq__41250_41355__$1);
var G__41358 = c__4556__auto___41356;
var G__41359 = cljs.core.count(c__4556__auto___41356);
var G__41360 = (0);
seq__41250_41341 = G__41357;
chunk__41251_41342 = G__41358;
count__41252_41343 = G__41359;
i__41253_41344 = G__41360;
continue;
} else {
var item_41365 = cljs.core.first(seq__41250_41355__$1);
if((!((item_41365 == null)))){
if(cljs.core.coll_QMARK_(item_41365)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_41365)));
} else {
group.push(devtools.formatters.helpers.pref(item_41365));
}
} else {
}


var G__41366 = cljs.core.next(seq__41250_41355__$1);
var G__41367 = null;
var G__41368 = (0);
var G__41369 = (0);
seq__41250_41341 = G__41366;
chunk__41251_41342 = G__41367;
count__41252_41343 = G__41368;
i__41253_41344 = G__41369;
continue;
}
} else {
}
}
break;
}

return group;
}));

(devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq41249){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41249));
}));

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41370 = arguments.length;
var i__4737__auto___41371 = (0);
while(true){
if((i__4737__auto___41371 < len__4736__auto___41370)){
args__4742__auto__.push((arguments[i__4737__auto___41371]));

var G__41372 = (i__4737__auto___41371 + (1));
i__4737__auto___41371 = G__41372;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref(tag);
var style__$1 = devtools.formatters.helpers.pref(style);
var template = devtools.formatters.templating.mark_as_template_BANG_([tag__$1,((cljs.core.empty_QMARK_(style__$1))?({}):({"style": style__$1}))]);
var seq__41257_41380 = cljs.core.seq(children);
var chunk__41258_41381 = null;
var count__41259_41382 = (0);
var i__41260_41383 = (0);
while(true){
if((i__41260_41383 < count__41259_41382)){
var child_41384 = chunk__41258_41381.cljs$core$IIndexed$_nth$arity$2(null,i__41260_41383);
if((!((child_41384 == null)))){
if(cljs.core.coll_QMARK_(child_41384)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_41384))));
} else {
var temp__5733__auto___41387 = devtools.formatters.helpers.pref(child_41384);
if(cljs.core.truth_(temp__5733__auto___41387)){
var child_value_41388 = temp__5733__auto___41387;
template.push(child_value_41388);
} else {
}
}
} else {
}


var G__41389 = seq__41257_41380;
var G__41390 = chunk__41258_41381;
var G__41391 = count__41259_41382;
var G__41392 = (i__41260_41383 + (1));
seq__41257_41380 = G__41389;
chunk__41258_41381 = G__41390;
count__41259_41382 = G__41391;
i__41260_41383 = G__41392;
continue;
} else {
var temp__5735__auto___41393 = cljs.core.seq(seq__41257_41380);
if(temp__5735__auto___41393){
var seq__41257_41394__$1 = temp__5735__auto___41393;
if(cljs.core.chunked_seq_QMARK_(seq__41257_41394__$1)){
var c__4556__auto___41395 = cljs.core.chunk_first(seq__41257_41394__$1);
var G__41396 = cljs.core.chunk_rest(seq__41257_41394__$1);
var G__41397 = c__4556__auto___41395;
var G__41398 = cljs.core.count(c__4556__auto___41395);
var G__41399 = (0);
seq__41257_41380 = G__41396;
chunk__41258_41381 = G__41397;
count__41259_41382 = G__41398;
i__41260_41383 = G__41399;
continue;
} else {
var child_41403 = cljs.core.first(seq__41257_41394__$1);
if((!((child_41403 == null)))){
if(cljs.core.coll_QMARK_(child_41403)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_41403))));
} else {
var temp__5733__auto___41405 = devtools.formatters.helpers.pref(child_41403);
if(cljs.core.truth_(temp__5733__auto___41405)){
var child_value_41406 = temp__5733__auto___41405;
template.push(child_value_41406);
} else {
}
}
} else {
}


var G__41410 = cljs.core.next(seq__41257_41394__$1);
var G__41411 = null;
var G__41412 = (0);
var G__41413 = (0);
seq__41257_41380 = G__41410;
chunk__41258_41381 = G__41411;
count__41259_41382 = G__41412;
i__41260_41383 = G__41413;
continue;
}
} else {
}
}
break;
}

return template;
}));

(devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq41254){
var G__41255 = cljs.core.first(seq41254);
var seq41254__$1 = cljs.core.next(seq41254);
var G__41256 = cljs.core.first(seq41254__$1);
var seq41254__$2 = cljs.core.next(seq41254__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41255,G__41256,seq41254__$2);
}));

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41414 = arguments.length;
var i__4737__auto___41415 = (0);
while(true){
if((i__4737__auto___41415 < len__4736__auto___41414)){
args__4742__auto__.push((arguments[i__4737__auto___41415]));

var G__41416 = (i__4737__auto___41415 + (1));
i__4737__auto___41415 = G__41416;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_((template["concat"]).apply(template,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.into_array,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,templates)))));
}));

(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq41262){
var G__41263 = cljs.core.first(seq41262);
var seq41262__$1 = cljs.core.next(seq41262);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41263,seq41262__$1);
}));

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41420 = arguments.length;
var i__4737__auto___41421 = (0);
while(true){
if((i__4737__auto___41421 < len__4736__auto___41420)){
args__4742__auto__.push((arguments[i__4737__auto___41421]));

var G__41422 = (i__4737__auto___41421 + (1));
i__4737__auto___41421 = G__41422;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
}));

(devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq41265){
var G__41266 = cljs.core.first(seq41265);
var seq41265__$1 = cljs.core.next(seq41265);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41266,seq41265__$1);
}));

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__41269 = arguments.length;
switch (G__41269) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2(object,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3(object,header,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4(object,header,body,(0));
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_((function (){var obj41273 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__4126__auto__ = start_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()});
return obj41273;
})());
}));

(devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4);

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41430 = arguments.length;
var i__4737__auto___41431 = (0);
while(true){
if((i__4737__auto___41431 < len__4736__auto___41430)){
args__4742__auto__.push((arguments[i__4737__auto___41431]));

var G__41432 = (i__4737__auto___41431 + (1));
i__4737__auto___41431 = G__41432;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__41284){
var vec__41285 = p__41284;
var state_override_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41285,(0),null);
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_(state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nil-label","nil-label",-587789203)], 0));
} else {
var sub_state = (((!((state_override_fn == null))))?(function (){var G__41288 = devtools.formatters.state.get_current_state();
return (state_override_fn.cljs$core$IFn$_invoke$arity$1 ? state_override_fn.cljs$core$IFn$_invoke$arity$1(G__41288) : state_override_fn.call(null,G__41288));
})():devtools.formatters.state.get_current_state());
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["object",({"object": object, "config": sub_state})], 0));
}
}));

(devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq41280){
var G__41281 = cljs.core.first(seq41280);
var seq41280__$1 = cljs.core.next(seq41280);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41281,seq41280__$1);
}));

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR__orig_val__41294 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__41295 = (1);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__41295);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([markup], 0));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__41294);
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_(v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk(f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",devtools.formatters.templating.add_stack_separators(devtools.formatters.templating.pprint_render_calls(devtools.formatters.templating.replace_fns_with_markers(cljs.core.reverse(stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",devtools.formatters.templating.pprint_render_path(devtools.formatters.templating._STAR_current_render_path_STAR_),"\n","Render stack:\n",devtools.formatters.templating.pprint_render_stack(devtools.formatters.templating._STAR_current_render_stack_STAR_)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_(markup)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__41301 = name;
switch (G__41301) {
case "surrogate":
var obj = cljs.core.first(args);
var converted_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest(args));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_surrogate,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first(args);
var converted_obj = ((devtools.formatters.templating.surrogate_markup_QMARK_(obj))?(devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1 ? devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1(obj) : devtools.formatters.templating.render_json_ml_STAR_.call(null,obj)):obj);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_reference,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest(args)));

break;
default:
return devtools.formatters.templating.assert_markup_error(["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_(v)) || (cljs.core.array_QMARK_(v)) || (typeof v === 'string'))){
return cljs.core.empty_QMARK_(v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__41302 = tag;
var html_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41302,(0),null);
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41302,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_(markup)))){
return markup;
} else {
var _STAR_current_render_path_STAR__orig_val__41305 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__41306 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first(markup));
(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__41306);

try{var tag = devtools.formatters.helpers.pref(cljs.core.first(markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special(tag,cljs.core.rest(markup));
} else {
if(cljs.core.sequential_QMARK_(tag)){
return devtools.formatters.templating.render_subtree(tag,cljs.core.rest(markup));
} else {
return devtools.formatters.templating.assert_markup_error(["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview(markup)),":"].join(''));

}
}
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__41305);
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__41307 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__41308 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__41309 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__41310 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__41309);

(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__41310);

try{return devtools.formatters.templating.render_json_ml_STAR_(markup);
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__41308);

(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__41307);
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",["result of markup rendering must be a template,\n","resolved to ",devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),"initial value: ",devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_value], 0))].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_(value)){
var G__41442 = initial_value;
var G__41443 = (value.cljs$core$IFn$_invoke$arity$0 ? value.cljs$core$IFn$_invoke$arity$0() : value.call(null));
initial_value = G__41442;
value = G__41443;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__41444 = initial_value;
var G__41445 = devtools.formatters.helpers.pref(value);
initial_value = G__41444;
value = G__41445;
continue;
} else {
if(cljs.core.sequential_QMARK_(value)){
var G__41446 = initial_value;
var G__41447 = devtools.formatters.templating.render_json_ml(value);
initial_value = G__41446;
value = G__41447;
continue;
} else {
if(devtools.formatters.templating.template_QMARK_(value)){
return value;
} else {
if(devtools.formatters.templating.surrogate_QMARK_(value)){
return value;
} else {
if(devtools.formatters.templating.reference_QMARK_(value)){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_(value,value);
});

//# sourceMappingURL=devtools.formatters.templating.js.map
