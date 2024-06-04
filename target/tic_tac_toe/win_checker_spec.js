// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.win_checker_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.win_checker');
goog.require('speclj.core');
var description__9225__auto___9730 = speclj.components.new_description.call(null,"Win Checker",false,"tic-tac-toe.win-checker-spec");
var _STAR_parent_description_STAR__orig_val__9688_9731 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9689_9732 = description__9225__auto___9730;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9689_9732);

try{var seq__9690_9733 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__9225__auto____$1 = speclj.components.new_description.call(null,"gets all 2D boards within a 3D board",false,"tic-tac-toe.win-checker-spec");
var _STAR_parent_description_STAR__orig_val__9712_9737 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9713_9738 = description__9225__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9713_9738);

try{var seq__9714_9739 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"down-facing vertical boards",((function (_STAR_parent_description_STAR__orig_val__9712_9737,_STAR_parent_description_STAR__temp_val__9713_9738,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto___9743 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6),(9),(12),(15),(18),(21),(24)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7),(10),(13),(16),(19),(22),(25)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8),(11),(14),(17),(20),(23),(26)], null)], null);
var actual__9359__auto___9744 = tic_tac_toe.win_checker.get_down_vertical_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__9358__auto___9743,actual__9359__auto___9744)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___9743 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___9743)),speclj.platform.endl,"     got: ",(((actual__9359__auto___9744 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___9744))," (using =)"].join('')));
}

var expected__9358__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__9359__auto__ = tic_tac_toe.win_checker.get_down_vertical_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9712_9737,_STAR_parent_description_STAR__temp_val__9713_9738,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false),speclj.components.new_characteristic.call(null,"side-facing vertical boards",((function (_STAR_parent_description_STAR__orig_val__9712_9737,_STAR_parent_description_STAR__temp_val__9713_9738,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto___9745 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(9),(10),(11),(18),(19),(20)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5),(12),(13),(14),(21),(22),(23)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8),(15),(16),(17),(24),(25),(26)], null)], null);
var actual__9359__auto___9746 = tic_tac_toe.win_checker.get_side_vertical_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__9358__auto___9745,actual__9359__auto___9746)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___9745 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___9745)),speclj.platform.endl,"     got: ",(((actual__9359__auto___9746 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___9746))," (using =)"].join('')));
}

var expected__9358__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__9359__auto__ = tic_tac_toe.win_checker.get_side_vertical_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9712_9737,_STAR_parent_description_STAR__temp_val__9713_9738,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false),speclj.components.new_characteristic.call(null,"diagonal-facing vertical boards",((function (_STAR_parent_description_STAR__orig_val__9712_9737,_STAR_parent_description_STAR__temp_val__9713_9738,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto___9747 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8),(9),(13),(17),(18),(22),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6),(11),(13),(15),(20),(22),(24)], null)], null);
var actual__9359__auto___9748 = tic_tac_toe.win_checker.get_diagonal_facing_vertical_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__9358__auto___9747,actual__9359__auto___9748)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___9747 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___9747)),speclj.platform.endl,"     got: ",(((actual__9359__auto___9748 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___9748))," (using =)"].join('')));
}

var expected__9358__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__9359__auto__ = tic_tac_toe.win_checker.get_diagonal_facing_vertical_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9712_9737,_STAR_parent_description_STAR__temp_val__9713_9738,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false),speclj.components.new_characteristic.call(null,"diagonal-facing horizontal boards",((function (_STAR_parent_description_STAR__orig_val__9712_9737,_STAR_parent_description_STAR__temp_val__9713_9738,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto___9749 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(12),(13),(14),(24),(25),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8),(12),(13),(14),(18),(19),(20)], null)], null);
var actual__9359__auto___9750 = tic_tac_toe.win_checker.get_diagonal_facing_horizontal_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__9358__auto___9749,actual__9359__auto___9750)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___9749 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___9749)),speclj.platform.endl,"     got: ",(((actual__9359__auto___9750 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___9750))," (using =)"].join('')));
}

