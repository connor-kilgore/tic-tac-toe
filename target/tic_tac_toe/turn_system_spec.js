// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.turn_system_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.turn_system');
goog.require('tic_tac_toe.ai_player');
goog.require('tic_tac_toe.tic_tac_toe_board');
goog.require('tic_tac_toe.ui_interface');
goog.require('speclj.core');
tic_tac_toe.turn_system_spec.base_game = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(1),new cljs.core.Keyword(null,"three-d","three-d",-103100530),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.List.EMPTY], null);
var description__8840__auto___9806 = speclj.components.new_description.call(null,"Turn System",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__9724_9807 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9725_9808 = description__8840__auto___9806;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9725_9808);

try{var seq__9726_9809 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__8840__auto____$1 = speclj.components.new_description.call(null,"checks if ai is",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__9768_9813 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9769_9814 = description__8840__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9769_9814);

try{var seq__9770_9815 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"the player being checked.",((function (_STAR_parent_description_STAR__orig_val__9768_9813,_STAR_parent_description_STAR__temp_val__9769_9814,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9724_9807,_STAR_parent_description_STAR__temp_val__9725_9808,description__8840__auto___9806){
return (function (){
var value__8961__auto___9819 = tic_tac_toe.turn_system.is_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AI 1",(1)], null));
if((!(value__8961__auto___9819))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__8961__auto___9819 == null))?"nil":cljs.core.pr_str.call(null,value__8961__auto___9819)),""].join('')));
} else {
}

var value__8967__auto__ = tic_tac_toe.turn_system.is_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player 1",(1)], null));
if(value__8967__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8967__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8967__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__9768_9813,_STAR_parent_description_STAR__temp_val__9769_9814,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9724_9807,_STAR_parent_description_STAR__temp_val__9725_9808,description__8840__auto___9806))
,false),speclj.components.new_characteristic.call(null,"within a list of players",((function (_STAR_parent_description_STAR__orig_val__9768_9813,_STAR_parent_description_STAR__temp_val__9769_9814,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9724_9807,_STAR_parent_description_STAR__temp_val__9725_9808,description__8840__auto___9806){
return (function (){
var value__8967__auto___9820 = tic_tac_toe.turn_system.has_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player",(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player 2",(2)], null)], null));
if(cljs.core.truth_(value__8967__auto___9820)){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8967__auto___9820 == null))?"nil":cljs.core.pr_str.call(null,value__8967__auto___9820))].join('')));
} else {
}

var value__8961__auto__ = tic_tac_toe.turn_system.has_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player",(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AI",(2)], null)], null));
if(cljs.core.not.call(null,value__8961__auto__)){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__8961__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8961__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__9768_9813,_STAR_parent_description_STAR__temp_val__9769_9814,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9724_9807,_STAR_parent_description_STAR__temp_val__9725_9808,description__8840__auto___9806))
,false)],null)));
var chunk__9771_9816 = null;
var count__9772_9817 = (0);
var i__9773_9818 = (0);
while(true){
if((i__9773_9818 < count__9772_9817)){
var component__8841__auto___9821 = cljs.core._nth.call(null,chunk__9771_9816,i__9773_9818);
speclj.components.install.call(null,component__8841__auto___9821,description__8840__auto____$1);


var G__9822 = seq__9770_9815;
var G__9823 = chunk__9771_9816;
var G__9824 = count__9772_9817;
var G__9825 = (i__9773_9818 + (1));
seq__9770_9815 = G__9822;
chunk__9771_9816 = G__9823;
count__9772_9817 = G__9824;
i__9773_9818 = G__9825;
continue;
} else {
var temp__5753__auto___9826 = cljs.core.seq.call(null,seq__9770_9815);
if(temp__5753__auto___9826){
var seq__9770_9827__$1 = temp__5753__auto___9826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9770_9827__$1)){
var c__5568__auto___9828 = cljs.core.chunk_first.call(null,seq__9770_9827__$1);
var G__9829 = cljs.core.chunk_rest.call(null,seq__9770_9827__$1);
var G__9830 = c__5568__auto___9828;
var G__9831 = cljs.core.count.call(null,c__5568__auto___9828);
var G__9832 = (0);
seq__9770_9815 = G__9829;
chunk__9771_9816 = G__9830;
count__9772_9817 = G__9831;
i__9773_9818 = G__9832;
continue;
} else {
var component__8841__auto___9833 = cljs.core.first.call(null,seq__9770_9827__$1);
speclj.components.install.call(null,component__8841__auto___9833,description__8840__auto____$1);


var G__9834 = cljs.core.next.call(null,seq__9770_9827__$1);
var G__9835 = null;
var G__9836 = (0);
var G__9837 = (0);
seq__9770_9815 = G__9834;
chunk__9771_9816 = G__9835;
count__9772_9817 = G__9836;
i__9773_9818 = G__9837;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9768_9813);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto____$1);
}

