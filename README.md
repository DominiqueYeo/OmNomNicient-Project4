<h1> OmNomNicient </h1>

<details>
<summary>Table of Contents</summary>
<br>
 <ol> 
    <li> <a href="#about"> About the Project </a></li>
    <li> <a href="#features"> Features </a></li>
    <li> <a href="#tech-used"> Technologies Used </a></li>
    <li> <a href="#rationale"> Rationale for Choice of Technologies </a></li>
    <li> <a href="#contributors"> Contributors </a></li>
  </ol>
</details>

<div id="about">
 <h2> About the Project </h2>
 OmNomNicient is designed to help users identify dishes based on photos and recommend restaurants selling that dish. 
 <br/>
 It allows users who are unfamiliar with dish names to easily identify dishes and find places around them selling the dish.
</div>


<h2 id="features"> Features </h2>

<h3> 1. Search For Dishes </h3>
 
 <ul>
   <li> Users will upload an image of the dish to be identified.</li>
  <li> They would then input the address where they would like to find restaurants selling that dish.</li>
 <li> Upon submission, OmNomNicient identifies the dish and recommends restaurants near the inputted address.</li>
 </ul>

 <details>
<summary><i><b> How We Achieved It: </b></i></summary>
 <ol>
  <li><b> Identify Dish: </b><br/> When an image is uploaded, it is passed through a TensorFlow supervised learning, machine learning model which identifies the dish.</li>
  <li><b> Identify Address Coordinates: </b><br/> 
   The address inputted by the user is then passed through Google Maps' <i>Geocoding API</i> which identifies the latitude and longitude coordinates of the address.</li>
   <li><b> Find Restaurants Near The Address, Selling The Dish: </b><br/> 
   The identified dish and latitude and longitude coordinates are then passed through Google Maps' <i>Places API</i> which identifies restaurants selling the dish.</li>
     <li><b> Find Restaurant Photos: </b><br/> 
  A third API call is made through Google Maps' <i>Places API</i> to retrieve the restaurant images.</li>
 </ol>
</details>

 ![hokkien-mee-gif](https://user-images.githubusercontent.com/83911483/165066051-c35da608-8f79-4f55-860b-94147fa8abfa.gif)
   
![pizza-gif](https://user-images.githubusercontent.com/83911483/165066082-c4e8cb4c-4890-4478-91fd-d2c4fb976d8a.gif)

<h3> 2. Bookmark Favourite Restaurants </h3>
 
 <ul>
   <li> Add restaurants to the favourites category to keep track of them.</li>
 </ul>

![fav-gif-new](https://user-images.githubusercontent.com/83911483/165067584-307a40a9-fd29-4c45-af87-1885b06153e7.gif)

<h3> 3. Add Restaurants To Past Eats </h3>
 
 <ul>
   <li> Remember the places you've tried before.</li>
 </ul>

  ![pasteats-gif](https://user-images.githubusercontent.com/83911483/165066447-03d11f71-858f-4514-9d32-d7a0ec785a09.gif)
  
 <h3> 4. Move Restaurants From Favourites to Past Eats & Delete Them </h3>
 
 <ul>
   <li> Easily favourite a restaurant that you've eaten at and delete it from the past eats category.</li>
 </ul> 
  
![fav-to-pasteats-gif](https://user-images.githubusercontent.com/83911483/165066463-8c1e20bb-da34-4f96-9488-d0bd71406e4f.gif)

<h3> 5. Look Through Previous Searches </h3>
 
 <ul>
   <li> Look through your history of previous searches.</li>
    <li> View search results again.</li>
 </ul>
 
![past-searches-gif](https://user-images.githubusercontent.com/83911483/165066491-39d15883-18d8-4153-99d9-c0d27412689e.gif)


<h3> 6. Characteristics of Results </h3>
 See the following for each restaurant:
 <ul>
   <li> Restaurant name</li>
  <li> Restaurant rating</li>
  <li> Restaurant address</li>
  <li> Restaurant image</li>
 </ul>
 
![Screenshot 2022-04-25 at 5 44 00 PM](https://user-images.githubusercontent.com/83911483/165067793-9fad9ebe-e205-4c58-8283-70fd143cc4bf.png)

 
<div id="tech-used">
<h2> Technologies Used </h2>

<h3>Frontend</h3>
 
 User Interface:
 <ul>
  <li><a href="https://reactjs.org/" target="_blank"> React.js <a/></li>
 </ul>
 
  Component Routing:
 <ul>
  <li><a href="https://reactrouter.com/" target="_blank"> React Router <a/></li>
 </ul>
 
 <h3> Backend </h3>
 
 Server:
 <ul>
   <li><a href="https://expressjs.com/" target="_blank"> Express.js <a/></li>
 </ul>
 
  Database:
 <ul>
   <li><a href="https://www.postgresql.org/" target="_blank"> PostgreSQL <a/></li> 
   <li><a href="https://sequelize.org/" target="_blank"> Sequelize <a/></li>
 </ul>
 
   Authentication:
 <ul>
  <li><a href="https://www.npmjs.com/package/bcrypt" target="_blank"> Bcrypt <a/></li>
   <li><a href="https://jwt.io/" target="_blank"> JSON Web Token <a/></li>
 </ul>

 Image Detection:
 <ul>
  <li><a href="https://www.tensorflow.org/tutorials/images/classification" target="_blank"> TensorFlow <a/></li>
 </ul>
 
 Restaurant Search:
 <ul>
  <li><a href="https://developers.google.com/maps/documentation/javascript/places" target="_blank"> Google Places API <a/></li>
   <li><a href="https://developers.google.com/maps/documentation/javascript/geocoding" target="_blank"> Google Geocoding API <a/></li>
 </ul>
</div>

<div id="rationale">
<h2> Rationale for Choice of Technologies  </h2>
 
<h3> PostgreSQL </h3>
 <b>Reason for Choosing a SQL Database: </b>
<ul>
 <li> Given the small size and complexity of our app, we did not have much data to store and data did not have a lot of relationships with other data. Hence, we did not require the ability to embed data, provided by a NoSQL database. </li>
 </ul>
 
  <h3> Google Maps API </h3>
<ul>
 <li> We wanted to allow users to be able to type in their address and use this to search for restaurants nearby.</li>
 <li>  Google Maps API provided a variety of APIs which allowed us to convert the users address into latitude and longitude coordinates and use these to search for restaurants serving the identified dish. </li>
  <li> Additionally, the Google Places API allowed us to customize our search parameters to get more accurate location results. </li>
</ul>
 
 <h3> TensorFlow </h3>
<ul>
 <li> Our desire to use a machine learning model to identify dishes in an image led us to TensorFlow. </li>
 <li> TensorFlows' ability to train a machine learning model to identify objects in an image suited this need. </li>
</ul>
 
 <h3> JSON Web Token </h3>
 <ul>
 <li> We chose JSON Web Tokens as our method of authentication due to its increased security through its digital signature capabilities. </li>
  </ul>

<h2 id="contributors"> Contributors </h2>

Dominique Yeo | <a href="https://www.linkedin.com/in/dominique-yeo-35b47716b" target="_blank"> LinkedIn<a/>

Shannon Suresh | <a href="https://www.linkedin.com/in/shannon-suresh" target="_blank"> LinkedIn<a/>
