// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.game_runner_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.game_runner');
goog.require('tic_tac_toe.turn_system');
goog.require('tic_tac_toe.ui_interface');
goog.require('speclj.core');
tic_tac_toe.game_runner_spec.base_initialized_game = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(1),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.List.EMPTY], null);
var description__7669__auto___9124 = speclj.components.new_description.call(null,"Game Runner",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__9014_9125 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9015_9126 = description__7669__auto___9124;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9015_9126);

try{var seq__9016_9127 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"makes new match data",((function (_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124){
return (function (){
var expected__7802__auto__ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-1","player-1",-857374100),(1),new cljs.core.Keyword(null,"player-2","player-2",-227455796),(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(1),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__7803__auto__ = tic_tac_toe.game_runner.reset_game.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-1","player-1",-857374100),(1),new cljs.core.Keyword(null,"player-2","player-2",-227455796),(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(3),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124))
,false),(function (){var description__7669__auto____$1 = speclj.components.new_description.call(null,"gives an end condition string by",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__9072_9131 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9073_9132 = description__7669__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9073_9132);

try{var seq__9074_9133 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"saying you tied when no winner",((function (_STAR_parent_description_STAR__orig_val__9072_9131,_STAR_parent_description_STAR__temp_val__9073_9132,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124){
return (function (){
var expected__7802__auto__ = "\nTie!";
var actual__7803__auto__ = tic_tac_toe.game_runner.get_end_condition_string.call(null,null,new cljs.core.PersistentArrayMap(null, 2, ["Player 1",(1),"AI",(2)], null));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9072_9131,_STAR_parent_description_STAR__temp_val__9073_9132,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124))
,false),speclj.components.new_characteristic.call(null,"saying who won if there is a winner",((function (_STAR_parent_description_STAR__orig_val__9072_9131,_STAR_parent_description_STAR__temp_val__9073_9132,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124){
return (function (){
var expected__7802__auto___9137 = "\nAI wins!";
var actual__7803__auto___9138 = tic_tac_toe.game_runner.get_end_condition_string.call(null,(2),new cljs.core.PersistentArrayMap(null, 2, ["Player 1",(1),"AI",(2)], null));
if(cljs.core._EQ_.call(null,expected__7802__auto___9137,actual__7803__auto___9138)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___9137 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___9137)),speclj.platform.endl,"     got: ",(((actual__7803__auto___9138 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___9138))," (using =)"].join('')));
}

var expected__7802__auto__ = "\nPlayer 1 wins!";
var actual__7803__auto__ = tic_tac_toe.game_runner.get_end_condition_string.call(null,(1),new cljs.core.PersistentArrayMap(null, 2, ["Player 1",(1),"AI",(2)], null));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9072_9131,_STAR_parent_description_STAR__temp_val__9073_9132,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124))
,false)],null)));
var chunk__9075_9134 = null;
var count__9076_9135 = (0);
var i__9077_9136 = (0);
while(true){
if((i__9077_9136 < count__9076_9135)){
var component__7670__auto___9139 = cljs.core._nth.call(null,chunk__9075_9134,i__9077_9136);
speclj.components.install.call(null,component__7670__auto___9139,description__7669__auto____$1);


var G__9140 = seq__9074_9133;
var G__9141 = chunk__9075_9134;
var G__9142 = count__9076_9135;
var G__9143 = (i__9077_9136 + (1));
seq__9074_9133 = G__9140;
chunk__9075_9134 = G__9141;
count__9076_9135 = G__9142;
i__9077_9136 = G__9143;
continue;
} else {
var temp__5753__auto___9144 = cljs.core.seq.call(null,seq__9074_9133);
if(temp__5753__auto___9144){
var seq__9074_9145__$1 = temp__5753__auto___9144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9074_9145__$1)){
var c__5568__auto___9146 = cljs.core.chunk_first.call(null,seq__9074_9145__$1);
var G__9147 = cljs.core.chunk_rest.call(null,seq__9074_9145__$1);
var G__9148 = c__5568__auto___9146;
var G__9149 = cljs.core.count.call(null,c__5568__auto___9146);
var G__9150 = (0);
seq__9074_9133 = G__9147;
chunk__9075_9134 = G__9148;
count__9076_9135 = G__9149;
i__9077_9136 = G__9150;
continue;
} else {
var component__7670__auto___9151 = cljs.core.first.call(null,seq__9074_9145__$1);
speclj.components.install.call(null,component__7670__auto___9151,description__7669__auto____$1);


var G__9152 = cljs.core.next.call(null,seq__9074_9145__$1);
var G__9153 = null;
var G__9154 = (0);
var G__9155 = (0);
seq__9074_9133 = G__9152;
chunk__9075_9134 = G__9153;
count__9076_9135 = G__9154;
i__9077_9136 = G__9155;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9072_9131);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto____$1);
}

return description__7669__auto____$1;
})(),(function (){var description__7669__auto____$1 = speclj.components.new_description.call(null,"runs the game-loop",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__9078_9156 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9079_9157 = description__7669__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9079_9157);

try{var seq__9080_9158 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"until a tie",((function (_STAR_parent_description_STAR__orig_val__9078_9156,_STAR_parent_description_STAR__temp_val__9079_9157,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124){
return (function (){
var round_output_orig_val__9092 = tic_tac_toe.ui_interface.round_output;
var play_next_turn_orig_val__9093 = tic_tac_toe.turn_system.play_next_turn;
var round_output_temp_val__9094 = (function (_){
return null;
});
var play_next_turn_temp_val__9095 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.round_output = round_output_temp_val__9094);

(tic_tac_toe.turn_system.play_next_turn = play_next_turn_temp_val__9095);

try{var expected__7802__auto__ = null;
var actual__7803__auto__ = tic_tac_toe.game_runner.game_loop.call(null,tic_tac_toe.game_runner_spec.base_initialized_game);
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.turn_system.play_next_turn = play_next_turn_orig_val__9093);

(tic_tac_toe.ui_interface.round_output = round_output_orig_val__9092);
}});})(_STAR_parent_description_STAR__orig_val__9078_9156,_STAR_parent_description_STAR__temp_val__9079_9157,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124))
,false),speclj.components.new_characteristic.call(null,"until a win",((function (_STAR_parent_description_STAR__orig_val__9078_9156,_STAR_parent_description_STAR__temp_val__9079_9157,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124){
return (function (){
var round_output_orig_val__9096 = tic_tac_toe.ui_interface.round_output;
var play_next_turn_orig_val__9097 = tic_tac_toe.turn_system.play_next_turn;
var round_output_temp_val__9098 = (function (_){
return null;
});
var play_next_turn_temp_val__9099 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.round_output = round_output_temp_val__9098);

(tic_tac_toe.turn_system.play_next_turn = play_next_turn_temp_val__9099);

try{var expected__7802__auto__ = (1);
var actual__7803__auto__ = tic_tac_toe.game_runner.game_loop.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0)], null)));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.turn_system.play_next_turn = play_next_turn_orig_val__9097);

