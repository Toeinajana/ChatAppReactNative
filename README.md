# Chatty is a chat app

This project is about React Native, NodeJS, Socket.io and MongoDB.

![Image description](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/62560247_2132913973485495_8959866713684312064_n.jpg?_nc_cat=103&_nc_ht=scontent-syd2-1.xx&oh=74c782524ea817656ebba0a2f8c2123d&oe=5D82B601)

** PS. I didn't have time to work on getting data from database and show, but it works and data is saved, frontend and backend are connected.

## Getting Started


### 1. Install MongoDB via home brew on mac
```
brew install mongodb
```

### 2. Go to server path inside Finalproject folder
```
cd server
```

#### 2.1 Install Express, cors,socket.io and mongoose in backend file
```
npm install express body-parser mongoose socket.io
```

- Start MongoDB
```
Mongod
```

#### 2.2 Install Nodemon
```
npm install -g nodemon
```

- Start Node server
```
nodemon 
```

### 3. Go to chat_app path inside Finalproject folder
```
cd chat_app
```

#### Install socket.io-client in frontend file
```
npm install socket.io-client
```

- Start React app
```
npm start 
```

- run on ios
```
react-native run-ios
```

- run on android
```
react-native run-android
```
