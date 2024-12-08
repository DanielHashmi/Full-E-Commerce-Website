
const Account = () => {
  return (
    <div className="flex justify-center mb-32">
      <div className="xl:w-[80vw] w-full px-6 gap-6 flex flex-col">
        <div className="flex justify-between ">
          <div className="text-gray-500 text-xs py-12 px-6">Account / My Account / Product / View Cart / <span className="">My Account</span></div>
          <div className="text-gray-500 text-xs py-12 px-6">Welcome! <span className="text-red-500">Md Rimel</span></div>
        </div>

        <div className="flex justify-between gap-20">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="">Manage My Account</div>
              <div className="ml-10 opacity-40">
                <div>My Profile</div>
                <div>Address Book</div>
                <div>My Payment Options</div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="">My Orders</div>
              <div className="ml-10 opacity-40">
                <div>My Returns</div>
                <div>My Cancellations</div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="">My Wishlist</div>
            </div>
          </div>

          <div className="p-14 flex gap-6 flex-col border w-full">
            <div className="text-red-500">Edit Your Profile</div>

            <div className="w-full flex flex-col gap-6 md:w-1/2 w-full">
              <div className="flex gap-6 text-xs justify-between w-full">
                <div className="w-full">
                  <div className="flex-col flex w-full">
                    <label htmlFor={'MD'}>First Name</label>
                    <input type="text" id={'MD'} className="bg-[#f5f5f5] p-3 outline-none" placeholder={'MD'} />
                  </div>
                  <div className="flex-col flex w-full">
                    <label htmlFor={'Rimal'}>Last Name</label>
                    <input type="text" id={'Rimal'} className="bg-[#f5f5f5] p-3 outline-none" placeholder={'Rimal'} />
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex-col flex w-full">
                    <label htmlFor={'MD'}>First Name</label>
                    <input type="text" id={'MD'} className="bg-[#f5f5f5] p-3 outline-none" placeholder={'MD'} />
                  </div>
                  <div className="flex-col flex w-full">
                    <label htmlFor={'Rimal'}>Last Name</label>
                    <input type="text" id={'Rimal'} className="bg-[#f5f5f5] p-3 outline-none" placeholder={'Rimal'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Account