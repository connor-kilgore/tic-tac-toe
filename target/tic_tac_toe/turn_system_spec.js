// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.turn_system_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.turn_system');
goog.require('tic_tac_toe.ai_player');
goog.require('tic_tac_toe.tic_tac_toe_board');
goog.require('tic_tac_toe.ui_interface');
goog.require('speclj.core');
tic_tac_toe.turn_system_spec.base_game = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(1),new cljs.core.Keyword(null,"three-d","three-d",-103100530),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"save-location","save-location",1426336611),new cljs.core.Keyword(null,"edndb","edndb",1239103406),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.List.EMPTY], null);
var description__9225__auto___10191 = speclj.components.new_description.call(null,"Turn System",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__10109_10192 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10110_10193 = description__9225__auto___10191;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10110_10193);

try{var seq__10111_10194 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__9225__auto____$1 = speclj.components.new_description.call(null,"checks if ai is",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__10153_10198 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10154_10199 = description__9225__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10154_10199);

try{var seq__10155_10200 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"the player being checked.",((function (_STAR_parent_description_STAR__orig_val__10153_10198,_STAR_parent_description_STAR__temp_val__10154_10199,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10109_10192,_STAR_parent_description_STAR__temp_val__10110_10193,description__9225__auto___10191){
return (function (){
var value__9346__auto___10204 = tic_tac_toe.turn_system.is_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AI 1",(1)], null));
if((!(value__9346__auto___10204))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__9346__auto___10204 == null))?"nil":cljs.core.pr_str.call(null,value__9346__auto___10204)),""].join('')));
} else {
}

var value__9352__auto__ = tic_tac_toe.turn_system.is_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player 1",(1)], null));
if(value__9352__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__9352__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__9352__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10153_10198,_STAR_parent_description_STAR__temp_val__10154_10199,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10109_10192,_STAR_parent_description_STAR__temp_val__10110_10193,description__9225__auto___10191))
,false),speclj.components.new_characteristic.call(null,"within a list of players",((function (_STAR_parent_description_STAR__orig_val__10153_10198,_STAR_parent_description_STAR__temp_val__10154_10199,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10109_10192,_STAR_parent_description_STAR__temp_val__10110_10193,description__9225__auto___10191){
return (function (){
var value__9352__auto___10205 = tic_tac_toe.turn_system.has_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player",(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player 2",(2)], null)], null));
if(cljs.core.truth_(value__9352__auto___10205)){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__9352__auto___10205 == null))?"nil":cljs.core.pr_str.call(null,value__9352__auto___10205))].join('')));
} else {
}

var value__9346__auto__ = tic_tac_toe.turn_system.has_ai_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Player",(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AI",(2)], null)], null));
if(cljs.core.not.call(null,value__9346__auto__)){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__9346__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__9346__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10153_10198,_STAR_parent_description_STAR__temp_val__10154_10199,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10109_10192,_STAR_parent_description_STAR__temp_val__10110_10193,description__9225__auto___10191))
,false)],null)));
var chunk__10156_10201 = null;
var count__10157_10202 = (0);
var i__10158_10203 = (0);
while(true){
if((i__10158_10203 < count__10157_10202)){
var component__9226__auto___10206 = cljs.core._nth.call(null,chunk__10156_10201,i__10158_10203);
speclj.components.install.call(null,component__9226__auto___10206,description__9225__auto____$1);


var G__10207 = seq__10155_10200;
var G__10208 = chunk__10156_10201;
var G__10209 = count__10157_10202;
var G__10210 = (i__10158_10203 + (1));
seq__10155_10200 = G__10207;
chunk__10156_10201 = G__10208;
count__10157_10202 = G__10209;
i__10158_10203 = G__10210;
continue;
} else {
var temp__5753__auto___10211 = cljs.core.seq.call(null,seq__10155_10200);
if(temp__5753__auto___10211){
var seq__10155_10212__$1 = temp__5753__auto___10211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10155_10212__$1)){
var c__5568__auto___10213 = cljs.core.chunk_first.call(null,seq__10155_10212__$1);
var G__10214 = cljs.core.chunk_rest.call(null,seq__10155_10212__$1);
var G__10215 = c__5568__auto___10213;
var G__10216 = cljs.core.count.call(null,c__5568__auto___10213);
var G__10217 = (0);
seq__10155_10200 = G__10214;
chunk__10156_10201 = G__10215;
count__10157_10202 = G__10216;
i__10158_10203 = G__10217;
continue;
} else {
var component__9226__auto___10218 = cljs.core.first.call(null,seq__10155_10212__$1);
speclj.components.install.call(null,component__9226__auto___10218,description__9225__auto____$1);


var G__10219 = cljs.core.next.call(null,seq__10155_10212__$1);
var G__10220 = null;
var G__10221 = (0);
var G__10222 = (0);
seq__10155_10200 = G__10219;
chunk__10156_10201 = G__10220;
count__10157_10202 = G__10221;
i__10158_10203 = G__10222;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10153_10198);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto____$1);
}

