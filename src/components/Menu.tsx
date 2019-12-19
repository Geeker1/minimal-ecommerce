import React, { useState } from 'react';

import { Menu, MenuItemProps,Input } from 'semantic-ui-react';
import FETCH_ALL_CATEGORIES, { CategoryInterface, CategoryVars, CategoryDetail } from '../queries/category';
import { useQuery } from '@apollo/react-hooks';

interface ItemProps{
    name: string;
    itemID: string;
}

const items: ItemProps[] = [
    {name:"Men's Clothing", itemID:"ksjdsk"},
    {name:"Fashion Shoes", itemID:"iikjik"},
    {name:"Hats and Caps", itemID:"sidusd"},
    {name:"Mobile Phones", itemID:"ihihusdds"}
]

const ProductMenu: React.FC = ()=>{
    const [ state, setState ] = useState<string | undefined>('')
    const { loading, error, data } = useQuery<CategoryInterface, CategoryVars>(FETCH_ALL_CATEGORIES);
    const { Item } = Menu;
    const handleItemClick = (
		e: React.MouseEvent,
		{ itemID }:MenuItemProps) => {
			setState(itemID)
		}
    return(
        <Menu
            stackable
            color='orange'
            className='menu'
            pointing
            secondary
        >
            <Item
                name="All"
                active={state === ''}
                onClick={handleItemClick}
                itemID=""
            />
            {
                loading || error ?
                items.map((item, index)=>{
                    return (
                        <Item
                            name={item.name}
                            key={index}
                            active={state === `${item.itemID}`}
                            itemID={item.itemID}
                            onClick={handleItemClick}
                        />
                    )
                })
                :
                data!.allCategories.edges.map((key, index)=>{
                    let item:CategoryDetail = key.node;
                    return (
                        <Item
                            key={index}
                            name={item.name}
                            itemID={item.id}
                            active={state === `${item.id}`}
                            onClick={handleItemClick}
                        />
                    )
                })
            }

            <Menu.Menu position='right'>
                <Item>
                <Input icon='search' placeholder='Search...' />
                </Item>
            </Menu.Menu>
        </Menu>
    )
}

export default ProductMenu;