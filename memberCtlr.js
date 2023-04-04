var member = require('./models/member')
var _ = require('lodash')

function memberCtlr(){

    //ADD
    this.addmember = function (body, res){

        var newM = {
            member_id: body.member_id,
            fname: body.fname,
            lname: body.lname,
            mname: body.mname
        }

        var newmember = member(newM);
        newmember.save((err,result)=>{
            res.send("Data successfully added!")
        });
    }

    this.getallmember = function (res){
        member.find({}).exec((err, result) => {
            if (!_.isEmpty(result)) {
                res.send(result)
            }else{
             res.send("No record")
             console.log("sample")
            }     
        });
    }


    //GET
    this.getmember = function (id, res) {

        // WORKING TO
        member.findOne({member_id:id}).exec((err, result) => {
            if (!_.isEmpty(result)) {
                res.send(result.fname)
            }else{
             res.send("No record")
            }     
        });

        //GET DATA WITH SAME ID
        // member.find({member_id: id}, function(err, result) {
        //     if (!_.isEmpty(result)) {
        //         res.send(result.map((result) => result));
        //     }else{
        //         res.send("No record")
        //     }    
        //   });
          

    }

    //UPDATE
    this.updatemember = function(body, res){

        var updatedM = {
            member_id: body.member_id,
            fname: body.fname,
            lname: body.lname,
            mname: body.mname
        }
          
        member.findOneAndUpdate({member_id: body.member_id}, updatedM, {new:true, upsert:true}, (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else {
                if (result) {
                    res.send("Successfully updated!");
                } else {
                    res.status(404).send("No record found.");
                }
            }
        });
    }

    //DELETE
    this.deletemember = function(id, res){
        member.findOneAndDelete({member_id:id}).exec((err, result) => {
            if (!_.isEmpty(result)) {
                res.send("Successfully deleted!")
            }else{
                res.send("No record")
            }         
        });

    }
    
}
module.exports = new memberCtlr()