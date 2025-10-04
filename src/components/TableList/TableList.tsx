import { List, ListItem, Paper, TextField } from "@mui/material";

import { Text } from "..";

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <Paper sx={{ overflow: "hidden" }}>
      <List sx={{ p: 0 }}>{children}</List>
    </Paper>
  );
}

function Header({
  label,
  value,
  type = "income",
}: {
  label: string;
  value: string;
  type?: "income" | "discount" | "resume";
}) {
  const backgroundColor = (() => {
    if (type === "discount") return "warning.700";
    if (type === "resume") return "success.900";

    return "success.700";
  })();

  return (
    <ListItem sx={{ backgroundColor }}>
      <Text variant="h6" styles={{ width: "100%", color: "white" }}>
        {label}
      </Text>
      <Text
        variant="h6"
        styles={{ textAlign: "end", textWrap: "nowrap", color: "white" }}
      >
        {value}
      </Text>
    </ListItem>
  );
}

function ItemInput({ label }: { label: string }) {
  return (
    <ListItem>
      <Text variant="subtitle2" styles={{ width: "100%" }}>
        {label}
      </Text>
      <TextField
        variant="filled"
        placeholder="R$ 0,00"
        sx={{ backgroundColor: "white", right: -4 }}
        inputProps={{
          style: { textAlign: "end", padding: "4px" },
        }}
      />
    </ListItem>
  );
}

function ItemData({ label, value }: { label: string; value: string }) {
  return (
    <ListItem>
      <Text variant="subtitle2" styles={{ width: "100%" }}>
        {label}
      </Text>
      <Text
        variant="subtitle2"
        styles={{ textAlign: "end", textWrap: "nowrap" }}
      >
        {value}
      </Text>
    </ListItem>
  );
}

export const TableList = {
  Wrapper,
  Header,
  ItemInput,
  ItemData,
};
