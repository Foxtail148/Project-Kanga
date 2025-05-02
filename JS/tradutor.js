const campo_pesquisa = document.querySelector(".input");
const botao = document.getElementById("botao-pesquisa");
const lacuna = document.getElementById("lacuna-pesquisa");

campo_pesquisa.addEventListener('keydown', function(e) {
    if(e.key != "Enter" || !campo_pesquisa.value){
        return
    }
    getSearchedWords(campo_pesquisa.value);
    
});
let audioPlaying = false;

async function playAudio(source){
    if(source == "null" || !source){
        alert("Palavra sem áudio");
        return;
    }

    if(audioPlaying) await document.querySelector("#tradutor_page_audio").pause();
    audioPlaying = true
    document.querySelector("#tradutor_page_audio source").src = `../admin/AUDIO/${source}`
    await document.querySelector("#tradutor_page_audio").load();
    await document.querySelector("#tradutor_page_audio").play()
}

async function getInitialWords(){
    let formData = new FormData()
    formData.append("id_aluno", localStorage.getItem("id"));

    let obj = await fetch("../PHP/tradutor_initial.php", {
        method: "POST",
        body: formData
    })

    let res = await obj.json();

    if(res.message) alert(res.message)
    else{
        res.data.map((elemento, index)=>{
            document.querySelector(".box").innerHTML+=`
                <div class="res">
                    <span>${elemento.palavra}</span>
                    <span>${elemento.significado}<button onclick="playAudio('${elemento.audio}')"><i class="fa-solid fa-volume-high"></i></button></span>
                </div>
            `    
        })
        
    }
}

async function getSearchedWords(query){
    let formData = new FormData()
    formData.append("id_aluno", localStorage.getItem("id"));
    formData.append("query", query);

    let obj = await fetch("../PHP/tradutor_words.php", {
        method: "POST",
        body: formData
    })

    let res = await obj.json();

    if(res.message) alert(res.message)
    else{

        if(res.data.length < 1){
            //alert(res.results)
            if(res.results > 0){
                document.querySelector(".box").innerHTML = `
                    <span>${res.results} palavra(s) encontrada(s)</span>
                    <span>Continue jogando para desbloquear</span>
                `
            } else {
                document.querySelector(".box").innerHTML = `
                    <span>Palavra não encontrada</span>
                `
            }

            return
        }

        let tmp_html = ""
        res.data.map((elemento, index)=>{
            tmp_html+=`
                <div class="res">
                    <span>${elemento.palavra}</span>
                    <span>${elemento.significado}<button onclick="playAudio('${elemento.audio}')"><i class="fa-solid fa-volume-high"></i></button></span>
                </div>
            `    
        })
        document.querySelector(".box").innerHTML = tmp_html
    }   
}


getInitialWords()
