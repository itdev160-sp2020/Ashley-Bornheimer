var messages = [];



var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};


var data = [
    {
        type: messageType.out,
        user: 'Ashley',
        message: 'Hey, you working out today?'
    },
    {
        type: messageType.in,
        user: 'Jenna',
        message: 'Hi, Ashley! Yes I am, Want to go together?'
    },
    {
        type: messageType.out,
        user: 'Ashley',
        message: "Let's Do It"
    }
];

function Message(type, user,message) {
    this.type=type;
    this.user=user;
    this.message = message;
}
function createMessageElement(message) {
    var messageText = document.createTextNode(
        message.user + ' : ' + message.message
    );
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    messageEl.className = message.type;

    return messageEl;
}

function addMessageHandler(event) {
    var user,type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

    switch (event.target.id) {
        case 'send-button':
            user = 'Ashley';
            type = messageType.out;
            break;
            default:
        case 'reply-button':
            user ='Jenna';
            type = messageType.unknown;
    }
    if (messageInput.value !='') {
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        var el = createMessageElement(message);

        messagesContainerEl.appendChild(el);

        messageInput.value = '';
        }
}
function loadSeedData() {
    for (var i = 0; i < data.length; i++) {
        var message = new Message(data [i].user, data[i].message);
        messages.push(message);
    }

    var messagesContainerEl = document.getElementById('message-container');

    for (var i = 0; i < data.length; i++) {
        var message = messages[i];
        var el = createMesageElement(message)

        messagesContainerEl.appendChild(el);
    }
}

var init = function() {
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    loadSeedData();
};

init();
