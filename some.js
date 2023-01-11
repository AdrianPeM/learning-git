class Organization {
    constructor(data) {
        this._data = data
    }
    get name() {return this._data.name}
    set name(aString) {this._data.name = aString}
}

const organization = new Organization({name: 'Acme', country: "GB"})

function getRawOrg() {
    return organization._data
}

function getOrganization() {
    return organization
}

const newName = 'Modified name'
getOrganization().name = newName

console.log(getOrganization().name)