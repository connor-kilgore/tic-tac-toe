// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.ai_player_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.ai_player');
goog.require('speclj.core');
var description__7524__auto___13531 = speclj.components.new_description.call(null,"AI Player",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__13453_13532 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13454_13533 = description__7524__auto___13531;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13454_13533);

try{var seq__13455_13534 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"Makes all possible moves on a given board",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__13495_13538 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13496_13539 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13496_13539);

try{var seq__13497_13540 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns empty vec if no plays left",((function (_STAR_parent_description_STAR__orig_val__13495_13538,_STAR_parent_description_STAR__temp_val__13496_13539,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531){
return (function (){
var expected__7651__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var actual__7652__auto__ = tic_tac_toe.ai_player.make_hypothetical_moves.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1)], null),(1));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13495_13538,_STAR_parent_description_STAR__temp_val__13496_13539,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531))
,false),speclj.components.new_characteristic.call(null,"1 board with position played if 1 play left",((function (_STAR_parent_description_STAR__orig_val__13495_13538,_STAR_parent_description_STAR__temp_val__13496_13539,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531){
return (function (){
var expected__7651__auto__ = new cljs.core.PersistentArrayMap(null, 1, [(6),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(2),(1),(1)], null)], null);
var actual__7652__auto__ = tic_tac_toe.ai_player.make_hypothetical_moves.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(0),(1),(1)], null),(2));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13495_13538,_STAR_parent_description_STAR__temp_val__13496_13539,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531))
,false),speclj.components.new_characteristic.call(null,"a series of possible plays if more than 1 play left",((function (_STAR_parent_description_STAR__orig_val__13495_13538,_STAR_parent_description_STAR__temp_val__13496_13539,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531){
return (function (){
var expected__7651__auto__ = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(5),(8)],[new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1)], null)]);
var actual__7652__auto__ = tic_tac_toe.ai_player.make_hypothetical_moves.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),(1));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13495_13538,_STAR_parent_description_STAR__temp_val__13496_13539,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531))
,false)],null)));
var chunk__13498_13541 = null;
var count__13499_13542 = (0);
var i__13500_13543 = (0);
while(true){
if((i__13500_13543 < count__13499_13542)){
var component__7525__auto___13544 = cljs.core._nth.call(null,chunk__13498_13541,i__13500_13543);
speclj.components.install.call(null,component__7525__auto___13544,description__7524__auto____$1);


var G__13545 = seq__13497_13540;
var G__13546 = chunk__13498_13541;
var G__13547 = count__13499_13542;
var G__13548 = (i__13500_13543 + (1));
seq__13497_13540 = G__13545;
chunk__13498_13541 = G__13546;
count__13499_13542 = G__13547;
i__13500_13543 = G__13548;
continue;
} else {
var temp__5753__auto___13549 = cljs.core.seq.call(null,seq__13497_13540);
if(temp__5753__auto___13549){
var seq__13497_13550__$1 = temp__5753__auto___13549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13497_13550__$1)){
var c__5568__auto___13551 = cljs.core.chunk_first.call(null,seq__13497_13550__$1);
var G__13552 = cljs.core.chunk_rest.call(null,seq__13497_13550__$1);
var G__13553 = c__5568__auto___13551;
var G__13554 = cljs.core.count.call(null,c__5568__auto___13551);
var G__13555 = (0);
seq__13497_13540 = G__13552;
chunk__13498_13541 = G__13553;
count__13499_13542 = G__13554;
i__13500_13543 = G__13555;
continue;
} else {
var component__7525__auto___13556 = cljs.core.first.call(null,seq__13497_13550__$1);
speclj.components.install.call(null,component__7525__auto___13556,description__7524__auto____$1);


var G__13557 = cljs.core.next.call(null,seq__13497_13550__$1);
var G__13558 = null;
var G__13559 = (0);
var G__13560 = (0);
seq__13497_13540 = G__13557;
chunk__13498_13541 = G__13558;
count__13499_13542 = G__13559;
i__13500_13543 = G__13560;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13495_13538);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"gets score of end condition",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__13501_13561 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13502_13562 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13502_13562);

