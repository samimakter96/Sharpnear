function handleFormSubmit(event) {
  event.preventDefault();

  const userDetails = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value
  };

  // post request - store data on crud crud via axios
  axios
    .post("https://crudcrud.com/api/59214017a96b4e4fb781c4e586ae1f78/appointmentData",
      userDetails
    )
    .then((response) => displayUserOnScreen(response.data)) // Assuming displayUserOnScreen function is defined elsewhere
    .catch((error) => console.log(error));


    // Clearing the input fields
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}


// get request - get data from the server whenever page gets reloaded
window.addEventListener('DOMContentLoaded', () => {
  axios
    .get("https://crudcrud.com/api/59214017a96b4e4fb781c4e586ae1f78/appointmentData")
    .then((response) => {
      console.log(response)
      for (let i = 0; i < response.data.length; i++) {
        displayUserOnScreen(response.data[i])
      }
    })
    .catch((error) => {
      console.log(error)
    })
});

// displayUserOnScreen function
function displayUserOnScreen(userDetails) {
  // create li tag
  const li = document.createElement('li');
  // inside li append the userDetails value and display
  li.appendChild(document.createTextNode(`${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`))

  // select ul and append li inside ul
  const ul = document.querySelector('ul');
  ul.appendChild(li);

  // Create Delete Button
  const deleteBtn = document.createElement('button');
  deleteBtn.appendChild(document.createTextNode("Delete"));
  li.appendChild(deleteBtn);

  // Delete functionality
  deleteBtn.addEventListener('click', function(event) {
    // remove li from ul
    ul.removeChild(event.target.parentElement);
    // remove data from the server also using delete request via axios
    axios
      .delete(`https://crudcrud.com/api/59214017a96b4e4fb781c4e586ae1f78/appointmentData/${userDetails._id}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  });
    
  
  // Create Edit Button
  const editBtn = document.createElement('button');
  editBtn.appendChild(document.createTextNode("Edit"));
  li.appendChild(editBtn);

  // Edit functionality
  editBtn.addEventListener('click', function(event) {
    // remove li from ul
    ul.removeChild(event.target.parentElement);
    // remove data from the server also using delete request via axios
    axios
      .delete(`https://crudcrud.com/api/59214017a96b4e4fb781c4e586ae1f78/appointmentData/${userDetails._id}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));


    // Populate input fields with existing values for editing
    document.getElementById('username').value = userDetails.username;
    document.getElementById('email').value = userDetails.email;
    document.getElementById('phone').value = userDetails.phone;
  });

};