function linkOutput()
{
    linkPaster.textContent = socialMediaLinkInfo[this.id]
}

const socialMediaLinks = document.querySelectorAll("#contactLinks .link")
const linkPaster = document.querySelector("#linkPaster")
var socialMediaLinkInfo = {
                            "Gmail": "johnzhou7913@gmail.com",
                            "Instagram": "www.instagram.com/bagel.muncher_67/?hl=en",
                            "Discord": "nm_3473",
                            "Outlook": "johnzhou2004@outlook.com"
                        }
socialMediaLinks.forEach(link => link.addEventListener('mouseover',linkOutput))

//Make the Gmail link the default
var defaultSocialMediaLinkEvent = new CustomEvent("mouseover")
socialMediaLinks[0].dispatchEvent(defaultSocialMediaLinkEvent)





