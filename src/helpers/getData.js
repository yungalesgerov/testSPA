export async function getData(num) {

    return await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=${num}`).then(data=>data.json());
   
    // return await fetch(`https://jsonplaceholder.typicode.com/comments/?_limit=${num}`)
    //     .then(response => response.json())
}
