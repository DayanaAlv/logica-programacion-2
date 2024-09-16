function convertTemperature() {
    
    document.getElementById('error').textContent = '';
    document.getElementById('resultado').textContent = '';
    
    const celsiusInput = document.getElementById('celsius').value;
    const celsius = parseFloat(celsiusInput);
    
    if (isNaN(celsius)) {
      document.getElementById('error').textContent = 'Por favor, introduce un número válido.';
      return; 
    }
    
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
    
    document.getElementById('resultado').textContent = 
      `${celsius}°C equivalen a ${fahrenheit.toFixed(2)}°F y ${kelvin.toFixed(2)}K.`;
  }