var expected__9358__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__9359__auto__ = tic_tac_toe.win_checker.get_diagonal_facing_horizontal_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9712_9737,_STAR_parent_description_STAR__temp_val__9713_9738,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false),speclj.components.new_characteristic.call(null,"horizontal boards",((function (_STAR_parent_description_STAR__orig_val__9712_9737,_STAR_parent_description_STAR__temp_val__9713_9738,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto___9751 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10),(11),(12),(13),(14),(15),(16),(17)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(19),(20),(21),(22),(23),(24),(25),(26)], null)], null);
var actual__9359__auto___9752 = tic_tac_toe.win_checker.get_horizontal_boards.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__9358__auto___9751,actual__9359__auto___9752)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___9751 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___9751)),speclj.platform.endl,"     got: ",(((actual__9359__auto___9752 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___9752))," (using =)"].join('')));
}

var expected__9358__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__9359__auto__ = tic_tac_toe.win_checker.get_horizontal_boards.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9712_9737,_STAR_parent_description_STAR__temp_val__9713_9738,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false),speclj.components.new_characteristic.call(null,"all together",((function (_STAR_parent_description_STAR__orig_val__9712_9737,_STAR_parent_description_STAR__temp_val__9713_9738,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto___9753 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10),(11),(12),(13),(14),(15),(16),(17)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(19),(20),(21),(22),(23),(24),(25),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(12),(13),(14),(24),(25),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8),(12),(13),(14),(18),(19),(20)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8),(9),(13),(17),(18),(22),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6),(11),(13),(15),(20),(22),(24)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(9),(10),(11),(18),(19),(20)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5),(12),(13),(14),(21),(22),(23)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8),(15),(16),(17),(24),(25),(26)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6),(9),(12),(15),(18),(21),(24)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7),(10),(13),(16),(19),(22),(25)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8),(11),(14),(17),(20),(23),(26)], null)], null);
var actual__9359__auto___9754 = tic_tac_toe.win_checker.get_2d_boards_within_3d_board.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__9358__auto___9753,actual__9359__auto___9754)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___9753 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___9753)),speclj.platform.endl,"     got: ",(((actual__9359__auto___9754 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___9754))," (using =)"].join('')));
}

var expected__9358__auto__ = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var actual__9359__auto__ = tic_tac_toe.win_checker.get_2d_boards_within_3d_board.call(null,cljs.core.repeat.call(null,(27),(0)));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9712_9737,_STAR_parent_description_STAR__temp_val__9713_9738,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false)],null)));
var chunk__9715_9740 = null;
var count__9716_9741 = (0);
var i__9717_9742 = (0);
while(true){
if((i__9717_9742 < count__9716_9741)){
var component__9226__auto___9755 = cljs.core._nth.call(null,chunk__9715_9740,i__9717_9742);
speclj.components.install.call(null,component__9226__auto___9755,description__9225__auto____$1);


var G__9756 = seq__9714_9739;
var G__9757 = chunk__9715_9740;
var G__9758 = count__9716_9741;
var G__9759 = (i__9717_9742 + (1));
seq__9714_9739 = G__9756;
chunk__9715_9740 = G__9757;
count__9716_9741 = G__9758;
i__9717_9742 = G__9759;
continue;
} else {
var temp__5753__auto___9760 = cljs.core.seq.call(null,seq__9714_9739);
if(temp__5753__auto___9760){
var seq__9714_9761__$1 = temp__5753__auto___9760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9714_9761__$1)){
var c__5568__auto___9762 = cljs.core.chunk_first.call(null,seq__9714_9761__$1);
var G__9763 = cljs.core.chunk_rest.call(null,seq__9714_9761__$1);
var G__9764 = c__5568__auto___9762;
var G__9765 = cljs.core.count.call(null,c__5568__auto___9762);
var G__9766 = (0);
seq__9714_9739 = G__9763;
chunk__9715_9740 = G__9764;
count__9716_9741 = G__9765;
i__9717_9742 = G__9766;
continue;
} else {
var component__9226__auto___9767 = cljs.core.first.call(null,seq__9714_9761__$1);
speclj.components.install.call(null,component__9226__auto___9767,description__9225__auto____$1);


var G__9768 = cljs.core.next.call(null,seq__9714_9761__$1);
var G__9769 = null;
var G__9770 = (0);
var G__9771 = (0);
seq__9714_9739 = G__9768;
chunk__9715_9740 = G__9769;
count__9716_9741 = G__9770;
i__9717_9742 = G__9771;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9712_9737);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto____$1);
}

