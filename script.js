const inputList = document.getElementById('input-list');
const addList = document.getElementById('addlist');
const taskList = document.getElementById('todoList');


let tasks = [];

// คลิกเพิ่มรายการ
addList.addEventListener('click', addTask());
   
// ส่วนเพิ่มรายการ กด Enter ได้
function addTask() {
    const text = inputList.value;
    if(text === "") {
        alert("โปรดกรอกรายการ");
        return;
    }
    tasks.push(text);
    inputList.value = "";
    renderTasks();
}

// ทำให้กด Enter เพิ่มได้
inputList.addEventListener('keydown', function(event) {
    if(event.key === "Enter") {
        addTask();
    }
});

// ฟังชันก์แสดงรายการ
function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        // ส่วนแสดงแต่ละรายการ
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);

        // ปุ่มแก้ไขรายการ
        const btnEdit = document.createElement('button');
        btnEdit.textContent = "แก้ไข";
        li.appendChild(btnEdit);

        // ปุ่มลบรายการ
        const btnDelete = document.createElement('button');
        btnDelete.textContent = "ลบ";
        li.appendChild(btnDelete);

        // ส่วนแก้ไขรายการ
        btnEdit.addEventListener('click', function() {
            const newText = prompt("แก้ไขรายการ", task);

            if(newText !== null && newText !== "") {
                tasks[index] = newText;
                renderTasks();
            }     
        });
        // ส่วนลบรายการ
        btnDelete.addEventListener('click', function() {
            tasks.splice(index, 1);
            renderTasks();
        });

    });
}