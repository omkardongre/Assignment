import { BehaviorSubject } from 'rxjs';

// Creating a BehaviorSubject with an initial value
const behaviorSubject = new BehaviorSubject<string>('Initial Value');

// Subscribing to the BehaviorSubject
behaviorSubject.subscribe(value => {
  console.log('Subscriber 1:', value);
});

// Updating the value
behaviorSubject.next('Updated Value');

// Subscribing again, the new subscriber will receive the last emitted value
behaviorSubject.subscribe(value => {
  console.log('Subscriber 2:', value);
});

// Output:
// Subscriber 1: Initial Value
// Subscriber 1: Updated Value
// Subscriber 2: Updated Value
