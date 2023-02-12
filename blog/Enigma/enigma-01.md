# Enigma Site Development Part 1

I have always had a huge interest in cryptography and how it is applied. A part of history that really shows cryptography applications is WWII and the enigma machine and how Alan Turing decrypted enigma messages.

A great project for me then is to replicate the enigma machines functionality using web based technologies. This project is an educational site that teaches people how the machine worked and giving a working model of the machine itself that you can play around with.

### Stage 1: Planning

Laying out the structure of how I will make this is a great opportunity to use systems that I want to learn so a big part of this site will be the use of [Redux](https://react-redux.js.org/). Redux will be very helpful in managing the state of the enigma machine because it will be constantly changing as it's used. I will also be making lots of custom elements to give the machine an accurate and aesthetic look which will require some learning of different design software.

Along side the actual machine itself I want the site to include information about different parts of the machine. I haven't fully decided how I want to do this. I will either have an interactive model of the machine that gives information or a markdown based wiki with all the information in one place. The end result may be a mix of both with the model linking to different parts of the wiki.

### Stage 2: Structure

After coming up with the initial plan of what I want to develop I like to build out the structure of the project. A great starting point for this is the [create-react-app](https://create-react-app.dev/) templates so I chose the redux-typescript template to give me clear examples of how to implement redux. Once I have run create-react-app I can start adding my own structure on top of that. My initial task was to decide how to store the information about the machine so I will be storing information on the rotors and reflectors in JSON files that redux can interact with. The actual functionality will be put into a library with functions that can be called from the react, this library will then impliment the logic of the machine and communicate the data with redux.

All of the information about how the machine works will be stored in markdown files that can then be displayed on the react site using an interpreter.

### Overview

Now that I have the initial planning and structure overview I can begin building out the basic code and begin working on the project. The next post will be about making the functions for the redux to store all of the information needed for the enigma machine and getting started with the logic of the machine.
