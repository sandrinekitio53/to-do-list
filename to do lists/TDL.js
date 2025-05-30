document.querySelector('#add').onclick = function(){
    if (document.querySelector('#newtask input') . 
    value.length == 0){
        alert("Please enter a task");
    }
    // document selects the elt with the id newtask
    // .value this.check the text of the input Field by the User
    // .lenght for the num of caharcters inputed 
    // ==0 if the charcaters inputed are equal to 0
    //  so this line checks if the input field is empty , the alert will be dispalyed

    //  this is to add anew task
    else{
        document.querySelector("#tasks").innerHTML 
        // use espeicially for multiple string `` which is found b4 1 on the keyboard
        += `
            <div class="task">
                <span id="taskname">
                   ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                <i class="bi bi-trash"></i>
                </button>
            </div>
        `;
      
    }
    //  to delete a task
    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }

    // crossing off a completed task
    var tasks = document.querySelectorAll(".task");
    for(var i=0; i<tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle("completed");
        }

    }
    document.querySelector("#newtask input").value = "";

};