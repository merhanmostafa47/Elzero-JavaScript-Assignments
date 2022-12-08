- DOM [Events Simulation]
  - click
  - focus
  - blur

--- 

- DOM [Class List]
  - length
  - contains
  - item(index)
  - add
  - remove
  - toggle

  ---

- DOM[CSS] 
    - style 
    -.cssText 
    - removeProperty(propertyName) [Inline, Stylesheet] 
    - setProperty(propertyName, value, priority)

```
element.style.removeProperty("color");
element.style.setProperty("font-size", "40px", "important");
document.stylesheets[0].rules[0].style.removeProperty("line-height");
document.stylesheets[0].rules[0].style.setProperty("background-color", "red", "important");
```
---

-  DOM [Deal With Elements]
    -  before [Element || String]
    -  after [Element || String]
    -  append [Element || String]
    -  prepend [Element || String]
    -  remove

--- 

- DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement

---

- DOM [Cloning]
  - cloneNode(Deep)

```
let myP = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");

myP.id = `${myP.id}-clone`;

myDiv.appendChild(myP);
```

---

[Node.cloneNode()](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)
[Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
[EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
