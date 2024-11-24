import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

interface Produto {
  ano: string;
  nome_razao_social_detentor: string;
  nome_cientifico: string;
  volume_remanescente: number;
}

interface TabelaProps {
  produtos: Produto[];
}

const Tabela: React.FC<TabelaProps> = ({ produtos }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Ano</TableCell>
        <TableCell>Empresa</TableCell>
        <TableCell>Nome Científico</TableCell>
        <TableCell>Volume Remanescente</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {produtos.map((produto, index) => (
        <TableRow key={index}>
          <TableCell>{produto.ano}</TableCell>
          <TableCell>{produto.nome_razao_social_detentor}</TableCell>
          <TableCell>{produto.nome_cientifico}</TableCell>
          <TableCell>{produto.volume_remanescente}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default Tabela;
