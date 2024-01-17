function Submitted (){
  // Get form values
  const Name = document.getElementById('name').value;
  const Number = document.getElementById('mobile').value;
  const Checkin = document.getElementById('checkin').value;
  const Checkout = document.getElementById('checkout').value;
  const People =  document.getElementById('people').value;

  // Create an object with the form data
  const formData = {
    Name: Name,
    Mobile: Number,
    'Check In Date': Checkin,
    'Check Out Date': Checkout,
    'Total People': People,
  };
  // Log the form data to the console
  console.log(formData);
};
