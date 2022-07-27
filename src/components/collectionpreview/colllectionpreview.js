import React from "react";
import './collectionpreview.css';
import '../category/category'
import Category from "../category/category";

const CollectionPreview =({title,items})=>(
    <div className="collection-preview">   
        <h3 className="title">{title.toUpperCase()}</h3>
        <div className="row-items">
            <div className="items-box"> 
                {items
                    // .filter((item,idx)=> idx<4)
                    .map(({id,...otheritemprops})=>(
                    <Category key ={id} {... otheritemprops}/>
                ))} 
            </div>
        </div>
        
    </div>
)

export default CollectionPreview;