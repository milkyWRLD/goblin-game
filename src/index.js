import goblinImg from './goblin.png'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
	const gameBoard = document.getElementById('game-board')

	for (let i = 0; i < 16; i++) {
		const cell = document.createElement('div')
		gameBoard.appendChild(cell)
	}

	const goblin = document.createElement('img')
	goblin.src = goblinImg
	goblin.classList.add('goblin')

	let currentCellIndex = Math.floor(Math.random() * 16)
	gameBoard.children[currentCellIndex].appendChild(goblin)

	setInterval(() => {
		let newCellIndex
		do {
			newCellIndex = Math.floor(Math.random() * 16)
		} while (newCellIndex === currentCellIndex)

		gameBoard.children[newCellIndex].appendChild(goblin)
		currentCellIndex = newCellIndex
	}, 1000)
})