try{var seq__13503_13563 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns 0 if a tie",((function (_STAR_parent_description_STAR__orig_val__13501_13561,_STAR_parent_description_STAR__temp_val__13502_13562,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531){
return (function (){
var expected__7651__auto__ = (0);
var actual__7652__auto__ = tic_tac_toe.ai_player.get_end_score.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(1),(1),(1),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13501_13561,_STAR_parent_description_STAR__temp_val__13502_13562,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531))
,false),speclj.components.new_characteristic.call(null,"returns 1 if ai wins at depth 9",((function (_STAR_parent_description_STAR__orig_val__13501_13561,_STAR_parent_description_STAR__temp_val__13502_13562,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531){
return (function (){
var expected__7651__auto__ = (1);
var actual__7652__auto__ = tic_tac_toe.ai_player.get_end_score.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(2),(1),(2),(1),(2),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13501_13561,_STAR_parent_description_STAR__temp_val__13502_13562,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531))
,false),speclj.components.new_characteristic.call(null,"returns -1 if ai loses at depth 9",((function (_STAR_parent_description_STAR__orig_val__13501_13561,_STAR_parent_description_STAR__temp_val__13502_13562,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531){
return (function (){
var expected__7651__auto__ = (-1);
var actual__7652__auto__ = tic_tac_toe.ai_player.get_end_score.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(2),(1),(2),(1),(2),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13501_13561,_STAR_parent_description_STAR__temp_val__13502_13562,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531))
,false)],null)));
var chunk__13504_13564 = null;
var count__13505_13565 = (0);
var i__13506_13566 = (0);
while(true){
if((i__13506_13566 < count__13505_13565)){
var component__7525__auto___13567 = cljs.core._nth.call(null,chunk__13504_13564,i__13506_13566);
speclj.components.install.call(null,component__7525__auto___13567,description__7524__auto____$1);


var G__13568 = seq__13503_13563;
var G__13569 = chunk__13504_13564;
var G__13570 = count__13505_13565;
var G__13571 = (i__13506_13566 + (1));
seq__13503_13563 = G__13568;
chunk__13504_13564 = G__13569;
count__13505_13565 = G__13570;
i__13506_13566 = G__13571;
continue;
} else {
var temp__5753__auto___13572 = cljs.core.seq.call(null,seq__13503_13563);
if(temp__5753__auto___13572){
var seq__13503_13573__$1 = temp__5753__auto___13572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13503_13573__$1)){
var c__5568__auto___13574 = cljs.core.chunk_first.call(null,seq__13503_13573__$1);
var G__13575 = cljs.core.chunk_rest.call(null,seq__13503_13573__$1);
var G__13576 = c__5568__auto___13574;
var G__13577 = cljs.core.count.call(null,c__5568__auto___13574);
var G__13578 = (0);
seq__13503_13563 = G__13575;
chunk__13504_13564 = G__13576;
count__13505_13565 = G__13577;
i__13506_13566 = G__13578;
continue;
} else {
var component__7525__auto___13579 = cljs.core.first.call(null,seq__13503_13573__$1);
speclj.components.install.call(null,component__7525__auto___13579,description__7524__auto____$1);


var G__13580 = cljs.core.next.call(null,seq__13503_13573__$1);
var G__13581 = null;
var G__13582 = (0);
var G__13583 = (0);
seq__13503_13563 = G__13580;
chunk__13504_13564 = G__13581;
count__13505_13565 = G__13582;
i__13506_13566 = G__13583;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13501_13561);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"checks if it's currently the ai's turn or not",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__13507_13584 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13508_13585 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13508_13585);

try{var seq__13509_13586 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false if depth is not even",((function (_STAR_parent_description_STAR__orig_val__13507_13584,_STAR_parent_description_STAR__temp_val__13508_13585,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531){
return (function (){
var value__7639__auto__ = tic_tac_toe.ai_player.is_ai_turn_QMARK_.call(null,(0));
if((!(value__7639__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__13507_13584,_STAR_parent_description_STAR__temp_val__13508_13585,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531))
,false),speclj.components.new_characteristic.call(null,"returns true if depth is even",((function (_STAR_parent_description_STAR__orig_val__13507_13584,_STAR_parent_description_STAR__temp_val__13508_13585,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531){
return (function (){
var value__7645__auto__ = tic_tac_toe.ai_player.is_ai_turn_QMARK_.call(null,(1));
if(value__7645__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7645__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__13507_13584,_STAR_parent_description_STAR__temp_val__13508_13585,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531))
,false)],null)));
var chunk__13510_13587 = null;
var count__13511_13588 = (0);
var i__13512_13589 = (0);
while(true){
if((i__13512_13589 < count__13511_13588)){
var component__7525__auto___13590 = cljs.core._nth.call(null,chunk__13510_13587,i__13512_13589);
speclj.components.install.call(null,component__7525__auto___13590,description__7524__auto____$1);


var G__13591 = seq__13509_13586;
var G__13592 = chunk__13510_13587;
var G__13593 = count__13511_13588;
var G__13594 = (i__13512_13589 + (1));
seq__13509_13586 = G__13591;
chunk__13510_13587 = G__13592;
count__13511_13588 = G__13593;
i__13512_13589 = G__13594;
continue;
} else {
var temp__5753__auto___13595 = cljs.core.seq.call(null,seq__13509_13586);
if(temp__5753__auto___13595){
var seq__13509_13596__$1 = temp__5753__auto___13595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13509_13596__$1)){
var c__5568__auto___13597 = cljs.core.chunk_first.call(null,seq__13509_13596__$1);
var G__13598 = cljs.core.chunk_rest.call(null,seq__13509_13596__$1);
var G__13599 = c__5568__auto___13597;
var G__13600 = cljs.core.count.call(null,c__5568__auto___13597);
var G__13601 = (0);
seq__13509_13586 = G__13598;
chunk__13510_13587 = G__13599;
count__13511_13588 = G__13600;
i__13512_13589 = G__13601;
continue;
} else {
var component__7525__auto___13602 = cljs.core.first.call(null,seq__13509_13596__$1);
speclj.components.install.call(null,component__7525__auto___13602,description__7524__auto____$1);


var G__13603 = cljs.core.next.call(null,seq__13509_13596__$1);
var G__13604 = null;
var G__13605 = (0);
var G__13606 = (0);
seq__13509_13586 = G__13603;
chunk__13510_13587 = G__13604;
count__13511_13588 = G__13605;
i__13512_13589 = G__13606;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13507_13584);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"gives the right symbol depending on the context of\n                 the ai's symbol and the depth",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__13513_13607 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13514_13608 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13514_13608);

try{var seq__13515_13609 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns 1 if ai symbol is 1 on first move",((function (_STAR_parent_description_STAR__orig_val__13513_13607,_STAR_parent_description_STAR__temp_val__13514_13608,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531){
return (function (){
var expected__7651__auto__ = (1);
var actual__7652__auto__ = tic_tac_toe.ai_player.get_current_symbol.call(null,(0),(1));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13513_13607,_STAR_parent_description_STAR__temp_val__13514_13608,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531))
,false),speclj.components.new_characteristic.call(null,"returns 2 if ai symbol is 1 on the second move",((function (_STAR_parent_description_STAR__orig_val__13513_13607,_STAR_parent_description_STAR__temp_val__13514_13608,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531){
return (function (){
var expected__7651__auto__ = (2);
var actual__7652__auto__ = tic_tac_toe.ai_player.get_current_symbol.call(null,(1),(1));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13513_13607,_STAR_parent_description_STAR__temp_val__13514_13608,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531))
,false)],null)));
var chunk__13516_13610 = null;
var count__13517_13611 = (0);
var i__13518_13612 = (0);
while(true){
if((i__13518_13612 < count__13517_13611)){
var component__7525__auto___13613 = cljs.core._nth.call(null,chunk__13516_13610,i__13518_13612);
speclj.components.install.call(null,component__7525__auto___13613,description__7524__auto____$1);


var G__13614 = seq__13515_13609;
var G__13615 = chunk__13516_13610;
var G__13616 = count__13517_13611;
var G__13617 = (i__13518_13612 + (1));
seq__13515_13609 = G__13614;
chunk__13516_13610 = G__13615;
count__13517_13611 = G__13616;
i__13518_13612 = G__13617;
continue;
} else {
var temp__5753__auto___13618 = cljs.core.seq.call(null,seq__13515_13609);
if(temp__5753__auto___13618){
var seq__13515_13619__$1 = temp__5753__auto___13618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13515_13619__$1)){
var c__5568__auto___13620 = cljs.core.chunk_first.call(null,seq__13515_13619__$1);
var G__13621 = cljs.core.chunk_rest.call(null,seq__13515_13619__$1);
var G__13622 = c__5568__auto___13620;
var G__13623 = cljs.core.count.call(null,c__5568__auto___13620);
var G__13624 = (0);
seq__13515_13609 = G__13621;
chunk__13516_13610 = G__13622;
count__13517_13611 = G__13623;
i__13518_13612 = G__13624;
continue;
} else {
var component__7525__auto___13625 = cljs.core.first.call(null,seq__13515_13619__$1);
speclj.components.install.call(null,component__7525__auto___13625,description__7524__auto____$1);


var G__13626 = cljs.core.next.call(null,seq__13515_13619__$1);
var G__13627 = null;
var G__13628 = (0);
var G__13629 = (0);
seq__13515_13609 = G__13626;
chunk__13516_13610 = G__13627;
count__13517_13611 = G__13628;
i__13518_13612 = G__13629;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13513_13607);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"makes the best possible move based on an algorithm",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__13519_13630 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13520_13631 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13520_13631);

try{var seq__13521_13632 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"moves to any space when absolute depth is below 5",((function (_STAR_parent_description_STAR__orig_val__13519_13630,_STAR_parent_description_STAR__temp_val__13520_13631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531){
return (function (){
var expected__7651__auto___13636 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__7652__auto___13637 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1));
if(cljs.core._EQ_.call(null,expected__7651__auto___13636,actual__7652__auto___13637)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___13636 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___13636)),speclj.platform.endl,"     got: ",(((actual__7652__auto___13637 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___13637))," (using =)"].join('')));
}

var expected__7651__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(2),(0),(0),(0),(0)], null);
var actual__7652__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13519_13630,_STAR_parent_description_STAR__temp_val__13520_13631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531))
,false),speclj.components.new_characteristic.call(null,"actively blocks player movement until tie or ai wins",((function (_STAR_parent_description_STAR__orig_val__13519_13630,_STAR_parent_description_STAR__temp_val__13520_13631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531){
return (function (){
var expected__7651__auto___13638 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(2),(2),(1),(1)], null);
var actual__7652__auto___13639 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(2),(1),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__7651__auto___13638,actual__7652__auto___13639)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___13638 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___13638)),speclj.platform.endl,"     got: ",(((actual__7652__auto___13639 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___13639))," (using =)"].join('')));
}

