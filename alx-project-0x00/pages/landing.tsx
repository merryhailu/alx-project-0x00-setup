import Button from "@/components/Button";
import Card from "@/components/Card"

const Landing: React.FC =  () => {
    return (
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />

        <h2 className="font-semibold">Small Buttons</h2>
        <div className="flex gap-4">
          <Button title="Small - sm" styles="text-sm rounded-sm" />
          <Button title="Small - md" styles="text-sm rounded-md" />
          <Button title="Small - lg" styles="text-sm rounded-lg" />
          <Button title="Small - full" styles="text-sm rounded-full" />
        </div>

        <h2 className="font-semibold">Medium Buttons</h2>
        <div className="flex gap-4">
          <Button title="Medium - sm" styles="text-base rounded-sm" />
          <Button title="Medium - md" styles="text-base rounded-md" />
          <Button title="Medium - lg" styles="text-base rounded-lg" />
          <Button title="Medium - full" styles="text-base rounded-full" />
        </div>

        <h2 className="font-semibold">Large Buttons</h2>
        <div className="flex gap-4">
          <Button title="Large - sm" styles="text-lg px-6 py-3 rounded-sm" />
          <Button title="Large - md" styles="text-lg px-6 py-3 rounded-md" />
          <Button title="Large - lg" styles="text-lg px-6 py-3 rounded-lg" />
          <Button title="Large - full" styles="text-lg px-6 py-3 rounded-full" />
        </div>
      </div>
    )
  }
  export default Landing;