import React from 'react'

export default function HomePage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[##0EA5E9]">
            <div className="bg-white shadow-lg p-6 md:w-3/4 md:h-1/2 w-4/5 h-4/5 text-center">
                <p className='block font-serif font-bold'>Welcome to SudoSavvy</p>
                <p className='inline-block'>Choose a mode from the below options</p>
                <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <div class="bg-white p-6 rounded shadow-md flex-1 hover:border-solid hover:border-red-200">
                        {/* <!-- Card 1 Content --> */}
                        Card 1 Content
                    </div>
                    <div class="bg-white p-6 rounded shadow-md flex-1">
                        {/* <!-- Card 2 Content --> */}
                        Card 2 Content
                    </div>
                </div>
            </div>
        </div>
    )
}
