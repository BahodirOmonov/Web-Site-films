// let API_KEY = 'b971c2f0de8767f08d2bb84160ba24b7'

let API_KEY = 'dcea1fd7b3e65d34387ad6de7ef9cc5e'

let tokenTop = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1` 
let tokenPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`
let tokenUpComing = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=1`

let divAppend = document.querySelector('.append')
let buttons = document.querySelectorAll('.btns')
let buttonNext = document.querySelector('.next')
let buttonPrev = document.querySelector('.prev')
let pageNum = document.querySelector('.title')
let buttonSearch = document.querySelector('.btn')



async function updateTop(page) {
	tokenTop = tokenTop.slice(0, -1) + page
	let response = await fetch(tokenTop)
	return await response.json()
}

async function updatePopular(page) {
	tokenPopular = tokenPopular.slice(0, -1) + page
	let response = await fetch(tokenPopular)
	return await response.json()
}

async function updateUpComing(page) {
	tokenUpComing = tokenUpComing.slice(0, -1) + page
	let response = await fetch(tokenUpComing)
	return await response.json()
}

async function renderTop(page, searchValue, minValue, maxValue, scoreValue) {
	let pageNumber = page ? page : 1
	let data = await updateTop(pageNumber)

	data = data.results	

	divAppend.innerHTML = null

	for(let i of data) {
		if(i.title.toLowerCase().includes(searchValue ? searchValue.toLowerCase() : "")) {
			if(minValue ? min.value <= i.release_date.slice(0, 4) : true) {
				if(maxValue ? max.value >= i.release_date.slice(0, 4) : true) {
				    if(scoreValue ? scoreValue <= i.vote_average : true) {
				    	let div = document.createElement('div')
						div.className = 'movie'
						div.innerHTML = `
							<img src="https://image.tmdb.org/t/p/w500${i.poster_path}" alt=${i.title}>
				   
				            <div class="movie-info">
				                <h3>${i.title}</h3>
				                <span class="orange">${i.vote_average}</span>
				            </div>
				            <span class="date">${i.release_date}</span>
						`
						divAppend.append(div)
				    }
				}
			}

		}

	}
	pageNum.textContent = pageNumber
	buttonNext.onclick = () => {
		pageNumber++
		renderTop(pageNumber)
		pageNum.textContent = pageNumber.toString()
	}

	buttonPrev.onclick = () => {
		if(pageNumber === 1) return
		pageNumber--
		renderTop(pageNumber)
		pageNum.textContent = pageNumber.toString()
	}

	buttonSearch.onclick = () => {
		if(!search.value && !min.value && !max.value && !score.value) return
		renderTop(pageNumber, search.value, min.value, max.value, score.value)
	}
}

async function renderPopular(page, searchValue, minValue, maxValue, scoreValue) {
	let pageNumber = page ? page : 1
	let data = await updatePopular(pageNumber)
	data = data.results

	divAppend.innerHTML = null

	for(let i of data) {
		if(i.title.toLowerCase().includes(searchValue ? searchValue.toLowerCase() : "")) {
			if(minValue ? min.value <= i.release_date.slice(0, 4) : true) {
				if(maxValue ? max.value >= i.release_date.slice(0, 4) : true) {
				    if(scoreValue ? scoreValue <= i.vote_average : true) {
				    	let div = document.createElement('div')
						div.className = 'movie'
						div.innerHTML = `
							<img src="https://image.tmdb.org/t/p/w500${i.poster_path}" alt=${i.title}>
				   
				            <div class="movie-info">
				                <h3>${i.title}</h3>
				                <span class="orange">${i.vote_average}</span>
				            </div>
				            <span class="date">${i.release_date}</span>
						`
						divAppend.append(div)
				    }
				}
			}

		}

	}
	pageNum.textContent = pageNumber
	buttonNext.onclick = () => {
		pageNumber++
		renderPopular(pageNumber)
		pageNum.textContent = pageNumber.toString()
	}

	buttonPrev.onclick = () => {
		if(pageNumber === 1) return
		pageNumber--
		renderPopular(pageNumber)
		pageNum.textContent = pageNumber.toString()
	}

	buttonSearch.onclick = () => {
		if(!search.value && !min.value && !max.value && !score.value) return
		renderPopular(pageNumber, search.value, min.value, max.value, score.value)
	}
}

async function renderUpComing(page, searchValue, minValue, maxValue, scoreValue) {
	let pageNumber = page ? page : 1
	let data = await updateUpComing(pageNumber)
	data = data.results

	divAppend.innerHTML = null

	for(let i of data) {
		if(i.title.toLowerCase().includes(searchValue ? searchValue.toLowerCase() : "")) {
			if(minValue ? min.value <= i.release_date.slice(0, 4) : true) {
				if(maxValue ? max.value >= i.release_date.slice(0, 4) : true) {
				    if(scoreValue ? scoreValue <= i.vote_average : true) {
				    	let div = document.createElement('div')
						div.className = 'movie'
						div.innerHTML = `
							<img src="https://image.tmdb.org/t/p/w500${i.poster_path}" alt=${i.title}>
				   
				            <div class="movie-info">
				                <h3>${i.title}</h3>
				                <span class="orange">${i.vote_average}</span>
				            </div>
				            <span class="date">${i.release_date}</span>
						`
						divAppend.append(div)
				    }
				}
			}

		}

	}
	pageNum.textContent = pageNumber
	buttonNext.onclick = () => {
		pageNumber++
		renderUpComing(pageNumber)
		pageNum.textContent = pageNumber.toString()
	}

	buttonPrev.onclick = () => {
		if(pageNumber === 1) return
		pageNumber--
		renderUpComing(pageNumber)
		pageNum.textContent = pageNumber.toString()
	}

	buttonSearch.onclick = () => {
		if(!search.value && !min.value && !max.value && !score.value) return
		renderUpComing(pageNumber, search.value, min.value, max.value, score.value)
	}
}

buttons[0].onclick = () => {
	renderTop()
}


buttons[1].onclick = () => {
	renderPopular()
}

buttons[2].onclick = () => {
	renderUpComing()
}






renderTop()
