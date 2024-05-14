const quotes = [
  {
    text: "成功しようというあなた自身の決心ほど重要なものは、他に何もないのだということを常に心に留めなさい。",
    author: "エイブラハム・リンカーン",
    image: "./偉人画像/リンカーン.jpg",
  },
  {
    text: "想像力は知識よりも重要である。",
    author: "アルベルト・アインシュタイン",
    image: "./偉人画像/アインシュタイン.jpg",
  },
  {
    text: "それを夢見ることができるならば、あなたはそれを実現できる。",
    author: "ウォルト・ディズニー",
    image: "./偉人画像/ディズニー.webp",
  },
  {
    text: "天才とは1%の閃きと、99%の努力である。",
    author: "トーマス・エジソン",
    image: "./偉人画像/エジソン.jpg",
  },
];

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  const imageElement = document.getElementById("image");

  quoteElement.textContent = quote.text;
  authorElement.textContent = `by${quote.author}`;
  imageElement.src = quote.image;
}

const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", displayRandomQuote);

displayRandomQuote();
