const input = document.querySelector("input")
const btn = document.querySelector(".btn")
const favbtn = document.querySelector(".2btn")
const img = document.querySelector(".img")
const h3 = document.querySelector("h3") 
const h4 = document.querySelector("h4")



function getMoovie() {
    if (input.value !== "") {
        const URL = `http://www.omdbapi.com/?s=${input.value}&apikey=${Key}`;
        axios.get(URL)
            .then(res => {
                const body = res.data.Search;
                console.log(body);
                body.forEach(element => {
                    const title = element.Title;
                    const year = element.Year;
                    const poster = element.Poster;
                    const li = document.createElement("li");
                    li.innerHTML = `
                    <img src="${poster}" alt="poster">
                    <h2>${title}</h2>
                    <h3>${year}</h3>        
                    `;
                    ul.appendChild(li);
 
                });
 
            })
            .catch(e => console.error(e));
    }
}
 
submitBtn.addEventListener("click", getMovie);