return description__8840__auto____$1;
})(),(function (){var description__8840__auto____$1 = speclj.components.new_description.call(null,"Play's the",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__9774_9838 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9775_9839 = description__8840__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9775_9839);

try{var seq__9776_9840 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"ai's turn",((function (_STAR_parent_description_STAR__orig_val__9774_9838,_STAR_parent_description_STAR__temp_val__9775_9839,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9724_9807,_STAR_parent_description_STAR__temp_val__9725_9808,description__8840__auto___9806){
return (function (){
var play_turn_orig_val__9790 = tic_tac_toe.ai_player.play_turn;
var println_orig_val__9791 = cljs.core.println;
var increment_round_orig_val__9792 = tic_tac_toe.tic_tac_toe_board.increment_round;
var play_turn_temp_val__9793 = (function (_,___$1){
return "AI";
});
var println_temp_val__9794 = (function (_){
return null;
});
var increment_round_temp_val__9795 = (function (x){
return x;
});
(tic_tac_toe.ai_player.play_turn = play_turn_temp_val__9793);

(cljs.core.println = println_temp_val__9794);

(tic_tac_toe.tic_tac_toe_board.increment_round = increment_round_temp_val__9795);

try{var expected__8973__auto__ = "AI";
var actual__8974__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(tic_tac_toe.turn_system.play_next_turn.call(null,cljs.core.assoc.call(null,tic_tac_toe.turn_system_spec.base_game,new cljs.core.Keyword(null,"round","round",2009433328),(2))));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.tic_tac_toe_board.increment_round = increment_round_orig_val__9792);

(cljs.core.println = println_orig_val__9791);

(tic_tac_toe.ai_player.play_turn = play_turn_orig_val__9790);
}});})(_STAR_parent_description_STAR__orig_val__9774_9838,_STAR_parent_description_STAR__temp_val__9775_9839,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9724_9807,_STAR_parent_description_STAR__temp_val__9725_9808,description__8840__auto___9806))
,false),speclj.components.new_characteristic.call(null,"player's turn",((function (_STAR_parent_description_STAR__orig_val__9774_9838,_STAR_parent_description_STAR__temp_val__9775_9839,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9724_9807,_STAR_parent_description_STAR__temp_val__9725_9808,description__8840__auto___9806){
return (function (){
var make_move_orig_val__9796 = tic_tac_toe.ui_interface.make_move;
var println_orig_val__9797 = cljs.core.println;
var make_move_temp_val__9798 = (function (_){
return "Player";
});
var println_temp_val__9799 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.make_move = make_move_temp_val__9798);

(cljs.core.println = println_temp_val__9799);

try{var expected__8973__auto__ = "Player";
var actual__8974__auto__ = tic_tac_toe.turn_system.play_next_turn.call(null,tic_tac_toe.turn_system_spec.base_game);
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
}finally {(cljs.core.println = println_orig_val__9797);

(tic_tac_toe.ui_interface.make_move = make_move_orig_val__9796);
}});})(_STAR_parent_description_STAR__orig_val__9774_9838,_STAR_parent_description_STAR__temp_val__9775_9839,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9724_9807,_STAR_parent_description_STAR__temp_val__9725_9808,description__8840__auto___9806))
,false)],null)));
var chunk__9777_9841 = null;
var count__9778_9842 = (0);
var i__9779_9843 = (0);
while(true){
if((i__9779_9843 < count__9778_9842)){
var component__8841__auto___9844 = cljs.core._nth.call(null,chunk__9777_9841,i__9779_9843);
speclj.components.install.call(null,component__8841__auto___9844,description__8840__auto____$1);


var G__9845 = seq__9776_9840;
var G__9846 = chunk__9777_9841;
var G__9847 = count__9778_9842;
var G__9848 = (i__9779_9843 + (1));
seq__9776_9840 = G__9845;
chunk__9777_9841 = G__9846;
count__9778_9842 = G__9847;
i__9779_9843 = G__9848;
continue;
} else {
var temp__5753__auto___9849 = cljs.core.seq.call(null,seq__9776_9840);
if(temp__5753__auto___9849){
var seq__9776_9850__$1 = temp__5753__auto___9849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9776_9850__$1)){
var c__5568__auto___9851 = cljs.core.chunk_first.call(null,seq__9776_9850__$1);
var G__9852 = cljs.core.chunk_rest.call(null,seq__9776_9850__$1);
var G__9853 = c__5568__auto___9851;
var G__9854 = cljs.core.count.call(null,c__5568__auto___9851);
var G__9855 = (0);
seq__9776_9840 = G__9852;
chunk__9777_9841 = G__9853;
count__9778_9842 = G__9854;
i__9779_9843 = G__9855;
continue;
} else {
var component__8841__auto___9856 = cljs.core.first.call(null,seq__9776_9850__$1);
speclj.components.install.call(null,component__8841__auto___9856,description__8840__auto____$1);


var G__9857 = cljs.core.next.call(null,seq__9776_9850__$1);
var G__9858 = null;
var G__9859 = (0);
var G__9860 = (0);
seq__9776_9840 = G__9857;
chunk__9777_9841 = G__9858;
count__9778_9842 = G__9859;
i__9779_9843 = G__9860;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9774_9838);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto____$1);
}

