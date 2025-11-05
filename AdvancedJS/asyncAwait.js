function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({name:"vyshu" , url: "https://vyshu.com"});
        },3000);
    });
}

async function getUserData(){
    try{
        console.log("Fetching user data...");
        const userData = await fetchUserData();
        console.log("Usr data fetched successfully");
        console.log("User data: ", userData);
    }catch(error){
        console.log("Error fetching data", error);
    }
}
getUserData();
//output:
// Fetching user data...
// Error fetching data { name: 'vyshu', url: 'https://vyshu.com' }