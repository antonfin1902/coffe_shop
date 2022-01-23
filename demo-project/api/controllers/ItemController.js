/**
 * ItemController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    deleteItem:async(req,res)=>{

       let idDeltedItem=req.params.id
        // console.log(res)

        deletedItem=await Item.destroy({id:idDeltedItem}).fetch()
        return res.json(deletedItem)
    },
    createItem:async(req,res)=>{
        let {catgory,name,price}=req.body
        let {menuId}=req.params
      console.log("here in item")
      console.log(req.body)
      // / let newPassword=await _.sails.helpers.passwords.hashPassword(password)
        let newItem =await Item.create({price,catgory,name,menu_id:menuId}).fetch()
        // return res.json(req.body)
        return res.json(newItem)
        
        } 
        ,ShowItems:async(req,res)=>{
            let listItems =await Item.find()
            // return res.json(req.body)
            return res.json(listItems)
        },
         editItem:async(req,res)=>{
            let {price}=req.body
            let {itemId}=req.params
          console.log("here in item")
          console.log(req.body)
          price=parseInt(price)
          let id=parseInt(itemId)
          console.log(req.params)
          // / let newPassword=await _.sails.helpers.passwords.hashPassword(password)
           let updatedItem= await Item.updateOne({ id:id })
           .set({
             price
           });
           
            // return res.json(req.body)
            return res.json(updatedItem)
            
            } 
        

};

