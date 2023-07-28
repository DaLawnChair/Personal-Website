//For the aboutMe.html
function linkOutput()
{
    linkPaster.textContent = socialMediaLinkInfo[this.id]
    console.log(linkPaster.textContent) 
}
function testCheck()
{
    linkPaster.textContent = socialMediaLinkInfo[this.id]
    console.log(linkPaster.textContent) 
}
const socialMediaLinks = document.querySelectorAll("#contactLinks .link")
const linkPaster = document.querySelector("#linkPaster")
var socialMediaLinkInfo = {
                            "Gmail": "johnzhou7913@gmail.com",
                            "Instagram": "https://www.instagram.com/bagel.muncher_67/?hl=en",
                            "Discord": "Nm#3473",
                            "Outlook": "johnzhou2004@outlook.com"
                        }
console.log(socialMediaLinks)

socialMediaLinks.forEach(link => link.addEventListener('click',linkOutput))
socialMediaLinks.forEach(link => link.addEventListener('mouseover',testCheck))