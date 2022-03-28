fetch('https://localhost:44324/api/User')
  .then(response => response.json())
  .then(hi => displayusers(hi))

function displayusers(users) {
  let g = users.payload;
  console.log(users);
  const userNames = Object.keys(g).map(function (first_name) {
    return g[first_name];
  });
  
  const ul = document.getElementById("user_container");

  for (let i = 0; i < userNames.length; i++) {
    const username = userNames[i];
    // console.log(coursename);
    const li = document.createElement("li");
    li.innerText = username.first_name;
    ul.appendChild(li);
  }
}
// creat
document.getElementById("submituser").addEventListener("click", function () {
  const idno = document.getElementById("userid").value;
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const varusername = document.getElementById("username").value;
  const varpassword = document.getElementById("password").value;
  
  const post = { id: idno, first_name: firstname, last_name: lastname,user_name: varusername,password:varpassword};
  newPost(post);
  console.log(post);
  console.log("Click kora hoise");
})

function newPost(post) {
  fetch('https://localhost:44324/api/User/CreateUser',{
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

}
