function CopyScript(a){
    var val = document.getElementById(a)
    navigator.clipboard.writeText(val.textContent)
    alert("Copied to clipboard!!!")
}