return description__9225__auto____$1;
})(),(function (){var description__9225__auto____$1 = speclj.components.new_description.call(null,"Play's the",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__10159_10223 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10160_10224 = description__9225__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10160_10224);

try{var seq__10161_10225 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"ai's turn",((function (_STAR_parent_description_STAR__orig_val__10159_10223,_STAR_parent_description_STAR__temp_val__10160_10224,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10109_10192,_STAR_parent_description_STAR__temp_val__10110_10193,description__9225__auto___10191){
return (function (){
var play_turn_orig_val__10175 = tic_tac_toe.ai_player.play_turn;
var println_orig_val__10176 = cljs.core.println;
var increment_round_orig_val__10177 = tic_tac_toe.tic_tac_toe_board.increment_round;
var play_turn_temp_val__10178 = (function (_,___$1){
return "AI";
});
var println_temp_val__10179 = (function (_){
return null;
});
var increment_round_temp_val__10180 = (function (x){
return x;
});
(tic_tac_toe.ai_player.play_turn = play_turn_temp_val__10178);

(cljs.core.println = println_temp_val__10179);

(tic_tac_toe.tic_tac_toe_board.increment_round = increment_round_temp_val__10180);

try{var expected__9358__auto__ = "AI";
var actual__9359__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(tic_tac_toe.turn_system.play_next_turn.call(null,cljs.core.assoc.call(null,tic_tac_toe.turn_system_spec.base_game,new cljs.core.Keyword(null,"round","round",2009433328),(2))));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.tic_tac_toe_board.increment_round = increment_round_orig_val__10177);

(cljs.core.println = println_orig_val__10176);

(tic_tac_toe.ai_player.play_turn = play_turn_orig_val__10175);
}});})(_STAR_parent_description_STAR__orig_val__10159_10223,_STAR_parent_description_STAR__temp_val__10160_10224,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10109_10192,_STAR_parent_description_STAR__temp_val__10110_10193,description__9225__auto___10191))
,false),speclj.components.new_characteristic.call(null,"player's turn",((function (_STAR_parent_description_STAR__orig_val__10159_10223,_STAR_parent_description_STAR__temp_val__10160_10224,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10109_10192,_STAR_parent_description_STAR__temp_val__10110_10193,description__9225__auto___10191){
return (function (){
var make_move_orig_val__10181 = tic_tac_toe.ui_interface.make_move;
var println_orig_val__10182 = cljs.core.println;
var make_move_temp_val__10183 = (function (_){
return "Player";
});
var println_temp_val__10184 = (function (_){
return null;
});
(tic_tac_toe.ui_interface.make_move = make_move_temp_val__10183);

(cljs.core.println = println_temp_val__10184);

try{var expected__9358__auto__ = "Player";
var actual__9359__auto__ = tic_tac_toe.turn_system.play_next_turn.call(null,tic_tac_toe.turn_system_spec.base_game);
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
}finally {(cljs.core.println = println_orig_val__10182);

(tic_tac_toe.ui_interface.make_move = make_move_orig_val__10181);
}});})(_STAR_parent_description_STAR__orig_val__10159_10223,_STAR_parent_description_STAR__temp_val__10160_10224,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10109_10192,_STAR_parent_description_STAR__temp_val__10110_10193,description__9225__auto___10191))
,false)],null)));
var chunk__10162_10226 = null;
var count__10163_10227 = (0);
var i__10164_10228 = (0);
while(true){
if((i__10164_10228 < count__10163_10227)){
var component__9226__auto___10229 = cljs.core._nth.call(null,chunk__10162_10226,i__10164_10228);
speclj.components.install.call(null,component__9226__auto___10229,description__9225__auto____$1);


var G__10230 = seq__10161_10225;
var G__10231 = chunk__10162_10226;
var G__10232 = count__10163_10227;
var G__10233 = (i__10164_10228 + (1));
seq__10161_10225 = G__10230;
chunk__10162_10226 = G__10231;
count__10163_10227 = G__10232;
i__10164_10228 = G__10233;
continue;
} else {
var temp__5753__auto___10234 = cljs.core.seq.call(null,seq__10161_10225);
if(temp__5753__auto___10234){
var seq__10161_10235__$1 = temp__5753__auto___10234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10161_10235__$1)){
var c__5568__auto___10236 = cljs.core.chunk_first.call(null,seq__10161_10235__$1);
var G__10237 = cljs.core.chunk_rest.call(null,seq__10161_10235__$1);
var G__10238 = c__5568__auto___10236;
var G__10239 = cljs.core.count.call(null,c__5568__auto___10236);
var G__10240 = (0);
seq__10161_10225 = G__10237;
chunk__10162_10226 = G__10238;
count__10163_10227 = G__10239;
i__10164_10228 = G__10240;
continue;
} else {
var component__9226__auto___10241 = cljs.core.first.call(null,seq__10161_10235__$1);
speclj.components.install.call(null,component__9226__auto___10241,description__9225__auto____$1);


var G__10242 = cljs.core.next.call(null,seq__10161_10235__$1);
var G__10243 = null;
var G__10244 = (0);
var G__10245 = (0);
seq__10161_10225 = G__10242;
chunk__10162_10226 = G__10243;
count__10163_10227 = G__10244;
i__10164_10228 = G__10245;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10159_10223);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto____$1);
}

