function updatePage(){
    var userName = document.getElementById("nameInput").value;
    var userMessage = document.getElementById("messageInput").value;
    var bgColor = document.getElementById("colorSelect").value;
    
    if(userName !== ""){
        document.getElementById("greeting").innerHTML = "Hello " + userName + "!";
    }
    
    if(userMessage !== ""){
        document.getElementById("message").innerHTML = userMessage;
    }
    
    document.body.style.backgroundColor = bgColor;
}

function addTodo(){
    var todoText = document.getElementById("todoInput").value;
    
    if(todoText !== ""){
        var list = document.getElementById("todoList");
        var newItem = document.createElement("li");
        newItem.innerHTML = todoText;
        list.appendChild(newItem);
        
        document.getElementById("todoInput").value = "";
    }
}