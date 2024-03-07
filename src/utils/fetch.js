async function handleFetch(url){
    try {
        const options = {
            method: "GET"
        }

        const response = await fetch(url, options)
        const results = await response.json()
        console.log('from the imported function', results)
        return results

    } catch (err) {
        console.log("Something horrendous happened when fetching data")
    }

}


export {handleFetch}