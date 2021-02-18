const Sale = require('./model')

const createSale = (req, res) => {
  const newSale = new Sale(req.body)
  newSale.save((error, saleSaved) => {
    if (error) {
      console.error('Error saving sale ', error)
      res.status(500).send(error)
    } else {
      res.send(saleSaved)
    }
  })
}

const getSale = (req, res) => {
  Sale.findById(req.params.id, (error, book) => {
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
