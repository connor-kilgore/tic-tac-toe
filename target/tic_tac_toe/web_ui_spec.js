// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.web_ui_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.web_ui');
goog.require('tic_tac_toe.ui_interface');
goog.require('tic_tac_toe.option_selector');
goog.require('clojure.string');
var description__7524__auto___14291 = speclj.components.new_description.call(null,"Web UI",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__14085_14292 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14086_14293 = description__7524__auto___14291;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14086_14293);

try{var seq__14087_14294 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"Initializes the UI by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__14191_14298 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14192_14299 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14192_14299);

try{var seq__14193_14300 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"rendering the html",((function (_STAR_parent_description_STAR__orig_val__14191_14298,_STAR_parent_description_STAR__temp_val__14192_14299,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291){
return (function (){
var call_game_initialize_orig_val__14205 = tic_tac_toe.web_ui.call_game_initialize;
var render_root_orig_val__14206 = tic_tac_toe.web_ui.render_root;
var call_game_initialize_temp_val__14207 = (function (){
return tic_tac_toe.web_ui.render_root.call(null);
});
var render_root_temp_val__14208 = (function (){
return "rendering!";
});
(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_temp_val__14207);

(tic_tac_toe.web_ui.render_root = render_root_temp_val__14208);

try{var expected__7651__auto__ = "rendering!";
var actual__7652__auto__ = tic_tac_toe.ui_interface.initialize_ui.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__14206);

(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_orig_val__14205);
}});})(_STAR_parent_description_STAR__orig_val__14191_14298,_STAR_parent_description_STAR__temp_val__14192_14299,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291))
,false),speclj.components.new_characteristic.call(null,"initializing the game",((function (_STAR_parent_description_STAR__orig_val__14191_14298,_STAR_parent_description_STAR__temp_val__14192_14299,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291){
return (function (){
var call_game_initialize_orig_val__14209 = tic_tac_toe.web_ui.call_game_initialize;
var render_root_orig_val__14210 = tic_tac_toe.web_ui.render_root;
var call_game_initialize_temp_val__14211 = (function (){
return "starting game!";
});
var render_root_temp_val__14212 = (function (){
return null;
});
(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_temp_val__14211);

(tic_tac_toe.web_ui.render_root = render_root_temp_val__14212);

try{var expected__7651__auto__ = "starting game!";
var actual__7652__auto__ = tic_tac_toe.ui_interface.initialize_ui.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__14210);

(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_orig_val__14209);
}});})(_STAR_parent_description_STAR__orig_val__14191_14298,_STAR_parent_description_STAR__temp_val__14192_14299,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291))
,false)],null)));
var chunk__14194_14301 = null;
var count__14195_14302 = (0);
var i__14196_14303 = (0);
while(true){
if((i__14196_14303 < count__14195_14302)){
var component__7525__auto___14304 = cljs.core._nth.call(null,chunk__14194_14301,i__14196_14303);
speclj.components.install.call(null,component__7525__auto___14304,description__7524__auto____$1);


var G__14305 = seq__14193_14300;
var G__14306 = chunk__14194_14301;
var G__14307 = count__14195_14302;
var G__14308 = (i__14196_14303 + (1));
seq__14193_14300 = G__14305;
chunk__14194_14301 = G__14306;
count__14195_14302 = G__14307;
i__14196_14303 = G__14308;
continue;
} else {
var temp__5753__auto___14309 = cljs.core.seq.call(null,seq__14193_14300);
if(temp__5753__auto___14309){
var seq__14193_14310__$1 = temp__5753__auto___14309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14193_14310__$1)){
var c__5568__auto___14311 = cljs.core.chunk_first.call(null,seq__14193_14310__$1);
var G__14312 = cljs.core.chunk_rest.call(null,seq__14193_14310__$1);
var G__14313 = c__5568__auto___14311;
var G__14314 = cljs.core.count.call(null,c__5568__auto___14311);
var G__14315 = (0);
seq__14193_14300 = G__14312;
chunk__14194_14301 = G__14313;
count__14195_14302 = G__14314;
i__14196_14303 = G__14315;
continue;
} else {
var component__7525__auto___14316 = cljs.core.first.call(null,seq__14193_14310__$1);
speclj.components.install.call(null,component__7525__auto___14316,description__7524__auto____$1);


var G__14317 = cljs.core.next.call(null,seq__14193_14310__$1);
var G__14318 = null;
var G__14319 = (0);
var G__14320 = (0);
seq__14193_14300 = G__14317;
chunk__14194_14301 = G__14318;
count__14195_14302 = G__14319;
i__14196_14303 = G__14320;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14191_14298);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"Initializes a game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__14213_14321 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14214_14322 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14214_14322);

try{var seq__14215_14323 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"Setting the page title",((function (_STAR_parent_description_STAR__orig_val__14213_14321,_STAR_parent_description_STAR__temp_val__14214_14322,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291){
return (function (){
var render_root_orig_val__14225 = tic_tac_toe.web_ui.render_root;
var render_root_temp_val__14226 = (function (){
return null;
});
(tic_tac_toe.web_ui.render_root = render_root_temp_val__14226);

try{tic_tac_toe.ui_interface.initialize_game.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));

var value__7639__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Welcome to TicTacToe!");
if((!(value__7639__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto__)),""].join('')));
} else {
return null;
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__14225);
}});})(_STAR_parent_description_STAR__orig_val__14213_14321,_STAR_parent_description_STAR__temp_val__14214_14322,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291))
,false),speclj.components.new_characteristic.call(null,"setting the game-state atom",((function (_STAR_parent_description_STAR__orig_val__14213_14321,_STAR_parent_description_STAR__temp_val__14214_14322,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291){
return (function (){
var render_root_orig_val__14227 = tic_tac_toe.web_ui.render_root;
var render_root_temp_val__14228 = (function (){
return null;
});
(tic_tac_toe.web_ui.render_root = render_root_temp_val__14228);

try{tic_tac_toe.ui_interface.initialize_game.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));

var expected__7651__auto__ = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"players","players",-1361554569),null,new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null,new cljs.core.Keyword(null,"round","round",2009433328),(1),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),null,new cljs.core.Keyword(null,"board","board",-1907017633),null,new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"save-location","save-location",1426336611),null,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.PersistentVector.EMPTY], null);
var actual__7652__auto__ = cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state);
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__14227);
}});})(_STAR_parent_description_STAR__orig_val__14213_14321,_STAR_parent_description_STAR__temp_val__14214_14322,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291))
,false),speclj.components.new_characteristic.call(null,"adding the start button to the page",((function (_STAR_parent_description_STAR__orig_val__14213_14321,_STAR_parent_description_STAR__temp_val__14214_14322,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291){
return (function (){
var render_root_orig_val__14229 = tic_tac_toe.web_ui.render_root;
var render_root_temp_val__14230 = (function (){
return null;
});
(tic_tac_toe.web_ui.render_root = render_root_temp_val__14230);

try{tic_tac_toe.ui_interface.initialize_game.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));

var value__7639__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Start!");
if((!(value__7639__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto__)),""].join('')));
} else {
return null;
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__14229);
}});})(_STAR_parent_description_STAR__orig_val__14213_14321,_STAR_parent_description_STAR__temp_val__14214_14322,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291))
,false)],null)));
var chunk__14216_14324 = null;
var count__14217_14325 = (0);
var i__14218_14326 = (0);
while(true){
if((i__14218_14326 < count__14217_14325)){
var component__7525__auto___14327 = cljs.core._nth.call(null,chunk__14216_14324,i__14218_14326);
speclj.components.install.call(null,component__7525__auto___14327,description__7524__auto____$1);


var G__14328 = seq__14215_14323;
var G__14329 = chunk__14216_14324;
var G__14330 = count__14217_14325;
var G__14331 = (i__14218_14326 + (1));
seq__14215_14323 = G__14328;
chunk__14216_14324 = G__14329;
count__14217_14325 = G__14330;
i__14218_14326 = G__14331;
continue;
} else {
var temp__5753__auto___14332 = cljs.core.seq.call(null,seq__14215_14323);
if(temp__5753__auto___14332){
var seq__14215_14333__$1 = temp__5753__auto___14332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14215_14333__$1)){
var c__5568__auto___14334 = cljs.core.chunk_first.call(null,seq__14215_14333__$1);
var G__14335 = cljs.core.chunk_rest.call(null,seq__14215_14333__$1);
var G__14336 = c__5568__auto___14334;
var G__14337 = cljs.core.count.call(null,c__5568__auto___14334);
var G__14338 = (0);
seq__14215_14323 = G__14335;
chunk__14216_14324 = G__14336;
count__14217_14325 = G__14337;
i__14218_14326 = G__14338;
continue;
} else {
var component__7525__auto___14339 = cljs.core.first.call(null,seq__14215_14333__$1);
speclj.components.install.call(null,component__7525__auto___14339,description__7524__auto____$1);


var G__14340 = cljs.core.next.call(null,seq__14215_14333__$1);
var G__14341 = null;
var G__14342 = (0);
var G__14343 = (0);
seq__14215_14323 = G__14340;
chunk__14216_14324 = G__14341;
count__14217_14325 = G__14342;
i__14218_14326 = G__14343;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14213_14321);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"Serves options for",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__14231_14344 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14232_14345 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14232_14345);

