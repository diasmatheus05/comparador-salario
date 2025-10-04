import { AppBar, Toolbar } from "@mui/material";
import { Text } from "..";

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Text variant="h6">COMPARADOR DE SALÁRIOS</Text>
      </Toolbar>
    </AppBar>
  );
}
