// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.win_checker_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.win_checker');
goog.require('speclj.core');
var description__8840__auto___9345 = speclj.components.new_description.call(null,"Win Checker",false,"tic-tac-toe.win-checker-spec");
var _STAR_parent_description_STAR__orig_val__9303_9346 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9304_9347 = description__8840__auto___9345;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9304_9347);

try{var seq__9305_9348 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__8840__auto____$1 = speclj.components.new_description.call(null,"gets all 2D boards within a 3D board",false,"tic-tac-toe.win-checker-spec");
var _STAR_parent_description_STAR__orig_val__9327_9352 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9328_9353 = description__8840__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9328_9353);

try{var seq__9329_9354 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"down-facing vertical boards",((function (_STAR_parent_description_STAR__orig_val__9327_9352,_STAR_parent_description_STAR__temp_val__9328_9353,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto___9358 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6),(9),(12),(15),(18),(21),(24)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7),(10),(13),(16),(19),(22),(25)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8),(11),(14),(17),(20),(23),(26)], null)], null);
var actual__8974__auto___9359 = tic_tac_toe.win_checker.get_down_vertical_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__8973__auto___9358,actual__8974__auto___9359)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9358 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9358)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9359 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9359))," (using =)"].join('')));
}

var expected__8973__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__8974__auto__ = tic_tac_toe.win_checker.get_down_vertical_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9327_9352,_STAR_parent_description_STAR__temp_val__9328_9353,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false),speclj.components.new_characteristic.call(null,"side-facing vertical boards",((function (_STAR_parent_description_STAR__orig_val__9327_9352,_STAR_parent_description_STAR__temp_val__9328_9353,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto___9360 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(9),(10),(11),(18),(19),(20)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5),(12),(13),(14),(21),(22),(23)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8),(15),(16),(17),(24),(25),(26)], null)], null);
var actual__8974__auto___9361 = tic_tac_toe.win_checker.get_side_vertical_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__8973__auto___9360,actual__8974__auto___9361)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9360 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9360)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9361 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9361))," (using =)"].join('')));
}

var expected__8973__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__8974__auto__ = tic_tac_toe.win_checker.get_side_vertical_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9327_9352,_STAR_parent_description_STAR__temp_val__9328_9353,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false),speclj.components.new_characteristic.call(null,"diagonal-facing vertical boards",((function (_STAR_parent_description_STAR__orig_val__9327_9352,_STAR_parent_description_STAR__temp_val__9328_9353,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto___9362 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8),(9),(13),(17),(18),(22),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6),(11),(13),(15),(20),(22),(24)], null)], null);
var actual__8974__auto___9363 = tic_tac_toe.win_checker.get_diagonal_facing_vertical_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__8973__auto___9362,actual__8974__auto___9363)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9362 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9362)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9363 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9363))," (using =)"].join('')));
}

var expected__8973__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__8974__auto__ = tic_tac_toe.win_checker.get_diagonal_facing_vertical_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9327_9352,_STAR_parent_description_STAR__temp_val__9328_9353,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false),speclj.components.new_characteristic.call(null,"diagonal-facing horizontal boards",((function (_STAR_parent_description_STAR__orig_val__9327_9352,_STAR_parent_description_STAR__temp_val__9328_9353,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto___9364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(12),(13),(14),(24),(25),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8),(12),(13),(14),(18),(19),(20)], null)], null);
var actual__8974__auto___9365 = tic_tac_toe.win_checker.get_diagonal_facing_horizontal_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__8973__auto___9364,actual__8974__auto___9365)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9364 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9364)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9365 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9365))," (using =)"].join('')));
}

