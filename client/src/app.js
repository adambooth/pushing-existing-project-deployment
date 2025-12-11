console.log("I am running!");

//TODO : Collect user data from the form

const staffForm = document.getElementById("staff-form");

function handleStaffSubmit(event) {
  event.preventDefault(); //This stops the page from refreshing when the form is submitted.
  const formDatatemplate = new FormData(staffForm); //This grabs all the values from the form called staffForm
  const formValues = Object.fromEntries(formDatatemplate); //This turns the data into a normal JavaScript object.
  console.log(formValues);

  //TODO: send the data in a request to the server
  // We use the url where our server is located --> http://localhost:8080
  // We will use fetch to connect our client to the server
  fetch("http://localhost:8080/new-staff", {
    //This starts a network request to your server running on your computer
    method: "POST", //This tells the server i am sending new data
    headers: {
      //This tells the server the data i am sending is in JSON format
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }), //This converts your JavaScript object into a JSON string and sends it.
  });
}

staffForm.addEventListener("submit", handleStaffSubmit);

//--------------------------------------------------------Workshop-----------------------------------------------

const messageForm = document.getElementById("message-form");

messageForm.addEventListener("submit", handleMessageSubmit);

function handleMessageSubmit(event) {
  event.preventDefault();
  const formDatatemplate = new FormData(messageForm);
  const formValues = Object.fromEntries(formDatatemplate);
  console.log(formValues);

  fetch("http://localhost:8080/new-messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}

//--------------------------------------------------------Get Data-----------------------------------------------

const getData = document.getElementById("get-data");

getData.addEventListener("click", getDataFunc);

async function getDataFunc(event) {
  event.preventDefault(); // stop default form reload/refresh

  const response = await fetch("http://localhost:8080/new-messages", {
    method: "GET",
  });

  const html = await response.text(); // get back rendered HTML

  document.getElementById("messages-container").innerHTML = html;
}
