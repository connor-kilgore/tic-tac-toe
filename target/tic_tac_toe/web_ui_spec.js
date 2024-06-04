// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.web_ui_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.game_runner');
goog.require('tic_tac_toe.web_ui');
goog.require('tic_tac_toe.ui_interface');
goog.require('tic_tac_toe.option_selector');
goog.require('clojure.string');
tic_tac_toe.web_ui_spec.example_game = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(5),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(2),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"save-location","save-location",1426336611),null,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.PersistentVector.EMPTY], null);
var description__7511__auto___24271 = speclj.components.new_description.call(null,"Web UI",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__23969_24272 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__23970_24273 = description__7511__auto___24271;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__23970_24273);

try{var seq__23971_24274 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,14,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"checks if the current move is a valid player move",((function (_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var value__7632__auto__ = tic_tac_toe.web_ui.valid_player_move_QMARK_.call(null,tic_tac_toe.web_ui_spec.example_game,(3),(1));
if((!(value__7632__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7632__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7632__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),(function (){var description__7511__auto____$1 = speclj.components.new_description.call(null,"Initializes the UI by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__24123_24278 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__24124_24279 = description__7511__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__24124_24279);

try{var seq__24125_24280 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"rendering the html",((function (_STAR_parent_description_STAR__orig_val__24123_24278,_STAR_parent_description_STAR__temp_val__24124_24279,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var call_game_initialize_orig_val__24137 = tic_tac_toe.web_ui.call_game_initialize;
var render_root_orig_val__24138 = tic_tac_toe.web_ui.render_root;
var call_game_initialize_temp_val__24139 = (function (){
return tic_tac_toe.web_ui.render_root.call(null);
});
var render_root_temp_val__24140 = (function (){
return "rendering!";
});
(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_temp_val__24139);

(tic_tac_toe.web_ui.render_root = render_root_temp_val__24140);

try{var expected__7644__auto__ = "rendering!";
var actual__7645__auto__ = tic_tac_toe.web_ui.call_game_initialize.call(null);
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__24138);

(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_orig_val__24137);
}});})(_STAR_parent_description_STAR__orig_val__24123_24278,_STAR_parent_description_STAR__temp_val__24124_24279,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"initializing the game",((function (_STAR_parent_description_STAR__orig_val__24123_24278,_STAR_parent_description_STAR__temp_val__24124_24279,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var call_game_initialize_orig_val__24141 = tic_tac_toe.web_ui.call_game_initialize;
var render_root_orig_val__24142 = tic_tac_toe.web_ui.render_root;
var call_game_initialize_temp_val__24143 = (function (){
return "starting game!";
});
var render_root_temp_val__24144 = (function (){
return null;
});
(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_temp_val__24143);

(tic_tac_toe.web_ui.render_root = render_root_temp_val__24144);

try{var expected__7644__auto__ = "starting game!";
var actual__7645__auto__ = tic_tac_toe.web_ui.call_game_initialize.call(null);
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__24142);

(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_orig_val__24141);
}});})(_STAR_parent_description_STAR__orig_val__24123_24278,_STAR_parent_description_STAR__temp_val__24124_24279,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false)],null)));
var chunk__24126_24281 = null;
var count__24127_24282 = (0);
var i__24128_24283 = (0);
while(true){
if((i__24128_24283 < count__24127_24282)){
var component__7512__auto___24284 = cljs.core._nth.call(null,chunk__24126_24281,i__24128_24283);
speclj.components.install.call(null,component__7512__auto___24284,description__7511__auto____$1);


var G__24285 = seq__24125_24280;
var G__24286 = chunk__24126_24281;
var G__24287 = count__24127_24282;
var G__24288 = (i__24128_24283 + (1));
seq__24125_24280 = G__24285;
chunk__24126_24281 = G__24286;
count__24127_24282 = G__24287;
i__24128_24283 = G__24288;
continue;
} else {
var temp__5753__auto___24289 = cljs.core.seq.call(null,seq__24125_24280);
if(temp__5753__auto___24289){
var seq__24125_24290__$1 = temp__5753__auto___24289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24125_24290__$1)){
var c__5568__auto___24291 = cljs.core.chunk_first.call(null,seq__24125_24290__$1);
var G__24292 = cljs.core.chunk_rest.call(null,seq__24125_24290__$1);
var G__24293 = c__5568__auto___24291;
var G__24294 = cljs.core.count.call(null,c__5568__auto___24291);
var G__24295 = (0);
seq__24125_24280 = G__24292;
chunk__24126_24281 = G__24293;
count__24127_24282 = G__24294;
i__24128_24283 = G__24295;
continue;
} else {
var component__7512__auto___24296 = cljs.core.first.call(null,seq__24125_24290__$1);
speclj.components.install.call(null,component__7512__auto___24296,description__7511__auto____$1);


var G__24297 = cljs.core.next.call(null,seq__24125_24290__$1);
var G__24298 = null;
var G__24299 = (0);
var G__24300 = (0);
seq__24125_24280 = G__24297;
chunk__24126_24281 = G__24298;
count__24127_24282 = G__24299;
i__24128_24283 = G__24300;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__24123_24278);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7511__auto____$1);
}

return description__7511__auto____$1;
})(),(function (){var description__7511__auto____$1 = speclj.components.new_description.call(null,"Initializes a game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__24145_24301 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__24146_24302 = description__7511__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__24146_24302);

try{var seq__24147_24303 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"setting the game-state atom",((function (_STAR_parent_description_STAR__orig_val__24145_24301,_STAR_parent_description_STAR__temp_val__24146_24302,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,null);

var value__7632__auto___24307 = (cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state) == null);
if((!(value__7632__auto___24307))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7632__auto___24307 == null))?"nil":cljs.core.pr_str.call(null,value__7632__auto___24307)),""].join('')));
} else {
}

tic_tac_toe.web_ui.call_game_initialize.call(null);

var value__7638__auto__ = (cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state) == null);
if(value__7638__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7638__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7638__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__24145_24301,_STAR_parent_description_STAR__temp_val__24146_24302,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"rendering the title",((function (_STAR_parent_description_STAR__orig_val__24145_24301,_STAR_parent_description_STAR__temp_val__24146_24302,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
tic_tac_toe.web_ui.call_game_initialize.call(null);

var value__7632__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Welcome to TicTacToe!");
if((!(value__7632__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7632__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7632__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__24145_24301,_STAR_parent_description_STAR__temp_val__24146_24302,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"rendering the game options",((function (_STAR_parent_description_STAR__orig_val__24145_24301,_STAR_parent_description_STAR__temp_val__24146_24302,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var set_options_orig_val__24153 = tic_tac_toe.web_ui.set_options;
var set_options_temp_val__24154 = (function (){
return "rendering options!";
});
(tic_tac_toe.web_ui.set_options = set_options_temp_val__24154);

try{var expected__7644__auto__ = "rendering options!";
var actual__7645__auto__ = tic_tac_toe.web_ui.call_game_initialize.call(null);
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.set_options = set_options_orig_val__24153);
}});})(_STAR_parent_description_STAR__orig_val__24145_24301,_STAR_parent_description_STAR__temp_val__24146_24302,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false)],null)));
var chunk__24148_24304 = null;
var count__24149_24305 = (0);
var i__24150_24306 = (0);
while(true){
if((i__24150_24306 < count__24149_24305)){
var component__7512__auto___24308 = cljs.core._nth.call(null,chunk__24148_24304,i__24150_24306);
speclj.components.install.call(null,component__7512__auto___24308,description__7511__auto____$1);


var G__24309 = seq__24147_24303;
var G__24310 = chunk__24148_24304;
var G__24311 = count__24149_24305;
var G__24312 = (i__24150_24306 + (1));
seq__24147_24303 = G__24309;
chunk__24148_24304 = G__24310;
count__24149_24305 = G__24311;
i__24150_24306 = G__24312;
continue;
} else {
var temp__5753__auto___24313 = cljs.core.seq.call(null,seq__24147_24303);
if(temp__5753__auto___24313){
var seq__24147_24314__$1 = temp__5753__auto___24313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24147_24314__$1)){
var c__5568__auto___24315 = cljs.core.chunk_first.call(null,seq__24147_24314__$1);
var G__24316 = cljs.core.chunk_rest.call(null,seq__24147_24314__$1);
var G__24317 = c__5568__auto___24315;
var G__24318 = cljs.core.count.call(null,c__5568__auto___24315);
var G__24319 = (0);
seq__24147_24303 = G__24316;
chunk__24148_24304 = G__24317;
count__24149_24305 = G__24318;
i__24150_24306 = G__24319;
continue;
} else {
var component__7512__auto___24320 = cljs.core.first.call(null,seq__24147_24314__$1);
speclj.components.install.call(null,component__7512__auto___24320,description__7511__auto____$1);


var G__24321 = cljs.core.next.call(null,seq__24147_24314__$1);
var G__24322 = null;
var G__24323 = (0);
var G__24324 = (0);
seq__24147_24303 = G__24321;
chunk__24148_24304 = G__24322;
count__24149_24305 = G__24323;
i__24150_24306 = G__24324;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__24145_24301);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7511__auto____$1);
}

