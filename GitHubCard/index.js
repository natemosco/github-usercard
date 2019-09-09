/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// axios
// .get(`https://api.github.com/users/natemosco`)
//   .then(response =>{
//     console.log(response);
//   })
//   .catch(error => {
//     console.log("The data was not returned", error);
//   });
// THIS IS COPIED BELOW

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/
function informationCard(information){
  const newCard = document.createElement("div");
  newCard.classList.add("card");

  const img = document.createElement("img");
  newCard.append(img);
  img.src = information.data.avatar_url;

  const cardInfo = document.createElement("div");
  newCard.append(cardInfo);
  cardInfo.classList.add("card-info");
  
  const name = document.createElement("h3");
  cardInfo.append(name);
  name.classList.add("name");
  name.textContent = information.data.name;

  const username = document.createElement("p");
  cardInfo.append(username);
  username.classList.add("username");
  username.textContent = information.data.login;

  const location = document.createElement("p");
  cardInfo.append(location);
  location.textContent = `Location: ${information.data.location}`;

  const profile = document.createElement("p");
  cardInfo.append(profile);
  
  const profileLink = document.createElement("a");
  profile.append(profileLink);
  profile.textContent = `Profile:`;
  profileLink.href = information.data.html_url;

  const followers = document.createElement("p");
  cardInfo.append(followers);
  followers.textContent = `Followers: ${information.data.followers}`

  const following = document.createElement("p");
  cardInfo.append(following);
  following.textContent = `Following: ${information.data.following}`
  
  const bio = document.createElement("p");
  cardInfo.append(bio);
  bio.textContent = `Bio: ${information.data.bio}`

  console.log(newCard);
  return newCard;
}

/* Step 4: Pass the data received from Github into your function, 
create a new component and add it to the DOM as a child of .cards
*/
const cards = document.querySelector('.cards')
const followersArray = [];
followersArray.push("tetodan", "dustinmyers", "justsml", "luishrd", "bigknell");

axios
.get(`https://api.github.com/users/natemosco`)
  .then(response =>{
    console.log(response);
    cards.append(informationCard(response));
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

followersArray.map( userId => {
  axios
  .get(`https://api.github.com/users/${userId}`)
    .then(response =>{
      console.log(response);
      cards.append(informationCard(response));
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });
  });
    



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/