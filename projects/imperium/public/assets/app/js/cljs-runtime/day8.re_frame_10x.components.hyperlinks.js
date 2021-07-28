goog.provide('day8.re_frame_10x.components.hyperlinks');
day8.re_frame_10x.components.hyperlinks.info_style_factory$ = (function day8$re_frame_10x$components$hyperlinks$info_style_factory$(style_name47797,params47798,ambiance){
var base_style47802 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.percent((50))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),day8.re_frame_10x.styles.nord0], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),day8.re_frame_10x.styles.nord3], null)], null)], null)], null);
var key__47223__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style47802)));
var name47801 = (function (){var fexpr__47804 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util/build-style-name",1924410658,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util","day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util",1310758620,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/v1v1v0/spade/util.cljc",(23),(1),(36),(36),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__47804.cljs$core$IFn$_invoke$arity$3 ? fexpr__47804.cljs$core$IFn$_invoke$arity$3(style_name47797,key__47223__auto__,params47798) : fexpr__47804.call(null,style_name47797,key__47223__auto__,params47798));
})();
var style47800 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name47801)].join('')], null),base_style47802);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.compile_css(style47800),new cljs.core.Keyword(null,"name","name",1843675177),name47801,new cljs.core.Keyword(null,"composes","composes",-378837833),day8.re_frame_10x.styles.colors_2(ambiance)], null);
});

var factory_name47799_47808 = day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.factory__GT_name(day8.re_frame_10x.components.hyperlinks.info_style_factory$);
day8.re_frame_10x.components.hyperlinks.info_style = (function day8$re_frame_10x$components$hyperlinks$info_style(ambiance){
return day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name47799_47808,day8.re_frame_10x.components.hyperlinks.info_style_factory$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ambiance], null));
});
day8.re_frame_10x.components.hyperlinks.info = (function day8$re_frame_10x$components$hyperlinks$info(url){
var ambiance = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.hyperlink_href,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.hyperlinks.info_style(ambiance),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.help_outline], null)], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),url], null);
});

//# sourceMappingURL=day8.re_frame_10x.components.hyperlinks.js.map