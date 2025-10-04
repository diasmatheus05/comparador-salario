import { Box } from "@mui/material";
import { TableList, Text } from "..";

export function PJ() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Text variant="h5" styles={{ textAlign: "center" }}>
        PJ
      </Text>

      <TableList.Wrapper>
        <TableList.Header label="Rendimento Anual Bruto" value="R$ 64.441,56" />
        <TableList.ItemInput label="Valor da nota mensal fixo (bruto)" />
      </TableList.Wrapper>

      <TableList.Wrapper>
        <TableList.Header label="Férias" value="R$ 64.441,56" />
        <TableList.ItemInput label="Férias remuneradas" />
        <TableList.ItemInput label="Dias de férias por ano" />
      </TableList.Wrapper>

      <TableList.Wrapper>
        <TableList.Header label="Benefícios Anuais" value="R$ 64.441,56" />
        <TableList.ItemInput label="Valor mensal de garagem" />
        <TableList.ItemInput label="Valor mensal de celular" />
        <TableList.ItemInput label="Valor mensal de outros benefícios" />
      </TableList.Wrapper>

      <TableList.Wrapper>
        <TableList.Header
          type="discount"
          label="Descontos Anuais"
          value="R$ 7.811,04"
        />
        <TableList.ItemInput label="Pro-Labore / Salário-Base para INSS" />
        <TableList.ItemData
          label="INSS PF (Classe 1 - Salário-Base R$ 0,00)"
          value="R$ 0,00"
        />
        <TableList.ItemInput label="Outros" />
        <TableList.ItemData
          label="IRRF PF (Pró-Labore R$ 0,00)"
          value="R$ 0,00"
        />
        <TableList.ItemData label="ISSQN (%)" value="2,00 %" />
        <TableList.ItemData label="CPP" value="2,60 %" />
        <TableList.ItemData label="PIS" value="0,16 %" />
        <TableList.ItemData label="Confins" value="0,76 %" />
        <TableList.ItemData label="IR" value="0,24 %" />
        <TableList.ItemData label="Contribuição Social (CSLL)" value="0,20 %" />
        <TableList.ItemInput label="Despesas com contador (mensal)" />
        <TableList.ItemInput label="Contribuição sindical anual" />
        <TableList.ItemInput label="Despesas anuais com a empresa" />
      </TableList.Wrapper>
    </Box>
  );
}