(tic_tac_toe.ui_interface.round_output = round_output_orig_val__9096);
}});})(_STAR_parent_description_STAR__orig_val__9078_9156,_STAR_parent_description_STAR__temp_val__9079_9157,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124))
,false)],null)));
var chunk__9081_9159 = null;
var count__9082_9160 = (0);
var i__9083_9161 = (0);
while(true){
if((i__9083_9161 < count__9082_9160)){
var component__7670__auto___9162 = cljs.core._nth.call(null,chunk__9081_9159,i__9083_9161);
speclj.components.install.call(null,component__7670__auto___9162,description__7669__auto____$1);


var G__9163 = seq__9080_9158;
var G__9164 = chunk__9081_9159;
var G__9165 = count__9082_9160;
var G__9166 = (i__9083_9161 + (1));
seq__9080_9158 = G__9163;
chunk__9081_9159 = G__9164;
count__9082_9160 = G__9165;
i__9083_9161 = G__9166;
continue;
} else {
var temp__5753__auto___9167 = cljs.core.seq.call(null,seq__9080_9158);
if(temp__5753__auto___9167){
var seq__9080_9168__$1 = temp__5753__auto___9167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9080_9168__$1)){
var c__5568__auto___9169 = cljs.core.chunk_first.call(null,seq__9080_9168__$1);
var G__9170 = cljs.core.chunk_rest.call(null,seq__9080_9168__$1);
var G__9171 = c__5568__auto___9169;
var G__9172 = cljs.core.count.call(null,c__5568__auto___9169);
var G__9173 = (0);
seq__9080_9158 = G__9170;
chunk__9081_9159 = G__9171;
count__9082_9160 = G__9172;
i__9083_9161 = G__9173;
continue;
} else {
var component__7670__auto___9174 = cljs.core.first.call(null,seq__9080_9168__$1);
speclj.components.install.call(null,component__7670__auto___9174,description__7669__auto____$1);


var G__9175 = cljs.core.next.call(null,seq__9080_9168__$1);
var G__9176 = null;
var G__9177 = (0);
var G__9178 = (0);
seq__9080_9158 = G__9175;
chunk__9081_9159 = G__9176;
count__9082_9160 = G__9177;
i__9083_9161 = G__9178;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9078_9156);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto____$1);
}

