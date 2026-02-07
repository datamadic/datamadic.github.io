// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__615__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__616__i = 0, G__616__a = new Array(arguments.length -  0);
while (G__616__i < G__616__a.length) {G__616__a[G__616__i] = arguments[G__616__i + 0]; ++G__616__i;}
  args = new cljs.core.IndexedSeq(G__616__a,0,null);
} 
return G__615__delegate.call(this,args);};
G__615.cljs$lang$maxFixedArity = 0;
G__615.cljs$lang$applyTo = (function (arglist__617){
var args = cljs.core.seq(arglist__617);
return G__615__delegate(args);
});
G__615.cljs$core$IFn$_invoke$arity$variadic = G__615__delegate;
return G__615;
})()
);

(o.error = (function() { 
var G__618__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__618 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__619__i = 0, G__619__a = new Array(arguments.length -  0);
while (G__619__i < G__619__a.length) {G__619__a[G__619__i] = arguments[G__619__i + 0]; ++G__619__i;}
  args = new cljs.core.IndexedSeq(G__619__a,0,null);
} 
return G__618__delegate.call(this,args);};
G__618.cljs$lang$maxFixedArity = 0;
G__618.cljs$lang$applyTo = (function (arglist__620){
var args = cljs.core.seq(arglist__620);
return G__618__delegate(args);
});
G__618.cljs$core$IFn$_invoke$arity$variadic = G__618__delegate;
return G__618;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
