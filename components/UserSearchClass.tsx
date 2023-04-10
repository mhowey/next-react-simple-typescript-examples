import { Component } from "react";
import { Heading, Button, Input, Text } from "@chakra-ui/react";

interface IUser {
  name: string;
  age: number;
}

interface IUserSearchClassProps {
  users: IUser[];
}

interface IUserSearchState {
  name: string;
  user: IUser | undefined;
}

class UserSearchClass extends Component<IUserSearchClassProps> {
  state: IUserSearchState = {
    name: "",
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });
    this.setState({ name: foundUser });
  };

  render() {
    // destructure name and user from this.state to clean things up
    const { name, user } = this.state;
    return (
      <div>
        <Heading size="lg">User Search</Heading>
        <Input
          value={name}
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        />
        <Button onClick={this.onClick}>Find User</Button>
        <div>
          <Text>
            {user && user.name} is age: {user && user.age}
          </Text>
        </div>
      </div>
    );
  }
}
export default UserSearchClass;
