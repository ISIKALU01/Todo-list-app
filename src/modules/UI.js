import { format } from 'date-fns'
import Storage from './Storage'
import Task from './Task'
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


  static loadTasks(projectName) {
    Storage.getTodoList()
      .getProject(projectName)
      .getTasks()
      .forEach((task) => UI.createTask(task.name, task.dueDate, task.priority, task.description))//????????

    if (projectName !== 'Today' && projectName !== 'This week') {
      UI.initAddTaskButtons()
    }
  }

  static loadProjectContent(projectName) {
    const projectPreview = document.getElementById('project-board')
    projectPreview.innerHTML = `
        <h1 id="project-name">${projectName}</h1>
        <div class="tasks-list" id="tasks-list"></div>`

    if (projectName !== 'Today' && projectName !== 'This week') {
      projectPreview.innerHTML += `
        <button class="button-add-task" id="button-add-task">
          <i class="fas fa-plus"></i>
          Add Task
        </button>

        <div class="add-task-popup" id="add-task-popup">
          <label for= "task-name">Task Name:</label>
          <input class="input-add-task-popup" id="input-add-task-popup" type="text" placeholder= "Task Name"/>

          <label for= "priority">Priority:</label>
          
          <select class="priority-select" name="priority" id= "priority" >
            <option class= "low" value="low">Low</option>
            <option class= "medium" value="medium">Medium</option>
            <option class= "high" value="high">High</option>
          </select>
          

          <label for= "description">Description:</label>
        
          <textarea name="description" id="description" cols="30" rows="6"></textarea>
        
          <div class="add-task-popup-buttons">
            <button class="button-add-task-popup" id="button-add-task-popup">Add</button>
            <button class="button-cancel-task-popup" id="button-cancel-task-popup">Cancel</button>
          </div>
        </div>`
    }
    UI.loadTasks(projectName)
    UI.initAddTaskButtons()
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

  static createTask(name, dueDate, priority, description) {
    const tasksList = document.getElementById('tasks-list')
    tasksList.innerHTML += `
    <div class= "container">
      <button class="button-task" data-task-button>
        <div class="left-task-panel">
          <i class="far fa-circle"></i>
          <p class="task-content">${name}</p> 
          <input type="text" class="input-task-name" data-input-task-name>
        </div>
        <div class="middle-task-panel">
          <p class="task-level">Priority:${priority}</p>
          <select class="priority" name="priority" id= "priority" >
            <option class= "low" value="low">Low</option>
            <option class= "medium" value="medium">Medium</option>
            <option class= "high" value="high">High</option>
          </select>
        </div>
        <div class="second-middle-task-panel">
          <i class="fa fa-file-text" aria-hidden="true"></i>
        </div>
        <div class="right-task-panel">
          <p class="due-date" id="due-date">${dueDate}</p>
          <input type="date" class="input-due-date" data-input-due-date>
          <i class="fas fa-times"></i>
        </div>
      </button>
      <div class="description">
        <div class= "description-content">${description}</div>
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        <input type="text" class="input-description" data-input-description>
      </div>
    </div>`

      UI.initTaskButtons()
      UI.initDescription()
  }

  static initDescription() {
    const descriptions = document.querySelectorAll('.description')
    descriptions.forEach((description) => 
      description.addEventListener('click', UI.handleDescription)
    )

  }

  static handleDescription(e) {
    const descriptionContent = this.children[0]
    const descriptionText = this.children[0].innerHTML
    const descriptionInput = this.children[2]
    
    if(e.target.classList.contains('fa-pencil-square-o')){
      this.children[0].classList.add('active')
      this.children[1].classList.add('active')
      this.children[2].classList.add('active')
    }

    if(e.target.classList.contains('input-description'))return

    console.log(descriptionContent)
    console.log(descriptionText)
    console.log(descriptionInput)

    this.children[2].value = descriptionText
  }


  static renameDescription(e){
    if(e.key !== 'Enter')return

    const projectName = document.getElementById('project-name').textContent
    const taskName = this.parentElement.parentElement.children[0].children[0].children[1].textContent
    const taskDescription = this.parentElement.children[0].textContent
    const newDescriptionContent = this.value

    

    if (newDescriptionContent === '') {
      alert("description can't be empty")
      return
    }
  
    if (taskDescription === newDescriptionContent) {
      alert('you are yet to change description')
    }

   

    console.log(newDescriptionContent)
    console.log(taskDescription)

    Storage.renameDescription(projectName, taskName, newDescriptionContent)


    UI.clearTasks()
    UI.loadTasks(projectName)
    //UI.openDescription()
    //UI.closeRenameInput(this.parentNode.parentNode)
  }

  
 

 

  static clearProjects() {
    const projectsList = document.getElementById('projects-list')
    projectsList.textContent = ''
  }

  static clearProjectBoard() {
    const projectPreview = document.querySelector('.project-board')
    projectPreview.innerHTML = ""
  }

  static clearTasks() {
    const tasksList = document.getElementById('tasks-list')
    tasksList.textContent = ''
  }

  static closeAllInputs() {
    const taskButtons = document.querySelectorAll('[data-task-button]')

    taskButtons.forEach((button) => {
      UI.closeRenameInput(button)
      UI.closeSetDateInput(button)
      UI.closePrioritySelect(button)
      UI.closeDescription(button)
    })

    
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
    UI.clearProjectBoard()
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
    if(this.classList.contains('active')){
      UI.clearProjectBoard()
    }

    if (e.target.classList.contains('fa-times')) {
      UI.deleteProject(projectName)
      UI.clearProjectBoard()
      return 
    }

    UI.openProject(projectName, this)

  }

  static openProject(projectName, projectButton) {
    const defaultProjectButtons = document.querySelectorAll('.default-project-button')
    const projectButtons = document.querySelectorAll('.button-project')
    const buttons = [...defaultProjectButtons, ...projectButtons]

    buttons.forEach((button) => button.classList.remove('active'))
    projectButton.classList.add('active')
    UI.closeAddProjectPopup()
    UI.loadProjectContent(projectName)
  }










 //ADD TASK EVENT LISTENERS

  static initAddTaskButtons(){
   const addTaskButton = document.getElementById('button-add-task')
   const addTaskPopupButton = document.getElementById('button-add-task-popup')
   const cancelTaskPopupButton = document.getElementById('button-cancel-task-popup')

   addTaskButton.addEventListener("click", UI.openAddTaskPopup )
   addTaskPopupButton.addEventListener("click", UI.addTask)
   cancelTaskPopupButton.addEventListener("click", UI.closeAddTaskPopup )
  }


  static openAddTaskPopup(){
   const addTaskPopup = document.querySelector(".add-task-popup")
   const addTaskButton = document.querySelector(".button-add-task")
  
   addTaskPopup.classList.add('active')

  }


  static closeAddTaskPopup() {
   const addTaskPopup = document.getElementById('add-task-popup')
   const addTaskInput = document.getElementById('input-add-task-popup')
   const addTaskButton = document.getElementById('button-add-task')

   addTaskPopup.classList.remove('active')
   addTaskInput.value = ''
   
 }

  static addTask(){
   const projectName = document.getElementById('project-name').textContent
   const addTaskPopupInput = document.getElementById('input-add-task-popup').value
   const addTaskPriority = document.getElementById('priority').value
   const addTaskDescription = document.getElementById('description').value

   if (addTaskPopupInput === '') {
    alert("Task name can't be empty")
    return
  }

  if (Storage.getTodoList().getProject(projectName).contains(addTaskPopupInput)) {
    alert('Task names must be different')
    addTaskPopupInput.value = ''
    return
  }

  Storage.addTask(projectName, new Task(addTaskPopupInput, "No date", addTaskPriority, addTaskDescription))
  UI.createTask(addTaskPopupInput, "No date", addTaskPriority, addTaskDescription)
  UI.closeAddTaskPopup()
 }

 static handleAddTaskPopupInput(e) {
  if (e.key === 'Enter') UI.addTask()
 }






 //TASK EVENT LISTENERS
 static initTaskButtons() {
  const taskButtons = document.querySelectorAll('[data-task-button]')
  const taskNameInputs = document.querySelectorAll('[data-input-task-name]')
  const taskLevelOptions = document.querySelectorAll('select')
  const dueDateInputs = document.querySelectorAll('[data-input-due-date]')
  const descriptions = document.querySelectorAll('.input-description')
  
  taskButtons.forEach((taskButton) =>
    taskButton.addEventListener('click', UI.handleTaskButton)
  )

  taskNameInputs.forEach((taskNameInput) =>
    taskNameInput.addEventListener('keypress', UI.renameTask)
  )
  

  taskLevelOptions.forEach((taskLevel) => 
    taskLevel.addEventListener('change', UI.resetTaskLevel)
  )


  dueDateInputs.forEach((dueDateInput) =>
    dueDateInput.addEventListener('change', UI.setTaskDate)
  )

  descriptions.forEach((description) => 
     description.addEventListener('keypress', UI.renameDescription)
   )
}

 static handleTaskButton(e) {
  if (e.target.classList.contains('fa-times')) {
    console.log(e.target)
    UI.deleteTask(this)
  }

  if (e.target.classList.contains('task-level')) {
    UI.openPrioritySelect(this)
  }

  if (e.target.classList.contains('fa-file-text')) {
    UI.openDescription(this)
  }

  if (e.target.classList.contains('due-date')) {
    UI.openSetDateInput(this)
  }

  if (e.target.classList.contains('task-content')) {
    UI.openRenameInput(this)
    return
  }

}
 static openDescription(taskButton) {
  const description = taskButton.parentElement.children[1]
  console.log(description)

  UI.closeAllInputs()

  description.classList.add('active')
 }

 static closeDescription(taskButton) {
  const description = taskButton.parentElement.children[1]
  description.classList.remove('active')
 }

 static deleteTask(taskButton) {
  const projectName = document.getElementById('project-name').textContent
  const taskName = taskButton.children[0].children[1].textContent

  Storage.deleteTask(projectName, taskName)
  UI.clearTasks()
  UI.loadTasks(projectName)
 }

 /*
 static handleDescriptionPopup(e){
  if (e.target.classList.contains('fa-times')) {
    console.log(e.target)
    this.classList.remove('active')
  }
 }
 */

 static openSetDateInput(taskButton) {
  const dueDate = taskButton.children[3].children[0]
  const dueDateInput = taskButton.children[3].children[1]

  UI.closeAllInputs()
  dueDate.classList.add('active')
  dueDateInput.classList.add('active')
}

 static closeSetDateInput(taskButton) {
  const dueDate = taskButton.children[3].children[0]
  const dueDateInput = taskButton.children[3].children[1]
  dueDate.classList.remove('active')
  dueDateInput.classList.remove('active')
}

 static setTaskDate() {
  const taskButton = this.parentNode.parentNode
  const projectName = document.getElementById('project-name').textContent
  const taskName = taskButton.children[0].children[1].textContent
  const newDueDate = format(new Date(this.value), 'dd/MM/yyyy')

  Storage.setTaskDate(projectName, taskName, newDueDate)

  UI.clearTasks()
  UI.loadTasks(projectName)
  UI.closeSetDateInput(taskButton)
 }

 static openRenameInput(taskButton) {
  const taskNameParagraph = taskButton.children[0].children[1]
  let taskName = taskNameParagraph.textContent
  const taskNameInput = taskButton.children[0].children[2]
  const projectName = taskButton.parentNode.parentNode.children[0].textContent

  UI.closeAllInputs()

  taskNameParagraph.classList.add('active')
  taskNameInput.classList.add('active')
  taskNameInput.value = taskName
 }

 static closeRenameInput(taskButton) {
  const taskName = taskButton.children[0].children[1]
  const taskNameInput = taskButton.children[0].children[2]

  taskName.classList.remove('active')
  taskNameInput.classList.remove('active')
  taskNameInput.value = ''
 }

 static renameTask(e) {
  if (e.key !== 'Enter') return

  const projectName = document.getElementById('project-name').textContent
  console.log(projectName)
  const taskName = this.previousElementSibling.textContent
  const newTaskName = this.value
  console.log(taskName)

  if (newTaskName === '') {
    alert("Task name can't be empty")
    return
  }

  if (Storage.getTodoList().getProject(projectName).contains(newTaskName)) {
    this.value = ''
    alert('Task names must be different')
    return
  }

  Storage.renameTask(projectName, taskName, newTaskName)


  UI.clearTasks()
  UI.loadTasks(projectName)
  UI.closeRenameInput(this.parentNode.parentNode)
 }

 static openPrioritySelect(taskButton) {
  const taskLevel = taskButton.children[1].children[0]
  const taskLevelSelect = taskButton.children[1].children[1]

  UI.closeAllInputs()
 
  taskLevel.classList.add('active')
  taskLevelSelect.classList.add('active')
  taskLevelSelect.value = ""
 }


 static closePrioritySelect(taskButton) {
  const taskLevel = taskButton.children[1].children[0]
  const taskLevelSelect = taskButton.children[1].children[1]

  taskLevel.classList.remove('active')
  taskLevelSelect.classList.remove('active')
 }



 static resetTaskLevel(e) {
  const projectName = document.getElementById('project-name').textContent
  const taskName = this.parentNode.previousElementSibling.children[1].textContent
  const newTaskLevel = this.value

  
  Storage.resetTaskLevel(projectName, taskName, newTaskLevel)

  UI.clearTasks()
  UI.loadTasks(projectName)
  UI.closePrioritySelect(this.parentNode.parentNode)
 }

}









