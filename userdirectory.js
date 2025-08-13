// let url = "https://jsonplaceholder.typicode.com/users";

//  fetch (url)
// .then(function (response){
//   return response.json();
// })
// .then(function (data){
//   console.log(data);
// })
// .catch(function (error){
//   console.error("error");
// });
// const profilecardContainer = document.querySelector(".profilecards-container");
// async function getUserInfo() {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     // displayUsers(data);

//   } catch {
//     console.error("error");
//   }
// }
//   getUserInfo();

// function userInfo(users){
//   profilecardContainer.innerHTML = '';
//   users.foreach(user => {
//     const profilecard =  document.createElement('div');
//     profilecard.innerHTML = `
//       <h2> ${user.name} </h2>
//       <h3> ${user.username} </h3>
//       <p> ${user.email}
//       ${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode} </p>

//     `
//     profilecardContainer.appendChild(profilecard);
//   });
// };

//   function displayUsers(users) {
//   container.innerHTML = '';
//   users.forEach(user => {
//     const card = document.createElement('div');
//     card.className = 'profile-card';
//     card.innerHTML = `
//       <h2>${user.name}</h2>
//       <p>${user.email}</p>
//       <p>${user.city}, ${user.company}</p>
//     `;
//     container.appendChild(card);
//   });
// }
//  getUserInfo();

// const searchInput = document.getElementById("#searchInput")
// let users = [];

// searchInput.addEventListener("input", e =>{
//   let value = e.target.value
//   users.forEach(user => {
//     const isvisible =
//     user.name.includes(value) || user.email.includes(value);
//     user.element.classList.toggle("hide", !isvisible);
//   })
// })

const profilecardscontainer = document.querySelector(".profilecards-container");
const searchInput = document.getElementById("searchInput");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    function renderUsers(users) {
      profilecardscontainer.innerHTML = "";
      users.forEach((user) => {
        const profileCardContent = document.createElement("div");
        profileCardContent.className = "profile-card";
        profileCardContent.innerHTML = `
      <h2>${user.name}</h2>
      <p class="crucial-info">
      User Name: ${user.username}, Email: ${user.email}, Company Name: ${user.company.name}, City: ${user.address.city}, Street: ${user.address.street}, 
      <span class="read-more-info read-more-text"> Suite: ${user.address.suite}, Zipcode: ${user.address.zipcode}, Website: ${user.website}, Phone: ${user.phone}</span> <span class="read-more-btn read-more-js"> Read more... </span> 
      </p>`;
        profilecardscontainer.appendChild(profileCardContent);

        const readMore = profileCardContent.querySelector(".read-more-js");
        const container = profileCardContent.querySelector(".read-more-text");
        readMore.addEventListener("click", () => {
          container.classList.toggle("show");
          if (container.classList.contains("show")) {
            readMore.textContent = "Read less...";
          } else {
            readMore.textContent = "Read more...";
          }
        });
      });
    }
    renderUsers(data);
    searchInput.addEventListener("input", () => {
      const value = searchInput.value.toLowerCase();
      const filteredUsers = data.filter((user) => {
        return (
            user.name.toLowerCase().includes(value) ||
          user.email.toLowerCase().includes(value) ||
          user.username.toLowerCase().includes(value)
        )
      });
       renderUsers(filteredUsers);
    }); 
    const darkmodeBtn = document.querySelector(".dark-mode-toggle");
    darkmodeBtn.addEventListener("click", () => {

      const profilecards = document.querySelectorAll('.profile-card');

      const paraInfo = document.querySelectorAll(".profile-card p");

      profilecards.forEach((card) =>{
        card.classList.toggle("profile-card-dark-mode")
      });

      if(document.body.style.backgroundColor = "#5A6168"){
        document.body.style.backgroundColor= "";
      }else{
        document.body.style.backgrounColor= "#5A6168";
      }
    
    })
  })
  .catch((error) => {
    //  profilecardscontainer = document.querySelector(
    //   ".profilecards-container"
    // );
    profilecardscontainer.innerHTML = `
     <p id="error-message"> failed to fetch user information </p>
    `;
    console.error("Fetch error:", error);
  });

//  const readMore = document.querySelector(".read-more-js");
//       // console.log(readMore);
//  readMore.addEventListener("click", () =>{
//      const container = document.querySelector(".read-more-text");
//      console.log(container);
//     container.classList.toggle("show");
//  });
// const readmoreContainer = document.querySelector(".profilecards-container");

//   readmoreContainer.addEventListener('click', event =>{
//     const current = event.target;

//     const isReadMoreBtn = current.className.includes("read-more-btn");

//     if(!isReadMoreBtn) return;

//     const currentText= event.target.parentNode.querySelector("read-more-info");
//     currentText.classList.toggle(".show");
//   });


