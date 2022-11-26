
let $root = document.querySelector("#root")
// html
let h1 = document.createElement("h1")
let p = document.createElement("p")
let img = document.createElement("img")

$root.setAttribute("class", "container")
img.setAttribute("src", "img/image-qr-code.png")
img.setAttribute("alt", "image-qr-code")

h1.innerText = "Improve your front-end skills by building projects"
p.innerText = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"

$root.appendChild(img)
$root.appendChild(h1)
$root.appendChild(p)

// css
let b = document.body.style
b.display = "flex"
b.justifyContent = "center"
b.padding = "0"
b.boxSizing = "border-box"
b.background = "hsl(212, 45%, 89%)"
b.fontFamily = "outside, sans-serif"

let i = img.style
i.width= "300px"
i.borderRadius = "10px"

let r = $root.style
r.display = "flex"
r.flexDirection = "column"
r.textAlign = "center"
r.alignItems = "center"
r.background = "hsl(0, 0%, 100%)"
r.borderRadius = "15px"
r.height = "500px"
r.width = "330px"
r.padding = "15px 15px"
r.margin = "10% auto"

let h = h1.style
h.fontSize= "23px"
h.paddingTop = "15px"
h.color = "hsl(218, 44%, 22%)"

let text = p.style
text.fontSize = "15px"
text.padding = "15px 20px"
text.color = "hsl(220, 15%, 55%)"
