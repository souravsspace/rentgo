import Aside from "../Components/Search/Aside"
import Details from "../Components/Search/Details"
import MobileFilter from "../Components/Search/MobileFilter"

export default function SearchResult() {
  return (
    <main className="my-[5rem] bg-gray-50 px-2 py-2 md:px-8 md:py-6 lg:px-[3rem] xl:px-[8rem]">
      <div className="mx-2 flex flex-col py-2 md:mx-0 md:flex-row md:gap-10 md:py-6">
        <section>
          <div className="hidden md:block">
            <Aside />
          </div>
          <div>
            <MobileFilter />
          </div>
        </section>
        <section className="flex-1">
          <Details />
        </section>
      </div>
    </main>
  )
}
