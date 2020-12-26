/* APLICACION DE GESTION DE TAREAS */
let funcionesTareas =  require('./funcionesTareas');
let accion = process.argv[2];


switch (accion) {
    case 'listar':
        funcionesTareas.todasLasTareas();
        break;
    case 'incompletas':
    case 'pendiente':
        funcionesTareas.tareasIncompletas();
        break;
    case 'terminadas':
    case 'completas':
        funcionesTareas.tareasTerminadas();
            break;
    case 'crear':
    case 'nueva':
        if (funcionesTareas.validaTitulo(process.argv[3]) == 0){
            console.log('Debe ingresar un titulo para la nueva tarea');
            break;
        } else {  
            funcionesTareas.crearTarea(process.argv[3]);
            break;
        };
    case 'leerPorEstado':
        funcionesTareas.leerPorEstado(process.argv[3]);
        break;
    case 'cambiar':
        if (funcionesTareas.validaIndice(process.argv[3]) == true){
            console.log('Debe ingresar el indice de la tarea a cambiar');
            break;
        } else {  
            funcionesTareas.cambiarEstadoTarea(process.argv[3]);
            break;
        };
    case 'todaspendiente':
        funcionesTareas.todaspendiente();
        break;
    case 'todascompletas':
        funcionesTareas.todascompleta();
        break;
    case 'cumplir':
        if (funcionesTareas.validaIndice(process.argv[3]) == true){
            console.log('Debe ingresar el indice de la tarea a cumplir');
            break;
        } else {  
            funcionesTareas.cumplirTarea(process.argv[3]);
            break;
        };
    default:
        console.log('Ingrese un comando, please!');
        console.log('Las opciones son:');
        console.log('listar: -> listado de tareas ');
        console.log('pendiente ó incompletas');
        console.log('terminadas ó completas');
        console.log('crear ó nueva');
        console.log('cambiar (estado al contrario)');
        console.log('todaspendiente (pone todas las tareas pendiente)')
        console.log('todascompletas (pone todas las tareas completas)')
        console.log('cumplir (pone 1 tarea completa ó cumplida)')
        break;
}
