function get_random_fox_image(){
    url = "https://randomfox.ca/floof/"
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        displayImage(data.image)
    })
    .catch((err)=>err);
}

function displayImage(image_url){
    document.getElementById("image").src=image_url
}