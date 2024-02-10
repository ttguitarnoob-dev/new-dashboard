export async function handleFetch(url){
    try {
        const options = {
            method: "GET"
        }

        const response = await fetch(url, options)
        const results = await response.json()
        return results

    } catch (err) {
        console.log("Something horrendous happened when fetching data")
    }

}