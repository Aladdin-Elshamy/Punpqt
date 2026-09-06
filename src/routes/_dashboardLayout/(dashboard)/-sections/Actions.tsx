import ActionBox from "../-components/ActionBox";
import { Button } from "#/components/ui/button";

export default function Actions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <ActionBox title="Invoices" value="Qoutes Ready" description="Invoices awaiting payment." action={
        <Button className={"mt-11 w-full h-11"}>Details</Button>
      } />
      <ActionBox title="Estimates" value="Qoutes Ready" description="Estimates awaiting approval." action={
        <Button className={"mt-11 w-full h-11"}>Details</Button>
      } />
      <ActionBox title="Expenses" value="Qoutes Ready" description="Expenses awaiting approval." action={
        <Button className={"mt-11 w-full h-11"}>Details</Button>
      } />
      <ActionBox title="Income" value="Qoutes Ready" description="Income awaiting approval." action={
        <Button className={"mt-11 w-full h-11"}>Details</Button>
      } />
      <ActionBox title="Projects" value="Qoutes Ready" description="Projects awaiting approval." action={
        <Button className={"mt-11 w-full h-11"}>Details</Button>
      } />
    </div>
  )
}