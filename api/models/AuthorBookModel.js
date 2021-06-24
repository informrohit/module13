'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const TodoSchema = new Schema({
      author: {
            type:String           
        },
        booktitle: {
          type:String
         
      }
      
    
    });

// create and export model
module.exports = mongoose.model("authorbooksmodels", TodoSchema);