var mongoose = require('mongoose');

var Genre = mongoose.Genre;

var GenreSchema = new Schema(
  {
    Genre: {type: String, required: true, min: 3, max: 100}
  }
);

// Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);