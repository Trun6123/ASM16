var mongoose = require('mongoose');

//schema: khai báo, định nghĩa cấu trúc của bảng (tên các cột & kiểu dữ liệu tương ứng)
var FlycamSchema = mongoose.Schema({
    name: String,
    quantity: Number,
    price: Number,
    date: Date,
    image: String
});


const FlycamModel = mongoose.model('may bay', FlycamSchema, 'flycam');
module.exports = FlycamModel;