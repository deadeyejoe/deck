goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45519 = arguments.length;
switch (G__45519) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45528 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45528 = (function (f,blockable,meta45529){
this.f = f;
this.blockable = blockable;
this.meta45529 = meta45529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45530,meta45529__$1){
var self__ = this;
var _45530__$1 = this;
return (new cljs.core.async.t_cljs$core$async45528(self__.f,self__.blockable,meta45529__$1));
}));

(cljs.core.async.t_cljs$core$async45528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45530){
var self__ = this;
var _45530__$1 = this;
return self__.meta45529;
}));

(cljs.core.async.t_cljs$core$async45528.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45528.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45529","meta45529",-126144306,null)], null);
}));

(cljs.core.async.t_cljs$core$async45528.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45528");

(cljs.core.async.t_cljs$core$async45528.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45528");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45528.
 */
cljs.core.async.__GT_t_cljs$core$async45528 = (function cljs$core$async$__GT_t_cljs$core$async45528(f__$1,blockable__$1,meta45529){
return (new cljs.core.async.t_cljs$core$async45528(f__$1,blockable__$1,meta45529));
});

}

return (new cljs.core.async.t_cljs$core$async45528(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45587 = arguments.length;
switch (G__45587) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45599 = arguments.length;
switch (G__45599) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45604 = arguments.length;
switch (G__45604) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_48421 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48421) : fn1.call(null,val_48421));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48421) : fn1.call(null,val_48421));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45614 = arguments.length;
switch (G__45614) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___48434 = n;
var x_48435 = (0);
while(true){
if((x_48435 < n__4613__auto___48434)){
(a[x_48435] = x_48435);

var G__48436 = (x_48435 + (1));
x_48435 = G__48436;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45627 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45627 = (function (flag,meta45628){
this.flag = flag;
this.meta45628 = meta45628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45629,meta45628__$1){
var self__ = this;
var _45629__$1 = this;
return (new cljs.core.async.t_cljs$core$async45627(self__.flag,meta45628__$1));
}));

(cljs.core.async.t_cljs$core$async45627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45629){
var self__ = this;
var _45629__$1 = this;
return self__.meta45628;
}));

(cljs.core.async.t_cljs$core$async45627.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45627.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45627.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45627.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45628","meta45628",-149494562,null)], null);
}));

(cljs.core.async.t_cljs$core$async45627.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45627");

(cljs.core.async.t_cljs$core$async45627.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45627");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45627.
 */
cljs.core.async.__GT_t_cljs$core$async45627 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45627(flag__$1,meta45628){
return (new cljs.core.async.t_cljs$core$async45627(flag__$1,meta45628));
});

}

return (new cljs.core.async.t_cljs$core$async45627(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45665 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45665 = (function (flag,cb,meta45666){
this.flag = flag;
this.cb = cb;
this.meta45666 = meta45666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45667,meta45666__$1){
var self__ = this;
var _45667__$1 = this;
return (new cljs.core.async.t_cljs$core$async45665(self__.flag,self__.cb,meta45666__$1));
}));

(cljs.core.async.t_cljs$core$async45665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45667){
var self__ = this;
var _45667__$1 = this;
return self__.meta45666;
}));

(cljs.core.async.t_cljs$core$async45665.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45665.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45665.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45665.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45666","meta45666",2042022781,null)], null);
}));

(cljs.core.async.t_cljs$core$async45665.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45665");

(cljs.core.async.t_cljs$core$async45665.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45665");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45665.
 */
cljs.core.async.__GT_t_cljs$core$async45665 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45665(flag__$1,cb__$1,meta45666){
return (new cljs.core.async.t_cljs$core$async45665(flag__$1,cb__$1,meta45666));
});

}