return description__9225__auto____$1;
})(),(function (){var description__9225__auto____$1 = speclj.components.new_description.call(null,"checks if a winner within a 3-d board is found,",false,"tic-tac-toe.win-checker-spec");
var _STAR_parent_description_STAR__orig_val__9718_9772 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9719_9773 = description__9225__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9719_9773);

try{var seq__9720_9774 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"nil on no winner",((function (_STAR_parent_description_STAR__orig_val__9718_9772,_STAR_parent_description_STAR__temp_val__9719_9773,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto__ = null;
var actual__9359__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(27),(0))], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9718_9772,_STAR_parent_description_STAR__temp_val__9719_9773,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false),speclj.components.new_characteristic.call(null,"flat-horizontal win",((function (_STAR_parent_description_STAR__orig_val__9718_9772,_STAR_parent_description_STAR__temp_val__9719_9773,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto__ = (1);
var actual__9359__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9718_9772,_STAR_parent_description_STAR__temp_val__9719_9773,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false),speclj.components.new_characteristic.call(null,"flat-vertical win",((function (_STAR_parent_description_STAR__orig_val__9718_9772,_STAR_parent_description_STAR__temp_val__9719_9773,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto__ = (1);
var actual__9359__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9718_9772,_STAR_parent_description_STAR__temp_val__9719_9773,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false),speclj.components.new_characteristic.call(null,"flat-diagonal win",((function (_STAR_parent_description_STAR__orig_val__9718_9772,_STAR_parent_description_STAR__temp_val__9719_9773,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto__ = (1);
var actual__9359__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(1),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9718_9772,_STAR_parent_description_STAR__temp_val__9719_9773,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false),speclj.components.new_characteristic.call(null,"upwards-vertical win",((function (_STAR_parent_description_STAR__orig_val__9718_9772,_STAR_parent_description_STAR__temp_val__9719_9773,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto__ = (1);
var actual__9359__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9718_9772,_STAR_parent_description_STAR__temp_val__9719_9773,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false),speclj.components.new_characteristic.call(null,"upwards-diagonal win",((function (_STAR_parent_description_STAR__orig_val__9718_9772,_STAR_parent_description_STAR__temp_val__9719_9773,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto__ = (1);
var actual__9359__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9718_9772,_STAR_parent_description_STAR__temp_val__9719_9773,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false),speclj.components.new_characteristic.call(null,"cross-diagonal win",((function (_STAR_parent_description_STAR__orig_val__9718_9772,_STAR_parent_description_STAR__temp_val__9719_9773,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto___9778 = (1);
var actual__9359__auto___9779 = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1)], null)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto___9778,actual__9359__auto___9779)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___9778 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___9778)),speclj.platform.endl,"     got: ",(((actual__9359__auto___9779 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___9779))," (using =)"].join('')));
}

var expected__9358__auto__ = (1);
var actual__9359__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),true,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1),(0),(0),(0),(0),(1),(0),(0),(0),(0),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9718_9772,_STAR_parent_description_STAR__temp_val__9719_9773,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false)],null)));
var chunk__9721_9775 = null;
var count__9722_9776 = (0);
var i__9723_9777 = (0);
while(true){
if((i__9723_9777 < count__9722_9776)){
var component__9226__auto___9780 = cljs.core._nth.call(null,chunk__9721_9775,i__9723_9777);
speclj.components.install.call(null,component__9226__auto___9780,description__9225__auto____$1);


var G__9781 = seq__9720_9774;
var G__9782 = chunk__9721_9775;
var G__9783 = count__9722_9776;
var G__9784 = (i__9723_9777 + (1));
seq__9720_9774 = G__9781;
chunk__9721_9775 = G__9782;
count__9722_9776 = G__9783;
i__9723_9777 = G__9784;
continue;
} else {
var temp__5753__auto___9785 = cljs.core.seq.call(null,seq__9720_9774);
if(temp__5753__auto___9785){
var seq__9720_9786__$1 = temp__5753__auto___9785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9720_9786__$1)){
var c__5568__auto___9787 = cljs.core.chunk_first.call(null,seq__9720_9786__$1);
var G__9788 = cljs.core.chunk_rest.call(null,seq__9720_9786__$1);
var G__9789 = c__5568__auto___9787;
var G__9790 = cljs.core.count.call(null,c__5568__auto___9787);
var G__9791 = (0);
seq__9720_9774 = G__9788;
chunk__9721_9775 = G__9789;
count__9722_9776 = G__9790;
i__9723_9777 = G__9791;
continue;
} else {
var component__9226__auto___9792 = cljs.core.first.call(null,seq__9720_9786__$1);
speclj.components.install.call(null,component__9226__auto___9792,description__9225__auto____$1);


var G__9793 = cljs.core.next.call(null,seq__9720_9786__$1);
var G__9794 = null;
var G__9795 = (0);
var G__9796 = (0);
seq__9720_9774 = G__9793;
chunk__9721_9775 = G__9794;
count__9722_9776 = G__9795;
i__9723_9777 = G__9796;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9718_9772);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto____$1);
}

return description__9225__auto____$1;
})(),(function (){var description__9225__auto____$1 = speclj.components.new_description.call(null,"checks if the game has met an end condition",false,"tic-tac-toe.win-checker-spec");
var _STAR_parent_description_STAR__orig_val__9724_9797 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9725_9798 = description__9225__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9725_9798);

try{var seq__9726_9799 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns symbol of winner if a horizontal win is found",((function (_STAR_parent_description_STAR__orig_val__9724_9797,_STAR_parent_description_STAR__temp_val__9725_9798,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto___9803 = (1);
var actual__9359__auto___9804 = tic_tac_toe.win_checker.get_horizontal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto___9803,actual__9359__auto___9804)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___9803 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___9803)),speclj.platform.endl,"     got: ",(((actual__9359__auto___9804 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___9804))," (using =)"].join('')));
}

