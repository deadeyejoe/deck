goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_50798 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._id[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.object._id["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_50798(this$);
}
});

var shadow$object$IObject$_type$dyn_50800 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._type[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.object._type["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_50800(this$);
}
});

var shadow$object$IObject$_data$dyn_50804 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._data[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.object._data["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_50804(this$);
}
});

var shadow$object$IObject$_update$dyn_50811 = (function (this$,update_fn){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._update[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4429__auto__.call(null,this$,update_fn));
} else {
var m__4426__auto__ = (shadow.object._update["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4426__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_50811(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_50815 = (function (this$,cause){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4429__auto__.call(null,this$,cause));
} else {
var m__4426__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4426__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_50815(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__49773 = arguments.length;
switch (G__49773) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4126__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5735__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5735__auto__)){
var oid = temp__5735__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5735__auto__)){
var parent_id = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__50839 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__50839;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49821_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__49821_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__49837 = arguments.length;
switch (G__49837) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49848_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__49848_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__49865){
var map__49866 = p__49865;
var map__49866__$1 = (((((!((map__49866 == null))))?(((((map__49866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49866):map__49866);
var oref = map__49866__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49866__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__49882 = arguments.length;
switch (G__49882) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49880_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__49880_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5733__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5733__auto__)){
var obj = temp__5733__auto__;
return obj;
} else {
var temp__5735__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5735__auto__)){
var parent = temp__5735__auto__;
var G__50850 = parent;
dom = G__50850;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50851 = arguments.length;
var i__4737__auto___50852 = (0);
while(true){
if((i__4737__auto___50852 < len__4736__auto___50851)){
args__4742__auto__.push((arguments[i__4737__auto___50852]));

var G__50854 = (i__4737__auto___50852 + (1));
i__4737__auto___50852 = G__50854;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5735__auto__)){
var reactions_to_trigger = temp__5735__auto__;
var seq__49908 = cljs.core.seq(reactions_to_trigger);
var chunk__49909 = null;
var count__49910 = (0);
var i__49911 = (0);
while(true){
if((i__49911 < count__49910)){
var rfn = chunk__49909.cljs$core$IIndexed$_nth$arity$2(null,i__49911);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__50866 = seq__49908;
var G__50867 = chunk__49909;
var G__50868 = count__49910;
var G__50869 = (i__49911 + (1));
seq__49908 = G__50866;
chunk__49909 = G__50867;
count__49910 = G__50868;
i__49911 = G__50869;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__49908);
if(temp__5735__auto____$1){
var seq__49908__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49908__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49908__$1);
var G__50876 = cljs.core.chunk_rest(seq__49908__$1);
var G__50877 = c__4556__auto__;
var G__50878 = cljs.core.count(c__4556__auto__);
var G__50879 = (0);
seq__49908 = G__50876;
chunk__49909 = G__50877;
count__49910 = G__50878;
i__49911 = G__50879;
continue;
} else {
var rfn = cljs.core.first(seq__49908__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__50880 = cljs.core.next(seq__49908__$1);
var G__50881 = null;
var G__50882 = (0);
var G__50883 = (0);
seq__49908 = G__50880;
chunk__49909 = G__50881;
count__49910 = G__50882;
i__49911 = G__50883;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq49900){
var G__49901 = cljs.core.first(seq49900);
var seq49900__$1 = cljs.core.next(seq49900);
var G__49902 = cljs.core.first(seq49900__$1);
var seq49900__$2 = cljs.core.next(seq49900__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49901,G__49902,seq49900__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__49938_50887 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__49939_50888 = null;
var count__49940_50889 = (0);
var i__49941_50890 = (0);
while(true){
if((i__49941_50890 < count__49940_50889)){
var child_50895 = chunk__49939_50888.cljs$core$IIndexed$_nth$arity$2(null,i__49941_50890);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_50895,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_50895,ev,notify_fn));


var G__50906 = seq__49938_50887;
var G__50907 = chunk__49939_50888;
var G__50908 = count__49940_50889;
var G__50909 = (i__49941_50890 + (1));
seq__49938_50887 = G__50906;
chunk__49939_50888 = G__50907;
count__49940_50889 = G__50908;
i__49941_50890 = G__50909;
continue;
} else {
var temp__5735__auto___50910 = cljs.core.seq(seq__49938_50887);
if(temp__5735__auto___50910){
var seq__49938_50911__$1 = temp__5735__auto___50910;
if(cljs.core.chunked_seq_QMARK_(seq__49938_50911__$1)){
var c__4556__auto___50912 = cljs.core.chunk_first(seq__49938_50911__$1);
var G__50913 = cljs.core.chunk_rest(seq__49938_50911__$1);
var G__50914 = c__4556__auto___50912;
var G__50915 = cljs.core.count(c__4556__auto___50912);
var G__50916 = (0);
seq__49938_50887 = G__50913;
chunk__49939_50888 = G__50914;
count__49940_50889 = G__50915;
i__49941_50890 = G__50916;
continue;
} else {
var child_50924 = cljs.core.first(seq__49938_50911__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_50924,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_50924,ev,notify_fn));


var G__50928 = cljs.core.next(seq__49938_50911__$1);
var G__50929 = null;
var G__50930 = (0);
var G__50931 = (0);
seq__49938_50887 = G__50928;
chunk__49939_50888 = G__50929;
count__49940_50889 = G__50930;
i__49941_50890 = G__50931;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50932 = arguments.length;
var i__4737__auto___50933 = (0);
while(true){
if((i__4737__auto___50933 < len__4736__auto___50932)){
args__4742__auto__.push((arguments[i__4737__auto___50933]));

var G__50934 = (i__4737__auto___50933 + (1));
i__4737__auto___50933 = G__50934;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq49965){
var G__49966 = cljs.core.first(seq49965);
var seq49965__$1 = cljs.core.next(seq49965);
var G__49967 = cljs.core.first(seq49965__$1);
var seq49965__$2 = cljs.core.next(seq49965__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49966,G__49967,seq49965__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50956 = arguments.length;
var i__4737__auto___50957 = (0);
while(true){
if((i__4737__auto___50957 < len__4736__auto___50956)){
args__4742__auto__.push((arguments[i__4737__auto___50957]));

var G__50958 = (i__4737__auto___50957 + (1));
i__4737__auto___50957 = G__50958;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__50961 = shadow.object.get_parent(current);
current = G__50961;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq49970){
var G__49971 = cljs.core.first(seq49970);
var seq49970__$1 = cljs.core.next(seq49970);
var G__49972 = cljs.core.first(seq49970__$1);
var seq49970__$2 = cljs.core.next(seq49970__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49971,G__49972,seq49970__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50965 = arguments.length;
var i__4737__auto___50966 = (0);
while(true){
if((i__4737__auto___50966 < len__4736__auto___50965)){
args__4742__auto__.push((arguments[i__4737__auto___50966]));

var G__50969 = (i__4737__auto___50966 + (1));
i__4737__auto___50966 = G__50969;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq49994){
var G__49995 = cljs.core.first(seq49994);
var seq49994__$1 = cljs.core.next(seq49994);
var G__49996 = cljs.core.first(seq49994__$1);
var seq49994__$2 = cljs.core.next(seq49994__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49995,G__49996,seq49994__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5733__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5733__auto__)){
var custom_remove = temp__5733__auto__;
var G__50059 = this$;
var G__50060 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__50059,G__50060) : custom_remove.call(null,G__50059,G__50060));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__50067 = arguments.length;
switch (G__50067) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__50068 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__50069 = null;
var count__50070 = (0);
var i__50071 = (0);
while(true){
if((i__50071 < count__50070)){
var vec__50099 = chunk__50069.cljs$core$IIndexed$_nth$arity$2(null,i__50071);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50099,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50099,(1),null);
var ev_def = vec__50099;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_51023__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__50068,chunk__50069,count__50070,i__50071,vec__50099,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__50068,chunk__50069,count__50070,i__50071,vec__50099,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__50068,chunk__50069,count__50070,i__50071,handler_51023__$1,vec__50099,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_51023__$1.cljs$core$IFn$_invoke$arity$3 ? handler_51023__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_51023__$1.call(null,oref,e,el));
});})(seq__50068,chunk__50069,count__50070,i__50071,handler_51023__$1,vec__50099,ev,handler,ev_def))
);


var G__51027 = seq__50068;
var G__51028 = chunk__50069;
var G__51029 = count__50070;
var G__51030 = (i__50071 + (1));
seq__50068 = G__51027;
chunk__50069 = G__51028;
count__50070 = G__51029;
i__50071 = G__51030;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50068);
if(temp__5735__auto__){
var seq__50068__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50068__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50068__$1);
var G__51031 = cljs.core.chunk_rest(seq__50068__$1);
var G__51032 = c__4556__auto__;
var G__51033 = cljs.core.count(c__4556__auto__);
var G__51034 = (0);
seq__50068 = G__51031;
chunk__50069 = G__51032;
count__50070 = G__51033;
i__50071 = G__51034;
continue;
} else {
var vec__50103 = cljs.core.first(seq__50068__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50103,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50103,(1),null);
var ev_def = vec__50103;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_51045__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__50068,chunk__50069,count__50070,i__50071,vec__50103,ev,handler,ev_def,seq__50068__$1,temp__5735__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__50068,chunk__50069,count__50070,i__50071,vec__50103,ev,handler,ev_def,seq__50068__$1,temp__5735__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__50068,chunk__50069,count__50070,i__50071,handler_51045__$1,vec__50103,ev,handler,ev_def,seq__50068__$1,temp__5735__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_51045__$1.cljs$core$IFn$_invoke$arity$3 ? handler_51045__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_51045__$1.call(null,oref,e,el));
});})(seq__50068,chunk__50069,count__50070,i__50071,handler_51045__$1,vec__50103,ev,handler,ev_def,seq__50068__$1,temp__5735__auto__))
);


var G__51050 = cljs.core.next(seq__50068__$1);
var G__51051 = null;
var G__51052 = (0);
var G__51053 = (0);
seq__50068 = G__51050;
chunk__50069 = G__51051;
count__50070 = G__51052;
i__50071 = G__51053;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__50131){
var vec__50139 = p__50131;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50139,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50139,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = event;
if(cljs.core.truth_(and__4115__auto__)){
return handler;
} else {
return and__4115__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51066 = arguments.length;
var i__4737__auto___51068 = (0);
while(true){
if((i__4737__auto___51068 < len__4736__auto___51066)){
args__4742__auto__.push((arguments[i__4737__auto___51068]));

var G__51070 = (i__4737__auto___51068 + (1));
i__4737__auto___51068 = G__51070;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e50178){if((e50178 instanceof Object)){
var e = e50178;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e50178;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq50171){
var G__50172 = cljs.core.first(seq50171);
var seq50171__$1 = cljs.core.next(seq50171);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50172,seq50171__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__50221 = arguments.length;
switch (G__50221) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__50245 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__50245) : shadow.dom.build.call(null,G__50245));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50251,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50257 = k50251;
var G__50257__$1 = (((G__50257 instanceof cljs.core.Keyword))?G__50257.fqn:null);
switch (G__50257__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50251,else__4383__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50261){
var vec__50262 = p__50261;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50262,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50262,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.object.Watch{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50250){
var self__ = this;
var G__50250__$1 = this;
return (new cljs.core.RecordIter((0),G__50250__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50252,other50253){
var self__ = this;
var this50252__$1 = this;
return (((!((other50253 == null)))) && ((this50252__$1.constructor === other50253.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50252__$1.key,other50253.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50252__$1.handler,other50253.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50252__$1.__extmap,other50253.__extmap)));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50250){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50287 = cljs.core.keyword_identical_QMARK_;
var expr__50288 = k__4388__auto__;
if(cljs.core.truth_((pred__50287.cljs$core$IFn$_invoke$arity$2 ? pred__50287.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__50288) : pred__50287.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__50288)))){
return (new shadow.object.Watch(G__50250,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50287.cljs$core$IFn$_invoke$arity$2 ? pred__50287.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__50288) : pred__50287.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__50288)))){
return (new shadow.object.Watch(self__.key,G__50250,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50250),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50250){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__50250,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__50254){
var extmap__4419__auto__ = (function (){var G__50300 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50254,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__50254)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50300);
} else {
return G__50300;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__50254),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__50254),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),other.shadow$object$IObject$_id$arity$1(null))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50301_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__50301_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__50336 = cljs.core.seq(self__.watches);
var chunk__50337 = null;
var count__50338 = (0);
var i__50339 = (0);
while(true){
if((i__50339 < count__50338)){
var map__50355 = chunk__50337.cljs$core$IIndexed$_nth$arity$2(null,i__50339);
var map__50355__$1 = (((((!((map__50355 == null))))?(((((map__50355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50355):map__50355);
var watch = map__50355__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50355__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50355__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__51143 = seq__50336;
var G__51144 = chunk__50337;
var G__51145 = count__50338;
var G__51146 = (i__50339 + (1));
seq__50336 = G__51143;
chunk__50337 = G__51144;
count__50338 = G__51145;
i__50339 = G__51146;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50336);
if(temp__5735__auto__){
var seq__50336__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50336__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50336__$1);
var G__51147 = cljs.core.chunk_rest(seq__50336__$1);
var G__51148 = c__4556__auto__;
var G__51149 = cljs.core.count(c__4556__auto__);
var G__51150 = (0);
seq__50336 = G__51147;
chunk__50337 = G__51148;
count__50338 = G__51149;
i__50339 = G__51150;
continue;
} else {
var map__50363 = cljs.core.first(seq__50336__$1);
var map__50363__$1 = (((((!((map__50363 == null))))?(((((map__50363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50363):map__50363);
var watch = map__50363__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50363__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50363__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__51151 = cljs.core.next(seq__50336__$1);
var G__51152 = null;
var G__51153 = (0);
var G__51154 = (0);
seq__50336 = G__51151;
chunk__50337 = G__51152;
count__50338 = G__51153;
i__50339 = G__51154;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__50371_51159 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__50372_51160 = null;
var count__50373_51161 = (0);
var i__50374_51162 = (0);
while(true){
if((i__50374_51162 < count__50373_51161)){
var child_51163 = chunk__50372_51160.cljs$core$IIndexed$_nth$arity$2(null,i__50374_51162);
shadow.object._destroy_BANG_(child_51163,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__51164 = seq__50371_51159;
var G__51165 = chunk__50372_51160;
var G__51166 = count__50373_51161;
var G__51167 = (i__50374_51162 + (1));
seq__50371_51159 = G__51164;
chunk__50372_51160 = G__51165;
count__50373_51161 = G__51166;
i__50374_51162 = G__51167;
continue;
} else {
var temp__5735__auto___51168 = cljs.core.seq(seq__50371_51159);
if(temp__5735__auto___51168){
var seq__50371_51169__$1 = temp__5735__auto___51168;
if(cljs.core.chunked_seq_QMARK_(seq__50371_51169__$1)){
var c__4556__auto___51170 = cljs.core.chunk_first(seq__50371_51169__$1);
var G__51171 = cljs.core.chunk_rest(seq__50371_51169__$1);
var G__51172 = c__4556__auto___51170;
var G__51173 = cljs.core.count(c__4556__auto___51170);
var G__51174 = (0);
seq__50371_51159 = G__51171;
chunk__50372_51160 = G__51172;
count__50373_51161 = G__51173;
i__50374_51162 = G__51174;
continue;
} else {
var child_51175 = cljs.core.first(seq__50371_51169__$1);
shadow.object._destroy_BANG_(child_51175,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__51176 = cljs.core.next(seq__50371_51169__$1);
var G__51177 = null;
var G__51178 = (0);
var G__51179 = (0);
seq__50371_51159 = G__51176;
chunk__50372_51160 = G__51177;
count__50373_51161 = G__51178;
i__50374_51162 = G__51179;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_51180 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_51180 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_51180);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__50404 = arguments.length;
switch (G__50404) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__50417 = arguments.length;
switch (G__50417) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51204 = arguments.length;
var i__4737__auto___51209 = (0);
while(true){
if((i__4737__auto___51209 < len__4736__auto___51204)){
args__4742__auto__.push((arguments[i__4737__auto___51209]));

var G__51212 = (i__4737__auto___51209 + (1));
i__4737__auto___51209 = G__51212;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_51222 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5733__auto___51224 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5733__auto___51224)){
var dom_51227 = temp__5733__auto___51224;
shadow.dom.set_data(dom_51227,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_51227,dom_events_51222);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_51227], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_51227], 0));
} else {
var temp__5735__auto___51230 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___51230)){
var dom_fn_51231 = temp__5735__auto___51230;
var dom_51232 = (function (){var G__50503 = (dom_fn_51231.cljs$core$IFn$_invoke$arity$2 ? dom_fn_51231.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_51231.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__50503) : shadow.dom.build.call(null,G__50503));
})();
shadow.dom.set_data(dom_51232,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_51232], 0));

shadow.object.bind_dom_events(oref,dom_51232,dom_events_51222);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_51232], 0));
} else {
}
}

var temp__5735__auto___51245 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___51245)){
var watches_51246 = temp__5735__auto___51245;
var seq__50507_51247 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_51246));
var chunk__50508_51248 = null;
var count__50509_51249 = (0);
var i__50510_51250 = (0);
while(true){
if((i__50510_51250 < count__50509_51249)){
var vec__50524_51251 = chunk__50508_51248.cljs$core$IIndexed$_nth$arity$2(null,i__50510_51250);
var attr_51252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50524_51251,(0),null);
var handler_51253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50524_51251,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_51252,((function (seq__50507_51247,chunk__50508_51248,count__50509_51249,i__50510_51250,vec__50524_51251,attr_51252,handler_51253,watches_51246,temp__5735__auto___51245,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_51253.cljs$core$IFn$_invoke$arity$3 ? handler_51253.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_51253.call(null,oref,old,new$));
});})(seq__50507_51247,chunk__50508_51248,count__50509_51249,i__50510_51250,vec__50524_51251,attr_51252,handler_51253,watches_51246,temp__5735__auto___51245,oid,parent,result_chan,odef,obj,oref))
);


var G__51260 = seq__50507_51247;
var G__51261 = chunk__50508_51248;
var G__51262 = count__50509_51249;
var G__51263 = (i__50510_51250 + (1));
seq__50507_51247 = G__51260;
chunk__50508_51248 = G__51261;
count__50509_51249 = G__51262;
i__50510_51250 = G__51263;
continue;
} else {
var temp__5735__auto___51264__$1 = cljs.core.seq(seq__50507_51247);
if(temp__5735__auto___51264__$1){
var seq__50507_51265__$1 = temp__5735__auto___51264__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50507_51265__$1)){
var c__4556__auto___51266 = cljs.core.chunk_first(seq__50507_51265__$1);
var G__51278 = cljs.core.chunk_rest(seq__50507_51265__$1);
var G__51279 = c__4556__auto___51266;
var G__51280 = cljs.core.count(c__4556__auto___51266);
var G__51281 = (0);
seq__50507_51247 = G__51278;
chunk__50508_51248 = G__51279;
count__50509_51249 = G__51280;
i__50510_51250 = G__51281;
continue;
} else {
var vec__50532_51282 = cljs.core.first(seq__50507_51265__$1);
var attr_51283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50532_51282,(0),null);
var handler_51284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50532_51282,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_51283,((function (seq__50507_51247,chunk__50508_51248,count__50509_51249,i__50510_51250,vec__50532_51282,attr_51283,handler_51284,seq__50507_51265__$1,temp__5735__auto___51264__$1,watches_51246,temp__5735__auto___51245,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_51284.cljs$core$IFn$_invoke$arity$3 ? handler_51284.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_51284.call(null,oref,old,new$));
});})(seq__50507_51247,chunk__50508_51248,count__50509_51249,i__50510_51250,vec__50532_51282,attr_51283,handler_51284,seq__50507_51265__$1,temp__5735__auto___51264__$1,watches_51246,temp__5735__auto___51245,oid,parent,result_chan,odef,obj,oref))
);


