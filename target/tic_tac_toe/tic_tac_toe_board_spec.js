// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.tic_tac_toe_board_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.tic_tac_toe_board');
goog.require('speclj.core');
tic_tac_toe.tic_tac_toe_board_spec.empty_board = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
tic_tac_toe.tic_tac_toe_board_spec.mixed_board = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(2),(0),(2),(1),(2),(1),(0)], null);
var description__8840__auto___10572 = speclj.components.new_description.call(null,"Tic Tac Toe Board",false,"tic-tac-toe.tic-tac-toe-board-spec");
var _STAR_parent_description_STAR__orig_val__10542_10573 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10543_10574 = description__8840__auto___10572;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10543_10574);

try{var seq__10544_10575 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"gets the board side length",((function (_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572){
return (function (){
var expected__8973__auto___10579 = (3);
var actual__8974__auto___10580 = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(9),(0)),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8973__auto___10579,actual__8974__auto___10580)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___10579 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___10579)),speclj.platform.endl,"     got: ",(((actual__8974__auto___10580 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___10580))," (using =)"].join('')));
}

var expected__8973__auto___10581 = (4);
var actual__8974__auto___10582 = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(16),(0)),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8973__auto___10581,actual__8974__auto___10582)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___10581 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___10581)),speclj.platform.endl,"     got: ",(((actual__8974__auto___10582 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___10582))," (using =)"].join('')));
}

var expected__8973__auto__ = (3);
var actual__8974__auto__ = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(27),(0)),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572))
,false),(function (){var description__8840__auto____$1 = speclj.components.new_description.call(null,"makes a new board that is",false,"tic-tac-toe.tic-tac-toe-board-spec");
var _STAR_parent_description_STAR__orig_val__10560_10583 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10561_10584 = description__8840__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10561_10584);

try{var seq__10562_10585 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"2-D",((function (_STAR_parent_description_STAR__orig_val__10560_10583,_STAR_parent_description_STAR__temp_val__10561_10584,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572){
return (function (){
var expected__8973__auto___10589 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__8974__auto___10590 = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8973__auto___10589,actual__8974__auto___10590)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___10589 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___10589)),speclj.platform.endl,"     got: ",(((actual__8974__auto___10590 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___10590))," (using =)"].join('')));
}

var expected__8973__auto__ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__8974__auto__ = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10560_10583,_STAR_parent_description_STAR__temp_val__10561_10584,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572))
,false),speclj.components.new_characteristic.call(null,"3-D",((function (_STAR_parent_description_STAR__orig_val__10560_10583,_STAR_parent_description_STAR__temp_val__10561_10584,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572){
return (function (){
var expected__8973__auto___10591 = new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__8974__auto___10592 = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null));
if(cljs.core._EQ_.call(null,expected__8973__auto___10591,actual__8974__auto___10592)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___10591 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___10591)),speclj.platform.endl,"     got: ",(((actual__8974__auto___10592 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___10592))," (using =)"].join('')));
}

var expected__8973__auto__ = cljs.core.PersistentVector.fromArray([(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], true);
var actual__8974__auto__ = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10560_10583,_STAR_parent_description_STAR__temp_val__10561_10584,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572))
,false)],null)));
var chunk__10563_10586 = null;
var count__10564_10587 = (0);
var i__10565_10588 = (0);
while(true){
if((i__10565_10588 < count__10564_10587)){
var component__8841__auto___10593 = cljs.core._nth.call(null,chunk__10563_10586,i__10565_10588);
speclj.components.install.call(null,component__8841__auto___10593,description__8840__auto____$1);


var G__10594 = seq__10562_10585;
var G__10595 = chunk__10563_10586;
var G__10596 = count__10564_10587;
var G__10597 = (i__10565_10588 + (1));
seq__10562_10585 = G__10594;
chunk__10563_10586 = G__10595;
count__10564_10587 = G__10596;
i__10565_10588 = G__10597;
continue;
} else {
var temp__5753__auto___10598 = cljs.core.seq.call(null,seq__10562_10585);
if(temp__5753__auto___10598){
var seq__10562_10599__$1 = temp__5753__auto___10598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10562_10599__$1)){
var c__5568__auto___10600 = cljs.core.chunk_first.call(null,seq__10562_10599__$1);
var G__10601 = cljs.core.chunk_rest.call(null,seq__10562_10599__$1);
var G__10602 = c__5568__auto___10600;
var G__10603 = cljs.core.count.call(null,c__5568__auto___10600);
var G__10604 = (0);
seq__10562_10585 = G__10601;
chunk__10563_10586 = G__10602;
count__10564_10587 = G__10603;
i__10565_10588 = G__10604;
continue;
} else {
var component__8841__auto___10605 = cljs.core.first.call(null,seq__10562_10599__$1);
speclj.components.install.call(null,component__8841__auto___10605,description__8840__auto____$1);


var G__10606 = cljs.core.next.call(null,seq__10562_10599__$1);
var G__10607 = null;
var G__10608 = (0);
var G__10609 = (0);
seq__10562_10585 = G__10606;
chunk__10563_10586 = G__10607;
count__10564_10587 = G__10608;
i__10565_10588 = G__10609;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10560_10583);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto____$1);
}

