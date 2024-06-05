// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.ai_player_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.ai_player');
goog.require('speclj.core');
var description__8840__auto___9546 = speclj.components.new_description.call(null,"AI Player",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9468_9547 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9469_9548 = description__8840__auto___9546;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9469_9548);

try{var seq__9470_9549 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__8840__auto____$1 = speclj.components.new_description.call(null,"Makes all possible moves on a given board",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9510_9553 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9511_9554 = description__8840__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9511_9554);

try{var seq__9512_9555 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns empty vec if no plays left",((function (_STAR_parent_description_STAR__orig_val__9510_9553,_STAR_parent_description_STAR__temp_val__9511_9554,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546){
return (function (){
var expected__8973__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var actual__8974__auto__ = tic_tac_toe.ai_player.make_hypothetical_moves.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1)], null),(1));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9510_9553,_STAR_parent_description_STAR__temp_val__9511_9554,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546))
,false),speclj.components.new_characteristic.call(null,"1 board with position played if 1 play left",((function (_STAR_parent_description_STAR__orig_val__9510_9553,_STAR_parent_description_STAR__temp_val__9511_9554,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546){
return (function (){
var expected__8973__auto__ = new cljs.core.PersistentArrayMap(null, 1, [(6),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(2),(1),(1)], null)], null);
var actual__8974__auto__ = tic_tac_toe.ai_player.make_hypothetical_moves.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(0),(1),(1)], null),(2));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9510_9553,_STAR_parent_description_STAR__temp_val__9511_9554,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546))
,false),speclj.components.new_characteristic.call(null,"a series of possible plays if more than 1 play left",((function (_STAR_parent_description_STAR__orig_val__9510_9553,_STAR_parent_description_STAR__temp_val__9511_9554,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546){
return (function (){
var expected__8973__auto__ = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(5),(8)],[new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1)], null)]);
var actual__8974__auto__ = tic_tac_toe.ai_player.make_hypothetical_moves.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),(1));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9510_9553,_STAR_parent_description_STAR__temp_val__9511_9554,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546))
,false)],null)));
var chunk__9513_9556 = null;
var count__9514_9557 = (0);
var i__9515_9558 = (0);
while(true){
if((i__9515_9558 < count__9514_9557)){
var component__8841__auto___9559 = cljs.core._nth.call(null,chunk__9513_9556,i__9515_9558);
speclj.components.install.call(null,component__8841__auto___9559,description__8840__auto____$1);


var G__9560 = seq__9512_9555;
var G__9561 = chunk__9513_9556;
var G__9562 = count__9514_9557;
var G__9563 = (i__9515_9558 + (1));
seq__9512_9555 = G__9560;
chunk__9513_9556 = G__9561;
count__9514_9557 = G__9562;
i__9515_9558 = G__9563;
continue;
} else {
var temp__5753__auto___9564 = cljs.core.seq.call(null,seq__9512_9555);
if(temp__5753__auto___9564){
var seq__9512_9565__$1 = temp__5753__auto___9564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9512_9565__$1)){
var c__5568__auto___9566 = cljs.core.chunk_first.call(null,seq__9512_9565__$1);
var G__9567 = cljs.core.chunk_rest.call(null,seq__9512_9565__$1);
var G__9568 = c__5568__auto___9566;
var G__9569 = cljs.core.count.call(null,c__5568__auto___9566);
var G__9570 = (0);
seq__9512_9555 = G__9567;
chunk__9513_9556 = G__9568;
count__9514_9557 = G__9569;
i__9515_9558 = G__9570;
continue;
} else {
var component__8841__auto___9571 = cljs.core.first.call(null,seq__9512_9565__$1);
speclj.components.install.call(null,component__8841__auto___9571,description__8840__auto____$1);


var G__9572 = cljs.core.next.call(null,seq__9512_9565__$1);
var G__9573 = null;
var G__9574 = (0);
var G__9575 = (0);
seq__9512_9555 = G__9572;
chunk__9513_9556 = G__9573;
count__9514_9557 = G__9574;
i__9515_9558 = G__9575;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9510_9553);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto____$1);
}

