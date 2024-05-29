// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.tic_tac_toe_board_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.tic_tac_toe_board');
goog.require('speclj.core');
tic_tac_toe.tic_tac_toe_board_spec.empty_board = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
tic_tac_toe.tic_tac_toe_board_spec.mixed_board = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(2),(0),(2),(1),(2),(1),(0)], null);
var description__7524__auto___13999 = speclj.components.new_description.call(null,"Tic Tac Toe Board",false,"tic-tac-toe.tic-tac-toe-board-spec");
var _STAR_parent_description_STAR__orig_val__13969_14000 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13970_14001 = description__7524__auto___13999;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13970_14001);

try{var seq__13971_14002 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"gets the board side length",((function (_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999){
return (function (){
var expected__7651__auto___14006 = (3);
var actual__7652__auto___14007 = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(9),(0)),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__7651__auto___14006,actual__7652__auto___14007)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___14006 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___14006)),speclj.platform.endl,"     got: ",(((actual__7652__auto___14007 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___14007))," (using =)"].join('')));
}

var expected__7651__auto___14008 = (4);
var actual__7652__auto___14009 = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(16),(0)),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__7651__auto___14008,actual__7652__auto___14009)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___14008 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___14008)),speclj.platform.endl,"     got: ",(((actual__7652__auto___14009 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___14009))," (using =)"].join('')));
}

var expected__7651__auto__ = (3);
var actual__7652__auto__ = tic_tac_toe.tic_tac_toe_board.get_side_len.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(27),(0)),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999))
,false),(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"makes a new board that is",false,"tic-tac-toe.tic-tac-toe-board-spec");
var _STAR_parent_description_STAR__orig_val__13987_14010 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13988_14011 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13988_14011);

try{var seq__13989_14012 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"2-D",((function (_STAR_parent_description_STAR__orig_val__13987_14010,_STAR_parent_description_STAR__temp_val__13988_14011,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999){
return (function (){
var expected__7651__auto___14016 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__7652__auto___14017 = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__7651__auto___14016,actual__7652__auto___14017)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___14016 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___14016)),speclj.platform.endl,"     got: ",(((actual__7652__auto___14017 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___14017))," (using =)"].join('')));
}

var expected__7651__auto__ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__7652__auto__ = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13987_14010,_STAR_parent_description_STAR__temp_val__13988_14011,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999))
,false),speclj.components.new_characteristic.call(null,"3-D",((function (_STAR_parent_description_STAR__orig_val__13987_14010,_STAR_parent_description_STAR__temp_val__13988_14011,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999){
return (function (){
var expected__7651__auto___14018 = new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__7652__auto___14019 = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null));
if(cljs.core._EQ_.call(null,expected__7651__auto___14018,actual__7652__auto___14019)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___14018 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___14018)),speclj.platform.endl,"     got: ",(((actual__7652__auto___14019 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___14019))," (using =)"].join('')));
}

var expected__7651__auto__ = cljs.core.PersistentVector.fromArray([(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], true);
var actual__7652__auto__ = tic_tac_toe.tic_tac_toe_board.make_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13987_14010,_STAR_parent_description_STAR__temp_val__13988_14011,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999))
,false)],null)));
var chunk__13990_14013 = null;
var count__13991_14014 = (0);
var i__13992_14015 = (0);
while(true){
if((i__13992_14015 < count__13991_14014)){
var component__7525__auto___14020 = cljs.core._nth.call(null,chunk__13990_14013,i__13992_14015);
speclj.components.install.call(null,component__7525__auto___14020,description__7524__auto____$1);


var G__14021 = seq__13989_14012;
var G__14022 = chunk__13990_14013;
var G__14023 = count__13991_14014;
var G__14024 = (i__13992_14015 + (1));
seq__13989_14012 = G__14021;
chunk__13990_14013 = G__14022;
count__13991_14014 = G__14023;
i__13992_14015 = G__14024;
continue;
} else {
var temp__5753__auto___14025 = cljs.core.seq.call(null,seq__13989_14012);
if(temp__5753__auto___14025){
var seq__13989_14026__$1 = temp__5753__auto___14025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13989_14026__$1)){
var c__5568__auto___14027 = cljs.core.chunk_first.call(null,seq__13989_14026__$1);
var G__14028 = cljs.core.chunk_rest.call(null,seq__13989_14026__$1);
var G__14029 = c__5568__auto___14027;
var G__14030 = cljs.core.count.call(null,c__5568__auto___14027);
var G__14031 = (0);
seq__13989_14012 = G__14028;
chunk__13990_14013 = G__14029;
count__13991_14014 = G__14030;
i__13992_14015 = G__14031;
continue;
} else {
var component__7525__auto___14032 = cljs.core.first.call(null,seq__13989_14026__$1);
speclj.components.install.call(null,component__7525__auto___14032,description__7524__auto____$1);


var G__14033 = cljs.core.next.call(null,seq__13989_14026__$1);
var G__14034 = null;
var G__14035 = (0);
var G__14036 = (0);
seq__13989_14012 = G__14033;
chunk__13990_14013 = G__14034;
count__13991_14014 = G__14035;
i__13992_14015 = G__14036;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13987_14010);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),(function (){var description__7524__auto____$1 = speclj.components.new_description.call(null,"places a value into the tttb",false,"tic-tac-toe.tic-tac-toe-board-spec");
var _STAR_parent_description_STAR__orig_val__13993_14037 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13994_14038 = description__7524__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13994_14038);

try{var seq__13995_14039 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"checks if the position is empty to place",((function (_STAR_parent_description_STAR__orig_val__13993_14037,_STAR_parent_description_STAR__temp_val__13994_14038,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999){
return (function (){
var value__7639__auto___14043 = tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(0));
if((!(value__7639__auto___14043))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__7639__auto___14043 == null))?"nil":cljs.core.pr_str.call(null,value__7639__auto___14043)),""].join('')));
} else {
}

