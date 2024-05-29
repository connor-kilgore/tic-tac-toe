// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.web_ui');
goog.require('cljs.core');
goog.require('tic_tac_toe.game_runner');
goog.require('tic_tac_toe.ui_interface');
goog.require('tic_tac_toe.option_selector');
goog.require('tic_tac_toe.tic_tac_toe_board');
goog.require('tic_tac_toe.symbols');
goog.require('reagent.dom');
goog.require('reagent.core');
goog.require('clojure.string');
tic_tac_toe.web_ui.game_state = cljs.core.atom.call(null,null);
tic_tac_toe.web_ui.page = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"content","content",15833224),null], null));
tic_tac_toe.web_ui.page_title = "Welcome to TicTacToe!";
tic_tac_toe.web_ui.ttt_page = (function tic_tac_toe$web_ui$ttt_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))], null),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page))], null);
});
tic_tac_toe.web_ui.render_root = (function tic_tac_toe$web_ui$render_root(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.web_ui.ttt_page], null),document.getElementById("root"));
});
tic_tac_toe.web_ui.get_options_vector = (function tic_tac_toe$web_ui$get_options_vector(s){
var split_s = clojure.string.split.call(null,s,/\[/);
var iter__5523__auto__ = (function tic_tac_toe$web_ui$get_options_vector_$_iter__13892(s__13893){
return (new cljs.core.LazySeq(null,(function (){
var s__13893__$1 = s__13893;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__13893__$1);
if(temp__5753__auto__){
var s__13893__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13893__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__13893__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__13895 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__13894 = (0);
while(true){
if((i__13894 < size__5522__auto__)){
var string = cljs.core._nth.call(null,c__5521__auto__,i__13894);
cljs.core.chunk_append.call(null,b__13895,cljs.core.subs.call(null,string,(function (){var x__5133__auto__ = (3);
var y__5134__auto__ = cljs.core.count.call(null,string);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})()));

var G__13896 = (i__13894 + (1));
i__13894 = G__13896;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13895),tic_tac_toe$web_ui$get_options_vector_$_iter__13892.call(null,cljs.core.chunk_rest.call(null,s__13893__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13895),null);
}
} else {
var string = cljs.core.first.call(null,s__13893__$2);
return cljs.core.cons.call(null,cljs.core.subs.call(null,string,(function (){var x__5133__auto__ = (3);
var y__5134__auto__ = cljs.core.count.call(null,string);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})()),tic_tac_toe$web_ui$get_options_vector_$_iter__13892.call(null,cljs.core.rest.call(null,s__13893__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.rest.call(null,split_s));
});
tic_tac_toe.web_ui.get_values = (function tic_tac_toe$web_ui$get_values(s){
var split_s = clojure.string.split.call(null,s,/\[/);
var iter__5523__auto__ = (function tic_tac_toe$web_ui$get_values_$_iter__13897(s__13898){
return (new cljs.core.LazySeq(null,(function (){
var s__13898__$1 = s__13898;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__13898__$1);
if(temp__5753__auto__){
var s__13898__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13898__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__13898__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__13900 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__13899 = (0);
while(true){
if((i__13899 < size__5522__auto__)){
var string = cljs.core._nth.call(null,c__5521__auto__,i__13899);
cljs.core.chunk_append.call(null,b__13900,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,string)));

var G__13901 = (i__13899 + (1));
i__13899 = G__13901;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13900),tic_tac_toe$web_ui$get_values_$_iter__13897.call(null,cljs.core.chunk_rest.call(null,s__13898__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13900),null);
}
} else {
var string = cljs.core.first.call(null,s__13898__$2);
return cljs.core.cons.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,string)),tic_tac_toe$web_ui$get_values_$_iter__13897.call(null,cljs.core.rest.call(null,s__13898__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.rest.call(null,split_s));
});
tic_tac_toe.web_ui.get_option_buttons = (function tic_tac_toe$web_ui$get_option_buttons(options,event){
var vals = tic_tac_toe.web_ui.get_values.call(null,new cljs.core.Keyword(null,"print-statement","print-statement",-1241213913).cljs$core$IFn$_invoke$arity$1(options));
var iter__5523__auto__ = (function tic_tac_toe$web_ui$get_option_buttons_$_iter__13902(s__13903){
return (new cljs.core.LazySeq(null,(function (){
var s__13903__$1 = s__13903;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__13903__$1);
if(temp__5753__auto__){
var s__13903__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13903__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__13903__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__13905 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__13904 = (0);
while(true){
if((i__13904 < size__5522__auto__)){
var vec__13906 = cljs.core._nth.call(null,c__5521__auto__,i__13904);
var i = cljs.core.nth.call(null,vec__13906,(0),null);
var v = cljs.core.nth.call(null,vec__13906,(1),null);
cljs.core.chunk_append.call(null,b__13905,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13904,vec__13906,i,v,c__5521__auto__,size__5522__auto__,b__13905,s__13903__$2,temp__5753__auto__,vals){
return (function (){
return event.call(null,cljs.core.nth.call(null,vals,i),v);
});})(i__13904,vec__13906,i,v,c__5521__auto__,size__5522__auto__,b__13905,s__13903__$2,temp__5753__auto__,vals))
], null),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__13912 = (i__13904 + (1));
i__13904 = G__13912;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13905),tic_tac_toe$web_ui$get_option_buttons_$_iter__13902.call(null,cljs.core.chunk_rest.call(null,s__13903__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13905),null);
}
} else {
var vec__13909 = cljs.core.first.call(null,s__13903__$2);
var i = cljs.core.nth.call(null,vec__13909,(0),null);
var v = cljs.core.nth.call(null,vec__13909,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__13909,i,v,s__13903__$2,temp__5753__auto__,vals){
return (function (){
return event.call(null,cljs.core.nth.call(null,vals,i),v);
});})(vec__13909,i,v,s__13903__$2,temp__5753__auto__,vals))
], null),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),tic_tac_toe$web_ui$get_option_buttons_$_iter__13902.call(null,cljs.core.rest.call(null,s__13903__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,tic_tac_toe.web_ui.get_options_vector.call(null,new cljs.core.Keyword(null,"print-statement","print-statement",-1241213913).cljs$core$IFn$_invoke$arity$1(options))));
});
tic_tac_toe.web_ui.set_size = (function tic_tac_toe$web_ui$set_size(){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state))));

return cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),tic_tac_toe.web_ui.get_option_buttons.call(null,tic_tac_toe.option_selector.board_size_options,(function (k,v){
var dimensions_13913 = tic_tac_toe.option_selector.get_option.call(null,tic_tac_toe.option_selector.board_size_options,k);
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667).cljs$core$IFn$_invoke$arity$1(dimensions_13913),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.tic_tac_toe_board.make_board.call(null,dimensions_13913));

return tic_tac_toe.game_runner.game_round.call(null,cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
})));
});
tic_tac_toe.web_ui.set_difficulty = (function tic_tac_toe$web_ui$set_difficulty(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"has-ai","has-ai",1165554355).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state))))){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),tic_tac_toe.web_ui.get_option_buttons.call(null,tic_tac_toe.option_selector.difficulty_options,(function (k,v){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"difficulty","difficulty",755680807),tic_tac_toe.option_selector.get_option.call(null,tic_tac_toe.option_selector.difficulty_options,k));

return tic_tac_toe.web_ui.set_size.call(null);
})));
} else {
return tic_tac_toe.web_ui.set_size.call(null);
}
});
tic_tac_toe.web_ui.call_game_initialize = (function tic_tac_toe$web_ui$call_game_initialize(){
return tic_tac_toe.ui_interface.initialize_game.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));
});
tic_tac_toe.web_ui.set_symbol = (function tic_tac_toe$web_ui$set_symbol(){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"one-player","one-player",-1358620345),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)))){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),tic_tac_toe.web_ui.get_option_buttons.call(null,tic_tac_toe.option_selector.symbol_options,(function (k,v){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),tic_tac_toe.option_selector.get_option.call(null,tic_tac_toe.option_selector.symbol_options,k));

return tic_tac_toe.web_ui.set_difficulty.call(null);
})));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"close-program","close-program",-1579447425),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)))){
return tic_tac_toe.web_ui.call_game_initialize.call(null);
} else {
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)));

