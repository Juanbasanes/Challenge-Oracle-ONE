function encriptar() {
  //Obtener el texto de entrada
  let entrada = document.getElementById("entrada").value;
  
  //Limpiar variable resultado
  let resultado = "";

  // Validar si se ingresó un mensaje
  if (entrada === "") {
    alert("ATENCION: No se ha encontrado ningun texto a procesar, porfavor ingrese un mensaje en minisculas y sin caracteres especiales!");
    return;
  }

  //Logica de entrada, solo se permiten letras minúsculas sin acentos o caracteres especiales
  if (/[^a-z\s!?]+/.test(entrada)) {
    alert("ATENCION: Solo se permiten letras minúsculas sin acentos y sin caracteres especiales!");
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
}

function desencriptar() {
  //Obtener el texto de entrada
  let entrada = document.getElementById("entrada").value;
  
  //Limpiar variable resultado
  let resultado = "";

  // Validar si se ingresó un mensaje
  if (entrada === "") {
    alert("ATENCION: No se ha encontrado ningun texto a procesar, porfavor ingrese un mensaje en minisculas y sin caracteres especiales!");
    return;
  }

  //Logica de entrada, solo se permiten letras minúsculas sin acentos o caracteres especiales
  if (/[^a-z\s!?]+/.test(entrada)) {
    alert("ATENCION: Solo se permiten letras minúsculas sin acentos y sin caracteres especiales!");
    return;
  }

  //Logica de desencriptado, patron de remplazo inverso
  resultado = entrada
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  //Salida del desencriptado
  document.getElementById("resultado").value = resultado;
}


function copiarTexto() {
  let resultado = document.getElementById("resultado");

   // Validar si hay contenido en resultado
   if (resultado.value === "") {
    alert("ATENCION: No hay contenido para copiar");
    return;
  }
  
  // Seleccionar el texto en el area de resultado
  resultado.select();
  
  // Copiar el texto seleccionado
  document.execCommand("copy");
  
  // Desmarcar la selección de texto
  window.getSelection().removeAllRanges();

  //Mensaje de alerta de copiado exitoso
  alert("El resultado ha sido copiado exitosamente");

}