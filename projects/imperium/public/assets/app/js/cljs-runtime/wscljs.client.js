goog.provide('wscljs.client');
wscljs.client.status = (function wscljs$client$status(socket){

var pred__48182 = cljs.core._EQ_;
var expr__48183 = socket.readyState;
if(cljs.core.truth_((pred__48182.cljs$core$IFn$_invoke$arity$2 ? pred__48182.cljs$core$IFn$_invoke$arity$2((0),expr__48183) : pred__48182.call(null,(0),expr__48183)))){
return new cljs.core.Keyword(null,"connecting","connecting",-1347943866);
} else {
if(cljs.core.truth_((pred__48182.cljs$core$IFn$_invoke$arity$2 ? pred__48182.cljs$core$IFn$_invoke$arity$2((1),expr__48183) : pred__48182.call(null,(1),expr__48183)))){
return new cljs.core.Keyword(null,"open","open",-1763596448);
} else {
if(cljs.core.truth_((pred__48182.cljs$core$IFn$_invoke$arity$2 ? pred__48182.cljs$core$IFn$_invoke$arity$2((2),expr__48183) : pred__48182.call(null,(2),expr__48183)))){
return new cljs.core.Keyword(null,"stopping","stopping",1036724975);
} else {
if(cljs.core.truth_((pred__48182.cljs$core$IFn$_invoke$arity$2 ? pred__48182.cljs$core$IFn$_invoke$arity$2((3),expr__48183) : pred__48182.call(null,(3),expr__48183)))){
return new cljs.core.Keyword(null,"stopped","stopped",-1490414640);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__48183)].join('')));
}
}
}
}
});
/**
 * Starts a websocket connection and returns it.
 * 
 *   Takes the following arguments:
 * 
 *   url         => the websocket url
 *   handler-map => a hashmap containing handler functions mapping to:
 * 
 *               - :on-open    => called when opening a socket connection
 *               - :on-message => called when recieving message on the socket
 *               - :on-close   => called when closing a socket connection
 * 
 *   Usage:
 * 
 *   (require '[wscljs.client :as ws]
 *         '[wscljs.format :as fmt])
 * 
 * 
 *   (def socket (ws/create "ws://...." handler-map))
 * 
 *   (ws/send socket data fmt/json)
 *   
 */
wscljs.client.create = (function wscljs$client$create(url,p__48186){
var map__48187 = p__48186;
var map__48187__$1 = (((((!((map__48187 == null))))?(((((map__48187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48187):map__48187);
var handler_map = map__48187__$1;
var on_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48187__$1,new cljs.core.Keyword(null,"on-open","on-open",-1391088163));
var on_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48187__$1,new cljs.core.Keyword(null,"on-message","on-message",1662987808));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48187__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48187__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("wscljs.spec","websocket-handler-map","wscljs.spec/websocket-handler-map",524425359),handler_map)){
} else {
throw (new Error("Assert failed: (s/valid? :wscljs.spec/websocket-handler-map handler-map)"));
}

var temp__5733__auto__ = (new WebSocket(url));
if(cljs.core.truth_(temp__5733__auto__)){
var sock = temp__5733__auto__;
(sock.onopen = on_open);

(sock.onmessage = on_message);

(sock.onclose = on_close);

(sock.onerror = on_error);

return sock;
} else {
throw (new Error(["Web socket connection failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('')));
}
});
/**
 * Sends data over socket in the specified format.
 */
wscljs.client.send = (function wscljs$client$send(var_args){
var G__48190 = arguments.length;
switch (G__48190) {
case 2:
return wscljs.client.send.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wscljs.client.send.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(wscljs.client.send.cljs$core$IFn$_invoke$arity$2 = (function (socket,data){
return wscljs.client.send.cljs$core$IFn$_invoke$arity$3(socket,data,wscljs.format.identity);
}));

(wscljs.client.send.cljs$core$IFn$_invoke$arity$3 = (function (socket,data,format){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("wscljs.spec","websocket-open","wscljs.spec/websocket-open",1725893736),socket)){
} else {
throw (new Error("Assert failed: (s/valid? :wscljs.spec/websocket-open socket)"));
}

return socket.send(wscljs.format.write(format,data));
}));

(wscljs.client.send.cljs$lang$maxFixedArity = 3);

/**
 * Closes the socket connection.
 */
wscljs.client.close = (function wscljs$client$close(socket){
return socket.close();
});

//# sourceMappingURL=wscljs.client.js.map
