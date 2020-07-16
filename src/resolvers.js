module.exports = {
    Query: {
        shows: (_, { page }, { dataSources }) => dataSources.showAPI.getAllShows({ page: page }),
        search: (_, { name }, { dataSources }) => dataSources.showAPI.getShowsByName({ name: name }),
        show: (_, { showId }, { dataSources }) => dataSources.showAPI.getShowById({ showId: showId }),
        favorites: async (_, { showIds }, { dataSources }) => {
            const shows = await dataSources.showAPI.getFavorites({ showIds })
            return shows
        },
        schedule: async (_, { showIds }, { dataSources }) => {
            const shows = await dataSources.showAPI.getScheduled({ showIds })
            return shows
        },
    },

    // Mutation: {
    //     login: async (_, { email, password }, { dataSources }) => {
    //         const user = await dataSources.userAPI.findUser({ email, password })
    //     }
    // },

    Show: {
        // The default size is 'LARGE' if not provided
        image: (image, { size } = { size: 'ORIGINAL' }) => {
            return size === 'MEDIUM'
                ? image.medium
                : image.original;
        },
    },

    Person: {
        // The default size is 'LARGE' if not provided
        image: (image, { size } = { size: 'ORIGINAL' }) => {
            return size === 'MEDIUM'
                ? image.medium
                : image.original;
        },
    },
}