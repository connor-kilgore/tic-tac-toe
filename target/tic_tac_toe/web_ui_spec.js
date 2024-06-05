// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.web_ui_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.game_runner');
goog.require('tic_tac_toe.web_ui');
goog.require('tic_tac_toe.ui_interface');
goog.require('tic_tac_toe.option_selector');
goog.require('reagent.core');
goog.require('clojure.string');
tic_tac_toe.web_ui_spec.example_game = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),(10),new cljs.core.Keyword(null,"round","round",2009433328),(5),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(2),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"save-location","save-location",1426336611),null,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.PersistentVector.EMPTY], null);
tic_tac_toe.web_ui_spec.get_element = (function tic_tac_toe$web_ui_spec$get_element(selector){
return document.querySelector(selector);
});
tic_tac_toe.web_ui_spec.click_flush = (function tic_tac_toe$web_ui_spec$click_flush(button){
button.click();

return reagent.core.flush.call(null);
});
var description__7669__auto___8530 = speclj.components.new_description.call(null,"Web UI",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8164_8531 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8165_8532 = description__7669__auto___8530;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8165_8532);

try{var seq__8166_8533 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,16,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7669__auto____$1 = speclj.components.new_description.call(null,"user interactions have side effects, such as",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8350_8537 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8351_8538 = description__7669__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8351_8538);

try{var seq__8352_8539 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__8350_8537,_STAR_parent_description_STAR__temp_val__8351_8538,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
tic_tac_toe.web_ui.render_root.call(null);

tic_tac_toe.web_ui.call_game_initialize.call(null);

return reagent.core.flush.call(null);
});})(_STAR_parent_description_STAR__orig_val__8350_8537,_STAR_parent_description_STAR__temp_val__8351_8538,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
),(function (){var description__7669__auto____$2 = speclj.components.new_description.call(null,"checking the",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8364_8543 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8365_8544 = description__7669__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8365_8544);

try{var seq__8366_8545 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"game-mode buttons changes the players",((function (_STAR_parent_description_STAR__orig_val__8364_8543,_STAR_parent_description_STAR__temp_val__8365_8544,description__7669__auto____$2,_STAR_parent_description_STAR__orig_val__8350_8537,_STAR_parent_description_STAR__temp_val__8351_8538,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var pvp_btn = tic_tac_toe.web_ui_spec.get_element.call(null,"#pvp");
var pve_btn = tic_tac_toe.web_ui_spec.get_element.call(null,"#pve");
var expected__7802__auto___8549 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),true], null);
var actual__7803__auto___8550 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8549,actual__7803__auto___8550)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8549 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8549)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8550 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8550))," (using =)"].join('')));
}

tic_tac_toe.web_ui_spec.click_flush.call(null,pvp_btn);

var expected__7802__auto___8551 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player 1",(1),"Player 2",(2)], null),new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),false], null);
var actual__7803__auto___8552 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8551,actual__7803__auto___8552)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8551 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8551)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8552 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8552))," (using =)"].join('')));
}

tic_tac_toe.web_ui_spec.click_flush.call(null,pve_btn);

var expected__7802__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),true], null);
var actual__7803__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8364_8543,_STAR_parent_description_STAR__temp_val__8365_8544,description__7669__auto____$2,_STAR_parent_description_STAR__orig_val__8350_8537,_STAR_parent_description_STAR__temp_val__8351_8538,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"symbol buttons changes the players",((function (_STAR_parent_description_STAR__orig_val__8364_8543,_STAR_parent_description_STAR__temp_val__8365_8544,description__7669__auto____$2,_STAR_parent_description_STAR__orig_val__8350_8537,_STAR_parent_description_STAR__temp_val__8351_8538,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var x_btn = tic_tac_toe.web_ui_spec.get_element.call(null,"#x");
var o_btn = tic_tac_toe.web_ui_spec.get_element.call(null,"#o");
var expected__7802__auto___8553 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),true], null);
var actual__7803__auto___8554 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8553,actual__7803__auto___8554)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8553 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8553)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8554 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8554))," (using =)"].join('')));
}

tic_tac_toe.web_ui_spec.click_flush.call(null,o_btn);

var expected__7802__auto___8555 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(2),"AI",(1)], null),new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),true], null);
var actual__7803__auto___8556 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8555,actual__7803__auto___8556)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8555 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8555)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8556 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8556))," (using =)"].join('')));
}

tic_tac_toe.web_ui_spec.click_flush.call(null,x_btn);

var expected__7802__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),true], null);
var actual__7803__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8364_8543,_STAR_parent_description_STAR__temp_val__8365_8544,description__7669__auto____$2,_STAR_parent_description_STAR__orig_val__8350_8537,_STAR_parent_description_STAR__temp_val__8351_8538,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"difficulty buttons changes the difficulty",((function (_STAR_parent_description_STAR__orig_val__8364_8543,_STAR_parent_description_STAR__temp_val__8365_8544,description__7669__auto____$2,_STAR_parent_description_STAR__orig_val__8350_8537,_STAR_parent_description_STAR__temp_val__8351_8538,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var hard_btn = tic_tac_toe.web_ui_spec.get_element.call(null,"#hard");
var med_btn = tic_tac_toe.web_ui_spec.get_element.call(null,"#medium");
var easy_btn = tic_tac_toe.web_ui_spec.get_element.call(null,"#easy");
var expected__7802__auto___8557 = (10);
var actual__7803__auto___8558 = new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8557,actual__7803__auto___8558)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8557 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8557)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8558 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8558))," (using =)"].join('')));
}

tic_tac_toe.web_ui_spec.click_flush.call(null,med_btn);

var expected__7802__auto___8559 = (9);
var actual__7803__auto___8560 = new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8559,actual__7803__auto___8560)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8559 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8559)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8560 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8560))," (using =)"].join('')));
}

tic_tac_toe.web_ui_spec.click_flush.call(null,easy_btn);

var expected__7802__auto___8561 = (-1);
var actual__7803__auto___8562 = new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8561,actual__7803__auto___8562)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8561 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8561)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8562 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8562))," (using =)"].join('')));
}

tic_tac_toe.web_ui_spec.click_flush.call(null,hard_btn);

var expected__7802__auto__ = (10);
var actual__7803__auto__ = new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8364_8543,_STAR_parent_description_STAR__temp_val__8365_8544,description__7669__auto____$2,_STAR_parent_description_STAR__orig_val__8350_8537,_STAR_parent_description_STAR__temp_val__8351_8538,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"size buttons changes the size",((function (_STAR_parent_description_STAR__orig_val__8364_8543,_STAR_parent_description_STAR__temp_val__8365_8544,description__7669__auto____$2,_STAR_parent_description_STAR__orig_val__8350_8537,_STAR_parent_description_STAR__temp_val__8351_8538,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var three_2d_btn = tic_tac_toe.web_ui_spec.get_element.call(null,"#classic");
var four_btn = tic_tac_toe.web_ui_spec.get_element.call(null,"#four");
var three_3d_btn = tic_tac_toe.web_ui_spec.get_element.call(null,"#classic-3d");
var expected__7802__auto___8563 = false;
var actual__7803__auto___8564 = new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8563,actual__7803__auto___8564)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8563 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8563)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8564 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8564))," (using =)"].join('')));
}

var expected__7802__auto___8565 = cljs.core.repeat.call(null,(9),(0));
var actual__7803__auto___8566 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8565,actual__7803__auto___8566)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8565 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8565)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8566 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8566))," (using =)"].join('')));
}

tic_tac_toe.web_ui_spec.click_flush.call(null,four_btn);

var expected__7802__auto___8567 = false;
var actual__7803__auto___8568 = new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8567,actual__7803__auto___8568)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8567 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8567)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8568 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8568))," (using =)"].join('')));
}

var expected__7802__auto___8569 = cljs.core.repeat.call(null,(16),(0));
var actual__7803__auto___8570 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8569,actual__7803__auto___8570)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8569 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8569)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8570 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8570))," (using =)"].join('')));
}

tic_tac_toe.web_ui_spec.click_flush.call(null,three_3d_btn);

var expected__7802__auto___8571 = true;
var actual__7803__auto___8572 = new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8571,actual__7803__auto___8572)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8571 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8571)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8572 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8572))," (using =)"].join('')));
}

var expected__7802__auto___8573 = cljs.core.repeat.call(null,(27),(0));
var actual__7803__auto___8574 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8573,actual__7803__auto___8574)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8573 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8573)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8574 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8574))," (using =)"].join('')));
}

tic_tac_toe.web_ui_spec.click_flush.call(null,three_2d_btn);

var expected__7802__auto___8575 = false;
var actual__7803__auto___8576 = new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8575,actual__7803__auto___8576)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8575 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8575)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8576 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8576))," (using =)"].join('')));
}

var expected__7802__auto__ = cljs.core.repeat.call(null,(9),(0));
var actual__7803__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8364_8543,_STAR_parent_description_STAR__temp_val__8365_8544,description__7669__auto____$2,_STAR_parent_description_STAR__orig_val__8350_8537,_STAR_parent_description_STAR__temp_val__8351_8538,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false)],null)));
var chunk__8367_8546 = null;
var count__8368_8547 = (0);
var i__8369_8548 = (0);
while(true){
if((i__8369_8548 < count__8368_8547)){
var component__7670__auto___8577 = cljs.core._nth.call(null,chunk__8367_8546,i__8369_8548);
speclj.components.install.call(null,component__7670__auto___8577,description__7669__auto____$2);


var G__8578 = seq__8366_8545;
var G__8579 = chunk__8367_8546;
var G__8580 = count__8368_8547;
var G__8581 = (i__8369_8548 + (1));
seq__8366_8545 = G__8578;
chunk__8367_8546 = G__8579;
count__8368_8547 = G__8580;
i__8369_8548 = G__8581;
continue;
} else {
var temp__5753__auto___8582 = cljs.core.seq.call(null,seq__8366_8545);
if(temp__5753__auto___8582){
var seq__8366_8583__$1 = temp__5753__auto___8582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8366_8583__$1)){
var c__5568__auto___8584 = cljs.core.chunk_first.call(null,seq__8366_8583__$1);
var G__8585 = cljs.core.chunk_rest.call(null,seq__8366_8583__$1);
var G__8586 = c__5568__auto___8584;
var G__8587 = cljs.core.count.call(null,c__5568__auto___8584);
var G__8588 = (0);
seq__8366_8545 = G__8585;
chunk__8367_8546 = G__8586;
count__8368_8547 = G__8587;
i__8369_8548 = G__8588;
continue;
} else {
var component__7670__auto___8589 = cljs.core.first.call(null,seq__8366_8583__$1);
speclj.components.install.call(null,component__7670__auto___8589,description__7669__auto____$2);


var G__8590 = cljs.core.next.call(null,seq__8366_8583__$1);
var G__8591 = null;
var G__8592 = (0);
var G__8593 = (0);
seq__8366_8545 = G__8590;
chunk__8367_8546 = G__8591;
count__8368_8547 = G__8592;
i__8369_8548 = G__8593;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8364_8543);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto____$2);
}