return description__8840__auto____$1;
})(),(function (){var description__8840__auto____$1 = speclj.components.new_description.call(null,"checks if it is players turn by",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__9800_9861 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9801_9862 = description__8840__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9801_9862);

try{var seq__9802_9863 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returning true if it is",((function (_STAR_parent_description_STAR__orig_val__9800_9861,_STAR_parent_description_STAR__temp_val__9801_9862,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9724_9807,_STAR_parent_description_STAR__temp_val__9725_9808,description__8840__auto___9806){
return (function (){
var value__8961__auto___9867 = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(1),(1));
if((!(value__8961__auto___9867))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__8961__auto___9867 == null))?"nil":cljs.core.pr_str.call(null,value__8961__auto___9867)),""].join('')));
} else {
}

var value__8961__auto__ = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(2),(2));
if((!(value__8961__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__8961__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8961__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__9800_9861,_STAR_parent_description_STAR__temp_val__9801_9862,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9724_9807,_STAR_parent_description_STAR__temp_val__9725_9808,description__8840__auto___9806))
,false),speclj.components.new_characteristic.call(null,"returning false if it is not",((function (_STAR_parent_description_STAR__orig_val__9800_9861,_STAR_parent_description_STAR__temp_val__9801_9862,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9724_9807,_STAR_parent_description_STAR__temp_val__9725_9808,description__8840__auto___9806){
return (function (){
var value__8967__auto___9868 = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(1),(2));
if(value__8967__auto___9868){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8967__auto___9868 == null))?"nil":cljs.core.pr_str.call(null,value__8967__auto___9868))].join('')));
} else {
}

var value__8967__auto__ = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(2),(1));
if(value__8967__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8967__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8967__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__9800_9861,_STAR_parent_description_STAR__temp_val__9801_9862,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9724_9807,_STAR_parent_description_STAR__temp_val__9725_9808,description__8840__auto___9806))
,false),speclj.components.new_characteristic.call(null,"returning the player whose turn it is",((function (_STAR_parent_description_STAR__orig_val__9800_9861,_STAR_parent_description_STAR__temp_val__9801_9862,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9724_9807,_STAR_parent_description_STAR__temp_val__9725_9808,description__8840__auto___9806){
return (function (){
var expected__8973__auto___9869 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player1","player1",-1491573636),(1)], null);
var actual__8974__auto___9870 = tic_tac_toe.turn_system.get_current_player.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1","player1",-1491573636),(1),new cljs.core.Keyword(null,"ai","ai",760454697),(1)], null),(1));
if(cljs.core._EQ_.call(null,expected__8973__auto___9869,actual__8974__auto___9870)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9869 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9869)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9870 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9870))," (using =)"].join('')));
}

