// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.option_selector_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.option_selector');
goog.require('speclj.core');
var description__9225__auto___10310 = speclj.components.new_description.call(null,"Option Selector",false,"tic-tac-toe.option-selector-spec");
var _STAR_parent_description_STAR__orig_val__10292_10311 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10293_10312 = description__9225__auto___10310;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10293_10312);

try{var seq__10294_10313 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__9225__auto____$1 = speclj.components.new_description.call(null,"gives a function based on a start menu option",false,"tic-tac-toe.option-selector-spec");
var _STAR_parent_description_STAR__orig_val__10304_10317 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10305_10318 = description__9225__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10305_10318);

try{var seq__10306_10319 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"nil if invalid selection",((function (_STAR_parent_description_STAR__orig_val__10304_10317,_STAR_parent_description_STAR__temp_val__10305_10318,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10292_10311,_STAR_parent_description_STAR__temp_val__10293_10312,description__9225__auto___10310){
return (function (){
var expected__9358__auto__ = null;
var actual__9359__auto__ = tic_tac_toe.option_selector.get_option.call(null,tic_tac_toe.option_selector.menu_options,"0");
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10304_10317,_STAR_parent_description_STAR__temp_val__10305_10318,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10292_10311,_STAR_parent_description_STAR__temp_val__10293_10312,description__9225__auto___10310))
,false),speclj.components.new_characteristic.call(null,"close program if 4",((function (_STAR_parent_description_STAR__orig_val__10304_10317,_STAR_parent_description_STAR__temp_val__10305_10318,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10292_10311,_STAR_parent_description_STAR__temp_val__10293_10312,description__9225__auto___10310){
return (function (){
var expected__9358__auto__ = new cljs.core.Keyword(null,"close-program","close-program",-1579447425);
var actual__9359__auto__ = tic_tac_toe.option_selector.get_option.call(null,tic_tac_toe.option_selector.menu_options,"4");
if(cljs.core._EQ_.call(null,expected__9358__auto__,actual__9359__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__9358__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__9358__auto__)),speclj.platform.endl,"     got: ",(((actual__9359__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__9359__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10304_10317,_STAR_parent_description_STAR__temp_val__10305_10318,description__9225__auto____$1,_STAR_parent_description_STAR__orig_val__10292_10311,_STAR_parent_description_STAR__temp_val__10293_10312,description__9225__auto___10310))
,false)],null)));
var chunk__10307_10320 = null;
var count__10308_10321 = (0);
var i__10309_10322 = (0);
while(true){
if((i__10309_10322 < count__10308_10321)){
var component__9226__auto___10323 = cljs.core._nth.call(null,chunk__10307_10320,i__10309_10322);
speclj.components.install.call(null,component__9226__auto___10323,description__9225__auto____$1);


var G__10324 = seq__10306_10319;
var G__10325 = chunk__10307_10320;
var G__10326 = count__10308_10321;
var G__10327 = (i__10309_10322 + (1));
seq__10306_10319 = G__10324;
chunk__10307_10320 = G__10325;
count__10308_10321 = G__10326;
i__10309_10322 = G__10327;
continue;
} else {
var temp__5753__auto___10328 = cljs.core.seq.call(null,seq__10306_10319);
if(temp__5753__auto___10328){
var seq__10306_10329__$1 = temp__5753__auto___10328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10306_10329__$1)){
var c__5568__auto___10330 = cljs.core.chunk_first.call(null,seq__10306_10329__$1);
var G__10331 = cljs.core.chunk_rest.call(null,seq__10306_10329__$1);
var G__10332 = c__5568__auto___10330;
var G__10333 = cljs.core.count.call(null,c__5568__auto___10330);
var G__10334 = (0);
seq__10306_10319 = G__10331;
chunk__10307_10320 = G__10332;
count__10308_10321 = G__10333;
i__10309_10322 = G__10334;
continue;
} else {
var component__9226__auto___10335 = cljs.core.first.call(null,seq__10306_10329__$1);
speclj.components.install.call(null,component__9226__auto___10335,description__9225__auto____$1);


var G__10336 = cljs.core.next.call(null,seq__10306_10329__$1);
var G__10337 = null;
var G__10338 = (0);
var G__10339 = (0);
seq__10306_10319 = G__10336;
chunk__10307_10320 = G__10337;
count__10308_10321 = G__10338;
i__10309_10322 = G__10339;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10304_10317);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto____$1);
}

return description__9225__auto____$1;
})()],null)));
var chunk__10295_10314 = null;
var count__10296_10315 = (0);
var i__10297_10316 = (0);
while(true){
if((i__10297_10316 < count__10296_10315)){
var component__9226__auto___10340 = cljs.core._nth.call(null,chunk__10295_10314,i__10297_10316);
speclj.components.install.call(null,component__9226__auto___10340,description__9225__auto___10310);


var G__10341 = seq__10294_10313;
var G__10342 = chunk__10295_10314;
var G__10343 = count__10296_10315;
var G__10344 = (i__10297_10316 + (1));
seq__10294_10313 = G__10341;
chunk__10295_10314 = G__10342;
count__10296_10315 = G__10343;
i__10297_10316 = G__10344;
continue;
} else {
var temp__5753__auto___10345 = cljs.core.seq.call(null,seq__10294_10313);
if(temp__5753__auto___10345){
var seq__10294_10346__$1 = temp__5753__auto___10345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10294_10346__$1)){
var c__5568__auto___10347 = cljs.core.chunk_first.call(null,seq__10294_10346__$1);
var G__10348 = cljs.core.chunk_rest.call(null,seq__10294_10346__$1);
var G__10349 = c__5568__auto___10347;
var G__10350 = cljs.core.count.call(null,c__5568__auto___10347);
var G__10351 = (0);
seq__10294_10313 = G__10348;
chunk__10295_10314 = G__10349;
count__10296_10315 = G__10350;
i__10297_10316 = G__10351;
continue;
} else {
var component__9226__auto___10352 = cljs.core.first.call(null,seq__10294_10346__$1);
speclj.components.install.call(null,component__9226__auto___10352,description__9225__auto___10310);


var G__10353 = cljs.core.next.call(null,seq__10294_10346__$1);
var G__10354 = null;
var G__10355 = (0);
var G__10356 = (0);
seq__10294_10313 = G__10353;
chunk__10295_10314 = G__10354;
count__10296_10315 = G__10355;
i__10297_10316 = G__10356;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10292_10311);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9225__auto___10310);
}


//# sourceMappingURL=option_selector_spec.js.map
