###Pokemon Pokedex

#HTML | CSS | JavaScript | API

This application features the use of PokeAPI which can be found here: https://pokeapi.co/

To make the API work correctly I used async/await class methods to gather Pokemon. 

During the creation of this application I learned how to properly create an InnerHTML through the use of JavaScript. I especially learned that in order for it to work that you need to append the created element to an established aspect of the original html file. To create the InnerHTML succesfully it was also important that I create a draft of what the designed cards would look like, this is why there is a "hardcode.html" presented in the files.

When it came to customizing the cards using JavaScript I learned how to pull objects from the API succussfully to allow me to display their Name, Id, Type (I used only one out of the two available for many of them). I also used the Type information to incorporate the CSS style Background-Color seen in JavaScript as backgroundColor in order to give each card an additional bit of flavor.

Initially the project started as just gathering the data of the original 151 Pokemon however I wanted to be able to give users the option of selecting the ones they wanted to see based off of their region. This resulted in me creating a selector for the Pokemon based on the region where they first introduced. To create this successfully I had to create individual fetch requests and selector toggle functions for when each region is selected. Additionally, the need to clear cards was also necessary to ensure that only the desired pokemon would be displayed.


https://composer0.github.io/Pokemon-Pokedex-API/
