// show all data
fetch('https://localhost:44324/api/Regestration')
  .then(response => response.json())
  .then(hi => displayReg(hi))

function displayReg(regestrations) {
  let g = regestrations.payload;
  console.log(regestrations);
  const regestrationNames = Object.keys(g).map(function (first_name) {
    return g[first_name];
  });
  
  const ul = document.getElementById("regestration_container");

  for (let i = 0; i < regestrationNames.length; i++) { 
    const regstrationame = regestrationNames[i];
    // console.log(coursename);
    const li = document.createElement("li");
    li.innerText = regstrationame.first_name;
    ul.appendChild(li);
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
