import goblinImg from './goblin.png'

class Game {
	constructor() {
		this.gameBoard = document.createElement('div')
		this.gameBoard.id = 'game-board'
		this.gameBoard.className = 'game-board'
		document.body.appendChild(this.gameBoard)

		this.cells = []
		for (let i = 0; i < 16; i++) {
			const cell = document.createElement('div')
			this.gameBoard.appendChild(cell)
			this.cells.push(cell)
		}

		this.goblin = document.createElement('img')
		this.goblin.src = goblinImg
		this.goblin.classList.add('goblin')

		this.score = 0
		this.misses = 0

		this.currentCellIndex = -1

		this.init()
	}

	init() {
		this.gameInterval = setInterval(() => {
			this.moveGoblin()
		}, 1000)

		this.cells.forEach(cell => {
			cell.addEventListener('click', event => this.handleClick(event, cell))
		})
	}

	moveGoblin() {
		let newCellIndex
		do {
			newCellIndex = Math.floor(Math.random() * 16)
		} while (newCellIndex === this.currentCellIndex)

		if (this.currentCellIndex !== -1) {
			this.misses++
			if (this.misses >= 5) {
				this.endGame()
			}
		}

		this.cells[newCellIndex].appendChild(this.goblin)
		this.currentCellIndex = newCellIndex
	}

	handleClick(event, cell) {
		const scoreIndicator = document.createElement('div')
		scoreIndicator.classList.add('score-indicator')
		scoreIndicator.style.left = `${event.pageX}px`
		scoreIndicator.style.top = `${event.pageY}px`

		if (cell.contains(this.goblin)) {
			this.score++
			this.misses = 0
			this.goblin.remove()
			scoreIndicator.textContent = '+1'
			scoreIndicator.style.color = 'yellow'
		} else {
			this.score--
			scoreIndicator.textContent = '-1'
			scoreIndicator.style.color = 'red'
		}

		document.body.appendChild(scoreIndicator)
		setTimeout(() => {
			scoreIndicator.remove()
		}, 500)
	}

	endGame() {
		clearInterval(this.gameInterval)
		alert(`Игра окончена! Твой счёт: ${this.score}`)
	}
}

export default Game
