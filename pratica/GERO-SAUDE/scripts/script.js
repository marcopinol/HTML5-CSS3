var idoso = {
    nome: "",
    email: "",
    telefone: Number,
};

function dados() {
    idoso.nome = document.querySelector("#iname");
    idoso.email = document.querySelector("#iemail");
    idoso.telefone = document.querySelector("#itel");

    console.log(idoso.nome.value);
    console.log(idoso.email.value);
    console.log(idoso.telefone.value);
};
