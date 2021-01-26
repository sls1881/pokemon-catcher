# EDIT-THIS-README

## HTML
- Instructions
- Create unique clickable pokemon image div

## On click
-Load three pokemon
-Three new pokemon show on the page
--Generate three random
--If they’re unique keep
--Else generate 3 more and repeat until they’re unique 
-Increment the seen property for all three new pokemon - increment on load
--For each of these three pokemon
---If they’ve seen it before, increment the seen property
---Else create a new object/cart of seen: 1 and caught: 0
No items in array when you start
--Loop through the array - for loop
On load
-Create and add an object each time pokemon is displayed with ID:1 , seen: 1, caught: 0	
-Loop through array to find matching ID of caught pokemon - find by id
On click
-Increment the caught on click
-Show three new pokemon on click
-Repeat x 10: Loop for id and increment seen
-If the user has done this 10 times, redirect to the results page
-Global variable to keep track and immediately increment by 1.

## Results 
-Generate caught + encounter for each pokemon
