// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__2145 = arguments.length;
switch (G__2145) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2146 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2146 = (function (f,blockable,meta2147){
this.f = f;
this.blockable = blockable;
this.meta2147 = meta2147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async2146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2148,meta2147__$1){
var self__ = this;
var _2148__$1 = this;
return (new cljs.core.async.t_cljs$core$async2146(self__.f,self__.blockable,meta2147__$1));
}));

(cljs.core.async.t_cljs$core$async2146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2148){
var self__ = this;
var _2148__$1 = this;
return self__.meta2147;
}));

(cljs.core.async.t_cljs$core$async2146.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async2146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async2146.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async2146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async2146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta2147","meta2147",344180971,null)], null);
}));

(cljs.core.async.t_cljs$core$async2146.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async2146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2146");

(cljs.core.async.t_cljs$core$async2146.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async2146");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2146.
 */
cljs.core.async.__GT_t_cljs$core$async2146 = (function cljs$core$async$__GT_t_cljs$core$async2146(f__$1,blockable__$1,meta2147){
return (new cljs.core.async.t_cljs$core$async2146(f__$1,blockable__$1,meta2147));
});

}

return (new cljs.core.async.t_cljs$core$async2146(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__2152 = arguments.length;
switch (G__2152) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__2155 = arguments.length;
switch (G__2155) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__2158 = arguments.length;
switch (G__2158) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_2160 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_2160);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_2160);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__2162 = arguments.length;
switch (G__2162) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___2164 = n;
var x_2165 = (0);
while(true){
if((x_2165 < n__5636__auto___2164)){
(a[x_2165] = x_2165);

var G__2166 = (x_2165 + (1));
x_2165 = G__2166;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2167 = (function (flag,meta2168){
this.flag = flag;
this.meta2168 = meta2168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async2167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2169,meta2168__$1){
var self__ = this;
var _2169__$1 = this;
return (new cljs.core.async.t_cljs$core$async2167(self__.flag,meta2168__$1));
}));

(cljs.core.async.t_cljs$core$async2167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2169){
var self__ = this;
var _2169__$1 = this;
return self__.meta2168;
}));

(cljs.core.async.t_cljs$core$async2167.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async2167.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async2167.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async2167.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async2167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta2168","meta2168",438877782,null)], null);
}));

(cljs.core.async.t_cljs$core$async2167.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async2167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2167");

(cljs.core.async.t_cljs$core$async2167.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async2167");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2167.
 */
cljs.core.async.__GT_t_cljs$core$async2167 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async2167(flag__$1,meta2168){
return (new cljs.core.async.t_cljs$core$async2167(flag__$1,meta2168));
});

}

return (new cljs.core.async.t_cljs$core$async2167(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2170 = (function (flag,cb,meta2171){
this.flag = flag;
this.cb = cb;
this.meta2171 = meta2171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async2170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2172,meta2171__$1){
var self__ = this;
var _2172__$1 = this;
return (new cljs.core.async.t_cljs$core$async2170(self__.flag,self__.cb,meta2171__$1));
}));

(cljs.core.async.t_cljs$core$async2170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2172){
var self__ = this;
var _2172__$1 = this;
return self__.meta2171;
}));

(cljs.core.async.t_cljs$core$async2170.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async2170.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async2170.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async2170.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async2170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta2171","meta2171",-998130172,null)], null);
}));

(cljs.core.async.t_cljs$core$async2170.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async2170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2170");

(cljs.core.async.t_cljs$core$async2170.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async2170");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2170.
 */
cljs.core.async.__GT_t_cljs$core$async2170 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async2170(flag__$1,cb__$1,meta2171){
return (new cljs.core.async.t_cljs$core$async2170(flag__$1,cb__$1,meta2171));
});

}

