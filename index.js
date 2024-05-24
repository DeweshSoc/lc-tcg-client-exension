const generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click',generateTestCase);

async function generateTestCase(){
    const datastructure = document.getElementById('datastructure').value;
    if(!datastructure){
        alert('Invalid Option');
        return;
    }
    
    const url = `https://lc-tcg.onrender.com/api/${datastructure}/0`;

    const headersList = {
        "Accept": "*/*"
    }

    let response = await fetch(url, {
        method: "GET",
        headers: headersList
    });

    let data = await response.json();
    // console.log(data);
    document.getElementById('generatedData').innerHTML = data[datastructure];
}