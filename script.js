const output = document.getElementById("output");
const spinner = document.getElementById("spinner");
const url = "https://starwars.egghead.training/";

async function starWars(endpoint) {
  const json = await fetch(url + endpoint);
  //if (response.ok) {
  const data = await json.json();

  //}
  //console.log(data)
  //console.log(`There are ${data.length} planets in Starwars history`)

  //data.forEach(element => {
  // console.log(`${element.episode_id}.filmin adi ${element.title} producer ${element.producer}`)

  // });
  return data;
}

async function starWarsCount(endpoint) {
  starWars("films");
  console.log(await starWars("films"));
  console.log(await starWars("planets"));
  console.log(await starWars("starships"));

  const films = await starWars("films");
  const planets = await starWars("planets");
  const starships = await starWars("starships");

  output.innerHTML=` ${films.length} film, ${planets.length} gezegen ve ${starships.length} yildiz gemisinden oluşur`
}
starWarsCount();
