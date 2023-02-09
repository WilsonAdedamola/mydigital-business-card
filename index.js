
const DigitalBusinessCard = (

            <div className="card">
                <div className="card__image">
                    <img src="./pic.jpg" alt="Image" />
                </div>
                <div className="card__content">
                    <h2 className="card__name align">Adegboyega Adedamola Wilson</h2>
                    <p className="card__role align">Frontend Developer</p>
                    <p className="card__website align"><a href="https://wilsonadedamola.github.io/wilsonadedamola.com/" target="blank">wilsonadedamola.com</a></p>
                    <p className="cta"><i class='bx bxs-envelope' ></i><a href="mailto:wilsonadedamola@gmail.com" target="blank">Email</a></p>
                    <p className="card__content--about">About</p>
                    <p className="card__content--text">I am an enthusiastic frontend developer with a particular interest in adding value to whatever task I work on. I try to keep up with security and best practices, I am flexible and always eager to learn new things.</p>
                    <p className="card__content--interest">Interest</p>
                    <p className="card__content--text">Design. Art. Reader. Travel .Chess. Photography</p>
                </div>
                <div className="card__socials ">
                <a href="https://twitter.com/wildam_wildam" target="blank"><i class='bx bxl-twitter'></i></a>
                <a href="https://www.instagram.com/wildam_wildam/" target="blank"><i class='bx bxl-instagram-alt' ></i></a>
                <a href="https://github.com/WilsonAdedamola" target="blank"><i class='bx bxl-github' ></i></a>
                </div>
            </div>
      
)

ReactDOM.render(DigitalBusinessCard, document.getElementById('root'))