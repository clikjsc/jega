export default (function () {
  if (typeof window === 'undefined') {
    return null;
  }
  const existingElement = document.querySelector('df-messenger');
  if (existingElement) {
    return null; // Already added
  }

  const dfMessenger = document.createElement('df-messenger');
  dfMessenger.setAttribute('location', 'asia-southeast1');
  dfMessenger.setAttribute('project-id', 'gen-lang-client-0221178501');
  dfMessenger.setAttribute('agent-id', 'b71dcb6b-58eb-4ca1-9f6b-57d513928b8d');
  dfMessenger.setAttribute('language-code', 'vi');
  dfMessenger.setAttribute('max-query-length', '-1');

  const chatBubble = document.createElement('df-messenger-chat-bubble');
  chatBubble.setAttribute('chat-title', 'Jegavn_marketing_proactive');
  dfMessenger.appendChild(chatBubble);

  document.body.appendChild(dfMessenger);

  const style = document.createElement('style');
  style.textContent = `
    df-messenger {
      z-index: 999;
      position: fixed;
      --df-messenger-font-color: #000;
      --df-messenger-font-family: Google Sans;
      --df-messenger-chat-background: #f3f6fc;
      --df-messenger-message-user-background: #d3e3fd;
      --df-messenger-message-bot-background: #fff;
      bottom: 16px;
      right: 16px;
    }
  `;
  document.head.appendChild(style);

  return null;
})();
