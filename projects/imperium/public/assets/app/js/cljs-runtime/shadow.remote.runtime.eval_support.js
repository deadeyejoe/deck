goog.provide('shadow.remote.runtime.eval_support');
shadow.remote.runtime.eval_support.obj_support_inst = null;
shadow.remote.runtime.eval_support.get_ref = (function shadow$remote$runtime$eval_support$get_ref(oid){
if(cljs.core.truth_(shadow.remote.runtime.eval_support.obj_support_inst)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("obj-support not bound, can only call this from eval",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));
}

return shadow.remote.runtime.obj_support.get_ref(shadow.remote.runtime.eval_support.obj_support_inst,oid);
});
shadow.remote.runtime.eval_support.cljs_eval = (function shadow$remote$runtime$eval_support$cljs_eval(p__52047,p__52048){
var map__52049 = p__52047;
var map__52049__$1 = (((((!((map__52049 == null))))?(((((map__52049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52049):map__52049);
var svc = map__52049__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52049__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52049__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var map__52050 = p__52048;
var map__52050__$1 = (((((!((map__52050 == null))))?(((((map__52050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52050):map__52050);
var msg = map__52050__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52050__$1,new cljs.core.Keyword(null,"input","input",556931961));
(shadow.remote.runtime.eval_support.obj_support_inst = obj_support);

return shadow.remote.runtime.api.cljs_eval(runtime,input,(function (p__52063){
var map__52064 = p__52063;
var map__52064__$1 = (((((!((map__52064 == null))))?(((((map__52064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52064):map__52064);
var info = map__52064__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52064__$1,new cljs.core.Keyword(null,"result","result",1415092211));
(shadow.remote.runtime.eval_support.obj_support_inst = null);

var G__52068 = result;
var G__52068__$1 = (((G__52068 instanceof cljs.core.Keyword))?G__52068.fqn:null);
switch (G__52068__$1) {
case "compile-error":
var map__52069 = info;
var map__52069__$1 = (((((!((map__52069 == null))))?(((((map__52069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52069):map__52069);
var ex_client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52069__$1,new cljs.core.Keyword(null,"ex-client-id","ex-client-id",-446123984));
var ex_oid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52069__$1,new cljs.core.Keyword(null,"ex-oid","ex-oid",-650256737));
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52069__$1,new cljs.core.Keyword(null,"report","report",1394055010));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-compile-error","eval-compile-error",-1765075397),new cljs.core.Keyword(null,"ex-client-id","ex-client-id",-446123984),ex_client_id,new cljs.core.Keyword(null,"ex-oid","ex-oid",-650256737),ex_oid,new cljs.core.Keyword(null,"report","report",1394055010),report], null));

break;
case "runtime-error":
var map__52072 = info;
var map__52072__$1 = (((((!((map__52072 == null))))?(((((map__52072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52072):map__52072);
var ex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52072__$1,new cljs.core.Keyword(null,"ex","ex",-1413771341));
var ex_oid = shadow.remote.runtime.obj_support.register(obj_support,ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),input], null));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-runtime-error","eval-runtime-error",275935402),new cljs.core.Keyword(null,"ex-oid","ex-oid",-650256737),ex_oid], null));

break;
case "warnings":
var map__52083 = info;
var map__52083__$1 = (((((!((map__52083 == null))))?(((((map__52083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52083):map__52083);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52083__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-compile-warnings","eval-compile-warnings",1994859386),new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));

break;
case "ok":
var map__52085 = info;
var map__52085__$1 = (((((!((map__52085 == null))))?(((((map__52085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52085):map__52085);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52085__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52085__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var time_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52085__$1,new cljs.core.Keyword(null,"time-start","time-start",-590811745));
var time_finish = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52085__$1,new cljs.core.Keyword(null,"time-finish","time-finish",-1456032653));
var val = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(results)))?cljs.core.first(results):results);
var ref_oid = shadow.remote.runtime.obj_support.register(obj_support,val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),input], null));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid,new cljs.core.Keyword(null,"eval-ms","eval-ms",788821074),(time_finish - time_start),new cljs.core.Keyword(null,"eval-ns","eval-ns",-915623795),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));

break;
default:
return console.error("Unhandled cljs-eval result",info);

}
}));
});
shadow.remote.runtime.eval_support.js_eval = (function shadow$remote$runtime$eval_support$js_eval(p__52098,p__52099){
var map__52100 = p__52098;
var map__52100__$1 = (((((!((map__52100 == null))))?(((((map__52100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52100):map__52100);
var svc = map__52100__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52100__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52100__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var map__52101 = p__52099;
var map__52101__$1 = (((((!((map__52101 == null))))?(((((map__52101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52101):map__52101);
var msg = map__52101__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52101__$1,new cljs.core.Keyword(null,"code","code",1586293142));
try{var res = shadow.remote.runtime.api.js_eval(runtime,code);
var ref_oid = shadow.remote.runtime.obj_support.register(obj_support,res,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-code","js-code",1816578331),code], null));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid], null));
}catch (e52104){var e = e52104;
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-error","eval-error",466139568),new cljs.core.Keyword(null,"e","e",1381269198),e.message], null));
}});
shadow.remote.runtime.eval_support.start = (function shadow$remote$runtime$eval_support$start(runtime,obj_support){
var svc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support], null);
shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.eval-support","ext","shadow.remote.runtime.eval-support/ext",1781604625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"js-eval","js-eval",-137738892),(function (p1__52105_SHARP_){
return shadow.remote.runtime.eval_support.js_eval(svc,p1__52105_SHARP_);
}),new cljs.core.Keyword(null,"cljs-eval","cljs-eval",1860675817),(function (p1__52106_SHARP_){
return shadow.remote.runtime.eval_support.cljs_eval(svc,p1__52106_SHARP_);
})], null)], null));

return svc;
});
shadow.remote.runtime.eval_support.stop = (function shadow$remote$runtime$eval_support$stop(p__52125){
var map__52126 = p__52125;
var map__52126__$1 = (((((!((map__52126 == null))))?(((((map__52126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52126):map__52126);
var svc = map__52126__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52126__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.eval-support","ext","shadow.remote.runtime.eval-support/ext",1781604625));
});

//# sourceMappingURL=shadow.remote.runtime.eval_support.js.map
