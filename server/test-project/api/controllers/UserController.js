/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
getUser:async(req,res)=>{
let users =await User.find()
return res.json(users)

}  
,getUserId:async(req,res)=>{
    console.log("in getUser")
    console.log(req.params)
    let {userId}=req.params

    userId=parseInt(userId)
    // console.log(id)
    let users =await User.find({id:userId})
    return res.json(users)
    
    } 
    ,updateUserId:async(req,res)=>{
        console.log("in getUser")
        console.log(req.params)
        let {userId}=req.params
    
        userId=parseInt(userId)
        // console.log(id)
        let users =await User.find({id:userId})
        var updatedUser = await User.updateOne({ id:userId})
.set({
  vip:true
});
        return res.json(updatedUser)
        
        } ,
        viewUserId:async(req,res)=>{
            console.log("in getUser")
            console.log(req.params)
            let {userId}=req.params
        
            userId=parseInt(userId)
            // console.log(id)
            let users =await User.find({id:userId})
            return res.view('')
            
            }     

};

