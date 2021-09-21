const app = new Vue({
    el: "#root",

    data: {
        todos: [
            "Fare i compiti",
            "Studiare Javascript",
            "Fare spesa"
        ],
        newTodo: ""
    },

    methods: {
        addTodo: function() {
            if (this.newTodo != "") {
                this.todos.push(this.newTodo);
                this.newTodo = "";
            }
        },
        removeTodo: function(todoIndex){
            this.todos.splice(todoIndex, 1);
        }
    }
});