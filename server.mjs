import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import fs from 'fs'

import admin from "firebase-admin";
import multer from 'multer';



const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(
  cors({
    origin: [
      "http://localhost:3000", "https://eager-moccasins-hen.cyclic.app/" , "http://localhost:3001", "http://localhost:3002"],
       credentials: true,
  })
);



const productSchema = new mongoose.Schema(
    {
      name: { type: String },
      description: { type: String },
      price: { type: Number },
      code: { type: String },
      productimage :{type: String}
  
  
  
    });
  const productModel = mongoose.model('product', productSchema);
  
  
  
  ;

const storageConfig = multer.diskStorage({ // https://www.npmjs.com/package/multer#diskstorage
      destination: './uploads/',
      filename: function (req, file, cb) {
  
          console.log("mul-file: ", file);
          cb(null, `${new Date().getTime()}-${file.originalname}`)
      }
  })
  var upload = multer({ storage: storageConfig })
  
  
var serviceAccount ={
"type": "service_account",
"project_id": "new-ecommerce-709ea",
"private_key_id": "8f41ceb1246db901e1f71f6bf7158fcaba11424a",
"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCwevSiy4XzPuv2\nvSgNM6483Rk5yDOjWL7/9fli698GqAdvrfe9P4ip8bAskbw+oa0rn47z0CiMjMJQ\nXmBTXhG8v0IOuUQYizJblHPS9fQRLtt5uNeaq8CWClsfGVRWPT5pNHPx2OWQAHpx\n8HUrs5H1fi8BjWN3k+1OQDPYQJjfXt9WIgcmOeTfxHrJgVcJgyajxOZfHQ2dcNdr\n0BCkGtU0ymGKILL32fojMS/g/DgXbOf/Ib9XWVBRh5CHypttn7gCPrkzIFrTGZyR\nNVnioxgpFupNxm2AB8vs6MVTG+vwLLK5B/JMSpyJP0G0KzObsIlA7BCx7+HWLPtB\nf6ubO+JPAgMBAAECggEAKb/sv9aGCdWI3QZCw1zGi3+CyDikfrAv/z2hkdVbHagC\nmlj9krfFDO8wTlrrvaVh4kANAYDtFtL15S1ufEp0x8I3TmRlx6imcSPdgrrM0oPT\nSCiCWQToupYYmHLVkNFMQnc2NrCpHjf+v5WzInOIxBrl4+ge79r++NQXb8FYaP8T\n6DdmmrzLaMyN5LCHLwjrZyuo2ruh+RoFsnHVS+ZQAUx5hf9/Puq7t+wevM40TkcF\nkiz5/ImRI4oMi8Vim1o/NQ34IEv7hCs6DB3UClkJpgfJ6bO/YESBeBZoMJoxZ7Ns\n/e46JMXLywMkfwN4dJ9sjGbJ7qDcLwL3mcBUJbkKAQKBgQDjsiHMIAJ/m0Y5zcac\nUdwbI3olMB+J4Jt53Yg0Sq3HnAhKoeOM3+Kb/3OE9MdaUBH1H/cWXVmRyKFeN61e\nBhi244a6X+wA+0GG72GIR21d56FMi1dy6LJVeOhjisrHHkv0WJgAEOzWZq6JNPnc\nlIC2QeLyLSH4jY73+FfarZQ2MQKBgQDGawNrmZQGVL3QJ1jIdmVafg/XAXm8/RkE\nlQZ6X0+IDh3ZT2NeqAyXbMrEZtdTIxs3JSKIlprcsz/BaGNG5y7a0vFfBM3qFpwk\nkdiSVHSJ7KF5AzLbnViatBHQXMCZS9qW/XHtKaqk1XB/ZW9NHpHRvoSnzt0ORbmk\nwo1Mu8UAfwKBgF+HlPZ3V5UCKGyIERP0pEwejlib4B+QxKpUb5jA3DgrFq95TGcG\nZ6TbgDQAHsOdZGtbhec0Myge7NUCtxIDrMrOmvAG3pVq1Qsv09PBY/lJ/TqIG6By\nUJ/bomRhDsKLy4IwyVT9xOAPJJscRths1bOh4P2KQf5uJdWTtAhjWxOBAoGBAJQE\nnQaWCUE30moIEElrWWzKghKI/UIpJZKvgaeklnYO4eGNQboJb2s/M3yUo6lXlSPs\nRfjTMS/XYIZt0zG/oMqJdprFwL8SouT9EC0JZ+7EYikeY8BFfyXZkzh3GQ7C8YyW\nAXlFDhHtUAEZsJA9b9aiY9+ziGDvTvBEWpiVsv8NAoGATeu0IramNC2utt5dRO4p\neb9realneeBSK7Z3TRklXrNi7YCiF3a6N4WCw0wcmN4DB/HJcnt6NhlMLXMymi76\n4Vq+FWIyAoWfsCbFfS50F15jfu5iP5NFeq0qbCoJDxiiJZSxTPklINYlBPbtsvWo\nIIxkUAxkwXA30d5tC0EwBME=\n-----END PRIVATE KEY-----\n",
"client_email": "firebase-adminsdk-jf1na@new-ecommerce-709ea.iam.gserviceaccount.com",
"client_id": "103789160977095878812",
"auth_uri": "https://accounts.google.com/o/oauth2/auth",
"token_uri": "https://oauth2.googleapis.com/token",
"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jf1na%40new-ecommerce-709ea.iam.gserviceaccount.com",
"universe_domain": "googleapis.com"
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://new-ecommerce-709ea.firebaseio.com" //apni project ki id lgo
});

