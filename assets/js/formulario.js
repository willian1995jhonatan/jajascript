function mostrar() {
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value

    var nascimento = document.getElementById("nascimento").value
    // 2020/02/27
    // 27/02/2020
    var dia = nascimento.substring(8,10)
    var mes = nascimento.substring(5,7)
    var ano = nascimento.substring(0,4)
    nascimento = dia+"/"+mes+"/"+ano

    var estados = document.getElementById("estados").value
    var senha = document.getElementById("senha").value
    var sexo = document.querySelector("input[name='sexo']:checked").value
    var almoco = document.getElementById("almoco").checked
    
    
    if (almoco == true)
    {almoco ="sim"}
else {almoco="não"}

    var ValeTransporte = document.getElementById("ValeTransporte").checked
    
    if (ValeTransporte==true)
    {ValeTransporte ="sim"}
else 
{ValeTransporte="não"}

    var observacao = document.getElementById("observacao").value
    


    alert("Nome: " + nome + "\n Idade: " + idade + "\n Nascimento: " + nascimento + "\n Estados: " + estados + "\n Senha: " + senha +
        "\n Sexo: " + sexo + "\nAlmoço: " + almoco + "\n Vale Transporte: " + ValeTransporte + "\n Observação: " + observacao)
}