return description__7669__auto____$1;
})(),(function (){var description__7669__auto____$1 = speclj.components.new_description.call(null,"parses arguments to set the",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__9100_9179 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9101_9180 = description__7669__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9101_9180);

try{var seq__9102_9181 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"valid arguments",((function (_STAR_parent_description_STAR__orig_val__9100_9179,_STAR_parent_description_STAR__temp_val__9101_9180,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124){
return (function (){
var expected__7802__auto___9185 = new cljs.core.Keyword(null,"gui","gui",604532813);
var actual__7803__auto___9186 = tic_tac_toe.game_runner.get_valid_arg.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--gui"], null),tic_tac_toe.game_runner.ui_types);
if(cljs.core._EQ_.call(null,expected__7802__auto___9185,actual__7803__auto___9186)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___9185 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___9185)),speclj.platform.endl,"     got: ",(((actual__7803__auto___9186 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___9186))," (using =)"].join('')));
}

var expected__7802__auto___9187 = new cljs.core.Keyword(null,"archive","archive",1466927419);
var actual__7803__auto___9188 = tic_tac_toe.game_runner.get_valid_arg.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--archive","--gui"], null),tic_tac_toe.game_runner.ui_types);
if(cljs.core._EQ_.call(null,expected__7802__auto___9187,actual__7803__auto___9188)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___9187 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___9187)),speclj.platform.endl,"     got: ",(((actual__7803__auto___9188 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___9188))," (using =)"].join('')));
}

var expected__7802__auto__ = new cljs.core.Keyword(null,"tui","tui",-1217057309);
var actual__7803__auto__ = tic_tac_toe.game_runner.get_valid_arg.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--not-a-real-arg"], null),tic_tac_toe.game_runner.ui_types);
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9100_9179,_STAR_parent_description_STAR__temp_val__9101_9180,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124))
,false),speclj.components.new_characteristic.call(null,"valid parameters",((function (_STAR_parent_description_STAR__orig_val__9100_9179,_STAR_parent_description_STAR__temp_val__9101_9180,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124){
return (function (){
var expected__7802__auto___9189 = cljs.core.List.EMPTY;
var actual__7803__auto___9190 = tic_tac_toe.game_runner.get_valid_parameters.call(null,null);
if(cljs.core._EQ_.call(null,expected__7802__auto___9189,actual__7803__auto___9190)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___9189 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___9189)),speclj.platform.endl,"     got: ",(((actual__7803__auto___9190 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___9190))," (using =)"].join('')));
}

var expected__7802__auto___9191 = cljs.core.List.EMPTY;
var actual__7803__auto___9192 = tic_tac_toe.game_runner.get_valid_parameters.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--gui"], null));
if(cljs.core._EQ_.call(null,expected__7802__auto___9191,actual__7803__auto___9192)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___9191 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___9191)),speclj.platform.endl,"     got: ",(((actual__7803__auto___9192 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___9192))," (using =)"].join('')));
}

var expected__7802__auto___9193 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null);
var actual__7803__auto___9194 = tic_tac_toe.game_runner.get_valid_parameters.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null));
if(cljs.core._EQ_.call(null,expected__7802__auto___9193,actual__7803__auto___9194)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___9193 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___9193)),speclj.platform.endl,"     got: ",(((actual__7803__auto___9194 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___9194))," (using =)"].join('')));
}

