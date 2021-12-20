const links = {
    github : "joohnq",
    linkedin: "in/joao-henrique-de-souza-silva-b43921196/",
    twitter: "joa_henrique99",
    instagram: "https_henrique99",
    facebook: "profile.php?id=100006859309373"
    }

    function changeSocialMediaLinks(){
        for(let li of socialLinks.children){
            const social = li.getAttribute('class')

            li.children[0].href = `https://${social}.com/${links[social]}`   
        }

    }

    changeSocialMediaLinks()

    function getGitHubProfileInfos(){
        const url = `https://api.github.com/users/${links.github}`

        fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name 
            userBio.textContent = data.bio 
            userLink.href.textContent = data.login 
            userLogin.textContent= data.login 
            userImage.src = data.avatar_url 
        })
    }

   getGitHubProfileInfos() 