// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  storage: {},

  set: new Set(),

  addMessage: (message) => {
    newMessage = {
      username: message.username,
      text: message.text,
      roomName: message.roomname,
      name: message.github_handle,
    };

    Messages.storage[message.message_id] = newMessage;
    Messages.set.add(newMessage);
  },

  getUsername: (key) => {
    return Messages.storage[key].username;
  },

  getText: () => {
    return Messages.storage[key].text;
  },

  getRoomname: () => {

  }

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

};