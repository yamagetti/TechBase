const button = document.getElementById("addBtn");
const title = document.getElementById("title");
const date = document.getElementById("date");
const place = document.getElementById("place");
const text = document.getElementById("text");

//データのやり取り
async function getOtenki(){
    const res = await fetch("https://weather.tsukumijima.net/api/forecast/city/016010");
    const data = await res.json();
    return data;
}

//DOM操作    
async function getTitle(){
    const data = await getOtenki();
    title.innerText = data.title;
}

async function getDetail(){
    const data = await getOtenki();
    date.innerText = data.publicTimeFormatted;
    place.innerText = data.publishingOffice;
    text.innerText = data.description.text;
 
    // list.innerText = data.publicTimeFormatted;
    // const list = document.createElement("div");
    // console.log(list);

}

window.addEventListener("load", getTitle);
button.addEventListener("click", getDetail);