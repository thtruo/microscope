// map the root / URL to the postsList template
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('posts'); }
});

// Iron Router will look for a template
// with the same name as the route
// (even the path based on the route name)
Router.map(function() {
    this.route('postsList', {path: '/'});

    this.route('postPage', {
        path: 'posts/:_id',
        data: function() { return Posts.findOne(this.params._id); }
    });
});