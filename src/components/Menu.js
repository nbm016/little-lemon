import bruschetta from "../images/bruchetta.svg";
import greekSalad from "../images/greek salad.jpg";
import lemonDessert from "../images/lemon dessert.jpg"

function Menu() {
    const foodOrders = [
        {
            id: 1,
            title: "Greek Salad",
            price: 12.99,
            image: greekSalad,
            description: "The famous Greek Salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",

        },
        {
            id: 2,
            title: "Bruschetta",
            price: 5.99,
            image: bruschetta,
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Originally $7.99, so order now! ",
            
        },
        {
            id: 3,
            title: "Lemon Dessert",
            price: 5.25,
            image: lemonDessert,
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            
        },
    ]
    
    return (
        <div className = 'menu-container'>
            <div className = 'menu-header'>
                <h2 id="menu-link"> This week's specials!</h2>
                <button>Order Menu</button>
            </div>

            <div className = 'cards'>
                {
                    foodOrders.map(food => 
                        <div key={food.id} className='menu-items'>
                            <img src={food.image} alt="menu item"/>

                            <div className='menu-content'>
                                <div className='heading'>
                                    <h5> {food.title} </h5>
                                    <p> ${food.price} </p>
                                </div>
                            </div>
                            <p id = 'description' > {food.description} </p>
                            <div className='btn-position'>
                                <button className='order-btn'> Order Now! </button>
                            </div>
                            
                        </div>
                    )
                }
            </div>
        </div>
    )
    
}

export default Menu;