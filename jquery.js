$(function(){
    $('#lastName').focusout(function(){
      var inputLastName = $('#lastName').val();
      var regex = new RegExp(/[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?[[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?]*[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+/);
      if (regex.test(inputLastName)){
      } else {
        alert('Merci d\'entrer un prénom valide');
      }
    });
    $('#firstName').focusout(function(){
      var input = $('#firstName').val();
      var regex = new RegExp(/[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?[[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?]*[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+/);
      if (regex.test(input)){
      } else {
        alert('Merci d\'entrer un prénom valide');
      }
    });
    $('#birth').focusout(function(){
      var input = $('#birth').val();
      var regex = new RegExp();
      if (regex.test(input)){
      } else {
        alert('Merci d\'entrer un prénom valide');
      }
    });
    $('#placeOfBirth').focusout(function(){
      var input = $('#placeOfBirth').val();
      var regex = new RegExp(/[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?[[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?]*[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+/);
      if (regex.test(input)){
      } else {
        alert('Merci d\'entrer un prénom valide');
      }
    });
    $('#employ').focusout(function(){
      var input = $('#employ').val();
      var regex = new RegExp(/[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?[[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?]*[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+/);
      if (regex.test(input)){
      } else {
        alert('Merci d\'entrer un prénom valide');
      }
    });
    $('#society').focusout(function(){
      var input = $('#society').val();
      var regex = new RegExp(/[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?[[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ \-']?]*[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+/);
      if (regex.test(input)){
      } else {
        alert('Merci d\'entrer un prénom valide');
      }
    });
    $('#validate').click(function(){
      // Si les données saisies sont : "Jérôme OTT, 5/06/1990, Margny-lès-Compiègne, Formateur, Novei", la phrase de présentation sera : "Jérôme OTT, né le 5/06/1990 à Margny-lès-Compiègne, actuellement Formateur à Novei
      alert(($('#firstName').val())+ ' ' + ($('#lastName').val()) + ', ' + 'né(e) le ' + ($('#birth').val()) + ' à ' + ($('#placeOfBirth').val()) + ', actuellement ' + ($('#employ').val()) + ' à '+ ($('#society').val()));
    });
});
