import Aside from "../Components/Search/Aside"
import Details from "../Components/Search/Details"

export default function SearchResult() {
  return (
    <main className="my-[5rem] bg-gray-50 px-2 py-2 md:px-8 md:py-6 lg:px-[3rem] xl:px-[8rem]">
      <div className="flex gap-10 py-2 md:py-6">
        <section>
          <Aside />
        </section>
        <section>
          <Details />
        </section>
      </div>
    </main>
  )
}
