/* format
 {
  "id": "R7UfaahVfFd",
  "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
  "status": 200
}

call $ curl -H "Accept: application/json" https://icanhazdadjoke.com/
*/

const joke = document.getElementById("joke");
const button = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);


// generateJoke();

// function generateJoke() {
// 	const config = { headers: { Accept: "application/json" } };
// 	fetch("https://icanhazdadjoke.com", config)
// 		.then((res) => res.json())
// 		.then((data) => (joke.innerHTML = data.joke));
// }

generateJoke();

async function generateJoke() {
	const config = { headers: { Accept: "application/json" } };
	const res = await fetch("https://icanhazdadjoke.com", config);
	
    const data = await res.json();
    
    joke.innerHTML = data.joke;
}