return description__8840__auto____$1;
})(),(function (){var description__8840__auto____$1 = speclj.components.new_description.call(null,"gets score of end condition",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9516_9576 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9517_9577 = description__8840__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9517_9577);

try{var seq__9518_9578 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns 0 if a tie",((function (_STAR_parent_description_STAR__orig_val__9516_9576,_STAR_parent_description_STAR__temp_val__9517_9577,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546){
return (function (){
var expected__8973__auto__ = (0);
var actual__8974__auto__ = tic_tac_toe.ai_player.get_end_score.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(1),(1),(1),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9516_9576,_STAR_parent_description_STAR__temp_val__9517_9577,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546))
,false),speclj.components.new_characteristic.call(null,"returns 1 if ai wins at depth 9",((function (_STAR_parent_description_STAR__orig_val__9516_9576,_STAR_parent_description_STAR__temp_val__9517_9577,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546){
return (function (){
var expected__8973__auto__ = (1);
var actual__8974__auto__ = tic_tac_toe.ai_player.get_end_score.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(2),(1),(2),(1),(2),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9516_9576,_STAR_parent_description_STAR__temp_val__9517_9577,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546))
,false),speclj.components.new_characteristic.call(null,"returns -1 if ai loses at depth 9",((function (_STAR_parent_description_STAR__orig_val__9516_9576,_STAR_parent_description_STAR__temp_val__9517_9577,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546){
return (function (){
var expected__8973__auto__ = (-1);
var actual__8974__auto__ = tic_tac_toe.ai_player.get_end_score.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(2),(1),(2),(1),(2),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9516_9576,_STAR_parent_description_STAR__temp_val__9517_9577,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546))
,false)],null)));
var chunk__9519_9579 = null;
var count__9520_9580 = (0);
var i__9521_9581 = (0);
while(true){
if((i__9521_9581 < count__9520_9580)){
var component__8841__auto___9582 = cljs.core._nth.call(null,chunk__9519_9579,i__9521_9581);
speclj.components.install.call(null,component__8841__auto___9582,description__8840__auto____$1);


var G__9583 = seq__9518_9578;
var G__9584 = chunk__9519_9579;
var G__9585 = count__9520_9580;
var G__9586 = (i__9521_9581 + (1));
seq__9518_9578 = G__9583;
chunk__9519_9579 = G__9584;
count__9520_9580 = G__9585;
i__9521_9581 = G__9586;
continue;
} else {
var temp__5753__auto___9587 = cljs.core.seq.call(null,seq__9518_9578);
if(temp__5753__auto___9587){
var seq__9518_9588__$1 = temp__5753__auto___9587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9518_9588__$1)){
var c__5568__auto___9589 = cljs.core.chunk_first.call(null,seq__9518_9588__$1);
var G__9590 = cljs.core.chunk_rest.call(null,seq__9518_9588__$1);
var G__9591 = c__5568__auto___9589;
var G__9592 = cljs.core.count.call(null,c__5568__auto___9589);
var G__9593 = (0);
seq__9518_9578 = G__9590;
chunk__9519_9579 = G__9591;
count__9520_9580 = G__9592;
i__9521_9581 = G__9593;
continue;
} else {
var component__8841__auto___9594 = cljs.core.first.call(null,seq__9518_9588__$1);
speclj.components.install.call(null,component__8841__auto___9594,description__8840__auto____$1);


var G__9595 = cljs.core.next.call(null,seq__9518_9588__$1);
var G__9596 = null;
var G__9597 = (0);
var G__9598 = (0);
seq__9518_9578 = G__9595;
chunk__9519_9579 = G__9596;
count__9520_9580 = G__9597;
i__9521_9581 = G__9598;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9516_9576);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto____$1);
}

return description__8840__auto____$1;
})(),(function (){var description__8840__auto____$1 = speclj.components.new_description.call(null,"checks if it's currently the ai's turn or not",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9522_9599 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9523_9600 = description__8840__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9523_9600);

try{var seq__9524_9601 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false if depth is not even",((function (_STAR_parent_description_STAR__orig_val__9522_9599,_STAR_parent_description_STAR__temp_val__9523_9600,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546){
return (function (){
var value__8961__auto__ = tic_tac_toe.ai_player.is_ai_turn_QMARK_.call(null,(0));
if((!(value__8961__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__8961__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8961__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__9522_9599,_STAR_parent_description_STAR__temp_val__9523_9600,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546))
,false),speclj.components.new_characteristic.call(null,"returns true if depth is even",((function (_STAR_parent_description_STAR__orig_val__9522_9599,_STAR_parent_description_STAR__temp_val__9523_9600,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546){
return (function (){
var value__8967__auto__ = tic_tac_toe.ai_player.is_ai_turn_QMARK_.call(null,(1));
if(value__8967__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8967__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8967__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__9522_9599,_STAR_parent_description_STAR__temp_val__9523_9600,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546))
,false)],null)));
var chunk__9525_9602 = null;
var count__9526_9603 = (0);
var i__9527_9604 = (0);
while(true){
if((i__9527_9604 < count__9526_9603)){
var component__8841__auto___9605 = cljs.core._nth.call(null,chunk__9525_9602,i__9527_9604);
speclj.components.install.call(null,component__8841__auto___9605,description__8840__auto____$1);


var G__9606 = seq__9524_9601;
var G__9607 = chunk__9525_9602;
var G__9608 = count__9526_9603;
var G__9609 = (i__9527_9604 + (1));
seq__9524_9601 = G__9606;
chunk__9525_9602 = G__9607;
count__9526_9603 = G__9608;
i__9527_9604 = G__9609;
continue;
} else {
var temp__5753__auto___9610 = cljs.core.seq.call(null,seq__9524_9601);
if(temp__5753__auto___9610){
var seq__9524_9611__$1 = temp__5753__auto___9610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9524_9611__$1)){
var c__5568__auto___9612 = cljs.core.chunk_first.call(null,seq__9524_9611__$1);
var G__9613 = cljs.core.chunk_rest.call(null,seq__9524_9611__$1);
var G__9614 = c__5568__auto___9612;
var G__9615 = cljs.core.count.call(null,c__5568__auto___9612);
var G__9616 = (0);
seq__9524_9601 = G__9613;
chunk__9525_9602 = G__9614;
count__9526_9603 = G__9615;
i__9527_9604 = G__9616;
continue;
} else {
var component__8841__auto___9617 = cljs.core.first.call(null,seq__9524_9611__$1);
speclj.components.install.call(null,component__8841__auto___9617,description__8840__auto____$1);


var G__9618 = cljs.core.next.call(null,seq__9524_9611__$1);
var G__9619 = null;
var G__9620 = (0);
var G__9621 = (0);
seq__9524_9601 = G__9618;
chunk__9525_9602 = G__9619;
count__9526_9603 = G__9620;
i__9527_9604 = G__9621;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9522_9599);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto____$1);
}

return description__8840__auto____$1;
})(),(function (){var description__8840__auto____$1 = speclj.components.new_description.call(null,"gives the right symbol depending on the context of\n                 the ai's symbol and the depth",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9528_9622 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9529_9623 = description__8840__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9529_9623);

try{var seq__9530_9624 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns 1 if ai symbol is 1 on first move",((function (_STAR_parent_description_STAR__orig_val__9528_9622,_STAR_parent_description_STAR__temp_val__9529_9623,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546){
return (function (){
var expected__8973__auto__ = (1);
var actual__8974__auto__ = tic_tac_toe.ai_player.get_current_symbol.call(null,(0),(1));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9528_9622,_STAR_parent_description_STAR__temp_val__9529_9623,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546))
,false),speclj.components.new_characteristic.call(null,"returns 2 if ai symbol is 1 on the second move",((function (_STAR_parent_description_STAR__orig_val__9528_9622,_STAR_parent_description_STAR__temp_val__9529_9623,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546){
return (function (){
var expected__8973__auto__ = (2);
var actual__8974__auto__ = tic_tac_toe.ai_player.get_current_symbol.call(null,(1),(1));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9528_9622,_STAR_parent_description_STAR__temp_val__9529_9623,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546))
,false)],null)));
var chunk__9531_9625 = null;
var count__9532_9626 = (0);
var i__9533_9627 = (0);
while(true){
if((i__9533_9627 < count__9532_9626)){
var component__8841__auto___9628 = cljs.core._nth.call(null,chunk__9531_9625,i__9533_9627);
speclj.components.install.call(null,component__8841__auto___9628,description__8840__auto____$1);


var G__9629 = seq__9530_9624;
var G__9630 = chunk__9531_9625;
var G__9631 = count__9532_9626;
var G__9632 = (i__9533_9627 + (1));
seq__9530_9624 = G__9629;
chunk__9531_9625 = G__9630;
count__9532_9626 = G__9631;
i__9533_9627 = G__9632;
continue;
} else {
var temp__5753__auto___9633 = cljs.core.seq.call(null,seq__9530_9624);
if(temp__5753__auto___9633){
var seq__9530_9634__$1 = temp__5753__auto___9633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9530_9634__$1)){
var c__5568__auto___9635 = cljs.core.chunk_first.call(null,seq__9530_9634__$1);
var G__9636 = cljs.core.chunk_rest.call(null,seq__9530_9634__$1);
var G__9637 = c__5568__auto___9635;
var G__9638 = cljs.core.count.call(null,c__5568__auto___9635);
var G__9639 = (0);
seq__9530_9624 = G__9636;
chunk__9531_9625 = G__9637;
count__9532_9626 = G__9638;
i__9533_9627 = G__9639;
continue;
} else {
var component__8841__auto___9640 = cljs.core.first.call(null,seq__9530_9634__$1);
speclj.components.install.call(null,component__8841__auto___9640,description__8840__auto____$1);


var G__9641 = cljs.core.next.call(null,seq__9530_9634__$1);
var G__9642 = null;
var G__9643 = (0);
var G__9644 = (0);
seq__9530_9624 = G__9641;
chunk__9531_9625 = G__9642;
count__9532_9626 = G__9643;
i__9533_9627 = G__9644;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9528_9622);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto____$1);
}

return description__8840__auto____$1;
})(),(function (){var description__8840__auto____$1 = speclj.components.new_description.call(null,"makes the best possible move based on an algorithm",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9534_9645 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9535_9646 = description__8840__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9535_9646);

try{var seq__9536_9647 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"moves to any space when absolute depth is below 5",((function (_STAR_parent_description_STAR__orig_val__9534_9645,_STAR_parent_description_STAR__temp_val__9535_9646,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546){
return (function (){
var expected__8973__auto___9651 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__8974__auto___9652 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1));
if(cljs.core._EQ_.call(null,expected__8973__auto___9651,actual__8974__auto___9652)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9651 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9651)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9652 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9652))," (using =)"].join('')));
}

var expected__8973__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(2),(0),(0),(0),(0)], null);
var actual__8974__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9534_9645,_STAR_parent_description_STAR__temp_val__9535_9646,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546))
,false),speclj.components.new_characteristic.call(null,"actively blocks player movement until tie or ai wins",((function (_STAR_parent_description_STAR__orig_val__9534_9645,_STAR_parent_description_STAR__temp_val__9535_9646,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546){
return (function (){
var expected__8973__auto___9653 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(2),(2),(1),(1)], null);
var actual__8974__auto___9654 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(2),(1),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__8973__auto___9653,actual__8974__auto___9654)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9653 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9653)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9654 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9654))," (using =)"].join('')));
}

