const mongoose=require('mongoose')
const Contact=mongoose.Schema({
  title:{
    type:String,
    require:true
  },
  mobile:{
        type: String,
        require: true
  },
  email:{
    type: String, 
    lowercase: true, 
    require: true 
  },
  loggedInEmail:{ 
    type: String, 
    lowercase: true, 
    require: true 
  }
})

module.exports=mongoose.model('Contact',Contact)