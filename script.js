//1.creating XHR OBJECT
var request = new XMLHttpRequest();
//2.OPENNING A CONNECTION
request.open('GET', 'https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane',true);
//3.sending a request
request.send();
//4.Receiving a response via onload
request.onload = function(){ 
    if(request.status == 200){
        var data = JSON.parse (request.responseText);
        //response string
        console.log(data);
        //DATA IS FORM OF ARRAY OF OBJECT
        //NAME & CAPITAL
        for(let i=0;i<data.length;i++){
            console.log(data[i].name+"=>"+data[i].country);

        }

    }
}
var request = new XMLHttpRequest();
//2.OPENNING A CONNECTION
request.open('GET', 'https://api.nationalize.io/?name=michael',true);
//3.sending a request
request.send();
//4.Receiving a response via onload
request.onload = function(){ 
    if(request.status == 200){
        var data = JSON.parse (request.responseText);
        //response string
        console.log(data);
        //DATA IS FORM OF ARRAY OF OBJECT
        //NAME & CAPITAL
        for(let i=0;i<data.length;i++){
            console.log(data[i].name+"=>"+data[i].country);

        }

    }
}

const baseurl ="https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane";
const getAllData = () => {};

const errorHandler = (er) =>  {
    console.error(er);
};

const requestHandler = async ( url,requestcontent = { method: "GET"}) =>{
    const response = await fetch (url,requestcontent);
    return await response.json();
};    



