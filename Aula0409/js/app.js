const button = document.querySelector('#btnUsers')
const div = document.querySelector('#out')

button.addEventListener('click', () => {
   fetch('https://jsonplaceholder.typicode.com/posts/101')
  .then(function (response) {
    if (response.ok){
      return response.json()
    } 

    else {
      div.innerHTML =          
      `
      <div> 
            <h1> Erro </h1>
            <h2>404 - Usuário não encontrado</h2>
         </div>
        `
    }
  })
    
  .then(function (json) {

    //post agora é um objeto completo dinamicamente do fromraw
    let post = Post.fromRaw(json)
    post.renderFrom(div)
  })

});