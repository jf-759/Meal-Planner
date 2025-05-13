import React from 'react'

const MealCalendar = ({ mealPlan }) => {
    return (
        <div className="meal-calendar">
            <div className="meal-calendar-grid">
                {Object.keys(mealPlan).map((day) => (
                    <div key={day} className="meal-calendar-day">
                        <h3 className="day-name">{day}</h3>
                        <div className="meal-info">
                            {mealPlan[day] ? (
                                <div>{mealPlan[day]}</div>
                            ) : (
                                <p className="no-meal">No meal assigned</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MealCalendar
