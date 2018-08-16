var app = new Vue({
    el: '#app', // el elemento sobre el que actúa la biblioteca, es necesario para lograr que vue funcione
    data: { // es un objeto con propiedades que necesita tu aplicación o tu componente. se pueden mostrar directamente en pantalla usando la notación de llaves {{ }}
        textoEjemplo: '',
        alumno: {
            nombre: 'Stefania',
            edad: 30,
            esEstudiante: true
        },
        vehiculo: {
            marca: '',
            modelo: '',
            matricula: ''
        }, 

    },
    methods: {
        agregarVehiculo: function() {
            alert('Tu vehiculo es ' + this.vehiculo.marca + ' ' + this.vehiculo.modelo + ', matricula ' + this.vehiculo.matricula);
            // con esta técnica limpio el formulario, porque pongo en vehículo un objeto con todos sus atributos en blanco.
            this.vehiculo = {
                marca: '',
                modelo: '',
                matricula: ''
            }
        }


    }
});
