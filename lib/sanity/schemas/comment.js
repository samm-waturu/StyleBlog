export default({
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        ({
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
            description: `Comments won't show on the site without approval`
        }),

        ({
            name: 'comment',
            title: 'Comment',
            type: 'text'
        }),

        ({
            name: 'email',
            title: 'Email',
            type: 'string'
        }),

        ({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),

        ({
            name: 'post',
            type: 'reference',
            to: [{ type: 'post'}]
        }),

    ],

})
