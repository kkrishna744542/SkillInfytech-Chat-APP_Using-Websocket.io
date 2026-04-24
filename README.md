# Real-Time Chat App

A real-time chat application built with Node.js, Express, and Socket.IO.

## Features

- **Real-time Messaging**: Messages are sent and received instantly using WebSockets
- **Online Users Display**: See who's currently online in the chat
- **System Notifications**: Get notified when users join or leave the chat
- **User Tracking**: Automatically tracks connected and disconnected users

## Project Structure

```
Real-Time chat app event/
├── Backend/
│   └── server.js          # Express server with Socket.IO configuration
├── Public/
│   └── index.html         # Frontend HTML with chat interface
├── package.json           # Project dependencies
└── README.md             # This file
```

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Navigate to the project directory:
   ```bash
   cd "Real-Time chat app event"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

1. Navigate to the Backend folder:
   ```bash
   cd Backend
   ```

2. Start the server:
   ```bash
   node server.js
   ```

3. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## How to Use

1. When you open the application, you'll be prompted to enter your username
2. Type your message in the input field and click "Send"
3. All connected users will see your message in real-time
4. The online users list on the left shows all active users (with 🟢 indicator)
5. System messages notify when users join or leave

## Technologies Used

- **Backend**: Node.js, Express.js
- **Real-time Communication**: Socket.IO
- **Frontend**: HTML5, CSS3, JavaScript
- **Server Port**: 3000

## How It Works

- **Connection**: When a user connects, they emit a 'user joined' event with their username
- **Messaging**: Messages are broadcasted to all connected users via 'chat message' event
- **Status Updates**: User list is updated for all clients whenever someone joins/leaves
- **Disconnection**: When a user disconnects, their username is removed from the online list

## Files Description

### Backend/server.js
- Sets up Express server on port 3000
- Configures Socket.IO for real-time communication
- Handles connection, messaging, and disconnection events
- Serves static files from the Public folder

### Public/index.html
- Provides the chat interface
- Displays online users list
- Shows chat messages
- Handles user input and Socket.IO events

## Troubleshooting

If the server doesn't start:
- Make sure port 3000 is not in use
- Verify Node.js is installed: `node --version`
- Check that all dependencies are installed: `npm install`

## Future Enhancements

- User authentication
- Private messages
- Message history storage
- User profiles
- Typing indicators
- Message timestamps
- Chat rooms/channels
