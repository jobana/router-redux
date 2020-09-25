import React from 'react'

const Carousel = ({ children }) => (
    <section className="carousel-container">
        <div className="carousel">
            {children}
        </div>
    </section>
)

export default Carousel