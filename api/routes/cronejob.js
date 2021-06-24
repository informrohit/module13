const express = require("express");
const cron = require("node-cron");
const router = express.Router();

router.post("/schedule",(_,res)=>{
    try {
        var d = new DataCue();
        var min = d.getMinutes();
        var date = d.getDate();
        var month = d.getMonth();
        var year = d.getHours();

        cron.schedule('${min + 1} ${hour} $(date} ${month+1}*',() =>{
            console.log('task completed at ${hour} : {min+1}');
        },
        {
            scheduled: true,
            timezone:"Asia/Kolkata",
        }
        );
        res.status(201).json({msg:"job Scheduled"});
        
    } catch (error) {
        
        res.status(500).send("server error")
    }

});


module.exports = router;