const request = require('request');
const cheerio = require('cheerio');

// demo selecting the top new article headlines; request information from Hacker News, log error, response and html of the page. 
request('https://news.ycombinator.com', function (error, response, html) {

// if there are no errors and response is OK, continue
  if (!error && response.statusCode == 200) {
    let $ = cheerio.load(html);

    // loop over each element, index is position of selector, element is the current element, occasional "this"
    $('td.title a.storylink').each(function(index, element) {
    
    // referring to chosen selector above
        var a = $(this);
    
    // show me the text!
        console.log(a.text())
    });
  }
});