class Car {

  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

}

class UI {

  addCarToList(car) {

    const list = document.getElementById('car-list'); // tbody
    const row = document.createElement('tr'); // create an HTML element

    row.innerHTML = `
      <td>${car.brand}</td>
      <td>${car.model}</td>
      <td>${car.year}</td>
    `;

    list.appendChild(row);

  }

  clearFields(){
    document.getElementById('brand').value = '';
    document.getElementById('model').value = '';
    document.getElementById('year').value = '';
  }

}

document.getElementById('car-form').addEventListener('submit', function(e){

  e.preventDefault();

  // get form values
  const brand = document.getElementById('brand').value;
  const model = document.getElementById('model').value;
  const year = document.getElementById('year').value;

  // validate data
  if(brand === ''){
    alert('Enter car brand');
    return false;
  }
  else if(model === ''){
    alert('Enter car model');
    return false;
  }
  else if(year === ''){
    alert('Enter car year');
    return false;
  }
  else{
    // instantiate a car
    const car = new Car(brand, model, year);

    // instantiate UI
    const ui = new UI;
    
    ui.addCarToList(car);

    ui.clearFields();
  }


});