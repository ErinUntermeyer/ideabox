What is state?
- State is an object that lives on a component
- State allows components to hold on to important Application Data

What happens when state changes?
- The virtual DOM looks at the previous version and re-renders the differences

Reacts motto is "data down, actions up":

What is my "data" in the application?
- The title and description
What components need access to that data?
- The Card
What "action" will change my data in this application?
- Clicking the submit button
In what component will that action happen?
- We will need to add a Form component that will hold the title and description inputs and the submit button
Which component will need to be alerted when that action occurs?
- App, Ideas, Card

State should be in App because every component it holds (Form and Ideas) needs to have access to the data

General rule of thumb: If a component needs to keep track of and display data, and if that component itself will update or change the data its displaying, we need to use a class-based component.