var expected__8973__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__8974__auto__ = tic_tac_toe.win_checker.get_diagonal_facing_horizontal_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9327_9352,_STAR_parent_description_STAR__temp_val__9328_9353,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false),speclj.components.new_characteristic.call(null,"horizontal boards",((function (_STAR_parent_description_STAR__orig_val__9327_9352,_STAR_parent_description_STAR__temp_val__9328_9353,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto___9366 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10),(11),(12),(13),(14),(15),(16),(17)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(19),(20),(21),(22),(23),(24),(25),(26)], null)], null);
var actual__8974__auto___9367 = tic_tac_toe.win_checker.get_horizontal_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__8973__auto___9366,actual__8974__auto___9367)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9366 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9366)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9367 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9367))," (using =)"].join('')));
}

var expected__8973__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__8974__auto__ = tic_tac_toe.win_checker.get_horizontal_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9327_9352,_STAR_parent_description_STAR__temp_val__9328_9353,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false),speclj.components.new_characteristic.call(null,"all together",((function (_STAR_parent_description_STAR__orig_val__9327_9352,_STAR_parent_description_STAR__temp_val__9328_9353,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto___9368 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10),(11),(12),(13),(14),(15),(16),(17)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(19),(20),(21),(22),(23),(24),(25),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(12),(13),(14),(24),(25),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8),(12),(13),(14),(18),(19),(20)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8),(9),(13),(17),(18),(22),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6),(11),(13),(15),(20),(22),(24)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(9),(10),(11),(18),(19),(20)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5),(12),(13),(14),(21),(22),(23)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8),(15),(16),(17),(24),(25),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6),(9),(12),(15),(18),(21),(24)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7),(10),(13),(16),(19),(22),(25)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8),(11),(14),(17),(20),(23),(26)], null)], null);
var actual__8974__auto___9369 = tic_tac_toe.win_checker.get_2d_boards_within_3d_board.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__8973__auto___9368,actual__8974__auto___9369)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9368 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9368)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9369 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9369))," (using =)"].join('')));
}

var expected__8973__auto__ = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__8974__auto__ = tic_tac_toe.win_checker.get_2d_boards_within_3d_board.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9327_9352,_STAR_parent_description_STAR__temp_val__9328_9353,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false)],null)));
var chunk__9330_9355 = null;
var count__9331_9356 = (0);
var i__9332_9357 = (0);
while(true){
if((i__9332_9357 < count__9331_9356)){
var component__8841__auto___9370 = cljs.core._nth.call(null,chunk__9330_9355,i__9332_9357);
speclj.components.install.call(null,component__8841__auto___9370,description__8840__auto____$1);


var G__9371 = seq__9329_9354;
var G__9372 = chunk__9330_9355;
var G__9373 = count__9331_9356;
var G__9374 = (i__9332_9357 + (1));
seq__9329_9354 = G__9371;
chunk__9330_9355 = G__9372;
count__9331_9356 = G__9373;
i__9332_9357 = G__9374;
continue;
} else {
var temp__5753__auto___9375 = cljs.core.seq.call(null,seq__9329_9354);
if(temp__5753__auto___9375){
var seq__9329_9376__$1 = temp__5753__auto___9375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9329_9376__$1)){
var c__5568__auto___9377 = cljs.core.chunk_first.call(null,seq__9329_9376__$1);
var G__9378 = cljs.core.chunk_rest.call(null,seq__9329_9376__$1);
var G__9379 = c__5568__auto___9377;
var G__9380 = cljs.core.count.call(null,c__5568__auto___9377);
var G__9381 = (0);
seq__9329_9354 = G__9378;
chunk__9330_9355 = G__9379;
count__9331_9356 = G__9380;
i__9332_9357 = G__9381;
continue;
} else {
var component__8841__auto___9382 = cljs.core.first.call(null,seq__9329_9376__$1);
speclj.components.install.call(null,component__8841__auto___9382,description__8840__auto____$1);


var G__9383 = cljs.core.next.call(null,seq__9329_9376__$1);
var G__9384 = null;
var G__9385 = (0);
var G__9386 = (0);
seq__9329_9354 = G__9383;
chunk__9330_9355 = G__9384;
count__9331_9356 = G__9385;
i__9332_9357 = G__9386;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9327_9352);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto____$1);
}

