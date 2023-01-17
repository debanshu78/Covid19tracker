const express=require("express");
const got = require('got');
const cheerio=require("cheerio");
const bodyparser=require("body-parser");
const axios=require('axios');
const https=require("https");
const cors = require("cors");



const app=express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// const linkstate={andamanandnicobarislands:"&mid=%2Fm%2F0cvvc",andhrapradesh:"&mid=%2Fm%2F0yyh",arunachanm",gujarat:"&mid=%2Fm%2F0f1_p",haryana:"&mid=%2Fm%2F03p7r",himachalpradesh:"&mid=%2Fm%2F03p85",jharkhand:"&mid=%2Fm%2F01c0h6",karnataka:"&mid=%2Fm%2F049lr",kerala:"&mid=%2Fm%2F0byh8j",ladakh:"&mid=%2Fm%2F01s6cy",lakshadweep:"&mid=%2Fm%2F0762fj",madhyapradesh:"&mid=%2Fm%2F0cw4l",maharashtra:"&mid=%2Fm%2F055vr",manipur:"&mid=%2Fm%2F0lpradesh:"&mid=%2Fm%2F018ckn",assam:"&mid=%2Fm%2F019fm7",bihar:"&mid=%2Fm%2F0290rb",chandigarh:"&mid=%2Fg%2F113qblgyk",chhattisgarh:"&mid=%2Fm%2F0cv2m",delhi:"&mid=%2Fm%2F09f07",goa:"&mid=%2Fm%2F01c26mx4",meghalaya:"&mid=%2Fm%2F01w4d3",mizoram:"&mid=%2Fm%2F02c9x5",nagaland:"&mid=%2Fm%2F024spd",odisha:"&mid=%2Fm%2F01l69g",puducherry:"&mid=%2Fm%2F0hvc8",punjab:"&mid=%2Fm%2F075_t2",rajasthan:"&mid=%2Fm%2F06k5_",sikkim:"&mid=%2Fm%2F011hq1",tamilnadu:"&mid=%2Fm%2F07c98",telangana:"&mid=%2Fm%2F03x5nf",tripura:"&mid=%2Fm%2F01v8wq",uttarpradesh:"&mid=%2Fm%2F01hpnh",uttarakhand:"&mid=%2Fm%2F050tt8",westbengal:"&mid=%2Fm%2F086g2",jammuandkashmir:"&mid=%2Fm%2F0djgt",india:"&mid=%2Fm%2F03rk0"};

const linkstate={india:"&mid=%2Fm%2F03rk0"};

const statecode={andamanandnicobarislands:"AN",andhrapradesh:"AP",arunachalpradesh:"AR",assam:"AS",bihar:"BR",chandigarh:"CH",chhattisgarh:"CT",delhi:"DL",goa:"GA",gujarat:"GJ",haryana:"HR",himachalpradesh:"HP",jharkhand:"JH",karnataka:"KA",kerala:"KL",ladakh:"LA",lakshadweep:"LD",madhyapradesh:"MP",maharashtra:"MH",manipur:"MN",meghalaya:"ML",mizoram:"MZ",nagaland:"NL",odisha:"OR",puducherry:"PY",punjab:"PB",rajasthan:"RJ",sikkim:"SK",tamilnadu:"TN",telangana:"TG",tripura:"TR",uttarpradesh:"UP",uttarakhand:"UK",westbengal:"WB",jammuandkashmir:"JK"};


let url="https://news.google.com/covid19/map?hl=en-IN&gl=IN&ceid=IN%3Aen";
app.get("/",function(req,res)
{
  got(url).then(response => {
    const $ = cheerio.load(response.body);
    var confirmed=$(".qs41qe .UvMayb").text();
    var recovered=$(".gZvxhb .UvMayb").text();
    var death=$(".ckqIZ .UvMayb").text(); 
   if(confirmed==="No data" || recovered==="No data" || death==="No data")
   {
    res.render("section1",{
      data:"In early 2020, after a December 2019 outbreak in China, the World Health Organization identified SARS-CoV-2 as a new type of coronavirus. The outbreak quickly spread around the world."
    });
   }
   else
   {
         res.render("section1",{
          data:"Accross the globe "+confirmed+" number of people are infected, "+recovered+" number of people are recovered and unfortunately "+death+" number of people are deceased in this pandemic."
        });
  }
}).catch(err => {
    console.log(err);
});


});


