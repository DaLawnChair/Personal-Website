// Codes for REST API from Github WIP:
// function getInfoYES()
// {
//     fetch("https://api.github.com/repos/DaLawnChair/Pizza-Delivery-Paraplegic/commits")
//         .then((response) => {
//             console.log("resolved", response)
//             return response.json()
//         })
//         .then((data) =>{
//             console.log(data[0].commit.message)
//             lol.push(data[0].commit.message)
//         })
//         .catch()
// }

// var lol = []
// getInfoYES()
// console.log(lol)

// let lol = [[]]
// const getProjectCommitsInfo = async (i, url) => {
//     const response = await fetch(url)
//     const data = await response.json()
//     return data
// }

// async function formatCommitInfo()
// {
//     try{
//         console.log(projectURLs.length)
//         let range = []
//         for(let i=0;i<projectURLs.length;i++)
//         {
//             range.push(i)
//         }
//         console.log("poop")

//         const projects = [
//             getProjectCommitsInfo(0,projectURLs[0]),
//             getProjectCommitsInfo(1,projectURLs[1]),
//             getProjectCommitsInfo(2,projectURLs[2])
//         ]
//         let i=0
//         for await(const data of projects)
//         {
//             lol[i].push(data[data.length-1].commit.author.date.slice(0,10))
//             lol[i].push(data[0].commit.author.date.slice(0,10))
//             lol[i].push(data[0].commit.message)
//             console.log(i)
//             i++
//         }

//         console.log(lol)
//     }
//     catch{

//     }
// }




//Displaying the projects
function projectDisplay()
{
    projectInfo.forEach(project => project.style.display = "none")
    projectInfo[projectNames[this.id]].style.display = "block"    
}

const projectImages = document.querySelectorAll("#projectLister .project")
const projectNames = {
                        "PizzaDeliveryParaplegic": 0,
                        "Calculator": 1,
                        "LungCancerDetection": 2
                    }       

const projectInfo = document.querySelectorAll(".projectInfo")


projectInfo.forEach(project => project.style.display = "none")
projectImages.forEach(link => link.addEventListener('click',projectDisplay))


//Make the PizzaDeliveryParaplegic project the default
var defaultProjectEvent = new CustomEvent("click")
projectImages[0].dispatchEvent(defaultProjectEvent)


var projectURLs = [
    "https://api.github.com/repos/DaLawnChair/Pizza-Delivery-Paraplegic/commits",
    "https://api.github.com/repos/DaLawnChair/TOP-calculator/commits",
    "https://api.github.com/repos/JacksonKehoe/LungCancerDetection/commits"
]

// Use the Github REST API, WIP
// getGithubProjectCommitInfo()
// formatCommitInfo()



