
fetch('https://jsonplaceholder.typicode.com/photos?_limit=20').then((response)=>
{
    return response.json();
}).then((apidata)=>
{
    apidata.map((val)=>{
        console.log(val.url);
        key = val.id;

        // Creating an HTML element using JS

        let img = document.createElement('img');
        img.src = `https://picsum.photos/200/300?random=${val.id}` ;
        document.getElementById('cent_cont').appendChild(img);
    },)
})