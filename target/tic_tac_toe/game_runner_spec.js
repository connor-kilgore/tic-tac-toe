// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.game_runner_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.game_runner');
goog.require('tic_tac_toe.turn_system');
goog.require('tic_tac_toe.ui_interface');
goog.require('speclj.core');
tic_tac_toe.game_runner_spec.base_initialized_game = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(1),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.List.EMPTY], null);
var description__7511__auto___22424 = speclj.components.new_description.call(null,"Game Runner Module",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__22314_22425 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22315_22426 = description__7511__auto___22424;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22315_22426);

try{var seq__22316_22427 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"makes new match data",((function (_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424){
return (function (){
var expected__7644__auto__ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-1","player-1",-857374100),(1),new cljs.core.Keyword(null,"player-2","player-2",-227455796),(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(1),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__7645__auto__ = tic_tac_toe.game_runner.reset_game.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-1","player-1",-857374100),(1),new cljs.core.Keyword(null,"player-2","player-2",-227455796),(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(3),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424))
,false),(function (){var description__7511__auto____$1 = speclj.components.new_description.call(null,"gives an end condition string by",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__22372_22431 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22373_22432 = description__7511__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22373_22432);

try{var seq__22374_22433 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"saying you tied when no winner",((function (_STAR_parent_description_STAR__orig_val__22372_22431,_STAR_parent_description_STAR__temp_val__22373_22432,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424){
return (function (){
var expected__7644__auto__ = "\nTie!";
var actual__7645__auto__ = tic_tac_toe.game_runner.get_end_condition_string.call(null,null,new cljs.core.PersistentArrayMap(null, 2, ["Player 1",(1),"AI",(2)], null));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22372_22431,_STAR_parent_description_STAR__temp_val__22373_22432,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424))
,false),speclj.components.new_characteristic.call(null,"saying who won if there is a winner",((function (_STAR_parent_description_STAR__orig_val__22372_22431,_STAR_parent_description_STAR__temp_val__22373_22432,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424){
return (function (){
var expected__7644__auto___22437 = "\nAI wins!";
var actual__7645__auto___22438 = tic_tac_toe.game_runner.get_end_condition_string.call(null,(2),new cljs.core.PersistentArrayMap(null, 2, ["Player 1",(1),"AI",(2)], null));
if(cljs.core._EQ_.call(null,expected__7644__auto___22437,actual__7645__auto___22438)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___22437 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___22437)),speclj.platform.endl,"     got: ",(((actual__7645__auto___22438 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___22438))," (using =)"].join('')));
}

var expected__7644__auto__ = "\nPlayer 1 wins!";
var actual__7645__auto__ = tic_tac_toe.game_runner.get_end_condition_string.call(null,(1),new cljs.core.PersistentArrayMap(null, 2, ["Player 1",(1),"AI",(2)], null));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22372_22431,_STAR_parent_description_STAR__temp_val__22373_22432,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424))
,false)],null)));
var chunk__22375_22434 = null;
var count__22376_22435 = (0);
var i__22377_22436 = (0);
while(true){
if((i__22377_22436 < count__22376_22435)){
var component__7512__auto___22439 = cljs.core._nth.call(null,chunk__22375_22434,i__22377_22436);
speclj.components.install.call(null,component__7512__auto___22439,description__7511__auto____$1);


var G__22440 = seq__22374_22433;
var G__22441 = chunk__22375_22434;
var G__22442 = count__22376_22435;
var G__22443 = (i__22377_22436 + (1));
seq__22374_22433 = G__22440;
chunk__22375_22434 = G__22441;
count__22376_22435 = G__22442;
i__22377_22436 = G__22443;
continue;
} else {
var temp__5753__auto___22444 = cljs.core.seq.call(null,seq__22374_22433);
if(temp__5753__auto___22444){
var seq__22374_22445__$1 = temp__5753__auto___22444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22374_22445__$1)){
var c__5568__auto___22446 = cljs.core.chunk_first.call(null,seq__22374_22445__$1);
var G__22447 = cljs.core.chunk_rest.call(null,seq__22374_22445__$1);
var G__22448 = c__5568__auto___22446;
var G__22449 = cljs.core.count.call(null,c__5568__auto___22446);
var G__22450 = (0);
seq__22374_22433 = G__22447;
chunk__22375_22434 = G__22448;
count__22376_22435 = G__22449;
i__22377_22436 = G__22450;
continue;
} else {
var component__7512__auto___22451 = cljs.core.first.call(null,seq__22374_22445__$1);
speclj.components.install.call(null,component__7512__auto___22451,description__7511__auto____$1);


var G__22452 = cljs.core.next.call(null,seq__22374_22445__$1);
var G__22453 = null;
var G__22454 = (0);
var G__22455 = (0);
seq__22374_22433 = G__22452;
chunk__22375_22434 = G__22453;
count__22376_22435 = G__22454;
i__22377_22436 = G__22455;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22372_22431);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7511__auto____$1);
}

return description__7511__auto____$1;
})(),(function (){var description__7511__auto____$1 = speclj.components.new_description.call(null,"runs the game-loop",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__22378_22456 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22379_22457 = description__7511__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22379_22457);

try{var seq__22380_22458 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"until a tie",((function (_STAR_parent_description_STAR__orig_val__22378_22456,_STAR_parent_description_STAR__temp_val__22379_22457,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424){
return (function (){
var round_output_orig_val__22392 = tic_tac_toe.ui_interface.round_output;
var play_next_turn_orig_val__22393 = tic_tac_toe.turn_system.play_next_turn;
var round_output_temp_val__22394 = (function (_){
return null;
});
var play_next_turn_temp_val__22395 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.round_output = round_output_temp_val__22394);

(tic_tac_toe.turn_system.play_next_turn = play_next_turn_temp_val__22395);

try{var expected__7644__auto__ = null;
var actual__7645__auto__ = tic_tac_toe.game_runner.game_loop.call(null,tic_tac_toe.game_runner_spec.base_initialized_game);
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.turn_system.play_next_turn = play_next_turn_orig_val__22393);

(tic_tac_toe.ui_interface.round_output = round_output_orig_val__22392);
}});})(_STAR_parent_description_STAR__orig_val__22378_22456,_STAR_parent_description_STAR__temp_val__22379_22457,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424))
,false),speclj.components.new_characteristic.call(null,"until a win",((function (_STAR_parent_description_STAR__orig_val__22378_22456,_STAR_parent_description_STAR__temp_val__22379_22457,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424){
return (function (){
var round_output_orig_val__22396 = tic_tac_toe.ui_interface.round_output;
var play_next_turn_orig_val__22397 = tic_tac_toe.turn_system.play_next_turn;
var round_output_temp_val__22398 = (function (_){
return null;
});
var play_next_turn_temp_val__22399 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.round_output = round_output_temp_val__22398);

(tic_tac_toe.turn_system.play_next_turn = play_next_turn_temp_val__22399);

try{var expected__7644__auto__ = (1);
var actual__7645__auto__ = tic_tac_toe.game_runner.game_loop.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0)], null)));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.turn_system.play_next_turn = play_next_turn_orig_val__22397);

