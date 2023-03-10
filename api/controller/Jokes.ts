
const axios = require('axios')

interface jokes {
    id:string,
    jokeText: string
}

async function getJokes (req: any,res:any){
    console.log("we are here");
 let {count}  = req.query
let jokesArr: jokes[] = []
let defaultCount = 1
if(count){

    defaultCount = count
}
try {
    
for (let i = 0; i < defaultCount; i++) {
    await axios.get(process.env.URL).then((resp:any)=>{
        jokesArr.push({
            id:resp.data.id,
            jokeText:resp.data.value
        })
    })
    
}
    console.log(jokesArr);
res.send(jokesArr)
    
} catch (error) {
    console.log(error);
}
    }

module.exports = {
    getJokes
}
