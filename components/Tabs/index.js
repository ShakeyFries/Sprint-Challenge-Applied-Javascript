// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((response) => {
let topics = document.querySelector('.topics');
topics.appendChild(Tabs(response))
}); 

// const ltArray = [
//       'Javascript',
//       'Bootstrap',
//       'Technology',
//       'Jquery',
//       'Node.js'
// ];

function Tabs(info) {
    const
      tab = document.createElement('div');
      tab.className = "tab";

      tabInfo = tab.appendChild(document.createElement('div'));
      tabInfo.className = "tab-info";

      javaSc = tabInfo.appendChild(document.createElement('h3'));
      javaSc.textContent = info.data.topics[0];
      bootStr = tabInfo.appendChild(document.createElement('h3'));
      bootStr.textContent = info.data.topics[1];
      tech = tabInfo.appendChild(document.createElement('h3'));
      tech.textContent = info.data.topics[2];
      jQuery = tabInfo.appendChild(document.createElement('h3'));
      jQuery.textContent = info.data.topics[3];
      nodeJs = tabInfo.appendChild(document.createElement('h3'));
      nodeJs.textContent = info.data.topics[4];

      return tab;
};
let topics = document.querySelector('.topics');



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