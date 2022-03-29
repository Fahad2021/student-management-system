fetch('https://localhost:44324/api/Batch')
  .then(response => response.json())
  .then(hi => displaybatch(hi))

function displaybatch(batches) {
  let g = batches.payload;
  console.log(g);
  var table=document.getElementById('myTable')
  for (let i = 0; i < g.length; i++) {
    var row = `<tr>
	  <td>${g[i].id}<td>
	  <td>${g[i].batch_nam}<td>
	  <td>${g[i].year}<td>
    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
            data-bs-target="#editeModal">Edit</button>
            <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal"
            data-bs-target="#DeleteModal">Delete</button>
	  </tr>`
		table.innerHTML += row
	}

}
  

// creat
document.getElementById("batchcon").addEventListener("click", function () {
  const batchid = document.getElementById("batchnoid").value;
  const batchname = document.getElementById("batchnameid").value;
  const batchyear = document.getElementById("batchyearid").value;
  // console.log(title,bodyContent);
  const post = { id: batchid, batch_nam: batchname, year: batchyear };
  newPost(post);
  console.log(post);
  console.log("Click kora hoise");
})

function newPost(post) {
  fetch('https://localhost:44324/api/Batch/CreateBatch', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

}
