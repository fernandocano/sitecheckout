var PageView = require('./base');
var templates = require('../templates');


module.exports = PageView.extend({
    pageTitle: 'checkout',
    template: templates.pages.checkout
});
