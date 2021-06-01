goog.provide('cljs.core.async.impl.channels');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43218 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43218 = (function (val,meta43219){
this.val = val;
this.meta43219 = meta43219;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43220,meta43219__$1){
var self__ = this;
var _43220__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43218(self__.val,meta43219__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43220){
var self__ = this;
var _43220__$1 = this;
return self__.meta43219;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43218.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta43219","meta43219",-1054698198,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43218.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43218.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels43218");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43218.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels43218");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels43218.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels43218 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels43218(val__$1,meta43219){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43218(val__$1,meta43219));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43218(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

var cljs$core$async$impl$channels$MMC$abort$dyn_43462 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
});
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
return cljs$core$async$impl$channels$MMC$abort$dyn_43462(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_43473 = self__.puts.pop();
if((putter_43473 == null)){
} else {
var put_handler_43475 = putter_43473.handler;
var val_43476 = putter_43473.val;
if(put_handler_43475.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_43477 = put_handler_43475.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_43477,put_handler_43475,val_43476,putter_43473,this$__$1){
return (function (){
return (put_cb_43477.cljs$core$IFn$_invoke$arity$1 ? put_cb_43477.cljs$core$IFn$_invoke$arity$1(true) : put_cb_43477.call(null,true));
});})(put_cb_43477,put_handler_43475,val_43476,putter_43473,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if(((closed__$1) || ((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))))){
return cljs.core.async.impl.channels.box((!(closed__$1)));
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = self__.buf;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__4115__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0))))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__43496 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__43496;
continue;
} else {
var G__43502 = takers;
takers = G__43502;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__43269_43506 = cljs.core.seq(take_cbs);
var chunk__43270_43507 = null;
var count__43271_43508 = (0);
var i__43272_43509 = (0);
while(true){
if((i__43272_43509 < count__43271_43508)){
var f_43512 = chunk__43270_43507.cljs$core$IIndexed$_nth$arity$2(null,i__43272_43509);
cljs.core.async.impl.dispatch.run(f_43512);


var G__43515 = seq__43269_43506;
var G__43516 = chunk__43270_43507;
var G__43517 = count__43271_43508;
var G__43518 = (i__43272_43509 + (1));
seq__43269_43506 = G__43515;
chunk__43270_43507 = G__43516;
count__43271_43508 = G__43517;
i__43272_43509 = G__43518;
continue;
} else {
var temp__5735__auto___43522 = cljs.core.seq(seq__43269_43506);
if(temp__5735__auto___43522){
var seq__43269_43524__$1 = temp__5735__auto___43522;
if(cljs.core.chunked_seq_QMARK_(seq__43269_43524__$1)){
var c__4556__auto___43528 = cljs.core.chunk_first(seq__43269_43524__$1);
var G__43529 = cljs.core.chunk_rest(seq__43269_43524__$1);
var G__43530 = c__4556__auto___43528;
var G__43531 = cljs.core.count(c__4556__auto___43528);
var G__43532 = (0);
seq__43269_43506 = G__43529;
chunk__43270_43507 = G__43530;
count__43271_43508 = G__43531;
i__43272_43509 = G__43532;
continue;
} else {
var f_43535 = cljs.core.first(seq__43269_43524__$1);
cljs.core.async.impl.dispatch.run(f_43535);


var G__43539 = cljs.core.next(seq__43269_43524__$1);
var G__43540 = null;
var G__43541 = (0);
var G__43542 = (0);
seq__43269_43506 = G__43539;
chunk__43270_43507 = G__43540;
count__43271_43508 = G__43541;
i__43272_43509 = G__43542;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
}));

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count(self__.buf) > (0))))){
var temp__5733__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__5733__auto__)){
var take_cb = temp__5733__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__43318 = ((((cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0)))))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = ((put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))?put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null):false);
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if(((cljs.core.not(done_QMARK_)) && (cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0))))){
var G__43634 = cbs__$1;
cbs = G__43634;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43318,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43318,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__43323_43638 = cljs.core.seq(cbs);
var chunk__43324_43639 = null;
var count__43325_43640 = (0);
var i__43326_43641 = (0);
while(true){
if((i__43326_43641 < count__43325_43640)){
var cb_43643 = chunk__43324_43639.cljs$core$IIndexed$_nth$arity$2(null,i__43326_43641);
cljs.core.async.impl.dispatch.run(((function (seq__43323_43638,chunk__43324_43639,count__43325_43640,i__43326_43641,cb_43643,val,vec__43318,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1){
return (function (){
return (cb_43643.cljs$core$IFn$_invoke$arity$1 ? cb_43643.cljs$core$IFn$_invoke$arity$1(true) : cb_43643.call(null,true));
});})(seq__43323_43638,chunk__43324_43639,count__43325_43640,i__43326_43641,cb_43643,val,vec__43318,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1))
);


var G__43646 = seq__43323_43638;
var G__43647 = chunk__43324_43639;
var G__43648 = count__43325_43640;
var G__43649 = (i__43326_43641 + (1));
seq__43323_43638 = G__43646;
chunk__43324_43639 = G__43647;
count__43325_43640 = G__43648;
i__43326_43641 = G__43649;
continue;
} else {
var temp__5735__auto___43650 = cljs.core.seq(seq__43323_43638);
if(temp__5735__auto___43650){
var seq__43323_43651__$1 = temp__5735__auto___43650;
if(cljs.core.chunked_seq_QMARK_(seq__43323_43651__$1)){
var c__4556__auto___43652 = cljs.core.chunk_first(seq__43323_43651__$1);
var G__43655 = cljs.core.chunk_rest(seq__43323_43651__$1);
var G__43656 = c__4556__auto___43652;
var G__43657 = cljs.core.count(c__4556__auto___43652);
var G__43658 = (0);
seq__43323_43638 = G__43655;
chunk__43324_43639 = G__43656;
count__43325_43640 = G__43657;
i__43326_43641 = G__43658;
continue;
} else {
var cb_43659 = cljs.core.first(seq__43323_43651__$1);
cljs.core.async.impl.dispatch.run(((function (seq__43323_43638,chunk__43324_43639,count__43325_43640,i__43326_43641,cb_43659,seq__43323_43651__$1,temp__5735__auto___43650,val,vec__43318,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1){
return (function (){
return (cb_43659.cljs$core$IFn$_invoke$arity$1 ? cb_43659.cljs$core$IFn$_invoke$arity$1(true) : cb_43659.call(null,true));
});})(seq__43323_43638,chunk__43324_43639,count__43325_43640,i__43326_43641,cb_43659,seq__43323_43651__$1,temp__5735__auto___43650,val,vec__43318,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1))
);


var G__43662 = cljs.core.next(seq__43323_43651__$1);
var G__43663 = null;
var G__43664 = (0);
var G__43665 = (0);
seq__43323_43638 = G__43662;
chunk__43324_43639 = G__43663;
count__43325_43640 = G__43664;
i__43326_43641 = G__43665;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
}));

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})())){
var has_val = (function (){var and__4115__auto__ = self__.buf;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4115__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__4115__auto__ = self__.buf;
if(cljs.core.truth_(and__4115__auto__)){
return (self__.puts.length === (0));
} else {
return and__4115__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_43674 = self__.takes.pop();
if((taker_43674 == null)){
} else {
if(taker_43674.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_43675 = taker_43674.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_43676 = (cljs.core.truth_((function (){var and__4115__auto__ = self__.buf;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4115__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_43675,val_43676,taker_43674,this$__$1){
return (function (){
return (take_cb_43675.cljs$core$IFn$_invoke$arity$1 ? take_cb_43675.cljs$core$IFn$_invoke$arity$1(val_43676) : take_cb_43675.call(null,val_43676));
});})(take_cb_43675,val_43676,taker_43674,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__43390 = (function (){var or__4126__auto__ = exh;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__43390.cljs$core$IFn$_invoke$arity$1 ? fexpr__43390.cljs$core$IFn$_invoke$arity$1(t) : fexpr__43390.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__43405 = arguments.length;
switch (G__43405) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__43699 = null;
var G__43699__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e43418){var t = e43418;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__43699__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e43421){var t = e43421;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__43699 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__43699__1.call(this,buf__$1);
case 2:
return G__43699__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43699.cljs$core$IFn$_invoke$arity$1 = G__43699__1;
G__43699.cljs$core$IFn$_invoke$arity$2 = G__43699__2;
return G__43699;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.impl.channels.js.map
