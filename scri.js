var popupover=document.querySelector(".pop-overlay")
var popupbox=document.querySelector(".popup-box")

var addpopbut=document.getElementById("addpop")

addpopbut.addEventListener("click",function(){
    popupover.style.display="block"
    popupbox.style.display="block"
})

var cancelpop=document.getElementById("cance-p")
cancelpop.addEventListener("click",function(){
     popupover.style.display="none"
     popupbox.style.display="none"
    
})

 var cont=document.querySelector(".con")
 var addbook=document.getElementById("Add-b")
 var bookT=document.getElementById("bookti")
 var bookau=document.getElementById("bookau")
 var bookdes=document.getElementById("bookdes")

 addbook.addEventListener("click",function(){
    var div =document.createElement("div")
    div.setAttribute("class","book-con")
    div.innerHTML=`<h2>${bookT.value}</h2>
    <h5> ${bookau.value}</h5> <p>${bookdes.value}</p>
     <button onclick=dele()>DELETE</button>`
    cont.append(div)
     popupover.style.display="none"
     popupbox.style.display="none"
    
 })

 function dele(){
    event.target.parentElement.remove()
 }