// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('speclj.core');
goog.require('cljs.core');
goog.require('clojure.data');
goog.require('clojure.string');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.running');
goog.require('speclj.stub');
goog.require('speclj.tags');
goog.require('speclj.report.documentation');
goog.require('speclj.report.progress');
goog.require('speclj.report.silent');
goog.require('speclj.run.standard');
var ret__5824__auto___7413 = (function (){
speclj.core._new_exception = (function speclj$core$_new_exception(var_args){
var G__7412 = arguments.length;
switch (G__7412) {
case 2:
return speclj.core._new_exception.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return speclj.core._new_exception.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core._new_exception.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core._new_exception.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"java.lang.Exception.","java.lang.Exception.",-863079624,null),null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_exception.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"java.lang.Exception.","java.lang.Exception.",-863079624,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_exception.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,message,cause){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"java.lang.Exception.","java.lang.Exception.",-863079624,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null)),(new cljs.core.List(null,cause,null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_exception.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(speclj.core._new_exception.cljs$lang$macro = true);

var ret__5824__auto___7417 = (function (){
speclj.core._new_throwable = (function speclj$core$_new_throwable(var_args){
var G__7416 = arguments.length;
switch (G__7416) {
case 2:
return speclj.core._new_throwable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return speclj.core._new_throwable.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core._new_throwable.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Object.","js/Object.",-1306928840,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"java.lang.Throwable.","java.lang.Throwable.",1508443242,null),null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_throwable.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Object.","js/Object.",-1306928840,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"java.lang.Throwable.","java.lang.Throwable.",1508443242,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_throwable.cljs$lang$maxFixedArity = 3);

return null;
})()
;
(speclj.core._new_throwable.cljs$lang$macro = true);

var ret__5824__auto___7419 = speclj.core._new_failure = (function speclj$core$_new_failure(_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"speclj.platform.SpecFailure.","speclj.platform.SpecFailure.",610897916,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null)))));
});
(speclj.core._new_failure.cljs$lang$macro = true);

var ret__5824__auto___7420 = speclj.core._new_pending = (function speclj$core$_new_pending(_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"speclj.platform.SpecPending.","speclj.platform.SpecPending.",-1205652622,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null)))));
});
(speclj.core._new_pending.cljs$lang$macro = true);

var ret__5824__auto___7426 = (function (){
speclj.core.help_it = (function speclj$core$help_it(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7427 = arguments.length;
var i__5770__auto___7428 = (0);
while(true){
if((i__5770__auto___7428 < len__5769__auto___7427)){
args__5775__auto__.push((arguments[i__5770__auto___7428]));

var G__7429 = (i__5770__auto___7428 + (1));
i__5770__auto___7428 = G__7429;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return speclj.core.help_it.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(speclj.core.help_it.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,focused_QMARK_,body){
if(cljs.core.seq.call(null,body)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-characteristic","speclj.components/new-characteristic",-1463693127,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,focused_QMARK_,null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-characteristic","speclj.components/new-characteristic",-1463693127,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","pending","speclj.core/pending",-571433532,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,focused_QMARK_,null,(1),null)))));
}
}));

(speclj.core.help_it.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(speclj.core.help_it.cljs$lang$applyTo = (function (seq7421){
var G__7422 = cljs.core.first.call(null,seq7421);
var seq7421__$1 = cljs.core.next.call(null,seq7421);
var G__7423 = cljs.core.first.call(null,seq7421__$1);
var seq7421__$2 = cljs.core.next.call(null,seq7421__$1);
var G__7424 = cljs.core.first.call(null,seq7421__$2);
var seq7421__$3 = cljs.core.next.call(null,seq7421__$2);
var G__7425 = cljs.core.first.call(null,seq7421__$3);
var seq7421__$4 = cljs.core.next.call(null,seq7421__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7422,G__7423,G__7424,G__7425,seq7421__$4);
}));

return null;
})()
;
(speclj.core.help_it.cljs$lang$macro = true);

var ret__5824__auto___7437 = (function (){
speclj.core.help_describe = (function speclj$core$help_describe(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7438 = arguments.length;
var i__5770__auto___7439 = (0);
while(true){
if((i__5770__auto___7439 < len__5769__auto___7438)){
args__5775__auto__.push((arguments[i__5770__auto___7439]));

var G__7440 = (i__5770__auto___7439 + (1));
i__5770__auto___7439 = G__7440;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return speclj.core.help_describe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(speclj.core.help_describe.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,focused_QMARK_,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"description__7430__auto__","description__7430__auto__",-1819521931,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-description","speclj.components/new-description",1764687593,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,focused_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.name.call(null,cljs.core._STAR_ns_STAR_.name()),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","*parent-description*","speclj.config/*parent-description*",923760011,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__7430__auto__","description__7430__auto__",-1819521931,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doseq","cljs.core/doseq",-169320766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"component__7431__auto__","component__7431__auto__",125565220,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null),null,(1),null)),components))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","install","speclj.components/install",-280361868,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"component__7431__auto__","component__7431__auto__",125565220,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__7430__auto__","description__7430__auto__",-1819521931,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","*parent-description*","speclj.config/*parent-description*",923760011,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","bound?","speclj.core/bound?",-726786538,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","*parent-description*","speclj.config/*parent-description*",923760011,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.running","submit-description","speclj.running/submit-description",788083680,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","active-runner","speclj.config/active-runner",982927849,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__7430__auto__","description__7430__auto__",-1819521931,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__7430__auto__","description__7430__auto__",-1819521931,null),null,(1),null)))));
}));

(speclj.core.help_describe.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(speclj.core.help_describe.cljs$lang$applyTo = (function (seq7432){
var G__7433 = cljs.core.first.call(null,seq7432);
var seq7432__$1 = cljs.core.next.call(null,seq7432);
var G__7434 = cljs.core.first.call(null,seq7432__$1);
var seq7432__$2 = cljs.core.next.call(null,seq7432__$1);
var G__7435 = cljs.core.first.call(null,seq7432__$2);
var seq7432__$3 = cljs.core.next.call(null,seq7432__$2);
var G__7436 = cljs.core.first.call(null,seq7432__$3);
var seq7432__$4 = cljs.core.next.call(null,seq7432__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7433,G__7434,G__7435,G__7436,seq7432__$4);
}));

return null;
})()
;
(speclj.core.help_describe.cljs$lang$macro = true);

var ret__5824__auto___7445 = (function (){
/**
 * body => any forms, but should contain at least one assertion (should)
 * 
 *   Declares a new characteristic (example in rspec).
 */
speclj.core.it = (function speclj$core$it(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7446 = arguments.length;
var i__5770__auto___7447 = (0);
while(true){
if((i__5770__auto___7447 < len__5769__auto___7446)){
args__5775__auto__.push((arguments[i__5770__auto___7447]));

var G__7448 = (i__5770__auto___7447 + (1));
i__5770__auto___7447 = G__7448;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return speclj.core.it.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(speclj.core.it.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-it","speclj.core/help-it",944489893,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),body)));
}));

(speclj.core.it.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.it.cljs$lang$applyTo = (function (seq7441){
var G__7442 = cljs.core.first.call(null,seq7441);
var seq7441__$1 = cljs.core.next.call(null,seq7441);
var G__7443 = cljs.core.first.call(null,seq7441__$1);
var seq7441__$2 = cljs.core.next.call(null,seq7441__$1);
var G__7444 = cljs.core.first.call(null,seq7441__$2);
var seq7441__$3 = cljs.core.next.call(null,seq7441__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7442,G__7443,G__7444,seq7441__$3);
}));

return null;
})()
;
(speclj.core.it.cljs$lang$macro = true);

var ret__5824__auto___7453 = (function (){
/**
 * Syntactic shortcut to make the characteristic pending.
 */
speclj.core.xit = (function speclj$core$xit(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7454 = arguments.length;
var i__5770__auto___7455 = (0);
while(true){
if((i__5770__auto___7455 < len__5769__auto___7454)){
args__5775__auto__.push((arguments[i__5770__auto___7455]));

var G__7456 = (i__5770__auto___7455 + (1));
i__5770__auto___7455 = G__7456;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return speclj.core.xit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(speclj.core.xit.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","it","speclj.core/it",396347491,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","pending","speclj.core/pending",-571433532,null),null,(1),null))))),null,(1),null)),body)));
}));

(speclj.core.xit.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.xit.cljs$lang$applyTo = (function (seq7449){
var G__7450 = cljs.core.first.call(null,seq7449);
var seq7449__$1 = cljs.core.next.call(null,seq7449);
var G__7451 = cljs.core.first.call(null,seq7449__$1);
var seq7449__$2 = cljs.core.next.call(null,seq7449__$1);
var G__7452 = cljs.core.first.call(null,seq7449__$2);
var seq7449__$3 = cljs.core.next.call(null,seq7449__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7450,G__7451,G__7452,seq7449__$3);
}));

return null;
})()
;
(speclj.core.xit.cljs$lang$macro = true);

