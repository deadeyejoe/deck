goog.provide('rewrite_clj.parser.keyword');
rewrite_clj.parser.keyword.parse_keyword = (function rewrite_clj$parser$keyword$parse_keyword(reader){
(rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.read_char.call(null,reader));

var temp__5733__auto__ = (rewrite_clj.reader.peek_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.peek_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.peek_char.call(null,reader));
if(cljs.core.truth_(temp__5733__auto__)){
var c = temp__5733__auto__;
if((c === ":")){
var G__47971 = rewrite_clj.reader.read_keyword(reader,":");
var G__47972 = true;
return (rewrite_clj.node.keyword_node.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.node.keyword_node.cljs$core$IFn$_invoke$arity$2(G__47971,G__47972) : rewrite_clj.node.keyword_node.call(null,G__47971,G__47972));
} else {
var G__47973_47984 = reader;
var G__47974_47985 = ":";
(rewrite_clj.reader.unread.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.reader.unread.cljs$core$IFn$_invoke$arity$2(G__47973_47984,G__47974_47985) : rewrite_clj.reader.unread.call(null,G__47973_47984,G__47974_47985));

var G__47975 = rewrite_clj.reader.read_keyword(reader,":");
return (rewrite_clj.node.keyword_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.keyword_node.cljs$core$IFn$_invoke$arity$1(G__47975) : rewrite_clj.node.keyword_node.call(null,G__47975));
}
} else {
return rewrite_clj.reader.throw_reader(reader,"unexpected EOF while reading keyword.");
}
});

//# sourceMappingURL=rewrite_clj.parser.keyword.js.map