var expected__7651__auto___13640 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(0),(0)], null);
var actual__7652__auto___13641 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1),(0),(2),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__7651__auto___13640,actual__7652__auto___13641)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___13640 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___13640)),speclj.platform.endl,"     got: ",(((actual__7652__auto___13641 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___13641))," (using =)"].join('')));
}

var expected__7651__auto___13642 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(2),(1)], null);
var actual__7652__auto___13643 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(0),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__7651__auto___13642,actual__7652__auto___13643)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___13642 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___13642)),speclj.platform.endl,"     got: ",(((actual__7652__auto___13643 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___13643))," (using =)"].join('')));
}

var expected__7651__auto___13644 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(0),(0),(1),(0)], null);
var actual__7652__auto___13645 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(1),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__7651__auto___13644,actual__7652__auto___13645)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___13644 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___13644)),speclj.platform.endl,"     got: ",(((actual__7652__auto___13645 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___13645))," (using =)"].join('')));
}

var expected__7651__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(1),(0),(1),(2)], null);
var actual__7652__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(1),(0),(1),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13519_13630,_STAR_parent_description_STAR__temp_val__13520_13631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531))
,false),speclj.components.new_characteristic.call(null,"works for 4x4 too",((function (_STAR_parent_description_STAR__orig_val__13519_13630,_STAR_parent_description_STAR__temp_val__13520_13631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531){
return (function (){
var expected__7651__auto__ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0),(0),(0),(1),(0),(0),(0),(1),(2),(0),(0),(1),(0),(2)], null);
var actual__7652__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(1),(0),(0),(0),(1),(2),(0),(0),(1),(0),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13519_13630,_STAR_parent_description_STAR__temp_val__13520_13631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531))
,false),speclj.components.new_characteristic.call(null,"and 3x3x3",((function (_STAR_parent_description_STAR__orig_val__13519_13630,_STAR_parent_description_STAR__temp_val__13520_13631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531){
return (function (){
var expected__7651__auto__ = new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(2),(0),(0),(0),(0),(0),(0)], null);
var actual__7652__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null),(2));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13519_13630,_STAR_parent_description_STAR__temp_val__13520_13631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531))
,false)],null)));
var chunk__13522_13633 = null;
var count__13523_13634 = (0);
var i__13524_13635 = (0);
while(true){
if((i__13524_13635 < count__13523_13634)){
var component__7525__auto___13646 = cljs.core._nth.call(null,chunk__13522_13633,i__13524_13635);
speclj.components.install.call(null,component__7525__auto___13646,description__7524__auto____$1);


var G__13647 = seq__13521_13632;
var G__13648 = chunk__13522_13633;
var G__13649 = count__13523_13634;
var G__13650 = (i__13524_13635 + (1));
seq__13521_13632 = G__13647;
chunk__13522_13633 = G__13648;
count__13523_13634 = G__13649;
i__13524_13635 = G__13650;
continue;
} else {
var temp__5753__auto___13651 = cljs.core.seq.call(null,seq__13521_13632);
if(temp__5753__auto___13651){
var seq__13521_13652__$1 = temp__5753__auto___13651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13521_13652__$1)){
var c__5568__auto___13653 = cljs.core.chunk_first.call(null,seq__13521_13652__$1);
var G__13654 = cljs.core.chunk_rest.call(null,seq__13521_13652__$1);
var G__13655 = c__5568__auto___13653;
var G__13656 = cljs.core.count.call(null,c__5568__auto___13653);
var G__13657 = (0);
seq__13521_13632 = G__13654;
chunk__13522_13633 = G__13655;
count__13523_13634 = G__13656;
i__13524_13635 = G__13657;
continue;
} else {
var component__7525__auto___13658 = cljs.core.first.call(null,seq__13521_13652__$1);
speclj.components.install.call(null,component__7525__auto___13658,description__7524__auto____$1);


var G__13659 = cljs.core.next.call(null,seq__13521_13652__$1);
var G__13660 = null;
var G__13661 = (0);
var G__13662 = (0);
seq__13521_13632 = G__13659;
chunk__13522_13633 = G__13660;
count__13523_13634 = G__13661;
i__13524_13635 = G__13662;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13519_13630);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"gives the best best score for the algorithm",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__13525_13663 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13526_13664 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13526_13664);

