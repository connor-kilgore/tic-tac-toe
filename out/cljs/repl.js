// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1838){
var map__1839 = p__1838;
var map__1839__$1 = cljs.core.__destructure_map.call(null,map__1839);
var m = map__1839__$1;
var n = cljs.core.get.call(null,map__1839__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1839__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__1840_1868 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1841_1869 = null;
var count__1842_1870 = (0);
var i__1843_1871 = (0);
while(true){
if((i__1843_1871 < count__1842_1870)){
var f_1872 = cljs.core._nth.call(null,chunk__1841_1869,i__1843_1871);
cljs.core.println.call(null,"  ",f_1872);


var G__1873 = seq__1840_1868;
var G__1874 = chunk__1841_1869;
var G__1875 = count__1842_1870;
var G__1876 = (i__1843_1871 + (1));
seq__1840_1868 = G__1873;
chunk__1841_1869 = G__1874;
count__1842_1870 = G__1875;
i__1843_1871 = G__1876;
continue;
} else {
var temp__5753__auto___1877 = cljs.core.seq.call(null,seq__1840_1868);
if(temp__5753__auto___1877){
var seq__1840_1878__$1 = temp__5753__auto___1877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1840_1878__$1)){
var c__5568__auto___1879 = cljs.core.chunk_first.call(null,seq__1840_1878__$1);
var G__1880 = cljs.core.chunk_rest.call(null,seq__1840_1878__$1);
var G__1881 = c__5568__auto___1879;
var G__1882 = cljs.core.count.call(null,c__5568__auto___1879);
var G__1883 = (0);
seq__1840_1868 = G__1880;
chunk__1841_1869 = G__1881;
count__1842_1870 = G__1882;
i__1843_1871 = G__1883;
continue;
} else {
var f_1884 = cljs.core.first.call(null,seq__1840_1878__$1);
cljs.core.println.call(null,"  ",f_1884);


var G__1885 = cljs.core.next.call(null,seq__1840_1878__$1);
var G__1886 = null;
var G__1887 = (0);
var G__1888 = (0);
seq__1840_1868 = G__1885;
chunk__1841_1869 = G__1886;
count__1842_1870 = G__1887;
i__1843_1871 = G__1888;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1889 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1889);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1889)))?cljs.core.second.call(null,arglists_1889):arglists_1889));
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
var seq__1844_1890 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1845_1891 = null;
var count__1846_1892 = (0);
var i__1847_1893 = (0);
while(true){
if((i__1847_1893 < count__1846_1892)){
var vec__1856_1894 = cljs.core._nth.call(null,chunk__1845_1891,i__1847_1893);
var name_1895 = cljs.core.nth.call(null,vec__1856_1894,(0),null);
var map__1859_1896 = cljs.core.nth.call(null,vec__1856_1894,(1),null);
var map__1859_1897__$1 = cljs.core.__destructure_map.call(null,map__1859_1896);
var doc_1898 = cljs.core.get.call(null,map__1859_1897__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1899 = cljs.core.get.call(null,map__1859_1897__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1895);

cljs.core.println.call(null," ",arglists_1899);

if(cljs.core.truth_(doc_1898)){
cljs.core.println.call(null," ",doc_1898);
} else {
}


var G__1900 = seq__1844_1890;
var G__1901 = chunk__1845_1891;
var G__1902 = count__1846_1892;
var G__1903 = (i__1847_1893 + (1));
seq__1844_1890 = G__1900;
chunk__1845_1891 = G__1901;
count__1846_1892 = G__1902;
i__1847_1893 = G__1903;
continue;
} else {
var temp__5753__auto___1904 = cljs.core.seq.call(null,seq__1844_1890);
if(temp__5753__auto___1904){
var seq__1844_1905__$1 = temp__5753__auto___1904;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1844_1905__$1)){
var c__5568__auto___1906 = cljs.core.chunk_first.call(null,seq__1844_1905__$1);
var G__1907 = cljs.core.chunk_rest.call(null,seq__1844_1905__$1);
var G__1908 = c__5568__auto___1906;
var G__1909 = cljs.core.count.call(null,c__5568__auto___1906);
var G__1910 = (0);
seq__1844_1890 = G__1907;
chunk__1845_1891 = G__1908;
count__1846_1892 = G__1909;
i__1847_1893 = G__1910;
continue;
} else {
var vec__1860_1911 = cljs.core.first.call(null,seq__1844_1905__$1);
var name_1912 = cljs.core.nth.call(null,vec__1860_1911,(0),null);
var map__1863_1913 = cljs.core.nth.call(null,vec__1860_1911,(1),null);
var map__1863_1914__$1 = cljs.core.__destructure_map.call(null,map__1863_1913);
var doc_1915 = cljs.core.get.call(null,map__1863_1914__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1916 = cljs.core.get.call(null,map__1863_1914__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1912);

cljs.core.println.call(null," ",arglists_1916);

if(cljs.core.truth_(doc_1915)){
cljs.core.println.call(null," ",doc_1915);
} else {
}


var G__1917 = cljs.core.next.call(null,seq__1844_1905__$1);
var G__1918 = null;
var G__1919 = (0);
var G__1920 = (0);
seq__1844_1890 = G__1917;
chunk__1845_1891 = G__1918;
count__1846_1892 = G__1919;
i__1847_1893 = G__1920;
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

var seq__1864 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1865 = null;
var count__1866 = (0);
var i__1867 = (0);
while(true){
if((i__1867 < count__1866)){
var role = cljs.core._nth.call(null,chunk__1865,i__1867);
var temp__5753__auto___1921__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___1921__$1)){
var spec_1922 = temp__5753__auto___1921__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1922));
} else {
}


var G__1923 = seq__1864;
var G__1924 = chunk__1865;
var G__1925 = count__1866;
var G__1926 = (i__1867 + (1));
seq__1864 = G__1923;
chunk__1865 = G__1924;
count__1866 = G__1925;
i__1867 = G__1926;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__1864);
if(temp__5753__auto____$1){
var seq__1864__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1864__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__1864__$1);
var G__1927 = cljs.core.chunk_rest.call(null,seq__1864__$1);
var G__1928 = c__5568__auto__;
var G__1929 = cljs.core.count.call(null,c__5568__auto__);
var G__1930 = (0);
seq__1864 = G__1927;
chunk__1865 = G__1928;
count__1866 = G__1929;
i__1867 = G__1930;
continue;
} else {
var role = cljs.core.first.call(null,seq__1864__$1);
var temp__5753__auto___1931__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___1931__$2)){
var spec_1932 = temp__5753__auto___1931__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1932));
} else {
}