return description__7511__auto____$1;
})(),(function (){var description__7511__auto____$1 = speclj.components.new_description.call(null,"renders the options by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__24155_24325 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__24156_24326 = description__7511__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__24156_24326);

try{var seq__24157_24327 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updating the page",((function (_STAR_parent_description_STAR__orig_val__24155_24325,_STAR_parent_description_STAR__temp_val__24156_24326,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var old_page = cljs.core.deref.call(null,tic_tac_toe.web_ui.page);
tic_tac_toe.web_ui.set_options.call(null);

var value__7638__auto__ = cljs.core._EQ_.call(null,old_page,cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(value__7638__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7638__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7638__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__24155_24325,_STAR_parent_description_STAR__temp_val__24156_24326,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"creating a form",((function (_STAR_parent_description_STAR__orig_val__24155_24325,_STAR_parent_description_STAR__temp_val__24156_24326,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var expected__7644__auto__ = new cljs.core.Keyword(null,"form","form",-1624062471);
var actual__7645__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24155_24325,_STAR_parent_description_STAR__temp_val__24156_24326,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"always giving game-mode options",((function (_STAR_parent_description_STAR__orig_val__24155_24325,_STAR_parent_description_STAR__temp_val__24156_24326,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var expected__7644__auto___24331 = "Player vs. AI";
var actual__7645__auto___24332 = cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)))));
if(cljs.core._EQ_.call(null,expected__7644__auto___24331,actual__7645__auto___24332)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24331 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24331)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24332 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24332))," (using =)"].join('')));
}

var expected__7644__auto__ = "Player vs. Player";
var actual__7645__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)))));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24155_24325,_STAR_parent_description_STAR__temp_val__24156_24326,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"only giving symbol options if NOT Player vs. Player",((function (_STAR_parent_description_STAR__orig_val__24155_24325,_STAR_parent_description_STAR__temp_val__24156_24326,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"player-one","player-one",-450954926));

tic_tac_toe.web_ui.set_options.call(null);

var expected__7644__auto___24333 = "X (first turn)";
var actual__7645__auto___24334 = cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(2))));
if(cljs.core._EQ_.call(null,expected__7644__auto___24333,actual__7645__auto___24334)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24333 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24333)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24334 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24334))," (using =)"].join('')));
}

var expected__7644__auto___24335 = "O (second turn)";
var actual__7645__auto___24336 = cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(2))));
if(cljs.core._EQ_.call(null,expected__7644__auto___24335,actual__7645__auto___24336)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24335 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24335)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24336 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24336))," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.get.call(null,tic_tac_toe.option_selector.menu_options,"2"));

tic_tac_toe.web_ui.set_options.call(null);

var value__7638__auto___24337 = cljs.core._EQ_.call(null,"X (first turn)",cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(2)))));
if(value__7638__auto___24337){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7638__auto___24337 == null))?"nil":cljs.core.pr_str.call(null,value__7638__auto___24337))].join('')));
} else {
}

var value__7638__auto__ = cljs.core._EQ_.call(null,"O (second turn)",cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(2)))));
if(value__7638__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7638__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7638__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__24155_24325,_STAR_parent_description_STAR__temp_val__24156_24326,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"only giving difficulty options if NOT Player vs. Player",((function (_STAR_parent_description_STAR__orig_val__24155_24325,_STAR_parent_description_STAR__temp_val__24156_24326,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"player-one","player-one",-450954926));

tic_tac_toe.web_ui.set_options.call(null);

var expected__7644__auto___24338 = "Unbeatable";
var actual__7645__auto___24339 = cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(3))));
if(cljs.core._EQ_.call(null,expected__7644__auto___24338,actual__7645__auto___24339)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24338 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24338)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24339 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24339))," (using =)"].join('')));
}

var expected__7644__auto___24340 = "Medium";
var actual__7645__auto___24341 = cljs.core.last.call(null,cljs.core.nth.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(3)),(2)));
if(cljs.core._EQ_.call(null,expected__7644__auto___24340,actual__7645__auto___24341)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24340 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24340)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24341 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24341))," (using =)"].join('')));
}

var expected__7644__auto___24342 = "Easy";
var actual__7645__auto___24343 = cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(3))));
if(cljs.core._EQ_.call(null,expected__7644__auto___24342,actual__7645__auto___24343)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24342 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24342)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24343 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24343))," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.get.call(null,tic_tac_toe.option_selector.menu_options,"2"));

tic_tac_toe.web_ui.set_options.call(null);

var value__7638__auto___24344 = cljs.core._EQ_.call(null,"Unbeatable",cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(3)))));
if(value__7638__auto___24344){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7638__auto___24344 == null))?"nil":cljs.core.pr_str.call(null,value__7638__auto___24344))].join('')));
} else {
}

var value__7638__auto___24345 = cljs.core._EQ_.call(null,"Medium",cljs.core.last.call(null,cljs.core.nth.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(3)),(2))));
if(value__7638__auto___24345){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7638__auto___24345 == null))?"nil":cljs.core.pr_str.call(null,value__7638__auto___24345))].join('')));
} else {
}

var value__7638__auto__ = cljs.core._EQ_.call(null,"Easy",cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(3)))));
if(value__7638__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7638__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7638__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__24155_24325,_STAR_parent_description_STAR__temp_val__24156_24326,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"always giving size options",((function (_STAR_parent_description_STAR__orig_val__24155_24325,_STAR_parent_description_STAR__temp_val__24156_24326,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var second_to_last = (cljs.core.count.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))) - (2));
var expected__7644__auto___24346 = "3x3";
var actual__7645__auto___24347 = cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),second_to_last)));
if(cljs.core._EQ_.call(null,expected__7644__auto___24346,actual__7645__auto___24347)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24346 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24346)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24347 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24347))," (using =)"].join('')));
}

var expected__7644__auto___24348 = "4x4";
var actual__7645__auto___24349 = cljs.core.last.call(null,cljs.core.nth.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),second_to_last),(2)));
if(cljs.core._EQ_.call(null,expected__7644__auto___24348,actual__7645__auto___24349)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24348 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24348)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24349 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24349))," (using =)"].join('')));
}

var expected__7644__auto__ = "3x3x3";
var actual__7645__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),second_to_last)));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24155_24325,_STAR_parent_description_STAR__temp_val__24156_24326,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"giving a start button",((function (_STAR_parent_description_STAR__orig_val__24155_24325,_STAR_parent_description_STAR__temp_val__24156_24326,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var expected__7644__auto__ = "Start!";
var actual__7645__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24155_24325,_STAR_parent_description_STAR__temp_val__24156_24326,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false)],null)));
var chunk__24158_24328 = null;
var count__24159_24329 = (0);
var i__24160_24330 = (0);
while(true){
if((i__24160_24330 < count__24159_24329)){
var component__7512__auto___24350 = cljs.core._nth.call(null,chunk__24158_24328,i__24160_24330);
speclj.components.install.call(null,component__7512__auto___24350,description__7511__auto____$1);


var G__24351 = seq__24157_24327;
var G__24352 = chunk__24158_24328;
var G__24353 = count__24159_24329;
var G__24354 = (i__24160_24330 + (1));
seq__24157_24327 = G__24351;
chunk__24158_24328 = G__24352;
count__24159_24329 = G__24353;
i__24160_24330 = G__24354;
continue;
} else {
var temp__5753__auto___24355 = cljs.core.seq.call(null,seq__24157_24327);
if(temp__5753__auto___24355){
var seq__24157_24356__$1 = temp__5753__auto___24355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24157_24356__$1)){
var c__5568__auto___24357 = cljs.core.chunk_first.call(null,seq__24157_24356__$1);
var G__24358 = cljs.core.chunk_rest.call(null,seq__24157_24356__$1);
var G__24359 = c__5568__auto___24357;
var G__24360 = cljs.core.count.call(null,c__5568__auto___24357);
var G__24361 = (0);
seq__24157_24327 = G__24358;
chunk__24158_24328 = G__24359;
count__24159_24329 = G__24360;
i__24160_24330 = G__24361;
continue;
} else {
var component__7512__auto___24362 = cljs.core.first.call(null,seq__24157_24356__$1);
speclj.components.install.call(null,component__7512__auto___24362,description__7511__auto____$1);


var G__24363 = cljs.core.next.call(null,seq__24157_24356__$1);
var G__24364 = null;
var G__24365 = (0);
var G__24366 = (0);
seq__24157_24327 = G__24363;
chunk__24158_24328 = G__24364;
count__24159_24329 = G__24365;
i__24160_24330 = G__24366;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__24155_24325);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7511__auto____$1);
}

