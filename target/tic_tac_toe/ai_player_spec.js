// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.ai_player_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.ai_player');
goog.require('speclj.core');
var description__9225__auto___9931 = speclj.components.new_description.call(null,"AI Player",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9853_9932 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9854_9933 = description__9225__auto___9931;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9854_9933);

try{var seq__9855_9934 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__9225__auto____$1 = speclj.components.new_description.call(null,"Makes all possible moves on a given board",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9895_9938 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9896_9939 = description__9225__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9896_9939);

try{var seq__9897_9940 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns empty vec if no plays left",((function (_STAR_parent_description_STAR__orig_val__9895_9938,_STAR_parent_description_STAR__temp_val__9896_9939,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931){
return (function (){
var expected__9358__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var actual__9359__auto__ = tic_tac_toe.ai_player.make_hypothetical_moves.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1)], null),(1));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9895_9938,_STAR_parent_description_STAR__temp_val__9896_9939,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931))
,false),speclj.components.new_characteristic.call(null,"1 board with position played if 1 play left",((function (_STAR_parent_description_STAR__orig_val__9895_9938,_STAR_parent_description_STAR__temp_val__9896_9939,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931){
return (function (){
var expected__9358__auto__ = new cljs.core.PersistentArrayMap(null, 1, [(6),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(2),(1),(1)], null)], null);
var actual__9359__auto__ = tic_tac_toe.ai_player.make_hypothetical_moves.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(0),(1),(1)], null),(2));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9895_9938,_STAR_parent_description_STAR__temp_val__9896_9939,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931))
,false),speclj.components.new_characteristic.call(null,"a series of possible plays if more than 1 play left",((function (_STAR_parent_description_STAR__orig_val__9895_9938,_STAR_parent_description_STAR__temp_val__9896_9939,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931){
return (function (){
var expected__9358__auto__ = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(5),(8)],[new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1)], null)]);
var actual__9359__auto__ = tic_tac_toe.ai_player.make_hypothetical_moves.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),(1));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9895_9938,_STAR_parent_description_STAR__temp_val__9896_9939,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931))
,false)],null)));
var chunk__9898_9941 = null;
var count__9899_9942 = (0);
var i__9900_9943 = (0);
while(true){
if((i__9900_9943 < count__9899_9942)){
var component__9226__auto___9944 = cljs.core._nth.call(null,chunk__9898_9941,i__9900_9943);
speclj.components.install.call(null,component__9226__auto___9944,description__9225__auto____$1);


var G__9945 = seq__9897_9940;
var G__9946 = chunk__9898_9941;
var G__9947 = count__9899_9942;
var G__9948 = (i__9900_9943 + (1));
seq__9897_9940 = G__9945;
chunk__9898_9941 = G__9946;
count__9899_9942 = G__9947;
i__9900_9943 = G__9948;
continue;
} else {
var temp__5753__auto___9949 = cljs.core.seq.call(null,seq__9897_9940);
if(temp__5753__auto___9949){
var seq__9897_9950__$1 = temp__5753__auto___9949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9897_9950__$1)){
var c__5568__auto___9951 = cljs.core.chunk_first.call(null,seq__9897_9950__$1);
var G__9952 = cljs.core.chunk_rest.call(null,seq__9897_9950__$1);
var G__9953 = c__5568__auto___9951;
var G__9954 = cljs.core.count.call(null,c__5568__auto___9951);
var G__9955 = (0);
seq__9897_9940 = G__9952;
chunk__9898_9941 = G__9953;
count__9899_9942 = G__9954;
i__9900_9943 = G__9955;
continue;
} else {
var component__9226__auto___9956 = cljs.core.first.call(null,seq__9897_9950__$1);
speclj.components.install.call(null,component__9226__auto___9956,description__9225__auto____$1);


var G__9957 = cljs.core.next.call(null,seq__9897_9950__$1);
var G__9958 = null;
var G__9959 = (0);
var G__9960 = (0);
seq__9897_9940 = G__9957;
chunk__9898_9941 = G__9958;
count__9899_9942 = G__9959;
i__9900_9943 = G__9960;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9895_9938);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto____$1);
}

