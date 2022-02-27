function getdisplay() {
    //get html value
    var a = document.getElementById("name").value
    //display value
    document.getElementById("display").innerHTML = a

    var b = document.getElementById("num").value
    document.getElementById("dis").innerHTML = b
    if (a == "hello") {
        window.alert("hi")
    }
}