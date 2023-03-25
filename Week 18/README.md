# Regular Expression

### V135

- **Syntax**
   - /pattern/modifier(s);
   - new RegExp("pattern", "modifier(s)")

- **Modifiers** => Flags
  - `i` => case-insensitive
  - `g` => global
  - `m` => Multilines

- **Search Methods**
  - match(Pattern)

- **Match**
  - Matches A String Against a Regular Expression Pattern
  - Returns An Array With The Matches
  - Returns null If No Match Is Found.

---

### V136

- **Ranges**

  - Part 1
     - (X|Y) => X Or Y
     - [0-9] => 0 To 9
     - [^0-9] => Any Character Not 0 To 9

  - Part 2
     - [a-z]
     - [^a-z]
     - [A-Z]
     - [^A-Z]
     - [abc]
     - [^abc]


---

### V138

  - **Character Classes**
    - `.` => matches any character, except newline or other line terminators.
    - `\w` => matches word characters. [a-z, A-Z, 0-9 And Underscore]
    - `\W` => matches Non word characters
    - `\d` => matches digits from 0 to 9.
    - `\D` => matches non-digit characters.
    - `\s` => matches whitespace character.
    - `\S` => matches non whitespace character.
---

### V139

 - **Character Classes**
   - `\b` => matches at the beginning or end of a word.
   - `\B` => matches NOT at the beginning/end of a word.

- **Test Method**
   - pattern.test(input)

---

### V140

- **Quantifiers**
  - `n+`    => One Or More
  - `n*`    => zero or more
  - `n?`    => zero or one

---

### V141

- **Quantifiers**
  - `n{x}`   => Number of
  - `n{x,y}` => Range
  - `n{x,}`  => At Least x

---

### V142

  - **Quantifiers**
     - `$`  => End With Something
     - `^`  => Start With Something
     - `?=` => Followed By Something
     - `?!` => Not Followed By Something
---

### V143

 - replace
 - replaceAll

---

### V145

- [regex101](https://regex101.com/)
- [regexr](https://regexr.com/)