return description__7511__auto____$1;
})(),(function (){var description__7511__auto____$1 = speclj.components.new_description.call(null,"starts the game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__24161_24367 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__24162_24368 = description__7511__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__24162_24368);

try{var seq__24163_24369 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"setting the players to actual players and not a config",((function (_STAR_parent_description_STAR__orig_val__24161_24367,_STAR_parent_description_STAR__temp_val__24162_24368,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var game_round_orig_val__24171 = tic_tac_toe.game_runner.game_round;
var game_round_temp_val__24172 = (function (_){
return null;
});
(tic_tac_toe.game_runner.game_round = game_round_temp_val__24172);

try{cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),true], null));

tic_tac_toe.web_ui.start_game.call(null);

var expected__7644__auto__ = new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null);
var actual__7645__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.game_runner.game_round = game_round_orig_val__24171);
}});})(_STAR_parent_description_STAR__orig_val__24161_24367,_STAR_parent_description_STAR__temp_val__24162_24368,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"running a game round",((function (_STAR_parent_description_STAR__orig_val__24161_24367,_STAR_parent_description_STAR__temp_val__24162_24368,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var game_round_orig_val__24173 = tic_tac_toe.game_runner.game_round;
var game_round_temp_val__24174 = (function (_){
return "game round!";
});
(tic_tac_toe.game_runner.game_round = game_round_temp_val__24174);

try{var expected__7644__auto__ = "game round!";
var actual__7645__auto__ = tic_tac_toe.web_ui.start_game.call(null);
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.game_runner.game_round = game_round_orig_val__24173);
}});})(_STAR_parent_description_STAR__orig_val__24161_24367,_STAR_parent_description_STAR__temp_val__24162_24368,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false)],null)));
var chunk__24164_24370 = null;
var count__24165_24371 = (0);
var i__24166_24372 = (0);
while(true){
if((i__24166_24372 < count__24165_24371)){
var component__7512__auto___24373 = cljs.core._nth.call(null,chunk__24164_24370,i__24166_24372);
speclj.components.install.call(null,component__7512__auto___24373,description__7511__auto____$1);


var G__24374 = seq__24163_24369;
var G__24375 = chunk__24164_24370;
var G__24376 = count__24165_24371;
var G__24377 = (i__24166_24372 + (1));
seq__24163_24369 = G__24374;
chunk__24164_24370 = G__24375;
count__24165_24371 = G__24376;
i__24166_24372 = G__24377;
continue;
} else {
var temp__5753__auto___24378 = cljs.core.seq.call(null,seq__24163_24369);
if(temp__5753__auto___24378){
var seq__24163_24379__$1 = temp__5753__auto___24378;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24163_24379__$1)){
var c__5568__auto___24380 = cljs.core.chunk_first.call(null,seq__24163_24379__$1);
var G__24381 = cljs.core.chunk_rest.call(null,seq__24163_24379__$1);
var G__24382 = c__5568__auto___24380;
var G__24383 = cljs.core.count.call(null,c__5568__auto___24380);
var G__24384 = (0);
seq__24163_24369 = G__24381;
chunk__24164_24370 = G__24382;
count__24165_24371 = G__24383;
i__24166_24372 = G__24384;
continue;
} else {
var component__7512__auto___24385 = cljs.core.first.call(null,seq__24163_24379__$1);
speclj.components.install.call(null,component__7512__auto___24385,description__7511__auto____$1);


var G__24386 = cljs.core.next.call(null,seq__24163_24379__$1);
var G__24387 = null;
var G__24388 = (0);
var G__24389 = (0);
seq__24163_24369 = G__24386;
chunk__24164_24370 = G__24387;
count__24165_24371 = G__24388;
i__24166_24372 = G__24389;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__24161_24367);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7511__auto____$1);
}

return description__7511__auto____$1;
})(),(function (){var description__7511__auto____$1 = speclj.components.new_description.call(null,"updates the attributes of the game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__24175_24390 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__24176_24391 = description__7511__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__24176_24391);

try{var seq__24177_24392 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updating the game state",((function (_STAR_parent_description_STAR__orig_val__24175_24390,_STAR_parent_description_STAR__temp_val__24176_24391,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
tic_tac_toe.web_ui.update_game_attribute.call(null,tic_tac_toe.option_selector.menu_options,"1",new cljs.core.Keyword(null,"players","players",-1361554569));

var expected__7644__auto___24396 = new cljs.core.Keyword(null,"one-player","one-player",-1358620345);
var actual__7645__auto___24397 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7644__auto___24396,actual__7645__auto___24397)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24396 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24396)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24397 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24397))," (using =)"].join('')));
}

tic_tac_toe.web_ui.update_game_attribute.call(null,tic_tac_toe.option_selector.menu_options,"2",new cljs.core.Keyword(null,"players","players",-1361554569));

var expected__7644__auto___24398 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),false,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player 1",(1),"Player 2",(2)], null)], null);
var actual__7645__auto___24399 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7644__auto___24398,actual__7645__auto___24399)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24398 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24398)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24399 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24399))," (using =)"].join('')));
}

tic_tac_toe.web_ui.update_game_attribute.call(null,tic_tac_toe.option_selector.difficulty_options,"1",new cljs.core.Keyword(null,"difficulty","difficulty",755680807));

var expected__7644__auto__ = (10);
var actual__7645__auto__ = new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24175_24390,_STAR_parent_description_STAR__temp_val__24176_24391,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"re-rendering the options",((function (_STAR_parent_description_STAR__orig_val__24175_24390,_STAR_parent_description_STAR__temp_val__24176_24391,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var set_options_orig_val__24183 = tic_tac_toe.web_ui.set_options;
var set_options_temp_val__24184 = (function (){
return "set options!";
});
(tic_tac_toe.web_ui.set_options = set_options_temp_val__24184);

try{var expected__7644__auto__ = "set options!";
var actual__7645__auto__ = tic_tac_toe.web_ui.update_game_attribute.call(null,tic_tac_toe.option_selector.difficulty_options,"1",new cljs.core.Keyword(null,"difficulty","difficulty",755680807));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.set_options = set_options_orig_val__24183);
}});})(_STAR_parent_description_STAR__orig_val__24175_24390,_STAR_parent_description_STAR__temp_val__24176_24391,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false)],null)));
var chunk__24178_24393 = null;
var count__24179_24394 = (0);
var i__24180_24395 = (0);
while(true){
if((i__24180_24395 < count__24179_24394)){
var component__7512__auto___24400 = cljs.core._nth.call(null,chunk__24178_24393,i__24180_24395);
speclj.components.install.call(null,component__7512__auto___24400,description__7511__auto____$1);


var G__24401 = seq__24177_24392;
var G__24402 = chunk__24178_24393;
var G__24403 = count__24179_24394;
var G__24404 = (i__24180_24395 + (1));
seq__24177_24392 = G__24401;
chunk__24178_24393 = G__24402;
count__24179_24394 = G__24403;
i__24180_24395 = G__24404;
continue;
} else {
var temp__5753__auto___24405 = cljs.core.seq.call(null,seq__24177_24392);
if(temp__5753__auto___24405){
var seq__24177_24406__$1 = temp__5753__auto___24405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24177_24406__$1)){
var c__5568__auto___24407 = cljs.core.chunk_first.call(null,seq__24177_24406__$1);
var G__24408 = cljs.core.chunk_rest.call(null,seq__24177_24406__$1);
var G__24409 = c__5568__auto___24407;
var G__24410 = cljs.core.count.call(null,c__5568__auto___24407);
var G__24411 = (0);
seq__24177_24392 = G__24408;
chunk__24178_24393 = G__24409;
count__24179_24394 = G__24410;
i__24180_24395 = G__24411;
continue;
} else {
var component__7512__auto___24412 = cljs.core.first.call(null,seq__24177_24406__$1);
speclj.components.install.call(null,component__7512__auto___24412,description__7511__auto____$1);


var G__24413 = cljs.core.next.call(null,seq__24177_24406__$1);
var G__24414 = null;
var G__24415 = (0);
var G__24416 = (0);
seq__24177_24392 = G__24413;
chunk__24178_24393 = G__24414;
count__24179_24394 = G__24415;
i__24180_24395 = G__24416;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__24175_24390);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7511__auto____$1);
}

