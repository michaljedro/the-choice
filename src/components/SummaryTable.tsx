import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Choice, Option } from '@/types';

type Column = {
  readonly id: 'ordinal' | 'optionName' | number;
  readonly label: string;
  readonly align?: TableCellProps['align'];
};

type Row = Record<Column['id'], string>;

type Props = {
  readonly options: Option[];
  readonly choices: Choice[];
  readonly onChoiceToggle: (choiceId: number) => void;
};

function buildColumns(options: Option[]): Column[] {
  const optionsColumns = options.map((option, idx) => ({
    id: idx,
    label: String(idx + 1),
    align: 'center' as const,
  }));
  return [
    { id: 'optionName', label: '', align: 'right' },
    { id: 'ordinal', label: 'No', align: 'center' },
    ...optionsColumns,
  ];
}

function renderPick(pick?: 'A' | 'B'): string {
  switch (pick) {
    case undefined:
      return '╳';
    case 'A':
      return '👈';
    case 'B':
      return '👆';
    default:
      return unreachable(pick);
  }
}

function getPicksForOption(
  choices: Choice[],
  currentOption: Option,
): Record<Option, 'A' | 'B'> {
  return choices.reduce((acc, { optionA, optionB, picked }) => {
    if (optionA === currentOption) {
      return {
        ...acc,
        [optionB]: picked,
      };
    } else if (optionB === currentOption) {
      const pickedInverted = picked === 'A' ? 'B' : 'A';
      return {
        ...acc,
        [optionA]: pickedInverted,
      };
    } else {
      return acc;
    }
  }, {} as Record<Option, 'A' | 'B'>);
}

function buildRows(
  columns: Column[],
  options: Option[],
  choices: Choice[],
): Row[] {
  return options.map((option, idx) => {
    const picks = getPicksForOption(choices, option);
    const row: Row = columns.reduce((acc, column) => {
      switch (column.id) {
        case 'ordinal':
          return {
            ...acc,
            ordinal: String(idx + 1),
          };
        case 'optionName':
          return {
            ...acc,
            optionName: option,
          };
        default: {
          const colOption = options[column.id];
          const picked = picks[colOption];
          return {
            ...acc,
            [column.id]: renderPick(picked),
          };
        }
      }
    }, {} as Row);
    return row;
  });
}

export function SummaryTable({
  options,
  choices,
  onChoiceToggle,
}: Props): React.ReactElement {
  const columns = buildColumns(options);
  const rows = buildRows(columns, options, choices);

  const handleChoiceToggle = (row: Row, column: Column) => {
    const isLabel = typeof column.id !== 'number';
    if (isLabel) {
      return;
    }
    const isCross = row.ordinal === column.label;
    if (isCross) {
      return;
    }
    const optionA = row.optionName;
    const optionB = options[column.id];
    const choice = choices.find(
      (c) =>
        (c.optionA === optionA && c.optionB === optionB) ||
        (c.optionA === optionB && c.optionB === optionA),
    );
    if (!choice) {
      return;
    }
    onChoiceToggle(choice.id);
  };

  return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader size="small" aria-label="summary table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} align={column.align}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow hover tabIndex={-1} key={row.ordinal}>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}>
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleChoiceToggle(row, column)}
                  >
                    {row[column.id]}
                  </span>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
