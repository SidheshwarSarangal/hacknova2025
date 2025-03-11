import multer, { diskStorage } from 'multer';
import { extname } from 'path';

// Configure multer storage
const storage = diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Define upload folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + extname(file.originalname)); // Append timestamp to file name
    }
});

// Initialize multer with storage configuration
const upload = multer({ storage: storage });

export default upload;
