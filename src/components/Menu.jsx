import React from 'react'

const Menu = ({menuCourses}) => {
    function formatToCurrency(amount){
        return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&, ');
    }
  return (
    <div className='section-center'>
        {
            menuCourses.map((menuCourse) => {
                const { id, title, price, img, desc} = menuCourse;
                return(
                    <article className="menu-item" key={id}>
                        <img src={img} alt={title} className = 'photo'/> 
                        <div className="item-info">
                            <header>
                                <h4>{title}</h4>
                                <h4 className="price">₹{formatToCurrency(price)}</h4>
                            </header> <hr />
                            <p className='item-text'>
                                {desc}
                            </p>
                        </div>
                    </article>
                )
            })
        }
    </div>
  )
}

export default Menu