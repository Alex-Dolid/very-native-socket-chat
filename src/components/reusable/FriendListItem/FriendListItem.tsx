// Core
import React, { FC, ReactElement, memo } from "react";
// Components UI
import {
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
// Components
import { StyledBadge } from "components/reusable";
// Types
import { FriendType } from "bus/chat";
// Styles
import "./FriendListItem.scss";

const FriendListItem: FC<FriendType> = ({ username, isOnline, isTyping }: FriendType): ReactElement => (
  <ListItem button className="friend-list-item">
    <ListItemIcon>
      <StyledBadge
        className={ !isOnline ? "styled-badge_offline" : ""}
        // для таких речей і більш продвинутих використовується ліба classnames
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        variant="dot"
      >
        <Avatar alt={ username } src="/static/images/avatar/1.jpg" />
      </StyledBadge>
    </ListItemIcon>
    <ListItemText primary={ username } secondary={ isOnline && isTyping ? "...is typing" : null } className="friend-list-item__item-text" />
  </ListItem>
);

export default memo(FriendListItem);
