import { Link } from 'react-router-dom';
import bannerImage from '../images/restauranfood.jpg'

function Header(){
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h2> Little Lemon </h2>
                    <h3> Chicago </h3>
                    <p> We are a family owned Mediterranean Restaurant, focused on Tradition Recipes
                    served with a Modern Twist. </p>
                    <Link to="/booking">
                        <button aria-label="On Click"> Reserve Table </button>
                    </Link>
                </div>

                <div className="banner-img">
                    <img src={bannerImage} alt="banner img"/>
                </div>

            </section>
        </header>
    )
}

export default Header;