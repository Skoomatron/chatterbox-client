// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    console.log(window.location);


    var message = {
      username: App.username,
      text: $('#message').val(),
      roomname: $('#lobby').val()
    };
    Parse.create(message);
    console.log('click!');
    App.fetch();

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status); // 'disabled' to 'enabled'
  }

};

// <script> for (var x = 0; x < 50; x++) {console.log('bbbbeeeeeeeeeeeeeeeessssssss!!!!);} </script>