var G__51292 = cljs.core.next(seq__50507_51265__$1);
var G__51293 = null;
var G__51294 = (0);
var G__51295 = (0);
seq__50507_51247 = G__51292;
chunk__50508_51248 = G__51293;
count__50509_51249 = G__51294;
i__50510_51250 = G__51295;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq50468){
var G__50469 = cljs.core.first(seq50468);
var seq50468__$1 = cljs.core.next(seq50468);
var G__50470 = cljs.core.first(seq50468__$1);
var seq50468__$2 = cljs.core.next(seq50468__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50469,G__50470,seq50468__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__50547 = arguments.length;
switch (G__50547) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__50540_SHARP_){
var G__50555 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__50540_SHARP_) : node_gen.call(null,p1__50540_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__50555) : shadow.dom.build.call(null,G__50555));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__50598_51312 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__50599_51313 = null;
var count__50600_51314 = (0);
var i__50601_51315 = (0);
while(true){
if((i__50601_51315 < count__50600_51314)){
var obj_51318 = chunk__50599_51313.cljs$core$IIndexed$_nth$arity$2(null,i__50601_51315);
var obj_51319__$1 = shadow.object.get_from_dom(obj_51318);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_51319__$1);


var G__51320 = seq__50598_51312;
var G__51321 = chunk__50599_51313;
var G__51322 = count__50600_51314;
var G__51323 = (i__50601_51315 + (1));
seq__50598_51312 = G__51320;
chunk__50599_51313 = G__51321;
count__50600_51314 = G__51322;
i__50601_51315 = G__51323;
continue;
} else {
var temp__5735__auto___51324 = cljs.core.seq(seq__50598_51312);
if(temp__5735__auto___51324){
var seq__50598_51325__$1 = temp__5735__auto___51324;
if(cljs.core.chunked_seq_QMARK_(seq__50598_51325__$1)){
var c__4556__auto___51326 = cljs.core.chunk_first(seq__50598_51325__$1);
var G__51327 = cljs.core.chunk_rest(seq__50598_51325__$1);
var G__51328 = c__4556__auto___51326;
var G__51329 = cljs.core.count(c__4556__auto___51326);
var G__51330 = (0);
seq__50598_51312 = G__51327;
chunk__50599_51313 = G__51328;
count__50600_51314 = G__51329;
i__50601_51315 = G__51330;
continue;
} else {
var obj_51332 = cljs.core.first(seq__50598_51325__$1);
var obj_51333__$1 = shadow.object.get_from_dom(obj_51332);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_51333__$1);


var G__51334 = cljs.core.next(seq__50598_51325__$1);
var G__51335 = null;
var G__51336 = (0);
var G__51337 = (0);
seq__50598_51312 = G__51334;
chunk__50599_51313 = G__51335;
count__50600_51314 = G__51336;
i__50601_51315 = G__51337;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__50629 = arguments.length;
switch (G__50629) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__50625_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__50625_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__50641){
var vec__50646 = p__50641;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50646,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50646,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__50663_51375 = cljs.core.seq((function (){var G__50673 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__50673) : coll_transform.call(null,G__50673));
})());
var chunk__50664_51376 = null;
var count__50665_51377 = (0);
var i__50666_51378 = (0);
while(true){
if((i__50666_51378 < count__50665_51377)){
var item_51380 = chunk__50664_51376.cljs$core$IIndexed$_nth$arity$2(null,i__50666_51378);
shadow.object.dom_enter(coll_dom,make_item_fn(item_51380));


var G__51426 = seq__50663_51375;
var G__51427 = chunk__50664_51376;
var G__51428 = count__50665_51377;
var G__51429 = (i__50666_51378 + (1));
seq__50663_51375 = G__51426;
chunk__50664_51376 = G__51427;
count__50665_51377 = G__51428;
i__50666_51378 = G__51429;
continue;
} else {
var temp__5735__auto___51434 = cljs.core.seq(seq__50663_51375);
if(temp__5735__auto___51434){
var seq__50663_51437__$1 = temp__5735__auto___51434;
if(cljs.core.chunked_seq_QMARK_(seq__50663_51437__$1)){
var c__4556__auto___51442 = cljs.core.chunk_first(seq__50663_51437__$1);
var G__51443 = cljs.core.chunk_rest(seq__50663_51437__$1);
var G__51444 = c__4556__auto___51442;
var G__51445 = cljs.core.count(c__4556__auto___51442);
var G__51446 = (0);
seq__50663_51375 = G__51443;
chunk__50664_51376 = G__51444;
count__50665_51377 = G__51445;
i__50666_51378 = G__51446;
continue;
} else {
var item_51448 = cljs.core.first(seq__50663_51437__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_51448));


var G__51449 = cljs.core.next(seq__50663_51437__$1);
var G__51450 = null;
var G__51451 = (0);
var G__51452 = (0);
seq__50663_51375 = G__51449;
chunk__50664_51376 = G__51450;
count__50665_51377 = G__51451;
i__50666_51378 = G__51452;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4217__auto__ = count_new;
var y__4218__auto__ = count_children;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var n__4613__auto___51462 = count_children__$1;
var idx_51463 = (0);
while(true){
if((idx_51463 < n__4613__auto___51462)){
var cn_51464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_51463);
var cc_51465 = shadow.object.get_from_dom(cn_51464);
var ckey_51466 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_51465);
var cval_51467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_51465,item_key);
var vec__50691_51468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_51463);
var nkey_51469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50691_51468,(0),null);
var nval_51470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50691_51468,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_51466,nkey_51469)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_51467,nval_51470)))){
} else {
var new_obj_51471 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_51469,nval_51470], null));
shadow.dom.replace_node(cn_51464,new_obj_51471);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_51465);

