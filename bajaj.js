async function createAccount(){
    const url = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount';
    const data = {
        name: "Vikas Goyal",
        "email": "vikas1538.be21@chitkara.edu.in",
        "rollNumber": 2110991538,
        "phone": 9501571234,
    }
    
    const response = await fetch(url,{
        method: 'Post',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    const result = await response.json();
    return result.accountNumber;
    console.log(result);
}

async function buyStock(){
    const url = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks';
    const data = {
        company: 'Bajaj Finserv Ltd',
        currentPrice: 1578,
        accountNumber: this.accountNumber,
        githubRepoLink: 'https://github.com/vikasgoyall/bajaj'
    }
    
    const response = await fetch(url,{
        method: 'POST',
        headers:{
            'Content-type': 'application/json',
            'bfhl-auth': 2110991538,
        },
        body: JSON.stringify(data);
    })
    const result = await response.json();
    return result;
}

async function main(){
    const accountNumber = await createAccount();
    const result = await buyStock();
}