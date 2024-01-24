const  config = {
    user:  'Sa1', // sql user
    password:  '123456', //sql user password
    server:  '127.0.0.1', // if it does not work try- localhost
    database:  'AdventureWorksDW2019',
    options: {
      trustedconnection:  true,
      enableArithAbort:  true,
      instancename:  'SQLEXPRESS'  // SQL Server instance name
    },
    port:  55892
  }
  
  module.exports = config;
  