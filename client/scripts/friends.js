// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  $friends: $('#friends'),

  storage: [],

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  addFriend: (event) => {
    var friendName = event.currentTarget.innerText;
    if (!Friends.storage.includes(friendName)) {
      Friends.storage.push(friendName);
    }

    Friends.renderFriendList();
  },

  renderFriendList: () => {
    $('#friendsList').empty();

    for (var x = 0; x < Friends.storage.length; x++) {
      $friend = $('<div class="newFriend"></div>');
      $friend.text(Friends.storage[x]);
      $friend.appendTo('#friendsList');

    }
  }
};