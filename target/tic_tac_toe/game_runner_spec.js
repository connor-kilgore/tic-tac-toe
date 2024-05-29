// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.game_runner_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.game_runner');
goog.require('tic_tac_toe.turn_system');
goog.require('tic_tac_toe.ui_interface');
goog.require('speclj.core');
tic_tac_toe.game_runner_spec.base_initialized_game = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(1),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.List.EMPTY], null);
var description__7524__auto___14575 = speclj.components.new_description.call(null,"Game Runner Module",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__14465_14576 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14466_14577 = description__7524__auto___14575;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14466_14577);

try{var seq__14467_14578 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"makes new match data",((function (_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575){
return (function (){
var expected__7651__auto__ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-1","player-1",-857374100),(1),new cljs.core.Keyword(null,"player-2","player-2",-227455796),(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(1),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__7652__auto__ = tic_tac_toe.game_runner.reset_game.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-1","player-1",-857374100),(1),new cljs.core.Keyword(null,"player-2","player-2",-227455796),(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(3),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575))
,false),(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"gives an end condition string by",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__14523_14582 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14524_14583 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14524_14583);

try{var seq__14525_14584 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"saying you tied when no winner",((function (_STAR_parent_description_STAR__orig_val__14523_14582,_STAR_parent_description_STAR__temp_val__14524_14583,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575){
return (function (){
var expected__7651__auto__ = "\nTie!";
var actual__7652__auto__ = tic_tac_toe.game_runner.get_end_condition_string.call(null,null,new cljs.core.PersistentArrayMap(null, 2, ["Player 1",(1),"AI",(2)], null));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14523_14582,_STAR_parent_description_STAR__temp_val__14524_14583,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575))
,false),speclj.components.new_characteristic.call(null,"saying who won if there is a winner",((function (_STAR_parent_description_STAR__orig_val__14523_14582,_STAR_parent_description_STAR__temp_val__14524_14583,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575){
return (function (){
var expected__7651__auto___14588 = "\nAI wins!";
var actual__7652__auto___14589 = tic_tac_toe.game_runner.get_end_condition_string.call(null,(2),new cljs.core.PersistentArrayMap(null, 2, ["Player 1",(1),"AI",(2)], null));
if(cljs.core._EQ_.call(null,expected__7651__auto___14588,actual__7652__auto___14589)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___14588 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___14588)),speclj.platform.endl,"     got: ",(((actual__7652__auto___14589 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___14589))," (using =)"].join('')));
}

var expected__7651__auto__ = "\nPlayer 1 wins!";
var actual__7652__auto__ = tic_tac_toe.game_runner.get_end_condition_string.call(null,(1),new cljs.core.PersistentArrayMap(null, 2, ["Player 1",(1),"AI",(2)], null));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14523_14582,_STAR_parent_description_STAR__temp_val__14524_14583,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575))
,false)],null)));
var chunk__14526_14585 = null;
var count__14527_14586 = (0);
var i__14528_14587 = (0);
while(true){
if((i__14528_14587 < count__14527_14586)){
var component__7525__auto___14590 = cljs.core._nth.call(null,chunk__14526_14585,i__14528_14587);
speclj.components.install.call(null,component__7525__auto___14590,description__7524__auto____$1);


var G__14591 = seq__14525_14584;
var G__14592 = chunk__14526_14585;
var G__14593 = count__14527_14586;
var G__14594 = (i__14528_14587 + (1));
seq__14525_14584 = G__14591;
chunk__14526_14585 = G__14592;
count__14527_14586 = G__14593;
i__14528_14587 = G__14594;
continue;
} else {
var temp__5753__auto___14595 = cljs.core.seq.call(null,seq__14525_14584);
if(temp__5753__auto___14595){
var seq__14525_14596__$1 = temp__5753__auto___14595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14525_14596__$1)){
var c__5568__auto___14597 = cljs.core.chunk_first.call(null,seq__14525_14596__$1);
var G__14598 = cljs.core.chunk_rest.call(null,seq__14525_14596__$1);
var G__14599 = c__5568__auto___14597;
var G__14600 = cljs.core.count.call(null,c__5568__auto___14597);
var G__14601 = (0);
seq__14525_14584 = G__14598;
chunk__14526_14585 = G__14599;
count__14527_14586 = G__14600;
i__14528_14587 = G__14601;
continue;
} else {
var component__7525__auto___14602 = cljs.core.first.call(null,seq__14525_14596__$1);
speclj.components.install.call(null,component__7525__auto___14602,description__7524__auto____$1);


var G__14603 = cljs.core.next.call(null,seq__14525_14596__$1);
var G__14604 = null;
var G__14605 = (0);
var G__14606 = (0);
seq__14525_14584 = G__14603;
chunk__14526_14585 = G__14604;
count__14527_14586 = G__14605;
i__14528_14587 = G__14606;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14523_14582);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"runs the game-loop",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__14529_14607 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14530_14608 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14530_14608);

try{var seq__14531_14609 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"until a tie",((function (_STAR_parent_description_STAR__orig_val__14529_14607,_STAR_parent_description_STAR__temp_val__14530_14608,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575){
return (function (){
var round_output_orig_val__14543 = tic_tac_toe.ui_interface.round_output;
var play_next_turn_orig_val__14544 = tic_tac_toe.turn_system.play_next_turn;
var round_output_temp_val__14545 = (function (_){
return null;
});
var play_next_turn_temp_val__14546 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.round_output = round_output_temp_val__14545);

(tic_tac_toe.turn_system.play_next_turn = play_next_turn_temp_val__14546);

try{var expected__7651__auto__ = null;
var actual__7652__auto__ = tic_tac_toe.game_runner.game_loop.call(null,tic_tac_toe.game_runner_spec.base_initialized_game);
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.turn_system.play_next_turn = play_next_turn_orig_val__14544);

(tic_tac_toe.ui_interface.round_output = round_output_orig_val__14543);
}});})(_STAR_parent_description_STAR__orig_val__14529_14607,_STAR_parent_description_STAR__temp_val__14530_14608,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575))
,false),speclj.components.new_characteristic.call(null,"until a win",((function (_STAR_parent_description_STAR__orig_val__14529_14607,_STAR_parent_description_STAR__temp_val__14530_14608,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575){
return (function (){
var round_output_orig_val__14547 = tic_tac_toe.ui_interface.round_output;
var play_next_turn_orig_val__14548 = tic_tac_toe.turn_system.play_next_turn;
var round_output_temp_val__14549 = (function (_){
return null;
});
var play_next_turn_temp_val__14550 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.round_output = round_output_temp_val__14549);

(tic_tac_toe.turn_system.play_next_turn = play_next_turn_temp_val__14550);

try{var expected__7651__auto__ = (1);
var actual__7652__auto__ = tic_tac_toe.game_runner.game_loop.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0)], null)));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.turn_system.play_next_turn = play_next_turn_orig_val__14548);

