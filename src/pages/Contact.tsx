import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react"

export default function Contact() {
  return (
    <main className="m-[8rem] flex items-center justify-center">
      <Card color="transparent" shadow={false} className="bg-gray-100 p-6">
        <Typography variant="h4" color="blue-gray">
          Need help ?
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details and type your issue.
        </Typography>
        <form className="mb-2 mt-8 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" crossOrigin={undefined} required/>
            <Input size="lg" label="Email" crossOrigin={undefined} required/>
            <Input size="lg" label="Issue title" crossOrigin={undefined} required/>
          </div>
          <Textarea size="md" label="Describe your issue" />
          <Button className="mt-6" fullWidth>
            send
          </Button>
        </form>
      </Card>
    </main>
  )
}