return description__9225__auto____$1;
})(),(function (){var description__9225__auto____$1 = speclj.components.new_description.call(null,"checks if it is players turn by",false,"tic-tac-toe.turn-system-spec");
var _STAR_parent_description_STAR__orig_val__10185_10246 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10186_10247 = description__9225__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10186_10247);

try{var seq__10187_10248 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returning true if it is",((function (_STAR_parent_description_STAR__orig_val__10185_10246,_STAR_parent_description_STAR__temp_val__10186_10247,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10109_10192,_STAR_parent_description_STAR__temp_val__10110_10193,description__9225__auto___10191){
return (function (){
var value__9346__auto___10252 = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(1),(1));
if((!(value__9346__auto___10252))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__9346__auto___10252 == null))?"nil":cljs.core.pr_str.call(null,value__9346__auto___10252)),""].join('')));
} else {
}

var value__9346__auto__ = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(2),(2));
if((!(value__9346__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__9346__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__9346__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10185_10246,_STAR_parent_description_STAR__temp_val__10186_10247,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10109_10192,_STAR_parent_description_STAR__temp_val__10110_10193,description__9225__auto___10191))
,false),speclj.components.new_characteristic.call(null,"returning false if it is not",((function (_STAR_parent_description_STAR__orig_val__10185_10246,_STAR_parent_description_STAR__temp_val__10186_10247,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10109_10192,_STAR_parent_description_STAR__temp_val__10110_10193,description__9225__auto___10191){
return (function (){
var value__9352__auto___10253 = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(1),(2));
if(value__9352__auto___10253){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__9352__auto___10253 == null))?"nil":cljs.core.pr_str.call(null,value__9352__auto___10253))].join('')));
} else {
}

