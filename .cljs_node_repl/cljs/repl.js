// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__4445){
var map__4446 = p__4445;
var map__4446__$1 = cljs.core.__destructure_map.call(null,map__4446);
var m = map__4446__$1;
var n = cljs.core.get.call(null,map__4446__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__4446__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__4447_4475 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__4448_4476 = null;
var count__4449_4477 = (0);
var i__4450_4478 = (0);
while(true){
if((i__4450_4478 < count__4449_4477)){
var f_4479 = cljs.core._nth.call(null,chunk__4448_4476,i__4450_4478);
cljs.core.println.call(null,"  ",f_4479);


var G__4480 = seq__4447_4475;
var G__4481 = chunk__4448_4476;
var G__4482 = count__4449_4477;
var G__4483 = (i__4450_4478 + (1));
seq__4447_4475 = G__4480;
chunk__4448_4476 = G__4481;
count__4449_4477 = G__4482;
i__4450_4478 = G__4483;
continue;
} else {
var temp__5753__auto___4484 = cljs.core.seq.call(null,seq__4447_4475);
if(temp__5753__auto___4484){
var seq__4447_4485__$1 = temp__5753__auto___4484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4447_4485__$1)){
var c__5568__auto___4486 = cljs.core.chunk_first.call(null,seq__4447_4485__$1);
var G__4487 = cljs.core.chunk_rest.call(null,seq__4447_4485__$1);
var G__4488 = c__5568__auto___4486;
var G__4489 = cljs.core.count.call(null,c__5568__auto___4486);
var G__4490 = (0);
seq__4447_4475 = G__4487;
chunk__4448_4476 = G__4488;
count__4449_4477 = G__4489;
i__4450_4478 = G__4490;
continue;
} else {
var f_4491 = cljs.core.first.call(null,seq__4447_4485__$1);
cljs.core.println.call(null,"  ",f_4491);


var G__4492 = cljs.core.next.call(null,seq__4447_4485__$1);
var G__4493 = null;
var G__4494 = (0);
var G__4495 = (0);
seq__4447_4475 = G__4492;
chunk__4448_4476 = G__4493;
count__4449_4477 = G__4494;
i__4450_4478 = G__4495;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_4496 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_4496);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_4496)))?cljs.core.second.call(null,arglists_4496):arglists_4496));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__4451_4497 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__4452_4498 = null;
var count__4453_4499 = (0);
var i__4454_4500 = (0);
while(true){
if((i__4454_4500 < count__4453_4499)){
var vec__4463_4501 = cljs.core._nth.call(null,chunk__4452_4498,i__4454_4500);
var name_4502 = cljs.core.nth.call(null,vec__4463_4501,(0),null);
var map__4466_4503 = cljs.core.nth.call(null,vec__4463_4501,(1),null);
var map__4466_4504__$1 = cljs.core.__destructure_map.call(null,map__4466_4503);
var doc_4505 = cljs.core.get.call(null,map__4466_4504__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_4506 = cljs.core.get.call(null,map__4466_4504__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_4502);

cljs.core.println.call(null," ",arglists_4506);

if(cljs.core.truth_(doc_4505)){
cljs.core.println.call(null," ",doc_4505);
} else {
}


var G__4507 = seq__4451_4497;
var G__4508 = chunk__4452_4498;
var G__4509 = count__4453_4499;
var G__4510 = (i__4454_4500 + (1));
seq__4451_4497 = G__4507;
chunk__4452_4498 = G__4508;
count__4453_4499 = G__4509;
i__4454_4500 = G__4510;
continue;
} else {
var temp__5753__auto___4511 = cljs.core.seq.call(null,seq__4451_4497);
if(temp__5753__auto___4511){
var seq__4451_4512__$1 = temp__5753__auto___4511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4451_4512__$1)){
var c__5568__auto___4513 = cljs.core.chunk_first.call(null,seq__4451_4512__$1);
var G__4514 = cljs.core.chunk_rest.call(null,seq__4451_4512__$1);
var G__4515 = c__5568__auto___4513;
var G__4516 = cljs.core.count.call(null,c__5568__auto___4513);
var G__4517 = (0);
seq__4451_4497 = G__4514;
chunk__4452_4498 = G__4515;
count__4453_4499 = G__4516;
i__4454_4500 = G__4517;
continue;
} else {
var vec__4467_4518 = cljs.core.first.call(null,seq__4451_4512__$1);
var name_4519 = cljs.core.nth.call(null,vec__4467_4518,(0),null);
var map__4470_4520 = cljs.core.nth.call(null,vec__4467_4518,(1),null);
var map__4470_4521__$1 = cljs.core.__destructure_map.call(null,map__4470_4520);
var doc_4522 = cljs.core.get.call(null,map__4470_4521__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_4523 = cljs.core.get.call(null,map__4470_4521__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_4519);

cljs.core.println.call(null," ",arglists_4523);

if(cljs.core.truth_(doc_4522)){
cljs.core.println.call(null," ",doc_4522);
} else {
}


var G__4524 = cljs.core.next.call(null,seq__4451_4512__$1);
var G__4525 = null;
var G__4526 = (0);
var G__4527 = (0);
seq__4451_4497 = G__4524;
chunk__4452_4498 = G__4525;
count__4453_4499 = G__4526;
i__4454_4500 = G__4527;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.call(null,"Spec");

var seq__4471 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__4472 = null;
var count__4473 = (0);
var i__4474 = (0);
while(true){
if((i__4474 < count__4473)){
var role = cljs.core._nth.call(null,chunk__4472,i__4474);
var temp__5753__auto___4528__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___4528__$1)){
var spec_4529 = temp__5753__auto___4528__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_4529));
} else {
}


var G__4530 = seq__4471;
var G__4531 = chunk__4472;
var G__4532 = count__4473;
var G__4533 = (i__4474 + (1));
seq__4471 = G__4530;
chunk__4472 = G__4531;
count__4473 = G__4532;
i__4474 = G__4533;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__4471);
if(temp__5753__auto____$1){
var seq__4471__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4471__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__4471__$1);
var G__4534 = cljs.core.chunk_rest.call(null,seq__4471__$1);
var G__4535 = c__5568__auto__;
var G__4536 = cljs.core.count.call(null,c__5568__auto__);
var G__4537 = (0);
seq__4471 = G__4534;
chunk__4472 = G__4535;
count__4473 = G__4536;
i__4474 = G__4537;
continue;
} else {
var role = cljs.core.first.call(null,seq__4471__$1);
var temp__5753__auto___4538__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___4538__$2)){
var spec_4539 = temp__5753__auto___4538__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_4539));
} else {
}