(tic_tac_toe.ui_interface.round_output = round_output_orig_val__14547);
}});})(_STAR_parent_description_STAR__orig_val__14529_14607,_STAR_parent_description_STAR__temp_val__14530_14608,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575))
,false)],null)));
var chunk__14532_14610 = null;
var count__14533_14611 = (0);
var i__14534_14612 = (0);
while(true){
if((i__14534_14612 < count__14533_14611)){
var component__7525__auto___14613 = cljs.core._nth.call(null,chunk__14532_14610,i__14534_14612);
speclj.components.install.call(null,component__7525__auto___14613,description__7524__auto____$1);


var G__14614 = seq__14531_14609;
var G__14615 = chunk__14532_14610;
var G__14616 = count__14533_14611;
var G__14617 = (i__14534_14612 + (1));
seq__14531_14609 = G__14614;
chunk__14532_14610 = G__14615;
count__14533_14611 = G__14616;
i__14534_14612 = G__14617;
continue;
} else {
var temp__5753__auto___14618 = cljs.core.seq.call(null,seq__14531_14609);
if(temp__5753__auto___14618){
var seq__14531_14619__$1 = temp__5753__auto___14618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14531_14619__$1)){
var c__5568__auto___14620 = cljs.core.chunk_first.call(null,seq__14531_14619__$1);
var G__14621 = cljs.core.chunk_rest.call(null,seq__14531_14619__$1);
var G__14622 = c__5568__auto___14620;
var G__14623 = cljs.core.count.call(null,c__5568__auto___14620);
var G__14624 = (0);
seq__14531_14609 = G__14621;
chunk__14532_14610 = G__14622;
count__14533_14611 = G__14623;
i__14534_14612 = G__14624;
continue;
} else {
var component__7525__auto___14625 = cljs.core.first.call(null,seq__14531_14619__$1);
speclj.components.install.call(null,component__7525__auto___14625,description__7524__auto____$1);


var G__14626 = cljs.core.next.call(null,seq__14531_14619__$1);
var G__14627 = null;
var G__14628 = (0);
var G__14629 = (0);
seq__14531_14609 = G__14626;
chunk__14532_14610 = G__14627;
count__14533_14611 = G__14628;
i__14534_14612 = G__14629;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14529_14607);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"parses arguments to set the",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__14551_14630 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14552_14631 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14552_14631);

