const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/restaurant-1.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/restaurant-2.jpg',
    founded: 2020
},{
      name: 'Sushi Ai',
    city: 'Long Beach',
    state: 'CA',
    cuisines: 'Sushi, Japanese',
    pic: '/images/restaurant-3.jpg',
    founded: 2020
}])

.then(() => {
  console.log('Success!')
  process.exit()
})
.catch(err => {
  console.log('Failure!', err)
  process.exit()
})
