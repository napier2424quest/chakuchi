async function fetchCombinations() {
    const response = await fetch('jsoncombinations.json');
    const data = await response.json();
    return data;
}

function calculateShortage() {
    const currentValue = parseInt(document.getElementById('current-value').value);
    const targetValue = parseInt(document.getElementById('target-value').value);
    const shortage = targetValue - currentValue;
    
    document.getElementById('shortage').innerText = shortage;

    fetchCombinations().then(combinations = {
        const results = combinations.filter(row = row['獲得数'] === shortage);
        displayResults(results);
    });
}

function displayResults(results) {
    const tbody = document.getElementById('result-table').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';   Clear previous results

    results.forEach(row = {
        const tr = document.createElement('tr');
        Object.values(row).forEach(value = {
            const td = document.createElement('td');
            td.innerText = value;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}