try{var seq__14553_14632 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"valid arguments",((function (_STAR_parent_description_STAR__orig_val__14551_14630,_STAR_parent_description_STAR__temp_val__14552_14631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575){
return (function (){
var expected__7651__auto___14636 = new cljs.core.Keyword(null,"gui","gui",604532813);
var actual__7652__auto___14637 = tic_tac_toe.game_runner.get_valid_arg.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--gui"], null),tic_tac_toe.game_runner.ui_types);
if(cljs.core._EQ_.call(null,expected__7651__auto___14636,actual__7652__auto___14637)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___14636 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___14636)),speclj.platform.endl,"     got: ",(((actual__7652__auto___14637 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___14637))," (using =)"].join('')));
}

var expected__7651__auto___14638 = new cljs.core.Keyword(null,"archive","archive",1466927419);
var actual__7652__auto___14639 = tic_tac_toe.game_runner.get_valid_arg.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--archive","--gui"], null),tic_tac_toe.game_runner.ui_types);
if(cljs.core._EQ_.call(null,expected__7651__auto___14638,actual__7652__auto___14639)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___14638 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___14638)),speclj.platform.endl,"     got: ",(((actual__7652__auto___14639 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___14639))," (using =)"].join('')));
}

var expected__7651__auto__ = new cljs.core.Keyword(null,"tui","tui",-1217057309);
var actual__7652__auto__ = tic_tac_toe.game_runner.get_valid_arg.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--not-a-real-arg"], null),tic_tac_toe.game_runner.ui_types);
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14551_14630,_STAR_parent_description_STAR__temp_val__14552_14631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575))
,false),speclj.components.new_characteristic.call(null,"valid parameters",((function (_STAR_parent_description_STAR__orig_val__14551_14630,_STAR_parent_description_STAR__temp_val__14552_14631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575){
return (function (){
var expected__7651__auto___14640 = cljs.core.List.EMPTY;
var actual__7652__auto___14641 = tic_tac_toe.game_runner.get_valid_parameters.call(null,null);
if(cljs.core._EQ_.call(null,expected__7651__auto___14640,actual__7652__auto___14641)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___14640 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___14640)),speclj.platform.endl,"     got: ",(((actual__7652__auto___14641 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___14641))," (using =)"].join('')));
}

var expected__7651__auto___14642 = cljs.core.List.EMPTY;
var actual__7652__auto___14643 = tic_tac_toe.game_runner.get_valid_parameters.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--gui"], null));
if(cljs.core._EQ_.call(null,expected__7651__auto___14642,actual__7652__auto___14643)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___14642 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___14642)),speclj.platform.endl,"     got: ",(((actual__7652__auto___14643 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___14643))," (using =)"].join('')));
}

var expected__7651__auto___14644 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null);
var actual__7652__auto___14645 = tic_tac_toe.game_runner.get_valid_parameters.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null));
if(cljs.core._EQ_.call(null,expected__7651__auto___14644,actual__7652__auto___14645)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___14644 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___14644)),speclj.platform.endl,"     got: ",(((actual__7652__auto___14645 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___14645))," (using =)"].join('')));
}

