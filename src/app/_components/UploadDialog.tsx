import { useState } from "react";
import { Button } from "./catalyst/button";
import { Dialog, DialogActions, DialogBody, DialogTitle } from "./catalyst/dialog";
import PreviewTable from "./PreviewTable";
import { Input } from "./catalyst/input";
import { parseJson } from "../../utils/parseJson";
import { api } from "../../trpc/react";
import type { Invoice } from "../../types/zod-schemas";

interface UploadDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function UploadDialog({ isOpen, setIsOpen }: UploadDialogProps) {
  const utils = api.useUtils();
  const [parsedData, setParsedData] = useState<Invoice[] | null>(null);

  const mutation = api.invoice.upload.useMutation();

  const confirmUpload = async () => {
    if (!parsedData) return;

    await mutation.mutateAsync(parsedData);
    utils.invoice.invalidate();
    setIsOpen(false);
  };

  const parseUploadedFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (!file) {
      // Handle no file selected
      return;
    }
    const fileContent = await file?.text();

    if (!fileContent) {
      //throw error or handle it appropriately
      return;
    }

    const data = parseJson<Invoice[]>(fileContent);

    if (!data) {
      // Handle parsing error
      return;
    }

    setParsedData(data);
  };

  return (
    <Dialog open={isOpen} onClose={setIsOpen} size="5xl">
      {parsedData !== null ? (
        <>
          <DialogTitle>Data preview - {parsedData.length} invoices</DialogTitle>
          <DialogBody className="max-h-[80vh] w-full overflow-auto">
            <PreviewTable invoices={parsedData} />
          </DialogBody>
          <DialogActions>
            <Button plain onClick={() => setIsOpen(false)} disabled={mutation.isPending}>
              Cancel
            </Button>
            <Button onClick={confirmUpload} disabled={mutation.isPending}>
              Confirm
            </Button>
          </DialogActions>
        </>
      ) : (
        <>
          <DialogTitle>Upload JSON file</DialogTitle>
          <DialogBody className="w-full">
            <Input type="file" accept="application/JSON" onChange={parseUploadedFile}></Input>
          </DialogBody>
          <DialogActions>
            <Button plain onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}
