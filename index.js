var dotenv=require('dotenv')
dotenv.config()
const express=require('express')
const nodemailer=require('nodemailer')
const bodyParser=require('body-parser')
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extender:false}))

app.post('/api/form',(req,res)=>{
    
        const htmlEmail=`
        <h3>Contact Details</h3>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Sender Email: ${req.body.sender_email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            port:465,
            auth:{
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
            
        })

        let mailOptions={
            from: req.body.sender_email,
            to:req.body.reciever_email,
            replyTo:req.body.sender_email,
            subject:req.body.subject,
            text:req.body.message,
            html:htmlEmail
        }

        for(i=0;i<99;i++){
        transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
                return console.log(err)
            }
            console.log('Message sent %s', req.body)
            
        })
    }
    
})

const port=process.env.PORT || 3001

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})