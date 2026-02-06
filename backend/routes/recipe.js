import express from "express";
import dotenv from "dotenv";

import Recipe from "../models/Recipe.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/",protect, async (req,res) =>{
    const {title, ingredients, instruction, category, photoUrl, cookingTime} = req.body;

try{
if(!title || !ingredients || !instruction || !category || !photoUrl || !cookingTime){
    return res.status(400).json({message:"Please fill all fields"});
}
const recipe = await  Recipe.create({
    title,
    ingredients,
    instructions,
    category,
    cookingTime,
    photoUrl
})
res.status(201).json(recipe)
} 
 catch(err){
    res.status(500).json({message:"Server error"})

}
})



router.get("/",async(req,res)=>{
    const{category}= req.query
    try{
        const query = category ? {category} : {};
        const recipe =await Recipe.find(query);
        res.json(recipe)
    }
    catch(error) {
        res.status(500).json({message:"Server error"})
    }
})

router.get("/:id", async(req,res)=> {
    try{
          const recipe = await Recipe.findById(req.params.id);
          if(!recipe){
            return res.status(400).json({message:"Recipe not Found"})
          }
          res.json(recipe)
    }
    catch(err){
        res.status(500).json({message:"Server error"})
    }
  
})


router.put("/:id",protect, async(req,res)=>{
    const {title, ingredients, instruction, category, photoUrl, cookingTime} = req.body;
    
    try{
         const recipe = await Recipe.findById(req.params.id);
          if(!recipe){
            return res.status(400).json({message:"Recipe not Found"})
          }
        recipe.title = title || recipe.title;
        recipe.ingredients = ingredients || recipe.ingredients;
        recipe.instructions = instructions || recipe.instructions;
        recipe.category = category || recipe.category;
        recipe.photoUrl = photoUrl || recipe.photoUrl;
        recipe.cookingTime = cookingTime || recipe.cookingTime

        const updatedRecipe = await recipe.save();
        res.json(updatedRecipe)

    } catch(err){
 res.status(500).json({message:"Server error"})
    }
})

router.delete("/:id", protect,async (req,res)=>{
    try{
        const recipe = await Recipe.findById(req.params.id);
          if(!recipe){
            return res.status(400).json({message:"Recipe not Found"})
          }

          await recipe.deleteOne();
          res.json({message:"Recipe Deleted"})
    } catch(err){

        res.status(500).json({message:"Server error"})

    }
});
 export default router;