var value__7645__auto___14044 = tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),(0));
if(value__7645__auto___14044){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7645__auto___14044 == null))?"nil":cljs.core.pr_str.call(null,value__7645__auto___14044))].join('')));
} else {
}

var value__7645__auto__ = tic_tac_toe.tic_tac_toe_board.spot_available_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1)], null),(4));
if(value__7645__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__7645__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__7645__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__13993_14037,_STAR_parent_description_STAR__temp_val__13994_14038,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999))
,false),speclj.components.new_characteristic.call(null,"an X into top left corner",((function (_STAR_parent_description_STAR__orig_val__13993_14037,_STAR_parent_description_STAR__temp_val__13994_14038,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999){
return (function (){
var expected__7651__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2),(0),(0),(0),(0),(0),(0)], null);
var actual__7652__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(2),(2));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13993_14037,_STAR_parent_description_STAR__temp_val__13994_14038,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999))
,false),speclj.components.new_characteristic.call(null,"an X and O in opposite corners",((function (_STAR_parent_description_STAR__orig_val__13993_14037,_STAR_parent_description_STAR__temp_val__13994_14038,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999){
return (function (){
var expected__7651__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(2)], null);
var actual__7652__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(1),(0)),(2),(8));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13993_14037,_STAR_parent_description_STAR__temp_val__13994_14038,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999))
,false),speclj.components.new_characteristic.call(null,"an X on a spot where an O exists",((function (_STAR_parent_description_STAR__orig_val__13993_14037,_STAR_parent_description_STAR__temp_val__13994_14038,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999){
return (function (){
var expected__7651__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__7652__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(2),(0)),(1),(0));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13993_14037,_STAR_parent_description_STAR__temp_val__13994_14038,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999))
,false),speclj.components.new_characteristic.call(null,"a series of inputs",((function (_STAR_parent_description_STAR__orig_val__13993_14037,_STAR_parent_description_STAR__temp_val__13994_14038,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999){
return (function (){
var expected__7651__auto__ = tic_tac_toe.tic_tac_toe_board_spec.mixed_board;
var actual__7652__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.empty_board,(1),(0)),(2),(2)),(2),(4)),(1),(5)),(2),(6)),(1),(7));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13993_14037,_STAR_parent_description_STAR__temp_val__13994_14038,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999))
,false),speclj.components.new_characteristic.call(null,"returns board input if value is attempting to overwrite X or O",((function (_STAR_parent_description_STAR__orig_val__13993_14037,_STAR_parent_description_STAR__temp_val__13994_14038,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999){
return (function (){
var expected__7651__auto__ = tic_tac_toe.tic_tac_toe_board_spec.mixed_board;
var actual__7652__auto__ = tic_tac_toe.tic_tac_toe_board.place_value_into_tttb.call(null,tic_tac_toe.tic_tac_toe_board_spec.mixed_board,(2),(0));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13993_14037,_STAR_parent_description_STAR__temp_val__13994_14038,description__7524__auto____$1,_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999))
,false)],null)));
var chunk__13996_14040 = null;
var count__13997_14041 = (0);
var i__13998_14042 = (0);
while(true){
if((i__13998_14042 < count__13997_14041)){
var component__7525__auto___14045 = cljs.core._nth.call(null,chunk__13996_14040,i__13998_14042);
speclj.components.install.call(null,component__7525__auto___14045,description__7524__auto____$1);


var G__14046 = seq__13995_14039;
var G__14047 = chunk__13996_14040;
var G__14048 = count__13997_14041;
var G__14049 = (i__13998_14042 + (1));
seq__13995_14039 = G__14046;
chunk__13996_14040 = G__14047;
count__13997_14041 = G__14048;
i__13998_14042 = G__14049;
continue;
} else {
var temp__5753__auto___14050 = cljs.core.seq.call(null,seq__13995_14039);
if(temp__5753__auto___14050){
var seq__13995_14051__$1 = temp__5753__auto___14050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13995_14051__$1)){
var c__5568__auto___14052 = cljs.core.chunk_first.call(null,seq__13995_14051__$1);
var G__14053 = cljs.core.chunk_rest.call(null,seq__13995_14051__$1);
var G__14054 = c__5568__auto___14052;
var G__14055 = cljs.core.count.call(null,c__5568__auto___14052);
var G__14056 = (0);
seq__13995_14039 = G__14053;
chunk__13996_14040 = G__14054;
count__13997_14041 = G__14055;
i__13998_14042 = G__14056;
continue;
} else {
var component__7525__auto___14057 = cljs.core.first.call(null,seq__13995_14051__$1);
speclj.components.install.call(null,component__7525__auto___14057,description__7524__auto____$1);


var G__14058 = cljs.core.next.call(null,seq__13995_14051__$1);
var G__14059 = null;
var G__14060 = (0);
var G__14061 = (0);
seq__13995_14039 = G__14058;
chunk__13996_14040 = G__14059;
count__13997_14041 = G__14060;
i__13998_14042 = G__14061;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13993_14037);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto____$1);
}