try{var seq__14233_14346 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"Game Mode",((function (_STAR_parent_description_STAR__orig_val__14231_14344,_STAR_parent_description_STAR__temp_val__14232_14345,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291){
return (function (){
tic_tac_toe.web_ui.set_game_mode.call(null);

var value__7639__auto___14350 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Single Player");
if((!(value__7639__auto___14350))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto___14350 == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto___14350)),""].join('')));
} else {
}

var value__7639__auto___14351 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Two Player");
if((!(value__7639__auto___14351))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto___14351 == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto___14351)),""].join('')));
} else {
}

var value__7639__auto___14352 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"AI vs. AI");
if((!(value__7639__auto___14352))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto___14352 == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto___14352)),""].join('')));
} else {
}

var value__7639__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Close Program");
if((!(value__7639__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__14231_14344,_STAR_parent_description_STAR__temp_val__14232_14345,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291))
,false),(function (){var description__7524__auto____$2 = speclj.components.new_description.call(null,"Symbol",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__14261_14353 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14262_14354 = description__7524__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14262_14354);

try{var seq__14263_14355 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"on one player",((function (_STAR_parent_description_STAR__orig_val__14261_14353,_STAR_parent_description_STAR__temp_val__14262_14354,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__14231_14344,_STAR_parent_description_STAR__temp_val__14232_14345,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291){
return (function (){
tic_tac_toe.web_ui.update_game_BANG_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"one-player","one-player",-1358620345));

tic_tac_toe.web_ui.set_symbol.call(null);

var value__7639__auto___14359 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"X (first turn)");
if((!(value__7639__auto___14359))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto___14359 == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto___14359)),""].join('')));
} else {
}

