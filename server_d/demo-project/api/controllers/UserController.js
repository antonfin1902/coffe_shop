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
,createUser:async(req,res)=>{
  let {emailAddress,fullName,password}=req.body
console.log("here")
console.log(req.body)
// / let newPassword=await _.sails.helpers.passwords.hashPassword(password)
  let newUser =await User.create({password,emailAddress,fullName}).fetch()
  // return res.json(req.body)
  return res.json(newUser)
  
  } ,
  createVipUser:async(req,res)=>{
    let {emailAddress,fullName,password}=req.body
  console.log("here")
  console.log(req.body)
  // / let newPassword=await _.sails.helpers.passwords.hashPassword(password)
    let newUser =await User.create({password,emailAddress,fullName,vip:true}).fetch()
    // return res.json(req.body)
    return res.json(newUser)
    
    } ,
  createAdmin:async(req,res)=>{
    let {emailAddress,fullName,password}=req.body
  console.log(_)
    let newUser =await User.create({password,emailAddress,fullName,admin:true}).fetch()
    return res.json(newUser)
    return(res.json("hello"))
    
    } ,
    


getUserId:async(req,res)=>{
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
            
            } ,loginUser:async(req,res)=>{
              let {emailAddress,password}=req.body
              let newUser =await User.findOne({emailAddress})
              if (password==newUser.password){
              let data={id:newUser.id,vip:newUser.vip,admin:newUser.admin}
              return  res.json(data)}
              else{
                res.status(401)
                return res.send("wrong email or password")
              }



            }    

};

