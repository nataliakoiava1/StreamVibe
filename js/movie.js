document.addEventListener("DOMContentLoaded", () => {

  let currentPage = 1;
let isLoading = false;

  const API_KEY = "2b51ea52e9725205ed81da8d013a24de";
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  const MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  const moviesContainer = document.getElementById("movies");
  const modal = document.getElementById("trailerModal");
  const iframe = document.getElementById("trailerFrame");
  const closeModal = document.getElementById("closeModal");

  // Load navbar
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
      initNavbar();
    });

  // Fetch movies
    function fetchMovies() {
  if (isLoading) return;
  isLoading = true;

  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${currentPage}`)
    .then(res => res.json())
    .then(data => {
      data.results.forEach(movie => createMovieCard(movie));
      currentPage++;
      isLoading = false;
    })};

  function createMovieCard(movie) {
    if (!movie.poster_path) return;

    const card = document.createElement("div");
    card.className = "movie-card";

    card.innerHTML = `
      <img src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
      
      <div class="play-btn">
        <span>▶</span>
      </div>

      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>${movie.release_date}</p>
        <p class="rating">⭐ ${movie.vote_average}</p>
      </div>
    `;

    card.querySelector(".play-btn").addEventListener("click", () => {
      openTrailer(movie.id);
    });

    moviesContainer.appendChild(card);
  }

  function openTrailer(movieId) {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        const trailer = data.results.find(
          v => v.type === "Trailer" && v.site === "YouTube"
        );

        if (trailer) {
          iframe.src = `https://www.youtube.com/embed/${trailer.key}?autoplay=1`;
          modal.style.display = "flex";
        } else {
          alert("Trailer not available");
        }
      });
  }
  fetchMovies();

  closeModal.addEventListener("click", closeTrailer);
  modal.addEventListener("click", e => {
    if (e.target === modal) closeTrailer();
  });

  function closeTrailer() {
    modal.style.display = "none";
    iframe.src = "";
  }

  window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 200
  ) {
    fetchMovies();
  }
});

});



document.addEventListener("DOMContentLoaded", () => {
  const slide = document.querySelector(".carousel-slide");
  const images = document.querySelectorAll(".carousel-slide img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let counter = 0;
  const size = images[0].clientWidth;

  function updateSlide() {
    slide.style.transform = `translateX(${-counter * size}px)`;
  }

  nextBtn.addEventListener("click", () => {
    counter = (counter + 1) % images.length;
    updateSlide();
  });

  prevBtn.addEventListener("click", () => {
    counter = (counter - 1 + images.length) % images.length;
    updateSlide();
  });

});