return description__7669__auto____$2;
})(),speclj.components.new_characteristic.call(null,"clicking the start button updates the players",((function (_STAR_parent_description_STAR__orig_val__8350_8537,_STAR_parent_description_STAR__temp_val__8351_8538,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var game_round_orig_val__8370 = tic_tac_toe.game_runner.game_round;
var game_round_temp_val__8371 = (function (_){
return null;
});
(tic_tac_toe.game_runner.game_round = game_round_temp_val__8371);

try{var button = tic_tac_toe.web_ui_spec.get_element.call(null,"button");
var expected__7802__auto___8594 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),true], null);
var actual__7803__auto___8595 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8594,actual__7803__auto___8595)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8594 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8594)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8595 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8595))," (using =)"].join('')));
}

tic_tac_toe.web_ui_spec.click_flush.call(null,button);

var expected__7802__auto__ = new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null);
var actual__7803__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.game_runner.game_round = game_round_orig_val__8370);
}});})(_STAR_parent_description_STAR__orig_val__8350_8537,_STAR_parent_description_STAR__temp_val__8351_8538,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false)],null)));
var chunk__8353_8540 = null;
var count__8354_8541 = (0);
var i__8355_8542 = (0);
while(true){
if((i__8355_8542 < count__8354_8541)){
var component__7670__auto___8596 = cljs.core._nth.call(null,chunk__8353_8540,i__8355_8542);
speclj.components.install.call(null,component__7670__auto___8596,description__7669__auto____$1);


var G__8597 = seq__8352_8539;
var G__8598 = chunk__8353_8540;
var G__8599 = count__8354_8541;
var G__8600 = (i__8355_8542 + (1));
seq__8352_8539 = G__8597;
chunk__8353_8540 = G__8598;
count__8354_8541 = G__8599;
i__8355_8542 = G__8600;
continue;
} else {
var temp__5753__auto___8601 = cljs.core.seq.call(null,seq__8352_8539);
if(temp__5753__auto___8601){
var seq__8352_8602__$1 = temp__5753__auto___8601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8352_8602__$1)){
var c__5568__auto___8603 = cljs.core.chunk_first.call(null,seq__8352_8602__$1);
var G__8604 = cljs.core.chunk_rest.call(null,seq__8352_8602__$1);
var G__8605 = c__5568__auto___8603;
var G__8606 = cljs.core.count.call(null,c__5568__auto___8603);
var G__8607 = (0);
seq__8352_8539 = G__8604;
chunk__8353_8540 = G__8605;
count__8354_8541 = G__8606;
i__8355_8542 = G__8607;
continue;
} else {
var component__7670__auto___8608 = cljs.core.first.call(null,seq__8352_8602__$1);
speclj.components.install.call(null,component__7670__auto___8608,description__7669__auto____$1);


var G__8609 = cljs.core.next.call(null,seq__8352_8602__$1);
var G__8610 = null;
var G__8611 = (0);
var G__8612 = (0);
seq__8352_8539 = G__8609;
chunk__8353_8540 = G__8610;
count__8354_8541 = G__8611;
i__8355_8542 = G__8612;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8350_8537);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto____$1);
}

return description__7669__auto____$1;
})(),(function (){var description__7669__auto____$1 = speclj.components.new_description.call(null,"when the game ends, users can press",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8372_8613 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8373_8614 = description__7669__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8373_8614);

try{var seq__8374_8615 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__8372_8613,_STAR_parent_description_STAR__temp_val__8373_8614,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
tic_tac_toe.web_ui.render_root.call(null);

tic_tac_toe.web_ui.call_game_initialize.call(null);

tic_tac_toe.ui_interface.end_game.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"end-cond","end-cond",-1031076501),"Tie!"], null));

return reagent.core.flush.call(null);
});})(_STAR_parent_description_STAR__orig_val__8372_8613,_STAR_parent_description_STAR__temp_val__8373_8614,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
),speclj.components.new_characteristic.call(null,"retry to restart the game",((function (_STAR_parent_description_STAR__orig_val__8372_8613,_STAR_parent_description_STAR__temp_val__8373_8614,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"round","round",2009433328),(7));

var game_round_orig_val__8380 = tic_tac_toe.game_runner.game_round;
var game_round_temp_val__8381 = (function (game){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,game);
});
(tic_tac_toe.game_runner.game_round = game_round_temp_val__8381);

try{var retry_btn = tic_tac_toe.web_ui_spec.get_element.call(null,"#retry");
var expected__7802__auto___8619 = (7);
var actual__7803__auto___8620 = new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8619,actual__7803__auto___8620)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8619 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8619)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8620 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8620))," (using =)"].join('')));
}

var expected__7802__auto___8621 = "Tie!";
var actual__7803__auto___8622 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7802__auto___8621,actual__7803__auto___8622)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8621 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8621)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8622 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8622))," (using =)"].join('')));
}

tic_tac_toe.web_ui_spec.click_flush.call(null,retry_btn);

var expected__7802__auto___8623 = (1);
var actual__7803__auto___8624 = new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8623,actual__7803__auto___8624)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8623 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8623)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8624 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8624))," (using =)"].join('')));
}

var expected__7802__auto__ = tic_tac_toe.web_ui.page_title;
var actual__7803__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.game_runner.game_round = game_round_orig_val__8380);
}});})(_STAR_parent_description_STAR__orig_val__8372_8613,_STAR_parent_description_STAR__temp_val__8373_8614,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"back to go back to the menu",((function (_STAR_parent_description_STAR__orig_val__8372_8613,_STAR_parent_description_STAR__temp_val__8373_8614,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
tic_tac_toe.ui_interface.end_game.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"end-cond","end-cond",-1031076501),"Tie!"], null));

cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true);

reagent.core.flush.call(null);

var back_btn = tic_tac_toe.web_ui_spec.get_element.call(null,"#back");
var value__7790__auto___8625 = new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core.not.call(null,value__7790__auto___8625)){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7790__auto___8625 == null))?"nil":cljs.core.pr_str.call(null,value__7790__auto___8625)),""].join('')));
} else {
}

var expected__7802__auto___8626 = "Tie!";
var actual__7803__auto___8627 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7802__auto___8626,actual__7803__auto___8627)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8626 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8626)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8627 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8627))," (using =)"].join('')));
}

tic_tac_toe.web_ui_spec.click_flush.call(null,back_btn);

var value__7796__auto___8628 = new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core.truth_(value__7796__auto___8628)){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7796__auto___8628 == null))?"nil":cljs.core.pr_str.call(null,value__7796__auto___8628))].join('')));
} else {
}

var expected__7802__auto__ = tic_tac_toe.web_ui.page_title;
var actual__7803__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8372_8613,_STAR_parent_description_STAR__temp_val__8373_8614,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false)],null)));
var chunk__8375_8616 = null;
var count__8376_8617 = (0);
var i__8377_8618 = (0);
while(true){
if((i__8377_8618 < count__8376_8617)){
var component__7670__auto___8629 = cljs.core._nth.call(null,chunk__8375_8616,i__8377_8618);
speclj.components.install.call(null,component__7670__auto___8629,description__7669__auto____$1);


var G__8630 = seq__8374_8615;
var G__8631 = chunk__8375_8616;
var G__8632 = count__8376_8617;
var G__8633 = (i__8377_8618 + (1));
seq__8374_8615 = G__8630;
chunk__8375_8616 = G__8631;
count__8376_8617 = G__8632;
i__8377_8618 = G__8633;
continue;
} else {
var temp__5753__auto___8634 = cljs.core.seq.call(null,seq__8374_8615);
if(temp__5753__auto___8634){
var seq__8374_8635__$1 = temp__5753__auto___8634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8374_8635__$1)){
var c__5568__auto___8636 = cljs.core.chunk_first.call(null,seq__8374_8635__$1);
var G__8637 = cljs.core.chunk_rest.call(null,seq__8374_8635__$1);
var G__8638 = c__5568__auto___8636;
var G__8639 = cljs.core.count.call(null,c__5568__auto___8636);
var G__8640 = (0);
seq__8374_8615 = G__8637;
chunk__8375_8616 = G__8638;
count__8376_8617 = G__8639;
i__8377_8618 = G__8640;
continue;
} else {
var component__7670__auto___8641 = cljs.core.first.call(null,seq__8374_8635__$1);
speclj.components.install.call(null,component__7670__auto___8641,description__7669__auto____$1);


var G__8642 = cljs.core.next.call(null,seq__8374_8635__$1);
var G__8643 = null;
var G__8644 = (0);
var G__8645 = (0);
seq__8374_8615 = G__8642;
chunk__8375_8616 = G__8643;
count__8376_8617 = G__8644;
i__8377_8618 = G__8645;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8372_8613);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto____$1);
}

