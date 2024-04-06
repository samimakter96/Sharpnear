const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const putBtn = document.getElementById('put-btn');
const deleteBtn = document.getElementById('delete-btn');

getBtn.addEventListener('click', getTodo);
postBtn.addEventListener('click', postTodo);
putBtn.addEventListener('click', putTodo);
deleteBtn.addEventListener('click', deleteTodo);

const toDoList = {
  title: 'Do Homework',
  status: 'Not Completed'
}

// get request method get the data from the server
function getTodo() {
  axios
    .get("https://testtestapi.vercel.app/4176c5a433804f2b95768fbd5d0f2936/todo")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

// post request  create data
function postTodo() {
  axios
    .post(
      "https://testtestapi.vercel.app/4176c5a433804f2b95768fbd5d0f2936/todo", toDoList
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

// put request update data on server (id is must to update data)
function putTodo() {
  axios
    .put(
      "https://testtestapi.vercel.app/4176c5a433804f2b95768fbd5d0f2936/todo/cedb35a0efd111ee9b432306e29fbbbf",
      {
        title: "MeetEyeDoctor",
        completed: true,
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

// delete request  (id is must to delete)
function deleteTodo() {
  axios
    .delete(
      "https://testtestapi.vercel.app/4176c5a433804f2b95768fbd5d0f2936/todo/bd2f2190efd111ee9b432306e29fbbbf"
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}