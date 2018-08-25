# WDI 34 Hackathon - Newgle

### A Vue.js front end app
##### by Bianca Jemsten, James Newell and Martin Koeoep

---
#### Overview

We had 48 hours to learn Vue.js and build a front end app that utilizes data from a third party API. The app that we built uses the [REST Countries](https://restcountries.eu/) API to fetch information about all the countries in the world. It allows a user to select a search category (language, currency, regional bloc och country) and additionally put in a search word. The search results are then displayed on the map.



<p align="center"><img src="https://i.imgur.com/JMzoc5q.png" width="700"></p>

#### The build process
Since we only had 48 hours the build process of the app was quite accelerated.

First, we had to understand what we were working with. Therefore the three of us started reading up on the documentation and looking up simple Vue.js tutorials online. Then, we brainstormed third party APIs that could be easy to implement with a new framework. After trying out a couple of different ones we decided REST Countries was good choice because we could start out working with a small portion of data and then add to it. Initially we struggled quite a bit to get the response data from REST Countries to translate onto the Google Map. But once we figured out how the components worked we were able to save the data in such as way that was useful to put onto the map.

#### Using the app
The user types into the search bar what they are looking for and then selects the appropriate category in the drop-down menu below. (language, currency, regional bloc och country). The limitation here is that the input of the search field has to be rather specific to work. If a user wants to see all the countries that speak french in the world for example, he or she has to search "fr" and not "French". Which could become a problem when a user doesn't know all the language or currency abreviations.

Upon clicking search, the Google Map will show all the countries that match the criteria by marking them with their respective flags. The flags are also clickable and show some information about the country in a pop-up; country name, capital and inhabitants. That pop-up is also clickable and leads to a page on the site about that country.

<p align="center"><img src="https://i.imgur.com/0Ay8I13.gif" width="700"></p>

#### Challenges

- Had difficulties picking an API that would work without a server. We found that many APIs we wanted to use don't have client side libraries.
- The app is not as user friendly as we would have liked it to be as the user needs to know the exact abbreviations to put into the search field

#### Wins
- We built a working application in a framework we had never used before in only 48h.
- We managed to give each country their flag as their google map marker 
- There are some pretty fun CSS animations in there
