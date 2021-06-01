goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_49638 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_49638(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_49646 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_49646(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__48430 = coll;
var G__48431 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__48430,G__48431) : shadow.dom.lazy_native_coll_seq.call(null,G__48430,G__48431));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__48443 = arguments.length;
switch (G__48443) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__48446 = arguments.length;
switch (G__48446) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__48453 = arguments.length;
switch (G__48453) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__48458 = arguments.length;
switch (G__48458) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__48476 = arguments.length;
switch (G__48476) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__48495 = arguments.length;
switch (G__48495) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e48505){if((e48505 instanceof Object)){
var e = e48505;
return console.log("didnt support attachEvent",el,e);
} else {
throw e48505;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__48511 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__48512 = null;
var count__48513 = (0);
var i__48514 = (0);
while(true){
if((i__48514 < count__48513)){
var el = chunk__48512.cljs$core$IIndexed$_nth$arity$2(null,i__48514);
var handler_49792__$1 = ((function (seq__48511,chunk__48512,count__48513,i__48514,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48511,chunk__48512,count__48513,i__48514,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49792__$1);


var G__49794 = seq__48511;
var G__49795 = chunk__48512;
var G__49796 = count__48513;
var G__49797 = (i__48514 + (1));
seq__48511 = G__49794;
chunk__48512 = G__49795;
count__48513 = G__49796;
i__48514 = G__49797;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48511);
if(temp__5735__auto__){
var seq__48511__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48511__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48511__$1);
var G__49800 = cljs.core.chunk_rest(seq__48511__$1);
var G__49801 = c__4556__auto__;
var G__49802 = cljs.core.count(c__4556__auto__);
var G__49803 = (0);
seq__48511 = G__49800;
chunk__48512 = G__49801;
count__48513 = G__49802;
i__48514 = G__49803;
continue;
} else {
var el = cljs.core.first(seq__48511__$1);
var handler_49804__$1 = ((function (seq__48511,chunk__48512,count__48513,i__48514,el,seq__48511__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48511,chunk__48512,count__48513,i__48514,el,seq__48511__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49804__$1);


var G__49807 = cljs.core.next(seq__48511__$1);
var G__49808 = null;
var G__49809 = (0);
var G__49810 = (0);
seq__48511 = G__49807;
chunk__48512 = G__49808;
count__48513 = G__49809;
i__48514 = G__49810;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__48534 = arguments.length;
switch (G__48534) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__48547 = cljs.core.seq(events);
var chunk__48548 = null;
var count__48549 = (0);
var i__48550 = (0);
while(true){
if((i__48550 < count__48549)){
var vec__48575 = chunk__48548.cljs$core$IIndexed$_nth$arity$2(null,i__48550);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48575,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48575,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49822 = seq__48547;
var G__49823 = chunk__48548;
var G__49824 = count__48549;
var G__49825 = (i__48550 + (1));
seq__48547 = G__49822;
chunk__48548 = G__49823;
count__48549 = G__49824;
i__48550 = G__49825;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48547);
if(temp__5735__auto__){
var seq__48547__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48547__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48547__$1);
var G__49828 = cljs.core.chunk_rest(seq__48547__$1);
var G__49829 = c__4556__auto__;
var G__49830 = cljs.core.count(c__4556__auto__);
var G__49831 = (0);
seq__48547 = G__49828;
chunk__48548 = G__49829;
count__48549 = G__49830;
i__48550 = G__49831;
continue;
} else {
var vec__48585 = cljs.core.first(seq__48547__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48585,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48585,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49840 = cljs.core.next(seq__48547__$1);
var G__49841 = null;
var G__49842 = (0);
var G__49843 = (0);
seq__48547 = G__49840;
chunk__48548 = G__49841;
count__48549 = G__49842;
i__48550 = G__49843;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__48592 = cljs.core.seq(styles);
var chunk__48593 = null;
var count__48594 = (0);
var i__48595 = (0);
while(true){
if((i__48595 < count__48594)){
var vec__48608 = chunk__48593.cljs$core$IIndexed$_nth$arity$2(null,i__48595);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48608,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48608,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49849 = seq__48592;
var G__49850 = chunk__48593;
var G__49851 = count__48594;
var G__49852 = (i__48595 + (1));
seq__48592 = G__49849;
chunk__48593 = G__49850;
count__48594 = G__49851;
i__48595 = G__49852;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48592);
if(temp__5735__auto__){
var seq__48592__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48592__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48592__$1);
var G__49855 = cljs.core.chunk_rest(seq__48592__$1);
var G__49856 = c__4556__auto__;
var G__49857 = cljs.core.count(c__4556__auto__);
var G__49858 = (0);
seq__48592 = G__49855;
chunk__48593 = G__49856;
count__48594 = G__49857;
i__48595 = G__49858;
continue;
} else {
var vec__48615 = cljs.core.first(seq__48592__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48615,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48615,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49869 = cljs.core.next(seq__48592__$1);
var G__49870 = null;
var G__49871 = (0);
var G__49872 = (0);
seq__48592 = G__49869;
chunk__48593 = G__49870;
count__48594 = G__49871;
i__48595 = G__49872;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__48622_49874 = key;
var G__48622_49875__$1 = (((G__48622_49874 instanceof cljs.core.Keyword))?G__48622_49874.fqn:null);
switch (G__48622_49875__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_49888 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_49888,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_49888,"aria-");
}
})())){
el.setAttribute(ks_49888,value);
} else {
(el[ks_49888] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48649){
var map__48650 = p__48649;
var map__48650__$1 = (((((!((map__48650 == null))))?(((((map__48650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48650):map__48650);
var props = map__48650__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48650__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48659 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48659,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48659,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48659,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48664 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48664,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48664;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48668 = arguments.length;
switch (G__48668) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48681){
var vec__48682 = p__48681;
var seq__48683 = cljs.core.seq(vec__48682);
var first__48684 = cljs.core.first(seq__48683);
var seq__48683__$1 = cljs.core.next(seq__48683);
var nn = first__48684;
var first__48684__$1 = cljs.core.first(seq__48683__$1);
var seq__48683__$2 = cljs.core.next(seq__48683__$1);
var np = first__48684__$1;
var nc = seq__48683__$2;
var node = vec__48682;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48688 = nn;
var G__48689 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48688,G__48689) : create_fn.call(null,G__48688,G__48689));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48691 = nn;
var G__48692 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48691,G__48692) : create_fn.call(null,G__48691,G__48692));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48696 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48696,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48696,(1),null);
var seq__48699_49942 = cljs.core.seq(node_children);
var chunk__48700_49943 = null;
var count__48701_49944 = (0);
var i__48702_49945 = (0);
while(true){
if((i__48702_49945 < count__48701_49944)){
var child_struct_49946 = chunk__48700_49943.cljs$core$IIndexed$_nth$arity$2(null,i__48702_49945);
var children_49947 = shadow.dom.dom_node(child_struct_49946);
if(cljs.core.seq_QMARK_(children_49947)){
var seq__48728_49949 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49947));
var chunk__48730_49950 = null;
var count__48731_49951 = (0);
var i__48732_49952 = (0);
while(true){
if((i__48732_49952 < count__48731_49951)){
var child_49953 = chunk__48730_49950.cljs$core$IIndexed$_nth$arity$2(null,i__48732_49952);
if(cljs.core.truth_(child_49953)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49953);


var G__49955 = seq__48728_49949;
var G__49956 = chunk__48730_49950;
var G__49957 = count__48731_49951;
var G__49958 = (i__48732_49952 + (1));
seq__48728_49949 = G__49955;
chunk__48730_49950 = G__49956;
count__48731_49951 = G__49957;
i__48732_49952 = G__49958;
continue;
} else {
var G__49977 = seq__48728_49949;
var G__49978 = chunk__48730_49950;
var G__49979 = count__48731_49951;
var G__49980 = (i__48732_49952 + (1));
seq__48728_49949 = G__49977;
chunk__48730_49950 = G__49978;
count__48731_49951 = G__49979;
i__48732_49952 = G__49980;
continue;
}
} else {
var temp__5735__auto___49983 = cljs.core.seq(seq__48728_49949);
if(temp__5735__auto___49983){
var seq__48728_49985__$1 = temp__5735__auto___49983;
if(cljs.core.chunked_seq_QMARK_(seq__48728_49985__$1)){
var c__4556__auto___49986 = cljs.core.chunk_first(seq__48728_49985__$1);
var G__49987 = cljs.core.chunk_rest(seq__48728_49985__$1);
var G__49988 = c__4556__auto___49986;
var G__49989 = cljs.core.count(c__4556__auto___49986);
var G__49990 = (0);
seq__48728_49949 = G__49987;
chunk__48730_49950 = G__49988;
count__48731_49951 = G__49989;
i__48732_49952 = G__49990;
continue;
} else {
var child_49992 = cljs.core.first(seq__48728_49985__$1);
if(cljs.core.truth_(child_49992)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49992);


var G__49997 = cljs.core.next(seq__48728_49985__$1);
var G__49998 = null;
var G__49999 = (0);
var G__50000 = (0);
seq__48728_49949 = G__49997;
chunk__48730_49950 = G__49998;
count__48731_49951 = G__49999;
i__48732_49952 = G__50000;
continue;
} else {
var G__50001 = cljs.core.next(seq__48728_49985__$1);
var G__50002 = null;
var G__50003 = (0);
var G__50004 = (0);
seq__48728_49949 = G__50001;
chunk__48730_49950 = G__50002;
count__48731_49951 = G__50003;
i__48732_49952 = G__50004;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49947);
}


var G__50012 = seq__48699_49942;
var G__50013 = chunk__48700_49943;
var G__50014 = count__48701_49944;
var G__50015 = (i__48702_49945 + (1));
seq__48699_49942 = G__50012;
chunk__48700_49943 = G__50013;
count__48701_49944 = G__50014;
i__48702_49945 = G__50015;
continue;
} else {
var temp__5735__auto___50016 = cljs.core.seq(seq__48699_49942);
if(temp__5735__auto___50016){
var seq__48699_50017__$1 = temp__5735__auto___50016;
if(cljs.core.chunked_seq_QMARK_(seq__48699_50017__$1)){
var c__4556__auto___50018 = cljs.core.chunk_first(seq__48699_50017__$1);
var G__50019 = cljs.core.chunk_rest(seq__48699_50017__$1);
var G__50020 = c__4556__auto___50018;
var G__50021 = cljs.core.count(c__4556__auto___50018);
var G__50022 = (0);
seq__48699_49942 = G__50019;
chunk__48700_49943 = G__50020;
count__48701_49944 = G__50021;
i__48702_49945 = G__50022;
continue;
} else {
var child_struct_50023 = cljs.core.first(seq__48699_50017__$1);
var children_50024 = shadow.dom.dom_node(child_struct_50023);
if(cljs.core.seq_QMARK_(children_50024)){
var seq__48748_50028 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50024));
var chunk__48751_50029 = null;
var count__48752_50030 = (0);
var i__48753_50031 = (0);
while(true){
if((i__48753_50031 < count__48752_50030)){
var child_50033 = chunk__48751_50029.cljs$core$IIndexed$_nth$arity$2(null,i__48753_50031);
if(cljs.core.truth_(child_50033)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50033);


var G__50034 = seq__48748_50028;
var G__50035 = chunk__48751_50029;
var G__50036 = count__48752_50030;
var G__50037 = (i__48753_50031 + (1));
seq__48748_50028 = G__50034;
chunk__48751_50029 = G__50035;
count__48752_50030 = G__50036;
i__48753_50031 = G__50037;
continue;
} else {
var G__50039 = seq__48748_50028;
var G__50040 = chunk__48751_50029;
var G__50041 = count__48752_50030;
var G__50042 = (i__48753_50031 + (1));
seq__48748_50028 = G__50039;
chunk__48751_50029 = G__50040;
count__48752_50030 = G__50041;
i__48753_50031 = G__50042;
continue;
}
} else {
var temp__5735__auto___50043__$1 = cljs.core.seq(seq__48748_50028);
if(temp__5735__auto___50043__$1){
var seq__48748_50044__$1 = temp__5735__auto___50043__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48748_50044__$1)){
var c__4556__auto___50045 = cljs.core.chunk_first(seq__48748_50044__$1);
var G__50046 = cljs.core.chunk_rest(seq__48748_50044__$1);
var G__50047 = c__4556__auto___50045;
var G__50048 = cljs.core.count(c__4556__auto___50045);
var G__50049 = (0);
seq__48748_50028 = G__50046;
chunk__48751_50029 = G__50047;
count__48752_50030 = G__50048;
i__48753_50031 = G__50049;
continue;
} else {
var child_50050 = cljs.core.first(seq__48748_50044__$1);
if(cljs.core.truth_(child_50050)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50050);


var G__50051 = cljs.core.next(seq__48748_50044__$1);
var G__50052 = null;
var G__50053 = (0);
var G__50054 = (0);
seq__48748_50028 = G__50051;
chunk__48751_50029 = G__50052;
count__48752_50030 = G__50053;
i__48753_50031 = G__50054;
continue;
} else {
var G__50055 = cljs.core.next(seq__48748_50044__$1);
var G__50056 = null;
var G__50057 = (0);
var G__50058 = (0);
seq__48748_50028 = G__50055;
chunk__48751_50029 = G__50056;
count__48752_50030 = G__50057;
i__48753_50031 = G__50058;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50024);
}


var G__50061 = cljs.core.next(seq__48699_50017__$1);
var G__50062 = null;
var G__50063 = (0);
var G__50064 = (0);
seq__48699_49942 = G__50061;
chunk__48700_49943 = G__50062;
count__48701_49944 = G__50063;
i__48702_49945 = G__50064;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48796 = cljs.core.seq(node);
var chunk__48797 = null;
var count__48798 = (0);
var i__48799 = (0);
while(true){
if((i__48799 < count__48798)){
var n = chunk__48797.cljs$core$IIndexed$_nth$arity$2(null,i__48799);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50078 = seq__48796;
var G__50079 = chunk__48797;
var G__50080 = count__48798;
var G__50081 = (i__48799 + (1));
seq__48796 = G__50078;
chunk__48797 = G__50079;
count__48798 = G__50080;
i__48799 = G__50081;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48796);
if(temp__5735__auto__){
var seq__48796__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48796__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48796__$1);
var G__50082 = cljs.core.chunk_rest(seq__48796__$1);
var G__50083 = c__4556__auto__;
var G__50084 = cljs.core.count(c__4556__auto__);
var G__50085 = (0);
seq__48796 = G__50082;
chunk__48797 = G__50083;
count__48798 = G__50084;
i__48799 = G__50085;
continue;
} else {
var n = cljs.core.first(seq__48796__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50086 = cljs.core.next(seq__48796__$1);
var G__50087 = null;
var G__50088 = (0);
var G__50089 = (0);
seq__48796 = G__50086;
chunk__48797 = G__50087;
count__48798 = G__50088;
i__48799 = G__50089;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48807 = arguments.length;
switch (G__48807) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__48815 = arguments.length;
switch (G__48815) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__48837 = arguments.length;
switch (G__48837) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50110 = arguments.length;
var i__4737__auto___50111 = (0);
while(true){
if((i__4737__auto___50111 < len__4736__auto___50110)){
args__4742__auto__.push((arguments[i__4737__auto___50111]));

var G__50112 = (i__4737__auto___50111 + (1));
i__4737__auto___50111 = G__50112;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48870_50117 = cljs.core.seq(nodes);
var chunk__48871_50118 = null;
var count__48872_50119 = (0);
var i__48873_50120 = (0);
while(true){
if((i__48873_50120 < count__48872_50119)){
var node_50125 = chunk__48871_50118.cljs$core$IIndexed$_nth$arity$2(null,i__48873_50120);
fragment.appendChild(shadow.dom._to_dom(node_50125));


var G__50126 = seq__48870_50117;
var G__50127 = chunk__48871_50118;
var G__50128 = count__48872_50119;
var G__50129 = (i__48873_50120 + (1));
seq__48870_50117 = G__50126;
chunk__48871_50118 = G__50127;
count__48872_50119 = G__50128;
i__48873_50120 = G__50129;
continue;
} else {
var temp__5735__auto___50130 = cljs.core.seq(seq__48870_50117);
if(temp__5735__auto___50130){
var seq__48870_50132__$1 = temp__5735__auto___50130;
if(cljs.core.chunked_seq_QMARK_(seq__48870_50132__$1)){
var c__4556__auto___50133 = cljs.core.chunk_first(seq__48870_50132__$1);
var G__50134 = cljs.core.chunk_rest(seq__48870_50132__$1);
var G__50135 = c__4556__auto___50133;
var G__50136 = cljs.core.count(c__4556__auto___50133);
var G__50137 = (0);
seq__48870_50117 = G__50134;
chunk__48871_50118 = G__50135;
count__48872_50119 = G__50136;
i__48873_50120 = G__50137;
continue;
} else {
var node_50138 = cljs.core.first(seq__48870_50132__$1);
fragment.appendChild(shadow.dom._to_dom(node_50138));


var G__50142 = cljs.core.next(seq__48870_50132__$1);
var G__50143 = null;
var G__50144 = (0);
var G__50145 = (0);
seq__48870_50117 = G__50142;
chunk__48871_50118 = G__50143;
count__48872_50119 = G__50144;
i__48873_50120 = G__50145;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48864){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48864));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48884_50146 = cljs.core.seq(scripts);
var chunk__48885_50147 = null;
var count__48886_50148 = (0);
var i__48887_50149 = (0);
while(true){
if((i__48887_50149 < count__48886_50148)){
var vec__48900_50150 = chunk__48885_50147.cljs$core$IIndexed$_nth$arity$2(null,i__48887_50149);
var script_tag_50151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48900_50150,(0),null);
var script_body_50152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48900_50150,(1),null);
eval(script_body_50152);


var G__50153 = seq__48884_50146;
var G__50154 = chunk__48885_50147;
var G__50155 = count__48886_50148;
var G__50156 = (i__48887_50149 + (1));
seq__48884_50146 = G__50153;
chunk__48885_50147 = G__50154;
count__48886_50148 = G__50155;
i__48887_50149 = G__50156;
continue;
} else {
var temp__5735__auto___50157 = cljs.core.seq(seq__48884_50146);
if(temp__5735__auto___50157){
var seq__48884_50158__$1 = temp__5735__auto___50157;
if(cljs.core.chunked_seq_QMARK_(seq__48884_50158__$1)){
var c__4556__auto___50159 = cljs.core.chunk_first(seq__48884_50158__$1);
var G__50160 = cljs.core.chunk_rest(seq__48884_50158__$1);
var G__50161 = c__4556__auto___50159;
var G__50162 = cljs.core.count(c__4556__auto___50159);
var G__50163 = (0);
seq__48884_50146 = G__50160;
chunk__48885_50147 = G__50161;
count__48886_50148 = G__50162;
i__48887_50149 = G__50163;
continue;
} else {
var vec__48906_50164 = cljs.core.first(seq__48884_50158__$1);
var script_tag_50165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48906_50164,(0),null);
var script_body_50166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48906_50164,(1),null);
eval(script_body_50166);


var G__50167 = cljs.core.next(seq__48884_50158__$1);
var G__50168 = null;
var G__50169 = (0);
var G__50170 = (0);
seq__48884_50146 = G__50167;
chunk__48885_50147 = G__50168;
count__48886_50148 = G__50169;
i__48887_50149 = G__50170;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48910){
var vec__48911 = p__48910;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48911,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48911,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48921 = arguments.length;
switch (G__48921) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48943 = cljs.core.seq(style_keys);
var chunk__48944 = null;
var count__48945 = (0);
var i__48946 = (0);
while(true){
if((i__48946 < count__48945)){
var it = chunk__48944.cljs$core$IIndexed$_nth$arity$2(null,i__48946);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50183 = seq__48943;
var G__50184 = chunk__48944;
var G__50185 = count__48945;
var G__50186 = (i__48946 + (1));
seq__48943 = G__50183;
chunk__48944 = G__50184;
count__48945 = G__50185;
i__48946 = G__50186;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48943);
if(temp__5735__auto__){
var seq__48943__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48943__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48943__$1);
var G__50197 = cljs.core.chunk_rest(seq__48943__$1);
var G__50198 = c__4556__auto__;
var G__50199 = cljs.core.count(c__4556__auto__);
var G__50200 = (0);
seq__48943 = G__50197;
chunk__48944 = G__50198;
count__48945 = G__50199;
i__48946 = G__50200;
continue;
} else {
var it = cljs.core.first(seq__48943__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50208 = cljs.core.next(seq__48943__$1);
var G__50209 = null;
var G__50210 = (0);
var G__50211 = (0);
seq__48943 = G__50208;
chunk__48944 = G__50209;
count__48945 = G__50210;
i__48946 = G__50211;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k48960,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__48976 = k48960;
var G__48976__$1 = (((G__48976 instanceof cljs.core.Keyword))?G__48976.fqn:null);
switch (G__48976__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48960,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__48983){
var vec__48984 = p__48983;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48984,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48984,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48959){
var self__ = this;
var G__48959__$1 = this;
return (new cljs.core.RecordIter((0),G__48959__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48961,other48962){
var self__ = this;
var this48961__$1 = this;
return (((!((other48962 == null)))) && ((this48961__$1.constructor === other48962.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48961__$1.x,other48962.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48961__$1.y,other48962.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48961__$1.__extmap,other48962.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__48959){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49010 = cljs.core.keyword_identical_QMARK_;
var expr__49011 = k__4388__auto__;
if(cljs.core.truth_((pred__49010.cljs$core$IFn$_invoke$arity$2 ? pred__49010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__49011) : pred__49010.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__49011)))){
return (new shadow.dom.Coordinate(G__48959,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49010.cljs$core$IFn$_invoke$arity$2 ? pred__49010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__49011) : pred__49010.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__49011)))){
return (new shadow.dom.Coordinate(self__.x,G__48959,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__48959),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__48959){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48959,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48966){
var extmap__4419__auto__ = (function (){var G__49032 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48966,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48966)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49032);
} else {
return G__49032;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48966),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48966),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49040,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49055 = k49040;
var G__49055__$1 = (((G__49055 instanceof cljs.core.Keyword))?G__49055.fqn:null);
switch (G__49055__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49040,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49064){
var vec__49068 = p__49064;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49068,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49068,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49039){
var self__ = this;
var G__49039__$1 = this;
return (new cljs.core.RecordIter((0),G__49039__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49041,other49042){
var self__ = this;
var this49041__$1 = this;
return (((!((other49042 == null)))) && ((this49041__$1.constructor === other49042.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49041__$1.w,other49042.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49041__$1.h,other49042.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49041__$1.__extmap,other49042.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49039){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49134 = cljs.core.keyword_identical_QMARK_;
var expr__49135 = k__4388__auto__;
if(cljs.core.truth_((pred__49134.cljs$core$IFn$_invoke$arity$2 ? pred__49134.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__49135) : pred__49134.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__49135)))){
return (new shadow.dom.Size(G__49039,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49134.cljs$core$IFn$_invoke$arity$2 ? pred__49134.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__49135) : pred__49134.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__49135)))){
return (new shadow.dom.Size(self__.w,G__49039,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49039),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49039){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__49039,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__49045){
var extmap__4419__auto__ = (function (){var G__49162 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49045,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__49045)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49162);
} else {
return G__49162;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__49045),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__49045),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__50366 = (i + (1));
var G__50367 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__50366;
ret = G__50367;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49209){
var vec__49210 = p__49209;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49210,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49210,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__49227 = arguments.length;
switch (G__49227) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__50393 = ps;
var G__50394 = (i + (1));
el__$1 = G__50393;
i = G__50394;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__49331 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49331,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49331,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49331,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__49337_50409 = cljs.core.seq(props);
var chunk__49338_50410 = null;
var count__49339_50411 = (0);
var i__49340_50412 = (0);
while(true){
if((i__49340_50412 < count__49339_50411)){
var vec__49362_50414 = chunk__49338_50410.cljs$core$IIndexed$_nth$arity$2(null,i__49340_50412);
var k_50415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49362_50414,(0),null);
var v_50416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49362_50414,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_50415);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50415),v_50416);


var G__50422 = seq__49337_50409;
var G__50423 = chunk__49338_50410;
var G__50424 = count__49339_50411;
var G__50425 = (i__49340_50412 + (1));
seq__49337_50409 = G__50422;
chunk__49338_50410 = G__50423;
count__49339_50411 = G__50424;
i__49340_50412 = G__50425;
continue;
} else {
var temp__5735__auto___50430 = cljs.core.seq(seq__49337_50409);
if(temp__5735__auto___50430){
var seq__49337_50434__$1 = temp__5735__auto___50430;
if(cljs.core.chunked_seq_QMARK_(seq__49337_50434__$1)){
var c__4556__auto___50435 = cljs.core.chunk_first(seq__49337_50434__$1);
var G__50436 = cljs.core.chunk_rest(seq__49337_50434__$1);
var G__50437 = c__4556__auto___50435;
var G__50438 = cljs.core.count(c__4556__auto___50435);
var G__50439 = (0);
seq__49337_50409 = G__50436;
chunk__49338_50410 = G__50437;
count__49339_50411 = G__50438;
i__49340_50412 = G__50439;
continue;
} else {
var vec__49378_50444 = cljs.core.first(seq__49337_50434__$1);
var k_50445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49378_50444,(0),null);
var v_50446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49378_50444,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_50445);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50445),v_50446);


var G__50448 = cljs.core.next(seq__49337_50434__$1);
var G__50449 = null;
var G__50450 = (0);
var G__50451 = (0);
seq__49337_50409 = G__50448;
chunk__49338_50410 = G__50449;
count__49339_50411 = G__50450;
i__49340_50412 = G__50451;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__49398 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49398,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49398,(1),null);
var seq__49402_50536 = cljs.core.seq(node_children);
var chunk__49406_50537 = null;
var count__49407_50538 = (0);
var i__49408_50539 = (0);
while(true){
if((i__49408_50539 < count__49407_50538)){
var child_struct_50541 = chunk__49406_50537.cljs$core$IIndexed$_nth$arity$2(null,i__49408_50539);
if((!((child_struct_50541 == null)))){
if(typeof child_struct_50541 === 'string'){
var text_50545 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50545),child_struct_50541].join(''));
} else {
var children_50546 = shadow.dom.svg_node(child_struct_50541);
if(cljs.core.seq_QMARK_(children_50546)){
var seq__49487_50548 = cljs.core.seq(children_50546);
var chunk__49489_50549 = null;
var count__49490_50550 = (0);
var i__49491_50551 = (0);
while(true){
if((i__49491_50551 < count__49490_50550)){
var child_50553 = chunk__49489_50549.cljs$core$IIndexed$_nth$arity$2(null,i__49491_50551);
if(cljs.core.truth_(child_50553)){
node.appendChild(child_50553);


var G__50564 = seq__49487_50548;
var G__50565 = chunk__49489_50549;
var G__50566 = count__49490_50550;
var G__50567 = (i__49491_50551 + (1));
seq__49487_50548 = G__50564;
chunk__49489_50549 = G__50565;
count__49490_50550 = G__50566;
i__49491_50551 = G__50567;
continue;
} else {
var G__50569 = seq__49487_50548;
var G__50570 = chunk__49489_50549;
var G__50571 = count__49490_50550;
var G__50572 = (i__49491_50551 + (1));
seq__49487_50548 = G__50569;
chunk__49489_50549 = G__50570;
count__49490_50550 = G__50571;
i__49491_50551 = G__50572;
continue;
}
} else {
var temp__5735__auto___50574 = cljs.core.seq(seq__49487_50548);
if(temp__5735__auto___50574){
var seq__49487_50575__$1 = temp__5735__auto___50574;
if(cljs.core.chunked_seq_QMARK_(seq__49487_50575__$1)){
var c__4556__auto___50576 = cljs.core.chunk_first(seq__49487_50575__$1);
var G__50577 = cljs.core.chunk_rest(seq__49487_50575__$1);
var G__50578 = c__4556__auto___50576;
var G__50579 = cljs.core.count(c__4556__auto___50576);
var G__50580 = (0);
seq__49487_50548 = G__50577;
chunk__49489_50549 = G__50578;
count__49490_50550 = G__50579;
i__49491_50551 = G__50580;
continue;
} else {
var child_50592 = cljs.core.first(seq__49487_50575__$1);
if(cljs.core.truth_(child_50592)){
node.appendChild(child_50592);


var G__50593 = cljs.core.next(seq__49487_50575__$1);
var G__50594 = null;
var G__50595 = (0);
var G__50596 = (0);
seq__49487_50548 = G__50593;
chunk__49489_50549 = G__50594;
count__49490_50550 = G__50595;
i__49491_50551 = G__50596;
continue;
} else {
var G__50604 = cljs.core.next(seq__49487_50575__$1);
var G__50605 = null;
var G__50606 = (0);
var G__50607 = (0);
seq__49487_50548 = G__50604;
chunk__49489_50549 = G__50605;
count__49490_50550 = G__50606;
i__49491_50551 = G__50607;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50546);
}
}


var G__50608 = seq__49402_50536;
var G__50609 = chunk__49406_50537;
var G__50610 = count__49407_50538;
var G__50611 = (i__49408_50539 + (1));
seq__49402_50536 = G__50608;
chunk__49406_50537 = G__50609;
count__49407_50538 = G__50610;
i__49408_50539 = G__50611;
continue;
} else {
var G__50613 = seq__49402_50536;
var G__50614 = chunk__49406_50537;
var G__50615 = count__49407_50538;
var G__50616 = (i__49408_50539 + (1));
seq__49402_50536 = G__50613;
chunk__49406_50537 = G__50614;
count__49407_50538 = G__50615;
i__49408_50539 = G__50616;
continue;
}
} else {
var temp__5735__auto___50617 = cljs.core.seq(seq__49402_50536);
if(temp__5735__auto___50617){
var seq__49402_50618__$1 = temp__5735__auto___50617;
if(cljs.core.chunked_seq_QMARK_(seq__49402_50618__$1)){
var c__4556__auto___50619 = cljs.core.chunk_first(seq__49402_50618__$1);
var G__50620 = cljs.core.chunk_rest(seq__49402_50618__$1);
var G__50621 = c__4556__auto___50619;
var G__50622 = cljs.core.count(c__4556__auto___50619);
var G__50623 = (0);
seq__49402_50536 = G__50620;
chunk__49406_50537 = G__50621;
count__49407_50538 = G__50622;
i__49408_50539 = G__50623;
continue;
} else {
var child_struct_50624 = cljs.core.first(seq__49402_50618__$1);
if((!((child_struct_50624 == null)))){
if(typeof child_struct_50624 === 'string'){
var text_50627 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50627),child_struct_50624].join(''));
} else {
var children_50630 = shadow.dom.svg_node(child_struct_50624);
if(cljs.core.seq_QMARK_(children_50630)){
var seq__49515_50631 = cljs.core.seq(children_50630);
var chunk__49517_50632 = null;
var count__49518_50633 = (0);
var i__49519_50634 = (0);
while(true){
if((i__49519_50634 < count__49518_50633)){
var child_50635 = chunk__49517_50632.cljs$core$IIndexed$_nth$arity$2(null,i__49519_50634);
if(cljs.core.truth_(child_50635)){
node.appendChild(child_50635);


var G__50637 = seq__49515_50631;
var G__50638 = chunk__49517_50632;
var G__50639 = count__49518_50633;
var G__50640 = (i__49519_50634 + (1));
seq__49515_50631 = G__50637;
chunk__49517_50632 = G__50638;
count__49518_50633 = G__50639;
i__49519_50634 = G__50640;
continue;
} else {
var G__50642 = seq__49515_50631;
var G__50643 = chunk__49517_50632;
var G__50644 = count__49518_50633;
var G__50645 = (i__49519_50634 + (1));
seq__49515_50631 = G__50642;
chunk__49517_50632 = G__50643;
count__49518_50633 = G__50644;
i__49519_50634 = G__50645;
continue;
}
} else {
var temp__5735__auto___50649__$1 = cljs.core.seq(seq__49515_50631);
if(temp__5735__auto___50649__$1){
var seq__49515_50650__$1 = temp__5735__auto___50649__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49515_50650__$1)){
var c__4556__auto___50651 = cljs.core.chunk_first(seq__49515_50650__$1);
var G__50652 = cljs.core.chunk_rest(seq__49515_50650__$1);
var G__50653 = c__4556__auto___50651;
var G__50654 = cljs.core.count(c__4556__auto___50651);
var G__50655 = (0);
seq__49515_50631 = G__50652;
chunk__49517_50632 = G__50653;
count__49518_50633 = G__50654;
i__49519_50634 = G__50655;
continue;
} else {
var child_50656 = cljs.core.first(seq__49515_50650__$1);
if(cljs.core.truth_(child_50656)){
node.appendChild(child_50656);


var G__50658 = cljs.core.next(seq__49515_50650__$1);
var G__50659 = null;
var G__50660 = (0);
var G__50661 = (0);
seq__49515_50631 = G__50658;
chunk__49517_50632 = G__50659;
count__49518_50633 = G__50660;
i__49519_50634 = G__50661;
continue;
} else {
var G__50668 = cljs.core.next(seq__49515_50650__$1);
var G__50669 = null;
var G__50670 = (0);
var G__50671 = (0);
seq__49515_50631 = G__50668;
chunk__49517_50632 = G__50669;
count__49518_50633 = G__50670;
i__49519_50634 = G__50671;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50630);
}
}


var G__50674 = cljs.core.next(seq__49402_50618__$1);
var G__50675 = null;
var G__50676 = (0);
var G__50677 = (0);
seq__49402_50536 = G__50674;
chunk__49406_50537 = G__50675;
count__49407_50538 = G__50676;
i__49408_50539 = G__50677;
continue;
} else {
var G__50678 = cljs.core.next(seq__49402_50618__$1);
var G__50679 = null;
var G__50680 = (0);
var G__50681 = (0);
seq__49402_50536 = G__50678;
chunk__49406_50537 = G__50679;
count__49407_50538 = G__50680;
i__49408_50539 = G__50681;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50700 = arguments.length;
var i__4737__auto___50701 = (0);
while(true){
if((i__4737__auto___50701 < len__4736__auto___50700)){
args__4742__auto__.push((arguments[i__4737__auto___50701]));

var G__50703 = (i__4737__auto___50701 + (1));
i__4737__auto___50701 = G__50703;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq49556){
var G__49557 = cljs.core.first(seq49556);
var seq49556__$1 = cljs.core.next(seq49556);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49557,seq49556__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__49576 = arguments.length;
switch (G__49576) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__45436__auto___50764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_49600){
var state_val_49601 = (state_49600[(1)]);
if((state_val_49601 === (1))){
var state_49600__$1 = state_49600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49600__$1,(2),once_or_cleanup);
} else {
if((state_val_49601 === (2))){
var inst_49597 = (state_49600[(2)]);
var inst_49598 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_49600__$1 = (function (){var statearr_49605 = state_49600;
(statearr_49605[(7)] = inst_49597);

return statearr_49605;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49600__$1,inst_49598);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45217__auto__ = null;
var shadow$dom$state_machine__45217__auto____0 = (function (){
var statearr_49608 = [null,null,null,null,null,null,null,null];
(statearr_49608[(0)] = shadow$dom$state_machine__45217__auto__);

(statearr_49608[(1)] = (1));

return statearr_49608;
});
var shadow$dom$state_machine__45217__auto____1 = (function (state_49600){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_49600);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e49614){var ex__45220__auto__ = e49614;
var statearr_49615_50812 = state_49600;
(statearr_49615_50812[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_49600[(4)]))){
var statearr_49616_50832 = state_49600;
(statearr_49616_50832[(1)] = cljs.core.first((state_49600[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50833 = state_49600;
state_49600 = G__50833;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
shadow$dom$state_machine__45217__auto__ = function(state_49600){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45217__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45217__auto____1.call(this,state_49600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45217__auto____0;
shadow$dom$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45217__auto____1;
return shadow$dom$state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_49617 = f__45437__auto__();
(statearr_49617[(6)] = c__45436__auto___50764);

return statearr_49617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
