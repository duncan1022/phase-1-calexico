const menuItemsDivElement = document.getElementById('menu-items')

const dishImageElement = document.getElementById('dish-image')
const dishNameElement = document.getElementById('dish-name')
const dishDiscriptionElement = document.getElementById('dish-description')
const dishPriceElement = document.getElementById('dish-price')







    //Deliverable 1
fetch('http://localhost:3000/menu')
.then (response => response.json())
.then(menuItems => {
    displayMenuItemDetails(menuItems[0])
    
    menuItems.forEach ((menuItem) => {
        const spanElement = document.createElement('span')
        spanElement.textContent = menuItem.name
        menuItemsDivElement.appendChild(spanElement)
    
        //Deliverable 3
        spanElement.addEventListener('click', () => {
            displayMenuItemDetails(menuItem)
        })
    })

    })
    
    //Deliverable 2
        displayMenuItemDetails(menuItems[0])

    function displayMenuItemDetails(menuItem){
        dishImageElement.src = menuItem.image
        dishNameElement.textContent = menuItem.name
        dishDiscriptionElement.textContent = menuItem.discription
        dishPriceElement.textContent = '$' + menuItem.price 
    }

    //Deliverable 4 
    const cartFormElement = documentElementById('cart-form')
	cartFormElement.addEventlistener('submit'), (event) => {
	event.preventDefualt()
	//console.log(submitted) 
	const cartAmountInputElement = document.getElementById('cart-amount')
	const numberInCartSpanElement = documentGetElementById("number-in-cart")

	if(isNaN(Number(cartAmountInputElement.value))){
		alert("Error: That is NOT a numbber! Please try again.")
}
	else{
		const sum = Number(numberInCartSpanElement.textContent) + Number(cartAmountInputElement.value)
		numberInCartSpanElement.textContent = sum
}

}