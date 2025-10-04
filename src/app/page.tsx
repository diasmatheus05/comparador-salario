import { Divider, Grid } from "@mui/material";

import { CLT, PJ, Resume, Tabs, Text } from "@/components";

export default function Home() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Text variant="h4" styles={{ textAlign: "center", mb: 2 }}>
          COMPARADOR DE SALÁRIOS
        </Text>
        <Text styles={{ textAlign: "center" }}>
          Informe os valores nescessários e calcularemos qual a melhor escolha
          para você.
        </Text>
      </Grid>

      <Grid item xs={12}>
        <Tabs
          options={["CLT x CLT", "CLT x PJ", "PJ x PJ"]}
          initialOption={1}
        />
      </Grid>

      <Grid item xs={6}>
        <CLT />
      </Grid>

      <Grid item xs={6}>
        <PJ />
      </Grid>

      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid item xs={6}>
        <Resume />
      </Grid>

      <Grid item xs={6}>
        <Resume />
      </Grid>
    </Grid>
  );
}