var expected__7802__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null);
var actual__7803__auto__ = tic_tac_toe.game_runner.get_valid_parameters.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--archive","test.txt"], null));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9100_9179,_STAR_parent_description_STAR__temp_val__9101_9180,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124))
,false),speclj.components.new_characteristic.call(null,"ui",((function (_STAR_parent_description_STAR__orig_val__9100_9179,_STAR_parent_description_STAR__temp_val__9101_9180,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124){
return (function (){
var expected__7802__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406));
var actual__7803__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--gui"], null));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9100_9179,_STAR_parent_description_STAR__temp_val__9101_9180,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124))
,false),speclj.components.new_characteristic.call(null,"save-location",((function (_STAR_parent_description_STAR__orig_val__9100_9179,_STAR_parent_description_STAR__temp_val__9101_9180,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124){
return (function (){
var expected__7802__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"psqldb","psqldb",-581718637));
var actual__7803__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--psqldb"], null));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9100_9179,_STAR_parent_description_STAR__temp_val__9101_9180,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124))
,false),speclj.components.new_characteristic.call(null,"archive",((function (_STAR_parent_description_STAR__orig_val__9100_9179,_STAR_parent_description_STAR__temp_val__9101_9180,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124){
return (function (){
var expected__7802__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"archive","archive",1466927419)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406)),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null));
var actual__7803__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--archive","test.txt"], null));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9100_9179,_STAR_parent_description_STAR__temp_val__9101_9180,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124))
,false),speclj.components.new_characteristic.call(null,"any arguments",((function (_STAR_parent_description_STAR__orig_val__9100_9179,_STAR_parent_description_STAR__temp_val__9101_9180,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124){
return (function (){
var expected__7802__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"psqldb","psqldb",-581718637)),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null));
var actual__7803__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--psqldb","--gui","--not-real","--archive","test.txt"], null));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9100_9179,_STAR_parent_description_STAR__temp_val__9101_9180,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124))
,false)],null)));
var chunk__9103_9182 = null;
var count__9104_9183 = (0);
var i__9105_9184 = (0);
while(true){
if((i__9105_9184 < count__9104_9183)){
var component__7670__auto___9195 = cljs.core._nth.call(null,chunk__9103_9182,i__9105_9184);
speclj.components.install.call(null,component__7670__auto___9195,description__7669__auto____$1);


var G__9196 = seq__9102_9181;
var G__9197 = chunk__9103_9182;
var G__9198 = count__9104_9183;
var G__9199 = (i__9105_9184 + (1));
seq__9102_9181 = G__9196;
chunk__9103_9182 = G__9197;
count__9104_9183 = G__9198;
i__9105_9184 = G__9199;
continue;
} else {
var temp__5753__auto___9200 = cljs.core.seq.call(null,seq__9102_9181);
if(temp__5753__auto___9200){
var seq__9102_9201__$1 = temp__5753__auto___9200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9102_9201__$1)){
var c__5568__auto___9202 = cljs.core.chunk_first.call(null,seq__9102_9201__$1);
var G__9203 = cljs.core.chunk_rest.call(null,seq__9102_9201__$1);
var G__9204 = c__5568__auto___9202;
var G__9205 = cljs.core.count.call(null,c__5568__auto___9202);
var G__9206 = (0);
seq__9102_9181 = G__9203;
chunk__9103_9182 = G__9204;
count__9104_9183 = G__9205;
i__9105_9184 = G__9206;
continue;
} else {
var component__7670__auto___9207 = cljs.core.first.call(null,seq__9102_9201__$1);
speclj.components.install.call(null,component__7670__auto___9207,description__7669__auto____$1);


var G__9208 = cljs.core.next.call(null,seq__9102_9201__$1);
var G__9209 = null;
var G__9210 = (0);
var G__9211 = (0);
seq__9102_9181 = G__9208;
chunk__9103_9182 = G__9209;
count__9104_9183 = G__9210;
i__9105_9184 = G__9211;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9100_9179);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto____$1);
}

return description__7669__auto____$1;
})(),(function (){var description__7669__auto____$1 = speclj.components.new_description.call(null,"plays a single round by",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__9106_9212 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9107_9213 = description__7669__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9107_9213);

try{var seq__9108_9214 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"Then returns a winner if there is one",((function (_STAR_parent_description_STAR__orig_val__9106_9212,_STAR_parent_description_STAR__temp_val__9107_9213,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124){
return (function (){
var play_next_turn_orig_val__9118 = tic_tac_toe.turn_system.play_next_turn;
var round_output_orig_val__9119 = tic_tac_toe.ui_interface.round_output;
var play_next_turn_temp_val__9120 = (function (_){
return null;
});
var round_output_temp_val__9121 = (function (_){
return null;
});
(tic_tac_toe.turn_system.play_next_turn = play_next_turn_temp_val__9120);

(tic_tac_toe.ui_interface.round_output = round_output_temp_val__9121);

try{var expected__7802__auto__ = (1);
var actual__7803__auto__ = tic_tac_toe.game_runner.game_round.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0)], null)));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.ui_interface.round_output = round_output_orig_val__9119);

(tic_tac_toe.turn_system.play_next_turn = play_next_turn_orig_val__9118);
}});})(_STAR_parent_description_STAR__orig_val__9106_9212,_STAR_parent_description_STAR__temp_val__9107_9213,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124))
,false),speclj.components.new_characteristic.call(null,"Then returns nil if there are no moves left",((function (_STAR_parent_description_STAR__orig_val__9106_9212,_STAR_parent_description_STAR__temp_val__9107_9213,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124){
return (function (){
var round_output_orig_val__9122 = tic_tac_toe.ui_interface.round_output;
var round_output_temp_val__9123 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.round_output = round_output_temp_val__9123);

try{var expected__7802__auto__ = null;
var actual__7803__auto__ = tic_tac_toe.game_runner.game_round.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"round","round",2009433328),(10)));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.ui_interface.round_output = round_output_orig_val__9122);
}});})(_STAR_parent_description_STAR__orig_val__9106_9212,_STAR_parent_description_STAR__temp_val__9107_9213,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__9014_9125,_STAR_parent_description_STAR__temp_val__9015_9126,description__7669__auto___9124))
,false)],null)));
var chunk__9109_9215 = null;
var count__9110_9216 = (0);
var i__9111_9217 = (0);
while(true){
if((i__9111_9217 < count__9110_9216)){
var component__7670__auto___9218 = cljs.core._nth.call(null,chunk__9109_9215,i__9111_9217);
speclj.components.install.call(null,component__7670__auto___9218,description__7669__auto____$1);


var G__9219 = seq__9108_9214;
var G__9220 = chunk__9109_9215;
var G__9221 = count__9110_9216;
var G__9222 = (i__9111_9217 + (1));
seq__9108_9214 = G__9219;
chunk__9109_9215 = G__9220;
count__9110_9216 = G__9221;
i__9111_9217 = G__9222;
continue;
} else {
var temp__5753__auto___9223 = cljs.core.seq.call(null,seq__9108_9214);
if(temp__5753__auto___9223){
var seq__9108_9224__$1 = temp__5753__auto___9223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9108_9224__$1)){
var c__5568__auto___9225 = cljs.core.chunk_first.call(null,seq__9108_9224__$1);
var G__9226 = cljs.core.chunk_rest.call(null,seq__9108_9224__$1);
var G__9227 = c__5568__auto___9225;
var G__9228 = cljs.core.count.call(null,c__5568__auto___9225);
var G__9229 = (0);
seq__9108_9214 = G__9226;
chunk__9109_9215 = G__9227;
count__9110_9216 = G__9228;
i__9111_9217 = G__9229;
continue;
} else {
var component__7670__auto___9230 = cljs.core.first.call(null,seq__9108_9224__$1);
speclj.components.install.call(null,component__7670__auto___9230,description__7669__auto____$1);


var G__9231 = cljs.core.next.call(null,seq__9108_9224__$1);
var G__9232 = null;
var G__9233 = (0);
var G__9234 = (0);
seq__9108_9214 = G__9231;
chunk__9109_9215 = G__9232;
count__9110_9216 = G__9233;
i__9111_9217 = G__9234;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9106_9212);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto____$1);
}

