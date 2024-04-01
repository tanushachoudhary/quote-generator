const quote = document.getElementById("quote");
const author = document.getElementById("author");
const url = "https://api.quotable.io/random";
const btn=document.getElementById("new");
async function generate(url) {
  const response = await fetch(url);
  var data = await response.json();
  quote.innerHTML=data.content;
  author.innerText=data.author;
}
btn.addEventListener("click",()=>{
    generate(url);
})

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+"----by "+author.innerHTML,"Tweet Window","width=600,height=300");
}