var ret__5824__auto___7461 = (function (){
/**
 * Same as 'it', but it is meant to facilitate temporary debugging.
 *   Characteristics defined with this macro will be executed along with any
 *   other characteristics thus defined, but all other characteristic defined
 *   with 'it' will be ignored.
 */
speclj.core.focus_it = (function speclj$core$focus_it(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7462 = arguments.length;
var i__5770__auto___7463 = (0);
while(true){
if((i__5770__auto___7463 < len__5769__auto___7462)){
args__5775__auto__.push((arguments[i__5770__auto___7463]));

var G__7464 = (i__5770__auto___7463 + (1));
i__5770__auto___7463 = G__7464;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return speclj.core.focus_it.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(speclj.core.focus_it.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-it","speclj.core/help-it",944489893,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),body)));
}));

(speclj.core.focus_it.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.focus_it.cljs$lang$applyTo = (function (seq7457){
var G__7458 = cljs.core.first.call(null,seq7457);
var seq7457__$1 = cljs.core.next.call(null,seq7457);
var G__7459 = cljs.core.first.call(null,seq7457__$1);
var seq7457__$2 = cljs.core.next.call(null,seq7457__$1);
var G__7460 = cljs.core.first.call(null,seq7457__$2);
var seq7457__$3 = cljs.core.next.call(null,seq7457__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7458,G__7459,G__7460,seq7457__$3);
}));

return null;
})()
;
(speclj.core.focus_it.cljs$lang$macro = true);

var ret__5824__auto___7469 = (function (){
speclj.core.when_not_bound = (function speclj$core$when_not_bound(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7470 = arguments.length;
var i__5770__auto___7471 = (0);
while(true){
if((i__5770__auto___7471 < len__5769__auto___7470)){
args__5775__auto__.push((arguments[i__5770__auto___7471]));

var G__7472 = (i__5770__auto___7471 + (1));
i__5770__auto___7471 = G__7472;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return speclj.core.when_not_bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(speclj.core.when_not_bound.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","bound?","speclj.core/bound?",-726786538,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","find-var","speclj.core/find-var",1418073279,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.when_not_bound.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.when_not_bound.cljs$lang$applyTo = (function (seq7465){
var G__7466 = cljs.core.first.call(null,seq7465);
var seq7465__$1 = cljs.core.next.call(null,seq7465);
var G__7467 = cljs.core.first.call(null,seq7465__$1);
var seq7465__$2 = cljs.core.next.call(null,seq7465__$1);
var G__7468 = cljs.core.first.call(null,seq7465__$2);
var seq7465__$3 = cljs.core.next.call(null,seq7465__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7466,G__7467,G__7468,seq7465__$3);
}));

return null;
})()
;
(speclj.core.when_not_bound.cljs$lang$macro = true);

var ret__5824__auto___7477 = (function (){
/**
 * body => & spec-components
 * 
 *   Declares a new spec.  The body can contain any forms that evaluate to spec components (it, before, after, with ...).
 */
speclj.core.describe = (function speclj$core$describe(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7478 = arguments.length;
var i__5770__auto___7479 = (0);
while(true){
if((i__5770__auto___7479 < len__5769__auto___7478)){
args__5775__auto__.push((arguments[i__5770__auto___7479]));

var G__7480 = (i__5770__auto___7479 + (1));
i__5770__auto___7479 = G__7480;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return speclj.core.describe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(speclj.core.describe.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-describe","speclj.core/help-describe",-589196932,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),components)));
}));

(speclj.core.describe.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.describe.cljs$lang$applyTo = (function (seq7473){
var G__7474 = cljs.core.first.call(null,seq7473);
var seq7473__$1 = cljs.core.next.call(null,seq7473);
var G__7475 = cljs.core.first.call(null,seq7473__$1);
var seq7473__$2 = cljs.core.next.call(null,seq7473__$1);
var G__7476 = cljs.core.first.call(null,seq7473__$2);
var seq7473__$3 = cljs.core.next.call(null,seq7473__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7474,G__7475,G__7476,seq7473__$3);
}));

return null;
})()
;
(speclj.core.describe.cljs$lang$macro = true);

var ret__5824__auto___7485 = (function (){
/**
 * Same as 'describe', but it is meant to facilitate temporary debugging.
 * Components defined with this macro will be fully executed along with any
 * other components thus defined, but all other sibling components defined
 * with 'describe' will be ignored.
 */
speclj.core.focus_describe = (function speclj$core$focus_describe(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7486 = arguments.length;
var i__5770__auto___7487 = (0);
while(true){
if((i__5770__auto___7487 < len__5769__auto___7486)){
args__5775__auto__.push((arguments[i__5770__auto___7487]));

var G__7488 = (i__5770__auto___7487 + (1));
i__5770__auto___7487 = G__7488;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return speclj.core.focus_describe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(speclj.core.focus_describe.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-describe","speclj.core/help-describe",-589196932,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),components)));
}));

(speclj.core.focus_describe.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.focus_describe.cljs$lang$applyTo = (function (seq7481){
var G__7482 = cljs.core.first.call(null,seq7481);
var seq7481__$1 = cljs.core.next.call(null,seq7481);
var G__7483 = cljs.core.first.call(null,seq7481__$1);
var seq7481__$2 = cljs.core.next.call(null,seq7481__$1);
var G__7484 = cljs.core.first.call(null,seq7481__$2);
var seq7481__$3 = cljs.core.next.call(null,seq7481__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7482,G__7483,G__7484,seq7481__$3);
}));

return null;
})()
;
(speclj.core.focus_describe.cljs$lang$macro = true);

var ret__5824__auto___7493 = (function (){
/**
 * Same as describe, but should be used to nest testing contexts inside the outer describe.
 *   Contexts can be nested any number of times.
 */
speclj.core.context = (function speclj$core$context(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7494 = arguments.length;
var i__5770__auto___7495 = (0);
while(true){
if((i__5770__auto___7495 < len__5769__auto___7494)){
args__5775__auto__.push((arguments[i__5770__auto___7495]));

var G__7496 = (i__5770__auto___7495 + (1));
i__5770__auto___7495 = G__7496;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return speclj.core.context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(speclj.core.context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","describe","speclj.core/describe",-925284183,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),components)));
}));

(speclj.core.context.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.context.cljs$lang$applyTo = (function (seq7489){
var G__7490 = cljs.core.first.call(null,seq7489);
var seq7489__$1 = cljs.core.next.call(null,seq7489);
var G__7491 = cljs.core.first.call(null,seq7489__$1);
var seq7489__$2 = cljs.core.next.call(null,seq7489__$1);
var G__7492 = cljs.core.first.call(null,seq7489__$2);
var seq7489__$3 = cljs.core.next.call(null,seq7489__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7490,G__7491,G__7492,seq7489__$3);
}));

return null;
})()
;
(speclj.core.context.cljs$lang$macro = true);

var ret__5824__auto___7501 = (function (){
/**
 * Same as 'context', but it is meant to facilitate temporary debugging.
 * Components defined with this macro will be fully executed along with any
 * other components thus defined, but all other sibling components defined
 * with 'context' will be ignored.
 */
speclj.core.focus_context = (function speclj$core$focus_context(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7502 = arguments.length;
var i__5770__auto___7503 = (0);
while(true){
if((i__5770__auto___7503 < len__5769__auto___7502)){
args__5775__auto__.push((arguments[i__5770__auto___7503]));

var G__7504 = (i__5770__auto___7503 + (1));
i__5770__auto___7503 = G__7504;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return speclj.core.focus_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(speclj.core.focus_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","focus-describe","speclj.core/focus-describe",-1186168696,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),components)));
}));

(speclj.core.focus_context.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.focus_context.cljs$lang$applyTo = (function (seq7497){
var G__7498 = cljs.core.first.call(null,seq7497);
var seq7497__$1 = cljs.core.next.call(null,seq7497);
var G__7499 = cljs.core.first.call(null,seq7497__$1);
var seq7497__$2 = cljs.core.next.call(null,seq7497__$1);
var G__7500 = cljs.core.first.call(null,seq7497__$2);
var seq7497__$3 = cljs.core.next.call(null,seq7497__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7498,G__7499,G__7500,seq7497__$3);
}));

return null;
})()
;
(speclj.core.focus_context.cljs$lang$macro = true);

var ret__5824__auto___7508 = (function (){
/**
 * Declares a function that is invoked before each characteristic in the containing describe scope is evaluated. The body
 *   may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.before = (function speclj$core$before(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7509 = arguments.length;
var i__5770__auto___7510 = (0);
while(true){
if((i__5770__auto___7510 < len__5769__auto___7509)){
args__5775__auto__.push((arguments[i__5770__auto___7510]));

var G__7511 = (i__5770__auto___7510 + (1));
i__5770__auto___7510 = G__7511;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return speclj.core.before.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(speclj.core.before.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-before","speclj.components/new-before",-1748544967,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.before.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.before.cljs$lang$applyTo = (function (seq7505){
var G__7506 = cljs.core.first.call(null,seq7505);
var seq7505__$1 = cljs.core.next.call(null,seq7505);
var G__7507 = cljs.core.first.call(null,seq7505__$1);
var seq7505__$2 = cljs.core.next.call(null,seq7505__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7506,G__7507,seq7505__$2);
}));

return null;
})()
;
(speclj.core.before.cljs$lang$macro = true);

var ret__5824__auto___7515 = (function (){
/**
 * Declares a function that is invoked after each characteristic in the containing describe scope is evaluated. The body
 *   may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.after = (function speclj$core$after(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7516 = arguments.length;
var i__5770__auto___7517 = (0);
while(true){
if((i__5770__auto___7517 < len__5769__auto___7516)){
args__5775__auto__.push((arguments[i__5770__auto___7517]));

var G__7518 = (i__5770__auto___7517 + (1));
i__5770__auto___7517 = G__7518;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return speclj.core.after.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(speclj.core.after.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-after","speclj.components/new-after",-755884805,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.after.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.after.cljs$lang$applyTo = (function (seq7512){
var G__7513 = cljs.core.first.call(null,seq7512);
var seq7512__$1 = cljs.core.next.call(null,seq7512);
var G__7514 = cljs.core.first.call(null,seq7512__$1);
var seq7512__$2 = cljs.core.next.call(null,seq7512__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7513,G__7514,seq7512__$2);
}));

return null;
})()
;
(speclj.core.after.cljs$lang$macro = true);

var ret__5824__auto___7523 = (function (){
/**
 * Declares a function that will be invoked around each characteristic of the containing describe scope.
 *   The characteristic will be passed in and the around function is responsible for invoking it.
 * 
 *   (around [it] (binding [*out* new-out] (it)))
 * 
 *   Note that if you have cleanup that must run, use a 'finally' block:
 * 
 *   (around [it] (try (it) (finally :clean-up)))
 */
speclj.core.around = (function speclj$core$around(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7524 = arguments.length;
var i__5770__auto___7525 = (0);
while(true){
if((i__5770__auto___7525 < len__5769__auto___7524)){
args__5775__auto__.push((arguments[i__5770__auto___7525]));

var G__7526 = (i__5770__auto___7525 + (1));
i__5770__auto___7525 = G__7526;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return speclj.core.around.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(speclj.core.around.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,binding,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-around","speclj.components/new-around",1527117948,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,binding,null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.around.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.around.cljs$lang$applyTo = (function (seq7519){
var G__7520 = cljs.core.first.call(null,seq7519);
var seq7519__$1 = cljs.core.next.call(null,seq7519);
var G__7521 = cljs.core.first.call(null,seq7519__$1);
var seq7519__$2 = cljs.core.next.call(null,seq7519__$1);
var G__7522 = cljs.core.first.call(null,seq7519__$2);
var seq7519__$3 = cljs.core.next.call(null,seq7519__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7520,G__7521,G__7522,seq7519__$3);
}));

return null;
})()
;
(speclj.core.around.cljs$lang$macro = true);

var ret__5824__auto___7528 = /**
 * Redefines the bindings around each characteristic of the containing describe scope.
 */
speclj.core.redefs_around = (function speclj$core$redefs_around(_AMPERSAND_form,_AMPERSAND_env,bindings){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","around","speclj.core/around",649826642,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__7527__auto__","it__7527__auto__",1654314111,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__7527__auto__","it__7527__auto__",1654314111,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.redefs_around.cljs$lang$macro = true);

var ret__5824__auto___7532 = (function (){
/**
 * Declares a function that is invoked once before any characteristic in the containing describe scope is evaluated. The
 *   body may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.before_all = (function speclj$core$before_all(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7533 = arguments.length;
var i__5770__auto___7534 = (0);
while(true){
if((i__5770__auto___7534 < len__5769__auto___7533)){
args__5775__auto__.push((arguments[i__5770__auto___7534]));

var G__7535 = (i__5770__auto___7534 + (1));
i__5770__auto___7534 = G__7535;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return speclj.core.before_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(speclj.core.before_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-before-all","speclj.components/new-before-all",879702550,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.before_all.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.before_all.cljs$lang$applyTo = (function (seq7529){
var G__7530 = cljs.core.first.call(null,seq7529);
var seq7529__$1 = cljs.core.next.call(null,seq7529);
var G__7531 = cljs.core.first.call(null,seq7529__$1);
var seq7529__$2 = cljs.core.next.call(null,seq7529__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7530,G__7531,seq7529__$2);
}));

return null;
})()
;
(speclj.core.before_all.cljs$lang$macro = true);

var ret__5824__auto___7539 = (function (){
/**
 * Declares a function that is invoked once after all the characteristics in the containing describe scope have been
 *   evaluated.  The body may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.after_all = (function speclj$core$after_all(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7540 = arguments.length;
var i__5770__auto___7541 = (0);
while(true){
if((i__5770__auto___7541 < len__5769__auto___7540)){
args__5775__auto__.push((arguments[i__5770__auto___7541]));

var G__7542 = (i__5770__auto___7541 + (1));
i__5770__auto___7541 = G__7542;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return speclj.core.after_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(speclj.core.after_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-after-all","speclj.components/new-after-all",1608037396,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.after_all.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.after_all.cljs$lang$applyTo = (function (seq7536){
var G__7537 = cljs.core.first.call(null,seq7536);
var seq7536__$1 = cljs.core.next.call(null,seq7536);
var G__7538 = cljs.core.first.call(null,seq7536__$1);
var seq7536__$2 = cljs.core.next.call(null,seq7536__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7537,G__7538,seq7536__$2);
}));

return null;
})()
;
(speclj.core.after_all.cljs$lang$macro = true);

var ret__5824__auto___7547 = (function (){
/**
 * Declares a function that is invoked once around all characteristics of the containing describe scope.
 */
speclj.core.around_all = (function speclj$core$around_all(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7548 = arguments.length;
var i__5770__auto___7549 = (0);
while(true){
if((i__5770__auto___7549 < len__5769__auto___7548)){
args__5775__auto__.push((arguments[i__5770__auto___7549]));

var G__7550 = (i__5770__auto___7549 + (1));
i__5770__auto___7549 = G__7550;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return speclj.core.around_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(speclj.core.around_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-around-all","speclj.components/new-around-all",1113944722,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,context,null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.around_all.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.around_all.cljs$lang$applyTo = (function (seq7543){
var G__7544 = cljs.core.first.call(null,seq7543);
var seq7543__$1 = cljs.core.next.call(null,seq7543);
var G__7545 = cljs.core.first.call(null,seq7543__$1);
var seq7543__$2 = cljs.core.next.call(null,seq7543__$1);
var G__7546 = cljs.core.first.call(null,seq7543__$2);
var seq7543__$3 = cljs.core.next.call(null,seq7543__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7544,G__7545,G__7546,seq7543__$3);
}));

return null;
})()
;
(speclj.core.around_all.cljs$lang$macro = true);

speclj.core.cljs_munge = null;
speclj.core._make_with = (function speclj$core$_make_with(name,body,ctor,bang_QMARK_){
var var_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null));
var munged_name = (cljs.core.truth_(speclj.core.cljs_munge)?cljs.core.with_meta.call(null,cljs.core.symbol.call(null,speclj.core.cljs_munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null)):var_name);
var unique_name = cljs.core.gensym.call(null,"with");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","declare","cljs.core/declare",1312638100,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,unique_name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,ctor,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,munged_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,unique_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,bang_QMARK_,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,unique_name,null,(1),null)))));
});
var ret__5824__auto___7555 = (function (){
/**
 * Declares a reference-able symbol that will be lazily evaluated once per characteristic of the containing
 *   describe scope.  The body may contain any forms, the last of which will be the value of the dereferenced symbol.
 * 
 *   (with meaning 42)
 *   (it "knows the meaning of life" (should= @meaning (the-meaning-of :life)))
 */
speclj.core.with$ = (function speclj$core$with(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7556 = arguments.length;
var i__5770__auto___7557 = (0);
while(true){
if((i__5770__auto___7557 < len__5769__auto___7556)){
args__5775__auto__.push((arguments[i__5770__auto___7557]));

var G__7558 = (i__5770__auto___7557 + (1));
i__5770__auto___7557 = G__7558;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return speclj.core.with$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(speclj.core.with$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return speclj.core._make_with.call(null,name,body,new cljs.core.Symbol("speclj.components","new-with","speclj.components/new-with",-24310803,null),false);
}));

(speclj.core.with$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.with$.cljs$lang$applyTo = (function (seq7551){
var G__7552 = cljs.core.first.call(null,seq7551);
var seq7551__$1 = cljs.core.next.call(null,seq7551);
var G__7553 = cljs.core.first.call(null,seq7551__$1);
var seq7551__$2 = cljs.core.next.call(null,seq7551__$1);
var G__7554 = cljs.core.first.call(null,seq7551__$2);
var seq7551__$3 = cljs.core.next.call(null,seq7551__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7552,G__7553,G__7554,seq7551__$3);
}));

return null;
})()
;
(speclj.core.with$.cljs$lang$macro = true);

var ret__5824__auto___7563 = (function (){
/**
 * Declares a reference-able symbol that will be evaluated immediately and reset once per characteristic of the containing
 *   describe scope.  The body may contain any forms, the last of which will be the value of the dereferenced symbol.
 * 
 *   (def my-num (atom 0))
 *   (with! my-with! (swap! my-num inc))
 *   (it "increments my-num before being accessed" (should= 1 @my-num) (should= 2 @my-with!))
 */
speclj.core.with_BANG_ = (function speclj$core$with_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7564 = arguments.length;
var i__5770__auto___7565 = (0);
while(true){
if((i__5770__auto___7565 < len__5769__auto___7564)){
args__5775__auto__.push((arguments[i__5770__auto___7565]));

var G__7566 = (i__5770__auto___7565 + (1));
i__5770__auto___7565 = G__7566;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return speclj.core.with_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(speclj.core.with_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return speclj.core._make_with.call(null,name,body,new cljs.core.Symbol("speclj.components","new-with","speclj.components/new-with",-24310803,null),true);
}));

(speclj.core.with_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.with_BANG_.cljs$lang$applyTo = (function (seq7559){
var G__7560 = cljs.core.first.call(null,seq7559);
var seq7559__$1 = cljs.core.next.call(null,seq7559);
var G__7561 = cljs.core.first.call(null,seq7559__$1);
var seq7559__$2 = cljs.core.next.call(null,seq7559__$1);
var G__7562 = cljs.core.first.call(null,seq7559__$2);
var seq7559__$3 = cljs.core.next.call(null,seq7559__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7560,G__7561,G__7562,seq7559__$3);
}));

return null;
})()
;
(speclj.core.with_BANG_.cljs$lang$macro = true);

var ret__5824__auto___7571 = (function (){
/**
 * Declares a reference-able symbol that will be lazily evaluated once per context. The body may contain any forms,
 * the last of which will be the value of the dereferenced symbol.
 * 
 *   (with-all meaning 42)
 *   (it "knows the meaning of life" (should= @meaning (the-meaning-of :life)))
 */
speclj.core.with_all = (function speclj$core$with_all(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7572 = arguments.length;
var i__5770__auto___7573 = (0);
while(true){
if((i__5770__auto___7573 < len__5769__auto___7572)){
args__5775__auto__.push((arguments[i__5770__auto___7573]));

var G__7574 = (i__5770__auto___7573 + (1));
i__5770__auto___7573 = G__7574;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return speclj.core.with_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(speclj.core.with_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return speclj.core._make_with.call(null,name,body,new cljs.core.Symbol("speclj.components","new-with-all","speclj.components/new-with-all",1631732463,null),false);
}));

(speclj.core.with_all.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.with_all.cljs$lang$applyTo = (function (seq7567){
var G__7568 = cljs.core.first.call(null,seq7567);
var seq7567__$1 = cljs.core.next.call(null,seq7567);
var G__7569 = cljs.core.first.call(null,seq7567__$1);
var seq7567__$2 = cljs.core.next.call(null,seq7567__$1);
var G__7570 = cljs.core.first.call(null,seq7567__$2);
var seq7567__$3 = cljs.core.next.call(null,seq7567__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7568,G__7569,G__7570,seq7567__$3);
}));

return null;
})()
;
(speclj.core.with_all.cljs$lang$macro = true);

var ret__5824__auto___7579 = (function (){
/**
 * Declares a reference-able symbol that will be immediately evaluated once per context. The body may contain any forms,
 * the last of which will be the value of the dereferenced symbol.
 * 
 *   (def my-num (atom 0))
 *   (with-all! my-with-all! (swap! my-num inc))
 *   (it "increments my-num before being accessed"
 *  (should= 1 @my-num)
 *  (should= 2 @my-with!))
 *   (it "only increments my-num once per context"
 *  (should= 1 @my-num)
 *  (should= 2 @my-with!))
 */
speclj.core.with_all_BANG_ = (function speclj$core$with_all_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7580 = arguments.length;
var i__5770__auto___7581 = (0);
while(true){
if((i__5770__auto___7581 < len__5769__auto___7580)){
args__5775__auto__.push((arguments[i__5770__auto___7581]));

var G__7582 = (i__5770__auto___7581 + (1));
i__5770__auto___7581 = G__7582;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return speclj.core.with_all_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(speclj.core.with_all_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return speclj.core._make_with.call(null,name,body,new cljs.core.Symbol("speclj.components","new-with-all","speclj.components/new-with-all",1631732463,null),true);
}));

(speclj.core.with_all_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.with_all_BANG_.cljs$lang$applyTo = (function (seq7575){
var G__7576 = cljs.core.first.call(null,seq7575);
var seq7575__$1 = cljs.core.next.call(null,seq7575);
var G__7577 = cljs.core.first.call(null,seq7575__$1);
var seq7575__$2 = cljs.core.next.call(null,seq7575__$1);
var G__7578 = cljs.core.first.call(null,seq7575__$2);
var seq7575__$3 = cljs.core.next.call(null,seq7575__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7576,G__7577,G__7578,seq7575__$3);
}));

return null;
})()
;
(speclj.core.with_all_BANG_.cljs$lang$macro = true);

var ret__5824__auto___7583 = speclj.core._to_s = (function speclj$core$_to_s(_AMPERSAND_form,_AMPERSAND_env,thing){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,thing,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"nil",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,thing,null,(1),null))))),null,(1),null)))));
});
(speclj.core._to_s.cljs$lang$macro = true);

var ret__5824__auto___7584 = /**
 * Useful for making custom assertions.
 */
speclj.core._fail = (function speclj$core$_fail(_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-failure","speclj.core/-new-failure",1552263542,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)))));
});
(speclj.core._fail.cljs$lang$macro = true);

var ret__5824__auto___7587 = speclj.core.wrong_types = (function speclj$core$wrong_types(_AMPERSAND_form,_AMPERSAND_env,assertion,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"type-a__7585__auto__","type-a__7585__auto__",-1781537536,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"nil",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","type-name","speclj.platform/type-name",-1621971592,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-b__7586__auto__","type-b__7586__auto__",342723745,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"nil",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","type-name","speclj.platform/type-name",-1621971592,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,assertion,null,(1),null)),(new cljs.core.List(null," doesn't know how to handle these types: [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-a__7585__auto__","type-a__7585__auto__",-1781537536,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-b__7586__auto__","type-b__7586__auto__",342723745,null),null,(1),null)),(new cljs.core.List(null,"]",null,(1),null))))),null,(1),null)))));
});
(speclj.core.wrong_types.cljs$lang$macro = true);

var ret__5824__auto___7589 = /**
 * Asserts the truthy-ness of a form
 */
speclj.core.should = (function speclj$core$should(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"value__7588__auto__","value__7588__auto__",1574192030,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__7588__auto__","value__7588__auto__",1574192030,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected truthy but was: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__7588__auto__","value__7588__auto__",1574192030,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should.cljs$lang$macro = true);

var ret__5824__auto___7591 = /**
 * Asserts the falsy-ness of a form
 */
speclj.core.should_not = (function speclj$core$should_not(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"value__7590__auto__","value__7590__auto__",-1528810376,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__7590__auto__","value__7590__auto__",-1528810376,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected falsy but was: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__7590__auto__","value__7590__auto__",-1528810376,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not.cljs$lang$macro = true);

var ret__5824__auto___7599 = (function (){
/**
 * Asserts that two forms evaluate to equal values, with the expected value as the first parameter.
 */
speclj.core.should_EQ_ = (function speclj$core$should_EQ_(var_args){
var G__7598 = arguments.length;
switch (G__7598) {
case 4:
return speclj.core.should_EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return speclj.core.should_EQ_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7592__auto__","expected__7592__auto__",-1916597671,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7593__auto__","actual__7593__auto__",64835650,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7592__auto__","expected__7592__auto__",-1916597671,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7593__auto__","actual__7593__auto__",64835650,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7592__auto__","expected__7592__auto__",-1916597671,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7593__auto__","actual__7593__auto__",64835650,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using =)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_EQ_.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form,delta_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7594__auto__","expected__7594__auto__",-714627628,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7595__auto__","actual__7595__auto__",-1331797935,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"delta__7596__auto__","delta__7596__auto__",1691899554,null),null,(1),null)),(new cljs.core.List(null,delta_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","difference-greater-than-delta?","speclj.platform/difference-greater-than-delta?",-954532948,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7594__auto__","expected__7594__auto__",-714627628,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7595__auto__","actual__7595__auto__",-1331797935,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"delta__7596__auto__","delta__7596__auto__",1691899554,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7594__auto__","expected__7594__auto__",-714627628,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7595__auto__","actual__7595__auto__",-1331797935,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using delta: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"delta__7596__auto__","delta__7596__auto__",1691899554,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_EQ_.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(speclj.core.should_EQ_.cljs$lang$macro = true);

var ret__5824__auto___7603 = /**
 * Asserts that a form satisfies a function.
 */
speclj.core.should_be = (function speclj$core$should_be(_AMPERSAND_form,_AMPERSAND_env,f_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__7601__auto__","f__7601__auto__",670061119,null),null,(1),null)),(new cljs.core.List(null,f_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7602__auto__","actual__7602__auto__",708016204,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__7601__auto__","f__7601__auto__",670061119,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7602__auto__","actual__7602__auto__",708016204,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7602__auto__","actual__7602__auto__",708016204,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to satisfy: ",null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_form),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_be.cljs$lang$macro = true);

var ret__5824__auto___7606 = /**
 * Asserts that a form does not satisfy a function.
 */
speclj.core.should_not_be = (function speclj$core$should_not_be(_AMPERSAND_form,_AMPERSAND_env,f_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__7604__auto__","f__7604__auto__",1855365230,null),null,(1),null)),(new cljs.core.List(null,f_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7605__auto__","actual__7605__auto__",-1901714159,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__7604__auto__","f__7604__auto__",1855365230,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7605__auto__","actual__7605__auto__",-1901714159,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7605__auto__","actual__7605__auto__",-1901714159,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," not to satisfy: ",null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_form),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_be.cljs$lang$macro = true);

var ret__5824__auto___7609 = /**
 * Asserts that two forms evaluate to unequal values, with the unexpected value as the first parameter.
 */
speclj.core.should_not_EQ_ = (function speclj$core$should_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7607__auto__","expected__7607__auto__",-2025519054,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7608__auto__","actual__7608__auto__",-1577460598,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7607__auto__","expected__7607__auto__",-2025519054,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7608__auto__","actual__7608__auto__",-1577460598,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7607__auto__","expected__7607__auto__",-2025519054,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to =: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7608__auto__","actual__7608__auto__",-1577460598,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_EQ_.cljs$lang$macro = true);

var ret__5824__auto___7612 = /**
 * Asserts that two forms evaluate to the same object, with the expected value as the first parameter.
 */
speclj.core.should_be_same = (function speclj$core$should_be_same(_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7610__auto__","expected__7610__auto__",1463710433,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7611__auto__","actual__7611__auto__",523845914,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7610__auto__","expected__7610__auto__",1463710433,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7611__auto__","actual__7611__auto__",523845914,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"         Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7610__auto__","expected__7610__auto__",1463710433,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be the same as: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7611__auto__","actual__7611__auto__",523845914,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using identical?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_be_same.cljs$lang$macro = true);

var ret__5824__auto___7615 = /**
 * Asserts that two forms evaluate to different objects, with the unexpected value as the first parameter.
 */
speclj.core.should_not_be_same = (function speclj$core$should_not_be_same(_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7613__auto__","expected__7613__auto__",957016903,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7614__auto__","actual__7614__auto__",-1778694965,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7613__auto__","expected__7613__auto__",957016903,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7614__auto__","actual__7614__auto__",-1778694965,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"             Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7613__auto__","expected__7613__auto__",957016903,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be the same as: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7614__auto__","actual__7614__auto__",-1778694965,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using identical?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_be_same.cljs$lang$macro = true);

var ret__5824__auto___7616 = /**
 * Asserts that the form evaluates to nil
 */
speclj.core.should_be_nil = (function speclj$core$should_be_nil(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should=","speclj.core/should=",83977914,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
});
(speclj.core.should_be_nil.cljs$lang$macro = true);

var ret__5824__auto___7621 = /**
 * Multi-purpose assertion of containment.  Works on strings, regular expressions, sequences, and maps.
 * 
 *   (should-contain "foo" "foobar")            ; looks for sub-string
 *   (should-contain #"hello.*" "hello, world") ; looks for regular expression
 *   (should-contain :foo {:foo :bar})          ; looks for a key in a map
 *   (should-contain 3 [1 2 3 4])               ; looks for an object in a collection
 */
speclj.core.should_contain = (function speclj$core$should_contain(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7618__auto__","expected__7618__auto__",1209744551,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7619__auto__","actual__7619__auto__",-1031409380,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7619__auto__","actual__7619__auto__",-1031409380,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7618__auto__","expected__7618__auto__",1209744551,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be in: nil",null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7618__auto__","expected__7618__auto__",1209744551,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7619__auto__","actual__7619__auto__",-1031409380,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,(-1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7619__auto__","actual__7619__auto__",-1031409380,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7618__auto__","expected__7618__auto__",1209744551,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7618__auto__","expected__7618__auto__",1209744551,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7619__auto__","actual__7619__auto__",-1031409380,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using .contains)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","re?","speclj.platform/re?",-2045322539,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7618__auto__","expected__7618__auto__",1209744551,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7619__auto__","actual__7619__auto__",-1031409380,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","re-seq","cljs.core/re-seq",-1438765119,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7618__auto__","expected__7618__auto__",1209744551,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7619__auto__","actual__7619__auto__",-1031409380,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7619__auto__","actual__7619__auto__",-1031409380,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to match: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7618__auto__","expected__7618__auto__",1209744551,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using re-seq)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7619__auto__","actual__7619__auto__",-1031409380,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7619__auto__","actual__7619__auto__",-1031409380,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7618__auto__","expected__7618__auto__",1209744551,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7618__auto__","expected__7618__auto__",1209744551,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be a key in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7619__auto__","actual__7619__auto__",-1031409380,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using contains?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7619__auto__","actual__7619__auto__",-1031409380,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7617__7620__auto__","p1__7617__7620__auto__",-616266128,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7618__auto__","expected__7618__auto__",1209744551,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7617__7620__auto__","p1__7617__7620__auto__",-616266128,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7619__auto__","actual__7619__auto__",-1031409380,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7618__auto__","expected__7618__auto__",1209744551,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7619__auto__","actual__7619__auto__",-1031409380,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using =)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-contain",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7618__auto__","expected__7618__auto__",1209744551,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7619__auto__","actual__7619__auto__",-1031409380,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_contain.cljs$lang$macro = true);

var ret__5824__auto___7626 = /**
 * Multi-purpose assertion of non-containment.  See should-contain as an example of opposite behavior.
 */
speclj.core.should_not_contain = (function speclj$core$should_not_contain(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7623__auto__","expected__7623__auto__",1083667967,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7624__auto__","actual__7624__auto__",212533380,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7624__auto__","actual__7624__auto__",212533380,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7623__auto__","expected__7623__auto__",1083667967,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7624__auto__","actual__7624__auto__",212533380,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,(-1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7624__auto__","actual__7624__auto__",212533380,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7623__auto__","expected__7623__auto__",1083667967,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7623__auto__","expected__7623__auto__",1083667967,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7624__auto__","actual__7624__auto__",212533380,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using .contains)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","re?","speclj.platform/re?",-2045322539,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7623__auto__","expected__7623__auto__",1083667967,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7624__auto__","actual__7624__auto__",212533380,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","re-seq","cljs.core/re-seq",-1438765119,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7623__auto__","expected__7623__auto__",1083667967,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7624__auto__","actual__7624__auto__",212533380,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7624__auto__","actual__7624__auto__",212533380,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to match: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7623__auto__","expected__7623__auto__",1083667967,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using re-seq)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7624__auto__","actual__7624__auto__",212533380,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7624__auto__","actual__7624__auto__",212533380,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7623__auto__","expected__7623__auto__",1083667967,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7623__auto__","expected__7623__auto__",1083667967,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be a key in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7624__auto__","actual__7624__auto__",212533380,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using contains?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7624__auto__","actual__7624__auto__",212533380,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7622__7625__auto__","p1__7622__7625__auto__",-1557881043,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7623__auto__","expected__7623__auto__",1083667967,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7622__7625__auto__","p1__7622__7625__auto__",-1557881043,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7624__auto__","actual__7624__auto__",212533380,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7623__auto__","expected__7623__auto__",1083667967,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7624__auto__","actual__7624__auto__",212533380,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using =)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-contain",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7623__auto__","expected__7623__auto__",1083667967,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7624__auto__","actual__7624__auto__",212533380,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_contain.cljs$lang$macro = true);

var ret__5824__auto___7630 = /**
 * Multi-purpose assertion on (count %). Works on strings, sequences, and maps.
 * 
 *   (should-have-count 6 "foobar")
 *   (should-have-count 2 [1 2]})
 *   (should-have-count 1 {:foo :bar})
 *   (should-have-count 0 [])
 *   (should-have-count 0 nil)
 */
speclj.core.should_have_count = (function speclj$core$should_have_count(_AMPERSAND_form,_AMPERSAND_env,expected,coll){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7627__auto__","expected__7627__auto__",-837561269,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__7628__auto__","coll__7628__auto__",1477089806,null),null,(1),null)),(new cljs.core.List(null,coll,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7627__auto__","expected__7627__auto__",-837561269,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__7628__auto__","coll__7628__auto__",1477089806,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__7628__auto__","coll__7628__auto__",1477089806,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","counted?","cljs.core/counted?",1305324125,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__7628__auto__","coll__7628__auto__",1477089806,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-have-count",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7627__auto__","expected__7627__auto__",-837561269,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__7628__auto__","coll__7628__auto__",1477089806,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7629__auto__","actual__7629__auto__",-1380828946,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__7628__auto__","coll__7628__auto__",1477089806,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7627__auto__","expected__7627__auto__",-837561269,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7629__auto__","actual__7629__auto__",-1380828946,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected count: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7627__auto__","expected__7627__auto__",-837561269,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"Actual count:   ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7629__auto__","actual__7629__auto__",-1380828946,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"Actual coll:    ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__7628__auto__","coll__7628__auto__",1477089806,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_have_count.cljs$lang$macro = true);

var ret__5824__auto___7634 = /**
 * Multi-purpose assertion on (not= (count %)). Works on strings, sequences, and maps.
 * 
 *   (should-not-have-count 1 "foobar")
 *   (should-not-have-count 1 [1 2]})
 *   (should-not-have-count 42 {:foo :bar})
 *   (should-not-have-count 1 [])
 *   (should-not-have-count 1 nil)
 */
speclj.core.should_not_have_count = (function speclj$core$should_not_have_count(_AMPERSAND_form,_AMPERSAND_env,expected,coll){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7631__auto__","expected__7631__auto__",-919404704,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__7632__auto__","coll__7632__auto__",-1462262888,null),null,(1),null)),(new cljs.core.List(null,coll,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7631__auto__","expected__7631__auto__",-919404704,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__7632__auto__","coll__7632__auto__",-1462262888,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__7632__auto__","coll__7632__auto__",-1462262888,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","counted?","cljs.core/counted?",1305324125,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__7632__auto__","coll__7632__auto__",-1462262888,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-have-count",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7631__auto__","expected__7631__auto__",-919404704,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__7632__auto__","coll__7632__auto__",-1462262888,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7633__auto__","actual__7633__auto__",1487519895,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__7632__auto__","coll__7632__auto__",-1462262888,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7631__auto__","expected__7631__auto__",-919404704,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7633__auto__","actual__7633__auto__",1487519895,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected count to not equal ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7631__auto__","expected__7631__auto__",-919404704,null),null,(1),null)),(new cljs.core.List(null," (but it did!)",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"Collection: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__7632__auto__","coll__7632__auto__",-1462262888,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_have_count.cljs$lang$macro = true);

var ret__5824__auto___7638 = speclj.core._remove_first = (function speclj$core$_remove_first(_AMPERSAND_form,_AMPERSAND_env,coll,value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__7635__auto__","coll__7635__auto__",2004278473,null),null,(1),null)),(new cljs.core.List(null,coll,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__7636__auto__","seen__7636__auto__",684151761,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__7635__auto__","coll__7635__auto__",2004278473,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__7636__auto__","seen__7636__auto__",684151761,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__7637__auto__","f__7637__auto__",628538649,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__7635__auto__","coll__7635__auto__",2004278473,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__7637__auto__","f__7637__auto__",628538649,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__7636__auto__","seen__7636__auto__",684151761,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__7635__auto__","coll__7635__auto__",2004278473,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__7635__auto__","coll__7635__auto__",2004278473,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__7636__auto__","seen__7636__auto__",684151761,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__7637__auto__","f__7637__auto__",628538649,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core._remove_first.cljs$lang$macro = true);

var ret__5824__auto___7646 = speclj.core._coll_difference = (function speclj$core$_coll_difference(_AMPERSAND_form,_AMPERSAND_env,coll1,coll2){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,coll1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.data","diff","clojure.data/diff",-683865998,null),null,(1),null)),(new cljs.core.List(null,coll1,null,(1),null)),(new cljs.core.List(null,coll2,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__7640__auto__","match-with__7640__auto__",-567482353,null),null,(1),null)),(new cljs.core.List(null,coll1,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__7641__auto__","match-against__7641__auto__",-520522865,null),null,(1),null)),(new cljs.core.List(null,coll2,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__7642__auto__","diff__7642__auto__",-330875958,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__7640__auto__","match-with__7640__auto__",-567482353,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__7642__auto__","diff__7642__auto__",-330875958,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__7643__auto__","f__7643__auto__",-1413314588,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__7640__auto__","match-with__7640__auto__",-567482353,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"r__7644__auto__","r__7644__auto__",561810517,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__7640__auto__","match-with__7640__auto__",-567482353,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7639__7645__auto__","p1__7639__7645__auto__",433090806,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7639__7645__auto__","p1__7639__7645__auto__",433090806,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__7643__auto__","f__7643__auto__",-1413314588,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__7641__auto__","match-against__7641__auto__",-520522865,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"r__7644__auto__","r__7644__auto__",561810517,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-remove-first","speclj.core/-remove-first",869128070,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__7641__auto__","match-against__7641__auto__",-520522865,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__7643__auto__","f__7643__auto__",-1413314588,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__7642__auto__","diff__7642__auto__",-330875958,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"r__7644__auto__","r__7644__auto__",561810517,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__7641__auto__","match-against__7641__auto__",-520522865,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__7642__auto__","diff__7642__auto__",-330875958,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__7643__auto__","f__7643__auto__",-1413314588,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core._coll_difference.cljs$lang$macro = true);

var ret__5824__auto___7652 = /**
 * Assertion of prefix in strings and sequences.
 * 
 *   (should-start-with "foo" "foobar")            ; looks for string prefix
 *   (should-start-with [1 2] [1 2 3 4])               ; looks for a subset at start of collection
 */
speclj.core.should_start_with = (function speclj$core$should_start_with(_AMPERSAND_form,_AMPERSAND_env,prefix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7647__auto__","prefix__7647__auto__",1664876043,null),null,(1),null)),(new cljs.core.List(null,prefix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7648__auto__","whole__7648__auto__",-1220298869,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7647__auto__","prefix__7647__auto__",1664876043,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7648__auto__","whole__7648__auto__",-1220298869,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7648__auto__","whole__7648__auto__",-1220298869,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7647__auto__","prefix__7647__auto__",1664876043,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7648__auto__","whole__7648__auto__",-1220298869,null),null,(1),null)),(new cljs.core.List(null,"\" to start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7647__auto__","prefix__7647__auto__",1664876043,null),null,(1),null)),(new cljs.core.List(null,"\"",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7648__auto__","whole__7648__auto__",-1220298869,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7647__auto__","prefix__7647__auto__",1664876043,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7649__auto__","actual__7649__auto__",914960297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take","cljs.core/take",439591112,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7647__auto__","prefix__7647__auto__",1664876043,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7648__auto__","whole__7648__auto__",-1220298869,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__7650__auto__","extra__7650__auto__",375230426,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7649__auto__","actual__7649__auto__",914960297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7647__auto__","prefix__7647__auto__",1664876043,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__7651__auto__","missing__7651__auto__",-1098275312,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7647__auto__","prefix__7647__auto__",1664876043,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7649__auto__","actual__7649__auto__",914960297,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__7650__auto__","extra__7650__auto__",375230426,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__7651__auto__","missing__7651__auto__",-1098275312,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7648__auto__","whole__7648__auto__",-1220298869,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7647__auto__","prefix__7647__auto__",1664876043,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-start-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7647__auto__","prefix__7647__auto__",1664876043,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7648__auto__","whole__7648__auto__",-1220298869,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_start_with.cljs$lang$macro = true);

var ret__5824__auto___7658 = /**
 * The inverse of should-start-with.
 */
speclj.core.should_not_start_with = (function speclj$core$should_not_start_with(_AMPERSAND_form,_AMPERSAND_env,prefix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7653__auto__","prefix__7653__auto__",106878695,null),null,(1),null)),(new cljs.core.List(null,prefix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7654__auto__","whole__7654__auto__",1424534701,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7653__auto__","prefix__7653__auto__",106878695,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7654__auto__","whole__7654__auto__",1424534701,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7654__auto__","whole__7654__auto__",1424534701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7653__auto__","prefix__7653__auto__",106878695,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7654__auto__","whole__7654__auto__",1424534701,null),null,(1),null)),(new cljs.core.List(null,"\" to NOT start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7653__auto__","prefix__7653__auto__",106878695,null),null,(1),null)),(new cljs.core.List(null,"\"",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7654__auto__","whole__7654__auto__",1424534701,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7653__auto__","prefix__7653__auto__",106878695,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7655__auto__","actual__7655__auto__",-1619239988,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take","cljs.core/take",439591112,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7653__auto__","prefix__7653__auto__",106878695,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7654__auto__","whole__7654__auto__",1424534701,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__7656__auto__","extra__7656__auto__",1950219625,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7655__auto__","actual__7655__auto__",-1619239988,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7653__auto__","prefix__7653__auto__",106878695,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__7657__auto__","missing__7657__auto__",-1356592375,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7653__auto__","prefix__7653__auto__",106878695,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7655__auto__","actual__7655__auto__",-1619239988,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__7656__auto__","extra__7656__auto__",1950219625,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__7657__auto__","missing__7657__auto__",-1356592375,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7654__auto__","whole__7654__auto__",1424534701,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to NOT start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7653__auto__","prefix__7653__auto__",106878695,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-start-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7653__auto__","prefix__7653__auto__",106878695,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7654__auto__","whole__7654__auto__",1424534701,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_start_with.cljs$lang$macro = true);

var ret__5824__auto___7665 = /**
 * Assertion of suffix in strings and sequences.
 * 
 *   (should-end-with "foo" "foobar")            ; looks for string suffix
 *   (should-end-with [1 2] [1 2 3 4])               ; looks for a subset at end of collection
 */
speclj.core.should_end_with = (function speclj$core$should_end_with(_AMPERSAND_form,_AMPERSAND_env,suffix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__7659__auto__","suffix__7659__auto__",-1902343547,null),null,(1),null)),(new cljs.core.List(null,suffix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7660__auto__","whole__7660__auto__",467737309,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__7659__auto__","suffix__7659__auto__",-1902343547,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7660__auto__","whole__7660__auto__",467737309,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7660__auto__","whole__7660__auto__",467737309,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__7659__auto__","suffix__7659__auto__",-1902343547,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__7661__auto__","padding__7661__auto__",288278346,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7660__auto__","whole__7660__auto__",467737309,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__7659__auto__","suffix__7659__auto__",-1902343547,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7660__auto__","whole__7660__auto__",467737309,null),null,(1),null)),(new cljs.core.List(null,"] to end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__7661__auto__","padding__7661__auto__",288278346,null),null,(1),null)),(new cljs.core.List(null,"    with [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__7659__auto__","suffix__7659__auto__",-1902343547,null),null,(1),null)),(new cljs.core.List(null,"]",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7660__auto__","whole__7660__auto__",467737309,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__7659__auto__","suffix__7659__auto__",-1902343547,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7662__auto__","actual__7662__auto__",1829472848,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take-last","cljs.core/take-last",374295804,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__7659__auto__","suffix__7659__auto__",-1902343547,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7660__auto__","whole__7660__auto__",467737309,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__7663__auto__","extra__7663__auto__",2054538144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7662__auto__","actual__7662__auto__",1829472848,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__7659__auto__","suffix__7659__auto__",-1902343547,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__7664__auto__","missing__7664__auto__",-1707851467,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__7659__auto__","suffix__7659__auto__",-1902343547,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7662__auto__","actual__7662__auto__",1829472848,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__7663__auto__","extra__7663__auto__",2054538144,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__7664__auto__","missing__7664__auto__",-1707851467,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7660__auto__","whole__7660__auto__",467737309,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7660__auto__","whole__7660__auto__",467737309,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__7659__auto__","suffix__7659__auto__",-1902343547,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__7659__auto__","suffix__7659__auto__",-1902343547,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__7661__auto__","padding__7661__auto__",288278346,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7660__auto__","whole__7660__auto__",467737309,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__7659__auto__","suffix__7659__auto__",-1902343547,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7660__auto__","whole__7660__auto__",467737309,null),null,(1),null)),(new cljs.core.List(null," to end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__7661__auto__","padding__7661__auto__",288278346,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__7659__auto__","suffix__7659__auto__",-1902343547,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-end-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__7659__auto__","suffix__7659__auto__",-1902343547,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7660__auto__","whole__7660__auto__",467737309,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_end_with.cljs$lang$macro = true);

var ret__5824__auto___7672 = /**
 * The inverse of should-end-with.
 */
speclj.core.should_not_end_with = (function speclj$core$should_not_end_with(_AMPERSAND_form,_AMPERSAND_env,prefix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7666__auto__","prefix__7666__auto__",-1783169074,null),null,(1),null)),(new cljs.core.List(null,prefix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7667__auto__","whole__7667__auto__",-2008220086,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7666__auto__","prefix__7666__auto__",-1783169074,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7667__auto__","whole__7667__auto__",-2008220086,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7667__auto__","whole__7667__auto__",-2008220086,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7666__auto__","prefix__7666__auto__",-1783169074,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__7668__auto__","padding__7668__auto__",-1264281190,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7667__auto__","whole__7667__auto__",-2008220086,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7666__auto__","prefix__7666__auto__",-1783169074,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7667__auto__","whole__7667__auto__",-2008220086,null),null,(1),null)),(new cljs.core.List(null,"] to NOT end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__7668__auto__","padding__7668__auto__",-1264281190,null),null,(1),null)),(new cljs.core.List(null,"    with [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7666__auto__","prefix__7666__auto__",-1783169074,null),null,(1),null)),(new cljs.core.List(null,"]",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7667__auto__","whole__7667__auto__",-2008220086,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7666__auto__","prefix__7666__auto__",-1783169074,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7669__auto__","actual__7669__auto__",1884763290,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take-last","cljs.core/take-last",374295804,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7666__auto__","prefix__7666__auto__",-1783169074,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7667__auto__","whole__7667__auto__",-2008220086,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__7670__auto__","extra__7670__auto__",714471655,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7669__auto__","actual__7669__auto__",1884763290,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7666__auto__","prefix__7666__auto__",-1783169074,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__7671__auto__","missing__7671__auto__",581928064,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7666__auto__","prefix__7666__auto__",-1783169074,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7669__auto__","actual__7669__auto__",1884763290,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__7670__auto__","extra__7670__auto__",714471655,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__7671__auto__","missing__7671__auto__",581928064,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7667__auto__","whole__7667__auto__",-2008220086,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7667__auto__","whole__7667__auto__",-2008220086,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7666__auto__","prefix__7666__auto__",-1783169074,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7666__auto__","prefix__7666__auto__",-1783169074,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__7668__auto__","padding__7668__auto__",-1264281190,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7667__auto__","whole__7667__auto__",-2008220086,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7666__auto__","prefix__7666__auto__",-1783169074,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7667__auto__","whole__7667__auto__",-2008220086,null),null,(1),null)),(new cljs.core.List(null," to NOT end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__7668__auto__","padding__7668__auto__",-1264281190,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7666__auto__","prefix__7666__auto__",-1783169074,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-end-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__7666__auto__","prefix__7666__auto__",-1783169074,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__7667__auto__","whole__7667__auto__",-2008220086,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_end_with.cljs$lang$macro = true);

var ret__5824__auto___7673 = speclj.core._difference_message = (function speclj$core$_difference_message(_AMPERSAND_form,_AMPERSAND_env,expected,actual,extra,missing){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected contents: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"              got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"          missing: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,missing,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"            extra: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,extra,null,(1),null))))),null,(1),null)))));
});
(speclj.core._difference_message.cljs$lang$macro = true);

var ret__5824__auto___7678 = /**
 * Asserts 'equivalency'.
 *   When passed collections it will check that they have the same contents.
 *   For anything else it will assert that clojure.core/== returns true.
 */
speclj.core.should_EQ__EQ_ = (function speclj$core$should_EQ__EQ_(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7674__auto__","expected__7674__auto__",39630956,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7675__auto__","actual__7675__auto__",3853916,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7674__auto__","expected__7674__auto__",39630956,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7675__auto__","actual__7675__auto__",3853916,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__7676__auto__","extra__7676__auto__",1449221447,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7675__auto__","actual__7675__auto__",3853916,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7674__auto__","expected__7674__auto__",39630956,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__7677__auto__","missing__7677__auto__",1996695617,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7674__auto__","expected__7674__auto__",39630956,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7675__auto__","actual__7675__auto__",3853916,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__7676__auto__","extra__7676__auto__",1449221447,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__7677__auto__","missing__7677__auto__",1996695617,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-difference-message","speclj.core/-difference-message",762568995,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7674__auto__","expected__7674__auto__",39630956,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7675__auto__","actual__7675__auto__",3853916,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__7676__auto__","extra__7676__auto__",1449221447,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__7677__auto__","missing__7677__auto__",1996695617,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7674__auto__","expected__7674__auto__",39630956,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7675__auto__","actual__7675__auto__",3853916,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7674__auto__","expected__7674__auto__",39630956,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7675__auto__","actual__7675__auto__",3853916,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7674__auto__","expected__7674__auto__",39630956,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7675__auto__","actual__7675__auto__",3853916,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using ==)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should==",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7674__auto__","expected__7674__auto__",39630956,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7675__auto__","actual__7675__auto__",3853916,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_EQ__EQ_.cljs$lang$macro = true);

var ret__5824__auto___7683 = /**
 * Asserts 'non-equivalency'.
 *   When passed collections it will check that they do NOT have the same contents.
 *   For anything else it will assert that clojure.core/== returns false.
 */
speclj.core.should_not_EQ__EQ_ = (function speclj$core$should_not_EQ__EQ_(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7679__auto__","expected__7679__auto__",2037224279,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7680__auto__","actual__7680__auto__",-1654534139,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7679__auto__","expected__7679__auto__",2037224279,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7680__auto__","actual__7680__auto__",-1654534139,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__7681__auto__","extra__7681__auto__",-259962304,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7680__auto__","actual__7680__auto__",-1654534139,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7679__auto__","expected__7679__auto__",2037224279,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__7682__auto__","missing__7682__auto__",564040062,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7679__auto__","expected__7679__auto__",2037224279,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7680__auto__","actual__7680__auto__",-1654534139,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__7681__auto__","extra__7681__auto__",-259962304,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__7682__auto__","missing__7682__auto__",564040062,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected contents: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7679__auto__","expected__7679__auto__",2037224279,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"   to differ from: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7680__auto__","actual__7680__auto__",-1654534139,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7679__auto__","expected__7679__auto__",2037224279,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7680__auto__","actual__7680__auto__",-1654534139,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7679__auto__","expected__7679__auto__",2037224279,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7680__auto__","actual__7680__auto__",-1654534139,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null," Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7679__auto__","expected__7679__auto__",2037224279,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to ==: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7680__auto__","actual__7680__auto__",-1654534139,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using ==)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not==",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__7679__auto__","expected__7679__auto__",2037224279,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7680__auto__","actual__7680__auto__",-1654534139,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_EQ__EQ_.cljs$lang$macro = true);

var ret__5824__auto___7684 = /**
 * Asserts that the form evaluates to a non-nil value
 */
speclj.core.should_not_be_nil = (function speclj$core$should_not_be_nil(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-not=","speclj.core/should-not=",-671600182,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
});
(speclj.core.should_not_be_nil.cljs$lang$macro = true);

var ret__5824__auto___7687 = (function (){
/**
 * Forces a failure. An optional message may be passed in.
 */
speclj.core.should_fail = (function speclj$core$should_fail(var_args){
var G__7686 = arguments.length;
switch (G__7686) {
case 2:
return speclj.core.should_fail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return speclj.core.should_fail.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_fail.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-fail","speclj.core/should-fail",1593830201,null),null,(1),null)),(new cljs.core.List(null,"Forced failure",null,(1),null)))));
}));

(speclj.core.should_fail.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null)))));
}));

(speclj.core.should_fail.cljs$lang$maxFixedArity = 3);

return null;
})()
;
(speclj.core.should_fail.cljs$lang$macro = true);

var ret__5824__auto___7692 = speclj.core._create_should_throw_failure = (function speclj$core$_create_should_throw_failure(_AMPERSAND_form,_AMPERSAND_env,expected,actual,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-name__7689__auto__","expected-name__7689__auto__",1738314075,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","type-name","speclj.platform/type-name",-1621971592,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-gaps__7690__auto__","expected-gaps__7690__auto__",-1090894083,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-name__7689__auto__","expected-name__7689__auto__",1738314075,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-string__7691__auto__","actual-string__7691__auto__",-298287166,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"<nothing thrown>",null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-failure","speclj.core/-new-failure",1552263542,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-name__7689__auto__","expected-name__7689__auto__",1738314075,null),null,(1),null)),(new cljs.core.List(null," thrown from: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"         ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-gaps__7690__auto__","expected-gaps__7690__auto__",-1090894083,null),null,(1),null)),(new cljs.core.List(null,"     but got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-string__7691__auto__","actual-string__7691__auto__",-298287166,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core._create_should_throw_failure.cljs$lang$macro = true);

var ret__5824__auto___7699 = (function (){
/**
 * Asserts that a Throwable is throws by the evaluation of a form.
 * When an class is passed, it asserts that the thrown Exception is an instance of the class.
 * There are three options for passing different kinds of predicates:
 *   - If a string, assert that the message of the Exception is equal to the string.
 *   - If a regex, asserts that the message of the Exception matches the regex.
 *   - If a function, assert that calling the function on the Exception returns a truthy value.
 */
speclj.core.should_throw = (function speclj$core$should_throw(var_args){
var G__7698 = arguments.length;
switch (G__7698) {
case 3:
return speclj.core.should_throw.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core.should_throw.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return speclj.core.should_throw.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_throw.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-throw","speclj.core/should-throw",-1013100325,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","throwable","speclj.platform/throwable",-599125238,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
}));

(speclj.core.should_throw.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,throwable_type,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","try-catch-anything","speclj.core/try-catch-anything",2038895468,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-create-should-throw-failure","speclj.core/-create-should-throw-failure",2126405641,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7693__auto__","e__7693__auto__",-802868907,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","failure?","speclj.platform/failure?",1598725570,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7693__auto__","e__7693__auto__",-802868907,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7693__auto__","e__7693__auto__",-802868907,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7693__auto__","e__7693__auto__",-802868907,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-create-should-throw-failure","speclj.core/-create-should-throw-failure",2126405641,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7693__auto__","e__7693__auto__",-802868907,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7693__auto__","e__7693__auto__",-802868907,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_throw.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,throwable_type,predicate,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7694__auto__","e__7694__auto__",-1152555854,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-throw","speclj.core/should-throw",-1013100325,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"regex__7695__auto__","regex__7695__auto__",-495088447,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"java.util.regex.Pattern","java.util.regex.Pattern",484813383,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","try-catch-anything","speclj.core/try-catch-anything",2038895468,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"regex__7695__auto__","regex__7695__auto__",-495088447,null),null,(1),null)),(new cljs.core.List(null,predicate,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-not-be-nil","speclj.core/should-not-be-nil",962725329,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),null,(1),null)),(new cljs.core.List(null,predicate,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","error-message","speclj.platform/error-message",124672328,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7694__auto__","e__7694__auto__",-1152555854,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),null,(1),null)),(new cljs.core.List(null,predicate,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should=","speclj.core/should=",83977914,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,predicate,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7694__auto__","e__7694__auto__",-1152555854,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should=","speclj.core/should=",83977914,null),null,(1),null)),(new cljs.core.List(null,predicate,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","error-message","speclj.platform/error-message",124672328,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7694__auto__","e__7694__auto__",-1152555854,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__7696__auto__","f__7696__auto__",738480941,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected exception predicate didn't match",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","error-message","speclj.platform/error-message",124672328,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__7696__auto__","f__7696__auto__",738480941,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_throw.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(speclj.core.should_throw.cljs$lang$macro = true);

var ret__5824__auto___7702 = /**
 * Asserts that nothing is thrown by the evaluation of a form.
 */
speclj.core.should_not_throw = (function speclj$core$should_not_throw(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","try-catch-anything","speclj.core/try-catch-anything",2038895468,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7701__auto__","e__7701__auto__",1419817366,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected nothing thrown from: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"                     but got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7701__auto__","e__7701__auto__",1419817366,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_throw.cljs$lang$macro = true);

var ret__5824__auto___7706 = /**
 * Asserts that the type of the given form derives from or equals the expected type
 */
speclj.core.should_be_a = (function speclj$core$should_be_a(_AMPERSAND_form,_AMPERSAND_env,expected_type,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7703__auto__","actual__7703__auto__",-1717074181,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__7704__auto__","actual-type__7704__auto__",1179758515,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7703__auto__","actual__7703__auto__",-1717074181,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__7705__auto__","expected-type__7705__auto__",411506198,null),null,(1),null)),(new cljs.core.List(null,expected_type,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","isa?","cljs.core/isa?",951980347,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__7704__auto__","actual-type__7704__auto__",1179758515,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__7705__auto__","expected-type__7705__auto__",411506198,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7703__auto__","actual__7703__auto__",-1717074181,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to be an instance of: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__7705__auto__","expected-type__7705__auto__",411506198,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"           but was an instance of: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__7704__auto__","actual-type__7704__auto__",1179758515,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using isa?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_be_a.cljs$lang$macro = true);

var ret__5824__auto___7710 = /**
 * Asserts that the type of the given form does not derived from or equals the expected type
 */
speclj.core.should_not_be_a = (function speclj$core$should_not_be_a(_AMPERSAND_form,_AMPERSAND_env,expected_type,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7707__auto__","actual__7707__auto__",2024285217,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__7708__auto__","actual-type__7708__auto__",-1844534724,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7707__auto__","actual__7707__auto__",2024285217,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__7709__auto__","expected-type__7709__auto__",-1050452460,null),null,(1),null)),(new cljs.core.List(null,expected_type,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","isa?","cljs.core/isa?",951980347,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__7708__auto__","actual-type__7708__auto__",-1844534724,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__7709__auto__","expected-type__7709__auto__",-1050452460,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__7707__auto__","actual__7707__auto__",2024285217,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," not to be an instance of ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__7709__auto__","expected-type__7709__auto__",-1050452460,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," but was (using isa?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_be_a.cljs$lang$macro = true);

var ret__5824__auto___7713 = (function (){
/**
 * When added to a characteristic, it is marked as pending.  If a message is provided it will be printed
 *   in the run report
 */
speclj.core.pending = (function speclj$core$pending(var_args){
var G__7712 = arguments.length;
switch (G__7712) {
case 2:
return speclj.core.pending.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return speclj.core.pending.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.pending.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","pending","speclj.core/pending",-571433532,null),null,(1),null)),(new cljs.core.List(null,"Not Yet Implemented",null,(1),null)))));
}));

(speclj.core.pending.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-pending","speclj.core/-new-pending",-74755942,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)))));
}));

(speclj.core.pending.cljs$lang$maxFixedArity = 3);

return null;
})()
;
(speclj.core.pending.cljs$lang$macro = true);

var ret__5824__auto___7718 = (function (){
/**
 * Add tags to the containing context.  All values passed will be converted into keywords.  Contexts can be filtered
 *   at runtime by their tags.
 * 
 *   (tags :one :two)
 */
speclj.core.tags = (function speclj$core$tags(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7719 = arguments.length;
var i__5770__auto___7720 = (0);
while(true){
if((i__5770__auto___7720 < len__5769__auto___7719)){
args__5775__auto__.push((arguments[i__5770__auto___7720]));

var G__7721 = (i__5770__auto___7720 + (1));
i__5770__auto___7720 = G__7721;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return speclj.core.tags.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(speclj.core.tags.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,values){
var tag_kws = cljs.core.mapv.call(null,cljs.core.keyword,values);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","mapv","cljs.core/mapv",433728488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-tag","speclj.components/new-tag",-1937226080,null),null,(1),null)),(new cljs.core.List(null,tag_kws,null,(1),null)))));
}));

(speclj.core.tags.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.tags.cljs$lang$applyTo = (function (seq7715){
var G__7716 = cljs.core.first.call(null,seq7715);
var seq7715__$1 = cljs.core.next.call(null,seq7715);
var G__7717 = cljs.core.first.call(null,seq7715__$1);
var seq7715__$2 = cljs.core.next.call(null,seq7715__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7716,G__7717,seq7715__$2);
}));

return null;
})()
;
(speclj.core.tags.cljs$lang$macro = true);

var ret__5824__auto___7723 = /**
 * Add this to describe/context blocks that use stubs.  It will setup a clean recording environment.
 */
speclj.core.with_stubs = (function speclj$core$with_stubs(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","around","speclj.core/around",649826642,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__7722__auto__","it__7722__auto__",-1880032882,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","*stubbed-invocations*","speclj.stub/*stubbed-invocations*",-474598582,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__7722__auto__","it__7722__auto__",-1880032882,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.with_stubs.cljs$lang$macro = true);

var ret__5824__auto___7726 = (function (){
/**
 * Creates a stub function.  Each call to the stub will be recorded and can later be looked up using the specified name.
 * 
 *   Options:
 *  :invoke - a function that will be invoked when the stub is invoked.  All the arguments passed to the stub will
 *    be passed to the :invoke value and its return value returned by the stub.
 *  :return - a value that will be returned by the stub.  This overrides the result of the :invoke value, if specified.
 *  :throw - an exception that will be thrown by the stub.
 */
speclj.core.stub = (function speclj$core$stub(var_args){
var G__7725 = arguments.length;
switch (G__7725) {
case 3:
return speclj.core.stub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core.stub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.stub.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,name){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","stub","speclj.stub/stub",977871771,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))));
}));

(speclj.core.stub.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,name,options){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","stub","speclj.stub/stub",977871771,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,options,null,(1),null)))));
}));

(speclj.core.stub.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(speclj.core.stub.cljs$lang$macro = true);

var ret__5824__auto___7746 = (function (){
/**
 * Checks for invocations of the specified stub.
 * 
 *   Options:
 *  :times - the number of times the stub should have been invoked. nil means at least once. (default: nil)
 *  :with - a list of arguments that the stubs should have been invoked with.
 *    If not specified, anything goes.  Special expected arguments include:
 *     :* - matches anything
 *     a fn - matches when the actual is the same fn or calling fn with the actual argument returns true
 * 
 *   Example:
 *   (let [foo (stub :foo)]
 *  (should-have-invoked :foo {:with [1] :times 3}) ; fail
 *  (foo 1)
 *  (foo 2)
 *  (should-have-invoked :foo {:with [1] :times 3}) ; fail
 *  (should-have-invoked :foo {:with [1] :times 1}) ; pass
 *  (should-have-invoked :foo {:with [2] :times 1}) ; pass
 *  (should-have-invoked :foo {:times 3}) ; fail
 *  (should-have-invoked :foo {:times 2}) ; pass
 *  (should-have-invoked :foo {:times 1}) ; fail
 *  (should-have-invoked :foo {:with [1]}) ; pass
 *  (should-have-invoked :foo {:with [2]}) ; pass
 *  )
 */
speclj.core.should_have_invoked = (function speclj$core$should_have_invoked(var_args){
var G__7745 = arguments.length;
switch (G__7745) {
case 3:
return speclj.core.should_have_invoked.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core.should_have_invoked.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_have_invoked.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,name){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-have-invoked","speclj.core/should-have-invoked",-864349238,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))));
}));

(speclj.core.should_have_invoked.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,name,options){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"name__7731__auto__","name__7731__auto__",-1030857153,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__7732__auto__","options__7732__auto__",-166335206,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__7733__auto__","invocations__7733__auto__",2127209302,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","invocations-of","speclj.stub/invocations-of",1244579949,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__7731__auto__","name__7731__auto__",-1030857153,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__7734__auto__","times__7734__auto__",327098132,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"times","times",1671571467),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__7732__auto__","options__7732__auto__",-166335206,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__7735__auto__","times?__7735__auto__",2028685531,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__7734__auto__","times__7734__auto__",327098132,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__7736__auto__","check-params?__7736__auto__",-1526120317,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__7732__auto__","options__7732__auto__",-166335206,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__7737__auto__","with__7737__auto__",-1365378058,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__7732__auto__","options__7732__auto__",-166335206,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__7737__auto__","with__7737__auto__",-1365378058,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__7737__auto__","with__7737__auto__",-1365378058,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__7737__auto__","with__7737__auto__",-1365378058,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__7738__auto__","invocations-str__7738__auto__",-694504831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7728__7739__auto__","p1__7728__7739__auto__",-258769419,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7728__7739__auto__","p1__7728__7739__auto__",-258769419,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"invocation",null,(1),null)),(new cljs.core.List(null,"invocations",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__7735__auto__","times?__7735__auto__",2028685531,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__7736__auto__","check-params?__7736__auto__",-1526120317,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__7740__auto__","matching-invocations__7740__auto__",-434712946,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","filter","cljs.core/filter",-251894204,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7729__7741__auto__","p1__7729__7741__auto__",1910034008,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__7737__auto__","with__7737__auto__",-1365378058,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7729__7741__auto__","p1__7729__7741__auto__",1910034008,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__7733__auto__","invocations__7733__auto__",2127209302,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__7742__auto__","matching-count__7742__auto__",-771324772,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__7740__auto__","matching-invocations__7740__auto__",-434712946,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__7734__auto__","times__7734__auto__",327098132,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__7742__auto__","matching-count__7742__auto__",-771324772,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__7734__auto__","times__7734__auto__",327098132,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__7738__auto__","invocations-str__7738__auto__",-694504831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__7734__auto__","times__7734__auto__",327098132,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__7731__auto__","name__7731__auto__",-1030857153,null),null,(1),null)),(new cljs.core.List(null," with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__7737__auto__","with__7737__auto__",-1365378058,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__7742__auto__","matching-count__7742__auto__",-771324772,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__7738__auto__","invocations-str__7738__auto__",-694504831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__7742__auto__","matching-count__7742__auto__",-771324772,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__7736__auto__","check-params?__7736__auto__",-1526120317,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7730__7743__auto__","p1__7730__7743__auto__",278761863,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__7737__auto__","with__7737__auto__",-1365378058,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7730__7743__auto__","p1__7730__7743__auto__",278761863,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__7733__auto__","invocations__7733__auto__",2127209302,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: invocation of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__7731__auto__","name__7731__auto__",-1030857153,null),null,(1),null)),(new cljs.core.List(null," with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__7737__auto__","with__7737__auto__",-1365378058,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__7733__auto__","invocations__7733__auto__",2127209302,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__7735__auto__","times?__7735__auto__",2028685531,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__7734__auto__","times__7734__auto__",327098132,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__7733__auto__","invocations__7733__auto__",2127209302,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__7734__auto__","times__7734__auto__",327098132,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__7738__auto__","invocations-str__7738__auto__",-694504831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__7734__auto__","times__7734__auto__",327098132,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__7731__auto__","name__7731__auto__",-1030857153,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__7733__auto__","invocations__7733__auto__",2127209302,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__7733__auto__","invocations__7733__auto__",2127209302,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: an invocation of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__7731__auto__","name__7731__auto__",-1030857153,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__7733__auto__","invocations__7733__auto__",2127209302,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_have_invoked.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(speclj.core.should_have_invoked.cljs$lang$macro = true);

var ret__5824__auto___7766 = (function (){
/**
 * Inverse of should-have-invoked.
 * 
 *   Options:
 *  :times - the number of times the stub should not have been invoked. nil means never. (default: nil)
 *  :with - a list of arguments that the stubs should not have been invoked with.
 *    If not specified, anything goes. Special expected arguments include:
 *     :* - matches anything
 *     a fn - matches when the actual is the same fn or calling fn with the actual argument returns true
 * 
 *   Example:
 *   (let [foo (stub :foo)]
 *  (should-not-have-invoked :foo {:with [1] :times 3}) ; pass
 *  (foo 1)
 *  (should-not-have-invoked :foo {:with [1] :times 3}) ; pass
 *  (should-not-have-invoked :foo {:with [1] :times 1}) ; fail
 *  (should-not-have-invoked :foo {:times 3}) ; pass
 *  (should-not-have-invoked :foo {:times 1}) ; fail
 *  (should-not-have-invoked :foo {:with [1]}) ; fail
 *  )
 */
speclj.core.should_not_have_invoked = (function speclj$core$should_not_have_invoked(var_args){
var G__7765 = arguments.length;
switch (G__7765) {
case 3:
return speclj.core.should_not_have_invoked.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core.should_not_have_invoked.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_not_have_invoked.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,name){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-not-have-invoked","speclj.core/should-not-have-invoked",1793584684,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))));
}));

(speclj.core.should_not_have_invoked.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,name,options){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"name__7751__auto__","name__7751__auto__",893162642,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__7752__auto__","options__7752__auto__",1048193951,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__7753__auto__","invocations__7753__auto__",-1956527780,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","invocations-of","speclj.stub/invocations-of",1244579949,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__7751__auto__","name__7751__auto__",893162642,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__7754__auto__","times__7754__auto__",-1110068001,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"times","times",1671571467),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__7752__auto__","options__7752__auto__",1048193951,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__7755__auto__","times?__7755__auto__",-908903842,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__7754__auto__","times__7754__auto__",-1110068001,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__7756__auto__","check-params?__7756__auto__",770830861,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__7752__auto__","options__7752__auto__",1048193951,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__7757__auto__","with__7757__auto__",-455544397,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__7752__auto__","options__7752__auto__",1048193951,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__7757__auto__","with__7757__auto__",-455544397,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__7757__auto__","with__7757__auto__",-455544397,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__7757__auto__","with__7757__auto__",-455544397,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__7758__auto__","add-s__7758__auto__",8996950,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7748__7759__auto__","p1__7748__7759__auto__",-1117618257,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7748__7759__auto__","p1__7748__7759__auto__",-1117618257,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"",null,(1),null)),(new cljs.core.List(null,"s",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__7755__auto__","times?__7755__auto__",-908903842,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__7756__auto__","check-params?__7756__auto__",770830861,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__7760__auto__","matching-invocations__7760__auto__",1510844498,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","filter","cljs.core/filter",-251894204,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7749__7761__auto__","p1__7749__7761__auto__",2043412461,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__7757__auto__","with__7757__auto__",-455544397,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7749__7761__auto__","p1__7749__7761__auto__",2043412461,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__7753__auto__","invocations__7753__auto__",-1956527780,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__7762__auto__","matching-count__7762__auto__",-127474154,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__7760__auto__","matching-invocations__7760__auto__",1510844498,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__7754__auto__","times__7754__auto__",-1110068001,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__7762__auto__","matching-count__7762__auto__",-127474154,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__7751__auto__","name__7751__auto__",893162642,null),null,(1),null)),(new cljs.core.List(null," not to have been invoked ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__7754__auto__","times__7754__auto__",-1110068001,null),null,(1),null)),(new cljs.core.List(null," time",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__7758__auto__","add-s__7758__auto__",8996950,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__7762__auto__","matching-count__7762__auto__",-127474154,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__7757__auto__","with__7757__auto__",-455544397,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__7762__auto__","matching-count__7762__auto__",-127474154,null),null,(1),null)),(new cljs.core.List(null," invocation",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__7758__auto__","add-s__7758__auto__",8996950,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__7762__auto__","matching-count__7762__auto__",-127474154,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__7755__auto__","times?__7755__auto__",-908903842,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__7754__auto__","times__7754__auto__",-1110068001,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__7753__auto__","invocations__7753__auto__",-1956527780,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__7751__auto__","name__7751__auto__",893162642,null),null,(1),null)),(new cljs.core.List(null," not to have been invoked ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__7754__auto__","times__7754__auto__",-1110068001,null),null,(1),null)),(new cljs.core.List(null," time",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__7758__auto__","add-s__7758__auto__",8996950,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__7754__auto__","times__7754__auto__",-1110068001,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__7754__auto__","times__7754__auto__",-1110068001,null),null,(1),null)),(new cljs.core.List(null," invocation",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__7758__auto__","add-s__7758__auto__",8996950,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__7754__auto__","times__7754__auto__",-1110068001,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__7756__auto__","check-params?__7756__auto__",770830861,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7750__7763__auto__","p1__7750__7763__auto__",-1951391897,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__7757__auto__","with__7757__auto__",-455544397,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__7750__7763__auto__","p1__7750__7763__auto__",-1951391897,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__7753__auto__","invocations__7753__auto__",-1956527780,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__7751__auto__","name__7751__auto__",893162642,null),null,(1),null)),(new cljs.core.List(null," not to have been invoked with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__7757__auto__","with__7757__auto__",-455544397,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__7753__auto__","invocations__7753__auto__",-1956527780,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__7753__auto__","invocations__7753__auto__",-1956527780,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: 0 invocations of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__7751__auto__","name__7751__auto__",893162642,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__7753__auto__","invocations__7753__auto__",-1956527780,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_not_have_invoked.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(speclj.core.should_not_have_invoked.cljs$lang$macro = true);

speclj.core._STAR_bound_by_should_invoke_STAR_ = false;
var ret__5824__auto___7768 = speclj.core.bound_by_should_invoke_QMARK_ = (function speclj$core$bound_by_should_invoke_QMARK_(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","*bound-by-should-invoke*","speclj.core/*bound-by-should-invoke*",-207459510,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","bound?","speclj.core/bound?",-726786538,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","*bound-by-should-invoke*","speclj.core/*bound-by-should-invoke*",-207459510,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","*bound-by-should-invoke*","speclj.core/*bound-by-should-invoke*",-207459510,null),null,(1),null))))),null,(1),null)))));
});
(speclj.core.bound_by_should_invoke_QMARK_.cljs$lang$macro = true);

var ret__5824__auto___7772 = (function (){
speclj.core.with_stubbed_invocations = (function speclj$core$with_stubbed_invocations(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7773 = arguments.length;
var i__5770__auto___7774 = (0);
while(true){
if((i__5770__auto___7774 < len__5769__auto___7773)){
args__5775__auto__.push((arguments[i__5770__auto___7774]));

var G__7775 = (i__5770__auto___7774 + (1));
i__5770__auto___7774 = G__7775;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return speclj.core.with_stubbed_invocations.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(speclj.core.with_stubbed_invocations.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","bound-by-should-invoke?","speclj.platform/bound-by-should-invoke?",2142036973,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","*stubbed-invocations*","speclj.stub/*stubbed-invocations*",-474598582,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","*bound-by-should-invoke*","speclj.platform/*bound-by-should-invoke*",-572267866,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)))))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.with_stubbed_invocations.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.with_stubbed_invocations.cljs$lang$applyTo = (function (seq7769){
var G__7770 = cljs.core.first.call(null,seq7769);
var seq7769__$1 = cljs.core.next.call(null,seq7769);
var G__7771 = cljs.core.first.call(null,seq7769__$1);
var seq7769__$2 = cljs.core.next.call(null,seq7769__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7770,G__7771,seq7769__$2);
}));

return null;
})()
;
(speclj.core.with_stubbed_invocations.cljs$lang$macro = true);

var ret__5824__auto___7782 = (function (){
/**
 * Creates a stub, and binds it to the specified var, evaluates the body, and checks the invocations.
 * 
 *   (should-invoke reverse {:with [1 2 3] :return []} (reverse [1 2 3]))
 * 
 *   See stub and should-have-invoked for valid options.
 */
speclj.core.should_invoke = (function speclj$core$should_invoke(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7783 = arguments.length;
var i__5770__auto___7784 = (0);
while(true){
if((i__5770__auto___7784 < len__5769__auto___7783)){
args__5775__auto__.push((arguments[i__5770__auto___7784]));

var G__7785 = (i__5770__auto___7784 + (1));
i__5770__auto___7784 = G__7785;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return speclj.core.should_invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(speclj.core.should_invoke.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,var$,options,body){
if(cljs.core.map_QMARK_.call(null,options)){
} else {
cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,"The second argument to should-invoke must be a map of options",null,(1),null))))),null,(1),null)))));
}

var var_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"options__7776__auto__","options__7776__auto__",1463698461,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","with-stubbed-invocations","speclj.core/with-stubbed-invocations",-469130005,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,var$,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","stub","speclj.stub/stub",977871771,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__7776__auto__","options__7776__auto__",1463698461,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-have-invoked","speclj.core/should-have-invoked",-864349238,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__7776__auto__","options__7776__auto__",1463698461,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_invoke.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(speclj.core.should_invoke.cljs$lang$applyTo = (function (seq7777){
var G__7778 = cljs.core.first.call(null,seq7777);
var seq7777__$1 = cljs.core.next.call(null,seq7777);
var G__7779 = cljs.core.first.call(null,seq7777__$1);
var seq7777__$2 = cljs.core.next.call(null,seq7777__$1);
var G__7780 = cljs.core.first.call(null,seq7777__$2);
var seq7777__$3 = cljs.core.next.call(null,seq7777__$2);
var G__7781 = cljs.core.first.call(null,seq7777__$3);
var seq7777__$4 = cljs.core.next.call(null,seq7777__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7778,G__7779,G__7780,G__7781,seq7777__$4);
}));

return null;
})()
;
(speclj.core.should_invoke.cljs$lang$macro = true);

var ret__5824__auto___7792 = (function (){
/**
 * Creates a stub, and binds it to the specified var, evaluates the body, and checks that is was NOT invoked.
 * 
 *   (should-not-invoke reverse {:with [1 2 3] :return [] :times 2} (reverse [1 2 3])) ; pass
 *   (should-not-invoke reverse {:with [1 2 3] :return []} (reverse [1 2 3])) ; fail
 * 
 *   See stub and should-not-have-invoked for valid options.
 */
speclj.core.should_not_invoke = (function speclj$core$should_not_invoke(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7793 = arguments.length;
var i__5770__auto___7794 = (0);
while(true){
if((i__5770__auto___7794 < len__5769__auto___7793)){
args__5775__auto__.push((arguments[i__5770__auto___7794]));

var G__7795 = (i__5770__auto___7794 + (1));
i__5770__auto___7794 = G__7795;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return speclj.core.should_not_invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(speclj.core.should_not_invoke.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,var$,options,body){
if(cljs.core.map_QMARK_.call(null,options)){
} else {
cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,"The second argument to should-not-invoke must be a map of options",null,(1),null))))),null,(1),null)))));
}

var var_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"options__7786__auto__","options__7786__auto__",1408895453,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","with-stubbed-invocations","speclj.core/with-stubbed-invocations",-469130005,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,var$,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","stub","speclj.stub/stub",977871771,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__7786__auto__","options__7786__auto__",1408895453,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-not-have-invoked","speclj.core/should-not-have-invoked",1793584684,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__7786__auto__","options__7786__auto__",1408895453,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_not_invoke.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(speclj.core.should_not_invoke.cljs$lang$applyTo = (function (seq7787){
var G__7788 = cljs.core.first.call(null,seq7787);
var seq7787__$1 = cljs.core.next.call(null,seq7787);
var G__7789 = cljs.core.first.call(null,seq7787__$1);
var seq7787__$2 = cljs.core.next.call(null,seq7787__$1);
var G__7790 = cljs.core.first.call(null,seq7787__$2);
var seq7787__$3 = cljs.core.next.call(null,seq7787__$2);
var G__7791 = cljs.core.first.call(null,seq7787__$3);
var seq7787__$4 = cljs.core.next.call(null,seq7787__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7788,G__7789,G__7790,G__7791,seq7787__$4);
}));

return null;
})()
;
(speclj.core.should_not_invoke.cljs$lang$macro = true);

var ret__5824__auto___7796 = /**
 * Asserts that the first numeric form is less than the second numeric form, using the built-in < function.
 */
speclj.core.should_LT_ = (function speclj$core$should_LT_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should<",null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,b,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,b,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null," to be less than ",null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null," but got: (< ",null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_LT_.cljs$lang$macro = true);

var ret__5824__auto___7797 = /**
 * Asserts that the first numeric form is greater than the second numeric form, using the built-in > function.
 */
speclj.core.should_GT_ = (function speclj$core$should_GT_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should>",null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,b,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,b,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null," to be greater than ",null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null," but got: (> ",null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_GT_.cljs$lang$macro = true);

var ret__5824__auto___7798 = /**
 * Asserts that the first numeric form is less than or equal to the second numeric form, using the built-in <= function.
 */
speclj.core.should_LT__EQ_ = (function speclj$core$should_LT__EQ_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should<=",null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,b,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,b,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null," to be less than or equal to ",null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null," but got: (<= ",null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_LT__EQ_.cljs$lang$macro = true);

var ret__5824__auto___7799 = /**
 * Asserts that the first numeric form is greater than or equal to the second numeric form, using the built-in >= function.
 */
speclj.core.should_GT__EQ_ = (function speclj$core$should_GT__EQ_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should>=",null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,b,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,b,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null," to be greater than or equal to ",null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null," but got: (>= ",null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_GT__EQ_.cljs$lang$macro = true);

var ret__5824__auto___7800 = speclj.core.run_specs = (function speclj$core$run_specs(_AMPERSAND_form,_AMPERSAND_env){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","comment","cljs.core/comment",1774254937,null),null,(1),null)),(new cljs.core.List(null,"Ignoring run-specs for clojurescript",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","require","cljs.core/require",2107770869,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"speclj.cli","speclj.cli",1577675379,null),null,(1),null)))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.run.standard","run-specs","speclj.run.standard/run-specs",-1568794497,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.run_specs.cljs$lang$macro = true);


//# sourceMappingURL=core.js.map
