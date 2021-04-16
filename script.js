

function formDisplay() {
    var first = document.getElementById("fname").value;
    var last = document.getElementById("lname").value;
    var result = first + ' ' + last + ', ' + ' ' + "You are now Signed up ";
    document.getElementById('display').textContent = result;
    document.getElementById('open-button').style.display = "none";
    document.getElementById('ok').style.display = "block";

  }

  function openform() {
    document.getElementById("form-container").style.display = "block";
  }

  function closeDisplay() {
    document.getElementById("form-container").style.display = "none";
  }

  function redirect() {
    window.open("login form");

  }
