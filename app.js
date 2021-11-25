const express = require('express');
const { quote } = require('yahoo-finance');
const app = express();
var yahooFinance = require('yahoo-finance');


app.get("/oday/:comp", (req,res)=>{

    let history;
    yahooFinance.historical({
        symbol:  req.params.comp,
        from: '2021-11-23',
        to: '2021-11-25',
        // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
      }, function (err, quotes) {
        //...
        // console.log(quotes);

        history = quotes;
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Content-Type","Application/Json")
        res.send(JSON.stringify(history, null , 4));
        
      });
      

      yahooFinance.quote({
        symbol: 'AAPL',
        modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
      }, function (err, quotes) {
        // console.log(quotes);
      });

      

})

app.get("/fday/:comp", (req,res)=>{

    let history;
    yahooFinance.historical({
        symbol: req.params.comp,
        from: '2021-11-19',
        to: '2021-11-25',
        // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
      }, function (err, quotes) {
        //...
        // console.log(quotes);

        history = quotes;
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Content-Type","Application/Json")
        res.send(JSON.stringify(history, null , 4));
        
      });
      

      yahooFinance.quote({
        symbol: 'AAPL',
        modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
      }, function (err, quotes) {
        // console.log(quotes);
      });

      

})
app.get("/omonth/:comp", (req,res)=>{

    let history;
    yahooFinance.historical({
        symbol: req.params.comp,
        from: '2021-10-24',
        to: '2021-11-24',
        // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
      }, function (err, quotes) {
        //...
        // console.log(quotes);

        history = quotes;
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Content-Type","Application/Json")
        res.send(JSON.stringify(history, null , 4));
        
      });
      

      yahooFinance.quote({
        symbol: 'AAPL',
        modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
      }, function (err, quotes) {
        // console.log(quotes);
      });

      

})
app.get("/smonth/:comp", (req,res)=>{

    let history;
    yahooFinance.historical({
        symbol: req.params.comp,
        from: '2021-5-24',
        to: '2021-11-24',
        // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
      }, function (err, quotes) {
        //...
        // console.log(quotes);

        history = quotes;
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Content-Type","Application/Json")
        res.send(JSON.stringify(history, null , 4));
        
      });
      

      yahooFinance.quote({
        symbol: 'AAPL',
        modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
      }, function (err, quotes) {
        // console.log(quotes);
      });

      

})



app.get("/oyears/:comp", (req,res)=>{

    let history;
    yahooFinance.historical({
        symbol: req.params.comp,
        from: '2020-11-24',
        to: '2021-11-24',
        // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
      }, function (err, quotes) {
        //...
        // console.log(quotes);

        history = quotes;
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Content-Type","Application/Json")
        res.send(JSON.stringify(history, null , 4));
        
      });
      

      yahooFinance.quote({
        symbol: 'AAPL',
        modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
      }, function (err, quotes) {
        // console.log(quotes);
      });

      

      
})

app.get("/fyears/:comp", (req,res)=>{

    let history;
    yahooFinance.historical({
        symbol: req.params.comp,
        from: '2016-11-24',
        to: '2021-11-24',
        // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
      }, function (err, quotes) {
        //...
        // console.log(quotes);

        history = quotes;
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Content-Type","Application/Json")
        res.send(JSON.stringify(history, null , 4));
        
      });
      

      yahooFinance.quote({
        symbol: 'AAPL',
        modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
      }, function (err, quotes) {
        // console.log(quotes);
      });

      

})






app.listen(5000, ()=>{
    console.log("PORT 5000")
});