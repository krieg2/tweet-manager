export const searchTweets = async (query, maxId) => {
    const q = encodeURIComponent(query);
    const count = 5;
    let url = `/1.1/search/tweets.json?q=${q}&result_type=popular&count=${count}&lang=en`;

    if (maxId) {
        url = url + `&max_id=${maxId}`;
    }

    let headers = new Headers();
    headers.set("Authorization", "Bearer " + process.env.REACT_APP_TOKEN);
    headers.set("Content-Type", "application/x-www-form-urlencoded");

    let response;
    try {
        let res = await fetch(url, { method: "GET", headers });
        response = await res.json();
    } catch(err) {
        console.log(err);
    }
    return response;
};