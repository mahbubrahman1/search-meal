import React, { useEffect, useState } from 'react'
import Meal from '../components/Meal'
import { motion, AnimatePresence } from 'framer-motion';

const Meals = () => {
    const [searchText, setSearchText] = useState('')
    const [meals, setMeals] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(response => response.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    const handleSearchField = (event) => {
        const searchInput = event.target.value
        setSearchText(searchInput)
    }

    return (
        <div>
            <div className='flex justify-center'>
                <input onChange={handleSearchField} type="text" placeholder='Search Meals' className="mt-4 block lg:w-6/12 md:w-8/12 sm:w-8/12 text-center px-3 py-2 bg-white border border-slate-400 rounded-md text-sm placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500" />
            </div>
            <motion.div
                className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-5'>
                <AnimatePresence>
                    {
                        meals.map(meal => <Meal
                            key={meal.idMeal}
                            meal={meal}
                        />)
                    }
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default Meals