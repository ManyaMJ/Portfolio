if (window.innerWidth > 768) {
    gsap.set('.div1, .div2, .div4, .div5, .div6, .div7', { opacity: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.div3', {
        x: -150,
        y: 150,
        opacity: 0,
        scale: 0.9,
        duration: 1.6,
        ease: 'power4.out',
    })
        .to('.div1, .div2, .div4, .div5, .div6, .div7', {
            opacity: 1,
            duration: 0.5
        }, ">")
        .from('.div1 .left h1', {
            y: 40,
            opacity: 0,
            duration: 1
        }, "a")
        .from('.div1 .right a', {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.8
        }, "a")
        .from('.div2 .div-text', {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.5
        }, "a")
        .from('.div4 h2', {
            y: 50,
            opacity: 0,
            scale: 1.2,
            duration: 1,
            stagger: 0.5
        }, "a")
        .from('.div6 a', {
            y: 20,
            opacity: 0,
            duration: 1,
            stagger: 0.5
        }, "a")
        .from('.div-7-1', {
            y: -30,
            opacity: 0,
            scale: 0.8,
            duration: 1
        }, "a")
        .from('.div-7-2 h1', {
            y: 30,
            opacity: 0,
            scale: 0.8,
            duration: 1
        }, "a")
        .from('.text-part', {
            x: -20,
            opacity: 0,
            duration: 1,
            stagger: 0.5
        }, "a")
        .from('#box', {
            x: -40,
            scale: 1.2,
            opacity: 0,
            duration: 1
        }, "a")
        .from(".flower-icon", {
            scale: 0,
            rotation: 180,
            duration: 1,
            ease: "back.out(1.7)"
        }, "a")
        .from(".circle-icon", {
            scale: 0,
            rotation: -180,
            duration: 1,
            ease: "back.out(1.7)"
        }, "a")
        .from('.img-cont', {
            width: '0',
            stagger: 0.5,
            opacity: 0,
            duration: 6,
            ease: 'power3.out'
        }, "a");
}




document.querySelector('#text1').addEventListener('mouseenter', () => {
    gsap.to('#box', {
        height: '12rem',
        width: 'auto',
        backgroundColor: 'white',
        borderRadius: '12px',
        backgroundImage: 'url("../media/1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    });
    gsap.to('#box2,#box3,#box4', {
        height: '0.2rem',
        width: 'auto',
        backgroundColor: 'white',
        borderRadius: '12px',
        backgroundImage: 'none'
    });
});

document.querySelector('#text2').addEventListener('mouseenter', () => {
    gsap.to('#box2', {
        height: '12rem',
        width: 'auto',
        backgroundColor: 'white',
        borderRadius: '12px',
        backgroundImage: 'url("../media/2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    });
    gsap.to('#box,#box3,#box4', {
        height: '0.2rem',
        width: 'auto',
        backgroundColor: 'white',
        borderRadius: '12px',
        backgroundImage: 'none'
    });
});

document.querySelector('#text3').addEventListener('mouseenter', () => {
    gsap.to('#box3', {
        height: '12rem',
        width: 'auto',
        backgroundColor: 'white',
        borderRadius: '12px',
        backgroundImage: 'url("../media/3.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    });
    gsap.to('#box,#box2,#box4', {
        height: '0.2rem',
        width: 'auto',
        backgroundColor: 'white',
        borderRadius: '12px',
        backgroundImage: 'none'
    });
});

document.querySelector('#text4').addEventListener('mouseenter', () => {
    gsap.to('#box4', {
        height: '12rem',
        width: 'auto',
        backgroundColor: 'white',
        borderRadius: '12px',
        backgroundImage: 'url("../media/4.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    });
    gsap.to('#box,#box2,#box3', {
        height: '0.2rem',
        width: 'auto',
        backgroundColor: 'white',
        borderRadius: '12px',
        backgroundImage: 'none'
    });
});
