const Detail = require('./model')

const createDetail = (req, res) => {
  const newDetail = new Detail(req.body);
  newDetail.save((error, detailSaved) => {
    if (error) {
      console.error('Error saving detail ', error)
      res.status(500).send(error)
    } else {
      res.send(detailSaved)
    }
  })
}

const deleteBook = (req, res) => {
  Book.findByIdAndDelete(req.params.id, (error, result) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.send(result)
    }
  })
}

const getBook = (req, res) => {
  Book.findById(req.params.id, (error, book) => {
    if (error) {
      res.status(500).send(error)
    } else if (book) {
      res.send(book)
    } else {
      res.status(404).send({})
    }
  })
}

const getBooks = (req, res) => {
  let query = req.query
  if (req.query.name) {
    query = { name: new RegExp(`.*${req.query.name}.*`, 'i') }
  }

  Book.find(query, (error, books) => {
    if (error) {
      res.status(404).send(error)
    } else {
      res.send(books)
    }
  })
}

const updateBook = (req, res) => {
  Book.updateOne({ _id: req.params.id }, req.body, (error, result) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.send(result)
    }
  })
}

module.exports = { createBook, deleteBook, getBook, getBooks, updateBook }
