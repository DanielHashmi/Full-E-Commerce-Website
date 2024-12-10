import Button from "./components/Button"

const Not_Found = () => {
  return (
    <div className="flex justify-center">
      <div className="xl:w-[80vw] w-full">
        <div className="flex justify-between ">
          <div className="text-gray-500 text-xs py-12 px-6">Home / <span className="font-bold">404 Error</span></div>
        </div>
        <div className="flex flex-col gap-6 items-center py-20 md:pb-40">
          <div className="text-center space-y-6">
            <div className="text-4xl sm:text-5xl md:text-7xl">404 Not Found</div>
            <p className="text-sm">Your visited page not found. You may go home page.</p>
          </div>
          <Button name="Back to home page"/>
        </div>
      </div>
    </div>
  )
}

export default Not_Found