return tic_tac_toe.web_ui.set_difficulty.call(null);

}
}
});
tic_tac_toe.web_ui.set_game_mode = (function tic_tac_toe$web_ui$set_game_mode(){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),tic_tac_toe.web_ui.get_option_buttons.call(null,tic_tac_toe.option_selector.menu_options,(function (k,v){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),tic_tac_toe.option_selector.get_option.call(null,tic_tac_toe.option_selector.menu_options,k));

return tic_tac_toe.web_ui.set_symbol.call(null);
})));
});
tic_tac_toe.web_ui.get_stateless_game = (function tic_tac_toe$web_ui$get_stateless_game(){
var new_game = tic_tac_toe.game_runner.base_game;
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,new_game,new cljs.core.Keyword(null,"save-location","save-location",1426336611),null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408));
});
cljs.core._add_method.call(null,tic_tac_toe.ui_interface.initialize_ui,new cljs.core.Keyword(null,"web-ui","web-ui",802472408),(function (_){
tic_tac_toe.web_ui.render_root.call(null);

return tic_tac_toe.ui_interface.initialize_game.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408)], null));
}));
tic_tac_toe.web_ui.update_game_BANG_ = (function tic_tac_toe$web_ui$update_game_BANG_(key,val){
var updated_game = cljs.core.assoc.call(null,cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state),key,val);
return cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,updated_game);
});
cljs.core._add_method.call(null,tic_tac_toe.ui_interface.initialize_game,new cljs.core.Keyword(null,"web-ui","web-ui",802472408),(function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),tic_tac_toe.web_ui.page_title);

