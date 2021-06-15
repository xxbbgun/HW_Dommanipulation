var inputName = document.getElementById('name')
var inputDetail = document.getElementById('detail')
var inputUrl= document.getElementById('url')
var outputTableBody = document.getElementById('outputTableBody')
var submitData = document.getElementById('submitData')

function addDataToTable(index){
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    let img = document.createElement('img')
    cell.setAttribute('score',row)
    cell.innerHTML = index
    row.appendChild(cell)

    cell = document.createElement('td')
    cell.innerHTML = inputName.value
    row.appendChild(cell)
    
    cell = document.createElement('td')
    cell.innerHTML = inputDetail.value
    row.appendChild(cell)

    cell = document.createElement('td')
    img.setAttribute("src",inputUrl.value)
    img.classList.add("size")
    cell.appendChild(img)
    row.appendChild(cell)
    outputTableBody.appendChild(row)
}
var index = 3
submitData.addEventListener('click',(event)=>{
        
    addDataToTable(index++)
    
})