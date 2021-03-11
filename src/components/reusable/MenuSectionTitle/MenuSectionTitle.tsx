// Core
import React, { FC, ReactElement } from "react";
// Components UI
import { Badge, Divider } from "@material-ui/core";
// Styles
import "./MenuSectionTitle.scss";

type MenuSectionTitlePropsTypes = {
  title: string,
  quantity: number
}

const MenuSectionTitle: FC<MenuSectionTitlePropsTypes> = ({ title, quantity }: MenuSectionTitlePropsTypes): ReactElement => (
  <div className="menu-section-title">
    <Badge badgeContent={ quantity } color="primary">
      <span className="menu-section-title__title">
        { title }
      </span>
    </Badge>
    <Divider />
  </div>
);

export default MenuSectionTitle;
