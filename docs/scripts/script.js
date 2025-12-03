document.addEventListener("DOMContentLoaded", () => {
   console.log("document loaded");
   document.getElementById('onClick').addEventListener('click', onClick); 
 }
);

function onClick () {
  console.log('in onClick event');
  document.getElementById('onClick').style.transform = 'rotate(15deg)'
  console.log('after rotation');
}

// script to pull data from json file and create project cards
fetch('https://znasser46.github.io/znasser46/projects.json').then(response => response.json())
    .then(data => {
        
        const projectCardSet = document.getElementById('projectCardSet');
        data.projects.forEach(project => {
            console.log(project);
            const card = document.createElement('div');
            card.className = "cards";
            const cardName = document.createElement('h1');
            cardName.textContent = `${project.name}`;
            card.appendChild(cardName);

            const repoLink = document.createElement('a');
            repoLink.className = "repoLinks";
            repoLink.href = `${project.repo}`;
            repoLink.textContent = "Repo Link";
            repoLink.target = "_blank";
            card.appendChild(repoLink);

            const projectLink = document.createElement('a');
            projectLink.className = "projectLinks";
            projectLink.href = `${project.app}`;
            projectLink.textContent = "project Link";
            projectLink.target = "_blank";
            card.appendChild(projectLink);

            const projectImg = document.createElement('img');
            projectImg.className = "projectImg";
            projectImg.src = `${project.img}`;
            projectImg.alt = "project image";
            card.appendChild(projectImg);


            // card.textContent = ` ${project.repo}, ${project.app}, ${project.img}`;
            
            projectCardSet.appendChild(card);

            
        });
       
    })
    .catch(error => console.error('Error fetching app ideas:', error));

    // script to pull data from json file and create achievement cards
fetch('https://znasser46.github.io/znasser46/achievements.json').then(response => response.json())
    .then(data => {
        
        const achievementCardSet = document.getElementById('achievementCardSet');
        data.achievements.forEach(achievement => {
            console.log(achievement);
            const card = document.createElement('div');
            card.className = "cards";
            const cardName = document.createElement('h1');
            cardName.textContent = `${achievement.name}`;
            card.appendChild(cardName);

            const repoLink = document.createElement('a');
            repoLink.className = "repoLinks";
            repoLink.href = `${achievement.repo}`;
            repoLink.textContent = "Repo Link";
            repoLink.target = "_blank";
            card.appendChild(repoLink);

            const achievementLink = document.createElement('a');
            achievementLink.className = "achievementLinks";
            achievementLink.href = `${achievement.app}`;
            achievementLink.textContent = "achievement Link";
            achievementLink.target = "_blank";
            card.appendChild(achievementLink);

            const achievementImg = document.createElement('img');
            achievementImg.className = "achievementImg";
            achievementImg.src = `${achievement.img}`;
            achievementImg.alt = "achievement image";
            card.appendChild(achievementImg);


            // card.textContent = ` ${achievement.repo}, ${achievement.app}, ${achievement.img}`;
            
            achievementCardSet.appendChild(card);

            
        });
       
    })
    .catch(error => console.error('Error fetching app ideas:', error));