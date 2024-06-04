// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('speclj.run.standard');
goog.require('cljs.core');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.report.progress');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.running');
goog.require('speclj.tags');
speclj.run.standard.counter = cljs.core.atom.call(null,(0));

/**
* @constructor
 * @implements {speclj.running.Runner}
*/
speclj.run.standard.StandardRunner = (function (num,descriptions,results){
this.num = num;
this.descriptions = descriptions;
this.results = results;
});
(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_directories$arity$3 = (function (this$,directories,reporters){
var self__ = this;
var this$__$1 = this;
return alert("StandardRunner.run-directories:  I don't know how to do this.");
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$submit_description$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.descriptions,cljs.core.conj,description);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_description$arity$3 = (function (this$,description,reporters){
var self__ = this;
var this$__$1 = this;
var run_results = speclj.running.do_description.call(null,description,reporters);
return cljs.core.swap_BANG_.call(null,self__.results,cljs.core.into,run_results);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_and_report$arity$2 = (function (this$,reporters){
var self__ = this;
var this$__$1 = this;
var seq__7348_7352 = cljs.core.seq.call(null,speclj.running.filter_focused.call(null,cljs.core.deref.call(null,self__.descriptions)));
var chunk__7349_7353 = null;
var count__7350_7354 = (0);
var i__7351_7355 = (0);
while(true){
if((i__7351_7355 < count__7350_7354)){
var description_7356 = cljs.core._nth.call(null,chunk__7349_7353,i__7351_7355);
speclj.running.run_description.call(null,this$__$1,description_7356,reporters);


var G__7357 = seq__7348_7352;
var G__7358 = chunk__7349_7353;
var G__7359 = count__7350_7354;
var G__7360 = (i__7351_7355 + (1));
seq__7348_7352 = G__7357;
chunk__7349_7353 = G__7358;
count__7350_7354 = G__7359;
i__7351_7355 = G__7360;
continue;
} else {
var temp__5753__auto___7361 = cljs.core.seq.call(null,seq__7348_7352);
if(temp__5753__auto___7361){
var seq__7348_7362__$1 = temp__5753__auto___7361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7348_7362__$1)){
var c__5568__auto___7363 = cljs.core.chunk_first.call(null,seq__7348_7362__$1);
var G__7364 = cljs.core.chunk_rest.call(null,seq__7348_7362__$1);
var G__7365 = c__5568__auto___7363;
var G__7366 = cljs.core.count.call(null,c__5568__auto___7363);
var G__7367 = (0);
seq__7348_7352 = G__7364;
chunk__7349_7353 = G__7365;
count__7350_7354 = G__7366;
i__7351_7355 = G__7367;
continue;
} else {
var description_7368 = cljs.core.first.call(null,seq__7348_7362__$1);
speclj.running.run_description.call(null,this$__$1,description_7368,reporters);


var G__7369 = cljs.core.next.call(null,seq__7348_7362__$1);
var G__7370 = null;
var G__7371 = (0);
var G__7372 = (0);
seq__7348_7352 = G__7369;
chunk__7349_7353 = G__7370;
count__7350_7354 = G__7371;
i__7351_7355 = G__7372;
continue;
}
} else {
}
}
break;
}

return speclj.reporting.report_runs_STAR_.call(null,reporters,cljs.core.deref.call(null,self__.results));
}));

(speclj.run.standard.StandardRunner.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null),new cljs.core.Symbol(null,"descriptions","descriptions",817338403,null),new cljs.core.Symbol(null,"results","results",506361414,null)], null);
}));

(speclj.run.standard.StandardRunner.cljs$lang$type = true);

(speclj.run.standard.StandardRunner.cljs$lang$ctorStr = "speclj.run.standard/StandardRunner");

(speclj.run.standard.StandardRunner.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"speclj.run.standard/StandardRunner");
}));

/**
 * Positional factory function for speclj.run.standard/StandardRunner.
 */
speclj.run.standard.__GT_StandardRunner = (function speclj$run$standard$__GT_StandardRunner(num,descriptions,results){
return (new speclj.run.standard.StandardRunner(num,descriptions,results));
});

(speclj.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){
var x__$1 = this;
cljs.core._write.call(null,writer,["#<speclj.run.standard.StandardRunner(num: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1.num),", descriptions: "].join(''));

cljs.core._pr_writer.call(null,cljs.core.deref.call(null,x__$1.descriptions),writer,opts);

return cljs.core._write.call(null,writer,")>");
}));

(speclj.components.Description.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Description.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){
var x__$1 = this;
return cljs.core._write.call(null,writer,["#<speclj.component.Description(name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1.name),")>"].join(''));
}));
speclj.run.standard.new_standard_runner = (function speclj$run$standard$new_standard_runner(){
return (new speclj.run.standard.StandardRunner(cljs.core.swap_BANG_.call(null,speclj.run.standard.counter,cljs.core.inc),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)));
});
cljs.core.reset_BANG_.call(null,speclj.config.default_runner_fn,speclj.run.standard.new_standard_runner);
cljs.core.reset_BANG_.call(null,speclj.config.default_runner,speclj.run.standard.new_standard_runner.call(null));
speclj.run.standard.armed = false;
speclj.run.standard.run_specs = (function speclj$run$standard$run_specs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7374 = arguments.length;
var i__5770__auto___7375 = (0);
while(true){
if((i__5770__auto___7375 < len__5769__auto___7374)){
args__5775__auto__.push((arguments[i__5770__auto___7375]));

var G__7376 = (i__5770__auto___7375 + (1));
i__5770__auto___7375 = G__7376;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return speclj.run.standard.run_specs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(speclj.run.standard.run_specs.cljs$core$IFn$_invoke$arity$variadic = (function (configurations){

if(speclj.run.standard.armed){
return speclj.config.with_config.call(null,cljs.core.merge.call(null,cljs.core.dissoc.call(null,speclj.config.default_config,new cljs.core.Keyword(null,"runner","runner",1945441304)),cljs.core.apply.call(null,cljs.core.hash_map,configurations)),(function (){
var temp__5751__auto___7377 = speclj.tags.describe_filter.call(null);
if(cljs.core.truth_(temp__5751__auto___7377)){
var filter_msg_7378 = temp__5751__auto___7377;
speclj.reporting.report_message_STAR_.call(null,speclj.config.active_reporters.call(null),filter_msg_7378);
} else {
}

speclj.running.run_and_report.call(null,speclj.config.active_runner.call(null),speclj.config.active_reporters.call(null));

return speclj.results.fail_count.call(null,cljs.core.deref.call(null,speclj.config.active_runner.call(null).results));
}));
} else {
return null;
}
}));

(speclj.run.standard.run_specs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(speclj.run.standard.run_specs.cljs$lang$applyTo = (function (seq7373){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7373));
}));


//# sourceMappingURL=standard.js.map
