// Fetching Data from unsplash api
const UNSPLASH_API = `https://api.unsplash.com/search/users?page=1&query=all&client_id=K2TyyNkNDOk5cXp5XazAoyvvtGfI7HyEmjOHjSplSM0`
//Function to fetch data from Unsplash API
const fetchData = (url,callback)=> {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            data = response.results;
            callback(null,data)
        })
        .catch(error => {
         callback(error);
        });
        return ;
}
const renderData = (data)=> {
    data.forEach(({name,profile_image,id,username,total_likes,links})=>{
        const img = profile_image.small;
        const urlFollowers = `${links.followers}?client_id=K2TyyNkNDOk5cXp5XazAoyvvtGfI7HyEmjOHjSplSM0`;
        let followers = 0;
        // to fetch followers count
        fetchData(UNSPLASH_API,(err,data)=>{
            if(err){
               return err.message;
            }else{
                followers = data.length;
            }
        })
        //using map to render the data

        createCard(name,followers,total_likes,img,id,username);

    })
}
fetchData(UNSPLASH_API,(err,data)=>{
    if(err){
       return err.message;
    }
    else{
        // const  = data;
       return renderData(data)
    }
})


