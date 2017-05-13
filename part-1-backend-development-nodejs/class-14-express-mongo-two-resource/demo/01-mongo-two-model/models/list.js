'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Note = require('./note')

const listSchema = Schema({
  name: {type: String, required: true},
  timeStamp: {type: Date, default: Date.now},
  notes: [{type: Schema.Types.ObjectId, ref: 'note'}]
})

const List = module.exports = mongoose.model('list', listSchema)

List.findByIdAndAddNote = function(id, note) {
  // note => req.body = {
  //  name: 'some name',
  //  content: 'some content'
  // }
  return List.findById(id)
  .then(list => {
    console.log(list);
    note.listId = list._id
    // note => req.body = {
    //  name: 'some name',
    //  content: 'some content',
    //  listId: 'some list._id'
    // }
    this.tempList = list // List.tempList = list returned from DB
    return new Note(note).save() // return the new note after saved in DB
  })
  .then(note => {
    this.tempList.notes.push(note._id)
    this.tempNote = note
    return this.tempList.save()
  })
  .then(() => this.tempNote)
  .catch(err => Promise.reject(err))
}
