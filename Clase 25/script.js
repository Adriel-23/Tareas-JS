// Asincronia


// Usamos async cuando queremos que la funcion maneje codigo asincronico
// Por ejemplo: fetch es codigo asincronico, entonces la funcion que llame fetch debe ser asincronica
const posteos = document.getElementById('posteos');
const loading = document.querySelector('.loading');
let postsLoading = false;
let posts_response = [];

function setLoading(new_loading_state){
    postsLoading = new_loading_state;
    mostrarCargando();
    return;
}
function setPosts(new_posts){
    posts_response = new_posts;
    renderizarPosteos(posts_response);
    return;
}
async function consultarAlServidor(){
    setLoading(true);
    //Hace consultas HTTP
    let response_http = await fetch(
        // URL a consultar
        'https://jsonplaceholder.typicode.com/posts',
        
        //Objeto consulta
        {
            method: 'GET' //Obtener la lista de posteos
        }
        
    )
    //Leemos y extraemos el JSON de la respuesta del servidor
    let response = await response_http.json();
    setPosts(response);
    setLoading(false);

}
function mostrarCargando(){
    if(postsLoading){
        loading.classList.remove('hidden');
    }
    else{
        loading.classList.add('hidden');
    }
}
function renderizarPosteos(datosPosteos){
    let htmlPosteos = '';
    for(let post of datosPosteos){
        htmlPosteos += `
        <div class="posteos">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `;
    }
    posteos.innerHTML = htmlPosteos;
}
consultarAlServidor();



/* 
Por cada posteo renderizar
<div>
    <h2>${post.title}</h2>
    <p>${post.body}</p>
</div>

Vamos a tener una variable que guardará el estado de carga, es decir si está cargando o no
Si la variable es verdadera se deberá renderizar por pantalla un 'cargando'
Si no, se deberá renderizar la lista de posteos
*/






/* 
Fetch retirna una promise
Promise: Es un objeto que usa JS para manejar una asincronia
Es un objeto con un estado interno que marca el momento de la promesa:
    - Pending: La promesa aun no fue resuelta
    - Resolved: La promesa fue resuelta
    - Reject: La promesa NO fue resuelta, o sea se resolvió con problemas

Si utilizo await la promesa retornara el resolved apenas sea resuelta
*/