return description__8840__auto____$1;
})(),(function (){var description__8840__auto____$1 = speclj.components.new_description.call(null,"checks if a winner within a 3-d board is found,",false,"tic-tac-toe.win-checker-spec");
var _STAR_parent_description_STAR__orig_val__9333_9387 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9334_9388 = description__8840__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9334_9388);

try{var seq__9335_9389 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"nil on no winner",((function (_STAR_parent_description_STAR__orig_val__9333_9387,_STAR_parent_description_STAR__temp_val__9334_9388,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto__ = null;
var actual__8974__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(27),(0))], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9333_9387,_STAR_parent_description_STAR__temp_val__9334_9388,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false),speclj.components.new_characteristic.call(null,"flat-horizontal win",((function (_STAR_parent_description_STAR__orig_val__9333_9387,_STAR_parent_description_STAR__temp_val__9334_9388,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto__ = (1);
var actual__8974__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9333_9387,_STAR_parent_description_STAR__temp_val__9334_9388,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false),speclj.components.new_characteristic.call(null,"flat-vertical win",((function (_STAR_parent_description_STAR__orig_val__9333_9387,_STAR_parent_description_STAR__temp_val__9334_9388,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto__ = (1);
var actual__8974__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9333_9387,_STAR_parent_description_STAR__temp_val__9334_9388,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false),speclj.components.new_characteristic.call(null,"flat-diagonal win",((function (_STAR_parent_description_STAR__orig_val__9333_9387,_STAR_parent_description_STAR__temp_val__9334_9388,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto__ = (1);
var actual__8974__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(1),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9333_9387,_STAR_parent_description_STAR__temp_val__9334_9388,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false),speclj.components.new_characteristic.call(null,"upwards-vertical win",((function (_STAR_parent_description_STAR__orig_val__9333_9387,_STAR_parent_description_STAR__temp_val__9334_9388,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto__ = (1);
var actual__8974__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9333_9387,_STAR_parent_description_STAR__temp_val__9334_9388,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false),speclj.components.new_characteristic.call(null,"upwards-diagonal win",((function (_STAR_parent_description_STAR__orig_val__9333_9387,_STAR_parent_description_STAR__temp_val__9334_9388,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto__ = (1);
var actual__8974__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9333_9387,_STAR_parent_description_STAR__temp_val__9334_9388,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false),speclj.components.new_characteristic.call(null,"cross-diagonal win",((function (_STAR_parent_description_STAR__orig_val__9333_9387,_STAR_parent_description_STAR__temp_val__9334_9388,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto___9393 = (1);
var actual__8974__auto___9394 = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1)], null)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto___9393,actual__8974__auto___9394)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9393 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9393)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9394 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9394))," (using =)"].join('')));
}

var expected__8973__auto__ = (1);
var actual__8974__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(1),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9333_9387,_STAR_parent_description_STAR__temp_val__9334_9388,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false)],null)));
var chunk__9336_9390 = null;
var count__9337_9391 = (0);
var i__9338_9392 = (0);
while(true){
if((i__9338_9392 < count__9337_9391)){
var component__8841__auto___9395 = cljs.core._nth.call(null,chunk__9336_9390,i__9338_9392);
speclj.components.install.call(null,component__8841__auto___9395,description__8840__auto____$1);


var G__9396 = seq__9335_9389;
var G__9397 = chunk__9336_9390;
var G__9398 = count__9337_9391;
var G__9399 = (i__9338_9392 + (1));
seq__9335_9389 = G__9396;
chunk__9336_9390 = G__9397;
count__9337_9391 = G__9398;
i__9338_9392 = G__9399;
continue;
} else {
var temp__5753__auto___9400 = cljs.core.seq.call(null,seq__9335_9389);
if(temp__5753__auto___9400){
var seq__9335_9401__$1 = temp__5753__auto___9400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9335_9401__$1)){
var c__5568__auto___9402 = cljs.core.chunk_first.call(null,seq__9335_9401__$1);
var G__9403 = cljs.core.chunk_rest.call(null,seq__9335_9401__$1);
var G__9404 = c__5568__auto___9402;
var G__9405 = cljs.core.count.call(null,c__5568__auto___9402);
var G__9406 = (0);
seq__9335_9389 = G__9403;
chunk__9336_9390 = G__9404;
count__9337_9391 = G__9405;
i__9338_9392 = G__9406;
continue;
} else {
var component__8841__auto___9407 = cljs.core.first.call(null,seq__9335_9401__$1);
speclj.components.install.call(null,component__8841__auto___9407,description__8840__auto____$1);


var G__9408 = cljs.core.next.call(null,seq__9335_9401__$1);
var G__9409 = null;
var G__9410 = (0);
var G__9411 = (0);
seq__9335_9389 = G__9408;
chunk__9336_9390 = G__9409;
count__9337_9391 = G__9410;
i__9338_9392 = G__9411;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9333_9387);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto____$1);
}

return description__8840__auto____$1;
})(),(function (){var description__8840__auto____$1 = speclj.components.new_description.call(null,"checks if the game has met an end condition",false,"tic-tac-toe.win-checker-spec");
var _STAR_parent_description_STAR__orig_val__9339_9412 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9340_9413 = description__8840__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9340_9413);

try{var seq__9341_9414 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns symbol of winner if a horizontal win is found",((function (_STAR_parent_description_STAR__orig_val__9339_9412,_STAR_parent_description_STAR__temp_val__9340_9413,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto___9418 = (1);
var actual__8974__auto___9419 = tic_tac_toe.win_checker.get_horizontal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto___9418,actual__8974__auto___9419)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9418 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9418)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9419 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9419))," (using =)"].join('')));
}

