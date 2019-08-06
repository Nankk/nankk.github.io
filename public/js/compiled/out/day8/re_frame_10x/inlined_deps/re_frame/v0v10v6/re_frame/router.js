// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.later_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816),(function (f){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.after_render.call(null,(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.next_tick.call(null,f);
}));
}),new cljs.core.Keyword(null,"yield","yield",177875009),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.next_tick], null);

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.IEventQueue = function(){};

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.push = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$push(this$,event){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$push$arity$2 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$push$arity$2(this$,event);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.push[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,event);
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.push["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.push",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.add_post_event_callback = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$add_post_event_callback(this$,id,callack){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$add_post_event_callback$arity$3 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$add_post_event_callback$arity$3(this$,id,callack);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.add_post_event_callback[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,id,callack);
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.add_post_event_callback["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,id,callack);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.add-post-event-callback",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.remove_post_event_callback = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$remove_post_event_callback(this$,f){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$remove_post_event_callback$arity$2 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$remove_post_event_callback$arity$2(this$,f);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.remove_post_event_callback[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,f);
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.remove_post_event_callback["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.remove-post-event-callback",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.purge = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$purge(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$purge$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$purge$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.purge[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.purge["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.purge",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._fsm_trigger = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$_fsm_trigger(this$,trigger,arg){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_fsm_trigger$arity$3 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._fsm_trigger[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,trigger,arg);
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._fsm_trigger["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,trigger,arg);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-fsm-trigger",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._add_event = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$_add_event(this$,event){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_add_event$arity$2 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_add_event$arity$2(this$,event);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._add_event[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,event);
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._add_event["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-add-event",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._process_1st_event_in_queue = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$_process_1st_event_in_queue(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._process_1st_event_in_queue[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._process_1st_event_in_queue["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-process-1st-event-in-queue",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._run_next_tick = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$_run_next_tick(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_run_next_tick$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_run_next_tick$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._run_next_tick[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._run_next_tick["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-run-next-tick",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._run_queue = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$_run_queue(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_run_queue$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_run_queue$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._run_queue[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._run_queue["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-run-queue",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._exception = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$_exception(this$,ex){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_exception$arity$2 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_exception$arity$2(this$,ex);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._exception[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,ex);
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._exception["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,ex);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-exception",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._pause = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$_pause(this$,later_fn){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_pause$arity$2 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._pause[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,later_fn);
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._pause["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,later_fn);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-pause",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._resume = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$_resume(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_resume$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_resume$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._resume[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._resume["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-resume",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._call_post_event_callbacks = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$_call_post_event_callbacks(this$,event){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(this$,event);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._call_post_event_callbacks[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,event);
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._call_post_event_callbacks["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-call-post-event-callbacks",this$);
}
}
}
});


/**
* @constructor
 * @implements {day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.IEventQueue}
*/
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count.call(null,self__.queue);
while(true){
if((n === (0))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"finish-run","finish-run",753148477),null);
} else {
var temp__5733__auto__ = cljs.core.some.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.later_fns,cljs.core.keys.call(null,cljs.core.meta.call(null,cljs.core.peek.call(null,self__.queue))));
if(cljs.core.truth_(temp__5733__auto__)){
var later_fn = temp__5733__auto__;
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"pause","pause",-2095325672),later_fn);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._process_1st_event_in_queue.call(null,this$__$1);

var G__41448 = (n - (1));
n = G__41448;
continue;
}
}
break;
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$remove_post_event_callback$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.contains_QMARK_.call(null,self__.post_event_callback_fns,id)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: could not remove post event call back with id:",id);
} else {
return self__.post_event_callback_fns = cljs.core.dissoc.call(null,self__.post_event_callback_fns,id);
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_add_event$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return self__.queue = cljs.core.conj.call(null,self__.queue,event);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._process_1st_event_in_queue.call(null,this$__$1);

return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._run_queue.call(null,this$__$1);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$push$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"add-event","add-event",938429088),event);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.next_tick.call(null,((function (this$__$1){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027),null);
});})(this$__$1))
);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__41433 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__41434 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v10v6.re-frame.router","fsm-trigger","day8.re-frame-10x.inlined-deps.re-frame.v0v10v6.re-frame.router/fsm-trigger",1001029197)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__41434;

try{try{var vec__41435 = (function (){var G__41438 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__41438)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__41438,_STAR_current_trace_STAR__orig_val__41433,_STAR_current_trace_STAR__temp_val__41434,this$__$1){
return (function (){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._add_event.call(null,this$__$1,arg);

return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__41438,_STAR_current_trace_STAR__orig_val__41433,_STAR_current_trace_STAR__temp_val__41434,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__41438)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),((function (G__41438,_STAR_current_trace_STAR__orig_val__41433,_STAR_current_trace_STAR__temp_val__41434,this$__$1){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._exception.call(null,this$__$1,arg);
});})(G__41438,_STAR_current_trace_STAR__orig_val__41433,_STAR_current_trace_STAR__temp_val__41434,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__41438)){
if(cljs.core.empty_QMARK_.call(null,self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__41438,_STAR_current_trace_STAR__orig_val__41433,_STAR_current_trace_STAR__temp_val__41434,this$__$1){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__41438,_STAR_current_trace_STAR__orig_val__41433,_STAR_current_trace_STAR__temp_val__41434,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__41438)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__41438,_STAR_current_trace_STAR__orig_val__41433,_STAR_current_trace_STAR__temp_val__41434,this$__$1){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._pause.call(null,this$__$1,arg);
});})(G__41438,_STAR_current_trace_STAR__orig_val__41433,_STAR_current_trace_STAR__temp_val__41434,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__41438)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__41438,_STAR_current_trace_STAR__orig_val__41433,_STAR_current_trace_STAR__temp_val__41434,this$__$1){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._resume.call(null,this$__$1);
});})(G__41438,_STAR_current_trace_STAR__orig_val__41433,_STAR_current_trace_STAR__temp_val__41434,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__41438)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__41438,_STAR_current_trace_STAR__orig_val__41433,_STAR_current_trace_STAR__temp_val__41434,this$__$1){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._run_queue.call(null,this$__$1);
});})(G__41438,_STAR_current_trace_STAR__orig_val__41433,_STAR_current_trace_STAR__temp_val__41434,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__41438)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__41438,_STAR_current_trace_STAR__orig_val__41433,_STAR_current_trace_STAR__temp_val__41434,this$__$1){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__41438,_STAR_current_trace_STAR__orig_val__41433,_STAR_current_trace_STAR__temp_val__41434,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__41438)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__41438,_STAR_current_trace_STAR__orig_val__41433,_STAR_current_trace_STAR__temp_val__41434,this$__$1){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__41438,_STAR_current_trace_STAR__orig_val__41433,_STAR_current_trace_STAR__temp_val__41434,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__41438)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__41438,_STAR_current_trace_STAR__orig_val__41433,_STAR_current_trace_STAR__temp_val__41434,this$__$1){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__41438,_STAR_current_trace_STAR__orig_val__41433,_STAR_current_trace_STAR__temp_val__41434,this$__$1))
], null);
} else {
throw cljs.core.ex_info.call(null,["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.call(null,vec__41435,(0),null);
var action_fn = cljs.core.nth.call(null,vec__41435,(1),null);
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41261__auto___41449 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41261__auto___41449;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return action_fn.call(null);
} else {
return null;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__41259__auto___41450 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null);
var duration__41260__auto___41451 = (end__41259__auto___41450 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41260__auto___41451,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__41259__auto___41450);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__41433;
}} else {
var vec__41439 = (function (){var G__41442 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__41442)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__41442,this$__$1){
return (function (){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._add_event.call(null,this$__$1,arg);

return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__41442,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__41442)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),((function (G__41442,this$__$1){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._exception.call(null,this$__$1,arg);
});})(G__41442,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__41442)){
if(cljs.core.empty_QMARK_.call(null,self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__41442,this$__$1){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__41442,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__41442)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__41442,this$__$1){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._pause.call(null,this$__$1,arg);
});})(G__41442,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__41442)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__41442,this$__$1){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._resume.call(null,this$__$1);
});})(G__41442,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__41442)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__41442,this$__$1){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._run_queue.call(null,this$__$1);
});})(G__41442,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__41442)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__41442,this$__$1){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__41442,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__41442)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__41442,this$__$1){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__41442,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__41442)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__41442,this$__$1){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__41442,this$__$1))
], null);
} else {
throw cljs.core.ex_info.call(null,["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.call(null,vec__41439,(0),null);
var action_fn = cljs.core.nth.call(null,vec__41439,(1),null);
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41261__auto___41452 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41261__auto___41452;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return action_fn.call(null);
} else {
return null;
}
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
return later_fn.call(null,((function (this$__$1){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"resume","resume",-118572261),null);
});})(this$__$1))
);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$add_post_event_callback$arity$3 = (function (_,id,callback_fn){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_.call(null,self__.post_event_callback_fns,id)){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: overwriting existing post event call back with id:",id);
} else {
}

return self__.post_event_callback_fns = cljs.core.assoc.call(null,self__.post_event_callback_fns,id,callback_fn);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek.call(null,self__.queue);
try{day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events.handle.call(null,event_v);

self__.queue = cljs.core.pop.call(null,self__.queue);

return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._call_post_event_callbacks.call(null,this$__$1,event_v);
}catch (e41443){var ex = e41443;
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),ex);
}});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 = (function (_,event_v){
var self__ = this;
var ___$1 = this;
var seq__41444 = cljs.core.seq.call(null,cljs.core.vals.call(null,self__.post_event_callback_fns));
var chunk__41445 = null;
var count__41446 = (0);
var i__41447 = (0);
while(true){
if((i__41447 < count__41446)){
var callback = cljs.core._nth.call(null,chunk__41445,i__41447);
callback.call(null,event_v,self__.queue);


var G__41453 = seq__41444;
var G__41454 = chunk__41445;
var G__41455 = count__41446;
var G__41456 = (i__41447 + (1));
seq__41444 = G__41453;
chunk__41445 = G__41454;
count__41446 = G__41455;
i__41447 = G__41456;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__41444);
if(temp__5735__auto__){
var seq__41444__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41444__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__41444__$1);
var G__41457 = cljs.core.chunk_rest.call(null,seq__41444__$1);
var G__41458 = c__4550__auto__;
var G__41459 = cljs.core.count.call(null,c__4550__auto__);
var G__41460 = (0);
seq__41444 = G__41457;
chunk__41445 = G__41458;
count__41446 = G__41459;
i__41447 = G__41460;
continue;
} else {
var callback = cljs.core.first.call(null,seq__41444__$1);
callback.call(null,event_v,self__.queue);


var G__41461 = cljs.core.next.call(null,seq__41444__$1);
var G__41462 = null;
var G__41463 = (0);
var G__41464 = (0);
seq__41444 = G__41461;
chunk__41445 = G__41462;
count__41446 = G__41463;
i__41447 = G__41464;
continue;
}
} else {
return null;
}
}
break;
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$purge$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.queue = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.empty_queue;
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$IEventQueue$_exception$arity$2 = (function (this$,ex){
var self__ = this;
var this$__$1 = this;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.purge.call(null,this$__$1);

throw ex;
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fsm-state","fsm-state",-998125236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"post-event-callback-fns","post-event-callback-fns",-297038335,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.re-frame.v0v10v6.re-frame.router/EventQueue";

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"day8.re-frame-10x.inlined-deps.re-frame.v0v10v6.re-frame.router/EventQueue");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.re-frame.v0v10v6.re-frame.router/EventQueue.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.__GT_EventQueue = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.EventQueue(fsm_state,queue,post_event_callback_fns));
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.event_queue = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.__GT_EventQueue.call(null,new cljs.core.Keyword(null,"idle","idle",-2007156861),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.empty_queue,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Enqueue `event` for processing by event handling machinery.
 * 
 *   `event` is a vector of length >= 1. The 1st element identifies the kind of event.
 * 
 *   Note: the event handler is not run immediately - it is not run
 *   synchronously. It will likely be run 'very soon', although it may be
 *   added to the end of a FIFO queue which already contain events.
 * 
 *   Usage:
 *   (dispatch [:order-pizza {:supreme 2 :meatlovers 1 :veg 1})
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$dispatch(event){
if((event == null)){
throw cljs.core.ex_info.call(null,"re-frame: you called \"dispatch\" without an event vector.",cljs.core.PersistentArrayMap.EMPTY);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.push.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.event_queue,event);
}

return null;
});
/**
 * Synchronously (immediately) process `event`. Do not queue.
 * 
 *   Generally, don't use this. Instead use `dispatch`. It is an error
 *   to use `dispatch-sync` within an event handler.
 * 
 *   Useful when any delay in processing is a problem:
 *   1. the `:on-change` handler of a text field where we are expecting fast typing.
 *   2  when initialising your app - see 'main' in todomvc examples
 *   3. in a unit test where we don't want the action 'later'
 * 
 *   Usage:
 *   (dispatch-sync [:sing :falsetto 634])
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch_sync = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$router$dispatch_sync(event_v){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events.handle.call(null,event_v);

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router._call_post_event_callbacks.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.event_queue,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1563379475152
