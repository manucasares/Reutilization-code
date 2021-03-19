import React from 'react'

export const Title = ( { text, font = 'Open Sans', color = "#ffffff" } ) => {

    return (
        <div className="title__component">
            <div className="title__container">
                <h2
                    className="title"
                    style={{
                        fontFamily: `${ font }, sans-serif`,
                        textAlign: 'center',
                        color: `${ color }`
                    }}
                >
                    { text }
                </h2>
    
                <div
                    className="underline"
                    style={{  borderTop: `3px solid ${ color }` }}
                ></div>
            </div>
        </div>
    )
}