var expected__8973__auto__ = (2);
var actual__8974__auto__ = tic_tac_toe.win_checker.get_horizontal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(0),(0),(2),(2),(2)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9339_9412,_STAR_parent_description_STAR__temp_val__9340_9413,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false),speclj.components.new_characteristic.call(null,"returns nil if no horizontal win is found",((function (_STAR_parent_description_STAR__orig_val__9339_9412,_STAR_parent_description_STAR__temp_val__9340_9413,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto__ = null;
var actual__8974__auto__ = tic_tac_toe.win_checker.get_horizontal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9339_9412,_STAR_parent_description_STAR__temp_val__9340_9413,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false),speclj.components.new_characteristic.call(null,"returns a symbol of winner if a vertical win is found",((function (_STAR_parent_description_STAR__orig_val__9339_9412,_STAR_parent_description_STAR__temp_val__9340_9413,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto___9420 = (1);
var actual__8974__auto___9421 = tic_tac_toe.win_checker.get_vertical_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(1),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto___9420,actual__8974__auto___9421)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9420 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9420)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9421 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9421))," (using =)"].join('')));
}

var expected__8973__auto__ = (2);
var actual__8974__auto__ = tic_tac_toe.win_checker.get_vertical_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(0),(2),(2),(0),(1),(2),(0)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9339_9412,_STAR_parent_description_STAR__temp_val__9340_9413,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false),speclj.components.new_characteristic.call(null,"returns nil if no vertical win is found",((function (_STAR_parent_description_STAR__orig_val__9339_9412,_STAR_parent_description_STAR__temp_val__9340_9413,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto__ = null;
var actual__8974__auto__ = tic_tac_toe.win_checker.get_vertical_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(2),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9339_9412,_STAR_parent_description_STAR__temp_val__9340_9413,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false),speclj.components.new_characteristic.call(null,"returns a symbol of winner if a diagonal win is found",((function (_STAR_parent_description_STAR__orig_val__9339_9412,_STAR_parent_description_STAR__temp_val__9340_9413,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto___9422 = (1);
var actual__8974__auto___9423 = tic_tac_toe.win_checker.get_diagonal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(1),(0),(0),(0),(1)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto___9422,actual__8974__auto___9423)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9422 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9422)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9423 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9423))," (using =)"].join('')));
}

