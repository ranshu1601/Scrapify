import React from 'react'
import Cards from './Cards'

function Result({product,amazonData,flipkartData}) {
    // const data = [
    //     {
    //         img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70',
    //         details: 'SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)',
    //         price: '₹9,699',
    //         link: 'https://www.flipkart.com/samsung-galaxy-f13-nightsky-green-64-gb/p/itmeadfda1bd23fa?pid=MOBGENJWF4KJTPEN&lid=LSTMOBGENJWF4KJTPENS2XJXA&marketplace=FLIPKART&q=mobiles&store=tyy%2F4io&srno=s_1_1&otracker=search&fm=organic&iid=25536455-e5b0-43f9-acca-23bece54565c.MOBGENJWF4KJTPEN.SEARCH&ppt=None&ppn=None&ssid=g4h4a6xyeo0000001683915921653&qH=eb4af0bf07c16429'
    //     },
    //     {
    //         img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/w/d/o/-original-imaghgbyhy6banxv.jpeg?q=70',
    //         details: 'SAMSUNG Galaxy F04 (Opal Green, 64 GB)',
    //         price: '₹6,999',
    //         link: 'https://www.flipkart.com/samsung-galaxy-f04-opal-green-64-gb/p/itmd0c05f8b03876?pid=MOBGKY2V7QZ2QVFS&lid=LSTMOBGKY2V7QZ2QVFSGOGYVU&marketplace=FLIPKART&q=mobiles&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_2&otracker=search&fm=organic&iid=25536455-e5b0-43f9-acca-23bece54565c.MOBGKY2V7QZ2QVFS.SEARCH&ppt=None&ppn=None&ssid=g4h4a6xyeo0000001683915921653&qH=eb4af0bf07c16429'
    //     },
    //     {
    //         img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/6/v/0/c51-mzb0dxkin-poco-original-imagzdpycgrcdc8z.jpeg?q=70',
    //         details: 'POCO C51 (Royal Blue, 64 GB)',
    //         price: '₹7,749',
    //         link: 'https://www.flipkart.com/poco-c51-royal-blue-64-gb/p/itm1e4e8373537a7?pid=MOBGZCQFCWNDK89P&lid=LSTMOBGZCQFCWNDK89PTMGT86&marketplace=FLIPKART&q=mobiles&store=tyy%2F4io&srno=s_1_3&otracker=search&fm=organic&iid=25536455-e5b0-43f9-acca-23bece54565c.MOBGZCQFCWNDK89P.SEARCH&ppt=None&ppn=None&ssid=g4h4a6xyeo0000001683915921653&qH=eb4af0bf07c16429'
    //     },
    //     {
    //         img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/t/a/x/-original-imaghmtch6qfmfxg.jpeg?q=70',
    //         details: 'POCO C50 (Royal Blue, 32 GB)',
    //         price: '₹6,499',
    //         link: 'https://www.flipkart.com/poco-c50-royal-blue-32-gb/p/itma43af9d14952e?pid=MOBGK8WZUTGDEZFA&lid=LSTMOBGK8WZUTGDEZFAWKBDLT&marketplace=FLIPKART&q=mobiles&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_4&otracker=search&fm=organic&iid=25536455-e5b0-43f9-acca-23bece54565c.MOBGK8WZUTGDEZFA.SEARCH&ppt=None&ppn=None&ssid=g4h4a6xyeo0000001683915921653&qH=eb4af0bf07c16429'
    //     },
    //     {
    //         img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/o/t/a/c51-mzb0e6din-poco-original-imagzdzzraqzsrzc.jpeg?q=70',
    //         details: 'POCO C51 (Power Black, 64 GB)',
    //         price: '₹7,749',
    //         link: 'https://www.flipkart.com/poco-c51-power-black-64-gb/p/itm62bcd2634619e?pid=MOBGZCQFWM5HZHXX&lid=LSTMOBGZCQFWM5HZHXXVV2MKC&marketplace=FLIPKART&q=mobiles&store=tyy%2F4io&srno=s_1_5&otracker=search&fm=organic&iid=25536455-e5b0-43f9-acca-23bece54565c.MOBGZCQFWM5HZHXX.SEARCH&ppt=None&ppn=None&ssid=g4h4a6xyeo0000001683915921653&qH=eb4af0bf07c16429'
    //     }
    // ]
    return (
        <div>
            <p className='fs-4 px-5 pt-4' >Showing results for {product}</p>
            <div className="container text-center">
                <div className="row align-items-center justify-items-center">
                    <div className="col">
                        {amazonData && (<Cards data={amazonData}/>)}
                        
                    </div>
                    <div className="col">
                        {flipkartData && (<Cards data={flipkartData} />)}
                        
                    </div>
                    
                    {/* <div className="col">
                        <Cards data={data} />
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default Result
