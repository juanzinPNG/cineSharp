document.addEventListener("DOMContentLoaded", function() {
    const dateCardsContainer = document.getElementById('date-cards-container');
    const movieSelection = document.getElementById('movie-selection');
  
    
    // Função para criar um botão de data
    function createDateButton(day) {
      const button = document.createElement('button');
      button.className = 'btn btn-primary btn-date';
      button.textContent = day;
      return button;
    }
  
    // Gerar botões para hoje e os próximos 14 dias
    const currentDate = new Date();
    for (let i = 0; i <= 14; i++) {
      const date = new Date();
      date.setDate(currentDate.getDate() + i);
      const day = date.getDate();  // Apenas o número do dia
      const dateButton = createDateButton(day);
      dateCardsContainer.appendChild(dateButton);
    }
  
    // Filmes de exemplo
    const movies = [
      { title: 'Filme 1', poster: './img/divertida-mente-2-poster-nacional.jpg', room: 'Sala 1' },
      { title: 'Filme 2', poster: './img/dXNAPwY7VrqMAo51EKhhCJfaGb5Matrix.jpg', room: 'Sala 2' },
      { title: 'Filme 3', poster: './img/osadIMDMDAJAANsdBadBoys.jpg', room: 'Sala 3' },
      { title: 'Filme 4', poster: './img/SDDUAISMDFOFIKkalsakadjaKAObservadores.jpg', room: 'Sala 4' },
    ];
  
    // Função para criar um card de filme
    function createMovieCard(movie) {
      const cardCol = document.createElement('div');
      cardCol.className = 'col-md-3 movie-card';
  
      const cardTitle = document.createElement('h5');
      cardTitle.className = 'movie-title text-center';
      cardTitle.textContent = movie.title;
  
      const cardPoster = document.createElement('img');
      cardPoster.className = 'movie-poster';
      cardPoster.src = movie.poster;
    
  
      const cardRoom = document.createElement('p');
      cardRoom.className = 'movie-room text-center';
      cardRoom.textContent = movie.room;
  
      const confirmContainer = document.createElement('div');
      confirmContainer.className = 'confirm-container';
  
      const confirmButton = document.createElement('button');
      confirmButton.className = 'btn btn-danger';
      confirmButton.textContent = 'Confirmar';
      confirmContainer.appendChild(confirmButton);
  
      cardCol.appendChild(cardTitle);
      cardCol.appendChild(cardPoster);
      cardCol.appendChild(cardRoom);
      cardCol.appendChild(confirmContainer);
  
      // Adicionar evento de clique para selecionar o filme
      cardCol.addEventListener('click', function() {
        document.querySelectorAll('.movie-card').forEach(card => {
          card.classList.remove('selected');
          card.querySelector('.confirm-container').style.display = 'none';
        });
        cardCol.classList.add('selected');
        confirmContainer.style.display = 'block';
      });
  
      // Adicionar evento ao botão de confirmação
      confirmButton.addEventListener('click', function() {
        const selectedMovie = cardTitle.textContent;
        alert(`Você selecionou: ${selectedMovie}`);
      });
  
      return cardCol;
    }
  
    // Gerar cards de filmes
    movies.forEach(movie => {
      const movieCard = createMovieCard(movie);
      movieSelection.appendChild(movieCard);
    });
  });