var expected__8973__auto__ = (2);
var actual__8974__auto__ = tic_tac_toe.win_checker.get_diagonal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(2),(0),(2),(0),(2),(0),(1)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9339_9412,_STAR_parent_description_STAR__temp_val__9340_9413,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false),speclj.components.new_characteristic.call(null,"returns nil if no diagonal win is found",((function (_STAR_parent_description_STAR__orig_val__9339_9412,_STAR_parent_description_STAR__temp_val__9340_9413,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto__ = null;
var actual__8974__auto__ = tic_tac_toe.win_checker.get_diagonal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(2),(2),(2),(2),(1)], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9339_9412,_STAR_parent_description_STAR__temp_val__9340_9413,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false),speclj.components.new_characteristic.call(null,"returns symbol of winner if a winner is found",((function (_STAR_parent_description_STAR__orig_val__9339_9412,_STAR_parent_description_STAR__temp_val__9340_9413,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto___9424 = (1);
var actual__8974__auto___9425 = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(1),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8973__auto___9424,actual__8974__auto___9425)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9424 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9424)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9425 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9425))," (using =)"].join('')));
}

var expected__8973__auto___9426 = (2);
var actual__8974__auto___9427 = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2),(1),(0),(2),(1),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8973__auto___9426,actual__8974__auto___9427)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9426 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9426)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9427 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9427))," (using =)"].join('')));
}

var expected__8973__auto__ = (1);
var actual__8974__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(1),(0),(2),(1),(0),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9339_9412,_STAR_parent_description_STAR__temp_val__9340_9413,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false),speclj.components.new_characteristic.call(null,"returns nil if no winner found",((function (_STAR_parent_description_STAR__orig_val__9339_9412,_STAR_parent_description_STAR__temp_val__9340_9413,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto__ = null;
var actual__8974__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9339_9412,_STAR_parent_description_STAR__temp_val__9340_9413,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false),speclj.components.new_characteristic.call(null,"checks if there is a winner or a tie",((function (_STAR_parent_description_STAR__orig_val__9339_9412,_STAR_parent_description_STAR__temp_val__9340_9413,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345){
return (function (){
var expected__8973__auto___9428 = "tie";
var actual__8974__auto___9429 = tic_tac_toe.win_checker.get_winner_or_tie.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(1),(2),(2),(2),(1),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8973__auto___9428,actual__8974__auto___9429)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9428 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9428)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9429 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9429))," (using =)"].join('')));
}

var expected__8973__auto___9430 = (1);
var actual__8974__auto___9431 = tic_tac_toe.win_checker.get_winner_or_tie.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(2),(2),(2),(1),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8973__auto___9430,actual__8974__auto___9431)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto___9430 == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto___9430)),speclj.platform.endl,"     got: ",(((actual__8974__auto___9431 == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto___9431))," (using =)"].join('')));
}

