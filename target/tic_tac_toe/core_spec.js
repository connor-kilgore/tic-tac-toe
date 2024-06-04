// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.core_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.main');
var description__7511__auto___22592 = speclj.components.new_description.call(null,"Core",false,"tic-tac-toe.core-spec");
var _STAR_parent_description_STAR__orig_val__22586_22593 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22587_22594 = description__7511__auto___22592;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22587_22594);

try{var seq__22588_22595 = cljs.core.seq.call(null,cljs.core.PersistentVector.EMPTY);
var chunk__22589_22596 = null;
var count__22590_22597 = (0);
var i__22591_22598 = (0);
while(true){
if((i__22591_22598 < count__22590_22597)){
var component__7512__auto___22599 = cljs.core._nth.call(null,chunk__22589_22596,i__22591_22598);
speclj.components.install.call(null,component__7512__auto___22599,description__7511__auto___22592);


var G__22600 = seq__22588_22595;
var G__22601 = chunk__22589_22596;
var G__22602 = count__22590_22597;
var G__22603 = (i__22591_22598 + (1));
seq__22588_22595 = G__22600;
chunk__22589_22596 = G__22601;
count__22590_22597 = G__22602;
i__22591_22598 = G__22603;
continue;
} else {
var temp__5753__auto___22604 = cljs.core.seq.call(null,seq__22588_22595);
if(temp__5753__auto___22604){
var seq__22588_22605__$1 = temp__5753__auto___22604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22588_22605__$1)){
var c__5568__auto___22606 = cljs.core.chunk_first.call(null,seq__22588_22605__$1);
var G__22607 = cljs.core.chunk_rest.call(null,seq__22588_22605__$1);
var G__22608 = c__5568__auto___22606;
var G__22609 = cljs.core.count.call(null,c__5568__auto___22606);
var G__22610 = (0);
seq__22588_22595 = G__22607;
chunk__22589_22596 = G__22608;
count__22590_22597 = G__22609;
i__22591_22598 = G__22610;
continue;
} else {
var component__7512__auto___22611 = cljs.core.first.call(null,seq__22588_22605__$1);
speclj.components.install.call(null,component__7512__auto___22611,description__7511__auto___22592);


var G__22612 = cljs.core.next.call(null,seq__22588_22605__$1);
var G__22613 = null;
var G__22614 = (0);
var G__22615 = (0);
seq__22588_22595 = G__22612;
chunk__22589_22596 = G__22613;
count__22590_22597 = G__22614;
i__22591_22598 = G__22615;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22586_22593);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7511__auto___22592);
}


//# sourceMappingURL=core_spec.js.map