return description__7511__auto____$1;
})(),(function (){var description__7511__auto____$1 = speclj.components.new_description.call(null,"updates the size of the game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__24185_24417 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__24186_24418 = description__7511__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__24186_24418);

try{var seq__24187_24419 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updating three-d? and board of the game-state",((function (_STAR_parent_description_STAR__orig_val__24185_24417,_STAR_parent_description_STAR__temp_val__24186_24418,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
tic_tac_toe.web_ui.update_game_size.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"size","size",1098693007),(4)], null));

var value__7638__auto___24423 = new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core.truth_(value__7638__auto___24423)){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7638__auto___24423 == null))?"nil":cljs.core.pr_str.call(null,value__7638__auto___24423))].join('')));
} else {
}

var expected__7644__auto___24424 = cljs.core.repeat.call(null,(16),(0));
var actual__7645__auto___24425 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7644__auto___24424,actual__7645__auto___24425)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24424 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24424)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24425 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24425))," (using =)"].join('')));
}

tic_tac_toe.web_ui.update_game_size.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null));

var value__7632__auto___24426 = new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core.not.call(null,value__7632__auto___24426)){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7632__auto___24426 == null))?"nil":cljs.core.pr_str.call(null,value__7632__auto___24426)),""].join('')));
} else {
}

var expected__7644__auto__ = cljs.core.repeat.call(null,(27),(0));
var actual__7645__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24185_24417,_STAR_parent_description_STAR__temp_val__24186_24418,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"re-rendering the options",((function (_STAR_parent_description_STAR__orig_val__24185_24417,_STAR_parent_description_STAR__temp_val__24186_24418,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var set_options_orig_val__24193 = tic_tac_toe.web_ui.set_options;
var set_options_temp_val__24194 = (function (){
return "set options!";
});
(tic_tac_toe.web_ui.set_options = set_options_temp_val__24194);

try{var expected__7644__auto__ = "set options!";
var actual__7645__auto__ = tic_tac_toe.web_ui.update_game_size.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"size","size",1098693007),(4)], null));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.set_options = set_options_orig_val__24193);
}});})(_STAR_parent_description_STAR__orig_val__24185_24417,_STAR_parent_description_STAR__temp_val__24186_24418,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false)],null)));
var chunk__24188_24420 = null;
var count__24189_24421 = (0);
var i__24190_24422 = (0);
while(true){
if((i__24190_24422 < count__24189_24421)){
var component__7512__auto___24427 = cljs.core._nth.call(null,chunk__24188_24420,i__24190_24422);
speclj.components.install.call(null,component__7512__auto___24427,description__7511__auto____$1);


var G__24428 = seq__24187_24419;
var G__24429 = chunk__24188_24420;
var G__24430 = count__24189_24421;
var G__24431 = (i__24190_24422 + (1));
seq__24187_24419 = G__24428;
chunk__24188_24420 = G__24429;
count__24189_24421 = G__24430;
i__24190_24422 = G__24431;
continue;
} else {
var temp__5753__auto___24432 = cljs.core.seq.call(null,seq__24187_24419);
if(temp__5753__auto___24432){
var seq__24187_24433__$1 = temp__5753__auto___24432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24187_24433__$1)){
var c__5568__auto___24434 = cljs.core.chunk_first.call(null,seq__24187_24433__$1);
var G__24435 = cljs.core.chunk_rest.call(null,seq__24187_24433__$1);
var G__24436 = c__5568__auto___24434;
var G__24437 = cljs.core.count.call(null,c__5568__auto___24434);
var G__24438 = (0);
seq__24187_24419 = G__24435;
chunk__24188_24420 = G__24436;
count__24189_24421 = G__24437;
i__24190_24422 = G__24438;
continue;
} else {
var component__7512__auto___24439 = cljs.core.first.call(null,seq__24187_24433__$1);
speclj.components.install.call(null,component__7512__auto___24439,description__7511__auto____$1);


var G__24440 = cljs.core.next.call(null,seq__24187_24433__$1);
var G__24441 = null;
var G__24442 = (0);
var G__24443 = (0);
seq__24187_24419 = G__24440;
chunk__24188_24420 = G__24441;
count__24189_24421 = G__24442;
i__24190_24422 = G__24443;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__24185_24417);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7511__auto____$1);
}

return description__7511__auto____$1;
})(),speclj.components.new_characteristic.call(null,"gets a default game for web-ui",((function (_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var default_game = tic_tac_toe.web_ui.get_default_game.call(null);
var expected__7644__auto___24444 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),true,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null)], null);
var actual__7645__auto___24445 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(default_game);
if(cljs.core._EQ_.call(null,expected__7644__auto___24444,actual__7645__auto___24445)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24444 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24444)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24445 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24445))," (using =)"].join('')));
}

var expected__7644__auto___24446 = (10);
var actual__7645__auto___24447 = new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(default_game);
if(cljs.core._EQ_.call(null,expected__7644__auto___24446,actual__7645__auto___24447)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24446 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24446)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24447 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24447))," (using =)"].join('')));
}

var expected__7644__auto___24448 = cljs.core.repeat.call(null,(9),(0));
var actual__7645__auto___24449 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(default_game);
if(cljs.core._EQ_.call(null,expected__7644__auto___24448,actual__7645__auto___24449)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24448 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24448)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24449 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24449))," (using =)"].join('')));
}

var value__7638__auto___24450 = new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(default_game);
if(cljs.core.truth_(value__7638__auto___24450)){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7638__auto___24450 == null))?"nil":cljs.core.pr_str.call(null,value__7638__auto___24450))].join('')));
} else {
}

var value__7632__auto___24451 = (new cljs.core.Keyword(null,"save-location","save-location",1426336611).cljs$core$IFn$_invoke$arity$1(default_game) == null);
if((!(value__7632__auto___24451))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7632__auto___24451 == null))?"nil":cljs.core.pr_str.call(null,value__7632__auto___24451)),""].join('')));
} else {
}

