import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react"

export default function About() {
  return (
    <main className="my-[8rem] mx-4 md:px-4 lg:px-8 flex items-center justify-center">
      <div className="w-[32rem]">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                HyperText Markup Language or HTML
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" className="font-normal text-gray-600">
                HTML is the basic scripting language used by web browsers to
                render pages on the world wide web.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Cascading Style Sheets or CSS
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" className="font-normal text-gray-600">
                CSS is a style sheet language used for describing the
                presentation of a document written in a markup language such as
                HTML or XML.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                JavaScript or JS
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" className="font-normal text-gray-600">
                JS is a lightweight interpreted (or just-in-time compiled)
                programming language with first-class functions. While it is
                most well-known as the scripting language for Web pages, many
                non-browser environments also use it, such as Node.js, Apache
                CouchDB and Adobe Acrobat.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Typescript or TS
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography variant="small" className="font-normal text-gray-600">
                It's a free and open-source high-level programming language
                developed by Microsoft that adds static typing with optional
                type annotations to JavaScript. It is designed for the
                development of large applications and transpiles to JavaScript.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </main>
  )
}
