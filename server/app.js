const WebSocket = require('ws');

// Create WebSocket on the Server side
const wss = new WebSocket.Server ({ port: process.env.PORT || 8989 })

// List of users currently 'online'.
const users = []


// Send every client connected to the server the new information
const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws){
      client.send(JSON.stringify(data))
    }
  })
}

// When a connection is established to the server, run this function.
wss.on('connection', (ws) => {
  let index;

  // When a message is recieved on the server, run this function.
  ws.on('message', message => {

    // Parse the JSON file to look for the action to dispatch
    const data = JSON.parse(message)
    switch(data.type){
      case 'ADD_USER':
      case 'CREATE_USER':
      {

        // Set current index to the last element in the users array.
        index = users.length

        // If we're adding a user, push it into the array with it's username and increment it's user id.
        users.push({
          name: data.name,
          id: index + 1
        })

        // Send the client WebSocket the updated Users List by attaching the users array in the JSON.
        ws.send(JSON.stringify({
          type: 'USERS_LIST',
          users
        }))

        // Send every client connected to the server the new User List
        broadcast({
          type: 'USERS_LIST',
          users
        }, ws)
        break
      }

      // Send every client connected to the server the new message
      case 'ADD_MESSAGE':
      broadcast({
        type: 'ADD_MESSAGE',
        message: data.message,
        user: data.user
      }, ws)
        break

      // Since the server is constantly looking for a message to made,
      // don't do anything if nothing has occurred.
      default:
        break
    }
  })

  // Once the connection between server and client has closed,
  // remove the user from the users array and return the updated array.
  ws.on('close', () => {
    users.splice(index, 1)

    // Send every client connected to the server the new User List.
    broadcast({
      type: 'USERS_LIST',
      users
    }, ws)
  })
})
