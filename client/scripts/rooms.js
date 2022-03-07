// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  storage: new Set(),

  addRoom: function(room) {

    room && this.storage.add(room);

    var roomname = $('#message').val();
    roomname.length > 0 && this.storage.add(roomname);
  },

  updateRooms: function() {
    // add all rooms to drop down

    this.storage.forEach((room) => {
      var $currentRoom = $('<option></option>'); // looking at syntax, taking 5, brb
      $currentRoom.text(room);
      $('#lobby').append($currentRoom);
    });
  },

  selectRoom: function() {

  },

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
};

$('.addRoomButton').on('click', () => {
  Rooms.addRoom();
  Rooms.updateRooms();
  console.log(Rooms.storage);
});