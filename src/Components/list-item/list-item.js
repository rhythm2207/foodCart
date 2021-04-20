import React from 'react'
import Items from '../list-component/list-component'

const ListItems = ({ item, i, checked }) => {

    return (
        <Items
            checked={checked}
            name={item.name.slice(0, 15)}
            last={item.last_updated.date.slice(0, 10)}
            cogs={item.cogs}
            costPrice={item.cost_price.toString().slice(0, 5)}
            salePrice={item.sale_price.toString().slice(0, 5)}
            grossMargins={item.gross_margin.toString().slice(0, 4)}
            tags="Veg/Nonveg"
            color=
            {(i % 2) === 0
                ? "aliceblue"
                : "white"
            }
        >
        </Items>
    );
}
export default ListItems

