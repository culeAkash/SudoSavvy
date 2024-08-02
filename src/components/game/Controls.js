import React from 'react'
import { useDispatch } from 'react-redux'
import { gameSliceActions } from '../../app/Game'

export default function Controls() {
    const dispatch = useDispatch()


    const submitGame = (e) => {
        e.preventDefault()

        dispatch(gameSliceActions.checkSubmitGame())
    }

    const onGiveup = (e) => {
        e.preventDefault()
        dispatch(gameSliceActions.giveUp())
    }
    return (
        <div className='flex flex-row gap-4'>
            <button onClick={submitGame} className='border-2 p-2 cursor-pointer hover:bg-white hover:text-cyan-400 shadow-md'>Submit Game</button>
            <button onClick={onGiveup} className='border-2 p-2 cursor-pointer hover:bg-red-600 shadow-md'>Give Up</button>
        </div>
    )
}
