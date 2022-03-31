// fetch data on table
fetch('https://localhost:44324/api/Course')
	.then(response => response.json())
	.then(hi => displaycourse(hi))

function displaycourse(courses) {
	let g = courses.payload;
	console.log(g);
	var table = document.getElementById('myTable')
	for (let i = 0; i <= g.length; i++) {
		let row = `<tr>
		<td>${g[i].id}</td>
		<td>${g[i].course_nam}</td>
		<td>${g[i].duration}</td>
		<td>	  	
			<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
			data-bs-target="#editeModal">
			Edit
			</button>
		</td>
		<td>	  	
			<button type="button" class="btn btn-outline-danger" data-bs-toggle="modal"
				data-bs-target="#DeleteModal">
				Delete
			</button>
		</td>
	  </tr>`
		table.innerHTML += row
	}

}

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


