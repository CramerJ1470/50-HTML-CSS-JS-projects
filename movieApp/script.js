const API_URL =
	"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9a317dc8a7d6e39cd7b4328a1b6d65e5&language=en-US";

console.log(API_URL);

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_URL =
	'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const PIXAR_SEARCH =
	"https://api.themoviedb.org/3/discover/movie?with_genres=16&api_key=9a317dc8a7d6e39cd7b4328a1b6d65e5&language=en-US&pages";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

getMovies(API_URL);

async function getMovies(url) {
	const res = await fetch(url);
	const data = await res.json();

	showMovies(data.results);
}

function showMovies(movies) {
	main.innerHTML = "";

	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie;
		// console.log(movie);
		const movieEl = document.createElement("div");
		movieEl.classList.add("movie");

		movieEl.innerHTML = `
                <img src="${IMG_PATH + poster_path}"
                    alt="${title}"/>
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getClassByRate(
						vote_average
					)}">${vote_average}</span>
                </div>
            <div class="overview">
            <h3>Overview</h3>
                ${overview}
            </div>`;

		main.appendChild(movieEl);
	});
}

function getClassByRate(vote) {
	if (vote >= 8) {
		return "green";
	} else if (vote >= 5) {
		return "orange";
	} else {
		return "red";
	}
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const searchTerm = search.value;

	if (searchTerm && searchTerm !== "") {
		getMovies(SEARCH_URL + searchTerm);

		search.value = "";
	} else {
		window.location.reload();
	}
});

getMovies1(PIXAR_SEARCH);
async function getMovies1(url) {
	const res = await fetch(url);
	const data = await res.json();

	console.log(data.results);
	data.results.map((m) => {
		if (m.name === "Animation") {
			const animationId = m.id;
			console.log(`genre `, m, `has an id of `, m.id);
		}
	});
}
