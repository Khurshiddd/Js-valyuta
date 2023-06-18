"use strict"
const uzs = document.querySelector('#uzs');
const usd = document.querySelector('#usd');
uzs.addEventListener('input', (e)=>{
	const request = new XMLHttpRequest()
	request.open('GET','kurs.json')
	request.setRequestHeader('Content-Type','application/json; charset=utf-8')
	request.send()
	request.addEventListener('readystatechange',()=>{
		if (request.readyState === 4 && request.status === 200) {
			const data = JSON.parse(request.response)
			usd.value = (+uzs.value / data.kurs.usd).toFixed(2)
		}else{
			usd.value = "something went wrong"
		}
	})
})