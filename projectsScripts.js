//Github REST API to get commit details

// const username = "DaLawnChair"
// const pizzaDeliveryParaplegicRepoURL = "https://api.github.com/repos/DaLawnChair/PizzaDeliveryParaplegic/commits"
// const lungCancerDetectionRepoURL = "https://api.github.com/repos/JacksonKehoe/LungCancerDetection/commits"
// const calculatorRepoURL = "https://api.github.com/repos/DaLawnChair/TOP-calculator/commits"

// const headers  = {
//     Authorization: "Bearer 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"
// }

// fetch(pizzaDeliveryParaplegicRepoURL, { headers})
// .then(response => {
//     if(response.ok)
//     {
//       response.json()
//     }
//     else
//     {
//       console.log("ERROR, improper response")
//     }
// })
// .then(data => {
//   console.log(data)
//   const commitContainer = document.getElementById('commit-container');
//   data.forEach(commit => {
//     const commitMessage = commit.commit.message;
//     const commitTitle = commit.commit.message.split('\n')[0]; // First line as title
//     const commitDate = commit.commit.committer.date;

//     // const commitElement = document.createElement('div');
//     // commitElement.innerHTML = `
//     //   <h3>${commitTitle}</h3>
//     //   <p>${commitMessage}</p>
//     //   <p>${commitDate}</p>
//     //   <hr>
//     // `;

//     // commitContainer.appendChild(commitElement);
//     console.log(commitMessage)
//   });
// })
// .catch(error => console.error('Error fetching commit data:', error));

/** @type {import("./$types").PageLoad} */
export async function loadProjectInfo(projectURL)
{
    // const res = await fetch(projectURL)
    // const data = await res.json()
    // console.log(data[0])
    // console.log(data[0].commit)
    //getGithubProjectCommitInfoFormated(data[data.length].commit.date,data[0].commit.date,data[0].commit.message)

    const address = fetch(projectURL)
        .then(res => {
            if (res.ok)
            {
                console.log('Success')
                res.json()
                .then(data => {
                    return data
                    //projectCommitInfo.push(`<b>Created:</b> ${data[data.length].commit.date} &emsp;<b>Last Modified:</b> ${data[0].commit.date}&emsp;<b>Commit Title:</b> ${data[0].commit.message}`)
                    //console.log(`<b>Created:</b> ${data[data.length].commit.date} &emsp;<b>Last Modified:</b> ${data[0].commit.date}&emsp;<b>Commit Title:</b> ${data[0].commit.message}`)
                })
            }
            else
            {
                console.log('Not Successful')
            }
        })
    // console.log(`<b>Created:</b> ${data[data.length].commit.date} &emsp;<b>Last Modified:</b> ${data[0].commit.date}&emsp;<b>Commit Title:</b> ${data[0].commit.message}`)

}



// function getGithubProjectCommitInfoFormated(created, lastModified,title)
// {
//     console.log(created,lastModified,title)
//     return "<b>Created:</b> Circa 12 July 2021 &emsp;<b>Last Modified:</b> 23 September 2022&emsp;<b>Commit Title:</b> ${title}"
// }
var projectCommitInfo=[]
function getGithubProjectCommitInfo()
{
    for(let name in projectURLs)
    {
        const awaitReturn = async () => {
            const data = await loadProjectInfo(projectURLs[name])
            projectCommitInfo.push(`<b>Created:</b> ${data[data.length].commit.date} &emsp;<b>Last Modified:</b> ${data[0].commit.date}&emsp;<b>Commit Title:</b> ${data[0].commit.message}`)
        }
    }
    console.log(projectCommitInfo)
}



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
//console.log(projectImages)
//console.log(document.querySelector("#projectLister").childElementCount) //wtf there are 4??

projectInfo.forEach(project => project.style.display = "none")
projectImages.forEach(link => link.addEventListener('click',projectDisplay))


//Make the PizzaDeliveryParaplegic project the default
var defaultProjectEvent = new CustomEvent("click")
projectImages[0].dispatchEvent(defaultProjectEvent)


var projectURLs = {
    "PizzaDeliveryParaplegic": "https://api.github.com/repos/DaLawnChair/Pizza-Delivery-Paraplegic/commits",
    "Calculator": "https://api.github.com/repos/DaLawnChair/TOP-calculator/commits",
    "LungCancerDetection": "https://api.github.com/repos/JacksonKehoe/LungCancerDetection/commits"
}
getGithubProjectCommitInfo()

