class Post {
    constructor(userId, id, title, body) {
        this.userId = userId
        this.id = id
        this.title = title
        this.body = body
    }

    static fromRaw(raw) {
        return new Post(raw.userId, raw.id, raw.title, raw.body)
    }

    renderFrom(container) {
        container.innerHTML =
         `
         <div>
            <h2>${this.userId}</h2>
            <h4>${this.title}</h4>
            <p>${this.body}</p
         </div>
        `
    }
}
