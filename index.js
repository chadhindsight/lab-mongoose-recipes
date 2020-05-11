const mongoose = require('mongoose');
const data = require('./data.json');
// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

// Recipe.create({
//   title: 'Curry Goat',
//   ingredients: 'goat meat, curry powder, onions, love',
//   cuisine: 'Caribbrean',
//   dishType: 'main_course',
//   duration: 45,
//   creator: 'Valerie Salmon'
// }).then(res => console.log(res)).catch(err => console.log(err))

// Recipe.insertMany(data)

console.log(Recipe.find({},(err, recipes) => {
  err ? console.log(err) :
    recipes.forEach(recipe => {
      console.log(recipe.title)
    })
}))