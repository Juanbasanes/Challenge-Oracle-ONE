function encriptar() {

    //Obtener el texto de entrada
    let entrada = document.getElementById("entrada").value;
    //Limpiar variable resultado
    let resultado = "";
  
    //Logica de entrada, solo se permiten letras minúsculas sin acentos o caracteres especiales
    if (/[^a-z]/.test(entrada)) {
      document.getElementById("no-mensaje").style.display = "block";
      document.getElementById("no-mensaje").textContent =
        "Solo se permiten letras minúsculas sin acentos y sin caracteres especiales";
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