let vgmUrl=url+linkstate["india"];
let input="INDIA";
let state="";
app.get("/section2",function(req,res)
{    
 if(input==="INDIA") 
 {
    got(vgmUrl).then(response => {
        const $ = cheerio.load(response.body);
        var confirmed=$(".qs41qe .UvMayb").text();
        var recovered=$(".gZvxhb .UvMayb").text();
        var death=$(".ckqIZ .UvMayb").text();
        var utcTime=$("time.vBLAZ.Yt6XT").attr("datetime"); 
        var time = new Date(utcTime);
        time=time+"";
             var rprate=(Number(recovered.split(",").join(""))/Number(confirmed.split(",").join(""))     )*100;
             res.render("section2",{
                 inputname:input,
                 confirmedstate:confirmed,
                 recoveredstate:recovered,
                 deathstate:death,
                 rpstate:rprate.toFixed(2),
                 updateon:time,
                 error:false
             });

    }).catch(err => {
        console.log(err);
 })
 .finally(function () {
  vgmUrl=url+linkstate["india"];
  input="INDIA";
  state=""
 });
}
else{
    let confirmed="0";
    let recovered="0";
    let deceased="0";
    let todayconfirmed="Not Updated";
    let todayrecovered="Not Updated";
    let todaydeath="Not Updated";
  let urlalt="https://api.covid19india.org/v3/data.json";
  axios.get(urlalt)
  .then(function (response) {
    var statedata2total=response.data[statecode[state]].total;
    var statedata2delta=response.data[statecode[state]].delta;
    (statedata2total!=undefined)&&( {confirmed=0,deceased=0,recovered=0,tested=0}=statedata2total);
    var time = new Date();
    time=time+"";
    var rprate=((recovered/confirmed)*100).toFixed(2);
    console.log(state+"-"+confirmed+" "+deceased+" "+recovered);
  if(statedata2delta!=undefined)
  {
    todayconfirmed=statedata2delta.confirmed;
    todayrecovered=statedata2delta.recovered;
    todaydeath=statedata2delta.deceased;
    if(todayconfirmed===undefined)
    {
      todayconfirmed="Not updated";
    }
    if(todayrecovered===undefined)
    {
      todayrecovered="Not updated";
    }
    if(todaydeath===undefined)
    {
      todaydeath="Not updated";
    }

  }      
    res.render("section2",{
      inputname:input,
      confirmedstate:confirmed+"[+"+todayconfirmed+"]",
      recoveredstate:recovered+"[+"+todayrecovered+"]",
      deathstate:deceased+"[+"+todaydeath+"]",
      rpstate:rprate,
      updateon:time,
      error:false
    });
  })
  .catch(function (error) {
    console.log(error);
    res.render("section2",{
      inputname:input,
      confirmedstate:0+"[+"+0+"]",
      recoveredstate:0+"[+"+0+"]",
      deathstate:0+"[+"+0+"]",
      rpstate:"Not Available",
      updateon:"Not Available",
      error:true
    });
  })
  .finally(function () {
     vgmUrl=url+linkstate["india"];
     input="INDIA";
     state=""
  });
}
});

app.post("/section2",function(req,res){
    state=req.body.statename;
    state=state.split(" ").join("").toLowerCase();
    input=state.toUpperCase();
    if(linkstate[state]===undefined)
    {
        res.redirect("/section2");
    }
    else
    {
        vgmUrl=url+linkstate[state];
        res.redirect("/section2");
    }
});

let distname='Khordha';
let statename="Odisha";
app.get("/section3",function(req,res){
    let urldist="https://api.covid19india.org/state_district_wise.json";
  axios.get(urldist)
  .then(function (response) {
    var distdata2=response.data[statename].districtData[distname];
    var confirmed=distdata2.confirmed;
    var recovered=distdata2.recovered;
    var death=distdata2.deceased; 
    var time = new Date();
    time=time+"";
    var rprate=(recovered/confirmed)*100;
    res.render("section3",{
        inputname:distname.toUpperCase(),
        confirmeddist:confirmed,
        recovereddist:recovered,
        deathdist:death,
        rpdist:rprate.toFixed(2),
        todayconfirmeddist:distdata2.delta.confirmed,
        todayrecovereddist:distdata2.delta.recovered,
        todaydeathdist:distdata2.delta.deceased,
        updateon:time,
        error:false
    });
  })
  .catch(function (error) {
    console.log(error);
    res.render("section3",{
      inputname:distname.toUpperCase(),
      confirmeddist:0,
      recovereddist:0,
      deathdist:0,
      rpdist:"Not Available",
      todayconfirmeddist:0,
      todayrecovereddist:0,
      todaydeathdist:0,
      updateon:"Not available",
      error:true
  });
  })
  .finally(function () {
    distname="Khordha";
    statename="Odisha";
  });
});

app.post("/section3",function(req,res)
{
    var bodyname=req.body.districtname;
    var name=bodyname.split(",");
    statename=name[1];
    distname=name[0];
    console.log(statename+" "
    +distname);
    res.redirect("/section3");
});


app.get("/section4",function(req,res)
{
  res.render("section4",{
    error:"",
    error_meassage:"",
    error_code:""
  });
});
app.post("/section4",function(req,res){
  var name=req.body.contact_name;
    var email=req.body.contact_email+"";
    var reveiw=req.body.contact_message;
    const data={
      members:[
          {
              email_address:email,
              status: "subscribed",
              merge_fields:{
                  NAME:name,
                  REVIEW:reveiw
              }
          }
      ],update_existing:true
  };
  const jsonData=JSON.stringify(data);
  const url="...";
  const options={
  method:"POST",
  auth:"..."
  };

  const request=https.request(url,options,function(response){
      response.on("data",function(data){
          console.log(JSON.parse(data));
          const err=JSON.parse(data).error_count;
          if(err===0)
          {
            error="notoccur";
              res.render("section4",{
                error:"notoccur",
                error_meassage:"Your feedback is successfully recorded.We will contact you if needed.please check your mail(spam/primary/social)",
                error_code:"Successful"
              });
          }
          else
          {
            error="occur";
            res.render("section4",{
              error:"occur",
              error_meassage:","+JSON.parse(data).errors[0].error,
              error_code:"Failed"
            });
          }
      });
  });
  request.write(jsonData);
  request.end();
});


app.get("/section5",function(req,res){
  res.render("section5",{
 
  });
});

app.get("/sitemap",function(req,res){
res.sendfile(__dirname+"/sitemap.xml");
});

app.listen(process.env.PORT || 4000,function(){
    console.log("server runs on port 4000...........");
});





   
