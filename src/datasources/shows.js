const { RESTDataSource } = require('apollo-datasource-rest');

class ShowAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "http://api.tvmaze.com/";
    }

    showReducer(show) {
        return {
            id: show.id || 0,
            name: show.name,
            genres: show.genres,
            premiered: show.premiered,
            medium: show.image.medium,
            original: show.image.original,
            rating: show.rating.average,
            summary: show.summary
        }
    }

    async getAllShows() {
        const response = await this.get('shows');
        return Array.isArray(response) ? response.map(show => this.showReducer(show)) : [];
    }

    async getShowsByName({name}) {
        const response = await this.get(`/search/shows?q=${name}`);
        return Array.isArray(response) ? response.map(show => this.showReducer(show.show)) : []; 
    }
}

module.exports = ShowAPI;