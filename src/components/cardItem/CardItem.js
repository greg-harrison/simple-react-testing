import React from 'react'

export const CardItem = ({ id, title }) => {
    return (
        <div className="cardItem" key={id}>
            {title}
        </div>
    )
}
