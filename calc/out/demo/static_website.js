// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('demo.static_website');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljs.core.async');
goog.require('clojure.edn');
goog.require('cljs.math');
goog.require('clojure.string');
console.log("Hello, Github Pages!");
demo.static_website.current_page = (function demo$static_website$current_page(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"OOOOKKKKK"], null);
});
});
demo.static_website.click_count = reagent.core.atom.call(null,(0));
demo.static_website.num_correct = reagent.core.atom.call(null,(0));
demo.static_website.l = reagent.core.atom.call(null,"");
demo.static_website.o = reagent.core.atom.call(null,"Press Start!");
demo.static_website.r = reagent.core.atom.call(null,"");
demo.static_website.a = reagent.core.atom.call(null,"");
demo.static_website.ua = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
demo.static_website.correct_class = reagent.core.atom.call(null,"");
demo.static_website.base_time = reagent.core.atom.call(null,(0));
demo.static_website.seconds_elapsed = reagent.core.atom.call(null,(0));
demo.static_website.in_range_QMARK_ = (function demo$static_website$in_range_QMARK_(n){
return (((n >= (48))) && ((n <= (57))));
});
demo.static_website.op_display = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core._PLUS_," + ",cljs.core._," - ",cljs.core._SLASH_," / ",cljs.core._STAR_," * "]);
demo.static_website.q_obj = (function demo$static_website$q_obj(){
var l = cljs.core.rand_int.call(null,(30));
var r = cljs.core.rand_int.call(null,(30));
var o = cljs.core.get.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._PLUS_,cljs.core._,cljs.core._SLASH_,cljs.core._STAR_], null),cljs.core.rand_int.call(null,(4)));
var d = cljs.core.get.call(null,demo.static_website.op_display,o);
cljs.core.print.call(null,l,r,o,d);

