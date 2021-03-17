window.addEventListener('load', getAPIdata)



function getAPIdata()
{
    var xhttp = new XMLHttpRequest();

    var key = '930a1b44';
    var searchValue = document.getElementById('search-text').value;
    console.log(searchValue);

    var apiurl ='https://www.omdbapi.com/?apikey=' + key + '&t=' + searchValue;

    console.log(apiurl);

    xhttp.open('GET', apiurl);

    xhttp.send();

    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            var data = JSON.parse(this.responseText);
            console.log(data);

            document.getElementById('title').innerHTML = data.Title;
            document.getElementById('year').innerHTML = data.Year;
            document.getElementById('plot').innerHTML = data.Plot;
            document.getElementById('poster').src = data.Poster;

            document.getElementById('search-text').value = null;

            //document.write('<h1>' + data.Title + '</h1>');
        }
    }
}


