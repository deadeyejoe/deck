goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53002 = arguments.length;
var i__4737__auto___53003 = (0);
while(true){
if((i__4737__auto___53003 < len__4736__auto___53002)){
args__4742__auto__.push((arguments[i__4737__auto___53003]));

var G__53006 = (i__4737__auto___53003 + (1));
i__4737__auto___53003 = G__53006;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq52670){
var G__52671 = cljs.core.first(seq52670);
var seq52670__$1 = cljs.core.next(seq52670);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52671,seq52670__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__52673 = cljs.core.seq(sources);
var chunk__52674 = null;
var count__52675 = (0);
var i__52676 = (0);
while(true){
if((i__52676 < count__52675)){
var map__52689 = chunk__52674.cljs$core$IIndexed$_nth$arity$2(null,i__52676);
var map__52689__$1 = (((((!((map__52689 == null))))?(((((map__52689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52689):map__52689);
var src = map__52689__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52689__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52689__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52689__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52689__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52691){var e_53012 = e52691;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53012);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53012.message)].join('')));
}

var G__53013 = seq__52673;
var G__53014 = chunk__52674;
var G__53015 = count__52675;
var G__53016 = (i__52676 + (1));
seq__52673 = G__53013;
chunk__52674 = G__53014;
count__52675 = G__53015;
i__52676 = G__53016;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52673);
if(temp__5735__auto__){
var seq__52673__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52673__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52673__$1);
var G__53017 = cljs.core.chunk_rest(seq__52673__$1);
var G__53018 = c__4556__auto__;
var G__53019 = cljs.core.count(c__4556__auto__);
var G__53020 = (0);
seq__52673 = G__53017;
chunk__52674 = G__53018;
count__52675 = G__53019;
i__52676 = G__53020;
continue;
} else {
var map__52692 = cljs.core.first(seq__52673__$1);
var map__52692__$1 = (((((!((map__52692 == null))))?(((((map__52692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52692):map__52692);
var src = map__52692__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52692__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52692__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52692__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52692__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52694){var e_53021 = e52694;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53021);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53021.message)].join('')));
}

var G__53022 = cljs.core.next(seq__52673__$1);
var G__53023 = null;
var G__53024 = (0);
var G__53025 = (0);
seq__52673 = G__53022;
chunk__52674 = G__53023;
count__52675 = G__53024;
i__52676 = G__53025;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__52707 = cljs.core.seq(js_requires);
var chunk__52708 = null;
var count__52709 = (0);
var i__52710 = (0);
while(true){
if((i__52710 < count__52709)){
var js_ns = chunk__52708.cljs$core$IIndexed$_nth$arity$2(null,i__52710);
var require_str_53026 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53026);


var G__53027 = seq__52707;
var G__53028 = chunk__52708;
var G__53029 = count__52709;
var G__53030 = (i__52710 + (1));
seq__52707 = G__53027;
chunk__52708 = G__53028;
count__52709 = G__53029;
i__52710 = G__53030;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52707);
if(temp__5735__auto__){
var seq__52707__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52707__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52707__$1);
var G__53032 = cljs.core.chunk_rest(seq__52707__$1);
var G__53033 = c__4556__auto__;
var G__53034 = cljs.core.count(c__4556__auto__);
var G__53035 = (0);
seq__52707 = G__53032;
chunk__52708 = G__53033;
count__52709 = G__53034;
i__52710 = G__53035;
continue;
} else {
var js_ns = cljs.core.first(seq__52707__$1);
var require_str_53036 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53036);


var G__53039 = cljs.core.next(seq__52707__$1);
var G__53040 = null;
var G__53041 = (0);
var G__53042 = (0);
seq__52707 = G__53039;
chunk__52708 = G__53040;
count__52709 = G__53041;
i__52710 = G__53042;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__52713){
var map__52714 = p__52713;
var map__52714__$1 = (((((!((map__52714 == null))))?(((((map__52714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52714):map__52714);
var msg = map__52714__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52714__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52714__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52716(s__52717){
return (new cljs.core.LazySeq(null,(function (){
var s__52717__$1 = s__52717;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52717__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__52722 = cljs.core.first(xs__6292__auto__);
var map__52722__$1 = (((((!((map__52722 == null))))?(((((map__52722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52722):map__52722);
var src = map__52722__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52722__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52722__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__52717__$1,map__52722,map__52722__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52714,map__52714__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52716_$_iter__52718(s__52719){
return (new cljs.core.LazySeq(null,((function (s__52717__$1,map__52722,map__52722__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52714,map__52714__$1,msg,info,reload_info){
return (function (){
var s__52719__$1 = s__52719;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52719__$1);
if(temp__5735__auto____$1){
var s__52719__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52719__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__52719__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__52721 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__52720 = (0);
while(true){
if((i__52720 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__52720);
cljs.core.chunk_append(b__52721,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__53054 = (i__52720 + (1));
i__52720 = G__53054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52721),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52716_$_iter__52718(cljs.core.chunk_rest(s__52719__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52721),null);
}
} else {
var warning = cljs.core.first(s__52719__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52716_$_iter__52718(cljs.core.rest(s__52719__$2)));
}
} else {
return null;
}
break;
}
});})(s__52717__$1,map__52722,map__52722__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52714,map__52714__$1,msg,info,reload_info))
,null,null));
});})(s__52717__$1,map__52722,map__52722__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52714,map__52714__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52716(cljs.core.rest(s__52717__$1)));
} else {
var G__53059 = cljs.core.rest(s__52717__$1);
s__52717__$1 = G__53059;
continue;
}
} else {
var G__53060 = cljs.core.rest(s__52717__$1);
s__52717__$1 = G__53060;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__52724_53061 = cljs.core.seq(warnings);
var chunk__52725_53062 = null;
var count__52726_53063 = (0);
var i__52727_53064 = (0);
while(true){
if((i__52727_53064 < count__52726_53063)){
var map__52732_53065 = chunk__52725_53062.cljs$core$IIndexed$_nth$arity$2(null,i__52727_53064);
var map__52732_53066__$1 = (((((!((map__52732_53065 == null))))?(((((map__52732_53065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52732_53065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52732_53065):map__52732_53065);
var w_53067 = map__52732_53066__$1;
var msg_53068__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52732_53066__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52732_53066__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52732_53066__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52732_53066__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53071)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53069),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53070),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53068__$1)].join(''));


var G__53072 = seq__52724_53061;
var G__53073 = chunk__52725_53062;
var G__53074 = count__52726_53063;
var G__53075 = (i__52727_53064 + (1));
seq__52724_53061 = G__53072;
chunk__52725_53062 = G__53073;
count__52726_53063 = G__53074;
i__52727_53064 = G__53075;
continue;
} else {
var temp__5735__auto___53076 = cljs.core.seq(seq__52724_53061);
if(temp__5735__auto___53076){
var seq__52724_53077__$1 = temp__5735__auto___53076;
if(cljs.core.chunked_seq_QMARK_(seq__52724_53077__$1)){
var c__4556__auto___53078 = cljs.core.chunk_first(seq__52724_53077__$1);
var G__53079 = cljs.core.chunk_rest(seq__52724_53077__$1);
var G__53080 = c__4556__auto___53078;
var G__53081 = cljs.core.count(c__4556__auto___53078);
var G__53082 = (0);
seq__52724_53061 = G__53079;
chunk__52725_53062 = G__53080;
count__52726_53063 = G__53081;
i__52727_53064 = G__53082;
continue;
} else {
var map__52736_53083 = cljs.core.first(seq__52724_53077__$1);
var map__52736_53084__$1 = (((((!((map__52736_53083 == null))))?(((((map__52736_53083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52736_53083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52736_53083):map__52736_53083);
var w_53085 = map__52736_53084__$1;
var msg_53086__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52736_53084__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52736_53084__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52736_53084__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52736_53084__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53089)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53087),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53088),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53086__$1)].join(''));


var G__53090 = cljs.core.next(seq__52724_53077__$1);
var G__53091 = null;
var G__53092 = (0);
var G__53093 = (0);
seq__52724_53061 = G__53090;
chunk__52725_53062 = G__53091;
count__52726_53063 = G__53092;
i__52727_53064 = G__53093;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__52712_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__52712_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__52743){
var map__52745 = p__52743;
var map__52745__$1 = (((((!((map__52745 == null))))?(((((map__52745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52745):map__52745);
var msg = map__52745__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52745__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__52747 = cljs.core.seq(updates);
var chunk__52749 = null;
var count__52750 = (0);
var i__52751 = (0);
while(true){
if((i__52751 < count__52750)){
var path = chunk__52749.cljs$core$IIndexed$_nth$arity$2(null,i__52751);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52790_53101 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52794_53102 = null;
var count__52795_53103 = (0);
var i__52796_53104 = (0);
while(true){
if((i__52796_53104 < count__52795_53103)){
var node_53105 = chunk__52794_53102.cljs$core$IIndexed$_nth$arity$2(null,i__52796_53104);
if(cljs.core.not(node_53105.shadow$old)){
var path_match_53106 = shadow.cljs.devtools.client.browser.match_paths(node_53105.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53106)){
var new_link_53107 = (function (){var G__52811 = node_53105.cloneNode(true);
G__52811.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53106),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52811;
})();
(node_53105.shadow$old = true);

(new_link_53107.onload = ((function (seq__52790_53101,chunk__52794_53102,count__52795_53103,i__52796_53104,seq__52747,chunk__52749,count__52750,i__52751,new_link_53107,path_match_53106,node_53105,path,map__52745,map__52745__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53105);
});})(seq__52790_53101,chunk__52794_53102,count__52795_53103,i__52796_53104,seq__52747,chunk__52749,count__52750,i__52751,new_link_53107,path_match_53106,node_53105,path,map__52745,map__52745__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53106], 0));

goog.dom.insertSiblingAfter(new_link_53107,node_53105);


var G__53111 = seq__52790_53101;
var G__53112 = chunk__52794_53102;
var G__53113 = count__52795_53103;
var G__53114 = (i__52796_53104 + (1));
seq__52790_53101 = G__53111;
chunk__52794_53102 = G__53112;
count__52795_53103 = G__53113;
i__52796_53104 = G__53114;
continue;
} else {
var G__53115 = seq__52790_53101;
var G__53116 = chunk__52794_53102;
var G__53117 = count__52795_53103;
var G__53118 = (i__52796_53104 + (1));
seq__52790_53101 = G__53115;
chunk__52794_53102 = G__53116;
count__52795_53103 = G__53117;
i__52796_53104 = G__53118;
continue;
}
} else {
var G__53119 = seq__52790_53101;
var G__53120 = chunk__52794_53102;
var G__53121 = count__52795_53103;
var G__53122 = (i__52796_53104 + (1));
seq__52790_53101 = G__53119;
chunk__52794_53102 = G__53120;
count__52795_53103 = G__53121;
i__52796_53104 = G__53122;
continue;
}
} else {
var temp__5735__auto___53125 = cljs.core.seq(seq__52790_53101);
if(temp__5735__auto___53125){
var seq__52790_53126__$1 = temp__5735__auto___53125;
if(cljs.core.chunked_seq_QMARK_(seq__52790_53126__$1)){
var c__4556__auto___53127 = cljs.core.chunk_first(seq__52790_53126__$1);
var G__53130 = cljs.core.chunk_rest(seq__52790_53126__$1);
var G__53131 = c__4556__auto___53127;
var G__53132 = cljs.core.count(c__4556__auto___53127);
var G__53133 = (0);
seq__52790_53101 = G__53130;
chunk__52794_53102 = G__53131;
count__52795_53103 = G__53132;
i__52796_53104 = G__53133;
continue;
} else {
var node_53134 = cljs.core.first(seq__52790_53126__$1);
if(cljs.core.not(node_53134.shadow$old)){
var path_match_53135 = shadow.cljs.devtools.client.browser.match_paths(node_53134.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53135)){
var new_link_53136 = (function (){var G__52816 = node_53134.cloneNode(true);
G__52816.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53135),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52816;
})();
(node_53134.shadow$old = true);

(new_link_53136.onload = ((function (seq__52790_53101,chunk__52794_53102,count__52795_53103,i__52796_53104,seq__52747,chunk__52749,count__52750,i__52751,new_link_53136,path_match_53135,node_53134,seq__52790_53126__$1,temp__5735__auto___53125,path,map__52745,map__52745__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53134);
});})(seq__52790_53101,chunk__52794_53102,count__52795_53103,i__52796_53104,seq__52747,chunk__52749,count__52750,i__52751,new_link_53136,path_match_53135,node_53134,seq__52790_53126__$1,temp__5735__auto___53125,path,map__52745,map__52745__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53135], 0));

goog.dom.insertSiblingAfter(new_link_53136,node_53134);


var G__53137 = cljs.core.next(seq__52790_53126__$1);
var G__53138 = null;
var G__53139 = (0);
var G__53140 = (0);
seq__52790_53101 = G__53137;
chunk__52794_53102 = G__53138;
count__52795_53103 = G__53139;
i__52796_53104 = G__53140;
continue;
} else {
var G__53141 = cljs.core.next(seq__52790_53126__$1);
var G__53142 = null;
var G__53143 = (0);
var G__53144 = (0);
seq__52790_53101 = G__53141;
chunk__52794_53102 = G__53142;
count__52795_53103 = G__53143;
i__52796_53104 = G__53144;
continue;
}
} else {
var G__53145 = cljs.core.next(seq__52790_53126__$1);
var G__53146 = null;
var G__53147 = (0);
var G__53148 = (0);
seq__52790_53101 = G__53145;
chunk__52794_53102 = G__53146;
count__52795_53103 = G__53147;
i__52796_53104 = G__53148;
continue;
}
}
} else {
}
}
break;
}


var G__53149 = seq__52747;
var G__53150 = chunk__52749;
var G__53151 = count__52750;
var G__53152 = (i__52751 + (1));
seq__52747 = G__53149;
chunk__52749 = G__53150;
count__52750 = G__53151;
i__52751 = G__53152;
continue;
} else {
var G__53153 = seq__52747;
var G__53154 = chunk__52749;
var G__53155 = count__52750;
var G__53156 = (i__52751 + (1));
seq__52747 = G__53153;
chunk__52749 = G__53154;
count__52750 = G__53155;
i__52751 = G__53156;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52747);
if(temp__5735__auto__){
var seq__52747__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52747__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52747__$1);
var G__53157 = cljs.core.chunk_rest(seq__52747__$1);
var G__53158 = c__4556__auto__;
var G__53159 = cljs.core.count(c__4556__auto__);
var G__53160 = (0);
seq__52747 = G__53157;
chunk__52749 = G__53158;
count__52750 = G__53159;
i__52751 = G__53160;
continue;
} else {
var path = cljs.core.first(seq__52747__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52822_53161 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52826_53162 = null;
var count__52827_53163 = (0);
var i__52828_53164 = (0);
while(true){
if((i__52828_53164 < count__52827_53163)){
var node_53165 = chunk__52826_53162.cljs$core$IIndexed$_nth$arity$2(null,i__52828_53164);
if(cljs.core.not(node_53165.shadow$old)){
var path_match_53166 = shadow.cljs.devtools.client.browser.match_paths(node_53165.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53166)){
var new_link_53167 = (function (){var G__52860 = node_53165.cloneNode(true);
G__52860.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53166),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52860;
})();
(node_53165.shadow$old = true);

(new_link_53167.onload = ((function (seq__52822_53161,chunk__52826_53162,count__52827_53163,i__52828_53164,seq__52747,chunk__52749,count__52750,i__52751,new_link_53167,path_match_53166,node_53165,path,seq__52747__$1,temp__5735__auto__,map__52745,map__52745__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53165);
});})(seq__52822_53161,chunk__52826_53162,count__52827_53163,i__52828_53164,seq__52747,chunk__52749,count__52750,i__52751,new_link_53167,path_match_53166,node_53165,path,seq__52747__$1,temp__5735__auto__,map__52745,map__52745__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53166], 0));

goog.dom.insertSiblingAfter(new_link_53167,node_53165);


var G__53168 = seq__52822_53161;
var G__53169 = chunk__52826_53162;
var G__53170 = count__52827_53163;
var G__53171 = (i__52828_53164 + (1));
seq__52822_53161 = G__53168;
chunk__52826_53162 = G__53169;
count__52827_53163 = G__53170;
i__52828_53164 = G__53171;
continue;
} else {
var G__53172 = seq__52822_53161;
var G__53173 = chunk__52826_53162;
var G__53174 = count__52827_53163;
var G__53175 = (i__52828_53164 + (1));
seq__52822_53161 = G__53172;
chunk__52826_53162 = G__53173;
count__52827_53163 = G__53174;
i__52828_53164 = G__53175;
continue;
}
} else {
var G__53176 = seq__52822_53161;
var G__53177 = chunk__52826_53162;
var G__53178 = count__52827_53163;
var G__53179 = (i__52828_53164 + (1));
seq__52822_53161 = G__53176;
chunk__52826_53162 = G__53177;
count__52827_53163 = G__53178;
i__52828_53164 = G__53179;
continue;
}
} else {
var temp__5735__auto___53180__$1 = cljs.core.seq(seq__52822_53161);
if(temp__5735__auto___53180__$1){
var seq__52822_53181__$1 = temp__5735__auto___53180__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52822_53181__$1)){
var c__4556__auto___53182 = cljs.core.chunk_first(seq__52822_53181__$1);
var G__53183 = cljs.core.chunk_rest(seq__52822_53181__$1);
var G__53184 = c__4556__auto___53182;
var G__53185 = cljs.core.count(c__4556__auto___53182);
var G__53186 = (0);
seq__52822_53161 = G__53183;
chunk__52826_53162 = G__53184;
count__52827_53163 = G__53185;
i__52828_53164 = G__53186;
continue;
} else {
var node_53187 = cljs.core.first(seq__52822_53181__$1);
if(cljs.core.not(node_53187.shadow$old)){
var path_match_53188 = shadow.cljs.devtools.client.browser.match_paths(node_53187.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53188)){
var new_link_53189 = (function (){var G__52869 = node_53187.cloneNode(true);
G__52869.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53188),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52869;
})();
(node_53187.shadow$old = true);

(new_link_53189.onload = ((function (seq__52822_53161,chunk__52826_53162,count__52827_53163,i__52828_53164,seq__52747,chunk__52749,count__52750,i__52751,new_link_53189,path_match_53188,node_53187,seq__52822_53181__$1,temp__5735__auto___53180__$1,path,seq__52747__$1,temp__5735__auto__,map__52745,map__52745__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53187);
});})(seq__52822_53161,chunk__52826_53162,count__52827_53163,i__52828_53164,seq__52747,chunk__52749,count__52750,i__52751,new_link_53189,path_match_53188,node_53187,seq__52822_53181__$1,temp__5735__auto___53180__$1,path,seq__52747__$1,temp__5735__auto__,map__52745,map__52745__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53188], 0));

goog.dom.insertSiblingAfter(new_link_53189,node_53187);


var G__53191 = cljs.core.next(seq__52822_53181__$1);
var G__53192 = null;
var G__53193 = (0);
var G__53194 = (0);
seq__52822_53161 = G__53191;
chunk__52826_53162 = G__53192;
count__52827_53163 = G__53193;
i__52828_53164 = G__53194;
continue;
} else {
var G__53197 = cljs.core.next(seq__52822_53181__$1);
var G__53198 = null;
var G__53199 = (0);
var G__53200 = (0);
seq__52822_53161 = G__53197;
chunk__52826_53162 = G__53198;
count__52827_53163 = G__53199;
i__52828_53164 = G__53200;
continue;
}
} else {
var G__53203 = cljs.core.next(seq__52822_53181__$1);
var G__53204 = null;
var G__53205 = (0);
var G__53206 = (0);
seq__52822_53161 = G__53203;
chunk__52826_53162 = G__53204;
count__52827_53163 = G__53205;
i__52828_53164 = G__53206;
continue;
}
}
} else {
}
}
break;
}


var G__53207 = cljs.core.next(seq__52747__$1);
var G__53208 = null;
var G__53209 = (0);
var G__53210 = (0);
seq__52747 = G__53207;
chunk__52749 = G__53208;
count__52750 = G__53209;
i__52751 = G__53210;
continue;
} else {
var G__53211 = cljs.core.next(seq__52747__$1);
var G__53212 = null;
var G__53213 = (0);
var G__53214 = (0);
seq__52747 = G__53211;
chunk__52749 = G__53212;
count__52750 = G__53213;
i__52751 = G__53214;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__52876){
var map__52877 = p__52876;
var map__52877__$1 = (((((!((map__52877 == null))))?(((((map__52877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52877):map__52877);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52877__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__52907){
var map__52908 = p__52907;
var map__52908__$1 = (((((!((map__52908 == null))))?(((((map__52908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52908):map__52908);
var _ = map__52908__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52908__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__52917,done,error){
var map__52918 = p__52917;
var map__52918__$1 = (((((!((map__52918 == null))))?(((((map__52918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52918):map__52918);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52918__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__52927,done,error){
var map__52928 = p__52927;
var map__52928__$1 = (((((!((map__52928 == null))))?(((((map__52928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52928):map__52928);
var msg = map__52928__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52928__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52928__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52928__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__52930){
var map__52931 = p__52930;
var map__52931__$1 = (((((!((map__52931 == null))))?(((((map__52931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52931):map__52931);
var src = map__52931__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52931__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__52936 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__52936) : done.call(null,G__52936));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__52953){
var map__52954 = p__52953;
var map__52954__$1 = (((((!((map__52954 == null))))?(((((map__52954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52954):map__52954);
var msg__$1 = map__52954__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52954__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e52956){var ex = e52956;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__52957){
var map__52958 = p__52957;
var map__52958__$1 = (((((!((map__52958 == null))))?(((((map__52958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52958):map__52958);
var env = map__52958__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52958__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__52985){
var map__52986 = p__52985;
var map__52986__$1 = (((((!((map__52986 == null))))?(((((map__52986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52986):map__52986);
var msg = map__52986__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52986__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__52990){
var map__52991 = p__52990;
var map__52991__$1 = (((((!((map__52991 == null))))?(((((map__52991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52991):map__52991);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52991__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52991__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__52994){
var map__52995 = p__52994;
var map__52995__$1 = (((((!((map__52995 == null))))?(((((map__52995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52995):map__52995);
var svc = map__52995__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52995__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
