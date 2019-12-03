class Project {
    constructor(
        _id, projectTitle, projectDescription, backend, frontend, demo
        ) {
            this._id = _id
            this.projectTitle = projectTitle
            this.projectDescription = projectDescription
            this.backend = backend
            this.frontend = frontend
            this.demo = demo
    }
}

module.exports = Project