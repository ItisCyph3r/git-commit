const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

let postTitle = ['Header']
let postContent = [
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam suscipit pariatur eaque sit enim. Cum ducimus ut ipsum, necessitatibus vel laboriosam aut enim non, tempore eaque magni, explicabo ea earum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam nam ducimus exercitationem molestias ratione non culpa voluptas similique accusamus, dicta ullam perspiciatis quia beatae laudantium quaerat, labore perferendis rerum! lorem'
]
let ffs = 'hehe'
app.get('/', (req, res) => {

    res.render('index', {
        'menuName': ffs,
        'title': postTitle,
        'content': postContent
    });
    res.send()
    res.end()
})

app.post('/', (req, res) => {
    console.log(req.body);
    let title = req.body.title
    let post = req.body.post

    let ffs = req.body.about
    console.log(ffs)
    if(req.body.about === 'aboutpage'){
        res.redirect('/about-us')
    }
    else if(req.body.post === 'newpage'){
        res.redirect('/new-post')
    }
    else if(req.body.contact === 'contactpage'){
        res.redirect('/contact-post')
    }
    else{
        res.redirect('/')
    }

    postTitle.push(title)
    postContent.push(post)

    res.redirect('/')
})


let aboutHeader = ['About Us']
let aboutContent = ['Adipisicing elit. Nemo fuga molestiae aut eveniet itaque possimus minus quis maiores voluptatibus inventore facilis, nisi cumque, libero perspiciatis praesentium pariatur dolorum earum nobis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque temporibus possimus nostrum voluptatibus nam aperiam recusandae omnis magni aut sequi rerum nulla rem fuga, doloribus deserunt, ratione voluptatem! Esse, reprehenderit.']
app.get('/about-us', (req, res) => {
    res.render('index', {
        'title': aboutHeader,
        'content': aboutContent
    });
})


let contactHeader = ['Contact Us']
let contactContent = ['Et veniam aperiam illum itaque similique accusantium dolor a placeat aut numquam nihil rem, quasi dignissimos nisi blanditiis, quae porro perferendis repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rem ipsa voluptates dolores eaque sapiente repudiandae ut neque voluptate exercitationem! In iure rerum unde mollitia neque maxime numquam explicabo et.']

app.get('/contact-post', (req, res) => {
    res.render('index', {
        'title': contactHeader,
        'content': contactContent
    });
})


app.get('/new-post', (req, res) => {
    res.render('post');
})

app.listen(process.env.YOUR_PORT || process.env.PORT || port, () => {
    console.log('Listening to server on port ' + port)
})