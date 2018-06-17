$(document).ready(function()) {
    $("add-new-todo-button").click(function(){
        var newTodoBlock = $(this).closest("#new-todo-block")
        var newTodo = newTodoBlock.find("new-todo-description")
        var minuteEstimate = newTodoBlock.find("new-todo-minute-estimate")
    })
})