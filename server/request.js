const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const router = express.Router();

router.get('/getAmazon', (req,res)=>{
    let param = req.query;
    request('https://www.amazon.in/s?k='+param.search, (err,response,html)=>{
        if(err) return res.status(400).json(err);
        else return res.status(200).json(amazon_Products(html));
    });
})

router.get('/getFlipkart', (req,res)=>{
    let param = req.query;
    console.log(param);
    request('https://www.flipkart.com/search?q='+param.search, (err,response,html)=>{
        if(err) return res.status(400).json(err);
        else return res.status(200).json(flipart_Products(html));
    });
})
// var input = "laptop"
// request('https://www.shopclues.com/search?q='+input, cb);

// function cb(error,response,html){
//     if(error) return error;
//     else return handlehtml(html);
// }

// // shopclues - https://www.shopclues.com/search?q=


// // Amazon - https://www.amazon.in/s?k=
// // image - .s-result-item .s-image-fixed-height
// // details - .s-result-item .a-text-normal
// // price - .s-result-item .a-price


// // Flipkart - https://www.flipkart.com/search?q=
// // image - .CXW8mj or ._396cs4
// // details - ._4rR01T
// // price - ._30jeq3 or ._1_WHN1
// // link - console.log($('._1fQZEK').map((i, x) => $(x).attr('href')).toArray());

// function handlehtml(html){
//     let sel = cheerio.load(html);
//     // flipkart
//     // let details = sel("._4rR01T");
//     // let img = sel("._396cs4");
//     // let price = sel("._30jeq3");
//     // let link = sel("._1fQZEK");
//     var data =[]
//     // console.log(sel.html());
    
//     // jiomart
//     // let details = sel(".main-container .plp-card-details-name");
//     // let img = sel(".plp-card-image .lazyloaded");
//     // let price = sel(".jm-heading-xxs");
//     // let link = sel(".plp-card-wrapper");

//     // amazon
//     // let details = sel(".a-color-base .a-link-normal .a-text-normal");
//     // let img = sel(".s-image-fixed-height .s-image");     
//     // let price = sel(".a-price .a-offscreen");
//     // let link = sel(".a-color-base .a-link-normal");

//     // details.each((d)=>console.log(d.text()));
//     // console.log();

//     // shopclues
//     // let details = sel(".search_blocks h2");
//     // let img = sel(".search_blocks .img_section img");     
//     // let price = sel(".search_blocks .p_price");
//     // let link = sel(".search_blocks a");
//     for(let i=0; i<10; i++){
//         // console.log("img : " , sel(details[i]).text());
//         let im = sel(img[i]).attr('src');
//         let d = sel(details[i]).text();
//         let p =sel(price[i]).text();
//         let l = "https:" + sel(link[i]).attr('href'); 
//         const list = `{"img" : "${im}","details" : "${d}", "price" : "${p}" ,"link" : "${l}"}`; //
//         // console.log(list)
//         data.push(JSON.parse(list));
//         // console.log(JSON.parse(list))
//     }
//     console.log(data);
//     // console.log(JSON.parse(data));
//     return data;
//     // let $ = cheerio.load(html);
//     // console.log($('._1fQZEK').map((i, x) => $(x).attr('href')).toArray());
    
// }


// AMAZON
function amazon_Products(html){
    let sel = cheerio.load(html);
    var data =[]
    let details = sel(".a-color-base .a-link-normal .a-text-normal");
    let img = sel(".s-image-fixed-height .s-image");     
    let price = sel(".a-color-base a .a-price .a-price-whole");
    let link = sel(".sg-row .a-color-base .a-link-normal");
    for(let i=0; i<5; i++){
        let im = sel(img[i]).attr('src');
        let d = sel(details[i]).text().replaceAll(`"`,` `);
        let p =sel(price[i]).text();
        let l = "https://www.amazon.in" + sel(link[i]).attr('href'); 
        const list = `{"img" : "${im}","details" : "${d}", "price" : "${p}" ,"link" : "${l}"}`; 
        data.push(JSON.parse(list));
        // data.push(list);
    }
    console.log(data);
    return data;
    
}


// FLIPKART
function flipart_Products(html){
    let sel = cheerio.load(html);
    let details = sel("._4rR01T");
    let img = sel("._396cs4");
    let price = sel("._30jeq3");
    let link = sel("._1fQZEK");
    var data =[]
    for(let i=0; i<5; i++){
        let im = sel(img[i]).attr('src');
        let d = sel(details[i]).text().replaceAll(`"`,` `);;
        let p =sel(price[i]).text();
        let l = "https://www.flipkart.com" + sel(link[i]).attr('href'); 
        const list = `{"img" : "${im}","details" : "${d}", "price" : "${p}" ,"link" : "${l}"}`; 
        data.push(JSON.parse(list));
        // data.push(list)
    }
    console.log(data);
    return data;
    
}

module.exports = router;