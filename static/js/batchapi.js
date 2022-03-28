fetch('https://localhost:44324/api/Batch')
  .then(response => response.json())
  .then(hi => displaybatch(hi))

function displaybatch(batches) {
  let g = batches.payload;
  console.log(batches);
  const batchNames = Object.keys(g).map(function (batch_nam) {
    return g[batch_nam];
  });
  
  const ul = document.getElementById("batch_container");

  for (let i = 0; i < batchNames.length; i++) {
    const batchname = batchNames[i];
    // console.log(batchname);
    const li = document.createElement("li");
    li.innerText = batchname.batch_nam;
    ul.appendChild(li);
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
