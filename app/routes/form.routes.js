module.exports = function(app) {
    const { FormValidationRules } = require('../validation/form');

    var form = require('../controllers/form.controller.js');
    
    app.post('/form', FormValidationRules(), form.create);
}
