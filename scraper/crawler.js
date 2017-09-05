var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
parr = []
parr2 =[]
var url = 'http://web.csulb.edu/depts/enrollment/registration/class_schedule/Fall_2017/By_Subject/'
var temp = ""
var counter = 0;
fullString = ""

request(url, function (error, response, html) {
  if (!error && response.statusCode == 200) {
    //console.log(typeof html);
    //parr[0] = 'five'
    $ = cheerio.load(html);
    $( 'li', '.indexList').each(function(i,e){
        //console.log($(this).find('a').attr('href'))
        var temp = $(this).find('a').attr('href')
        parr.push(temp)
        counter++
        //parr[i] = ($(this).find('a').attr('href')) 
    })
  //console.log(parr)        
  }
  //console.log(counter)
  for (let i in parr){
    temp = url + '/' + parr[i]
    //console.log(temp)
    request(temp, function (error, response2, html2) {
        if (!error && response2.statusCode == 200) {
           // parr2.push(html2) 
            //$$ = cheerio.load(html2)
            //console.log($$('.departmentTitle').text())
           // parr2.push(($$('.departmentTitle').text()))
            //console.log(parr2)
            parr2.push(html2)
            if(parr2.length == parr.length) done()
            // $ = cheerio.load(html);
            // $( 'li', '.indexList').each(function(i,e){
            //     parr.push($(this).find('a').attr('href'))
            
            //})
        
        
        }
    });
     
    }
    function done() {
        var file = fs.createWriteStream('fulllisting.html');
        file.on('error', function(err) { console.log("ERROR") });
        parr2.forEach(function(v) { file.write(v + '\n'); });
        file.end();
    }
    
    // while (parr2.length != parr.length)
    // {
    //     if (parr2.length == parr.length){
    //         console.log("done")
    //         break;
    //     }
    // }
    
  
});

//console.log(parr)

