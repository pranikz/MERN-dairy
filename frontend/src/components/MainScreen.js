import React from 'react'

const MainScreen = ({title,children}) => {
    return (
        <div className='min-h-93p flex py-3'>
            <div className='container mx-auto'>
                <div className='grid grid-flow-col px-3 text-base lg:text-2xl'>
                    <div className='px-2'>
                {title && (
                    <>
                    <h1 className='text-xl lg:text-5xl'>{title}</h1>
                    <hr/>
                    </>)}
                    <div className='mt-5'>{children}</div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainScreen
