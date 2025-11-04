//promises = a utility to handle asynchronous operations in JavaScript
//states = pending, fulfilled, rejected
//callbacks = resolve, reject, finally  
//syntax
function fetchData(){
    return new Promise((resolve , reject) => {
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve("Data fetched successfully!");
            }else{
                reject("Error fetching data");
            }
        },3000);
    });
}
fetchData().then((data)=>{
    console.log(data);
    return `vyshnavi`;
}).then((value) => {
    console.log(value);
}).catch((error) => console.error(error));
//output after 3 seconds:
//Data fetched successfully!
//vyshnavi