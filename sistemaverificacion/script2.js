document.getElementById("addressForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const formData = new FormData(this);
    const requestData = {};
  
    formData.forEach((value, key) => {
      requestData[key] = value;
    });
  
    requestData['validate_merlin'] = 'true';
    requestData['closed_neighborhood_country'] = 'no';
    requestData['isMovistarUser'] = 'no';
    requestData['form_key'] = 'tGvJCHWgGcAV0dOq';
  
    fetch('http://192.168.0.17:5000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: requestData }),
      rejectUnauthorized: false // BAD
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === true) {
          document.getElementById('resultDiv').innerHTML = '<p class="fs-1">✅ TIENE COBERTURA</p>';
        } else {
          document.getElementById('resultDiv').innerHTML = '<p class="fs-1">No tiene cobertura</p>';
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  