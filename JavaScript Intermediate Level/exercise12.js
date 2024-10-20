function findIntersection() {
    const array1 = document.getElementById('array1Input').value.split(',').map(Number);
    const array2 = document.getElementById('array2Input').value.split(',').map(Number);
    const intersection = array1.filter(value => array2.includes(value));

    document.getElementById('result').innerText = `Intersection: ${intersection.join(', ')}`;
}
