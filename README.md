# ac-breathing

This is the fifth project in my [Spring 2021 - Web Development Challenge](https://10in30.alexander-morse.com/) series, where I am attempting to design, code, and ship ten different web projects in the space of one month, under a variety of constraints.

This is a "Square Breathing" application built in React, using Create React App.

A live version of this project can be found running [here](https://arm-ac-breathing.surge.sh).

## Blog Post

**Start Date**: April 10, 2021

**End Date**: April 13, 2021

Project #3’s failure has been bothering me enough that I had to at least give it another try. And this time, I was at least able to ship *something*, although the finished product doesn’t match up with the application I had in my head. This is a “Square Breathing” app, which guides the user through the titular breathing exercise.

Unfortunately, I didn’t have a ton of experience with non-trivial animation and granular state management going into this project. And I *especially* didn’t have much experience with those things in React, a shortcoming which ate up the bulk of my development time. Long story short: I succeeded in learning what needed to be learned, but only by implementing nearly everything in exactly the wrong way. Furthermore, I had to cut almost every other feature I wanted the app to have, leaving it as little more than a glorified GIF.

At this point, I’m just happy it works.

This one was made in React, using Create React App to abstract away the development and build environments. Compared to my first attempt, this was a huge help in reducing cognitive load - without it, this would have ended in another failure by time-out. React itself isn’t new to me, but this was my first project using it which was entirely “class-free’, using the “hooks” system for animations and state management. Again, I designed the thing almost entirely backwards - it’s imperative APIs all the way up. But it made for good practice, and I can say I’ve got a handle on how to manage apps of similar complexity from now on.