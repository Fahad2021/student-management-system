// fetch('https://localhost:44324/api/Course')
//   .then(response => response.json())
//   .then(hi => displaycourse(hi))

// function displaycourse(courses) {
//   let g = courses.payload;
//   console.log(courses);
//   const courseNames = Object.keys(g).map(function (course_nam) {
//     return g[course_nam];
//   });

//   const tr = document.getElementById("course_container");

//   for (let i = 0; i < courseNames.length; i++) {
//     const coursename = courseNames[i];
//     // console.log(coursename);
//     const td = document.createElement("td");
//     td.innerText = coursename.course_nam;
//     tr.appendChild(td);
//   }
// }
fetch('https://localhost:44324/api/Course')
	.then(response => response.json())
	.then(hi => displaycourse(hi))

function displaycourse(courses) {
	let g = courses.payload;
	console.log(g);
	var table = document.getElementById('myTable')
	for (var i = 0; i <= g.length; i++) {
		var row = `<tr>
	  <td>${g[i].id}<td>
	  <td>${g[i].course_nam}<td>
	  <td>${g[i].duration}<td>
	  </tr>`
		table.innerHTML += row
	}

}

// fetch("https://localhost:44324/api/Course").then((data)=>{
// console.log(data);
// return data.json();
// }).then((objectData)=>{
// console.log(objectData);
// let tableData="";
// objectData.map((values)=>{
// tableData+=`<tr>
//                 <td>${values.id}</td>
//                 <td>${values.course_nam}</td>
//                 <td>${values.duration}</td>
//             </tr>`;
// });
// document.getElementById("table_body").innerHTML=tableData;
// })

// creat
document.getElementById("submitbtn").addEventListener("click", function () {
	const courseid = document.getElementById("idno").value;
	const coursename = document.getElementById("coursenameid").value;
	const durationtime = document.getElementById("durationnameid").value;
	// console.log(title,bodyContent);
	const post = { id: courseid, course_nam: coursename, duration: durationtime };
	newPost(post);
	console.log(post);
	console.log("Click kora hoise");
})

function newPost(post) {
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
