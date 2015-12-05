var mongoose = require("mongoose"), Schema = mongoose.Schema;

var PieceSchema =  new Schema({
    artisan: {
        type: String,
    },
    datePosted: {
        type: Date,
        default: Date.now()
    },
    descriptionBody: {
        type: String,
    },
    pieceTitle: {
        type: String,
    },
    price: {
        type: Number,
    },
    ImgURL: {
        type: String,
    }
});


mongoose.model('Piece', PieceSchema);