var httpRequest = new XMLHttpRequest();
var api = "https://www.reddit.com/r/PuppySmiles.json";

httpRequest.open("GET", api);
httpRequest.send();
httpRequest.addEventListener("readystatechange", processRequest, false);

function processRequest(e) {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var data = e.target.response;
        var parsedData = JSON.parse(data);
        var posts = parsedData.data.children;
        console.log(posts)

        for(var i = 0; i < posts.length; i++) {
            var heading = document.createElement('h2');
            heading.innerText = posts[i].data.title;
            document.body.appendChild(heading);

            var link = document.createElement('a');
            link.setAttribute('href', 'single.html?url=https://www.reddit.com' + posts[i].data.permalink);
            link.style.width = '200px';
            document.body.appendChild(link);
            link.appendChild(heading);

            var postBody = document.createElement('img');
            postBody.setAttribute('src', posts[i].data.thumbnail);
            document.body.appendChild(postBody);
        }
    }
}

