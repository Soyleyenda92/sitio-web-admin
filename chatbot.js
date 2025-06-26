function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.className = sender === 'user' ? 'user-msg' : 'bot-msg';
  msg.innerHTML = `<span class="msg-bubble">${text}</span>`;
  document.getElementById('chatbot-messages').appendChild(msg);
  document.getElementById('chatbot-messages').scrollTop = document.getElementById('chatbot-messages').scrollHeight;
}

function simulateBotResponse(userInput) {
  // 1. Mostrar el efecto de "escribiendo..."
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'bot-msg';
  typingIndicator.id = 'typing-indicator';
  typingIndicator.innerHTML = `
    <div class="typing">
      <span>.</span><span>.</span><span>.</span>
    </div>`;
  document.getElementById('chatbot-messages').appendChild(typingIndicator);
  document.getElementById('chatbot-messages').scrollTop = document.getElementById('chatbot-messages').scrollHeight;

  // 2. Después de 2 segundos, eliminar el typing y mostrar la respuesta
  setTimeout(() => {
    typingIndicator.remove();
    const botResponse = getBotResponse(userInput); // función que genera la respuesta
    addMessage(botResponse, 'bot');
  }, 6000);
}