var value__9352__auto__ = tic_tac_toe.turn_system.is_turn_QMARK_.call(null,(2),(1));
if(value__9352__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__9352__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__9352__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10185_10246,_STAR_parent_description_STAR__temp_val__10186_10247,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10109_10192,_STAR_parent_description_STAR__temp_val__10110_10193,description__9225__auto___10191))
,false),speclj.components.new_characteristic.call(null,"returning the player whose turn it is",((function (_STAR_parent_description_STAR__orig_val__10185_10246,_STAR_parent_description_STAR__temp_val__10186_10247,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10109_10192,_STAR_parent_description_STAR__temp_val__10110_10193,description__9225__auto___10191){
return (function (){
var expected__9358__auto___10254 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player1","player1",-1491573636),(1)], null);
var actual__9359__auto___10255 = tic_tac_toe.turn_system.get_current_player.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1","player1",-1491573636),(1),new cljs.core.Keyword(null,"ai","ai",760454697),(1)], null),(1));
if(cljs.core._EQ_.call(null,expected__9358__auto___10254,actual__9359__auto___10255)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___10254 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___10254)),speclj.platform.endl,"     got: ",(((actual__9359__auto___10255 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___10255))," (using =)"].join('')));
}

var expected__9358__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),(1)], null);
var actual__9359__auto__ = tic_tac_toe.turn_system.get_current_player.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1","player1",-1491573636),(1),new cljs.core.Keyword(null,"ai","ai",760454697),(1)], null),(2));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10185_10246,_STAR_parent_description_STAR__temp_val__10186_10247,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10109_10192,_STAR_parent_description_STAR__temp_val__10110_10193,description__9225__auto___10191))
,false)],null)));
var chunk__10188_10249 = null;
var count__10189_10250 = (0);
var i__10190_10251 = (0);
while(true){
if((i__10190_10251 < count__10189_10250)){
var component__9226__auto___10256 = cljs.core._nth.call(null,chunk__10188_10249,i__10190_10251);
speclj.components.install.call(null,component__9226__auto___10256,description__9225__auto____$1);


var G__10257 = seq__10187_10248;
var G__10258 = chunk__10188_10249;
var G__10259 = count__10189_10250;
var G__10260 = (i__10190_10251 + (1));
seq__10187_10248 = G__10257;
chunk__10188_10249 = G__10258;
count__10189_10250 = G__10259;
i__10190_10251 = G__10260;
continue;
} else {
var temp__5753__auto___10261 = cljs.core.seq.call(null,seq__10187_10248);
if(temp__5753__auto___10261){
var seq__10187_10262__$1 = temp__5753__auto___10261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10187_10262__$1)){
var c__5568__auto___10263 = cljs.core.chunk_first.call(null,seq__10187_10262__$1);
var G__10264 = cljs.core.chunk_rest.call(null,seq__10187_10262__$1);
var G__10265 = c__5568__auto___10263;
var G__10266 = cljs.core.count.call(null,c__5568__auto___10263);
var G__10267 = (0);
seq__10187_10248 = G__10264;
chunk__10188_10249 = G__10265;
count__10189_10250 = G__10266;
i__10190_10251 = G__10267;
continue;
} else {
var component__9226__auto___10268 = cljs.core.first.call(null,seq__10187_10262__$1);
speclj.components.install.call(null,component__9226__auto___10268,description__9225__auto____$1);


var G__10269 = cljs.core.next.call(null,seq__10187_10262__$1);
var G__10270 = null;
var G__10271 = (0);
var G__10272 = (0);
seq__10187_10248 = G__10269;
chunk__10188_10249 = G__10270;
count__10189_10250 = G__10271;
i__10190_10251 = G__10272;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10185_10246);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto____$1);
}

return description__9225__auto____$1;
})()],null)));
var chunk__10112_10195 = null;
var count__10113_10196 = (0);
var i__10114_10197 = (0);
while(true){
if((i__10114_10197 < count__10113_10196)){
var component__9226__auto___10273 = cljs.core._nth.call(null,chunk__10112_10195,i__10114_10197);
speclj.components.install.call(null,component__9226__auto___10273,description__9225__auto___10191);


var G__10274 = seq__10111_10194;
var G__10275 = chunk__10112_10195;
var G__10276 = count__10113_10196;
var G__10277 = (i__10114_10197 + (1));
seq__10111_10194 = G__10274;
chunk__10112_10195 = G__10275;
count__10113_10196 = G__10276;
i__10114_10197 = G__10277;
continue;
} else {
var temp__5753__auto___10278 = cljs.core.seq.call(null,seq__10111_10194);
if(temp__5753__auto___10278){
var seq__10111_10279__$1 = temp__5753__auto___10278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10111_10279__$1)){
var c__5568__auto___10280 = cljs.core.chunk_first.call(null,seq__10111_10279__$1);
var G__10281 = cljs.core.chunk_rest.call(null,seq__10111_10279__$1);
var G__10282 = c__5568__auto___10280;
var G__10283 = cljs.core.count.call(null,c__5568__auto___10280);
var G__10284 = (0);
seq__10111_10194 = G__10281;
chunk__10112_10195 = G__10282;
count__10113_10196 = G__10283;
i__10114_10197 = G__10284;
continue;
} else {
var component__9226__auto___10285 = cljs.core.first.call(null,seq__10111_10279__$1);
speclj.components.install.call(null,component__9226__auto___10285,description__9225__auto___10191);


var G__10286 = cljs.core.next.call(null,seq__10111_10279__$1);
var G__10287 = null;
var G__10288 = (0);
var G__10289 = (0);
seq__10111_10194 = G__10286;
chunk__10112_10195 = G__10287;
count__10113_10196 = G__10288;
i__10114_10197 = G__10289;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10109_10192);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto___10191);
}


//# sourceMappingURL=turn_system_spec.js.map
