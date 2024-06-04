// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.tic_tac_toe_board_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.tic_tac_toe_board');
goog.require('speclj.core');
tic_tac_toe.tic_tac_toe_board_spec.empty_board = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
tic_tac_toe.tic_tac_toe_board_spec.mixed_board = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(2),(0),(2),(1),(2),(1),(0)], null);
var description__9225__auto___10645 = speclj.components.new_description.call(null,"Tic Tac Toe Board",false,"tic-tac-toe.tic-tac-toe-board-spec");
var _STAR_parent_description_STAR__orig_val__10615_10646 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10616_10647 = description__9225__auto___10645;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10616_10647);

try{var seq__10617_10648 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"gets the board side length",((function (_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645){
return (function (){
var expected__9358__auto___10652 = (3);
var actual__9359__auto___10653 = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(9),(0)),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9358__auto___10652,actual__9359__auto___10653)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___10652 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___10652)),speclj.platform.endl,"     got: ",(((actual__9359__auto___10653 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___10653))," (using =)"].join('')));
}

var expected__9358__auto___10654 = (4);
var actual__9359__auto___10655 = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(16),(0)),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9358__auto___10654,actual__9359__auto___10655)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___10654 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___10654)),speclj.platform.endl,"     got: ",(((actual__9359__auto___10655 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___10655))," (using =)"].join('')));
}

var expected__9358__auto__ = (3);
var actual__9359__auto__ = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(27),(0)),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645))
,false),(function (){var description__9225__auto____$1 = speclj.components.new_description.call(null,"makes a new board that is",false,"tic-tac-toe.tic-tac-toe-board-spec");
var _STAR_parent_description_STAR__orig_val__10633_10656 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10634_10657 = description__9225__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10634_10657);

try{var seq__10635_10658 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"2-D",((function (_STAR_parent_description_STAR__orig_val__10633_10656,_STAR_parent_description_STAR__temp_val__10634_10657,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645){
return (function (){
var expected__9358__auto___10662 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__9359__auto___10663 = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9358__auto___10662,actual__9359__auto___10663)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___10662 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___10662)),speclj.platform.endl,"     got: ",(((actual__9359__auto___10663 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___10663))," (using =)"].join('')));
}

var expected__9358__auto__ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__9359__auto__ = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10633_10656,_STAR_parent_description_STAR__temp_val__10634_10657,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645))
,false),speclj.components.new_characteristic.call(null,"3-D",((function (_STAR_parent_description_STAR__orig_val__10633_10656,_STAR_parent_description_STAR__temp_val__10634_10657,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645){
return (function (){
var expected__9358__auto___10664 = new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__9359__auto___10665 = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null));
if(cljs.core._EQ_.call(null,expected__9358__auto___10664,actual__9359__auto___10665)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___10664 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___10664)),speclj.platform.endl,"     got: ",(((actual__9359__auto___10665 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___10665))," (using =)"].join('')));
}

var expected__9358__auto__ = cljs.core.PersistentVector.fromArray([(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], true);
var actual__9359__auto__ = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10633_10656,_STAR_parent_description_STAR__temp_val__10634_10657,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645))
,false)],null)));
var chunk__10636_10659 = null;
var count__10637_10660 = (0);
var i__10638_10661 = (0);
while(true){
if((i__10638_10661 < count__10637_10660)){
var component__9226__auto___10666 = cljs.core._nth.call(null,chunk__10636_10659,i__10638_10661);
speclj.components.install.call(null,component__9226__auto___10666,description__9225__auto____$1);


var G__10667 = seq__10635_10658;
var G__10668 = chunk__10636_10659;
var G__10669 = count__10637_10660;
var G__10670 = (i__10638_10661 + (1));
seq__10635_10658 = G__10667;
chunk__10636_10659 = G__10668;
count__10637_10660 = G__10669;
i__10638_10661 = G__10670;
continue;
} else {
var temp__5753__auto___10671 = cljs.core.seq.call(null,seq__10635_10658);
if(temp__5753__auto___10671){
var seq__10635_10672__$1 = temp__5753__auto___10671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10635_10672__$1)){
var c__5568__auto___10673 = cljs.core.chunk_first.call(null,seq__10635_10672__$1);
var G__10674 = cljs.core.chunk_rest.call(null,seq__10635_10672__$1);
var G__10675 = c__5568__auto___10673;
var G__10676 = cljs.core.count.call(null,c__5568__auto___10673);
var G__10677 = (0);
seq__10635_10658 = G__10674;
chunk__10636_10659 = G__10675;
count__10637_10660 = G__10676;
i__10638_10661 = G__10677;
continue;
} else {
var component__9226__auto___10678 = cljs.core.first.call(null,seq__10635_10672__$1);
speclj.components.install.call(null,component__9226__auto___10678,description__9225__auto____$1);


var G__10679 = cljs.core.next.call(null,seq__10635_10672__$1);
var G__10680 = null;
var G__10681 = (0);
var G__10682 = (0);
seq__10635_10658 = G__10679;
chunk__10636_10659 = G__10680;
count__10637_10660 = G__10681;
i__10638_10661 = G__10682;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10633_10656);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto____$1);
}