return description__7669__auto____$1;
})(),speclj.components.new_characteristic.call(null,"checks if the current move is a valid player move",((function (_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var value__7790__auto__ = tic_tac_toe.web_ui.valid_player_move_QMARK_.call(null,tic_tac_toe.web_ui_spec.example_game,(3),(1));
if((!(value__7790__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7790__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7790__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),(function (){var description__7669__auto____$1 = speclj.components.new_description.call(null,"Initializes the UI by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8382_8646 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8383_8647 = description__7669__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8383_8647);

try{var seq__8384_8648 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"rendering the html",((function (_STAR_parent_description_STAR__orig_val__8382_8646,_STAR_parent_description_STAR__temp_val__8383_8647,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var call_game_initialize_orig_val__8396 = tic_tac_toe.web_ui.call_game_initialize;
var render_root_orig_val__8397 = tic_tac_toe.web_ui.render_root;
var call_game_initialize_temp_val__8398 = (function (){
return tic_tac_toe.web_ui.render_root.call(null);
});
var render_root_temp_val__8399 = (function (){
return "rendering!";
});
(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_temp_val__8398);

(tic_tac_toe.web_ui.render_root = render_root_temp_val__8399);

try{var expected__7802__auto__ = "rendering!";
var actual__7803__auto__ = tic_tac_toe.web_ui.call_game_initialize.call(null);
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__8397);

(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_orig_val__8396);
}});})(_STAR_parent_description_STAR__orig_val__8382_8646,_STAR_parent_description_STAR__temp_val__8383_8647,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"initializing the game",((function (_STAR_parent_description_STAR__orig_val__8382_8646,_STAR_parent_description_STAR__temp_val__8383_8647,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var call_game_initialize_orig_val__8400 = tic_tac_toe.web_ui.call_game_initialize;
var render_root_orig_val__8401 = tic_tac_toe.web_ui.render_root;
var call_game_initialize_temp_val__8402 = (function (){
return "starting game!";
});
var render_root_temp_val__8403 = (function (){
return null;
});
(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_temp_val__8402);

(tic_tac_toe.web_ui.render_root = render_root_temp_val__8403);

try{var expected__7802__auto__ = "starting game!";
var actual__7803__auto__ = tic_tac_toe.web_ui.call_game_initialize.call(null);
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.render_root = render_root_orig_val__8401);

(tic_tac_toe.web_ui.call_game_initialize = call_game_initialize_orig_val__8400);
}});})(_STAR_parent_description_STAR__orig_val__8382_8646,_STAR_parent_description_STAR__temp_val__8383_8647,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false)],null)));
var chunk__8385_8649 = null;
var count__8386_8650 = (0);
var i__8387_8651 = (0);
while(true){
if((i__8387_8651 < count__8386_8650)){
var component__7670__auto___8652 = cljs.core._nth.call(null,chunk__8385_8649,i__8387_8651);
speclj.components.install.call(null,component__7670__auto___8652,description__7669__auto____$1);


var G__8653 = seq__8384_8648;
var G__8654 = chunk__8385_8649;
var G__8655 = count__8386_8650;
var G__8656 = (i__8387_8651 + (1));
seq__8384_8648 = G__8653;
chunk__8385_8649 = G__8654;
count__8386_8650 = G__8655;
i__8387_8651 = G__8656;
continue;
} else {
var temp__5753__auto___8657 = cljs.core.seq.call(null,seq__8384_8648);
if(temp__5753__auto___8657){
var seq__8384_8658__$1 = temp__5753__auto___8657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8384_8658__$1)){
var c__5568__auto___8659 = cljs.core.chunk_first.call(null,seq__8384_8658__$1);
var G__8660 = cljs.core.chunk_rest.call(null,seq__8384_8658__$1);
var G__8661 = c__5568__auto___8659;
var G__8662 = cljs.core.count.call(null,c__5568__auto___8659);
var G__8663 = (0);
seq__8384_8648 = G__8660;
chunk__8385_8649 = G__8661;
count__8386_8650 = G__8662;
i__8387_8651 = G__8663;
continue;
} else {
var component__7670__auto___8664 = cljs.core.first.call(null,seq__8384_8658__$1);
speclj.components.install.call(null,component__7670__auto___8664,description__7669__auto____$1);


var G__8665 = cljs.core.next.call(null,seq__8384_8658__$1);
var G__8666 = null;
var G__8667 = (0);
var G__8668 = (0);
seq__8384_8648 = G__8665;
chunk__8385_8649 = G__8666;
count__8386_8650 = G__8667;
i__8387_8651 = G__8668;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8382_8646);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto____$1);
}

return description__7669__auto____$1;
})(),(function (){var description__7669__auto____$1 = speclj.components.new_description.call(null,"Initializes a game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8404_8669 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8405_8670 = description__7669__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8405_8670);

try{var seq__8406_8671 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"setting the game-state atom",((function (_STAR_parent_description_STAR__orig_val__8404_8669,_STAR_parent_description_STAR__temp_val__8405_8670,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,null);

var value__7790__auto___8675 = (cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state) == null);
if((!(value__7790__auto___8675))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7790__auto___8675 == null))?"nil":cljs.core.pr_str.call(null,value__7790__auto___8675)),""].join('')));
} else {
}

tic_tac_toe.web_ui.call_game_initialize.call(null);

var value__7796__auto__ = (cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state) == null);
if(value__7796__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7796__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7796__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__8404_8669,_STAR_parent_description_STAR__temp_val__8405_8670,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"rendering the title",((function (_STAR_parent_description_STAR__orig_val__8404_8669,_STAR_parent_description_STAR__temp_val__8405_8670,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
tic_tac_toe.web_ui.call_game_initialize.call(null);

var value__7790__auto__ = clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),"Welcome to TicTacToe!");
if((!(value__7790__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7790__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7790__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__8404_8669,_STAR_parent_description_STAR__temp_val__8405_8670,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"rendering the game options",((function (_STAR_parent_description_STAR__orig_val__8404_8669,_STAR_parent_description_STAR__temp_val__8405_8670,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var set_options_orig_val__8412 = tic_tac_toe.web_ui.set_options;
var set_options_temp_val__8413 = (function (){
return "rendering options!";
});
(tic_tac_toe.web_ui.set_options = set_options_temp_val__8413);

try{var expected__7802__auto__ = "rendering options!";
var actual__7803__auto__ = tic_tac_toe.web_ui.call_game_initialize.call(null);
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.set_options = set_options_orig_val__8412);
}});})(_STAR_parent_description_STAR__orig_val__8404_8669,_STAR_parent_description_STAR__temp_val__8405_8670,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false)],null)));
var chunk__8407_8672 = null;
var count__8408_8673 = (0);
var i__8409_8674 = (0);
while(true){
if((i__8409_8674 < count__8408_8673)){
var component__7670__auto___8676 = cljs.core._nth.call(null,chunk__8407_8672,i__8409_8674);
speclj.components.install.call(null,component__7670__auto___8676,description__7669__auto____$1);


var G__8677 = seq__8406_8671;
var G__8678 = chunk__8407_8672;
var G__8679 = count__8408_8673;
var G__8680 = (i__8409_8674 + (1));
seq__8406_8671 = G__8677;
chunk__8407_8672 = G__8678;
count__8408_8673 = G__8679;
i__8409_8674 = G__8680;
continue;
} else {
var temp__5753__auto___8681 = cljs.core.seq.call(null,seq__8406_8671);
if(temp__5753__auto___8681){
var seq__8406_8682__$1 = temp__5753__auto___8681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8406_8682__$1)){
var c__5568__auto___8683 = cljs.core.chunk_first.call(null,seq__8406_8682__$1);
var G__8684 = cljs.core.chunk_rest.call(null,seq__8406_8682__$1);
var G__8685 = c__5568__auto___8683;
var G__8686 = cljs.core.count.call(null,c__5568__auto___8683);
var G__8687 = (0);
seq__8406_8671 = G__8684;
chunk__8407_8672 = G__8685;
count__8408_8673 = G__8686;
i__8409_8674 = G__8687;
continue;
} else {
var component__7670__auto___8688 = cljs.core.first.call(null,seq__8406_8682__$1);
speclj.components.install.call(null,component__7670__auto___8688,description__7669__auto____$1);


var G__8689 = cljs.core.next.call(null,seq__8406_8682__$1);
var G__8690 = null;
var G__8691 = (0);
var G__8692 = (0);
seq__8406_8671 = G__8689;
chunk__8407_8672 = G__8690;
count__8408_8673 = G__8691;
i__8409_8674 = G__8692;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8404_8669);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto____$1);
}

return description__7669__auto____$1;
})(),(function (){var description__7669__auto____$1 = speclj.components.new_description.call(null,"renders the options by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8414_8693 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8415_8694 = description__7669__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8415_8694);

try{var seq__8416_8695 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updating the page",((function (_STAR_parent_description_STAR__orig_val__8414_8693,_STAR_parent_description_STAR__temp_val__8415_8694,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var old_page = cljs.core.deref.call(null,tic_tac_toe.web_ui.page);
tic_tac_toe.web_ui.set_options.call(null);

var value__7796__auto__ = cljs.core._EQ_.call(null,old_page,cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(value__7796__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7796__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7796__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__8414_8693,_STAR_parent_description_STAR__temp_val__8415_8694,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"creating a form",((function (_STAR_parent_description_STAR__orig_val__8414_8693,_STAR_parent_description_STAR__temp_val__8415_8694,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var expected__7802__auto__ = new cljs.core.Keyword(null,"form","form",-1624062471);
var actual__7803__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8414_8693,_STAR_parent_description_STAR__temp_val__8415_8694,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"always giving game-mode options",((function (_STAR_parent_description_STAR__orig_val__8414_8693,_STAR_parent_description_STAR__temp_val__8415_8694,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var expected__7802__auto___8699 = "Player vs. AI";
var actual__7803__auto___8700 = cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)))));
if(cljs.core._EQ_.call(null,expected__7802__auto___8699,actual__7803__auto___8700)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8699 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8699)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8700 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8700))," (using =)"].join('')));
}

var expected__7802__auto__ = "Player vs. Player";
var actual__7803__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)))));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8414_8693,_STAR_parent_description_STAR__temp_val__8415_8694,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"only giving symbol options if NOT Player vs. Player",((function (_STAR_parent_description_STAR__orig_val__8414_8693,_STAR_parent_description_STAR__temp_val__8415_8694,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"player-one","player-one",-450954926));

tic_tac_toe.web_ui.set_options.call(null);

var expected__7802__auto___8701 = "X (first turn)";
var actual__7803__auto___8702 = cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(2))));
if(cljs.core._EQ_.call(null,expected__7802__auto___8701,actual__7803__auto___8702)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8701 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8701)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8702 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8702))," (using =)"].join('')));
}

var expected__7802__auto___8703 = "O (second turn)";
var actual__7803__auto___8704 = cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(2))));
if(cljs.core._EQ_.call(null,expected__7802__auto___8703,actual__7803__auto___8704)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8703 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8703)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8704 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8704))," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.get.call(null,tic_tac_toe.option_selector.menu_options,"2"));

tic_tac_toe.web_ui.set_options.call(null);

var value__7796__auto___8705 = cljs.core._EQ_.call(null,"X (first turn)",cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(2)))));
if(value__7796__auto___8705){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7796__auto___8705 == null))?"nil":cljs.core.pr_str.call(null,value__7796__auto___8705))].join('')));
} else {
}

var value__7796__auto__ = cljs.core._EQ_.call(null,"O (second turn)",cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(2)))));
if(value__7796__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7796__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7796__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__8414_8693,_STAR_parent_description_STAR__temp_val__8415_8694,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"only giving difficulty options if NOT Player vs. Player",((function (_STAR_parent_description_STAR__orig_val__8414_8693,_STAR_parent_description_STAR__temp_val__8415_8694,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"player-one","player-one",-450954926));

tic_tac_toe.web_ui.set_options.call(null);

var expected__7802__auto___8706 = "Unbeatable";
var actual__7803__auto___8707 = cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(3))));
if(cljs.core._EQ_.call(null,expected__7802__auto___8706,actual__7803__auto___8707)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8706 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8706)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8707 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8707))," (using =)"].join('')));
}

