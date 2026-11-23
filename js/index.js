document.addEventListener('DOMContentLoaded', () => {
    const footerElement = document.createElement('footer');
    document.body.appendChild(footerElement);

    const today = new Date();
    const thisYear = today.getFullYear();
    const footer = document.querySelector('footer');
    const copyright = document.createElement('p');
    copyright.innerHTML = `© Deniz Katar ${thisYear}`;
    footer.appendChild(copyright);

    const skills = ['JavaScript', 'HTML', 'CSS', 'Java', 'Selenium', 'Git'];
    const skillsSection = document.querySelector('#Skills');
    const skillsList = skillsSection.querySelector('ul');

    for (let i = 0; i < skills.length; i++) {
        const skill = document.createElement('li');
        skill.innerText = skills[i];
        skillsList.appendChild(skill);
    }
});
