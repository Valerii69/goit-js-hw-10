// import Notiflix from 'notiflix';
// const URL_NAME = 'https://restcountries.com/v3.1/name/';
// const FIELDS = 'name,capital,population,flags,languages';

// function fetchCountries(name) {
//   return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages0`)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(
//         Notiflix.Notify.failure('Oops, there is no country with that name')
//       );
//     }
//     return response.json();
//   });
// }
// export { fetchCountries };

function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
export { fetchCountries };
