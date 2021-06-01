goog.provide('imperium.client');
if((typeof imperium !== 'undefined') && (typeof imperium.client !== 'undefined') && (typeof imperium.client.receive_channel !== 'undefined')){
} else {
imperium.client.receive_channel = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof imperium !== 'undefined') && (typeof imperium.client !== 'undefined') && (typeof imperium.client.send_BANG_ !== 'undefined')){
} else {
imperium.client.send_BANG_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof imperium !== 'undefined') && (typeof imperium.client !== 'undefined') && (typeof imperium.client.ws_state !== 'undefined')){
} else {
imperium.client.ws_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof imperium !== 'undefined') && (typeof imperium.client !== 'undefined') && (typeof imperium.client.router !== 'undefined')){
} else {
imperium.client.router = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
imperium.client.sente_config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"host","host",-1558485167),"localhost",new cljs.core.Keyword(null,"port","port",1534937262),(8890)], null);
imperium.client.state_watcher = (function imperium$client$state_watcher(_key,_atom,_old_state,new_state){
return console.warn("New state",new_state);
});
imperium.client.create_client_BANG_ = (function imperium$client$create_client_BANG_(){
var map__58003 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic("/ws",null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([imperium.client.sente_config], 0));
var map__58003__$1 = (((((!((map__58003 == null))))?(((((map__58003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58003):map__58003);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58003__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58003__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58003__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.reset_BANG_(imperium.client.receive_channel,ch_recv);

cljs.core.reset_BANG_(imperium.client.send_BANG_,send_fn);

cljs.core.reset_BANG_(imperium.client.ws_state,state);

return cljs.core.add_watch(state,new cljs.core.Keyword(null,"state-watcher","state-watcher",725059372),imperium.client.state_watcher);
});
imperium.client.stop_router_BANG_ = (function imperium$client$stop_router_BANG_(){
var temp__5735__auto__ = cljs.core.deref(imperium.client.router);
if(cljs.core.truth_(temp__5735__auto__)){
var stop_f = temp__5735__auto__;
return (stop_f.cljs$core$IFn$_invoke$arity$0 ? stop_f.cljs$core$IFn$_invoke$arity$0() : stop_f.call(null));
} else {
return null;
}
});
imperium.client.start_router_BANG_ = (function imperium$client$start_router_BANG_(){
imperium.client.stop_router_BANG_();

return cljs.core.reset_BANG_(imperium.client.router,taoensso.sente.start_client_chsk_router_BANG_(cljs.core.deref(imperium.client.receive_channel),imperium.ws_handlers.event_msg_handler));
});
imperium.client.start_BANG_ = (function imperium$client$start_BANG_(){
imperium.client.create_client_BANG_();

return imperium.client.start_router_BANG_();
});
imperium.client.send = (function imperium$client$send(message){
var fexpr__58005 = cljs.core.deref(imperium.client.send_BANG_);
return (fexpr__58005.cljs$core$IFn$_invoke$arity$1 ? fexpr__58005.cljs$core$IFn$_invoke$arity$1(message) : fexpr__58005.call(null,message));
});

//# sourceMappingURL=imperium.client.js.map
