import React from 'react'
import TopBar from '../components/TopBar'
import ChoiceBar from '../components/ChoiceBar'

export default function Inicial() {
    return (
        <div>
            <TopBar titulo="Cursos" visivel="none"/>
            <ChoiceBar/>
        </div>
    )
}