var expected__7802__auto___8708 = "Medium";
var actual__7803__auto___8709 = cljs.core.last.call(null,cljs.core.nth.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(3)),(2)));
if(cljs.core._EQ_.call(null,expected__7802__auto___8708,actual__7803__auto___8709)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8708 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8708)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8709 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8709))," (using =)"].join('')));
}

var expected__7802__auto___8710 = "Easy";
var actual__7803__auto___8711 = cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(3))));
if(cljs.core._EQ_.call(null,expected__7802__auto___8710,actual__7803__auto___8711)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8710 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8710)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8711 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8711))," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.get.call(null,tic_tac_toe.option_selector.menu_options,"2"));

tic_tac_toe.web_ui.set_options.call(null);

var value__7796__auto___8712 = cljs.core._EQ_.call(null,"Unbeatable",cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(3)))));
if(value__7796__auto___8712){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7796__auto___8712 == null))?"nil":cljs.core.pr_str.call(null,value__7796__auto___8712))].join('')));
} else {
}

var value__7796__auto___8713 = cljs.core._EQ_.call(null,"Medium",cljs.core.last.call(null,cljs.core.nth.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(3)),(2))));
if(value__7796__auto___8713){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7796__auto___8713 == null))?"nil":cljs.core.pr_str.call(null,value__7796__auto___8713))].join('')));
} else {
}

var value__7796__auto__ = cljs.core._EQ_.call(null,"Easy",cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),(3)))));
if(value__7796__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7796__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7796__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__8414_8693,_STAR_parent_description_STAR__temp_val__8415_8694,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"always giving size options",((function (_STAR_parent_description_STAR__orig_val__8414_8693,_STAR_parent_description_STAR__temp_val__8415_8694,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var second_to_last = (cljs.core.count.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))) - (2));
var expected__7802__auto___8714 = "3x3";
var actual__7803__auto___8715 = cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),second_to_last)));
if(cljs.core._EQ_.call(null,expected__7802__auto___8714,actual__7803__auto___8715)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8714 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8714)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8715 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8715))," (using =)"].join('')));
}

var expected__7802__auto___8716 = "4x4";
var actual__7803__auto___8717 = cljs.core.last.call(null,cljs.core.nth.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),second_to_last),(2)));
if(cljs.core._EQ_.call(null,expected__7802__auto___8716,actual__7803__auto___8717)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8716 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8716)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8717 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8717))," (using =)"].join('')));
}

var expected__7802__auto__ = "3x3x3";
var actual__7803__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),second_to_last)));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8414_8693,_STAR_parent_description_STAR__temp_val__8415_8694,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"giving a start button",((function (_STAR_parent_description_STAR__orig_val__8414_8693,_STAR_parent_description_STAR__temp_val__8415_8694,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var expected__7802__auto__ = "Start!";
var actual__7803__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8414_8693,_STAR_parent_description_STAR__temp_val__8415_8694,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false)],null)));
var chunk__8417_8696 = null;
var count__8418_8697 = (0);
var i__8419_8698 = (0);
while(true){
if((i__8419_8698 < count__8418_8697)){
var component__7670__auto___8718 = cljs.core._nth.call(null,chunk__8417_8696,i__8419_8698);
speclj.components.install.call(null,component__7670__auto___8718,description__7669__auto____$1);


var G__8719 = seq__8416_8695;
var G__8720 = chunk__8417_8696;
var G__8721 = count__8418_8697;
var G__8722 = (i__8419_8698 + (1));
seq__8416_8695 = G__8719;
chunk__8417_8696 = G__8720;
count__8418_8697 = G__8721;
i__8419_8698 = G__8722;
continue;
} else {
var temp__5753__auto___8723 = cljs.core.seq.call(null,seq__8416_8695);
if(temp__5753__auto___8723){
var seq__8416_8724__$1 = temp__5753__auto___8723;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8416_8724__$1)){
var c__5568__auto___8725 = cljs.core.chunk_first.call(null,seq__8416_8724__$1);
var G__8726 = cljs.core.chunk_rest.call(null,seq__8416_8724__$1);
var G__8727 = c__5568__auto___8725;
var G__8728 = cljs.core.count.call(null,c__5568__auto___8725);
var G__8729 = (0);
seq__8416_8695 = G__8726;
chunk__8417_8696 = G__8727;
count__8418_8697 = G__8728;
i__8419_8698 = G__8729;
continue;
} else {
var component__7670__auto___8730 = cljs.core.first.call(null,seq__8416_8724__$1);
speclj.components.install.call(null,component__7670__auto___8730,description__7669__auto____$1);


var G__8731 = cljs.core.next.call(null,seq__8416_8724__$1);
var G__8732 = null;
var G__8733 = (0);
var G__8734 = (0);
seq__8416_8695 = G__8731;
chunk__8417_8696 = G__8732;
count__8418_8697 = G__8733;
i__8419_8698 = G__8734;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8414_8693);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto____$1);
}

return description__7669__auto____$1;
})(),(function (){var description__7669__auto____$1 = speclj.components.new_description.call(null,"starts the game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8420_8735 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8421_8736 = description__7669__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8421_8736);

try{var seq__8422_8737 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"setting the players to actual players and not a config",((function (_STAR_parent_description_STAR__orig_val__8420_8735,_STAR_parent_description_STAR__temp_val__8421_8736,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var game_round_orig_val__8430 = tic_tac_toe.game_runner.game_round;
var game_round_temp_val__8431 = (function (_){
return null;
});
(tic_tac_toe.game_runner.game_round = game_round_temp_val__8431);

try{cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null),new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),true], null));

tic_tac_toe.web_ui.start_game.call(null);

var expected__7802__auto__ = new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null);
var actual__7803__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.game_runner.game_round = game_round_orig_val__8430);
}});})(_STAR_parent_description_STAR__orig_val__8420_8735,_STAR_parent_description_STAR__temp_val__8421_8736,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"running a game round",((function (_STAR_parent_description_STAR__orig_val__8420_8735,_STAR_parent_description_STAR__temp_val__8421_8736,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var game_round_orig_val__8432 = tic_tac_toe.game_runner.game_round;
var game_round_temp_val__8433 = (function (_){
return "game round!";
});
(tic_tac_toe.game_runner.game_round = game_round_temp_val__8433);

try{var expected__7802__auto__ = "game round!";
var actual__7803__auto__ = tic_tac_toe.web_ui.start_game.call(null);
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.game_runner.game_round = game_round_orig_val__8432);
}});})(_STAR_parent_description_STAR__orig_val__8420_8735,_STAR_parent_description_STAR__temp_val__8421_8736,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false)],null)));
var chunk__8423_8738 = null;
var count__8424_8739 = (0);
var i__8425_8740 = (0);
while(true){
if((i__8425_8740 < count__8424_8739)){
var component__7670__auto___8741 = cljs.core._nth.call(null,chunk__8423_8738,i__8425_8740);
speclj.components.install.call(null,component__7670__auto___8741,description__7669__auto____$1);


var G__8742 = seq__8422_8737;
var G__8743 = chunk__8423_8738;
var G__8744 = count__8424_8739;
var G__8745 = (i__8425_8740 + (1));
seq__8422_8737 = G__8742;
chunk__8423_8738 = G__8743;
count__8424_8739 = G__8744;
i__8425_8740 = G__8745;
continue;
} else {
var temp__5753__auto___8746 = cljs.core.seq.call(null,seq__8422_8737);
if(temp__5753__auto___8746){
var seq__8422_8747__$1 = temp__5753__auto___8746;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8422_8747__$1)){
var c__5568__auto___8748 = cljs.core.chunk_first.call(null,seq__8422_8747__$1);
var G__8749 = cljs.core.chunk_rest.call(null,seq__8422_8747__$1);
var G__8750 = c__5568__auto___8748;
var G__8751 = cljs.core.count.call(null,c__5568__auto___8748);
var G__8752 = (0);
seq__8422_8737 = G__8749;
chunk__8423_8738 = G__8750;
count__8424_8739 = G__8751;
i__8425_8740 = G__8752;
continue;
} else {
var component__7670__auto___8753 = cljs.core.first.call(null,seq__8422_8747__$1);
speclj.components.install.call(null,component__7670__auto___8753,description__7669__auto____$1);


var G__8754 = cljs.core.next.call(null,seq__8422_8747__$1);
var G__8755 = null;
var G__8756 = (0);
var G__8757 = (0);
seq__8422_8737 = G__8754;
chunk__8423_8738 = G__8755;
count__8424_8739 = G__8756;
i__8425_8740 = G__8757;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8420_8735);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto____$1);
}

return description__7669__auto____$1;
})(),(function (){var description__7669__auto____$1 = speclj.components.new_description.call(null,"updates the attributes of the game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8434_8758 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8435_8759 = description__7669__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8435_8759);

try{var seq__8436_8760 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updating the game state",((function (_STAR_parent_description_STAR__orig_val__8434_8758,_STAR_parent_description_STAR__temp_val__8435_8759,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
tic_tac_toe.web_ui.update_game_attribute.call(null,tic_tac_toe.option_selector.menu_options,"1",new cljs.core.Keyword(null,"players","players",-1361554569));

var expected__7802__auto___8764 = new cljs.core.Keyword(null,"one-player","one-player",-1358620345);
var actual__7803__auto___8765 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8764,actual__7803__auto___8765)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8764 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8764)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8765 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8765))," (using =)"].join('')));
}

tic_tac_toe.web_ui.update_game_attribute.call(null,tic_tac_toe.option_selector.menu_options,"2",new cljs.core.Keyword(null,"players","players",-1361554569));

var expected__7802__auto___8766 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),false,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player 1",(1),"Player 2",(2)], null)], null);
var actual__7803__auto___8767 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8766,actual__7803__auto___8767)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8766 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8766)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8767 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8767))," (using =)"].join('')));
}

tic_tac_toe.web_ui.update_game_attribute.call(null,tic_tac_toe.option_selector.difficulty_options,"1",new cljs.core.Keyword(null,"difficulty","difficulty",755680807));

