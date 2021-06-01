goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_40914 = (function (value){
var x__4428__auto__ = (((value == null))?null:value);
var m__4429__auto__ = (devtools.format._header[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4429__auto__.call(null,value));
} else {
var m__4426__auto__ = (devtools.format._header["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4426__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_40914(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_40924 = (function (value){
var x__4428__auto__ = (((value == null))?null:value);
var m__4429__auto__ = (devtools.format._has_body[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4429__auto__.call(null,value));
} else {
var m__4426__auto__ = (devtools.format._has_body["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4426__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_40924(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_40937 = (function (value){
var x__4428__auto__ = (((value == null))?null:value);
var m__4429__auto__ = (devtools.format._body[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4429__auto__.call(null,value));
} else {
var m__4426__auto__ = (devtools.format._body["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4426__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_40937(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o40691 = temp__5733__auto__;
var temp__5733__auto____$1 = (o40691["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o40693 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o40693["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o40694 = temp__5733__auto____$2;
return (o40694["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o40695 = temp__5733__auto__;
var temp__5733__auto____$1 = (o40695["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o40696 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o40696["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o40697 = temp__5733__auto____$2;
return (o40697["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o40708 = temp__5733__auto__;
var temp__5733__auto____$1 = (o40708["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o40709 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o40709["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o40710 = temp__5733__auto____$2;
return (o40710["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o40714 = temp__5733__auto__;
var temp__5733__auto____$1 = (o40714["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o40715 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o40715["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o40716 = temp__5733__auto____$2;
return (o40716["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o40719 = temp__5733__auto__;
var temp__5733__auto____$1 = (o40719["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o40720 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o40720["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o40721 = temp__5733__auto____$2;
return (o40721["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o40722 = temp__5733__auto__;
var temp__5733__auto____$1 = (o40722["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o40723 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o40723["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o40724 = temp__5733__auto____$2;
return (o40724["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o40729 = temp__5733__auto__;
var temp__5733__auto____$1 = (o40729["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o40730 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o40730["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o40731 = temp__5733__auto____$2;
return (o40731["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40949 = arguments.length;
var i__4737__auto___40951 = (0);
while(true){
if((i__4737__auto___40951 < len__4736__auto___40949)){
args__4742__auto__.push((arguments[i__4737__auto___40951]));

var G__40952 = (i__4737__auto___40951 + (1));
i__4737__auto___40951 = G__40952;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq40738){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40738));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40956 = arguments.length;
var i__4737__auto___40957 = (0);
while(true){
if((i__4737__auto___40957 < len__4736__auto___40956)){
args__4742__auto__.push((arguments[i__4737__auto___40957]));

var G__40958 = (i__4737__auto___40957 + (1));
i__4737__auto___40957 = G__40958;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq40769){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40769));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40959 = arguments.length;
var i__4737__auto___40960 = (0);
while(true){
if((i__4737__auto___40960 < len__4736__auto___40959)){
args__4742__auto__.push((arguments[i__4737__auto___40960]));

var G__40961 = (i__4737__auto___40960 + (1));
i__4737__auto___40960 = G__40961;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq40784){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40784));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40968 = arguments.length;
var i__4737__auto___40969 = (0);
while(true){
if((i__4737__auto___40969 < len__4736__auto___40968)){
args__4742__auto__.push((arguments[i__4737__auto___40969]));

var G__40972 = (i__4737__auto___40969 + (1));
i__4737__auto___40969 = G__40972;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq40785){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40785));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40976 = arguments.length;
var i__4737__auto___40977 = (0);
while(true){
if((i__4737__auto___40977 < len__4736__auto___40976)){
args__4742__auto__.push((arguments[i__4737__auto___40977]));

var G__40978 = (i__4737__auto___40977 + (1));
i__4737__auto___40977 = G__40978;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq40790){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40790));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40985 = arguments.length;
var i__4737__auto___40986 = (0);
while(true){
if((i__4737__auto___40986 < len__4736__auto___40985)){
args__4742__auto__.push((arguments[i__4737__auto___40986]));

var G__40987 = (i__4737__auto___40986 + (1));
i__4737__auto___40986 = G__40987;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq40796){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40796));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40991 = arguments.length;
var i__4737__auto___40992 = (0);
while(true){
if((i__4737__auto___40992 < len__4736__auto___40991)){
args__4742__auto__.push((arguments[i__4737__auto___40992]));

var G__40994 = (i__4737__auto___40992 + (1));
i__4737__auto___40992 = G__40994;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq40808){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40808));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41001 = arguments.length;
var i__4737__auto___41002 = (0);
while(true){
if((i__4737__auto___41002 < len__4736__auto___41001)){
args__4742__auto__.push((arguments[i__4737__auto___41002]));

var G__41003 = (i__4737__auto___41002 + (1));
i__4737__auto___41002 = G__41003;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40839){
var vec__40841 = p__40839;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40841,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__40827_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__40827_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq40828){
var G__40829 = cljs.core.first(seq40828);
var seq40828__$1 = cljs.core.next(seq40828);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40829,seq40828__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__40859 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__40860 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__40861 = (function (){var G__40864 = new cljs.core.Keyword(null,"li","li",723558921);
var G__40865 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__40866 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__40864,G__40865,G__40866) : devtools.format.make_template_fn.call(null,G__40864,G__40865,G__40866));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__40859,G__40860,G__40861) : devtools.format.make_template_fn.call(null,G__40859,G__40860,G__40861));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41008 = arguments.length;
var i__4737__auto___41009 = (0);
while(true){
if((i__4737__auto___41009 < len__4736__auto___41008)){
args__4742__auto__.push((arguments[i__4737__auto___41009]));

var G__41011 = (i__4737__auto___41009 + (1));
i__4737__auto___41009 = G__41011;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq40877){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40877));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41016 = arguments.length;
var i__4737__auto___41017 = (0);
while(true){
if((i__4737__auto___41017 < len__4736__auto___41016)){
args__4742__auto__.push((arguments[i__4737__auto___41017]));

var G__41018 = (i__4737__auto___41017 + (1));
i__4737__auto___41017 = G__41018;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq40887){
var G__40888 = cljs.core.first(seq40887);
var seq40887__$1 = cljs.core.next(seq40887);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40888,seq40887__$1);
}));


//# sourceMappingURL=devtools.format.js.map