var expected__9358__auto__ = (2);
var actual__9359__auto__ = tic_tac_toe.win_checker.get_horizontal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(0),(0),(2),(2),(2)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9724_9797,_STAR_parent_description_STAR__temp_val__9725_9798,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false),speclj.components.new_characteristic.call(null,"returns nil if no horizontal win is found",((function (_STAR_parent_description_STAR__orig_val__9724_9797,_STAR_parent_description_STAR__temp_val__9725_9798,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto__ = null;
var actual__9359__auto__ = tic_tac_toe.win_checker.get_horizontal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(0),(0),(0),(0),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9724_9797,_STAR_parent_description_STAR__temp_val__9725_9798,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false),speclj.components.new_characteristic.call(null,"returns a symbol of winner if a vertical win is found",((function (_STAR_parent_description_STAR__orig_val__9724_9797,_STAR_parent_description_STAR__temp_val__9725_9798,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto___9805 = (1);
var actual__9359__auto___9806 = tic_tac_toe.win_checker.get_vertical_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(1),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto___9805,actual__9359__auto___9806)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___9805 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___9805)),speclj.platform.endl,"     got: ",(((actual__9359__auto___9806 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___9806))," (using =)"].join('')));
}

var expected__9358__auto__ = (2);
var actual__9359__auto__ = tic_tac_toe.win_checker.get_vertical_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(0),(2),(2),(0),(1),(2),(0)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9724_9797,_STAR_parent_description_STAR__temp_val__9725_9798,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false),speclj.components.new_characteristic.call(null,"returns nil if no vertical win is found",((function (_STAR_parent_description_STAR__orig_val__9724_9797,_STAR_parent_description_STAR__temp_val__9725_9798,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto__ = null;
var actual__9359__auto__ = tic_tac_toe.win_checker.get_vertical_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(2),(0),(0)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9724_9797,_STAR_parent_description_STAR__temp_val__9725_9798,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false),speclj.components.new_characteristic.call(null,"returns a symbol of winner if a diagonal win is found",((function (_STAR_parent_description_STAR__orig_val__9724_9797,_STAR_parent_description_STAR__temp_val__9725_9798,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto___9807 = (1);
var actual__9359__auto___9808 = tic_tac_toe.win_checker.get_diagonal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(1),(0),(0),(0),(1)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto___9807,actual__9359__auto___9808)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___9807 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___9807)),speclj.platform.endl,"     got: ",(((actual__9359__auto___9808 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___9808))," (using =)"].join('')));
}

var expected__9358__auto__ = (2);
var actual__9359__auto__ = tic_tac_toe.win_checker.get_diagonal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(2),(0),(2),(0),(2),(0),(1)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9724_9797,_STAR_parent_description_STAR__temp_val__9725_9798,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false),speclj.components.new_characteristic.call(null,"returns nil if no diagonal win is found",((function (_STAR_parent_description_STAR__orig_val__9724_9797,_STAR_parent_description_STAR__temp_val__9725_9798,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto__ = null;
var actual__9359__auto__ = tic_tac_toe.win_checker.get_diagonal_winner.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(2),(2),(2),(2),(1)], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9724_9797,_STAR_parent_description_STAR__temp_val__9725_9798,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false),speclj.components.new_characteristic.call(null,"returns symbol of winner if a winner is found",((function (_STAR_parent_description_STAR__orig_val__9724_9797,_STAR_parent_description_STAR__temp_val__9725_9798,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto___9809 = (1);
var actual__9359__auto___9810 = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(1),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9358__auto___9809,actual__9359__auto___9810)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___9809 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___9809)),speclj.platform.endl,"     got: ",(((actual__9359__auto___9810 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___9810))," (using =)"].join('')));
}

