const keyExtractor = (item, index) => {
    return `${index}`;
}

function objectToQueryString(obj, startsWithAnd) {

    let queryParams = "";
    let queryArr = [];

    if (!obj) {
        return queryParams
    }

    !!obj && Object.keys(obj)
        .forEach((key) => (obj[key] == null || obj[key] === undefined || obj[key] === "" || obj[key].length < 1) && delete obj[key]);

    queryParams = startsWithAnd ? "&" : "";
    Object.keys(obj).forEach(function (key) {
        queryArr.push(`${key}=${obj[key]}`);
    });

    return queryParams + `${queryArr.join('&')}`

}

function generateURL(path, paramsObj) {
    let params = objectToQueryString(paramsObj, false);
    if (path && params) {
        params = '?' + params;
    }
    return path + params;
}


export default Utils = {
    keyExtractor,
    generateURL,
    objectToQueryString
}