const bucket = admin.storage().bucket("gs://new-ecommerce-709ea.appspot.com");










app.post("/product", upload.any(), async (req, res) => {
  console.log("product received", req.body);

  console.log("files", req.files[0]);

  bucket.upload(
    req.files[0].path,
    {
      destination: `productPhotos/${req.files[0].filename}`, // give destination name if you want to give a certain name to file in bucket, include date to make name unique otherwise it will replace previous file with the same name
    },
    function (err, file, apiResponse) {
      if (!err) {
        // console.log("api resp: ", apiResponse);

        // https://googleapis.dev/nodejs/storage/latest/Bucket.html#getSignedUrl
        file
          .getSignedUrl({
            action: "read",
            expires: "03-09-2491",
          })
          .then(async (urlData, err) => {
            if (!err) {
              console.log("public downloadable url: ", urlData[0]); // this is public downloadable url

              // delete file from folder before sending response back to client (optional but recommended)
              // optional because it is gonna delete automatically sooner or later
              // recommended because you may run out of space if you dont do so, and if your files are sensitive it is simply not safe in server folder
              try {
                fs.unlinkSync(req.files[0].path);
                //file removed
              } catch (err) {
                console.error(err);
              }

              let newProduct = new productModel({
                name: req.body.name,
                description: req.body.description,
                price : req.body.price,
                code : req.body.code,
                productimage: urlData[0],
              });
              try {
                let response = await newProduct.save();
                console.log("product added", response);
                console.log(urlData[0]);
                res.send({
                  message: "product added",
                  data: {
                    name: req.body.name,
                    description: req.body.description,
                    code : req.body.code,
                    price : req.body.price,
                    productimage: urlData[0],
                  },
                });
              } catch (error) {
                console.log("failed to add product", error);
                res.status(500).send({
                  message: "failed to add product",
                });
              }
            }
          });
      } else {
        console.log("err: ", err);
        res.status(500).send();
      }
    }
  );
});




  app.get('/product/:id' , async(req,res)=>{
    try{
        let querypro = await productModel.findOne({_id : req.params.id}).exec()
        res.send({
            message : "found product",
            data : querypro
        })
        console.log("found")
    }
    catch(error){
        res.send({
            message : "not found",
            
        })
        console.log("not found" , error)
    }
  })


  app.get('/products' , async(req,res)=>{
    try{
        let querypro = await productModel.find({}).exec()
        res.send({
            message : "all products are found",
            data : querypro
        })
        console.log("all products are found")
    }
    catch(error){
        res.send({
            message : "not found",
            
        })
        console.log("not found" , error)
    }
  })

  app.get('/product/:id' , async(req,res)=>{
    try{
        let querypro = await productModel.findone({_id : req.params.id}).exec()
        res.send({
            message : " productfound",
            data : querypro
        })
        console.log("product found")
    }
    catch(error){
        res.send({
            message : "not found",
            
        })
        console.log("not found" , error)
    }
  })

  app.delete('/product/:id' , async(req,res)=>{
    try{
        let deletepro = await productModel.deleteOne({_id : req.params.id}).exec();
        res.send({
            message : "found product and deleted",
            data : deletepro
        })
        console.log("found and dleted")
    }
    catch{
        res.send({
            message : "not found",
         
        })
        console.log(" not found ") 
    }
  })

app.put('/product/:id', async (req,res)=>{
    let update = {}
    if(req.body.name) update.name = req.body.name;
    if(req.body.description) update.description = req.body.description;
    if(req.body.price) update.price = req.body.price;
    if(req.body.code) update.code = req.body.code;

    try {

    let modifypro = await productModel.findByIdAndUpdate({_id : req.params.id} , update , {new : true}).exec()
    console.log("updated")
    res.send({
        message : "updated",
        data : modifypro
     
    })
}
catch{
    res.send({
        message : "not found",
     
    })
    console.log(" not found ") 
}
    
} )
  
  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
  let dbURI = process.env.dbURI || 'mongodb+srv://tasmiyah:web@cluster0.cj82tmo.mongodb.net/crudpro?retryWrites=true&w=majority';
  mongoose.connect(dbURI);
  
  ////////////////mongodb connected disconnected events///////////////////////////////////////////////
  mongoose.connection.on('connected', function () {//connected
    console.log("Mongoose is connected");
  });
  
  mongoose.connection.on('disconnected', function () {//disconnected
    console.log("Mongoose is disconnected");
    process.exit(1);
  });
  
  mongoose.connection.on('error', function (err) {//any error
    console.log('Mongoose connection error: ', err);
    process.exit(1);
  });
  
  process.on('SIGINT', function () {/////this function will run jst before app is closing
    console.log("app is terminating");
    mongoose.connection.close(function () {
      console.log('Mongoose default connection closed');
      process.exit(0);
    });
  });
