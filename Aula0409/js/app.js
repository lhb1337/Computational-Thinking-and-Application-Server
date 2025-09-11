const button = document.querySelector('#btnUsers')
const div = document.querySelector('#out')

button.addEventListener('click', () => {
   fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(function (response) {
    return response.json()
  })
    
  .then(function (json) {
    let post = Post.fromRaw(json)

    console.log(post);
    
    // div.innerText = json.body;
    // div.innerText = JSON.stringify(json, null, 0)
  })

});