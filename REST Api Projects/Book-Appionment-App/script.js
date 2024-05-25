function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('uname');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');

  const userDetails = {
    userName: name.value, 
    userEmail: email.value,
    userPhone: phone.value
  }


  // POST request - storing data on the cloud using crud crud via axios

  axios
    .post("https://crudcrud.com/api/af7831ccc92341c6b71f956d920bd09c/appointmentData", userDetails)
    .then((response) => {
      showUserOnScreen(response.data)
      console.log(response)
    })
    .catch((error) => {
      document.body.innerHTML = document.body.innerHTML + "<h4>Something Went wrong</h4>"
      console.log(error)
    })
    


  // clearing the input field
  name.value = '';
  email.value = '';
  phone.value = '';

}

// GET request -  get data from the server when the the page is refresh or dom is reloaded
window.addEventListener('DOMContentLoaded', () => {
  axios
  .get("https://crudcrud.com/api/af7831ccc92341c6b71f956d920bd09c/appointmentData")
  .then((res) => {
    // console.log(res)
    for (let i = 0; i < res.data.length; i++) {
      showUserOnScreen(res.data[i])
    }
   
  })
  .catch((err) => {
    console.log(err)
  })
})

function showUserOnScreen(userDetails) {
  const ul = document.getElementById('userLists');
  const li = document.createElement('li');
  li.textContent = `${userDetails.userName} - ${userDetails.userEmail} - ${userDetails.userPhone}`;
  ul.appendChild(li);

  
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';

  const editBtn = document.createElement('button');
  editBtn.innerText = 'Edit';

  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // Delete functionality
  deleteBtn.addEventListener('click', function() {
    ul.removeChild(li);
    axios
    .delete(`https://crudcrud.com/api/af7831ccc92341c6b71f956d920bd09c/appointmentData/${userDetails._id}`)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  // Edit functionality
  editBtn.addEventListener('click', function() {
    ul.removeChild(li);

      axios
        .put(`https://crudcrud.com/api/af7831ccc92341c6b71f956d920bd09c/appointmentData/${userDetails._id}`, {
          userName: userDetails.userName,
          userEmail: userDetails.userEmail,
          userPhone: userDetails.userPhone
        })
        .then((response) => {
        console.log(response)
        })
        .catch((error) => {
        console.log(error)
        })
    
   // Populate input fields with existing values for editing
    document.getElementById('uname').value = userDetails.userName;
    document.getElementById('email').value = userDetails.userEmail;
    document.getElementById('phone').value = userDetails.userPhone;
  })



// // Edit functionality
// editBtn.addEventListener('click', function() {
//   ul.removeChild(li);

//   const updatedUserName = document.getElementById('uname').value;
//   const updatedUserEmail = document.getElementById('email').value;
//   const updatedUserPhone = document.getElementById('phone').value;

//   axios
//     .put(`https://crudcrud.com/api/d574fe06323c4652a7d856f611dbc5c0/appointmentData/${userDetails._id}`, {
//       userName: updatedUserName,
//       userEmail: updatedUserEmail,
//       userPhone: updatedUserPhone
//     })
//     .then((response) => {
//       console.log(response);
      
//       // Update the displayed user details with the edited values
//       userDetails.userName = updatedUserName;
//       userDetails.userEmail = updatedUserEmail;
//       userDetails.userPhone = updatedUserPhone;
      
//       // Update the displayed user details on screen
//       li.textContent = `${userDetails.userName} - ${userDetails.userEmail} - ${userDetails.userPhone}`;
//       ul.appendChild(li);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   // Clear input fields after editing
//   document.getElementById('uname').value = '';
//   document.getElementById('email').value = '';
//   document.getElementById('phone').value = '';
// });


}
