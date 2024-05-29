// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.turn_system_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.turn_system');
goog.require('tic_tac_toe.ai_player');
goog.require('tic_tac_toe.tic_tac_toe_board');
goog.require('tic_tac_toe.ui_interface');
goog.require('speclj.core');
tic_tac_toe.turn_system_spec.base_game = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(1),new cljs.core.Keyword(null,"three-d","three-d",-103100530),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.List.EMPTY], null);
var description__7524__auto___13791 = speclj.components.new_description.call(null,"Turn System",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__13709_13792 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13710_13793 = description__7524__auto___13791;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13710_13793);

try{var seq__13711_13794 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"checks if ai is",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__13753_13798 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13754_13799 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13754_13799);

try{var seq__13755_13800 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"the player being checked.",((function (_STAR_parent_description_STAR__orig_val__13753_13798,_STAR_parent_description_STAR__temp_val__13754_13799,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13709_13792,_STAR_parent_description_STAR__temp_val__13710_13793,description__7524__auto___13791){
return (function (){
var value__7639__auto___13804 = tic_tac_toe.turn_system.is_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AI 1",(1)], null));
if((!(value__7639__auto___13804))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto___13804 == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto___13804)),""].join('')));
} else {
}

var value__7645__auto__ = tic_tac_toe.turn_system.is_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player 1",(1)], null));
if(value__7645__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7645__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__13753_13798,_STAR_parent_description_STAR__temp_val__13754_13799,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13709_13792,_STAR_parent_description_STAR__temp_val__13710_13793,description__7524__auto___13791))
,false),speclj.components.new_characteristic.call(null,"within a list of players",((function (_STAR_parent_description_STAR__orig_val__13753_13798,_STAR_parent_description_STAR__temp_val__13754_13799,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13709_13792,_STAR_parent_description_STAR__temp_val__13710_13793,description__7524__auto___13791){
return (function (){
var value__7645__auto___13805 = tic_tac_toe.turn_system.has_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player",(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player 2",(2)], null)], null));
if(cljs.core.truth_(value__7645__auto___13805)){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7645__auto___13805 == null))?"nil":cljs.core.pr_str.call(null,value__7645__auto___13805))].join('')));
} else {
}

var value__7639__auto__ = tic_tac_toe.turn_system.has_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player",(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AI",(2)], null)], null));
if(cljs.core.not.call(null,value__7639__auto__)){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__13753_13798,_STAR_parent_description_STAR__temp_val__13754_13799,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13709_13792,_STAR_parent_description_STAR__temp_val__13710_13793,description__7524__auto___13791))
,false)],null)));
var chunk__13756_13801 = null;
var count__13757_13802 = (0);
var i__13758_13803 = (0);
while(true){
if((i__13758_13803 < count__13757_13802)){
var component__7525__auto___13806 = cljs.core._nth.call(null,chunk__13756_13801,i__13758_13803);
speclj.components.install.call(null,component__7525__auto___13806,description__7524__auto____$1);


var G__13807 = seq__13755_13800;
var G__13808 = chunk__13756_13801;
var G__13809 = count__13757_13802;
var G__13810 = (i__13758_13803 + (1));
seq__13755_13800 = G__13807;
chunk__13756_13801 = G__13808;
count__13757_13802 = G__13809;
i__13758_13803 = G__13810;
continue;
} else {
var temp__5753__auto___13811 = cljs.core.seq.call(null,seq__13755_13800);
if(temp__5753__auto___13811){
var seq__13755_13812__$1 = temp__5753__auto___13811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13755_13812__$1)){
var c__5568__auto___13813 = cljs.core.chunk_first.call(null,seq__13755_13812__$1);
var G__13814 = cljs.core.chunk_rest.call(null,seq__13755_13812__$1);
var G__13815 = c__5568__auto___13813;
var G__13816 = cljs.core.count.call(null,c__5568__auto___13813);
var G__13817 = (0);
seq__13755_13800 = G__13814;
chunk__13756_13801 = G__13815;
count__13757_13802 = G__13816;
i__13758_13803 = G__13817;
continue;
} else {
var component__7525__auto___13818 = cljs.core.first.call(null,seq__13755_13812__$1);
speclj.components.install.call(null,component__7525__auto___13818,description__7524__auto____$1);


var G__13819 = cljs.core.next.call(null,seq__13755_13812__$1);
var G__13820 = null;
var G__13821 = (0);
var G__13822 = (0);
seq__13755_13800 = G__13819;
chunk__13756_13801 = G__13820;
count__13757_13802 = G__13821;
i__13758_13803 = G__13822;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13753_13798);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"Play's the",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__13759_13823 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13760_13824 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13760_13824);

