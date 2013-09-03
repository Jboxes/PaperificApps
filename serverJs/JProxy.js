var request = require("request");

var J = J || {};
J.Ark = J.Ark || {};
J.Ark.Proxy = function(ArkAddress,Data,callback){

    request.post(
    ArkAddress,
    { form: {q0:Data } },
    function (error, response, data) {
        if (!error && response.statusCode == 200) {
            callback(data);
        }else
        {
            callback({Success:false,ErrorMsg:"Server Unreachable"});
        }
    }  
    );
};

module.exports = J;
