// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.main');
goog.require('cljs.core');
goog.require('tic_tac_toe.ui_interface');
goog.require('tic_tac_toe.web_ui');
tic_tac_toe.main.main = (function tic_tac_toe$main$main(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13932 = arguments.length;
var i__5770__auto___13933 = (0);
while(true){
if((i__5770__auto___13933 < len__5769__auto___13932)){
args__5775__auto__.push((arguments[i__5770__auto___13933]));

var G__13934 = (i__5770__auto___13933 + (1));
i__5770__auto___13933 = G__13934;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return tic_tac_toe.main.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(tic_tac_toe.main.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return tic_tac_toe.ui_interface.initialize_ui.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));
}));

(tic_tac_toe.main.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tic_tac_toe.main.main.cljs$lang$applyTo = (function (seq13931){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13931));
}));


//# sourceMappingURL=main.js.map
