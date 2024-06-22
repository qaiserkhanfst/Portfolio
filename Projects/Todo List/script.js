const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')

function addList() {
    if (inputBox.value=="") {
        alert("Please write something")
        
    } else {
        let li = document.createElement('li')
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = `<i class="fa-solid fa-trash"></i>`
        li.appendChild(span)
        saveData()

        
    } inputBox.value=""
    saveData()
    
}

listContainer.addEventListener('click',function (e) {
    if(e.target.tagName =='LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName =='I')  {

        e.target.closest('li').remove()
        saveData()

        }

    
},false)

function saveData() {
    localStorage.setItem('data',listContainer.innerHTML)
    
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data')
    
}

showTask()