var expected__8973__auto___9655 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(0),(0)], null);
var actual__8974__auto___9656 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1),(0),(2),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__8973__auto___9655,actual__8974__auto___9656)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9655 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9655)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9656 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9656))," (using =)"].join('')));
}

var expected__8973__auto___9657 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(2),(1)], null);
var actual__8974__auto___9658 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(0),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__8973__auto___9657,actual__8974__auto___9658)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9657 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9657)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9658 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9658))," (using =)"].join('')));
}

var expected__8973__auto___9659 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(0),(0),(1),(0)], null);
var actual__8974__auto___9660 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(1),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__8973__auto___9659,actual__8974__auto___9660)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9659 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9659)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9660 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9660))," (using =)"].join('')));
}

var expected__8973__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(1),(0),(1),(2)], null);
var actual__8974__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(1),(0),(1),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9534_9645,_STAR_parent_description_STAR__temp_val__9535_9646,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546))
,false),speclj.components.new_characteristic.call(null,"works for 4x4 too",((function (_STAR_parent_description_STAR__orig_val__9534_9645,_STAR_parent_description_STAR__temp_val__9535_9646,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546){
return (function (){
var expected__8973__auto__ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0),(0),(0),(1),(0),(0),(0),(1),(2),(0),(0),(1),(0),(2)], null);
var actual__8974__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(1),(0),(0),(0),(1),(2),(0),(0),(1),(0),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9534_9645,_STAR_parent_description_STAR__temp_val__9535_9646,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546))
,false),speclj.components.new_characteristic.call(null,"and 3x3x3",((function (_STAR_parent_description_STAR__orig_val__9534_9645,_STAR_parent_description_STAR__temp_val__9535_9646,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546){
return (function (){
var expected__8973__auto__ = new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(2),(0),(0),(0),(0),(0),(0)], null);
var actual__8974__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null),(2));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9534_9645,_STAR_parent_description_STAR__temp_val__9535_9646,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546))
,false)],null)));
var chunk__9537_9648 = null;
var count__9538_9649 = (0);
var i__9539_9650 = (0);
while(true){
if((i__9539_9650 < count__9538_9649)){
var component__8841__auto___9661 = cljs.core._nth.call(null,chunk__9537_9648,i__9539_9650);
speclj.components.install.call(null,component__8841__auto___9661,description__8840__auto____$1);


var G__9662 = seq__9536_9647;
var G__9663 = chunk__9537_9648;
var G__9664 = count__9538_9649;
var G__9665 = (i__9539_9650 + (1));
seq__9536_9647 = G__9662;
chunk__9537_9648 = G__9663;
count__9538_9649 = G__9664;
i__9539_9650 = G__9665;
continue;
} else {
var temp__5753__auto___9666 = cljs.core.seq.call(null,seq__9536_9647);
if(temp__5753__auto___9666){
var seq__9536_9667__$1 = temp__5753__auto___9666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9536_9667__$1)){
var c__5568__auto___9668 = cljs.core.chunk_first.call(null,seq__9536_9667__$1);
var G__9669 = cljs.core.chunk_rest.call(null,seq__9536_9667__$1);
var G__9670 = c__5568__auto___9668;
var G__9671 = cljs.core.count.call(null,c__5568__auto___9668);
var G__9672 = (0);
seq__9536_9647 = G__9669;
chunk__9537_9648 = G__9670;
count__9538_9649 = G__9671;
i__9539_9650 = G__9672;
continue;
} else {
var component__8841__auto___9673 = cljs.core.first.call(null,seq__9536_9667__$1);
speclj.components.install.call(null,component__8841__auto___9673,description__8840__auto____$1);


var G__9674 = cljs.core.next.call(null,seq__9536_9667__$1);
var G__9675 = null;
var G__9676 = (0);
var G__9677 = (0);
seq__9536_9647 = G__9674;
chunk__9537_9648 = G__9675;
count__9538_9649 = G__9676;
i__9539_9650 = G__9677;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9534_9645);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto____$1);
}

