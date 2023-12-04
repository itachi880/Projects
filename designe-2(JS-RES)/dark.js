var html=document.querySelector("a.dark")
function dark(){
    if(html.innerHTML=="dark_mode"){
        document.querySelector("html").classList.remove("light")
        document.querySelector("html").classList.toggle("dark")
        html.innerHTML="light_mode"
    }
    else if(html.innerHTML=="light_mode"){
        document.querySelector("html").classList.remove("dark")

        document.querySelector("html").classList.toggle("light")
        html.innerHTML="dark_mode"
    }

}
function list(){
    let ulClass=document.querySelector("ul").classList
    if(ulClass!="list"){
        document.querySelector("ul").classList.toggle("list")
        document.querySelector("ul").classList.remove("normal")

    }
    else{
        
        document.querySelector("ul").classList.remove("list")
        document.querySelector("ul").classList.toggle("normal")
    }


}