var expected__7651__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null);
var actual__7652__auto__ = tic_tac_toe.game_runner.get_valid_parameters.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--archive","test.txt"], null));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14551_14630,_STAR_parent_description_STAR__temp_val__14552_14631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575))
,false),speclj.components.new_characteristic.call(null,"ui",((function (_STAR_parent_description_STAR__orig_val__14551_14630,_STAR_parent_description_STAR__temp_val__14552_14631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575){
return (function (){
var expected__7651__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406));
var actual__7652__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--gui"], null));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14551_14630,_STAR_parent_description_STAR__temp_val__14552_14631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575))
,false),speclj.components.new_characteristic.call(null,"save-location",((function (_STAR_parent_description_STAR__orig_val__14551_14630,_STAR_parent_description_STAR__temp_val__14552_14631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575){
return (function (){
var expected__7651__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"psqldb","psqldb",-581718637));
var actual__7652__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--psqldb"], null));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14551_14630,_STAR_parent_description_STAR__temp_val__14552_14631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575))
,false),speclj.components.new_characteristic.call(null,"archive",((function (_STAR_parent_description_STAR__orig_val__14551_14630,_STAR_parent_description_STAR__temp_val__14552_14631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575){
return (function (){
var expected__7651__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"archive","archive",1466927419)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406)),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null));
var actual__7652__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--archive","test.txt"], null));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14551_14630,_STAR_parent_description_STAR__temp_val__14552_14631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575))
,false),speclj.components.new_characteristic.call(null,"any arguments",((function (_STAR_parent_description_STAR__orig_val__14551_14630,_STAR_parent_description_STAR__temp_val__14552_14631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575){
return (function (){
var expected__7651__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"psqldb","psqldb",-581718637)),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null));
var actual__7652__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--psqldb","--gui","--not-real","--archive","test.txt"], null));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14551_14630,_STAR_parent_description_STAR__temp_val__14552_14631,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575))
,false)],null)));
var chunk__14554_14633 = null;
var count__14555_14634 = (0);
var i__14556_14635 = (0);
while(true){
if((i__14556_14635 < count__14555_14634)){
var component__7525__auto___14646 = cljs.core._nth.call(null,chunk__14554_14633,i__14556_14635);
speclj.components.install.call(null,component__7525__auto___14646,description__7524__auto____$1);


var G__14647 = seq__14553_14632;
var G__14648 = chunk__14554_14633;
var G__14649 = count__14555_14634;
var G__14650 = (i__14556_14635 + (1));
seq__14553_14632 = G__14647;
chunk__14554_14633 = G__14648;
count__14555_14634 = G__14649;
i__14556_14635 = G__14650;
continue;
} else {
var temp__5753__auto___14651 = cljs.core.seq.call(null,seq__14553_14632);
if(temp__5753__auto___14651){
var seq__14553_14652__$1 = temp__5753__auto___14651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14553_14652__$1)){
var c__5568__auto___14653 = cljs.core.chunk_first.call(null,seq__14553_14652__$1);
var G__14654 = cljs.core.chunk_rest.call(null,seq__14553_14652__$1);
var G__14655 = c__5568__auto___14653;
var G__14656 = cljs.core.count.call(null,c__5568__auto___14653);
var G__14657 = (0);
seq__14553_14632 = G__14654;
chunk__14554_14633 = G__14655;
count__14555_14634 = G__14656;
i__14556_14635 = G__14657;
continue;
} else {
var component__7525__auto___14658 = cljs.core.first.call(null,seq__14553_14652__$1);
speclj.components.install.call(null,component__7525__auto___14658,description__7524__auto____$1);


var G__14659 = cljs.core.next.call(null,seq__14553_14652__$1);
var G__14660 = null;
var G__14661 = (0);
var G__14662 = (0);
seq__14553_14632 = G__14659;
chunk__14554_14633 = G__14660;
count__14555_14634 = G__14661;
i__14556_14635 = G__14662;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14551_14630);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"plays a single round by",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__14557_14663 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14558_14664 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14558_14664);

try{var seq__14559_14665 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"Then returns a winner if there is one",((function (_STAR_parent_description_STAR__orig_val__14557_14663,_STAR_parent_description_STAR__temp_val__14558_14664,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575){
return (function (){
var play_next_turn_orig_val__14569 = tic_tac_toe.turn_system.play_next_turn;
var round_output_orig_val__14570 = tic_tac_toe.ui_interface.round_output;
var play_next_turn_temp_val__14571 = (function (_){
return null;
});
var round_output_temp_val__14572 = (function (_){
return null;
});
(tic_tac_toe.turn_system.play_next_turn = play_next_turn_temp_val__14571);

(tic_tac_toe.ui_interface.round_output = round_output_temp_val__14572);

try{var expected__7651__auto__ = (1);
var actual__7652__auto__ = tic_tac_toe.game_runner.game_round.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0)], null)));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.ui_interface.round_output = round_output_orig_val__14570);

(tic_tac_toe.turn_system.play_next_turn = play_next_turn_orig_val__14569);
}});})(_STAR_parent_description_STAR__orig_val__14557_14663,_STAR_parent_description_STAR__temp_val__14558_14664,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575))
,false),speclj.components.new_characteristic.call(null,"Then returns nil if there are no moves left",((function (_STAR_parent_description_STAR__orig_val__14557_14663,_STAR_parent_description_STAR__temp_val__14558_14664,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575){
return (function (){
var round_output_orig_val__14573 = tic_tac_toe.ui_interface.round_output;
var round_output_temp_val__14574 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.round_output = round_output_temp_val__14574);

try{var expected__7651__auto__ = null;
var actual__7652__auto__ = tic_tac_toe.game_runner.game_round.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"round","round",2009433328),(10)));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.ui_interface.round_output = round_output_orig_val__14573);
}});})(_STAR_parent_description_STAR__orig_val__14557_14663,_STAR_parent_description_STAR__temp_val__14558_14664,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14465_14576,_STAR_parent_description_STAR__temp_val__14466_14577,description__7524__auto___14575))
,false)],null)));
var chunk__14560_14666 = null;
var count__14561_14667 = (0);
var i__14562_14668 = (0);
while(true){
if((i__14562_14668 < count__14561_14667)){
var component__7525__auto___14669 = cljs.core._nth.call(null,chunk__14560_14666,i__14562_14668);
speclj.components.install.call(null,component__7525__auto___14669,description__7524__auto____$1);


var G__14670 = seq__14559_14665;
var G__14671 = chunk__14560_14666;
var G__14672 = count__14561_14667;
var G__14673 = (i__14562_14668 + (1));
seq__14559_14665 = G__14670;
chunk__14560_14666 = G__14671;
count__14561_14667 = G__14672;
i__14562_14668 = G__14673;
continue;
} else {
var temp__5753__auto___14674 = cljs.core.seq.call(null,seq__14559_14665);
if(temp__5753__auto___14674){
var seq__14559_14675__$1 = temp__5753__auto___14674;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14559_14675__$1)){
var c__5568__auto___14676 = cljs.core.chunk_first.call(null,seq__14559_14675__$1);
var G__14677 = cljs.core.chunk_rest.call(null,seq__14559_14675__$1);
var G__14678 = c__5568__auto___14676;
var G__14679 = cljs.core.count.call(null,c__5568__auto___14676);
var G__14680 = (0);
seq__14559_14665 = G__14677;
chunk__14560_14666 = G__14678;
count__14561_14667 = G__14679;
i__14562_14668 = G__14680;
continue;
} else {
var component__7525__auto___14681 = cljs.core.first.call(null,seq__14559_14675__$1);
speclj.components.install.call(null,component__7525__auto___14681,description__7524__auto____$1);


var G__14682 = cljs.core.next.call(null,seq__14559_14675__$1);
var G__14683 = null;
var G__14684 = (0);
var G__14685 = (0);
seq__14559_14665 = G__14682;
chunk__14560_14666 = G__14683;
count__14561_14667 = G__14684;
i__14562_14668 = G__14685;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14557_14663);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})()],null)));
var chunk__14468_14579 = null;
var count__14469_14580 = (0);
var i__14470_14581 = (0);
while(true){
if((i__14470_14581 < count__14469_14580)){
var component__7525__auto___14686 = cljs.core._nth.call(null,chunk__14468_14579,i__14470_14581);
speclj.components.install.call(null,component__7525__auto___14686,description__7524__auto___14575);


var G__14687 = seq__14467_14578;
var G__14688 = chunk__14468_14579;
var G__14689 = count__14469_14580;
var G__14690 = (i__14470_14581 + (1));
seq__14467_14578 = G__14687;
chunk__14468_14579 = G__14688;
count__14469_14580 = G__14689;
i__14470_14581 = G__14690;
continue;
} else {
var temp__5753__auto___14691 = cljs.core.seq.call(null,seq__14467_14578);
if(temp__5753__auto___14691){
var seq__14467_14692__$1 = temp__5753__auto___14691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14467_14692__$1)){
var c__5568__auto___14693 = cljs.core.chunk_first.call(null,seq__14467_14692__$1);
var G__14694 = cljs.core.chunk_rest.call(null,seq__14467_14692__$1);
var G__14695 = c__5568__auto___14693;
var G__14696 = cljs.core.count.call(null,c__5568__auto___14693);
var G__14697 = (0);
seq__14467_14578 = G__14694;
chunk__14468_14579 = G__14695;
count__14469_14580 = G__14696;
i__14470_14581 = G__14697;
continue;
} else {
var component__7525__auto___14698 = cljs.core.first.call(null,seq__14467_14692__$1);
speclj.components.install.call(null,component__7525__auto___14698,description__7524__auto___14575);


var G__14699 = cljs.core.next.call(null,seq__14467_14692__$1);
var G__14700 = null;
var G__14701 = (0);
var G__14702 = (0);
seq__14467_14578 = G__14699;
chunk__14468_14579 = G__14700;
count__14469_14580 = G__14701;
i__14470_14581 = G__14702;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14465_14576);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto___14575);
}


//# sourceMappingURL=game_runner_spec.js.map
