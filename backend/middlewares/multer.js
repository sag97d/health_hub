import multer from 'multer'


// without giving destination:{} it would be stored in a memory
const storage = multer.diskStorage({
    filename: function(req, file, callback){
        return callback(null, file.originalname)
    }
})

const upload = multer({storage});

export default upload