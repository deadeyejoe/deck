goog.provide('re_highlight.core');
var module$node_modules$highlight_DOT_js$lib$index=shadow.js.require("module$node_modules$highlight_DOT_js$lib$index", {});
re_highlight.core.highlight_element = goog.object.get(module$node_modules$highlight_DOT_js$lib$index,"highlightElement");
re_highlight.core.did_mount = (function re_highlight$core$did_mount(this$){
var temp__5735__auto__ = goog.object.get(reagent.dom.dom_node(this$),"firstChild");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return (re_highlight.core.highlight_element.cljs$core$IFn$_invoke$arity$1 ? re_highlight.core.highlight_element.cljs$core$IFn$_invoke$arity$1(el) : re_highlight.core.highlight_element.call(null,el));
} else {
return null;
}
});
re_highlight.core.did_update = (function re_highlight$core$did_update(this$,old_argv,old_state,snapshot){
var temp__5735__auto__ = goog.object.get(reagent.dom.dom_node(this$),"firstChild");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
goog.object.set(goog.object.get(module$node_modules$highlight_DOT_js$lib$index,"initHighlighting"),"called",false);

return (re_highlight.core.highlight_element.cljs$core$IFn$_invoke$arity$1 ? re_highlight.core.highlight_element.cljs$core$IFn$_invoke$arity$1(el) : re_highlight.core.highlight_element.call(null,el));
} else {
return null;
}
});
re_highlight.core.render = (function re_highlight$core$render(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46536 = arguments.length;
var i__4737__auto___46537 = (0);
while(true){
if((i__4737__auto___46537 < len__4736__auto___46536)){
args__4742__auto__.push((arguments[i__4737__auto___46537]));

var G__46538 = (i__4737__auto___46537 + (1));
i__4737__auto___46537 = G__46538;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return re_highlight.core.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(re_highlight.core.render.cljs$core$IFn$_invoke$arity$variadic = (function (p__46521,children){
var map__46522 = p__46521;
var map__46522__$1 = (((((!((map__46522 == null))))?(((((map__46522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46522):map__46522);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46522__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46522__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46522__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),language], null)], null),children)], null);
}));

(re_highlight.core.render.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_highlight.core.render.cljs$lang$applyTo = (function (seq46519){
var G__46520 = cljs.core.first(seq46519);
var seq46519__$1 = cljs.core.next(seq46519);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46520,seq46519__$1);
}));

re_highlight.core.highlight = (function re_highlight$core$highlight(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),re_highlight.core.did_mount,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),re_highlight.core.did_update,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),re_highlight.core.render], null));
});

//# sourceMappingURL=re_highlight.core.js.map