return description__9225__auto____$1;
})(),(function (){var description__9225__auto____$1 = speclj.components.new_description.call(null,"gets score of end condition",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9901_9961 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9902_9962 = description__9225__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9902_9962);

try{var seq__9903_9963 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns 0 if a tie",((function (_STAR_parent_description_STAR__orig_val__9901_9961,_STAR_parent_description_STAR__temp_val__9902_9962,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931){
return (function (){
var expected__9358__auto__ = (0);
var actual__9359__auto__ = tic_tac_toe.ai_player.get_end_score.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(1),(1),(1),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9901_9961,_STAR_parent_description_STAR__temp_val__9902_9962,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931))
,false),speclj.components.new_characteristic.call(null,"returns 1 if ai wins at depth 9",((function (_STAR_parent_description_STAR__orig_val__9901_9961,_STAR_parent_description_STAR__temp_val__9902_9962,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931){
return (function (){
var expected__9358__auto__ = (1);
var actual__9359__auto__ = tic_tac_toe.ai_player.get_end_score.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(2),(1),(2),(1),(2),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9901_9961,_STAR_parent_description_STAR__temp_val__9902_9962,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931))
,false),speclj.components.new_characteristic.call(null,"returns -1 if ai loses at depth 9",((function (_STAR_parent_description_STAR__orig_val__9901_9961,_STAR_parent_description_STAR__temp_val__9902_9962,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931){
return (function (){
var expected__9358__auto__ = (-1);
var actual__9359__auto__ = tic_tac_toe.ai_player.get_end_score.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(2),(1),(2),(1),(2),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9901_9961,_STAR_parent_description_STAR__temp_val__9902_9962,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931))
,false)],null)));
var chunk__9904_9964 = null;
var count__9905_9965 = (0);
var i__9906_9966 = (0);
while(true){
if((i__9906_9966 < count__9905_9965)){
var component__9226__auto___9967 = cljs.core._nth.call(null,chunk__9904_9964,i__9906_9966);
speclj.components.install.call(null,component__9226__auto___9967,description__9225__auto____$1);


var G__9968 = seq__9903_9963;
var G__9969 = chunk__9904_9964;
var G__9970 = count__9905_9965;
var G__9971 = (i__9906_9966 + (1));
seq__9903_9963 = G__9968;
chunk__9904_9964 = G__9969;
count__9905_9965 = G__9970;
i__9906_9966 = G__9971;
continue;
} else {
var temp__5753__auto___9972 = cljs.core.seq.call(null,seq__9903_9963);
if(temp__5753__auto___9972){
var seq__9903_9973__$1 = temp__5753__auto___9972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9903_9973__$1)){
var c__5568__auto___9974 = cljs.core.chunk_first.call(null,seq__9903_9973__$1);
var G__9975 = cljs.core.chunk_rest.call(null,seq__9903_9973__$1);
var G__9976 = c__5568__auto___9974;
var G__9977 = cljs.core.count.call(null,c__5568__auto___9974);
var G__9978 = (0);
seq__9903_9963 = G__9975;
chunk__9904_9964 = G__9976;
count__9905_9965 = G__9977;
i__9906_9966 = G__9978;
continue;
} else {
var component__9226__auto___9979 = cljs.core.first.call(null,seq__9903_9973__$1);
speclj.components.install.call(null,component__9226__auto___9979,description__9225__auto____$1);


var G__9980 = cljs.core.next.call(null,seq__9903_9973__$1);
var G__9981 = null;
var G__9982 = (0);
var G__9983 = (0);
seq__9903_9963 = G__9980;
chunk__9904_9964 = G__9981;
count__9905_9965 = G__9982;
i__9906_9966 = G__9983;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9901_9961);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto____$1);
}

return description__9225__auto____$1;
})(),(function (){var description__9225__auto____$1 = speclj.components.new_description.call(null,"checks if it's currently the ai's turn or not",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9907_9984 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9908_9985 = description__9225__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9908_9985);

try{var seq__9909_9986 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false if depth is not even",((function (_STAR_parent_description_STAR__orig_val__9907_9984,_STAR_parent_description_STAR__temp_val__9908_9985,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931){
return (function (){
var value__9346__auto__ = tic_tac_toe.ai_player.is_ai_turn_QMARK_.call(null,(0));
if((!(value__9346__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__9346__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__9346__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__9907_9984,_STAR_parent_description_STAR__temp_val__9908_9985,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931))
,false),speclj.components.new_characteristic.call(null,"returns true if depth is even",((function (_STAR_parent_description_STAR__orig_val__9907_9984,_STAR_parent_description_STAR__temp_val__9908_9985,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931){
return (function (){
var value__9352__auto__ = tic_tac_toe.ai_player.is_ai_turn_QMARK_.call(null,(1));
if(value__9352__auto__){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__9352__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__9352__auto__))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__9907_9984,_STAR_parent_description_STAR__temp_val__9908_9985,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931))
,false)],null)));
var chunk__9910_9987 = null;
var count__9911_9988 = (0);
var i__9912_9989 = (0);
while(true){
if((i__9912_9989 < count__9911_9988)){
var component__9226__auto___9990 = cljs.core._nth.call(null,chunk__9910_9987,i__9912_9989);
speclj.components.install.call(null,component__9226__auto___9990,description__9225__auto____$1);


var G__9991 = seq__9909_9986;
var G__9992 = chunk__9910_9987;
var G__9993 = count__9911_9988;
var G__9994 = (i__9912_9989 + (1));
seq__9909_9986 = G__9991;
chunk__9910_9987 = G__9992;
count__9911_9988 = G__9993;
i__9912_9989 = G__9994;
continue;
} else {
var temp__5753__auto___9995 = cljs.core.seq.call(null,seq__9909_9986);
if(temp__5753__auto___9995){
var seq__9909_9996__$1 = temp__5753__auto___9995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9909_9996__$1)){
var c__5568__auto___9997 = cljs.core.chunk_first.call(null,seq__9909_9996__$1);
var G__9998 = cljs.core.chunk_rest.call(null,seq__9909_9996__$1);
var G__9999 = c__5568__auto___9997;
var G__10000 = cljs.core.count.call(null,c__5568__auto___9997);
var G__10001 = (0);
seq__9909_9986 = G__9998;
chunk__9910_9987 = G__9999;
count__9911_9988 = G__10000;
i__9912_9989 = G__10001;
continue;
} else {
var component__9226__auto___10002 = cljs.core.first.call(null,seq__9909_9996__$1);
speclj.components.install.call(null,component__9226__auto___10002,description__9225__auto____$1);


var G__10003 = cljs.core.next.call(null,seq__9909_9996__$1);
var G__10004 = null;
var G__10005 = (0);
var G__10006 = (0);
seq__9909_9986 = G__10003;
chunk__9910_9987 = G__10004;
count__9911_9988 = G__10005;
i__9912_9989 = G__10006;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9907_9984);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto____$1);
}

return description__9225__auto____$1;
})(),(function (){var description__9225__auto____$1 = speclj.components.new_description.call(null,"gives the right symbol depending on the context of\n                 the ai's symbol and the depth",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9913_10007 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9914_10008 = description__9225__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9914_10008);

try{var seq__9915_10009 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns 1 if ai symbol is 1 on first move",((function (_STAR_parent_description_STAR__orig_val__9913_10007,_STAR_parent_description_STAR__temp_val__9914_10008,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931){
return (function (){
var expected__9358__auto__ = (1);
var actual__9359__auto__ = tic_tac_toe.ai_player.get_current_symbol.call(null,(0),(1));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9913_10007,_STAR_parent_description_STAR__temp_val__9914_10008,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931))
,false),speclj.components.new_characteristic.call(null,"returns 2 if ai symbol is 1 on the second move",((function (_STAR_parent_description_STAR__orig_val__9913_10007,_STAR_parent_description_STAR__temp_val__9914_10008,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931){
return (function (){
var expected__9358__auto__ = (2);
var actual__9359__auto__ = tic_tac_toe.ai_player.get_current_symbol.call(null,(1),(1));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9913_10007,_STAR_parent_description_STAR__temp_val__9914_10008,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931))
,false)],null)));
var chunk__9916_10010 = null;
var count__9917_10011 = (0);
var i__9918_10012 = (0);
while(true){
if((i__9918_10012 < count__9917_10011)){
var component__9226__auto___10013 = cljs.core._nth.call(null,chunk__9916_10010,i__9918_10012);
speclj.components.install.call(null,component__9226__auto___10013,description__9225__auto____$1);


var G__10014 = seq__9915_10009;
var G__10015 = chunk__9916_10010;
var G__10016 = count__9917_10011;
var G__10017 = (i__9918_10012 + (1));
seq__9915_10009 = G__10014;
chunk__9916_10010 = G__10015;
count__9917_10011 = G__10016;
i__9918_10012 = G__10017;
continue;
} else {
var temp__5753__auto___10018 = cljs.core.seq.call(null,seq__9915_10009);
if(temp__5753__auto___10018){
var seq__9915_10019__$1 = temp__5753__auto___10018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9915_10019__$1)){
var c__5568__auto___10020 = cljs.core.chunk_first.call(null,seq__9915_10019__$1);
var G__10021 = cljs.core.chunk_rest.call(null,seq__9915_10019__$1);
var G__10022 = c__5568__auto___10020;
var G__10023 = cljs.core.count.call(null,c__5568__auto___10020);
var G__10024 = (0);
seq__9915_10009 = G__10021;
chunk__9916_10010 = G__10022;
count__9917_10011 = G__10023;
i__9918_10012 = G__10024;
continue;
} else {
var component__9226__auto___10025 = cljs.core.first.call(null,seq__9915_10019__$1);
speclj.components.install.call(null,component__9226__auto___10025,description__9225__auto____$1);


var G__10026 = cljs.core.next.call(null,seq__9915_10019__$1);
var G__10027 = null;
var G__10028 = (0);
var G__10029 = (0);
seq__9915_10009 = G__10026;
chunk__9916_10010 = G__10027;
count__9917_10011 = G__10028;
i__9918_10012 = G__10029;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9913_10007);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto____$1);
}

return description__9225__auto____$1;
})(),(function (){var description__9225__auto____$1 = speclj.components.new_description.call(null,"makes the best possible move based on an algorithm",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9919_10030 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9920_10031 = description__9225__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9920_10031);

try{var seq__9921_10032 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"moves to any space when absolute depth is below 5",((function (_STAR_parent_description_STAR__orig_val__9919_10030,_STAR_parent_description_STAR__temp_val__9920_10031,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931){
return (function (){
var expected__9358__auto___10036 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null);
var actual__9359__auto___10037 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(1));
if(cljs.core._EQ_.call(null,expected__9358__auto___10036,actual__9359__auto___10037)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___10036 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___10036)),speclj.platform.endl,"     got: ",(((actual__9359__auto___10037 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___10037))," (using =)"].join('')));
}

var expected__9358__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(2),(0),(0),(0),(0)], null);
var actual__9359__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9919_10030,_STAR_parent_description_STAR__temp_val__9920_10031,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931))
,false),speclj.components.new_characteristic.call(null,"actively blocks player movement until tie or ai wins",((function (_STAR_parent_description_STAR__orig_val__9919_10030,_STAR_parent_description_STAR__temp_val__9920_10031,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931){
return (function (){
var expected__9358__auto___10038 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(2),(2),(1),(1)], null);
var actual__9359__auto___10039 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(2),(1),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__9358__auto___10038,actual__9359__auto___10039)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___10038 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___10038)),speclj.platform.endl,"     got: ",(((actual__9359__auto___10039 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___10039))," (using =)"].join('')));
}

