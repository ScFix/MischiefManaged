# Mischief Managed

## Description
This app will be a collection of all of the adventures I have had. The purpose of this app is to show the locations I have been. Each adventure will be set in a time and a place.

## The Design
This app will be based upon the idea of a stream. Since life is a stream of events so will be my adventures, which in action will be called mischiefs. This will concentrate in a few core ideas.

1. All Mischiefs will flow from the latest to the earliest
2. They will be situated on a timeline that is in the center of the screen.
    - The  time line will have notations of of the years
    - i.e. 2016, 2015, 2014, etc.
3. if the screen is large enough the Mischiefs will be alternating
    - if the screen is to small the time line will be on the right with the mischiefs on the left pointing to the line
    - this design is inspired by the new stack over flow portfolio look, I am wanting to do something simliar in react

## The Road Map
This project is essentially for me to learn the core design principles of the react language having it integrate into a controlled server that is pulling data dynamically and quickly. I believe  This will be broken down into some rought stages. 

### 1. Get it running
  - Get all the pictures uploaded to the a 3rd party hosting with static links
  - Generate the data for the trip locations as well as
    - this will be stored in a json file on the server. This wil not be a dynamically updated in a database  
  - have a basic list view of all the Mischiefs in the order they have happened. 
  - upon selecting a mischief you navigate to a new view where you view all this pictures in the order that they happened
  - Push to live
### 2. Design the time line & dynamic backend data
  - have the time line draw properly on the webpage
  - have the design modify to how the mischiefs are displayed when you resize the window
  - take all the data and append it into a database struct that fits the best for this situation
### 3. Polish
  - I have nothing specific in this phase but this will mostly be know for me to tie up any loose ends
