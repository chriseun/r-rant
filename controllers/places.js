// const router = require('express').Router()
// const places = require('../models/places.js')
const router = require('express').Router()
const db = require('../models')

//Index Route
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

//Post Route
  router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
if (err && err.name == 'ValidationError') {
    let message = 'Validation Error: '
    for (var field in err.errors) {
        message += `${field} was ${err.errors[field].value}. `
        message += `${err.errors[field].message}`
    }
    console.log('Validation error message', message)
    res.render('places/new', { message })
}
else {
    res.render('error404')
}
    })
})




//new page
router.get('/new', (req, res) => {
  res.render('places/new')
})

//show page
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})



// router.get('/:id', (req, res) => {
//   res.send('GET /places/:id stub')
//   console.log('hello')
// })

// * SHOW page
// router.get('/:id', (req, res) => {
//   // res.send('GET /places/:id stub')
//   db.Place.findById({_id: req.params.id})
//     .populate('comments') // populate comments
//     .then(place => {
//       console.log(place.comments)
//       res.render('places/show', {place})
//     })
//     .catch(err => {
//       console.log('err', err)
//       res.render('error404')
//     })
// })


//replace or update page
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})


//edit button
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})



router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})



router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
