// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__6635__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6635 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6636__i = 0, G__6636__a = new Array(arguments.length -  0);
while (G__6636__i < G__6636__a.length) {G__6636__a[G__6636__i] = arguments[G__6636__i + 0]; ++G__6636__i;}
  args = new cljs.core.IndexedSeq(G__6636__a,0,null);
} 
return G__6635__delegate.call(this,args);};
G__6635.cljs$lang$maxFixedArity = 0;
G__6635.cljs$lang$applyTo = (function (arglist__6637){
var args = cljs.core.seq(arglist__6637);
return G__6635__delegate(args);
});
G__6635.cljs$core$IFn$_invoke$arity$variadic = G__6635__delegate;
return G__6635;
})()
);

(o.error = (function() { 
var G__6638__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6639__i = 0, G__6639__a = new Array(arguments.length -  0);
while (G__6639__i < G__6639__a.length) {G__6639__a[G__6639__i] = arguments[G__6639__i + 0]; ++G__6639__i;}
  args = new cljs.core.IndexedSeq(G__6639__a,0,null);
} 
return G__6638__delegate.call(this,args);};
G__6638.cljs$lang$maxFixedArity = 0;
G__6638.cljs$lang$applyTo = (function (arglist__6640){
var args = cljs.core.seq(arglist__6640);
return G__6638__delegate(args);
});
G__6638.cljs$core$IFn$_invoke$arity$variadic = G__6638__delegate;
return G__6638;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
