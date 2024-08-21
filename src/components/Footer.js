import lemonLogo from "../images/Lemon-logo.svg"

function Footer(){
    return (
        <footer> 
            <section>
                <div className="company-info">
                    <img src={lemonLogo} alt="logo"/>
                    <p> We are a family owned Mediterranean Restaurant, focused on Traditional Recipes served with a modern twist.</p>
                </div>

                <div>
                    <h3> Important Links </h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/#about-link'>About</a></li>
                        <li><a href='/#menu-link'>Menu</a></li>
                        <li><a href='/booking'>Reservations</a></li>
                        <li><a href='/#menu-link'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: 123 Chicago, USA</li>
                        <li>Phone Number: +1 (012) 456-789</li>
                        <li> Email: littlelemon@gmail.com </li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href='/'> Instagram </a></li>
                        <li><a href='/'> Facebook </a></li>
                        <li><a href='/'> TikTok </a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer