import React from 'react'

export default function Buttons() {
    let buttons = []
    for (let i = 1; i <= 9; i++) {
        buttons[i - 1] = i;
    }
    return (
        <div className='flex flex-row md:flex-col mt-3 md:mt-0 gap-2'>
            {buttons.map((button, index) => (
                <div>
                    <button className="bg-white rounded-full shadow-md text-black font-bold w-6 hover:shadow-md hover:shadow-slate-700">{button}</button>
                </div>
            ))}
        </div>
    )
}
