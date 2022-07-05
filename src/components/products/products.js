import React from "react";
import "./product.styles.css"

export const Products = () => {
    const categories = ['Sofa','Stool','Center-table','Dressing-table'
    ,'Tv-table','Study-table','Bed','Wardrobe','Temples','Single-bed','Chair','Dining-table'];

    return(
        <div className="product-container">
            <div className="heading">
                <h3>Shop by Category</h3>
             </div>
             <div className="product-content">
             {categories.map((idx)=>{
                return (
                    <div className= "category">
                        <img src={`assets/${idx.toLowerCase()}.jpg`}/>
                        <div><h3>{idx}</h3></div>
                    </div> 
                )
             })} 
             </div>
        </div>
    );
}
