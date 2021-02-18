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

const getDetails = (req, res) => {
  let query = req.query;
  if (req.query.name) {
    query = { name: new RegExp(`.*${req.query.name}.*`, 'i') };
  }

  Detail.find(query, (error, details) => {
    if (error) {
      res.status(404).send(error);
    } else {
      res.send(details);
    }
  })
}


module.exports = { createDetail, getDetails }