return description__8840__auto____$1;
})(),(function (){var description__8840__auto____$1 = speclj.components.new_description.call(null,"places a value into the tttb",false,"tic-tac-toe.tic-tac-toe-board-spec");
var _STAR_parent_description_STAR__orig_val__10566_10610 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10567_10611 = description__8840__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10567_10611);

try{var seq__10568_10612 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"checks if the position is empty to place",((function (_STAR_parent_description_STAR__orig_val__10566_10610,_STAR_parent_description_STAR__temp_val__10567_10611,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572){
return (function (){
var value__8961__auto___10616 = tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(0));
if((!(value__8961__auto___10616))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__8961__auto___10616 == null))?"nil":cljs.core.pr_str.call(null,value__8961__auto___10616)),""].join('')));
} else {
}

var value__8967__auto___10617 = tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),(0));
if(value__8967__auto___10617){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8967__auto___10617 == null))?"nil":cljs.core.pr_str.call(null,value__8967__auto___10617))].join('')));
} else {
}

var value__8967__auto__ = tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1)], null),(4));
if(value__8967__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8967__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8967__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10566_10610,_STAR_parent_description_STAR__temp_val__10567_10611,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572))
,false),speclj.components.new_characteristic.call(null,"an X into top left corner",((function (_STAR_parent_description_STAR__orig_val__10566_10610,_STAR_parent_description_STAR__temp_val__10567_10611,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572){
return (function (){
var expected__8973__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2),(0),(0),(0),(0),(0),(0)], null);
var actual__8974__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(2),(2));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10566_10610,_STAR_parent_description_STAR__temp_val__10567_10611,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572))
,false),speclj.components.new_characteristic.call(null,"an X and O in opposite corners",((function (_STAR_parent_description_STAR__orig_val__10566_10610,_STAR_parent_description_STAR__temp_val__10567_10611,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572){
return (function (){
var expected__8973__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(2)], null);
var actual__8974__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(1),(0)),(2),(8));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10566_10610,_STAR_parent_description_STAR__temp_val__10567_10611,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572))
,false),speclj.components.new_characteristic.call(null,"an X on a spot where an O exists",((function (_STAR_parent_description_STAR__orig_val__10566_10610,_STAR_parent_description_STAR__temp_val__10567_10611,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572){
return (function (){
var expected__8973__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__8974__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(2),(0)),(1),(0));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10566_10610,_STAR_parent_description_STAR__temp_val__10567_10611,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572))
,false),speclj.components.new_characteristic.call(null,"a series of inputs",((function (_STAR_parent_description_STAR__orig_val__10566_10610,_STAR_parent_description_STAR__temp_val__10567_10611,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572){
return (function (){
var expected__8973__auto__ = tic_tac_toe.tic_tac_toe_board_spec.mixed_board;
var actual__8974__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(1),(0)),(2),(2)),(2),(4)),(1),(5)),(2),(6)),(1),(7));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10566_10610,_STAR_parent_description_STAR__temp_val__10567_10611,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572))
,false),speclj.components.new_characteristic.call(null,"returns board input if value is attempting to overwrite X or O",((function (_STAR_parent_description_STAR__orig_val__10566_10610,_STAR_parent_description_STAR__temp_val__10567_10611,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572){
return (function (){
var expected__8973__auto__ = tic_tac_toe.tic_tac_toe_board_spec.mixed_board;
var actual__8974__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.mixed_board,(2),(0));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10566_10610,_STAR_parent_description_STAR__temp_val__10567_10611,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572))
,false)],null)));
var chunk__10569_10613 = null;
var count__10570_10614 = (0);
var i__10571_10615 = (0);
while(true){
if((i__10571_10615 < count__10570_10614)){
var component__8841__auto___10618 = cljs.core._nth.call(null,chunk__10569_10613,i__10571_10615);
speclj.components.install.call(null,component__8841__auto___10618,description__8840__auto____$1);


var G__10619 = seq__10568_10612;
var G__10620 = chunk__10569_10613;
var G__10621 = count__10570_10614;
var G__10622 = (i__10571_10615 + (1));
seq__10568_10612 = G__10619;
chunk__10569_10613 = G__10620;
count__10570_10614 = G__10621;
i__10571_10615 = G__10622;
continue;
} else {
var temp__5753__auto___10623 = cljs.core.seq.call(null,seq__10568_10612);
if(temp__5753__auto___10623){
var seq__10568_10624__$1 = temp__5753__auto___10623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10568_10624__$1)){
var c__5568__auto___10625 = cljs.core.chunk_first.call(null,seq__10568_10624__$1);
var G__10626 = cljs.core.chunk_rest.call(null,seq__10568_10624__$1);
var G__10627 = c__5568__auto___10625;
var G__10628 = cljs.core.count.call(null,c__5568__auto___10625);
var G__10629 = (0);
seq__10568_10612 = G__10626;
chunk__10569_10613 = G__10627;
count__10570_10614 = G__10628;
i__10571_10615 = G__10629;
continue;
} else {
var component__8841__auto___10630 = cljs.core.first.call(null,seq__10568_10624__$1);
speclj.components.install.call(null,component__8841__auto___10630,description__8840__auto____$1);


var G__10631 = cljs.core.next.call(null,seq__10568_10624__$1);
var G__10632 = null;
var G__10633 = (0);
var G__10634 = (0);
seq__10568_10612 = G__10631;
chunk__10569_10613 = G__10632;
count__10570_10614 = G__10633;
i__10571_10615 = G__10634;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10566_10610);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto____$1);
}

