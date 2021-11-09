# IMPLEMENTATION DETAILS


Hey there folks! I had a blast wokring on this task!

Below I want to share my thought process during my work.

I have used Typescript, because I am confident that TS gives us at least some amount of confidence when deploying to production.

I have tried to implement every funciton in a way where they can be unit tested.

I think I will have couple of UI mistakes, and of course I did not managed my time wll to write good CSS, by good CSS I mean 

 - having all css properties in a list with custom defined properties
 like (--primaryColor: someColor)
 - I have mixed the SCSS Modules with simple SCSS imports
  why? I wanted to show the both way of doing this, personally I favor SCSS Modules. The scoping is essential I think when we are developing components, because there might be a case where deep down into the component tree you can use same className and mix the styles.

Also I wanted to create a monorepo with server, client and components separated but didn't managed my time well.

And I also haven't implemented the in-between state for loading. So there are just broken views sometimes. Sorry :D 

Thanks!

### NOTE (Feature alert :D)
I have implemented by my own a feature where you click on Add Assets button
you will see generic list of coins, where you click Add, you are adding couple of coins which you want to track in your protfolio and when you hit Save, and close the dropdown new coins will be automatically added to your updated view which is fetching new information every 5 seconds.

I know I haven't finished the UI part you can't understand did you add the coin into your portfolio but yeah :D It was interesting.

### How to start

I have created a simple server, which you can run by `node server.js`

It is essential because `coinmarketcap` restricts the usage from client directly, so I've added the server and setted up a proxy from package.json to be able to fetch the data.

And then you can hit `yarn dev` to run the local server

I have already reached the half amount of the calls :D 



