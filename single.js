var locations = location.search.substring(1).split('=')[1] + '.json';
console.log(locations)

$(document).ready(function() {
    $.ajax ({
        method: "GET",
        url: locations,
    })

    .then(function(success) {
        var data = success[0].data.children[0].data.thumbnail;
        var head = document.createElement('h1');
        head.innerText = success[0].data.children[0].data.title;
        document.body.appendChild(head);
        
        var div = document.createElement('div');
        var img = document.createElement('img');
        img.src = data;
        div.appendChild(img);
        document.body.appendChild(div);
    })
})





     