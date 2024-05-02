import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import TabBarComponent from '../components/common/TabbarComponent';
import HeaderSearch from '../components/common/HeaderSearch';
import FoodCarousel from '../components/specific/carouselTipsFood';
import RestaurantCarousel from '../components/specific/carouselRestaurant';
import LatestRestaurantsCarousel from '../components/specific/latestRestaurants';
import { useSelector } from 'react-redux';

export default function HomePage (){
    const userProfile = useSelector(state => state.user.profile);
    const [selectedFoodType, setSelectedFoodType] = useState('');
    
    console.log('===================>', userProfile)
    const handleFoodSelect = (type) => {
        setSelectedFoodType(type);
    };

    return(
        <View style={styles.container}>
            <HeaderSearch style={styles.headerSearch} type={'Home'} />
            <Text style={styles.title}>Enjoy Delicious food</Text>
            <FoodCarousel onFoodSelect={handleFoodSelect} />
            <LatestRestaurantsCarousel />
            <RestaurantCarousel selectedFoodType={selectedFoodType} />
            <TabBarComponent />
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    title:{
        width: 287,
        height: 31,
        marginTop: 20,
        marginLeft: 24,
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 31.25,
    }
  });