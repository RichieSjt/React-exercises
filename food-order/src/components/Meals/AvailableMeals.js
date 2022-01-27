import { React, useState, useEffect } from 'react'

import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
import useHttp from '../../hooks/use-http'
import FIREBASE from '../../utils/api-keys'

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    
    const { isLoading, error, sendRequest: fetchMeals } = useHttp()

    useEffect(() => {
        const transfromMeals= (mealsObj) => {
            const loadedMeals = []
    
            for (const mealsKey in mealsObj) {
                loadedMeals.push({ 
                    id: mealsKey, 
                    name: mealsObj[mealsKey].name,
                    description: mealsObj[mealsKey].description,
                    price: mealsObj[mealsKey].price
                })
            }
            
            setMeals(loadedMeals)
        }

        fetchMeals({ url: FIREBASE + 'meals.json' }, transfromMeals)
    }, [fetchMeals])


    const mealsList = meals.map(meal => <MealItem key={meal.id} id={meal.id} title={meal.name} description={meal.description} price={meal.price} />)
    
    let content = mealsList

    if (isLoading) content = <p>Loading meals...</p>
    if (error) content = <p>{error}</p>

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {content}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals