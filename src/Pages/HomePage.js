import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gameSliceActions } from '../app/Game'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {

    // const difficulty = useSelector(state => state.difficulty)
    // console.log(difficulty);
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [difficultyTemp, setdifficultyTemp] = useState(null);

    // console.log(difficulty.value);
    // const difficulty = "easy"

    const getClasses = (id) => {
        const baseClasses = 'my-1 mx-1 grow p-4 border-2'
        const hoverClasses = 'hover:border-black hover:cursor-pointer hover:shadow-md hover:shadow-current'
        const activeClasses = 'border-black cursor-pointer shadow-md shadow-current'

        if (difficultyTemp === null)
            return `${baseClasses} border-b-gray-700/25 ${hoverClasses}`

        return difficultyTemp === id ? `${baseClasses} ${activeClasses}` : `${baseClasses} border-b-gray-700/25 ${hoverClasses}`
    }

    const selectDifficultyHandler = (e) => {
        console.log(e.target.id);
        setdifficultyTemp(e.target.id)
    }

    const handlePlayGameHandler = (e) => {
        e.preventDefault()
        setdifficultyTemp(null)
        dispatch(gameSliceActions.createGame({ difficulty: difficultyTemp }))
        navigate('/game')
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
                            <div id='easy' className={getClasses('easy')} onClick={selectDifficultyHandler}>Easy</div>
                            <div id='medium' className={getClasses('medium')} onClick={selectDifficultyHandler}>Medium</div>
                            <div id='hard' className={getClasses('hard')} onClick={selectDifficultyHandler}>Hard</div>
                        </div>
                        <button className='font-serif cursor-pointer my-2 border-2 text-blue-950 hover:border-2 hover:border-blue-400 p-3 bg-[#0EA5E9] shadow-md hover:shadow-md hover:shadow-black w-full disabled:bg-gray-400 disabled:text-gray-700 
                disabled:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50' disabled={difficultyTemp === null} onClick={handlePlayGameHandler}>
                            PLAY
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