var expected__9358__auto___10040 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(0),(0)], null);
var actual__9359__auto___10041 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1),(0),(2),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__9358__auto___10040,actual__9359__auto___10041)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___10040 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___10040)),speclj.platform.endl,"     got: ",(((actual__9359__auto___10041 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___10041))," (using =)"].join('')));
}

var expected__9358__auto___10042 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(2),(1)], null);
var actual__9359__auto___10043 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(0),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__9358__auto___10042,actual__9359__auto___10043)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___10042 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___10042)),speclj.platform.endl,"     got: ",(((actual__9359__auto___10043 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___10043))," (using =)"].join('')));
}

var expected__9358__auto___10044 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(0),(0),(1),(0)], null);
var actual__9359__auto___10045 = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(0),(2),(0),(0),(1),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__9358__auto___10044,actual__9359__auto___10045)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___10044 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___10044)),speclj.platform.endl,"     got: ",(((actual__9359__auto___10045 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___10045))," (using =)"].join('')));
}

var expected__9358__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(1),(0),(1),(2)], null);
var actual__9359__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(2),(2),(1),(0),(1),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9919_10030,_STAR_parent_description_STAR__temp_val__9920_10031,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931))
,false),speclj.components.new_characteristic.call(null,"works for 4x4 too",((function (_STAR_parent_description_STAR__orig_val__9919_10030,_STAR_parent_description_STAR__temp_val__9920_10031,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931){
return (function (){
var expected__9358__auto__ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0),(0),(0),(1),(0),(0),(0),(1),(2),(0),(0),(1),(0),(2)], null);
var actual__9359__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(1),(0),(0),(0),(1),(2),(0),(0),(1),(0),(2)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null),(2));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9919_10030,_STAR_parent_description_STAR__temp_val__9920_10031,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931))
,false),speclj.components.new_characteristic.call(null,"and 3x3x3",((function (_STAR_parent_description_STAR__orig_val__9919_10030,_STAR_parent_description_STAR__temp_val__9920_10031,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931){
return (function (){
var expected__9358__auto__ = new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(2),(0),(0),(0),(0),(0),(0)], null);
var actual__9359__auto__ = tic_tac_toe.ai_player.mini_max_algo.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true], null),(2));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9919_10030,_STAR_parent_description_STAR__temp_val__9920_10031,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931))
,false)],null)));
var chunk__9922_10033 = null;
var count__9923_10034 = (0);
var i__9924_10035 = (0);
while(true){
if((i__9924_10035 < count__9923_10034)){
var component__9226__auto___10046 = cljs.core._nth.call(null,chunk__9922_10033,i__9924_10035);
speclj.components.install.call(null,component__9226__auto___10046,description__9225__auto____$1);


var G__10047 = seq__9921_10032;
var G__10048 = chunk__9922_10033;
var G__10049 = count__9923_10034;
var G__10050 = (i__9924_10035 + (1));
seq__9921_10032 = G__10047;
chunk__9922_10033 = G__10048;
count__9923_10034 = G__10049;
i__9924_10035 = G__10050;
continue;
} else {
var temp__5753__auto___10051 = cljs.core.seq.call(null,seq__9921_10032);
if(temp__5753__auto___10051){
var seq__9921_10052__$1 = temp__5753__auto___10051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9921_10052__$1)){
var c__5568__auto___10053 = cljs.core.chunk_first.call(null,seq__9921_10052__$1);
var G__10054 = cljs.core.chunk_rest.call(null,seq__9921_10052__$1);
var G__10055 = c__5568__auto___10053;
var G__10056 = cljs.core.count.call(null,c__5568__auto___10053);
var G__10057 = (0);
seq__9921_10032 = G__10054;
chunk__9922_10033 = G__10055;
count__9923_10034 = G__10056;
i__9924_10035 = G__10057;
continue;
} else {
var component__9226__auto___10058 = cljs.core.first.call(null,seq__9921_10052__$1);
speclj.components.install.call(null,component__9226__auto___10058,description__9225__auto____$1);


var G__10059 = cljs.core.next.call(null,seq__9921_10052__$1);
var G__10060 = null;
var G__10061 = (0);
var G__10062 = (0);
seq__9921_10032 = G__10059;
chunk__9922_10033 = G__10060;
count__9923_10034 = G__10061;
i__9924_10035 = G__10062;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9919_10030);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto____$1);
}