try{var seq__13761_13825 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"ai's turn",((function (_STAR_parent_description_STAR__orig_val__13759_13823,_STAR_parent_description_STAR__temp_val__13760_13824,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13709_13792,_STAR_parent_description_STAR__temp_val__13710_13793,description__7524__auto___13791){
return (function (){
var play_turn_orig_val__13775 = tic_tac_toe.ai_player.play_turn;
var println_orig_val__13776 = cljs.core.println;
var increment_round_orig_val__13777 = tic_tac_toe.tic_tac_toe_board.increment_round;
var play_turn_temp_val__13778 = (function (_,___$1){
return "AI";
});
var println_temp_val__13779 = (function (_){
return null;
});
var increment_round_temp_val__13780 = (function (x){
return x;
});
(tic_tac_toe.ai_player.play_turn = play_turn_temp_val__13778);

(cljs.core.println = println_temp_val__13779);

(tic_tac_toe.tic_tac_toe_board.increment_round = increment_round_temp_val__13780);

try{var expected__7651__auto__ = "AI";
var actual__7652__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(tic_tac_toe.turn_system.play_next_turn.call(null,cljs.core.assoc.call(null,tic_tac_toe.turn_system_spec.base_game,new cljs.core.Keyword(null,"round","round",2009433328),(2))));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.tic_tac_toe_board.increment_round = increment_round_orig_val__13777);

(cljs.core.println = println_orig_val__13776);

(tic_tac_toe.ai_player.play_turn = play_turn_orig_val__13775);
}});})(_STAR_parent_description_STAR__orig_val__13759_13823,_STAR_parent_description_STAR__temp_val__13760_13824,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13709_13792,_STAR_parent_description_STAR__temp_val__13710_13793,description__7524__auto___13791))
,false),speclj.components.new_characteristic.call(null,"player's turn",((function (_STAR_parent_description_STAR__orig_val__13759_13823,_STAR_parent_description_STAR__temp_val__13760_13824,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13709_13792,_STAR_parent_description_STAR__temp_val__13710_13793,description__7524__auto___13791){
return (function (){
var make_move_orig_val__13781 = tic_tac_toe.ui_interface.make_move;
var println_orig_val__13782 = cljs.core.println;
var make_move_temp_val__13783 = (function (_){
return "Player";
});
var println_temp_val__13784 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.make_move = make_move_temp_val__13783);

(cljs.core.println = println_temp_val__13784);

try{var expected__7651__auto__ = "Player";
var actual__7652__auto__ = tic_tac_toe.turn_system.play_next_turn.call(null,tic_tac_toe.turn_system_spec.base_game);
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
}finally {(cljs.core.println = println_orig_val__13782);

(tic_tac_toe.ui_interface.make_move = make_move_orig_val__13781);
}});})(_STAR_parent_description_STAR__orig_val__13759_13823,_STAR_parent_description_STAR__temp_val__13760_13824,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13709_13792,_STAR_parent_description_STAR__temp_val__13710_13793,description__7524__auto___13791))
,false)],null)));
var chunk__13762_13826 = null;
var count__13763_13827 = (0);
var i__13764_13828 = (0);
while(true){
if((i__13764_13828 < count__13763_13827)){
var component__7525__auto___13829 = cljs.core._nth.call(null,chunk__13762_13826,i__13764_13828);
speclj.components.install.call(null,component__7525__auto___13829,description__7524__auto____$1);


var G__13830 = seq__13761_13825;
var G__13831 = chunk__13762_13826;
var G__13832 = count__13763_13827;
var G__13833 = (i__13764_13828 + (1));
seq__13761_13825 = G__13830;
chunk__13762_13826 = G__13831;
count__13763_13827 = G__13832;
i__13764_13828 = G__13833;
continue;
} else {
var temp__5753__auto___13834 = cljs.core.seq.call(null,seq__13761_13825);
if(temp__5753__auto___13834){
var seq__13761_13835__$1 = temp__5753__auto___13834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13761_13835__$1)){
var c__5568__auto___13836 = cljs.core.chunk_first.call(null,seq__13761_13835__$1);
var G__13837 = cljs.core.chunk_rest.call(null,seq__13761_13835__$1);
var G__13838 = c__5568__auto___13836;
var G__13839 = cljs.core.count.call(null,c__5568__auto___13836);
var G__13840 = (0);
seq__13761_13825 = G__13837;
chunk__13762_13826 = G__13838;
count__13763_13827 = G__13839;
i__13764_13828 = G__13840;
continue;
} else {
var component__7525__auto___13841 = cljs.core.first.call(null,seq__13761_13835__$1);
speclj.components.install.call(null,component__7525__auto___13841,description__7524__auto____$1);


var G__13842 = cljs.core.next.call(null,seq__13761_13835__$1);
var G__13843 = null;
var G__13844 = (0);
var G__13845 = (0);
seq__13761_13825 = G__13842;
chunk__13762_13826 = G__13843;
count__13763_13827 = G__13844;
i__13764_13828 = G__13845;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13759_13823);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"checks if it is players turn by",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__13785_13846 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13786_13847 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13786_13847);

