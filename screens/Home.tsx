import { Avatar, Divider, ListItem } from '@rneui/base';
import { ListItemContent } from '@rneui/base/dist/ListItem/ListItem.Content';
import { ListItemSubtitle } from '@rneui/base/dist/ListItem/ListItem.Subtitle';
import { ListItemTitle } from '@rneui/base/dist/ListItem/ListItem.Title';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { axiosConfig } from '../lib/axios';
import { Products } from '../types/products';

const MainScreen = () => {
    const [products, setProducts] = useState<Products[]>([])

    useEffect(() => {
        axiosConfig.get('products').then((resposta)=>{
            setProducts(resposta.data.products)
        })
    }, [])

    return (
        <ScrollView>
        {
            products.map((product) => (
                <ListItem key={product.id}>
                        <Avatar source={{uri: product.thumbnail}} />
                        <ListItemContent>
                            <ListItemTitle>
                                {product.title}
                            </ListItemTitle>
                            <ListItemSubtitle>
                                ${product.price}
                            </ListItemSubtitle>
                        </ListItemContent>
                    </ListItem>
            ))
        }
        <Divider />
      
    </ScrollView>
    );
};

export default MainScreen;