var expected__9358__auto___9811 = (2);
var actual__9359__auto___9812 = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2),(1),(0),(2),(1),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9358__auto___9811,actual__9359__auto___9812)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___9811 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___9811)),speclj.platform.endl,"     got: ",(((actual__9359__auto___9812 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___9812))," (using =)"].join('')));
}

var expected__9358__auto__ = (1);
var actual__9359__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(1),(0),(2),(1),(0),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9724_9797,_STAR_parent_description_STAR__temp_val__9725_9798,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false),speclj.components.new_characteristic.call(null,"returns nil if no winner found",((function (_STAR_parent_description_STAR__orig_val__9724_9797,_STAR_parent_description_STAR__temp_val__9725_9798,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto__ = null;
var actual__9359__auto__ = tic_tac_toe.win_checker.get_winner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9724_9797,_STAR_parent_description_STAR__temp_val__9725_9798,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false),speclj.components.new_characteristic.call(null,"checks if there is a winner or a tie",((function (_STAR_parent_description_STAR__orig_val__9724_9797,_STAR_parent_description_STAR__temp_val__9725_9798,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730){
return (function (){
var expected__9358__auto___9813 = "tie";
var actual__9359__auto___9814 = tic_tac_toe.win_checker.get_winner_or_tie.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(1),(2),(2),(2),(1),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9358__auto___9813,actual__9359__auto___9814)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___9813 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___9813)),speclj.platform.endl,"     got: ",(((actual__9359__auto___9814 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___9814))," (using =)"].join('')));
}

var expected__9358__auto___9815 = (1);
var actual__9359__auto___9816 = tic_tac_toe.win_checker.get_winner_or_tie.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(2),(2),(2),(1),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9358__auto___9815,actual__9359__auto___9816)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto___9815 == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto___9815)),speclj.platform.endl,"     got: ",(((actual__9359__auto___9816 == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto___9816))," (using =)"].join('')));
}

