const app = require('express')();
global.email_notification = require('./events');

app.use('/', require('./SaleController'));
require('./EmailService');
app.listen(8000);