var G__1933 = cljs.core.next.call(null,seq__1864__$1);
var G__1934 = null;
var G__1935 = (0);
var G__1936 = (0);
seq__1864 = G__1933;
chunk__1865 = G__1934;
count__1866 = G__1935;
i__1867 = G__1936;
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
var G__1937 = cljs.core.conj.call(null,via,t);
var G__1938 = cljs.core.ex_cause.call(null,t);
via = G__1937;
t = G__1938;
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
var map__1941 = datafied_throwable;
var map__1941__$1 = cljs.core.__destructure_map.call(null,map__1941);
var via = cljs.core.get.call(null,map__1941__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1941__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1941__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1942 = cljs.core.last.call(null,via);
var map__1942__$1 = cljs.core.__destructure_map.call(null,map__1942);
var type = cljs.core.get.call(null,map__1942__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1942__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1942__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1943 = data;
var map__1943__$1 = cljs.core.__destructure_map.call(null,map__1943);
var problems = cljs.core.get.call(null,map__1943__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1943__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1943__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1944 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1944__$1 = cljs.core.__destructure_map.call(null,map__1944);
var top_data = map__1944__$1;
var source = cljs.core.get.call(null,map__1944__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1945 = phase;
var G__1945__$1 = (((G__1945 instanceof cljs.core.Keyword))?G__1945.fqn:null);
switch (G__1945__$1) {
case "read-source":
var map__1946 = data;
var map__1946__$1 = cljs.core.__destructure_map.call(null,map__1946);
var line = cljs.core.get.call(null,map__1946__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1946__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1947 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1947__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1947,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1947);
var G__1947__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1947__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1947__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1947__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1947__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1948 = top_data;
var G__1948__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1948,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1948);
var G__1948__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1948__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1948__$1);
var G__1948__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1948__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1948__$2);
var G__1948__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1948__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1948__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1948__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1948__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1949 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1949,(0),null);
var method = cljs.core.nth.call(null,vec__1949,(1),null);
var file = cljs.core.nth.call(null,vec__1949,(2),null);
var line = cljs.core.nth.call(null,vec__1949,(3),null);
var G__1952 = top_data;
var G__1952__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1952,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1952);
var G__1952__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1952__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1952__$1);
var G__1952__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__1952__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1952__$2);
var G__1952__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1952__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1952__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1952__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1952__$4;
}

break;
case "execution":
var vec__1953 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1953,(0),null);
var method = cljs.core.nth.call(null,vec__1953,(1),null);
var file = cljs.core.nth.call(null,vec__1953,(2),null);
var line = cljs.core.nth.call(null,vec__1953,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__1940_SHARP_){
var or__5045__auto__ = (p1__1940_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1940_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__1956 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1956__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1956,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1956);
var G__1956__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1956__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1956__$1);
var G__1956__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__1956__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1956__$2);
var G__1956__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1956__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1956__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1956__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1956__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1945__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1960){
var map__1961 = p__1960;
var map__1961__$1 = cljs.core.__destructure_map.call(null,map__1961);
var triage_data = map__1961__$1;
var phase = cljs.core.get.call(null,map__1961__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1961__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1961__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1961__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1961__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1961__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1961__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1961__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__1962 = phase;
var G__1962__$1 = (((G__1962 instanceof cljs.core.Keyword))?G__1962.fqn:null);
switch (G__1962__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1963_1972 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1964_1973 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1965_1974 = true;
var _STAR_print_fn_STAR__temp_val__1966_1975 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1965_1974);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1966_1975);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1958_SHARP_){
return cljs.core.dissoc.call(null,p1__1958_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1964_1973);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1963_1972);
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
var _STAR_print_newline_STAR__orig_val__1967_1976 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1968_1977 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1969_1978 = true;
var _STAR_print_fn_STAR__temp_val__1970_1979 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1969_1978);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1970_1979);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1959_SHARP_){
return cljs.core.dissoc.call(null,p1__1959_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1968_1977);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1967_1976);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1962__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