return description__7524__auto____$1;
})(),speclj.components.new_characteristic.call(null,"gives the absolute depth of the board",((function (_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999){
return (function (){
var expected__7651__auto___14062 = (0);
var actual__7652__auto___14063 = tic_tac_toe.tic_tac_toe_board.get_absolute_depth.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__7651__auto___14062,actual__7652__auto___14063)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___14062 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___14062)),speclj.platform.endl,"     got: ",(((actual__7652__auto___14063 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___14063))," (using =)"].join('')));
}

var expected__7651__auto___14064 = (1);
var actual__7652__auto___14065 = tic_tac_toe.tic_tac_toe_board.get_absolute_depth.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1)], null));
if(cljs.core._EQ_.call(null,expected__7651__auto___14064,actual__7652__auto___14065)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto___14064 == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto___14064)),speclj.platform.endl,"     got: ",(((actual__7652__auto___14065 == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto___14065))," (using =)"].join('')));
}

var expected__7651__auto__ = (9);
var actual__7652__auto__ = tic_tac_toe.tic_tac_toe_board.get_absolute_depth.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1)], null));
if(cljs.core._EQ_.call(null,expected__7651__auto__,actual__7652__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7651__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7651__auto__)),speclj.platform.endl,"     got: ",(((actual__7652__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7652__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13969_14000,_STAR_parent_description_STAR__temp_val__13970_14001,description__7524__auto___13999))
,false)],null)));
var chunk__13972_14003 = null;
var count__13973_14004 = (0);
var i__13974_14005 = (0);
while(true){
if((i__13974_14005 < count__13973_14004)){
var component__7525__auto___14066 = cljs.core._nth.call(null,chunk__13972_14003,i__13974_14005);
speclj.components.install.call(null,component__7525__auto___14066,description__7524__auto___13999);


var G__14067 = seq__13971_14002;
var G__14068 = chunk__13972_14003;
var G__14069 = count__13973_14004;
var G__14070 = (i__13974_14005 + (1));
seq__13971_14002 = G__14067;
chunk__13972_14003 = G__14068;
count__13973_14004 = G__14069;
i__13974_14005 = G__14070;
continue;
} else {
var temp__5753__auto___14071 = cljs.core.seq.call(null,seq__13971_14002);
if(temp__5753__auto___14071){
var seq__13971_14072__$1 = temp__5753__auto___14071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13971_14072__$1)){
var c__5568__auto___14073 = cljs.core.chunk_first.call(null,seq__13971_14072__$1);
var G__14074 = cljs.core.chunk_rest.call(null,seq__13971_14072__$1);
var G__14075 = c__5568__auto___14073;
var G__14076 = cljs.core.count.call(null,c__5568__auto___14073);
var G__14077 = (0);
seq__13971_14002 = G__14074;
chunk__13972_14003 = G__14075;
count__13973_14004 = G__14076;
i__13974_14005 = G__14077;
continue;
} else {
var component__7525__auto___14078 = cljs.core.first.call(null,seq__13971_14072__$1);
speclj.components.install.call(null,component__7525__auto___14078,description__7524__auto___13999);


var G__14079 = cljs.core.next.call(null,seq__13971_14072__$1);
var G__14080 = null;
var G__14081 = (0);
var G__14082 = (0);
seq__13971_14002 = G__14079;
chunk__13972_14003 = G__14080;
count__13973_14004 = G__14081;
i__13974_14005 = G__14082;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13969_14000);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto___13999);
}


//# sourceMappingURL=tic_tac_toe_board_spec.js.map
