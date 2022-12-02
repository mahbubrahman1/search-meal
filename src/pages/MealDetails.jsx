import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion';

const MealDetails = () => {
    const { id } = useParams()
    const [meal, setMeal] = useState({})

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then(data => setMeal(data.meals[0]))
    }, [])

    return (
        <motion.div
            Layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className='m-5 flex justify-center'>
            <div className="2xl:w-4/12 xl:w-6/12 lg:6/12 md:w-6/12 sm:full-w rounded-lg overflow-hidden shadow-md">
                <img className="w-full" src={meal.strMealThumb} alt={meal.strMeal} />
                <div className="px-5 py-3">
                    <div className="font-bold text-xl text-left mb-2">{meal.strMeal}</div>
                    <p className="text-gray-700 text-base text-left">Instruction: {meal.strInstructions}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default MealDetails