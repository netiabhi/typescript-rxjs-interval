// Import stylesheets
import './style.css';
import { interval } from 'rxjs';
import { take, throttle, debounceTime, toArray } from 'rxjs/operators';

// Write TypeScript code!
var test = document.querySelector('p');
const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
test.textContent = 'hi';

interval(10).pipe(take(10)).pipe(toArray()).subscribe((val)=> createDiv(val));

function createDiv(val: number[]) {
  val.forEach((ele)=>{
let div: HTMLDivElement = document.createElement('div');
  div.textContent = ele.toString();
appDiv.appendChild(div);
  })
}