try{var seq__13787_13848 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returning true if it is",((function (_STAR_parent_description_STAR__orig_val__13785_13846,_STAR_parent_description_STAR__temp_val__13786_13847,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13709_13792,_STAR_parent_description_STAR__temp_val__13710_13793,description__7524__auto___13791){
return (function (){
var value__7639__auto___13852 = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(1),(1));
if((!(value__7639__auto___13852))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto___13852 == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto___13852)),""].join('')));
} else {
}

var value__7639__auto__ = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(2),(2));
if((!(value__7639__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__13785_13846,_STAR_parent_description_STAR__temp_val__13786_13847,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13709_13792,_STAR_parent_description_STAR__temp_val__13710_13793,description__7524__auto___13791))
,false),speclj.components.new_characteristic.call(null,"returning false if it is not",((function (_STAR_parent_description_STAR__orig_val__13785_13846,_STAR_parent_description_STAR__temp_val__13786_13847,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13709_13792,_STAR_parent_description_STAR__temp_val__13710_13793,description__7524__auto___13791){
return (function (){
var value__7645__auto___13853 = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(1),(2));
if(value__7645__auto___13853){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7645__auto___13853 == null))?"nil":cljs.core.pr_str.call(null,value__7645__auto___13853))].join('')));
} else {
}

