// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.win_checker');
goog.require('cljs.core');
tic_tac_toe.win_checker.get_rows = (function tic_tac_toe$win_checker$get_rows(board){
return cljs.core.partition.call(null,Math.round(Math.sqrt(cljs.core.count.call(null,board))),board);
});
tic_tac_toe.win_checker.get_cols = (function tic_tac_toe$win_checker$get_cols(board){
return cljs.core.map.call(null,(function (inner_map){
return cljs.core.map.call(null,(function (p1__6434_SHARP_){
return cljs.core.second.call(null,p1__6434_SHARP_);
}),inner_map);
}),cljs.core.map.call(null,cljs.core.second,cljs.core.group_by.call(null,(function (p1__6433_SHARP_){
return cljs.core.mod.call(null,cljs.core.first.call(null,p1__6433_SHARP_),Math.round(Math.sqrt(cljs.core.count.call(null,board))));
}),cljs.core.map_indexed.call(null,cljs.core.vector,board))));
});
tic_tac_toe.win_checker.get_diagonals = (function tic_tac_toe$win_checker$get_diagonals(board){
var rows = tic_tac_toe.win_checker.get_rows.call(null,board);
return (new cljs.core.List(null,(function (){var iter__5523__auto__ = (function tic_tac_toe$win_checker$get_diagonals_$_iter__6435(s__6436){
return (new cljs.core.LazySeq(null,(function (){
var s__6436__$1 = s__6436;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__6436__$1);
if(temp__5753__auto__){
var s__6436__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6436__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__6436__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__6438 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__6437 = (0);
while(true){
if((i__6437 < size__5522__auto__)){
var vec__6439 = cljs.core._nth.call(null,c__5521__auto__,i__6437);
var i = cljs.core.nth.call(null,vec__6439,(0),null);
var v = cljs.core.nth.call(null,vec__6439,(1),null);
cljs.core.chunk_append.call(null,b__6438,cljs.core.nth.call(null,v,i));

var G__6455 = (i__6437 + (1));
i__6437 = G__6455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6438),tic_tac_toe$win_checker$get_diagonals_$_iter__6435.call(null,cljs.core.chunk_rest.call(null,s__6436__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6438),null);
}
} else {
var vec__6442 = cljs.core.first.call(null,s__6436__$2);
var i = cljs.core.nth.call(null,vec__6442,(0),null);
var v = cljs.core.nth.call(null,vec__6442,(1),null);
return cljs.core.cons.call(null,cljs.core.nth.call(null,v,i),tic_tac_toe$win_checker$get_diagonals_$_iter__6435.call(null,cljs.core.rest.call(null,s__6436__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,rows));
})(),(new cljs.core.List(null,(function (){var iter__5523__auto__ = (function tic_tac_toe$win_checker$get_diagonals_$_iter__6445(s__6446){
return (new cljs.core.LazySeq(null,(function (){
var s__6446__$1 = s__6446;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__6446__$1);
if(temp__5753__auto__){
var s__6446__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6446__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__6446__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__6448 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__6447 = (0);
while(true){
if((i__6447 < size__5522__auto__)){
var vec__6449 = cljs.core._nth.call(null,c__5521__auto__,i__6447);
var i = cljs.core.nth.call(null,vec__6449,(0),null);
var v = cljs.core.nth.call(null,vec__6449,(1),null);
cljs.core.chunk_append.call(null,b__6448,cljs.core.nth.call(null,v,((cljs.core.count.call(null,v) - (1)) - i)));

var G__6456 = (i__6447 + (1));
i__6447 = G__6456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6448),tic_tac_toe$win_checker$get_diagonals_$_iter__6445.call(null,cljs.core.chunk_rest.call(null,s__6446__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6448),null);
}
} else {
var vec__6452 = cljs.core.first.call(null,s__6446__$2);
var i = cljs.core.nth.call(null,vec__6452,(0),null);
var v = cljs.core.nth.call(null,vec__6452,(1),null);
return cljs.core.cons.call(null,cljs.core.nth.call(null,v,((cljs.core.count.call(null,v) - (1)) - i)),tic_tac_toe$win_checker$get_diagonals_$_iter__6445.call(null,cljs.core.rest.call(null,s__6446__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,rows));
})(),null,(1),null)),(2),null));
});
tic_tac_toe.win_checker.get_horizontal_winner = (function tic_tac_toe$win_checker$get_horizontal_winner(board){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__6457_SHARP_){
var and__5043__auto__ = (!(cljs.core._EQ_.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,p1__6457_SHARP_),(0))));
if(and__5043__auto__){
return cljs.core.apply.call(null,cljs.core._EQ_,p1__6457_SHARP_);
} else {
return and__5043__auto__;
}
}),tic_tac_toe.win_checker.get_rows.call(null,board))));
});
tic_tac_toe.win_checker.get_vertical_winner = (function tic_tac_toe$win_checker$get_vertical_winner(board){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__6458_SHARP_){
var and__5043__auto__ = (!(cljs.core._EQ_.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,p1__6458_SHARP_),(0))));
if(and__5043__auto__){
return cljs.core.apply.call(null,cljs.core._EQ_,p1__6458_SHARP_);
} else {
return and__5043__auto__;
}
}),tic_tac_toe.win_checker.get_cols.call(null,board))));
});
tic_tac_toe.win_checker.get_diagonal_winner = (function tic_tac_toe$win_checker$get_diagonal_winner(board){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__6459_SHARP_){
var and__5043__auto__ = (!(cljs.core._EQ_.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,p1__6459_SHARP_),(0))));
if(and__5043__auto__){
return cljs.core.apply.call(null,cljs.core._EQ_,p1__6459_SHARP_);
} else {
return and__5043__auto__;
}
}),tic_tac_toe.win_checker.get_diagonals.call(null,board))));
});
tic_tac_toe.win_checker.get_down_vertical_boards = (function tic_tac_toe$win_checker$get_down_vertical_boards(three_d_board){
var side_size = Math.round(Math.pow(cljs.core.count.call(null,three_d_board),((1) / (3))));
var iter__5523__auto__ = (function tic_tac_toe$win_checker$get_down_vertical_boards_$_iter__6462(s__6463){
return (new cljs.core.LazySeq(null,(function (){
var s__6463__$1 = s__6463;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__6463__$1);
if(temp__5753__auto__){
var s__6463__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6463__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__6463__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__6465 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__6464 = (0);
while(true){
if((i__6464 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__6464);
cljs.core.chunk_append.call(null,b__6465,cljs.core.map.call(null,((function (i__6464,i,c__5521__auto__,size__5522__auto__,b__6465,s__6463__$2,temp__5753__auto__,side_size){
return (function (p1__6460_SHARP_){
return cljs.core.nth.call(null,three_d_board,p1__6460_SHARP_);
});})(i__6464,i,c__5521__auto__,size__5522__auto__,b__6465,s__6463__$2,temp__5753__auto__,side_size))
,cljs.core.filter.call(null,((function (i__6464,i,c__5521__auto__,size__5522__auto__,b__6465,s__6463__$2,temp__5753__auto__,side_size){
return (function (p1__6461_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.mod.call(null,p1__6461_SHARP_,side_size),i);
});})(i__6464,i,c__5521__auto__,size__5522__auto__,b__6465,s__6463__$2,temp__5753__auto__,side_size))
,cljs.core.range.call(null,cljs.core.count.call(null,three_d_board)))));

var G__6466 = (i__6464 + (1));
i__6464 = G__6466;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6465),tic_tac_toe$win_checker$get_down_vertical_boards_$_iter__6462.call(null,cljs.core.chunk_rest.call(null,s__6463__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6465),null);
}
} else {
var i = cljs.core.first.call(null,s__6463__$2);
return cljs.core.cons.call(null,cljs.core.map.call(null,((function (i,s__6463__$2,temp__5753__auto__,side_size){
return (function (p1__6460_SHARP_){
return cljs.core.nth.call(null,three_d_board,p1__6460_SHARP_);
});})(i,s__6463__$2,temp__5753__auto__,side_size))
,cljs.core.filter.call(null,((function (i,s__6463__$2,temp__5753__auto__,side_size){
return (function (p1__6461_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.mod.call(null,p1__6461_SHARP_,side_size),i);
});})(i,s__6463__$2,temp__5753__auto__,side_size))
,cljs.core.range.call(null,cljs.core.count.call(null,three_d_board)))),tic_tac_toe$win_checker$get_down_vertical_boards_$_iter__6462.call(null,cljs.core.rest.call(null,s__6463__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,side_size));
});
tic_tac_toe.win_checker.get_side_vertical_boards = (function tic_tac_toe$win_checker$get_side_vertical_boards(three_d_board){
var side_size = Math.round(Math.pow(cljs.core.count.call(null,three_d_board),((1) / (3))));
var iter__5523__auto__ = (function tic_tac_toe$win_checker$get_side_vertical_boards_$_iter__6469(s__6470){
return (new cljs.core.LazySeq(null,(function (){
var s__6470__$1 = s__6470;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__6470__$1);
if(temp__5753__auto__){
var s__6470__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6470__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__6470__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__6472 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__6471 = (0);
while(true){
if((i__6471 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__6471);
cljs.core.chunk_append.call(null,b__6472,cljs.core.map.call(null,((function (i__6471,i,c__5521__auto__,size__5522__auto__,b__6472,s__6470__$2,temp__5753__auto__,side_size){
return (function (p1__6467_SHARP_){
return cljs.core.nth.call(null,three_d_board,p1__6467_SHARP_);
});})(i__6471,i,c__5521__auto__,size__5522__auto__,b__6472,s__6470__$2,temp__5753__auto__,side_size))
,cljs.core.filter.call(null,((function (i__6471,i,c__5521__auto__,size__5522__auto__,b__6472,s__6470__$2,temp__5753__auto__,side_size){
return (function (p1__6468_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.mod.call(null,cljs.core.quot.call(null,p1__6468_SHARP_,side_size),side_size),i);
});})(i__6471,i,c__5521__auto__,size__5522__auto__,b__6472,s__6470__$2,temp__5753__auto__,side_size))
,cljs.core.range.call(null,cljs.core.count.call(null,three_d_board)))));

var G__6473 = (i__6471 + (1));
i__6471 = G__6473;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6472),tic_tac_toe$win_checker$get_side_vertical_boards_$_iter__6469.call(null,cljs.core.chunk_rest.call(null,s__6470__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6472),null);
}
} else {
var i = cljs.core.first.call(null,s__6470__$2);
return cljs.core.cons.call(null,cljs.core.map.call(null,((function (i,s__6470__$2,temp__5753__auto__,side_size){
return (function (p1__6467_SHARP_){
return cljs.core.nth.call(null,three_d_board,p1__6467_SHARP_);
});})(i,s__6470__$2,temp__5753__auto__,side_size))
,cljs.core.filter.call(null,((function (i,s__6470__$2,temp__5753__auto__,side_size){
return (function (p1__6468_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.mod.call(null,cljs.core.quot.call(null,p1__6468_SHARP_,side_size),side_size),i);
});})(i,s__6470__$2,temp__5753__auto__,side_size))
,cljs.core.range.call(null,cljs.core.count.call(null,three_d_board)))),tic_tac_toe$win_checker$get_side_vertical_boards_$_iter__6469.call(null,cljs.core.rest.call(null,s__6470__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,side_size));
});
tic_tac_toe.win_checker.get_diagonal_facing_horizontal_boards = (function tic_tac_toe$win_checker$get_diagonal_facing_horizontal_boards(three_d_board){
var side_size = Math.round(Math.pow(cljs.core.count.call(null,three_d_board),((1) / (3))));
var two_d_size = Math.round(Math.pow(cljs.core.count.call(null,three_d_board),((2) / (3))));
return (new cljs.core.List(null,(function (){var iter__5523__auto__ = (function tic_tac_toe$win_checker$get_diagonal_facing_horizontal_boards_$_iter__6474(s__6475){
return (new cljs.core.LazySeq(null,(function (){
var s__6475__$1 = s__6475;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__6475__$1);
if(temp__5753__auto__){
var s__6475__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6475__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__6475__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__6477 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__6476 = (0);
while(true){
if((i__6476 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__6476);
cljs.core.chunk_append.call(null,b__6477,cljs.core.nth.call(null,three_d_board,(i + (cljs.core.quot.call(null,i,side_size) * two_d_size))));

var G__6482 = (i__6476 + (1));
i__6476 = G__6482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6477),tic_tac_toe$win_checker$get_diagonal_facing_horizontal_boards_$_iter__6474.call(null,cljs.core.chunk_rest.call(null,s__6475__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6477),null);
}
} else {
var i = cljs.core.first.call(null,s__6475__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,three_d_board,(i + (cljs.core.quot.call(null,i,side_size) * two_d_size))),tic_tac_toe$win_checker$get_diagonal_facing_horizontal_boards_$_iter__6474.call(null,cljs.core.rest.call(null,s__6475__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,two_d_size));
})(),(new cljs.core.List(null,(function (){var iter__5523__auto__ = (function tic_tac_toe$win_checker$get_diagonal_facing_horizontal_boards_$_iter__6478(s__6479){
return (new cljs.core.LazySeq(null,(function (){
var s__6479__$1 = s__6479;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__6479__$1);
if(temp__5753__auto__){
var s__6479__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6479__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__6479__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__6481 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__6480 = (0);
while(true){
if((i__6480 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__6480);
cljs.core.chunk_append.call(null,b__6481,cljs.core.nth.call(null,three_d_board,((((two_d_size - side_size) + cljs.core.mod.call(null,i,side_size)) + (two_d_size * cljs.core.quot.call(null,i,side_size))) - (side_size * cljs.core.quot.call(null,i,side_size)))));

var G__6483 = (i__6480 + (1));
i__6480 = G__6483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6481),tic_tac_toe$win_checker$get_diagonal_facing_horizontal_boards_$_iter__6478.call(null,cljs.core.chunk_rest.call(null,s__6479__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6481),null);
}
} else {
var i = cljs.core.first.call(null,s__6479__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,three_d_board,((((two_d_size - side_size) + cljs.core.mod.call(null,i,side_size)) + (two_d_size * cljs.core.quot.call(null,i,side_size))) - (side_size * cljs.core.quot.call(null,i,side_size)))),tic_tac_toe$win_checker$get_diagonal_facing_horizontal_boards_$_iter__6478.call(null,cljs.core.rest.call(null,s__6479__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,two_d_size));
})(),null,(1),null)),(2),null));
});
tic_tac_toe.win_checker.get_diagonal_facing_vertical_boards = (function tic_tac_toe$win_checker$get_diagonal_facing_vertical_boards(three_d_board){
var side_size = Math.round(Math.pow(cljs.core.count.call(null,three_d_board),((1) / (3))));
var two_d_size = Math.round(Math.pow(cljs.core.count.call(null,three_d_board),((2) / (3))));
return (new cljs.core.List(null,(function (){var iter__5523__auto__ = (function tic_tac_toe$win_checker$get_diagonal_facing_vertical_boards_$_iter__6484(s__6485){
return (new cljs.core.LazySeq(null,(function (){
var s__6485__$1 = s__6485;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__6485__$1);
if(temp__5753__auto__){
var s__6485__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6485__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__6485__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__6487 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__6486 = (0);
while(true){
if((i__6486 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__6486);
cljs.core.chunk_append.call(null,b__6487,cljs.core.nth.call(null,three_d_board,((cljs.core.mod.call(null,i,side_size) + (side_size * cljs.core.mod.call(null,i,side_size))) + (two_d_size * cljs.core.quot.call(null,i,side_size)))));

var G__6492 = (i__6486 + (1));
i__6486 = G__6492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6487),tic_tac_toe$win_checker$get_diagonal_facing_vertical_boards_$_iter__6484.call(null,cljs.core.chunk_rest.call(null,s__6485__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6487),null);
}
} else {
var i = cljs.core.first.call(null,s__6485__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,three_d_board,((cljs.core.mod.call(null,i,side_size) + (side_size * cljs.core.mod.call(null,i,side_size))) + (two_d_size * cljs.core.quot.call(null,i,side_size)))),tic_tac_toe$win_checker$get_diagonal_facing_vertical_boards_$_iter__6484.call(null,cljs.core.rest.call(null,s__6485__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,two_d_size));
})(),(new cljs.core.List(null,(function (){var iter__5523__auto__ = (function tic_tac_toe$win_checker$get_diagonal_facing_vertical_boards_$_iter__6488(s__6489){
return (new cljs.core.LazySeq(null,(function (){
var s__6489__$1 = s__6489;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__6489__$1);
if(temp__5753__auto__){
var s__6489__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6489__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__6489__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__6491 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__6490 = (0);
while(true){
if((i__6490 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__6490);
cljs.core.chunk_append.call(null,b__6491,cljs.core.nth.call(null,three_d_board,((((side_size - (1)) - cljs.core.mod.call(null,i,side_size)) + (side_size * cljs.core.mod.call(null,i,side_size))) + (two_d_size * cljs.core.quot.call(null,i,side_size)))));

var G__6493 = (i__6490 + (1));
i__6490 = G__6493;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6491),tic_tac_toe$win_checker$get_diagonal_facing_vertical_boards_$_iter__6488.call(null,cljs.core.chunk_rest.call(null,s__6489__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6491),null);
}
} else {
var i = cljs.core.first.call(null,s__6489__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,three_d_board,((((side_size - (1)) - cljs.core.mod.call(null,i,side_size)) + (side_size * cljs.core.mod.call(null,i,side_size))) + (two_d_size * cljs.core.quot.call(null,i,side_size)))),tic_tac_toe$win_checker$get_diagonal_facing_vertical_boards_$_iter__6488.call(null,cljs.core.rest.call(null,s__6489__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,two_d_size));
})(),null,(1),null)),(2),null));
});
tic_tac_toe.win_checker.get_horizontal_boards = (function tic_tac_toe$win_checker$get_horizontal_boards(three_d_board){
var two_d_size = Math.round(Math.pow(cljs.core.count.call(null,three_d_board),((2) / (3))));
return cljs.core.partition.call(null,two_d_size,three_d_board);
});
tic_tac_toe.win_checker.get_2d_boards_within_3d_board = (function tic_tac_toe$win_checker$get_2d_boards_within_3d_board(three_d_board){
return cljs.core.concat.call(null,tic_tac_toe.win_checker.get_horizontal_boards.call(null,three_d_board),tic_tac_toe.win_checker.get_diagonal_facing_horizontal_boards.call(null,three_d_board),tic_tac_toe.win_checker.get_diagonal_facing_vertical_boards.call(null,three_d_board),tic_tac_toe.win_checker.get_side_vertical_boards.call(null,three_d_board),tic_tac_toe.win_checker.get_down_vertical_boards.call(null,three_d_board));
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.win_checker !== 'undefined') && (typeof tic_tac_toe.win_checker.get_winner !== 'undefined')){
} else {
tic_tac_toe.win_checker.get_winner = (function (){var method_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.win-checker","get-winner"),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.win_checker.get_winner,false,(function (board){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__6494_SHARP_){
return (!((p1__6494_SHARP_ == null)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.win_checker.get_vertical_winner.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(board)),tic_tac_toe.win_checker.get_horizontal_winner.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(board)),tic_tac_toe.win_checker.get_diagonal_winner.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(board))], null)));
}));
cljs.core._add_method.call(null,tic_tac_toe.win_checker.get_winner,true,(function (board){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__6495_SHARP_){
return (!((p1__6495_SHARP_ == null)));
}),(function (){var iter__5523__auto__ = (function tic_tac_toe$win_checker$iter__6496(s__6497){
return (new cljs.core.LazySeq(null,(function (){
var s__6497__$1 = s__6497;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__6497__$1);
if(temp__5753__auto__){
var s__6497__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6497__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__6497__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__6499 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__6498 = (0);
while(true){
if((i__6498 < size__5522__auto__)){
var two_d_board = cljs.core._nth.call(null,c__5521__auto__,i__6498);
cljs.core.chunk_append.call(null,b__6499,tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),two_d_board,new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null)));

var G__6500 = (i__6498 + (1));
i__6498 = G__6500;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6499),tic_tac_toe$win_checker$iter__6496.call(null,cljs.core.chunk_rest.call(null,s__6497__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6499),null);
}
} else {
var two_d_board = cljs.core.first.call(null,s__6497__$2);
return cljs.core.cons.call(null,tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),two_d_board,new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null)),tic_tac_toe$win_checker$iter__6496.call(null,cljs.core.rest.call(null,s__6497__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,tic_tac_toe.win_checker.get_2d_boards_within_3d_board.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(board)));
})()));
}));
tic_tac_toe.win_checker.get_winner_or_tie = (function tic_tac_toe$win_checker$get_winner_or_tie(game){
var winner = tic_tac_toe.win_checker.get_winner.call(null,game);
if((!((winner == null)))){
return winner;
} else {
if(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.zero_QMARK_,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game)))){
return "tie";
} else {
return null;

}
}
});

//# sourceMappingURL=win_checker.js.map
