import { Component } from "react";

class EditProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      fullName: this.props.full_name,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form className="bg-white w-2/5 h-full flex flex-col rounded-2xl">
        <div className="flex justify-between bg-white items-center pt-2 pb-2 rounded-t-2xl border-b">
          <div className="flex space-x-8 pl-4">
            <button
              onClick={() =>
                this.props.toggleEditProfileModal(!this.props.editProfileModal)
              }
              style={{ borderRadius: "50%" }}
              className="text-blue-500 text-2xl hover:bg-blue-100 px-2"
            >
              X
            </button>
            <h1 className="font-bold text-2xl">Edit Profile</h1>
          </div>
          <div className="flex pr-4">
            <button className="font-bold text-white text-lg bg-blue-500 text-center px-4  rounded-full">
              Save
            </button>
          </div>
        </div>
        <div className="flex bg-white justify-center pt-4">
          <div
            style={{ backgroundImage: `url(${this.props.avatar_url})` }}
            className="avatar"
          ></div>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <input
            className="h-16 border border-gray-400 pl-4 rounded focus:outline-none  focus:border-blue-500 focus:ring"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
            name="username"
          />
          <input
            className="h-16 border border-gray-400 pl-4 rounded focus:outline-none  focus:border-blue-500 focus:ring"
            placeholder="Full Name"
            value={this.state.fullName}
            onChange={this.handleChange}
            name="fullName"
          />
        </div>
      </form>
    );
  }
}

export default EditProfileForm;