return description__9225__auto____$1;
})(),(function (){var description__9225__auto____$1 = speclj.components.new_description.call(null,"gives the best best score for the algorithm",false,"tic-tac-toe.ai-player-spec");
var _STAR_parent_description_STAR__orig_val__9925_10063 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9926_10064 = description__9225__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9926_10064);

try{var seq__9927_10065 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"the biggest score if it's the ai's turn",((function (_STAR_parent_description_STAR__orig_val__9925_10063,_STAR_parent_description_STAR__temp_val__9926_10064,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931){
return (function (){
var expected__9358__auto___10069 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null);
var actual__9359__auto___10070 = tic_tac_toe.ai_player.get_best_score.call(null,(0),new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto___10069,actual__9359__auto___10070)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___10069 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___10069)),speclj.platform.endl,"     got: ",(((actual__9359__auto___10070 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___10070))," (using =)"].join('')));
}

var expected__9358__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null);
var actual__9359__auto__ = tic_tac_toe.ai_player.get_best_score.call(null,(0),new cljs.core.PersistentArrayMap(null, 2, [(3),(4),(1),(2)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9925_10063,_STAR_parent_description_STAR__temp_val__9926_10064,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931))
,false),speclj.components.new_characteristic.call(null,"the smallest score if not the ai's turn",((function (_STAR_parent_description_STAR__orig_val__9925_10063,_STAR_parent_description_STAR__temp_val__9926_10064,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931){
return (function (){
var expected__9358__auto___10071 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null);
var actual__9359__auto___10072 = tic_tac_toe.ai_player.get_best_score.call(null,(1),new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto___10071,actual__9359__auto___10072)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___10071 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___10071)),speclj.platform.endl,"     got: ",(((actual__9359__auto___10072 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___10072))," (using =)"].join('')));
}

