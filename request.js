const request = require('request');
const cheerio = require('cheerio');

var input = "mobiles"
request('https://www.flipkart.com/search?q='+input, cb);

function cb(error,response,html){
    if(error) console.log(error);
    else handlehtml(html);
}
// Amazon - https://www.amazon.in/s?k=
// image - .s-result-item .s-image-fixed-height
// details - .s-result-item .a-text-normal
// price - .s-result-item .a-price


// Flipkart - https://www.flipkart.com/search?q=
// image - .CXW8mj or ._396cs4
// details - ._4rR01T
// price - ._30jeq3 or ._1_WHN1
// link - console.log($('._1fQZEK').map((i, x) => $(x).attr('href')).toArray());

function handlehtml(html){
    let sel = cheerio.load(html);
    let t = sel("._4rR01T");
    for(let i=0; i<t.length; i++) console.log(sel(t[i]).text());
    // let $ = cheerio.load(html);
    // console.log($('._1fQZEK').map((i, x) => $(x).attr('href')).toArray());
    
}