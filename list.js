let person=[]
if(localStorage.getItem("person")){
    person=JSON.parse(localStorage.getItem("person"))
}
const tbody=document.getElementById("tbody")
function namech(event){
    tbody.innerHTML=""
    person.push({
        id:12,
        name:event.target.value
    })
    person.forEach((person,index)=>{
        tbody.innerHTML+=`<tr>
        <th>${index+1}</th>
        <th>${person.name}<th>
        <th class="trash" onClick={clicktrash(${1+index})}>🗑</th>
        </tr>`
    })

}
function clicktrash(basil) {
     tbody.innerHTML=""
     person.splice(basil-1,1)
    person.forEach((person,index)=>{
        tbody.innerHTML+=`<tr>
        <th>${index+1}</th>
        <th>${person.name}<th>
        <th class="trash" onClick={clicktrash(${1+index})}>🗑</th>
        </tr>`
    })
    localStorage.setItem("person",JSON.stringify(person))
   console.log(person)
}
person.forEach((person,index)=>{
        tbody.innerHTML+=`<tr>
        <th>${index+1}</th>
        <th>${person.name}<th>
        <th class="trash" onClick={clicktrash(${1+index})}>🗑</th>
        </tr>`
    })
