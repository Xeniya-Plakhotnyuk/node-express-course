

const button = document.querySelector('#myButton')
const result = document.querySelector('#result')


button.addEventListener('click', async () => {
    try {
        // Fetch data 
        const response = await fetch('http://localhost:3000/api/v1/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // JSON response
        const data = await response.json();

        // data to div 
        result.innerHTML = JSON.stringify(data); 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});