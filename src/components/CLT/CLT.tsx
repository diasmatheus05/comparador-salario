import { Box } from "@mui/material";
import { TableList, Text } from "..";

export function CLT() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Text variant="h5" styles={{ textAlign: "center" }}>
        CLT
      </Text>

      <TableList.Wrapper>
        <TableList.Header label="Salário Anual Bruto" value="R$ 64.441,56" />
        <TableList.ItemInput label="Remuneração fixa mensal (bruta)" />
        <TableList.ItemInput label="Remuneração variável mensal (bruta)" />
      </TableList.Wrapper>

      <TableList.Wrapper>
        <TableList.Header label="Férias" value="R$ 7.811,04" />
        <TableList.ItemData
          label="Remuneração de férias (fixa + variável)"
          value="R$ 64.441,56"
        />
        <TableList.ItemData
          label="Adicional de férias (1/3)"
          value="R$ 64.441,56"
        />
      </TableList.Wrapper>

      <TableList.Wrapper>
        <TableList.Header label="13º Salário" value="R$ 7.811,04" />
        <TableList.ItemData label="Remuneração de 13º" value="R$ 64.441,56" />
      </TableList.Wrapper>

      <TableList.Wrapper>
        <TableList.Header label="Participação nos Lucros" value="R$ 7.811,04" />
        <TableList.ItemInput label="% anual sobre remuneração fixa mensal" />
      </TableList.Wrapper>

      <TableList.Wrapper>
        <TableList.Header label="Benefícios Anuais" value="R$ 7.811,04" />
        <TableList.ItemInput label="Valor diário de vale refeição" />
        <TableList.ItemInput label="Valor mensal da assistência médica" />
        <TableList.ItemInput label="Valor mensal de garagem" />
        <TableList.ItemInput label="Valor mensal de celular" />
      </TableList.Wrapper>

      <TableList.Wrapper>
        <TableList.Header
          type="discount"
          label="Descontos Anuais"
          value="R$ 7.811,04"
        />
        <TableList.ItemData
          label="INSS (Salário, 13º e férias)"
          value="R$ 0,00"
        />
        <TableList.ItemData label="IRPF" value="R$ 0,00" />
        <TableList.ItemData
          label="Vale refeição (anual) - Dedução de 20%"
          value="R$ 0,00"
        />
        <TableList.ItemInput label="Outros descontos anuais (Sindical, etc)" />
      </TableList.Wrapper>
    </Box>
  );
}
