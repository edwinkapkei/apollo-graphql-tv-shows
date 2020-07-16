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

    async addFavorite({ userId, showId }) {
        const data = { user_id: userId, show_id: showId }
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

    async addSchedule({ userId, showId }) {
        const data = { user_id: userId, show_id: showId }
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
        const data = { user_id: userId, show_id: showId ,comment: comment}
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
}

module.exports = UserAPI;