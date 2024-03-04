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
    price = 'R300';
  } else {
    price = 'Free entry';
  }
  
  document.getElementById('result').innerText = 'Price to pay: ' + price;
});
