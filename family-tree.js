class FamilyTree {
  constructor (value) {
    if (!value || typeof value !== 'string'){
      throw 'hi';
    }
    this.value = value;
    this.children = [];
  }

  insert(child) {
    let childFamilyTree = new FamilyTree(child);
    this.children.push(childFamilyTree);
  }

  familySize() {
    return this.children.length;
  }
}

const anthonyTree = new FamilyTree('anthony');
anthonyTree.insert('tonyjr');
anthonyTree.insert('tommy');
anthonyTree.insert('remy');


console.log(anthonyTree.familySize());