var expected__9358__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null);
var actual__9359__auto__ = tic_tac_toe.ai_player.get_best_score.call(null,(1),new cljs.core.PersistentArrayMap(null, 2, [(3),(4),(1),(2)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9925_10063,_STAR_parent_description_STAR__temp_val__9926_10064,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9853_9932,_STAR_parent_description_STAR__temp_val__9854_9933,description__9225__auto___9931))
,false)],null)));
var chunk__9928_10066 = null;
var count__9929_10067 = (0);
var i__9930_10068 = (0);
while(true){
if((i__9930_10068 < count__9929_10067)){
var component__9226__auto___10073 = cljs.core._nth.call(null,chunk__9928_10066,i__9930_10068);
speclj.components.install.call(null,component__9226__auto___10073,description__9225__auto____$1);


var G__10074 = seq__9927_10065;
var G__10075 = chunk__9928_10066;
var G__10076 = count__9929_10067;
var G__10077 = (i__9930_10068 + (1));
seq__9927_10065 = G__10074;
chunk__9928_10066 = G__10075;
count__9929_10067 = G__10076;
i__9930_10068 = G__10077;
continue;
} else {
var temp__5753__auto___10078 = cljs.core.seq.call(null,seq__9927_10065);
if(temp__5753__auto___10078){
var seq__9927_10079__$1 = temp__5753__auto___10078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9927_10079__$1)){
var c__5568__auto___10080 = cljs.core.chunk_first.call(null,seq__9927_10079__$1);
var G__10081 = cljs.core.chunk_rest.call(null,seq__9927_10079__$1);
var G__10082 = c__5568__auto___10080;
var G__10083 = cljs.core.count.call(null,c__5568__auto___10080);
var G__10084 = (0);
seq__9927_10065 = G__10081;
chunk__9928_10066 = G__10082;
count__9929_10067 = G__10083;
i__9930_10068 = G__10084;
continue;
} else {
var component__9226__auto___10085 = cljs.core.first.call(null,seq__9927_10079__$1);
speclj.components.install.call(null,component__9226__auto___10085,description__9225__auto____$1);


var G__10086 = cljs.core.next.call(null,seq__9927_10079__$1);
var G__10087 = null;
var G__10088 = (0);
var G__10089 = (0);
seq__9927_10065 = G__10086;
chunk__9928_10066 = G__10087;
count__9929_10067 = G__10088;
i__9930_10068 = G__10089;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9925_10063);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto____$1);
}

