import React from 'react'

const MealCalendar = ({ mealPlan }) => {
    return (
        <div className="grid grid-cols-7 gap-4 p-4">
            {Object.keys(mealPlan).map((day) => (
                <div key={day} className="p-4 border border-gray-300 rounded">
                    <h3 className="text-center font-semibold">{day}</h3>
                    <div className="mt-2">
                        {mealPlan[day] ? (
                            <div>{mealPlan[day]}</div>
                        ) : (
                            <p className="text-gray-500">No meal assigned</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MealCalendar