var expected__7802__auto__ = (10);
var actual__7803__auto__ = new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8434_8758,_STAR_parent_description_STAR__temp_val__8435_8759,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"re-rendering the options",((function (_STAR_parent_description_STAR__orig_val__8434_8758,_STAR_parent_description_STAR__temp_val__8435_8759,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var set_options_orig_val__8442 = tic_tac_toe.web_ui.set_options;
var set_options_temp_val__8443 = (function (){
return "set options!";
});
(tic_tac_toe.web_ui.set_options = set_options_temp_val__8443);

try{var expected__7802__auto__ = "set options!";
var actual__7803__auto__ = tic_tac_toe.web_ui.update_game_attribute.call(null,tic_tac_toe.option_selector.difficulty_options,"1",new cljs.core.Keyword(null,"difficulty","difficulty",755680807));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.set_options = set_options_orig_val__8442);
}});})(_STAR_parent_description_STAR__orig_val__8434_8758,_STAR_parent_description_STAR__temp_val__8435_8759,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false)],null)));
var chunk__8437_8761 = null;
var count__8438_8762 = (0);
var i__8439_8763 = (0);
while(true){
if((i__8439_8763 < count__8438_8762)){
var component__7670__auto___8768 = cljs.core._nth.call(null,chunk__8437_8761,i__8439_8763);
speclj.components.install.call(null,component__7670__auto___8768,description__7669__auto____$1);


var G__8769 = seq__8436_8760;
var G__8770 = chunk__8437_8761;
var G__8771 = count__8438_8762;
var G__8772 = (i__8439_8763 + (1));
seq__8436_8760 = G__8769;
chunk__8437_8761 = G__8770;
count__8438_8762 = G__8771;
i__8439_8763 = G__8772;
continue;
} else {
var temp__5753__auto___8773 = cljs.core.seq.call(null,seq__8436_8760);
if(temp__5753__auto___8773){
var seq__8436_8774__$1 = temp__5753__auto___8773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8436_8774__$1)){
var c__5568__auto___8775 = cljs.core.chunk_first.call(null,seq__8436_8774__$1);
var G__8776 = cljs.core.chunk_rest.call(null,seq__8436_8774__$1);
var G__8777 = c__5568__auto___8775;
var G__8778 = cljs.core.count.call(null,c__5568__auto___8775);
var G__8779 = (0);
seq__8436_8760 = G__8776;
chunk__8437_8761 = G__8777;
count__8438_8762 = G__8778;
i__8439_8763 = G__8779;
continue;
} else {
var component__7670__auto___8780 = cljs.core.first.call(null,seq__8436_8774__$1);
speclj.components.install.call(null,component__7670__auto___8780,description__7669__auto____$1);


var G__8781 = cljs.core.next.call(null,seq__8436_8774__$1);
var G__8782 = null;
var G__8783 = (0);
var G__8784 = (0);
seq__8436_8760 = G__8781;
chunk__8437_8761 = G__8782;
count__8438_8762 = G__8783;
i__8439_8763 = G__8784;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8434_8758);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto____$1);
}

return description__7669__auto____$1;
})(),(function (){var description__7669__auto____$1 = speclj.components.new_description.call(null,"updates the size of the game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8444_8785 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8445_8786 = description__7669__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8445_8786);

try{var seq__8446_8787 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updating three-d? and board of the game-state",((function (_STAR_parent_description_STAR__orig_val__8444_8785,_STAR_parent_description_STAR__temp_val__8445_8786,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
tic_tac_toe.web_ui.update_game_size.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"size","size",1098693007),(4)], null));

var value__7796__auto___8791 = new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core.truth_(value__7796__auto___8791)){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7796__auto___8791 == null))?"nil":cljs.core.pr_str.call(null,value__7796__auto___8791))].join('')));
} else {
}

var expected__7802__auto___8792 = cljs.core.repeat.call(null,(16),(0));
var actual__7803__auto___8793 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8792,actual__7803__auto___8793)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8792 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8792)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8793 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8793))," (using =)"].join('')));
}

tic_tac_toe.web_ui.update_game_size.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null));

var value__7790__auto___8794 = new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core.not.call(null,value__7790__auto___8794)){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7790__auto___8794 == null))?"nil":cljs.core.pr_str.call(null,value__7790__auto___8794)),""].join('')));
} else {
}

var expected__7802__auto__ = cljs.core.repeat.call(null,(27),(0));
var actual__7803__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8444_8785,_STAR_parent_description_STAR__temp_val__8445_8786,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"re-rendering the options",((function (_STAR_parent_description_STAR__orig_val__8444_8785,_STAR_parent_description_STAR__temp_val__8445_8786,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var set_options_orig_val__8452 = tic_tac_toe.web_ui.set_options;
var set_options_temp_val__8453 = (function (){
return "set options!";
});
(tic_tac_toe.web_ui.set_options = set_options_temp_val__8453);

try{var expected__7802__auto__ = "set options!";
var actual__7803__auto__ = tic_tac_toe.web_ui.update_game_size.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false,new cljs.core.Keyword(null,"size","size",1098693007),(4)], null));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.set_options = set_options_orig_val__8452);
}});})(_STAR_parent_description_STAR__orig_val__8444_8785,_STAR_parent_description_STAR__temp_val__8445_8786,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false)],null)));
var chunk__8447_8788 = null;
var count__8448_8789 = (0);
var i__8449_8790 = (0);
while(true){
if((i__8449_8790 < count__8448_8789)){
var component__7670__auto___8795 = cljs.core._nth.call(null,chunk__8447_8788,i__8449_8790);
speclj.components.install.call(null,component__7670__auto___8795,description__7669__auto____$1);


var G__8796 = seq__8446_8787;
var G__8797 = chunk__8447_8788;
var G__8798 = count__8448_8789;
var G__8799 = (i__8449_8790 + (1));
seq__8446_8787 = G__8796;
chunk__8447_8788 = G__8797;
count__8448_8789 = G__8798;
i__8449_8790 = G__8799;
continue;
} else {
var temp__5753__auto___8800 = cljs.core.seq.call(null,seq__8446_8787);
if(temp__5753__auto___8800){
var seq__8446_8801__$1 = temp__5753__auto___8800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8446_8801__$1)){
var c__5568__auto___8802 = cljs.core.chunk_first.call(null,seq__8446_8801__$1);
var G__8803 = cljs.core.chunk_rest.call(null,seq__8446_8801__$1);
var G__8804 = c__5568__auto___8802;
var G__8805 = cljs.core.count.call(null,c__5568__auto___8802);
var G__8806 = (0);
seq__8446_8787 = G__8803;
chunk__8447_8788 = G__8804;
count__8448_8789 = G__8805;
i__8449_8790 = G__8806;
continue;
} else {
var component__7670__auto___8807 = cljs.core.first.call(null,seq__8446_8801__$1);
speclj.components.install.call(null,component__7670__auto___8807,description__7669__auto____$1);


var G__8808 = cljs.core.next.call(null,seq__8446_8801__$1);
var G__8809 = null;
var G__8810 = (0);
var G__8811 = (0);
seq__8446_8787 = G__8808;
chunk__8447_8788 = G__8809;
count__8448_8789 = G__8810;
i__8449_8790 = G__8811;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8444_8785);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto____$1);
}

return description__7669__auto____$1;
})(),speclj.components.new_characteristic.call(null,"gets a default game for web-ui",((function (_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var default_game = tic_tac_toe.web_ui.get_default_game.call(null);
var expected__7802__auto___8812 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has-ai","has-ai",1165554355),true,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 2, ["Player",(1),"AI",(2)], null)], null);
var actual__7803__auto___8813 = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(default_game);
if(cljs.core._EQ_.call(null,expected__7802__auto___8812,actual__7803__auto___8813)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8812 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8812)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8813 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8813))," (using =)"].join('')));
}

var expected__7802__auto___8814 = (10);
var actual__7803__auto___8815 = new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(default_game);
if(cljs.core._EQ_.call(null,expected__7802__auto___8814,actual__7803__auto___8815)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8814 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8814)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8815 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8815))," (using =)"].join('')));
}

var expected__7802__auto___8816 = cljs.core.repeat.call(null,(9),(0));
var actual__7803__auto___8817 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(default_game);
if(cljs.core._EQ_.call(null,expected__7802__auto___8816,actual__7803__auto___8817)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8816 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8816)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8817 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8817))," (using =)"].join('')));
}

var value__7796__auto___8818 = new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(default_game);
if(cljs.core.truth_(value__7796__auto___8818)){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7796__auto___8818 == null))?"nil":cljs.core.pr_str.call(null,value__7796__auto___8818))].join('')));
} else {
}

var value__7790__auto___8819 = (new cljs.core.Keyword(null,"save-location","save-location",1426336611).cljs$core$IFn$_invoke$arity$1(default_game) == null);
if((!(value__7790__auto___8819))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7790__auto___8819 == null))?"nil":cljs.core.pr_str.call(null,value__7790__auto___8819)),""].join('')));
} else {
}

var expected__7802__auto__ = new cljs.core.Keyword(null,"web-ui","web-ui",802472408);
var actual__7803__auto__ = new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(default_game);
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),(function (){var description__7669__auto____$1 = speclj.components.new_description.call(null,"ends the game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8454_8820 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8455_8821 = description__7669__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8455_8821);

try{var seq__8456_8822 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"displaying an end condition on the page",((function (_STAR_parent_description_STAR__orig_val__8454_8820,_STAR_parent_description_STAR__temp_val__8455_8821,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
tic_tac_toe.ui_interface.end_game.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"end-cond","end-cond",-1031076501),"AI Wins!"], null));

var expected__7802__auto__ = "AI Wins!";
var actual__7803__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8454_8820,_STAR_parent_description_STAR__temp_val__8455_8821,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"Giving the user the option to retry",((function (_STAR_parent_description_STAR__orig_val__8454_8820,_STAR_parent_description_STAR__temp_val__8455_8821,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var expected__7802__auto__ = "Retry";
var actual__7803__auto__ = cljs.core.last.call(null,cljs.core.nth.call(null,cljs.core.last.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))),(2)));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8454_8820,_STAR_parent_description_STAR__temp_val__8455_8821,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"Giving the user the option to go back to menu",((function (_STAR_parent_description_STAR__orig_val__8454_8820,_STAR_parent_description_STAR__temp_val__8455_8821,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var expected__7802__auto__ = "Back to Menu";
var actual__7803__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.last.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)))));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8454_8820,_STAR_parent_description_STAR__temp_val__8455_8821,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false)],null)));
var chunk__8457_8823 = null;
var count__8458_8824 = (0);
var i__8459_8825 = (0);
while(true){
if((i__8459_8825 < count__8458_8824)){
var component__7670__auto___8826 = cljs.core._nth.call(null,chunk__8457_8823,i__8459_8825);
speclj.components.install.call(null,component__7670__auto___8826,description__7669__auto____$1);


var G__8827 = seq__8456_8822;
var G__8828 = chunk__8457_8823;
var G__8829 = count__8458_8824;
var G__8830 = (i__8459_8825 + (1));
seq__8456_8822 = G__8827;
chunk__8457_8823 = G__8828;
count__8458_8824 = G__8829;
i__8459_8825 = G__8830;
continue;
} else {
var temp__5753__auto___8831 = cljs.core.seq.call(null,seq__8456_8822);
if(temp__5753__auto___8831){
var seq__8456_8832__$1 = temp__5753__auto___8831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8456_8832__$1)){
var c__5568__auto___8833 = cljs.core.chunk_first.call(null,seq__8456_8832__$1);
var G__8834 = cljs.core.chunk_rest.call(null,seq__8456_8832__$1);
var G__8835 = c__5568__auto___8833;
var G__8836 = cljs.core.count.call(null,c__5568__auto___8833);
var G__8837 = (0);
seq__8456_8822 = G__8834;
chunk__8457_8823 = G__8835;
count__8458_8824 = G__8836;
i__8459_8825 = G__8837;
continue;
} else {
var component__7670__auto___8838 = cljs.core.first.call(null,seq__8456_8832__$1);
speclj.components.install.call(null,component__7670__auto___8838,description__7669__auto____$1);


var G__8839 = cljs.core.next.call(null,seq__8456_8832__$1);
var G__8840 = null;
var G__8841 = (0);
var G__8842 = (0);
seq__8456_8822 = G__8839;
chunk__8457_8823 = G__8840;
count__8458_8824 = G__8841;
i__8459_8825 = G__8842;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8454_8820);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto____$1);
}