shadow.object.notify_tree_BANG_(new_obj_51471,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__51472 = (idx_51463 + (1));
idx_51463 = G__51472;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__50695_51473 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__50696_51474 = null;
var count__50697_51475 = (0);
var i__50698_51476 = (0);
while(true){
if((i__50698_51476 < count__50697_51475)){
var item_51477 = chunk__50696_51474.cljs$core$IIndexed$_nth$arity$2(null,i__50698_51476);
shadow.object.dom_enter(coll_dom,make_item_fn(item_51477));


var G__51480 = seq__50695_51473;
var G__51481 = chunk__50696_51474;
var G__51482 = count__50697_51475;
var G__51483 = (i__50698_51476 + (1));
seq__50695_51473 = G__51480;
chunk__50696_51474 = G__51481;
count__50697_51475 = G__51482;
i__50698_51476 = G__51483;
continue;
} else {
var temp__5735__auto___51486 = cljs.core.seq(seq__50695_51473);
if(temp__5735__auto___51486){
var seq__50695_51496__$1 = temp__5735__auto___51486;
if(cljs.core.chunked_seq_QMARK_(seq__50695_51496__$1)){
var c__4556__auto___51497 = cljs.core.chunk_first(seq__50695_51496__$1);
var G__51498 = cljs.core.chunk_rest(seq__50695_51496__$1);
var G__51499 = c__4556__auto___51497;
var G__51500 = cljs.core.count(c__4556__auto___51497);
var G__51501 = (0);
seq__50695_51473 = G__51498;
chunk__50696_51474 = G__51499;
count__50697_51475 = G__51500;
i__50698_51476 = G__51501;
continue;
} else {
var item_51502 = cljs.core.first(seq__50695_51496__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_51502));


var G__51503 = cljs.core.next(seq__50695_51496__$1);
var G__51504 = null;
var G__51505 = (0);
var G__51506 = (0);
seq__50695_51473 = G__51503;
chunk__50696_51474 = G__51504;
count__50697_51475 = G__51505;
i__50698_51476 = G__51506;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4115__auto__ = key;
if(cljs.core.truth_(and__4115__auto__)){
return path;
} else {
return and__4115__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__50714 = "inspect!";
var G__50715 = shadow.object._id(oref);
var G__50716 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__50717 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__50714,G__50715,G__50716,G__50717) : shadow.object.info.call(null,G__50714,G__50715,G__50716,G__50717));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__50725_51530 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__50726_51531 = null;
var count__50727_51532 = (0);
var i__50728_51533 = (0);
while(true){
if((i__50728_51533 < count__50727_51532)){
var vec__50750_51543 = chunk__50726_51531.cljs$core$IIndexed$_nth$arity$2(null,i__50728_51533);
var id_51544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50750_51543,(0),null);
var oref_51545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50750_51543,(1),null);
var G__50753_51546 = "dump";
var G__50754_51547 = id_51544;
var G__50755_51548 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_51545)], 0));
var G__50756_51549 = cljs.core.deref(shadow.object._data(oref_51545));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__50753_51546,G__50754_51547,G__50755_51548,G__50756_51549) : shadow.object.info.call(null,G__50753_51546,G__50754_51547,G__50755_51548,G__50756_51549));


