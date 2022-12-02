import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';

const Meal = (props) => {
    const navigate = useNavigate()
    const handleDetailsClick = () => {
        navigate(`/meal/${props.meal.idMeal}`)
    }

    return (
        <motion.div
            Layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className='m-3'>
            <div className="rounded-lg overflow-hidden shadow-md">
                <img className="w-full" src={props.meal.strMealThumb} alt={props.meal.strMeal} />
                <div className="px-5 py-3">
                    <div className="font-bold text-xl mb-2">{props.meal.strMeal}</div>
                    <p className="text-gray-700 text-base">{props.meal.strInstructions.slice(0, 120)}</p>
                    <button onClick={handleDetailsClick} className="mt-3 inline-flex justify-start px-3 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-800">
                        Details
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default Meal