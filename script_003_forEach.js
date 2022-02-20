//API-JSON parsing via jsCode

//1.Creating request object
var request = new XMLHttpRequest();

//2.Open my request connection
request.open('GET','https://jsonplaceholder.typicode.com/users');

//3.Send a request
request.send();

//4.Data after response
request.onload = function (){
    var data = JSON.parse(this.response);
    
    data.forEach(arr);

    function arr(item){
        console.log(item)
    }
}