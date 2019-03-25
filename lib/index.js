import './styles.css';

// const path = require('path')
// const Figaro = require('figaro-js')
//
// console.log(process.env.MUSIXMATCH_API_KEY)
//
// Figaro.load({
//  path: path.resolve(__dirname, './config/application.yml')
// })
//
// console.log(process.env.MUSIXMATCH_API_KEY)

const FAVORITE_NAME_IDS = ['favorite_name_one', 'favorite_name_two', 'favorite_name_three', 'favorite_name_four', 'favorite_name_five']
const FAVORITE_ARTIST_IDS = ['favorite_artist_one', 'favorite_artist_two', 'favorite_artist_three', 'favorite_artist_four', 'favorite_artist_five']
const FAVORITE_GENRE_IDS = ['favorite_genre_one', 'favorite_genre_two', 'favorite_genre_three', 'favorite_genre_four', 'favorite_genre_five']
const FAVORITE_RATING_IDS = ['favorite_rating_one', 'favorite_rating_two', 'favorite_rating_three', 'favorite_rating_four', 'favorite_rating_five']

fetch('https://turing-play-music.herokuapp.com/api/v1/favorites')
  .then(result => {
    return result.json();
  })
  .then(json => {
    const favoriteCount = json.length
    for (let i = 0; i < favoriteCount; i++) {
      document.getElementById(FAVORITE_NAME_IDS[i]).innerHTML = json[i].name;
      document.getElementById(FAVORITE_ARTIST_IDS[i]).innerHTML = json[i].artist_name;
      document.getElementById(FAVORITE_GENRE_IDS[i]).innerHTML = json[i].genre;
      document.getElementById(FAVORITE_RATING_IDS[i]).innerHTML = json[i].rating;
    }
  })
  .catch(error => console.log(error));