return description__9225__auto____$1;
})(),(function (){var description__9225__auto____$1 = speclj.components.new_description.call(null,"places a value into the tttb",false,"tic-tac-toe.tic-tac-toe-board-spec");
var _STAR_parent_description_STAR__orig_val__10639_10683 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10640_10684 = description__9225__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10640_10684);

try{var seq__10641_10685 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"checks if the position is empty to place",((function (_STAR_parent_description_STAR__orig_val__10639_10683,_STAR_parent_description_STAR__temp_val__10640_10684,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645){
return (function (){
var value__9346__auto___10689 = tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(0));
if((!(value__9346__auto___10689))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__9346__auto___10689 == null))?"nil":cljs.core.pr_str.call(null,value__9346__auto___10689)),""].join('')));
} else {
}

var value__9352__auto___10690 = tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),(0));
if(value__9352__auto___10690){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__9352__auto___10690 == null))?"nil":cljs.core.pr_str.call(null,value__9352__auto___10690))].join('')));
} else {
}

var value__9352__auto__ = tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1)], null),(4));
if(value__9352__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__9352__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__9352__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10639_10683,_STAR_parent_description_STAR__temp_val__10640_10684,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645))
,false),speclj.components.new_characteristic.call(null,"an X into top left corner",((function (_STAR_parent_description_STAR__orig_val__10639_10683,_STAR_parent_description_STAR__temp_val__10640_10684,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645){
return (function (){
var expected__9358__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2),(0),(0),(0),(0),(0),(0)], null);
var actual__9359__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(2),(2));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10639_10683,_STAR_parent_description_STAR__temp_val__10640_10684,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645))
,false),speclj.components.new_characteristic.call(null,"an X and O in opposite corners",((function (_STAR_parent_description_STAR__orig_val__10639_10683,_STAR_parent_description_STAR__temp_val__10640_10684,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645){
return (function (){
var expected__9358__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(2)], null);
var actual__9359__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(1),(0)),(2),(8));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10639_10683,_STAR_parent_description_STAR__temp_val__10640_10684,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645))
,false),speclj.components.new_characteristic.call(null,"an X on a spot where an O exists",((function (_STAR_parent_description_STAR__orig_val__10639_10683,_STAR_parent_description_STAR__temp_val__10640_10684,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645){
return (function (){
var expected__9358__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__9359__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(2),(0)),(1),(0));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10639_10683,_STAR_parent_description_STAR__temp_val__10640_10684,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645))
,false),speclj.components.new_characteristic.call(null,"a series of inputs",((function (_STAR_parent_description_STAR__orig_val__10639_10683,_STAR_parent_description_STAR__temp_val__10640_10684,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645){
return (function (){
var expected__9358__auto__ = tic_tac_toe.tic_tac_toe_board_spec.mixed_board;
var actual__9359__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(1),(0)),(2),(2)),(2),(4)),(1),(5)),(2),(6)),(1),(7));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10639_10683,_STAR_parent_description_STAR__temp_val__10640_10684,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645))
,false),speclj.components.new_characteristic.call(null,"returns board input if value is attempting to overwrite X or O",((function (_STAR_parent_description_STAR__orig_val__10639_10683,_STAR_parent_description_STAR__temp_val__10640_10684,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645){
return (function (){
var expected__9358__auto__ = tic_tac_toe.tic_tac_toe_board_spec.mixed_board;
var actual__9359__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.mixed_board,(2),(0));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10639_10683,_STAR_parent_description_STAR__temp_val__10640_10684,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645))
,false)],null)));
var chunk__10642_10686 = null;
var count__10643_10687 = (0);
var i__10644_10688 = (0);
while(true){
if((i__10644_10688 < count__10643_10687)){
var component__9226__auto___10691 = cljs.core._nth.call(null,chunk__10642_10686,i__10644_10688);
speclj.components.install.call(null,component__9226__auto___10691,description__9225__auto____$1);


var G__10692 = seq__10641_10685;
var G__10693 = chunk__10642_10686;
var G__10694 = count__10643_10687;
var G__10695 = (i__10644_10688 + (1));
seq__10641_10685 = G__10692;
chunk__10642_10686 = G__10693;
count__10643_10687 = G__10694;
i__10644_10688 = G__10695;
continue;
} else {
var temp__5753__auto___10696 = cljs.core.seq.call(null,seq__10641_10685);
if(temp__5753__auto___10696){
var seq__10641_10697__$1 = temp__5753__auto___10696;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10641_10697__$1)){
var c__5568__auto___10698 = cljs.core.chunk_first.call(null,seq__10641_10697__$1);
var G__10699 = cljs.core.chunk_rest.call(null,seq__10641_10697__$1);
var G__10700 = c__5568__auto___10698;
var G__10701 = cljs.core.count.call(null,c__5568__auto___10698);
var G__10702 = (0);
seq__10641_10685 = G__10699;
chunk__10642_10686 = G__10700;
count__10643_10687 = G__10701;
i__10644_10688 = G__10702;
continue;
} else {
var component__9226__auto___10703 = cljs.core.first.call(null,seq__10641_10697__$1);
speclj.components.install.call(null,component__9226__auto___10703,description__9225__auto____$1);


var G__10704 = cljs.core.next.call(null,seq__10641_10697__$1);
var G__10705 = null;
var G__10706 = (0);
var G__10707 = (0);
seq__10641_10685 = G__10704;
chunk__10642_10686 = G__10705;
count__10643_10687 = G__10706;
i__10644_10688 = G__10707;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10639_10683);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto____$1);
}