var new_game = tic_tac_toe.web_ui.get_stateless_game.call(null);
cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,new_game);

return cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.web_ui.set_game_mode.call(null);
}),new cljs.core.Keyword(null,"id","id",-1388402092),"start"], null),"Start!"], null));
}));
tic_tac_toe.web_ui.valid_player_move_QMARK_ = (function tic_tac_toe$web_ui$valid_player_move_QMARK_(game,position,symbol){
return (((!((symbol == null)))) && (tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),position)));
});
tic_tac_toe.web_ui.valid_move_QMARK_ = (function tic_tac_toe$web_ui$valid_move_QMARK_(game,position,symbol){
return (((symbol == null)) || (tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),position)));
});
tic_tac_toe.web_ui.play_move_BANG_ = (function tic_tac_toe$web_ui$play_move_BANG_(game,i,symbol){
if(tic_tac_toe.web_ui.valid_player_move_QMARK_.call(null,game,i,symbol)){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),symbol,i));

cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"round","round",2009433328),(new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(game) + (1)));
} else {
}

if(tic_tac_toe.web_ui.valid_move_QMARK_.call(null,game,i,symbol)){
var new_state = tic_tac_toe.game_runner.game_round.call(null,cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state));
if(cljs.core.map_QMARK_.call(null,new_state)){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,new_state);
} else {
if((!(cljs.core._EQ_.call(null,new_state,new cljs.core.Keyword(null,"player-turn","player-turn",1660424586))))){
return tic_tac_toe.ui_interface.end_game.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-ui","web-ui",802472408),new cljs.core.Keyword(null,"end-cond","end-cond",-1031076501),tic_tac_toe.game_runner.get_end_condition_string.call(null,new_state,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)))], null));
} else {
return null;
}
}
} else {
return null;
}
});
tic_tac_toe.web_ui.display_row = (function tic_tac_toe$web_ui$display_row(game,row_SHARP_,symbol){
var side_len = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,game);
var start_index = (row_SHARP_ * side_len);
var iter__5523__auto__ = (function tic_tac_toe$web_ui$display_row_$_iter__13914(s__13915){
return (new cljs.core.LazySeq(null,(function (){
var s__13915__$1 = s__13915;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__13915__$1);
if(temp__5753__auto__){
var s__13915__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13915__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__13915__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__13917 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__13916 = (0);
while(true){
if((i__13916 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__13916);
cljs.core.chunk_append.call(null,b__13917,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13916,i,c__5521__auto__,size__5522__auto__,b__13917,s__13915__$2,temp__5753__auto__,side_len,start_index){
return (function (){
return tic_tac_toe.web_ui.play_move_BANG_.call(null,game,i,symbol);
});})(i__13916,i,c__5521__auto__,size__5522__auto__,b__13917,s__13915__$2,temp__5753__auto__,side_len,start_index))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px"], null)], null),cljs.core.get.call(null,tic_tac_toe.symbols.gui_symbols,cljs.core.nth.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),i))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__13918 = (i__13916 + (1));
i__13916 = G__13918;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13917),tic_tac_toe$web_ui$display_row_$_iter__13914.call(null,cljs.core.chunk_rest.call(null,s__13915__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13917),null);
}
} else {
var i = cljs.core.first.call(null,s__13915__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i,s__13915__$2,temp__5753__auto__,side_len,start_index){
return (function (){
return tic_tac_toe.web_ui.play_move_BANG_.call(null,game,i,symbol);
});})(i,s__13915__$2,temp__5753__auto__,side_len,start_index))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px"], null)], null),cljs.core.get.call(null,tic_tac_toe.symbols.gui_symbols,cljs.core.nth.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),i))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),tic_tac_toe$web_ui$display_row_$_iter__13914.call(null,cljs.core.rest.call(null,s__13915__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,start_index,(start_index + side_len)));
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.web_ui !== 'undefined') && (typeof tic_tac_toe.web_ui.display_board !== 'undefined')){
} else {
tic_tac_toe.web_ui.display_board = (function (){var method_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.web-ui","display-board"),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.web_ui.display_board,false,(function (game,symbol){
var side_len = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,game);
var iter__5523__auto__ = (function tic_tac_toe$web_ui$iter__13919(s__13920){
return (new cljs.core.LazySeq(null,(function (){
var s__13920__$1 = s__13920;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__13920__$1);
if(temp__5753__auto__){
var s__13920__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13920__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__13920__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__13922 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__13921 = (0);
while(true){
if((i__13921 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__13921);
cljs.core.chunk_append.call(null,b__13922,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),tic_tac_toe.web_ui.display_row.call(null,game,i,symbol)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__13923 = (i__13921 + (1));
i__13921 = G__13923;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13922),tic_tac_toe$web_ui$iter__13919.call(null,cljs.core.chunk_rest.call(null,s__13920__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13922),null);
}
} else {
var i = cljs.core.first.call(null,s__13920__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),tic_tac_toe.web_ui.display_row.call(null,game,i,symbol)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),tic_tac_toe$web_ui$iter__13919.call(null,cljs.core.rest.call(null,s__13920__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,side_len));
}));
cljs.core._add_method.call(null,tic_tac_toe.web_ui.display_board,true,(function (game,symbol){
var side_len = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,game);
var iter__5523__auto__ = (function tic_tac_toe$web_ui$iter__13924(s__13925){
return (new cljs.core.LazySeq(null,(function (){
var s__13925__$1 = s__13925;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__13925__$1);
if(temp__5753__auto__){
var s__13925__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13925__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__13925__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__13927 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__13926 = (0);
while(true){
if((i__13926 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__13926);
cljs.core.chunk_append.call(null,b__13927,(function (){var board_index = cljs.core.quot.call(null,i,side_len);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((board_index * (150))),"px"].join('')], null)], null),tic_tac_toe.web_ui.display_row.call(null,game,i,symbol)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
})());

var G__13928 = (i__13926 + (1));
i__13926 = G__13928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13927),tic_tac_toe$web_ui$iter__13924.call(null,cljs.core.chunk_rest.call(null,s__13925__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13927),null);
}
} else {
var i = cljs.core.first.call(null,s__13925__$2);
return cljs.core.cons.call(null,(function (){var board_index = cljs.core.quot.call(null,i,side_len);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((board_index * (150))),"px"].join('')], null)], null),tic_tac_toe.web_ui.display_row.call(null,game,i,symbol)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
})(),tic_tac_toe$web_ui$iter__13924.call(null,cljs.core.rest.call(null,s__13925__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,(side_len * side_len)));
}));
cljs.core._add_method.call(null,tic_tac_toe.ui_interface.round_output,new cljs.core.Keyword(null,"web-ui","web-ui",802472408),(function (game){
cljs.core.reset_BANG_.call(null,tic_tac_toe.web_ui.game_state,game);

return cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),tic_tac_toe.web_ui.display_board.call(null,cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state),null));
}));
cljs.core._add_method.call(null,tic_tac_toe.ui_interface.make_move,new cljs.core.Keyword(null,"web-ui","web-ui",802472408),(function (options){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),tic_tac_toe.web_ui.display_board.call(null,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(options)));

return new cljs.core.Keyword(null,"player-turn","player-turn",1660424586);
}));
tic_tac_toe.web_ui.reset_game = (function tic_tac_toe$web_ui$reset_game(){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),tic_tac_toe.web_ui.page_title);

return tic_tac_toe.game_runner.game_round.call(null,tic_tac_toe.game_runner.reset_game.call(null,cljs.core.deref.call(null,tic_tac_toe.web_ui.game_state)));
});
cljs.core._add_method.call(null,tic_tac_toe.ui_interface.end_game,new cljs.core.Keyword(null,"web-ui","web-ui",802472408),(function (end_condition){
cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"end-cond","end-cond",-1031076501).cljs$core$IFn$_invoke$arity$1(end_condition));

return cljs.core.swap_BANG_.call(null,tic_tac_toe.web_ui.page,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.conj.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_ui.page)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"50px"], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.web_ui.reset_game.call(null);
})], null),"Retry"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"reset"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.web_ui.call_game_initialize.call(null);
})], null),"Back to Menu"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"back"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"retry-div"], null))));
}));

//# sourceMappingURL=web_ui.js.map
