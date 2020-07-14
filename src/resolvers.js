module.exports = {
    Query: {
        shows: (_, __, { dataSources }) => dataSources.showAPI.getAllShows(),
        search: (_, { name }, { dataSources }) => dataSources.showAPI.getShowsByName({ name: name }),
    },

    Mutation:{
        login: async (_, {email,password},{dataSources}) =>{
            const user = await dataSources.userAPI.findUser({email,password})
        }
    },

    Show: {
        // The default size is 'LARGE' if not provided
        image: (image, { size } = { size: 'ORIGINAL' }) => {
            return size === 'MEDIUM'
                ? image.medium
                : image.original;
        },
    },
}