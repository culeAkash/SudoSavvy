import React from 'react'
import Board from '../components/game/Board'
import Buttons from '../components/game/Buttons'
import Controls from '../components/game/Controls'

export default function Game() {
    return (
        <div className='min-h-screen min-w-screen'>
            <div class="grid place-items-center grid-cols-1 text-white text-2xl min-h-screen">
                <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                    <Board />
                    <Buttons />
                </div>
                <Controls />
            </div>
        </div>


    )
}
