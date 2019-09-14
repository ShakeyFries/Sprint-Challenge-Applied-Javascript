// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


 axios.get('https://lambda-times-backend.herokuapp.com/articles/')
.then (results => {
   const cardCont = document.querySelector('.cards-container');
   results.data.articles.bootstrap.forEach( event => {
         cardCont.appendChild(cards(event));
   })

   results.data.articles.javascript.forEach( event => {
      cardCont.appendChild(cards(event));
})

results.data.articles.technology.forEach( event => {
      cardCont.appendChild(cards(event));
})

results.data.articles.node.forEach( event => {
      cardCont.appendChild(cards(event));
})

results.data.articles.jquery.forEach( event => {
      cardCont.appendChild(cards(event));
})
});


function cards(pull) {
   const
      card = document.createElement('div');
      card.className = "card";
      card.classList.add ('card');

      headLine = card.appendChild(document.createElement('div'));
      headLine.className ="headline";
      headLine.textContent = pull.headline;

      author = headLine.appendChild(document.createElement('div'));
      author.className = "author";
      
      imgCont = author.appendChild(document.createElement('div'));
      imgCont.className = "img-container";
      
      imgSrc = imgCont.appendChild(document.createElement('img'));
      imgSrc.setAttribute('src', pull.authorPhoto); 
      
      const name = author.appendChild(document.createElement('span'));
      name.textContent = `By ${pull.authorName}`;
      
      return card;
}