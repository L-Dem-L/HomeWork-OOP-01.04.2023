// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages"

// Import modules
import { Marker, RefillableMarker } from "./scripts/modules/marker";
import { ExtendedDate } from "./scripts/modules/date";
// Import utils

// Bisiness logic
let marker = new Marker("blue", 50);
marker.print("Hello, world!");
let refillableMarker = new RefillableMarker("red", 14);
refillableMarker.print("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
refillableMarker.refill();
refillableMarker.print("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

console.log('--------------------------');

let myDate = new ExtendedDate("2023-04-01");
console.log(myDate.toText());
console.log(myDate.isFuture());
console.log(myDate.isLeapYear());
console.log(myDate.nextDay().toDateString());