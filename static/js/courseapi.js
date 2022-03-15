document.getElementById("submitbtn").addEventListener("click",function(){
  const courseid=document.getElementById("idno").value;
  const coursename=document.getElementById("coursenameid").value;
  const durationtime=document.getElementById("durationnameid").value;
  // console.log(title,bodyContent);
  const post={id:courseid,course_nam:coursename,duration:durationtime};
  newPost(post);
  console.log(post);
  console.log("Clicked kora hoise");
})

function newPost(post){
  fetch('https://localhost:44324/api/Course/CreateCourse', {
  method: 'POST',
  body: JSON.stringify(post),
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})
  .then((response) => response.json())
  .then((data) => console.log(data));

}

document.getElementById("editsubmit").addEventListener("click",function(){
  const edtcourseid=document.getElementById("editcourseid").value;
  const edtcoursename=document.getElementById("editcoursenamid").value;
  const edtdurationtime=document.getElementById("editdurationid").value;
  // console.log(title,bodyContent);
  const post={amarId:edtcourseid,amarName:edtcoursename,duration:edtdurationtime};
  newPost(post);
  console.log(post);
  console.log("Clicked kora hoise");
})

function newPost(post){
  fetch('https://localhost:44324/api/Course/UpdateCourse', {
  method: 'POST',
  body: JSON.stringify(post),
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})
  .then((response) => response.json())
  .then((data) => console.log(data));

}

// function displayUser(users) {
//   const userName = users.map(user => user.userName);
//   const ul = document.getElementById("users-container");
//   for (let i = 0; index < userName.length; i++) {
//     const userName = userName[i];
//     const li = document.createElement("li");
//     li.innerText = userName
//     ul.appendChild(li);
//   }
// }