return (new cljs.core.async.t_cljs$core$async45665(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45686_SHARP_){
var G__45692 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45686_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45692) : fret.call(null,G__45692));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45687_SHARP_){
var G__45693 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45687_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45693) : fret.call(null,G__45693));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48447 = (i + (1));
i = G__48447;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48449 = arguments.length;
var i__4737__auto___48450 = (0);
while(true){
if((i__4737__auto___48450 < len__4736__auto___48449)){
args__4742__auto__.push((arguments[i__4737__auto___48450]));

var G__48452 = (i__4737__auto___48450 + (1));
i__4737__auto___48450 = G__48452;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45707){
var map__45708 = p__45707;
var map__45708__$1 = (((((!((map__45708 == null))))?(((((map__45708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45708):map__45708);
var opts = map__45708__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45697){
var G__45698 = cljs.core.first(seq45697);
var seq45697__$1 = cljs.core.next(seq45697);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45698,seq45697__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__45768 = arguments.length;
switch (G__45768) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45436__auto___48461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_45809){
var state_val_45810 = (state_45809[(1)]);
if((state_val_45810 === (7))){
var inst_45805 = (state_45809[(2)]);
var state_45809__$1 = state_45809;
var statearr_45811_48468 = state_45809__$1;
(statearr_45811_48468[(2)] = inst_45805);

(statearr_45811_48468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45810 === (1))){
var state_45809__$1 = state_45809;
var statearr_45812_48469 = state_45809__$1;
(statearr_45812_48469[(2)] = null);

(statearr_45812_48469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45810 === (4))){
var inst_45781 = (state_45809[(7)]);
var inst_45781__$1 = (state_45809[(2)]);
var inst_45786 = (inst_45781__$1 == null);
var state_45809__$1 = (function (){var statearr_45813 = state_45809;
(statearr_45813[(7)] = inst_45781__$1);

return statearr_45813;
})();
if(cljs.core.truth_(inst_45786)){
var statearr_45814_48477 = state_45809__$1;
(statearr_45814_48477[(1)] = (5));

} else {
var statearr_45815_48478 = state_45809__$1;
(statearr_45815_48478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45810 === (13))){
var state_45809__$1 = state_45809;
var statearr_45816_48483 = state_45809__$1;
(statearr_45816_48483[(2)] = null);

(statearr_45816_48483[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45810 === (6))){
var inst_45781 = (state_45809[(7)]);
var state_45809__$1 = state_45809;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45809__$1,(11),to,inst_45781);
} else {
if((state_val_45810 === (3))){
var inst_45807 = (state_45809[(2)]);
var state_45809__$1 = state_45809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45809__$1,inst_45807);
} else {
if((state_val_45810 === (12))){
var state_45809__$1 = state_45809;
var statearr_45817_48487 = state_45809__$1;
(statearr_45817_48487[(2)] = null);

(statearr_45817_48487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45810 === (2))){
var state_45809__$1 = state_45809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45809__$1,(4),from);
} else {
if((state_val_45810 === (11))){
var inst_45795 = (state_45809[(2)]);
var state_45809__$1 = state_45809;
if(cljs.core.truth_(inst_45795)){
var statearr_45818_48488 = state_45809__$1;
(statearr_45818_48488[(1)] = (12));

} else {
var statearr_45819_48489 = state_45809__$1;
(statearr_45819_48489[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45810 === (9))){
var state_45809__$1 = state_45809;
var statearr_45820_48493 = state_45809__$1;
(statearr_45820_48493[(2)] = null);

(statearr_45820_48493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45810 === (5))){
var state_45809__$1 = state_45809;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45821_48496 = state_45809__$1;
(statearr_45821_48496[(1)] = (8));

} else {
var statearr_45822_48497 = state_45809__$1;
(statearr_45822_48497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45810 === (14))){
var inst_45800 = (state_45809[(2)]);
var state_45809__$1 = state_45809;
var statearr_45823_48500 = state_45809__$1;
(statearr_45823_48500[(2)] = inst_45800);

(statearr_45823_48500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45810 === (10))){
var inst_45792 = (state_45809[(2)]);
var state_45809__$1 = state_45809;
var statearr_45824_48501 = state_45809__$1;
(statearr_45824_48501[(2)] = inst_45792);

(statearr_45824_48501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45810 === (8))){
var inst_45789 = cljs.core.async.close_BANG_(to);
var state_45809__$1 = state_45809;
var statearr_45825_48502 = state_45809__$1;
(statearr_45825_48502[(2)] = inst_45789);

(statearr_45825_48502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45217__auto__ = null;
var cljs$core$async$state_machine__45217__auto____0 = (function (){
var statearr_45826 = [null,null,null,null,null,null,null,null];
(statearr_45826[(0)] = cljs$core$async$state_machine__45217__auto__);

(statearr_45826[(1)] = (1));

return statearr_45826;
});
var cljs$core$async$state_machine__45217__auto____1 = (function (state_45809){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_45809);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e45827){var ex__45220__auto__ = e45827;
var statearr_45828_48506 = state_45809;
(statearr_45828_48506[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_45809[(4)]))){
var statearr_45829_48507 = state_45809;
(statearr_45829_48507[(1)] = cljs.core.first((state_45809[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48508 = state_45809;
state_45809 = G__48508;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$state_machine__45217__auto__ = function(state_45809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45217__auto____1.call(this,state_45809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45217__auto____0;
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45217__auto____1;
return cljs$core$async$state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_45831 = f__45437__auto__();
(statearr_45831[(6)] = c__45436__auto___48461);

return statearr_45831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__45833){
var vec__45834 = p__45833;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45834,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45834,(1),null);
var job = vec__45834;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45436__auto___48515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_45844){
var state_val_45845 = (state_45844[(1)]);
if((state_val_45845 === (1))){
var state_45844__$1 = state_45844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45844__$1,(2),res,v);
} else {
if((state_val_45845 === (2))){
var inst_45841 = (state_45844[(2)]);
var inst_45842 = cljs.core.async.close_BANG_(res);
var state_45844__$1 = (function (){var statearr_45852 = state_45844;
(statearr_45852[(7)] = inst_45841);

return statearr_45852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45844__$1,inst_45842);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____0 = (function (){
var statearr_45853 = [null,null,null,null,null,null,null,null];
(statearr_45853[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__);

(statearr_45853[(1)] = (1));

return statearr_45853;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____1 = (function (state_45844){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_45844);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e45854){var ex__45220__auto__ = e45854;
var statearr_45856_48522 = state_45844;
(statearr_45856_48522[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_45844[(4)]))){
var statearr_45857_48523 = state_45844;
(statearr_45857_48523[(1)] = cljs.core.first((state_45844[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48525 = state_45844;
state_45844 = G__48525;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__ = function(state_45844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____1.call(this,state_45844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_45858 = f__45437__auto__();
(statearr_45858[(6)] = c__45436__auto___48515);

return statearr_45858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__45859){
var vec__45860 = p__45859;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45860,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45860,(1),null);
var job = vec__45860;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___48528 = n;
var __48529 = (0);
while(true){
if((__48529 < n__4613__auto___48528)){
var G__45863_48531 = type;
var G__45863_48532__$1 = (((G__45863_48531 instanceof cljs.core.Keyword))?G__45863_48531.fqn:null);
switch (G__45863_48532__$1) {
case "compute":
var c__45436__auto___48535 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48529,c__45436__auto___48535,G__45863_48531,G__45863_48532__$1,n__4613__auto___48528,jobs,results,process,async){
return (function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = ((function (__48529,c__45436__auto___48535,G__45863_48531,G__45863_48532__$1,n__4613__auto___48528,jobs,results,process,async){
return (function (state_45876){
var state_val_45877 = (state_45876[(1)]);
if((state_val_45877 === (1))){
var state_45876__$1 = state_45876;
var statearr_45878_48538 = state_45876__$1;
(statearr_45878_48538[(2)] = null);

(statearr_45878_48538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45877 === (2))){
var state_45876__$1 = state_45876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45876__$1,(4),jobs);
} else {
if((state_val_45877 === (3))){
var inst_45874 = (state_45876[(2)]);
var state_45876__$1 = state_45876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45876__$1,inst_45874);
} else {
if((state_val_45877 === (4))){
var inst_45866 = (state_45876[(2)]);
var inst_45867 = process(inst_45866);
var state_45876__$1 = state_45876;
if(cljs.core.truth_(inst_45867)){
var statearr_45879_48539 = state_45876__$1;
(statearr_45879_48539[(1)] = (5));

} else {
var statearr_45880_48540 = state_45876__$1;
(statearr_45880_48540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45877 === (5))){
var state_45876__$1 = state_45876;
var statearr_45881_48545 = state_45876__$1;
(statearr_45881_48545[(2)] = null);

(statearr_45881_48545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45877 === (6))){
var state_45876__$1 = state_45876;
var statearr_45882_48546 = state_45876__$1;
(statearr_45882_48546[(2)] = null);

(statearr_45882_48546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45877 === (7))){
var inst_45872 = (state_45876[(2)]);
var state_45876__$1 = state_45876;
var statearr_45883_48552 = state_45876__$1;
(statearr_45883_48552[(2)] = inst_45872);

(statearr_45883_48552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48529,c__45436__auto___48535,G__45863_48531,G__45863_48532__$1,n__4613__auto___48528,jobs,results,process,async))
;
return ((function (__48529,switch__45216__auto__,c__45436__auto___48535,G__45863_48531,G__45863_48532__$1,n__4613__auto___48528,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____0 = (function (){
var statearr_45884 = [null,null,null,null,null,null,null];
(statearr_45884[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__);

(statearr_45884[(1)] = (1));

return statearr_45884;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____1 = (function (state_45876){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_45876);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e45885){var ex__45220__auto__ = e45885;
var statearr_45886_48569 = state_45876;
(statearr_45886_48569[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_45876[(4)]))){
var statearr_45887_48573 = state_45876;
(statearr_45887_48573[(1)] = cljs.core.first((state_45876[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48578 = state_45876;
state_45876 = G__48578;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__ = function(state_45876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____1.call(this,state_45876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__;
})()
;})(__48529,switch__45216__auto__,c__45436__auto___48535,G__45863_48531,G__45863_48532__$1,n__4613__auto___48528,jobs,results,process,async))
})();
var state__45438__auto__ = (function (){var statearr_45892 = f__45437__auto__();
(statearr_45892[(6)] = c__45436__auto___48535);

return statearr_45892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
});})(__48529,c__45436__auto___48535,G__45863_48531,G__45863_48532__$1,n__4613__auto___48528,jobs,results,process,async))
);


break;
case "async":
var c__45436__auto___48584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48529,c__45436__auto___48584,G__45863_48531,G__45863_48532__$1,n__4613__auto___48528,jobs,results,process,async){
return (function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = ((function (__48529,c__45436__auto___48584,G__45863_48531,G__45863_48532__$1,n__4613__auto___48528,jobs,results,process,async){
return (function (state_45905){
var state_val_45906 = (state_45905[(1)]);
if((state_val_45906 === (1))){
var state_45905__$1 = state_45905;
var statearr_45907_48591 = state_45905__$1;
(statearr_45907_48591[(2)] = null);

(statearr_45907_48591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45906 === (2))){
var state_45905__$1 = state_45905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45905__$1,(4),jobs);
} else {
if((state_val_45906 === (3))){
var inst_45903 = (state_45905[(2)]);
var state_45905__$1 = state_45905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45905__$1,inst_45903);
} else {
if((state_val_45906 === (4))){
var inst_45895 = (state_45905[(2)]);
var inst_45896 = async(inst_45895);
var state_45905__$1 = state_45905;
if(cljs.core.truth_(inst_45896)){
var statearr_45911_48599 = state_45905__$1;
(statearr_45911_48599[(1)] = (5));

} else {
var statearr_45912_48600 = state_45905__$1;
(statearr_45912_48600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45906 === (5))){
var state_45905__$1 = state_45905;
var statearr_45913_48601 = state_45905__$1;
(statearr_45913_48601[(2)] = null);

(statearr_45913_48601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45906 === (6))){
var state_45905__$1 = state_45905;
var statearr_45917_48602 = state_45905__$1;
(statearr_45917_48602[(2)] = null);

(statearr_45917_48602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45906 === (7))){
var inst_45901 = (state_45905[(2)]);
var state_45905__$1 = state_45905;
var statearr_45918_48607 = state_45905__$1;
(statearr_45918_48607[(2)] = inst_45901);

(statearr_45918_48607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48529,c__45436__auto___48584,G__45863_48531,G__45863_48532__$1,n__4613__auto___48528,jobs,results,process,async))
;
return ((function (__48529,switch__45216__auto__,c__45436__auto___48584,G__45863_48531,G__45863_48532__$1,n__4613__auto___48528,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____0 = (function (){
var statearr_45919 = [null,null,null,null,null,null,null];
(statearr_45919[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__);

(statearr_45919[(1)] = (1));

return statearr_45919;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____1 = (function (state_45905){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_45905);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e45920){var ex__45220__auto__ = e45920;
var statearr_45921_48613 = state_45905;
(statearr_45921_48613[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_45905[(4)]))){
var statearr_45922_48614 = state_45905;
(statearr_45922_48614[(1)] = cljs.core.first((state_45905[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48618 = state_45905;
state_45905 = G__48618;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__ = function(state_45905){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____1.call(this,state_45905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__;
})()
;})(__48529,switch__45216__auto__,c__45436__auto___48584,G__45863_48531,G__45863_48532__$1,n__4613__auto___48528,jobs,results,process,async))
})();
var state__45438__auto__ = (function (){var statearr_45923 = f__45437__auto__();
(statearr_45923[(6)] = c__45436__auto___48584);

return statearr_45923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
});})(__48529,c__45436__auto___48584,G__45863_48531,G__45863_48532__$1,n__4613__auto___48528,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45863_48532__$1)].join('')));

}

var G__48620 = (__48529 + (1));
__48529 = G__48620;
continue;
} else {
}
break;
}

var c__45436__auto___48621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_45949){
var state_val_45950 = (state_45949[(1)]);
if((state_val_45950 === (7))){
var inst_45945 = (state_45949[(2)]);
var state_45949__$1 = state_45949;
var statearr_45955_48623 = state_45949__$1;
(statearr_45955_48623[(2)] = inst_45945);

(statearr_45955_48623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45950 === (1))){
var state_45949__$1 = state_45949;
var statearr_45956_48624 = state_45949__$1;
(statearr_45956_48624[(2)] = null);

(statearr_45956_48624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45950 === (4))){
var inst_45926 = (state_45949[(7)]);
var inst_45926__$1 = (state_45949[(2)]);
var inst_45928 = (inst_45926__$1 == null);
var state_45949__$1 = (function (){var statearr_45961 = state_45949;
(statearr_45961[(7)] = inst_45926__$1);

return statearr_45961;
})();
if(cljs.core.truth_(inst_45928)){
var statearr_45962_48626 = state_45949__$1;
(statearr_45962_48626[(1)] = (5));

} else {
var statearr_45963_48627 = state_45949__$1;
(statearr_45963_48627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45950 === (6))){
var inst_45926 = (state_45949[(7)]);
var inst_45935 = (state_45949[(8)]);
var inst_45935__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_45936 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45937 = [inst_45926,inst_45935__$1];
var inst_45938 = (new cljs.core.PersistentVector(null,2,(5),inst_45936,inst_45937,null));
var state_45949__$1 = (function (){var statearr_45964 = state_45949;
(statearr_45964[(8)] = inst_45935__$1);

return statearr_45964;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45949__$1,(8),jobs,inst_45938);
} else {
if((state_val_45950 === (3))){
var inst_45947 = (state_45949[(2)]);
var state_45949__$1 = state_45949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45949__$1,inst_45947);
} else {
if((state_val_45950 === (2))){
var state_45949__$1 = state_45949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45949__$1,(4),from);
} else {
if((state_val_45950 === (9))){
var inst_45942 = (state_45949[(2)]);
var state_45949__$1 = (function (){var statearr_45965 = state_45949;
(statearr_45965[(9)] = inst_45942);

return statearr_45965;
})();
var statearr_45966_48630 = state_45949__$1;
(statearr_45966_48630[(2)] = null);

(statearr_45966_48630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45950 === (5))){
var inst_45930 = cljs.core.async.close_BANG_(jobs);
var state_45949__$1 = state_45949;
var statearr_45967_48631 = state_45949__$1;
(statearr_45967_48631[(2)] = inst_45930);

(statearr_45967_48631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45950 === (8))){
var inst_45935 = (state_45949[(8)]);
var inst_45940 = (state_45949[(2)]);
var state_45949__$1 = (function (){var statearr_45968 = state_45949;
(statearr_45968[(10)] = inst_45940);

return statearr_45968;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45949__$1,(9),results,inst_45935);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____0 = (function (){
var statearr_45973 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45973[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__);

(statearr_45973[(1)] = (1));

return statearr_45973;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____1 = (function (state_45949){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_45949);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e45978){var ex__45220__auto__ = e45978;
var statearr_45980_48635 = state_45949;
(statearr_45980_48635[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_45949[(4)]))){
var statearr_45982_48636 = state_45949;
(statearr_45982_48636[(1)] = cljs.core.first((state_45949[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48637 = state_45949;
state_45949 = G__48637;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__ = function(state_45949){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____1.call(this,state_45949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_45984 = f__45437__auto__();
(statearr_45984[(6)] = c__45436__auto___48621);

return statearr_45984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));


var c__45436__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_46025){
var state_val_46026 = (state_46025[(1)]);
if((state_val_46026 === (7))){
var inst_46021 = (state_46025[(2)]);
var state_46025__$1 = state_46025;
var statearr_46027_48639 = state_46025__$1;
(statearr_46027_48639[(2)] = inst_46021);

(statearr_46027_48639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (20))){
var state_46025__$1 = state_46025;
var statearr_46028_48640 = state_46025__$1;
(statearr_46028_48640[(2)] = null);

(statearr_46028_48640[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (1))){
var state_46025__$1 = state_46025;
var statearr_46029_48642 = state_46025__$1;
(statearr_46029_48642[(2)] = null);

(statearr_46029_48642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (4))){
var inst_45987 = (state_46025[(7)]);
var inst_45987__$1 = (state_46025[(2)]);
var inst_45988 = (inst_45987__$1 == null);
var state_46025__$1 = (function (){var statearr_46030 = state_46025;
(statearr_46030[(7)] = inst_45987__$1);

return statearr_46030;
})();
if(cljs.core.truth_(inst_45988)){
var statearr_46031_48647 = state_46025__$1;
(statearr_46031_48647[(1)] = (5));

} else {
var statearr_46032_48648 = state_46025__$1;
(statearr_46032_48648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (15))){
var inst_46002 = (state_46025[(8)]);
var state_46025__$1 = state_46025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46025__$1,(18),to,inst_46002);
} else {
if((state_val_46026 === (21))){
var inst_46016 = (state_46025[(2)]);
var state_46025__$1 = state_46025;
var statearr_46036_48657 = state_46025__$1;
(statearr_46036_48657[(2)] = inst_46016);

(statearr_46036_48657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (13))){
var inst_46018 = (state_46025[(2)]);
var state_46025__$1 = (function (){var statearr_46039 = state_46025;
(statearr_46039[(9)] = inst_46018);

return statearr_46039;
})();
var statearr_46040_48662 = state_46025__$1;
(statearr_46040_48662[(2)] = null);

(statearr_46040_48662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (6))){
var inst_45987 = (state_46025[(7)]);
var state_46025__$1 = state_46025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46025__$1,(11),inst_45987);
} else {
if((state_val_46026 === (17))){
var inst_46011 = (state_46025[(2)]);
var state_46025__$1 = state_46025;
if(cljs.core.truth_(inst_46011)){
var statearr_46041_48665 = state_46025__$1;
(statearr_46041_48665[(1)] = (19));

} else {
var statearr_46042_48666 = state_46025__$1;
(statearr_46042_48666[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (3))){
var inst_46023 = (state_46025[(2)]);
var state_46025__$1 = state_46025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46025__$1,inst_46023);
} else {
if((state_val_46026 === (12))){
var inst_45997 = (state_46025[(10)]);
var state_46025__$1 = state_46025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46025__$1,(14),inst_45997);
} else {
if((state_val_46026 === (2))){
var state_46025__$1 = state_46025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46025__$1,(4),results);
} else {
if((state_val_46026 === (19))){
var state_46025__$1 = state_46025;
var statearr_46043_48673 = state_46025__$1;
(statearr_46043_48673[(2)] = null);

(statearr_46043_48673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (11))){
var inst_45997 = (state_46025[(2)]);
var state_46025__$1 = (function (){var statearr_46045 = state_46025;
(statearr_46045[(10)] = inst_45997);

return statearr_46045;
})();
var statearr_46046_48674 = state_46025__$1;
(statearr_46046_48674[(2)] = null);

(statearr_46046_48674[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (9))){
var state_46025__$1 = state_46025;
var statearr_46051_48678 = state_46025__$1;
(statearr_46051_48678[(2)] = null);

(statearr_46051_48678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (5))){
var state_46025__$1 = state_46025;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46052_48679 = state_46025__$1;
(statearr_46052_48679[(1)] = (8));

} else {
var statearr_46053_48680 = state_46025__$1;
(statearr_46053_48680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (14))){
var inst_46002 = (state_46025[(8)]);
var inst_46002__$1 = (state_46025[(2)]);
var inst_46004 = (inst_46002__$1 == null);
var inst_46005 = cljs.core.not(inst_46004);
var state_46025__$1 = (function (){var statearr_46057 = state_46025;
(statearr_46057[(8)] = inst_46002__$1);

return statearr_46057;
})();
if(inst_46005){
var statearr_46064_48685 = state_46025__$1;
(statearr_46064_48685[(1)] = (15));

} else {
var statearr_46065_48686 = state_46025__$1;
(statearr_46065_48686[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (16))){
var state_46025__$1 = state_46025;
var statearr_46067_48687 = state_46025__$1;
(statearr_46067_48687[(2)] = false);

(statearr_46067_48687[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (10))){
var inst_45994 = (state_46025[(2)]);
var state_46025__$1 = state_46025;
var statearr_46075_48690 = state_46025__$1;
(statearr_46075_48690[(2)] = inst_45994);

(statearr_46075_48690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (18))){
var inst_46008 = (state_46025[(2)]);
var state_46025__$1 = state_46025;
var statearr_46076_48694 = state_46025__$1;
(statearr_46076_48694[(2)] = inst_46008);

(statearr_46076_48694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (8))){
var inst_45991 = cljs.core.async.close_BANG_(to);
var state_46025__$1 = state_46025;
var statearr_46077_48695 = state_46025__$1;
(statearr_46077_48695[(2)] = inst_45991);

(statearr_46077_48695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____0 = (function (){
var statearr_46078 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46078[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__);

(statearr_46078[(1)] = (1));

return statearr_46078;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____1 = (function (state_46025){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_46025);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e46079){var ex__45220__auto__ = e46079;
var statearr_46080_48709 = state_46025;
(statearr_46080_48709[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_46025[(4)]))){
var statearr_46081_48710 = state_46025;
(statearr_46081_48710[(1)] = cljs.core.first((state_46025[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48712 = state_46025;
state_46025 = G__48712;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__ = function(state_46025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____1.call(this,state_46025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45217__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_46094 = f__45437__auto__();
(statearr_46094[(6)] = c__45436__auto__);

return statearr_46094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));

return c__45436__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46099 = arguments.length;
switch (G__46099) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__46118 = arguments.length;
switch (G__46118) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__46123 = arguments.length;
switch (G__46123) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__45436__auto___48726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_46154){
var state_val_46155 = (state_46154[(1)]);
if((state_val_46155 === (7))){
var inst_46150 = (state_46154[(2)]);
var state_46154__$1 = state_46154;
var statearr_46159_48727 = state_46154__$1;
(statearr_46159_48727[(2)] = inst_46150);

(statearr_46159_48727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (1))){
var state_46154__$1 = state_46154;
var statearr_46160_48734 = state_46154__$1;
(statearr_46160_48734[(2)] = null);

(statearr_46160_48734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (4))){
var inst_46131 = (state_46154[(7)]);
var inst_46131__$1 = (state_46154[(2)]);
var inst_46132 = (inst_46131__$1 == null);
var state_46154__$1 = (function (){var statearr_46161 = state_46154;
(statearr_46161[(7)] = inst_46131__$1);

return statearr_46161;
})();
if(cljs.core.truth_(inst_46132)){
var statearr_46166_48735 = state_46154__$1;
(statearr_46166_48735[(1)] = (5));

} else {
var statearr_46167_48738 = state_46154__$1;
(statearr_46167_48738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (13))){
var state_46154__$1 = state_46154;
var statearr_46174_48741 = state_46154__$1;
(statearr_46174_48741[(2)] = null);

(statearr_46174_48741[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (6))){
var inst_46131 = (state_46154[(7)]);
var inst_46137 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46131) : p.call(null,inst_46131));
var state_46154__$1 = state_46154;
if(cljs.core.truth_(inst_46137)){
var statearr_46175_48742 = state_46154__$1;
(statearr_46175_48742[(1)] = (9));

} else {
var statearr_46176_48743 = state_46154__$1;
(statearr_46176_48743[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (3))){
var inst_46152 = (state_46154[(2)]);
var state_46154__$1 = state_46154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46154__$1,inst_46152);
} else {
if((state_val_46155 === (12))){
var state_46154__$1 = state_46154;
var statearr_46177_48746 = state_46154__$1;
(statearr_46177_48746[(2)] = null);

(statearr_46177_48746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (2))){
var state_46154__$1 = state_46154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46154__$1,(4),ch);
} else {
if((state_val_46155 === (11))){
var inst_46131 = (state_46154[(7)]);
var inst_46141 = (state_46154[(2)]);
var state_46154__$1 = state_46154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46154__$1,(8),inst_46141,inst_46131);
} else {
if((state_val_46155 === (9))){
var state_46154__$1 = state_46154;
var statearr_46178_48747 = state_46154__$1;
(statearr_46178_48747[(2)] = tc);

(statearr_46178_48747[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (5))){
var inst_46134 = cljs.core.async.close_BANG_(tc);
var inst_46135 = cljs.core.async.close_BANG_(fc);
var state_46154__$1 = (function (){var statearr_46179 = state_46154;
(statearr_46179[(8)] = inst_46134);

return statearr_46179;
})();
var statearr_46180_48756 = state_46154__$1;
(statearr_46180_48756[(2)] = inst_46135);

(statearr_46180_48756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (14))){
var inst_46148 = (state_46154[(2)]);
var state_46154__$1 = state_46154;
var statearr_46183_48760 = state_46154__$1;
(statearr_46183_48760[(2)] = inst_46148);

(statearr_46183_48760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (10))){
var state_46154__$1 = state_46154;
var statearr_46184_48762 = state_46154__$1;
(statearr_46184_48762[(2)] = fc);

(statearr_46184_48762[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46155 === (8))){
var inst_46143 = (state_46154[(2)]);
var state_46154__$1 = state_46154;
if(cljs.core.truth_(inst_46143)){
var statearr_46189_48766 = state_46154__$1;
(statearr_46189_48766[(1)] = (12));

} else {
var statearr_46190_48767 = state_46154__$1;
(statearr_46190_48767[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45217__auto__ = null;
var cljs$core$async$state_machine__45217__auto____0 = (function (){
var statearr_46191 = [null,null,null,null,null,null,null,null,null];
(statearr_46191[(0)] = cljs$core$async$state_machine__45217__auto__);

(statearr_46191[(1)] = (1));

return statearr_46191;
});
var cljs$core$async$state_machine__45217__auto____1 = (function (state_46154){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_46154);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e46192){var ex__45220__auto__ = e46192;
var statearr_46193_48771 = state_46154;
(statearr_46193_48771[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_46154[(4)]))){
var statearr_46194_48772 = state_46154;
(statearr_46194_48772[(1)] = cljs.core.first((state_46154[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48777 = state_46154;
state_46154 = G__48777;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$state_machine__45217__auto__ = function(state_46154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45217__auto____1.call(this,state_46154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45217__auto____0;
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45217__auto____1;
return cljs$core$async$state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_46195 = f__45437__auto__();
(statearr_46195[(6)] = c__45436__auto___48726);

return statearr_46195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45436__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_46224){
var state_val_46225 = (state_46224[(1)]);
if((state_val_46225 === (7))){
var inst_46220 = (state_46224[(2)]);
var state_46224__$1 = state_46224;
var statearr_46226_48783 = state_46224__$1;
(statearr_46226_48783[(2)] = inst_46220);

(statearr_46226_48783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46225 === (1))){
var inst_46200 = init;
var inst_46201 = inst_46200;
var state_46224__$1 = (function (){var statearr_46229 = state_46224;
(statearr_46229[(7)] = inst_46201);

return statearr_46229;
})();
var statearr_46230_48784 = state_46224__$1;
(statearr_46230_48784[(2)] = null);

(statearr_46230_48784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46225 === (4))){
var inst_46205 = (state_46224[(8)]);
var inst_46205__$1 = (state_46224[(2)]);
var inst_46206 = (inst_46205__$1 == null);
var state_46224__$1 = (function (){var statearr_46231 = state_46224;
(statearr_46231[(8)] = inst_46205__$1);

return statearr_46231;
})();
if(cljs.core.truth_(inst_46206)){
var statearr_46232_48785 = state_46224__$1;
(statearr_46232_48785[(1)] = (5));

} else {
var statearr_46233_48787 = state_46224__$1;
(statearr_46233_48787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46225 === (6))){
var inst_46205 = (state_46224[(8)]);
var inst_46201 = (state_46224[(7)]);
var inst_46211 = (state_46224[(9)]);
var inst_46211__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46201,inst_46205) : f.call(null,inst_46201,inst_46205));
var inst_46212 = cljs.core.reduced_QMARK_(inst_46211__$1);
var state_46224__$1 = (function (){var statearr_46240 = state_46224;
(statearr_46240[(9)] = inst_46211__$1);

return statearr_46240;
})();
if(inst_46212){
var statearr_46241_48791 = state_46224__$1;
(statearr_46241_48791[(1)] = (8));

} else {
var statearr_46242_48792 = state_46224__$1;
(statearr_46242_48792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46225 === (3))){
var inst_46222 = (state_46224[(2)]);
var state_46224__$1 = state_46224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46224__$1,inst_46222);
} else {
if((state_val_46225 === (2))){
var state_46224__$1 = state_46224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46224__$1,(4),ch);
} else {
if((state_val_46225 === (9))){
var inst_46211 = (state_46224[(9)]);
var inst_46201 = inst_46211;
var state_46224__$1 = (function (){var statearr_46245 = state_46224;
(statearr_46245[(7)] = inst_46201);

return statearr_46245;
})();
var statearr_46246_48800 = state_46224__$1;
(statearr_46246_48800[(2)] = null);

(statearr_46246_48800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46225 === (5))){
var inst_46201 = (state_46224[(7)]);
var state_46224__$1 = state_46224;
var statearr_46247_48801 = state_46224__$1;
(statearr_46247_48801[(2)] = inst_46201);

(statearr_46247_48801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46225 === (10))){
var inst_46218 = (state_46224[(2)]);
var state_46224__$1 = state_46224;
var statearr_46250_48802 = state_46224__$1;
(statearr_46250_48802[(2)] = inst_46218);

(statearr_46250_48802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46225 === (8))){
var inst_46211 = (state_46224[(9)]);
var inst_46214 = cljs.core.deref(inst_46211);
var state_46224__$1 = state_46224;
var statearr_46254_48803 = state_46224__$1;
(statearr_46254_48803[(2)] = inst_46214);

(statearr_46254_48803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__45217__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45217__auto____0 = (function (){
var statearr_46259 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46259[(0)] = cljs$core$async$reduce_$_state_machine__45217__auto__);

(statearr_46259[(1)] = (1));

return statearr_46259;
});
var cljs$core$async$reduce_$_state_machine__45217__auto____1 = (function (state_46224){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_46224);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e46261){var ex__45220__auto__ = e46261;
var statearr_46262_48806 = state_46224;
(statearr_46262_48806[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_46224[(4)]))){
var statearr_46263_48808 = state_46224;
(statearr_46263_48808[(1)] = cljs.core.first((state_46224[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48812 = state_46224;
state_46224 = G__48812;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45217__auto__ = function(state_46224){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45217__auto____1.call(this,state_46224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45217__auto____0;
cljs$core$async$reduce_$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45217__auto____1;
return cljs$core$async$reduce_$_state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_46264 = f__45437__auto__();
(statearr_46264[(6)] = c__45436__auto__);

return statearr_46264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));

return c__45436__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45436__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_46278){
var state_val_46279 = (state_46278[(1)]);
if((state_val_46279 === (1))){
var inst_46269 = cljs.core.async.reduce(f__$1,init,ch);
var state_46278__$1 = state_46278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46278__$1,(2),inst_46269);
} else {
if((state_val_46279 === (2))){
var inst_46271 = (state_46278[(2)]);
var inst_46272 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46271) : f__$1.call(null,inst_46271));
var state_46278__$1 = state_46278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46278__$1,inst_46272);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45217__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45217__auto____0 = (function (){
var statearr_46289 = [null,null,null,null,null,null,null];
(statearr_46289[(0)] = cljs$core$async$transduce_$_state_machine__45217__auto__);

(statearr_46289[(1)] = (1));

return statearr_46289;
});
var cljs$core$async$transduce_$_state_machine__45217__auto____1 = (function (state_46278){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_46278);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e46293){var ex__45220__auto__ = e46293;
var statearr_46295_48826 = state_46278;
(statearr_46295_48826[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_46278[(4)]))){
var statearr_46300_48827 = state_46278;
(statearr_46300_48827[(1)] = cljs.core.first((state_46278[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48829 = state_46278;
state_46278 = G__48829;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45217__auto__ = function(state_46278){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45217__auto____1.call(this,state_46278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45217__auto____0;
cljs$core$async$transduce_$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45217__auto____1;
return cljs$core$async$transduce_$_state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_46314 = f__45437__auto__();
(statearr_46314[(6)] = c__45436__auto__);

return statearr_46314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));

return c__45436__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__46327 = arguments.length;
switch (G__46327) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45436__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_46364){
var state_val_46365 = (state_46364[(1)]);
if((state_val_46365 === (7))){
var inst_46345 = (state_46364[(2)]);
var state_46364__$1 = state_46364;
var statearr_46370_48839 = state_46364__$1;
(statearr_46370_48839[(2)] = inst_46345);

(statearr_46370_48839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46365 === (1))){
var inst_46334 = cljs.core.seq(coll);
var inst_46335 = inst_46334;
var state_46364__$1 = (function (){var statearr_46372 = state_46364;
(statearr_46372[(7)] = inst_46335);

return statearr_46372;
})();
var statearr_46373_48840 = state_46364__$1;
(statearr_46373_48840[(2)] = null);

(statearr_46373_48840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46365 === (4))){
var inst_46335 = (state_46364[(7)]);
var inst_46343 = cljs.core.first(inst_46335);
var state_46364__$1 = state_46364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46364__$1,(7),ch,inst_46343);
} else {
if((state_val_46365 === (13))){
var inst_46357 = (state_46364[(2)]);
var state_46364__$1 = state_46364;
var statearr_46374_48842 = state_46364__$1;
(statearr_46374_48842[(2)] = inst_46357);

(statearr_46374_48842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46365 === (6))){
var inst_46348 = (state_46364[(2)]);
var state_46364__$1 = state_46364;
if(cljs.core.truth_(inst_46348)){
var statearr_46375_48846 = state_46364__$1;
(statearr_46375_48846[(1)] = (8));

} else {
var statearr_46376_48847 = state_46364__$1;
(statearr_46376_48847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46365 === (3))){
var inst_46361 = (state_46364[(2)]);
var state_46364__$1 = state_46364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46364__$1,inst_46361);
} else {
if((state_val_46365 === (12))){
var state_46364__$1 = state_46364;
var statearr_46377_48852 = state_46364__$1;
(statearr_46377_48852[(2)] = null);

(statearr_46377_48852[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46365 === (2))){
var inst_46335 = (state_46364[(7)]);
var state_46364__$1 = state_46364;
if(cljs.core.truth_(inst_46335)){
var statearr_46381_48854 = state_46364__$1;
(statearr_46381_48854[(1)] = (4));

} else {
var statearr_46382_48855 = state_46364__$1;
(statearr_46382_48855[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46365 === (11))){
var inst_46354 = cljs.core.async.close_BANG_(ch);
var state_46364__$1 = state_46364;
var statearr_46384_48858 = state_46364__$1;
(statearr_46384_48858[(2)] = inst_46354);

(statearr_46384_48858[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46365 === (9))){
var state_46364__$1 = state_46364;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46386_48860 = state_46364__$1;
(statearr_46386_48860[(1)] = (11));

} else {
var statearr_46387_48861 = state_46364__$1;
(statearr_46387_48861[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46365 === (5))){
var inst_46335 = (state_46364[(7)]);
var state_46364__$1 = state_46364;
var statearr_46390_48862 = state_46364__$1;
(statearr_46390_48862[(2)] = inst_46335);

(statearr_46390_48862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46365 === (10))){
var inst_46359 = (state_46364[(2)]);
var state_46364__$1 = state_46364;
var statearr_46395_48865 = state_46364__$1;
(statearr_46395_48865[(2)] = inst_46359);

(statearr_46395_48865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46365 === (8))){
var inst_46335 = (state_46364[(7)]);
var inst_46350 = cljs.core.next(inst_46335);
var inst_46335__$1 = inst_46350;
var state_46364__$1 = (function (){var statearr_46396 = state_46364;
(statearr_46396[(7)] = inst_46335__$1);

return statearr_46396;
})();
var statearr_46399_48869 = state_46364__$1;
(statearr_46399_48869[(2)] = null);

(statearr_46399_48869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45217__auto__ = null;
var cljs$core$async$state_machine__45217__auto____0 = (function (){
var statearr_46403 = [null,null,null,null,null,null,null,null];
(statearr_46403[(0)] = cljs$core$async$state_machine__45217__auto__);

(statearr_46403[(1)] = (1));

return statearr_46403;
});
var cljs$core$async$state_machine__45217__auto____1 = (function (state_46364){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_46364);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e46405){var ex__45220__auto__ = e46405;
var statearr_46407_48875 = state_46364;
(statearr_46407_48875[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_46364[(4)]))){
var statearr_46408_48876 = state_46364;
(statearr_46408_48876[(1)] = cljs.core.first((state_46364[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48879 = state_46364;
state_46364 = G__48879;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$state_machine__45217__auto__ = function(state_46364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45217__auto____1.call(this,state_46364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45217__auto____0;
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45217__auto____1;
return cljs$core$async$state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_46410 = f__45437__auto__();
(statearr_46410[(6)] = c__45436__auto__);

return statearr_46410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));

return c__45436__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46425 = arguments.length;
switch (G__46425) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_48888 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_48888(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_48898 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_48898(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_48909 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_48909(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_48917 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_48917(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46516 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46516 = (function (ch,cs,meta46517){
this.ch = ch;
this.cs = cs;
this.meta46517 = meta46517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46518,meta46517__$1){
var self__ = this;
var _46518__$1 = this;
return (new cljs.core.async.t_cljs$core$async46516(self__.ch,self__.cs,meta46517__$1));
}));

(cljs.core.async.t_cljs$core$async46516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46518){
var self__ = this;
var _46518__$1 = this;
return self__.meta46517;
}));

(cljs.core.async.t_cljs$core$async46516.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46516.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46516.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46516.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46516.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46516.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46517","meta46517",-1054196188,null)], null);
}));

(cljs.core.async.t_cljs$core$async46516.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46516");

(cljs.core.async.t_cljs$core$async46516.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46516");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46516.
 */
cljs.core.async.__GT_t_cljs$core$async46516 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46516(ch__$1,cs__$1,meta46517){
return (new cljs.core.async.t_cljs$core$async46516(ch__$1,cs__$1,meta46517));
});

}

return (new cljs.core.async.t_cljs$core$async46516(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__45436__auto___48933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_46693){
var state_val_46694 = (state_46693[(1)]);
if((state_val_46694 === (7))){
var inst_46683 = (state_46693[(2)]);
var state_46693__$1 = state_46693;
var statearr_46701_48935 = state_46693__$1;
(statearr_46701_48935[(2)] = inst_46683);

(statearr_46701_48935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (20))){
var inst_46582 = (state_46693[(7)]);
var inst_46596 = cljs.core.first(inst_46582);
var inst_46597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46596,(0),null);
var inst_46598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46596,(1),null);
var state_46693__$1 = (function (){var statearr_46707 = state_46693;
(statearr_46707[(8)] = inst_46597);

return statearr_46707;
})();
if(cljs.core.truth_(inst_46598)){
var statearr_46708_48940 = state_46693__$1;
(statearr_46708_48940[(1)] = (22));

} else {
var statearr_46709_48942 = state_46693__$1;
(statearr_46709_48942[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (27))){
var inst_46629 = (state_46693[(9)]);
var inst_46631 = (state_46693[(10)]);
var inst_46545 = (state_46693[(11)]);
var inst_46636 = (state_46693[(12)]);
var inst_46636__$1 = cljs.core._nth(inst_46629,inst_46631);
var inst_46637 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46636__$1,inst_46545,done);
var state_46693__$1 = (function (){var statearr_46711 = state_46693;
(statearr_46711[(12)] = inst_46636__$1);

return statearr_46711;
})();
if(cljs.core.truth_(inst_46637)){
var statearr_46712_48950 = state_46693__$1;
(statearr_46712_48950[(1)] = (30));

} else {
var statearr_46713_48951 = state_46693__$1;
(statearr_46713_48951[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (1))){
var state_46693__$1 = state_46693;
var statearr_46715_48952 = state_46693__$1;
(statearr_46715_48952[(2)] = null);

(statearr_46715_48952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (24))){
var inst_46582 = (state_46693[(7)]);
var inst_46605 = (state_46693[(2)]);
var inst_46606 = cljs.core.next(inst_46582);
var inst_46558 = inst_46606;
var inst_46559 = null;
var inst_46560 = (0);
var inst_46561 = (0);
var state_46693__$1 = (function (){var statearr_46716 = state_46693;
(statearr_46716[(13)] = inst_46605);

(statearr_46716[(14)] = inst_46561);

(statearr_46716[(15)] = inst_46560);

(statearr_46716[(16)] = inst_46559);

(statearr_46716[(17)] = inst_46558);

return statearr_46716;
})();
var statearr_46717_48955 = state_46693__$1;
(statearr_46717_48955[(2)] = null);

(statearr_46717_48955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (39))){
var state_46693__$1 = state_46693;
var statearr_46724_48963 = state_46693__$1;
(statearr_46724_48963[(2)] = null);

(statearr_46724_48963[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (4))){
var inst_46545 = (state_46693[(11)]);
var inst_46545__$1 = (state_46693[(2)]);
var inst_46546 = (inst_46545__$1 == null);
var state_46693__$1 = (function (){var statearr_46734 = state_46693;
(statearr_46734[(11)] = inst_46545__$1);

return statearr_46734;
})();
if(cljs.core.truth_(inst_46546)){
var statearr_46735_48968 = state_46693__$1;
(statearr_46735_48968[(1)] = (5));

} else {
var statearr_46736_48969 = state_46693__$1;
(statearr_46736_48969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (15))){
var inst_46561 = (state_46693[(14)]);
var inst_46560 = (state_46693[(15)]);
var inst_46559 = (state_46693[(16)]);
var inst_46558 = (state_46693[(17)]);
var inst_46578 = (state_46693[(2)]);
var inst_46579 = (inst_46561 + (1));
var tmp46720 = inst_46560;
var tmp46721 = inst_46559;
var tmp46722 = inst_46558;
var inst_46558__$1 = tmp46722;
var inst_46559__$1 = tmp46721;
var inst_46560__$1 = tmp46720;
var inst_46561__$1 = inst_46579;
var state_46693__$1 = (function (){var statearr_46739 = state_46693;
(statearr_46739[(14)] = inst_46561__$1);

(statearr_46739[(15)] = inst_46560__$1);

(statearr_46739[(18)] = inst_46578);

(statearr_46739[(16)] = inst_46559__$1);

(statearr_46739[(17)] = inst_46558__$1);

return statearr_46739;
})();
var statearr_46744_48978 = state_46693__$1;
(statearr_46744_48978[(2)] = null);

(statearr_46744_48978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (21))){
var inst_46609 = (state_46693[(2)]);
var state_46693__$1 = state_46693;
var statearr_46748_48982 = state_46693__$1;
(statearr_46748_48982[(2)] = inst_46609);

(statearr_46748_48982[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (31))){
var inst_46636 = (state_46693[(12)]);
var inst_46640 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46636);
var state_46693__$1 = state_46693;
var statearr_46752_48987 = state_46693__$1;
(statearr_46752_48987[(2)] = inst_46640);

(statearr_46752_48987[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (32))){
var inst_46629 = (state_46693[(9)]);
var inst_46631 = (state_46693[(10)]);
var inst_46630 = (state_46693[(19)]);
var inst_46628 = (state_46693[(20)]);
var inst_46642 = (state_46693[(2)]);
var inst_46643 = (inst_46631 + (1));
var tmp46745 = inst_46629;
var tmp46746 = inst_46630;
var tmp46747 = inst_46628;
var inst_46628__$1 = tmp46747;
var inst_46629__$1 = tmp46745;
var inst_46630__$1 = tmp46746;
var inst_46631__$1 = inst_46643;
var state_46693__$1 = (function (){var statearr_46754 = state_46693;
(statearr_46754[(9)] = inst_46629__$1);

(statearr_46754[(10)] = inst_46631__$1);

(statearr_46754[(19)] = inst_46630__$1);

(statearr_46754[(20)] = inst_46628__$1);

(statearr_46754[(21)] = inst_46642);

return statearr_46754;
})();
var statearr_46755_48994 = state_46693__$1;
(statearr_46755_48994[(2)] = null);

(statearr_46755_48994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (40))){
var inst_46655 = (state_46693[(22)]);
var inst_46659 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46655);
var state_46693__$1 = state_46693;
var statearr_46756_48995 = state_46693__$1;
(statearr_46756_48995[(2)] = inst_46659);

(statearr_46756_48995[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (33))){
var inst_46646 = (state_46693[(23)]);
var inst_46648 = cljs.core.chunked_seq_QMARK_(inst_46646);
var state_46693__$1 = state_46693;
if(inst_46648){
var statearr_46757_48997 = state_46693__$1;
(statearr_46757_48997[(1)] = (36));

} else {
var statearr_46758_48998 = state_46693__$1;
(statearr_46758_48998[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (13))){
var inst_46571 = (state_46693[(24)]);
var inst_46575 = cljs.core.async.close_BANG_(inst_46571);
var state_46693__$1 = state_46693;
var statearr_46763_49002 = state_46693__$1;
(statearr_46763_49002[(2)] = inst_46575);

(statearr_46763_49002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (22))){
var inst_46597 = (state_46693[(8)]);
var inst_46602 = cljs.core.async.close_BANG_(inst_46597);
var state_46693__$1 = state_46693;
var statearr_46769_49004 = state_46693__$1;
(statearr_46769_49004[(2)] = inst_46602);

(statearr_46769_49004[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (36))){
var inst_46646 = (state_46693[(23)]);
var inst_46650 = cljs.core.chunk_first(inst_46646);
var inst_46651 = cljs.core.chunk_rest(inst_46646);
var inst_46652 = cljs.core.count(inst_46650);
var inst_46628 = inst_46651;
var inst_46629 = inst_46650;
var inst_46630 = inst_46652;
var inst_46631 = (0);
var state_46693__$1 = (function (){var statearr_46778 = state_46693;
(statearr_46778[(9)] = inst_46629);

(statearr_46778[(10)] = inst_46631);

(statearr_46778[(19)] = inst_46630);

(statearr_46778[(20)] = inst_46628);

return statearr_46778;
})();
var statearr_46779_49006 = state_46693__$1;
(statearr_46779_49006[(2)] = null);

(statearr_46779_49006[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (41))){
var inst_46646 = (state_46693[(23)]);
var inst_46661 = (state_46693[(2)]);
var inst_46663 = cljs.core.next(inst_46646);
var inst_46628 = inst_46663;
var inst_46629 = null;
var inst_46630 = (0);
var inst_46631 = (0);
var state_46693__$1 = (function (){var statearr_46784 = state_46693;
(statearr_46784[(9)] = inst_46629);

(statearr_46784[(10)] = inst_46631);

(statearr_46784[(19)] = inst_46630);

(statearr_46784[(20)] = inst_46628);

(statearr_46784[(25)] = inst_46661);

return statearr_46784;
})();
var statearr_46785_49015 = state_46693__$1;
(statearr_46785_49015[(2)] = null);

(statearr_46785_49015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (43))){
var state_46693__$1 = state_46693;
var statearr_46786_49017 = state_46693__$1;
(statearr_46786_49017[(2)] = null);

(statearr_46786_49017[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (29))){
var inst_46671 = (state_46693[(2)]);
var state_46693__$1 = state_46693;
var statearr_46787_49020 = state_46693__$1;
(statearr_46787_49020[(2)] = inst_46671);

(statearr_46787_49020[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (44))){
var inst_46680 = (state_46693[(2)]);
var state_46693__$1 = (function (){var statearr_46792 = state_46693;
(statearr_46792[(26)] = inst_46680);

return statearr_46792;
})();
var statearr_46793_49023 = state_46693__$1;
(statearr_46793_49023[(2)] = null);

(statearr_46793_49023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (6))){
var inst_46620 = (state_46693[(27)]);
var inst_46619 = cljs.core.deref(cs);
var inst_46620__$1 = cljs.core.keys(inst_46619);
var inst_46621 = cljs.core.count(inst_46620__$1);
var inst_46622 = cljs.core.reset_BANG_(dctr,inst_46621);
var inst_46627 = cljs.core.seq(inst_46620__$1);
var inst_46628 = inst_46627;
var inst_46629 = null;
var inst_46630 = (0);
var inst_46631 = (0);
var state_46693__$1 = (function (){var statearr_46796 = state_46693;
(statearr_46796[(28)] = inst_46622);

(statearr_46796[(9)] = inst_46629);

(statearr_46796[(10)] = inst_46631);

(statearr_46796[(19)] = inst_46630);

(statearr_46796[(20)] = inst_46628);

(statearr_46796[(27)] = inst_46620__$1);

return statearr_46796;
})();
var statearr_46799_49043 = state_46693__$1;
(statearr_46799_49043[(2)] = null);

(statearr_46799_49043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (28))){
var inst_46628 = (state_46693[(20)]);
var inst_46646 = (state_46693[(23)]);
var inst_46646__$1 = cljs.core.seq(inst_46628);
var state_46693__$1 = (function (){var statearr_46800 = state_46693;
(statearr_46800[(23)] = inst_46646__$1);

return statearr_46800;
})();
if(inst_46646__$1){
var statearr_46801_49048 = state_46693__$1;
(statearr_46801_49048[(1)] = (33));

} else {
var statearr_46802_49049 = state_46693__$1;
(statearr_46802_49049[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (25))){
var inst_46631 = (state_46693[(10)]);
var inst_46630 = (state_46693[(19)]);
var inst_46633 = (inst_46631 < inst_46630);
var inst_46634 = inst_46633;
var state_46693__$1 = state_46693;
if(cljs.core.truth_(inst_46634)){
var statearr_46803_49051 = state_46693__$1;
(statearr_46803_49051[(1)] = (27));

} else {
var statearr_46804_49052 = state_46693__$1;
(statearr_46804_49052[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (34))){
var state_46693__$1 = state_46693;
var statearr_46805_49054 = state_46693__$1;
(statearr_46805_49054[(2)] = null);

(statearr_46805_49054[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (17))){
var state_46693__$1 = state_46693;
var statearr_46806_49057 = state_46693__$1;
(statearr_46806_49057[(2)] = null);

(statearr_46806_49057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (3))){
var inst_46685 = (state_46693[(2)]);
var state_46693__$1 = state_46693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46693__$1,inst_46685);
} else {
if((state_val_46694 === (12))){
var inst_46614 = (state_46693[(2)]);
var state_46693__$1 = state_46693;
var statearr_46807_49067 = state_46693__$1;
(statearr_46807_49067[(2)] = inst_46614);

(statearr_46807_49067[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (2))){
var state_46693__$1 = state_46693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46693__$1,(4),ch);
} else {
if((state_val_46694 === (23))){
var state_46693__$1 = state_46693;
var statearr_46812_49076 = state_46693__$1;
(statearr_46812_49076[(2)] = null);

(statearr_46812_49076[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (35))){
var inst_46669 = (state_46693[(2)]);
var state_46693__$1 = state_46693;
var statearr_46819_49077 = state_46693__$1;
(statearr_46819_49077[(2)] = inst_46669);

(statearr_46819_49077[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (19))){
var inst_46582 = (state_46693[(7)]);
var inst_46588 = cljs.core.chunk_first(inst_46582);
var inst_46589 = cljs.core.chunk_rest(inst_46582);
var inst_46590 = cljs.core.count(inst_46588);
var inst_46558 = inst_46589;
var inst_46559 = inst_46588;
var inst_46560 = inst_46590;
var inst_46561 = (0);
var state_46693__$1 = (function (){var statearr_46822 = state_46693;
(statearr_46822[(14)] = inst_46561);

(statearr_46822[(15)] = inst_46560);

(statearr_46822[(16)] = inst_46559);

(statearr_46822[(17)] = inst_46558);

return statearr_46822;
})();
var statearr_46824_49087 = state_46693__$1;
(statearr_46824_49087[(2)] = null);

(statearr_46824_49087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (11))){
var inst_46582 = (state_46693[(7)]);
var inst_46558 = (state_46693[(17)]);
var inst_46582__$1 = cljs.core.seq(inst_46558);
var state_46693__$1 = (function (){var statearr_46825 = state_46693;
(statearr_46825[(7)] = inst_46582__$1);

return statearr_46825;
})();
if(inst_46582__$1){
var statearr_46826_49091 = state_46693__$1;
(statearr_46826_49091[(1)] = (16));

} else {
var statearr_46827_49092 = state_46693__$1;
(statearr_46827_49092[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (9))){
var inst_46616 = (state_46693[(2)]);
var state_46693__$1 = state_46693;
var statearr_46828_49097 = state_46693__$1;
(statearr_46828_49097[(2)] = inst_46616);

(statearr_46828_49097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (5))){
var inst_46552 = cljs.core.deref(cs);
var inst_46553 = cljs.core.seq(inst_46552);
var inst_46558 = inst_46553;
var inst_46559 = null;
var inst_46560 = (0);
var inst_46561 = (0);
var state_46693__$1 = (function (){var statearr_46829 = state_46693;
(statearr_46829[(14)] = inst_46561);

(statearr_46829[(15)] = inst_46560);

(statearr_46829[(16)] = inst_46559);

(statearr_46829[(17)] = inst_46558);

return statearr_46829;
})();
var statearr_46830_49101 = state_46693__$1;
(statearr_46830_49101[(2)] = null);

(statearr_46830_49101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (14))){
var state_46693__$1 = state_46693;
var statearr_46835_49102 = state_46693__$1;
(statearr_46835_49102[(2)] = null);

(statearr_46835_49102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (45))){
var inst_46677 = (state_46693[(2)]);
var state_46693__$1 = state_46693;
var statearr_46836_49105 = state_46693__$1;
(statearr_46836_49105[(2)] = inst_46677);

(statearr_46836_49105[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (26))){
var inst_46620 = (state_46693[(27)]);
var inst_46673 = (state_46693[(2)]);
var inst_46674 = cljs.core.seq(inst_46620);
var state_46693__$1 = (function (){var statearr_46837 = state_46693;
(statearr_46837[(29)] = inst_46673);

return statearr_46837;
})();
if(inst_46674){
var statearr_46838_49111 = state_46693__$1;
(statearr_46838_49111[(1)] = (42));

} else {
var statearr_46839_49112 = state_46693__$1;
(statearr_46839_49112[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (16))){
var inst_46582 = (state_46693[(7)]);
var inst_46585 = cljs.core.chunked_seq_QMARK_(inst_46582);
var state_46693__$1 = state_46693;
if(inst_46585){
var statearr_46846_49120 = state_46693__$1;
(statearr_46846_49120[(1)] = (19));

} else {
var statearr_46847_49121 = state_46693__$1;
(statearr_46847_49121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (38))){
var inst_46666 = (state_46693[(2)]);
var state_46693__$1 = state_46693;
var statearr_46850_49133 = state_46693__$1;
(statearr_46850_49133[(2)] = inst_46666);

(statearr_46850_49133[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (30))){
var state_46693__$1 = state_46693;
var statearr_46852_49141 = state_46693__$1;
(statearr_46852_49141[(2)] = null);

(statearr_46852_49141[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (10))){
var inst_46561 = (state_46693[(14)]);
var inst_46559 = (state_46693[(16)]);
var inst_46570 = cljs.core._nth(inst_46559,inst_46561);
var inst_46571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46570,(0),null);
var inst_46572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46570,(1),null);
var state_46693__$1 = (function (){var statearr_46853 = state_46693;
(statearr_46853[(24)] = inst_46571);

return statearr_46853;
})();
if(cljs.core.truth_(inst_46572)){
var statearr_46854_49145 = state_46693__$1;
(statearr_46854_49145[(1)] = (13));

} else {
var statearr_46855_49147 = state_46693__$1;
(statearr_46855_49147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (18))){
var inst_46612 = (state_46693[(2)]);
var state_46693__$1 = state_46693;
var statearr_46856_49150 = state_46693__$1;
(statearr_46856_49150[(2)] = inst_46612);

(statearr_46856_49150[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (42))){
var state_46693__$1 = state_46693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46693__$1,(45),dchan);
} else {
if((state_val_46694 === (37))){
var inst_46545 = (state_46693[(11)]);
var inst_46655 = (state_46693[(22)]);
var inst_46646 = (state_46693[(23)]);
var inst_46655__$1 = cljs.core.first(inst_46646);
var inst_46656 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46655__$1,inst_46545,done);
var state_46693__$1 = (function (){var statearr_46857 = state_46693;
(statearr_46857[(22)] = inst_46655__$1);

return statearr_46857;
})();
if(cljs.core.truth_(inst_46656)){
var statearr_46858_49155 = state_46693__$1;
(statearr_46858_49155[(1)] = (39));

} else {
var statearr_46859_49156 = state_46693__$1;
(statearr_46859_49156[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46694 === (8))){
var inst_46561 = (state_46693[(14)]);
var inst_46560 = (state_46693[(15)]);
var inst_46563 = (inst_46561 < inst_46560);
var inst_46564 = inst_46563;
var state_46693__$1 = state_46693;
if(cljs.core.truth_(inst_46564)){
var statearr_46862_49160 = state_46693__$1;
(statearr_46862_49160[(1)] = (10));

} else {
var statearr_46863_49161 = state_46693__$1;
(statearr_46863_49161[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__45217__auto__ = null;
var cljs$core$async$mult_$_state_machine__45217__auto____0 = (function (){
var statearr_46866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46866[(0)] = cljs$core$async$mult_$_state_machine__45217__auto__);

(statearr_46866[(1)] = (1));

return statearr_46866;
});
var cljs$core$async$mult_$_state_machine__45217__auto____1 = (function (state_46693){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_46693);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e46867){var ex__45220__auto__ = e46867;
var statearr_46868_49172 = state_46693;
(statearr_46868_49172[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_46693[(4)]))){
var statearr_46869_49174 = state_46693;
(statearr_46869_49174[(1)] = cljs.core.first((state_46693[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49180 = state_46693;
state_46693 = G__49180;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45217__auto__ = function(state_46693){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45217__auto____1.call(this,state_46693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45217__auto____0;
cljs$core$async$mult_$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45217__auto____1;
return cljs$core$async$mult_$_state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_46870 = f__45437__auto__();
(statearr_46870[(6)] = c__45436__auto___48933);

return statearr_46870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46876 = arguments.length;
switch (G__46876) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_49198 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_49198(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_49203 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_49203(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_49219 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_49219(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_49234 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_49234(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_49249 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_49249(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49267 = arguments.length;
var i__4737__auto___49268 = (0);
while(true){
if((i__4737__auto___49268 < len__4736__auto___49267)){
args__4742__auto__.push((arguments[i__4737__auto___49268]));

var G__49269 = (i__4737__auto___49268 + (1));
i__4737__auto___49268 = G__49269;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46914){
var map__46915 = p__46914;
var map__46915__$1 = (((((!((map__46915 == null))))?(((((map__46915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46915):map__46915);
var opts = map__46915__$1;
var statearr_46919_49288 = state;
(statearr_46919_49288[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46920_49289 = state;
(statearr_46920_49289[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_46922_49295 = state;
(statearr_46922_49295[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46907){
var G__46908 = cljs.core.first(seq46907);
var seq46907__$1 = cljs.core.next(seq46907);
var G__46909 = cljs.core.first(seq46907__$1);
var seq46907__$2 = cljs.core.next(seq46907__$1);
var G__46910 = cljs.core.first(seq46907__$2);
var seq46907__$3 = cljs.core.next(seq46907__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46908,G__46909,G__46910,seq46907__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46946 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46946 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46947){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46947 = meta46947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46948,meta46947__$1){
var self__ = this;
var _46948__$1 = this;
return (new cljs.core.async.t_cljs$core$async46946(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46947__$1));
}));

(cljs.core.async.t_cljs$core$async46946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46948){
var self__ = this;
var _46948__$1 = this;
return self__.meta46947;
}));

(cljs.core.async.t_cljs$core$async46946.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46946.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46946.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46946.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46946.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46946.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46946.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46946.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46947","meta46947",-1197977242,null)], null);
}));

(cljs.core.async.t_cljs$core$async46946.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46946");

(cljs.core.async.t_cljs$core$async46946.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46946");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46946.
 */
cljs.core.async.__GT_t_cljs$core$async46946 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46946(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46947){
return (new cljs.core.async.t_cljs$core$async46946(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46947));
});

}

return (new cljs.core.async.t_cljs$core$async46946(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45436__auto___49369 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_47072){
var state_val_47073 = (state_47072[(1)]);
if((state_val_47073 === (7))){
var inst_46984 = (state_47072[(2)]);
var state_47072__$1 = state_47072;
var statearr_47076_49381 = state_47072__$1;
(statearr_47076_49381[(2)] = inst_46984);

(statearr_47076_49381[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (20))){
var inst_46996 = (state_47072[(7)]);
var state_47072__$1 = state_47072;
var statearr_47077_49382 = state_47072__$1;
(statearr_47077_49382[(2)] = inst_46996);

(statearr_47077_49382[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (27))){
var state_47072__$1 = state_47072;
var statearr_47078_49386 = state_47072__$1;
(statearr_47078_49386[(2)] = null);

(statearr_47078_49386[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (1))){
var inst_46971 = (state_47072[(8)]);
var inst_46971__$1 = calc_state();
var inst_46973 = (inst_46971__$1 == null);
var inst_46974 = cljs.core.not(inst_46973);
var state_47072__$1 = (function (){var statearr_47079 = state_47072;
(statearr_47079[(8)] = inst_46971__$1);

return statearr_47079;
})();
if(inst_46974){
var statearr_47080_49394 = state_47072__$1;
(statearr_47080_49394[(1)] = (2));

} else {
var statearr_47081_49395 = state_47072__$1;
(statearr_47081_49395[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (24))){
var inst_47044 = (state_47072[(9)]);
var inst_47029 = (state_47072[(10)]);
var inst_47020 = (state_47072[(11)]);
var inst_47044__$1 = (inst_47020.cljs$core$IFn$_invoke$arity$1 ? inst_47020.cljs$core$IFn$_invoke$arity$1(inst_47029) : inst_47020.call(null,inst_47029));
var state_47072__$1 = (function (){var statearr_47082 = state_47072;
(statearr_47082[(9)] = inst_47044__$1);

return statearr_47082;
})();
if(cljs.core.truth_(inst_47044__$1)){
var statearr_47083_49411 = state_47072__$1;
(statearr_47083_49411[(1)] = (29));

} else {
var statearr_47084_49412 = state_47072__$1;
(statearr_47084_49412[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (4))){
var inst_46987 = (state_47072[(2)]);
var state_47072__$1 = state_47072;
if(cljs.core.truth_(inst_46987)){
var statearr_47085_49419 = state_47072__$1;
(statearr_47085_49419[(1)] = (8));

} else {
var statearr_47086_49422 = state_47072__$1;
(statearr_47086_49422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (15))){
var inst_47014 = (state_47072[(2)]);
var state_47072__$1 = state_47072;
if(cljs.core.truth_(inst_47014)){
var statearr_47087_49425 = state_47072__$1;
(statearr_47087_49425[(1)] = (19));

} else {
var statearr_47088_49427 = state_47072__$1;
(statearr_47088_49427[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (21))){
var inst_47019 = (state_47072[(12)]);
var inst_47019__$1 = (state_47072[(2)]);
var inst_47020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47019__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47019__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47019__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47072__$1 = (function (){var statearr_47089 = state_47072;
(statearr_47089[(13)] = inst_47021);

(statearr_47089[(11)] = inst_47020);

(statearr_47089[(12)] = inst_47019__$1);

return statearr_47089;
})();
return cljs.core.async.ioc_alts_BANG_(state_47072__$1,(22),inst_47022);
} else {
if((state_val_47073 === (31))){
var inst_47052 = (state_47072[(2)]);
var state_47072__$1 = state_47072;
if(cljs.core.truth_(inst_47052)){
var statearr_47092_49442 = state_47072__$1;
(statearr_47092_49442[(1)] = (32));

} else {
var statearr_47094_49446 = state_47072__$1;
(statearr_47094_49446[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (32))){
var inst_47028 = (state_47072[(14)]);
var state_47072__$1 = state_47072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47072__$1,(35),out,inst_47028);
} else {
if((state_val_47073 === (33))){
var inst_47019 = (state_47072[(12)]);
var inst_46996 = inst_47019;
var state_47072__$1 = (function (){var statearr_47096 = state_47072;
(statearr_47096[(7)] = inst_46996);

return statearr_47096;
})();
var statearr_47097_49454 = state_47072__$1;
(statearr_47097_49454[(2)] = null);

(statearr_47097_49454[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (13))){
var inst_46996 = (state_47072[(7)]);
var inst_47003 = inst_46996.cljs$lang$protocol_mask$partition0$;
var inst_47004 = (inst_47003 & (64));
var inst_47005 = inst_46996.cljs$core$ISeq$;
var inst_47006 = (cljs.core.PROTOCOL_SENTINEL === inst_47005);
var inst_47007 = ((inst_47004) || (inst_47006));
var state_47072__$1 = state_47072;
if(cljs.core.truth_(inst_47007)){
var statearr_47100_49469 = state_47072__$1;
(statearr_47100_49469[(1)] = (16));

} else {
var statearr_47102_49471 = state_47072__$1;
(statearr_47102_49471[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (22))){
var inst_47028 = (state_47072[(14)]);
var inst_47029 = (state_47072[(10)]);
var inst_47027 = (state_47072[(2)]);
var inst_47028__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47027,(0),null);
var inst_47029__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47027,(1),null);
var inst_47031 = (inst_47028__$1 == null);
var inst_47032 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47029__$1,change);
var inst_47033 = ((inst_47031) || (inst_47032));
var state_47072__$1 = (function (){var statearr_47107 = state_47072;
(statearr_47107[(14)] = inst_47028__$1);

(statearr_47107[(10)] = inst_47029__$1);

return statearr_47107;
})();
if(cljs.core.truth_(inst_47033)){
var statearr_47108_49477 = state_47072__$1;
(statearr_47108_49477[(1)] = (23));

} else {
var statearr_47109_49478 = state_47072__$1;
(statearr_47109_49478[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (36))){
var inst_47019 = (state_47072[(12)]);
var inst_46996 = inst_47019;
var state_47072__$1 = (function (){var statearr_47110 = state_47072;
(statearr_47110[(7)] = inst_46996);

return statearr_47110;
})();
var statearr_47111_49483 = state_47072__$1;
(statearr_47111_49483[(2)] = null);

(statearr_47111_49483[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (29))){
var inst_47044 = (state_47072[(9)]);
var state_47072__$1 = state_47072;
var statearr_47112_49485 = state_47072__$1;
(statearr_47112_49485[(2)] = inst_47044);

(statearr_47112_49485[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (6))){
var state_47072__$1 = state_47072;
var statearr_47113_49486 = state_47072__$1;
(statearr_47113_49486[(2)] = false);

(statearr_47113_49486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (28))){
var inst_47040 = (state_47072[(2)]);
var inst_47041 = calc_state();
var inst_46996 = inst_47041;
var state_47072__$1 = (function (){var statearr_47114 = state_47072;
(statearr_47114[(15)] = inst_47040);

(statearr_47114[(7)] = inst_46996);

return statearr_47114;
})();
var statearr_47115_49497 = state_47072__$1;
(statearr_47115_49497[(2)] = null);

(statearr_47115_49497[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (25))){
var inst_47067 = (state_47072[(2)]);
var state_47072__$1 = state_47072;
var statearr_47117_49499 = state_47072__$1;
(statearr_47117_49499[(2)] = inst_47067);

(statearr_47117_49499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (34))){
var inst_47065 = (state_47072[(2)]);
var state_47072__$1 = state_47072;
var statearr_47118_49502 = state_47072__$1;
(statearr_47118_49502[(2)] = inst_47065);

(statearr_47118_49502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (17))){
var state_47072__$1 = state_47072;
var statearr_47120_49505 = state_47072__$1;
(statearr_47120_49505[(2)] = false);

(statearr_47120_49505[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (3))){
var state_47072__$1 = state_47072;
var statearr_47122_49508 = state_47072__$1;
(statearr_47122_49508[(2)] = false);

(statearr_47122_49508[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (12))){
var inst_47069 = (state_47072[(2)]);
var state_47072__$1 = state_47072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47072__$1,inst_47069);
} else {
if((state_val_47073 === (2))){
var inst_46971 = (state_47072[(8)]);
var inst_46976 = inst_46971.cljs$lang$protocol_mask$partition0$;
var inst_46977 = (inst_46976 & (64));
var inst_46978 = inst_46971.cljs$core$ISeq$;
var inst_46979 = (cljs.core.PROTOCOL_SENTINEL === inst_46978);
var inst_46980 = ((inst_46977) || (inst_46979));
var state_47072__$1 = state_47072;
if(cljs.core.truth_(inst_46980)){
var statearr_47127_49513 = state_47072__$1;
(statearr_47127_49513[(1)] = (5));

} else {
var statearr_47128_49514 = state_47072__$1;
(statearr_47128_49514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (23))){
var inst_47028 = (state_47072[(14)]);
var inst_47035 = (inst_47028 == null);
var state_47072__$1 = state_47072;
if(cljs.core.truth_(inst_47035)){
var statearr_47130_49525 = state_47072__$1;
(statearr_47130_49525[(1)] = (26));

} else {
var statearr_47131_49526 = state_47072__$1;
(statearr_47131_49526[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (35))){
var inst_47055 = (state_47072[(2)]);
var state_47072__$1 = state_47072;
if(cljs.core.truth_(inst_47055)){
var statearr_47132_49529 = state_47072__$1;
(statearr_47132_49529[(1)] = (36));

} else {
var statearr_47133_49530 = state_47072__$1;
(statearr_47133_49530[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (19))){
var inst_46996 = (state_47072[(7)]);
var inst_47016 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46996);
var state_47072__$1 = state_47072;
var statearr_47134_49535 = state_47072__$1;
(statearr_47134_49535[(2)] = inst_47016);

(statearr_47134_49535[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (11))){
var inst_46996 = (state_47072[(7)]);
var inst_47000 = (inst_46996 == null);
var inst_47001 = cljs.core.not(inst_47000);
var state_47072__$1 = state_47072;
if(inst_47001){
var statearr_47138_49536 = state_47072__$1;
(statearr_47138_49536[(1)] = (13));

} else {
var statearr_47139_49537 = state_47072__$1;
(statearr_47139_49537[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (9))){
var inst_46971 = (state_47072[(8)]);
var state_47072__$1 = state_47072;
var statearr_47141_49540 = state_47072__$1;
(statearr_47141_49540[(2)] = inst_46971);

(statearr_47141_49540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (5))){
var state_47072__$1 = state_47072;
var statearr_47143_49541 = state_47072__$1;
(statearr_47143_49541[(2)] = true);

(statearr_47143_49541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (14))){
var state_47072__$1 = state_47072;
var statearr_47145_49546 = state_47072__$1;
(statearr_47145_49546[(2)] = false);

(statearr_47145_49546[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (26))){
var inst_47029 = (state_47072[(10)]);
var inst_47037 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47029);
var state_47072__$1 = state_47072;
var statearr_47147_49547 = state_47072__$1;
(statearr_47147_49547[(2)] = inst_47037);

(statearr_47147_49547[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (16))){
var state_47072__$1 = state_47072;
var statearr_47148_49550 = state_47072__$1;
(statearr_47148_49550[(2)] = true);

(statearr_47148_49550[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (38))){
var inst_47061 = (state_47072[(2)]);
var state_47072__$1 = state_47072;
var statearr_47150_49554 = state_47072__$1;
(statearr_47150_49554[(2)] = inst_47061);

(statearr_47150_49554[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (30))){
var inst_47021 = (state_47072[(13)]);
var inst_47029 = (state_47072[(10)]);
var inst_47020 = (state_47072[(11)]);
var inst_47047 = cljs.core.empty_QMARK_(inst_47020);
var inst_47048 = (inst_47021.cljs$core$IFn$_invoke$arity$1 ? inst_47021.cljs$core$IFn$_invoke$arity$1(inst_47029) : inst_47021.call(null,inst_47029));
var inst_47049 = cljs.core.not(inst_47048);
var inst_47050 = ((inst_47047) && (inst_47049));
var state_47072__$1 = state_47072;
var statearr_47152_49563 = state_47072__$1;
(statearr_47152_49563[(2)] = inst_47050);

(statearr_47152_49563[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (10))){
var inst_46971 = (state_47072[(8)]);
var inst_46992 = (state_47072[(2)]);
var inst_46993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46992,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46992,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46992,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46996 = inst_46971;
var state_47072__$1 = (function (){var statearr_47154 = state_47072;
(statearr_47154[(16)] = inst_46994);

(statearr_47154[(7)] = inst_46996);

(statearr_47154[(17)] = inst_46995);

(statearr_47154[(18)] = inst_46993);

return statearr_47154;
})();
var statearr_47159_49571 = state_47072__$1;
(statearr_47159_49571[(2)] = null);

(statearr_47159_49571[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (18))){
var inst_47011 = (state_47072[(2)]);
var state_47072__$1 = state_47072;
var statearr_47163_49572 = state_47072__$1;
(statearr_47163_49572[(2)] = inst_47011);

(statearr_47163_49572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (37))){
var state_47072__$1 = state_47072;
var statearr_47167_49577 = state_47072__$1;
(statearr_47167_49577[(2)] = null);

(statearr_47167_49577[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (8))){
var inst_46971 = (state_47072[(8)]);
var inst_46989 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46971);
var state_47072__$1 = state_47072;
var statearr_47170_49583 = state_47072__$1;
(statearr_47170_49583[(2)] = inst_46989);

(statearr_47170_49583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__45217__auto__ = null;
var cljs$core$async$mix_$_state_machine__45217__auto____0 = (function (){
var statearr_47180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47180[(0)] = cljs$core$async$mix_$_state_machine__45217__auto__);

(statearr_47180[(1)] = (1));

return statearr_47180;
});
var cljs$core$async$mix_$_state_machine__45217__auto____1 = (function (state_47072){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_47072);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e47182){var ex__45220__auto__ = e47182;
var statearr_47183_49587 = state_47072;
(statearr_47183_49587[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_47072[(4)]))){
var statearr_47186_49588 = state_47072;
(statearr_47186_49588[(1)] = cljs.core.first((state_47072[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49595 = state_47072;
state_47072 = G__49595;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45217__auto__ = function(state_47072){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45217__auto____1.call(this,state_47072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45217__auto____0;
cljs$core$async$mix_$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45217__auto____1;
return cljs$core$async$mix_$_state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_47190 = f__45437__auto__();
(statearr_47190[(6)] = c__45436__auto___49369);

return statearr_47190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_49613 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_49613(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_49620 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_49620(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_49622 = (function() {
var G__49623 = null;
var G__49623__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__49623__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__49623 = function(p,v){
switch(arguments.length){
case 1:
return G__49623__1.call(this,p);
case 2:
return G__49623__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49623.cljs$core$IFn$_invoke$arity$1 = G__49623__1;
G__49623.cljs$core$IFn$_invoke$arity$2 = G__49623__2;
return G__49623;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47218 = arguments.length;
switch (G__47218) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49622(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49622(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__47231 = arguments.length;
switch (G__47231) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__47228_SHARP_){
if(cljs.core.truth_((p1__47228_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47228_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__47228_SHARP_.call(null,topic)))){
return p1__47228_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47228_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47237 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47237 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47238){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47238 = meta47238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47239,meta47238__$1){
var self__ = this;
var _47239__$1 = this;
return (new cljs.core.async.t_cljs$core$async47237(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47238__$1));
}));

(cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47239){
var self__ = this;
var _47239__$1 = this;
return self__.meta47238;
}));

(cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async47237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47238","meta47238",833963001,null)], null);
}));

(cljs.core.async.t_cljs$core$async47237.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47237");

(cljs.core.async.t_cljs$core$async47237.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47237");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47237.
 */
cljs.core.async.__GT_t_cljs$core$async47237 = (function cljs$core$async$__GT_t_cljs$core$async47237(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47238){
return (new cljs.core.async.t_cljs$core$async47237(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47238));
});

}

return (new cljs.core.async.t_cljs$core$async47237(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45436__auto___49658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_47331){
var state_val_47332 = (state_47331[(1)]);
if((state_val_47332 === (7))){
var inst_47326 = (state_47331[(2)]);
var state_47331__$1 = state_47331;
var statearr_47339_49659 = state_47331__$1;
(statearr_47339_49659[(2)] = inst_47326);

(statearr_47339_49659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (20))){
var state_47331__$1 = state_47331;
var statearr_47341_49673 = state_47331__$1;
(statearr_47341_49673[(2)] = null);

(statearr_47341_49673[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (1))){
var state_47331__$1 = state_47331;
var statearr_47342_49674 = state_47331__$1;
(statearr_47342_49674[(2)] = null);

(statearr_47342_49674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (24))){
var inst_47308 = (state_47331[(7)]);
var inst_47318 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47308);
var state_47331__$1 = state_47331;
var statearr_47346_49681 = state_47331__$1;
(statearr_47346_49681[(2)] = inst_47318);

(statearr_47346_49681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (4))){
var inst_47256 = (state_47331[(8)]);
var inst_47256__$1 = (state_47331[(2)]);
var inst_47260 = (inst_47256__$1 == null);
var state_47331__$1 = (function (){var statearr_47347 = state_47331;
(statearr_47347[(8)] = inst_47256__$1);

return statearr_47347;
})();
if(cljs.core.truth_(inst_47260)){
var statearr_47348_49682 = state_47331__$1;
(statearr_47348_49682[(1)] = (5));

} else {
var statearr_47350_49683 = state_47331__$1;
(statearr_47350_49683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (15))){
var inst_47302 = (state_47331[(2)]);
var state_47331__$1 = state_47331;
var statearr_47353_49688 = state_47331__$1;
(statearr_47353_49688[(2)] = inst_47302);

(statearr_47353_49688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (21))){
var inst_47323 = (state_47331[(2)]);
var state_47331__$1 = (function (){var statearr_47355 = state_47331;
(statearr_47355[(9)] = inst_47323);

return statearr_47355;
})();
var statearr_47356_49695 = state_47331__$1;
(statearr_47356_49695[(2)] = null);

(statearr_47356_49695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (13))){
var inst_47283 = (state_47331[(10)]);
var inst_47286 = cljs.core.chunked_seq_QMARK_(inst_47283);
var state_47331__$1 = state_47331;
if(inst_47286){
var statearr_47357_49696 = state_47331__$1;
(statearr_47357_49696[(1)] = (16));

} else {
var statearr_47359_49697 = state_47331__$1;
(statearr_47359_49697[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (22))){
var inst_47315 = (state_47331[(2)]);
var state_47331__$1 = state_47331;
if(cljs.core.truth_(inst_47315)){
var statearr_47360_49701 = state_47331__$1;
(statearr_47360_49701[(1)] = (23));

} else {
var statearr_47361_49702 = state_47331__$1;
(statearr_47361_49702[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (6))){
var inst_47310 = (state_47331[(11)]);
var inst_47308 = (state_47331[(7)]);
var inst_47256 = (state_47331[(8)]);
var inst_47308__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47256) : topic_fn.call(null,inst_47256));
var inst_47309 = cljs.core.deref(mults);
var inst_47310__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47309,inst_47308__$1);
var state_47331__$1 = (function (){var statearr_47362 = state_47331;
(statearr_47362[(11)] = inst_47310__$1);

(statearr_47362[(7)] = inst_47308__$1);

return statearr_47362;
})();
if(cljs.core.truth_(inst_47310__$1)){
var statearr_47363_49704 = state_47331__$1;
(statearr_47363_49704[(1)] = (19));

} else {
var statearr_47365_49705 = state_47331__$1;
(statearr_47365_49705[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (25))){
var inst_47320 = (state_47331[(2)]);
var state_47331__$1 = state_47331;
var statearr_47366_49706 = state_47331__$1;
(statearr_47366_49706[(2)] = inst_47320);

(statearr_47366_49706[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (17))){
var inst_47283 = (state_47331[(10)]);
var inst_47293 = cljs.core.first(inst_47283);
var inst_47294 = cljs.core.async.muxch_STAR_(inst_47293);
var inst_47295 = cljs.core.async.close_BANG_(inst_47294);
var inst_47296 = cljs.core.next(inst_47283);
var inst_47269 = inst_47296;
var inst_47270 = null;
var inst_47271 = (0);
var inst_47272 = (0);
var state_47331__$1 = (function (){var statearr_47367 = state_47331;
(statearr_47367[(12)] = inst_47271);

(statearr_47367[(13)] = inst_47295);

(statearr_47367[(14)] = inst_47272);

(statearr_47367[(15)] = inst_47270);

(statearr_47367[(16)] = inst_47269);

return statearr_47367;
})();
var statearr_47371_49711 = state_47331__$1;
(statearr_47371_49711[(2)] = null);

(statearr_47371_49711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (3))){
var inst_47328 = (state_47331[(2)]);
var state_47331__$1 = state_47331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47331__$1,inst_47328);
} else {
if((state_val_47332 === (12))){
var inst_47304 = (state_47331[(2)]);
var state_47331__$1 = state_47331;
var statearr_47372_49713 = state_47331__$1;
(statearr_47372_49713[(2)] = inst_47304);

(statearr_47372_49713[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (2))){
var state_47331__$1 = state_47331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47331__$1,(4),ch);
} else {
if((state_val_47332 === (23))){
var state_47331__$1 = state_47331;
var statearr_47376_49714 = state_47331__$1;
(statearr_47376_49714[(2)] = null);

(statearr_47376_49714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (19))){
var inst_47310 = (state_47331[(11)]);
var inst_47256 = (state_47331[(8)]);
var inst_47313 = cljs.core.async.muxch_STAR_(inst_47310);
var state_47331__$1 = state_47331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47331__$1,(22),inst_47313,inst_47256);
} else {
if((state_val_47332 === (11))){
var inst_47283 = (state_47331[(10)]);
var inst_47269 = (state_47331[(16)]);
var inst_47283__$1 = cljs.core.seq(inst_47269);
var state_47331__$1 = (function (){var statearr_47379 = state_47331;
(statearr_47379[(10)] = inst_47283__$1);

return statearr_47379;
})();
if(inst_47283__$1){
var statearr_47388_49718 = state_47331__$1;
(statearr_47388_49718[(1)] = (13));

} else {
var statearr_47389_49722 = state_47331__$1;
(statearr_47389_49722[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (9))){
var inst_47306 = (state_47331[(2)]);
var state_47331__$1 = state_47331;
var statearr_47390_49723 = state_47331__$1;
(statearr_47390_49723[(2)] = inst_47306);

(statearr_47390_49723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (5))){
var inst_47266 = cljs.core.deref(mults);
var inst_47267 = cljs.core.vals(inst_47266);
var inst_47268 = cljs.core.seq(inst_47267);
var inst_47269 = inst_47268;
var inst_47270 = null;
var inst_47271 = (0);
var inst_47272 = (0);
var state_47331__$1 = (function (){var statearr_47396 = state_47331;
(statearr_47396[(12)] = inst_47271);

(statearr_47396[(14)] = inst_47272);

(statearr_47396[(15)] = inst_47270);

(statearr_47396[(16)] = inst_47269);

return statearr_47396;
})();
var statearr_47399_49725 = state_47331__$1;
(statearr_47399_49725[(2)] = null);

(statearr_47399_49725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (14))){
var state_47331__$1 = state_47331;
var statearr_47408_49727 = state_47331__$1;
(statearr_47408_49727[(2)] = null);

(statearr_47408_49727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (16))){
var inst_47283 = (state_47331[(10)]);
var inst_47288 = cljs.core.chunk_first(inst_47283);
var inst_47289 = cljs.core.chunk_rest(inst_47283);
var inst_47290 = cljs.core.count(inst_47288);
var inst_47269 = inst_47289;
var inst_47270 = inst_47288;
var inst_47271 = inst_47290;
var inst_47272 = (0);
var state_47331__$1 = (function (){var statearr_47416 = state_47331;
(statearr_47416[(12)] = inst_47271);

(statearr_47416[(14)] = inst_47272);

(statearr_47416[(15)] = inst_47270);

(statearr_47416[(16)] = inst_47269);

return statearr_47416;
})();
var statearr_47420_49731 = state_47331__$1;
(statearr_47420_49731[(2)] = null);

(statearr_47420_49731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (10))){
var inst_47271 = (state_47331[(12)]);
var inst_47272 = (state_47331[(14)]);
var inst_47270 = (state_47331[(15)]);
var inst_47269 = (state_47331[(16)]);
var inst_47277 = cljs.core._nth(inst_47270,inst_47272);
var inst_47278 = cljs.core.async.muxch_STAR_(inst_47277);
var inst_47279 = cljs.core.async.close_BANG_(inst_47278);
var inst_47280 = (inst_47272 + (1));
var tmp47401 = inst_47271;
var tmp47402 = inst_47270;
var tmp47403 = inst_47269;
var inst_47269__$1 = tmp47403;
var inst_47270__$1 = tmp47402;
var inst_47271__$1 = tmp47401;
var inst_47272__$1 = inst_47280;
var state_47331__$1 = (function (){var statearr_47421 = state_47331;
(statearr_47421[(12)] = inst_47271__$1);

(statearr_47421[(17)] = inst_47279);

(statearr_47421[(14)] = inst_47272__$1);

(statearr_47421[(15)] = inst_47270__$1);

(statearr_47421[(16)] = inst_47269__$1);

return statearr_47421;
})();
var statearr_47423_49745 = state_47331__$1;
(statearr_47423_49745[(2)] = null);

(statearr_47423_49745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (18))){
var inst_47299 = (state_47331[(2)]);
var state_47331__$1 = state_47331;
var statearr_47425_49746 = state_47331__$1;
(statearr_47425_49746[(2)] = inst_47299);

(statearr_47425_49746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (8))){
var inst_47271 = (state_47331[(12)]);
var inst_47272 = (state_47331[(14)]);
var inst_47274 = (inst_47272 < inst_47271);
var inst_47275 = inst_47274;
var state_47331__$1 = state_47331;
if(cljs.core.truth_(inst_47275)){
var statearr_47426_49747 = state_47331__$1;
(statearr_47426_49747[(1)] = (10));

} else {
var statearr_47427_49748 = state_47331__$1;
(statearr_47427_49748[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45217__auto__ = null;
var cljs$core$async$state_machine__45217__auto____0 = (function (){
var statearr_47428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47428[(0)] = cljs$core$async$state_machine__45217__auto__);

(statearr_47428[(1)] = (1));

return statearr_47428;
});
var cljs$core$async$state_machine__45217__auto____1 = (function (state_47331){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_47331);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e47429){var ex__45220__auto__ = e47429;
var statearr_47430_49751 = state_47331;
(statearr_47430_49751[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_47331[(4)]))){
var statearr_47431_49752 = state_47331;
(statearr_47431_49752[(1)] = cljs.core.first((state_47331[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49753 = state_47331;
state_47331 = G__49753;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$state_machine__45217__auto__ = function(state_47331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45217__auto____1.call(this,state_47331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45217__auto____0;
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45217__auto____1;
return cljs$core$async$state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_47436 = f__45437__auto__();
(statearr_47436[(6)] = c__45436__auto___49658);

return statearr_47436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__47443 = arguments.length;
switch (G__47443) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47450 = arguments.length;
switch (G__47450) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__47454 = arguments.length;
switch (G__47454) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__45436__auto___49776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_47503){
var state_val_47504 = (state_47503[(1)]);
if((state_val_47504 === (7))){
var state_47503__$1 = state_47503;
var statearr_47505_49777 = state_47503__$1;
(statearr_47505_49777[(2)] = null);

(statearr_47505_49777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47504 === (1))){
var state_47503__$1 = state_47503;
var statearr_47506_49779 = state_47503__$1;
(statearr_47506_49779[(2)] = null);

(statearr_47506_49779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47504 === (4))){
var inst_47462 = (state_47503[(7)]);
var inst_47461 = (state_47503[(8)]);
var inst_47464 = (inst_47462 < inst_47461);
var state_47503__$1 = state_47503;
if(cljs.core.truth_(inst_47464)){
var statearr_47509_49784 = state_47503__$1;
(statearr_47509_49784[(1)] = (6));

} else {
var statearr_47510_49785 = state_47503__$1;
(statearr_47510_49785[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47504 === (15))){
var inst_47488 = (state_47503[(9)]);
var inst_47493 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47488);
var state_47503__$1 = state_47503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47503__$1,(17),out,inst_47493);
} else {
if((state_val_47504 === (13))){
var inst_47488 = (state_47503[(9)]);
var inst_47488__$1 = (state_47503[(2)]);
var inst_47489 = cljs.core.some(cljs.core.nil_QMARK_,inst_47488__$1);
var state_47503__$1 = (function (){var statearr_47511 = state_47503;
(statearr_47511[(9)] = inst_47488__$1);

return statearr_47511;
})();
if(cljs.core.truth_(inst_47489)){
var statearr_47515_49786 = state_47503__$1;
(statearr_47515_49786[(1)] = (14));

} else {
var statearr_47516_49787 = state_47503__$1;
(statearr_47516_49787[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47504 === (6))){
var state_47503__$1 = state_47503;
var statearr_47517_49788 = state_47503__$1;
(statearr_47517_49788[(2)] = null);

(statearr_47517_49788[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47504 === (17))){
var inst_47495 = (state_47503[(2)]);
var state_47503__$1 = (function (){var statearr_47523 = state_47503;
(statearr_47523[(10)] = inst_47495);

return statearr_47523;
})();
var statearr_47524_49790 = state_47503__$1;
(statearr_47524_49790[(2)] = null);

(statearr_47524_49790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47504 === (3))){
var inst_47500 = (state_47503[(2)]);
var state_47503__$1 = state_47503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47503__$1,inst_47500);
} else {
if((state_val_47504 === (12))){
var _ = (function (){var statearr_47525 = state_47503;
(statearr_47525[(4)] = cljs.core.rest((state_47503[(4)])));

return statearr_47525;
})();
var state_47503__$1 = state_47503;
var ex47522 = (state_47503__$1[(2)]);
var statearr_47527_49793 = state_47503__$1;
(statearr_47527_49793[(5)] = ex47522);


if((ex47522 instanceof Object)){
var statearr_47528_49798 = state_47503__$1;
(statearr_47528_49798[(1)] = (11));

(statearr_47528_49798[(5)] = null);

} else {
throw ex47522;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47504 === (2))){
var inst_47460 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47461 = cnt;
var inst_47462 = (0);
var state_47503__$1 = (function (){var statearr_47531 = state_47503;
(statearr_47531[(11)] = inst_47460);

(statearr_47531[(7)] = inst_47462);

(statearr_47531[(8)] = inst_47461);

return statearr_47531;
})();
var statearr_47532_49806 = state_47503__$1;
(statearr_47532_49806[(2)] = null);

(statearr_47532_49806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47504 === (11))){
var inst_47467 = (state_47503[(2)]);
var inst_47468 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47503__$1 = (function (){var statearr_47533 = state_47503;
(statearr_47533[(12)] = inst_47467);

return statearr_47533;
})();
var statearr_47534_49811 = state_47503__$1;
(statearr_47534_49811[(2)] = inst_47468);

(statearr_47534_49811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47504 === (9))){
var inst_47462 = (state_47503[(7)]);
var _ = (function (){var statearr_47535 = state_47503;
(statearr_47535[(4)] = cljs.core.cons((12),(state_47503[(4)])));

return statearr_47535;
})();
var inst_47474 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47462) : chs__$1.call(null,inst_47462));
var inst_47475 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47462) : done.call(null,inst_47462));
var inst_47476 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47474,inst_47475);
var ___$1 = (function (){var statearr_47536 = state_47503;
(statearr_47536[(4)] = cljs.core.rest((state_47503[(4)])));

return statearr_47536;
})();
var state_47503__$1 = state_47503;
var statearr_47537_49862 = state_47503__$1;
(statearr_47537_49862[(2)] = inst_47476);

(statearr_47537_49862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47504 === (5))){
var inst_47486 = (state_47503[(2)]);
var state_47503__$1 = (function (){var statearr_47539 = state_47503;
(statearr_47539[(13)] = inst_47486);

return statearr_47539;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47503__$1,(13),dchan);
} else {
if((state_val_47504 === (14))){
var inst_47491 = cljs.core.async.close_BANG_(out);
var state_47503__$1 = state_47503;
var statearr_47540_49873 = state_47503__$1;
(statearr_47540_49873[(2)] = inst_47491);

(statearr_47540_49873[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47504 === (16))){
var inst_47498 = (state_47503[(2)]);
var state_47503__$1 = state_47503;
var statearr_47542_49879 = state_47503__$1;
(statearr_47542_49879[(2)] = inst_47498);

(statearr_47542_49879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47504 === (10))){
var inst_47462 = (state_47503[(7)]);
var inst_47479 = (state_47503[(2)]);
var inst_47480 = (inst_47462 + (1));
var inst_47462__$1 = inst_47480;
var state_47503__$1 = (function (){var statearr_47543 = state_47503;
(statearr_47543[(14)] = inst_47479);

(statearr_47543[(7)] = inst_47462__$1);

return statearr_47543;
})();
var statearr_47546_49885 = state_47503__$1;
(statearr_47546_49885[(2)] = null);

(statearr_47546_49885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47504 === (8))){
var inst_47484 = (state_47503[(2)]);
var state_47503__$1 = state_47503;
var statearr_47548_49887 = state_47503__$1;
(statearr_47548_49887[(2)] = inst_47484);

(statearr_47548_49887[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45217__auto__ = null;
var cljs$core$async$state_machine__45217__auto____0 = (function (){
var statearr_47549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47549[(0)] = cljs$core$async$state_machine__45217__auto__);

(statearr_47549[(1)] = (1));

return statearr_47549;
});
var cljs$core$async$state_machine__45217__auto____1 = (function (state_47503){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_47503);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e47550){var ex__45220__auto__ = e47550;
var statearr_47551_49891 = state_47503;
(statearr_47551_49891[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_47503[(4)]))){
var statearr_47553_49893 = state_47503;
(statearr_47553_49893[(1)] = cljs.core.first((state_47503[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49921 = state_47503;
state_47503 = G__49921;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$state_machine__45217__auto__ = function(state_47503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45217__auto____1.call(this,state_47503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45217__auto____0;
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45217__auto____1;
return cljs$core$async$state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_47554 = f__45437__auto__();
(statearr_47554[(6)] = c__45436__auto___49776);

return statearr_47554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47557 = arguments.length;
switch (G__47557) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45436__auto___49925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_47593){
var state_val_47594 = (state_47593[(1)]);
if((state_val_47594 === (7))){
var inst_47569 = (state_47593[(7)]);
var inst_47568 = (state_47593[(8)]);
var inst_47568__$1 = (state_47593[(2)]);
var inst_47569__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47568__$1,(0),null);
var inst_47570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47568__$1,(1),null);
var inst_47571 = (inst_47569__$1 == null);
var state_47593__$1 = (function (){var statearr_47607 = state_47593;
(statearr_47607[(7)] = inst_47569__$1);

(statearr_47607[(9)] = inst_47570);

(statearr_47607[(8)] = inst_47568__$1);

return statearr_47607;
})();
if(cljs.core.truth_(inst_47571)){
var statearr_47608_49928 = state_47593__$1;
(statearr_47608_49928[(1)] = (8));

} else {
var statearr_47609_49929 = state_47593__$1;
(statearr_47609_49929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (1))){
var inst_47558 = cljs.core.vec(chs);
var inst_47559 = inst_47558;
var state_47593__$1 = (function (){var statearr_47610 = state_47593;
(statearr_47610[(10)] = inst_47559);

return statearr_47610;
})();
var statearr_47611_49930 = state_47593__$1;
(statearr_47611_49930[(2)] = null);

(statearr_47611_49930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (4))){
var inst_47559 = (state_47593[(10)]);
var state_47593__$1 = state_47593;
return cljs.core.async.ioc_alts_BANG_(state_47593__$1,(7),inst_47559);
} else {
if((state_val_47594 === (6))){
var inst_47585 = (state_47593[(2)]);
var state_47593__$1 = state_47593;
var statearr_47614_49934 = state_47593__$1;
(statearr_47614_49934[(2)] = inst_47585);

(statearr_47614_49934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (3))){
var inst_47587 = (state_47593[(2)]);
var state_47593__$1 = state_47593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47593__$1,inst_47587);
} else {
if((state_val_47594 === (2))){
var inst_47559 = (state_47593[(10)]);
var inst_47561 = cljs.core.count(inst_47559);
var inst_47562 = (inst_47561 > (0));
var state_47593__$1 = state_47593;
if(cljs.core.truth_(inst_47562)){
var statearr_47616_49935 = state_47593__$1;
(statearr_47616_49935[(1)] = (4));

} else {
var statearr_47617_49936 = state_47593__$1;
(statearr_47617_49936[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (11))){
var inst_47559 = (state_47593[(10)]);
var inst_47578 = (state_47593[(2)]);
var tmp47615 = inst_47559;
var inst_47559__$1 = tmp47615;
var state_47593__$1 = (function (){var statearr_47621 = state_47593;
(statearr_47621[(10)] = inst_47559__$1);

(statearr_47621[(11)] = inst_47578);

return statearr_47621;
})();
var statearr_47622_49937 = state_47593__$1;
(statearr_47622_49937[(2)] = null);

(statearr_47622_49937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (9))){
var inst_47569 = (state_47593[(7)]);
var state_47593__$1 = state_47593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47593__$1,(11),out,inst_47569);
} else {
if((state_val_47594 === (5))){
var inst_47583 = cljs.core.async.close_BANG_(out);
var state_47593__$1 = state_47593;
var statearr_47627_49948 = state_47593__$1;
(statearr_47627_49948[(2)] = inst_47583);

(statearr_47627_49948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (10))){
var inst_47581 = (state_47593[(2)]);
var state_47593__$1 = state_47593;
var statearr_47628_49954 = state_47593__$1;
(statearr_47628_49954[(2)] = inst_47581);

(statearr_47628_49954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (8))){
var inst_47569 = (state_47593[(7)]);
var inst_47570 = (state_47593[(9)]);
var inst_47559 = (state_47593[(10)]);
var inst_47568 = (state_47593[(8)]);
var inst_47573 = (function (){var cs = inst_47559;
var vec__47564 = inst_47568;
var v = inst_47569;
var c = inst_47570;
return (function (p1__47555_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47555_SHARP_);
});
})();
var inst_47574 = cljs.core.filterv(inst_47573,inst_47559);
var inst_47559__$1 = inst_47574;
var state_47593__$1 = (function (){var statearr_47632 = state_47593;
(statearr_47632[(10)] = inst_47559__$1);

return statearr_47632;
})();
var statearr_47633_49960 = state_47593__$1;
(statearr_47633_49960[(2)] = null);

(statearr_47633_49960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45217__auto__ = null;
var cljs$core$async$state_machine__45217__auto____0 = (function (){
var statearr_47642 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47642[(0)] = cljs$core$async$state_machine__45217__auto__);

(statearr_47642[(1)] = (1));

return statearr_47642;
});
var cljs$core$async$state_machine__45217__auto____1 = (function (state_47593){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_47593);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e47643){var ex__45220__auto__ = e47643;
var statearr_47644_49962 = state_47593;
(statearr_47644_49962[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_47593[(4)]))){
var statearr_47645_49963 = state_47593;
(statearr_47645_49963[(1)] = cljs.core.first((state_47593[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49964 = state_47593;
state_47593 = G__49964;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$state_machine__45217__auto__ = function(state_47593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45217__auto____1.call(this,state_47593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45217__auto____0;
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45217__auto____1;
return cljs$core$async$state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_47646 = f__45437__auto__();
(statearr_47646[(6)] = c__45436__auto___49925);

return statearr_47646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47650 = arguments.length;
switch (G__47650) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45436__auto___49969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_47689){
var state_val_47690 = (state_47689[(1)]);
if((state_val_47690 === (7))){
var inst_47671 = (state_47689[(7)]);
var inst_47671__$1 = (state_47689[(2)]);
var inst_47672 = (inst_47671__$1 == null);
var inst_47673 = cljs.core.not(inst_47672);
var state_47689__$1 = (function (){var statearr_47698 = state_47689;
(statearr_47698[(7)] = inst_47671__$1);

return statearr_47698;
})();
if(inst_47673){
var statearr_47702_49973 = state_47689__$1;
(statearr_47702_49973[(1)] = (8));

} else {
var statearr_47703_49974 = state_47689__$1;
(statearr_47703_49974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47690 === (1))){
var inst_47663 = (0);
var state_47689__$1 = (function (){var statearr_47704 = state_47689;
(statearr_47704[(8)] = inst_47663);

return statearr_47704;
})();
var statearr_47705_49975 = state_47689__$1;
(statearr_47705_49975[(2)] = null);

(statearr_47705_49975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47690 === (4))){
var state_47689__$1 = state_47689;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47689__$1,(7),ch);
} else {
if((state_val_47690 === (6))){
var inst_47684 = (state_47689[(2)]);
var state_47689__$1 = state_47689;
var statearr_47707_49976 = state_47689__$1;
(statearr_47707_49976[(2)] = inst_47684);

(statearr_47707_49976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47690 === (3))){
var inst_47686 = (state_47689[(2)]);
var inst_47687 = cljs.core.async.close_BANG_(out);
var state_47689__$1 = (function (){var statearr_47708 = state_47689;
(statearr_47708[(9)] = inst_47686);

return statearr_47708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47689__$1,inst_47687);
} else {
if((state_val_47690 === (2))){
var inst_47663 = (state_47689[(8)]);
var inst_47666 = (inst_47663 < n);
var state_47689__$1 = state_47689;
if(cljs.core.truth_(inst_47666)){
var statearr_47709_49991 = state_47689__$1;
(statearr_47709_49991[(1)] = (4));

} else {
var statearr_47710_49993 = state_47689__$1;
(statearr_47710_49993[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47690 === (11))){
var inst_47663 = (state_47689[(8)]);
var inst_47676 = (state_47689[(2)]);
var inst_47677 = (inst_47663 + (1));
var inst_47663__$1 = inst_47677;
var state_47689__$1 = (function (){var statearr_47716 = state_47689;
(statearr_47716[(10)] = inst_47676);

(statearr_47716[(8)] = inst_47663__$1);

return statearr_47716;
})();
var statearr_47717_50005 = state_47689__$1;
(statearr_47717_50005[(2)] = null);

(statearr_47717_50005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47690 === (9))){
var state_47689__$1 = state_47689;
var statearr_47718_50006 = state_47689__$1;
(statearr_47718_50006[(2)] = null);

(statearr_47718_50006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47690 === (5))){
var state_47689__$1 = state_47689;
var statearr_47723_50007 = state_47689__$1;
(statearr_47723_50007[(2)] = null);

(statearr_47723_50007[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47690 === (10))){
var inst_47681 = (state_47689[(2)]);
var state_47689__$1 = state_47689;
var statearr_47724_50010 = state_47689__$1;
(statearr_47724_50010[(2)] = inst_47681);

(statearr_47724_50010[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47690 === (8))){
var inst_47671 = (state_47689[(7)]);
var state_47689__$1 = state_47689;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47689__$1,(11),out,inst_47671);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45217__auto__ = null;
var cljs$core$async$state_machine__45217__auto____0 = (function (){
var statearr_47725 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47725[(0)] = cljs$core$async$state_machine__45217__auto__);

(statearr_47725[(1)] = (1));

return statearr_47725;
});
var cljs$core$async$state_machine__45217__auto____1 = (function (state_47689){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_47689);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e47726){var ex__45220__auto__ = e47726;
var statearr_47727_50027 = state_47689;
(statearr_47727_50027[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_47689[(4)]))){
var statearr_47730_50032 = state_47689;
(statearr_47730_50032[(1)] = cljs.core.first((state_47689[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50038 = state_47689;
state_47689 = G__50038;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$state_machine__45217__auto__ = function(state_47689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45217__auto____1.call(this,state_47689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45217__auto____0;
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45217__auto____1;
return cljs$core$async$state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_47733 = f__45437__auto__();
(statearr_47733[(6)] = c__45436__auto___49969);

return statearr_47733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47741 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47741 = (function (f,ch,meta47742){
this.f = f;
this.ch = ch;
this.meta47742 = meta47742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47743,meta47742__$1){
var self__ = this;
var _47743__$1 = this;
return (new cljs.core.async.t_cljs$core$async47741(self__.f,self__.ch,meta47742__$1));
}));

(cljs.core.async.t_cljs$core$async47741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47743){
var self__ = this;
var _47743__$1 = this;
return self__.meta47742;
}));

(cljs.core.async.t_cljs$core$async47741.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47741.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47741.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47741.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47741.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47754 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47754 = (function (f,ch,meta47742,_,fn1,meta47755){
this.f = f;
this.ch = ch;
this.meta47742 = meta47742;
this._ = _;
this.fn1 = fn1;
this.meta47755 = meta47755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47756,meta47755__$1){
var self__ = this;
var _47756__$1 = this;
return (new cljs.core.async.t_cljs$core$async47754(self__.f,self__.ch,self__.meta47742,self__._,self__.fn1,meta47755__$1));
}));

(cljs.core.async.t_cljs$core$async47754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47756){
var self__ = this;
var _47756__$1 = this;
return self__.meta47755;
}));

(cljs.core.async.t_cljs$core$async47754.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47754.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47754.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47754.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47740_SHARP_){
var G__47762 = (((p1__47740_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47740_SHARP_) : self__.f.call(null,p1__47740_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47762) : f1.call(null,G__47762));
});
}));

(cljs.core.async.t_cljs$core$async47754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47742","meta47742",-76285270,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47741","cljs.core.async/t_cljs$core$async47741",-1895156668,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47755","meta47755",2028453659,null)], null);
}));

(cljs.core.async.t_cljs$core$async47754.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47754");

(cljs.core.async.t_cljs$core$async47754.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47754");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47754.
 */
cljs.core.async.__GT_t_cljs$core$async47754 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47754(f__$1,ch__$1,meta47742__$1,___$2,fn1__$1,meta47755){
return (new cljs.core.async.t_cljs$core$async47754(f__$1,ch__$1,meta47742__$1,___$2,fn1__$1,meta47755));
});

}

return (new cljs.core.async.t_cljs$core$async47754(self__.f,self__.ch,self__.meta47742,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47768 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47768) : self__.f.call(null,G__47768));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47741.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47741.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47742","meta47742",-76285270,null)], null);
}));

(cljs.core.async.t_cljs$core$async47741.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47741");

(cljs.core.async.t_cljs$core$async47741.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47741");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47741.
 */
cljs.core.async.__GT_t_cljs$core$async47741 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47741(f__$1,ch__$1,meta47742){
return (new cljs.core.async.t_cljs$core$async47741(f__$1,ch__$1,meta47742));
});

}

return (new cljs.core.async.t_cljs$core$async47741(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47781 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47781 = (function (f,ch,meta47782){
this.f = f;
this.ch = ch;
this.meta47782 = meta47782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47783,meta47782__$1){
var self__ = this;
var _47783__$1 = this;
return (new cljs.core.async.t_cljs$core$async47781(self__.f,self__.ch,meta47782__$1));
}));

(cljs.core.async.t_cljs$core$async47781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47783){
var self__ = this;
var _47783__$1 = this;
return self__.meta47782;
}));

(cljs.core.async.t_cljs$core$async47781.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47781.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47781.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47781.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47781.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47781.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47782","meta47782",1826544872,null)], null);
}));

(cljs.core.async.t_cljs$core$async47781.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47781");

(cljs.core.async.t_cljs$core$async47781.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47781");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47781.
 */
cljs.core.async.__GT_t_cljs$core$async47781 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47781(f__$1,ch__$1,meta47782){
return (new cljs.core.async.t_cljs$core$async47781(f__$1,ch__$1,meta47782));
});

}

return (new cljs.core.async.t_cljs$core$async47781(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47808 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47808 = (function (p,ch,meta47809){
this.p = p;
this.ch = ch;
this.meta47809 = meta47809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47810,meta47809__$1){
var self__ = this;
var _47810__$1 = this;
return (new cljs.core.async.t_cljs$core$async47808(self__.p,self__.ch,meta47809__$1));
}));

(cljs.core.async.t_cljs$core$async47808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47810){
var self__ = this;
var _47810__$1 = this;
return self__.meta47809;
}));

(cljs.core.async.t_cljs$core$async47808.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47808.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47808.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47808.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47808.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47808.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47808.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47809","meta47809",-331130715,null)], null);
}));

(cljs.core.async.t_cljs$core$async47808.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47808");

(cljs.core.async.t_cljs$core$async47808.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47808");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47808.
 */
cljs.core.async.__GT_t_cljs$core$async47808 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47808(p__$1,ch__$1,meta47809){
return (new cljs.core.async.t_cljs$core$async47808(p__$1,ch__$1,meta47809));
});

}

return (new cljs.core.async.t_cljs$core$async47808(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47834 = arguments.length;
switch (G__47834) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45436__auto___50175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_47870){
var state_val_47871 = (state_47870[(1)]);
if((state_val_47871 === (7))){
var inst_47866 = (state_47870[(2)]);
var state_47870__$1 = state_47870;
var statearr_47873_50176 = state_47870__$1;
(statearr_47873_50176[(2)] = inst_47866);

(statearr_47873_50176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47871 === (1))){
var state_47870__$1 = state_47870;
var statearr_47874_50177 = state_47870__$1;
(statearr_47874_50177[(2)] = null);

(statearr_47874_50177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47871 === (4))){
var inst_47852 = (state_47870[(7)]);
var inst_47852__$1 = (state_47870[(2)]);
var inst_47853 = (inst_47852__$1 == null);
var state_47870__$1 = (function (){var statearr_47877 = state_47870;
(statearr_47877[(7)] = inst_47852__$1);

return statearr_47877;
})();
if(cljs.core.truth_(inst_47853)){
var statearr_47878_50179 = state_47870__$1;
(statearr_47878_50179[(1)] = (5));

} else {
var statearr_47879_50180 = state_47870__$1;
(statearr_47879_50180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47871 === (6))){
var inst_47852 = (state_47870[(7)]);
var inst_47857 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47852) : p.call(null,inst_47852));
var state_47870__$1 = state_47870;
if(cljs.core.truth_(inst_47857)){
var statearr_47880_50181 = state_47870__$1;
(statearr_47880_50181[(1)] = (8));

} else {
var statearr_47881_50182 = state_47870__$1;
(statearr_47881_50182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47871 === (3))){
var inst_47868 = (state_47870[(2)]);
var state_47870__$1 = state_47870;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47870__$1,inst_47868);
} else {
if((state_val_47871 === (2))){
var state_47870__$1 = state_47870;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47870__$1,(4),ch);
} else {
if((state_val_47871 === (11))){
var inst_47860 = (state_47870[(2)]);
var state_47870__$1 = state_47870;
var statearr_47883_50196 = state_47870__$1;
(statearr_47883_50196[(2)] = inst_47860);

(statearr_47883_50196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47871 === (9))){
var state_47870__$1 = state_47870;
var statearr_47884_50207 = state_47870__$1;
(statearr_47884_50207[(2)] = null);

(statearr_47884_50207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47871 === (5))){
var inst_47855 = cljs.core.async.close_BANG_(out);
var state_47870__$1 = state_47870;
var statearr_47885_50212 = state_47870__$1;
(statearr_47885_50212[(2)] = inst_47855);

(statearr_47885_50212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47871 === (10))){
var inst_47863 = (state_47870[(2)]);
var state_47870__$1 = (function (){var statearr_47886 = state_47870;
(statearr_47886[(8)] = inst_47863);

return statearr_47886;
})();
var statearr_47887_50220 = state_47870__$1;
(statearr_47887_50220[(2)] = null);

(statearr_47887_50220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47871 === (8))){
var inst_47852 = (state_47870[(7)]);
var state_47870__$1 = state_47870;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47870__$1,(11),out,inst_47852);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45217__auto__ = null;
var cljs$core$async$state_machine__45217__auto____0 = (function (){
var statearr_47888 = [null,null,null,null,null,null,null,null,null];
(statearr_47888[(0)] = cljs$core$async$state_machine__45217__auto__);

(statearr_47888[(1)] = (1));

return statearr_47888;
});
var cljs$core$async$state_machine__45217__auto____1 = (function (state_47870){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_47870);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e47889){var ex__45220__auto__ = e47889;
var statearr_47890_50236 = state_47870;
(statearr_47890_50236[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_47870[(4)]))){
var statearr_47891_50237 = state_47870;
(statearr_47891_50237[(1)] = cljs.core.first((state_47870[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50246 = state_47870;
state_47870 = G__50246;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$state_machine__45217__auto__ = function(state_47870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45217__auto____1.call(this,state_47870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45217__auto____0;
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45217__auto____1;
return cljs$core$async$state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_47892 = f__45437__auto__();
(statearr_47892[(6)] = c__45436__auto___50175);

return statearr_47892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47895 = arguments.length;
switch (G__47895) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45436__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_47977){
var state_val_47978 = (state_47977[(1)]);
if((state_val_47978 === (7))){
var inst_47973 = (state_47977[(2)]);
var state_47977__$1 = state_47977;
var statearr_48009_50256 = state_47977__$1;
(statearr_48009_50256[(2)] = inst_47973);

(statearr_48009_50256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (20))){
var inst_47925 = (state_47977[(7)]);
var inst_47949 = (state_47977[(2)]);
var inst_47950 = cljs.core.next(inst_47925);
var inst_47911 = inst_47950;
var inst_47912 = null;
var inst_47913 = (0);
var inst_47914 = (0);
var state_47977__$1 = (function (){var statearr_48010 = state_47977;
(statearr_48010[(8)] = inst_47912);

(statearr_48010[(9)] = inst_47914);

(statearr_48010[(10)] = inst_47913);

(statearr_48010[(11)] = inst_47911);

(statearr_48010[(12)] = inst_47949);

return statearr_48010;
})();
var statearr_48011_50260 = state_47977__$1;
(statearr_48011_50260[(2)] = null);

(statearr_48011_50260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (1))){
var state_47977__$1 = state_47977;
var statearr_48012_50268 = state_47977__$1;
(statearr_48012_50268[(2)] = null);

(statearr_48012_50268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (4))){
var inst_47898 = (state_47977[(13)]);
var inst_47898__$1 = (state_47977[(2)]);
var inst_47899 = (inst_47898__$1 == null);
var state_47977__$1 = (function (){var statearr_48013 = state_47977;
(statearr_48013[(13)] = inst_47898__$1);

return statearr_48013;
})();
if(cljs.core.truth_(inst_47899)){
var statearr_48018_50269 = state_47977__$1;
(statearr_48018_50269[(1)] = (5));

} else {
var statearr_48021_50270 = state_47977__$1;
(statearr_48021_50270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (15))){
var state_47977__$1 = state_47977;
var statearr_48025_50273 = state_47977__$1;
(statearr_48025_50273[(2)] = null);

(statearr_48025_50273[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (21))){
var state_47977__$1 = state_47977;
var statearr_48027_50275 = state_47977__$1;
(statearr_48027_50275[(2)] = null);

(statearr_48027_50275[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (13))){
var inst_47912 = (state_47977[(8)]);
var inst_47914 = (state_47977[(9)]);
var inst_47913 = (state_47977[(10)]);
var inst_47911 = (state_47977[(11)]);
var inst_47921 = (state_47977[(2)]);
var inst_47922 = (inst_47914 + (1));
var tmp48022 = inst_47912;
var tmp48023 = inst_47913;
var tmp48024 = inst_47911;
var inst_47911__$1 = tmp48024;
var inst_47912__$1 = tmp48022;
var inst_47913__$1 = tmp48023;
var inst_47914__$1 = inst_47922;
var state_47977__$1 = (function (){var statearr_48028 = state_47977;
(statearr_48028[(8)] = inst_47912__$1);

(statearr_48028[(9)] = inst_47914__$1);

(statearr_48028[(14)] = inst_47921);

(statearr_48028[(10)] = inst_47913__$1);

(statearr_48028[(11)] = inst_47911__$1);

return statearr_48028;
})();
var statearr_48034_50277 = state_47977__$1;
(statearr_48034_50277[(2)] = null);

(statearr_48034_50277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (22))){
var state_47977__$1 = state_47977;
var statearr_48036_50279 = state_47977__$1;
(statearr_48036_50279[(2)] = null);

(statearr_48036_50279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (6))){
var inst_47898 = (state_47977[(13)]);
var inst_47909 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47898) : f.call(null,inst_47898));
var inst_47910 = cljs.core.seq(inst_47909);
var inst_47911 = inst_47910;
var inst_47912 = null;
var inst_47913 = (0);
var inst_47914 = (0);
var state_47977__$1 = (function (){var statearr_48037 = state_47977;
(statearr_48037[(8)] = inst_47912);

(statearr_48037[(9)] = inst_47914);

(statearr_48037[(10)] = inst_47913);

(statearr_48037[(11)] = inst_47911);

return statearr_48037;
})();
var statearr_48038_50283 = state_47977__$1;
(statearr_48038_50283[(2)] = null);

(statearr_48038_50283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (17))){
var inst_47925 = (state_47977[(7)]);
var inst_47935 = cljs.core.chunk_first(inst_47925);
var inst_47936 = cljs.core.chunk_rest(inst_47925);
var inst_47937 = cljs.core.count(inst_47935);
var inst_47911 = inst_47936;
var inst_47912 = inst_47935;
var inst_47913 = inst_47937;
var inst_47914 = (0);
var state_47977__$1 = (function (){var statearr_48059 = state_47977;
(statearr_48059[(8)] = inst_47912);

(statearr_48059[(9)] = inst_47914);

(statearr_48059[(10)] = inst_47913);

(statearr_48059[(11)] = inst_47911);

return statearr_48059;
})();
var statearr_48060_50284 = state_47977__$1;
(statearr_48060_50284[(2)] = null);

(statearr_48060_50284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (3))){
var inst_47975 = (state_47977[(2)]);
var state_47977__$1 = state_47977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47977__$1,inst_47975);
} else {
if((state_val_47978 === (12))){
var inst_47962 = (state_47977[(2)]);
var state_47977__$1 = state_47977;
var statearr_48061_50285 = state_47977__$1;
(statearr_48061_50285[(2)] = inst_47962);

(statearr_48061_50285[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (2))){
var state_47977__$1 = state_47977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47977__$1,(4),in$);
} else {
if((state_val_47978 === (23))){
var inst_47971 = (state_47977[(2)]);
var state_47977__$1 = state_47977;
var statearr_48064_50286 = state_47977__$1;
(statearr_48064_50286[(2)] = inst_47971);

(statearr_48064_50286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (19))){
var inst_47957 = (state_47977[(2)]);
var state_47977__$1 = state_47977;
var statearr_48065_50290 = state_47977__$1;
(statearr_48065_50290[(2)] = inst_47957);

(statearr_48065_50290[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (11))){
var inst_47925 = (state_47977[(7)]);
var inst_47911 = (state_47977[(11)]);
var inst_47925__$1 = cljs.core.seq(inst_47911);
var state_47977__$1 = (function (){var statearr_48066 = state_47977;
(statearr_48066[(7)] = inst_47925__$1);

return statearr_48066;
})();
if(inst_47925__$1){
var statearr_48067_50292 = state_47977__$1;
(statearr_48067_50292[(1)] = (14));

} else {
var statearr_48068_50293 = state_47977__$1;
(statearr_48068_50293[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (9))){
var inst_47964 = (state_47977[(2)]);
var inst_47965 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47977__$1 = (function (){var statearr_48069 = state_47977;
(statearr_48069[(15)] = inst_47964);

return statearr_48069;
})();
if(cljs.core.truth_(inst_47965)){
var statearr_48070_50294 = state_47977__$1;
(statearr_48070_50294[(1)] = (21));

} else {
var statearr_48071_50295 = state_47977__$1;
(statearr_48071_50295[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (5))){
var inst_47901 = cljs.core.async.close_BANG_(out);
var state_47977__$1 = state_47977;
var statearr_48075_50296 = state_47977__$1;
(statearr_48075_50296[(2)] = inst_47901);

(statearr_48075_50296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (14))){
var inst_47925 = (state_47977[(7)]);
var inst_47927 = cljs.core.chunked_seq_QMARK_(inst_47925);
var state_47977__$1 = state_47977;
if(inst_47927){
var statearr_48078_50297 = state_47977__$1;
(statearr_48078_50297[(1)] = (17));

} else {
var statearr_48080_50298 = state_47977__$1;
(statearr_48080_50298[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (16))){
var inst_47960 = (state_47977[(2)]);
var state_47977__$1 = state_47977;
var statearr_48082_50299 = state_47977__$1;
(statearr_48082_50299[(2)] = inst_47960);

(statearr_48082_50299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (10))){
var inst_47912 = (state_47977[(8)]);
var inst_47914 = (state_47977[(9)]);
var inst_47919 = cljs.core._nth(inst_47912,inst_47914);
var state_47977__$1 = state_47977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47977__$1,(13),out,inst_47919);
} else {
if((state_val_47978 === (18))){
var inst_47925 = (state_47977[(7)]);
var inst_47946 = cljs.core.first(inst_47925);
var state_47977__$1 = state_47977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47977__$1,(20),out,inst_47946);
} else {
if((state_val_47978 === (8))){
var inst_47914 = (state_47977[(9)]);
var inst_47913 = (state_47977[(10)]);
var inst_47916 = (inst_47914 < inst_47913);
var inst_47917 = inst_47916;
var state_47977__$1 = state_47977;
if(cljs.core.truth_(inst_47917)){
var statearr_48083_50309 = state_47977__$1;
(statearr_48083_50309[(1)] = (10));

} else {
var statearr_48084_50311 = state_47977__$1;
(statearr_48084_50311[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45217__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45217__auto____0 = (function (){
var statearr_48090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48090[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45217__auto__);

(statearr_48090[(1)] = (1));

return statearr_48090;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45217__auto____1 = (function (state_47977){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_47977);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e48091){var ex__45220__auto__ = e48091;
var statearr_48092_50319 = state_47977;
(statearr_48092_50319[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_47977[(4)]))){
var statearr_48093_50321 = state_47977;
(statearr_48093_50321[(1)] = cljs.core.first((state_47977[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50326 = state_47977;
state_47977 = G__50326;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45217__auto__ = function(state_47977){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45217__auto____1.call(this,state_47977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45217__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45217__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_48094 = f__45437__auto__();
(statearr_48094[(6)] = c__45436__auto__);

return statearr_48094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));

return c__45436__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48096 = arguments.length;
switch (G__48096) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__48099 = arguments.length;
switch (G__48099) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__48106 = arguments.length;
switch (G__48106) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45436__auto___50334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_48135){
var state_val_48136 = (state_48135[(1)]);
if((state_val_48136 === (7))){
var inst_48130 = (state_48135[(2)]);
var state_48135__$1 = state_48135;
var statearr_48137_50335 = state_48135__$1;
(statearr_48137_50335[(2)] = inst_48130);

(statearr_48137_50335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48136 === (1))){
var inst_48111 = null;
var state_48135__$1 = (function (){var statearr_48138 = state_48135;
(statearr_48138[(7)] = inst_48111);

return statearr_48138;
})();
var statearr_48140_50340 = state_48135__$1;
(statearr_48140_50340[(2)] = null);

(statearr_48140_50340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48136 === (4))){
var inst_48115 = (state_48135[(8)]);
var inst_48115__$1 = (state_48135[(2)]);
var inst_48116 = (inst_48115__$1 == null);
var inst_48117 = cljs.core.not(inst_48116);
var state_48135__$1 = (function (){var statearr_48141 = state_48135;
(statearr_48141[(8)] = inst_48115__$1);

return statearr_48141;
})();
if(inst_48117){
var statearr_48142_50346 = state_48135__$1;
(statearr_48142_50346[(1)] = (5));

} else {
var statearr_48143_50347 = state_48135__$1;
(statearr_48143_50347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48136 === (6))){
var state_48135__$1 = state_48135;
var statearr_48144_50350 = state_48135__$1;
(statearr_48144_50350[(2)] = null);

(statearr_48144_50350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48136 === (3))){
var inst_48132 = (state_48135[(2)]);
var inst_48133 = cljs.core.async.close_BANG_(out);
var state_48135__$1 = (function (){var statearr_48145 = state_48135;
(statearr_48145[(9)] = inst_48132);

return statearr_48145;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48135__$1,inst_48133);
} else {
if((state_val_48136 === (2))){
var state_48135__$1 = state_48135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48135__$1,(4),ch);
} else {
if((state_val_48136 === (11))){
var inst_48115 = (state_48135[(8)]);
var inst_48124 = (state_48135[(2)]);
var inst_48111 = inst_48115;
var state_48135__$1 = (function (){var statearr_48146 = state_48135;
(statearr_48146[(7)] = inst_48111);

(statearr_48146[(10)] = inst_48124);

return statearr_48146;
})();
var statearr_48147_50357 = state_48135__$1;
(statearr_48147_50357[(2)] = null);

(statearr_48147_50357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48136 === (9))){
var inst_48115 = (state_48135[(8)]);
var state_48135__$1 = state_48135;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48135__$1,(11),out,inst_48115);
} else {
if((state_val_48136 === (5))){
var inst_48111 = (state_48135[(7)]);
var inst_48115 = (state_48135[(8)]);
var inst_48119 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48115,inst_48111);
var state_48135__$1 = state_48135;
if(inst_48119){
var statearr_48157_50361 = state_48135__$1;
(statearr_48157_50361[(1)] = (8));

} else {
var statearr_48158_50362 = state_48135__$1;
(statearr_48158_50362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48136 === (10))){
var inst_48127 = (state_48135[(2)]);
var state_48135__$1 = state_48135;
var statearr_48159_50365 = state_48135__$1;
(statearr_48159_50365[(2)] = inst_48127);

(statearr_48159_50365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48136 === (8))){
var inst_48111 = (state_48135[(7)]);
var tmp48156 = inst_48111;
var inst_48111__$1 = tmp48156;
var state_48135__$1 = (function (){var statearr_48160 = state_48135;
(statearr_48160[(7)] = inst_48111__$1);

return statearr_48160;
})();
var statearr_48161_50370 = state_48135__$1;
(statearr_48161_50370[(2)] = null);

(statearr_48161_50370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45217__auto__ = null;
var cljs$core$async$state_machine__45217__auto____0 = (function (){
var statearr_48163 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48163[(0)] = cljs$core$async$state_machine__45217__auto__);

(statearr_48163[(1)] = (1));

return statearr_48163;
});
var cljs$core$async$state_machine__45217__auto____1 = (function (state_48135){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_48135);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e48164){var ex__45220__auto__ = e48164;
var statearr_48165_50375 = state_48135;
(statearr_48165_50375[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_48135[(4)]))){
var statearr_48166_50378 = state_48135;
(statearr_48166_50378[(1)] = cljs.core.first((state_48135[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50380 = state_48135;
state_48135 = G__50380;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$state_machine__45217__auto__ = function(state_48135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45217__auto____1.call(this,state_48135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45217__auto____0;
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45217__auto____1;
return cljs$core$async$state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_48167 = f__45437__auto__();
(statearr_48167[(6)] = c__45436__auto___50334);

return statearr_48167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48170 = arguments.length;
switch (G__48170) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45436__auto___50386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_48215){
var state_val_48216 = (state_48215[(1)]);
if((state_val_48216 === (7))){
var inst_48211 = (state_48215[(2)]);
var state_48215__$1 = state_48215;
var statearr_48219_50390 = state_48215__$1;
(statearr_48219_50390[(2)] = inst_48211);

(statearr_48219_50390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (1))){
var inst_48177 = (new Array(n));
var inst_48178 = inst_48177;
var inst_48179 = (0);
var state_48215__$1 = (function (){var statearr_48221 = state_48215;
(statearr_48221[(7)] = inst_48179);

(statearr_48221[(8)] = inst_48178);

return statearr_48221;
})();
var statearr_48222_50391 = state_48215__$1;
(statearr_48222_50391[(2)] = null);

(statearr_48222_50391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (4))){
var inst_48182 = (state_48215[(9)]);
var inst_48182__$1 = (state_48215[(2)]);
var inst_48183 = (inst_48182__$1 == null);
var inst_48184 = cljs.core.not(inst_48183);
var state_48215__$1 = (function (){var statearr_48227 = state_48215;
(statearr_48227[(9)] = inst_48182__$1);

return statearr_48227;
})();
if(inst_48184){
var statearr_48228_50397 = state_48215__$1;
(statearr_48228_50397[(1)] = (5));

} else {
var statearr_48229_50398 = state_48215__$1;
(statearr_48229_50398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (15))){
var inst_48205 = (state_48215[(2)]);
var state_48215__$1 = state_48215;
var statearr_48232_50403 = state_48215__$1;
(statearr_48232_50403[(2)] = inst_48205);

(statearr_48232_50403[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (13))){
var state_48215__$1 = state_48215;
var statearr_48235_50405 = state_48215__$1;
(statearr_48235_50405[(2)] = null);

(statearr_48235_50405[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (6))){
var inst_48179 = (state_48215[(7)]);
var inst_48201 = (inst_48179 > (0));
var state_48215__$1 = state_48215;
if(cljs.core.truth_(inst_48201)){
var statearr_48236_50406 = state_48215__$1;
(statearr_48236_50406[(1)] = (12));

} else {
var statearr_48237_50407 = state_48215__$1;
(statearr_48237_50407[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (3))){
var inst_48213 = (state_48215[(2)]);
var state_48215__$1 = state_48215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48215__$1,inst_48213);
} else {
if((state_val_48216 === (12))){
var inst_48178 = (state_48215[(8)]);
var inst_48203 = cljs.core.vec(inst_48178);
var state_48215__$1 = state_48215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48215__$1,(15),out,inst_48203);
} else {
if((state_val_48216 === (2))){
var state_48215__$1 = state_48215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48215__$1,(4),ch);
} else {
if((state_val_48216 === (11))){
var inst_48195 = (state_48215[(2)]);
var inst_48196 = (new Array(n));
var inst_48178 = inst_48196;
var inst_48179 = (0);
var state_48215__$1 = (function (){var statearr_48239 = state_48215;
(statearr_48239[(7)] = inst_48179);

(statearr_48239[(8)] = inst_48178);

(statearr_48239[(10)] = inst_48195);

return statearr_48239;
})();
var statearr_48240_50421 = state_48215__$1;
(statearr_48240_50421[(2)] = null);

(statearr_48240_50421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (9))){
var inst_48178 = (state_48215[(8)]);
var inst_48193 = cljs.core.vec(inst_48178);
var state_48215__$1 = state_48215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48215__$1,(11),out,inst_48193);
} else {
if((state_val_48216 === (5))){
var inst_48179 = (state_48215[(7)]);
var inst_48178 = (state_48215[(8)]);
var inst_48188 = (state_48215[(11)]);
var inst_48182 = (state_48215[(9)]);
var inst_48187 = (inst_48178[inst_48179] = inst_48182);
var inst_48188__$1 = (inst_48179 + (1));
var inst_48189 = (inst_48188__$1 < n);
var state_48215__$1 = (function (){var statearr_48243 = state_48215;
(statearr_48243[(11)] = inst_48188__$1);

(statearr_48243[(12)] = inst_48187);

return statearr_48243;
})();
if(cljs.core.truth_(inst_48189)){
var statearr_48244_50447 = state_48215__$1;
(statearr_48244_50447[(1)] = (8));

} else {
var statearr_48245_50452 = state_48215__$1;
(statearr_48245_50452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (14))){
var inst_48208 = (state_48215[(2)]);
var inst_48209 = cljs.core.async.close_BANG_(out);
var state_48215__$1 = (function (){var statearr_48251 = state_48215;
(statearr_48251[(13)] = inst_48208);

return statearr_48251;
})();
var statearr_48252_50458 = state_48215__$1;
(statearr_48252_50458[(2)] = inst_48209);

(statearr_48252_50458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (10))){
var inst_48199 = (state_48215[(2)]);
var state_48215__$1 = state_48215;
var statearr_48254_50463 = state_48215__$1;
(statearr_48254_50463[(2)] = inst_48199);

(statearr_48254_50463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (8))){
var inst_48178 = (state_48215[(8)]);
var inst_48188 = (state_48215[(11)]);
var tmp48249 = inst_48178;
var inst_48178__$1 = tmp48249;
var inst_48179 = inst_48188;
var state_48215__$1 = (function (){var statearr_48255 = state_48215;
(statearr_48255[(7)] = inst_48179);

(statearr_48255[(8)] = inst_48178__$1);

return statearr_48255;
})();
var statearr_48256_50467 = state_48215__$1;
(statearr_48256_50467[(2)] = null);

(statearr_48256_50467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45217__auto__ = null;
var cljs$core$async$state_machine__45217__auto____0 = (function (){
var statearr_48260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48260[(0)] = cljs$core$async$state_machine__45217__auto__);

(statearr_48260[(1)] = (1));

return statearr_48260;
});
var cljs$core$async$state_machine__45217__auto____1 = (function (state_48215){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_48215);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e48261){var ex__45220__auto__ = e48261;
var statearr_48262_50483 = state_48215;
(statearr_48262_50483[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_48215[(4)]))){
var statearr_48263_50484 = state_48215;
(statearr_48263_50484[(1)] = cljs.core.first((state_48215[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50488 = state_48215;
state_48215 = G__50488;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$state_machine__45217__auto__ = function(state_48215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45217__auto____1.call(this,state_48215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45217__auto____0;
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45217__auto____1;
return cljs$core$async$state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_48264 = f__45437__auto__();
(statearr_48264[(6)] = c__45436__auto___50386);

return statearr_48264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48275 = arguments.length;
switch (G__48275) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45436__auto___50501 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45437__auto__ = (function (){var switch__45216__auto__ = (function (state_48318){
var state_val_48319 = (state_48318[(1)]);
if((state_val_48319 === (7))){
var inst_48314 = (state_48318[(2)]);
var state_48318__$1 = state_48318;
var statearr_48320_50504 = state_48318__$1;
(statearr_48320_50504[(2)] = inst_48314);

(statearr_48320_50504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48319 === (1))){
var inst_48276 = [];
var inst_48277 = inst_48276;
var inst_48278 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48318__$1 = (function (){var statearr_48321 = state_48318;
(statearr_48321[(7)] = inst_48277);

(statearr_48321[(8)] = inst_48278);

return statearr_48321;
})();
var statearr_48322_50512 = state_48318__$1;
(statearr_48322_50512[(2)] = null);

(statearr_48322_50512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48319 === (4))){
var inst_48281 = (state_48318[(9)]);
var inst_48281__$1 = (state_48318[(2)]);
var inst_48282 = (inst_48281__$1 == null);
var inst_48283 = cljs.core.not(inst_48282);
var state_48318__$1 = (function (){var statearr_48325 = state_48318;
(statearr_48325[(9)] = inst_48281__$1);

return statearr_48325;
})();
if(inst_48283){
var statearr_48326_50516 = state_48318__$1;
(statearr_48326_50516[(1)] = (5));

} else {
var statearr_48327_50517 = state_48318__$1;
(statearr_48327_50517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48319 === (15))){
var inst_48308 = (state_48318[(2)]);
var state_48318__$1 = state_48318;
var statearr_48328_50518 = state_48318__$1;
(statearr_48328_50518[(2)] = inst_48308);

(statearr_48328_50518[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48319 === (13))){
var state_48318__$1 = state_48318;
var statearr_48330_50522 = state_48318__$1;
(statearr_48330_50522[(2)] = null);

(statearr_48330_50522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48319 === (6))){
var inst_48277 = (state_48318[(7)]);
var inst_48303 = inst_48277.length;
var inst_48304 = (inst_48303 > (0));
var state_48318__$1 = state_48318;
if(cljs.core.truth_(inst_48304)){
var statearr_48331_50523 = state_48318__$1;
(statearr_48331_50523[(1)] = (12));

} else {
var statearr_48332_50527 = state_48318__$1;
(statearr_48332_50527[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48319 === (3))){
var inst_48316 = (state_48318[(2)]);
var state_48318__$1 = state_48318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48318__$1,inst_48316);
} else {
if((state_val_48319 === (12))){
var inst_48277 = (state_48318[(7)]);
var inst_48306 = cljs.core.vec(inst_48277);
var state_48318__$1 = state_48318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48318__$1,(15),out,inst_48306);
} else {
if((state_val_48319 === (2))){
var state_48318__$1 = state_48318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48318__$1,(4),ch);
} else {
if((state_val_48319 === (11))){
var inst_48281 = (state_48318[(9)]);
var inst_48285 = (state_48318[(10)]);
var inst_48296 = (state_48318[(2)]);
var inst_48297 = [];
var inst_48298 = inst_48297.push(inst_48281);
var inst_48277 = inst_48297;
var inst_48278 = inst_48285;
var state_48318__$1 = (function (){var statearr_48333 = state_48318;
(statearr_48333[(11)] = inst_48296);

(statearr_48333[(7)] = inst_48277);

(statearr_48333[(12)] = inst_48298);

(statearr_48333[(8)] = inst_48278);

return statearr_48333;
})();
var statearr_48334_50535 = state_48318__$1;
(statearr_48334_50535[(2)] = null);

(statearr_48334_50535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48319 === (9))){
var inst_48277 = (state_48318[(7)]);
var inst_48294 = cljs.core.vec(inst_48277);
var state_48318__$1 = state_48318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48318__$1,(11),out,inst_48294);
} else {
if((state_val_48319 === (5))){
var inst_48281 = (state_48318[(9)]);
var inst_48285 = (state_48318[(10)]);
var inst_48278 = (state_48318[(8)]);
var inst_48285__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48281) : f.call(null,inst_48281));
var inst_48286 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48285__$1,inst_48278);
var inst_48288 = cljs.core.keyword_identical_QMARK_(inst_48278,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48289 = ((inst_48286) || (inst_48288));
var state_48318__$1 = (function (){var statearr_48336 = state_48318;
(statearr_48336[(10)] = inst_48285__$1);

return statearr_48336;
})();
if(cljs.core.truth_(inst_48289)){
var statearr_48337_50542 = state_48318__$1;
(statearr_48337_50542[(1)] = (8));

} else {
var statearr_48338_50543 = state_48318__$1;
(statearr_48338_50543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48319 === (14))){
var inst_48311 = (state_48318[(2)]);
var inst_48312 = cljs.core.async.close_BANG_(out);
var state_48318__$1 = (function (){var statearr_48342 = state_48318;
(statearr_48342[(13)] = inst_48311);

return statearr_48342;
})();
var statearr_48343_50552 = state_48318__$1;
(statearr_48343_50552[(2)] = inst_48312);

(statearr_48343_50552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48319 === (10))){
var inst_48301 = (state_48318[(2)]);
var state_48318__$1 = state_48318;
var statearr_48344_50554 = state_48318__$1;
(statearr_48344_50554[(2)] = inst_48301);

(statearr_48344_50554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48319 === (8))){
var inst_48281 = (state_48318[(9)]);
var inst_48277 = (state_48318[(7)]);
var inst_48285 = (state_48318[(10)]);
var inst_48291 = inst_48277.push(inst_48281);
var tmp48341 = inst_48277;
var inst_48277__$1 = tmp48341;
var inst_48278 = inst_48285;
var state_48318__$1 = (function (){var statearr_48346 = state_48318;
(statearr_48346[(7)] = inst_48277__$1);

(statearr_48346[(14)] = inst_48291);

(statearr_48346[(8)] = inst_48278);

return statearr_48346;
})();
var statearr_48347_50560 = state_48318__$1;
(statearr_48347_50560[(2)] = null);

(statearr_48347_50560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45217__auto__ = null;
var cljs$core$async$state_machine__45217__auto____0 = (function (){
var statearr_48348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48348[(0)] = cljs$core$async$state_machine__45217__auto__);

(statearr_48348[(1)] = (1));

return statearr_48348;
});
var cljs$core$async$state_machine__45217__auto____1 = (function (state_48318){
while(true){
var ret_value__45218__auto__ = (function (){try{while(true){
var result__45219__auto__ = switch__45216__auto__(state_48318);
if(cljs.core.keyword_identical_QMARK_(result__45219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45219__auto__;
}
break;
}
}catch (e48351){var ex__45220__auto__ = e48351;
var statearr_48352_50562 = state_48318;
(statearr_48352_50562[(2)] = ex__45220__auto__);


if(cljs.core.seq((state_48318[(4)]))){
var statearr_48353_50563 = state_48318;
(statearr_48353_50563[(1)] = cljs.core.first((state_48318[(4)])));

} else {
throw ex__45220__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50568 = state_48318;
state_48318 = G__50568;
continue;
} else {
return ret_value__45218__auto__;
}
break;
}
});
cljs$core$async$state_machine__45217__auto__ = function(state_48318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45217__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45217__auto____1.call(this,state_48318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45217__auto____0;
cljs$core$async$state_machine__45217__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45217__auto____1;
return cljs$core$async$state_machine__45217__auto__;
})()
})();
var state__45438__auto__ = (function (){var statearr_48355 = f__45437__auto__();
(statearr_48355[(6)] = c__45436__auto___50501);

return statearr_48355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45438__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
