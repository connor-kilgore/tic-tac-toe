// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.option_selector_spec');
goog.require('cljs.core');
goog.require('tic_tac_toe.option_selector');
goog.require('speclj.core');
var description__8840__auto___10309 = speclj.components.new_description.call(null,"Option Selector",false,"tic-tac-toe.option-selector-spec");
var _STAR_parent_description_STAR__orig_val__10291_10310 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10292_10311 = description__8840__auto___10309;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10292_10311);

try{var seq__10293_10312 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__8840__auto____$1 = speclj.components.new_description.call(null,"gives a function based on a start menu option",false,"tic-tac-toe.option-selector-spec");
var _STAR_parent_description_STAR__orig_val__10303_10316 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10304_10317 = description__8840__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10304_10317);

try{var seq__10305_10318 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"nil if invalid selection",((function (_STAR_parent_description_STAR__orig_val__10303_10316,_STAR_parent_description_STAR__temp_val__10304_10317,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10291_10310,_STAR_parent_description_STAR__temp_val__10292_10311,description__8840__auto___10309){
return (function (){
var expected__8973__auto__ = null;
var actual__8974__auto__ = tic_tac_toe.option_selector.get_option.call(null,tic_tac_toe.option_selector.menu_options,"0");
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10303_10316,_STAR_parent_description_STAR__temp_val__10304_10317,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10291_10310,_STAR_parent_description_STAR__temp_val__10292_10311,description__8840__auto___10309))
,false),speclj.components.new_characteristic.call(null,"close program if 4",((function (_STAR_parent_description_STAR__orig_val__10303_10316,_STAR_parent_description_STAR__temp_val__10304_10317,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10291_10310,_STAR_parent_description_STAR__temp_val__10292_10311,description__8840__auto___10309){
return (function (){
var expected__8973__auto__ = new cljs.core.Keyword(null,"close-program","close-program",-1579447425);
var actual__8974__auto__ = tic_tac_toe.option_selector.get_option.call(null,tic_tac_toe.option_selector.menu_options,"4");
if(cljs.core._EQ_.call(null,expected__8973__auto__,actual__8974__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8973__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8973__auto__)),speclj.platform.endl,"     got: ",(((actual__8974__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8974__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10303_10316,_STAR_parent_description_STAR__temp_val__10304_10317,description__8840__auto____$1,_STAR_parent_description_STAR__orig_val__10291_10310,_STAR_parent_description_STAR__temp_val__10292_10311,description__8840__auto___10309))
,false)],null)));
var chunk__10306_10319 = null;
var count__10307_10320 = (0);
var i__10308_10321 = (0);
while(true){
if((i__10308_10321 < count__10307_10320)){
var component__8841__auto___10322 = cljs.core._nth.call(null,chunk__10306_10319,i__10308_10321);
speclj.components.install.call(null,component__8841__auto___10322,description__8840__auto____$1);


var G__10323 = seq__10305_10318;
var G__10324 = chunk__10306_10319;
var G__10325 = count__10307_10320;
var G__10326 = (i__10308_10321 + (1));
seq__10305_10318 = G__10323;
chunk__10306_10319 = G__10324;
count__10307_10320 = G__10325;
i__10308_10321 = G__10326;
continue;
} else {
var temp__5753__auto___10327 = cljs.core.seq.call(null,seq__10305_10318);
if(temp__5753__auto___10327){
var seq__10305_10328__$1 = temp__5753__auto___10327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10305_10328__$1)){
var c__5568__auto___10329 = cljs.core.chunk_first.call(null,seq__10305_10328__$1);
var G__10330 = cljs.core.chunk_rest.call(null,seq__10305_10328__$1);
var G__10331 = c__5568__auto___10329;
var G__10332 = cljs.core.count.call(null,c__5568__auto___10329);
var G__10333 = (0);
seq__10305_10318 = G__10330;
chunk__10306_10319 = G__10331;
count__10307_10320 = G__10332;
i__10308_10321 = G__10333;
continue;
} else {
var component__8841__auto___10334 = cljs.core.first.call(null,seq__10305_10328__$1);
speclj.components.install.call(null,component__8841__auto___10334,description__8840__auto____$1);


var G__10335 = cljs.core.next.call(null,seq__10305_10328__$1);
var G__10336 = null;
var G__10337 = (0);
var G__10338 = (0);
seq__10305_10318 = G__10335;
chunk__10306_10319 = G__10336;
count__10307_10320 = G__10337;
i__10308_10321 = G__10338;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10303_10316);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto____$1);
}

return description__8840__auto____$1;
})()],null)));
var chunk__10294_10313 = null;
var count__10295_10314 = (0);
var i__10296_10315 = (0);
while(true){
if((i__10296_10315 < count__10295_10314)){
var component__8841__auto___10339 = cljs.core._nth.call(null,chunk__10294_10313,i__10296_10315);
speclj.components.install.call(null,component__8841__auto___10339,description__8840__auto___10309);


var G__10340 = seq__10293_10312;
var G__10341 = chunk__10294_10313;
var G__10342 = count__10295_10314;
var G__10343 = (i__10296_10315 + (1));
seq__10293_10312 = G__10340;
chunk__10294_10313 = G__10341;
count__10295_10314 = G__10342;
i__10296_10315 = G__10343;
continue;
} else {
var temp__5753__auto___10344 = cljs.core.seq.call(null,seq__10293_10312);
if(temp__5753__auto___10344){
var seq__10293_10345__$1 = temp__5753__auto___10344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10293_10345__$1)){
var c__5568__auto___10346 = cljs.core.chunk_first.call(null,seq__10293_10345__$1);
var G__10347 = cljs.core.chunk_rest.call(null,seq__10293_10345__$1);
var G__10348 = c__5568__auto___10346;
var G__10349 = cljs.core.count.call(null,c__5568__auto___10346);
var G__10350 = (0);
seq__10293_10312 = G__10347;
chunk__10294_10313 = G__10348;
count__10295_10314 = G__10349;
i__10296_10315 = G__10350;
continue;
} else {
var component__8841__auto___10351 = cljs.core.first.call(null,seq__10293_10345__$1);
speclj.components.install.call(null,component__8841__auto___10351,description__8840__auto___10309);


var G__10352 = cljs.core.next.call(null,seq__10293_10345__$1);
var G__10353 = null;
var G__10354 = (0);
var G__10355 = (0);
seq__10293_10312 = G__10352;
chunk__10294_10313 = G__10353;
count__10295_10314 = G__10354;
i__10296_10315 = G__10355;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10291_10310);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8840__auto___10309);
}


//# sourceMappingURL=option_selector_spec.js.map
