// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



 axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(results => {
      const top = document.querySelector('.topics');
      results.data.topics.forEach(element => {
          top.appendChild(tabs(element));
      })
  .catch(err=>{
      console.log(err);
  });
  });


function tabs (data) {
      const tab = document.createElement('div');
      tab.textContent = data;
      tab.classList.add('tab');
      
      return tab;
  };




// {data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
// config: {url: "https://lambda-times-backend.herokuapp.com/topics", method: "get", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
// data:
// topics: Array(5)
// 0: "javascript"
// 1: "bootstrap"
// 2: "technology"
// 3: "jquery"
// 4: "node.js"
// length: 5