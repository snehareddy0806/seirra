export function getEventList() {
    return fetch('https://www.mocky.io/v2/59f08692310000b4130e9f71')
        .then(data => data.json())
}