var G__51553 = seq__50725_51530;
var G__51554 = chunk__50726_51531;
var G__51555 = count__50727_51532;
var G__51556 = (i__50728_51533 + (1));
seq__50725_51530 = G__51553;
chunk__50726_51531 = G__51554;
count__50727_51532 = G__51555;
i__50728_51533 = G__51556;
continue;
} else {
var temp__5735__auto___51558 = cljs.core.seq(seq__50725_51530);
if(temp__5735__auto___51558){
var seq__50725_51560__$1 = temp__5735__auto___51558;
if(cljs.core.chunked_seq_QMARK_(seq__50725_51560__$1)){
var c__4556__auto___51561 = cljs.core.chunk_first(seq__50725_51560__$1);
var G__51563 = cljs.core.chunk_rest(seq__50725_51560__$1);
var G__51564 = c__4556__auto___51561;
var G__51565 = cljs.core.count(c__4556__auto___51561);
var G__51566 = (0);
seq__50725_51530 = G__51563;
chunk__50726_51531 = G__51564;
count__50727_51532 = G__51565;
i__50728_51533 = G__51566;
continue;
} else {
var vec__50757_51567 = cljs.core.first(seq__50725_51560__$1);
var id_51568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50757_51567,(0),null);
var oref_51569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50757_51567,(1),null);
var G__50760_51673 = "dump";
var G__50761_51674 = id_51568;
var G__50762_51675 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_51569)], 0));
var G__50763_51676 = cljs.core.deref(shadow.object._data(oref_51569));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__50760_51673,G__50761_51674,G__50762_51675,G__50763_51676) : shadow.object.info.call(null,G__50760_51673,G__50761_51674,G__50762_51675,G__50763_51676));


var G__51677 = cljs.core.next(seq__50725_51560__$1);
var G__51678 = null;
var G__51679 = (0);
var G__51680 = (0);
seq__50725_51530 = G__51677;
chunk__50726_51531 = G__51678;
count__50727_51532 = G__51679;
i__50728_51533 = G__51680;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