(tic_tac_toe.ui_interface.round_output = round_output_orig_val__22396);
}});})(_STAR_parent_description_STAR__orig_val__22378_22456,_STAR_parent_description_STAR__temp_val__22379_22457,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424))
,false)],null)));
var chunk__22381_22459 = null;
var count__22382_22460 = (0);
var i__22383_22461 = (0);
while(true){
if((i__22383_22461 < count__22382_22460)){
var component__7512__auto___22462 = cljs.core._nth.call(null,chunk__22381_22459,i__22383_22461);
speclj.components.install.call(null,component__7512__auto___22462,description__7511__auto____$1);


var G__22463 = seq__22380_22458;
var G__22464 = chunk__22381_22459;
var G__22465 = count__22382_22460;
var G__22466 = (i__22383_22461 + (1));
seq__22380_22458 = G__22463;
chunk__22381_22459 = G__22464;
count__22382_22460 = G__22465;
i__22383_22461 = G__22466;
continue;
} else {
var temp__5753__auto___22467 = cljs.core.seq.call(null,seq__22380_22458);
if(temp__5753__auto___22467){
var seq__22380_22468__$1 = temp__5753__auto___22467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22380_22468__$1)){
var c__5568__auto___22469 = cljs.core.chunk_first.call(null,seq__22380_22468__$1);
var G__22470 = cljs.core.chunk_rest.call(null,seq__22380_22468__$1);
var G__22471 = c__5568__auto___22469;
var G__22472 = cljs.core.count.call(null,c__5568__auto___22469);
var G__22473 = (0);
seq__22380_22458 = G__22470;
chunk__22381_22459 = G__22471;
count__22382_22460 = G__22472;
i__22383_22461 = G__22473;
continue;
} else {
var component__7512__auto___22474 = cljs.core.first.call(null,seq__22380_22468__$1);
speclj.components.install.call(null,component__7512__auto___22474,description__7511__auto____$1);


var G__22475 = cljs.core.next.call(null,seq__22380_22468__$1);
var G__22476 = null;
var G__22477 = (0);
var G__22478 = (0);
seq__22380_22458 = G__22475;
chunk__22381_22459 = G__22476;
count__22382_22460 = G__22477;
i__22383_22461 = G__22478;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22378_22456);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7511__auto____$1);
}

