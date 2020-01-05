# Calculator

Creating a calculator as precourse work for FAC winter 2019.  
See the current version here: https://jc2820.github.io/calculator/

### Requirements

* Hosted on github.
* Build with text editor, terminal and browser - try to use git for remote version control.
* No frameworks - HTML, CSS and vanilla JS only.
* Base the user stories on the freecodecamp calculator project.

**User stories (from the freecodecamp calculator project)**
* My calculator should contain a clickable element containing an =.
* My calculator should contain 10 clickable elements containing one number each from 0-9.
* My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators.
* My calculator should contain A clickable element containing a . with a corresponding id="decimal".
* My calculator should contain a clickable 'clear' element.
* My calculator should contain an element to display values.
* At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state. 0 should be shown in the element with the id of “display”.
* As I input numbers, I should be able to see my input in the element with the id of “display”.
* In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of “display”.
* When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
* When the decimal element is clicked, a . should append to the currently displayed value. Two .s in one number should not be accepted.
* I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.
* If 2 or more operators are entered consecutively, the operation performed should be the last operator entered.
* Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.
* My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).

### Possible further improvements
* Commas automatically entered at appropriate thousands in the display.
* Backspace button
* positive/negative button (so it could run calculations like (x - -y) etc)
* Key bindings for operator keys are currently set to the numpad operator buttons on a full keyboard. This is due to cross browser and OS keyboard differences. It would be nice to find a nice workaround for any small keyboard.
* On Chrome there is a bug where pressing the return key after a numeric entry (with mouse or keyboard) either repeats the current display value or zeros it. This is possibly to do with using a form input box for the display. There may be a way to disable the return key on this document.
