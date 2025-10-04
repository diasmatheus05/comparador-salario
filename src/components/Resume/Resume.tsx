import { TableList } from "..";

export function Resume() {
  return (
    <TableList.Wrapper>
      <TableList.Header label="Total dos Rendimentos" value="R$ 64.441,56" />
      <TableList.Header
        type="discount"
        label="Total dos Descontos (18%)"
        value="R$ 64.441,56"
      />
      <TableList.Header
        type="resume"
        label="Total Líquido Anual"
        value="R$ 64.441,56"
      />
      <TableList.ItemData label="Total líquido mensal" value="R$ 0,00" />
      <TableList.ItemData
        label="Valor recorrente disponível no mês"
        value="R$ 0,00"
      />
      <TableList.ItemData label="Outros rendimentos anuais" value="R$ 0,00" />
    </TableList.Wrapper>
  );
}
