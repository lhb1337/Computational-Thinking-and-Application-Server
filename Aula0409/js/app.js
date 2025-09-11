const button = document.querySelector('#btnUsers')
const div = document.querySelector('#out')

button.addEventListener('click', () => {
   fetch('https://jsonplaceholder.typicode.com/posts/26')
  .then(function (response) {
    return response.json()
  })
    
  .then(function (json) {

    //post agora é um objeto completo dinamicamente do fromraw
    let post = Post.fromRaw(json)
    post.renderFrom(div)
  })

});