const options = {
	method: 'GET',
	
};

let mealList = document.getElementById("items");

const searchBtn = document.getElementById("buton");

searchBtn.addEventListener("click",getMealList);

function getMealList(){
    let searchInputText=document.getElementById("search-btn").value.trim();
    // console.log(searchInputText);

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`,options)
    .then(response =>response.json())
    .then(data =>{
        console.log(data);
        let html="";
        
        if(data.meals)
        data.meals.forEach(function (meal){
            html +=
            `<div id="meal-item" class="meal-item">
                <img class="img" src="${meal.strMealThumb}" alt="">
                <h3>${meal.strMeal}</h3>
                <a href="#" class="recipe-btn">Get Recipe</a>
            </div>`
        });


        


        mealList.innerHTML=html;



    })
}
