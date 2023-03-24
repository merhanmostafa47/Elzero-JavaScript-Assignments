# Map And Set

### V123

- **Set Data Type**
  Syntax: `new Set(Iterable)`

  - Object To Store Unique Values
  - Cannot Access Elements By Index

  Properties:

  - size

  Methods:

  - add
  - delete
  - clear
  - has

---

### V124

- **Set vs WeakSet** - The WeakSet is weak,
  meaning references to objects in a WeakSet are held weakly.
  If no other references to an object stored in the WeakSet exist,
  those objects can be garbage collected.
  <br>
  <br>

  - Set => Can Store Any Data Values
  - WeakSet => Collection Of Objects Only
    <br>
    <br>
  - Set => Have Size Property
  - WeakSet => Does Not Have Size Property
    <br>
    <br>
  - Set => Have Keys, Values, Entries
  - WeakSet => Does Not Have clear, Keys, Values And Entries
    <br>
    <br>
  - Set => Can Use forEach
  - WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible

---

### V125

- **Map Data Type**
  Syntax: new Map(Iterable With Key/Value)
- Map vs Object
   - Map => Does Not Contain Key By Default 
   - Object => Has Default Keys
  <br>
  <br> 
  - Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  - Object => String Or Symbol
  <br>
  <br> 
  - Map => Ordered By Insertion 
  - Object => Not 100% Till Now
  <br>
  <br> 
  - Map => Get Items By Size 
  - Object => Need To Do Manually
  <br>
  <br> 
  - Map => Can Be Directly Iterated 
  - Object => Not Directly And Need To Use Object.keys() And So On
  <br>
  <br> 
  - Map => Better Performance When Add Or Remove Data 
  - Object => Low Performance When Comparing To Map

---

### V126

- **Map Data Type**
  Methods
    - set
    - get
    - delete
    - clear
    - has

  Properties
    - size
---

### V127

- **Map vs WeakMap**

  - Map     => Key Can Be Anything
  - WeakMap => Key Can Be Object Only
     -  Allows Garbage Collector To Do Its Task But Not Map.

---

### V128

- **`Array.from(Iterable, MapFunc, This)`**
    - Variable
    - String Numbers
    - Set
    - Using The Map Function
    - Arrow Function
    - Shorten The Method + Use arguments

---

### V129

- **`Array.copyWithin(Target, Start => Optional, End => Optional)`**
  
  - "Copy Part Of An Array To Another Location in The Same Array"
     - Any Negative Value Will Count From The End
  - Target
    - Index To Copy Part To
    - If At Or Greater Than Array Length Nothing Will Be Copied
  - Start
    - Index To Start Copying From
    - If Ommited = Start From Index 0
  - End
    - Index To End Copying From
    - Not Including End
    - If Ommited = Reach The End

---
### V130

- **`Array.some(CallbackFunc(Element, Index, Array), This Argument)`**
   - CallbackFunc => Function To Run On Every Element On The Given Array
       - Element => The Current Element To Process
       - Index => Index Of Current Element
       - Array => The Current Array Working With
  - This Argument => Value To Use As This When Executing CallbackFunc
  
  - Using
     - Check if Element Exists In Array
     - Check If Number In Range

---
### V131

- **`AArray.every(CallbackFunc(Element, Index, Array), This Argument)`**

  - CallbackFunc => Function To Run On Every Element On The Given Array
     - Element => The Current Element To Process
     - Index => Index Of Current Element
     - Array => The Current Array Working With
  - This Argument => Value To Use As This When Executing CallbackFunc

---
### V132

- **`Spread Operator => ...Iterable`**

  - Allow Iterable To Expand In Place
     -  Spread With String => Expand String
     -  Concatenate Arrays
     -  Copy Array
     -  Push Inside Array
     -  Use With Math Object
     -  Use With Math Object
