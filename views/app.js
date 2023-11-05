const Vue = window.Vue;

const username = sessionStorage.getItem('username');

if (username) {
    console.log('Username:', username);
  } else {
    console.log('Username not found in sessionStorage.');
  }

new Vue({
  el: '#app',
  data: {
    message: '',
    messages: [],
    socket: null,
  },
  created() {
    this.socket = io('http://localhost:3000/');
    this.socket.on('msgToClient', message => this.onMessageReceived(message));
  },
  methods: {
    sendMessage() {
      const trimmedMessage = this.message.trim();

      if (trimmedMessage.length) {
        this.socket.emit('msgToServer', trimmedMessage);
        this.message = '';
      }
    },

    onMessageReceived(message) {
      this.messages.push(message);
    },
  },
});
