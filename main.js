(function() {     // function expression closure to contain variables
    let i = 0;
    const images = [{
        url: "https://res.cloudinary.com/fresco/image/upload/v1635676527/245929889_329474148979893_4916155226796666993_n_twany1.jpg"
    }, {
        url: "https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.6435-9/202370886_251767176750591_7784599690368881449_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=51wuUN7sWIgAX84L277&_nc_ht=scontent.fsdv2-1.fna&oh=13352259792484364e0faa6ca19b8b4d&oe=61A30F52"
    }, {
        url: "https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.6435-9/217765670_269650931628882_3057896223662701510_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=U2SYbSteCQAAX-qhud7&tn=Bg2r6olFKlNh8xcu&_nc_ht=scontent.fsdv2-1.fna&oh=a0dc1b510a9e141ee23ebbc41b09025c&oe=61A3ABD5"
    }]
    let el = document.getElementById('gallery');  // el doesn't change
    function toggle() {
        el.src = images[i].url;           // set the image
        i = (i + 1) % images.length;  // update the counter
    }
       
        setInterval(toggle, 2000);

    
})();  

// animation: fadeInAnimation ease 3s;