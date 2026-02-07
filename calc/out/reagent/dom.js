// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.global$module$react_dom !== 'undefined') && (typeof reagent.dom.global$module$react_dom.unmountComponentAtNode !== 'undefined')){
} else {
console.warn("react-dom/unmountComponentAtNode function doesn't exist, you are likely trying to use the old DOM api with React 19. Use reagent.dom.client instead.");
}

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.global$module$react_dom !== 'undefined') && (typeof reagent.dom.global$module$react_dom.render !== 'undefined')){
} else {
console.warn("react-dom/render function doesn't exist, you are likely trying to use the old DOM api with React 19. Use reagent.dom.client instead.");
}

var _STAR_always_update_STAR__orig_val__663 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__664 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__664);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__665 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__666 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__666);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__665);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__663);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * NOTE: Usable only with React 18 or older. React 19 doesn't provide
 *   react-dom/render function.
 * 
 *   Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__668 = arguments.length;
switch (G__668) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__669 = ((cljs.core.map_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.call(null,vec__669,(0),null);
var callback = cljs.core.nth.call(null,vec__669,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__673_689 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__674_690 = null;
var count__675_691 = (0);
var i__676_692 = (0);
while(true){
if((i__676_692 < count__675_691)){
var vec__683_693 = cljs.core._nth.call(null,chunk__674_690,i__676_692);
var container_694 = cljs.core.nth.call(null,vec__683_693,(0),null);
var comp_695 = cljs.core.nth.call(null,vec__683_693,(1),null);
reagent.dom.re_render_component.call(null,comp_695,container_694);


var G__696 = seq__673_689;
var G__697 = chunk__674_690;
var G__698 = count__675_691;
var G__699 = (i__676_692 + (1));
seq__673_689 = G__696;
chunk__674_690 = G__697;
count__675_691 = G__698;
i__676_692 = G__699;
continue;
} else {
var temp__5825__auto___700 = cljs.core.seq.call(null,seq__673_689);
if(temp__5825__auto___700){
var seq__673_701__$1 = temp__5825__auto___700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__673_701__$1)){
var c__5568__auto___702 = cljs.core.chunk_first.call(null,seq__673_701__$1);
var G__703 = cljs.core.chunk_rest.call(null,seq__673_701__$1);
var G__704 = c__5568__auto___702;
var G__705 = cljs.core.count.call(null,c__5568__auto___702);
var G__706 = (0);
seq__673_689 = G__703;
chunk__674_690 = G__704;
count__675_691 = G__705;
i__676_692 = G__706;
continue;
} else {
var vec__686_707 = cljs.core.first.call(null,seq__673_701__$1);
var container_708 = cljs.core.nth.call(null,vec__686_707,(0),null);
var comp_709 = cljs.core.nth.call(null,vec__686_707,(1),null);
reagent.dom.re_render_component.call(null,comp_709,container_708);


var G__710 = cljs.core.next.call(null,seq__673_701__$1);
var G__711 = null;
var G__712 = (0);
var G__713 = (0);
seq__673_689 = G__710;
chunk__674_690 = G__711;
count__675_691 = G__712;
i__676_692 = G__713;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map
