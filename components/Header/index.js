// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
      const head = document.createElement('div');
      head.className = "header";

      date = document.createElement('span');
      date.className = "date";
      date.textContent = "SMARCH 28, 2019";
      head.appendChild(date);

      headerOne = document.createElement('h1');
      headerOne.textContent = "Lambda Times";
      head.appendChild(headerOne);

      temp = document.createElement('span');
      temp.className = "temp";
      temp.textContent = "98°";
      head.appendChild(temp);

      return head;   
}

let headCont = document.querySelector('.header-container');
headCont.appendChild(Header());