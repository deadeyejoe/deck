goog.provide('day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime');
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.v1v1v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime._STAR_injected_STAR_ !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime._STAR_injected_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.v1v1v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime._STAR_css_compile_flags_STAR_ !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime._STAR_css_compile_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),goog.DEBUG], null);
}
day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.__GT_css_var = (function day8$re_frame_10x$inlined_deps$spade$v1v1v0$spade$runtime$__GT_css_var(n){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.__GT_CSSFunction("var",n);
});
day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.compile_css = (function day8$re_frame_10x$inlined_deps$spade$v1v1v0$spade$runtime$compile_css(elements){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime._STAR_css_compile_flags_STAR_,elements], 0));
});
day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.perform_update_BANG_ = (function day8$re_frame_10x$inlined_deps$spade$v1v1v0$spade$runtime$perform_update_BANG_(obj,css){
return (new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(obj).innerHTML = css);
});
day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.update_BANG_ = (function day8$re_frame_10x$inlined_deps$spade$v1v1v0$spade$runtime$update_BANG_(id,css){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime._STAR_injected_STAR_,cljs.core.update,id,(function day8$re_frame_10x$inlined_deps$spade$v1v1v0$spade$runtime$update_BANG__$_update_injected_style(obj){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(obj),css)){
} else {
day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.perform_update_BANG_(obj,css);
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(obj,new cljs.core.Keyword(null,"source","source",-433931539),css);
}));
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.v1v1v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime._STAR_dom_STAR_ !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime._STAR_dom_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.inject_BANG_ = (function day8$re_frame_10x$inlined_deps$spade$v1v1v0$spade$runtime$inject_BANG_(id,css){
var dom = cljs.core.deref(day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime._STAR_dom_STAR_);
var element = (function (){var G__47158 = document.createElement("style");
G__47158.setAttribute("spade-id",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));

return G__47158;
})();
var obj = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"element","element",1974019749),element,new cljs.core.Keyword(null,"source","source",-433931539),css,new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
if((!((dom == null)))){
} else {
throw (new Error(["Assert failed: ","An element is required in the dom to inject the style.","\n","(some? dom)"].join('')));
}

dom.appendChild(element);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime._STAR_injected_STAR_,cljs.core.assoc,id,obj);

return day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.perform_update_BANG_(obj,css);
});
day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.compose_names = (function day8$re_frame_10x$inlined_deps$spade$v1v1v0$spade$runtime$compose_names(p__47159){
var map__47160 = p__47159;
var map__47160__$1 = (((((!((map__47160 == null))))?(((((map__47160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47160):map__47160);
var style_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47160__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var composed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47160__$1,new cljs.core.Keyword(null,"composes","composes",-378837833));
if(cljs.core.not(composed)){
return style_name;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
if(typeof item === 'string'){
return item;
} else {
if(((cljs.core.map_QMARK_(item)) && (typeof new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item) === 'string'))){
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item);
} else {
throw (new Error(["Invalid argument to :composes key:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join('')));

}
}
}),((cljs.core.seq_QMARK_(composed))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(composed,style_name):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [composed,style_name], null))));
}
});
day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.ensure_style_BANG_ = (function day8$re_frame_10x$inlined_deps$spade$v1v1v0$spade$runtime$ensure_style_BANG_(mode,base_style_name,factory,params){
var map__47162 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(factory,base_style_name,params,params);
var map__47162__$1 = (((((!((map__47162 == null))))?(((((map__47162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47162):map__47162);
var info = map__47162__$1;
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47162__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var style_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47162__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime._STAR_injected_STAR_),style_name);
if(cljs.core.truth_(existing)){
day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.update_BANG_(style_name,css);
} else {
day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.inject_BANG_(style_name,css);
}

var G__47165 = mode;
var G__47165__$1 = (((G__47165 instanceof cljs.core.Keyword))?G__47165.fqn:null);
switch (G__47165__$1) {
case "attrs":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.compose_names(info)], null);

break;
case "class":
case "keyframes":
return day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.compose_names(info);

break;
case "global":
return css;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47165__$1)].join('')));

}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.js.map
