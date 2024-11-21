document.querySelector('#push').onclick=function(){
    const task=document.querySelector('#taskadder input');
    if(task.value.length===0){
        alert("Please Enter a Task");
    }else{
        document.querySelector('#taskremover').innerHTML+=`
            <div class="task">
                <span id="taskname">
                    ${task.value.trim()}
                </span>
                <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
        task.value="";
        const deleteButton = document.querySelector('.delete');
        deleteButton.forEach(button => {
            button.onclick=function(){
                this.parentNode.removeChild();
            };
        });
    }
};