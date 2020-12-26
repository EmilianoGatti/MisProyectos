const { Console } = require('console');
const fs = require('fs');

let funcionesTareas = {
    archivo: 'tareas.json',
    leerJSON: function() {
        let stringTareas = fs.readFileSync(this.archivo ,'utf-8');
        return JSON.parse(stringTareas);
    },
    guardarJSON: function(tareas) {
        let stringTareas = JSON.stringify(tareas, null, 4);
        fs.writeFileSync(this.archivo, stringTareas, 'utf-8');
    },
    validaTitulo: function(titulo) {
        return (titulo != '' ? true : false) ;
    },
    validaIndice: function(titulo) {
        return isNaN(titulo);
    },
    todasLasTareas: function(){
        let tareas = this.leerJSON();
        console.log();    
        console.log('Listado de tareas');
        console.log('----------------');
        tareas.forEach(muestro);
        function muestro(item, index) {
            console.log(index+1 +'. ' + item.titulo + ' - ' + item.estado);
        };
    },
    leerPorEstado: function(estado){
        let tareas = this.leerJSON();
        console.log();    
        console.log('Listado de tareas en estado: ' + estado );
        console.log('----------------');
        tareas.forEach(muestro);
        function muestro(item, index) {
            if (item.estado == estado){
                console.log(index+1 +'. ' + item.titulo + ' - ' + item.estado);
            };
        };
    },
    tareasIncompletas: function() {
        let tareas = this.leerJSON();
        console.log();
        console.log('Mostrado tareas incompletas')
        console.log('---------------------------');

        for (let i=0; i < tareas.length ; i++){
            if(tareas[i].estado != 'completado' ){
                console.log(i+1 +'. ' + tareas[i].titulo + ' -> ' + tareas[i].estado);
            }
        }
    },
    tareasTerminadas: function() {
        let tareas = this.leerJSON();
        console.log();
        console.log('Mostrado tareas cantidad de tareas terminadas')
        console.log('---------------------------');
        
        for (let i=0; i < tareas.length ; i++){
            if(tareas[i].estado == 'completado' ){
                console.log(i+1 +'. ' + tareas[i].titulo + ' -> ' + tareas[i].estado);
            }
        }
    },
    crearTarea: function(titulo){
        let tareas = this.leerJSON();
        console.log();
        console.log('Guardando la nueva tarea.')
        console.log('---------------------------');
        function tarea(titulo){
            this.titulo = titulo;
            this.estado = 'pendiente';
        };
        let nuevaTarea = new tarea(titulo);
        tareas.push(nuevaTarea);
        let stringTareas = JSON.stringify(tareas, null, 4);
        fs.writeFileSync(this.archivo, stringTareas, 'utf-8');
        funcionesTareas.todasLasTareas();
    },
    cumplirTarea: function(id){
        let tareas = this.leerJSON();
        console.log();
        console.log('Cumpliendo tarea.');
        console.log('---------------------------');
        tareas[id-1].estado = 'completado';
        funcionesTareas.guardarJSON(tareas);
        funcionesTareas.leerPorEstado('completado');
    },
    cambiarEstadoTarea: function(id){
        let tareas = this.leerJSON();
        console.log();
        console.log('Cambiando Estado tarea.');
        console.log('---------------------------');
        if( tareas[id-1].estado == 'completado' ){
            tareas[id-1].estado = 'pendiente';
            console.log(id+1 +'. ' + tareas[id-1].titulo + ' -> ' + tareas[id-1].estado);
        } else {
            tareas[id-1].estado = 'completado';
            console.log(id+1 +'. ' + tareas[id-1].titulo + ' -> ' + tareas[id-1].estado);
        };
        funcionesTareas.guardarJSON(tareas),
        funcionesTareas.todasLasTareas();
    },
    todaspendiente: function(){
        let tareas = this.leerJSON();
        console.log();
        console.log('Pasando a pendiente todas las Tareas.');
        console.log('---------------------------');
        for (let i=0; i < tareas.length ; i++){
            tareas[i].estado = 'pendiente';
        }
        funcionesTareas.guardarJSON(tareas);
        funcionesTareas.leerPorEstado('pendiente');
    },
    todascompleta: function(){
        let tareas = this.leerJSON();
        console.log();
        console.log('Pasando a pendiente todas las Tareas.');
        console.log('---------------------------');
        for (let i=0; i < tareas.length ; i++){
            tareas[i].estado = 'completo';
        }
        funcionesTareas.guardarJSON(tareas);
        funcionesTareas.leerPorEstado('completado');
    }
};

module.exports = funcionesTareas;