var expected__7644__auto__ = new cljs.core.Keyword(null,"web-ui","web-ui",802472408);
var actual__7645__auto__ = new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(default_game);
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),(function (){var description__7511__auto____$1 = speclj.components.new_description.call(null,"ends the game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__24195_24452 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__24196_24453 = description__7511__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__24196_24453);

try{var seq__24197_24454 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"displaying an end condition on the page",((function (_STAR_parent_description_STAR__orig_val__24195_24452,_STAR_parent_description_STAR__temp_val__24196_24453,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
tic_tac_toe.ui_interface.end_game.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"end-cond","end-cond",-1031076501),"AI Wins!"], null));

var expected__7644__auto__ = "AI Wins!";
var actual__7645__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24195_24452,_STAR_parent_description_STAR__temp_val__24196_24453,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"Giving the user the option to retry",((function (_STAR_parent_description_STAR__orig_val__24195_24452,_STAR_parent_description_STAR__temp_val__24196_24453,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var expected__7644__auto__ = "Retry";
var actual__7645__auto__ = cljs.core.last.call(null,cljs.core.nth.call(null,cljs.core.last.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),(2)));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24195_24452,_STAR_parent_description_STAR__temp_val__24196_24453,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"Giving the user the option to go back to menu",((function (_STAR_parent_description_STAR__orig_val__24195_24452,_STAR_parent_description_STAR__temp_val__24196_24453,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var expected__7644__auto__ = "Back to Menu";
var actual__7645__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.last.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)))));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24195_24452,_STAR_parent_description_STAR__temp_val__24196_24453,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false)],null)));
var chunk__24198_24455 = null;
var count__24199_24456 = (0);
var i__24200_24457 = (0);
while(true){
if((i__24200_24457 < count__24199_24456)){
var component__7512__auto___24458 = cljs.core._nth.call(null,chunk__24198_24455,i__24200_24457);
speclj.components.install.call(null,component__7512__auto___24458,description__7511__auto____$1);


var G__24459 = seq__24197_24454;
var G__24460 = chunk__24198_24455;
var G__24461 = count__24199_24456;
var G__24462 = (i__24200_24457 + (1));
seq__24197_24454 = G__24459;
chunk__24198_24455 = G__24460;
count__24199_24456 = G__24461;
i__24200_24457 = G__24462;
continue;
} else {
var temp__5753__auto___24463 = cljs.core.seq.call(null,seq__24197_24454);
if(temp__5753__auto___24463){
var seq__24197_24464__$1 = temp__5753__auto___24463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24197_24464__$1)){
var c__5568__auto___24465 = cljs.core.chunk_first.call(null,seq__24197_24464__$1);
var G__24466 = cljs.core.chunk_rest.call(null,seq__24197_24464__$1);
var G__24467 = c__5568__auto___24465;
var G__24468 = cljs.core.count.call(null,c__5568__auto___24465);
var G__24469 = (0);
seq__24197_24454 = G__24466;
chunk__24198_24455 = G__24467;
count__24199_24456 = G__24468;
i__24200_24457 = G__24469;
continue;
} else {
var component__7512__auto___24470 = cljs.core.first.call(null,seq__24197_24464__$1);
speclj.components.install.call(null,component__7512__auto___24470,description__7511__auto____$1);


var G__24471 = cljs.core.next.call(null,seq__24197_24464__$1);
var G__24472 = null;
var G__24473 = (0);
var G__24474 = (0);
seq__24197_24454 = G__24471;
chunk__24198_24455 = G__24472;
count__24199_24456 = G__24473;
i__24200_24457 = G__24474;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__24195_24452);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7511__auto____$1);
}

return description__7511__auto____$1;
})(),(function (){var description__7511__auto____$1 = speclj.components.new_description.call(null,"resets the game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__24201_24475 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__24202_24476 = description__7511__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__24202_24476);

try{var seq__24203_24477 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"setting the page text back to the page-title",((function (_STAR_parent_description_STAR__orig_val__24201_24475,_STAR_parent_description_STAR__temp_val__24202_24476,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var game_round_orig_val__24211 = tic_tac_toe.game_runner.game_round;
var game_round_temp_val__24212 = (function (_){
return null;
});
(tic_tac_toe.game_runner.game_round = game_round_temp_val__24212);

try{cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),"not the title");

var expected__7644__auto___24481 = "not the title";
var actual__7645__auto___24482 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7644__auto___24481,actual__7645__auto___24482)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24481 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24481)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24482 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24482))," (using =)"].join('')));
}

tic_tac_toe.web_ui.reset_game.call(null);

var expected__7644__auto__ = "Welcome to TicTacToe!";
var actual__7645__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.game_runner.game_round = game_round_orig_val__24211);
}});})(_STAR_parent_description_STAR__orig_val__24201_24475,_STAR_parent_description_STAR__temp_val__24202_24476,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"resetting the game attributes and passing it into a new game-round",((function (_STAR_parent_description_STAR__orig_val__24201_24475,_STAR_parent_description_STAR__temp_val__24202_24476,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var game_round_orig_val__24213 = tic_tac_toe.game_runner.game_round;
var game_round_temp_val__24214 = (function (game){
return game;
});
(tic_tac_toe.game_runner.game_round = game_round_temp_val__24214);

try{cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"round","round",2009433328),(7));

cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(1),(0),(0)], null));

var expected__7644__auto___24483 = (7);
var actual__7645__auto___24484 = new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7644__auto___24483,actual__7645__auto___24484)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24483 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24483)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24484 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24484))," (using =)"].join('')));
}

var expected__7644__auto___24485 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(1),(0),(0)], null);
var actual__7645__auto___24486 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7644__auto___24485,actual__7645__auto___24486)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24485 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24485)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24486 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24486))," (using =)"].join('')));
}

var reset_game = tic_tac_toe.web_ui.reset_game.call(null);
var expected__7644__auto___24487 = (1);
var actual__7645__auto___24488 = new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(reset_game);
if(cljs.core._EQ_.call(null,expected__7644__auto___24487,actual__7645__auto___24488)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24487 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24487)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24488 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24488))," (using =)"].join('')));
}

var expected__7644__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__7645__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(reset_game);
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.game_runner.game_round = game_round_orig_val__24213);
}});})(_STAR_parent_description_STAR__orig_val__24201_24475,_STAR_parent_description_STAR__temp_val__24202_24476,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false)],null)));
var chunk__24204_24478 = null;
var count__24205_24479 = (0);
var i__24206_24480 = (0);
while(true){
if((i__24206_24480 < count__24205_24479)){
var component__7512__auto___24489 = cljs.core._nth.call(null,chunk__24204_24478,i__24206_24480);
speclj.components.install.call(null,component__7512__auto___24489,description__7511__auto____$1);


var G__24490 = seq__24203_24477;
var G__24491 = chunk__24204_24478;
var G__24492 = count__24205_24479;
var G__24493 = (i__24206_24480 + (1));
seq__24203_24477 = G__24490;
chunk__24204_24478 = G__24491;
count__24205_24479 = G__24492;
i__24206_24480 = G__24493;
continue;
} else {
var temp__5753__auto___24494 = cljs.core.seq.call(null,seq__24203_24477);
if(temp__5753__auto___24494){
var seq__24203_24495__$1 = temp__5753__auto___24494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24203_24495__$1)){
var c__5568__auto___24496 = cljs.core.chunk_first.call(null,seq__24203_24495__$1);
var G__24497 = cljs.core.chunk_rest.call(null,seq__24203_24495__$1);
var G__24498 = c__5568__auto___24496;
var G__24499 = cljs.core.count.call(null,c__5568__auto___24496);
var G__24500 = (0);
seq__24203_24477 = G__24497;
chunk__24204_24478 = G__24498;
count__24205_24479 = G__24499;
i__24206_24480 = G__24500;
continue;
} else {
var component__7512__auto___24501 = cljs.core.first.call(null,seq__24203_24495__$1);
speclj.components.install.call(null,component__7512__auto___24501,description__7511__auto____$1);


var G__24502 = cljs.core.next.call(null,seq__24203_24495__$1);
var G__24503 = null;
var G__24504 = (0);
var G__24505 = (0);
seq__24203_24477 = G__24502;
chunk__24204_24478 = G__24503;
count__24205_24479 = G__24504;
i__24206_24480 = G__24505;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__24201_24475);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7511__auto____$1);
}

return description__7511__auto____$1;
})(),(function (){var description__7511__auto____$1 = speclj.components.new_description.call(null,"makes a move by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__24215_24506 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__24216_24507 = description__7511__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__24216_24507);

try{var seq__24217_24508 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updating the page to a newly updated game-state",((function (_STAR_parent_description_STAR__orig_val__24215_24506,_STAR_parent_description_STAR__temp_val__24216_24507,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var display_board_orig_val__24225 = tic_tac_toe.web_ui.display_board;
var display_board_temp_val__24226 = (function (_){
return "board display";
});
(tic_tac_toe.web_ui.display_board = display_board_temp_val__24226);

try{tic_tac_toe.ui_interface.make_move.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"game","game",-441523833),tic_tac_toe.web_ui_spec.example_game,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),(1)], null));

