export default class Task {
    constructor(name, dueDate, priority, description) {
      this.name = name
      this.dueDate = dueDate
      this.priority = priority
      this.description = description
    }
  
    setName(name) {
      this.name = name
    }
  
    getName() {
      return this.name
    }
  
    setDate(dueDate) {
      this.dueDate = dueDate
    }
  
    getDate() {
      return this.dueDate
    }

    setPriority(priority){
      this.priority = priority
    }

    getPriority() {
      return this.priority 
    }

    setDescription(description){
      this.description = description
    }

    getDescription(){
      return this.description
    }
}

  