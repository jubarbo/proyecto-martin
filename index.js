$(document).ready(function(){
  
    //declaro funcion para cambiar elementos
    const changeElement = (color, mensaje, element) => {  
            $(element[0]).css("background-color",color)
            $(element[1]).html(mensaje)        
        }        
    
    //declaro funcion para cambiar elementos
    const toggleElement = (colores, mensajes, elements) => {  

        if (!this.active) {
            changeElement(colores[0], mensajes[0], elements)        
        }
        
        else {
            console.log("entro en el else")
            changeElement(colores[1], mensajes[1], elements)           
        }

        this.active = !this.active; 
        
    }
    
    $("#1").click(function(event){ 
          
        const colores = ["red", "black"]
        const mensajes = ["hola", "chau"]
        const elementos = ["#2", "#3"]

        toggleElement(colores, mensajes, elementos)
    });


    $("#2").click(function(event){  

        toggleElement(
            ["yellow", "black"], 
            ["hola 2", "chau 2"], 
            ["#3", "#4"])
    });
    
    
});