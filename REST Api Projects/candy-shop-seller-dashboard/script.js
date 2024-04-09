function handleFormSubmit(event) {
  event.preventDefault();

  const CandyDetails = {
    candyName: event.target.candyName.value,
    description: event.target.description.value,
    price: event.target.price.value,
    quantity: event.target.quantity.value
  };

  // POST request storing data on crud crud via axios
  axios
    .post("https://crudcrud.com/api/d07a8335e2c04c2d839e6e9bcf8be2f6/candyShop", CandyDetails)
    .then((response) => {
      displayCandyOnScreen(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  // Clearing the input fields
  document.getElementById('candyName').value = '';
  document.getElementById('description').value = '';
  document.getElementById('price').value = '';
  document.getElementById('quantity').value = '';
}

// GET request - get data from the server whenever page gets reloaded
window.addEventListener('DOMContentLoaded', () => {
  axios
    .get("https://crudcrud.com/api/d07a8335e2c04c2d839e6e9bcf8be2f6/candyShop")
    .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        displayCandyOnScreen(response.data[i]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});


function displayCandyOnScreen(CandyDetails) {
  // select ul element
  const ul = document.querySelector('ul');
  // create li tag
  const li = document.createElement('li');
  // inside li append candyDetails value and display on the screen
  li.textContent = `${CandyDetails.candyName} - ${CandyDetails.description} - ${CandyDetails.price} - ${CandyDetails.quantity}`;

  const buyOneBtn = createBuyButton(1, CandyDetails, li);
  const buy2Btn = createBuyButton(2, CandyDetails, li);
  const buy3Btn = createBuyButton(3, CandyDetails, li);

  // append li inside ul
  ul.appendChild(li);
}

function createBuyButton(decrementAmount, CandyDetails, li) {
  const button = document.createElement('button');
  button.textContent = `Buy${decrementAmount}`;

  button.addEventListener('click', () => {
    const updatedQuantity = parseInt(CandyDetails.quantity) - decrementAmount;

    // PUT request update the value from the server
    axios
      .put(`https://crudcrud.com/api/d07a8335e2c04c2d839e6e9bcf8be2f6/candyShop/${CandyDetails._id}`, {
        candyName: CandyDetails.candyName,
        description: CandyDetails.description,
        price: CandyDetails.price,
        quantity: updatedQuantity
      })
      .then((response) => {
        if (updatedQuantity <= 0) {
          li.remove();
        } else {
          CandyDetails.quantity = updatedQuantity;
          li.textContent = `${CandyDetails.candyName} - ${CandyDetails.description} - ${CandyDetails.price} - ${updatedQuantity}`;
          addBuyButtons(li, CandyDetails); // Add all buy buttons after updating quantity
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  li.appendChild(button);
  
  return button;
}

function addBuyButtons(li, CandyDetails) {
  const buyOneBtn = createBuyButton(1, CandyDetails, li);
  const buy2Btn = createBuyButton(2, CandyDetails, li);
  const buy3Btn = createBuyButton(3, CandyDetails, li);
}