var expected__7644__auto__ = "board display";
var actual__7645__auto__ = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.display_board = display_board_orig_val__24225);
}});})(_STAR_parent_description_STAR__orig_val__24215_24506,_STAR_parent_description_STAR__temp_val__24216_24507,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"returning a keyword to indicate a user move",((function (_STAR_parent_description_STAR__orig_val__24215_24506,_STAR_parent_description_STAR__temp_val__24216_24507,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var display_board_orig_val__24227 = tic_tac_toe.web_ui.display_board;
var display_board_temp_val__24228 = (function (_){
return null;
});
(tic_tac_toe.web_ui.display_board = display_board_temp_val__24228);

try{var expected__7644__auto__ = new cljs.core.Keyword(null,"player-turn","player-turn",1660424586);
var actual__7645__auto__ = tic_tac_toe.ui_interface.make_move.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.display_board = display_board_orig_val__24227);
}});})(_STAR_parent_description_STAR__orig_val__24215_24506,_STAR_parent_description_STAR__temp_val__24216_24507,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false)],null)));
var chunk__24218_24509 = null;
var count__24219_24510 = (0);
var i__24220_24511 = (0);
while(true){
if((i__24220_24511 < count__24219_24510)){
var component__7512__auto___24512 = cljs.core._nth.call(null,chunk__24218_24509,i__24220_24511);
speclj.components.install.call(null,component__7512__auto___24512,description__7511__auto____$1);


var G__24513 = seq__24217_24508;
var G__24514 = chunk__24218_24509;
var G__24515 = count__24219_24510;
var G__24516 = (i__24220_24511 + (1));
seq__24217_24508 = G__24513;
chunk__24218_24509 = G__24514;
count__24219_24510 = G__24515;
i__24220_24511 = G__24516;
continue;
} else {
var temp__5753__auto___24517 = cljs.core.seq.call(null,seq__24217_24508);
if(temp__5753__auto___24517){
var seq__24217_24518__$1 = temp__5753__auto___24517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24217_24518__$1)){
var c__5568__auto___24519 = cljs.core.chunk_first.call(null,seq__24217_24518__$1);
var G__24520 = cljs.core.chunk_rest.call(null,seq__24217_24518__$1);
var G__24521 = c__5568__auto___24519;
var G__24522 = cljs.core.count.call(null,c__5568__auto___24519);
var G__24523 = (0);
seq__24217_24508 = G__24520;
chunk__24218_24509 = G__24521;
count__24219_24510 = G__24522;
i__24220_24511 = G__24523;
continue;
} else {
var component__7512__auto___24524 = cljs.core.first.call(null,seq__24217_24518__$1);
speclj.components.install.call(null,component__7512__auto___24524,description__7511__auto____$1);


var G__24525 = cljs.core.next.call(null,seq__24217_24518__$1);
var G__24526 = null;
var G__24527 = (0);
var G__24528 = (0);
seq__24217_24508 = G__24525;
chunk__24218_24509 = G__24526;
count__24219_24510 = G__24527;
i__24220_24511 = G__24528;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__24215_24506);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7511__auto____$1);
}

return description__7511__auto____$1;
})(),(function (){var description__7511__auto____$1 = speclj.components.new_description.call(null,"gives the round output by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__24229_24529 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__24230_24530 = description__7511__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__24230_24530);

try{var seq__24231_24531 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"setting the game state to the passed in game parameter",((function (_STAR_parent_description_STAR__orig_val__24229_24529,_STAR_parent_description_STAR__temp_val__24230_24530,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var display_board_orig_val__24239 = tic_tac_toe.web_ui.display_board;
var display_board_temp_val__24240 = (function (_){
return null;
});
(tic_tac_toe.web_ui.display_board = display_board_temp_val__24240);

try{tic_tac_toe.ui_interface.round_output.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"game","game",-441523833),"example"], null));

var expected__7644__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"game","game",-441523833),"example"], null);
var actual__7645__auto__ = cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state);
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.display_board = display_board_orig_val__24239);
}});})(_STAR_parent_description_STAR__orig_val__24229_24529,_STAR_parent_description_STAR__temp_val__24230_24530,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"updating the page to a newly updated game-state",((function (_STAR_parent_description_STAR__orig_val__24229_24529,_STAR_parent_description_STAR__temp_val__24230_24530,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var display_board_orig_val__24241 = tic_tac_toe.web_ui.display_board;
var display_board_temp_val__24242 = (function (_){
return "board display";
});
(tic_tac_toe.web_ui.display_board = display_board_temp_val__24242);

try{tic_tac_toe.ui_interface.round_output.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"game","game",-441523833),tic_tac_toe.web_ui_spec.example_game], null));

var expected__7644__auto__ = "board display";
var actual__7645__auto__ = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.display_board = display_board_orig_val__24241);
}});})(_STAR_parent_description_STAR__orig_val__24229_24529,_STAR_parent_description_STAR__temp_val__24230_24530,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false)],null)));
var chunk__24232_24532 = null;
var count__24233_24533 = (0);
var i__24234_24534 = (0);
while(true){
if((i__24234_24534 < count__24233_24533)){
var component__7512__auto___24535 = cljs.core._nth.call(null,chunk__24232_24532,i__24234_24534);
speclj.components.install.call(null,component__7512__auto___24535,description__7511__auto____$1);


var G__24536 = seq__24231_24531;
var G__24537 = chunk__24232_24532;
var G__24538 = count__24233_24533;
var G__24539 = (i__24234_24534 + (1));
seq__24231_24531 = G__24536;
chunk__24232_24532 = G__24537;
count__24233_24533 = G__24538;
i__24234_24534 = G__24539;
continue;
} else {
var temp__5753__auto___24540 = cljs.core.seq.call(null,seq__24231_24531);
if(temp__5753__auto___24540){
var seq__24231_24541__$1 = temp__5753__auto___24540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24231_24541__$1)){
var c__5568__auto___24542 = cljs.core.chunk_first.call(null,seq__24231_24541__$1);
var G__24543 = cljs.core.chunk_rest.call(null,seq__24231_24541__$1);
var G__24544 = c__5568__auto___24542;
var G__24545 = cljs.core.count.call(null,c__5568__auto___24542);
var G__24546 = (0);
seq__24231_24531 = G__24543;
chunk__24232_24532 = G__24544;
count__24233_24533 = G__24545;
i__24234_24534 = G__24546;
continue;
} else {
var component__7512__auto___24547 = cljs.core.first.call(null,seq__24231_24541__$1);
speclj.components.install.call(null,component__7512__auto___24547,description__7511__auto____$1);


var G__24548 = cljs.core.next.call(null,seq__24231_24541__$1);
var G__24549 = null;
var G__24550 = (0);
var G__24551 = (0);
seq__24231_24531 = G__24548;
chunk__24232_24532 = G__24549;
count__24233_24533 = G__24550;
i__24234_24534 = G__24551;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__24229_24529);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7511__auto____$1);
}

return description__7511__auto____$1;
})(),(function (){var description__7511__auto____$1 = speclj.components.new_description.call(null,"displays",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__24243_24552 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__24244_24553 = description__7511__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__24244_24553);

try{var seq__24245_24554 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"row 0 of a 3x3",((function (_STAR_parent_description_STAR__orig_val__24243_24552,_STAR_parent_description_STAR__temp_val__24244_24553,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var row = tic_tac_toe.web_ui.display_row.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(1),(1),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(0),null);
var expected__7644__auto___24558 = (3);
var actual__7645__auto___24559 = cljs.core.count.call(null,row);
if(cljs.core._EQ_.call(null,expected__7644__auto___24558,actual__7645__auto___24559)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24558 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24558)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24559 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24559))," (using =)"].join('')));
}

var expected__7644__auto___24560 = " ";
var actual__7645__auto___24561 = cljs.core.last.call(null,cljs.core.first.call(null,row));
if(cljs.core._EQ_.call(null,expected__7644__auto___24560,actual__7645__auto___24561)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24560 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24560)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24561 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24561))," (using =)"].join('')));
}

var expected__7644__auto___24562 = " ";
var actual__7645__auto___24563 = cljs.core.last.call(null,cljs.core.second.call(null,row));
if(cljs.core._EQ_.call(null,expected__7644__auto___24562,actual__7645__auto___24563)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24562 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24562)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24563 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24563))," (using =)"].join('')));
}

