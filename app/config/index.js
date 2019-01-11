const configValue =  require("./config");

module.exports = {
    getDatabaseConnectionString:()=> 'mongodb://' + configValue.userName + ':' + configValue.password + '@ds153394.mlab.com:53394/dev_rmd'
}