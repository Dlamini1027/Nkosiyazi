
document.getElementById('entryForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var age = parseInt(document.getElementById('age').value);
  var price;
  
  if (age >= 0 && age <= 3) {
    price = 'Free entry';
  } else if (age >= 3 && age <= 12) {
    price = 'R100';
  } else if (age > 12 && age <= 18) {
    price = 'R150';
  } else if (age > 18 && age <= 65) {
    price = 'R200';
  } else {
    price = 'Free entry';
  }

  document.getElementById('result').innerText = 'Price: ' + price;

  document.getElementById('ty').style.display = 'block';
});

document.getElementById('purchaseForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var quantity = parseInt(document.getElementById('quantity').value);
  var totalPrice = 0;

  var age = parseInt(document.getElementById('age').value);
  var price;

  if (age >= 0 && age <= 3) {
    price = 0;
  } else if (age >= 3 && age <= 12) {
    price = 100;
  } else if (age > 12 && age <= 18) {
    price = 150;
  } else if (age > 18 && age <= 65) {
    price = 200;
  } else {
    price = 0;
  }

  totalPrice = price * quantity;

  document.getElementById('result2').innerText = 'Total Price: '+totalPrice ;

});