var value__7639__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"O (second turn)");
if((!(value__7639__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__14261_14353,_STAR_parent_description_STAR__temp_val__14262_14354,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__14231_14344,_STAR_parent_description_STAR__temp_val__14232_14345,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291))
,false),speclj.components.new_characteristic.call(null,"to start menu if close program",((function (_STAR_parent_description_STAR__orig_val__14261_14353,_STAR_parent_description_STAR__temp_val__14262_14354,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__14231_14344,_STAR_parent_description_STAR__temp_val__14232_14345,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291){
return (function (){
var call_game_initialize_orig_val__14271 = tic_tac_toe.web_ui.call_game_initialize;
var call_game_initialize_temp_val__14272 = (function (){
return "Start menu!";
});
(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_temp_val__14272);

try{tic_tac_toe.web_ui.update_game_BANG_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"close-program","close-program",-1579447425));

var expected__7651__auto__ = "Start menu!";
var actual__7652__auto__ = tic_tac_toe.web_ui.set_symbol.call(null);
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_orig_val__14271);
}});})(_STAR_parent_description_STAR__orig_val__14261_14353,_STAR_parent_description_STAR__temp_val__14262_14354,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__14231_14344,_STAR_parent_description_STAR__temp_val__14232_14345,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291))
,false),speclj.components.new_characteristic.call(null,"goes straight to difficulty otherwise",((function (_STAR_parent_description_STAR__orig_val__14261_14353,_STAR_parent_description_STAR__temp_val__14262_14354,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__14231_14344,_STAR_parent_description_STAR__temp_val__14232_14345,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291){
return (function (){
tic_tac_toe.web_ui.update_game_BANG_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"not-one-player","not-one-player",1301896994));

var set_difficulty_orig_val__14273 = tic_tac_toe.web_ui.set_difficulty;
var set_difficulty_temp_val__14274 = (function (){
return "setting difficulty!";
});
(tic_tac_toe.web_ui.set_difficulty = set_difficulty_temp_val__14274);

try{var expected__7651__auto__ = "setting difficulty!";
var actual__7652__auto__ = tic_tac_toe.web_ui.set_symbol.call(null);
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.set_difficulty = set_difficulty_orig_val__14273);
}});})(_STAR_parent_description_STAR__orig_val__14261_14353,_STAR_parent_description_STAR__temp_val__14262_14354,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__14231_14344,_STAR_parent_description_STAR__temp_val__14232_14345,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291))
,false)],null)));
var chunk__14264_14356 = null;
var count__14265_14357 = (0);
var i__14266_14358 = (0);
while(true){
if((i__14266_14358 < count__14265_14357)){
var component__7525__auto___14360 = cljs.core._nth.call(null,chunk__14264_14356,i__14266_14358);
speclj.components.install.call(null,component__7525__auto___14360,description__7524__auto____$2);


var G__14361 = seq__14263_14355;
var G__14362 = chunk__14264_14356;
var G__14363 = count__14265_14357;
var G__14364 = (i__14266_14358 + (1));
seq__14263_14355 = G__14361;
chunk__14264_14356 = G__14362;
count__14265_14357 = G__14363;
i__14266_14358 = G__14364;
continue;
} else {
var temp__5753__auto___14365 = cljs.core.seq.call(null,seq__14263_14355);
if(temp__5753__auto___14365){
var seq__14263_14366__$1 = temp__5753__auto___14365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14263_14366__$1)){
var c__5568__auto___14367 = cljs.core.chunk_first.call(null,seq__14263_14366__$1);
var G__14368 = cljs.core.chunk_rest.call(null,seq__14263_14366__$1);
var G__14369 = c__5568__auto___14367;
var G__14370 = cljs.core.count.call(null,c__5568__auto___14367);
var G__14371 = (0);
seq__14263_14355 = G__14368;
chunk__14264_14356 = G__14369;
count__14265_14357 = G__14370;
i__14266_14358 = G__14371;
continue;
} else {
var component__7525__auto___14372 = cljs.core.first.call(null,seq__14263_14366__$1);
speclj.components.install.call(null,component__7525__auto___14372,description__7524__auto____$2);


var G__14373 = cljs.core.next.call(null,seq__14263_14366__$1);
var G__14374 = null;
var G__14375 = (0);
var G__14376 = (0);
seq__14263_14355 = G__14373;
chunk__14264_14356 = G__14374;
count__14265_14357 = G__14375;
i__14266_14358 = G__14376;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14261_14353);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$2);
}

