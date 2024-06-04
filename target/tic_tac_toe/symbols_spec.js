// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.symbols_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.symbols');
goog.require('speclj.core');
var description__9225__auto___10377 = speclj.components.new_description.call(null,"Symbols",false,"tic-tac-toe.symbols-spec");
var _STAR_parent_description_STAR__orig_val__10359_10378 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10360_10379 = description__9225__auto___10377;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10360_10379);

try{var seq__10361_10380 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"gives an O when provided an X",((function (_STAR_parent_description_STAR__orig_val__10359_10378,_STAR_parent_description_STAR__temp_val__10360_10379,description__9225__auto___10377){
return (function (){
var expected__9358__auto__ = (2);
var actual__9359__auto__ = tic_tac_toe.symbols.reverse_symbol.call(null,(1));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10359_10378,_STAR_parent_description_STAR__temp_val__10360_10379,description__9225__auto___10377))
,false),speclj.components.new_characteristic.call(null,"gives an X when provided an O",((function (_STAR_parent_description_STAR__orig_val__10359_10378,_STAR_parent_description_STAR__temp_val__10360_10379,description__9225__auto___10377){
return (function (){
var expected__9358__auto__ = (1);
var actual__9359__auto__ = tic_tac_toe.symbols.reverse_symbol.call(null,(2));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10359_10378,_STAR_parent_description_STAR__temp_val__10360_10379,description__9225__auto___10377))
,false),(function (){var description__9225__auto____$1 = speclj.components.new_description.call(null,"At a position on a given board, gives an",false,"tic-tac-toe.symbols-spec");
var _STAR_parent_description_STAR__orig_val__10371_10384 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10372_10385 = description__9225__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10372_10385);

try{var seq__10373_10386 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"X",((function (_STAR_parent_description_STAR__orig_val__10371_10384,_STAR_parent_description_STAR__temp_val__10372_10385,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10359_10378,_STAR_parent_description_STAR__temp_val__10360_10379,description__9225__auto___10377){
return (function (){
var expected__9358__auto__ = ["\u001B[38;5;",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),"m"," X","\u001B[0m"].join('');
var actual__9359__auto__ = tic_tac_toe.symbols.symbol_at.call(null,(0),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10371_10384,_STAR_parent_description_STAR__temp_val__10372_10385,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10359_10378,_STAR_parent_description_STAR__temp_val__10360_10379,description__9225__auto___10377))
,false),speclj.components.new_characteristic.call(null,"O",((function (_STAR_parent_description_STAR__orig_val__10371_10384,_STAR_parent_description_STAR__temp_val__10372_10385,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10359_10378,_STAR_parent_description_STAR__temp_val__10360_10379,description__9225__auto___10377){
return (function (){
var expected__9358__auto__ = ["\u001B[38;5;",cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),"m"," O","\u001B[0m"].join('');
var actual__9359__auto__ = tic_tac_toe.symbols.symbol_at.call(null,(2),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10371_10384,_STAR_parent_description_STAR__temp_val__10372_10385,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10359_10378,_STAR_parent_description_STAR__temp_val__10360_10379,description__9225__auto___10377))
,false),speclj.components.new_characteristic.call(null,"Empty space",((function (_STAR_parent_description_STAR__orig_val__10371_10384,_STAR_parent_description_STAR__temp_val__10372_10385,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10359_10378,_STAR_parent_description_STAR__temp_val__10360_10379,description__9225__auto___10377){
return (function (){
var expected__9358__auto__ = (0);
var actual__9359__auto__ = tic_tac_toe.symbols.symbol_at.call(null,(0),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10371_10384,_STAR_parent_description_STAR__temp_val__10372_10385,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10359_10378,_STAR_parent_description_STAR__temp_val__10360_10379,description__9225__auto___10377))
,false)],null)));
var chunk__10374_10387 = null;
var count__10375_10388 = (0);
var i__10376_10389 = (0);
while(true){
if((i__10376_10389 < count__10375_10388)){
var component__9226__auto___10390 = cljs.core._nth.call(null,chunk__10374_10387,i__10376_10389);
speclj.components.install.call(null,component__9226__auto___10390,description__9225__auto____$1);


var G__10391 = seq__10373_10386;
var G__10392 = chunk__10374_10387;
var G__10393 = count__10375_10388;
var G__10394 = (i__10376_10389 + (1));
seq__10373_10386 = G__10391;
chunk__10374_10387 = G__10392;
count__10375_10388 = G__10393;
i__10376_10389 = G__10394;
continue;
} else {
var temp__5753__auto___10395 = cljs.core.seq.call(null,seq__10373_10386);
if(temp__5753__auto___10395){
var seq__10373_10396__$1 = temp__5753__auto___10395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10373_10396__$1)){
var c__5568__auto___10397 = cljs.core.chunk_first.call(null,seq__10373_10396__$1);
var G__10398 = cljs.core.chunk_rest.call(null,seq__10373_10396__$1);
var G__10399 = c__5568__auto___10397;
var G__10400 = cljs.core.count.call(null,c__5568__auto___10397);
var G__10401 = (0);
seq__10373_10386 = G__10398;
chunk__10374_10387 = G__10399;
count__10375_10388 = G__10400;
i__10376_10389 = G__10401;
continue;
} else {
var component__9226__auto___10402 = cljs.core.first.call(null,seq__10373_10396__$1);
speclj.components.install.call(null,component__9226__auto___10402,description__9225__auto____$1);


var G__10403 = cljs.core.next.call(null,seq__10373_10396__$1);
var G__10404 = null;
var G__10405 = (0);
var G__10406 = (0);
seq__10373_10386 = G__10403;
chunk__10374_10387 = G__10404;
count__10375_10388 = G__10405;
i__10376_10389 = G__10406;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10371_10384);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto____$1);
}

return description__9225__auto____$1;
})()],null)));
var chunk__10362_10381 = null;
var count__10363_10382 = (0);
var i__10364_10383 = (0);
while(true){
if((i__10364_10383 < count__10363_10382)){
var component__9226__auto___10407 = cljs.core._nth.call(null,chunk__10362_10381,i__10364_10383);
speclj.components.install.call(null,component__9226__auto___10407,description__9225__auto___10377);


var G__10408 = seq__10361_10380;
var G__10409 = chunk__10362_10381;
var G__10410 = count__10363_10382;
var G__10411 = (i__10364_10383 + (1));
seq__10361_10380 = G__10408;
chunk__10362_10381 = G__10409;
count__10363_10382 = G__10410;
i__10364_10383 = G__10411;
continue;
} else {
var temp__5753__auto___10412 = cljs.core.seq.call(null,seq__10361_10380);
if(temp__5753__auto___10412){
var seq__10361_10413__$1 = temp__5753__auto___10412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10361_10413__$1)){
var c__5568__auto___10414 = cljs.core.chunk_first.call(null,seq__10361_10413__$1);
var G__10415 = cljs.core.chunk_rest.call(null,seq__10361_10413__$1);
var G__10416 = c__5568__auto___10414;
var G__10417 = cljs.core.count.call(null,c__5568__auto___10414);
var G__10418 = (0);
seq__10361_10380 = G__10415;
chunk__10362_10381 = G__10416;
count__10363_10382 = G__10417;
i__10364_10383 = G__10418;
continue;
} else {
var component__9226__auto___10419 = cljs.core.first.call(null,seq__10361_10413__$1);
speclj.components.install.call(null,component__9226__auto___10419,description__9225__auto___10377);


var G__10420 = cljs.core.next.call(null,seq__10361_10413__$1);
var G__10421 = null;
var G__10422 = (0);
var G__10423 = (0);
seq__10361_10380 = G__10420;
chunk__10362_10381 = G__10421;
count__10363_10382 = G__10422;
i__10364_10383 = G__10423;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10359_10378);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto___10377);
}


//# sourceMappingURL=symbols_spec.js.map
