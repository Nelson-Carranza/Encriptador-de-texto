const textArea = document.querySelector(".textarea");

const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function encriptar(encriptado) {
  let cambioVocales = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  encriptado = encriptado.toLowerCase();
  for (let i = 0; i < cambioVocales.length; i++) {
    if (encriptado.includes(cambioVocales[i][0])) {
      encriptado = encriptado.replaceAll(
        cambioVocales[i][0],
        cambioVocales[i][1]
      );
    }
  }
  return encriptado;
}

//Funcion para el boton Desencriptar

function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
}

function desencriptar(desencriptado) {
  let cambioVocales = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  desencriptado = desencriptado.toLowerCase();
  for (let i = 0; i < cambioVocales.length; i++) {
    if (desencriptado.includes(cambioVocales[i][1])) {
      desencriptado = desencriptado.replaceAll(
        cambioVocales[i][1],
        cambioVocales[i][0]
      );
    }
  }
  return desencriptado;
}

//Funcion para el boton COPIAR
function copiar() {
  let texto = document.getElementById("texto-a-copiar").value;
  let input = document.createElement("input");
  input.setAttribute("value", texto);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  alert("Se ha copiado exitosamente!");
}
