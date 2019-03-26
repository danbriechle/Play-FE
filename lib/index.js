import './styles.css';

fetch('https://turing-play-music.herokuapp.com/api/v1/favorites')
  .then(result => {
    return result.json();
  })
  .then(json => {
    const favoriteCount = json.length

    for (let i = 0; i < favoriteCount; i++) {
      const parentSong = document.getElementById('all_favorites');
      const childSong = document.createElement('h3');
      const appendChildSong = parentSong.appendChild(childSong);
      appendChildSong.innerHTML = json[i].name;

      const parentArtist = document.getElementById('all_favorites');
      const childArtist = document.createElement('h4');
      const appendChildArtist = parentArtist.appendChild(childArtist);
      appendChildArtist.innerHTML = json[i].artist_name;

      const parentRating = document.getElementById('all_favorites');
      const childRating = document.createElement('h6');
      const appendChildRating = parentRating.appendChild(childRating);
      appendChildRating.innerHTML = json[i].rating;
    }
  })
  .catch(error => console.log(error));
