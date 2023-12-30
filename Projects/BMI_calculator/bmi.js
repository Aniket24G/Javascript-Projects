function calculate() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    // console.log(weight);
    // console.log(height);
    const p = document.createElement('p');
    let bmi = (weight / (height * height)).toFixed(2);
    p.appendChild(document.createTextNode(bmi));
    const location = document.querySelector('.form');
    location.appendChild(p);
    // console.log('calculated')
    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
};