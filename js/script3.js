function acesso() {
    var recidade = document.formidade.campoidade.value
    if (recidade >= 18) {
        window.open("https://youtube.com")
    } else{
        alert("voce não pode\n sai fora...")
    }
}