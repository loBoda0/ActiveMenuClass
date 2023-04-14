const linksList = document.querySelectorAll('ul li')
const sectionsList = document.querySelectorAll('section')

document.addEventListener('scroll', () => {
  getActiveElement()
});

function getActiveElement() {
  sectionsList.forEach(section => {
    const { top } = section.getBoundingClientRect()
    if (top < 60) {
      /* setActiveLinkByHref(section.id) */
      setActiveLinkByClass(section.id)
    }
  }
  );
}

function setActiveLinkByHref(sectionId) {
  linksList.forEach(link => {
    const linkHref = link.firstElementChild.innerHTML
    link.classList.remove('active')
    if (sectionId === linkHref.toLowerCase()) {
      link.classList.add('active')
    }
  })
}

function setActiveLinkByClass(sectionId) {
  linksList.forEach(link => {
    link.classList.remove('active')
    if (link.classList.contains(sectionId)) {
      link.classList.add('active')
    }
  })
}