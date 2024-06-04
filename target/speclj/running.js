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
var G__7102 = parent;
component = G__7102;
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

var G__7103 = parent;
component = G__7103;
continue;
} else {
return null;
}
break;
}
});
speclj.running.track_focused_descriptions_BANG_ = (function speclj$running$track_focused_descriptions_BANG_(descriptions){
var seq__7104 = cljs.core.seq.call(null,descriptions);
var chunk__7105 = null;
var count__7106 = (0);
var i__7107 = (0);
while(true){
if((i__7107 < count__7106)){
var component = cljs.core._nth.call(null,chunk__7105,i__7107);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__7108 = seq__7104;
var G__7109 = chunk__7105;
var G__7110 = count__7106;
var G__7111 = (i__7107 + (1));
seq__7104 = G__7108;
chunk__7105 = G__7109;
count__7106 = G__7110;
i__7107 = G__7111;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__7104);
if(temp__5753__auto__){
var seq__7104__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7104__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7104__$1);
var G__7112 = cljs.core.chunk_rest.call(null,seq__7104__$1);
var G__7113 = c__5568__auto__;
var G__7114 = cljs.core.count.call(null,c__5568__auto__);
var G__7115 = (0);
seq__7104 = G__7112;
chunk__7105 = G__7113;
count__7106 = G__7114;
i__7107 = G__7115;
continue;
} else {
var component = cljs.core.first.call(null,seq__7104__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__7116 = cljs.core.next.call(null,seq__7104__$1);
var G__7117 = null;
var G__7118 = (0);
var G__7119 = (0);
seq__7104 = G__7116;
chunk__7105 = G__7117;
count__7106 = G__7118;
i__7107 = G__7119;
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
var seq__7120 = cljs.core.seq.call(null,characteristics);
var chunk__7122 = null;
var count__7123 = (0);
var i__7124 = (0);
while(true){
if((i__7124 < count__7123)){
var characteristic = cljs.core._nth.call(null,chunk__7122,i__7124);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__7126 = seq__7120;
var G__7127 = chunk__7122;
var G__7128 = count__7123;
var G__7129 = (i__7124 + (1));
seq__7120 = G__7126;
chunk__7122 = G__7127;
count__7123 = G__7128;
i__7124 = G__7129;
continue;
} else {
var G__7130 = seq__7120;
var G__7131 = chunk__7122;
var G__7132 = count__7123;
var G__7133 = (i__7124 + (1));
seq__7120 = G__7130;
chunk__7122 = G__7131;
count__7123 = G__7132;
i__7124 = G__7133;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__7120);
if(temp__5753__auto__){
var seq__7120__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7120__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7120__$1);
var G__7134 = cljs.core.chunk_rest.call(null,seq__7120__$1);
var G__7135 = c__5568__auto__;
var G__7136 = cljs.core.count.call(null,c__5568__auto__);
var G__7137 = (0);
seq__7120 = G__7134;
chunk__7122 = G__7135;
count__7123 = G__7136;
i__7124 = G__7137;
continue;
} else {
var characteristic = cljs.core.first.call(null,seq__7120__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__7138 = cljs.core.next.call(null,seq__7120__$1);
var G__7139 = null;
var G__7140 = (0);
var G__7141 = (0);
seq__7120 = G__7138;
chunk__7122 = G__7139;
count__7123 = G__7140;
i__7124 = G__7141;
continue;
} else {
var G__7142 = cljs.core.next.call(null,seq__7120__$1);
var G__7143 = null;
var G__7144 = (0);
var G__7145 = (0);
seq__7120 = G__7142;
chunk__7122 = G__7143;
count__7123 = G__7144;
i__7124 = G__7145;
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
var seq__7146_7150 = cljs.core.seq.call(null,descriptions);
var chunk__7147_7151 = null;
var count__7148_7152 = (0);
var i__7149_7153 = (0);
while(true){
if((i__7149_7153 < count__7148_7152)){
var description_7154 = cljs.core._nth.call(null,chunk__7147_7151,i__7149_7153);
speclj.running.scan_for_focus_BANG_.call(null,description_7154);


var G__7155 = seq__7146_7150;
var G__7156 = chunk__7147_7151;
var G__7157 = count__7148_7152;
var G__7158 = (i__7149_7153 + (1));
seq__7146_7150 = G__7155;
chunk__7147_7151 = G__7156;
count__7148_7152 = G__7157;
i__7149_7153 = G__7158;
continue;
} else {
var temp__5753__auto___7159 = cljs.core.seq.call(null,seq__7146_7150);
if(temp__5753__auto___7159){
var seq__7146_7160__$1 = temp__5753__auto___7159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7146_7160__$1)){
var c__5568__auto___7161 = cljs.core.chunk_first.call(null,seq__7146_7160__$1);
var G__7162 = cljs.core.chunk_rest.call(null,seq__7146_7160__$1);
var G__7163 = c__5568__auto___7161;
var G__7164 = cljs.core.count.call(null,c__5568__auto___7161);
var G__7165 = (0);
seq__7146_7150 = G__7162;
chunk__7147_7151 = G__7163;
count__7148_7152 = G__7164;
i__7149_7153 = G__7165;
continue;
} else {
var description_7166 = cljs.core.first.call(null,seq__7146_7160__$1);
speclj.running.scan_for_focus_BANG_.call(null,description_7166);


var G__7167 = cljs.core.next.call(null,seq__7146_7160__$1);
var G__7168 = null;
var G__7169 = (0);
var G__7170 = (0);
seq__7146_7150 = G__7167;
chunk__7147_7151 = G__7168;
count__7148_7152 = G__7169;
i__7149_7153 = G__7170;
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
var seq__7171 = cljs.core.seq.call(null,components);
var chunk__7172 = null;
var count__7173 = (0);
var i__7174 = (0);
while(true){
if((i__7174 < count__7173)){
var component = cljs.core._nth.call(null,chunk__7172,i__7174);
component.body.call(null);


var G__7175 = seq__7171;
var G__7176 = chunk__7172;
var G__7177 = count__7173;
var G__7178 = (i__7174 + (1));
seq__7171 = G__7175;
chunk__7172 = G__7176;
count__7173 = G__7177;
i__7174 = G__7178;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__7171);
if(temp__5753__auto__){
var seq__7171__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7171__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7171__$1);
var G__7179 = cljs.core.chunk_rest.call(null,seq__7171__$1);
var G__7180 = c__5568__auto__;
var G__7181 = cljs.core.count.call(null,c__5568__auto__);
var G__7182 = (0);
seq__7171 = G__7179;
chunk__7172 = G__7180;
count__7173 = G__7181;
i__7174 = G__7182;
continue;
} else {
var component = cljs.core.first.call(null,seq__7171__$1);
component.body.call(null);


var G__7183 = cljs.core.next.call(null,seq__7171__$1);
var G__7184 = null;
var G__7185 = (0);
var G__7186 = (0);
seq__7171 = G__7183;
chunk__7172 = G__7184;
count__7173 = G__7185;
i__7174 = G__7186;
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
var seq__7187 = cljs.core.seq.call(null,withs);
var chunk__7188 = null;
var count__7189 = (0);
var i__7190 = (0);
while(true){
if((i__7190 < count__7189)){
var with$ = cljs.core._nth.call(null,chunk__7188,i__7190);
speclj.components.reset_with.call(null,with$);


var G__7191 = seq__7187;
var G__7192 = chunk__7188;
var G__7193 = count__7189;
var G__7194 = (i__7190 + (1));
seq__7187 = G__7191;
chunk__7188 = G__7192;
count__7189 = G__7193;
i__7190 = G__7194;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__7187);
if(temp__5753__auto__){
var seq__7187__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7187__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7187__$1);
var G__7195 = cljs.core.chunk_rest.call(null,seq__7187__$1);
var G__7196 = c__5568__auto__;
var G__7197 = cljs.core.count.call(null,c__5568__auto__);
var G__7198 = (0);
seq__7187 = G__7195;
chunk__7188 = G__7196;
count__7189 = G__7197;
i__7190 = G__7198;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__7187__$1);
speclj.components.reset_with.call(null,with$);


var G__7199 = cljs.core.next.call(null,seq__7187__$1);
var G__7200 = null;
var G__7201 = (0);
var G__7202 = (0);
seq__7187 = G__7199;
chunk__7188 = G__7200;
count__7189 = G__7201;
i__7190 = G__7202;
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
var G__7203 = cljs.core.deref.call(null,description__$1.parent);
var G__7204 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__7203;
components = G__7204;
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
var befores = speclj.running.collect_components.call(null,(function (p1__7205_SHARP_){
return cljs.core.deref.call(null,p1__7205_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__7206_SHARP_){
return cljs.core.deref.call(null,p1__7206_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__7207_SHARP_){
return cljs.core.deref.call(null,p1__7207_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__7208_SHARP_){
return p1__7208_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__7209_SHARP_){
return cljs.core.deref.call(null,p1__7209_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e7210){var e = e7210;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__5523__auto__ = (function speclj$running$do_characteristics_$_iter__7211(s__7212){
return (new cljs.core.LazySeq(null,(function (){
var s__7212__$1 = s__7212;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__7212__$1);
if(temp__5753__auto__){
var s__7212__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7212__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__7212__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__7214 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__7213 = (0);
while(true){
if((i__7213 < size__5522__auto__)){
var characteristic = cljs.core._nth.call(null,c__5521__auto__,i__7213);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
cljs.core.chunk_append.call(null,b__7214,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__7215 = (i__7213 + (1));
i__7213 = G__7215;
continue;
} else {
var G__7216 = (i__7213 + (1));
i__7213 = G__7216;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7214),speclj$running$do_characteristics_$_iter__7211.call(null,cljs.core.chunk_rest.call(null,s__7212__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7214),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__7212__$2);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__7211.call(null,cljs.core.rest.call(null,s__7212__$2)));
} else {
var G__7217 = cljs.core.rest.call(null,s__7212__$2);
s__7212__$1 = G__7217;
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
var G__7218 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,children),reporters));
var G__7219 = cljs.core.rest.call(null,children);
results__$1 = G__7218;
children = G__7219;
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
var var_names = cljs.core.map.call(null,(function (p1__7222_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__7222_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__7223_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__7223_SHARP_.unique_name)].join('');
}),withs);
var seq__7224_7256 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__7225_7257 = null;
var count__7226_7258 = (0);
var i__7227_7259 = (0);
while(true){
if((i__7227_7259 < count__7226_7258)){
var vec__7234_7260 = cljs.core._nth.call(null,chunk__7225_7257,i__7227_7259);
var n_7261 = cljs.core.nth.call(null,vec__7234_7260,(0),null);
var un_7262 = cljs.core.nth.call(null,vec__7234_7260,(1),null);
var code_7263 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_7261)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_7262),";"].join('');
eval(code_7263);


var G__7264 = seq__7224_7256;
var G__7265 = chunk__7225_7257;
var G__7266 = count__7226_7258;
var G__7267 = (i__7227_7259 + (1));
seq__7224_7256 = G__7264;
chunk__7225_7257 = G__7265;
count__7226_7258 = G__7266;
i__7227_7259 = G__7267;
continue;
} else {
var temp__5753__auto___7268 = cljs.core.seq.call(null,seq__7224_7256);
if(temp__5753__auto___7268){
var seq__7224_7269__$1 = temp__5753__auto___7268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7224_7269__$1)){
var c__5568__auto___7270 = cljs.core.chunk_first.call(null,seq__7224_7269__$1);
var G__7271 = cljs.core.chunk_rest.call(null,seq__7224_7269__$1);
var G__7272 = c__5568__auto___7270;
var G__7273 = cljs.core.count.call(null,c__5568__auto___7270);
var G__7274 = (0);
seq__7224_7256 = G__7271;
chunk__7225_7257 = G__7272;
count__7226_7258 = G__7273;
i__7227_7259 = G__7274;
continue;
} else {
var vec__7237_7275 = cljs.core.first.call(null,seq__7224_7269__$1);
var n_7276 = cljs.core.nth.call(null,vec__7237_7275,(0),null);
var un_7277 = cljs.core.nth.call(null,vec__7237_7275,(1),null);
var code_7278 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_7276)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_7277),";"].join('');
eval(code_7278);


var G__7279 = cljs.core.next.call(null,seq__7224_7269__$1);
var G__7280 = null;
var G__7281 = (0);
var G__7282 = (0);
seq__7224_7256 = G__7279;
chunk__7225_7257 = G__7280;
count__7226_7258 = G__7281;
i__7227_7259 = G__7282;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__7240_7283 = cljs.core.seq.call(null,var_names);
var chunk__7241_7284 = null;
var count__7242_7285 = (0);
var i__7243_7286 = (0);
while(true){
if((i__7243_7286 < count__7242_7285)){
var vec__7250_7287 = cljs.core._nth.call(null,chunk__7241_7284,i__7243_7286);
var n_7288 = cljs.core.nth.call(null,vec__7250_7287,(0),null);
var code_7289 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_7288)," = null;"].join('');
eval(code_7289);


var G__7290 = seq__7240_7283;
var G__7291 = chunk__7241_7284;
var G__7292 = count__7242_7285;
var G__7293 = (i__7243_7286 + (1));
seq__7240_7283 = G__7290;
chunk__7241_7284 = G__7291;
count__7242_7285 = G__7292;
i__7243_7286 = G__7293;
continue;
} else {
var temp__5753__auto___7294 = cljs.core.seq.call(null,seq__7240_7283);
if(temp__5753__auto___7294){
var seq__7240_7295__$1 = temp__5753__auto___7294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7240_7295__$1)){
var c__5568__auto___7296 = cljs.core.chunk_first.call(null,seq__7240_7295__$1);
var G__7297 = cljs.core.chunk_rest.call(null,seq__7240_7295__$1);
var G__7298 = c__5568__auto___7296;
var G__7299 = cljs.core.count.call(null,c__5568__auto___7296);
var G__7300 = (0);
seq__7240_7283 = G__7297;
chunk__7241_7284 = G__7298;
count__7242_7285 = G__7299;
i__7243_7286 = G__7300;
continue;
} else {
var vec__7253_7301 = cljs.core.first.call(null,seq__7240_7295__$1);
var n_7302 = cljs.core.nth.call(null,vec__7253_7301,(0),null);
var code_7303 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_7302)," = null;"].join('');
eval(code_7303);


var G__7304 = cljs.core.next.call(null,seq__7240_7295__$1);
var G__7305 = null;
var G__7306 = (0);
var G__7307 = (0);
seq__7240_7283 = G__7304;
chunk__7241_7284 = G__7305;
count__7242_7285 = G__7306;
i__7243_7286 = G__7307;
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
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__7308_SHARP_){
return p1__7308_SHARP_.body;
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

var speclj$running$Runner$run_directories$dyn_7309 = (function (this$,directories,reporters){
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
return speclj$running$Runner$run_directories$dyn_7309.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_7310 = (function (this$,description){
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
return speclj$running$Runner$submit_description$dyn_7310.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_7311 = (function (this$,description,reporters){
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
return speclj$running$Runner$run_description$dyn_7311.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_7312 = (function (this$,reporters){
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
return speclj$running$Runner$run_and_report$dyn_7312.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map
