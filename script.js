/*1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

//вопрос на количество просмотренных фильмов//
let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}
start();

//массив с фильмами в который потом записывается инфа//
const personalMovieDB = {
  count: numberOfFilms,
  movie: {
  },
  actors: {},
  genres: [],
  privat: (false)
};

//проверка на количество просмотренных фильмов//



function personalLevel () {
  if (personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {console.log('Вы классический зритель');
  } else if (personalMovieDB.count > 50) {console.log('Вы киноман');
  } else {console.log('не то ввели');}
}

personalLevel();


//создание вопросов и добавление в массив обьеденил в цикл//

for (i = 0; i < 2; i++){
  //задание вопросов//
  const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
        lastFilmRate = +prompt('На сколько оцените его?', '');
  //проверка вопроса//
  if (lastFilm != null && lastFilm != '' && lastFilmRate != null && lastFilmRate != '') {
    personalMovieDB.movie[lastFilm] = lastFilmRate;
    console.log('done');
  } 
  //возвращение на 1 вопрос назад//
  else {
    console.log('error');
    i--;
  }
}

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let genre = prompt(`Ваш любимый жанр под номером ${i}`);
    if (genre !== null || genre !== "" || typeof(genre) == String) {
      personalMovieDB.genres[i - 1] = genre;
    } else genre = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();

function showMyDB (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
}
//проверка массива//
showMyDB(personalMovieDB.privat);