return description__7511__auto____$1;
})(),(function (){var description__7511__auto____$1 = speclj.components.new_description.call(null,"parses arguments to set the",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__22400_22479 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22401_22480 = description__7511__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22401_22480);

try{var seq__22402_22481 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"valid arguments",((function (_STAR_parent_description_STAR__orig_val__22400_22479,_STAR_parent_description_STAR__temp_val__22401_22480,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424){
return (function (){
var expected__7644__auto___22485 = new cljs.core.Keyword(null,"gui","gui",604532813);
var actual__7645__auto___22486 = tic_tac_toe.game_runner.get_valid_arg.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--gui"], null),tic_tac_toe.game_runner.ui_types);
if(cljs.core._EQ_.call(null,expected__7644__auto___22485,actual__7645__auto___22486)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___22485 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___22485)),speclj.platform.endl,"     got: ",(((actual__7645__auto___22486 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___22486))," (using =)"].join('')));
}

var expected__7644__auto___22487 = new cljs.core.Keyword(null,"archive","archive",1466927419);
var actual__7645__auto___22488 = tic_tac_toe.game_runner.get_valid_arg.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--archive","--gui"], null),tic_tac_toe.game_runner.ui_types);
if(cljs.core._EQ_.call(null,expected__7644__auto___22487,actual__7645__auto___22488)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___22487 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___22487)),speclj.platform.endl,"     got: ",(((actual__7645__auto___22488 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___22488))," (using =)"].join('')));
}

var expected__7644__auto__ = new cljs.core.Keyword(null,"tui","tui",-1217057309);
var actual__7645__auto__ = tic_tac_toe.game_runner.get_valid_arg.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--not-a-real-arg"], null),tic_tac_toe.game_runner.ui_types);
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22400_22479,_STAR_parent_description_STAR__temp_val__22401_22480,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424))
,false),speclj.components.new_characteristic.call(null,"valid parameters",((function (_STAR_parent_description_STAR__orig_val__22400_22479,_STAR_parent_description_STAR__temp_val__22401_22480,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424){
return (function (){
var expected__7644__auto___22489 = cljs.core.List.EMPTY;
var actual__7645__auto___22490 = tic_tac_toe.game_runner.get_valid_parameters.call(null,null);
if(cljs.core._EQ_.call(null,expected__7644__auto___22489,actual__7645__auto___22490)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___22489 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___22489)),speclj.platform.endl,"     got: ",(((actual__7645__auto___22490 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___22490))," (using =)"].join('')));
}

var expected__7644__auto___22491 = cljs.core.List.EMPTY;
var actual__7645__auto___22492 = tic_tac_toe.game_runner.get_valid_parameters.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--gui"], null));
if(cljs.core._EQ_.call(null,expected__7644__auto___22491,actual__7645__auto___22492)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___22491 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___22491)),speclj.platform.endl,"     got: ",(((actual__7645__auto___22492 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___22492))," (using =)"].join('')));
}