var expected__7644__auto__ = " ";
var actual__7645__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,row));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24243_24552,_STAR_parent_description_STAR__temp_val__24244_24553,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"row 1 of a 4x4",((function (_STAR_parent_description_STAR__orig_val__24243_24552,_STAR_parent_description_STAR__temp_val__24244_24553,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var row = tic_tac_toe.web_ui.display_row.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(2),(2),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1),null);
var expected__7644__auto___24564 = (4);
var actual__7645__auto___24565 = cljs.core.count.call(null,row);
if(cljs.core._EQ_.call(null,expected__7644__auto___24564,actual__7645__auto___24565)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24564 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24564)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24565 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24565))," (using =)"].join('')));
}

var expected__7644__auto___24566 = "X";
var actual__7645__auto___24567 = cljs.core.last.call(null,cljs.core.first.call(null,row));
if(cljs.core._EQ_.call(null,expected__7644__auto___24566,actual__7645__auto___24567)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24566 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24566)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24567 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24567))," (using =)"].join('')));
}

var expected__7644__auto___24568 = "X";
var actual__7645__auto___24569 = cljs.core.last.call(null,cljs.core.second.call(null,row));
if(cljs.core._EQ_.call(null,expected__7644__auto___24568,actual__7645__auto___24569)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24568 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24568)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24569 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24569))," (using =)"].join('')));
}

var expected__7644__auto___24570 = "O";
var actual__7645__auto___24571 = cljs.core.last.call(null,cljs.core.nth.call(null,row,(2)));
if(cljs.core._EQ_.call(null,expected__7644__auto___24570,actual__7645__auto___24571)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24570 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24570)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24571 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24571))," (using =)"].join('')));
}

var expected__7644__auto__ = "O";
var actual__7645__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,row));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24243_24552,_STAR_parent_description_STAR__temp_val__24244_24553,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"row 0 of a 3x3x3",((function (_STAR_parent_description_STAR__orig_val__24243_24552,_STAR_parent_description_STAR__temp_val__24244_24553,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var row = tic_tac_toe.web_ui.display_row.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(27),(0)),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null),(0),null);
var expected__7644__auto___24572 = (3);
var actual__7645__auto___24573 = cljs.core.count.call(null,row);
if(cljs.core._EQ_.call(null,expected__7644__auto___24572,actual__7645__auto___24573)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24572 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24572)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24573 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24573))," (using =)"].join('')));
}

var expected__7644__auto___24574 = " ";
var actual__7645__auto___24575 = cljs.core.last.call(null,cljs.core.first.call(null,row));
if(cljs.core._EQ_.call(null,expected__7644__auto___24574,actual__7645__auto___24575)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24574 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24574)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24575 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24575))," (using =)"].join('')));
}

var expected__7644__auto___24576 = " ";
var actual__7645__auto___24577 = cljs.core.last.call(null,cljs.core.second.call(null,row));
if(cljs.core._EQ_.call(null,expected__7644__auto___24576,actual__7645__auto___24577)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24576 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24576)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24577 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24577))," (using =)"].join('')));
}

var expected__7644__auto__ = " ";
var actual__7645__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,row));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24243_24552,_STAR_parent_description_STAR__temp_val__24244_24553,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"entire 3x3 board",((function (_STAR_parent_description_STAR__orig_val__24243_24552,_STAR_parent_description_STAR__temp_val__24244_24553,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var rows = tic_tac_toe.web_ui.display_board.call(null,tic_tac_toe.web_ui_spec.example_game,(1));
var expected__7644__auto___24578 = (3);
var actual__7645__auto___24579 = cljs.core.count.call(null,rows);
if(cljs.core._EQ_.call(null,expected__7644__auto___24578,actual__7645__auto___24579)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24578 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24578)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24579 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24579))," (using =)"].join('')));
}

var expected__7644__auto__ = "O";
var actual__7645__auto__ = cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.second.call(null,cljs.core.second.call(null,rows))));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24243_24552,_STAR_parent_description_STAR__temp_val__24244_24553,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"entire 3x3x3 board",((function (_STAR_parent_description_STAR__orig_val__24243_24552,_STAR_parent_description_STAR__temp_val__24244_24553,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var new_game = cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.web_ui_spec.example_game,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(27),(0))),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true);
var rows = tic_tac_toe.web_ui.display_board.call(null,new_game,(1));
var expected__7644__auto___24580 = (9);
var actual__7645__auto___24581 = cljs.core.count.call(null,rows);
if(cljs.core._EQ_.call(null,expected__7644__auto___24580,actual__7645__auto___24581)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24580 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24580)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24581 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24581))," (using =)"].join('')));
}

var expected__7644__auto__ = " ";
var actual__7645__auto__ = cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.nth.call(null,cljs.core.second.call(null,rows),(2))));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24243_24552,_STAR_parent_description_STAR__temp_val__24244_24553,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false)],null)));
var chunk__24246_24555 = null;
var count__24247_24556 = (0);
var i__24248_24557 = (0);
while(true){
if((i__24248_24557 < count__24247_24556)){
var component__7512__auto___24582 = cljs.core._nth.call(null,chunk__24246_24555,i__24248_24557);
speclj.components.install.call(null,component__7512__auto___24582,description__7511__auto____$1);


var G__24583 = seq__24245_24554;
var G__24584 = chunk__24246_24555;
var G__24585 = count__24247_24556;
var G__24586 = (i__24248_24557 + (1));
seq__24245_24554 = G__24583;
chunk__24246_24555 = G__24584;
count__24247_24556 = G__24585;
i__24248_24557 = G__24586;
continue;
} else {
var temp__5753__auto___24587 = cljs.core.seq.call(null,seq__24245_24554);
if(temp__5753__auto___24587){
var seq__24245_24588__$1 = temp__5753__auto___24587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24245_24588__$1)){
var c__5568__auto___24589 = cljs.core.chunk_first.call(null,seq__24245_24588__$1);
var G__24590 = cljs.core.chunk_rest.call(null,seq__24245_24588__$1);
var G__24591 = c__5568__auto___24589;
var G__24592 = cljs.core.count.call(null,c__5568__auto___24589);
var G__24593 = (0);
seq__24245_24554 = G__24590;
chunk__24246_24555 = G__24591;
count__24247_24556 = G__24592;
i__24248_24557 = G__24593;
continue;
} else {
var component__7512__auto___24594 = cljs.core.first.call(null,seq__24245_24588__$1);
speclj.components.install.call(null,component__7512__auto___24594,description__7511__auto____$1);


var G__24595 = cljs.core.next.call(null,seq__24245_24588__$1);
var G__24596 = null;
var G__24597 = (0);
var G__24598 = (0);
seq__24245_24554 = G__24595;
chunk__24246_24555 = G__24596;
count__24247_24556 = G__24597;
i__24248_24557 = G__24598;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__24243_24552);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7511__auto____$1);
}

return description__7511__auto____$1;
})(),(function (){var description__7511__auto____$1 = speclj.components.new_description.call(null,"plays a move on the board by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__24249_24599 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__24250_24600 = description__7511__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__24250_24600);

try{var seq__24251_24601 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updating the game state if given a valid move",((function (_STAR_parent_description_STAR__orig_val__24249_24599,_STAR_parent_description_STAR__temp_val__24250_24600,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var play_next_round_orig_val__24263 = tic_tac_toe.web_ui.play_next_round;
var play_next_round_temp_val__24264 = (function (){
return null;
});
(tic_tac_toe.web_ui.play_next_round = play_next_round_temp_val__24264);

try{cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,tic_tac_toe.web_ui_spec.example_game);

tic_tac_toe.web_ui.play_move_BANG_.call(null,tic_tac_toe.web_ui_spec.example_game,(8),(2));

var expected__7644__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(2),(0),(0),(0),(2)], null);
var actual__7645__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.play_next_round = play_next_round_orig_val__24263);
}});})(_STAR_parent_description_STAR__orig_val__24249_24599,_STAR_parent_description_STAR__temp_val__24250_24600,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"not updating the game state if given an invalid move",((function (_STAR_parent_description_STAR__orig_val__24249_24599,_STAR_parent_description_STAR__temp_val__24250_24600,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var play_next_round_orig_val__24265 = tic_tac_toe.web_ui.play_next_round;
var play_next_round_temp_val__24266 = (function (){
return null;
});
(tic_tac_toe.web_ui.play_next_round = play_next_round_temp_val__24266);

try{cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,tic_tac_toe.web_ui_spec.example_game);

tic_tac_toe.web_ui.play_move_BANG_.call(null,tic_tac_toe.web_ui_spec.example_game,(0),(1));

var expected__7644__auto___24605 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(2),(0),(0),(0),(0)], null);
var actual__7645__auto___24606 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7644__auto___24605,actual__7645__auto___24606)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24605 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24605)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24606 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24606))," (using =)"].join('')));
}

