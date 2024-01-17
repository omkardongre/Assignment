"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
// Creating a BehaviorSubject with an initial value
var behaviorSubject = new rxjs_1.BehaviorSubject('Initial Value');
// Subscribing to the BehaviorSubject
behaviorSubject.subscribe(function (value) {
    console.log('Subscriber 1:', value);
});
// Updating the value
behaviorSubject.next('Updated Value');
// Subscribing again, the new subscriber will receive the last emitted value
behaviorSubject.subscribe(function (value) {
    console.log('Subscriber 2:', value);
});
// Output:
// Subscriber 1: Initial Value
// Subscriber 1: Updated Value
// Subscriber 2: Updated Value