return description__7524__auto____$2;
})(),(function (){var description__7524__auto____$2 = speclj.components.new_description.call(null,"Difficulty",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__14275_14377 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14276_14378 = description__7524__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14276_14378);

try{var seq__14277_14379 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"when an AI is playing",((function (_STAR_parent_description_STAR__orig_val__14275_14377,_STAR_parent_description_STAR__temp_val__14276_14378,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__14231_14344,_STAR_parent_description_STAR__temp_val__14232_14345,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291){
return (function (){
tic_tac_toe.web_ui.update_game_BANG_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),true], null));

tic_tac_toe.web_ui.set_difficulty.call(null);

var value__7639__auto___14383 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Unbeatable");
if((!(value__7639__auto___14383))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto___14383 == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto___14383)),""].join('')));
} else {
}

var value__7639__auto___14384 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Medium");
if((!(value__7639__auto___14384))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto___14384 == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto___14384)),""].join('')));
} else {
}

var value__7639__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Easy");
if((!(value__7639__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__14275_14377,_STAR_parent_description_STAR__temp_val__14276_14378,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__14231_14344,_STAR_parent_description_STAR__temp_val__14232_14345,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291))
,false),speclj.components.new_characteristic.call(null,"goes straight to setting the size if no AI is playing",((function (_STAR_parent_description_STAR__orig_val__14275_14377,_STAR_parent_description_STAR__temp_val__14276_14378,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__14231_14344,_STAR_parent_description_STAR__temp_val__14232_14345,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291){
return (function (){
tic_tac_toe.web_ui.update_game_BANG_.call(null,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),false], null));

var set_size_orig_val__14283 = tic_tac_toe.web_ui.set_size;
var set_size_temp_val__14284 = (function (){
return "setting the size!";
});
(tic_tac_toe.web_ui.set_size = set_size_temp_val__14284);

try{var expected__7651__auto__ = "setting the size!";
var actual__7652__auto__ = tic_tac_toe.web_ui.set_difficulty.call(null);
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.set_size = set_size_orig_val__14283);
}});})(_STAR_parent_description_STAR__orig_val__14275_14377,_STAR_parent_description_STAR__temp_val__14276_14378,description__7524__auto____$2,_STAR_parent_description_STAR__orig_val__14231_14344,_STAR_parent_description_STAR__temp_val__14232_14345,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291))
,false)],null)));
var chunk__14278_14380 = null;
var count__14279_14381 = (0);
var i__14280_14382 = (0);
while(true){
if((i__14280_14382 < count__14279_14381)){
var component__7525__auto___14385 = cljs.core._nth.call(null,chunk__14278_14380,i__14280_14382);
speclj.components.install.call(null,component__7525__auto___14385,description__7524__auto____$2);


var G__14386 = seq__14277_14379;
var G__14387 = chunk__14278_14380;
var G__14388 = count__14279_14381;
var G__14389 = (i__14280_14382 + (1));
seq__14277_14379 = G__14386;
chunk__14278_14380 = G__14387;
count__14279_14381 = G__14388;
i__14280_14382 = G__14389;
continue;
} else {
var temp__5753__auto___14390 = cljs.core.seq.call(null,seq__14277_14379);
if(temp__5753__auto___14390){
var seq__14277_14391__$1 = temp__5753__auto___14390;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14277_14391__$1)){
var c__5568__auto___14392 = cljs.core.chunk_first.call(null,seq__14277_14391__$1);
var G__14393 = cljs.core.chunk_rest.call(null,seq__14277_14391__$1);
var G__14394 = c__5568__auto___14392;
var G__14395 = cljs.core.count.call(null,c__5568__auto___14392);
var G__14396 = (0);
seq__14277_14379 = G__14393;
chunk__14278_14380 = G__14394;
count__14279_14381 = G__14395;
i__14280_14382 = G__14396;
continue;
} else {
var component__7525__auto___14397 = cljs.core.first.call(null,seq__14277_14391__$1);
speclj.components.install.call(null,component__7525__auto___14397,description__7524__auto____$2);


var G__14398 = cljs.core.next.call(null,seq__14277_14391__$1);
var G__14399 = null;
var G__14400 = (0);
var G__14401 = (0);
seq__14277_14379 = G__14398;
chunk__14278_14380 = G__14399;
count__14279_14381 = G__14400;
i__14280_14382 = G__14401;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14275_14377);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$2);
}

