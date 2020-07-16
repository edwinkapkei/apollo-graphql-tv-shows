const { RESTDataSource } = require('apollo-datasource-rest');
const fetch = require('node-fetch');
const { json } = require('sequelize');

class UserAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "http://localhost/tv-shows/";
    }

    async signup({ name, email, password }) {
        const data = { name: name, email: email, password: password }
        var response = null
        await fetch(this.baseURL + "signup.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(json => response = json);;
        return response;
    }

    async login({ email, password }) {
        const data = { email: email, password: password }
        var response = null
        await fetch(this.baseURL + "login.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(json => response = json);
        return response;
    }

    async addFavorite({ userId, showId, addToFavorites }) {
        const data = { user_id: userId, show_id: showId, addToFavorites: addToFavorites }
        var response = null
        await fetch(this.baseURL + "add_favorite.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(json => response = json);
        return response;
    }

    async addSchedule({ userId, showId, addToSchedule }) {
        const data = { user_id: userId, show_id: showId, addToSchedule: addToSchedule }
        var response = null
        await fetch(this.baseURL + "add_schedule.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(json => response = json);
        return response;
    }

    async addComment({ userId, showId, comment }) {
        const data = { user_id: userId, show_id: showId, comment: comment }
        var response = null
        await fetch(this.baseURL + "add_comment.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(json => response = json);
        return response;
    }

    async getFavorites({ userId }) {
        const data = { user_id: userId }
        var response = null
        await fetch(this.baseURL + "get_favorites.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(json => response = json);
        return response.data;
    }

    async getSchedule({ userId }) {
        const data = { user_id: userId }
        var response = null
        await fetch(this.baseURL + "get_schedule.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(json => response = json);
        return response.data;
    }

    async getComment({ userId, showId }) {
        const data = { user_id: userId, show_id: showId }
        var response = null
        await fetch(this.baseURL + "get_comment.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(json => response = json);
        return response.data.comment;
    }

    async getShowStatus({ userId, showId }) {
        const data = { user_id: userId, show_id: showId }
        var response = null
        await fetch(this.baseURL + "get_show_status.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(json => response = json);
        return {
            success: response.status == 1,
            message: response.message,
            favorite: response.favorite,
            scheduled: response.scheduled
        };
    }
}

module.exports = UserAPI;