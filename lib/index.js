import './styles.css';


function getFavorites(event) {
  event.preventDefault();

  fetch('https://turing-play-music.herokuapp.com/api/v1/favorites')
    .then(result => {
      return result.json();
    })
    .then(json => {
      document.getElementById('all_favorites').style.display = '';
      document.getElementById('search_results').style.display = 'none';
      
      const favoriteCount = json.length

      for (let i = 0; i < favoriteCount; i++) {
        const parentSong = document.getElementById('all_favorites');
        const childSong = document.createElement('h3');
        const appendChildSong = parentSong.appendChild(childSong);
        appendChildSong.innerHTML = "Song: " + json[i].name;

        const parentArtist = document.getElementById('all_favorites');
        const childArtist = document.createElement('h4');
        const appendChildArtist = parentArtist.appendChild(childArtist);
        appendChildArtist.innerHTML = "Artist: " + json[i].artist_name;

        const parentRating = document.getElementById('all_favorites');
        const childRating = document.createElement('h6');
        const appendChildRating = parentRating.appendChild(childRating);
        appendChildRating.innerHTML = "Rating: " + json[i].rating;
      }
    })
    .catch(error => console.log(error));
};

function getArtist(event) {
    event.preventDefault();
    const artist = document.getElementById('search_field').value;

    fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?apikey=b24629931e9a581edb617d6b39e5563f&q_artist=${artist}&s_track_rating=desc`)
    .then(result => {
      return result.json();
    })
    .then(json => {
      document.getElementById('search_results').style.display = '';
      document.getElementById('all_favorites').style.display = 'none';

      const songCount = json.message.body.track_list.length

      for (let i = 0; i < songCount; i++) {
        const parentArtist = document.getElementById('search_results');
        const childArtist = document.createElement('h4');
        const appendChildArtist = parentArtist.appendChild(childArtist);
        appendChildArtist.innerHTML = "Artist: " + json.message.body.track_list[i].track.artist_name;

        const parentSong = document.getElementById('search_results');
        const childSong = document.createElement('h4');
        const appendChildSong = parentSong.appendChild(childSong);
        appendChildSong.innerHTML = "Song: " + json.message.body.track_list[i].track.track_name;

        const parentAlbum = document.getElementById('search_results');
        const childAlbum = document.createElement('h4');
        const appendChildAlbum = parentAlbum.appendChild(childAlbum);
        appendChildAlbum.innerHTML = "Album: " + json.message.body.track_list[i].track.album_name;
      }
    })
    .catch(error => console.log(error));
};

window.onload = getFavorites;
document.getElementById('search-btn').addEventListener('click', getArtist);
document.getElementById('favorites-btn').addEventListener('click', getFavorites);
