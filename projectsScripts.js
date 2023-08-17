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
console.log(projectImages)
console.log(document.querySelector("#projectLister").childElementCount) //wtf there are 4??

projectInfo.forEach(project => project.style.display = "none")
projectImages.forEach(link => link.addEventListener('click',projectDisplay))


//Make the PizzaDeliveryParaplegic project the default
var defaultProjectEvent = new CustomEvent("click")
projectImages[0].dispatchEvent(defaultProjectEvent)