import mongoose from "mongoose";
 
const recipeSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    ingredients:[{
        type:String,
        required:true,
    }],
    instructions:{
        type:String,
        require:true,

    },
    category:{
        type:String,
        require:true,
    },
    photoUrl:{
        type:String,
        require:true,
    },
    cootingTime:{
        type:Number,
        require:true,
    },    
}, {
    timestamps:true

});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;