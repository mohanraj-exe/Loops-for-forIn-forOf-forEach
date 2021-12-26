//API-JSON parsing via jsCode

//1.Creating request object
var request = new XMLHttpRequest();

//2.Open my request connection
request.open('GET','https://jsonplaceholder.typicode.com/posts');

//3.Send a request
request.send();

//4.Data after response
request.onload = function(){
    var data = JSON.parse(this.response);
    
    for(i=0; i<data.length; i++){
        console.log(data[i].id)
    }
}