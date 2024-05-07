document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dob = document.getElementById("dob").value;
  
    if (!name || !email || !password || !dob) {
      document.getElementById("message").innerHTML = "All fields are required!";
    } else {
      // You can add further validation here
      
      // Display success message
      document.getElementById("message").innerHTML = "Registration successful!";
    }
  });
  