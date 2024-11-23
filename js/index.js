var quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" }
  ];

  var button = document.getElementById("quoteButton");
  var quoteContainer = document.getElementById("quote-container");
  var authorContainer = document.getElementById("author");
  
  button.addEventListener("click", () => {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var selectedQuote = quotes[randomIndex];
    quoteContainer.textContent = `"${selectedQuote.text}"`;
    authorContainer.textContent = `-- ${selectedQuote.author}`;
  });