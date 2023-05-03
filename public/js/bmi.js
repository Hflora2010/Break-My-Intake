// Compile the template
// const template = Handlebars.compile(document.getElementById("result-template").innerHTML);
let bmi = 0;


const bmiCalculator = async (event) => {
    event.preventDefault();
  /// Get the form and result elements
  // const form = document.getElementByClass("bmi-form");
  const result = document.getElementById("result");


  // Get the user input values
  const age = document.querySelector('#age').value.trim();
  console.log(age)
  const sex = document.querySelector('#sex').value.trim();
  console.log(sex)
  const weight = document.querySelector('#weight').value.trim();
  console.log(weight)
  const height = document.querySelector('#height').value.trim();
  console.log(height)
  // const units = document.getElementsByName("units").value;
  // console.log(units)
  // const 
  // Add an event listener to the calculate button
  const calculateButton = document.querySelector("#calculate");
  // calculateButton.addEventListener("click", function() {
  console.log("button clicked")
  

  // Validate the input values
  if (isNaN(age) || age < 0) {
    alert("Please enter a valid age.");
    return;
  }
  if (weight < 0) {
    alert("Please enter a valid weight.");
    return;
  }
  if (height < 0) {
    alert("Please enter a valid height.");
    return;
  }

  // Calculate the BMI
  // let bmi;
  // if (units === "metric") {
  //   bmi = weight / Math.pow(height / 100, 2);
  // } else {
    bmi = 703 * (weight / Math.pow(height, 2));
  // }

  // Determine the BMI category
  let category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }
console.log(bmi)
console.log(category)

// var bmiResult = document.crearteElement('p')
// bmi.textContent = bmi;

// var bmiResult = document.crearteElement('p')
// bmi.textContent = bmi;

// const result = document.getElementById("result");
result.textContent = `BMI: ${bmi.toFixed(2)}, Category: ${category}`;
// res.render('calculatebmi', { bmi, category });

  // Render the result template with the BMI and category
  // const html = template({ bmi: bmi.toFixed(1), category: category });
  // result.innerHTML = html;
// }
// );
};


document
    .querySelector('.bmi-form')
    .addEventListener('submit', bmiCalculator);
