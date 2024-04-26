
const Books = require('../Model/Book')

exports.getData = async (req,res)=>{
    try {
        const data = await Books.find() 
        return res.json({
            errors:false,
            data:data
        })
    } catch (error) {
        return res.status(400).json({
            errors:true,
            message:error.message
        })
    }
}

exports.postData = async (req,res)=>{
    try {
        const data = await Books.create(req.body);
        return res.json({
            errors:false,
            data:data
        })
    } catch (error) {
        return res.status(400).json({
            errors:true,
             message:error.message
        })
    }
}

exports.putData = async (req,res)=>{
    try {
        const data = await Books.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.json({
            errors:false,
            data:data
        })
    } catch (error) {
        return res.status(400).json({
            errors:true,
             message:error.message
        })
    }
}

exports.deleteData = async (req,res)=>{
    try {
        const data = await Books.findByIdAndDelete(req.params.id);
        return res.json({
            errors:false,
            data:data
        })
    } catch (error) {
        return res.status(400).json({
            errors:true,
             message:error.message
        })
    }
}
