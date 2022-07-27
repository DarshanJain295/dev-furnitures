import React from "react";
import SHOP_DATA from "./shop.data";

import Navbar2 from "../../components/navigation/navbar2.js";
import Footer from '../../components/footer/footer';
import './shop-page.css';

import CollectionPreview from '../../components/collectionpreview/colllectionpreview.js'
import Navbar from "../../components/navigation/navbar";

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections: SHOP_DATA
        }
    }
    render(){
        const {collections} = this.state;
        return(
            <div className="shop-page">
               
               {collections.map( ({id,...otherCollectionProps}) =>
                    ( < CollectionPreview key={id} {...otherCollectionProps}/>)
               )}
            
            </div>
        );
    }
}

export default ShopPage;