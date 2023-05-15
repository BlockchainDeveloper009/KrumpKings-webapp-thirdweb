// import initStrip from 'stripe'
const j = {
    "version": "1.0",
    "Actions": {
        "1.": "Learn hooks",
        "2.": "docker",
        "3.": "azure feature",
        "4.": "security audit tools",
        "5.": "blockchain fundamentals"

    },
    "ResearchOrder": {
        "1.": "Ask chat cpt",
        "2.": "refer your github notes",
        "3.": "stackOverflow",
        "4.": "Reddit forum",
        "5.": "Update your github notes"
    },
}
console.log(j)
var i = JSON.stringify(j);
console.log(i)
const test = async (req,res) => {

   
    res.send({ status: 200,message: `
    ${i}
    `})
    
};

export default test;