return description__9225__auto____$1;
})(),speclj.components.new_characteristic.call(null,"gives the absolute depth of the board",((function (_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645){
return (function (){
var expected__9358__auto___10708 = (0);
var actual__9359__auto___10709 = tic_tac_toe.tic_tac_toe_board.get_absolute_depth.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto___10708,actual__9359__auto___10709)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___10708 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___10708)),speclj.platform.endl,"     got: ",(((actual__9359__auto___10709 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___10709))," (using =)"].join('')));
}

var expected__9358__auto___10710 = (1);
var actual__9359__auto___10711 = tic_tac_toe.tic_tac_toe_board.get_absolute_depth.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto___10710,actual__9359__auto___10711)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___10710 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___10710)),speclj.platform.endl,"     got: ",(((actual__9359__auto___10711 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___10711))," (using =)"].join('')));
}

var expected__9358__auto__ = (9);
var actual__9359__auto__ = tic_tac_toe.tic_tac_toe_board.get_absolute_depth.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10615_10646,_STAR_parent_description_STAR__temp_val__10616_10647,description__9225__auto___10645))
,false)],null)));
var chunk__10618_10649 = null;
var count__10619_10650 = (0);
var i__10620_10651 = (0);
while(true){
if((i__10620_10651 < count__10619_10650)){
var component__9226__auto___10712 = cljs.core._nth.call(null,chunk__10618_10649,i__10620_10651);
speclj.components.install.call(null,component__9226__auto___10712,description__9225__auto___10645);


var G__10713 = seq__10617_10648;
var G__10714 = chunk__10618_10649;
var G__10715 = count__10619_10650;
var G__10716 = (i__10620_10651 + (1));
seq__10617_10648 = G__10713;
chunk__10618_10649 = G__10714;
count__10619_10650 = G__10715;
i__10620_10651 = G__10716;
continue;
} else {
var temp__5753__auto___10717 = cljs.core.seq.call(null,seq__10617_10648);
if(temp__5753__auto___10717){
var seq__10617_10718__$1 = temp__5753__auto___10717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10617_10718__$1)){
var c__5568__auto___10719 = cljs.core.chunk_first.call(null,seq__10617_10718__$1);
var G__10720 = cljs.core.chunk_rest.call(null,seq__10617_10718__$1);
var G__10721 = c__5568__auto___10719;
var G__10722 = cljs.core.count.call(null,c__5568__auto___10719);
var G__10723 = (0);
seq__10617_10648 = G__10720;
chunk__10618_10649 = G__10721;
count__10619_10650 = G__10722;
i__10620_10651 = G__10723;
continue;
} else {
var component__9226__auto___10724 = cljs.core.first.call(null,seq__10617_10718__$1);
speclj.components.install.call(null,component__9226__auto___10724,description__9225__auto___10645);


var G__10725 = cljs.core.next.call(null,seq__10617_10718__$1);
var G__10726 = null;
var G__10727 = (0);
var G__10728 = (0);
seq__10617_10648 = G__10725;
chunk__10618_10649 = G__10726;
count__10619_10650 = G__10727;
i__10620_10651 = G__10728;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10615_10646);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto___10645);
}


//# sourceMappingURL=tic_tac_toe_board_spec.js.map
