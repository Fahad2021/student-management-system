// show all data
fetch('https://localhost:44324/api/Regestration')
  .then(response => response.json())
  .then(hi => displayReg(hi))

function displayReg(regestrations) {
  let g = regestrations.payload;
  console.log(g);
  var table=document.getElementById('myTable')
  for(var i=0;i<g.length;i++){
  var row=`<tr>
  <td>${g[i].id}<td>
  <td>${g[i].first_name}<td>
  <td>${g[i].last_name}<td>
  <td>${g[i].email}<td>
  <td>${g[i].phone}<td>
  <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
            data-bs-target="#editeModal">Edit</button>
            <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal"
            data-bs-target="#DeleteModal">Delete</button>
  </tr>`
  table.innerHTML += row
}

}


// creat
document.getElementById("submitreg").addEventListener("click", function () {
  const idno = document.getElementById("id").value;
  const firstname = document.getElementById("firstnameid").value;
  const lastname = document.getElementById("lastnameid").value;
  const varemail = document.getElementById("emailid").value;
  const varphone = document.getElementById("phoneid").value;
  // console.log(title,bodyContent);
  const post = {id:idno, first_name: firstname, last_name: lastname, email: varemail,phone:varphone };
  newPost(post);
  console.log(post);
  console.log("Click kora hoise");
})

function newPost(post) {
  fetch('https://localhost:44324/api/Regestration/CreateRegestration', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

}
