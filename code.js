const pantalla = document.querySelector(".Resultado");
const numero = document.querySelectorAll(".numero");
const operacion = document.querySelectorAll(".Operaciones")
const eliminarT = document.querySelectorAll(".eliminarTodo");
const eliminar = document.querySelectorAll(".Eliminar");
const igual = document.querySelector(".Igual");


numero.forEach(boton =>{
    boton.addEventListener("click",()=>{
        if (pantalla.textContent == 0){
            if (boton.textContent=="+"){
                pantalla.textContent = "";
                pantalla.textContent += boton.textContent;
            }
            else{
                pantalla.textContent = "";
                pantalla.textContent += boton.textContent;
            }
        } else {
              pantalla.textContent += boton.textContent;
        };
    });
});

operacion.forEach(boton =>{
    boton.addEventListener("click",()=>{
        pantalla.textContent += boton.textContent;
    });
});

eliminarT.forEach(boton=>{
    boton.addEventListener("click",()=>{
       
        pantalla.textContent = 0;
    });
});

eliminar.forEach(boton=>{
    boton.addEventListener("click",()=>{
         if (pantalla.textContent != 0 ) {
        pantalla.textContent = pantalla.textContent.slice(0,-1);
        } else {
            pantalla.textContent = 0;
        };
    });
});

igual.addEventListener("click",()=>{
    try{
        pantalla.textContent = eval(pantalla.textContent);
    } catch {
        pantalla.textContent = "Error";
    }
});