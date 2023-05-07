function encriptar() {
    // traer el texto de entrada ingresado
    const texto = document.getElementById("entrada").value;
  
    // Chequear que el texto no tenga mayusculas ni acentos
    const expReg = /^[a-zñ]+$/;
    if (!expReg.test(texto)) {
      alert("El texto debe estar compuesto solo por letras minúsculas y sin acentos");
      return;
    }

  