return description__7669__auto____$1;
})(),(function (){var description__7669__auto____$1 = speclj.components.new_description.call(null,"resets the game by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8460_8843 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8461_8844 = description__7669__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8461_8844);

try{var seq__8462_8845 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"setting the page text back to the page-title",((function (_STAR_parent_description_STAR__orig_val__8460_8843,_STAR_parent_description_STAR__temp_val__8461_8844,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var game_round_orig_val__8470 = tic_tac_toe.game_runner.game_round;
var game_round_temp_val__8471 = (function (_){
return null;
});
(tic_tac_toe.game_runner.game_round = game_round_temp_val__8471);

try{cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),"not the title");

var expected__7802__auto___8849 = "not the title";
var actual__7803__auto___8850 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7802__auto___8849,actual__7803__auto___8850)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8849 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8849)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8850 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8850))," (using =)"].join('')));
}

tic_tac_toe.web_ui.reset_game.call(null);

var expected__7802__auto__ = "Welcome to TicTacToe!";
var actual__7803__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.game_runner.game_round = game_round_orig_val__8470);
}});})(_STAR_parent_description_STAR__orig_val__8460_8843,_STAR_parent_description_STAR__temp_val__8461_8844,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"resetting the game attributes and passing it into a new game-round",((function (_STAR_parent_description_STAR__orig_val__8460_8843,_STAR_parent_description_STAR__temp_val__8461_8844,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var game_round_orig_val__8472 = tic_tac_toe.game_runner.game_round;
var game_round_temp_val__8473 = (function (game){
return game;
});
(tic_tac_toe.game_runner.game_round = game_round_temp_val__8473);

try{cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"round","round",2009433328),(7));

cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(1),(0),(0)], null));

var expected__7802__auto___8851 = (7);
var actual__7803__auto___8852 = new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8851,actual__7803__auto___8852)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8851 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8851)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8852 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8852))," (using =)"].join('')));
}

var expected__7802__auto___8853 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(1),(0),(0)], null);
var actual__7803__auto___8854 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8853,actual__7803__auto___8854)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8853 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8853)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8854 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8854))," (using =)"].join('')));
}

var reset_game = tic_tac_toe.web_ui.reset_game.call(null);
var expected__7802__auto___8855 = (1);
var actual__7803__auto___8856 = new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(reset_game);
if(cljs.core._EQ_.call(null,expected__7802__auto___8855,actual__7803__auto___8856)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8855 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8855)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8856 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8856))," (using =)"].join('')));
}

var expected__7802__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__7803__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(reset_game);
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.game_runner.game_round = game_round_orig_val__8472);
}});})(_STAR_parent_description_STAR__orig_val__8460_8843,_STAR_parent_description_STAR__temp_val__8461_8844,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false)],null)));
var chunk__8463_8846 = null;
var count__8464_8847 = (0);
var i__8465_8848 = (0);
while(true){
if((i__8465_8848 < count__8464_8847)){
var component__7670__auto___8857 = cljs.core._nth.call(null,chunk__8463_8846,i__8465_8848);
speclj.components.install.call(null,component__7670__auto___8857,description__7669__auto____$1);


var G__8858 = seq__8462_8845;
var G__8859 = chunk__8463_8846;
var G__8860 = count__8464_8847;
var G__8861 = (i__8465_8848 + (1));
seq__8462_8845 = G__8858;
chunk__8463_8846 = G__8859;
count__8464_8847 = G__8860;
i__8465_8848 = G__8861;
continue;
} else {
var temp__5753__auto___8862 = cljs.core.seq.call(null,seq__8462_8845);
if(temp__5753__auto___8862){
var seq__8462_8863__$1 = temp__5753__auto___8862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8462_8863__$1)){
var c__5568__auto___8864 = cljs.core.chunk_first.call(null,seq__8462_8863__$1);
var G__8865 = cljs.core.chunk_rest.call(null,seq__8462_8863__$1);
var G__8866 = c__5568__auto___8864;
var G__8867 = cljs.core.count.call(null,c__5568__auto___8864);
var G__8868 = (0);
seq__8462_8845 = G__8865;
chunk__8463_8846 = G__8866;
count__8464_8847 = G__8867;
i__8465_8848 = G__8868;
continue;
} else {
var component__7670__auto___8869 = cljs.core.first.call(null,seq__8462_8863__$1);
speclj.components.install.call(null,component__7670__auto___8869,description__7669__auto____$1);


var G__8870 = cljs.core.next.call(null,seq__8462_8863__$1);
var G__8871 = null;
var G__8872 = (0);
var G__8873 = (0);
seq__8462_8845 = G__8870;
chunk__8463_8846 = G__8871;
count__8464_8847 = G__8872;
i__8465_8848 = G__8873;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8460_8843);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto____$1);
}

return description__7669__auto____$1;
})(),(function (){var description__7669__auto____$1 = speclj.components.new_description.call(null,"makes a move by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8474_8874 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8475_8875 = description__7669__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8475_8875);

try{var seq__8476_8876 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updating the page to a newly updated game-state",((function (_STAR_parent_description_STAR__orig_val__8474_8874,_STAR_parent_description_STAR__temp_val__8475_8875,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var display_board_orig_val__8484 = tic_tac_toe.web_ui.display_board;
var display_board_temp_val__8485 = (function (_){
return "board display";
});
(tic_tac_toe.web_ui.display_board = display_board_temp_val__8485);

try{tic_tac_toe.ui_interface.make_move.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"game","game",-441523833),tic_tac_toe.web_ui_spec.example_game,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),(1)], null));

var expected__7802__auto__ = "board display";
var actual__7803__auto__ = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.display_board = display_board_orig_val__8484);
}});})(_STAR_parent_description_STAR__orig_val__8474_8874,_STAR_parent_description_STAR__temp_val__8475_8875,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"returning a keyword to indicate a user move",((function (_STAR_parent_description_STAR__orig_val__8474_8874,_STAR_parent_description_STAR__temp_val__8475_8875,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var display_board_orig_val__8486 = tic_tac_toe.web_ui.display_board;
var display_board_temp_val__8487 = (function (_){
return null;
});
(tic_tac_toe.web_ui.display_board = display_board_temp_val__8487);

try{var expected__7802__auto__ = new cljs.core.Keyword(null,"player-turn","player-turn",1660424586);
var actual__7803__auto__ = tic_tac_toe.ui_interface.make_move.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.display_board = display_board_orig_val__8486);
}});})(_STAR_parent_description_STAR__orig_val__8474_8874,_STAR_parent_description_STAR__temp_val__8475_8875,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false)],null)));
var chunk__8477_8877 = null;
var count__8478_8878 = (0);
var i__8479_8879 = (0);
while(true){
if((i__8479_8879 < count__8478_8878)){
var component__7670__auto___8880 = cljs.core._nth.call(null,chunk__8477_8877,i__8479_8879);
speclj.components.install.call(null,component__7670__auto___8880,description__7669__auto____$1);


var G__8881 = seq__8476_8876;
var G__8882 = chunk__8477_8877;
var G__8883 = count__8478_8878;
var G__8884 = (i__8479_8879 + (1));
seq__8476_8876 = G__8881;
chunk__8477_8877 = G__8882;
count__8478_8878 = G__8883;
i__8479_8879 = G__8884;
continue;
} else {
var temp__5753__auto___8885 = cljs.core.seq.call(null,seq__8476_8876);
if(temp__5753__auto___8885){
var seq__8476_8886__$1 = temp__5753__auto___8885;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8476_8886__$1)){
var c__5568__auto___8887 = cljs.core.chunk_first.call(null,seq__8476_8886__$1);
var G__8888 = cljs.core.chunk_rest.call(null,seq__8476_8886__$1);
var G__8889 = c__5568__auto___8887;
var G__8890 = cljs.core.count.call(null,c__5568__auto___8887);
var G__8891 = (0);
seq__8476_8876 = G__8888;
chunk__8477_8877 = G__8889;
count__8478_8878 = G__8890;
i__8479_8879 = G__8891;
continue;
} else {
var component__7670__auto___8892 = cljs.core.first.call(null,seq__8476_8886__$1);
speclj.components.install.call(null,component__7670__auto___8892,description__7669__auto____$1);


var G__8893 = cljs.core.next.call(null,seq__8476_8886__$1);
var G__8894 = null;
var G__8895 = (0);
var G__8896 = (0);
seq__8476_8876 = G__8893;
chunk__8477_8877 = G__8894;
count__8478_8878 = G__8895;
i__8479_8879 = G__8896;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8474_8874);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto____$1);
}

