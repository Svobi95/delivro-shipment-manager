import type { Invoice } from "../../types/zod-schemas";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./catalyst/table";

interface PreviewTableProps {
  invoices: Invoice[];
}

export default function PreviewTable({ invoices }: PreviewTableProps) {
  return (
    <Table className="max-w-full">
      <TableHead>
        <TableRow>
          <TableHeader>Invoice number</TableHeader>
          <TableHeader>Invoice price</TableHeader>
          <TableHeader>Invoice weight</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>{invoice.id}</TableCell>
            <TableCell>{invoice.invoicedPrice}</TableCell>
            <TableCell>{invoice.invoicedWeight}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
