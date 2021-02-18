const Client = require('./model')

const createClient = (req, res) => {
  const newClient = new Client(req.body)
  newClient.save((error, clientSaved) => {
    if (error) {
      console.error('Error saving client ', error)
      res.status(500).send(error)
    } else {
      res.send(clientSaved)
    }
  })
}

const getClient = (req, res) => {
  Client.findById(req.params.id, (error, book) => {
    if (error) {
      res.status(500).send(error)
    } else if (book) {
      res.send(book)
    } else {
      res.status(404).send({})
    }
  })
}

const getClients = (req, res) => {
  let query = req.query;
  if (req.query.name) {
    query = { name: new RegExp(`.*${req.query.name}.*`, 'i') };
  }

  Client.find(query, (error, clients) => {
    if (error) {
      res.status(404).send(error);
    } else {
      res.send(clients);
    }
  })
}

module.exports = { createClient, getClient, getClients };
