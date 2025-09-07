function Convert(){
    let Speak = new SpeechSynthesisUtterance()
    Speak.text = document.getElementById("getText").value
    window.speechSynthesis.speak(Speak)
}