return description__8840__auto____$1;
})(),speclj.components.new_characteristic.call(null,"gives the absolute depth of the board",((function (_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572){
return (function (){
var expected__8973__auto___10635 = (0);
var actual__8974__auto___10636 = tic_tac_toe.tic_tac_toe_board.get_absolute_depth.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto___10635,actual__8974__auto___10636)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___10635 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___10635)),speclj.platform.endl,"     got: ",(((actual__8974__auto___10636 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___10636))," (using =)"].join('')));
}

var expected__8973__auto___10637 = (1);
var actual__8974__auto___10638 = tic_tac_toe.tic_tac_toe_board.get_absolute_depth.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto___10637,actual__8974__auto___10638)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___10637 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___10637)),speclj.platform.endl,"     got: ",(((actual__8974__auto___10638 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___10638))," (using =)"].join('')));
}

var expected__8973__auto__ = (9);
var actual__8974__auto__ = tic_tac_toe.tic_tac_toe_board.get_absolute_depth.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10542_10573,_STAR_parent_description_STAR__temp_val__10543_10574,description__8840__auto___10572))
,false)],null)));
var chunk__10545_10576 = null;
var count__10546_10577 = (0);
var i__10547_10578 = (0);
while(true){
if((i__10547_10578 < count__10546_10577)){
var component__8841__auto___10639 = cljs.core._nth.call(null,chunk__10545_10576,i__10547_10578);
speclj.components.install.call(null,component__8841__auto___10639,description__8840__auto___10572);


var G__10640 = seq__10544_10575;
var G__10641 = chunk__10545_10576;
var G__10642 = count__10546_10577;
var G__10643 = (i__10547_10578 + (1));
seq__10544_10575 = G__10640;
chunk__10545_10576 = G__10641;
count__10546_10577 = G__10642;
i__10547_10578 = G__10643;
continue;
} else {
var temp__5753__auto___10644 = cljs.core.seq.call(null,seq__10544_10575);
if(temp__5753__auto___10644){
var seq__10544_10645__$1 = temp__5753__auto___10644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10544_10645__$1)){
var c__5568__auto___10646 = cljs.core.chunk_first.call(null,seq__10544_10645__$1);
var G__10647 = cljs.core.chunk_rest.call(null,seq__10544_10645__$1);
var G__10648 = c__5568__auto___10646;
var G__10649 = cljs.core.count.call(null,c__5568__auto___10646);
var G__10650 = (0);
seq__10544_10575 = G__10647;
chunk__10545_10576 = G__10648;
count__10546_10577 = G__10649;
i__10547_10578 = G__10650;
continue;
} else {
var component__8841__auto___10651 = cljs.core.first.call(null,seq__10544_10645__$1);
speclj.components.install.call(null,component__8841__auto___10651,description__8840__auto___10572);


var G__10652 = cljs.core.next.call(null,seq__10544_10645__$1);
var G__10653 = null;
var G__10654 = (0);
var G__10655 = (0);
seq__10544_10575 = G__10652;
chunk__10545_10576 = G__10653;
count__10546_10577 = G__10654;
i__10547_10578 = G__10655;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10542_10573);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto___10572);
}


//# sourceMappingURL=tic_tac_toe_board_spec.js.map
