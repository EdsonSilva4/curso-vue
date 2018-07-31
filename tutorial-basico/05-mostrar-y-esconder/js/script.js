var app = new Vue({
    el: '#app', // el elemento sobre el que actúa la biblioteca, es necesario para lograr que vue funcione
    data: { // es un objeto con propiedades que necesita tu aplicación o tu componente. se pueden mostrar directamente en pantalla usando la notación de llaves {{ }}
        dulceDeLeche: true,
        secretoRevelado: false
    },
    methods: {
        mostrarSecreto: function() {
            this.secretoRevelado = true;
        }
    }
});