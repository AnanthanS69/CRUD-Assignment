const express=require('express');
const dataset=require('./dataset.json')
const router=express.Router();
const app=new express();
var fs=require('fs');

router.use(express.json());
router.use(express.urlencoded({extended:true}));
router.get('/',(req,res)=>{
    res.send(dataset);
})
router.post('/add',(req,res)=>{
    dataset.push({
        "Name" : "Nims",
        "Patient Count" : "580",
        "Location" : "Kollam",
    });
    res.send(dataset);
})
router.put('/update/:ind',(req,res)=>{
    for (var i = 0; i < dataset.length; i++) {
        if (dataset[i].Name === 'Kims') {
          dataset[i]['Patient Count'] = "800";
          break;
        }
      }
      res.send(dataset);
})
router.delete('/delete/:ind',(req,res)=>{
        delete dataset[1];
        res.send(dataset);
})
module.exports=router;