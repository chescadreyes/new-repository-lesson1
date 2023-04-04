var About  = require('./models/about')
var _ = require('lodash')

function Controller() {


    this.getTest = function (res) {

        About.findOne()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                res.send("Error")
            } else {
               
                if (!_.isEmpty(result)) {
                    res.send(result.title)
                }else{
                    res.send("No record")
                }              
            }
        });

        
    }      
}

module.exports = new Controller()


 //  this.getAppInfo = function (res) {

    //     var info = {
    //         maintenance_mode: 0,
    //         app_current_version: ''
    //     }

    //     const fetchInfo = function () {
    //         return new Promise(function (resolve, reject) {
    //             General.findOne({})
    //                 .exec((err, result) => {
    //                     if (err) {
    //                         console.log(err)
    //                         var _err = { name: err.name };
    //                         reject(_err);
    //                     } else {
    //                         if (!_.isEmpty(result)) {
    //                             info.maintenance_mode = result.maintenance_mode,
    //                                 info.app_current_version = result.app_current_version
    //                         }
    //                         resolve()
    //                     }
    //                 });
    //         })
    //     }

    //     fetchInfo()
    //     .then(function () {
    //         res.json({ status: 1, info: info });
    //     })
    //     .catch(function (err) {
    //         console.log(err)
    //         res.json({ status: 0, message: err.name });
    //     })
    // }
