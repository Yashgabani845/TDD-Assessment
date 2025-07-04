# String Calculator - TDD Assignment

This project is a full implementation of the **String Calculator Kata** using **Test-Driven Development (TDD)**. The goal was to follow TDD best practices and build up the solution incrementally using meaningful commits and develop string calculator which return sum of numbers seprated by delimiters.

---

## Language & Tools

* **Language**: JavaScript
* **Test Framework**: Jest

---

## How to Run

```bash
# Clone the project
git clone https://github.com/Yashgabani845/TDD-Assessment.git

# Navigate into project
cd TDD-Assessment

# Install dependencies
npm install

# Run all tests
npm test
```

---

## Folder Structure

```
TDD-Assessment/
├── src/
│   └── stringCalculator.js      
├── test/
│   └── stringCalculator.test.js
├── package.json
└── README.md
```

---

##  Functions Overview

### `Add(str)`

* Accepts a string containing numbers separated by various delimiters.
* Returns the sum of those numbers.
* Validates and handles:

  * Empty strings
  * Default and custom delimiters
  * Negative number exception
  * Numbers > 1000 ignored

### `GetCalledCount()`

* Returns how many times the `Add()` method was invoked.

---

##  TDD Process & Structure

* Divided all tests into 3 logical categories for **modularity**:

  1. **Addition** (Core logic tests)
  2. **GetCalledCount** (Tracking usage)
  3. **Delimiters** (Parsing custom delimiters)

* Followed strict TDD commit process:

  * First: Write **failing test** (commit)
  * Second: Implement feature to pass the test (commit)
  * Third: If needed refactor (commit)

---

##  PDF Reference

I follows all steps from the official [String Calculator Kata PDF](https://static1.squarespace.com/static/5c741968bfba3e13975e33a6/t/5ca6614d971a1877cadc4f8a/1554407757512/String+Calculator+Kata+v1.pdf)
for better development and testing
---

##  All Test Cases 

### 1. GetCalledCount

* Track number of times `Add()` is called:

  * `GetCalledCount()` → 0 → `Add("1,2")` → `Add("3")` → 2

### 2. Addition Logic

* Return 0 on empty string:

  * `""` → 0
* Return sum of comma-separated values:

  * `"1,2"` → 3
  * `"1,2,3"` → 6
  * `"5"` → 5
  * `"1,"` → 1
* Return sum for unknown count of numbers:

  * `"1,2,3,4,5"` → 15
  * `"10,20,30,40"` → 100
* Throw for single negative number:

  * `"-1,2"` → Exception: Negatives not allowed : -1
  * `"3,-2"` → Exception: Negatives not allowed : -2
* Throw for multiple negative numbers:

  * `"-1,-2,3"` → Exception: Negatives not allowed : -1,-2
  * `"-1,-2,-3"` → Exception: Negatives not allowed : -1,-2,-3
* Ignore numbers greater than 1000:

  * `"1001,2"` → 2
  * `"1001,2,3"` → 5
  * `"1000,1"` → 1001
  * `"1001,2000,3"` → 3
  * `"1001,2001"` → 0

### 3. Delimiters

* Support newline as delimiter:

  * `"1\n2,3"` → 6
  * `"1\n2\n3"` → 6
* Support custom single-character delimiter:

  * `"//;\n1;2"` → 3
  * `"//;\n1;2\n3;4"` → 10
* Support custom multi-character delimiter:

  * `"//[***]\n1***2***3"` → 6
  * `"//[abc]\n4abc5abc6"` → 15
  * `"//[##]\n2##1001##3"` → 5
  * `"//[!!]\n1!!-2!!3"` → Exception: Negatives not allowed : -2
* Support multiple single-character delimiters:

  * `"//[*][%]\n1*2%3"` → 6
  * `"//[*][%]\n1*2%3%4"` → 10
* Support multiple multi-character delimiters:

  * `"//[**][%%]\n1**2%%3"` → 6
  * `"//[**][%%]\n1**2%%3%%4"` → 10

---

##  Screenshot of Passing Tests

![Screenshot (241)](https://github.com/user-attachments/assets/3c2b8655-88ca-453b-8299-4566a29b5d29)

---


Thanks for reviewing!
