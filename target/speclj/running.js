// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('speclj.running');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.tags');
speclj.running.focusable_QMARK_ = (function speclj$running$focusable_QMARK_(component){
return (((!((component == null)))) && (((speclj.components.is_description_QMARK_.call(null,component)) || (speclj.components.is_characteristic_QMARK_.call(null,component)))));
});
speclj.running.focused_QMARK_ = (function speclj$running$focused_QMARK_(component){
return cljs.core.deref.call(null,component.is_focused_QMARK_);
});
speclj.running.has_focus_QMARK_ = (function speclj$running$has_focus_QMARK_(component){
var and__5043__auto__ = speclj.components.is_description_QMARK_.call(null,component);
if(and__5043__auto__){
return cljs.core.deref.call(null,component.has_focus_QMARK_);
} else {
return and__5043__auto__;
}
});
speclj.running.focus_mode_QMARK_ = (function speclj$running$focus_mode_QMARK_(component){
while(true){
var or__5045__auto__ = speclj.running.focused_QMARK_.call(null,component);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = speclj.running.has_focus_QMARK_.call(null,component);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var temp__5753__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__7129 = parent;
component = G__7129;
continue;
} else {
return null;
}
}
}
break;
}
});
speclj.running.can_run_QMARK_ = (function speclj$running$can_run_QMARK_(component){
var or__5045__auto__ = speclj.running.focused_QMARK_.call(null,component);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = speclj.running.has_focus_QMARK_.call(null,component);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.not.call(null,speclj.running.focus_mode_QMARK_.call(null,component));
}
}
});
speclj.running.all_children = (function speclj$running$all_children(component){
if(speclj.components.is_description_QMARK_.call(null,component)){
return cljs.core.concat.call(null,cljs.core.deref.call(null,component.characteristics),cljs.core.deref.call(null,component.children));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.focus_BANG_ = (function speclj$running$focus_BANG_(component){
return cljs.core.reset_BANG_.call(null,component.is_focused_QMARK_,true);
});
speclj.running.focus_characteristics_BANG_ = (function speclj$running$focus_characteristics_BANG_(component){
speclj.running.focus_BANG_.call(null,component);

return cljs.core.doall.call(null,cljs.core.map.call(null,speclj.running.focus_BANG_,cljs.core.deref.call(null,component.characteristics)));
});
speclj.running.focus_children_BANG_ = (function speclj$running$focus_children_BANG_(component){
speclj.running.focus_BANG_.call(null,component);

return cljs.core.doall.call(null,cljs.core.map.call(null,speclj.running.focus_children_BANG_,cljs.core.deref.call(null,component.children)));
});
speclj.running.enable_focus_mode_BANG_ = (function speclj$running$enable_focus_mode_BANG_(component){
while(true){
var temp__5753__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
cljs.core.reset_BANG_.call(null,parent.has_focus_QMARK_,true);

var G__7130 = parent;
component = G__7130;
continue;
} else {
return null;
}
break;
}
});
speclj.running.track_focused_descriptions_BANG_ = (function speclj$running$track_focused_descriptions_BANG_(descriptions){
var seq__7131 = cljs.core.seq.call(null,descriptions);
var chunk__7132 = null;
var count__7133 = (0);
var i__7134 = (0);
while(true){
if((i__7134 < count__7133)){
var component = cljs.core._nth.call(null,chunk__7132,i__7134);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__7135 = seq__7131;
var G__7136 = chunk__7132;
var G__7137 = count__7133;
var G__7138 = (i__7134 + (1));
seq__7131 = G__7135;
chunk__7132 = G__7136;
count__7133 = G__7137;
i__7134 = G__7138;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__7131);
if(temp__5753__auto__){
var seq__7131__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7131__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7131__$1);
var G__7139 = cljs.core.chunk_rest.call(null,seq__7131__$1);
var G__7140 = c__5568__auto__;
var G__7141 = cljs.core.count.call(null,c__5568__auto__);
var G__7142 = (0);
seq__7131 = G__7139;
chunk__7132 = G__7140;
count__7133 = G__7141;
i__7134 = G__7142;
continue;
} else {
var component = cljs.core.first.call(null,seq__7131__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__7143 = cljs.core.next.call(null,seq__7131__$1);
var G__7144 = null;
var G__7145 = (0);
var G__7146 = (0);
seq__7131 = G__7143;
chunk__7132 = G__7144;
count__7133 = G__7145;
i__7134 = G__7146;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.track_focused_characteristics_BANG_ = (function speclj$running$track_focused_characteristics_BANG_(characteristics){
var seq__7147 = cljs.core.seq.call(null,characteristics);
var chunk__7149 = null;
var count__7150 = (0);
var i__7151 = (0);
while(true){
if((i__7151 < count__7150)){
var characteristic = cljs.core._nth.call(null,chunk__7149,i__7151);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__7153 = seq__7147;
var G__7154 = chunk__7149;
var G__7155 = count__7150;
var G__7156 = (i__7151 + (1));
seq__7147 = G__7153;
chunk__7149 = G__7154;
count__7150 = G__7155;
i__7151 = G__7156;
continue;
} else {
var G__7157 = seq__7147;
var G__7158 = chunk__7149;
var G__7159 = count__7150;
var G__7160 = (i__7151 + (1));
seq__7147 = G__7157;
chunk__7149 = G__7158;
count__7150 = G__7159;
i__7151 = G__7160;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__7147);
if(temp__5753__auto__){
var seq__7147__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7147__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7147__$1);
var G__7161 = cljs.core.chunk_rest.call(null,seq__7147__$1);
var G__7162 = c__5568__auto__;
var G__7163 = cljs.core.count.call(null,c__5568__auto__);
var G__7164 = (0);
seq__7147 = G__7161;
chunk__7149 = G__7162;
count__7150 = G__7163;
i__7151 = G__7164;
continue;
} else {
var characteristic = cljs.core.first.call(null,seq__7147__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__7165 = cljs.core.next.call(null,seq__7147__$1);
var G__7166 = null;
var G__7167 = (0);
var G__7168 = (0);
seq__7147 = G__7165;
chunk__7149 = G__7166;
count__7150 = G__7167;
i__7151 = G__7168;
continue;
} else {
var G__7169 = cljs.core.next.call(null,seq__7147__$1);
var G__7170 = null;
var G__7171 = (0);
var G__7172 = (0);
seq__7147 = G__7169;
chunk__7149 = G__7170;
count__7150 = G__7171;
i__7151 = G__7172;
continue;
}
}
} else {
return null;
}
}
break;
}
});
speclj.running.scan_for_focus_BANG_ = (function speclj$running$scan_for_focus_BANG_(description){
var all = cljs.core.tree_seq.call(null,cljs.core.some_QMARK_,speclj.running.all_children,description);
speclj.running.track_focused_descriptions_BANG_.call(null,cljs.core.filter.call(null,speclj.components.is_description_QMARK_,all));

speclj.running.track_focused_characteristics_BANG_.call(null,cljs.core.filter.call(null,speclj.components.is_characteristic_QMARK_,all));

return description;
});
speclj.running.filter_focused = (function speclj$running$filter_focused(descriptions){
var seq__7173_7177 = cljs.core.seq.call(null,descriptions);
var chunk__7174_7178 = null;
var count__7175_7179 = (0);
var i__7176_7180 = (0);
while(true){
if((i__7176_7180 < count__7175_7179)){
var description_7181 = cljs.core._nth.call(null,chunk__7174_7178,i__7176_7180);
speclj.running.scan_for_focus_BANG_.call(null,description_7181);


var G__7182 = seq__7173_7177;
var G__7183 = chunk__7174_7178;
var G__7184 = count__7175_7179;
var G__7185 = (i__7176_7180 + (1));
seq__7173_7177 = G__7182;
chunk__7174_7178 = G__7183;
count__7175_7179 = G__7184;
i__7176_7180 = G__7185;
continue;
} else {
var temp__5753__auto___7186 = cljs.core.seq.call(null,seq__7173_7177);
if(temp__5753__auto___7186){
var seq__7173_7187__$1 = temp__5753__auto___7186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7173_7187__$1)){
var c__5568__auto___7188 = cljs.core.chunk_first.call(null,seq__7173_7187__$1);
var G__7189 = cljs.core.chunk_rest.call(null,seq__7173_7187__$1);
var G__7190 = c__5568__auto___7188;
var G__7191 = cljs.core.count.call(null,c__5568__auto___7188);
var G__7192 = (0);
seq__7173_7177 = G__7189;
chunk__7174_7178 = G__7190;
count__7175_7179 = G__7191;
i__7176_7180 = G__7192;
continue;
} else {
var description_7193 = cljs.core.first.call(null,seq__7173_7187__$1);
speclj.running.scan_for_focus_BANG_.call(null,description_7193);


var G__7194 = cljs.core.next.call(null,seq__7173_7187__$1);
var G__7195 = null;
var G__7196 = (0);
var G__7197 = (0);
seq__7173_7177 = G__7194;
chunk__7174_7178 = G__7195;
count__7175_7179 = G__7196;
i__7176_7180 = G__7197;
continue;
}
} else {
}
}
break;
}

var or__5045__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,speclj.running.focus_mode_QMARK_,descriptions));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return descriptions;
}
});
speclj.running.eval_components = (function speclj$running$eval_components(components){
var seq__7198 = cljs.core.seq.call(null,components);
var chunk__7199 = null;
var count__7200 = (0);
var i__7201 = (0);
while(true){
if((i__7201 < count__7200)){
var component = cljs.core._nth.call(null,chunk__7199,i__7201);
component.body.call(null);


var G__7202 = seq__7198;
var G__7203 = chunk__7199;
var G__7204 = count__7200;
var G__7205 = (i__7201 + (1));
seq__7198 = G__7202;
chunk__7199 = G__7203;
count__7200 = G__7204;
i__7201 = G__7205;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__7198);
if(temp__5753__auto__){
var seq__7198__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7198__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7198__$1);
var G__7206 = cljs.core.chunk_rest.call(null,seq__7198__$1);
var G__7207 = c__5568__auto__;
var G__7208 = cljs.core.count.call(null,c__5568__auto__);
var G__7209 = (0);
seq__7198 = G__7206;
chunk__7199 = G__7207;
count__7200 = G__7208;
i__7201 = G__7209;
continue;
} else {
var component = cljs.core.first.call(null,seq__7198__$1);
component.body.call(null);


var G__7210 = cljs.core.next.call(null,seq__7198__$1);
var G__7211 = null;
var G__7212 = (0);
var G__7213 = (0);
seq__7198 = G__7210;
chunk__7199 = G__7211;
count__7200 = G__7212;
i__7201 = G__7213;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.nested_fns = (function speclj$running$nested_fns(base,fns){
if(cljs.core.seq.call(null,fns)){
return cljs.core.partial.call(null,cljs.core.first.call(null,fns),speclj.running.nested_fns.call(null,base,cljs.core.rest.call(null,fns)));
} else {
return base;
}
});
speclj.running.eval_characteristic = (function speclj$running$eval_characteristic(befores,body,afters){
speclj.running.eval_components.call(null,befores);

try{return body.call(null);
}finally {speclj.running.eval_components.call(null,afters);
}});
speclj.running.reset_withs = (function speclj$running$reset_withs(withs){
var seq__7214 = cljs.core.seq.call(null,withs);
var chunk__7215 = null;
var count__7216 = (0);
var i__7217 = (0);
while(true){
if((i__7217 < count__7216)){
var with$ = cljs.core._nth.call(null,chunk__7215,i__7217);
speclj.components.reset_with.call(null,with$);


var G__7218 = seq__7214;
var G__7219 = chunk__7215;
var G__7220 = count__7216;
var G__7221 = (i__7217 + (1));
seq__7214 = G__7218;
chunk__7215 = G__7219;
count__7216 = G__7220;
i__7217 = G__7221;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__7214);
if(temp__5753__auto__){
var seq__7214__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7214__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7214__$1);
var G__7222 = cljs.core.chunk_rest.call(null,seq__7214__$1);
var G__7223 = c__5568__auto__;
var G__7224 = cljs.core.count.call(null,c__5568__auto__);
var G__7225 = (0);
seq__7214 = G__7222;
chunk__7215 = G__7223;
count__7216 = G__7224;
i__7217 = G__7225;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__7214__$1);
speclj.components.reset_with.call(null,with$);


var G__7226 = cljs.core.next.call(null,seq__7214__$1);
var G__7227 = null;
var G__7228 = (0);
var G__7229 = (0);
seq__7214 = G__7226;
chunk__7215 = G__7227;
count__7216 = G__7228;
i__7217 = G__7229;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.collect_components = (function speclj$running$collect_components(getter,description){
var description__$1 = description;
var components = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(description__$1)){
var G__7230 = cljs.core.deref.call(null,description__$1.parent);
var G__7231 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__7230;
components = G__7231;
continue;
} else {
return components;
}
break;
}
});
speclj.running.report_result = (function speclj$running$report_result(result_constructor,characteristic,start_time,reporters,failure){
var present_args = cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [characteristic,speclj.platform.secs_since.call(null,start_time),failure], null));
var result = cljs.core.apply.call(null,result_constructor,present_args);
speclj.reporting.report_run.call(null,result,reporters);

return result;
});
speclj.running.do_characteristic = (function speclj$running$do_characteristic(characteristic,reporters){
var description = cljs.core.deref.call(null,characteristic.parent);
var befores = speclj.running.collect_components.call(null,(function (p1__7232_SHARP_){
return cljs.core.deref.call(null,p1__7232_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__7233_SHARP_){
return cljs.core.deref.call(null,p1__7233_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__7234_SHARP_){
return cljs.core.deref.call(null,p1__7234_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__7235_SHARP_){
return p1__7235_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__7236_SHARP_){
return cljs.core.deref.call(null,p1__7236_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e7237){var e = e7237;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__5523__auto__ = (function speclj$running$do_characteristics_$_iter__7238(s__7239){
return (new cljs.core.LazySeq(null,(function (){
var s__7239__$1 = s__7239;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__7239__$1);
if(temp__5753__auto__){
var s__7239__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7239__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__7239__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__7241 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__7240 = (0);
while(true){
if((i__7240 < size__5522__auto__)){
var characteristic = cljs.core._nth.call(null,c__5521__auto__,i__7240);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
cljs.core.chunk_append.call(null,b__7241,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__7242 = (i__7240 + (1));
i__7240 = G__7242;
continue;
} else {
var G__7243 = (i__7240 + (1));
i__7240 = G__7243;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7241),speclj$running$do_characteristics_$_iter__7238.call(null,cljs.core.chunk_rest.call(null,s__7239__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7241),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__7239__$2);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__7238.call(null,cljs.core.rest.call(null,s__7239__$2)));
} else {
var G__7244 = cljs.core.rest.call(null,s__7239__$2);
s__7239__$1 = G__7244;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,characteristics);
})());
});
speclj.running.do_child_contexts = (function speclj$running$do_child_contexts(context,results,reporters){
var results__$1 = results;
var children = cljs.core.deref.call(null,context.children);
while(true){
if(cljs.core.seq.call(null,children)){
var G__7245 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,children),reporters));
var G__7246 = cljs.core.rest.call(null,children);
results__$1 = G__7245;
children = G__7246;
continue;
} else {
speclj.running.eval_components.call(null,cljs.core.deref.call(null,context.after_alls));

return results__$1;
}
break;
}
});
speclj.running.results_for_context = (function speclj$running$results_for_context(context,reporters){
if(cljs.core.truth_(speclj.tags.pass_tag_filter_QMARK_.call(null,speclj.tags.tags_for.call(null,context)))){
return speclj.running.do_characteristics.call(null,cljs.core.deref.call(null,context.characteristics),reporters);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.with_withs_bound = (function speclj$running$with_withs_bound(description,body){
var withs = cljs.core.concat.call(null,cljs.core.deref.call(null,description.withs),cljs.core.deref.call(null,description.with_alls));
var ns = clojure.string.replace.call(null,description.ns,"-","_");
var var_names = cljs.core.map.call(null,(function (p1__7249_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__7249_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__7250_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__7250_SHARP_.unique_name)].join('');
}),withs);
var seq__7251_7283 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__7252_7284 = null;
var count__7253_7285 = (0);
var i__7254_7286 = (0);
while(true){
if((i__7254_7286 < count__7253_7285)){
var vec__7261_7287 = cljs.core._nth.call(null,chunk__7252_7284,i__7254_7286);
var n_7288 = cljs.core.nth.call(null,vec__7261_7287,(0),null);
var un_7289 = cljs.core.nth.call(null,vec__7261_7287,(1),null);
var code_7290 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_7288)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_7289),";"].join('');
eval(code_7290);


var G__7291 = seq__7251_7283;
var G__7292 = chunk__7252_7284;
var G__7293 = count__7253_7285;
var G__7294 = (i__7254_7286 + (1));
seq__7251_7283 = G__7291;
chunk__7252_7284 = G__7292;
count__7253_7285 = G__7293;
i__7254_7286 = G__7294;
continue;
} else {
var temp__5753__auto___7295 = cljs.core.seq.call(null,seq__7251_7283);
if(temp__5753__auto___7295){
var seq__7251_7296__$1 = temp__5753__auto___7295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7251_7296__$1)){
var c__5568__auto___7297 = cljs.core.chunk_first.call(null,seq__7251_7296__$1);
var G__7298 = cljs.core.chunk_rest.call(null,seq__7251_7296__$1);
var G__7299 = c__5568__auto___7297;
var G__7300 = cljs.core.count.call(null,c__5568__auto___7297);
var G__7301 = (0);
seq__7251_7283 = G__7298;
chunk__7252_7284 = G__7299;
count__7253_7285 = G__7300;
i__7254_7286 = G__7301;
continue;
} else {
var vec__7264_7302 = cljs.core.first.call(null,seq__7251_7296__$1);
var n_7303 = cljs.core.nth.call(null,vec__7264_7302,(0),null);
var un_7304 = cljs.core.nth.call(null,vec__7264_7302,(1),null);
var code_7305 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_7303)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_7304),";"].join('');
eval(code_7305);


var G__7306 = cljs.core.next.call(null,seq__7251_7296__$1);
var G__7307 = null;
var G__7308 = (0);
var G__7309 = (0);
seq__7251_7283 = G__7306;
chunk__7252_7284 = G__7307;
count__7253_7285 = G__7308;
i__7254_7286 = G__7309;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__7267_7310 = cljs.core.seq.call(null,var_names);
var chunk__7268_7311 = null;
var count__7269_7312 = (0);
var i__7270_7313 = (0);
while(true){
if((i__7270_7313 < count__7269_7312)){
var vec__7277_7314 = cljs.core._nth.call(null,chunk__7268_7311,i__7270_7313);
var n_7315 = cljs.core.nth.call(null,vec__7277_7314,(0),null);
var code_7316 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_7315)," = null;"].join('');
eval(code_7316);


var G__7317 = seq__7267_7310;
var G__7318 = chunk__7268_7311;
var G__7319 = count__7269_7312;
var G__7320 = (i__7270_7313 + (1));
seq__7267_7310 = G__7317;
chunk__7268_7311 = G__7318;
count__7269_7312 = G__7319;
i__7270_7313 = G__7320;
continue;
} else {
var temp__5753__auto___7321 = cljs.core.seq.call(null,seq__7267_7310);
if(temp__5753__auto___7321){
var seq__7267_7322__$1 = temp__5753__auto___7321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7267_7322__$1)){
var c__5568__auto___7323 = cljs.core.chunk_first.call(null,seq__7267_7322__$1);
var G__7324 = cljs.core.chunk_rest.call(null,seq__7267_7322__$1);
var G__7325 = c__5568__auto___7323;
var G__7326 = cljs.core.count.call(null,c__5568__auto___7323);
var G__7327 = (0);
seq__7267_7310 = G__7324;
chunk__7268_7311 = G__7325;
count__7269_7312 = G__7326;
i__7270_7313 = G__7327;
continue;
} else {
var vec__7280_7328 = cljs.core.first.call(null,seq__7267_7322__$1);
var n_7329 = cljs.core.nth.call(null,vec__7280_7328,(0),null);
var code_7330 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_7329)," = null;"].join('');
eval(code_7330);


var G__7331 = cljs.core.next.call(null,seq__7267_7322__$1);
var G__7332 = null;
var G__7333 = (0);
var G__7334 = (0);
seq__7267_7310 = G__7331;
chunk__7268_7311 = G__7332;
count__7269_7312 = G__7333;
i__7270_7313 = G__7334;
continue;
}
} else {
}
}
break;
}
}});
speclj.running.nested_results_for_context = (function speclj$running$nested_results_for_context(description,reporters){
var results = speclj.running.results_for_context.call(null,description,reporters);
return speclj.running.do_child_contexts.call(null,description,results,reporters);
});
speclj.running.with_around_alls = (function speclj$running$with_around_alls(description,run_characteristics_fn){
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__7335_SHARP_){
return p1__7335_SHARP_.body;
}),cljs.core.deref.call(null,description.around_alls))).call(null);
});
speclj.running.do_description = (function speclj$running$do_description(description,reporters){
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,description))){
var tag_sets = speclj.tags.tag_sets_for.call(null,description);
if(cljs.core.truth_(cljs.core.some.call(null,speclj.tags.pass_tag_filter_QMARK_,tag_sets))){
speclj.reporting.report_description_STAR_.call(null,reporters,description);

return speclj.running.with_withs_bound.call(null,description,(function (){
speclj.running.eval_components.call(null,cljs.core.deref.call(null,description.before_alls));

try{return speclj.running.with_around_alls.call(null,description,cljs.core.partial.call(null,speclj.running.nested_results_for_context,description,reporters));
}finally {speclj.running.reset_withs.call(null,cljs.core.deref.call(null,description.with_alls));
}}));
} else {
return null;
}
} else {
return null;
}
});
speclj.running.process_compile_error = (function speclj$running$process_compile_error(runner,e){
var error_result = speclj.results.error_result.call(null,e);
cljs.core.swap_BANG_.call(null,runner.results,cljs.core.conj,error_result);

return speclj.reporting.report_run.call(null,error_result,speclj.config.active_reporters.call(null));
});

