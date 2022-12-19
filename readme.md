// app.get('/', (req, res)=>{
//     const params = { }
//     res.status(200).render('home.pug', params);
// })

// app.get('/contact', (req, res)=>{
//     const params = { }
//     res.status(200).render('contact.pug', params);
// })

// app.post('/contact', (req, res)=>{
//     var myData = new Contact(req.body);
//     myData.save().then(()=>{
//         res.send("This item has been saved to the database")
//     }).catch(()=>{
//         res.status(400).send("Item was not saved to the database")
//     });

//     // res.status(200).render('contact.pug');
// })