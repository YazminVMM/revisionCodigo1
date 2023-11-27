
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//Falta el selector para obtener el elemento por su clase #
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');
// agregar async antes de la definición de la función displayUser ya que es una promesa, ya que estás usando await dentro de ella
async function displayUser(username) {
  $n.textContent = "cargando...";
  //llamar a la función displayUser dentro de un bloque try y pasarle un nombre de usuario válido. Si ocurre algún error, se llamará a la función handleError
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    //asignar el resultado de la respuesta a una variable para poder acceder a los datos
    const data = await response.json();
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  //llamar adecuadamente n con su símbolo y agregar punto y coma
  $n.textContent = `Algo salió mal: ${err}`;
}
// esto ya no es necesario .catch(handleError), ya pusimos el catch en la funcion displayUser
displayUser('stolinski');