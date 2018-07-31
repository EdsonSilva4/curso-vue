var app = new Vue({
    el: '#app',
    data: {
        nuevaTarea: {
            titulo: '',
            descripcion: ''
        },
        tareasCompletadas: [],
        tareasNoCompletadas: []
    },
    methods: {
        agregarTarea: function() {
            this.nuevaTarea.id = new Date().getTime();
            this.tareasNoCompletadas.unshift(this.nuevaTarea);
            this.nuevaTarea = {
                titulo: '',
                description: ''
            };
        },
        completarTarea: function(tarea) {
            this.tareasCompletadas.unshift(tarea);
            this.tareasNoCompletadas = this.tareasNoCompletadas.filter(function(item) {
                return item.id !== tarea.id;
            });
        }
    }
})