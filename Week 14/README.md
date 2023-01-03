# BOM [Browser Object Model]

### V102

- Introduction
  - Window Object Is The Browser Window
  - Window Contain The Document Object
  - All Global Variables And Objects And Functions Are Members Of Window Object
  - Test Document And Console
- What Can We Do With Window Object ?
  - Open Window
  - Close Window
  - Move Window
  - Resize Window
  - Print Document
  - Run Code After Period Of Time Once Or More
  - Fully Control The URL

---

### V103

- alert(Message) => Need No Response Only Ok Available
- confirm(Message) => Need Response And Return A Boolean
- prompt(Message, Default Message) => Collect Data

---

### V104

- setTimeout(Function, Timeout, Additional Params)
- clearTimeout(Identifier)

---

### V105

- setInterval(Function, Millseconds, Additional Params)
- clearInterval(Identifier)

---

### V106

- location Object
  - href Get / Set [URL || Hash || File || Mail]
  - host
  - hash
  - protocol
  - reload()
  - replace()
  - assign()

> The difference from the `assign()` method and setting the `href` property is that  
> after using `replace()` the current page will not be saved in session History, meaning the user won't be able to use the back button to navigate to it.

---

### V107

- [Window](https://javascript.info/popup-windows#window-open)
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
    - left [Num]
    - top [Num]
    - width [Num]
    - height [Num]
    - menubar [yes || no]
    - toolbar [yes || no]
    - location [yes || no]
    - status [yes || no]
    - resizable [yes || no]
    - scrollbars [yes || no]

---

### V108

- History API
  - Properties
    - length
  - Methods
    - back()
    - forward()
    - go(Delta) => Position In History
    - [pushState() , replaceState()](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API#example_of_pushstate_method)

---

### V109

- window
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)

---

### V110

- Practice => Scroll To Top
- scrollX [Alias => PageXOffset]
- scrollY [Alias => PageYOffset]
