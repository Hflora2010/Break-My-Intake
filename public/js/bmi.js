let bmi = 0;


const bmiCalculator = async (event) => {
    event.preventDefault();
  /// Get the result elements

  
  const result = document.getElementById("result");


  // Get the user input values
  const age = document.querySelector('#age').value.trim();
  // console.log(age)
  const sex = document.querySelector('#sex').value.trim();
  // console.log(sex)
  const weight = document.querySelector('#weight').value.trim();
  // console.log(weight)
  const height = document.querySelector('#height').value.trim();
  // console.log(height)
  // const units = document.getElementsByName("units").value;
  // console.log(units)
  // const 
  // Add an event listener to the calculate button
  const calculateButton = document.querySelector("#calculate");
  // calculateButton.addEventListener("click", function() {
  console.log("button clicked")
  

  // Validate the input values
  if (isNaN(age) || age < 0 || age === "") {
    alert("Please enter a valid age.");
    return;
  }
  if (isNaN(weight) || weight < 0 || weight === "") {
    alert("Please enter a valid weight.");
    return;
  }
  if (isNaN(height) || height < 0 || height === "") {
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
// console.log(bmi)
// console.log(category)

// var bmiResult = document.crearteElement('p')
// bmi.textContent = bmi;

// var bmiResult = document.crearteElement('p')
// bmi.textContent = bmi;

// const result = document.getElementById("result");
// result.textContent = `Your BMI is : ${bmi.toFixed(2)}, and it falls in  ${category} category`;


// create a result dive to wrap result values table and disclaimer in it  

var resultDiv = document.createElement('div')
  var resultp = document.createElement('h3')
  resultp.textContent  = `Your BMI is : ${bmi.toFixed(2)}, and it falls in  ${category} category`;
  // document.body.append(resultDiv)
  resultDiv.append(resultp)

// result.innerHTML = resultDiv;
// result.innerHTML = resultDiv.outerHTML; //this works

// result.appendChild(resultDiv) // this works too



// Create the table element
const table = document.createElement('table');

// Create the table header row
const headerRow = document.createElement('tr');

// Create the BMI header cell
const bmiHeader = document.createElement('th');
bmiHeader.textContent = 'BMI';
headerRow.appendChild(bmiHeader);

// Create the Weight Status header cell
const weightStatusHeader = document.createElement('th');
weightStatusHeader.textContent = 'Weight Status';
headerRow.appendChild(weightStatusHeader);

// Add the header row to the table
table.appendChild(headerRow);

// Create the table body rows
const bodyRows = [
  ['Less than 18.5', 'Underweight'],
  ['18.5 - 24.9', 'Normal weight'],
  ['25.0 - 29.9', 'Overweight'],
  ['30.0 and above', 'Obesity']
];

// Loop through the body rows and create each row and cell
for (let i = 0; i < bodyRows.length; i++) {
  const bodyRow = document.createElement('tr');
  
  const bmiCell = document.createElement('td');
  bmiCell.textContent = bodyRows[i][0];
  bodyRow.appendChild(bmiCell);
  
  const weightStatusCell = document.createElement('td');
  weightStatusCell.textContent = bodyRows[i][1];
  bodyRow.appendChild(weightStatusCell);
  
  table.appendChild(bodyRow);
}

// Add the table to the document
// document.body.appendChild(table);
resultDiv.append(table)//this works

// result.innerHTML = table.outerHTML;




// Create the disclaimer paragraph element
const disclaimer = document.createElement('p');
disclaimer.innerHTML = '<strong>Disclaimer:</strong> This BMI calculator is for informational purposes only and should not be used to diagnose or treat any medical condition. Always consult with a qualified healthcare professional before making any changes to your diet, exercise, or medication regimen. The results of this calculator are based on average values and should not be interpreted as medical advice. Please note that BMI calculations may not be accurate for individuals with certain health conditions or body types. By using this calculator, you agree to assume all risk associated with the use of the calculator and the information provided.';


// !!!not sure what the issue is. can get the text to hide, but can't get the function to work so it unhides the text!!!

// const disclaimer = document.createElement('h3');
// disclaimer.innerHTML = '<strong>Disclaimer:</strong> This BMI calculator is for informational purposes only <span id="dots">..</span><span id="readMore"> and should not be used to diagnose or treat any medical condition. Always consult with a qualified healthcare professional before making any changes to your diet, exercise, or medication regimen. The results of this calculator are based on average values and should not be interpreted as medical advice. Please note that BMI calculations may not be accurate for individuals with certain health conditions or body types. By using this calculator, you agree to assume all risk associated with the use of the calculator and the information provided.</span><button class="hideText" onclick = "toggle()" id="myBtn">read more</button>';

// function toggle() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("readMore");
//     var btnText = document.getElementById("myBtn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "read more";
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "read less";
//       moreText.style.display = "inline";
//     }
//   }


// Add the disclaimer to the document
// document.body.appendChild(disclaimer);
resultDiv.append(disclaimer)//this works


result.innerHTML = resultDiv.outerHTML;













// result.createE
// var bmiDisclaimer = result.createE('disclaimer')
// bmiDisclaimer.textContent = 'Disclaimer: This BMI calculator is for informational purposes only and should not be used to diagnose or treat any medical condition. Always consult with a qualified healthcare professional before making any changes to your diet, exercise, or medication regimen. The results of this calculator are based on average values and should not be interpreted as medical advice. Please note that BMI calculations may not be accurate for individuals with certain health conditions or body types. By using this calculator, you agree to assume all risk associated with the use of the calculator and the information provided.';
// // result.appendChild(bmiCalculator)

// console.log(bmiDisclaimer)
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
