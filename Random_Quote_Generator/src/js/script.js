const btnCreate = document.getElementById("create");
const btnsGenerate = document.getElementById("generate");
const btnDownload = document.getElementById("download");
const quoteContainer = document.querySelector(".quote-container");

async function getRandomQuote() {
  const apiUrl = "https://api.quotable.io/random";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const quote = data.content;
    quoteContainer.innerHTML = `<h2>${quote}</h2>`;
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}



btnsGenerate.addEventListener("click", getRandomQuote);
btnDownload.addEventListener("click", downloadImage);