/**
 * @interface
 */
speclj.running.Runner = function(){};

var speclj$running$Runner$run_directories$dyn_7336 = (function (this$,directories,reporters){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.running.run_directories[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,directories,reporters);
} else {
var m__5392__auto__ = (speclj.running.run_directories["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,directories,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-directories",this$);
}
}
});
speclj.running.run_directories = (function speclj$running$run_directories(this$,directories,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_directories$arity$3 == null)))))){
return this$.speclj$running$Runner$run_directories$arity$3(this$,directories,reporters);
} else {
return speclj$running$Runner$run_directories$dyn_7336.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_7337 = (function (this$,description){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.running.submit_description[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,description);
} else {
var m__5392__auto__ = (speclj.running.submit_description["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.submit-description",this$);
}
}
});
speclj.running.submit_description = (function speclj$running$submit_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$submit_description$arity$2 == null)))))){
return this$.speclj$running$Runner$submit_description$arity$2(this$,description);
} else {
return speclj$running$Runner$submit_description$dyn_7337.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_7338 = (function (this$,description,reporters){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.running.run_description[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,description,reporters);
} else {
var m__5392__auto__ = (speclj.running.run_description["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,description,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-description",this$);
}
}
});
speclj.running.run_description = (function speclj$running$run_description(this$,description,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_description$arity$3 == null)))))){
return this$.speclj$running$Runner$run_description$arity$3(this$,description,reporters);
} else {
return speclj$running$Runner$run_description$dyn_7338.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_7339 = (function (this$,reporters){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (speclj.running.run_and_report[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,reporters);
} else {
var m__5392__auto__ = (speclj.running.run_and_report["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-and-report",this$);
}
}
});
speclj.running.run_and_report = (function speclj$running$run_and_report(this$,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_and_report$arity$2 == null)))))){
return this$.speclj$running$Runner$run_and_report$arity$2(this$,reporters);
} else {
return speclj$running$Runner$run_and_report$dyn_7339.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map
