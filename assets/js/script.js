const dots = document.querySelectorAll('.dot');
const sections = document.querySelectorAll('.section');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        if (!dot.classList.contains('active')) {
            dots.forEach(dot => dot.classList.remove('active'));
            dot.classList.add('active');

            const currentSection = document.querySelector('.section.active');
            currentSection.classList.add('fade-out');
            setTimeout(() => {currentSection.classList.remove('active')}, 350);

            sections[index].classList.add('fade-in');
            setTimeout(() => {
                sections.forEach(section => section.classList.remove('fade-out'));
                sections[index].classList.add('active');
            }, 400);

            const navOptions = document.querySelectorAll('.option');

            navOptions.forEach((op) => {
              const text1 = op.querySelector('p').textContent;
              op.querySelector('p').textContent = text1;
            });

            const text = navOptions[index].querySelector('p').textContent;
            navOptions[index].querySelector('p').innerHTML = `<s>${text}</s>`;
        }
    });
});


document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.container').classList.add('nav');
  document.querySelector('.nav-toggle').classList.add('active');
  document.querySelector('.nav-options').classList.add('active');
  document.querySelector('.dabba').classList.add('off');

  document.querySelector('.container').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('nav');
    document.querySelector('.nav-toggle').classList.remove('active');
    document.querySelector('.nav-options').classList.remove('active');
    document.querySelector('.dabba').classList.remove('off');
  });
});


const navOptions = document.querySelectorAll('.option');

navOptions.forEach((option, index) => {
  option.addEventListener('click', () => {

    navOptions.forEach((op) => {
      const text1 = op.querySelector('p').textContent;
      op.querySelector('p').innerHTML = text1;
    });

    const text = option.querySelector('p').textContent;
    option.querySelector('p').innerHTML = `<s>${text}</s>`;

    document.querySelector('.container').classList.remove('nav');
    document.querySelector('.nav-toggle').classList.remove('active');
    document.querySelector('.nav-options').classList.remove('active');
    document.querySelector('.dabba').classList.remove('off');

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    const currentSection = document.querySelector('.section.active');
            currentSection.classList.add('fade-out');
            setTimeout(() => {currentSection.classList.remove('active')}, 350);
            sections[index].classList.add('fade-in');
            setTimeout(() => {
                sections.forEach(section => section.classList.remove('fade-out'));
                sections[index].classList.add('active');
            }, 400);
  });
});


const ds_Pro = document.querySelectorAll('.ds-projects');
const ds_Sections = document.querySelectorAll('.ds-section');

ds_Pro.forEach((ds, index) => {
    ds.addEventListener('click', () => {
        if (!ds.classList.contains('active')) {
            ds_Pro.forEach(ds => ds.classList.remove('active'));
            ds.classList.add('active');

            const currentSection = document.querySelector('.ds-section.active');
            currentSection.classList.add('fade-out');
            setTimeout(() => {currentSection.classList.remove('active')}, 350);

            ds_Sections[index].classList.add('fade-in');
            setTimeout(() => {
                ds_Sections.forEach(section => section.classList.remove('fade-out'));
                ds_Sections[index].classList.add('active');
            }, 400);
        }
    });
});
