const addbtn=document.getElementById("additem")
const inp=document.querySelector("input")
const list=document.getElementById("mylist")

addbtn.onclick=()=>{
    const todo=inp.value
    
    const listitem=document.createElement("li")
    const activity=document.createElement("span")
    const del=document.createElement("button")
    listitem.appendChild(activity)
    listitem.appendChild(del)
    list.appendChild(listitem)
    del.textContent="delete"
    del.className="del_item"
    activity.textContent=todo
    
    del.addEventListener('click',()=>{
        // list.removeChild(listItem);
        listitem.remove()
    }
)
inp.value=""
inp.focus()
    
}