var expected__8973__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),(1)], null);
var actual__8974__auto__ = tic_tac_toe.turn_system.get_current_player.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1","player1",-1491573636),(1),new cljs.core.Keyword(null,"ai","ai",760454697),(1)], null),(2));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9800_9861,_STAR_parent_description_STAR__temp_val__9801_9862,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9724_9807,_STAR_parent_description_STAR__temp_val__9725_9808,description__8840__auto___9806))
,false)],null)));
var chunk__9803_9864 = null;
var count__9804_9865 = (0);
var i__9805_9866 = (0);
while(true){
if((i__9805_9866 < count__9804_9865)){
var component__8841__auto___9871 = cljs.core._nth.call(null,chunk__9803_9864,i__9805_9866);
speclj.components.install.call(null,component__8841__auto___9871,description__8840__auto____$1);


var G__9872 = seq__9802_9863;
var G__9873 = chunk__9803_9864;
var G__9874 = count__9804_9865;
var G__9875 = (i__9805_9866 + (1));
seq__9802_9863 = G__9872;
chunk__9803_9864 = G__9873;
count__9804_9865 = G__9874;
i__9805_9866 = G__9875;
continue;
} else {
var temp__5753__auto___9876 = cljs.core.seq.call(null,seq__9802_9863);
if(temp__5753__auto___9876){
var seq__9802_9877__$1 = temp__5753__auto___9876;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9802_9877__$1)){
var c__5568__auto___9878 = cljs.core.chunk_first.call(null,seq__9802_9877__$1);
var G__9879 = cljs.core.chunk_rest.call(null,seq__9802_9877__$1);
var G__9880 = c__5568__auto___9878;
var G__9881 = cljs.core.count.call(null,c__5568__auto___9878);
var G__9882 = (0);
seq__9802_9863 = G__9879;
chunk__9803_9864 = G__9880;
count__9804_9865 = G__9881;
i__9805_9866 = G__9882;
continue;
} else {
var component__8841__auto___9883 = cljs.core.first.call(null,seq__9802_9877__$1);
speclj.components.install.call(null,component__8841__auto___9883,description__8840__auto____$1);


var G__9884 = cljs.core.next.call(null,seq__9802_9877__$1);
var G__9885 = null;
var G__9886 = (0);
var G__9887 = (0);
seq__9802_9863 = G__9884;
chunk__9803_9864 = G__9885;
count__9804_9865 = G__9886;
i__9805_9866 = G__9887;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9800_9861);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto____$1);
}

return description__8840__auto____$1;
})()],null)));
var chunk__9727_9810 = null;
var count__9728_9811 = (0);
var i__9729_9812 = (0);
while(true){
if((i__9729_9812 < count__9728_9811)){
var component__8841__auto___9888 = cljs.core._nth.call(null,chunk__9727_9810,i__9729_9812);
speclj.components.install.call(null,component__8841__auto___9888,description__8840__auto___9806);


var G__9889 = seq__9726_9809;
var G__9890 = chunk__9727_9810;
var G__9891 = count__9728_9811;
var G__9892 = (i__9729_9812 + (1));
seq__9726_9809 = G__9889;
chunk__9727_9810 = G__9890;
count__9728_9811 = G__9891;
i__9729_9812 = G__9892;
continue;
} else {
var temp__5753__auto___9893 = cljs.core.seq.call(null,seq__9726_9809);
if(temp__5753__auto___9893){
var seq__9726_9894__$1 = temp__5753__auto___9893;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9726_9894__$1)){
var c__5568__auto___9895 = cljs.core.chunk_first.call(null,seq__9726_9894__$1);
var G__9896 = cljs.core.chunk_rest.call(null,seq__9726_9894__$1);
var G__9897 = c__5568__auto___9895;
var G__9898 = cljs.core.count.call(null,c__5568__auto___9895);
var G__9899 = (0);
seq__9726_9809 = G__9896;
chunk__9727_9810 = G__9897;
count__9728_9811 = G__9898;
i__9729_9812 = G__9899;
continue;
} else {
var component__8841__auto___9900 = cljs.core.first.call(null,seq__9726_9894__$1);
speclj.components.install.call(null,component__8841__auto___9900,description__8840__auto___9806);


var G__9901 = cljs.core.next.call(null,seq__9726_9894__$1);
var G__9902 = null;
var G__9903 = (0);
var G__9904 = (0);
seq__9726_9809 = G__9901;
chunk__9727_9810 = G__9902;
count__9728_9811 = G__9903;
i__9729_9812 = G__9904;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9724_9807);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto___9806);
}


//# sourceMappingURL=turn_system_spec.js.map
