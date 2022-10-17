async function fetchByName(url: string, body: any){ 
    return await fetch(`/api/${url}`, 
        {
            method: 'POST',
            mode: 'cors', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        }
    )
    .then(response => response.json())
    .then(result =>  result)
    .catch(error => console.log('error', error));
}
export default fetchByName;
