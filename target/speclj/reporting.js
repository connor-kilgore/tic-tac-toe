// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__6833_SHARP_){
return p1__6833_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_6834 = (function (reporter,message){
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
return speclj$reporting$Reporter$report_message$dyn_6834.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_6835 = (function (this$,description){
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
return speclj$reporting$Reporter$report_description$dyn_6835.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_6836 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pass$dyn_6836.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_6837 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pending$dyn_6837.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_6838 = (function (this$,result){
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
return speclj$reporting$Reporter$report_fail$dyn_6838.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_6839 = (function (this$,results){
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
return speclj$reporting$Reporter$report_runs$dyn_6839.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_6840 = (function (this$,exception){
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
return speclj$reporting$Reporter$report_error$dyn_6840.call(null,this$,exception);
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
var seq__6841 = cljs.core.seq.call(null,reporters);
var chunk__6842 = null;
var count__6843 = (0);
var i__6844 = (0);
while(true){
if((i__6844 < count__6843)){
var reporter = cljs.core._nth.call(null,chunk__6842,i__6844);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6845 = seq__6841;
var G__6846 = chunk__6842;
var G__6847 = count__6843;
var G__6848 = (i__6844 + (1));
seq__6841 = G__6845;
chunk__6842 = G__6846;
count__6843 = G__6847;
i__6844 = G__6848;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6841);
if(temp__5753__auto__){
var seq__6841__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6841__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6841__$1);
var G__6849 = cljs.core.chunk_rest.call(null,seq__6841__$1);
var G__6850 = c__5568__auto__;
var G__6851 = cljs.core.count.call(null,c__5568__auto__);
var G__6852 = (0);
seq__6841 = G__6849;
chunk__6842 = G__6850;
count__6843 = G__6851;
i__6844 = G__6852;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6841__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6853 = cljs.core.next.call(null,seq__6841__$1);
var G__6854 = null;
var G__6855 = (0);
var G__6856 = (0);
seq__6841 = G__6853;
chunk__6842 = G__6854;
count__6843 = G__6855;
i__6844 = G__6856;
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
var seq__6857 = cljs.core.seq.call(null,reporters);
var chunk__6858 = null;
var count__6859 = (0);
var i__6860 = (0);
while(true){
if((i__6860 < count__6859)){
var reporter = cljs.core._nth.call(null,chunk__6858,i__6860);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6861 = seq__6857;
var G__6862 = chunk__6858;
var G__6863 = count__6859;
var G__6864 = (i__6860 + (1));
seq__6857 = G__6861;
chunk__6858 = G__6862;
count__6859 = G__6863;
i__6860 = G__6864;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6857);
if(temp__5753__auto__){
var seq__6857__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6857__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6857__$1);
var G__6865 = cljs.core.chunk_rest.call(null,seq__6857__$1);
var G__6866 = c__5568__auto__;
var G__6867 = cljs.core.count.call(null,c__5568__auto__);
var G__6868 = (0);
seq__6857 = G__6865;
chunk__6858 = G__6866;
count__6859 = G__6867;
i__6860 = G__6868;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6857__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6869 = cljs.core.next.call(null,seq__6857__$1);
var G__6870 = null;
var G__6871 = (0);
var G__6872 = (0);
seq__6857 = G__6869;
chunk__6858 = G__6870;
count__6859 = G__6871;
i__6860 = G__6872;
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
var seq__6873 = cljs.core.seq.call(null,reporters);
var chunk__6874 = null;
var count__6875 = (0);
var i__6876 = (0);
while(true){
if((i__6876 < count__6875)){
var reporter = cljs.core._nth.call(null,chunk__6874,i__6876);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6877 = seq__6873;
var G__6878 = chunk__6874;
var G__6879 = count__6875;
var G__6880 = (i__6876 + (1));
seq__6873 = G__6877;
chunk__6874 = G__6878;
count__6875 = G__6879;
i__6876 = G__6880;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6873);
if(temp__5753__auto__){
var seq__6873__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6873__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6873__$1);
var G__6881 = cljs.core.chunk_rest.call(null,seq__6873__$1);
var G__6882 = c__5568__auto__;
var G__6883 = cljs.core.count.call(null,c__5568__auto__);
var G__6884 = (0);
seq__6873 = G__6881;
chunk__6874 = G__6882;
count__6875 = G__6883;
i__6876 = G__6884;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6873__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6885 = cljs.core.next.call(null,seq__6873__$1);
var G__6886 = null;
var G__6887 = (0);
var G__6888 = (0);
seq__6873 = G__6885;
chunk__6874 = G__6886;
count__6875 = G__6887;
i__6876 = G__6888;
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
var seq__6889 = cljs.core.seq.call(null,reporters);
var chunk__6890 = null;
var count__6891 = (0);
var i__6892 = (0);
while(true){
if((i__6892 < count__6891)){
var reporter = cljs.core._nth.call(null,chunk__6890,i__6892);
speclj.reporting.report_error.call(null,reporter,result);


var G__6893 = seq__6889;
var G__6894 = chunk__6890;
var G__6895 = count__6891;
var G__6896 = (i__6892 + (1));
seq__6889 = G__6893;
chunk__6890 = G__6894;
count__6891 = G__6895;
i__6892 = G__6896;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6889);
if(temp__5753__auto__){
var seq__6889__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6889__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6889__$1);
var G__6897 = cljs.core.chunk_rest.call(null,seq__6889__$1);
var G__6898 = c__5568__auto__;
var G__6899 = cljs.core.count.call(null,c__5568__auto__);
var G__6900 = (0);
seq__6889 = G__6897;
chunk__6890 = G__6898;
count__6891 = G__6899;
i__6892 = G__6900;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6889__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__6901 = cljs.core.next.call(null,seq__6889__$1);
var G__6902 = null;
var G__6903 = (0);
var G__6904 = (0);
seq__6889 = G__6901;
chunk__6890 = G__6902;
count__6891 = G__6903;
i__6892 = G__6904;
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
var levels_6905 = speclj.platform.stack_trace.call(null,exception);
var elides_6906 = (0);
while(true){
if(cljs.core.seq.call(null,levels_6905)){
var level_6907 = cljs.core.first.call(null,levels_6905);
if(speclj.platform.elide_level_QMARK_.call(null,level_6907)){
var G__6908 = cljs.core.rest.call(null,levels_6905);
var G__6909 = (elides_6906 + (1));
levels_6905 = G__6908;
elides_6906 = G__6909;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_6906);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_6907));

var G__6910 = cljs.core.rest.call(null,levels_6905);
var G__6911 = (0);
levels_6905 = G__6910;
elides_6906 = G__6911;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_6906);
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
var _STAR_print_newline_STAR__orig_val__6912_6916 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6913_6917 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6914_6918 = true;
var _STAR_print_fn_STAR__temp_val__6915_6919 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6914_6918);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6915_6919);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6913_6917);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6912_6916);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___6923 = arguments.length;
var i__5770__auto___6924 = (0);
while(true){
if((i__5770__auto___6924 < len__5769__auto___6923)){
args__5775__auto__.push((arguments[i__5770__auto___6924]));

var G__6925 = (i__5770__auto___6924 + (1));
i__5770__auto___6924 = G__6925;
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
var prefixed_lines = cljs.core.map.call(null,(function (p1__6920_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6920_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq6921){
var G__6922 = cljs.core.first.call(null,seq6921);
var seq6921__$1 = cljs.core.next.call(null,seq6921);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6922,seq6921__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5775__auto__ = [];
var len__5769__auto___6928 = arguments.length;
var i__5770__auto___6929 = (0);
while(true){
if((i__5770__auto___6929 < len__5769__auto___6928)){
args__5775__auto__.push((arguments[i__5770__auto___6929]));

var G__6930 = (i__5770__auto___6929 + (1));
i__5770__auto___6929 = G__6930;
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
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq6926){
var G__6927 = cljs.core.first.call(null,seq6926);
var seq6926__$1 = cljs.core.next.call(null,seq6926);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6927,seq6926__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__6931 = cljs.core.seq.call(null,reporters);
var chunk__6932 = null;
var count__6933 = (0);
var i__6934 = (0);
while(true){
if((i__6934 < count__6933)){
var reporter = cljs.core._nth.call(null,chunk__6932,i__6934);
speclj.reporting.report_description.call(null,reporter,description);


var G__6935 = seq__6931;
var G__6936 = chunk__6932;
var G__6937 = count__6933;
var G__6938 = (i__6934 + (1));
seq__6931 = G__6935;
chunk__6932 = G__6936;
count__6933 = G__6937;
i__6934 = G__6938;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6931);
if(temp__5753__auto__){
var seq__6931__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6931__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6931__$1);
var G__6939 = cljs.core.chunk_rest.call(null,seq__6931__$1);
var G__6940 = c__5568__auto__;
var G__6941 = cljs.core.count.call(null,c__5568__auto__);
var G__6942 = (0);
seq__6931 = G__6939;
chunk__6932 = G__6940;
count__6933 = G__6941;
i__6934 = G__6942;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6931__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__6943 = cljs.core.next.call(null,seq__6931__$1);
var G__6944 = null;
var G__6945 = (0);
var G__6946 = (0);
seq__6931 = G__6943;
chunk__6932 = G__6944;
count__6933 = G__6945;
i__6934 = G__6946;
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
var seq__6947 = cljs.core.seq.call(null,reporters);
var chunk__6948 = null;
var count__6949 = (0);
var i__6950 = (0);
while(true){
if((i__6950 < count__6949)){
var reporter = cljs.core._nth.call(null,chunk__6948,i__6950);
speclj.reporting.report_runs.call(null,reporter,results);


var G__6951 = seq__6947;
var G__6952 = chunk__6948;
var G__6953 = count__6949;
var G__6954 = (i__6950 + (1));
seq__6947 = G__6951;
chunk__6948 = G__6952;
count__6949 = G__6953;
i__6950 = G__6954;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6947);
if(temp__5753__auto__){
var seq__6947__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6947__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6947__$1);
var G__6955 = cljs.core.chunk_rest.call(null,seq__6947__$1);
var G__6956 = c__5568__auto__;
var G__6957 = cljs.core.count.call(null,c__5568__auto__);
var G__6958 = (0);
seq__6947 = G__6955;
chunk__6948 = G__6956;
count__6949 = G__6957;
i__6950 = G__6958;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6947__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__6959 = cljs.core.next.call(null,seq__6947__$1);
var G__6960 = null;
var G__6961 = (0);
var G__6962 = (0);
seq__6947 = G__6959;
chunk__6948 = G__6960;
count__6949 = G__6961;
i__6950 = G__6962;
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
var seq__6963 = cljs.core.seq.call(null,reporters);
var chunk__6964 = null;
var count__6965 = (0);
var i__6966 = (0);
while(true){
if((i__6966 < count__6965)){
var reporter = cljs.core._nth.call(null,chunk__6964,i__6966);
speclj.reporting.report_message.call(null,reporter,message);


var G__6967 = seq__6963;
var G__6968 = chunk__6964;
var G__6969 = count__6965;
var G__6970 = (i__6966 + (1));
seq__6963 = G__6967;
chunk__6964 = G__6968;
count__6965 = G__6969;
i__6966 = G__6970;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6963);
if(temp__5753__auto__){
var seq__6963__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6963__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6963__$1);
var G__6971 = cljs.core.chunk_rest.call(null,seq__6963__$1);
var G__6972 = c__5568__auto__;
var G__6973 = cljs.core.count.call(null,c__5568__auto__);
var G__6974 = (0);
seq__6963 = G__6971;
chunk__6964 = G__6972;
count__6965 = G__6973;
i__6966 = G__6974;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6963__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__6975 = cljs.core.next.call(null,seq__6963__$1);
var G__6976 = null;
var G__6977 = (0);
var G__6978 = (0);
seq__6963 = G__6975;
chunk__6964 = G__6976;
count__6965 = G__6977;
i__6966 = G__6978;
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
var seq__6979 = cljs.core.seq.call(null,reporters);
var chunk__6980 = null;
var count__6981 = (0);
var i__6982 = (0);
while(true){
if((i__6982 < count__6981)){
var reporter = cljs.core._nth.call(null,chunk__6980,i__6982);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6983 = seq__6979;
var G__6984 = chunk__6980;
var G__6985 = count__6981;
var G__6986 = (i__6982 + (1));
seq__6979 = G__6983;
chunk__6980 = G__6984;
count__6981 = G__6985;
i__6982 = G__6986;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6979);
if(temp__5753__auto__){
var seq__6979__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6979__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6979__$1);
var G__6987 = cljs.core.chunk_rest.call(null,seq__6979__$1);
var G__6988 = c__5568__auto__;
var G__6989 = cljs.core.count.call(null,c__5568__auto__);
var G__6990 = (0);
seq__6979 = G__6987;
chunk__6980 = G__6988;
count__6981 = G__6989;
i__6982 = G__6990;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6979__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6991 = cljs.core.next.call(null,seq__6979__$1);
var G__6992 = null;
var G__6993 = (0);
var G__6994 = (0);
seq__6979 = G__6991;
chunk__6980 = G__6992;
count__6981 = G__6993;
i__6982 = G__6994;
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
