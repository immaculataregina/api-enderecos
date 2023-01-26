'use strict';

const indexRouter = require('./routers/index.router');
const enderecosRouter = require('./routers/enderecos.router');
const app = require('./init.app');

// Router
app.use('/', indexRouter);
app.use('/enderecos', enderecosRouter);

module.exports = app;