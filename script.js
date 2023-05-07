function encriptar() {
    // traer el texto de entrada ingresado
    const texto = document.getElementById("entrada").value;
  
    // Chequear que el texto no tenga mayusculas ni acentos
    const expReg = /^[a-zñ]+$/;
    if (!expReg.test(texto)) {
      alert("El texto debe estar compuesto solo por letras minúsculas y sin acentos");
      return;
    }
  
    // Realizar la encriptación del texto
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
      let charCode = texto.charCodeAt(i);
      // La letra 'a' se convierte en la letra 'z'
      if (charCode === 97) {
        resultado += String.fromCharCode(122);
      } else {
        // Las demás letras se convierten en la letra anterior
        resultado += String.fromCharCode(charCode - 1);
      }
    }
  
    // Mostrar el resultado de la encriptación en la pantalla
    document.getElementById("resultado").value = resultado;
  }
  