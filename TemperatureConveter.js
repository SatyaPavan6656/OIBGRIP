function ctof(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function ftoc(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  function ktoc(kelvin) {
      return kelvin - 273.15;
  }
  
  function convertTemperature() {
    var temperature = document.getElementById("temperature").value;
    var scale = document.getElementById("Type").value;
    var result = document.getElementById("result");
  
    if (scale === "celsius") {
      result.innerHTML = temperature + "&#8451; = " + ctof(temperature) + "&#8457; = " + (temperature + 273.15) + "K";
    } else if (scale === "fahrenheit") {
      result.innerHTML = temperature + "&#8457; = " + ftoc(temperature) + "&#8451; = " + (ftoc(temperature) + 273.15) + "K";
    } else if (scale === "kelvin") {
      result.innerHTML = temperature + "K = " + ktoc(temperature) + "&#8451; = " + ctof(ktoc(temperature)) + "&#8457;";
    }
  }