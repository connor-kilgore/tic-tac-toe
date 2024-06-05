// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.symbols_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.symbols');
goog.require('speclj.core');
var description__8840__auto___10461 = speclj.components.new_description.call(null,"Symbols",false,"tic-tac-toe.symbols-spec");
var _STAR_parent_description_STAR__orig_val__10443_10462 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10444_10463 = description__8840__auto___10461;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10444_10463);

try{var seq__10445_10464 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"gives an O when provided an X",((function (_STAR_parent_description_STAR__orig_val__10443_10462,_STAR_parent_description_STAR__temp_val__10444_10463,description__8840__auto___10461){
return (function (){
var expected__8973__auto__ = (2);
var actual__8974__auto__ = tic_tac_toe.symbols.reverse_symbol.call(null,(1));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10443_10462,_STAR_parent_description_STAR__temp_val__10444_10463,description__8840__auto___10461))
,false),speclj.components.new_characteristic.call(null,"gives an X when provided an O",((function (_STAR_parent_description_STAR__orig_val__10443_10462,_STAR_parent_description_STAR__temp_val__10444_10463,description__8840__auto___10461){
return (function (){
var expected__8973__auto__ = (1);
var actual__8974__auto__ = tic_tac_toe.symbols.reverse_symbol.call(null,(2));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10443_10462,_STAR_parent_description_STAR__temp_val__10444_10463,description__8840__auto___10461))
,false),(function (){var description__8840__auto____$1 = speclj.components.new_description.call(null,"At a position on a given board, gives an",false,"tic-tac-toe.symbols-spec");
var _STAR_parent_description_STAR__orig_val__10455_10468 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10456_10469 = description__8840__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10456_10469);

try{var seq__10457_10470 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"X",((function (_STAR_parent_description_STAR__orig_val__10455_10468,_STAR_parent_description_STAR__temp_val__10456_10469,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10443_10462,_STAR_parent_description_STAR__temp_val__10444_10463,description__8840__auto___10461){
return (function (){
var expected__8973__auto__ = ["\u001B[38;5;",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),"m"," X","\u001B[0m"].join('');
var actual__8974__auto__ = tic_tac_toe.symbols.symbol_at.call(null,(0),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10455_10468,_STAR_parent_description_STAR__temp_val__10456_10469,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10443_10462,_STAR_parent_description_STAR__temp_val__10444_10463,description__8840__auto___10461))
,false),speclj.components.new_characteristic.call(null,"O",((function (_STAR_parent_description_STAR__orig_val__10455_10468,_STAR_parent_description_STAR__temp_val__10456_10469,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10443_10462,_STAR_parent_description_STAR__temp_val__10444_10463,description__8840__auto___10461){
return (function (){
var expected__8973__auto__ = ["\u001B[38;5;",cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),"m"," O","\u001B[0m"].join('');
var actual__8974__auto__ = tic_tac_toe.symbols.symbol_at.call(null,(2),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10455_10468,_STAR_parent_description_STAR__temp_val__10456_10469,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10443_10462,_STAR_parent_description_STAR__temp_val__10444_10463,description__8840__auto___10461))
,false),speclj.components.new_characteristic.call(null,"Empty space",((function (_STAR_parent_description_STAR__orig_val__10455_10468,_STAR_parent_description_STAR__temp_val__10456_10469,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10443_10462,_STAR_parent_description_STAR__temp_val__10444_10463,description__8840__auto___10461){
return (function (){
var expected__8973__auto__ = (0);
var actual__8974__auto__ = tic_tac_toe.symbols.symbol_at.call(null,(0),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10455_10468,_STAR_parent_description_STAR__temp_val__10456_10469,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10443_10462,_STAR_parent_description_STAR__temp_val__10444_10463,description__8840__auto___10461))
,false)],null)));
var chunk__10458_10471 = null;
var count__10459_10472 = (0);
var i__10460_10473 = (0);
while(true){
if((i__10460_10473 < count__10459_10472)){
var component__8841__auto___10474 = cljs.core._nth.call(null,chunk__10458_10471,i__10460_10473);
speclj.components.install.call(null,component__8841__auto___10474,description__8840__auto____$1);


var G__10475 = seq__10457_10470;
var G__10476 = chunk__10458_10471;
var G__10477 = count__10459_10472;
var G__10478 = (i__10460_10473 + (1));
seq__10457_10470 = G__10475;
chunk__10458_10471 = G__10476;
count__10459_10472 = G__10477;
i__10460_10473 = G__10478;
continue;
} else {
var temp__5753__auto___10479 = cljs.core.seq.call(null,seq__10457_10470);
if(temp__5753__auto___10479){
var seq__10457_10480__$1 = temp__5753__auto___10479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10457_10480__$1)){
var c__5568__auto___10481 = cljs.core.chunk_first.call(null,seq__10457_10480__$1);
var G__10482 = cljs.core.chunk_rest.call(null,seq__10457_10480__$1);
var G__10483 = c__5568__auto___10481;
var G__10484 = cljs.core.count.call(null,c__5568__auto___10481);
var G__10485 = (0);
seq__10457_10470 = G__10482;
chunk__10458_10471 = G__10483;
count__10459_10472 = G__10484;
i__10460_10473 = G__10485;
continue;
} else {
var component__8841__auto___10486 = cljs.core.first.call(null,seq__10457_10480__$1);
speclj.components.install.call(null,component__8841__auto___10486,description__8840__auto____$1);


var G__10487 = cljs.core.next.call(null,seq__10457_10480__$1);
var G__10488 = null;
var G__10489 = (0);
var G__10490 = (0);
seq__10457_10470 = G__10487;
chunk__10458_10471 = G__10488;
count__10459_10472 = G__10489;
i__10460_10473 = G__10490;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10455_10468);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto____$1);
}

return description__8840__auto____$1;
})()],null)));
var chunk__10446_10465 = null;
var count__10447_10466 = (0);
var i__10448_10467 = (0);
while(true){
if((i__10448_10467 < count__10447_10466)){
var component__8841__auto___10491 = cljs.core._nth.call(null,chunk__10446_10465,i__10448_10467);
speclj.components.install.call(null,component__8841__auto___10491,description__8840__auto___10461);


var G__10492 = seq__10445_10464;
var G__10493 = chunk__10446_10465;
var G__10494 = count__10447_10466;
var G__10495 = (i__10448_10467 + (1));
seq__10445_10464 = G__10492;
chunk__10446_10465 = G__10493;
count__10447_10466 = G__10494;
i__10448_10467 = G__10495;
continue;
} else {
var temp__5753__auto___10496 = cljs.core.seq.call(null,seq__10445_10464);
if(temp__5753__auto___10496){
var seq__10445_10497__$1 = temp__5753__auto___10496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10445_10497__$1)){
var c__5568__auto___10498 = cljs.core.chunk_first.call(null,seq__10445_10497__$1);
var G__10499 = cljs.core.chunk_rest.call(null,seq__10445_10497__$1);
var G__10500 = c__5568__auto___10498;
var G__10501 = cljs.core.count.call(null,c__5568__auto___10498);
var G__10502 = (0);
seq__10445_10464 = G__10499;
chunk__10446_10465 = G__10500;
count__10447_10466 = G__10501;
i__10448_10467 = G__10502;
continue;
} else {
var component__8841__auto___10503 = cljs.core.first.call(null,seq__10445_10497__$1);
speclj.components.install.call(null,component__8841__auto___10503,description__8840__auto___10461);


var G__10504 = cljs.core.next.call(null,seq__10445_10497__$1);
var G__10505 = null;
var G__10506 = (0);
var G__10507 = (0);
seq__10445_10464 = G__10504;
chunk__10446_10465 = G__10505;
count__10447_10466 = G__10506;
i__10448_10467 = G__10507;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10443_10462);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto___10461);
}


//# sourceMappingURL=symbols_spec.js.map
