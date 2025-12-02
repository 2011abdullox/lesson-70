// ========== HEADER ==========
let header = document.getElementById("header")
header.style.display = "flex"
header.style.gap = "20px"
header.style.padding = "20px"
header.style.background = "black"
header.style.color = "white"
header.style.justifyContent = "center"

let menuNames = ["static", "relative", "absolute", "fixed", "sticky", "z-index"]
menuNames.forEach(name => {
    let item = document.createElement("div")
    item.textContent = name
    item.style.cursor = "pointer"
    header.append(item)
})


let section = document.getElementById("section")
section.style.padding = "50px"
section.style.background = "#00122a"
section.style.color = "white"
section.style.minHeight = "400px"
section.style.textAlign = "center"


let posTitle = document.createElement("h1")
posTitle.textContent = "Position"
posTitle.style.background = "white"
posTitle.style.color = "black"
posTitle.style.width = "200px"
posTitle.style.margin = "0 auto 40px auto"
posTitle.style.padding = "10px"
posTitle.style.borderRadius = "20px"
section.append(posTitle)

let wrap = document.createElement("div")
wrap.style.display = "flex"
wrap.style.justifyContent = "space-around"
wrap.style.marginTop = "40px"
section.append(wrap)

function createPositionExample() {
    let relative = document.createElement("div")
    relative.textContent = "relative"
    relative.style.width = "120px"
    relative.style.height = "120px"
    relative.style.background = "lime"
    relative.style.position = "relative"
    relative.style.color = "red"
    relative.style.display = "flex"
    relative.style.justifyContent = "center"
    relative.style.alignItems = "center"

    let abs = document.createElement("div")
    abs.textContent = "absolute"
    abs.style.width = "120px"
    abs.style.height = "120px"
    abs.style.background = "red"
    abs.style.position = "absolute"
    abs.style.top = "-40px"
    abs.style.left = "30px"
    abs.style.color = "white"
    abs.style.display = "flex"
    abs.style.justifyContent = "center"
    abs.style.alignItems = "center"

    relative.append(abs)
    return relative
}


wrap.append(createPositionExample())
wrap.append(createPositionExample())
wrap.append(createPositionExample())



let infoTitle = document.createElement("h1")
infoTitle.textContent = "Information"
infoTitle.style.background = "white"
infoTitle.style.color = "black"
infoTitle.style.width = "250px"
infoTitle.style.margin = "50px auto"
infoTitle.style.padding = "10px"
infoTitle.style.borderRadius = "20px"
section.append(infoTitle)

let infoWrap = document.createElement("div")
infoWrap.style.display = "flex"
infoWrap.style.justifyContent = "space-around"
infoWrap.style.padding = "20px"
section.append(infoWrap)

function createInfoCard(title, text) {
    let card = document.createElement("div")
    card.style.width = "250px"
    card.style.height = "200px"
    card.style.background = "brown"
    card.style.color = "white"
    card.style.padding = "20px"
    card.style.textAlign = "center"

    let t = document.createElement("h2")
    t.textContent = title

    let p = document.createElement("p")
    p.textContent = text

    card.append(t)
    card.append(p)

    return card
}

infoWrap.append(createInfoCard("Static", "Position default. top left right bottom ishlamaydi"))
infoWrap.append(createInfoCard("Relative", "Relative joyidan siljitadi"))
infoWrap.append(createInfoCard("Absolute", "Absolute eng yaqin relative ichida yuradi"))


let footer = document.getElementById("footer")
footer.style.textAlign = "center"
footer.style.padding = "20px"
footer.style.color = "white"
footer.style.background = "black"
footer.textContent = "top     left     right     bottom"
