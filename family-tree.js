class FamilyTree {
  constructor (value) {
    if (!value || typeof value !== 'string'){
      throw "Error"
    }
    this.children = []
    this.value = value
  }

  insert(child) {
    let childFamilyTree = new FamilyTree(child);
    this.children.push(childFamilyTree);
  }

  familySize() {
    return this.children.length;
  }
  familySize(){
    return this.children.length + 1
  }

  findMember(member){
    for (let i = 0; i < this.children.length; i++){
      let currPerson = this.children[i]
      if (currPerson.value === member){
        return currPerson
      }
    }
  }

  log(){
    const log = [`-- ${this.value}`]
    let counter = 0
    let dashes = '----'
    function childrenLooper(childrenArr){
      debugger
      if (counter > 0){
        for (let j = 0; j < counter; j++){
          dashes += '--'
        }
      }
      for (let i = 0; i < childrenArr.length; i++){
        let currPerson = childrenArr[i]
        log[0] += `\n${dashes} ${currPerson.value}`
        if (currPerson.children.length > 0){
          counter++
          childrenLooper(currPerson.children)
        }
      }
      counter --
      dashes = dashes.slice(0, dashes.length-2)
    }
    childrenLooper(this.children)
    return log
  }
}

module.exports = FamilyTree;