tic_tac_toe.web_ui.play_move_BANG_.call(null,tic_tac_toe.web_ui_spec.example_game,(8),null);

var expected__7644__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(2),(0),(0),(0),(0)], null);
var actual__7645__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.play_next_round = play_next_round_orig_val__24265);
}});})(_STAR_parent_description_STAR__orig_val__24249_24599,_STAR_parent_description_STAR__temp_val__24250_24600,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"plays the next round in the game",((function (_STAR_parent_description_STAR__orig_val__24249_24599,_STAR_parent_description_STAR__temp_val__24250_24600,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var game_round_orig_val__24267 = tic_tac_toe.game_runner.game_round;
var end_game_if_game_over_orig_val__24268 = tic_tac_toe.web_ui.end_game_if_game_over;
var game_round_temp_val__24269 = (function (_){
return "next round!";
});
var end_game_if_game_over_temp_val__24270 = (function (state){
return state;
});
(tic_tac_toe.game_runner.game_round = game_round_temp_val__24269);

(tic_tac_toe.web_ui.end_game_if_game_over = end_game_if_game_over_temp_val__24270);

try{var expected__7644__auto__ = "next round!";
var actual__7645__auto__ = tic_tac_toe.web_ui.play_move_BANG_.call(null,tic_tac_toe.web_ui_spec.example_game,(0),(1));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.end_game_if_game_over = end_game_if_game_over_orig_val__24268);

(tic_tac_toe.game_runner.game_round = game_round_orig_val__24267);
}});})(_STAR_parent_description_STAR__orig_val__24249_24599,_STAR_parent_description_STAR__temp_val__24250_24600,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"ending the game if an end condition is met",((function (_STAR_parent_description_STAR__orig_val__24249_24599,_STAR_parent_description_STAR__temp_val__24250_24600,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var finished_game = cljs.core.assoc.call(null,tic_tac_toe.web_ui_spec.example_game,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(0),(0),(0)], null));
tic_tac_toe.web_ui.play_move_BANG_.call(null,finished_game,(6),(1));

var expected__7644__auto__ = "\nPlayer wins!";
var actual__7645__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24249_24599,_STAR_parent_description_STAR__temp_val__24250_24600,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false),speclj.components.new_characteristic.call(null,"ending the game if the next round is an ai turn that ends the game",((function (_STAR_parent_description_STAR__orig_val__24249_24599,_STAR_parent_description_STAR__temp_val__24250_24600,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271){
return (function (){
var finished_game_24607 = cljs.core.assoc.call(null,tic_tac_toe.web_ui_spec.example_game,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(1),(2),(1),(0),(0),(0),(0)], null));
cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,finished_game_24607);

tic_tac_toe.web_ui.play_move_BANG_.call(null,finished_game_24607,(1),(1));

var expected__7644__auto___24608 = "\nAI wins!";
var actual__7645__auto___24609 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7644__auto___24608,actual__7645__auto___24609)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto___24608 == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto___24608)),speclj.platform.endl,"     got: ",(((actual__7645__auto___24609 == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto___24609))," (using =)"].join('')));
}

var finished_game = cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.web_ui_spec.example_game,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(2),(2),(2),(0),(1),(2),(1)], null)),new cljs.core.Keyword(null,"round","round",2009433328),(9));
cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,finished_game);

tic_tac_toe.web_ui.play_move_BANG_.call(null,finished_game,(5),(1));

var expected__7644__auto__ = "\nTie!";
var actual__7645__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7644__auto__,actual__7645__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7644__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7644__auto__)),speclj.platform.endl,"     got: ",(((actual__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7645__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24249_24599,_STAR_parent_description_STAR__temp_val__24250_24600,description__7511__auto____$1,_STAR_parent_description_STAR__orig_val__23969_24272,_STAR_parent_description_STAR__temp_val__23970_24273,description__7511__auto___24271))
,false)],null)));
var chunk__24252_24602 = null;
var count__24253_24603 = (0);
var i__24254_24604 = (0);
while(true){
if((i__24254_24604 < count__24253_24603)){
var component__7512__auto___24610 = cljs.core._nth.call(null,chunk__24252_24602,i__24254_24604);
speclj.components.install.call(null,component__7512__auto___24610,description__7511__auto____$1);


var G__24611 = seq__24251_24601;
var G__24612 = chunk__24252_24602;
var G__24613 = count__24253_24603;
var G__24614 = (i__24254_24604 + (1));
seq__24251_24601 = G__24611;
chunk__24252_24602 = G__24612;
count__24253_24603 = G__24613;
i__24254_24604 = G__24614;
continue;
} else {
var temp__5753__auto___24615 = cljs.core.seq.call(null,seq__24251_24601);
if(temp__5753__auto___24615){
var seq__24251_24616__$1 = temp__5753__auto___24615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24251_24616__$1)){
var c__5568__auto___24617 = cljs.core.chunk_first.call(null,seq__24251_24616__$1);
var G__24618 = cljs.core.chunk_rest.call(null,seq__24251_24616__$1);
var G__24619 = c__5568__auto___24617;
var G__24620 = cljs.core.count.call(null,c__5568__auto___24617);
var G__24621 = (0);
seq__24251_24601 = G__24618;
chunk__24252_24602 = G__24619;
count__24253_24603 = G__24620;
i__24254_24604 = G__24621;
continue;
} else {
var component__7512__auto___24622 = cljs.core.first.call(null,seq__24251_24616__$1);
speclj.components.install.call(null,component__7512__auto___24622,description__7511__auto____$1);


var G__24623 = cljs.core.next.call(null,seq__24251_24616__$1);
var G__24624 = null;
var G__24625 = (0);
var G__24626 = (0);
seq__24251_24601 = G__24623;
chunk__24252_24602 = G__24624;
count__24253_24603 = G__24625;
i__24254_24604 = G__24626;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__24249_24599);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7511__auto____$1);
}

return description__7511__auto____$1;
})()],null)));
var chunk__23972_24275 = null;
var count__23973_24276 = (0);
var i__23974_24277 = (0);
while(true){
if((i__23974_24277 < count__23973_24276)){
var component__7512__auto___24627 = cljs.core._nth.call(null,chunk__23972_24275,i__23974_24277);
speclj.components.install.call(null,component__7512__auto___24627,description__7511__auto___24271);


var G__24628 = seq__23971_24274;
var G__24629 = chunk__23972_24275;
var G__24630 = count__23973_24276;
var G__24631 = (i__23974_24277 + (1));
seq__23971_24274 = G__24628;
chunk__23972_24275 = G__24629;
count__23973_24276 = G__24630;
i__23974_24277 = G__24631;
continue;
} else {
var temp__5753__auto___24632 = cljs.core.seq.call(null,seq__23971_24274);
if(temp__5753__auto___24632){
var seq__23971_24633__$1 = temp__5753__auto___24632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23971_24633__$1)){
var c__5568__auto___24634 = cljs.core.chunk_first.call(null,seq__23971_24633__$1);
var G__24635 = cljs.core.chunk_rest.call(null,seq__23971_24633__$1);
var G__24636 = c__5568__auto___24634;
var G__24637 = cljs.core.count.call(null,c__5568__auto___24634);
var G__24638 = (0);
seq__23971_24274 = G__24635;
chunk__23972_24275 = G__24636;
count__23973_24276 = G__24637;
i__23974_24277 = G__24638;
continue;
} else {
var component__7512__auto___24639 = cljs.core.first.call(null,seq__23971_24633__$1);
speclj.components.install.call(null,component__7512__auto___24639,description__7511__auto___24271);


var G__24640 = cljs.core.next.call(null,seq__23971_24633__$1);
var G__24641 = null;
var G__24642 = (0);
var G__24643 = (0);
seq__23971_24274 = G__24640;
chunk__23972_24275 = G__24641;
count__23973_24276 = G__24642;
i__23974_24277 = G__24643;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__23969_24272);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7511__auto___24271);
}


//# sourceMappingURL=web_ui_spec.js.map
