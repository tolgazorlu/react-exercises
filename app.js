import axios from 'axios';

async function getData(userNumber){
    const {data:user}  = await axios("https://jsonplaceholder.typicode.com/users/" + userNumber)
    const {data:post} = await axios("https://jsonplaceholder.typicode.com/users/" + userNumber)
    console.log(user, post)
} 

export default getData;