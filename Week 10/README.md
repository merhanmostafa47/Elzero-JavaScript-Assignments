# [Higher Order Functions](https://www.freecodecamp.org/news/higher-order-functions-in-javascript-d9101f9cf528/)

--> is a function that accepts functions as parameters and/or returns a function.

## Map

- method creates a new array
- populated with the results of calling a provided function on every element in the calling array.

- Syntax

  - ` map (callBackFunction(Element, Index, Array) { }, thisArg)`
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

- Notes

  - Map Return A New Array

  ***

  ## Fillter

- method creates a new array
- with all elements that pass the test implemented by the provided function.

- Syntax

  - `filter(callBackFunction(Element, Index, Array) { }, thisArg)`
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  ***

## Reduce

- method executes a reducer function on each element of the array,
- resulting in a single output value.

- Syntax
  - `reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)`
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
    ---------- Starts from index 0 if an initialValue is provided.
    ---------- Otherwise, it starts from index 1.
  - Array => The Current Array

---

## forEach

- method executes a provided function once for each array element.

- Syntax

  - `forEach(callBackFunction(Element, Index, Array) { }, thisArg)`
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note

  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