return (new cljs.core.async.t_cljs$core$async2170(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var ports__$1 = cljs.core.vec.call(null,ports);
var n = cljs.core.count.call(null,ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_2175 = cljs.core.nth.call(null,ports__$1,i);
if(cljs.core.vector_QMARK_.call(null,port_2175)){
if((!((port_2175.call(null,(1)) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__2176 = (i + (1));
i = G__2176;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__2173_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__2173_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__2174_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__2174_SHARP_,port], null));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__2177 = (i + (1));
i = G__2177;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5043__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2182 = arguments.length;
var i__5770__auto___2183 = (0);
while(true){
if((i__5770__auto___2183 < len__5769__auto___2182)){
args__5775__auto__.push((arguments[i__5770__auto___2183]));

var G__2184 = (i__5770__auto___2183 + (1));
i__5770__auto___2183 = G__2184;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__2180){
var map__2181 = p__2180;
var map__2181__$1 = cljs.core.__destructure_map.call(null,map__2181);
var opts = map__2181__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq2178){
var G__2179 = cljs.core.first.call(null,seq2178);
var seq2178__$1 = cljs.core.next.call(null,seq2178);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2179,seq2178__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__2186 = arguments.length;
switch (G__2186) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__2085__auto___2233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = (function (state_2210){
var state_val_2211 = (state_2210[(1)]);
if((state_val_2211 === (7))){
var inst_2206 = (state_2210[(2)]);
var state_2210__$1 = state_2210;
var statearr_2212_2234 = state_2210__$1;
(statearr_2212_2234[(2)] = inst_2206);

(statearr_2212_2234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2211 === (1))){
var state_2210__$1 = state_2210;
var statearr_2213_2235 = state_2210__$1;
(statearr_2213_2235[(2)] = null);

(statearr_2213_2235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2211 === (4))){
var inst_2189 = (state_2210[(7)]);
var inst_2189__$1 = (state_2210[(2)]);
var inst_2190 = (inst_2189__$1 == null);
var state_2210__$1 = (function (){var statearr_2214 = state_2210;
(statearr_2214[(7)] = inst_2189__$1);

return statearr_2214;
})();
if(cljs.core.truth_(inst_2190)){
var statearr_2215_2236 = state_2210__$1;
(statearr_2215_2236[(1)] = (5));

} else {
var statearr_2216_2237 = state_2210__$1;
(statearr_2216_2237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2211 === (13))){
var state_2210__$1 = state_2210;
var statearr_2217_2238 = state_2210__$1;
(statearr_2217_2238[(2)] = null);

(statearr_2217_2238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2211 === (6))){
var inst_2189 = (state_2210[(7)]);
var state_2210__$1 = state_2210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2210__$1,(11),to,inst_2189);
} else {
if((state_val_2211 === (3))){
var inst_2208 = (state_2210[(2)]);
var state_2210__$1 = state_2210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2210__$1,inst_2208);
} else {
if((state_val_2211 === (12))){
var state_2210__$1 = state_2210;
var statearr_2218_2239 = state_2210__$1;
(statearr_2218_2239[(2)] = null);

(statearr_2218_2239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2211 === (2))){
var state_2210__$1 = state_2210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2210__$1,(4),from);
} else {
if((state_val_2211 === (11))){
var inst_2199 = (state_2210[(2)]);
var state_2210__$1 = state_2210;
if(cljs.core.truth_(inst_2199)){
var statearr_2219_2240 = state_2210__$1;
(statearr_2219_2240[(1)] = (12));

} else {
var statearr_2220_2241 = state_2210__$1;
(statearr_2220_2241[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2211 === (9))){
var state_2210__$1 = state_2210;
var statearr_2221_2242 = state_2210__$1;
(statearr_2221_2242[(2)] = null);

(statearr_2221_2242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2211 === (5))){
var state_2210__$1 = state_2210;
if(cljs.core.truth_(close_QMARK_)){
var statearr_2222_2243 = state_2210__$1;
(statearr_2222_2243[(1)] = (8));

} else {
var statearr_2223_2244 = state_2210__$1;
(statearr_2223_2244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2211 === (14))){
var inst_2204 = (state_2210[(2)]);
var state_2210__$1 = state_2210;
var statearr_2224_2245 = state_2210__$1;
(statearr_2224_2245[(2)] = inst_2204);

(statearr_2224_2245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2211 === (10))){
var inst_2196 = (state_2210[(2)]);
var state_2210__$1 = state_2210;
var statearr_2225_2246 = state_2210__$1;
(statearr_2225_2246[(2)] = inst_2196);

(statearr_2225_2246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2211 === (8))){
var inst_2193 = cljs.core.async.close_BANG_.call(null,to);
var state_2210__$1 = state_2210;
var statearr_2226_2247 = state_2210__$1;
(statearr_2226_2247[(2)] = inst_2193);

(statearr_2226_2247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2012__auto__ = null;
var cljs$core$async$state_machine__2012__auto____0 = (function (){
var statearr_2227 = [null,null,null,null,null,null,null,null];
(statearr_2227[(0)] = cljs$core$async$state_machine__2012__auto__);

(statearr_2227[(1)] = (1));

return statearr_2227;
});
var cljs$core$async$state_machine__2012__auto____1 = (function (state_2210){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_2210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e2228){var ex__2015__auto__ = e2228;
var statearr_2229_2248 = state_2210;
(statearr_2229_2248[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_2210[(4)]))){
var statearr_2230_2249 = state_2210;
(statearr_2230_2249[(1)] = cljs.core.first.call(null,(state_2210[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2250 = state_2210;
state_2210 = G__2250;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$state_machine__2012__auto__ = function(state_2210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2012__auto____1.call(this,state_2210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2012__auto____0;
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2012__auto____1;
return cljs$core$async$state_machine__2012__auto__;
})()
})();
var state__2087__auto__ = (function (){var statearr_2231 = f__2086__auto__.call(null);
(statearr_2231[(6)] = c__2085__auto___2233);

return statearr_2231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__2251){
var vec__2252 = p__2251;
var v = cljs.core.nth.call(null,vec__2252,(0),null);
var p = cljs.core.nth.call(null,vec__2252,(1),null);
var job = vec__2252;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__2085__auto___2428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = (function (state_2259){
var state_val_2260 = (state_2259[(1)]);
if((state_val_2260 === (1))){
var state_2259__$1 = state_2259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2259__$1,(2),res,v);
} else {
if((state_val_2260 === (2))){
var inst_2256 = (state_2259[(2)]);
var inst_2257 = cljs.core.async.close_BANG_.call(null,res);
var state_2259__$1 = (function (){var statearr_2261 = state_2259;
(statearr_2261[(7)] = inst_2256);

return statearr_2261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2259__$1,inst_2257);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____0 = (function (){
var statearr_2262 = [null,null,null,null,null,null,null,null];
(statearr_2262[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__);

(statearr_2262[(1)] = (1));

return statearr_2262;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____1 = (function (state_2259){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_2259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e2263){var ex__2015__auto__ = e2263;
var statearr_2264_2429 = state_2259;
(statearr_2264_2429[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_2259[(4)]))){
var statearr_2265_2430 = state_2259;
(statearr_2265_2430[(1)] = cljs.core.first.call(null,(state_2259[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2431 = state_2259;
state_2259 = G__2431;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__ = function(state_2259){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____1.call(this,state_2259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__;
})()
})();
var state__2087__auto__ = (function (){var statearr_2266 = f__2086__auto__.call(null);
(statearr_2266[(6)] = c__2085__auto___2428);

return statearr_2266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__2267){
var vec__2268 = p__2267;
var v = cljs.core.nth.call(null,vec__2268,(0),null);
var p = cljs.core.nth.call(null,vec__2268,(1),null);
var job = vec__2268;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5636__auto___2432 = n;
var __2433 = (0);
while(true){
if((__2433 < n__5636__auto___2432)){
var G__2271_2434 = type;
var G__2271_2435__$1 = (((G__2271_2434 instanceof cljs.core.Keyword))?G__2271_2434.fqn:null);
switch (G__2271_2435__$1) {
case "compute":
var c__2085__auto___2437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__2433,c__2085__auto___2437,G__2271_2434,G__2271_2435__$1,n__5636__auto___2432,jobs,results,process__$1,async){
return (function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = ((function (__2433,c__2085__auto___2437,G__2271_2434,G__2271_2435__$1,n__5636__auto___2432,jobs,results,process__$1,async){
return (function (state_2284){
var state_val_2285 = (state_2284[(1)]);
if((state_val_2285 === (1))){
var state_2284__$1 = state_2284;
var statearr_2286_2438 = state_2284__$1;
(statearr_2286_2438[(2)] = null);

(statearr_2286_2438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2285 === (2))){
var state_2284__$1 = state_2284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2284__$1,(4),jobs);
} else {
if((state_val_2285 === (3))){
var inst_2282 = (state_2284[(2)]);
var state_2284__$1 = state_2284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2284__$1,inst_2282);
} else {
if((state_val_2285 === (4))){
var inst_2274 = (state_2284[(2)]);
var inst_2275 = process__$1.call(null,inst_2274);
var state_2284__$1 = state_2284;
if(cljs.core.truth_(inst_2275)){
var statearr_2287_2439 = state_2284__$1;
(statearr_2287_2439[(1)] = (5));

} else {
var statearr_2288_2440 = state_2284__$1;
(statearr_2288_2440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2285 === (5))){
var state_2284__$1 = state_2284;
var statearr_2289_2441 = state_2284__$1;
(statearr_2289_2441[(2)] = null);

(statearr_2289_2441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2285 === (6))){
var state_2284__$1 = state_2284;
var statearr_2290_2442 = state_2284__$1;
(statearr_2290_2442[(2)] = null);

(statearr_2290_2442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2285 === (7))){
var inst_2280 = (state_2284[(2)]);
var state_2284__$1 = state_2284;
var statearr_2291_2443 = state_2284__$1;
(statearr_2291_2443[(2)] = inst_2280);

(statearr_2291_2443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__2433,c__2085__auto___2437,G__2271_2434,G__2271_2435__$1,n__5636__auto___2432,jobs,results,process__$1,async))
;
return ((function (__2433,switch__2011__auto__,c__2085__auto___2437,G__2271_2434,G__2271_2435__$1,n__5636__auto___2432,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____0 = (function (){
var statearr_2292 = [null,null,null,null,null,null,null];
(statearr_2292[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__);

(statearr_2292[(1)] = (1));

return statearr_2292;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____1 = (function (state_2284){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_2284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e2293){var ex__2015__auto__ = e2293;
var statearr_2294_2444 = state_2284;
(statearr_2294_2444[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_2284[(4)]))){
var statearr_2295_2445 = state_2284;
(statearr_2295_2445[(1)] = cljs.core.first.call(null,(state_2284[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2446 = state_2284;
state_2284 = G__2446;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__ = function(state_2284){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____1.call(this,state_2284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__;
})()
;})(__2433,switch__2011__auto__,c__2085__auto___2437,G__2271_2434,G__2271_2435__$1,n__5636__auto___2432,jobs,results,process__$1,async))
})();
var state__2087__auto__ = (function (){var statearr_2296 = f__2086__auto__.call(null);
(statearr_2296[(6)] = c__2085__auto___2437);

return statearr_2296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
});})(__2433,c__2085__auto___2437,G__2271_2434,G__2271_2435__$1,n__5636__auto___2432,jobs,results,process__$1,async))
);


break;
case "async":
var c__2085__auto___2447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__2433,c__2085__auto___2447,G__2271_2434,G__2271_2435__$1,n__5636__auto___2432,jobs,results,process__$1,async){
return (function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = ((function (__2433,c__2085__auto___2447,G__2271_2434,G__2271_2435__$1,n__5636__auto___2432,jobs,results,process__$1,async){
return (function (state_2309){
var state_val_2310 = (state_2309[(1)]);
if((state_val_2310 === (1))){
var state_2309__$1 = state_2309;
var statearr_2311_2448 = state_2309__$1;
(statearr_2311_2448[(2)] = null);

(statearr_2311_2448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2310 === (2))){
var state_2309__$1 = state_2309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2309__$1,(4),jobs);
} else {
if((state_val_2310 === (3))){
var inst_2307 = (state_2309[(2)]);
var state_2309__$1 = state_2309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2309__$1,inst_2307);
} else {
if((state_val_2310 === (4))){
var inst_2299 = (state_2309[(2)]);
var inst_2300 = async.call(null,inst_2299);
var state_2309__$1 = state_2309;
if(cljs.core.truth_(inst_2300)){
var statearr_2312_2449 = state_2309__$1;
(statearr_2312_2449[(1)] = (5));

} else {
var statearr_2313_2450 = state_2309__$1;
(statearr_2313_2450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2310 === (5))){
var state_2309__$1 = state_2309;
var statearr_2314_2451 = state_2309__$1;
(statearr_2314_2451[(2)] = null);

(statearr_2314_2451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2310 === (6))){
var state_2309__$1 = state_2309;
var statearr_2315_2452 = state_2309__$1;
(statearr_2315_2452[(2)] = null);

(statearr_2315_2452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2310 === (7))){
var inst_2305 = (state_2309[(2)]);
var state_2309__$1 = state_2309;
var statearr_2316_2453 = state_2309__$1;
(statearr_2316_2453[(2)] = inst_2305);

(statearr_2316_2453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__2433,c__2085__auto___2447,G__2271_2434,G__2271_2435__$1,n__5636__auto___2432,jobs,results,process__$1,async))
;
return ((function (__2433,switch__2011__auto__,c__2085__auto___2447,G__2271_2434,G__2271_2435__$1,n__5636__auto___2432,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____0 = (function (){
var statearr_2317 = [null,null,null,null,null,null,null];
(statearr_2317[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__);

(statearr_2317[(1)] = (1));

return statearr_2317;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____1 = (function (state_2309){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_2309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e2318){var ex__2015__auto__ = e2318;
var statearr_2319_2454 = state_2309;
(statearr_2319_2454[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_2309[(4)]))){
var statearr_2320_2455 = state_2309;
(statearr_2320_2455[(1)] = cljs.core.first.call(null,(state_2309[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2456 = state_2309;
state_2309 = G__2456;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__ = function(state_2309){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____1.call(this,state_2309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__;
})()
;})(__2433,switch__2011__auto__,c__2085__auto___2447,G__2271_2434,G__2271_2435__$1,n__5636__auto___2432,jobs,results,process__$1,async))
})();
var state__2087__auto__ = (function (){var statearr_2321 = f__2086__auto__.call(null);
(statearr_2321[(6)] = c__2085__auto___2447);

return statearr_2321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
});})(__2433,c__2085__auto___2447,G__2271_2434,G__2271_2435__$1,n__5636__auto___2432,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2271_2435__$1)].join('')));

}

var G__2457 = (__2433 + (1));
__2433 = G__2457;
continue;
} else {
}
break;
}

var c__2085__auto___2458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = (function (state_2343){
var state_val_2344 = (state_2343[(1)]);
if((state_val_2344 === (7))){
var inst_2339 = (state_2343[(2)]);
var state_2343__$1 = state_2343;
var statearr_2345_2459 = state_2343__$1;
(statearr_2345_2459[(2)] = inst_2339);

(statearr_2345_2459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2344 === (1))){
var state_2343__$1 = state_2343;
var statearr_2346_2460 = state_2343__$1;
(statearr_2346_2460[(2)] = null);

(statearr_2346_2460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2344 === (4))){
var inst_2324 = (state_2343[(7)]);
var inst_2324__$1 = (state_2343[(2)]);
var inst_2325 = (inst_2324__$1 == null);
var state_2343__$1 = (function (){var statearr_2347 = state_2343;
(statearr_2347[(7)] = inst_2324__$1);

return statearr_2347;
})();
if(cljs.core.truth_(inst_2325)){
var statearr_2348_2461 = state_2343__$1;
(statearr_2348_2461[(1)] = (5));

} else {
var statearr_2349_2462 = state_2343__$1;
(statearr_2349_2462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2344 === (6))){
var inst_2324 = (state_2343[(7)]);
var inst_2329 = (state_2343[(8)]);
var inst_2329__$1 = cljs.core.async.chan.call(null,(1));
var inst_2330 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2331 = [inst_2324,inst_2329__$1];
var inst_2332 = (new cljs.core.PersistentVector(null,2,(5),inst_2330,inst_2331,null));
var state_2343__$1 = (function (){var statearr_2350 = state_2343;
(statearr_2350[(8)] = inst_2329__$1);

return statearr_2350;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2343__$1,(8),jobs,inst_2332);
} else {
if((state_val_2344 === (3))){
var inst_2341 = (state_2343[(2)]);
var state_2343__$1 = state_2343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2343__$1,inst_2341);
} else {
if((state_val_2344 === (2))){
var state_2343__$1 = state_2343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2343__$1,(4),from);
} else {
if((state_val_2344 === (9))){
var inst_2336 = (state_2343[(2)]);
var state_2343__$1 = (function (){var statearr_2351 = state_2343;
(statearr_2351[(9)] = inst_2336);

return statearr_2351;
})();
var statearr_2352_2463 = state_2343__$1;
(statearr_2352_2463[(2)] = null);

(statearr_2352_2463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2344 === (5))){
var inst_2327 = cljs.core.async.close_BANG_.call(null,jobs);
var state_2343__$1 = state_2343;
var statearr_2353_2464 = state_2343__$1;
(statearr_2353_2464[(2)] = inst_2327);

(statearr_2353_2464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2344 === (8))){
var inst_2329 = (state_2343[(8)]);
var inst_2334 = (state_2343[(2)]);
var state_2343__$1 = (function (){var statearr_2354 = state_2343;
(statearr_2354[(10)] = inst_2334);

return statearr_2354;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2343__$1,(9),results,inst_2329);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____0 = (function (){
var statearr_2355 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_2355[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__);

(statearr_2355[(1)] = (1));

return statearr_2355;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____1 = (function (state_2343){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_2343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e2356){var ex__2015__auto__ = e2356;
var statearr_2357_2465 = state_2343;
(statearr_2357_2465[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_2343[(4)]))){
var statearr_2358_2466 = state_2343;
(statearr_2358_2466[(1)] = cljs.core.first.call(null,(state_2343[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2467 = state_2343;
state_2343 = G__2467;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__ = function(state_2343){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____1.call(this,state_2343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__;
})()
})();
var state__2087__auto__ = (function (){var statearr_2359 = f__2086__auto__.call(null);
(statearr_2359[(6)] = c__2085__auto___2458);

return statearr_2359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
}));


var c__2085__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = (function (state_2397){
var state_val_2398 = (state_2397[(1)]);
if((state_val_2398 === (7))){
var inst_2393 = (state_2397[(2)]);
var state_2397__$1 = state_2397;
var statearr_2399_2468 = state_2397__$1;
(statearr_2399_2468[(2)] = inst_2393);

(statearr_2399_2468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2398 === (20))){
var state_2397__$1 = state_2397;
var statearr_2400_2469 = state_2397__$1;
(statearr_2400_2469[(2)] = null);

(statearr_2400_2469[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2398 === (1))){
var state_2397__$1 = state_2397;
var statearr_2401_2470 = state_2397__$1;
(statearr_2401_2470[(2)] = null);

(statearr_2401_2470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2398 === (4))){
var inst_2362 = (state_2397[(7)]);
var inst_2362__$1 = (state_2397[(2)]);
var inst_2363 = (inst_2362__$1 == null);
var state_2397__$1 = (function (){var statearr_2402 = state_2397;
(statearr_2402[(7)] = inst_2362__$1);

return statearr_2402;
})();
if(cljs.core.truth_(inst_2363)){
var statearr_2403_2471 = state_2397__$1;
(statearr_2403_2471[(1)] = (5));

} else {
var statearr_2404_2472 = state_2397__$1;
(statearr_2404_2472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2398 === (15))){
var inst_2375 = (state_2397[(8)]);
var state_2397__$1 = state_2397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2397__$1,(18),to,inst_2375);
} else {
if((state_val_2398 === (21))){
var inst_2388 = (state_2397[(2)]);
var state_2397__$1 = state_2397;
var statearr_2405_2473 = state_2397__$1;
(statearr_2405_2473[(2)] = inst_2388);

(statearr_2405_2473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2398 === (13))){
var inst_2390 = (state_2397[(2)]);
var state_2397__$1 = (function (){var statearr_2406 = state_2397;
(statearr_2406[(9)] = inst_2390);

return statearr_2406;
})();
var statearr_2407_2474 = state_2397__$1;
(statearr_2407_2474[(2)] = null);

(statearr_2407_2474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2398 === (6))){
var inst_2362 = (state_2397[(7)]);
var state_2397__$1 = state_2397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2397__$1,(11),inst_2362);
} else {
if((state_val_2398 === (17))){
var inst_2383 = (state_2397[(2)]);
var state_2397__$1 = state_2397;
if(cljs.core.truth_(inst_2383)){
var statearr_2408_2475 = state_2397__$1;
(statearr_2408_2475[(1)] = (19));

} else {
var statearr_2409_2476 = state_2397__$1;
(statearr_2409_2476[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2398 === (3))){
var inst_2395 = (state_2397[(2)]);
var state_2397__$1 = state_2397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2397__$1,inst_2395);
} else {
if((state_val_2398 === (12))){
var inst_2372 = (state_2397[(10)]);
var state_2397__$1 = state_2397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2397__$1,(14),inst_2372);
} else {
if((state_val_2398 === (2))){
var state_2397__$1 = state_2397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2397__$1,(4),results);
} else {
if((state_val_2398 === (19))){
var state_2397__$1 = state_2397;
var statearr_2410_2477 = state_2397__$1;
(statearr_2410_2477[(2)] = null);

(statearr_2410_2477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2398 === (11))){
var inst_2372 = (state_2397[(2)]);
var state_2397__$1 = (function (){var statearr_2411 = state_2397;
(statearr_2411[(10)] = inst_2372);

return statearr_2411;
})();
var statearr_2412_2478 = state_2397__$1;
(statearr_2412_2478[(2)] = null);

(statearr_2412_2478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2398 === (9))){
var state_2397__$1 = state_2397;
var statearr_2413_2479 = state_2397__$1;
(statearr_2413_2479[(2)] = null);

(statearr_2413_2479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2398 === (5))){
var state_2397__$1 = state_2397;
if(cljs.core.truth_(close_QMARK_)){
var statearr_2414_2480 = state_2397__$1;
(statearr_2414_2480[(1)] = (8));

} else {
var statearr_2415_2481 = state_2397__$1;
(statearr_2415_2481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2398 === (14))){
var inst_2375 = (state_2397[(8)]);
var inst_2377 = (state_2397[(11)]);
var inst_2375__$1 = (state_2397[(2)]);
var inst_2376 = (inst_2375__$1 == null);
var inst_2377__$1 = cljs.core.not.call(null,inst_2376);
var state_2397__$1 = (function (){var statearr_2416 = state_2397;
(statearr_2416[(8)] = inst_2375__$1);

(statearr_2416[(11)] = inst_2377__$1);

return statearr_2416;
})();
if(inst_2377__$1){
var statearr_2417_2482 = state_2397__$1;
(statearr_2417_2482[(1)] = (15));

} else {
var statearr_2418_2483 = state_2397__$1;
(statearr_2418_2483[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2398 === (16))){
var inst_2377 = (state_2397[(11)]);
var state_2397__$1 = state_2397;
var statearr_2419_2484 = state_2397__$1;
(statearr_2419_2484[(2)] = inst_2377);

(statearr_2419_2484[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2398 === (10))){
var inst_2369 = (state_2397[(2)]);
var state_2397__$1 = state_2397;
var statearr_2420_2485 = state_2397__$1;
(statearr_2420_2485[(2)] = inst_2369);

(statearr_2420_2485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2398 === (18))){
var inst_2380 = (state_2397[(2)]);
var state_2397__$1 = state_2397;
var statearr_2421_2486 = state_2397__$1;
(statearr_2421_2486[(2)] = inst_2380);

(statearr_2421_2486[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2398 === (8))){
var inst_2366 = cljs.core.async.close_BANG_.call(null,to);
var state_2397__$1 = state_2397;
var statearr_2422_2487 = state_2397__$1;
(statearr_2422_2487[(2)] = inst_2366);

(statearr_2422_2487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____0 = (function (){
var statearr_2423 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2423[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__);

(statearr_2423[(1)] = (1));

return statearr_2423;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____1 = (function (state_2397){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_2397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e2424){var ex__2015__auto__ = e2424;
var statearr_2425_2488 = state_2397;
(statearr_2425_2488[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_2397[(4)]))){
var statearr_2426_2489 = state_2397;
(statearr_2426_2489[(1)] = cljs.core.first.call(null,(state_2397[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2490 = state_2397;
state_2397 = G__2490;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__ = function(state_2397){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____1.call(this,state_2397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2012__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2012__auto__;
})()
})();
var state__2087__auto__ = (function (){var statearr_2427 = f__2086__auto__.call(null);
(statearr_2427[(6)] = c__2085__auto__);

return statearr_2427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
}));

return c__2085__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__2492 = arguments.length;
switch (G__2492) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__2495 = arguments.length;
switch (G__2495) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__2498 = arguments.length;
switch (G__2498) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__2085__auto___2548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = (function (state_2524){
var state_val_2525 = (state_2524[(1)]);
if((state_val_2525 === (7))){
var inst_2520 = (state_2524[(2)]);
var state_2524__$1 = state_2524;
var statearr_2526_2549 = state_2524__$1;
(statearr_2526_2549[(2)] = inst_2520);

(statearr_2526_2549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2525 === (1))){
var state_2524__$1 = state_2524;
var statearr_2527_2550 = state_2524__$1;
(statearr_2527_2550[(2)] = null);

(statearr_2527_2550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2525 === (4))){
var inst_2501 = (state_2524[(7)]);
var inst_2501__$1 = (state_2524[(2)]);
var inst_2502 = (inst_2501__$1 == null);
var state_2524__$1 = (function (){var statearr_2528 = state_2524;
(statearr_2528[(7)] = inst_2501__$1);

return statearr_2528;
})();
if(cljs.core.truth_(inst_2502)){
var statearr_2529_2551 = state_2524__$1;
(statearr_2529_2551[(1)] = (5));

} else {
var statearr_2530_2552 = state_2524__$1;
(statearr_2530_2552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2525 === (13))){
var state_2524__$1 = state_2524;
var statearr_2531_2553 = state_2524__$1;
(statearr_2531_2553[(2)] = null);

(statearr_2531_2553[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2525 === (6))){
var inst_2501 = (state_2524[(7)]);
var inst_2507 = p.call(null,inst_2501);
var state_2524__$1 = state_2524;
if(cljs.core.truth_(inst_2507)){
var statearr_2532_2554 = state_2524__$1;
(statearr_2532_2554[(1)] = (9));

} else {
var statearr_2533_2555 = state_2524__$1;
(statearr_2533_2555[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2525 === (3))){
var inst_2522 = (state_2524[(2)]);
var state_2524__$1 = state_2524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2524__$1,inst_2522);
} else {
if((state_val_2525 === (12))){
var state_2524__$1 = state_2524;
var statearr_2534_2556 = state_2524__$1;
(statearr_2534_2556[(2)] = null);

(statearr_2534_2556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2525 === (2))){
var state_2524__$1 = state_2524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2524__$1,(4),ch);
} else {
if((state_val_2525 === (11))){
var inst_2501 = (state_2524[(7)]);
var inst_2511 = (state_2524[(2)]);
var state_2524__$1 = state_2524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2524__$1,(8),inst_2511,inst_2501);
} else {
if((state_val_2525 === (9))){
var state_2524__$1 = state_2524;
var statearr_2535_2557 = state_2524__$1;
(statearr_2535_2557[(2)] = tc);

(statearr_2535_2557[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2525 === (5))){
var inst_2504 = cljs.core.async.close_BANG_.call(null,tc);
var inst_2505 = cljs.core.async.close_BANG_.call(null,fc);
var state_2524__$1 = (function (){var statearr_2536 = state_2524;
(statearr_2536[(8)] = inst_2504);

return statearr_2536;
})();
var statearr_2537_2558 = state_2524__$1;
(statearr_2537_2558[(2)] = inst_2505);

(statearr_2537_2558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2525 === (14))){
var inst_2518 = (state_2524[(2)]);
var state_2524__$1 = state_2524;
var statearr_2538_2559 = state_2524__$1;
(statearr_2538_2559[(2)] = inst_2518);

(statearr_2538_2559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2525 === (10))){
var state_2524__$1 = state_2524;
var statearr_2539_2560 = state_2524__$1;
(statearr_2539_2560[(2)] = fc);

(statearr_2539_2560[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2525 === (8))){
var inst_2513 = (state_2524[(2)]);
var state_2524__$1 = state_2524;
if(cljs.core.truth_(inst_2513)){
var statearr_2540_2561 = state_2524__$1;
(statearr_2540_2561[(1)] = (12));

} else {
var statearr_2541_2562 = state_2524__$1;
(statearr_2541_2562[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2012__auto__ = null;
var cljs$core$async$state_machine__2012__auto____0 = (function (){
var statearr_2542 = [null,null,null,null,null,null,null,null,null];
(statearr_2542[(0)] = cljs$core$async$state_machine__2012__auto__);

(statearr_2542[(1)] = (1));

return statearr_2542;
});
var cljs$core$async$state_machine__2012__auto____1 = (function (state_2524){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_2524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e2543){var ex__2015__auto__ = e2543;
var statearr_2544_2563 = state_2524;
(statearr_2544_2563[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_2524[(4)]))){
var statearr_2545_2564 = state_2524;
(statearr_2545_2564[(1)] = cljs.core.first.call(null,(state_2524[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2565 = state_2524;
state_2524 = G__2565;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$state_machine__2012__auto__ = function(state_2524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2012__auto____1.call(this,state_2524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2012__auto____0;
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2012__auto____1;
return cljs$core$async$state_machine__2012__auto__;
})()
})();
var state__2087__auto__ = (function (){var statearr_2546 = f__2086__auto__.call(null);
(statearr_2546[(6)] = c__2085__auto___2548);

return statearr_2546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__2085__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = (function (state_2587){
var state_val_2588 = (state_2587[(1)]);
if((state_val_2588 === (7))){
var inst_2583 = (state_2587[(2)]);
var state_2587__$1 = state_2587;
var statearr_2589_2608 = state_2587__$1;
(statearr_2589_2608[(2)] = inst_2583);

(statearr_2589_2608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2588 === (1))){
var inst_2566 = init;
var inst_2567 = inst_2566;
var state_2587__$1 = (function (){var statearr_2590 = state_2587;
(statearr_2590[(7)] = inst_2567);

return statearr_2590;
})();
var statearr_2591_2609 = state_2587__$1;
(statearr_2591_2609[(2)] = null);

(statearr_2591_2609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2588 === (4))){
var inst_2570 = (state_2587[(8)]);
var inst_2570__$1 = (state_2587[(2)]);
var inst_2571 = (inst_2570__$1 == null);
var state_2587__$1 = (function (){var statearr_2592 = state_2587;
(statearr_2592[(8)] = inst_2570__$1);

return statearr_2592;
})();
if(cljs.core.truth_(inst_2571)){
var statearr_2593_2610 = state_2587__$1;
(statearr_2593_2610[(1)] = (5));

} else {
var statearr_2594_2611 = state_2587__$1;
(statearr_2594_2611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2588 === (6))){
var inst_2567 = (state_2587[(7)]);
var inst_2570 = (state_2587[(8)]);
var inst_2574 = (state_2587[(9)]);
var inst_2574__$1 = f.call(null,inst_2567,inst_2570);
var inst_2575 = cljs.core.reduced_QMARK_.call(null,inst_2574__$1);
var state_2587__$1 = (function (){var statearr_2595 = state_2587;
(statearr_2595[(9)] = inst_2574__$1);

return statearr_2595;
})();
if(inst_2575){
var statearr_2596_2612 = state_2587__$1;
(statearr_2596_2612[(1)] = (8));

} else {
var statearr_2597_2613 = state_2587__$1;
(statearr_2597_2613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2588 === (3))){
var inst_2585 = (state_2587[(2)]);
var state_2587__$1 = state_2587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2587__$1,inst_2585);
} else {
if((state_val_2588 === (2))){
var state_2587__$1 = state_2587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2587__$1,(4),ch);
} else {
if((state_val_2588 === (9))){
var inst_2574 = (state_2587[(9)]);
var inst_2567 = inst_2574;
var state_2587__$1 = (function (){var statearr_2598 = state_2587;
(statearr_2598[(7)] = inst_2567);

return statearr_2598;
})();
var statearr_2599_2614 = state_2587__$1;
(statearr_2599_2614[(2)] = null);

(statearr_2599_2614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2588 === (5))){
var inst_2567 = (state_2587[(7)]);
var state_2587__$1 = state_2587;
var statearr_2600_2615 = state_2587__$1;
(statearr_2600_2615[(2)] = inst_2567);

(statearr_2600_2615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2588 === (10))){
var inst_2581 = (state_2587[(2)]);
var state_2587__$1 = state_2587;
var statearr_2601_2616 = state_2587__$1;
(statearr_2601_2616[(2)] = inst_2581);

(statearr_2601_2616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2588 === (8))){
var inst_2574 = (state_2587[(9)]);
var inst_2577 = cljs.core.deref.call(null,inst_2574);
var state_2587__$1 = state_2587;
var statearr_2602_2617 = state_2587__$1;
(statearr_2602_2617[(2)] = inst_2577);

(statearr_2602_2617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__2012__auto__ = null;
var cljs$core$async$reduce_$_state_machine__2012__auto____0 = (function (){
var statearr_2603 = [null,null,null,null,null,null,null,null,null,null];
(statearr_2603[(0)] = cljs$core$async$reduce_$_state_machine__2012__auto__);

(statearr_2603[(1)] = (1));

return statearr_2603;
});
var cljs$core$async$reduce_$_state_machine__2012__auto____1 = (function (state_2587){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_2587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e2604){var ex__2015__auto__ = e2604;
var statearr_2605_2618 = state_2587;
(statearr_2605_2618[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_2587[(4)]))){
var statearr_2606_2619 = state_2587;
(statearr_2606_2619[(1)] = cljs.core.first.call(null,(state_2587[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2620 = state_2587;
state_2587 = G__2620;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__2012__auto__ = function(state_2587){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__2012__auto____1.call(this,state_2587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__2012__auto____0;
cljs$core$async$reduce_$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__2012__auto____1;
return cljs$core$async$reduce_$_state_machine__2012__auto__;
})()
})();
var state__2087__auto__ = (function (){var statearr_2607 = f__2086__auto__.call(null);
(statearr_2607[(6)] = c__2085__auto__);

return statearr_2607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
}));

return c__2085__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__2085__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = (function (state_2626){
var state_val_2627 = (state_2626[(1)]);
if((state_val_2627 === (1))){
var inst_2621 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_2626__$1 = state_2626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2626__$1,(2),inst_2621);
} else {
if((state_val_2627 === (2))){
var inst_2623 = (state_2626[(2)]);
var inst_2624 = f__$1.call(null,inst_2623);
var state_2626__$1 = state_2626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2626__$1,inst_2624);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__2012__auto__ = null;
var cljs$core$async$transduce_$_state_machine__2012__auto____0 = (function (){
var statearr_2628 = [null,null,null,null,null,null,null];
(statearr_2628[(0)] = cljs$core$async$transduce_$_state_machine__2012__auto__);

(statearr_2628[(1)] = (1));

return statearr_2628;
});
var cljs$core$async$transduce_$_state_machine__2012__auto____1 = (function (state_2626){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_2626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e2629){var ex__2015__auto__ = e2629;
var statearr_2630_2633 = state_2626;
(statearr_2630_2633[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_2626[(4)]))){
var statearr_2631_2634 = state_2626;
(statearr_2631_2634[(1)] = cljs.core.first.call(null,(state_2626[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2635 = state_2626;
state_2626 = G__2635;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__2012__auto__ = function(state_2626){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__2012__auto____1.call(this,state_2626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__2012__auto____0;
cljs$core$async$transduce_$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__2012__auto____1;
return cljs$core$async$transduce_$_state_machine__2012__auto__;
})()
})();
var state__2087__auto__ = (function (){var statearr_2632 = f__2086__auto__.call(null);
(statearr_2632[(6)] = c__2085__auto__);

return statearr_2632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
}));

return c__2085__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__2637 = arguments.length;
switch (G__2637) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__2085__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = (function (state_2662){
var state_val_2663 = (state_2662[(1)]);
if((state_val_2663 === (7))){
var inst_2644 = (state_2662[(2)]);
var state_2662__$1 = state_2662;
var statearr_2664_2686 = state_2662__$1;
(statearr_2664_2686[(2)] = inst_2644);

(statearr_2664_2686[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2663 === (1))){
var inst_2638 = cljs.core.seq.call(null,coll);
var inst_2639 = inst_2638;
var state_2662__$1 = (function (){var statearr_2665 = state_2662;
(statearr_2665[(7)] = inst_2639);

return statearr_2665;
})();
var statearr_2666_2687 = state_2662__$1;
(statearr_2666_2687[(2)] = null);

(statearr_2666_2687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2663 === (4))){
var inst_2639 = (state_2662[(7)]);
var inst_2642 = cljs.core.first.call(null,inst_2639);
var state_2662__$1 = state_2662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2662__$1,(7),ch,inst_2642);
} else {
if((state_val_2663 === (13))){
var inst_2656 = (state_2662[(2)]);
var state_2662__$1 = state_2662;
var statearr_2667_2688 = state_2662__$1;
(statearr_2667_2688[(2)] = inst_2656);

(statearr_2667_2688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2663 === (6))){
var inst_2647 = (state_2662[(2)]);
var state_2662__$1 = state_2662;
if(cljs.core.truth_(inst_2647)){
var statearr_2668_2689 = state_2662__$1;
(statearr_2668_2689[(1)] = (8));

} else {
var statearr_2669_2690 = state_2662__$1;
(statearr_2669_2690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2663 === (3))){
var inst_2660 = (state_2662[(2)]);
var state_2662__$1 = state_2662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2662__$1,inst_2660);
} else {
if((state_val_2663 === (12))){
var state_2662__$1 = state_2662;
var statearr_2670_2691 = state_2662__$1;
(statearr_2670_2691[(2)] = null);

(statearr_2670_2691[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2663 === (2))){
var inst_2639 = (state_2662[(7)]);
var state_2662__$1 = state_2662;
if(cljs.core.truth_(inst_2639)){
var statearr_2671_2692 = state_2662__$1;
(statearr_2671_2692[(1)] = (4));

} else {
var statearr_2672_2693 = state_2662__$1;
(statearr_2672_2693[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2663 === (11))){
var inst_2653 = cljs.core.async.close_BANG_.call(null,ch);
var state_2662__$1 = state_2662;
var statearr_2673_2694 = state_2662__$1;
(statearr_2673_2694[(2)] = inst_2653);

(statearr_2673_2694[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2663 === (9))){
var state_2662__$1 = state_2662;
if(cljs.core.truth_(close_QMARK_)){
var statearr_2674_2695 = state_2662__$1;
(statearr_2674_2695[(1)] = (11));

} else {
var statearr_2675_2696 = state_2662__$1;
(statearr_2675_2696[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2663 === (5))){
var inst_2639 = (state_2662[(7)]);
var state_2662__$1 = state_2662;
var statearr_2676_2697 = state_2662__$1;
(statearr_2676_2697[(2)] = inst_2639);

(statearr_2676_2697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2663 === (10))){
var inst_2658 = (state_2662[(2)]);
var state_2662__$1 = state_2662;
var statearr_2677_2698 = state_2662__$1;
(statearr_2677_2698[(2)] = inst_2658);

(statearr_2677_2698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2663 === (8))){
var inst_2639 = (state_2662[(7)]);
var inst_2649 = cljs.core.next.call(null,inst_2639);
var inst_2639__$1 = inst_2649;
var state_2662__$1 = (function (){var statearr_2678 = state_2662;
(statearr_2678[(7)] = inst_2639__$1);

return statearr_2678;
})();
var statearr_2679_2699 = state_2662__$1;
(statearr_2679_2699[(2)] = null);

(statearr_2679_2699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2012__auto__ = null;
var cljs$core$async$state_machine__2012__auto____0 = (function (){
var statearr_2680 = [null,null,null,null,null,null,null,null];
(statearr_2680[(0)] = cljs$core$async$state_machine__2012__auto__);

(statearr_2680[(1)] = (1));

return statearr_2680;
});
var cljs$core$async$state_machine__2012__auto____1 = (function (state_2662){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_2662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e2681){var ex__2015__auto__ = e2681;
var statearr_2682_2700 = state_2662;
(statearr_2682_2700[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_2662[(4)]))){
var statearr_2683_2701 = state_2662;
(statearr_2683_2701[(1)] = cljs.core.first.call(null,(state_2662[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2702 = state_2662;
state_2662 = G__2702;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$state_machine__2012__auto__ = function(state_2662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2012__auto____1.call(this,state_2662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2012__auto____0;
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2012__auto____1;
return cljs$core$async$state_machine__2012__auto__;
})()
})();
var state__2087__auto__ = (function (){var statearr_2684 = f__2086__auto__.call(null);
(statearr_2684[(6)] = c__2085__auto__);

return statearr_2684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
}));

return c__2085__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__2704 = arguments.length;
switch (G__2704) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_2706 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_);
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_2706.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_2707 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_2707.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_2708 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_2708.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_2709 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m);
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_2709.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2710 = (function (ch,cs,meta2711){
this.ch = ch;
this.cs = cs;
this.meta2711 = meta2711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async2710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2712,meta2711__$1){
var self__ = this;
var _2712__$1 = this;
return (new cljs.core.async.t_cljs$core$async2710(self__.ch,self__.cs,meta2711__$1));
}));

(cljs.core.async.t_cljs$core$async2710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2712){
var self__ = this;
var _2712__$1 = this;
return self__.meta2711;
}));

(cljs.core.async.t_cljs$core$async2710.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async2710.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async2710.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async2710.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async2710.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async2710.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async2710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta2711","meta2711",2010279964,null)], null);
}));

(cljs.core.async.t_cljs$core$async2710.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async2710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2710");

(cljs.core.async.t_cljs$core$async2710.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async2710");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2710.
 */
cljs.core.async.__GT_t_cljs$core$async2710 = (function cljs$core$async$mult_$___GT_t_cljs$core$async2710(ch__$1,cs__$1,meta2711){
return (new cljs.core.async.t_cljs$core$async2710(ch__$1,cs__$1,meta2711));
});

}

return (new cljs.core.async.t_cljs$core$async2710(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__2085__auto___2929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = (function (state_2845){
var state_val_2846 = (state_2845[(1)]);
if((state_val_2846 === (7))){
var inst_2841 = (state_2845[(2)]);
var state_2845__$1 = state_2845;
var statearr_2847_2930 = state_2845__$1;
(statearr_2847_2930[(2)] = inst_2841);

(statearr_2847_2930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (20))){
var inst_2746 = (state_2845[(7)]);
var inst_2758 = cljs.core.first.call(null,inst_2746);
var inst_2759 = cljs.core.nth.call(null,inst_2758,(0),null);
var inst_2760 = cljs.core.nth.call(null,inst_2758,(1),null);
var state_2845__$1 = (function (){var statearr_2848 = state_2845;
(statearr_2848[(8)] = inst_2759);

return statearr_2848;
})();
if(cljs.core.truth_(inst_2760)){
var statearr_2849_2931 = state_2845__$1;
(statearr_2849_2931[(1)] = (22));

} else {
var statearr_2850_2932 = state_2845__$1;
(statearr_2850_2932[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (27))){
var inst_2788 = (state_2845[(9)]);
var inst_2790 = (state_2845[(10)]);
var inst_2795 = (state_2845[(11)]);
var inst_2715 = (state_2845[(12)]);
var inst_2795__$1 = cljs.core._nth.call(null,inst_2788,inst_2790);
var inst_2796 = cljs.core.async.put_BANG_.call(null,inst_2795__$1,inst_2715,done);
var state_2845__$1 = (function (){var statearr_2851 = state_2845;
(statearr_2851[(11)] = inst_2795__$1);

return statearr_2851;
})();
if(cljs.core.truth_(inst_2796)){
var statearr_2852_2933 = state_2845__$1;
(statearr_2852_2933[(1)] = (30));

} else {
var statearr_2853_2934 = state_2845__$1;
(statearr_2853_2934[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (1))){
var state_2845__$1 = state_2845;
var statearr_2854_2935 = state_2845__$1;
(statearr_2854_2935[(2)] = null);

(statearr_2854_2935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (24))){
var inst_2746 = (state_2845[(7)]);
var inst_2765 = (state_2845[(2)]);
var inst_2766 = cljs.core.next.call(null,inst_2746);
var inst_2724 = inst_2766;
var inst_2725 = null;
var inst_2726 = (0);
var inst_2727 = (0);
var state_2845__$1 = (function (){var statearr_2855 = state_2845;
(statearr_2855[(13)] = inst_2765);

(statearr_2855[(14)] = inst_2724);

(statearr_2855[(15)] = inst_2725);

(statearr_2855[(16)] = inst_2726);

(statearr_2855[(17)] = inst_2727);

return statearr_2855;
})();
var statearr_2856_2936 = state_2845__$1;
(statearr_2856_2936[(2)] = null);

(statearr_2856_2936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (39))){
var state_2845__$1 = state_2845;
var statearr_2860_2937 = state_2845__$1;
(statearr_2860_2937[(2)] = null);

(statearr_2860_2937[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (4))){
var inst_2715 = (state_2845[(12)]);
var inst_2715__$1 = (state_2845[(2)]);
var inst_2716 = (inst_2715__$1 == null);
var state_2845__$1 = (function (){var statearr_2861 = state_2845;
(statearr_2861[(12)] = inst_2715__$1);

return statearr_2861;
})();
if(cljs.core.truth_(inst_2716)){
var statearr_2862_2938 = state_2845__$1;
(statearr_2862_2938[(1)] = (5));

} else {
var statearr_2863_2939 = state_2845__$1;
(statearr_2863_2939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (15))){
var inst_2727 = (state_2845[(17)]);
var inst_2724 = (state_2845[(14)]);
var inst_2725 = (state_2845[(15)]);
var inst_2726 = (state_2845[(16)]);
var inst_2742 = (state_2845[(2)]);
var inst_2743 = (inst_2727 + (1));
var tmp2857 = inst_2724;
var tmp2858 = inst_2726;
var tmp2859 = inst_2725;
var inst_2724__$1 = tmp2857;
var inst_2725__$1 = tmp2859;
var inst_2726__$1 = tmp2858;
var inst_2727__$1 = inst_2743;
var state_2845__$1 = (function (){var statearr_2864 = state_2845;
(statearr_2864[(18)] = inst_2742);

(statearr_2864[(14)] = inst_2724__$1);

(statearr_2864[(15)] = inst_2725__$1);

(statearr_2864[(16)] = inst_2726__$1);

(statearr_2864[(17)] = inst_2727__$1);

return statearr_2864;
})();
var statearr_2865_2940 = state_2845__$1;
(statearr_2865_2940[(2)] = null);

(statearr_2865_2940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (21))){
var inst_2769 = (state_2845[(2)]);
var state_2845__$1 = state_2845;
var statearr_2869_2941 = state_2845__$1;
(statearr_2869_2941[(2)] = inst_2769);

(statearr_2869_2941[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (31))){
var inst_2795 = (state_2845[(11)]);
var inst_2799 = cljs.core.async.untap_STAR_.call(null,m,inst_2795);
var state_2845__$1 = state_2845;
var statearr_2870_2942 = state_2845__$1;
(statearr_2870_2942[(2)] = inst_2799);

(statearr_2870_2942[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (32))){
var inst_2790 = (state_2845[(10)]);
var inst_2787 = (state_2845[(19)]);
var inst_2788 = (state_2845[(9)]);
var inst_2789 = (state_2845[(20)]);
var inst_2801 = (state_2845[(2)]);
var inst_2802 = (inst_2790 + (1));
var tmp2866 = inst_2788;
var tmp2867 = inst_2789;
var tmp2868 = inst_2787;
var inst_2787__$1 = tmp2868;
var inst_2788__$1 = tmp2866;
var inst_2789__$1 = tmp2867;
var inst_2790__$1 = inst_2802;
var state_2845__$1 = (function (){var statearr_2871 = state_2845;
(statearr_2871[(21)] = inst_2801);

(statearr_2871[(19)] = inst_2787__$1);

(statearr_2871[(9)] = inst_2788__$1);

(statearr_2871[(20)] = inst_2789__$1);

(statearr_2871[(10)] = inst_2790__$1);

return statearr_2871;
})();
var statearr_2872_2943 = state_2845__$1;
(statearr_2872_2943[(2)] = null);

(statearr_2872_2943[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (40))){
var inst_2814 = (state_2845[(22)]);
var inst_2818 = cljs.core.async.untap_STAR_.call(null,m,inst_2814);
var state_2845__$1 = state_2845;
var statearr_2873_2944 = state_2845__$1;
(statearr_2873_2944[(2)] = inst_2818);

(statearr_2873_2944[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (33))){
var inst_2805 = (state_2845[(23)]);
var inst_2807 = cljs.core.chunked_seq_QMARK_.call(null,inst_2805);
var state_2845__$1 = state_2845;
if(inst_2807){
var statearr_2874_2945 = state_2845__$1;
(statearr_2874_2945[(1)] = (36));

} else {
var statearr_2875_2946 = state_2845__$1;
(statearr_2875_2946[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (13))){
var inst_2736 = (state_2845[(24)]);
var inst_2739 = cljs.core.async.close_BANG_.call(null,inst_2736);
var state_2845__$1 = state_2845;
var statearr_2876_2947 = state_2845__$1;
(statearr_2876_2947[(2)] = inst_2739);

(statearr_2876_2947[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (22))){
var inst_2759 = (state_2845[(8)]);
var inst_2762 = cljs.core.async.close_BANG_.call(null,inst_2759);
var state_2845__$1 = state_2845;
var statearr_2877_2948 = state_2845__$1;
(statearr_2877_2948[(2)] = inst_2762);

(statearr_2877_2948[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (36))){
var inst_2805 = (state_2845[(23)]);
var inst_2809 = cljs.core.chunk_first.call(null,inst_2805);
var inst_2810 = cljs.core.chunk_rest.call(null,inst_2805);
var inst_2811 = cljs.core.count.call(null,inst_2809);
var inst_2787 = inst_2810;
var inst_2788 = inst_2809;
var inst_2789 = inst_2811;
var inst_2790 = (0);
var state_2845__$1 = (function (){var statearr_2878 = state_2845;
(statearr_2878[(19)] = inst_2787);

(statearr_2878[(9)] = inst_2788);

(statearr_2878[(20)] = inst_2789);

(statearr_2878[(10)] = inst_2790);

return statearr_2878;
})();
var statearr_2879_2949 = state_2845__$1;
(statearr_2879_2949[(2)] = null);

(statearr_2879_2949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (41))){
var inst_2805 = (state_2845[(23)]);
var inst_2820 = (state_2845[(2)]);
var inst_2821 = cljs.core.next.call(null,inst_2805);
var inst_2787 = inst_2821;
var inst_2788 = null;
var inst_2789 = (0);
var inst_2790 = (0);
var state_2845__$1 = (function (){var statearr_2880 = state_2845;
(statearr_2880[(25)] = inst_2820);

(statearr_2880[(19)] = inst_2787);

(statearr_2880[(9)] = inst_2788);

(statearr_2880[(20)] = inst_2789);

(statearr_2880[(10)] = inst_2790);

return statearr_2880;
})();
var statearr_2881_2950 = state_2845__$1;
(statearr_2881_2950[(2)] = null);

(statearr_2881_2950[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (43))){
var state_2845__$1 = state_2845;
var statearr_2882_2951 = state_2845__$1;
(statearr_2882_2951[(2)] = null);

(statearr_2882_2951[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (29))){
var inst_2829 = (state_2845[(2)]);
var state_2845__$1 = state_2845;
var statearr_2883_2952 = state_2845__$1;
(statearr_2883_2952[(2)] = inst_2829);

(statearr_2883_2952[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (44))){
var inst_2838 = (state_2845[(2)]);
var state_2845__$1 = (function (){var statearr_2884 = state_2845;
(statearr_2884[(26)] = inst_2838);

return statearr_2884;
})();
var statearr_2885_2953 = state_2845__$1;
(statearr_2885_2953[(2)] = null);

(statearr_2885_2953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (6))){
var inst_2779 = (state_2845[(27)]);
var inst_2778 = cljs.core.deref.call(null,cs);
var inst_2779__$1 = cljs.core.keys.call(null,inst_2778);
var inst_2780 = cljs.core.count.call(null,inst_2779__$1);
var inst_2781 = cljs.core.reset_BANG_.call(null,dctr,inst_2780);
var inst_2786 = cljs.core.seq.call(null,inst_2779__$1);
var inst_2787 = inst_2786;
var inst_2788 = null;
var inst_2789 = (0);
var inst_2790 = (0);
var state_2845__$1 = (function (){var statearr_2886 = state_2845;
(statearr_2886[(27)] = inst_2779__$1);

(statearr_2886[(28)] = inst_2781);

(statearr_2886[(19)] = inst_2787);

(statearr_2886[(9)] = inst_2788);

(statearr_2886[(20)] = inst_2789);

(statearr_2886[(10)] = inst_2790);

return statearr_2886;
})();
var statearr_2887_2954 = state_2845__$1;
(statearr_2887_2954[(2)] = null);

(statearr_2887_2954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (28))){
var inst_2787 = (state_2845[(19)]);
var inst_2805 = (state_2845[(23)]);
var inst_2805__$1 = cljs.core.seq.call(null,inst_2787);
var state_2845__$1 = (function (){var statearr_2888 = state_2845;
(statearr_2888[(23)] = inst_2805__$1);

return statearr_2888;
})();
if(inst_2805__$1){
var statearr_2889_2955 = state_2845__$1;
(statearr_2889_2955[(1)] = (33));

} else {
var statearr_2890_2956 = state_2845__$1;
(statearr_2890_2956[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (25))){
var inst_2790 = (state_2845[(10)]);
var inst_2789 = (state_2845[(20)]);
var inst_2792 = (inst_2790 < inst_2789);
var inst_2793 = inst_2792;
var state_2845__$1 = state_2845;
if(cljs.core.truth_(inst_2793)){
var statearr_2891_2957 = state_2845__$1;
(statearr_2891_2957[(1)] = (27));

} else {
var statearr_2892_2958 = state_2845__$1;
(statearr_2892_2958[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (34))){
var state_2845__$1 = state_2845;
var statearr_2893_2959 = state_2845__$1;
(statearr_2893_2959[(2)] = null);

(statearr_2893_2959[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (17))){
var state_2845__$1 = state_2845;
var statearr_2894_2960 = state_2845__$1;
(statearr_2894_2960[(2)] = null);

(statearr_2894_2960[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (3))){
var inst_2843 = (state_2845[(2)]);
var state_2845__$1 = state_2845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2845__$1,inst_2843);
} else {
if((state_val_2846 === (12))){
var inst_2774 = (state_2845[(2)]);
var state_2845__$1 = state_2845;
var statearr_2895_2961 = state_2845__$1;
(statearr_2895_2961[(2)] = inst_2774);

(statearr_2895_2961[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (2))){
var state_2845__$1 = state_2845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2845__$1,(4),ch);
} else {
if((state_val_2846 === (23))){
var state_2845__$1 = state_2845;
var statearr_2896_2962 = state_2845__$1;
(statearr_2896_2962[(2)] = null);

(statearr_2896_2962[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (35))){
var inst_2827 = (state_2845[(2)]);
var state_2845__$1 = state_2845;
var statearr_2897_2963 = state_2845__$1;
(statearr_2897_2963[(2)] = inst_2827);

(statearr_2897_2963[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (19))){
var inst_2746 = (state_2845[(7)]);
var inst_2750 = cljs.core.chunk_first.call(null,inst_2746);
var inst_2751 = cljs.core.chunk_rest.call(null,inst_2746);
var inst_2752 = cljs.core.count.call(null,inst_2750);
var inst_2724 = inst_2751;
var inst_2725 = inst_2750;
var inst_2726 = inst_2752;
var inst_2727 = (0);
var state_2845__$1 = (function (){var statearr_2898 = state_2845;
(statearr_2898[(14)] = inst_2724);

(statearr_2898[(15)] = inst_2725);

(statearr_2898[(16)] = inst_2726);

(statearr_2898[(17)] = inst_2727);

return statearr_2898;
})();
var statearr_2899_2964 = state_2845__$1;
(statearr_2899_2964[(2)] = null);

(statearr_2899_2964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (11))){
var inst_2724 = (state_2845[(14)]);
var inst_2746 = (state_2845[(7)]);
var inst_2746__$1 = cljs.core.seq.call(null,inst_2724);
var state_2845__$1 = (function (){var statearr_2900 = state_2845;
(statearr_2900[(7)] = inst_2746__$1);

return statearr_2900;
})();
if(inst_2746__$1){
var statearr_2901_2965 = state_2845__$1;
(statearr_2901_2965[(1)] = (16));

} else {
var statearr_2902_2966 = state_2845__$1;
(statearr_2902_2966[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (9))){
var inst_2776 = (state_2845[(2)]);
var state_2845__$1 = state_2845;
var statearr_2903_2967 = state_2845__$1;
(statearr_2903_2967[(2)] = inst_2776);

(statearr_2903_2967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (5))){
var inst_2722 = cljs.core.deref.call(null,cs);
var inst_2723 = cljs.core.seq.call(null,inst_2722);
var inst_2724 = inst_2723;
var inst_2725 = null;
var inst_2726 = (0);
var inst_2727 = (0);
var state_2845__$1 = (function (){var statearr_2904 = state_2845;
(statearr_2904[(14)] = inst_2724);

(statearr_2904[(15)] = inst_2725);

(statearr_2904[(16)] = inst_2726);

(statearr_2904[(17)] = inst_2727);

return statearr_2904;
})();
var statearr_2905_2968 = state_2845__$1;
(statearr_2905_2968[(2)] = null);

(statearr_2905_2968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (14))){
var state_2845__$1 = state_2845;
var statearr_2906_2969 = state_2845__$1;
(statearr_2906_2969[(2)] = null);

(statearr_2906_2969[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (45))){
var inst_2835 = (state_2845[(2)]);
var state_2845__$1 = state_2845;
var statearr_2907_2970 = state_2845__$1;
(statearr_2907_2970[(2)] = inst_2835);

(statearr_2907_2970[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (26))){
var inst_2779 = (state_2845[(27)]);
var inst_2831 = (state_2845[(2)]);
var inst_2832 = cljs.core.seq.call(null,inst_2779);
var state_2845__$1 = (function (){var statearr_2908 = state_2845;
(statearr_2908[(29)] = inst_2831);

return statearr_2908;
})();
if(inst_2832){
var statearr_2909_2971 = state_2845__$1;
(statearr_2909_2971[(1)] = (42));

} else {
var statearr_2910_2972 = state_2845__$1;
(statearr_2910_2972[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (16))){
var inst_2746 = (state_2845[(7)]);
var inst_2748 = cljs.core.chunked_seq_QMARK_.call(null,inst_2746);
var state_2845__$1 = state_2845;
if(inst_2748){
var statearr_2911_2973 = state_2845__$1;
(statearr_2911_2973[(1)] = (19));

} else {
var statearr_2912_2974 = state_2845__$1;
(statearr_2912_2974[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (38))){
var inst_2824 = (state_2845[(2)]);
var state_2845__$1 = state_2845;
var statearr_2913_2975 = state_2845__$1;
(statearr_2913_2975[(2)] = inst_2824);

(statearr_2913_2975[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (30))){
var state_2845__$1 = state_2845;
var statearr_2914_2976 = state_2845__$1;
(statearr_2914_2976[(2)] = null);

(statearr_2914_2976[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (10))){
var inst_2725 = (state_2845[(15)]);
var inst_2727 = (state_2845[(17)]);
var inst_2735 = cljs.core._nth.call(null,inst_2725,inst_2727);
var inst_2736 = cljs.core.nth.call(null,inst_2735,(0),null);
var inst_2737 = cljs.core.nth.call(null,inst_2735,(1),null);
var state_2845__$1 = (function (){var statearr_2915 = state_2845;
(statearr_2915[(24)] = inst_2736);

return statearr_2915;
})();
if(cljs.core.truth_(inst_2737)){
var statearr_2916_2977 = state_2845__$1;
(statearr_2916_2977[(1)] = (13));

} else {
var statearr_2917_2978 = state_2845__$1;
(statearr_2917_2978[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (18))){
var inst_2772 = (state_2845[(2)]);
var state_2845__$1 = state_2845;
var statearr_2918_2979 = state_2845__$1;
(statearr_2918_2979[(2)] = inst_2772);

(statearr_2918_2979[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (42))){
var state_2845__$1 = state_2845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2845__$1,(45),dchan);
} else {
if((state_val_2846 === (37))){
var inst_2805 = (state_2845[(23)]);
var inst_2814 = (state_2845[(22)]);
var inst_2715 = (state_2845[(12)]);
var inst_2814__$1 = cljs.core.first.call(null,inst_2805);
var inst_2815 = cljs.core.async.put_BANG_.call(null,inst_2814__$1,inst_2715,done);
var state_2845__$1 = (function (){var statearr_2919 = state_2845;
(statearr_2919[(22)] = inst_2814__$1);

return statearr_2919;
})();
if(cljs.core.truth_(inst_2815)){
var statearr_2920_2980 = state_2845__$1;
(statearr_2920_2980[(1)] = (39));

} else {
var statearr_2921_2981 = state_2845__$1;
(statearr_2921_2981[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2846 === (8))){
var inst_2727 = (state_2845[(17)]);
var inst_2726 = (state_2845[(16)]);
var inst_2729 = (inst_2727 < inst_2726);
var inst_2730 = inst_2729;
var state_2845__$1 = state_2845;
if(cljs.core.truth_(inst_2730)){
var statearr_2922_2982 = state_2845__$1;
(statearr_2922_2982[(1)] = (10));

} else {
var statearr_2923_2983 = state_2845__$1;
(statearr_2923_2983[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__2012__auto__ = null;
var cljs$core$async$mult_$_state_machine__2012__auto____0 = (function (){
var statearr_2924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2924[(0)] = cljs$core$async$mult_$_state_machine__2012__auto__);

(statearr_2924[(1)] = (1));

return statearr_2924;
});
var cljs$core$async$mult_$_state_machine__2012__auto____1 = (function (state_2845){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_2845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e2925){var ex__2015__auto__ = e2925;
var statearr_2926_2984 = state_2845;
(statearr_2926_2984[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_2845[(4)]))){
var statearr_2927_2985 = state_2845;
(statearr_2927_2985[(1)] = cljs.core.first.call(null,(state_2845[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2986 = state_2845;
state_2845 = G__2986;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__2012__auto__ = function(state_2845){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__2012__auto____1.call(this,state_2845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__2012__auto____0;
cljs$core$async$mult_$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__2012__auto____1;
return cljs$core$async$mult_$_state_machine__2012__auto__;
})()
})();
var state__2087__auto__ = (function (){var statearr_2928 = f__2086__auto__.call(null);
(statearr_2928[(6)] = c__2085__auto___2929);

return statearr_2928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__2988 = arguments.length;
switch (G__2988) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_2990 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_2990.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_2991 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_2991.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_2992 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m);
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_2992.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_2993 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,state_map);
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_2993.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_2994 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,mode);
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_2994.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___3004 = arguments.length;
var i__5770__auto___3005 = (0);
while(true){
if((i__5770__auto___3005 < len__5769__auto___3004)){
args__5775__auto__.push((arguments[i__5770__auto___3005]));

var G__3006 = (i__5770__auto___3005 + (1));
i__5770__auto___3005 = G__3006;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__2999){
var map__3000 = p__2999;
var map__3000__$1 = cljs.core.__destructure_map.call(null,map__3000);
var opts = map__3000__$1;
var statearr_3001_3007 = state;
(statearr_3001_3007[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_3002_3008 = state;
(statearr_3002_3008[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_3003_3009 = state;
(statearr_3003_3009[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq2995){
var G__2996 = cljs.core.first.call(null,seq2995);
var seq2995__$1 = cljs.core.next.call(null,seq2995);
var G__2997 = cljs.core.first.call(null,seq2995__$1);
var seq2995__$2 = cljs.core.next.call(null,seq2995__$1);
var G__2998 = cljs.core.first.call(null,seq2995__$2);
var seq2995__$3 = cljs.core.next.call(null,seq2995__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2996,G__2997,G__2998,seq2995__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3010 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3010 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta3011){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta3011 = meta3011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3012,meta3011__$1){
var self__ = this;
var _3012__$1 = this;
return (new cljs.core.async.t_cljs$core$async3010(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta3011__$1));
}));

(cljs.core.async.t_cljs$core$async3010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3012){
var self__ = this;
var _3012__$1 = this;
return self__.meta3011;
}));

(cljs.core.async.t_cljs$core$async3010.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3010.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async3010.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3010.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async3010.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async3010.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async3010.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async3010.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async3010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta3011","meta3011",-1813246407,null)], null);
}));

(cljs.core.async.t_cljs$core$async3010.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3010");

(cljs.core.async.t_cljs$core$async3010.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async3010");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3010.
 */
cljs.core.async.__GT_t_cljs$core$async3010 = (function cljs$core$async$mix_$___GT_t_cljs$core$async3010(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta3011){
return (new cljs.core.async.t_cljs$core$async3010(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta3011));
});

}

return (new cljs.core.async.t_cljs$core$async3010(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2085__auto___3125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = (function (state_3080){
var state_val_3081 = (state_3080[(1)]);
if((state_val_3081 === (7))){
var inst_3040 = (state_3080[(2)]);
var state_3080__$1 = state_3080;
if(cljs.core.truth_(inst_3040)){
var statearr_3082_3126 = state_3080__$1;
(statearr_3082_3126[(1)] = (8));

} else {
var statearr_3083_3127 = state_3080__$1;
(statearr_3083_3127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (20))){
var inst_3033 = (state_3080[(7)]);
var state_3080__$1 = state_3080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3080__$1,(23),out,inst_3033);
} else {
if((state_val_3081 === (1))){
var inst_3016 = calc_state.call(null);
var inst_3017 = cljs.core.__destructure_map.call(null,inst_3016);
var inst_3018 = cljs.core.get.call(null,inst_3017,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_3019 = cljs.core.get.call(null,inst_3017,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_3020 = cljs.core.get.call(null,inst_3017,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_3021 = inst_3016;
var state_3080__$1 = (function (){var statearr_3084 = state_3080;
(statearr_3084[(8)] = inst_3018);

(statearr_3084[(9)] = inst_3019);

(statearr_3084[(10)] = inst_3020);

(statearr_3084[(11)] = inst_3021);

return statearr_3084;
})();
var statearr_3085_3128 = state_3080__$1;
(statearr_3085_3128[(2)] = null);

(statearr_3085_3128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (24))){
var inst_3024 = (state_3080[(12)]);
var inst_3021 = inst_3024;
var state_3080__$1 = (function (){var statearr_3086 = state_3080;
(statearr_3086[(11)] = inst_3021);

return statearr_3086;
})();
var statearr_3087_3129 = state_3080__$1;
(statearr_3087_3129[(2)] = null);

(statearr_3087_3129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (4))){
var inst_3033 = (state_3080[(7)]);
var inst_3035 = (state_3080[(13)]);
var inst_3032 = (state_3080[(2)]);
var inst_3033__$1 = cljs.core.nth.call(null,inst_3032,(0),null);
var inst_3034 = cljs.core.nth.call(null,inst_3032,(1),null);
var inst_3035__$1 = (inst_3033__$1 == null);
var state_3080__$1 = (function (){var statearr_3088 = state_3080;
(statearr_3088[(7)] = inst_3033__$1);

(statearr_3088[(14)] = inst_3034);

(statearr_3088[(13)] = inst_3035__$1);

return statearr_3088;
})();
if(cljs.core.truth_(inst_3035__$1)){
var statearr_3089_3130 = state_3080__$1;
(statearr_3089_3130[(1)] = (5));

} else {
var statearr_3090_3131 = state_3080__$1;
(statearr_3090_3131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (15))){
var inst_3025 = (state_3080[(15)]);
var inst_3054 = (state_3080[(16)]);
var inst_3054__$1 = cljs.core.empty_QMARK_.call(null,inst_3025);
var state_3080__$1 = (function (){var statearr_3091 = state_3080;
(statearr_3091[(16)] = inst_3054__$1);

return statearr_3091;
})();
if(inst_3054__$1){
var statearr_3092_3132 = state_3080__$1;
(statearr_3092_3132[(1)] = (17));

} else {
var statearr_3093_3133 = state_3080__$1;
(statearr_3093_3133[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (21))){
var inst_3024 = (state_3080[(12)]);
var inst_3021 = inst_3024;
var state_3080__$1 = (function (){var statearr_3094 = state_3080;
(statearr_3094[(11)] = inst_3021);

return statearr_3094;
})();
var statearr_3095_3134 = state_3080__$1;
(statearr_3095_3134[(2)] = null);

(statearr_3095_3134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (13))){
var inst_3047 = (state_3080[(2)]);
var inst_3048 = calc_state.call(null);
var inst_3021 = inst_3048;
var state_3080__$1 = (function (){var statearr_3096 = state_3080;
(statearr_3096[(17)] = inst_3047);

(statearr_3096[(11)] = inst_3021);

return statearr_3096;
})();
var statearr_3097_3135 = state_3080__$1;
(statearr_3097_3135[(2)] = null);

(statearr_3097_3135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (22))){
var inst_3074 = (state_3080[(2)]);
var state_3080__$1 = state_3080;
var statearr_3098_3136 = state_3080__$1;
(statearr_3098_3136[(2)] = inst_3074);

(statearr_3098_3136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (6))){
var inst_3034 = (state_3080[(14)]);
var inst_3038 = cljs.core._EQ_.call(null,inst_3034,change);
var state_3080__$1 = state_3080;
var statearr_3099_3137 = state_3080__$1;
(statearr_3099_3137[(2)] = inst_3038);

(statearr_3099_3137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (25))){
var state_3080__$1 = state_3080;
var statearr_3100_3138 = state_3080__$1;
(statearr_3100_3138[(2)] = null);

(statearr_3100_3138[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (17))){
var inst_3026 = (state_3080[(18)]);
var inst_3034 = (state_3080[(14)]);
var inst_3056 = inst_3026.call(null,inst_3034);
var inst_3057 = cljs.core.not.call(null,inst_3056);
var state_3080__$1 = state_3080;
var statearr_3101_3139 = state_3080__$1;
(statearr_3101_3139[(2)] = inst_3057);

(statearr_3101_3139[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (3))){
var inst_3078 = (state_3080[(2)]);
var state_3080__$1 = state_3080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3080__$1,inst_3078);
} else {
if((state_val_3081 === (12))){
var state_3080__$1 = state_3080;
var statearr_3102_3140 = state_3080__$1;
(statearr_3102_3140[(2)] = null);

(statearr_3102_3140[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (2))){
var inst_3021 = (state_3080[(11)]);
var inst_3024 = (state_3080[(12)]);
var inst_3024__$1 = cljs.core.__destructure_map.call(null,inst_3021);
var inst_3025 = cljs.core.get.call(null,inst_3024__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_3026 = cljs.core.get.call(null,inst_3024__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_3027 = cljs.core.get.call(null,inst_3024__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_3080__$1 = (function (){var statearr_3103 = state_3080;
(statearr_3103[(12)] = inst_3024__$1);

(statearr_3103[(15)] = inst_3025);

(statearr_3103[(18)] = inst_3026);

return statearr_3103;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_3080__$1,(4),inst_3027);
} else {
if((state_val_3081 === (23))){
var inst_3065 = (state_3080[(2)]);
var state_3080__$1 = state_3080;
if(cljs.core.truth_(inst_3065)){
var statearr_3104_3141 = state_3080__$1;
(statearr_3104_3141[(1)] = (24));

} else {
var statearr_3105_3142 = state_3080__$1;
(statearr_3105_3142[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (19))){
var inst_3060 = (state_3080[(2)]);
var state_3080__$1 = state_3080;
var statearr_3106_3143 = state_3080__$1;
(statearr_3106_3143[(2)] = inst_3060);

(statearr_3106_3143[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (11))){
var inst_3034 = (state_3080[(14)]);
var inst_3044 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_3034);
var state_3080__$1 = state_3080;
var statearr_3107_3144 = state_3080__$1;
(statearr_3107_3144[(2)] = inst_3044);

(statearr_3107_3144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (9))){
var inst_3025 = (state_3080[(15)]);
var inst_3034 = (state_3080[(14)]);
var inst_3051 = (state_3080[(19)]);
var inst_3051__$1 = inst_3025.call(null,inst_3034);
var state_3080__$1 = (function (){var statearr_3108 = state_3080;
(statearr_3108[(19)] = inst_3051__$1);

return statearr_3108;
})();
if(cljs.core.truth_(inst_3051__$1)){
var statearr_3109_3145 = state_3080__$1;
(statearr_3109_3145[(1)] = (14));

} else {
var statearr_3110_3146 = state_3080__$1;
(statearr_3110_3146[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (5))){
var inst_3035 = (state_3080[(13)]);
var state_3080__$1 = state_3080;
var statearr_3111_3147 = state_3080__$1;
(statearr_3111_3147[(2)] = inst_3035);

(statearr_3111_3147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (14))){
var inst_3051 = (state_3080[(19)]);
var state_3080__$1 = state_3080;
var statearr_3112_3148 = state_3080__$1;
(statearr_3112_3148[(2)] = inst_3051);

(statearr_3112_3148[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (26))){
var inst_3070 = (state_3080[(2)]);
var state_3080__$1 = state_3080;
var statearr_3113_3149 = state_3080__$1;
(statearr_3113_3149[(2)] = inst_3070);

(statearr_3113_3149[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (16))){
var inst_3062 = (state_3080[(2)]);
var state_3080__$1 = state_3080;
if(cljs.core.truth_(inst_3062)){
var statearr_3114_3150 = state_3080__$1;
(statearr_3114_3150[(1)] = (20));

} else {
var statearr_3115_3151 = state_3080__$1;
(statearr_3115_3151[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (10))){
var inst_3076 = (state_3080[(2)]);
var state_3080__$1 = state_3080;
var statearr_3116_3152 = state_3080__$1;
(statearr_3116_3152[(2)] = inst_3076);

(statearr_3116_3152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (18))){
var inst_3054 = (state_3080[(16)]);
var state_3080__$1 = state_3080;
var statearr_3117_3153 = state_3080__$1;
(statearr_3117_3153[(2)] = inst_3054);

(statearr_3117_3153[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (8))){
var inst_3033 = (state_3080[(7)]);
var inst_3042 = (inst_3033 == null);
var state_3080__$1 = state_3080;
if(cljs.core.truth_(inst_3042)){
var statearr_3118_3154 = state_3080__$1;
(statearr_3118_3154[(1)] = (11));

} else {
var statearr_3119_3155 = state_3080__$1;
(statearr_3119_3155[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__2012__auto__ = null;
var cljs$core$async$mix_$_state_machine__2012__auto____0 = (function (){
var statearr_3120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3120[(0)] = cljs$core$async$mix_$_state_machine__2012__auto__);

(statearr_3120[(1)] = (1));

return statearr_3120;
});
var cljs$core$async$mix_$_state_machine__2012__auto____1 = (function (state_3080){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_3080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e3121){var ex__2015__auto__ = e3121;
var statearr_3122_3156 = state_3080;
(statearr_3122_3156[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_3080[(4)]))){
var statearr_3123_3157 = state_3080;
(statearr_3123_3157[(1)] = cljs.core.first.call(null,(state_3080[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3158 = state_3080;
state_3080 = G__3158;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__2012__auto__ = function(state_3080){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__2012__auto____1.call(this,state_3080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__2012__auto____0;
cljs$core$async$mix_$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__2012__auto____1;
return cljs$core$async$mix_$_state_machine__2012__auto__;
})()
})();
var state__2087__auto__ = (function (){var statearr_3124 = f__2086__auto__.call(null);
(statearr_3124[(6)] = c__2085__auto___3125);

return statearr_3124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_3161 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_3161.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_3162 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v,ch);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_3162.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_3163 = (function() {
var G__3164 = null;
var G__3164__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__3164__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__3164 = function(p,v){
switch(arguments.length){
case 1:
return G__3164__1.call(this,p);
case 2:
return G__3164__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3164.cljs$core$IFn$_invoke$arity$1 = G__3164__1;
G__3164.cljs$core$IFn$_invoke$arity$2 = G__3164__2;
return G__3164;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__3160 = arguments.length;
switch (G__3160) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_3163.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_3163.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__3168 = arguments.length;
switch (G__3168) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__3166_SHARP_){
if(cljs.core.truth_(p1__3166_SHARP_.call(null,topic))){
return p1__3166_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__3166_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3169 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3169 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta3170){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta3170 = meta3170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3171,meta3170__$1){
var self__ = this;
var _3171__$1 = this;
return (new cljs.core.async.t_cljs$core$async3169(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta3170__$1));
}));

(cljs.core.async.t_cljs$core$async3169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3171){
var self__ = this;
var _3171__$1 = this;
return self__.meta3170;
}));

(cljs.core.async.t_cljs$core$async3169.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3169.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async3169.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3169.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async3169.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async3169.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async3169.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async3169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta3170","meta3170",1874596785,null)], null);
}));

(cljs.core.async.t_cljs$core$async3169.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3169");

(cljs.core.async.t_cljs$core$async3169.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async3169");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3169.
 */
cljs.core.async.__GT_t_cljs$core$async3169 = (function cljs$core$async$__GT_t_cljs$core$async3169(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta3170){
return (new cljs.core.async.t_cljs$core$async3169(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta3170));
});

}

return (new cljs.core.async.t_cljs$core$async3169(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2085__auto___3290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = (function (state_3243){
var state_val_3244 = (state_3243[(1)]);
if((state_val_3244 === (7))){
var inst_3239 = (state_3243[(2)]);
var state_3243__$1 = state_3243;
var statearr_3245_3291 = state_3243__$1;
(statearr_3245_3291[(2)] = inst_3239);

(statearr_3245_3291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (20))){
var state_3243__$1 = state_3243;
var statearr_3246_3292 = state_3243__$1;
(statearr_3246_3292[(2)] = null);

(statearr_3246_3292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (1))){
var state_3243__$1 = state_3243;
var statearr_3247_3293 = state_3243__$1;
(statearr_3247_3293[(2)] = null);

(statearr_3247_3293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (24))){
var inst_3222 = (state_3243[(7)]);
var inst_3231 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_3222);
var state_3243__$1 = state_3243;
var statearr_3248_3294 = state_3243__$1;
(statearr_3248_3294[(2)] = inst_3231);

(statearr_3248_3294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (4))){
var inst_3174 = (state_3243[(8)]);
var inst_3174__$1 = (state_3243[(2)]);
var inst_3175 = (inst_3174__$1 == null);
var state_3243__$1 = (function (){var statearr_3249 = state_3243;
(statearr_3249[(8)] = inst_3174__$1);

return statearr_3249;
})();
if(cljs.core.truth_(inst_3175)){
var statearr_3250_3295 = state_3243__$1;
(statearr_3250_3295[(1)] = (5));

} else {
var statearr_3251_3296 = state_3243__$1;
(statearr_3251_3296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (15))){
var inst_3216 = (state_3243[(2)]);
var state_3243__$1 = state_3243;
var statearr_3252_3297 = state_3243__$1;
(statearr_3252_3297[(2)] = inst_3216);

(statearr_3252_3297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (21))){
var inst_3236 = (state_3243[(2)]);
var state_3243__$1 = (function (){var statearr_3253 = state_3243;
(statearr_3253[(9)] = inst_3236);

return statearr_3253;
})();
var statearr_3254_3298 = state_3243__$1;
(statearr_3254_3298[(2)] = null);

(statearr_3254_3298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (13))){
var inst_3198 = (state_3243[(10)]);
var inst_3200 = cljs.core.chunked_seq_QMARK_.call(null,inst_3198);
var state_3243__$1 = state_3243;
if(inst_3200){
var statearr_3255_3299 = state_3243__$1;
(statearr_3255_3299[(1)] = (16));

} else {
var statearr_3256_3300 = state_3243__$1;
(statearr_3256_3300[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (22))){
var inst_3228 = (state_3243[(2)]);
var state_3243__$1 = state_3243;
if(cljs.core.truth_(inst_3228)){
var statearr_3257_3301 = state_3243__$1;
(statearr_3257_3301[(1)] = (23));

} else {
var statearr_3258_3302 = state_3243__$1;
(statearr_3258_3302[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (6))){
var inst_3174 = (state_3243[(8)]);
var inst_3222 = (state_3243[(7)]);
var inst_3224 = (state_3243[(11)]);
var inst_3222__$1 = topic_fn.call(null,inst_3174);
var inst_3223 = cljs.core.deref.call(null,mults);
var inst_3224__$1 = cljs.core.get.call(null,inst_3223,inst_3222__$1);
var state_3243__$1 = (function (){var statearr_3259 = state_3243;
(statearr_3259[(7)] = inst_3222__$1);

(statearr_3259[(11)] = inst_3224__$1);

return statearr_3259;
})();
if(cljs.core.truth_(inst_3224__$1)){
var statearr_3260_3303 = state_3243__$1;
(statearr_3260_3303[(1)] = (19));

} else {
var statearr_3261_3304 = state_3243__$1;
(statearr_3261_3304[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (25))){
var inst_3233 = (state_3243[(2)]);
var state_3243__$1 = state_3243;
var statearr_3262_3305 = state_3243__$1;
(statearr_3262_3305[(2)] = inst_3233);

(statearr_3262_3305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (17))){
var inst_3198 = (state_3243[(10)]);
var inst_3207 = cljs.core.first.call(null,inst_3198);
var inst_3208 = cljs.core.async.muxch_STAR_.call(null,inst_3207);
var inst_3209 = cljs.core.async.close_BANG_.call(null,inst_3208);
var inst_3210 = cljs.core.next.call(null,inst_3198);
var inst_3184 = inst_3210;
var inst_3185 = null;
var inst_3186 = (0);
var inst_3187 = (0);
var state_3243__$1 = (function (){var statearr_3263 = state_3243;
(statearr_3263[(12)] = inst_3209);

(statearr_3263[(13)] = inst_3184);

(statearr_3263[(14)] = inst_3185);

(statearr_3263[(15)] = inst_3186);

(statearr_3263[(16)] = inst_3187);

return statearr_3263;
})();
var statearr_3264_3306 = state_3243__$1;
(statearr_3264_3306[(2)] = null);

(statearr_3264_3306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (3))){
var inst_3241 = (state_3243[(2)]);
var state_3243__$1 = state_3243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3243__$1,inst_3241);
} else {
if((state_val_3244 === (12))){
var inst_3218 = (state_3243[(2)]);
var state_3243__$1 = state_3243;
var statearr_3265_3307 = state_3243__$1;
(statearr_3265_3307[(2)] = inst_3218);

(statearr_3265_3307[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (2))){
var state_3243__$1 = state_3243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3243__$1,(4),ch);
} else {
if((state_val_3244 === (23))){
var state_3243__$1 = state_3243;
var statearr_3266_3308 = state_3243__$1;
(statearr_3266_3308[(2)] = null);

(statearr_3266_3308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (19))){
var inst_3224 = (state_3243[(11)]);
var inst_3174 = (state_3243[(8)]);
var inst_3226 = cljs.core.async.muxch_STAR_.call(null,inst_3224);
var state_3243__$1 = state_3243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3243__$1,(22),inst_3226,inst_3174);
} else {
if((state_val_3244 === (11))){
var inst_3184 = (state_3243[(13)]);
var inst_3198 = (state_3243[(10)]);
var inst_3198__$1 = cljs.core.seq.call(null,inst_3184);
var state_3243__$1 = (function (){var statearr_3267 = state_3243;
(statearr_3267[(10)] = inst_3198__$1);

return statearr_3267;
})();
if(inst_3198__$1){
var statearr_3268_3309 = state_3243__$1;
(statearr_3268_3309[(1)] = (13));

} else {
var statearr_3269_3310 = state_3243__$1;
(statearr_3269_3310[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (9))){
var inst_3220 = (state_3243[(2)]);
var state_3243__$1 = state_3243;
var statearr_3270_3311 = state_3243__$1;
(statearr_3270_3311[(2)] = inst_3220);

(statearr_3270_3311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (5))){
var inst_3181 = cljs.core.deref.call(null,mults);
var inst_3182 = cljs.core.vals.call(null,inst_3181);
var inst_3183 = cljs.core.seq.call(null,inst_3182);
var inst_3184 = inst_3183;
var inst_3185 = null;
var inst_3186 = (0);
var inst_3187 = (0);
var state_3243__$1 = (function (){var statearr_3271 = state_3243;
(statearr_3271[(13)] = inst_3184);

(statearr_3271[(14)] = inst_3185);

(statearr_3271[(15)] = inst_3186);

(statearr_3271[(16)] = inst_3187);

return statearr_3271;
})();
var statearr_3272_3312 = state_3243__$1;
(statearr_3272_3312[(2)] = null);

(statearr_3272_3312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (14))){
var state_3243__$1 = state_3243;
var statearr_3276_3313 = state_3243__$1;
(statearr_3276_3313[(2)] = null);

(statearr_3276_3313[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (16))){
var inst_3198 = (state_3243[(10)]);
var inst_3202 = cljs.core.chunk_first.call(null,inst_3198);
var inst_3203 = cljs.core.chunk_rest.call(null,inst_3198);
var inst_3204 = cljs.core.count.call(null,inst_3202);
var inst_3184 = inst_3203;
var inst_3185 = inst_3202;
var inst_3186 = inst_3204;
var inst_3187 = (0);
var state_3243__$1 = (function (){var statearr_3277 = state_3243;
(statearr_3277[(13)] = inst_3184);

(statearr_3277[(14)] = inst_3185);

(statearr_3277[(15)] = inst_3186);

(statearr_3277[(16)] = inst_3187);

return statearr_3277;
})();
var statearr_3278_3314 = state_3243__$1;
(statearr_3278_3314[(2)] = null);

(statearr_3278_3314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (10))){
var inst_3185 = (state_3243[(14)]);
var inst_3187 = (state_3243[(16)]);
var inst_3184 = (state_3243[(13)]);
var inst_3186 = (state_3243[(15)]);
var inst_3192 = cljs.core._nth.call(null,inst_3185,inst_3187);
var inst_3193 = cljs.core.async.muxch_STAR_.call(null,inst_3192);
var inst_3194 = cljs.core.async.close_BANG_.call(null,inst_3193);
var inst_3195 = (inst_3187 + (1));
var tmp3273 = inst_3185;
var tmp3274 = inst_3184;
var tmp3275 = inst_3186;
var inst_3184__$1 = tmp3274;
var inst_3185__$1 = tmp3273;
var inst_3186__$1 = tmp3275;
var inst_3187__$1 = inst_3195;
var state_3243__$1 = (function (){var statearr_3279 = state_3243;
(statearr_3279[(17)] = inst_3194);

(statearr_3279[(13)] = inst_3184__$1);

(statearr_3279[(14)] = inst_3185__$1);

(statearr_3279[(15)] = inst_3186__$1);

(statearr_3279[(16)] = inst_3187__$1);

return statearr_3279;
})();
var statearr_3280_3315 = state_3243__$1;
(statearr_3280_3315[(2)] = null);

(statearr_3280_3315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (18))){
var inst_3213 = (state_3243[(2)]);
var state_3243__$1 = state_3243;
var statearr_3281_3316 = state_3243__$1;
(statearr_3281_3316[(2)] = inst_3213);

(statearr_3281_3316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (8))){
var inst_3187 = (state_3243[(16)]);
var inst_3186 = (state_3243[(15)]);
var inst_3189 = (inst_3187 < inst_3186);
var inst_3190 = inst_3189;
var state_3243__$1 = state_3243;
if(cljs.core.truth_(inst_3190)){
var statearr_3282_3317 = state_3243__$1;
(statearr_3282_3317[(1)] = (10));

} else {
var statearr_3283_3318 = state_3243__$1;
(statearr_3283_3318[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2012__auto__ = null;
var cljs$core$async$state_machine__2012__auto____0 = (function (){
var statearr_3284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3284[(0)] = cljs$core$async$state_machine__2012__auto__);

(statearr_3284[(1)] = (1));

return statearr_3284;
});
var cljs$core$async$state_machine__2012__auto____1 = (function (state_3243){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_3243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e3285){var ex__2015__auto__ = e3285;
var statearr_3286_3319 = state_3243;
(statearr_3286_3319[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_3243[(4)]))){
var statearr_3287_3320 = state_3243;
(statearr_3287_3320[(1)] = cljs.core.first.call(null,(state_3243[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3321 = state_3243;
state_3243 = G__3321;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$state_machine__2012__auto__ = function(state_3243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2012__auto____1.call(this,state_3243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2012__auto____0;
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2012__auto____1;
return cljs$core$async$state_machine__2012__auto__;
})()
})();
var state__2087__auto__ = (function (){var statearr_3288 = f__2086__auto__.call(null);
(statearr_3288[(6)] = c__2085__auto___3290);

return statearr_3288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__3323 = arguments.length;
switch (G__3323) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__3326 = arguments.length;
switch (G__3326) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__3329 = arguments.length;
switch (G__3329) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_.call(null,out);
} else {
var c__2085__auto___3407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = (function (state_3372){
var state_val_3373 = (state_3372[(1)]);
if((state_val_3373 === (7))){
var state_3372__$1 = state_3372;
var statearr_3374_3408 = state_3372__$1;
(statearr_3374_3408[(2)] = null);

(statearr_3374_3408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (1))){
var state_3372__$1 = state_3372;
var statearr_3375_3409 = state_3372__$1;
(statearr_3375_3409[(2)] = null);

(statearr_3375_3409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (4))){
var inst_3333 = (state_3372[(7)]);
var inst_3332 = (state_3372[(8)]);
var inst_3335 = (inst_3333 < inst_3332);
var state_3372__$1 = state_3372;
if(cljs.core.truth_(inst_3335)){
var statearr_3376_3410 = state_3372__$1;
(statearr_3376_3410[(1)] = (6));

} else {
var statearr_3377_3411 = state_3372__$1;
(statearr_3377_3411[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (15))){
var inst_3358 = (state_3372[(9)]);
var inst_3363 = cljs.core.apply.call(null,f,inst_3358);
var state_3372__$1 = state_3372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3372__$1,(17),out,inst_3363);
} else {
if((state_val_3373 === (13))){
var inst_3358 = (state_3372[(9)]);
var inst_3358__$1 = (state_3372[(2)]);
var inst_3359 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_3358__$1);
var state_3372__$1 = (function (){var statearr_3378 = state_3372;
(statearr_3378[(9)] = inst_3358__$1);

return statearr_3378;
})();
if(cljs.core.truth_(inst_3359)){
var statearr_3379_3412 = state_3372__$1;
(statearr_3379_3412[(1)] = (14));

} else {
var statearr_3380_3413 = state_3372__$1;
(statearr_3380_3413[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (6))){
var state_3372__$1 = state_3372;
var statearr_3381_3414 = state_3372__$1;
(statearr_3381_3414[(2)] = null);

(statearr_3381_3414[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (17))){
var inst_3365 = (state_3372[(2)]);
var state_3372__$1 = (function (){var statearr_3383 = state_3372;
(statearr_3383[(10)] = inst_3365);

return statearr_3383;
})();
var statearr_3384_3415 = state_3372__$1;
(statearr_3384_3415[(2)] = null);

(statearr_3384_3415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (3))){
var inst_3370 = (state_3372[(2)]);
var state_3372__$1 = state_3372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3372__$1,inst_3370);
} else {
if((state_val_3373 === (12))){
var _ = (function (){var statearr_3385 = state_3372;
(statearr_3385[(4)] = cljs.core.rest.call(null,(state_3372[(4)])));

return statearr_3385;
})();
var state_3372__$1 = state_3372;
var ex3382 = (state_3372__$1[(2)]);
var statearr_3386_3416 = state_3372__$1;
(statearr_3386_3416[(5)] = ex3382);


if((ex3382 instanceof Object)){
var statearr_3387_3417 = state_3372__$1;
(statearr_3387_3417[(1)] = (11));

(statearr_3387_3417[(5)] = null);

} else {
throw ex3382;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (2))){
var inst_3331 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_3332 = cnt;
var inst_3333 = (0);
var state_3372__$1 = (function (){var statearr_3388 = state_3372;
(statearr_3388[(11)] = inst_3331);

(statearr_3388[(8)] = inst_3332);

(statearr_3388[(7)] = inst_3333);

return statearr_3388;
})();
var statearr_3389_3418 = state_3372__$1;
(statearr_3389_3418[(2)] = null);

(statearr_3389_3418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (11))){
var inst_3337 = (state_3372[(2)]);
var inst_3338 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_3372__$1 = (function (){var statearr_3390 = state_3372;
(statearr_3390[(12)] = inst_3337);

return statearr_3390;
})();
var statearr_3391_3419 = state_3372__$1;
(statearr_3391_3419[(2)] = inst_3338);

(statearr_3391_3419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (9))){
var inst_3333 = (state_3372[(7)]);
var _ = (function (){var statearr_3392 = state_3372;
(statearr_3392[(4)] = cljs.core.cons.call(null,(12),(state_3372[(4)])));

return statearr_3392;
})();
var inst_3344 = chs__$1.call(null,inst_3333);
var inst_3345 = done.call(null,inst_3333);
var inst_3346 = cljs.core.async.take_BANG_.call(null,inst_3344,inst_3345);
var ___$1 = (function (){var statearr_3393 = state_3372;
(statearr_3393[(4)] = cljs.core.rest.call(null,(state_3372[(4)])));

return statearr_3393;
})();
var state_3372__$1 = state_3372;
var statearr_3394_3420 = state_3372__$1;
(statearr_3394_3420[(2)] = inst_3346);

(statearr_3394_3420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (5))){
var inst_3356 = (state_3372[(2)]);
var state_3372__$1 = (function (){var statearr_3395 = state_3372;
(statearr_3395[(13)] = inst_3356);

return statearr_3395;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3372__$1,(13),dchan);
} else {
if((state_val_3373 === (14))){
var inst_3361 = cljs.core.async.close_BANG_.call(null,out);
var state_3372__$1 = state_3372;
var statearr_3396_3421 = state_3372__$1;
(statearr_3396_3421[(2)] = inst_3361);

(statearr_3396_3421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (16))){
var inst_3368 = (state_3372[(2)]);
var state_3372__$1 = state_3372;
var statearr_3397_3422 = state_3372__$1;
(statearr_3397_3422[(2)] = inst_3368);

(statearr_3397_3422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (10))){
var inst_3333 = (state_3372[(7)]);
var inst_3349 = (state_3372[(2)]);
var inst_3350 = (inst_3333 + (1));
var inst_3333__$1 = inst_3350;
var state_3372__$1 = (function (){var statearr_3398 = state_3372;
(statearr_3398[(14)] = inst_3349);

(statearr_3398[(7)] = inst_3333__$1);

return statearr_3398;
})();
var statearr_3399_3423 = state_3372__$1;
(statearr_3399_3423[(2)] = null);

(statearr_3399_3423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (8))){
var inst_3354 = (state_3372[(2)]);
var state_3372__$1 = state_3372;
var statearr_3400_3424 = state_3372__$1;
(statearr_3400_3424[(2)] = inst_3354);

(statearr_3400_3424[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2012__auto__ = null;
var cljs$core$async$state_machine__2012__auto____0 = (function (){
var statearr_3401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3401[(0)] = cljs$core$async$state_machine__2012__auto__);

(statearr_3401[(1)] = (1));

return statearr_3401;
});
var cljs$core$async$state_machine__2012__auto____1 = (function (state_3372){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_3372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e3402){var ex__2015__auto__ = e3402;
var statearr_3403_3425 = state_3372;
(statearr_3403_3425[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_3372[(4)]))){
var statearr_3404_3426 = state_3372;
(statearr_3404_3426[(1)] = cljs.core.first.call(null,(state_3372[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3427 = state_3372;
state_3372 = G__3427;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$state_machine__2012__auto__ = function(state_3372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2012__auto____1.call(this,state_3372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2012__auto____0;
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2012__auto____1;
return cljs$core$async$state_machine__2012__auto__;
})()
})();
var state__2087__auto__ = (function (){var statearr_3405 = f__2086__auto__.call(null);
(statearr_3405[(6)] = c__2085__auto___3407);

return statearr_3405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__3430 = arguments.length;
switch (G__3430) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2085__auto___3485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = (function (state_3462){
var state_val_3463 = (state_3462[(1)]);
if((state_val_3463 === (7))){
var inst_3441 = (state_3462[(7)]);
var inst_3442 = (state_3462[(8)]);
var inst_3441__$1 = (state_3462[(2)]);
var inst_3442__$1 = cljs.core.nth.call(null,inst_3441__$1,(0),null);
var inst_3443 = cljs.core.nth.call(null,inst_3441__$1,(1),null);
var inst_3444 = (inst_3442__$1 == null);
var state_3462__$1 = (function (){var statearr_3464 = state_3462;
(statearr_3464[(7)] = inst_3441__$1);

(statearr_3464[(8)] = inst_3442__$1);

(statearr_3464[(9)] = inst_3443);

return statearr_3464;
})();
if(cljs.core.truth_(inst_3444)){
var statearr_3465_3486 = state_3462__$1;
(statearr_3465_3486[(1)] = (8));

} else {
var statearr_3466_3487 = state_3462__$1;
(statearr_3466_3487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3463 === (1))){
var inst_3431 = cljs.core.vec.call(null,chs);
var inst_3432 = inst_3431;
var state_3462__$1 = (function (){var statearr_3467 = state_3462;
(statearr_3467[(10)] = inst_3432);

return statearr_3467;
})();
var statearr_3468_3488 = state_3462__$1;
(statearr_3468_3488[(2)] = null);

(statearr_3468_3488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3463 === (4))){
var inst_3432 = (state_3462[(10)]);
var state_3462__$1 = state_3462;
return cljs.core.async.ioc_alts_BANG_.call(null,state_3462__$1,(7),inst_3432);
} else {
if((state_val_3463 === (6))){
var inst_3458 = (state_3462[(2)]);
var state_3462__$1 = state_3462;
var statearr_3469_3489 = state_3462__$1;
(statearr_3469_3489[(2)] = inst_3458);

(statearr_3469_3489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3463 === (3))){
var inst_3460 = (state_3462[(2)]);
var state_3462__$1 = state_3462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3462__$1,inst_3460);
} else {
if((state_val_3463 === (2))){
var inst_3432 = (state_3462[(10)]);
var inst_3434 = cljs.core.count.call(null,inst_3432);
var inst_3435 = (inst_3434 > (0));
var state_3462__$1 = state_3462;
if(cljs.core.truth_(inst_3435)){
var statearr_3471_3490 = state_3462__$1;
(statearr_3471_3490[(1)] = (4));

} else {
var statearr_3472_3491 = state_3462__$1;
(statearr_3472_3491[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3463 === (11))){
var inst_3432 = (state_3462[(10)]);
var inst_3451 = (state_3462[(2)]);
var tmp3470 = inst_3432;
var inst_3432__$1 = tmp3470;
var state_3462__$1 = (function (){var statearr_3473 = state_3462;
(statearr_3473[(11)] = inst_3451);

(statearr_3473[(10)] = inst_3432__$1);

return statearr_3473;
})();
var statearr_3474_3492 = state_3462__$1;
(statearr_3474_3492[(2)] = null);

(statearr_3474_3492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3463 === (9))){
var inst_3442 = (state_3462[(8)]);
var state_3462__$1 = state_3462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3462__$1,(11),out,inst_3442);
} else {
if((state_val_3463 === (5))){
var inst_3456 = cljs.core.async.close_BANG_.call(null,out);
var state_3462__$1 = state_3462;
var statearr_3475_3493 = state_3462__$1;
(statearr_3475_3493[(2)] = inst_3456);

(statearr_3475_3493[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3463 === (10))){
var inst_3454 = (state_3462[(2)]);
var state_3462__$1 = state_3462;
var statearr_3476_3494 = state_3462__$1;
(statearr_3476_3494[(2)] = inst_3454);

(statearr_3476_3494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3463 === (8))){
var inst_3432 = (state_3462[(10)]);
var inst_3441 = (state_3462[(7)]);
var inst_3442 = (state_3462[(8)]);
var inst_3443 = (state_3462[(9)]);
var inst_3446 = (function (){var cs = inst_3432;
var vec__3437 = inst_3441;
var v = inst_3442;
var c = inst_3443;
return (function (p1__3428_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__3428_SHARP_);
});
})();
var inst_3447 = cljs.core.filterv.call(null,inst_3446,inst_3432);
var inst_3432__$1 = inst_3447;
var state_3462__$1 = (function (){var statearr_3477 = state_3462;
(statearr_3477[(10)] = inst_3432__$1);

return statearr_3477;
})();
var statearr_3478_3495 = state_3462__$1;
(statearr_3478_3495[(2)] = null);

(statearr_3478_3495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2012__auto__ = null;
var cljs$core$async$state_machine__2012__auto____0 = (function (){
var statearr_3479 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3479[(0)] = cljs$core$async$state_machine__2012__auto__);

(statearr_3479[(1)] = (1));

return statearr_3479;
});
var cljs$core$async$state_machine__2012__auto____1 = (function (state_3462){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_3462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e3480){var ex__2015__auto__ = e3480;
var statearr_3481_3496 = state_3462;
(statearr_3481_3496[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_3462[(4)]))){
var statearr_3482_3497 = state_3462;
(statearr_3482_3497[(1)] = cljs.core.first.call(null,(state_3462[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3498 = state_3462;
state_3462 = G__3498;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$state_machine__2012__auto__ = function(state_3462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2012__auto____1.call(this,state_3462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2012__auto____0;
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2012__auto____1;
return cljs$core$async$state_machine__2012__auto__;
})()
})();
var state__2087__auto__ = (function (){var statearr_3483 = f__2086__auto__.call(null);
(statearr_3483[(6)] = c__2085__auto___3485);

return statearr_3483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__3500 = arguments.length;
switch (G__3500) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2085__auto___3546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = (function (state_3524){
var state_val_3525 = (state_3524[(1)]);
if((state_val_3525 === (7))){
var inst_3506 = (state_3524[(7)]);
var inst_3506__$1 = (state_3524[(2)]);
var inst_3507 = (inst_3506__$1 == null);
var inst_3508 = cljs.core.not.call(null,inst_3507);
var state_3524__$1 = (function (){var statearr_3526 = state_3524;
(statearr_3526[(7)] = inst_3506__$1);

return statearr_3526;
})();
if(inst_3508){
var statearr_3527_3547 = state_3524__$1;
(statearr_3527_3547[(1)] = (8));

} else {
var statearr_3528_3548 = state_3524__$1;
(statearr_3528_3548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3525 === (1))){
var inst_3501 = (0);
var state_3524__$1 = (function (){var statearr_3529 = state_3524;
(statearr_3529[(8)] = inst_3501);

return statearr_3529;
})();
var statearr_3530_3549 = state_3524__$1;
(statearr_3530_3549[(2)] = null);

(statearr_3530_3549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3525 === (4))){
var state_3524__$1 = state_3524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3524__$1,(7),ch);
} else {
if((state_val_3525 === (6))){
var inst_3519 = (state_3524[(2)]);
var state_3524__$1 = state_3524;
var statearr_3531_3550 = state_3524__$1;
(statearr_3531_3550[(2)] = inst_3519);

(statearr_3531_3550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3525 === (3))){
var inst_3521 = (state_3524[(2)]);
var inst_3522 = cljs.core.async.close_BANG_.call(null,out);
var state_3524__$1 = (function (){var statearr_3532 = state_3524;
(statearr_3532[(9)] = inst_3521);

return statearr_3532;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3524__$1,inst_3522);
} else {
if((state_val_3525 === (2))){
var inst_3501 = (state_3524[(8)]);
var inst_3503 = (inst_3501 < n);
var state_3524__$1 = state_3524;
if(cljs.core.truth_(inst_3503)){
var statearr_3533_3551 = state_3524__$1;
(statearr_3533_3551[(1)] = (4));

} else {
var statearr_3534_3552 = state_3524__$1;
(statearr_3534_3552[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3525 === (11))){
var inst_3501 = (state_3524[(8)]);
var inst_3511 = (state_3524[(2)]);
var inst_3512 = (inst_3501 + (1));
var inst_3501__$1 = inst_3512;
var state_3524__$1 = (function (){var statearr_3535 = state_3524;
(statearr_3535[(10)] = inst_3511);

(statearr_3535[(8)] = inst_3501__$1);

return statearr_3535;
})();
var statearr_3536_3553 = state_3524__$1;
(statearr_3536_3553[(2)] = null);

(statearr_3536_3553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3525 === (9))){
var state_3524__$1 = state_3524;
var statearr_3537_3554 = state_3524__$1;
(statearr_3537_3554[(2)] = null);

(statearr_3537_3554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3525 === (5))){
var state_3524__$1 = state_3524;
var statearr_3538_3555 = state_3524__$1;
(statearr_3538_3555[(2)] = null);

(statearr_3538_3555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3525 === (10))){
var inst_3516 = (state_3524[(2)]);
var state_3524__$1 = state_3524;
var statearr_3539_3556 = state_3524__$1;
(statearr_3539_3556[(2)] = inst_3516);

(statearr_3539_3556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3525 === (8))){
var inst_3506 = (state_3524[(7)]);
var state_3524__$1 = state_3524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3524__$1,(11),out,inst_3506);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2012__auto__ = null;
var cljs$core$async$state_machine__2012__auto____0 = (function (){
var statearr_3540 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3540[(0)] = cljs$core$async$state_machine__2012__auto__);

(statearr_3540[(1)] = (1));

return statearr_3540;
});
var cljs$core$async$state_machine__2012__auto____1 = (function (state_3524){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_3524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e3541){var ex__2015__auto__ = e3541;
var statearr_3542_3557 = state_3524;
(statearr_3542_3557[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_3524[(4)]))){
var statearr_3543_3558 = state_3524;
(statearr_3543_3558[(1)] = cljs.core.first.call(null,(state_3524[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3559 = state_3524;
state_3524 = G__3559;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$state_machine__2012__auto__ = function(state_3524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2012__auto____1.call(this,state_3524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2012__auto____0;
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2012__auto____1;
return cljs$core$async$state_machine__2012__auto__;
})()
})();
var state__2087__auto__ = (function (){var statearr_3544 = f__2086__auto__.call(null);
(statearr_3544[(6)] = c__2085__auto___3546);

return statearr_3544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3561 = (function (f,ch,meta3562){
this.f = f;
this.ch = ch;
this.meta3562 = meta3562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3563,meta3562__$1){
var self__ = this;
var _3563__$1 = this;
return (new cljs.core.async.t_cljs$core$async3561(self__.f,self__.ch,meta3562__$1));
}));

(cljs.core.async.t_cljs$core$async3561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3563){
var self__ = this;
var _3563__$1 = this;
return self__.meta3562;
}));

(cljs.core.async.t_cljs$core$async3561.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3561.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async3561.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async3561.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3561.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3564 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3564 = (function (f,ch,meta3562,_,fn1,meta3565){
this.f = f;
this.ch = ch;
this.meta3562 = meta3562;
this._ = _;
this.fn1 = fn1;
this.meta3565 = meta3565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3566,meta3565__$1){
var self__ = this;
var _3566__$1 = this;
return (new cljs.core.async.t_cljs$core$async3564(self__.f,self__.ch,self__.meta3562,self__._,self__.fn1,meta3565__$1));
}));

(cljs.core.async.t_cljs$core$async3564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3566){
var self__ = this;
var _3566__$1 = this;
return self__.meta3565;
}));

(cljs.core.async.t_cljs$core$async3564.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3564.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async3564.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async3564.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__3560_SHARP_){
return f1.call(null,(((p1__3560_SHARP_ == null))?null:self__.f.call(null,p1__3560_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async3564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta3562","meta3562",445127034,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async3561","cljs.core.async/t_cljs$core$async3561",-249910034,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta3565","meta3565",1877280902,null)], null);
}));

(cljs.core.async.t_cljs$core$async3564.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3564");

(cljs.core.async.t_cljs$core$async3564.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async3564");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3564.
 */
cljs.core.async.__GT_t_cljs$core$async3564 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async3564(f__$1,ch__$1,meta3562__$1,___$2,fn1__$1,meta3565){
return (new cljs.core.async.t_cljs$core$async3564(f__$1,ch__$1,meta3562__$1,___$2,fn1__$1,meta3565));
});

}

return (new cljs.core.async.t_cljs$core$async3564(self__.f,self__.ch,self__.meta3562,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async3561.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3561.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async3561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta3562","meta3562",445127034,null)], null);
}));

(cljs.core.async.t_cljs$core$async3561.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3561");

(cljs.core.async.t_cljs$core$async3561.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async3561");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3561.
 */
cljs.core.async.__GT_t_cljs$core$async3561 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async3561(f__$1,ch__$1,meta3562){
return (new cljs.core.async.t_cljs$core$async3561(f__$1,ch__$1,meta3562));
});

}

return (new cljs.core.async.t_cljs$core$async3561(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3567 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3567 = (function (f,ch,meta3568){
this.f = f;
this.ch = ch;
this.meta3568 = meta3568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3569,meta3568__$1){
var self__ = this;
var _3569__$1 = this;
return (new cljs.core.async.t_cljs$core$async3567(self__.f,self__.ch,meta3568__$1));
}));

(cljs.core.async.t_cljs$core$async3567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3569){
var self__ = this;
var _3569__$1 = this;
return self__.meta3568;
}));

(cljs.core.async.t_cljs$core$async3567.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3567.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async3567.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3567.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async3567.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3567.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async3567.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta3568","meta3568",909245063,null)], null);
}));

(cljs.core.async.t_cljs$core$async3567.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3567");

(cljs.core.async.t_cljs$core$async3567.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async3567");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3567.
 */
cljs.core.async.__GT_t_cljs$core$async3567 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async3567(f__$1,ch__$1,meta3568){
return (new cljs.core.async.t_cljs$core$async3567(f__$1,ch__$1,meta3568));
});

}

return (new cljs.core.async.t_cljs$core$async3567(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3570 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3570 = (function (p,ch,meta3571){
this.p = p;
this.ch = ch;
this.meta3571 = meta3571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3572,meta3571__$1){
var self__ = this;
var _3572__$1 = this;
return (new cljs.core.async.t_cljs$core$async3570(self__.p,self__.ch,meta3571__$1));
}));

(cljs.core.async.t_cljs$core$async3570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3572){
var self__ = this;
var _3572__$1 = this;
return self__.meta3571;
}));

(cljs.core.async.t_cljs$core$async3570.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3570.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async3570.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async3570.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3570.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async3570.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3570.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async3570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta3571","meta3571",-814997138,null)], null);
}));

(cljs.core.async.t_cljs$core$async3570.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3570");

(cljs.core.async.t_cljs$core$async3570.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async3570");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3570.
 */
cljs.core.async.__GT_t_cljs$core$async3570 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async3570(p__$1,ch__$1,meta3571){
return (new cljs.core.async.t_cljs$core$async3570(p__$1,ch__$1,meta3571));
});

}

return (new cljs.core.async.t_cljs$core$async3570(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__3574 = arguments.length;
switch (G__3574) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2085__auto___3615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = (function (state_3595){
var state_val_3596 = (state_3595[(1)]);
if((state_val_3596 === (7))){
var inst_3591 = (state_3595[(2)]);
var state_3595__$1 = state_3595;
var statearr_3597_3616 = state_3595__$1;
(statearr_3597_3616[(2)] = inst_3591);

(statearr_3597_3616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3596 === (1))){
var state_3595__$1 = state_3595;
var statearr_3598_3617 = state_3595__$1;
(statearr_3598_3617[(2)] = null);

(statearr_3598_3617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3596 === (4))){
var inst_3577 = (state_3595[(7)]);
var inst_3577__$1 = (state_3595[(2)]);
var inst_3578 = (inst_3577__$1 == null);
var state_3595__$1 = (function (){var statearr_3599 = state_3595;
(statearr_3599[(7)] = inst_3577__$1);

return statearr_3599;
})();
if(cljs.core.truth_(inst_3578)){
var statearr_3600_3618 = state_3595__$1;
(statearr_3600_3618[(1)] = (5));

} else {
var statearr_3601_3619 = state_3595__$1;
(statearr_3601_3619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3596 === (6))){
var inst_3577 = (state_3595[(7)]);
var inst_3582 = p.call(null,inst_3577);
var state_3595__$1 = state_3595;
if(cljs.core.truth_(inst_3582)){
var statearr_3602_3620 = state_3595__$1;
(statearr_3602_3620[(1)] = (8));

} else {
var statearr_3603_3621 = state_3595__$1;
(statearr_3603_3621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3596 === (3))){
var inst_3593 = (state_3595[(2)]);
var state_3595__$1 = state_3595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3595__$1,inst_3593);
} else {
if((state_val_3596 === (2))){
var state_3595__$1 = state_3595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3595__$1,(4),ch);
} else {
if((state_val_3596 === (11))){
var inst_3585 = (state_3595[(2)]);
var state_3595__$1 = state_3595;
var statearr_3604_3622 = state_3595__$1;
(statearr_3604_3622[(2)] = inst_3585);

(statearr_3604_3622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3596 === (9))){
var state_3595__$1 = state_3595;
var statearr_3605_3623 = state_3595__$1;
(statearr_3605_3623[(2)] = null);

(statearr_3605_3623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3596 === (5))){
var inst_3580 = cljs.core.async.close_BANG_.call(null,out);
var state_3595__$1 = state_3595;
var statearr_3606_3624 = state_3595__$1;
(statearr_3606_3624[(2)] = inst_3580);

(statearr_3606_3624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3596 === (10))){
var inst_3588 = (state_3595[(2)]);
var state_3595__$1 = (function (){var statearr_3607 = state_3595;
(statearr_3607[(8)] = inst_3588);

return statearr_3607;
})();
var statearr_3608_3625 = state_3595__$1;
(statearr_3608_3625[(2)] = null);

(statearr_3608_3625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3596 === (8))){
var inst_3577 = (state_3595[(7)]);
var state_3595__$1 = state_3595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3595__$1,(11),out,inst_3577);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2012__auto__ = null;
var cljs$core$async$state_machine__2012__auto____0 = (function (){
var statearr_3609 = [null,null,null,null,null,null,null,null,null];
(statearr_3609[(0)] = cljs$core$async$state_machine__2012__auto__);

(statearr_3609[(1)] = (1));

return statearr_3609;
});
var cljs$core$async$state_machine__2012__auto____1 = (function (state_3595){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_3595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e3610){var ex__2015__auto__ = e3610;
var statearr_3611_3626 = state_3595;
(statearr_3611_3626[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_3595[(4)]))){
var statearr_3612_3627 = state_3595;
(statearr_3612_3627[(1)] = cljs.core.first.call(null,(state_3595[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3628 = state_3595;
state_3595 = G__3628;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$state_machine__2012__auto__ = function(state_3595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2012__auto____1.call(this,state_3595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2012__auto____0;
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2012__auto____1;
return cljs$core$async$state_machine__2012__auto__;
})()
})();
var state__2087__auto__ = (function (){var statearr_3613 = f__2086__auto__.call(null);
(statearr_3613[(6)] = c__2085__auto___3615);

return statearr_3613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__3630 = arguments.length;
switch (G__3630) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__2085__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = (function (state_3693){
var state_val_3694 = (state_3693[(1)]);
if((state_val_3694 === (7))){
var inst_3689 = (state_3693[(2)]);
var state_3693__$1 = state_3693;
var statearr_3695_3734 = state_3693__$1;
(statearr_3695_3734[(2)] = inst_3689);

(statearr_3695_3734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3694 === (20))){
var inst_3659 = (state_3693[(7)]);
var inst_3670 = (state_3693[(2)]);
var inst_3671 = cljs.core.next.call(null,inst_3659);
var inst_3645 = inst_3671;
var inst_3646 = null;
var inst_3647 = (0);
var inst_3648 = (0);
var state_3693__$1 = (function (){var statearr_3696 = state_3693;
(statearr_3696[(8)] = inst_3670);

(statearr_3696[(9)] = inst_3645);

(statearr_3696[(10)] = inst_3646);

(statearr_3696[(11)] = inst_3647);

(statearr_3696[(12)] = inst_3648);

return statearr_3696;
})();
var statearr_3697_3735 = state_3693__$1;
(statearr_3697_3735[(2)] = null);

(statearr_3697_3735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3694 === (1))){
var state_3693__$1 = state_3693;
var statearr_3698_3736 = state_3693__$1;
(statearr_3698_3736[(2)] = null);

(statearr_3698_3736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3694 === (4))){
var inst_3634 = (state_3693[(13)]);
var inst_3634__$1 = (state_3693[(2)]);
var inst_3635 = (inst_3634__$1 == null);
var state_3693__$1 = (function (){var statearr_3699 = state_3693;
(statearr_3699[(13)] = inst_3634__$1);

return statearr_3699;
})();
if(cljs.core.truth_(inst_3635)){
var statearr_3700_3737 = state_3693__$1;
(statearr_3700_3737[(1)] = (5));

} else {
var statearr_3701_3738 = state_3693__$1;
(statearr_3701_3738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3694 === (15))){
var state_3693__$1 = state_3693;
var statearr_3705_3739 = state_3693__$1;
(statearr_3705_3739[(2)] = null);

(statearr_3705_3739[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3694 === (21))){
var state_3693__$1 = state_3693;
var statearr_3706_3740 = state_3693__$1;
(statearr_3706_3740[(2)] = null);

(statearr_3706_3740[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3694 === (13))){
var inst_3648 = (state_3693[(12)]);
var inst_3645 = (state_3693[(9)]);
var inst_3646 = (state_3693[(10)]);
var inst_3647 = (state_3693[(11)]);
var inst_3655 = (state_3693[(2)]);
var inst_3656 = (inst_3648 + (1));
var tmp3702 = inst_3646;
var tmp3703 = inst_3645;
var tmp3704 = inst_3647;
var inst_3645__$1 = tmp3703;
var inst_3646__$1 = tmp3702;
var inst_3647__$1 = tmp3704;
var inst_3648__$1 = inst_3656;
var state_3693__$1 = (function (){var statearr_3707 = state_3693;
(statearr_3707[(14)] = inst_3655);

(statearr_3707[(9)] = inst_3645__$1);

(statearr_3707[(10)] = inst_3646__$1);

(statearr_3707[(11)] = inst_3647__$1);

(statearr_3707[(12)] = inst_3648__$1);

return statearr_3707;
})();
var statearr_3708_3741 = state_3693__$1;
(statearr_3708_3741[(2)] = null);

(statearr_3708_3741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3694 === (22))){
var state_3693__$1 = state_3693;
var statearr_3709_3742 = state_3693__$1;
(statearr_3709_3742[(2)] = null);

(statearr_3709_3742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3694 === (6))){
var inst_3634 = (state_3693[(13)]);
var inst_3643 = f.call(null,inst_3634);
var inst_3644 = cljs.core.seq.call(null,inst_3643);
var inst_3645 = inst_3644;
var inst_3646 = null;
var inst_3647 = (0);
var inst_3648 = (0);
var state_3693__$1 = (function (){var statearr_3710 = state_3693;
(statearr_3710[(9)] = inst_3645);

(statearr_3710[(10)] = inst_3646);

(statearr_3710[(11)] = inst_3647);

(statearr_3710[(12)] = inst_3648);

return statearr_3710;
})();
var statearr_3711_3743 = state_3693__$1;
(statearr_3711_3743[(2)] = null);

(statearr_3711_3743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3694 === (17))){
var inst_3659 = (state_3693[(7)]);
var inst_3663 = cljs.core.chunk_first.call(null,inst_3659);
var inst_3664 = cljs.core.chunk_rest.call(null,inst_3659);
var inst_3665 = cljs.core.count.call(null,inst_3663);
var inst_3645 = inst_3664;
var inst_3646 = inst_3663;
var inst_3647 = inst_3665;
var inst_3648 = (0);
var state_3693__$1 = (function (){var statearr_3712 = state_3693;
(statearr_3712[(9)] = inst_3645);

(statearr_3712[(10)] = inst_3646);

(statearr_3712[(11)] = inst_3647);

(statearr_3712[(12)] = inst_3648);

return statearr_3712;
})();
var statearr_3713_3744 = state_3693__$1;
(statearr_3713_3744[(2)] = null);

(statearr_3713_3744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3694 === (3))){
var inst_3691 = (state_3693[(2)]);
var state_3693__$1 = state_3693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3693__$1,inst_3691);
} else {
if((state_val_3694 === (12))){
var inst_3679 = (state_3693[(2)]);
var state_3693__$1 = state_3693;
var statearr_3714_3745 = state_3693__$1;
(statearr_3714_3745[(2)] = inst_3679);

(statearr_3714_3745[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3694 === (2))){
var state_3693__$1 = state_3693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3693__$1,(4),in$);
} else {
if((state_val_3694 === (23))){
var inst_3687 = (state_3693[(2)]);
var state_3693__$1 = state_3693;
var statearr_3715_3746 = state_3693__$1;
(statearr_3715_3746[(2)] = inst_3687);

(statearr_3715_3746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3694 === (19))){
var inst_3674 = (state_3693[(2)]);
var state_3693__$1 = state_3693;
var statearr_3716_3747 = state_3693__$1;
(statearr_3716_3747[(2)] = inst_3674);

(statearr_3716_3747[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3694 === (11))){
var inst_3645 = (state_3693[(9)]);
var inst_3659 = (state_3693[(7)]);
var inst_3659__$1 = cljs.core.seq.call(null,inst_3645);
var state_3693__$1 = (function (){var statearr_3717 = state_3693;
(statearr_3717[(7)] = inst_3659__$1);

return statearr_3717;
})();
if(inst_3659__$1){
var statearr_3718_3748 = state_3693__$1;
(statearr_3718_3748[(1)] = (14));

} else {
var statearr_3719_3749 = state_3693__$1;
(statearr_3719_3749[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3694 === (9))){
var inst_3681 = (state_3693[(2)]);
var inst_3682 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_3693__$1 = (function (){var statearr_3720 = state_3693;
(statearr_3720[(15)] = inst_3681);

return statearr_3720;
})();
if(cljs.core.truth_(inst_3682)){
var statearr_3721_3750 = state_3693__$1;
(statearr_3721_3750[(1)] = (21));

} else {
var statearr_3722_3751 = state_3693__$1;
(statearr_3722_3751[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3694 === (5))){
var inst_3637 = cljs.core.async.close_BANG_.call(null,out);
var state_3693__$1 = state_3693;
var statearr_3723_3752 = state_3693__$1;
(statearr_3723_3752[(2)] = inst_3637);

(statearr_3723_3752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3694 === (14))){
var inst_3659 = (state_3693[(7)]);
var inst_3661 = cljs.core.chunked_seq_QMARK_.call(null,inst_3659);
var state_3693__$1 = state_3693;
if(inst_3661){
var statearr_3724_3753 = state_3693__$1;
(statearr_3724_3753[(1)] = (17));

} else {
var statearr_3725_3754 = state_3693__$1;
(statearr_3725_3754[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3694 === (16))){
var inst_3677 = (state_3693[(2)]);
var state_3693__$1 = state_3693;
var statearr_3726_3755 = state_3693__$1;
(statearr_3726_3755[(2)] = inst_3677);

(statearr_3726_3755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3694 === (10))){
var inst_3646 = (state_3693[(10)]);
var inst_3648 = (state_3693[(12)]);
var inst_3653 = cljs.core._nth.call(null,inst_3646,inst_3648);
var state_3693__$1 = state_3693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3693__$1,(13),out,inst_3653);
} else {
if((state_val_3694 === (18))){
var inst_3659 = (state_3693[(7)]);
var inst_3668 = cljs.core.first.call(null,inst_3659);
var state_3693__$1 = state_3693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3693__$1,(20),out,inst_3668);
} else {
if((state_val_3694 === (8))){
var inst_3648 = (state_3693[(12)]);
var inst_3647 = (state_3693[(11)]);
var inst_3650 = (inst_3648 < inst_3647);
var inst_3651 = inst_3650;
var state_3693__$1 = state_3693;
if(cljs.core.truth_(inst_3651)){
var statearr_3727_3756 = state_3693__$1;
(statearr_3727_3756[(1)] = (10));

} else {
var statearr_3728_3757 = state_3693__$1;
(statearr_3728_3757[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__2012__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__2012__auto____0 = (function (){
var statearr_3729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3729[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__2012__auto__);

(statearr_3729[(1)] = (1));

return statearr_3729;
});
var cljs$core$async$mapcat_STAR__$_state_machine__2012__auto____1 = (function (state_3693){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_3693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e3730){var ex__2015__auto__ = e3730;
var statearr_3731_3758 = state_3693;
(statearr_3731_3758[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_3693[(4)]))){
var statearr_3732_3759 = state_3693;
(statearr_3732_3759[(1)] = cljs.core.first.call(null,(state_3693[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3760 = state_3693;
state_3693 = G__3760;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__2012__auto__ = function(state_3693){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__2012__auto____1.call(this,state_3693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__2012__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__2012__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__2012__auto__;
})()
})();
var state__2087__auto__ = (function (){var statearr_3733 = f__2086__auto__.call(null);
(statearr_3733[(6)] = c__2085__auto__);

return statearr_3733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
}));

return c__2085__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__3762 = arguments.length;
switch (G__3762) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__3765 = arguments.length;
switch (G__3765) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__3768 = arguments.length;
switch (G__3768) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2085__auto___3816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = (function (state_3792){
var state_val_3793 = (state_3792[(1)]);
if((state_val_3793 === (7))){
var inst_3787 = (state_3792[(2)]);
var state_3792__$1 = state_3792;
var statearr_3794_3817 = state_3792__$1;
(statearr_3794_3817[(2)] = inst_3787);

(statearr_3794_3817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3793 === (1))){
var inst_3769 = null;
var state_3792__$1 = (function (){var statearr_3795 = state_3792;
(statearr_3795[(7)] = inst_3769);

return statearr_3795;
})();
var statearr_3796_3818 = state_3792__$1;
(statearr_3796_3818[(2)] = null);

(statearr_3796_3818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3793 === (4))){
var inst_3772 = (state_3792[(8)]);
var inst_3772__$1 = (state_3792[(2)]);
var inst_3773 = (inst_3772__$1 == null);
var inst_3774 = cljs.core.not.call(null,inst_3773);
var state_3792__$1 = (function (){var statearr_3797 = state_3792;
(statearr_3797[(8)] = inst_3772__$1);

return statearr_3797;
})();
if(inst_3774){
var statearr_3798_3819 = state_3792__$1;
(statearr_3798_3819[(1)] = (5));

} else {
var statearr_3799_3820 = state_3792__$1;
(statearr_3799_3820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3793 === (6))){
var state_3792__$1 = state_3792;
var statearr_3800_3821 = state_3792__$1;
(statearr_3800_3821[(2)] = null);

(statearr_3800_3821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3793 === (3))){
var inst_3789 = (state_3792[(2)]);
var inst_3790 = cljs.core.async.close_BANG_.call(null,out);
var state_3792__$1 = (function (){var statearr_3801 = state_3792;
(statearr_3801[(9)] = inst_3789);

return statearr_3801;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3792__$1,inst_3790);
} else {
if((state_val_3793 === (2))){
var state_3792__$1 = state_3792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3792__$1,(4),ch);
} else {
if((state_val_3793 === (11))){
var inst_3772 = (state_3792[(8)]);
var inst_3781 = (state_3792[(2)]);
var inst_3769 = inst_3772;
var state_3792__$1 = (function (){var statearr_3802 = state_3792;
(statearr_3802[(10)] = inst_3781);

(statearr_3802[(7)] = inst_3769);

return statearr_3802;
})();
var statearr_3803_3822 = state_3792__$1;
(statearr_3803_3822[(2)] = null);

(statearr_3803_3822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3793 === (9))){
var inst_3772 = (state_3792[(8)]);
var state_3792__$1 = state_3792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3792__$1,(11),out,inst_3772);
} else {
if((state_val_3793 === (5))){
var inst_3772 = (state_3792[(8)]);
var inst_3769 = (state_3792[(7)]);
var inst_3776 = cljs.core._EQ_.call(null,inst_3772,inst_3769);
var state_3792__$1 = state_3792;
if(inst_3776){
var statearr_3805_3823 = state_3792__$1;
(statearr_3805_3823[(1)] = (8));

} else {
var statearr_3806_3824 = state_3792__$1;
(statearr_3806_3824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3793 === (10))){
var inst_3784 = (state_3792[(2)]);
var state_3792__$1 = state_3792;
var statearr_3807_3825 = state_3792__$1;
(statearr_3807_3825[(2)] = inst_3784);

(statearr_3807_3825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3793 === (8))){
var inst_3769 = (state_3792[(7)]);
var tmp3804 = inst_3769;
var inst_3769__$1 = tmp3804;
var state_3792__$1 = (function (){var statearr_3808 = state_3792;
(statearr_3808[(7)] = inst_3769__$1);

return statearr_3808;
})();
var statearr_3809_3826 = state_3792__$1;
(statearr_3809_3826[(2)] = null);

(statearr_3809_3826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2012__auto__ = null;
var cljs$core$async$state_machine__2012__auto____0 = (function (){
var statearr_3810 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3810[(0)] = cljs$core$async$state_machine__2012__auto__);

(statearr_3810[(1)] = (1));

return statearr_3810;
});
var cljs$core$async$state_machine__2012__auto____1 = (function (state_3792){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_3792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e3811){var ex__2015__auto__ = e3811;
var statearr_3812_3827 = state_3792;
(statearr_3812_3827[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_3792[(4)]))){
var statearr_3813_3828 = state_3792;
(statearr_3813_3828[(1)] = cljs.core.first.call(null,(state_3792[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3829 = state_3792;
state_3792 = G__3829;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$state_machine__2012__auto__ = function(state_3792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2012__auto____1.call(this,state_3792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2012__auto____0;
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2012__auto____1;
return cljs$core$async$state_machine__2012__auto__;
})()
})();
var state__2087__auto__ = (function (){var statearr_3814 = f__2086__auto__.call(null);
(statearr_3814[(6)] = c__2085__auto___3816);

return statearr_3814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__3831 = arguments.length;
switch (G__3831) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2085__auto___3898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = (function (state_3869){
var state_val_3870 = (state_3869[(1)]);
if((state_val_3870 === (7))){
var inst_3865 = (state_3869[(2)]);
var state_3869__$1 = state_3869;
var statearr_3871_3899 = state_3869__$1;
(statearr_3871_3899[(2)] = inst_3865);

(statearr_3871_3899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3870 === (1))){
var inst_3832 = (new Array(n));
var inst_3833 = inst_3832;
var inst_3834 = (0);
var state_3869__$1 = (function (){var statearr_3872 = state_3869;
(statearr_3872[(7)] = inst_3833);

(statearr_3872[(8)] = inst_3834);

return statearr_3872;
})();
var statearr_3873_3900 = state_3869__$1;
(statearr_3873_3900[(2)] = null);

(statearr_3873_3900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3870 === (4))){
var inst_3837 = (state_3869[(9)]);
var inst_3837__$1 = (state_3869[(2)]);
var inst_3838 = (inst_3837__$1 == null);
var inst_3839 = cljs.core.not.call(null,inst_3838);
var state_3869__$1 = (function (){var statearr_3874 = state_3869;
(statearr_3874[(9)] = inst_3837__$1);

return statearr_3874;
})();
if(inst_3839){
var statearr_3875_3901 = state_3869__$1;
(statearr_3875_3901[(1)] = (5));

} else {
var statearr_3876_3902 = state_3869__$1;
(statearr_3876_3902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3870 === (15))){
var inst_3859 = (state_3869[(2)]);
var state_3869__$1 = state_3869;
var statearr_3877_3903 = state_3869__$1;
(statearr_3877_3903[(2)] = inst_3859);

(statearr_3877_3903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3870 === (13))){
var state_3869__$1 = state_3869;
var statearr_3878_3904 = state_3869__$1;
(statearr_3878_3904[(2)] = null);

(statearr_3878_3904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3870 === (6))){
var inst_3834 = (state_3869[(8)]);
var inst_3855 = (inst_3834 > (0));
var state_3869__$1 = state_3869;
if(cljs.core.truth_(inst_3855)){
var statearr_3879_3905 = state_3869__$1;
(statearr_3879_3905[(1)] = (12));

} else {
var statearr_3880_3906 = state_3869__$1;
(statearr_3880_3906[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3870 === (3))){
var inst_3867 = (state_3869[(2)]);
var state_3869__$1 = state_3869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3869__$1,inst_3867);
} else {
if((state_val_3870 === (12))){
var inst_3833 = (state_3869[(7)]);
var inst_3857 = cljs.core.vec.call(null,inst_3833);
var state_3869__$1 = state_3869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3869__$1,(15),out,inst_3857);
} else {
if((state_val_3870 === (2))){
var state_3869__$1 = state_3869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3869__$1,(4),ch);
} else {
if((state_val_3870 === (11))){
var inst_3849 = (state_3869[(2)]);
var inst_3850 = (new Array(n));
var inst_3833 = inst_3850;
var inst_3834 = (0);
var state_3869__$1 = (function (){var statearr_3881 = state_3869;
(statearr_3881[(10)] = inst_3849);

(statearr_3881[(7)] = inst_3833);

(statearr_3881[(8)] = inst_3834);

return statearr_3881;
})();
var statearr_3882_3907 = state_3869__$1;
(statearr_3882_3907[(2)] = null);

(statearr_3882_3907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3870 === (9))){
var inst_3833 = (state_3869[(7)]);
var inst_3847 = cljs.core.vec.call(null,inst_3833);
var state_3869__$1 = state_3869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3869__$1,(11),out,inst_3847);
} else {
if((state_val_3870 === (5))){
var inst_3833 = (state_3869[(7)]);
var inst_3834 = (state_3869[(8)]);
var inst_3837 = (state_3869[(9)]);
var inst_3842 = (state_3869[(11)]);
var inst_3841 = (inst_3833[inst_3834] = inst_3837);
var inst_3842__$1 = (inst_3834 + (1));
var inst_3843 = (inst_3842__$1 < n);
var state_3869__$1 = (function (){var statearr_3883 = state_3869;
(statearr_3883[(12)] = inst_3841);

(statearr_3883[(11)] = inst_3842__$1);

return statearr_3883;
})();
if(cljs.core.truth_(inst_3843)){
var statearr_3884_3908 = state_3869__$1;
(statearr_3884_3908[(1)] = (8));

} else {
var statearr_3885_3909 = state_3869__$1;
(statearr_3885_3909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3870 === (14))){
var inst_3862 = (state_3869[(2)]);
var inst_3863 = cljs.core.async.close_BANG_.call(null,out);
var state_3869__$1 = (function (){var statearr_3887 = state_3869;
(statearr_3887[(13)] = inst_3862);

return statearr_3887;
})();
var statearr_3888_3910 = state_3869__$1;
(statearr_3888_3910[(2)] = inst_3863);

(statearr_3888_3910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3870 === (10))){
var inst_3853 = (state_3869[(2)]);
var state_3869__$1 = state_3869;
var statearr_3889_3911 = state_3869__$1;
(statearr_3889_3911[(2)] = inst_3853);

(statearr_3889_3911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3870 === (8))){
var inst_3833 = (state_3869[(7)]);
var inst_3842 = (state_3869[(11)]);
var tmp3886 = inst_3833;
var inst_3833__$1 = tmp3886;
var inst_3834 = inst_3842;
var state_3869__$1 = (function (){var statearr_3890 = state_3869;
(statearr_3890[(7)] = inst_3833__$1);

(statearr_3890[(8)] = inst_3834);

return statearr_3890;
})();
var statearr_3891_3912 = state_3869__$1;
(statearr_3891_3912[(2)] = null);

(statearr_3891_3912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2012__auto__ = null;
var cljs$core$async$state_machine__2012__auto____0 = (function (){
var statearr_3892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3892[(0)] = cljs$core$async$state_machine__2012__auto__);

(statearr_3892[(1)] = (1));

return statearr_3892;
});
var cljs$core$async$state_machine__2012__auto____1 = (function (state_3869){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_3869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e3893){var ex__2015__auto__ = e3893;
var statearr_3894_3913 = state_3869;
(statearr_3894_3913[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_3869[(4)]))){
var statearr_3895_3914 = state_3869;
(statearr_3895_3914[(1)] = cljs.core.first.call(null,(state_3869[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3915 = state_3869;
state_3869 = G__3915;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$state_machine__2012__auto__ = function(state_3869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2012__auto____1.call(this,state_3869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2012__auto____0;
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2012__auto____1;
return cljs$core$async$state_machine__2012__auto__;
})()
})();
var state__2087__auto__ = (function (){var statearr_3896 = f__2086__auto__.call(null);
(statearr_3896[(6)] = c__2085__auto___3898);

return statearr_3896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__3917 = arguments.length;
switch (G__3917) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2085__auto___3995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2086__auto__ = (function (){var switch__2011__auto__ = (function (state_3962){
var state_val_3963 = (state_3962[(1)]);
if((state_val_3963 === (7))){
var inst_3958 = (state_3962[(2)]);
var state_3962__$1 = state_3962;
var statearr_3964_3996 = state_3962__$1;
(statearr_3964_3996[(2)] = inst_3958);

(statearr_3964_3996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3963 === (1))){
var inst_3918 = [];
var inst_3919 = inst_3918;
var inst_3920 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_3962__$1 = (function (){var statearr_3965 = state_3962;
(statearr_3965[(7)] = inst_3919);

(statearr_3965[(8)] = inst_3920);

return statearr_3965;
})();
var statearr_3966_3997 = state_3962__$1;
(statearr_3966_3997[(2)] = null);

(statearr_3966_3997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3963 === (4))){
var inst_3923 = (state_3962[(9)]);
var inst_3923__$1 = (state_3962[(2)]);
var inst_3924 = (inst_3923__$1 == null);
var inst_3925 = cljs.core.not.call(null,inst_3924);
var state_3962__$1 = (function (){var statearr_3967 = state_3962;
(statearr_3967[(9)] = inst_3923__$1);

return statearr_3967;
})();
if(inst_3925){
var statearr_3968_3998 = state_3962__$1;
(statearr_3968_3998[(1)] = (5));

} else {
var statearr_3969_3999 = state_3962__$1;
(statearr_3969_3999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3963 === (15))){
var inst_3919 = (state_3962[(7)]);
var inst_3950 = cljs.core.vec.call(null,inst_3919);
var state_3962__$1 = state_3962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3962__$1,(18),out,inst_3950);
} else {
if((state_val_3963 === (13))){
var inst_3945 = (state_3962[(2)]);
var state_3962__$1 = state_3962;
var statearr_3970_4000 = state_3962__$1;
(statearr_3970_4000[(2)] = inst_3945);

(statearr_3970_4000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3963 === (6))){
var inst_3919 = (state_3962[(7)]);
var inst_3947 = inst_3919.length;
var inst_3948 = (inst_3947 > (0));
var state_3962__$1 = state_3962;
if(cljs.core.truth_(inst_3948)){
var statearr_3971_4001 = state_3962__$1;
(statearr_3971_4001[(1)] = (15));

} else {
var statearr_3972_4002 = state_3962__$1;
(statearr_3972_4002[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3963 === (17))){
var inst_3955 = (state_3962[(2)]);
var inst_3956 = cljs.core.async.close_BANG_.call(null,out);
var state_3962__$1 = (function (){var statearr_3973 = state_3962;
(statearr_3973[(10)] = inst_3955);

return statearr_3973;
})();
var statearr_3974_4003 = state_3962__$1;
(statearr_3974_4003[(2)] = inst_3956);

(statearr_3974_4003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3963 === (3))){
var inst_3960 = (state_3962[(2)]);
var state_3962__$1 = state_3962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3962__$1,inst_3960);
} else {
if((state_val_3963 === (12))){
var inst_3919 = (state_3962[(7)]);
var inst_3938 = cljs.core.vec.call(null,inst_3919);
var state_3962__$1 = state_3962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3962__$1,(14),out,inst_3938);
} else {
if((state_val_3963 === (2))){
var state_3962__$1 = state_3962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3962__$1,(4),ch);
} else {
if((state_val_3963 === (11))){
var inst_3919 = (state_3962[(7)]);
var inst_3923 = (state_3962[(9)]);
var inst_3927 = (state_3962[(11)]);
var inst_3935 = inst_3919.push(inst_3923);
var tmp3975 = inst_3919;
var inst_3919__$1 = tmp3975;
var inst_3920 = inst_3927;
var state_3962__$1 = (function (){var statearr_3976 = state_3962;
(statearr_3976[(12)] = inst_3935);

(statearr_3976[(7)] = inst_3919__$1);

(statearr_3976[(8)] = inst_3920);

return statearr_3976;
})();
var statearr_3977_4004 = state_3962__$1;
(statearr_3977_4004[(2)] = null);

(statearr_3977_4004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3963 === (9))){
var inst_3920 = (state_3962[(8)]);
var inst_3931 = cljs.core.keyword_identical_QMARK_.call(null,inst_3920,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_3962__$1 = state_3962;
var statearr_3978_4005 = state_3962__$1;
(statearr_3978_4005[(2)] = inst_3931);

(statearr_3978_4005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3963 === (5))){
var inst_3923 = (state_3962[(9)]);
var inst_3927 = (state_3962[(11)]);
var inst_3920 = (state_3962[(8)]);
var inst_3928 = (state_3962[(13)]);
var inst_3927__$1 = f.call(null,inst_3923);
var inst_3928__$1 = cljs.core._EQ_.call(null,inst_3927__$1,inst_3920);
var state_3962__$1 = (function (){var statearr_3979 = state_3962;
(statearr_3979[(11)] = inst_3927__$1);

(statearr_3979[(13)] = inst_3928__$1);

return statearr_3979;
})();
if(inst_3928__$1){
var statearr_3980_4006 = state_3962__$1;
(statearr_3980_4006[(1)] = (8));

} else {
var statearr_3981_4007 = state_3962__$1;
(statearr_3981_4007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3963 === (14))){
var inst_3923 = (state_3962[(9)]);
var inst_3927 = (state_3962[(11)]);
var inst_3940 = (state_3962[(2)]);
var inst_3941 = [];
var inst_3942 = inst_3941.push(inst_3923);
var inst_3919 = inst_3941;
var inst_3920 = inst_3927;
var state_3962__$1 = (function (){var statearr_3982 = state_3962;
(statearr_3982[(14)] = inst_3940);

(statearr_3982[(15)] = inst_3942);

(statearr_3982[(7)] = inst_3919);

(statearr_3982[(8)] = inst_3920);

return statearr_3982;
})();
var statearr_3983_4008 = state_3962__$1;
(statearr_3983_4008[(2)] = null);

(statearr_3983_4008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3963 === (16))){
var state_3962__$1 = state_3962;
var statearr_3984_4009 = state_3962__$1;
(statearr_3984_4009[(2)] = null);

(statearr_3984_4009[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3963 === (10))){
var inst_3933 = (state_3962[(2)]);
var state_3962__$1 = state_3962;
if(cljs.core.truth_(inst_3933)){
var statearr_3985_4010 = state_3962__$1;
(statearr_3985_4010[(1)] = (11));

} else {
var statearr_3986_4011 = state_3962__$1;
(statearr_3986_4011[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3963 === (18))){
var inst_3952 = (state_3962[(2)]);
var state_3962__$1 = state_3962;
var statearr_3987_4012 = state_3962__$1;
(statearr_3987_4012[(2)] = inst_3952);

(statearr_3987_4012[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3963 === (8))){
var inst_3928 = (state_3962[(13)]);
var state_3962__$1 = state_3962;
var statearr_3988_4013 = state_3962__$1;
(statearr_3988_4013[(2)] = inst_3928);

(statearr_3988_4013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2012__auto__ = null;
var cljs$core$async$state_machine__2012__auto____0 = (function (){
var statearr_3989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3989[(0)] = cljs$core$async$state_machine__2012__auto__);

(statearr_3989[(1)] = (1));

return statearr_3989;
});
var cljs$core$async$state_machine__2012__auto____1 = (function (state_3962){
while(true){
var ret_value__2013__auto__ = (function (){try{while(true){
var result__2014__auto__ = switch__2011__auto__.call(null,state_3962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2014__auto__;
}
break;
}
}catch (e3990){var ex__2015__auto__ = e3990;
var statearr_3991_4014 = state_3962;
(statearr_3991_4014[(2)] = ex__2015__auto__);


if(cljs.core.seq.call(null,(state_3962[(4)]))){
var statearr_3992_4015 = state_3962;
(statearr_3992_4015[(1)] = cljs.core.first.call(null,(state_3962[(4)])));

} else {
throw ex__2015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4016 = state_3962;
state_3962 = G__4016;
continue;
} else {
return ret_value__2013__auto__;
}
break;
}
});
cljs$core$async$state_machine__2012__auto__ = function(state_3962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2012__auto____1.call(this,state_3962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2012__auto____0;
cljs$core$async$state_machine__2012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2012__auto____1;
return cljs$core$async$state_machine__2012__auto__;
})()
})();
var state__2087__auto__ = (function (){var statearr_3993 = f__2086__auto__.call(null);
(statearr_3993[(6)] = c__2085__auto___3995);

return statearr_3993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2087__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