try{var seq__13527_13665 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"the biggest score if it's the ai's turn",((function (_STAR_parent_description_STAR__orig_val__13525_13663,_STAR_parent_description_STAR__temp_val__13526_13664,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531){
return (function (){
var expected__7651__auto___13669 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null);
var actual__7652__auto___13670 = tic_tac_toe.ai_player.get_best_score.call(null,(0),new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null));
if(cljs.core._EQ_.call(null,expected__7651__auto___13669,actual__7652__auto___13670)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___13669 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___13669)),speclj.platform.endl,"     got: ",(((actual__7652__auto___13670 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___13670))," (using =)"].join('')));
}

var expected__7651__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null);
var actual__7652__auto__ = tic_tac_toe.ai_player.get_best_score.call(null,(0),new cljs.core.PersistentArrayMap(null, 2, [(3),(4),(1),(2)], null));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13525_13663,_STAR_parent_description_STAR__temp_val__13526_13664,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531))
,false),speclj.components.new_characteristic.call(null,"the smallest score if not the ai's turn",((function (_STAR_parent_description_STAR__orig_val__13525_13663,_STAR_parent_description_STAR__temp_val__13526_13664,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531){
return (function (){
var expected__7651__auto___13671 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null);
var actual__7652__auto___13672 = tic_tac_toe.ai_player.get_best_score.call(null,(1),new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null));
if(cljs.core._EQ_.call(null,expected__7651__auto___13671,actual__7652__auto___13672)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___13671 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___13671)),speclj.platform.endl,"     got: ",(((actual__7652__auto___13672 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___13672))," (using =)"].join('')));
}

