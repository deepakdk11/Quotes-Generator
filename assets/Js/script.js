const btn = document.querySelector("button");

const author = document.querySelector(".author");

const qoutes = document.querySelector(".qoutes")

const container = document.querySelector(".container")

const body = document.querySelector("body")

btn.addEventListener("click", () => {
    const link = fetch('https://api.quotable.io/quotes/random')
    link.then((response) => response.json())
    .then((result) =>  finalResult(result))

    
})

function finalResult(result){
    let authorName = result[0].author
    let content = result[0].content
    qoutes.innerHTML = `<q>${content}</q>`
    author.innerHTML = `~${authorName}`
    container.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
}

body.addEventListener("keypress",(e)=>{
    e.target = 'Enter'
    console.log("hi")
})
