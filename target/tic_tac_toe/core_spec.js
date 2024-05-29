// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.core_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.main');
var description__7524__auto___13943 = speclj.components.new_description.call(null,"Core",false,"tic-tac-toe.core-spec");
var _STAR_parent_description_STAR__orig_val__13937_13944 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13938_13945 = description__7524__auto___13943;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13938_13945);

try{var seq__13939_13946 = cljs.core.seq.call(null,cljs.core.PersistentVector.EMPTY);
var chunk__13940_13947 = null;
var count__13941_13948 = (0);
var i__13942_13949 = (0);
while(true){
if((i__13942_13949 < count__13941_13948)){
var component__7525__auto___13950 = cljs.core._nth.call(null,chunk__13940_13947,i__13942_13949);
speclj.components.install.call(null,component__7525__auto___13950,description__7524__auto___13943);


var G__13951 = seq__13939_13946;
var G__13952 = chunk__13940_13947;
var G__13953 = count__13941_13948;
var G__13954 = (i__13942_13949 + (1));
seq__13939_13946 = G__13951;
chunk__13940_13947 = G__13952;
count__13941_13948 = G__13953;
i__13942_13949 = G__13954;
continue;
} else {
var temp__5753__auto___13955 = cljs.core.seq.call(null,seq__13939_13946);
if(temp__5753__auto___13955){
var seq__13939_13956__$1 = temp__5753__auto___13955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13939_13956__$1)){
var c__5568__auto___13957 = cljs.core.chunk_first.call(null,seq__13939_13956__$1);
var G__13958 = cljs.core.chunk_rest.call(null,seq__13939_13956__$1);
var G__13959 = c__5568__auto___13957;
var G__13960 = cljs.core.count.call(null,c__5568__auto___13957);
var G__13961 = (0);
seq__13939_13946 = G__13958;
chunk__13940_13947 = G__13959;
count__13941_13948 = G__13960;
i__13942_13949 = G__13961;
continue;
} else {
var component__7525__auto___13962 = cljs.core.first.call(null,seq__13939_13956__$1);
speclj.components.install.call(null,component__7525__auto___13962,description__7524__auto___13943);


var G__13963 = cljs.core.next.call(null,seq__13939_13956__$1);
var G__13964 = null;
var G__13965 = (0);
var G__13966 = (0);
seq__13939_13946 = G__13963;
chunk__13940_13947 = G__13964;
count__13941_13948 = G__13965;
i__13942_13949 = G__13966;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13937_13944);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7524__auto___13943);
}


//# sourceMappingURL=core_spec.js.map
