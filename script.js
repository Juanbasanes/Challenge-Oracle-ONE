function encriptar() {

    //Obtener el texto de entrada
    let entrada = document.getElementById("entrada").value;
    //Limpiar variable resultado
    let resultado = "";

    // Validar si se ingresó un mensaje
    if (entrada === "") {
        document.getElementById("no-mensaje").style.display = "block";
        document.getElementById("no-mensaje").textContent = "ATENCION: No se ha encontrado ningun texto a procesar, porfavor ingrese un mensaje en minisculas y sin caracteres especiales!";
        document.getElementById("resultado").value = "";
        return;
    }
  
    //Logica de entrada, solo se permiten letras minúsculas sin acentos o caracteres especiales
    if (/[^a-z]/.test(entrada)) {
      document.getElementById("no-mensaje").style.display = "block";
      document.getElementById("no-mensaje").textContent =
        "ATENCION: Solo se permiten letras minúsculas sin acentos y sin caracteres especiales!";
      document.getElementById("resultado").value = "";
      return;
    }
    
    
    //Logica de encriptado, patron de remplazo
    resultado = entrada
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    //Salida del encriptado
    document.getElementById("resultado").value = resultado;
    document.getElementById("no-mensaje").style.display = "none";

}

function desencriptar() {

    //Obtener el texto de entrada
    let entrada = document.getElementById("entrada").value;
    //Limpiar variable resultado
    let resultado = "";

    // Validar si se ingresó un mensaje
    if (entrada === "") {
        document.getElementById("no-mensaje").style.display = "block";
        document.getElementById("no-mensaje").textContent = "ATENCION: No se ha encontrado ningun texto a procesar, porfavor ingrese un mensaje en minisculas y sin caracteres especiales!";
        document.getElementById("resultado").value = "";
        return;
    }
  
    //Logica de entrada, solo se permiten letras minúsculas sin acentos o caracteres especiales
    if (/[^a-z]/.test(entrada)) {
      document.getElementById("no-mensaje").style.display = "block";
      document.getElementById("no-mensaje").textContent =
        "ATENCION: Solo se permiten letras minúsculas sin acentos y sin caracteres especiales!";
      document.getElementById("resultado").value = "";
      return;
    }
    
    
    //Logica de encriptado, patron de remplazo
    resultado = entrada
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    //Salida del encriptado
    document.getElementById("resultado").value = resultado;
    document.getElementById("no-mensaje").style.display = "none";

}