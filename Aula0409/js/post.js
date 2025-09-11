class Post {
    constructor(userId, id, tittle, body) {
        this.userId = userId
        this.id = id
        this.tittle = tittle
        this.body = body
    }

    static fromRaw(json) {
        return new Post(json.userId, json.id, json.title, json.body)
    }
}

