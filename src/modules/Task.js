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

    getDateFormatted() {
      const day = this.dueDate.split('/')[0]
      const month = this.dueDate.split('/')[1]
      const year = this.dueDate.split('/')[2]
      console.log(`${month}/${day}/${year}`)
      return `${month}/${day}/${year}`
    }
}

  