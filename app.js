console.log("Let's get this party started!");
const div = document.querySelector('#divForm');
const input = document.querySelector('#inputSearch')
const deleteBtn = document.querySelector('#remove')


async function submitForm(giphy) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${giphy}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
    const res = await axios.get(url);
    console.log(res)
    appendGIF(res.data)
}

function appendGIF(res) {
    if(input.value){
        const img = document.createElement('img');
        let numResults = res.data.length;
        let randomIdx = Math.floor(Math.random() * numResults);
        console.log(randomIdx);
        img.src = res.data[randomIdx].images.original.url;
        div.append(img);
        input.value=''
    }   
}

$('form').on('submit', function(e) {
    e.preventDefault();
    submitForm(input.value);
    console.log(input.value);
})

$('#remove').on('click', function(){
    $('#divForm').empty();
})