return description__8840__auto____$1;
})(),(function (){var description__8840__auto____$1 = speclj.components.new_description.call(null,"gives the best best score for the algorithm",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9540_9678 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9541_9679 = description__8840__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9541_9679);

try{var seq__9542_9680 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"the biggest score if it's the ai's turn",((function (_STAR_parent_description_STAR__orig_val__9540_9678,_STAR_parent_description_STAR__temp_val__9541_9679,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546){
return (function (){
var expected__8973__auto___9684 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null);
var actual__8974__auto___9685 = tic_tac_toe.ai_player.get_best_score.call(null,(0),new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto___9684,actual__8974__auto___9685)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9684 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9684)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9685 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9685))," (using =)"].join('')));
}

var expected__8973__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null);
var actual__8974__auto__ = tic_tac_toe.ai_player.get_best_score.call(null,(0),new cljs.core.PersistentArrayMap(null, 2, [(3),(4),(1),(2)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9540_9678,_STAR_parent_description_STAR__temp_val__9541_9679,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546))
,false),speclj.components.new_characteristic.call(null,"the smallest score if not the ai's turn",((function (_STAR_parent_description_STAR__orig_val__9540_9678,_STAR_parent_description_STAR__temp_val__9541_9679,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546){
return (function (){
var expected__8973__auto___9686 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null);
var actual__8974__auto___9687 = tic_tac_toe.ai_player.get_best_score.call(null,(1),new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto___9686,actual__8974__auto___9687)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9686 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9686)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9687 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9687))," (using =)"].join('')));
}