return description__7669__auto____$1;
})(),(function (){var description__7669__auto____$1 = speclj.components.new_description.call(null,"gives the round output by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8488_8897 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8489_8898 = description__7669__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8489_8898);

try{var seq__8490_8899 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"setting the game state to the passed in game parameter",((function (_STAR_parent_description_STAR__orig_val__8488_8897,_STAR_parent_description_STAR__temp_val__8489_8898,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var display_board_orig_val__8498 = tic_tac_toe.web_ui.display_board;
var display_board_temp_val__8499 = (function (_){
return null;
});
(tic_tac_toe.web_ui.display_board = display_board_temp_val__8499);

try{tic_tac_toe.ui_interface.round_output.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"game","game",-441523833),"example"], null));

var expected__7802__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"game","game",-441523833),"example"], null);
var actual__7803__auto__ = cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state);
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.display_board = display_board_orig_val__8498);
}});})(_STAR_parent_description_STAR__orig_val__8488_8897,_STAR_parent_description_STAR__temp_val__8489_8898,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"updating the page to a newly updated game-state",((function (_STAR_parent_description_STAR__orig_val__8488_8897,_STAR_parent_description_STAR__temp_val__8489_8898,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var display_board_orig_val__8500 = tic_tac_toe.web_ui.display_board;
var display_board_temp_val__8501 = (function (_){
return "board display";
});
(tic_tac_toe.web_ui.display_board = display_board_temp_val__8501);

try{tic_tac_toe.ui_interface.round_output.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"game","game",-441523833),tic_tac_toe.web_ui_spec.example_game], null));

var expected__7802__auto__ = "board display";
var actual__7803__auto__ = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.display_board = display_board_orig_val__8500);
}});})(_STAR_parent_description_STAR__orig_val__8488_8897,_STAR_parent_description_STAR__temp_val__8489_8898,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false)],null)));
var chunk__8491_8900 = null;
var count__8492_8901 = (0);
var i__8493_8902 = (0);
while(true){
if((i__8493_8902 < count__8492_8901)){
var component__7670__auto___8903 = cljs.core._nth.call(null,chunk__8491_8900,i__8493_8902);
speclj.components.install.call(null,component__7670__auto___8903,description__7669__auto____$1);


var G__8904 = seq__8490_8899;
var G__8905 = chunk__8491_8900;
var G__8906 = count__8492_8901;
var G__8907 = (i__8493_8902 + (1));
seq__8490_8899 = G__8904;
chunk__8491_8900 = G__8905;
count__8492_8901 = G__8906;
i__8493_8902 = G__8907;
continue;
} else {
var temp__5753__auto___8908 = cljs.core.seq.call(null,seq__8490_8899);
if(temp__5753__auto___8908){
var seq__8490_8909__$1 = temp__5753__auto___8908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8490_8909__$1)){
var c__5568__auto___8910 = cljs.core.chunk_first.call(null,seq__8490_8909__$1);
var G__8911 = cljs.core.chunk_rest.call(null,seq__8490_8909__$1);
var G__8912 = c__5568__auto___8910;
var G__8913 = cljs.core.count.call(null,c__5568__auto___8910);
var G__8914 = (0);
seq__8490_8899 = G__8911;
chunk__8491_8900 = G__8912;
count__8492_8901 = G__8913;
i__8493_8902 = G__8914;
continue;
} else {
var component__7670__auto___8915 = cljs.core.first.call(null,seq__8490_8909__$1);
speclj.components.install.call(null,component__7670__auto___8915,description__7669__auto____$1);


var G__8916 = cljs.core.next.call(null,seq__8490_8909__$1);
var G__8917 = null;
var G__8918 = (0);
var G__8919 = (0);
seq__8490_8899 = G__8916;
chunk__8491_8900 = G__8917;
count__8492_8901 = G__8918;
i__8493_8902 = G__8919;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8488_8897);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto____$1);
}

return description__7669__auto____$1;
})(),(function (){var description__7669__auto____$1 = speclj.components.new_description.call(null,"displays",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8502_8920 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8503_8921 = description__7669__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8503_8921);

try{var seq__8504_8922 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"row 0 of a 3x3",((function (_STAR_parent_description_STAR__orig_val__8502_8920,_STAR_parent_description_STAR__temp_val__8503_8921,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var row = tic_tac_toe.web_ui.display_row.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(1),(1),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(0),null);
var expected__7802__auto___8926 = (3);
var actual__7803__auto___8927 = cljs.core.count.call(null,row);
if(cljs.core._EQ_.call(null,expected__7802__auto___8926,actual__7803__auto___8927)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8926 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8926)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8927 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8927))," (using =)"].join('')));
}

var expected__7802__auto___8928 = " ";
var actual__7803__auto___8929 = cljs.core.last.call(null,cljs.core.first.call(null,row));
if(cljs.core._EQ_.call(null,expected__7802__auto___8928,actual__7803__auto___8929)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8928 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8928)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8929 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8929))," (using =)"].join('')));
}

var expected__7802__auto___8930 = " ";
var actual__7803__auto___8931 = cljs.core.last.call(null,cljs.core.second.call(null,row));
if(cljs.core._EQ_.call(null,expected__7802__auto___8930,actual__7803__auto___8931)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8930 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8930)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8931 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8931))," (using =)"].join('')));
}

var expected__7802__auto__ = " ";
var actual__7803__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,row));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8502_8920,_STAR_parent_description_STAR__temp_val__8503_8921,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"row 1 of a 4x4",((function (_STAR_parent_description_STAR__orig_val__8502_8920,_STAR_parent_description_STAR__temp_val__8503_8921,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var row = tic_tac_toe.web_ui.display_row.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(2),(2),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1),null);
var expected__7802__auto___8932 = (4);
var actual__7803__auto___8933 = cljs.core.count.call(null,row);
if(cljs.core._EQ_.call(null,expected__7802__auto___8932,actual__7803__auto___8933)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8932 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8932)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8933 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8933))," (using =)"].join('')));
}

var expected__7802__auto___8934 = "X";
var actual__7803__auto___8935 = cljs.core.last.call(null,cljs.core.first.call(null,row));
if(cljs.core._EQ_.call(null,expected__7802__auto___8934,actual__7803__auto___8935)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8934 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8934)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8935 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8935))," (using =)"].join('')));
}

var expected__7802__auto___8936 = "X";
var actual__7803__auto___8937 = cljs.core.last.call(null,cljs.core.second.call(null,row));
if(cljs.core._EQ_.call(null,expected__7802__auto___8936,actual__7803__auto___8937)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8936 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8936)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8937 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8937))," (using =)"].join('')));
}

var expected__7802__auto___8938 = "O";
var actual__7803__auto___8939 = cljs.core.last.call(null,cljs.core.nth.call(null,row,(2)));
if(cljs.core._EQ_.call(null,expected__7802__auto___8938,actual__7803__auto___8939)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8938 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8938)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8939 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8939))," (using =)"].join('')));
}

var expected__7802__auto__ = "O";
var actual__7803__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,row));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8502_8920,_STAR_parent_description_STAR__temp_val__8503_8921,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"row 0 of a 3x3x3",((function (_STAR_parent_description_STAR__orig_val__8502_8920,_STAR_parent_description_STAR__temp_val__8503_8921,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var row = tic_tac_toe.web_ui.display_row.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(27),(0)),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null),(0),null);
var expected__7802__auto___8940 = (3);
var actual__7803__auto___8941 = cljs.core.count.call(null,row);
if(cljs.core._EQ_.call(null,expected__7802__auto___8940,actual__7803__auto___8941)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8940 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8940)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8941 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8941))," (using =)"].join('')));
}

var expected__7802__auto___8942 = " ";
var actual__7803__auto___8943 = cljs.core.last.call(null,cljs.core.first.call(null,row));
if(cljs.core._EQ_.call(null,expected__7802__auto___8942,actual__7803__auto___8943)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8942 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8942)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8943 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8943))," (using =)"].join('')));
}

var expected__7802__auto___8944 = " ";
var actual__7803__auto___8945 = cljs.core.last.call(null,cljs.core.second.call(null,row));
if(cljs.core._EQ_.call(null,expected__7802__auto___8944,actual__7803__auto___8945)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8944 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8944)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8945 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8945))," (using =)"].join('')));
}

var expected__7802__auto__ = " ";
var actual__7803__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,row));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8502_8920,_STAR_parent_description_STAR__temp_val__8503_8921,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"entire 3x3 board",((function (_STAR_parent_description_STAR__orig_val__8502_8920,_STAR_parent_description_STAR__temp_val__8503_8921,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var rows = tic_tac_toe.web_ui.display_board.call(null,tic_tac_toe.web_ui_spec.example_game,(1));
var expected__7802__auto___8946 = (3);
var actual__7803__auto___8947 = cljs.core.count.call(null,rows);
if(cljs.core._EQ_.call(null,expected__7802__auto___8946,actual__7803__auto___8947)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8946 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8946)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8947 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8947))," (using =)"].join('')));
}

var expected__7802__auto__ = "O";
var actual__7803__auto__ = cljs.core.last.call(null,cljs.core.second.call(null,cljs.core.second.call(null,cljs.core.second.call(null,rows))));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8502_8920,_STAR_parent_description_STAR__temp_val__8503_8921,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"entire 3x3x3 board",((function (_STAR_parent_description_STAR__orig_val__8502_8920,_STAR_parent_description_STAR__temp_val__8503_8921,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var new_game = cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.web_ui_spec.example_game,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(27),(0))),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true);
var rows = tic_tac_toe.web_ui.display_board.call(null,new_game,(1));
var expected__7802__auto___8948 = (9);
var actual__7803__auto___8949 = cljs.core.count.call(null,rows);
if(cljs.core._EQ_.call(null,expected__7802__auto___8948,actual__7803__auto___8949)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8948 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8948)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8949 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8949))," (using =)"].join('')));
}

var expected__7802__auto__ = " ";
var actual__7803__auto__ = cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.nth.call(null,cljs.core.second.call(null,rows),(2))));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8502_8920,_STAR_parent_description_STAR__temp_val__8503_8921,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false)],null)));
var chunk__8505_8923 = null;
var count__8506_8924 = (0);
var i__8507_8925 = (0);
while(true){
if((i__8507_8925 < count__8506_8924)){
var component__7670__auto___8950 = cljs.core._nth.call(null,chunk__8505_8923,i__8507_8925);
speclj.components.install.call(null,component__7670__auto___8950,description__7669__auto____$1);


var G__8951 = seq__8504_8922;
var G__8952 = chunk__8505_8923;
var G__8953 = count__8506_8924;
var G__8954 = (i__8507_8925 + (1));
seq__8504_8922 = G__8951;
chunk__8505_8923 = G__8952;
count__8506_8924 = G__8953;
i__8507_8925 = G__8954;
continue;
} else {
var temp__5753__auto___8955 = cljs.core.seq.call(null,seq__8504_8922);
if(temp__5753__auto___8955){
var seq__8504_8956__$1 = temp__5753__auto___8955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8504_8956__$1)){
var c__5568__auto___8957 = cljs.core.chunk_first.call(null,seq__8504_8956__$1);
var G__8958 = cljs.core.chunk_rest.call(null,seq__8504_8956__$1);
var G__8959 = c__5568__auto___8957;
var G__8960 = cljs.core.count.call(null,c__5568__auto___8957);
var G__8961 = (0);
seq__8504_8922 = G__8958;
chunk__8505_8923 = G__8959;
count__8506_8924 = G__8960;
i__8507_8925 = G__8961;
continue;
} else {
var component__7670__auto___8962 = cljs.core.first.call(null,seq__8504_8956__$1);
speclj.components.install.call(null,component__7670__auto___8962,description__7669__auto____$1);


var G__8963 = cljs.core.next.call(null,seq__8504_8956__$1);
var G__8964 = null;
var G__8965 = (0);
var G__8966 = (0);
seq__8504_8922 = G__8963;
chunk__8505_8923 = G__8964;
count__8506_8924 = G__8965;
i__8507_8925 = G__8966;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8502_8920);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto____$1);
}

