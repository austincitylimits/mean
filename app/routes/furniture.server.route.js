var pieces = require('../controllers/piece.server.controller');

module.exports = function(app) {
    app.route('/api/pieces')
    .get(pieces.list)
    .post(pieces.create);
    
    app.route('/api/pieces/:pieceId')
    .get(pieces.read)
    .put(pieces.update)
    .delete(pieces.delete);
    
    app.param('pieceId', pieces.pieceByID);
    
};