if(cljs.core._EQ_.call(null,o,cljs.core._SLASH_)){
cljs.core.print.call(null,"the first onr ");

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"l","l",1395893423),(l * r),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"a","a",-2123407586),l,new cljs.core.Keyword(null,"o","o",-1350007228),o,new cljs.core.Keyword(null,"d","d",1972142424),d], null);
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"l","l",1395893423),l,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"o","o",-1350007228),o,new cljs.core.Keyword(null,"d","d",1972142424),d,new cljs.core.Keyword(null,"a","a",-2123407586),o.call(null,l,r)], null);
}
});
demo.static_website.reset_vals = (function demo$static_website$reset_vals(){
cljs.core.reset_BANG_.call(null,demo.static_website.correct_class,"");

cljs.core.reset_BANG_.call(null,demo.static_website.l,cljs.core.rand_int.call(null,(30)));

cljs.core.reset_BANG_.call(null,demo.static_website.r,cljs.core.rand_int.call(null,(30)));

cljs.core.reset_BANG_.call(null,demo.static_website.o," + ");

cljs.core.reset_BANG_.call(null,demo.static_website.a,(cljs.core.deref.call(null,demo.static_website.l) + cljs.core.deref.call(null,demo.static_website.r)));

return cljs.core.reset_BANG_.call(null,demo.static_website.ua,cljs.core.PersistentVector.EMPTY);
});
demo.static_website.reset_game = (function demo$static_website$reset_game(){
console.log("PUSH");

demo.static_website.reset_vals.call(null);

cljs.core.reset_BANG_.call(null,demo.static_website.base_time,Date.now());

cljs.core.reset_BANG_.call(null,demo.static_website.seconds_elapsed,(0));

return cljs.core.reset_BANG_.call(null,demo.static_website.num_correct,(0));
});
demo.static_website.set_correct = (function demo$static_website$set_correct(){
cljs.core.reset_BANG_.call(null,demo.static_website.correct_class,"glow");

var c__2121__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2122__auto__ = (function (){var switch__2098__auto__ = (function (state_2228){
var state_val_2229 = (state_2228[(1)]);
if((state_val_2229 === (1))){
var inst_2217 = cljs.core.async.timeout.call(null,(1000));
var state_2228__$1 = state_2228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2228__$1,(2),inst_2217);
} else {
if((state_val_2229 === (2))){
var inst_2219 = (state_2228[(2)]);
var inst_2220 = demo.static_website.reset_vals.call(null);
var inst_2221 = cljs.core.swap_BANG_.call(null,demo.static_website.num_correct,cljs.core.inc);
var inst_2222 = cljs.core.deref.call(null,demo.static_website.l);
var inst_2223 = cljs.core.deref.call(null,demo.static_website.r);
var inst_2224 = cljs.core.deref.call(null,demo.static_website.a);
var inst_2225 = cljs.core.deref.call(null,demo.static_website.ua);
var inst_2226 = console.log(inst_2222,inst_2223,inst_2224,inst_2225);
var state_2228__$1 = (function (){var statearr_2230 = state_2228;
(statearr_2230[(7)] = inst_2219);

(statearr_2230[(8)] = inst_2220);

(statearr_2230[(9)] = inst_2221);

return statearr_2230;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2228__$1,inst_2226);
} else {
return null;
}
}
});
return (function() {
var demo$static_website$set_correct_$_state_machine__2099__auto__ = null;
var demo$static_website$set_correct_$_state_machine__2099__auto____0 = (function (){
var statearr_2231 = [null,null,null,null,null,null,null,null,null,null];
(statearr_2231[(0)] = demo$static_website$set_correct_$_state_machine__2099__auto__);

(statearr_2231[(1)] = (1));

return statearr_2231;
});
var demo$static_website$set_correct_$_state_machine__2099__auto____1 = (function (state_2228){
while(true){
var ret_value__2100__auto__ = (function (){try{while(true){
var result__2101__auto__ = switch__2098__auto__.call(null,state_2228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2101__auto__;
}
break;
}
}catch (e2232){var ex__2102__auto__ = e2232;
var statearr_2233_2236 = state_2228;
(statearr_2233_2236[(2)] = ex__2102__auto__);


if(cljs.core.seq.call(null,(state_2228[(4)]))){
var statearr_2234_2237 = state_2228;
(statearr_2234_2237[(1)] = cljs.core.first.call(null,(state_2228[(4)])));

} else {
throw ex__2102__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2238 = state_2228;
state_2228 = G__2238;
continue;
} else {
return ret_value__2100__auto__;
}
break;
}
});
demo$static_website$set_correct_$_state_machine__2099__auto__ = function(state_2228){
switch(arguments.length){
case 0:
return demo$static_website$set_correct_$_state_machine__2099__auto____0.call(this);
case 1:
return demo$static_website$set_correct_$_state_machine__2099__auto____1.call(this,state_2228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$static_website$set_correct_$_state_machine__2099__auto__.cljs$core$IFn$_invoke$arity$0 = demo$static_website$set_correct_$_state_machine__2099__auto____0;
demo$static_website$set_correct_$_state_machine__2099__auto__.cljs$core$IFn$_invoke$arity$1 = demo$static_website$set_correct_$_state_machine__2099__auto____1;
return demo$static_website$set_correct_$_state_machine__2099__auto__;
})()
})();
var state__2123__auto__ = (function (){var statearr_2235 = f__2122__auto__.call(null);
(statearr_2235[(6)] = c__2121__auto__);

return statearr_2235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2123__auto__);
}));

return c__2121__auto__;
});
demo.static_website.add_answer_diget = (function demo$static_website$add_answer_diget(num){
if((cljs.core.deref.call(null,demo.static_website.seconds_elapsed) > (0))){
cljs.core.swap_BANG_.call(null,demo.static_website.ua,cljs.core.conj,cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));

console.log(cljs.core._EQ_.call(null,cljs.core.deref.call(null,demo.static_website.a),clojure.edn.read_string.call(null,clojure.string.join.call(null,"",cljs.core.deref.call(null,demo.static_website.ua)))));

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,demo.static_website.a),clojure.edn.read_string.call(null,clojure.string.join.call(null,"",cljs.core.deref.call(null,demo.static_website.ua))))){
return demo.static_website.set_correct.call(null);
} else {
return null;
}
} else {
return null;
}
});
demo.static_website.set_key_handler = (function demo$static_website$set_key_handler(){
console.log("waka");

return window.addEventListener("keydown",(function (p1__2239_SHARP_){
if(demo.static_website.in_range_QMARK_.call(null,p1__2239_SHARP_.keyCode)){
return demo.static_website.add_answer_diget.call(null,p1__2239_SHARP_.key);
} else {
return null;
}
}));
});
window.addEventListener("DOMContentLoaded",(function (){
return demo.static_website.set_key_handler.call(null);
}));
demo.static_website.set_key_handler.call(null);
demo.static_website.counting_component = (function demo$static_website$counting_component(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"The atom  ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"click-count"], null)," has value: ",cljs.core.deref.call(null,demo.static_website.click_count),". ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Click me!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,demo.static_website.click_count,cljs.core.inc);
})], null)], null)], null);
});
demo.static_website.lister = (function demo$static_website$lister(items){
var iter__5523__auto__ = (function demo$static_website$lister_$_iter__2240(s__2241){
return (new cljs.core.LazySeq(null,(function (){
var s__2241__$1 = s__2241;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__2241__$1);
if(temp__5825__auto__){
var s__2241__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2241__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__2241__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__2243 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__2242 = (0);
while(true){
if((i__2242 < size__5522__auto__)){
var item = cljs.core._nth.call(null,c__5521__auto__,i__2242);
cljs.core.chunk_append.call(null,b__2243,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"key",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__2242,item,c__5521__auto__,size__5522__auto__,b__2243,s__2241__$2,temp__5825__auto__){
return (function (){
return demo.static_website.add_answer_diget.call(null,item);
});})(i__2242,item,c__5521__auto__,size__5522__auto__,b__2243,s__2241__$2,temp__5825__auto__))
], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__2244 = (i__2242 + (1));
i__2242 = G__2244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2243),demo$static_website$lister_$_iter__2240.call(null,cljs.core.chunk_rest.call(null,s__2241__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2243),null);
}
} else {
var item = cljs.core.first.call(null,s__2241__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"key",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__2241__$2,temp__5825__auto__){
return (function (){
return demo.static_website.add_answer_diget.call(null,item);
});})(item,s__2241__$2,temp__5825__auto__))
], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),demo$static_website$lister_$_iter__2240.call(null,cljs.core.rest.call(null,s__2241__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,items);
});
demo.static_website.run_counter = (function demo$static_website$run_counter(){
if((cljs.core.deref.call(null,demo.static_website.base_time) > (0))){
var time_left = ((120) - cljs.math.floor.call(null,((Date.now() - cljs.core.deref.call(null,demo.static_website.base_time)) / (1000))));
if((time_left >= (0))){
return cljs.core.reset_BANG_.call(null,demo.static_website.seconds_elapsed,time_left);
} else {
cljs.core.reset_BANG_.call(null,demo.static_website.o,"Press Start!");

cljs.core.reset_BANG_.call(null,demo.static_website.l,"");

return cljs.core.reset_BANG_.call(null,demo.static_website.r,"");
}
} else {
return null;
}
});
demo.static_website.timer_component = (function demo$static_website$timer_component(){
return (function (){
setInterval((function (){
return demo.static_website.run_counter.call(null);
}),(400));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.deref.call(null,demo.static_website.seconds_elapsed)], null)], null);
});
});
demo.static_website.other = (function demo$static_website$other(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"body-container"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"key start",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return demo.static_website.reset_game.call(null);
})], null),"Start"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"stats"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"results"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"time-elapsed"], null),"Time:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.static_website.timer_component], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"results"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"correct-answers"], null),"Correct: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.deref.call(null,demo.static_website.num_correct)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"equation"], null),cljs.core.deref.call(null,demo.static_website.l),cljs.core.deref.call(null,demo.static_website.o),cljs.core.deref.call(null,demo.static_website.r)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"current-answer",new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,demo.static_website.correct_class)], null),clojure.string.join.call(null,"",cljs.core.deref.call(null,demo.static_website.ua))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"keypad"], null),demo.static_website.lister.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9),(4),(5),(6),(1),(2),(3)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"key zero",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return demo.static_website.add_answer_diget.call(null,(0));
})], null),"0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"key backspace",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,demo.static_website.ua,cljs.core.pop);
})], null),"\u232B"], null)], null)], null)], null);
});
});
demo.static_website.home_page = (function demo$static_website$home_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"body-container"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"key start",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return demo.static_website.reset_game.call(null);
})], null),"Start"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"stats"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"results"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"time-elapsed"], null),"Time:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.static_website.timer_component], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"results"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"correct-answers"], null),"Correct: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.deref.call(null,demo.static_website.num_correct)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"equation"], null),cljs.core.deref.call(null,demo.static_website.l),cljs.core.deref.call(null,demo.static_website.o),cljs.core.deref.call(null,demo.static_website.r)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"current-answer",new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,demo.static_website.correct_class)], null),clojure.string.join.call(null,"",cljs.core.deref.call(null,demo.static_website.ua))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"keypad"], null),demo.static_website.lister.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9),(4),(5),(6),(1),(2),(3)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"key zero",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return demo.static_website.add_answer_diget.call(null,(0));
})], null),"0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"key backspace",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,demo.static_website.ua,cljs.core.pop);
})], null),"\u232B"], null)], null)], null)], null);
});
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.static_website.home_page], null),document.getElementById("app"));

//# sourceMappingURL=static_website.js.map