return description__7524__auto____$2;
})(),speclj.components.new_characteristic.call(null,"Size",((function (_STAR_parent_description_STAR__orig_val__14231_14344,_STAR_parent_description_STAR__temp_val__14232_14345,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291){
return (function (){
tic_tac_toe.web_ui.set_size.call(null);

var value__7639__auto___14402 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"3x3");
if((!(value__7639__auto___14402))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto___14402 == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto___14402)),""].join('')));
} else {
}

var value__7639__auto___14403 = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"4x4");
if((!(value__7639__auto___14403))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto___14403 == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto___14403)),""].join('')));
} else {
}

var value__7639__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"3x3x3");
if((!(value__7639__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__14231_14344,_STAR_parent_description_STAR__temp_val__14232_14345,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291))
,false)],null)));
var chunk__14234_14347 = null;
var count__14235_14348 = (0);
var i__14236_14349 = (0);
while(true){
if((i__14236_14349 < count__14235_14348)){
var component__7525__auto___14404 = cljs.core._nth.call(null,chunk__14234_14347,i__14236_14349);
speclj.components.install.call(null,component__7525__auto___14404,description__7524__auto____$1);


var G__14405 = seq__14233_14346;
var G__14406 = chunk__14234_14347;
var G__14407 = count__14235_14348;
var G__14408 = (i__14236_14349 + (1));
seq__14233_14346 = G__14405;
chunk__14234_14347 = G__14406;
count__14235_14348 = G__14407;
i__14236_14349 = G__14408;
continue;
} else {
var temp__5753__auto___14409 = cljs.core.seq.call(null,seq__14233_14346);
if(temp__5753__auto___14409){
var seq__14233_14410__$1 = temp__5753__auto___14409;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14233_14410__$1)){
var c__5568__auto___14411 = cljs.core.chunk_first.call(null,seq__14233_14410__$1);
var G__14412 = cljs.core.chunk_rest.call(null,seq__14233_14410__$1);
var G__14413 = c__5568__auto___14411;
var G__14414 = cljs.core.count.call(null,c__5568__auto___14411);
var G__14415 = (0);
seq__14233_14346 = G__14412;
chunk__14234_14347 = G__14413;
count__14235_14348 = G__14414;
i__14236_14349 = G__14415;
continue;
} else {
var component__7525__auto___14416 = cljs.core.first.call(null,seq__14233_14410__$1);
speclj.components.install.call(null,component__7525__auto___14416,description__7524__auto____$1);


var G__14417 = cljs.core.next.call(null,seq__14233_14410__$1);
var G__14418 = null;
var G__14419 = (0);
var G__14420 = (0);
seq__14233_14346 = G__14417;
chunk__14234_14347 = G__14418;
count__14235_14348 = G__14419;
i__14236_14349 = G__14420;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14231_14344);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"gets options to display as buttons by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__14285_14421 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14286_14422 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14286_14422);

try{var seq__14287_14423 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"getting the vector of options out of a print statement",((function (_STAR_parent_description_STAR__orig_val__14285_14421,_STAR_parent_description_STAR__temp_val__14286_14422,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291){
return (function (){
var expected__7651__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Single Player\n","Two Player\n","AI vs. AI\n","Close Program\n"], null);
var actual__7652__auto__ = tic_tac_toe.web_ui.get_options_vector.call(null,new cljs.core.Keyword(null,"print-statement","print-statement",-1241213913).cljs$core$IFn$_invoke$arity$1(tic_tac_toe.option_selector.menu_options));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14285_14421,_STAR_parent_description_STAR__temp_val__14286_14422,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291))
,false),speclj.components.new_characteristic.call(null,"get the supposed values out of each vector option",((function (_STAR_parent_description_STAR__orig_val__14285_14421,_STAR_parent_description_STAR__temp_val__14286_14422,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291){
return (function (){
var expected__7651__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3","4"], null);
var actual__7652__auto__ = tic_tac_toe.web_ui.get_values.call(null,new cljs.core.Keyword(null,"print-statement","print-statement",-1241213913).cljs$core$IFn$_invoke$arity$1(tic_tac_toe.option_selector.menu_options));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14285_14421,_STAR_parent_description_STAR__temp_val__14286_14422,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291))
,false)],null)));
var chunk__14288_14424 = null;
var count__14289_14425 = (0);
var i__14290_14426 = (0);
while(true){
if((i__14290_14426 < count__14289_14425)){
var component__7525__auto___14427 = cljs.core._nth.call(null,chunk__14288_14424,i__14290_14426);
speclj.components.install.call(null,component__7525__auto___14427,description__7524__auto____$1);


var G__14428 = seq__14287_14423;
var G__14429 = chunk__14288_14424;
var G__14430 = count__14289_14425;
var G__14431 = (i__14290_14426 + (1));
seq__14287_14423 = G__14428;
chunk__14288_14424 = G__14429;
count__14289_14425 = G__14430;
i__14290_14426 = G__14431;
continue;
} else {
var temp__5753__auto___14432 = cljs.core.seq.call(null,seq__14287_14423);
if(temp__5753__auto___14432){
var seq__14287_14433__$1 = temp__5753__auto___14432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14287_14433__$1)){
var c__5568__auto___14434 = cljs.core.chunk_first.call(null,seq__14287_14433__$1);
var G__14435 = cljs.core.chunk_rest.call(null,seq__14287_14433__$1);
var G__14436 = c__5568__auto___14434;
var G__14437 = cljs.core.count.call(null,c__5568__auto___14434);
var G__14438 = (0);
seq__14287_14423 = G__14435;
chunk__14288_14424 = G__14436;
count__14289_14425 = G__14437;
i__14290_14426 = G__14438;
continue;
} else {
var component__7525__auto___14439 = cljs.core.first.call(null,seq__14287_14433__$1);
speclj.components.install.call(null,component__7525__auto___14439,description__7524__auto____$1);


var G__14440 = cljs.core.next.call(null,seq__14287_14433__$1);
var G__14441 = null;
var G__14442 = (0);
var G__14443 = (0);
seq__14287_14423 = G__14440;
chunk__14288_14424 = G__14441;
count__14289_14425 = G__14442;
i__14290_14426 = G__14443;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14285_14421);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),speclj.components.new_characteristic.call(null,"displays a row",((function (_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291){
return (function (){
var expected__7651__auto___14444 = ["([:button {:on-click #object[Function], :style {:width \"50px\", ",":height \"50px\", :vertical-align \"middle\", :font-size \"20px\"}} ","\" \"] [:button {:on-click #object[Function], :style {:width \"50px\", ",":height \"50px\", :vertical-align \"middle\", :font-size \"20px\"}} \" ","\"] [:button {:on-click #object[Function], :style {:width \"50px\", :height ","\"50px\", :vertical-align \"middle\", :font-size \"20px\"}} \" \"])"].join('');
var actual__7652__auto___14445 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.web_ui.display_row.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(1),(1),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(0),(1)));
if(cljs.core._EQ_.call(null,expected__7651__auto___14444,actual__7652__auto___14445)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___14444 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___14444)),speclj.platform.endl,"     got: ",(((actual__7652__auto___14445 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___14445))," (using =)"].join('')));
}

var expected__7651__auto__ = ["([:button {:on-click #object[Function], :style {:width \"50px\", :height ","\"50px\", :vertical-align \"middle\", :font-size \"20px\"}} \"X\"] ","[:button {:on-click #object[Function], :style {:width \"50px\", :height ","\"50px\", :vertical-align \"middle\", :font-size \"20px\"}} \"X\"] ","[:button {:on-click #object[Function], :style {:width \"50px\", :height \"50px\", ",":vertical-align \"middle\", :font-size \"20px\"}} \"X\"])"].join('');
var actual__7652__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.web_ui.display_row.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(1),(1),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1),(1)));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14085_14292,_STAR_parent_description_STAR__temp_val__14086_14293,description__7524__auto___14291))
,false)],null)));
var chunk__14088_14295 = null;
var count__14089_14296 = (0);
var i__14090_14297 = (0);
while(true){
if((i__14090_14297 < count__14089_14296)){
var component__7525__auto___14446 = cljs.core._nth.call(null,chunk__14088_14295,i__14090_14297);
speclj.components.install.call(null,component__7525__auto___14446,description__7524__auto___14291);


var G__14447 = seq__14087_14294;
var G__14448 = chunk__14088_14295;
var G__14449 = count__14089_14296;
var G__14450 = (i__14090_14297 + (1));
seq__14087_14294 = G__14447;
chunk__14088_14295 = G__14448;
count__14089_14296 = G__14449;
i__14090_14297 = G__14450;
continue;
} else {
var temp__5753__auto___14451 = cljs.core.seq.call(null,seq__14087_14294);
if(temp__5753__auto___14451){
var seq__14087_14452__$1 = temp__5753__auto___14451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14087_14452__$1)){
var c__5568__auto___14453 = cljs.core.chunk_first.call(null,seq__14087_14452__$1);
var G__14454 = cljs.core.chunk_rest.call(null,seq__14087_14452__$1);
var G__14455 = c__5568__auto___14453;
var G__14456 = cljs.core.count.call(null,c__5568__auto___14453);
var G__14457 = (0);
seq__14087_14294 = G__14454;
chunk__14088_14295 = G__14455;
count__14089_14296 = G__14456;
i__14090_14297 = G__14457;
continue;
} else {
var component__7525__auto___14458 = cljs.core.first.call(null,seq__14087_14452__$1);
speclj.components.install.call(null,component__7525__auto___14458,description__7524__auto___14291);


var G__14459 = cljs.core.next.call(null,seq__14087_14452__$1);
var G__14460 = null;
var G__14461 = (0);
var G__14462 = (0);
seq__14087_14294 = G__14459;
chunk__14088_14295 = G__14460;
count__14089_14296 = G__14461;
i__14090_14297 = G__14462;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14085_14292);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto___14291);
}


//# sourceMappingURL=web_ui_spec.js.map
