fetch('https://localhost:44324/api/User')
  .then(response => response.json())
  .then(hi => displayusers(hi))

function displayusers(users) {
  let g = users.payload;
  console.log(g);
  var table=document.getElementById('myTable')
  for (var i = 0; i < g.length; i++) {
    var row=`<tr>
  <td>${g[i].id}<td>
  <td>${g[i].first_name}<td>
  <td>${g[i].last_name}<td>
  <td>${g[i].user_name}<td>
  <td>${g[i].password}<td>
  <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
            data-bs-target="#editeModal">Edit</button>
            <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal"
            data-bs-target="#DeleteModal">Delete</button>
  </tr>`
  table.innerHTML += row
    
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
