function handleFormSubmit(event) {
  event.preventDefault();

  const studentName = document.getElementById("studentName").value;
  const monitor = document.getElementById("monitor").value;

  const voterDetails = {
    voterName: studentName,
    monitorName: monitor,
  };

  // increment total vote count whenever a new vote submitted
  incrementTotalVote();

  // POST request - storing the data on the server via axios
  axios
    .post(
      "https://crudcrud.com/api/9936653a389e4e7eb64f9d622ced89b9/voterList",
      voterDetails
    )
    .then((response) => {
      const newVoter = response.data;
      displayVoterOnScreen(newVoter);
    })
    .catch((error) => {
      console.log(error);
    });

  // Clearing the input fields
  document.getElementById("studentName").value = "";
}

// GET request - get data from the server whenever page gets reloaded
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/9936653a389e4e7eb64f9d622ced89b9/voterList")
    .then((response) => {
      let totalVoteCount = 0;
      response.data.forEach((voter) => {
        totalVoteCount++;
        displayVoterOnScreen(voter);
      });
      // Update total vote count displayed on the screen
      document.getElementById("totalVote").textContent = totalVoteCount;
    })
    .catch((error) => {
      console.log(error);
    });
});

function displayVoterOnScreen(voterDetails) {
  // console.log("Received voter details:", voterDetails);

  // This line uses object destructuring to extract the monitorName and voterName properties directly from the voterDetails object
  const {monitorName, voterName} = voterDetails;

  // console.log("Extracted monitor name:", monitorName);
  // console.log("Extracted voter name:", voterName);

  switch (monitorName) {
    case "samim":
      // increment samim total vote count
      const samimTotalVote = document.getElementById("samimTotal");
      samimTotalVote.textContent = parseInt(samimTotalVote.textContent) + 1;

      const samimPara = document.getElementById("samimVoters");
      const samimH3 = document.createElement("h3");
      samimH3.textContent = voterName;

      const samimDeleteBtn = document.createElement("button");
      samimDeleteBtn.textContent = "Delete";
      samimDeleteBtn.classList.add("delete-button"); // Add CSS class to button
      samimDeleteBtn.addEventListener("click", () => {
        samimPara.removeChild(samimH3);
        // decrement total vote count
        decrementTotalVote();
        // decrement samim individual total vote count
        samimTotalVote.textContent = parseInt(samimTotalVote.textContent) - 1;

        // DELETE request - delete the data from server also via axios
        axios
          .delete(
            `https://crudcrud.com/api/9936653a389e4e7eb64f9d622ced89b9/voterList/${voterDetails._id}`
          )
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      });

      samimH3.appendChild(samimDeleteBtn);
      samimPara.appendChild(samimH3);
      break;

    case "kartik":
      // increment kartik total vote count
      const kartikTotalVote = document.getElementById("kartikTotal");
      kartikTotalVote.textContent = parseInt(kartikTotalVote.textContent) + 1;

      const kartikPara = document.getElementById("kartikVoters");
      const kartikH3 = document.createElement("h3");
      kartikH3.textContent = voterName;

      const kartikDeleteBtn = document.createElement("button");
      kartikDeleteBtn.textContent = "Delete";
      kartikDeleteBtn.classList.add("delete-button"); // Add CSS class to button
      kartikDeleteBtn.addEventListener("click", () => {
        kartikPara.removeChild(kartikH3);
        // decrement total vote count
        decrementTotalVote();
        // decrement kartik individual total vote count
        kartikTotalVote.textContent = parseInt(kartikTotalVote.textContent) - 1;

        // DELETE request - delete the data from server also via axios
        axios
          .delete(
            `https://crudcrud.com/api/9936653a389e4e7eb64f9d622ced89b9/voterList/${voterDetails._id}`
          )
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      });

      kartikH3.appendChild(kartikDeleteBtn);
      kartikPara.appendChild(kartikH3);
      break;

    case "aman":
      // increment aman total vote count
      const amanTotalVote = document.getElementById("amanTotal");
      amanTotalVote.textContent = parseInt(amanTotalVote.textContent) + 1;

      const amanPara = document.getElementById("amanVoters");
      const amanH3 = document.createElement("h3");
      amanH3.textContent = voterName;

      const amanDeleteBtn = document.createElement("button");
      amanDeleteBtn.textContent = "Delete";
      amanDeleteBtn.classList.add("delete-button"); // Add CSS class to button
      amanDeleteBtn.addEventListener("click", () => {
        amanPara.removeChild(amanH3);
        // decrement total vote count
        decrementTotalVote();
        // decrement aman individual total vote count
        amanTotalVote.textContent = parseInt(amanTotalVote.textContent) - 1;

        // DELETE request - delete the data from server also via axios
        axios
          .delete(
            `https://crudcrud.com/api/9936653a389e4e7eb64f9d622ced89b9/voterList/${voterDetails._id}`
          )
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      });

      amanH3.appendChild(amanDeleteBtn);
      amanPara.appendChild(amanH3);
      break;

    default:
      console.log("Invalid monitorName");
      break;
  }
}

// total vote count function
function incrementTotalVote() {
  const totalVoteCount = document.getElementById("totalVote");
  let currentCount = parseInt(totalVoteCount.textContent);
  // Check if the current count is negative
  if (currentCount < 0) {
    // If it's negative, set it to 0
    totalVoteCount.textContent = 0;
  } else {
    // If it's not negative, increment as usual
    totalVoteCount.textContent = currentCount + 1;
  }
}

// decrement total vote count function
function decrementTotalVote() {
  const totalVoteCount = document.getElementById("totalVote");
  totalVoteCount.textContent = parseInt(totalVoteCount.textContent) - 1;
}
