const checkAlert=(e)=>{
    switch (e.target.value) {
        case "Color":
            document.querySelector("#root").style.color = "green"
            break
        case "Background Color":
            document.querySelector("#root").style.backgroundColor = "red"
            break
        case "Padding":
            document.querySelector("#root").style.padding = "10%"
            break
        case "Font Size":
            document.querySelector("#root").style.fontSize = "300%"
            break
        case "Font Weight":
            document.querySelector("#root").style.fontWeight = "900"
            break
    }
}