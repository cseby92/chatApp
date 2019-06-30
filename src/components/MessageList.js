import React from 'react';

const DUMMY_DATA = [
  {
    senderId: 'perBorgen',
    text: 'Hello fren!!!!'
  },
  {
    senderId: 'John Snow',
    text: 'Hello world!!'
  },
  {
    senderId: 'perBorgen',
    text: 'Whats up?'
  }
]

class MessageList extends React.Component {
  render() {
    return (
      <div className="message-list">
        {DUMMY_DATA.map((message, index) => {
          return (
            <div> {message.text}</div>
          )
        })}
      </div>
        )
  }
}

export default MessageList;