var value__7645__auto__ = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(2),(1));
if(value__7645__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7645__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__13785_13846,_STAR_parent_description_STAR__temp_val__13786_13847,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13709_13792,_STAR_parent_description_STAR__temp_val__13710_13793,description__7524__auto___13791))
,false),speclj.components.new_characteristic.call(null,"returning the player whose turn it is",((function (_STAR_parent_description_STAR__orig_val__13785_13846,_STAR_parent_description_STAR__temp_val__13786_13847,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13709_13792,_STAR_parent_description_STAR__temp_val__13710_13793,description__7524__auto___13791){
return (function (){
var expected__7651__auto___13854 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player1","player1",-1491573636),(1)], null);
var actual__7652__auto___13855 = tic_tac_toe.turn_system.get_current_player.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1","player1",-1491573636),(1),new cljs.core.Keyword(null,"ai","ai",760454697),(1)], null),(1));
if(cljs.core._EQ_.call(null,expected__7651__auto___13854,actual__7652__auto___13855)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___13854 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___13854)),speclj.platform.endl,"     got: ",(((actual__7652__auto___13855 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___13855))," (using =)"].join('')));
}

var expected__7651__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),(1)], null);
var actual__7652__auto__ = tic_tac_toe.turn_system.get_current_player.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1","player1",-1491573636),(1),new cljs.core.Keyword(null,"ai","ai",760454697),(1)], null),(2));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13785_13846,_STAR_parent_description_STAR__temp_val__13786_13847,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13709_13792,_STAR_parent_description_STAR__temp_val__13710_13793,description__7524__auto___13791))
,false)],null)));
var chunk__13788_13849 = null;
var count__13789_13850 = (0);
var i__13790_13851 = (0);
while(true){
if((i__13790_13851 < count__13789_13850)){
var component__7525__auto___13856 = cljs.core._nth.call(null,chunk__13788_13849,i__13790_13851);
speclj.components.install.call(null,component__7525__auto___13856,description__7524__auto____$1);


var G__13857 = seq__13787_13848;
var G__13858 = chunk__13788_13849;
var G__13859 = count__13789_13850;
var G__13860 = (i__13790_13851 + (1));
seq__13787_13848 = G__13857;
chunk__13788_13849 = G__13858;
count__13789_13850 = G__13859;
i__13790_13851 = G__13860;
continue;
} else {
var temp__5753__auto___13861 = cljs.core.seq.call(null,seq__13787_13848);
if(temp__5753__auto___13861){
var seq__13787_13862__$1 = temp__5753__auto___13861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13787_13862__$1)){
var c__5568__auto___13863 = cljs.core.chunk_first.call(null,seq__13787_13862__$1);
var G__13864 = cljs.core.chunk_rest.call(null,seq__13787_13862__$1);
var G__13865 = c__5568__auto___13863;
var G__13866 = cljs.core.count.call(null,c__5568__auto___13863);
var G__13867 = (0);
seq__13787_13848 = G__13864;
chunk__13788_13849 = G__13865;
count__13789_13850 = G__13866;
i__13790_13851 = G__13867;
continue;
} else {
var component__7525__auto___13868 = cljs.core.first.call(null,seq__13787_13862__$1);
speclj.components.install.call(null,component__7525__auto___13868,description__7524__auto____$1);


var G__13869 = cljs.core.next.call(null,seq__13787_13862__$1);
var G__13870 = null;
var G__13871 = (0);
var G__13872 = (0);
seq__13787_13848 = G__13869;
chunk__13788_13849 = G__13870;
count__13789_13850 = G__13871;
i__13790_13851 = G__13872;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13785_13846);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})()],null)));
var chunk__13712_13795 = null;
var count__13713_13796 = (0);
var i__13714_13797 = (0);
while(true){
if((i__13714_13797 < count__13713_13796)){
var component__7525__auto___13873 = cljs.core._nth.call(null,chunk__13712_13795,i__13714_13797);
speclj.components.install.call(null,component__7525__auto___13873,description__7524__auto___13791);


var G__13874 = seq__13711_13794;
var G__13875 = chunk__13712_13795;
var G__13876 = count__13713_13796;
var G__13877 = (i__13714_13797 + (1));
seq__13711_13794 = G__13874;
chunk__13712_13795 = G__13875;
count__13713_13796 = G__13876;
i__13714_13797 = G__13877;
continue;
} else {
var temp__5753__auto___13878 = cljs.core.seq.call(null,seq__13711_13794);
if(temp__5753__auto___13878){
var seq__13711_13879__$1 = temp__5753__auto___13878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13711_13879__$1)){
var c__5568__auto___13880 = cljs.core.chunk_first.call(null,seq__13711_13879__$1);
var G__13881 = cljs.core.chunk_rest.call(null,seq__13711_13879__$1);
var G__13882 = c__5568__auto___13880;
var G__13883 = cljs.core.count.call(null,c__5568__auto___13880);
var G__13884 = (0);
seq__13711_13794 = G__13881;
chunk__13712_13795 = G__13882;
count__13713_13796 = G__13883;
i__13714_13797 = G__13884;
continue;
} else {
var component__7525__auto___13885 = cljs.core.first.call(null,seq__13711_13879__$1);
speclj.components.install.call(null,component__7525__auto___13885,description__7524__auto___13791);


var G__13886 = cljs.core.next.call(null,seq__13711_13879__$1);
var G__13887 = null;
var G__13888 = (0);
var G__13889 = (0);
seq__13711_13794 = G__13886;
chunk__13712_13795 = G__13887;
count__13713_13796 = G__13888;
i__13714_13797 = G__13889;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13709_13792);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto___13791);
}


//# sourceMappingURL=turn_system_spec.js.map
