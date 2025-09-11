const button = document.querySelector('#btnUsers')
const list = document.querySelector('#out')

button.addEventListener('click', () => {
   fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(function (response) {
    return response.json()
  })
    
  .then(function (json) {
    div.innerText = json.body;
    div.innerText = JSON.stringify(json, null, 0)
  })

});