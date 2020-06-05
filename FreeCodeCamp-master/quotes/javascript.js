var quotes = [
'Our greatest jou and our greatest pain come in our relationships with others.',
'Tealationships are like glass. Sometimes it is better to leave them broken than try to hurt yourself putting it back together',
'It is sad not to love, but it is much sadder not to be able to love',
'Some people are going to leave, but that is not the end of your story. That is the end of their part in your story'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}