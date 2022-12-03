const numberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: `, numberOfCategories.length);

const categories = [...document.querySelectorAll('.item h2')].map((category) => category.textContent);
const elements = [...document.querySelectorAll('.item ul')].map((element) => element.children.length);




for (let i = 0; i < categories.length; i +=1) {
    console.log(`Category: `, categories[i]);
    console.log(`Elements: `, elements[i]);
    }