var expected__7644__auto___22493 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null);
var actual__7645__auto___22494 = tic_tac_toe.game_runner.get_valid_parameters.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null));
if(cljs.core._EQ_.call(null,expected__7644__auto___22493,actual__7645__auto___22494)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___22493 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___22493)),speclj.platform.endl,"     got: ",(((actual__7645__auto___22494 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___22494))," (using =)"].join('')));
}

var expected__7644__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null);
var actual__7645__auto__ = tic_tac_toe.game_runner.get_valid_parameters.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--archive","test.txt"], null));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22400_22479,_STAR_parent_description_STAR__temp_val__22401_22480,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424))
,false),speclj.components.new_characteristic.call(null,"ui",((function (_STAR_parent_description_STAR__orig_val__22400_22479,_STAR_parent_description_STAR__temp_val__22401_22480,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424){
return (function (){
var expected__7644__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406));
var actual__7645__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--gui"], null));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22400_22479,_STAR_parent_description_STAR__temp_val__22401_22480,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424))
,false),speclj.components.new_characteristic.call(null,"save-location",((function (_STAR_parent_description_STAR__orig_val__22400_22479,_STAR_parent_description_STAR__temp_val__22401_22480,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424){
return (function (){
var expected__7644__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"psqldb","psqldb",-581718637));
var actual__7645__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--psqldb"], null));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22400_22479,_STAR_parent_description_STAR__temp_val__22401_22480,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424))
,false),speclj.components.new_characteristic.call(null,"archive",((function (_STAR_parent_description_STAR__orig_val__22400_22479,_STAR_parent_description_STAR__temp_val__22401_22480,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424){
return (function (){
var expected__7644__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"archive","archive",1466927419)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406)),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null));
var actual__7645__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--archive","test.txt"], null));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22400_22479,_STAR_parent_description_STAR__temp_val__22401_22480,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424))
,false),speclj.components.new_characteristic.call(null,"any arguments",((function (_STAR_parent_description_STAR__orig_val__22400_22479,_STAR_parent_description_STAR__temp_val__22401_22480,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424){
return (function (){
var expected__7644__auto__ = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813)),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"psqldb","psqldb",-581718637)),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test.txt"], null));
var actual__7645__auto__ = tic_tac_toe.game_runner.parse_arguments.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--psqldb","--gui","--not-real","--archive","test.txt"], null));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22400_22479,_STAR_parent_description_STAR__temp_val__22401_22480,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424))
,false)],null)));
var chunk__22403_22482 = null;
var count__22404_22483 = (0);
var i__22405_22484 = (0);
while(true){
if((i__22405_22484 < count__22404_22483)){
var component__7512__auto___22495 = cljs.core._nth.call(null,chunk__22403_22482,i__22405_22484);
speclj.components.install.call(null,component__7512__auto___22495,description__7511__auto____$1);


var G__22496 = seq__22402_22481;
var G__22497 = chunk__22403_22482;
var G__22498 = count__22404_22483;
var G__22499 = (i__22405_22484 + (1));
seq__22402_22481 = G__22496;
chunk__22403_22482 = G__22497;
count__22404_22483 = G__22498;
i__22405_22484 = G__22499;
continue;
} else {
var temp__5753__auto___22500 = cljs.core.seq.call(null,seq__22402_22481);
if(temp__5753__auto___22500){
var seq__22402_22501__$1 = temp__5753__auto___22500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22402_22501__$1)){
var c__5568__auto___22502 = cljs.core.chunk_first.call(null,seq__22402_22501__$1);
var G__22503 = cljs.core.chunk_rest.call(null,seq__22402_22501__$1);
var G__22504 = c__5568__auto___22502;
var G__22505 = cljs.core.count.call(null,c__5568__auto___22502);
var G__22506 = (0);
seq__22402_22481 = G__22503;
chunk__22403_22482 = G__22504;
count__22404_22483 = G__22505;
i__22405_22484 = G__22506;
continue;
} else {
var component__7512__auto___22507 = cljs.core.first.call(null,seq__22402_22501__$1);
speclj.components.install.call(null,component__7512__auto___22507,description__7511__auto____$1);


var G__22508 = cljs.core.next.call(null,seq__22402_22501__$1);
var G__22509 = null;
var G__22510 = (0);
var G__22511 = (0);
seq__22402_22481 = G__22508;
chunk__22403_22482 = G__22509;
count__22404_22483 = G__22510;
i__22405_22484 = G__22511;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22400_22479);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7511__auto____$1);
}

return description__7511__auto____$1;
})(),(function (){var description__7511__auto____$1 = speclj.components.new_description.call(null,"plays a single round by",false,"tic-tac-toe.game-runner-spec");
var _STAR_parent_description_STAR__orig_val__22406_22512 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22407_22513 = description__7511__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22407_22513);

try{var seq__22408_22514 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"Then returns a winner if there is one",((function (_STAR_parent_description_STAR__orig_val__22406_22512,_STAR_parent_description_STAR__temp_val__22407_22513,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424){
return (function (){
var play_next_turn_orig_val__22418 = tic_tac_toe.turn_system.play_next_turn;
var round_output_orig_val__22419 = tic_tac_toe.ui_interface.round_output;
var play_next_turn_temp_val__22420 = (function (_){
return null;
});
var round_output_temp_val__22421 = (function (_){
return null;
});
(tic_tac_toe.turn_system.play_next_turn = play_next_turn_temp_val__22420);

(tic_tac_toe.ui_interface.round_output = round_output_temp_val__22421);

try{var expected__7644__auto__ = (1);
var actual__7645__auto__ = tic_tac_toe.game_runner.game_round.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0)], null)));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.ui_interface.round_output = round_output_orig_val__22419);

(tic_tac_toe.turn_system.play_next_turn = play_next_turn_orig_val__22418);
}});})(_STAR_parent_description_STAR__orig_val__22406_22512,_STAR_parent_description_STAR__temp_val__22407_22513,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424))
,false),speclj.components.new_characteristic.call(null,"Then returns nil if there are no moves left",((function (_STAR_parent_description_STAR__orig_val__22406_22512,_STAR_parent_description_STAR__temp_val__22407_22513,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424){
return (function (){
var round_output_orig_val__22422 = tic_tac_toe.ui_interface.round_output;
var round_output_temp_val__22423 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.round_output = round_output_temp_val__22423);

try{var expected__7644__auto__ = null;
var actual__7645__auto__ = tic_tac_toe.game_runner.game_round.call(null,cljs.core.assoc.call(null,tic_tac_toe.game_runner_spec.base_initialized_game,new cljs.core.Keyword(null,"round","round",2009433328),(10)));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.ui_interface.round_output = round_output_orig_val__22422);
}});})(_STAR_parent_description_STAR__orig_val__22406_22512,_STAR_parent_description_STAR__temp_val__22407_22513,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__22314_22425,_STAR_parent_description_STAR__temp_val__22315_22426,description__7511__auto___22424))
,false)],null)));
var chunk__22409_22515 = null;
var count__22410_22516 = (0);
var i__22411_22517 = (0);
while(true){
if((i__22411_22517 < count__22410_22516)){
var component__7512__auto___22518 = cljs.core._nth.call(null,chunk__22409_22515,i__22411_22517);
speclj.components.install.call(null,component__7512__auto___22518,description__7511__auto____$1);


var G__22519 = seq__22408_22514;
var G__22520 = chunk__22409_22515;
var G__22521 = count__22410_22516;
var G__22522 = (i__22411_22517 + (1));
seq__22408_22514 = G__22519;
chunk__22409_22515 = G__22520;
count__22410_22516 = G__22521;
i__22411_22517 = G__22522;
continue;
} else {
var temp__5753__auto___22523 = cljs.core.seq.call(null,seq__22408_22514);
if(temp__5753__auto___22523){
var seq__22408_22524__$1 = temp__5753__auto___22523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22408_22524__$1)){
var c__5568__auto___22525 = cljs.core.chunk_first.call(null,seq__22408_22524__$1);
var G__22526 = cljs.core.chunk_rest.call(null,seq__22408_22524__$1);
var G__22527 = c__5568__auto___22525;
var G__22528 = cljs.core.count.call(null,c__5568__auto___22525);
var G__22529 = (0);
seq__22408_22514 = G__22526;
chunk__22409_22515 = G__22527;
count__22410_22516 = G__22528;
i__22411_22517 = G__22529;
continue;
} else {
var component__7512__auto___22530 = cljs.core.first.call(null,seq__22408_22524__$1);
speclj.components.install.call(null,component__7512__auto___22530,description__7511__auto____$1);


var G__22531 = cljs.core.next.call(null,seq__22408_22524__$1);
var G__22532 = null;
var G__22533 = (0);
var G__22534 = (0);
seq__22408_22514 = G__22531;
chunk__22409_22515 = G__22532;
count__22410_22516 = G__22533;
i__22411_22517 = G__22534;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22406_22512);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7511__auto____$1);
}

