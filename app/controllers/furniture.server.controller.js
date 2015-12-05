var Piece = require("mongoose").model('Piece');

var getErrorMessage = function(err) 
{
    if (err.error) {
        for (var errName in err.error)
        {
            if(err.error[errName].message)
            return err.error[errName].message;
            }
        } else {
        return 'Unknown error';
    }
};

exports.create = function(req, res)
{
    var piece =  new Piece(req.body);
    piece.save(function(err) {
        if (err) {
            return res.status(400).send({
                message:getErrorMessage(err)
            });
        } else {
            res.json(piece);
        }
    });
};

exports.list = function(req, res) {
    Piece.find().sort('-datePosted')
     .exec(function(err, pieces){
         console.log(err);
        if (err){
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(pieces);
        }
    });
};

exports.pieceByID = function(req, res, next, id) {
    Piece.findById(id)
    .exec(function(err, piece) {
        if (err) return next (err);
        if(!piece) return next(new Error ('failed to load piece' + id));
        req.piece = piece;
        next();
    });
};

exports.read = function(req, res) 
{
    res.json(req.piece);
};

exports.update = function(req, res) 
{
    var piece = req.piece;
    piece.artisan = req.body.artisan;
    piece.datePosted = req.body.datePosted;
    piece.descriptionBody = req.body.descriptionBody;
    piece.pieceTitle = req.body.pieceTitle;
    piece.price = req.body.price;
    piece.ImgURL = req.body.ImgURL;
    
    piece.save(function(err)
    {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            return res.json(piece);
        }
    });
};

exports.delete = function(req, res) 
{
    var piece = req.piece;
    
    piece.remove(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(piece);
        }
    });
};