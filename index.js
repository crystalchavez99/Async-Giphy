require('dotenv').config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)
//let gifs = document.querySelector("#gifs");

async function getImage(query){
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`
    //try{
        let result = await fetch(endpoint)
        let data = await result.json();
        //console.log(data.data[0].images)
        let arr = data.data.map(ele => ele.images.original.url);
        //console.log(arr)
        // for(let el of arr){
        //     //console.log(el)
        //     let img = document.createElement("img");
        //     img.src = el;
        //     gifs.appendChild(img);
        // }
      // console.log(arr[0])
       return arr[0]
    // }catch(e){
    //     console.log(e)
    // }

}

console.log(getImage("dogs"))

// let button = document.querySelector("#button");

// button.addEventListener("click", (e) =>{
//     console.log("clicked")
//     let search = document.querySelector("input").value;
//     getImage(search)
// })