return description__9225__auto____$1;
})()],null)));
var chunk__9856_9935 = null;
var count__9857_9936 = (0);
var i__9858_9937 = (0);
while(true){
if((i__9858_9937 < count__9857_9936)){
var component__9226__auto___10090 = cljs.core._nth.call(null,chunk__9856_9935,i__9858_9937);
speclj.components.install.call(null,component__9226__auto___10090,description__9225__auto___9931);


var G__10091 = seq__9855_9934;
var G__10092 = chunk__9856_9935;
var G__10093 = count__9857_9936;
var G__10094 = (i__9858_9937 + (1));
seq__9855_9934 = G__10091;
chunk__9856_9935 = G__10092;
count__9857_9936 = G__10093;
i__9858_9937 = G__10094;
continue;
} else {
var temp__5753__auto___10095 = cljs.core.seq.call(null,seq__9855_9934);
if(temp__5753__auto___10095){
var seq__9855_10096__$1 = temp__5753__auto___10095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9855_10096__$1)){
var c__5568__auto___10097 = cljs.core.chunk_first.call(null,seq__9855_10096__$1);
var G__10098 = cljs.core.chunk_rest.call(null,seq__9855_10096__$1);
var G__10099 = c__5568__auto___10097;
var G__10100 = cljs.core.count.call(null,c__5568__auto___10097);
var G__10101 = (0);
seq__9855_9934 = G__10098;
chunk__9856_9935 = G__10099;
count__9857_9936 = G__10100;
i__9858_9937 = G__10101;
continue;
} else {
var component__9226__auto___10102 = cljs.core.first.call(null,seq__9855_10096__$1);
speclj.components.install.call(null,component__9226__auto___10102,description__9225__auto___9931);


var G__10103 = cljs.core.next.call(null,seq__9855_10096__$1);
var G__10104 = null;
var G__10105 = (0);
var G__10106 = (0);
seq__9855_9934 = G__10103;
chunk__9856_9935 = G__10104;
count__9857_9936 = G__10105;
i__9858_9937 = G__10106;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9853_9932);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto___9931);
}


//# sourceMappingURL=ai_player_spec.js.map
