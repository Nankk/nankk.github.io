// Compiled by ClojureScript 1.10.520 {}
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
o.warn = ((function (o){
return (function() { 
var G__33009__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33010__i = 0, G__33010__a = new Array(arguments.length -  0);
while (G__33010__i < G__33010__a.length) {G__33010__a[G__33010__i] = arguments[G__33010__i + 0]; ++G__33010__i;}
  args = new cljs.core.IndexedSeq(G__33010__a,0,null);
} 
return G__33009__delegate.call(this,args);};
G__33009.cljs$lang$maxFixedArity = 0;
G__33009.cljs$lang$applyTo = (function (arglist__33011){
var args = cljs.core.seq(arglist__33011);
return G__33009__delegate(args);
});
G__33009.cljs$core$IFn$_invoke$arity$variadic = G__33009__delegate;
return G__33009;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__33012__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33013__i = 0, G__33013__a = new Array(arguments.length -  0);
while (G__33013__i < G__33013__a.length) {G__33013__a[G__33013__i] = arguments[G__33013__i + 0]; ++G__33013__i;}
  args = new cljs.core.IndexedSeq(G__33013__a,0,null);
} 
return G__33012__delegate.call(this,args);};
G__33012.cljs$lang$maxFixedArity = 0;
G__33012.cljs$lang$applyTo = (function (arglist__33014){
var args = cljs.core.seq(arglist__33014);
return G__33012__delegate(args);
});
G__33012.cljs$core$IFn$_invoke$arity$variadic = G__33012__delegate;
return G__33012;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1563379453371
