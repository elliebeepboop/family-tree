class FamilyTree {
  constructor (value) {
    if (!value || typeof value !== 'string'){
      throw
    }
    this.children = []
    this.name = value
  }
  insert(child){
    let childFamilyTree = new FamilyTree(child)
    this.children.push(childFamilyTree)
  }
  familySize(){}
}

module.exports = FamilyTree;
