const button = document.querySelector('#btnUsers')

button.addEventListener('click', () => {
   fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
} )