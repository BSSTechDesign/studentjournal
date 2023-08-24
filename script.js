function saveJournal() {
    var journalData = {
      activity: document.getElementById('activity').value,
      // Other input values...
    };
    
    // Save journalData to storage (e.g., database)
    // You can use AJAX, Fetch, or a backend framework to handle this part
    
    clearInputFields();
  }
  
  function clearInputFields() {
    var inputFields = document.querySelectorAll('textarea');
    inputFields.forEach(function(field) {
      field.value = '';
    });
  }
  