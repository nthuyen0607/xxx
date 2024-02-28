const textModels = require("./models")
const createText = async (req, res)=>{
    const {text} = req.body;
    const result = await textModels.create({text})
    res.json({
        result
    })
}

const getText = async (req, res)=>{
    const result = await textModels.aggregate([{ $sample: { size: 1 } }]);
  
    res.json({
        message:"GET data successfully",
        result: result[0]
    })
}

module.exports = {
    getText, createText
}