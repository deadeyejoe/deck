goog.provide('wscljs.format');

/**
 * Protocol used to define encoding format for socket messages.
 * @interface
 */
wscljs.format.Format = function(){};

var wscljs$format$Format$read$dyn_48181 = (function (formatter,string){
var x__4428__auto__ = (((formatter == null))?null:formatter);
var m__4429__auto__ = (wscljs.format.read[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(formatter,string) : m__4429__auto__.call(null,formatter,string));
} else {
var m__4426__auto__ = (wscljs.format.read["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(formatter,string) : m__4426__auto__.call(null,formatter,string));
} else {
throw cljs.core.missing_protocol("Format.read",formatter);
}
}
});
wscljs.format.read = (function wscljs$format$read(formatter,string){
if((((!((formatter == null)))) && ((!((formatter.wscljs$format$Format$read$arity$2 == null)))))){
return formatter.wscljs$format$Format$read$arity$2(formatter,string);
} else {
return wscljs$format$Format$read$dyn_48181(formatter,string);
}
});

var wscljs$format$Format$write$dyn_48185 = (function (formatter,value){
var x__4428__auto__ = (((formatter == null))?null:formatter);
var m__4429__auto__ = (wscljs.format.write[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(formatter,value) : m__4429__auto__.call(null,formatter,value));
} else {
var m__4426__auto__ = (wscljs.format.write["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(formatter,value) : m__4426__auto__.call(null,formatter,value));
} else {
throw cljs.core.missing_protocol("Format.write",formatter);
}
}
});
wscljs.format.write = (function wscljs$format$write(formatter,value){
if((((!((formatter == null)))) && ((!((formatter.wscljs$format$Format$write$arity$2 == null)))))){
return formatter.wscljs$format$Format$write$arity$2(formatter,value);
} else {
return wscljs$format$Format$write$dyn_48185(formatter,value);
}
});

/**
 * The identity formatter. Does nothing to the input or output.
 */
wscljs.format.identity = (function (){
if((typeof wscljs !== 'undefined') && (typeof wscljs.format !== 'undefined') && (typeof wscljs.format.t_wscljs$format48172 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {wscljs.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
wscljs.format.t_wscljs$format48172 = (function (meta48173){
this.meta48173 = meta48173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(wscljs.format.t_wscljs$format48172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48174,meta48173__$1){
var self__ = this;
var _48174__$1 = this;
return (new wscljs.format.t_wscljs$format48172(meta48173__$1));
}));

(wscljs.format.t_wscljs$format48172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48174){
var self__ = this;
var _48174__$1 = this;
return self__.meta48173;
}));

(wscljs.format.t_wscljs$format48172.prototype.wscljs$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(wscljs.format.t_wscljs$format48172.prototype.wscljs$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return s;
}));

(wscljs.format.t_wscljs$format48172.prototype.wscljs$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return v;
}));

(wscljs.format.t_wscljs$format48172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48173","meta48173",-1517904097,null)], null);
}));

(wscljs.format.t_wscljs$format48172.cljs$lang$type = true);

(wscljs.format.t_wscljs$format48172.cljs$lang$ctorStr = "wscljs.format/t_wscljs$format48172");

(wscljs.format.t_wscljs$format48172.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"wscljs.format/t_wscljs$format48172");
}));

/**
 * Positional factory function for wscljs.format/t_wscljs$format48172.
 */
wscljs.format.__GT_t_wscljs$format48172 = (function wscljs$format$__GT_t_wscljs$format48172(meta48173){
return (new wscljs.format.t_wscljs$format48172(meta48173));
});

}

return (new wscljs.format.t_wscljs$format48172(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Read and write data encoded in JSON.
 */
wscljs.format.json = (function (){
if((typeof wscljs !== 'undefined') && (typeof wscljs.format !== 'undefined') && (typeof wscljs.format.t_wscljs$format48175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {wscljs.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
wscljs.format.t_wscljs$format48175 = (function (meta48176){
this.meta48176 = meta48176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(wscljs.format.t_wscljs$format48175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48177,meta48176__$1){
var self__ = this;
var _48177__$1 = this;
return (new wscljs.format.t_wscljs$format48175(meta48176__$1));
}));

(wscljs.format.t_wscljs$format48175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48177){
var self__ = this;
var _48177__$1 = this;
return self__.meta48176;
}));

(wscljs.format.t_wscljs$format48175.prototype.wscljs$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(wscljs.format.t_wscljs$format48175.prototype.wscljs$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(s),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}));

(wscljs.format.t_wscljs$format48175.prototype.wscljs$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return JSON.stringify(cljs.core.clj__GT_js(v));
}));

(wscljs.format.t_wscljs$format48175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48176","meta48176",2128820960,null)], null);
}));

(wscljs.format.t_wscljs$format48175.cljs$lang$type = true);

(wscljs.format.t_wscljs$format48175.cljs$lang$ctorStr = "wscljs.format/t_wscljs$format48175");

(wscljs.format.t_wscljs$format48175.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"wscljs.format/t_wscljs$format48175");
}));

/**
 * Positional factory function for wscljs.format/t_wscljs$format48175.
 */
wscljs.format.__GT_t_wscljs$format48175 = (function wscljs$format$__GT_t_wscljs$format48175(meta48176){
return (new wscljs.format.t_wscljs$format48175(meta48176));
});

}

return (new wscljs.format.t_wscljs$format48175(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Read and write data serialized as EDN.
 */
wscljs.format.edn = (function (){
if((typeof wscljs !== 'undefined') && (typeof wscljs.format !== 'undefined') && (typeof wscljs.format.t_wscljs$format48178 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {wscljs.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
wscljs.format.t_wscljs$format48178 = (function (meta48179){
this.meta48179 = meta48179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(wscljs.format.t_wscljs$format48178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48180,meta48179__$1){
var self__ = this;
var _48180__$1 = this;
return (new wscljs.format.t_wscljs$format48178(meta48179__$1));
}));

(wscljs.format.t_wscljs$format48178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48180){
var self__ = this;
var _48180__$1 = this;
return self__.meta48179;
}));

(wscljs.format.t_wscljs$format48178.prototype.wscljs$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(wscljs.format.t_wscljs$format48178.prototype.wscljs$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
}));

(wscljs.format.t_wscljs$format48178.prototype.wscljs$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}));

(wscljs.format.t_wscljs$format48178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48179","meta48179",-155877204,null)], null);
}));

(wscljs.format.t_wscljs$format48178.cljs$lang$type = true);

(wscljs.format.t_wscljs$format48178.cljs$lang$ctorStr = "wscljs.format/t_wscljs$format48178");

(wscljs.format.t_wscljs$format48178.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"wscljs.format/t_wscljs$format48178");
}));

/**
 * Positional factory function for wscljs.format/t_wscljs$format48178.
 */
wscljs.format.__GT_t_wscljs$format48178 = (function wscljs$format$__GT_t_wscljs$format48178(meta48179){
return (new wscljs.format.t_wscljs$format48178(meta48179));
});

}

return (new wscljs.format.t_wscljs$format48178(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=wscljs.format.js.map
