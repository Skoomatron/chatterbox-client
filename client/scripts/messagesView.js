// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    // TODO: Perform any work which needs to be done
    // when this view loads.

  },

  render: function() {
    $('#messageBox').empty();
    this.$chats.empty();
    for (var key in Messages.storage) {
      var $nextMessage = this.renderMessage(Messages.storage[key]);
      this.$chats.prepend($nextMessage);
    }

  },

  renderMessage: function(message) {
    var $message = $('<div class="singleMessage"></div>');

    var $username = $('<div  class="username"></div>');
    $username.click(Friends.addFriend);
    $username.text(`${message.username}`);

    var $text = $('<div class="text"></div>');
    $text.text(`${message.text}`);

    var $name = $('<div class="text"></div>');
    $name.text(`${message.name}`);

    // var $roomname = $('<div class="message"></div>');
    // $message.text(`${message.roomname}`);
    $username.appendTo($message);
    $text.appendTo($message);
    $name.appendTo($message);
    //$('#messageBox').append($message, $username, $text);
    $('#messageBox').prepend($message);

    //$message.append($text);
    return $message;
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  },

  friendClick: function(event) {

  }


};

$('.refresh').on('click', function(event) {
  console.log('refresh click');
  $('#messageBox').empty();
  MessageView.render();
});