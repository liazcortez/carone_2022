import React, { useEffect } from "react";
import { List, Typography, ListItemButton } from "@mui/material";
import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";


const classes = {
  listItemTextStyle: {
    color: "primary.main",
    fontWeight: 600,
  },
};

const DashboardMenu = ({ selectedIndex }) => {
  const router = useRouter();
  const { user, firstLoad } = useAuth();
  const menu = [
    {
      title: "Perfil",
      href: "/perfil",
    },
     {
        title: "Curriculum",
        href: "/perfil/curriculum",
     }
 
  ];

  useEffect(() => {
    if (!user && firstLoad) router.push("/");
    //eslint-disable-next-line
  }, [user]);

  return (
    <List>
      {menu.map((item, index) => (
        <ListItemButton
          key={index}
          onClick={() => router.push(item.href)}
          style={{ paddingX: "5px", paddingY: 1 }}
        >
          <Typography
            style={index === selectedIndex ? classes.listItemTextStyle : {}}
            variant="body2"
          >
            {item.title}
          </Typography>
        </ListItemButton>
      ))}
    </List>
  );
};

export default DashboardMenu;
