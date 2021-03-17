    
    document.getElementById("myBtn").addEventListener("click", displayDate);
    window.addEventListener('load', displayDate);
    document.getElementById('myBtn').addEventListener("click", sayHello);
    document.getElementById('myBtn').addEventListener("mouseover", mouseOver);
    document.getElementById('myBtn').addEventListener("mouseout", mouseOut);

    function displayDate()
    {
        window.alert(Date())
    }

    function sayHello()
    {
        window.alert('Hello!');
    }

    function mouseOver()
    {
        document.getElementById('myBtn').innerHTML  = 'Mouse Over!';
    }

        function mouseOut()
    {
        document.getElementById('myBtn').innerHTML  = 'Mouse Out!';
    }
