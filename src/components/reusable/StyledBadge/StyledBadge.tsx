// Components UI
import { Badge, createStyles, Theme, withStyles } from "@material-ui/core";
// Styles
import "./StyledBadge.scss";

const StyledBadge = withStyles((theme: Theme) => createStyles({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: "\"\"",
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge); // можна було переробити, але не в цьому ж суть і звісно на бойовому проекті
// вирішується який стиль юзати і всі дотримуються конкретних стайл гайдів

export default StyledBadge;
