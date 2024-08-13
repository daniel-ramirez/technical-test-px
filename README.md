# technical-test-px
```JS
/* Instructions: If you get stuck write the portion out you can't complete in 
   pseudo code (try to still be specific about what you would do). Include a 
   question worded how you would ask another member of the development team 
   to gain the information needed to be able to complete the task. Code 
   should be commented. Include a commented section at the top with your name,
   date of development, and purpose of script.

   Add an object for yourself following a similar format. Put each object in 
   an array so you have an array of objects (your choice how to do that). 
   Iterate through the array of objects adding the date the script was run 
   to each object as favorite things may change in the future. Console.log 
   only active records with the Name, date, Favorite movie of each person. 
   Add a function that can sort the output by object property. There may 
   be a time where no Active records are found. Include code that provides 
   a message when that occurs.
*/

let rockyObj = {
  'Name': 'Rocky',
  'Favorite Food': 'Sushi',
  'Favorite Movie': 'Back to The Future',
  'Status': 'Inactive'
}
let miroslavObj = {
  'Name': 'Miroslav',
  'Favorite Food': 'Sushi',
  'Favorite Movie': 'American Psycho',
  'Status': 'Active'
}
let donnyObj = {
  'Name': 'Donny',
  'Favorite Food': 'Singapore chow mei fun',
  'Favorite Movie': 'The Princess Bride',
  'Status': 'Inactive'
}
let mattObj = {
  'Name': 'Matt',
  'Favorite Food': 'Brisket Tacos',
  'Favorite Movie': 'The Princess Bride',
  'Status': 'Active'
}
```

## Question that could be done prior and during developmet

* Should the array be inmutable or mutable?; if it is mutable, this will give us the avility to update the values diretly in the array objects; but if not; we need to create a new array to add new values to the objects. My thought: It should be mutable to mutate objects in a quickly way and use the same array to perform the other processing.
* Should I include the a CRUD to manage the array list in the development?
* Regarding the UI, Which UI library will we use?
* The data table in which I will present the data, Will it have sorting colunm by default
