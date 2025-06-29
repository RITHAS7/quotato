const QUOTES_API = "https://api.api-ninjas.com/v1/quotes";
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const generateBtn = document.getElementById("generate");
let quote = localStorage.getItem("quote");
let author = localStorage.getItem("author");
const api_key = "LzGgr+SZ3MM/yuefszX5sA==pzZdiIuXJGGSRKBI";

if (quote) {
    quoteText.innerHTML = quote;
    authorText.innerHTML = author;
} else {
    getapi(QUOTES_API);
};


async function getapi(url)
    {
    const response = await fetch(url,{headers:{"X-Api-Key":api_key}});
    var data = await response.json();
    quote = data[0]["quote"];
    author = "- "+data[0]["author"];
    localStorage.setItem("quote",quote);
    localStorage.setItem("author",author);
    quoteText.innerHTML = quote;
    authorText.innerHTML = author;
    };

generateBtn.addEventListener("click",function(){
    getapi(QUOTES_API)
});

