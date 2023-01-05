import { format } from 'date-fns'
import Storage from './Storage'
import Project from './Project'

export default class UI {
  // LOADING CONTENT

  static loadHomepage() {
    UI.loadProjects()
    UI.initProjectButtons()
  }

  static loadProjects() {
    Storage.getTodoList()
      .getProjects()
      .forEach((project) => {
        if (project.name !== 'Inbox' && project.name !== 'Today' && project.name !== 'This week') {
          UI.createProject(project.name)
        }
      })

    UI.initAddProjectButtons()
  }

  // CREATING CONTENT

  static createProject(name) {
    const userProjects = document.getElementById('projects-list')
    userProjects.innerHTML += ` 
      <button class="button-project" data-project-button>
        <div class="left-project-panel">
          <i class="fas fa-tasks"></i>
          <span>${name}</span>
        </div>
        <div class="right-project-panel">
          <i class="fas fa-times"></i>
        </div>
      </button>`

      UI.initProjectButtons()
  }

  static clearProjects() {
    const projectsList = document.getElementById('projects-list')
    projectsList.textContent = ''
  }

  

  














  // ADD PROJECT EVENT LISTENERS

  static initAddProjectButtons() {
    const addProjectButton = document.getElementById('add-project-button')
    const addProjectPopupButton = document.getElementById('button-add-project-bar')
    const cancelProjectPopupButton = document.getElementById('button-cancel-project-bar')
    const addProjectPopupInput = document.getElementById('input-add-project-bar')

    addProjectButton.addEventListener('click', UI.openAddProjectPopup)
    addProjectPopupButton.addEventListener('click', UI.addProject)
    cancelProjectPopupButton.addEventListener('click', UI.closeAddProjectPopup)
    addProjectPopupInput.addEventListener('keypress', UI.handleAddProjectPopupInput)
  }

  static openAddProjectPopup() {
    const addProjectPopup = document.getElementById('add-project-bar')
    const addProjectButton = document.getElementById('add-project-button')

    addProjectPopup.classList.add('active')
    addProjectButton.classList.add('active')
  }

  static closeAddProjectPopup() {
    const addProjectPopup = document.getElementById('add-project-bar')
    const addProjectButton = document.getElementById('add-project-button')
    const addProjectPopupInput = document.getElementById('input-add-project-bar')

    addProjectPopup.classList.remove('active')
    addProjectButton.classList.remove('active')
    addProjectPopupInput.value = ''
  }

  static addProject() {
    const addProjectPopupInput = document.getElementById('input-add-project-bar')
    const projectName = addProjectPopupInput.value

    if (projectName === '') {
      alert("Project name can't be empty")
      return
    }

    if (Storage.getTodoList().contains(projectName)) {
      addProjectPopupInput.value = ''
      alert('Project names must be different')
      return
    }

    Storage.addProject(new Project(projectName))
    UI.createProject(projectName)
    UI.closeAddProjectPopup()
  }

  static handleAddProjectPopupInput(e) {
    if (e.key === 'Enter') UI.addProject()
  }



  //PROJECT EVENT LISTENERS
  static initProjectButtons(){
    const projectButtons = document.querySelectorAll(".button-project")
    const convertButtons = Array.from(projectButtons)
    console.log(convertButtons)
    console.log(projectButtons)

    projectButtons.forEach((projectButton) =>
    projectButton.addEventListener('click', UI.handleProjectButton)

    )
  }


  static deleteProject(projectName){
    Storage.deleteProject(projectName)
    UI.clearProjects()
    UI.loadProjects()
  }

  static handleProjectButton(e) {
    const projectName = this.children[0].children[1].textContent
    console.log(projectName)
    console.log(e.target)

    if (e.target.classList.contains('fa-times')) {
      UI.deleteProject(projectName)
    }

  }

}







