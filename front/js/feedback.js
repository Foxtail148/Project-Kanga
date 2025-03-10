async function enviarFeedback(){
    const usuario = document.getElementById("usuario").value;
    const mensagem = document.getElementById("mensagem").value;

    if(!usuario||!mensagem){
        alert("Preencha todos os Campos")
        return 0;
    }

    const response = await fetch("../../back/php/feedback.php",{
        method:"POST",
        headers:{"Content-Type":"aplication/json"},
        body:JSON.stringify(usuario,mensagem)
    });

    const resulte = await response.json();
    alert(resulte.message);
    carregarFeedback(); // ATualizando a lista após o envio
}

async function carregarFeedback(){
    const response = await fetch("../../back/php/feedback.php");
    const feedbacks = await response.json();
    const lista = document.getElementById("lista-feedbacks");

    lista.innerHTML = "";
    feedbacks.array.forEach(feedback => {
        
        const item = document.createElement("li");
        
        item.textContent = `${feedback.usuario}:
                            ${feedback.mensagem}
                            (${feedback.data_de_envio})`;
                            lista.appendChild(item)
    });
       
}
//carregar feedbacks ao abrir

carregarFeedback();

function voltar(){
    location.href="../html/page4.html";
}