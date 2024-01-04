/** @type {import("./$types").PageLoad} */
export async function load()
{
    const res = await fetch("https://api.github.com/repos/DaLawnChair/TOP-calculator/commits")
    const data = await res.json()
    console.log(data[0])
    console.log(data[0].commit.message) 
}

// const octokit = new Octokit({
//     auth: "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"
// })

load()
console.log("Done")


