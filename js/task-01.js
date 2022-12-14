const listItemRef = document.querySelectorAll('ul#categories>li');
console.log(`Number of categories:${listItemRef.length}`);

const itemRef = document.querySelectorAll('.item')

itemRef.forEach(element => {
    const category = element.firstElementChild.textContent;
    const totalElement = element.lastElementChild.children.length;
    console.log(`Category: ${category}`);
    console.log(`Elements: ${totalElement}`);
})

