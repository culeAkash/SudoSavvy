import React from 'react'
import Board from '../components/game/Board'
import Buttons from '../components/game/Buttons'
import Controls from '../components/game/Controls'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import HomePage from './HomePage'

export default function Game() {
    // const grid = useSelector(state=>state.board)
    const { board, difficulty, selectedCell, errorCells } = useSelector(state => state)

    if (difficulty === null) {
        return <Navigate to="/" />
    }


    return (
        (<div className='min-h-screen min-w-screen'>
            <div class="grid place-items-center grid-cols-1 text-white text-2xl min-h-screen">
                <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                    <Board grid={board} selectedCell={selectedCell} errorCells={errorCells} />
                    <Buttons />
                </div>
                <Controls />
            </div>
        </div>)
    )
}
