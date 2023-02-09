// const router = require('express').Router()
// const places = require('../models/places.js')
// const router = require('express').Router()
// const db = require('../models')

// //Index Route
// router.get('/', (req, res) => {
//   db.Place.find()
//   .then((places) => {
//     res.render('places/index', { places })
//   })
//   .catch(err => {
//     console.log(err)
//     res.render('error404')
//   })
// })

// //new page
// router.get('/new', (req, res) => {
//   res.render('places/new')
// })

// //Post Route
//   router.post('/', (req, res) => {
//     db.Place.create(req.body)
//     .then(() => {
//         res.redirect('/places')
//     })
//     .catch(err => {
// if (err && err.name == 'ValidationError') {
//     let message = 'Validation Error: '
//     for (var field in err.errors) {
//         message += `${field} was ${err.errors[field].value}. `
//         message += `${err.errors[field].message}`
//     }
//     console.log('Validation error message', message)
//     res.render('places/new', { message })
// }
// else {
//     res.render('error404')
// }
//     })
// })






// //show page
// router.get('/:id', (req, res) => {
//     // db.Place.findById(req.params.id)
//     db.Place.findById({_id: req.params.id})
//     .populate('comments')
//     .then(place => {
//       console.log(place.comments)
//         res.render('places/show', { place })
//     })
//     .catch(err => {
//         console.log('err', err)
//         res.render('error404')
//     })
// })

// //edit button
// router.get('/:id/edit', (req, res) => {
//   console.log('hello')
//   res.send('GET edit form stub')
// })



// //replace or update page
// router.put('/:id', (req, res) => {
//   res.send('PUT /places/:id stub')
// })

// // * DELETE button
// router.delete('/:id', (req, res) => {
//   db.Place.findByIdAndDelete(req.params.id)
//   .then(() => {
//       res.redirect('/places')
//   })
//   .catch(err => {
//       console.log('err', err)
//       res.render('error404')
//   })
//   // res.send('PUT /places/delete stub')
// })




//   router.post('/:id/comment', (req, res) => {
//     console.log(req.body)
//     db.Place.findById(req.params.id)
//     .then(place => {
//         db.Comment.create(req.body)
//         .then(comment => {
//             place.comments.push(comment.id)
//             place.save()
//             .then(() => {
//                 res.redirect(`/places/${req.params.id}`)
//             })
//         })
//         .catch(err => {
//             res.render('error404')
//         })
//     })
//     .catch(err => {
//         res.render('error404')
//     })
// })








// // router.post('/:id/rant', (req, res) => {
// //   res.send('GET /places/:id/rant stub')
// // })



// router.delete('/:id/rant/:commentId', (req, res) => {
//     res.send('GET /places/:id/rant/:rantId stub')
// })

// module.exports = router
// * Creating Router
const router = require('express').Router()
const db = require('../models')

// * INDEX Page
router.get('/', (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render('places/index', {places}) //renders to index page
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})
// * NEW page
router.get('/new', (req, res) => {
  res.render('places/new')
})

// * CREATE NEW Page
router.post('/', (req, res) => {
  // Default image if one is not provided
  if (!req.body.pic) {
          req.body.pic = undefined
      }
      if (!req.body.city) {
          req.body.city = undefined
      }
      if (!req.body.state) {
          req.body.state = undefined
      }
  // res.send('POST /places stub')
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = 'ValidationError: '
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}.`
          message += `${err.errors[field].message}.`
        }
        console.log('Validation error message', message)
        res.render('places/new', {message})
      } else {
        res.render('error404')
      }
    })
})

// * SHOW page
router.get('/:id', (req, res) => {
  // res.send('GET /places/:id stub')
  db.Place.findById({_id: req.params.id})
    .populate('comments') // populate comments
    .then(place => {
      console.log(place.comments)
      res.render('places/show', {place})
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})






// * REPLACE OR UPDATE page
router.put('/:id', (req, res) => {
res.send('PUT /places/:id stub')
})

// * DELETE button
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
  // res.send('PUT /places/delete stub')
})


// * EDIT button
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

// * POST COMMENT
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  // * using ternary operator for the checkbox
  if (req.body.rant) {
    req.body.rant = true
  }
  else {
    req.body.rant = false
  }
    db.Place.findById(req.params.id)
      .then(place => {
       // Create comment (Done)
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
              .then(() => {
                    // res.send('GET /places/:id/rant stub')
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
})

router.delete('/:id/rant/:commentId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')

})

module.exports = router