return description__7511__auto____$1;
})()],null)));
var chunk__22317_22428 = null;
var count__22318_22429 = (0);
var i__22319_22430 = (0);
while(true){
if((i__22319_22430 < count__22318_22429)){
var component__7512__auto___22535 = cljs.core._nth.call(null,chunk__22317_22428,i__22319_22430);
speclj.components.install.call(null,component__7512__auto___22535,description__7511__auto___22424);


var G__22536 = seq__22316_22427;
var G__22537 = chunk__22317_22428;
var G__22538 = count__22318_22429;
var G__22539 = (i__22319_22430 + (1));
seq__22316_22427 = G__22536;
chunk__22317_22428 = G__22537;
count__22318_22429 = G__22538;
i__22319_22430 = G__22539;
continue;
} else {
var temp__5753__auto___22540 = cljs.core.seq.call(null,seq__22316_22427);
if(temp__5753__auto___22540){
var seq__22316_22541__$1 = temp__5753__auto___22540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22316_22541__$1)){
var c__5568__auto___22542 = cljs.core.chunk_first.call(null,seq__22316_22541__$1);
var G__22543 = cljs.core.chunk_rest.call(null,seq__22316_22541__$1);
var G__22544 = c__5568__auto___22542;
var G__22545 = cljs.core.count.call(null,c__5568__auto___22542);
var G__22546 = (0);
seq__22316_22427 = G__22543;
chunk__22317_22428 = G__22544;
count__22318_22429 = G__22545;
i__22319_22430 = G__22546;
continue;
} else {
var component__7512__auto___22547 = cljs.core.first.call(null,seq__22316_22541__$1);
speclj.components.install.call(null,component__7512__auto___22547,description__7511__auto___22424);


var G__22548 = cljs.core.next.call(null,seq__22316_22541__$1);
var G__22549 = null;
var G__22550 = (0);
var G__22551 = (0);
seq__22316_22427 = G__22548;
chunk__22317_22428 = G__22549;
count__22318_22429 = G__22550;
i__22319_22430 = G__22551;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22314_22425);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7511__auto___22424);
}


//# sourceMappingURL=game_runner_spec.js.map