return description__7669__auto____$1;
})(),(function (){var description__7669__auto____$1 = speclj.components.new_description.call(null,"plays a move on the board by",false,"tic-tac-toe.web-ui-spec");
var _STAR_parent_description_STAR__orig_val__8508_8967 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8509_8968 = description__7669__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8509_8968);

try{var seq__8510_8969 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updating the game state if given a valid move",((function (_STAR_parent_description_STAR__orig_val__8508_8967,_STAR_parent_description_STAR__temp_val__8509_8968,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var play_next_round_orig_val__8522 = tic_tac_toe.web_ui.play_next_round;
var play_next_round_temp_val__8523 = (function (){
return null;
});
(tic_tac_toe.web_ui.play_next_round = play_next_round_temp_val__8523);

try{cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,tic_tac_toe.web_ui_spec.example_game);

tic_tac_toe.web_ui.play_move_BANG_.call(null,tic_tac_toe.web_ui_spec.example_game,(8),(2));

var expected__7802__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(2),(0),(0),(0),(2)], null);
var actual__7803__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.play_next_round = play_next_round_orig_val__8522);
}});})(_STAR_parent_description_STAR__orig_val__8508_8967,_STAR_parent_description_STAR__temp_val__8509_8968,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"not updating the game state if given an invalid move",((function (_STAR_parent_description_STAR__orig_val__8508_8967,_STAR_parent_description_STAR__temp_val__8509_8968,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var play_next_round_orig_val__8524 = tic_tac_toe.web_ui.play_next_round;
var play_next_round_temp_val__8525 = (function (){
return null;
});
(tic_tac_toe.web_ui.play_next_round = play_next_round_temp_val__8525);

try{cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,tic_tac_toe.web_ui_spec.example_game);

tic_tac_toe.web_ui.play_move_BANG_.call(null,tic_tac_toe.web_ui_spec.example_game,(0),(1));

var expected__7802__auto___8973 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(2),(0),(0),(0),(0)], null);
var actual__7803__auto___8974 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto___8973,actual__7803__auto___8974)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8973 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8973)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8974 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8974))," (using =)"].join('')));
}

tic_tac_toe.web_ui.play_move_BANG_.call(null,tic_tac_toe.web_ui_spec.example_game,(8),null);

var expected__7802__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(2),(0),(0),(0),(0)], null);
var actual__7803__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.play_next_round = play_next_round_orig_val__8524);
}});})(_STAR_parent_description_STAR__orig_val__8508_8967,_STAR_parent_description_STAR__temp_val__8509_8968,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"plays the next round in the game",((function (_STAR_parent_description_STAR__orig_val__8508_8967,_STAR_parent_description_STAR__temp_val__8509_8968,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var game_round_orig_val__8526 = tic_tac_toe.game_runner.game_round;
var end_game_if_game_over_orig_val__8527 = tic_tac_toe.web_ui.end_game_if_game_over;
var game_round_temp_val__8528 = (function (_){
return "next round!";
});
var end_game_if_game_over_temp_val__8529 = (function (state){
return state;
});
(tic_tac_toe.game_runner.game_round = game_round_temp_val__8528);

(tic_tac_toe.web_ui.end_game_if_game_over = end_game_if_game_over_temp_val__8529);

try{var expected__7802__auto__ = "next round!";
var actual__7803__auto__ = tic_tac_toe.web_ui.play_move_BANG_.call(null,tic_tac_toe.web_ui_spec.example_game,(0),(1));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.web_ui.end_game_if_game_over = end_game_if_game_over_orig_val__8527);

(tic_tac_toe.game_runner.game_round = game_round_orig_val__8526);
}});})(_STAR_parent_description_STAR__orig_val__8508_8967,_STAR_parent_description_STAR__temp_val__8509_8968,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"ending the game if an end condition is met",((function (_STAR_parent_description_STAR__orig_val__8508_8967,_STAR_parent_description_STAR__temp_val__8509_8968,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var finished_game = cljs.core.assoc.call(null,tic_tac_toe.web_ui_spec.example_game,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(0),(0),(0)], null));
tic_tac_toe.web_ui.play_move_BANG_.call(null,finished_game,(6),(1));

var expected__7802__auto__ = "\nPlayer wins!";
var actual__7803__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8508_8967,_STAR_parent_description_STAR__temp_val__8509_8968,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false),speclj.components.new_characteristic.call(null,"ending the game if the next round is an ai turn that ends the game",((function (_STAR_parent_description_STAR__orig_val__8508_8967,_STAR_parent_description_STAR__temp_val__8509_8968,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530){
return (function (){
var finished_game_8975 = cljs.core.assoc.call(null,tic_tac_toe.web_ui_spec.example_game,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(1),(2),(1),(0),(0),(0),(0)], null));
cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,finished_game_8975);

tic_tac_toe.web_ui.play_move_BANG_.call(null,finished_game_8975,(1),(1));

var expected__7802__auto___8976 = "\nAI wins!";
var actual__7803__auto___8977 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7802__auto___8976,actual__7803__auto___8977)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto___8976 == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto___8976)),speclj.platform.endl,"     got: ",(((actual__7803__auto___8977 == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto___8977))," (using =)"].join('')));
}

var finished_game = cljs.core.assoc.call(null,cljs.core.assoc.call(null,tic_tac_toe.web_ui_spec.example_game,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(2),(2),(2),(0),(1),(2),(1)], null)),new cljs.core.Keyword(null,"round","round",2009433328),(9));
cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,finished_game);

tic_tac_toe.web_ui.play_move_BANG_.call(null,finished_game,(5),(1));

var expected__7802__auto__ = "\nTie!";
var actual__7803__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page));
if(cljs.core._EQ_.call(null,expected__7802__auto__,actual__7803__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7802__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7802__auto__)),speclj.platform.endl,"     got: ",(((actual__7803__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7803__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8508_8967,_STAR_parent_description_STAR__temp_val__8509_8968,description__7669__auto____$1,_STAR_parent_description_STAR__orig_val__8164_8531,_STAR_parent_description_STAR__temp_val__8165_8532,description__7669__auto___8530))
,false)],null)));
var chunk__8511_8970 = null;
var count__8512_8971 = (0);
var i__8513_8972 = (0);
while(true){
if((i__8513_8972 < count__8512_8971)){
var component__7670__auto___8978 = cljs.core._nth.call(null,chunk__8511_8970,i__8513_8972);
speclj.components.install.call(null,component__7670__auto___8978,description__7669__auto____$1);


var G__8979 = seq__8510_8969;
var G__8980 = chunk__8511_8970;
var G__8981 = count__8512_8971;
var G__8982 = (i__8513_8972 + (1));
seq__8510_8969 = G__8979;
chunk__8511_8970 = G__8980;
count__8512_8971 = G__8981;
i__8513_8972 = G__8982;
continue;
} else {
var temp__5753__auto___8983 = cljs.core.seq.call(null,seq__8510_8969);
if(temp__5753__auto___8983){
var seq__8510_8984__$1 = temp__5753__auto___8983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8510_8984__$1)){
var c__5568__auto___8985 = cljs.core.chunk_first.call(null,seq__8510_8984__$1);
var G__8986 = cljs.core.chunk_rest.call(null,seq__8510_8984__$1);
var G__8987 = c__5568__auto___8985;
var G__8988 = cljs.core.count.call(null,c__5568__auto___8985);
var G__8989 = (0);
seq__8510_8969 = G__8986;
chunk__8511_8970 = G__8987;
count__8512_8971 = G__8988;
i__8513_8972 = G__8989;
continue;
} else {
var component__7670__auto___8990 = cljs.core.first.call(null,seq__8510_8984__$1);
speclj.components.install.call(null,component__7670__auto___8990,description__7669__auto____$1);


var G__8991 = cljs.core.next.call(null,seq__8510_8984__$1);
var G__8992 = null;
var G__8993 = (0);
var G__8994 = (0);
seq__8510_8969 = G__8991;
chunk__8511_8970 = G__8992;
count__8512_8971 = G__8993;
i__8513_8972 = G__8994;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8508_8967);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto____$1);
}

return description__7669__auto____$1;
})()],null)));
var chunk__8167_8534 = null;
var count__8168_8535 = (0);
var i__8169_8536 = (0);
while(true){
if((i__8169_8536 < count__8168_8535)){
var component__7670__auto___8995 = cljs.core._nth.call(null,chunk__8167_8534,i__8169_8536);
speclj.components.install.call(null,component__7670__auto___8995,description__7669__auto___8530);


var G__8996 = seq__8166_8533;
var G__8997 = chunk__8167_8534;
var G__8998 = count__8168_8535;
var G__8999 = (i__8169_8536 + (1));
seq__8166_8533 = G__8996;
chunk__8167_8534 = G__8997;
count__8168_8535 = G__8998;
i__8169_8536 = G__8999;
continue;
} else {
var temp__5753__auto___9000 = cljs.core.seq.call(null,seq__8166_8533);
if(temp__5753__auto___9000){
var seq__8166_9001__$1 = temp__5753__auto___9000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8166_9001__$1)){
var c__5568__auto___9002 = cljs.core.chunk_first.call(null,seq__8166_9001__$1);
var G__9003 = cljs.core.chunk_rest.call(null,seq__8166_9001__$1);
var G__9004 = c__5568__auto___9002;
var G__9005 = cljs.core.count.call(null,c__5568__auto___9002);
var G__9006 = (0);
seq__8166_8533 = G__9003;
chunk__8167_8534 = G__9004;
count__8168_8535 = G__9005;
i__8169_8536 = G__9006;
continue;
} else {
var component__7670__auto___9007 = cljs.core.first.call(null,seq__8166_9001__$1);
speclj.components.install.call(null,component__7670__auto___9007,description__7669__auto___8530);


var G__9008 = cljs.core.next.call(null,seq__8166_9001__$1);
var G__9009 = null;
var G__9010 = (0);
var G__9011 = (0);
seq__8166_8533 = G__9008;
chunk__8167_8534 = G__9009;
count__8168_8535 = G__9010;
i__8169_8536 = G__9011;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8164_8531);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto___8530);
}


//# sourceMappingURL=web_ui_spec.js.map
