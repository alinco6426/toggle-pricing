
let pageView = document.getElementById("page-view");
let pageAmount = document.getElementById("amount");
const rangeInput = document.getElementById('input');
let toggle = document.getElementById("toggle");
let duration = document.getElementById("duration");


let  value = "300k";
let amount = 16;


// function to change values start here 

function display(displayer,view,priceAmount) {    
  let displayerValue = displayer.value;
      if (displayerValue === "1") {
        view = "100k";
        priceAmount = 4;
      } else if (displayerValue === "2") {
        view = "200k";
        priceAmount = 8;
      } else if (displayerValue === "3") {
        view = "300k";
        priceAmount = 16;
      } else if (displayerValue === "4") {
        view = "400k";
        priceAmount = 32;
      } else if (displayerValue === "5") {
        view = "500k";
        priceAmount = 64;
      }
      pageView.innerText = view + " PageViews";

      toggleChanger(toggle,priceAmount);
    }
    
    // function to change values end here 
    

  //  function to  switch between month and year starts here  

  function toggleChanger(checker,priceAmount) {
    if (checker.checked) {
      pageAmount.innerText = "$ " + (priceAmount * 9) + ".00";
      duration.innerText =  "/year";
    } else {
      pageAmount.innerText = "$ " + priceAmount +".00";
      duration.innerText =  "/month";
    }
    amount = priceAmount;
  }

toggle.addEventListener("change", function () {
  toggleChanger(this, amount);
});

// /  function to  switch between month and year  ends here 
    

//  function to show the progress status  starts here

function updateProgressBar(ranger) {
  var progressBar = (ranger.value - ranger.min) / (ranger.max - ranger.min) * 100;

  ranger.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) "
    + progressBar + "%, hsl(224, 65%, 95%) " + progressBar + "%, hsl(224, 65%, 95%) 100%)";
}

// funntion to show progress status ends here 


// status and value function heandler 

rangeInput.addEventListener('input', function () {
  display(this, value, amount)
  updateProgressBar(this)
});



//     // Initial display setup
rangeInput.value = "3";
updateProgressBar(rangeInput)
pageView.innerText = value + " PageViews";
toggleChanger(toggle, amount)





  



