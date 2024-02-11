const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height === '' || height < 0) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (isNaN(weight) || weight === '' || weight < 0) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        let bmiCategory;
        if (bmi < 18.5) {
            bmiCategory = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiCategory = "Normal";
        } else if (bmi >= 25 && bmi <= 29.9) {
            bmiCategory = "Overweight";
        } else {
            bmiCategory = "Obese";
        }

        // Displaying both BMI number and category
        results.innerHTML = `<span>BMI: ${bmi}</span><br><span>Category: ${bmiCategory}</span>`;
    }
});
