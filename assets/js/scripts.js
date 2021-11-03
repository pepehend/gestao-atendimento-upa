var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

var toastTrigger = document.getElementById("liveToastBtn");
var toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", function () {
    var toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}

alertCPF = document.getElementById("cpf");
alertCNS = document.getElementById("cns");
submitButton = document.getElementById("submit-button");
loginError = document.getElementById("loginError");

// Validação de CPF

function validaCPF() {
  var cpf = $("#cpf")
    .val()
    .replace(/[^0-9]/g, "")
    .toString();

  if (
    cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999"
  ) {
    alertCPF.classList.add("is-invalid");
    return false;
  } else {
    var v = [];

    //Calcula o primeiro dígito de verificação.
    v[0] = 1 * cpf[0] + 2 * cpf[1] + 3 * cpf[2];
    v[0] += 4 * cpf[3] + 5 * cpf[4] + 6 * cpf[5];
    v[0] += 7 * cpf[6] + 8 * cpf[7] + 9 * cpf[8];
    v[0] = v[0] % 11;
    v[0] = v[0] % 10;

    //Calcula o segundo dígito de verificação.
    v[1] = 1 * cpf[1] + 2 * cpf[2] + 3 * cpf[3];
    v[1] += 4 * cpf[4] + 5 * cpf[5] + 6 * cpf[6];
    v[1] += 7 * cpf[7] + 8 * cpf[8] + 9 * v[0];
    v[1] = v[1] % 11;
    v[1] = v[1] % 10;

    //Retorna Verdadeiro se os dígitos de verificação são os esperados.
    if (v[0] != cpf[9] || v[1] != cpf[10]) {
      alertCPF.classList.add("is-invalid");
      alertCPF.classList.remove("is-valid");
      return false;
    } else {
      alertCPF.classList.remove("is-invalid");
      alertCPF.classList.add("is-valid");
      return true;
    }
  }
}

// Validação de CNS

function validaCNS() {
  var vlrCNS = $("#cns")
    .val()
    .replace(/[^0-9]/g, "")
    .toString();
  // Formulário que contem o campo CNS
  var soma = new Number();
  var resto = new Number();
  var dv = new Number();
  var pis = new String();
  var resultado = new String();
  var tamCNS = vlrCNS.length;
  if (tamCNS != 15) {
    alertCNS.classList.add("is-invalid");
    alertCNS.classList.remove("is-valid");
    return false;
  }
  pis = vlrCNS.substring(0, 11);
  soma =
    Number(pis.substring(0, 1)) * 15 +
    Number(pis.substring(1, 2)) * 14 +
    Number(pis.substring(2, 3)) * 13 +
    Number(pis.substring(3, 4)) * 12 +
    Number(pis.substring(4, 5)) * 11 +
    Number(pis.substring(5, 6)) * 10 +
    Number(pis.substring(6, 7)) * 9 +
    Number(pis.substring(7, 8)) * 8 +
    Number(pis.substring(8, 9)) * 7 +
    Number(pis.substring(9, 10)) * 6 +
    Number(pis.substring(10, 11)) * 5;
  resto = soma % 11;
  dv = 11 - resto;
  if (dv == 11) {
    dv = 0;
  }
  if (dv == 10) {
    soma =
      Number(pis.substring(0, 1)) * 15 +
      Number(pis.substring(1, 2)) * 14 +
      Number(pis.substring(2, 3)) * 13 +
      Number(pis.substring(3, 4)) * 12 +
      Number(pis.substring(4, 5)) * 11 +
      Number(pis.substring(5, 6)) * 10 +
      Number(pis.substring(6, 7)) * 9 +
      Number(pis.substring(7, 8)) * 8 +
      Number(pis.substring(8, 9)) * 7 +
      Number(pis.substring(9, 10)) * 6 +
      Number(pis.substring(10, 11)) * 5 +
      2;
    resto = soma % 11;
    dv = 11 - resto;
    resultado = pis + "001" + String(dv);
  } else {
    resultado = pis + "000" + String(dv);
  }
  if (vlrCNS != resultado) {
    soma =
      Number(vlrCNS.substring(0, 1)) * 15 +
      Number(vlrCNS.substring(1, 2)) * 14 +
      Number(vlrCNS.substring(2, 3)) * 13 +
      Number(vlrCNS.substring(3, 4)) * 12 +
      Number(vlrCNS.substring(4, 5)) * 11 +
      Number(vlrCNS.substring(5, 6)) * 10 +
      Number(vlrCNS.substring(6, 7)) * 9 +
      Number(vlrCNS.substring(7, 8)) * 8 +
      Number(vlrCNS.substring(8, 9)) * 7 +
      Number(vlrCNS.substring(9, 10)) * 6 +
      Number(vlrCNS.substring(10, 11)) * 5 +
      Number(vlrCNS.substring(11, 12)) * 4 +
      Number(vlrCNS.substring(12, 13)) * 3 +
      Number(vlrCNS.substring(13, 14)) * 2 +
      Number(vlrCNS.substring(14, 15)) * 1;
    resto = soma % 11;

    if (resto != 0) {
      alertCNS.classList.remove("is-valid");
      alertCNS.classList.add("is-invalid");
      return false;
    } else {
      alertCNS.classList.remove("is-invalid");
      alertCNS.classList.add("is-valid");
      return true;
    }
  } else {
    alertCNS.classList.remove("is-invalid");
    alertCNS.classList.add("is-valid");
    return true;
  }
}

function runLogin() {
  if (validaCPF() && validaCNS()) {
    window.location.href = "./queue.html";
    return false;
  } else {
    loginError.classList.remove("sr-only");
    return false;
  }
}
