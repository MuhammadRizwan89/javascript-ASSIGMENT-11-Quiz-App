
/* questions */

const questions = [
  {
      numb: 1,
      question: "Javascript is an ........language?",
      answer: "Object-Oriented",
      options: [
          "Object-Oriented",
          "Object-Based",
          "Procedural",
          "None of the above",
      ]
  },
  {
      numb: 2,
      question: "Which of the following keywords is used to define a variable in Javascript?",
      answer: "Both A and B",
      options: [
          "var",
          "let",
          "Both A and B",
          "Nove of the above",
      ]
  },
  {
      numb: 3,
      question: "Which of the following methods is used to access HTML elements using Javascript?",
      answer: "Both A and B",
      options: [
          "getElementbyId()",
          "getElementByClassName()",
          "Both A and B",
          "None of the above"
      ]
  },
  {
    numb: 4,
    question: "Upon encountering empty statements, what does the Javascript Interpreter do? ",
    answer: "Ignores the statements",
    options: [
        "Throws an error",
        "Ignores the statements",
        "Gives a warning",
        "None of the above",
      ]
  },
  {
    numb: 5,
    question: "Which of the following methods can be used to display data in some form using Javascript?",
    answer: "All of the above",
    options: [
        "document.write()",
        "console.log()",
        "window.alert()",
        "All of the above",
      ]
  },
  {
    numb: 6,
    question: "How can a datatype be declared to be a constant type? ",
    answer: "const",
    options: [
        "const",
        "var",
        "let",
        "constant",
      ]
  },
  {
    numb: 7,
    question: "When the switch statement matches the expression with the given labels, how is the comparison done? ",
    answer: "Both the datatype and the result of the expression are compared.",
    options: [
        "Both the datatype and the result of the expression are compared.",
        "Only the datatype of the expression is compared.",
        "only the value of the expression is compared.",
        "None of the above",
      ]
  },
  {
    numb: 8,
    question: "What keyword is used to check whether a given property is valid or not? ",
    answer: "In",
    options: [
        "In",
        "is in ",
        "exists",
        "lies",
      ]
  },
  {
    numb: 9,
    question: "What is the use of the <noscript> tag in Javascript?  ",
    answer: "The contents are displayed by non-JS-based browsers.",
    options: [
        "The contents are displayed by non-JS-based browsers.",
        "Clears all the cookies and cache",
        "Both A and B",
        "None of the above",
      ]
  },
  {
    numb: 10,
    question: "When an operator's value is NULL, the typeof returned by the unary operator is: ",
    answer: "Object",
    options: [
        "Boolean",
        "Undefined",
        "Object",
        "Integer",
      ]
  },
  {
    numb: 11,
    question: "What does the Javascript “debugger” statement do? ",
    answer: "It acts as a breakpoint in a program",
    options: [
        "It will debug all the errors in the program at runtime",
        "It acts as a breakpoint in a program",
        "It will debug error in the current statement if any",
        "All of the above",
      ]
  },
  {
    numb: 12,
    question: "What is the print output of the following code snippet?(Nan === NaN); ",
    answer: "false",
    options: [
        "true",
        "false",
        "undefined",
        "Error",
      ]
  },
  {
    numb: 13,
    question: "What will be the output of the following code snippet? print(typeof(NaN)); ",
    answer: "Number",
    options: [
        "Object",
        "Number",
        "String",
        "None of the above",
      ]
  },
  {
    numb: 14,
    question: "What does the ‘toLocateString()’ method do in JS? ",
    answer: "Returns a localized string representation of an object",
    options: [
        "Returns a localized object representation",
        "Returns a parsed string",
        "Returns a localized string representation of an object",
        "None of the above",
      ]
  },
  {
    numb: 15,
    question: "The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?  ",
    answer: "Object Serialization",
    options: [
        "Object Serialization",
        "Object Encapsulation",
        "Object inheritance",
        "None of the above",
      ]
  },
  {
    numb: 16,
    question: "Which function is used to serialize an object into a JSON string in Javascript? ",
    answer: "stringify()",
    options: [
        "stringify()",
        "parse()",
        "convert()",
        "None of the above",
      ]
  },
  {
    numb: 17,
    question: "Why JavaScript Engine is needed?",
    answer: "Interpreting the JavaScript",
    options: [
        "Both Compiling & Interpreting the JavaScript",
        "Parsing the javascript",
        "Interpreting the JavaScript",
        "Compiling the JavaScript",
      ]
  },
  {
    numb: 18,
    question: "Which of the following are closures in Javascript? ",
    answer: "All of the above",
    options: [
        "Variables",
        "Functions",
        "Objects",
        "All of the above",
      ]
  },
  {
    numb: 19,
    question: "Which of the following is not a Javascript framework?  ",
    answer: "Cassandra",
    options: [
        "Node",
        "Vue",
        "React",
        "Cassandra",
      ]
  },
  {
    numb: 20,
    question: "What keyword is used to declare an asynchronous function in Javascript?",
    answer: "async",
    options: [
        "async",
        "await",
        "setTimeout",
        "None of the above",
      ]
  },
  {
    numb: 21,
    question: "How to stop an interval timer in Javascript? ",
    answer: "clearInterval",
    options: [
        "clearInterval",
        "clearTimer",
        "intervalOver",
        "None of the above",
      ]
  },
  {
    numb: 22,
    question: "How are objects compared when they are checked with the strict equality operator? ",
    answer: "Their references are compared",
    options: [
        "The contents of the objects are compared",
        "Their references are compared",
        "Both A and B",
        "None of the above",
      ]
  },
  {
    numb: 23,
    question: "What does ..... Operator do in JS? ",
    answer: "It is used to spread iterables to individual elements",
    options: [
        "It is used to spread iterables to individual elements",
        "It is used to describe a datatype of undefined size",
        "No such operator exists",
        "None of the above",
      ]
  },
  {
    numb: 24,
    question: "How do we write a comment in javascript? ",
    answer: "//",
    options: [
        "/* */",
        "//",
        "#",
        "$$",
      ]
  },
  {
    numb: 25,
    question: "Which object in Javascript doesn't have a prototype? ",
    answer: "Base Object",
    options: [
        "Base Object",
        "All objects have a prototype",
        "None of the objects have a prototype",
        "None of the above",
      ]
  },
  {
    numb: 26,
    question: "Which of the following are not server-side Javascript objects? ",
    answer: "All of the above",
    options: [
        "Data",
        "FileUpload",
        "Function",
        "All of the above",
      ]
  },
  {
    numb: 27,
    question: "Which of the following can be used to call a JavaScript Code Snippet? ",
    answer: "Function/Method",
    options: [
        "Function/Method",
        "Preprocessor",
        "Triggering Event",
        "RMI",
      ]
  },
  {
    numb: 28,
    question: "Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine? ",
    answer: "will work perfectly well on a Windows Machine",
    options: [
        "will work perfectly well on a Windows Machine",
        "will be displayed as JavaScript text on the browser",
        "will throw errors and exceptions",
        "must be restricted to a Unix Machine only",
      ]
  },
  {
    numb: 29,
    question: "Which of the following scoping type does JavaScript use? ",
    answer: "Lexical",
    options: [
        "Sequential",
        "Segmental",
        "Lexical",
        "Literal",
      ]
  },
  {
    numb: 30,
    question: "What is the basic difference between JavaScript and Java? ",
    answer: "Functions are values, and there is no hard distinction between methods and fields",
    options: [
        "Functions are considered as fields",
        "Functions are values, and there is no hard distinction between methods and fields",
        "Variables are specific",
        "There is no difference",
      ]
  },
  // Add more questions here
];
