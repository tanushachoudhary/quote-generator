const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("new");
const url = "https://api.quotable.io/random";

async function generate() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch quote");
        
        const data = await response.json();
        quote.innerText = data.content;
        author.innerText = data.author;
    } catch (error) {
        console.error("Error fetching quote:", error);
        quote.innerText = "Failed to load quote. Try again!";
        author.innerText = "";
    }
}

btn.addEventListener("click", generate);

// Initial quote load
generate();

function tweet() {
    const tweetText = `${quote.innerText} — ${author.innerText}`;
    window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`,
        "Tweet Window",
        "width=600,height=300"
    );
}