var expected__8973__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null);
var actual__8974__auto__ = tic_tac_toe.ai_player.get_best_score.call(null,(1),new cljs.core.PersistentArrayMap(null, 2, [(3),(4),(1),(2)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9540_9678,_STAR_parent_description_STAR__temp_val__9541_9679,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9468_9547,_STAR_parent_description_STAR__temp_val__9469_9548,description__8840__auto___9546))
,false)],null)));
var chunk__9543_9681 = null;
var count__9544_9682 = (0);
var i__9545_9683 = (0);
while(true){
if((i__9545_9683 < count__9544_9682)){
var component__8841__auto___9688 = cljs.core._nth.call(null,chunk__9543_9681,i__9545_9683);
speclj.components.install.call(null,component__8841__auto___9688,description__8840__auto____$1);


var G__9689 = seq__9542_9680;
var G__9690 = chunk__9543_9681;
var G__9691 = count__9544_9682;
var G__9692 = (i__9545_9683 + (1));
seq__9542_9680 = G__9689;
chunk__9543_9681 = G__9690;
count__9544_9682 = G__9691;
i__9545_9683 = G__9692;
continue;
} else {
var temp__5753__auto___9693 = cljs.core.seq.call(null,seq__9542_9680);
if(temp__5753__auto___9693){
var seq__9542_9694__$1 = temp__5753__auto___9693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9542_9694__$1)){
var c__5568__auto___9695 = cljs.core.chunk_first.call(null,seq__9542_9694__$1);
var G__9696 = cljs.core.chunk_rest.call(null,seq__9542_9694__$1);
var G__9697 = c__5568__auto___9695;
var G__9698 = cljs.core.count.call(null,c__5568__auto___9695);
var G__9699 = (0);
seq__9542_9680 = G__9696;
chunk__9543_9681 = G__9697;
count__9544_9682 = G__9698;
i__9545_9683 = G__9699;
continue;
} else {
var component__8841__auto___9700 = cljs.core.first.call(null,seq__9542_9694__$1);
speclj.components.install.call(null,component__8841__auto___9700,description__8840__auto____$1);


var G__9701 = cljs.core.next.call(null,seq__9542_9694__$1);
var G__9702 = null;
var G__9703 = (0);
var G__9704 = (0);
seq__9542_9680 = G__9701;
chunk__9543_9681 = G__9702;
count__9544_9682 = G__9703;
i__9545_9683 = G__9704;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9540_9678);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto____$1);
}

