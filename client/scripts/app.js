// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'Twercules',

  initialize: function() {
    App.username = window.location.search.substr(10) || App.username;

    // FormView.initialize();
    // RoomsView.initialize();
    // MessagesView.initialize();
    // rooms.updateRooms();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch();
    App.stopSpinner();

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },
  fetch: function() {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      for (let message of data) {
        Messages.addMessage(message);
        Rooms.addRoom(message.roomname);
      }
      MessagesView.render();
      Rooms.updateRooms();
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};