var app = new Vue({
    el: '#app', // el elemento sobre el que actúa la biblioteca, es necesario para lograr que vue funcione
    data: { // es un objeto con propiedades que necesita tu aplicación o tu componente. se pueden mostrar directamente en pantalla usando la notación de llaves {{ }}
        alumnos: [
            {
                nombre: 'Pablo',
                edad: 13
            },
            {
                nombre: 'Juana',
                edad: 43
            },
            {
                nombre: 'Yenni',
                edad: 25
            }
        ]
    }
});