var expected__8973__auto__ = null;
var actual__8974__auto__ = tic_tac_toe.win_checker.get_winner_or_tie.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0),(1),(2),(2),(2),(1),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9339_9412,_STAR_parent_description_STAR__temp_val__9340_9413,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__9303_9346,_STAR_parent_description_STAR__temp_val__9304_9347,description__8840__auto___9345))
,false)],null)));
var chunk__9342_9415 = null;
var count__9343_9416 = (0);
var i__9344_9417 = (0);
while(true){
if((i__9344_9417 < count__9343_9416)){
var component__8841__auto___9432 = cljs.core._nth.call(null,chunk__9342_9415,i__9344_9417);
speclj.components.install.call(null,component__8841__auto___9432,description__8840__auto____$1);


var G__9433 = seq__9341_9414;
var G__9434 = chunk__9342_9415;
var G__9435 = count__9343_9416;
var G__9436 = (i__9344_9417 + (1));
seq__9341_9414 = G__9433;
chunk__9342_9415 = G__9434;
count__9343_9416 = G__9435;
i__9344_9417 = G__9436;
continue;
} else {
var temp__5753__auto___9437 = cljs.core.seq.call(null,seq__9341_9414);
if(temp__5753__auto___9437){
var seq__9341_9438__$1 = temp__5753__auto___9437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9341_9438__$1)){
var c__5568__auto___9439 = cljs.core.chunk_first.call(null,seq__9341_9438__$1);
var G__9440 = cljs.core.chunk_rest.call(null,seq__9341_9438__$1);
var G__9441 = c__5568__auto___9439;
var G__9442 = cljs.core.count.call(null,c__5568__auto___9439);
var G__9443 = (0);
seq__9341_9414 = G__9440;
chunk__9342_9415 = G__9441;
count__9343_9416 = G__9442;
i__9344_9417 = G__9443;
continue;
} else {
var component__8841__auto___9444 = cljs.core.first.call(null,seq__9341_9438__$1);
speclj.components.install.call(null,component__8841__auto___9444,description__8840__auto____$1);


var G__9445 = cljs.core.next.call(null,seq__9341_9438__$1);
var G__9446 = null;
var G__9447 = (0);
var G__9448 = (0);
seq__9341_9414 = G__9445;
chunk__9342_9415 = G__9446;
count__9343_9416 = G__9447;
i__9344_9417 = G__9448;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9339_9412);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto____$1);
}

return description__8840__auto____$1;
})()],null)));
var chunk__9306_9349 = null;
var count__9307_9350 = (0);
var i__9308_9351 = (0);
while(true){
if((i__9308_9351 < count__9307_9350)){
var component__8841__auto___9449 = cljs.core._nth.call(null,chunk__9306_9349,i__9308_9351);
speclj.components.install.call(null,component__8841__auto___9449,description__8840__auto___9345);


var G__9450 = seq__9305_9348;
var G__9451 = chunk__9306_9349;
var G__9452 = count__9307_9350;
var G__9453 = (i__9308_9351 + (1));
seq__9305_9348 = G__9450;
chunk__9306_9349 = G__9451;
count__9307_9350 = G__9452;
i__9308_9351 = G__9453;
continue;
} else {
var temp__5753__auto___9454 = cljs.core.seq.call(null,seq__9305_9348);
if(temp__5753__auto___9454){
var seq__9305_9455__$1 = temp__5753__auto___9454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9305_9455__$1)){
var c__5568__auto___9456 = cljs.core.chunk_first.call(null,seq__9305_9455__$1);
var G__9457 = cljs.core.chunk_rest.call(null,seq__9305_9455__$1);
var G__9458 = c__5568__auto___9456;
var G__9459 = cljs.core.count.call(null,c__5568__auto___9456);
var G__9460 = (0);
seq__9305_9348 = G__9457;
chunk__9306_9349 = G__9458;
count__9307_9350 = G__9459;
i__9308_9351 = G__9460;
continue;
} else {
var component__8841__auto___9461 = cljs.core.first.call(null,seq__9305_9455__$1);
speclj.components.install.call(null,component__8841__auto___9461,description__8840__auto___9345);


var G__9462 = cljs.core.next.call(null,seq__9305_9455__$1);
var G__9463 = null;
var G__9464 = (0);
var G__9465 = (0);
seq__9305_9348 = G__9462;
chunk__9306_9349 = G__9463;
count__9307_9350 = G__9464;
i__9308_9351 = G__9465;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9303_9346);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto___9345);
}


//# sourceMappingURL=win_checker_spec.js.map
