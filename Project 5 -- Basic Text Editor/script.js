function clearText(){
    var ele = document.getElementById("typetext");
    ele.value = "";
    alert("Text content has been cleared successfully.");
}
function downloadFile(){
    var ele = document.getElementById("typetext");
    const Content = ele.value;
    var file = new Blob([Content],{type: "text/plain"})
    var url = URL.createObjectURL(file);
    var anc = document.createElement('a');
    anc.href = url;
    anc.download = "Content.txt";
    document.body.appendChild(anc);
    anc.click();
    document.body.removeChild(anc);
    URL.revokeObjectURL(url);
    alert("Text content has been downloaded successfully.");
}