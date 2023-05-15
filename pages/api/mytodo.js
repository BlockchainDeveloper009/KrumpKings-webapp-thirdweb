// import initStrip from 'stripe'
const j = {
    "context": "todo",
    "Actions": {
        "1.": "Learn hooks",
        "2.": "docker",
        "3.": "azure feature",
        "4.": "security audit tools",
        "5.": "blockchain fundamentals- distributed database"

    },
}
console.log(j)
var i = JSON.stringify(j);
console.log(i)
const mytodo = async (req,res) => {

   
    res.send({ status: 200,message: `
    ${i}
    `})
    
};

export default mytodo;