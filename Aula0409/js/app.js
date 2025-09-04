const button = document.querySelector('#btnUsers')
const list = document.querySelector('#out')

button.addEventListener('click', () => {
   fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(function (response) {
    return response.json()
  })
    
  .then(function (data) {
    list.textContent = `
    Tittle: ${data[0].title},
    Body: ${data[0].body}
    `
    let listaOrdenada = "<ol>"

    for (usuario in data ) {
      
    }
  })

});