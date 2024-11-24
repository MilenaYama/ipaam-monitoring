// components/Filtro.tsx
import { TextField, Button, Stack, Box } from '@mui/material';
import React, { useState } from 'react';

interface FiltroProps {
  onFiltroChange: (filtros: { ano: string; empresa: string; especie: string }) => void;
}

const Filtro: React.FC<FiltroProps> = ({ onFiltroChange }) => {
  const [ano, setAno] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [especie, setEspecie] = useState('');

  const handleFilter = () => {
    onFiltroChange({ ano, empresa, especie });
  };

  return (
    <Box>
      <Stack spacing={2}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <TextField
            label="Ano"
            variant="outlined"
            fullWidth
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />
        </Stack>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <TextField
            label="Nome da Empresa"
            variant="outlined"
            fullWidth
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          />
        </Stack>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <TextField
            label="Espécie"
            variant="outlined"
            fullWidth
            value={especie}
            onChange={(e) => setEspecie(e.target.value)}
          />
        </Stack>
      </Stack>
      <Button onClick={handleFilter} variant="contained" color="primary" sx={{ marginTop: 2 }}>
        Filtrar
      </Button>
    </Box>
  );
};

export default Filtro;
