const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("new");

const url = "https://api.api-ninjas.com/v1/quotes";
const apiKey = "7HI0fQ7E4EKnunvNSjs0KQ==Q4gGmAgDBQsglacX"; // Keep this secure

async function generate() {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { "X-Api-Key": apiKey },
        });

        if (!response.ok) throw new Error("Failed to fetch quote");

        const data = await response.json();
        quote.innerText = data[0].quote;
        author.innerText = data[0].author;
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
