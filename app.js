const Express = require('express');
var app=new Express();
app.set('view engine','ejs');

app.use(Express.static(__dirname+"/public"));

app.get('/',(req,res)=>{
    res.render('index',mob);
});


nav= [{
    link:'/mobsingle',
    title:'Mobiles'

}];

app.get('/mobsingle/:id',(req,res)=>{
    const x= req.params.id;
    res.render('mobsingle',{mob:mob[x]});
});



mob=[{
    'title':'Apple iPhone Xs Max',
    'content':['(Space Grey , 512 GB)'],
    'price':'127580',
    'picture':'/images/apple-iphone-xs-max-mt532hn-a-original-imaf97f6y3spd7yz.jpeg',
    'description':[    '512 GB ROM |',
        '16.51 cm (6.5 inch) Super Retina HD Display',
        '12MP + 12MP | 7MP Front Camera',
        'A12 Bionic Chip Processor'],
        'feedback':["Best iphone I have used till now .. good update from my previous iPhone 6s Plus"]
    
    
},
{
    'title':'Samsung Galaxy S10 plus',
    'content':['(Ceramic White , 1 TB)'],
    'price':'117000',
    'pict':'/public/images/2.jpg',
    'picture':'/images/samsung-galaxy-s10-plus.jpeg',
    'description':['    8 GB RAM | 512 GB ROM | Expandable Upto 512 GB',
    '16.26 cm (6.4 inch) Quad HD+ Display',
    '16MP + 12MP | 10MP + 8MP Dual Front Camera',
    '4100 mAh Lithium-ion Battery',
    'Exynos 9 9820 Processor'],
    'feedback':["Awesome phone with 1 tb storage... And 12gb of ram give a super fast experience... 5 stars.. Go fo it."]
    
},
{
    
    'title': 'Sony Xperia XZ2',
    'content':['(Liquid Black , 64 GB)'],
    'price': '72900',
    'picture':'/images/sony-xperia-xz2.jpeg',
    'description':['    6 GB RAM | 64 GB ROM | Expandable Upto 400 GB',
        '14.48 cm (5.7 inch) Display',
        '19MP Rear Camera',
        '3180 mAh Battery',
        'Qualcomm Snapdragon 845 Processor'],
        'feedback':["Awesome phone.And a super fast experience... 5 stars.. Go fo it."]

   
},
{
    'title': 'Asus ROG ',
    'content': ['(Black , 128 GB)'],
    'price': '69999',
    'picture':'/images/asus-rog.jpeg',
    'description': ['    8 GB RAM | 128 GB ROM |',
        '15.24 cm (6 inch) FHD+ Display',
        '12MP + 8MP | 8MP Front Camera',
        '4000 mAh Battery',
        'Qualcomm Speed-binned Snapdragon 845 Processor'],
        'feedback':['The phone is unique from all aspect and shows that design can also make huge difference from all other in the market.',

        'In performance it is amazing and plenty of things to explore.',
        
        'The sound of speakers is amazing it is crystal clear and loud.',
        
        'Hi-res music built in dac/amp is also of top quality.']
   
},
{
    'title':'Google Pixel 3 XL',
    'content':['(Not Pink , 128 GB)'],
    'price': '54999',
    'picture':'/images/google-pixel.jpeg',
    'description':['    4 GB RAM | 64 GB ROM |',
        '16.0 cm (6.3 inch) QHD+ Display',
        '12.2MP Rear Camera | 8MP + 8MP Dual Front Camera',
        '3430 mAh Battery',
        'Qualcomm Snapdragon 845 64-bit Processor'] ,
        'feedback':['Outstanding camera - Precisely the best on the market.','Nice Phone']
   
},
{
     'title':'OPPO Reno 10x Zoom',
    'content':['(Jet Black , 256 GB , 8 GB RAM)'],
    'price':'54900',
    'picture':'/images/oppo-reno-10x.jpeg',
    'description':['    8 GB RAM | 256 GB ROM | Expandable Upto 256 GB',
        '16.76 cm (6.6 inch) Display',
        '48MP + 13MP + 8MP | 16MP Front Camera',
        '4065 mAh Battery',
        'Qualcomm Snapdragon 855 Octa Core 2.8 GHz Processor',
        'In-display Fingerprint Sensor',
        'VOOC 3.0 Fast Charging'],
        'feedback':['Finally my Network lock problem is resolved and i am very happy. The phone takes good picture.']
},
{
'title':'HTC U11',
'content':['(Solar Red, 128 GB , 6 GB RAM)'],
'price':'53990',
'picture':'/images/htc-u11.jpeg',
'description':['      6 GB RAM | 128 GB ROM |',
'13.97 cm (5.5 inch) Quad HD Display',
'12MP Rear Camera | 16MP Front Camera',
'3000 mAH Battery',
'Qualcomm Snapdragon 835 64-bit Processor'],
'feedback':['Awesome phone. Love HTC phones, 5th HTC phone.', 'Thank you flipkart for the Solar Red color and dicount amazing phone very nice to use best in class all aspects']
},{
    'title':'LG G5',
    'content':['(Gold, 32 GB , 4 GB RAM)'],
    'price':'52990',
    'picture':'/images/lg-g5.jpeg',
    'description':['       4 GB RAM | 32 GB ROM | Expandable Upto 200 GB',
    '13.46 cm (5.3 inch) Quad HD Display',
    '16MP Rear Camera | 8MP Front Camera',
    '2800 mAh Li-Ion Battery',
    'Qualcomm Snapdragon 820 64-bit Processor'],
    'feedback':['The product is good. I bought it at 47000. The price is bit high as LG G5 looks simple. The body of LG G5 is not as good as metallic bodies of HTC Phones.',

     'It is not heating up during usage',
    'It get fully charged within 40 minutes',
     'Camera is what you can expect after spending 47000',
     'Extra battery for travelling',
     '2800 mah is still very good for moderate user. It can last a day.',
    'My LG5 has better bencmark score that Samsung s7 edge and Iphone 7']

},{
    'title':'Black Shark 2',
    'content':['(Frozen Silver, 256 GB , 12 GB RAM)'],
    'price':'49900',
    'picture':'/images/black-shark.jpeg',
    'description':['      12 GB RAM | 256 GB ROM |',
    '16.23 cm (6.39 inch) Display',
    '48MP + 12MP | 20MP Front Camera',
    '4000 mAh Battery',
    'SM855 (Qualcomm Snapdragon Premium Tier) Processor'],
    'feedback':['Received the product on time.',
   
     'Excellent looks',
     'Touch response is amazing',
     'Build quality is impressive. (Strongest phone I have ever seen)',
     'Stock Android experience.',
     'Speakers are nice and bassy(quite louder than most of the Android phones)',
    'Since its an Samsung display, the quality of the AMOLED is mesmerizing.',
     'Huge storage and RAM.',
     'Shark space is good as in UI and streaming games.',
    'Call quality is good.']
}
];


app.listen(4000);