var G__4540 = cljs.core.next.call(null,seq__4471__$1);
var G__4541 = null;
var G__4542 = (0);
var G__4543 = (0);
seq__4471 = G__4540;
chunk__4472 = G__4541;
count__4473 = G__4542;
i__4474 = G__4543;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__4544 = cljs.core.conj.call(null,via,t);
var G__4545 = cljs.core.ex_cause.call(null,t);
via = G__4544;
t = G__4545;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__4548 = datafied_throwable;
var map__4548__$1 = cljs.core.__destructure_map.call(null,map__4548);
var via = cljs.core.get.call(null,map__4548__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__4548__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__4548__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__4549 = cljs.core.last.call(null,via);
var map__4549__$1 = cljs.core.__destructure_map.call(null,map__4549);
var type = cljs.core.get.call(null,map__4549__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__4549__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__4549__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__4550 = data;
var map__4550__$1 = cljs.core.__destructure_map.call(null,map__4550);
var problems = cljs.core.get.call(null,map__4550__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__4550__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__4550__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__4551 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__4551__$1 = cljs.core.__destructure_map.call(null,map__4551);
var top_data = map__4551__$1;
var source = cljs.core.get.call(null,map__4551__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__4552 = phase;
var G__4552__$1 = (((G__4552 instanceof cljs.core.Keyword))?G__4552.fqn:null);
switch (G__4552__$1) {
case "read-source":
var map__4553 = data;
var map__4553__$1 = cljs.core.__destructure_map.call(null,map__4553);
var line = cljs.core.get.call(null,map__4553__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__4553__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__4554 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__4554__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__4554,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__4554);
var G__4554__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__4554__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__4554__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__4554__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__4554__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__4555 = top_data;
var G__4555__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__4555,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__4555);
var G__4555__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__4555__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__4555__$1);
var G__4555__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__4555__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__4555__$2);
var G__4555__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__4555__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__4555__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__4555__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__4555__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__4556 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__4556,(0),null);
var method = cljs.core.nth.call(null,vec__4556,(1),null);
var file = cljs.core.nth.call(null,vec__4556,(2),null);
var line = cljs.core.nth.call(null,vec__4556,(3),null);
var G__4559 = top_data;
var G__4559__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__4559,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__4559);
var G__4559__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__4559__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__4559__$1);
var G__4559__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__4559__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__4559__$2);
var G__4559__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__4559__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__4559__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__4559__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__4559__$4;
}

break;
case "execution":
var vec__4560 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__4560,(0),null);
var method = cljs.core.nth.call(null,vec__4560,(1),null);
var file = cljs.core.nth.call(null,vec__4560,(2),null);
var line = cljs.core.nth.call(null,vec__4560,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__4547_SHARP_){
var or__5045__auto__ = (p1__4547_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__4547_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__4563 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__4563__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__4563,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__4563);
var G__4563__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__4563__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__4563__$1);
var G__4563__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.call(null,G__4563__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__4563__$2);
var G__4563__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__4563__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__4563__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__4563__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__4563__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4552__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__4567){
var map__4568 = p__4567;
var map__4568__$1 = cljs.core.__destructure_map.call(null,map__4568);
var triage_data = map__4568__$1;
var phase = cljs.core.get.call(null,map__4568__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__4568__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__4568__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__4568__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__4568__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__4568__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__4568__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__4568__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__4569 = phase;
var G__4569__$1 = (((G__4569 instanceof cljs.core.Keyword))?G__4569.fqn:null);
switch (G__4569__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__4570_4579 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__4571_4580 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__4572_4581 = true;
var _STAR_print_fn_STAR__temp_val__4573_4582 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__4572_4581);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__4573_4582);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__4565_SHARP_){
return cljs.core.dissoc.call(null,p1__4565_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__4571_4580);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__4570_4579);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__4574_4583 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__4575_4584 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__4576_4585 = true;
var _STAR_print_fn_STAR__temp_val__4577_4586 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__4576_4585);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__4577_4586);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__4566_SHARP_){
return cljs.core.dissoc.call(null,p1__4566_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__4575_4584);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__4574_4583);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4569__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
