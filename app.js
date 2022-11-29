const partilharB = document.querySelectorAll('.tile-partilhar')
console.log(partilharB)

async function copiarT(e){
	e.preventDefault()
	const link = this.getAttribute('link')
	console.log(link)

	try{
		await navigator.clipboard.writeText(link)
		alert("Copiado: "+ link)

	}catch(err){
		console.error(err)
	}
}

partilharB.forEach(partilharB =>
 partilharB.addEventListener('click',copiarT))