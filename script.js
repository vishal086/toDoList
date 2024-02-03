const inputBox = document.getElementById('input-text')
const listContainer = document.getElementById('list-container')
const alrt = document.getElementById('alrt')


function addTask()
{
    if(inputBox.value === '')
    {
        (function vishal()
        {
            setTimeout(() => {
                alrt.innerText = 'Write something'
            }, 50);
        })()
    }
    else
    {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
        inputBox.value = "";
        alrt.innerText = "";
        saveData();
    }
}


listContainer.addEventListener("click",function(e){
    if(e.target.tagName === 'SPAN')
    {
        e.target.parentElement.remove()
        saveData();
    }
},false)


function saveData()
{
    localStorage.setItem('data',listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();