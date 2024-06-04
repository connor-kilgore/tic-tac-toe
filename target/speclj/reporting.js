// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__6531_SHARP_){
return p1__6531_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_6532 = (function (reporter,message){
var x__5393__auto__ = (((reporter == null))?null:reporter);
var m__5394__auto__ = (speclj.reporting.report_message[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,reporter,message);
} else {
var m__5392__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,reporter,message);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_6532.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_6533 = (function (this$,description){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.reporting.report_description[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,description);
} else {
var m__5392__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_6533.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_6534 = (function (this$,result){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,result);
} else {
var m__5392__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_6534.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_6535 = (function (this$,result){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,result);
} else {
var m__5392__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_6535.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_6536 = (function (this$,result){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,result);
} else {
var m__5392__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_6536.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_6537 = (function (this$,results){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,results);
} else {
var m__5392__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,results);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_6537.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_6538 = (function (this$,exception){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.reporting.report_error[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,exception);
} else {
var m__5392__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,exception);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_6538.call(null,this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speclj.reporting","report-run"),(function (result,reporters){
return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PassResult,(function (result,reporters){
var seq__6539 = cljs.core.seq.call(null,reporters);
var chunk__6540 = null;
var count__6541 = (0);
var i__6542 = (0);
while(true){
if((i__6542 < count__6541)){
var reporter = cljs.core._nth.call(null,chunk__6540,i__6542);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6543 = seq__6539;
var G__6544 = chunk__6540;
var G__6545 = count__6541;
var G__6546 = (i__6542 + (1));
seq__6539 = G__6543;
chunk__6540 = G__6544;
count__6541 = G__6545;
i__6542 = G__6546;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6539);
if(temp__5753__auto__){
var seq__6539__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6539__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6539__$1);
var G__6547 = cljs.core.chunk_rest.call(null,seq__6539__$1);
var G__6548 = c__5568__auto__;
var G__6549 = cljs.core.count.call(null,c__5568__auto__);
var G__6550 = (0);
seq__6539 = G__6547;
chunk__6540 = G__6548;
count__6541 = G__6549;
i__6542 = G__6550;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6539__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6551 = cljs.core.next.call(null,seq__6539__$1);
var G__6552 = null;
var G__6553 = (0);
var G__6554 = (0);
seq__6539 = G__6551;
chunk__6540 = G__6552;
count__6541 = G__6553;
i__6542 = G__6554;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.FailResult,(function (result,reporters){
var seq__6555 = cljs.core.seq.call(null,reporters);
var chunk__6556 = null;
var count__6557 = (0);
var i__6558 = (0);
while(true){
if((i__6558 < count__6557)){
var reporter = cljs.core._nth.call(null,chunk__6556,i__6558);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6559 = seq__6555;
var G__6560 = chunk__6556;
var G__6561 = count__6557;
var G__6562 = (i__6558 + (1));
seq__6555 = G__6559;
chunk__6556 = G__6560;
count__6557 = G__6561;
i__6558 = G__6562;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6555);
if(temp__5753__auto__){
var seq__6555__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6555__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6555__$1);
var G__6563 = cljs.core.chunk_rest.call(null,seq__6555__$1);
var G__6564 = c__5568__auto__;
var G__6565 = cljs.core.count.call(null,c__5568__auto__);
var G__6566 = (0);
seq__6555 = G__6563;
chunk__6556 = G__6564;
count__6557 = G__6565;
i__6558 = G__6566;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6555__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6567 = cljs.core.next.call(null,seq__6555__$1);
var G__6568 = null;
var G__6569 = (0);
var G__6570 = (0);
seq__6555 = G__6567;
chunk__6556 = G__6568;
count__6557 = G__6569;
i__6558 = G__6570;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PendingResult,(function (result,reporters){
var seq__6571 = cljs.core.seq.call(null,reporters);
var chunk__6572 = null;
var count__6573 = (0);
var i__6574 = (0);
while(true){
if((i__6574 < count__6573)){
var reporter = cljs.core._nth.call(null,chunk__6572,i__6574);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6575 = seq__6571;
var G__6576 = chunk__6572;
var G__6577 = count__6573;
var G__6578 = (i__6574 + (1));
seq__6571 = G__6575;
chunk__6572 = G__6576;
count__6573 = G__6577;
i__6574 = G__6578;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6571);
if(temp__5753__auto__){
var seq__6571__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6571__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6571__$1);
var G__6579 = cljs.core.chunk_rest.call(null,seq__6571__$1);
var G__6580 = c__5568__auto__;
var G__6581 = cljs.core.count.call(null,c__5568__auto__);
var G__6582 = (0);
seq__6571 = G__6579;
chunk__6572 = G__6580;
count__6573 = G__6581;
i__6574 = G__6582;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6571__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6583 = cljs.core.next.call(null,seq__6571__$1);
var G__6584 = null;
var G__6585 = (0);
var G__6586 = (0);
seq__6571 = G__6583;
chunk__6572 = G__6584;
count__6573 = G__6585;
i__6574 = G__6586;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.ErrorResult,(function (result,reporters){
var seq__6587 = cljs.core.seq.call(null,reporters);
var chunk__6588 = null;
var count__6589 = (0);
var i__6590 = (0);
while(true){
if((i__6590 < count__6589)){
var reporter = cljs.core._nth.call(null,chunk__6588,i__6590);
speclj.reporting.report_error.call(null,reporter,result);


var G__6591 = seq__6587;
var G__6592 = chunk__6588;
var G__6593 = count__6589;
var G__6594 = (i__6590 + (1));
seq__6587 = G__6591;
chunk__6588 = G__6592;
count__6589 = G__6593;
i__6590 = G__6594;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6587);
if(temp__5753__auto__){
var seq__6587__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6587__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6587__$1);
var G__6595 = cljs.core.chunk_rest.call(null,seq__6587__$1);
var G__6596 = c__5568__auto__;
var G__6597 = cljs.core.count.call(null,c__5568__auto__);
var G__6598 = (0);
seq__6587 = G__6595;
chunk__6588 = G__6596;
count__6589 = G__6597;
i__6590 = G__6598;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6587__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__6599 = cljs.core.next.call(null,seq__6587__$1);
var G__6600 = null;
var G__6601 = (0);
var G__6602 = (0);
seq__6587 = G__6599;
chunk__6588 = G__6600;
count__6589 = G__6601;
i__6590 = G__6602;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code){
return (function (text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
});
speclj.reporting.red = speclj.reporting.stylizer.call(null,"31");
speclj.reporting.green = speclj.reporting.stylizer.call(null,"32");
speclj.reporting.yellow = speclj.reporting.stylizer.call(null,"33");
speclj.reporting.grey = speclj.reporting.stylizer.call(null,"90");
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_6603 = speclj.platform.stack_trace.call(null,exception);
var elides_6604 = (0);
while(true){
if(cljs.core.seq.call(null,levels_6603)){
var level_6605 = cljs.core.first.call(null,levels_6603);
if(speclj.platform.elide_level_QMARK_.call(null,level_6605)){
var G__6606 = cljs.core.rest.call(null,levels_6603);
var G__6607 = (elides_6604 + (1));
levels_6603 = G__6606;
elides_6604 = G__6607;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_6604);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_6605));

var G__6608 = cljs.core.rest.call(null,levels_6603);
var G__6609 = (0);
levels_6603 = G__6608;
elides_6604 = G__6609;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_6604);
}
break;
}

var temp__5751__auto__ = speclj.platform.cause.call(null,exception);
if(cljs.core.truth_(temp__5751__auto__)){
var cause = temp__5751__auto__;
return speclj.reporting.print_exception.call(null,"Caused by:",cause);
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.call(null,prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
} else {
cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
}

return speclj.reporting.print_stack_levels.call(null,exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__6610_6614 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6611_6615 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6612_6616 = true;
var _STAR_print_fn_STAR__temp_val__6613_6617 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6612_6616);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6613_6617);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6611_6615);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6610_6614);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___6621 = arguments.length;
var i__5770__auto___6622 = (0);
while(true){
if((i__5770__auto___6622 < len__5769__auto___6621)){
args__5775__auto__.push((arguments[i__5770__auto___6622]));

var G__6623 = (i__5770__auto___6622 + (1));
i__5770__auto___6622 = G__6623;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.call(null,cljs.core.str,args);
var lines = clojure.string.split.call(null,value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.call(null,(function (p1__6618_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6618_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq6619){
var G__6620 = cljs.core.first.call(null,seq6619);
var seq6619__$1 = cljs.core.next.call(null,seq6619);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6620,seq6619__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5775__auto__ = [];
var len__5769__auto___6626 = arguments.length;
var i__5770__auto___6627 = (0);
while(true){
if((i__5770__auto___6627 < len__5769__auto___6626)){
args__5775__auto__.push((arguments[i__5770__auto___6627]));

var G__6628 = (i__5770__auto___6627 + (1));
i__5770__auto___6627 = G__6628;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.call(null,(function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.call(null,spaces));
return cljs.core.apply.call(null,speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq6624){
var G__6625 = cljs.core.first.call(null,seq6624);
var seq6624__$1 = cljs.core.next.call(null,seq6624);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6625,seq6624__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__6629 = cljs.core.seq.call(null,reporters);
var chunk__6630 = null;
var count__6631 = (0);
var i__6632 = (0);
while(true){
if((i__6632 < count__6631)){
var reporter = cljs.core._nth.call(null,chunk__6630,i__6632);
speclj.reporting.report_description.call(null,reporter,description);


var G__6633 = seq__6629;
var G__6634 = chunk__6630;
var G__6635 = count__6631;
var G__6636 = (i__6632 + (1));
seq__6629 = G__6633;
chunk__6630 = G__6634;
count__6631 = G__6635;
i__6632 = G__6636;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6629);
if(temp__5753__auto__){
var seq__6629__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6629__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6629__$1);
var G__6637 = cljs.core.chunk_rest.call(null,seq__6629__$1);
var G__6638 = c__5568__auto__;
var G__6639 = cljs.core.count.call(null,c__5568__auto__);
var G__6640 = (0);
seq__6629 = G__6637;
chunk__6630 = G__6638;
count__6631 = G__6639;
i__6632 = G__6640;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6629__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__6641 = cljs.core.next.call(null,seq__6629__$1);
var G__6642 = null;
var G__6643 = (0);
var G__6644 = (0);
seq__6629 = G__6641;
chunk__6630 = G__6642;
count__6631 = G__6643;
i__6632 = G__6644;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__6645 = cljs.core.seq.call(null,reporters);
var chunk__6646 = null;
var count__6647 = (0);
var i__6648 = (0);
while(true){
if((i__6648 < count__6647)){
var reporter = cljs.core._nth.call(null,chunk__6646,i__6648);
speclj.reporting.report_runs.call(null,reporter,results);


var G__6649 = seq__6645;
var G__6650 = chunk__6646;
var G__6651 = count__6647;
var G__6652 = (i__6648 + (1));
seq__6645 = G__6649;
chunk__6646 = G__6650;
count__6647 = G__6651;
i__6648 = G__6652;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6645);
if(temp__5753__auto__){
var seq__6645__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6645__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6645__$1);
var G__6653 = cljs.core.chunk_rest.call(null,seq__6645__$1);
var G__6654 = c__5568__auto__;
var G__6655 = cljs.core.count.call(null,c__5568__auto__);
var G__6656 = (0);
seq__6645 = G__6653;
chunk__6646 = G__6654;
count__6647 = G__6655;
i__6648 = G__6656;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6645__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__6657 = cljs.core.next.call(null,seq__6645__$1);
var G__6658 = null;
var G__6659 = (0);
var G__6660 = (0);
seq__6645 = G__6657;
chunk__6646 = G__6658;
count__6647 = G__6659;
i__6648 = G__6660;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__6661 = cljs.core.seq.call(null,reporters);
var chunk__6662 = null;
var count__6663 = (0);
var i__6664 = (0);
while(true){
if((i__6664 < count__6663)){
var reporter = cljs.core._nth.call(null,chunk__6662,i__6664);
speclj.reporting.report_message.call(null,reporter,message);


var G__6665 = seq__6661;
var G__6666 = chunk__6662;
var G__6667 = count__6663;
var G__6668 = (i__6664 + (1));
seq__6661 = G__6665;
chunk__6662 = G__6666;
count__6663 = G__6667;
i__6664 = G__6668;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6661);
if(temp__5753__auto__){
var seq__6661__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6661__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6661__$1);
var G__6669 = cljs.core.chunk_rest.call(null,seq__6661__$1);
var G__6670 = c__5568__auto__;
var G__6671 = cljs.core.count.call(null,c__5568__auto__);
var G__6672 = (0);
seq__6661 = G__6669;
chunk__6662 = G__6670;
count__6663 = G__6671;
i__6664 = G__6672;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6661__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__6673 = cljs.core.next.call(null,seq__6661__$1);
var G__6674 = null;
var G__6675 = (0);
var G__6676 = (0);
seq__6661 = G__6673;
chunk__6662 = G__6674;
count__6663 = G__6675;
i__6664 = G__6676;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__6677 = cljs.core.seq.call(null,reporters);
var chunk__6678 = null;
var count__6679 = (0);
var i__6680 = (0);
while(true){
if((i__6680 < count__6679)){
var reporter = cljs.core._nth.call(null,chunk__6678,i__6680);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6681 = seq__6677;
var G__6682 = chunk__6678;
var G__6683 = count__6679;
var G__6684 = (i__6680 + (1));
seq__6677 = G__6681;
chunk__6678 = G__6682;
count__6679 = G__6683;
i__6680 = G__6684;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6677);
if(temp__5753__auto__){
var seq__6677__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6677__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6677__$1);
var G__6685 = cljs.core.chunk_rest.call(null,seq__6677__$1);
var G__6686 = c__5568__auto__;
var G__6687 = cljs.core.count.call(null,c__5568__auto__);
var G__6688 = (0);
seq__6677 = G__6685;
chunk__6678 = G__6686;
count__6679 = G__6687;
i__6680 = G__6688;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6677__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6689 = cljs.core.next.call(null,seq__6677__$1);
var G__6690 = null;
var G__6691 = (0);
var G__6692 = (0);
seq__6677 = G__6689;
chunk__6678 = G__6690;
count__6679 = G__6691;
i__6680 = G__6692;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=reporting.js.map