var expected__9358__auto__ = null;
var actual__9359__auto__ = tic_tac_toe.win_checker.get_winner_or_tie.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0),(1),(2),(2),(2),(1),(1)], null),new cljs.core.Keyword(null,"three-d?","three-d?",-1505114667),false], null));
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9724_9797,_STAR_parent_description_STAR__temp_val__9725_9798,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__9688_9731,_STAR_parent_description_STAR__temp_val__9689_9732,description__9225__auto___9730))
,false)],null)));
var chunk__9727_9800 = null;
var count__9728_9801 = (0);
var i__9729_9802 = (0);
while(true){
if((i__9729_9802 < count__9728_9801)){
var component__9226__auto___9817 = cljs.core._nth.call(null,chunk__9727_9800,i__9729_9802);
speclj.components.install.call(null,component__9226__auto___9817,description__9225__auto____$1);


var G__9818 = seq__9726_9799;
var G__9819 = chunk__9727_9800;
var G__9820 = count__9728_9801;
var G__9821 = (i__9729_9802 + (1));
seq__9726_9799 = G__9818;
chunk__9727_9800 = G__9819;
count__9728_9801 = G__9820;
i__9729_9802 = G__9821;
continue;
} else {
var temp__5753__auto___9822 = cljs.core.seq.call(null,seq__9726_9799);
if(temp__5753__auto___9822){
var seq__9726_9823__$1 = temp__5753__auto___9822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9726_9823__$1)){
var c__5568__auto___9824 = cljs.core.chunk_first.call(null,seq__9726_9823__$1);
var G__9825 = cljs.core.chunk_rest.call(null,seq__9726_9823__$1);
var G__9826 = c__5568__auto___9824;
var G__9827 = cljs.core.count.call(null,c__5568__auto___9824);
var G__9828 = (0);
seq__9726_9799 = G__9825;
chunk__9727_9800 = G__9826;
count__9728_9801 = G__9827;
i__9729_9802 = G__9828;
continue;
} else {
var component__9226__auto___9829 = cljs.core.first.call(null,seq__9726_9823__$1);
speclj.components.install.call(null,component__9226__auto___9829,description__9225__auto____$1);


var G__9830 = cljs.core.next.call(null,seq__9726_9823__$1);
var G__9831 = null;
var G__9832 = (0);
var G__9833 = (0);
seq__9726_9799 = G__9830;
chunk__9727_9800 = G__9831;
count__9728_9801 = G__9832;
i__9729_9802 = G__9833;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9724_9797);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto____$1);
}

return description__9225__auto____$1;
})()],null)));
var chunk__9691_9734 = null;
var count__9692_9735 = (0);
var i__9693_9736 = (0);
while(true){
if((i__9693_9736 < count__9692_9735)){
var component__9226__auto___9834 = cljs.core._nth.call(null,chunk__9691_9734,i__9693_9736);
speclj.components.install.call(null,component__9226__auto___9834,description__9225__auto___9730);


var G__9835 = seq__9690_9733;
var G__9836 = chunk__9691_9734;
var G__9837 = count__9692_9735;
var G__9838 = (i__9693_9736 + (1));
seq__9690_9733 = G__9835;
chunk__9691_9734 = G__9836;
count__9692_9735 = G__9837;
i__9693_9736 = G__9838;
continue;
} else {
var temp__5753__auto___9839 = cljs.core.seq.call(null,seq__9690_9733);
if(temp__5753__auto___9839){
var seq__9690_9840__$1 = temp__5753__auto___9839;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9690_9840__$1)){
var c__5568__auto___9841 = cljs.core.chunk_first.call(null,seq__9690_9840__$1);
var G__9842 = cljs.core.chunk_rest.call(null,seq__9690_9840__$1);
var G__9843 = c__5568__auto___9841;
var G__9844 = cljs.core.count.call(null,c__5568__auto___9841);
var G__9845 = (0);
seq__9690_9733 = G__9842;
chunk__9691_9734 = G__9843;
count__9692_9735 = G__9844;
i__9693_9736 = G__9845;
continue;
} else {
var component__9226__auto___9846 = cljs.core.first.call(null,seq__9690_9840__$1);
speclj.components.install.call(null,component__9226__auto___9846,description__9225__auto___9730);


var G__9847 = cljs.core.next.call(null,seq__9690_9840__$1);
var G__9848 = null;
var G__9849 = (0);
var G__9850 = (0);
seq__9690_9733 = G__9847;
chunk__9691_9734 = G__9848;
count__9692_9735 = G__9849;
i__9693_9736 = G__9850;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9688_9731);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto___9730);
}


//# sourceMappingURL=win_checker_spec.js.map
