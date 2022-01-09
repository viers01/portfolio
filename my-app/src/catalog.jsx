import React from "react";
import {analytics, collection, getDocs, db} from "./db";

function Catalog(props) {
    const getCards = async () => {
        const citiesCol = collection(db, 'cards');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        return cityList;
    }

    const makeGoods = async () => {
        let goods = await getCards();
        return goods;
    }
  
    return (
    <p>
        123
    </p>
    );
}