return description__8840__auto____$1;
})()],null)));
var chunk__9471_9550 = null;
var count__9472_9551 = (0);
var i__9473_9552 = (0);
while(true){
if((i__9473_9552 < count__9472_9551)){
var component__8841__auto___9705 = cljs.core._nth.call(null,chunk__9471_9550,i__9473_9552);
speclj.components.install.call(null,component__8841__auto___9705,description__8840__auto___9546);


var G__9706 = seq__9470_9549;
var G__9707 = chunk__9471_9550;
var G__9708 = count__9472_9551;
var G__9709 = (i__9473_9552 + (1));
seq__9470_9549 = G__9706;
chunk__9471_9550 = G__9707;
count__9472_9551 = G__9708;
i__9473_9552 = G__9709;
continue;
} else {
var temp__5753__auto___9710 = cljs.core.seq.call(null,seq__9470_9549);
if(temp__5753__auto___9710){
var seq__9470_9711__$1 = temp__5753__auto___9710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9470_9711__$1)){
var c__5568__auto___9712 = cljs.core.chunk_first.call(null,seq__9470_9711__$1);
var G__9713 = cljs.core.chunk_rest.call(null,seq__9470_9711__$1);
var G__9714 = c__5568__auto___9712;
var G__9715 = cljs.core.count.call(null,c__5568__auto___9712);
var G__9716 = (0);
seq__9470_9549 = G__9713;
chunk__9471_9550 = G__9714;
count__9472_9551 = G__9715;
i__9473_9552 = G__9716;
continue;
} else {
var component__8841__auto___9717 = cljs.core.first.call(null,seq__9470_9711__$1);
speclj.components.install.call(null,component__8841__auto___9717,description__8840__auto___9546);


var G__9718 = cljs.core.next.call(null,seq__9470_9711__$1);
var G__9719 = null;
var G__9720 = (0);
var G__9721 = (0);
seq__9470_9549 = G__9718;
chunk__9471_9550 = G__9719;
count__9472_9551 = G__9720;
i__9473_9552 = G__9721;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9468_9547);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto___9546);
}


//# sourceMappingURL=ai_player_spec.js.map
