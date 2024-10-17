const url = "https://jsonplaceholder.typicode.com/posts/1";

const getApi=async ()=>{
    const response=await fetch(url);
    const json=await response.json();
    console.log(json)
    const output=document.getElementById("output");
    output.innerHTML=`${json.title}`
}