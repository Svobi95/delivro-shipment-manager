import { Provider } from "../../../generated/prisma";

export default function Header() {
  return (
    <div className="flex w-full items-center justify-between pb-8">
      <select name="company" id="company-select" onChange={(e) => console.log(e)}>
        <option value="">Filter by company</option>

        {Object.values(Provider).map((provider) => (
          <option key={provider} value={provider}>
            {provider}
          </option>
        ))}
      </select>
      <button type="button" onClick={(e) => {console.log(e)}}>Upload</button>
    </div>
  );
}
