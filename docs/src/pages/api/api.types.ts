import { RBTColumnDefs } from '@pallassystems/react-bootstrap-table';
import { FooterProperties, NavbarProperty } from '@pallassystems/website-core';

type ApiPageProperties = {
  footerProps?: FooterProperties;
  navBarProps?: NavbarProperty;
};

type ApiTableEntry = {
  field: String;
  type: String;
  required: String;
  description: string;
};

// Generate the props table
const ApiColumns: RBTColumnDefs<ApiTableEntry>[] = [
  {
    accessorKey: 'field',
    header: 'Field',
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
  {
    accessorKey: 'required',
    header: 'Required',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
];

export { ApiColumns };
export type { ApiPageProperties, ApiTableEntry };
