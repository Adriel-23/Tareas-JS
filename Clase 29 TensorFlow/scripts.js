const file_imput = document.getElementById('image-imput')
const image_preview_container = document.getElementById('image-preview-container')
const image_preview = document.getElementById('image-preview')
const execute_btn = document.getElementById('execute-model')
const MIN_SCORE_REQUIRED = 0.6


/* 
    Desafio general:
    Lograr que un modelo ya entrenado de TensorFlow.js (CocoSSD) detecte si la imagen contiene o no una persona

    - Cargar la imagen
    - Cargar el modelo
    - Ejecutar el modelo
    - Manejar la respuesta del modelo

    El modelo por cada deteccion de objeto da un score del 0 al 1
*/

// Estado inicial de recursos utilizados
let current_url_image_selected = null
execute_btn.disabled = true
let model = null

// Logica para cargar el modelo CocoSSD
async function loadModel() {
    try{
        model = await cocoSsd.load()
    }
    catch(error) {
        console.error('Error al cargar el modelo', error)
    }
}
loadModel()

/* 
    Capturar una imagen
*/
// El evento change se desencadena cuando el valor de un input cambia
// Cuando el usuario agrege una imagen el valor del input cambiara

file_imput.addEventListener(
    'change',
    function (event){
        //Buscamos el primer archivo adjunto del input
        const file = event.target.files[0]
        if(!file){
            console.error('Ningun archivo fue seleccionado')
            return // Cortar la funcion
        }
        // SI hay una imagen seleccionada, debemos borrarla
        if(current_url_image_selected){
            // Ordeno a Blob API revocar la URL (Borrarla de la memoria)
            URL.revokeObjectURL(current_url_image_selected)
            //Reinicio mi variable
            current_url_image_selected = null
        }
        // Crear una Blob URL
        current_url_image_selected = URL.createObjectURL(file)
        
        // Cambio el atributo source de mi imagen previa
        image_preview.src = current_url_image_selected

        // Solo se debe clasificar al cargar la imagen
        execute_btn.disabled = false
    }
)

// Funcion encargada  de hacer la clasificacion
async function classifyImage (){

        // Si el modelo no se carga, abortar ejecución
        if(!model){
            console.error('El modelo no se cargó')
            return
        }
        // Si no hay imagen, abortar ejecución
        if(!current_url_image_selected){
            console.error('La imagen no se cargó correctamente')
            return
        }
        try{
            // Guardamos la lista de personas detectadas por el modelo
            // 20 es el numero maximo de objetos a detectar
            const detections = await model.detect(image_preview, 20)
            const persons = [ ]
            for(const detection of detections){
                if(detection.class === 'person' && detection.score >= MIN_SCORE_REQUIRED){
                    persons.push(detection)
                }
            }
            console.log(detections)
        }
        catch(error){
            console.error('Error al usar el modelo', detections)
        }
    }
    execute_btn.addEventListener(
        'click',
        classifyImage
    )