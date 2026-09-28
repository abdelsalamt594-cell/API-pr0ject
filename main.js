async function playapi() {
  let responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await responce.json();
  console.log(data);
}

playapi();
