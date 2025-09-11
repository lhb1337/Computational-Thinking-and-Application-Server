const button = document.querySelector('#btnUsers')
const div = document.querySelector('#out')

button.addEventListener('click', () => {
   fetch('https://jsonplaceholder.typicode.com/posts/101')
  .then(function (response) {
    if (response.ok){
      return response.json()
    } 

    else {
        const msg ="Recurso não encontrado ou servido não disponível, tente novamente mais tarde"
        throw new Error(msg)
    }
  })
    
  .then(function (json) {
    //post agora é um objeto completo dinamicamente do fromraw
    let post = Post.fromRaw(json)
    post.renderFrom(div)
  })

  .catch(function (error){
    renderError(error)
  })

});

function renderError(error) {
  div.innerHTML = `
  <div>
    <h2>${error}</h2>
  </div>
  `
}