return description__7669__auto____$1;
})()],null)));
var chunk__9017_9128 = null;
var count__9018_9129 = (0);
var i__9019_9130 = (0);
while(true){
if((i__9019_9130 < count__9018_9129)){
var component__7670__auto___9235 = cljs.core._nth.call(null,chunk__9017_9128,i__9019_9130);
speclj.components.install.call(null,component__7670__auto___9235,description__7669__auto___9124);


var G__9236 = seq__9016_9127;
var G__9237 = chunk__9017_9128;
var G__9238 = count__9018_9129;
var G__9239 = (i__9019_9130 + (1));
seq__9016_9127 = G__9236;
chunk__9017_9128 = G__9237;
count__9018_9129 = G__9238;
i__9019_9130 = G__9239;
continue;
} else {
var temp__5753__auto___9240 = cljs.core.seq.call(null,seq__9016_9127);
if(temp__5753__auto___9240){
var seq__9016_9241__$1 = temp__5753__auto___9240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9016_9241__$1)){
var c__5568__auto___9242 = cljs.core.chunk_first.call(null,seq__9016_9241__$1);
var G__9243 = cljs.core.chunk_rest.call(null,seq__9016_9241__$1);
var G__9244 = c__5568__auto___9242;
var G__9245 = cljs.core.count.call(null,c__5568__auto___9242);
var G__9246 = (0);
seq__9016_9127 = G__9243;
chunk__9017_9128 = G__9244;
count__9018_9129 = G__9245;
i__9019_9130 = G__9246;
continue;
} else {
var component__7670__auto___9247 = cljs.core.first.call(null,seq__9016_9241__$1);
speclj.components.install.call(null,component__7670__auto___9247,description__7669__auto___9124);


var G__9248 = cljs.core.next.call(null,seq__9016_9241__$1);
var G__9249 = null;
var G__9250 = (0);
var G__9251 = (0);
seq__9016_9127 = G__9248;
chunk__9017_9128 = G__9249;
count__9018_9129 = G__9250;
i__9019_9130 = G__9251;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9014_9125);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto___9124);
}


//# sourceMappingURL=game_runner_spec.js.map