var expected__7651__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null);
var actual__7652__auto__ = tic_tac_toe.ai_player.get_best_score.call(null,(1),new cljs.core.PersistentArrayMap(null, 2, [(3),(4),(1),(2)], null));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13525_13663,_STAR_parent_description_STAR__temp_val__13526_13664,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13453_13532,_STAR_parent_description_STAR__temp_val__13454_13533,description__7524__auto___13531))
,false)],null)));
var chunk__13528_13666 = null;
var count__13529_13667 = (0);
var i__13530_13668 = (0);
while(true){
if((i__13530_13668 < count__13529_13667)){
var component__7525__auto___13673 = cljs.core._nth.call(null,chunk__13528_13666,i__13530_13668);
speclj.components.install.call(null,component__7525__auto___13673,description__7524__auto____$1);


var G__13674 = seq__13527_13665;
var G__13675 = chunk__13528_13666;
var G__13676 = count__13529_13667;
var G__13677 = (i__13530_13668 + (1));
seq__13527_13665 = G__13674;
chunk__13528_13666 = G__13675;
count__13529_13667 = G__13676;
i__13530_13668 = G__13677;
continue;
} else {
var temp__5753__auto___13678 = cljs.core.seq.call(null,seq__13527_13665);
if(temp__5753__auto___13678){
var seq__13527_13679__$1 = temp__5753__auto___13678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13527_13679__$1)){
var c__5568__auto___13680 = cljs.core.chunk_first.call(null,seq__13527_13679__$1);
var G__13681 = cljs.core.chunk_rest.call(null,seq__13527_13679__$1);
var G__13682 = c__5568__auto___13680;
var G__13683 = cljs.core.count.call(null,c__5568__auto___13680);
var G__13684 = (0);
seq__13527_13665 = G__13681;
chunk__13528_13666 = G__13682;
count__13529_13667 = G__13683;
i__13530_13668 = G__13684;
continue;
} else {
var component__7525__auto___13685 = cljs.core.first.call(null,seq__13527_13679__$1);
speclj.components.install.call(null,component__7525__auto___13685,description__7524__auto____$1);


var G__13686 = cljs.core.next.call(null,seq__13527_13679__$1);
var G__13687 = null;
var G__13688 = (0);
var G__13689 = (0);
seq__13527_13665 = G__13686;
chunk__13528_13666 = G__13687;
count__13529_13667 = G__13688;
i__13530_13668 = G__13689;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13525_13663);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})()],null)));
var chunk__13456_13535 = null;
var count__13457_13536 = (0);
var i__13458_13537 = (0);
while(true){
if((i__13458_13537 < count__13457_13536)){
var component__7525__auto___13690 = cljs.core._nth.call(null,chunk__13456_13535,i__13458_13537);
speclj.components.install.call(null,component__7525__auto___13690,description__7524__auto___13531);


var G__13691 = seq__13455_13534;
var G__13692 = chunk__13456_13535;
var G__13693 = count__13457_13536;
var G__13694 = (i__13458_13537 + (1));
seq__13455_13534 = G__13691;
chunk__13456_13535 = G__13692;
count__13457_13536 = G__13693;
i__13458_13537 = G__13694;
continue;
} else {
var temp__5753__auto___13695 = cljs.core.seq.call(null,seq__13455_13534);
if(temp__5753__auto___13695){
var seq__13455_13696__$1 = temp__5753__auto___13695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13455_13696__$1)){
var c__5568__auto___13697 = cljs.core.chunk_first.call(null,seq__13455_13696__$1);
var G__13698 = cljs.core.chunk_rest.call(null,seq__13455_13696__$1);
var G__13699 = c__5568__auto___13697;
var G__13700 = cljs.core.count.call(null,c__5568__auto___13697);
var G__13701 = (0);
seq__13455_13534 = G__13698;
chunk__13456_13535 = G__13699;
count__13457_13536 = G__13700;
i__13458_13537 = G__13701;
continue;
} else {
var component__7525__auto___13702 = cljs.core.first.call(null,seq__13455_13696__$1);
speclj.components.install.call(null,component__7525__auto___13702,description__7524__auto___13531);


var G__13703 = cljs.core.next.call(null,seq__13455_13696__$1);
var G__13704 = null;
var G__13705 = (0);
var G__13706 = (0);
seq__13455_13534 = G__13703;
chunk__13456_13535 = G__13704;
count__13457_13536 = G__13705;
i__13458_13537 = G__13706;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13453_13532);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto___13531);
}


//# sourceMappingURL=ai_player_spec.js.map
