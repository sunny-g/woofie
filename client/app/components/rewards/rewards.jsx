Rewards = React.createClass({
  mixins: [ReactMeteor.mixin],

  getMeteorState: function() {
    return {};
  },

  render: function() {
    // ?? Meteor.users vs Users
    var users = Meteor.users.find();
    console.log(users);

    return (
      <div>
        <ul className="users collection">
          {users.map(function(user) {
            return <UserListItem key={user._id} data={user} />
          })}
        </ul>
      </div>
    );
  }
});