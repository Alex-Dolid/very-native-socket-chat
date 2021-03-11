// Core
import React, { FC } from "react";
// Components UI
import { Drawer, List } from "@material-ui/core";
// Components
import { FriendListItem, MenuSectionTitle } from "components/reusable";
// Helpers
import { getHash } from "helpers";
// Types
import { FriendType } from "bus/chat";
// Styles
import "./FriendsMenu.scss";

type FriendsMenuPropsTypes = {
  usersQuantity: number,
  friends: FriendType[],
  username: string | null
};

const FriendsMenu: FC<FriendsMenuPropsTypes> = ({ usersQuantity, friends, username }: FriendsMenuPropsTypes) => (
  <Drawer
    className="friends-menu"
    variant="permanent"
    anchor="left"
  >
    <div className="friends-menu__toolbar">
      <FriendListItem isOnline username={username || ""} isTyping={false} />
    </div>
    <MenuSectionTitle title="Friends" quantity={usersQuantity} />
    <List className="friends-menu__list">
      { friends.map((friend) => (
        <FriendListItem
          username={friend.username}
          isOnline={friend.isOnline}
          isTyping={friend.isTyping}
          key={getHash(friend.username)}
        />
      )) }
    </List>
  </Drawer>
);

export default FriendsMenu;
