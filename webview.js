import path from 'path';

module.exports = (Franz) => {
  const getMessages = () => {
    const updates = parseInt(document.querySelector('i#sr-last-counter').textContent);
    let messages = 0;

    const conversations = document.querySelectorAll('.chat-counter:not(.d-none)').length;
    if (conversations == 0) {
      messages = 0;
    } else {
      for (var i = 0; i < conversations; i++) {
        messages += parseInt(document.querySelectorAll('.chat-counter:not(.d-none)')[i].textContent);
      }
    }

    Franz.setBadge(messages, updates);
  };

  Franz.injectCSS(path.join(__dirname,'service.css'));
  Franz.loop(getMessages);
};
