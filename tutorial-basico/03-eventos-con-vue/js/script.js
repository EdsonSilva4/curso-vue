var app = new Vue({
    el: '#app', // el elemento sobre el que actúa la biblioteca, es necesario para lograr que vue funcione
    data: { // es un objeto con propiedades que necesita tu aplicación o tu componente. se pueden mostrar directamente en pantalla usando la notación de llaves {{ }}
        mensaje: '',
        cantidadBotonApretado: 0
    },
    methods: {
        botonApretado: function() {
            this.cantidadBotonApretado++;
            this.mensaje = 'Apretaste el botón ' + this.cantidadBotonApretado + ' veces';
        },
        pasoPorArriba: function() {
            console.log('Paso por arriba');
        }
    }
});