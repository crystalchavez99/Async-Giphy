
let gifs = document.querySelector("#gifs");

async function getImage(query){
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=dLXfl03PxqT8vv4VEBI8TFwLT713vLbD&q=${query}&limit=25&offset=0&rating=g&lang=en`
    try{
        let result = await fetch(endpoint)
        let data = await result.json();
        let arr = data.data.map(ele => ele.url);
        for(let el of arr){
            //console.log(el)
            let img = document.createElement("img");
            img.src = el;
            gifs.appendChild(img);
        }

    }catch(e){
        console.log(e)
    }
}

//console.log(getImage("dogs"))

let button = document.querySelector("#button");

button.addEventListener("click", (e) =>{
    console.log("clicked")
    let search = document.querySelector("input").value;
    getImage(search)
})