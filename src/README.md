Repository name: A05-PH-14

Description: The project is about different development stacks that one might want to learn.

Technology: HTML, CSS, JS, TS, REACT

Features: 1. Fetched data from json file. 
2. Selected technologies can be added to a stack. 
3.They can be removed even with one click.


What is JSX, and why is it used in React?
Ans: JSX is a html like code, an extension of js.JSX makes it easier to write and understand UI structure of a REACT component.


What is the difference between props and state?
Ans: State is component's own data whereas props is are the data passed to the component. A component can change it's own state whenever it needs.


What does the useState hook do, and where did you use it in this project?
Ans: With the help of useState, we can store data and change it over time. In this project, I used it to select stacks/cards.


What does the useEffect hook do, and why did you need it to load the JSON data?
Ans: useEffect is a react hook that is used to perform side effects in a functional component.

Why does every item in a .map() list need a unique key prop?
Ans: When we do .map() a lot data comes in and with the key, react can keep track of each individual data.


What is conditional rendering? Show one place you used it (example: the empty stack message).
Ans: Redering a piece of data depending on the condition. I used it in the button of the cards, where the button showed "Added" when isSelected was true and "Add to Stack" when it was false.

How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans: Thorough props we can send data from parent component to child component. As react is uni-directional, meaning data flows in one way only, a child can't pass data to its parent.