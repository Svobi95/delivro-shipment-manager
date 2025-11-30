import { useState } from "react";
import { Provider } from "../../../generated/prisma";
import { Button } from "./catalyst/button";
import { Select } from "./catalyst/select";
import { Field } from "./catalyst/fieldset";
import UploadDialog from "./UploadDialog";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProvider = e.target.value;
    const queryParam = selectedProvider ? `?provider=${selectedProvider}` : "";
    router.replace(`/` + queryParam);
  };

  return (
    <div className="flex w-full flex-col gap-8 pb-8 md:flex-row md:items-center md:justify-between">
      <Field>
        <Select name="comparnyFilter" onChange={handleFilterChange}>
          <option value="">Filter by provider</option>

          {Object.values(Provider).map((provider) => (
            <option key={provider} value={provider}>
              {provider}
            </option>
          ))}
        </Select>
      </Field>

      <Button onClick={(e) => setIsOpen(true)}>Upload Invoices</Button>

      {isOpen && <UploadDialog isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}
