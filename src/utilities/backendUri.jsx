class BackendUri {
    static base = 'http://localhost:5000'
    static cities = this.base + '/cities'
    static types = this.base + '/types'
    static hotels = this.base + '/hotels'
}

export default BackendUri;