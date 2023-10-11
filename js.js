const compraButtonUno= document.getElementById("compraUno")
const titoloUno=document.getElementById("uno")
let arrayLista=[]



const buyUno = function(){

fetch('https://striveschool-api.herokuapp.com/books',{})
.then((res)=> {

    const valoreUno= titoloUno.innerText;

    if(res.ok){
    
    localStorage.setItem("salvataggio", valoreUno)

    alert("aggiunto al carrello")
    
    localStorage.getItem("salvataggio",valoreUno)
    arrayLista.push(valoreUno)
    console.log(arrayLista)

} else { throw new Error("riprova")}
})
.catch((err)=>{console.log(err)})

}

compraButtonUno.addEventListener("click", buyUno)


// due

const compraButtonDue= document.getElementById("compraDue")
const titoloDue=document.getElementById("due")


const buyDue = function(){

fetch('https://striveschool-api.herokuapp.com/books',{})
.then((res)=> {

    const valoreDue= titoloDue.innerText;

    if(res.ok){
    
    localStorage.setItem("salvataggio", valoreDue)

    alert("aggiunto al carrello")
    localStorage.getItem("salvataggio",valoreDue)
    arrayLista.push(valoreDue)
    console.log(arrayLista)

} else { throw new Error("riprova")}
})
.catch((err)=>{console.log(err)})

}

compraButtonDue.addEventListener("click", buyDue)

// tre


const compraButtonTre= document.getElementById("compraTre")
const titoloTre=document.getElementById("tre")


const buyTre = function(){

fetch('https://striveschool-api.herokuapp.com/books',{})
.then((res)=> {

    const valoreTre= titoloTre.innerText;

    if(res.ok){
    
    localStorage.setItem("salvataggio", valoreTre)

    alert("aggiunto al carrello")
    localStorage.getItem("salvataggio",valoreTre)
    arrayLista.push(valoreTre)
    console.log(arrayLista)

} else { throw new Error("riprova")}
})
.catch((err)=>{console.log(err)})

}

compraButtonTre.addEventListener("click", buyTre)

// quattro
 
const compraButtonQu= document.getElementById("compraQu")
const titoloQu=document.getElementById("qu")


const buyQu = function(){

fetch('https://striveschool-api.herokuapp.com/books',{})
.then((res)=> {

    const valoreQu= titoloQu.innerText;

    if(res.ok){
    
    localStorage.setItem("salvataggio", valoreQu)

    alert("aggiunto al carrello")
    localStorage.getItem("salvataggio",valoreQu)
    arrayLista.push(valoreQu)
    console.log(arrayLista)

} else { throw new Error("riprova")}
})
.catch((err)=>{console.log(err)})

}

compraButtonQu.addEventListener("click", buyQu)

// cinque

const compraButtonCi= document.getElementById("compraCi")
const titoloCi=document.getElementById("ci")


const buyCi = function(){

fetch('https://striveschool-api.herokuapp.com/books',{})
.then((res)=> {

    const valoreCi= titoloCi.innerText;

    if(res.ok){
    
    localStorage.setItem("salvataggio", valoreCi)

    alert("aggiunto al carrello")
    localStorage.getItem("salvataggio",valoreCi)
    arrayLista.push(valoreCi)
    console.log(arrayLista)

} else { throw new Error("riprova")}
})
.catch((err)=>{console.log(err)})

}

compraButtonCi.addEventListener("click", buyCi)

// sei 

const compraButtonSei= document.getElementById("compraSei")
const titoloSei=document.getElementById("sei")


const buySei = function(){

fetch('https://striveschool-api.herokuapp.com/books',{})
.then((res)=> {

    const valoreSei= titoloSei.innerText;

    if(res.ok){
    
    localStorage.setItem("salvataggio", valoreSei)

    alert("aggiunto al carrello")
    localStorage.getItem("salvataggio",valoreSei)
    arrayLista.push(valoreSei)
    console.log(arrayLista)

} else { throw new Error("riprova")}
})
.catch((err)=>{console.log(err)})

}

compraButtonSei.addEventListener("click", buySei)



//  const scartaButton=document.gl(".scartamento")
// // const carte= document.querySelectorAll(".card .card-body")

//  const eliminare = function(){ this.}

// scartaButton.addEventListener("click", eliminare)
