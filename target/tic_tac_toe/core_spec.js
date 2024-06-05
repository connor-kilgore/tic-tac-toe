// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('tic_tac_toe.core_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.main');
var description__7669__auto___8138 = speclj.components.new_description.call(null,"Core",false,"tic-tac-toe.core-spec");
var _STAR_parent_description_STAR__orig_val__8132_8139 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8133_8140 = description__7669__auto___8138;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8133_8140);

try{var seq__8134_8141 = cljs.core.seq.call(null,cljs.core.PersistentVector.EMPTY);
var chunk__8135_8142 = null;
var count__8136_8143 = (0);
var i__8137_8144 = (0);
while(true){
if((i__8137_8144 < count__8136_8143)){
var component__7670__auto___8145 = cljs.core._nth.call(null,chunk__8135_8142,i__8137_8144);
speclj.components.install.call(null,component__7670__auto___8145,description__7669__auto___8138);


var G__8146 = seq__8134_8141;
var G__8147 = chunk__8135_8142;
var G__8148 = count__8136_8143;
var G__8149 = (i__8137_8144 + (1));
seq__8134_8141 = G__8146;
chunk__8135_8142 = G__8147;
count__8136_8143 = G__8148;
i__8137_8144 = G__8149;
continue;
} else {
var temp__5753__auto___8150 = cljs.core.seq.call(null,seq__8134_8141);
if(temp__5753__auto___8150){
var seq__8134_8151__$1 = temp__5753__auto___8150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8134_8151__$1)){
var c__5568__auto___8152 = cljs.core.chunk_first.call(null,seq__8134_8151__$1);
var G__8153 = cljs.core.chunk_rest.call(null,seq__8134_8151__$1);
var G__8154 = c__5568__auto___8152;
var G__8155 = cljs.core.count.call(null,c__5568__auto___8152);
var G__8156 = (0);
seq__8134_8141 = G__8153;
chunk__8135_8142 = G__8154;
count__8136_8143 = G__8155;
i__8137_8144 = G__8156;
continue;
} else {
var component__7670__auto___8157 = cljs.core.first.call(null,seq__8134_8151__$1);
speclj.components.install.call(null,component__7670__auto___8157,description__7669__auto___8138);


var G__8158 = cljs.core.next.call(null,seq__8134_8151__$1);
var G__8159 = null;
var G__8160 = (0);
var G__8161 = (0);
seq__8134_8141 = G__8158;
chunk__8135_8142 = G__8159;
count__8136_8143 = G__8160;
i__8137_8144 = G__8161;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8132_8139);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7669__auto___8138);
}


//# sourceMappingURL=core_spec.js.map
