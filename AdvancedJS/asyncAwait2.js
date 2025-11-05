function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Post Data Fetched");
        },2000);
    });
}

function fetchCommentData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Comment data fetched.");
        },3000);
    });
}

async function getBlogData(){
    try{
        console.log("Fetching blog data");
    // const blogData = await fetchPostData();
    // const commentData  = await fetchCommentData();
        //instead of above two lines use promise.all()
        //here promise.all() returns 2 values as we are calling 2 functions inside it
    const[postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()]);
        console.log(postData);
        console.log(commentData);
        console.log("fetch complete");
    }catch(error){
        console.log("Error fetching blog data", error);
    }
}
getBlogData();
//you can use "Promise.all()" , it takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved.
//ouput: 
//Fetching blog data
// Post Data Fetched
// Comment data fetched.
// fetch complete
