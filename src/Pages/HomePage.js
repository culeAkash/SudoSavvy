import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeDifficulty } from '../app/states/difficultySlice'

export default function HomePage() {

    const difficulty = useSelector((state) => state.difficulty.value)
    const dispatch = useDispatch()


    // console.log(difficulty.value);


    const getClasses = (id) => {
        const baseClasses = 'my-1 mx-1 grow p-4 border-2'
        const hoverClasses = 'hover:border-black hover:cursor-pointer hover:shadow-md hover:shadow-current'
        const activeClasses = 'border-black cursor-pointer shadow-md shadow-current'

        if (difficulty === null)
            return `${baseClasses} border-b-gray-700/25 ${hoverClasses}`

        return difficulty === id ? `${baseClasses} ${activeClasses}` : `${baseClasses} border-b-gray-700/25 ${hoverClasses}`
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-[##0EA5E9]">
            <div className="bg-white shadow-lg p-6 md:w-3/4 md:h-1/2 w-4/5 h-4/5 text-center">
                <p className='block font-serif font-bold'>Welcome to SudoSavvy</p>
                <p className='inline-block'>Choose a mode from the below options</p>
                <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <div class="bg-white p-6 rounded shadow-md flex-1">
                        <div className='font-sans text-sky-900 font-bold my-2'>Play Sudoku</div>
                        <div className='font-serif text-sky-500 font-normal my-1'>Gives you a random sudoku game to solve. Cut your coat according to you size, choose your desired difficulty level below</div>
                        {/* Buttons for easy medium and hard */}
                        <div className='flex flex-col md:flex-row items-stretch justify-between'>{/* Flex box for the buttons */}
                            <div id='easy' className={getClasses('easy')} onClick={() => dispatch(changeDifficulty("easy"))}>Easy</div>
                            <div id='medium' className={getClasses('medium')} onClick={() => dispatch(changeDifficulty("medium"))}>Medium</div>
                            <div id='hard' className={getClasses('hard')} onClick={() => dispatch(changeDifficulty("hard"))}>Hard</div>
                        </div>
                        <div className='font-serif cursor-pointer my-2 border-2 text-blue-950 hover:border-2 hover:border-blue-400 p-3 bg-[#0EA5E9] shadow-md hover:shadow-md hover:shadow-black'>
                            PLAY
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded shadow-md flex-1">
                        <div className='font-sans text-sky-900 font-bold my-2'>Solve my Sudoku</div>
                        <div className='font-serif text-sky-500 font-normal my-1'>Maybe you have a sudoku that is yet to be solved🤔, enter all the values of the unsolved sudoku in the corresponding grid, click the "Solve button" and let the magic happen🙃</div>
                        <div className='font-serif cursor-pointer mt-14 border-2 text-blue-950 hover:border-2 hover:border-blue-400 p-3 bg-[#0EA5E9] shadow-md hover:shadow-md hover:shadow-black'>
                            SOLVE
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
