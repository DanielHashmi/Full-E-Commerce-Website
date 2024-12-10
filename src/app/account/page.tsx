import Button from "../components/Button"

const Account = () => {
  return (
    <div className="flex justify-center mb-32">
      <div className="xl:w-[80vw] w-full px-6 gap-6 flex flex-col">
        <div className="flex justify-between ">
          <div className="text-gray-500 text-xs py-12 px-6">Account / My Account / Product / View Cart / <span className="">My Account</span></div>
          <div className="text-gray-500 text-xs py-12 px-6">Welcome! <span className="text-red-500">Md Rimel</span></div>
        </div>

        <div className="flex justify-between gap-20">
          <div className="flex-col gap-6 hidden lg:flex text-sm text-nowrap">
            <div className="flex flex-col gap-3">
              <div className="font-bold">Manage My Account</div>
              <div className="ml-10 opacity-40">
                <div className="text-red-600">My Profile</div>
                <div>Address Book</div>
                <div>My Payment Options</div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="font-bold">My Orders</div>
              <div className="ml-10 opacity-40">
                <div>My Returns</div>
                <div>My Cancellations</div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="font-bold">My Wishlist</div>
            </div>
          </div>

          <div className="sm:p-14 p-6 flex gap-6 flex-col w-full shadow-[0_0_9px_3px_#00000008]">
            <div className="text-red-500">Edit Your Profile</div>

            <div className="flex flex-col gap-6 w-full">
              <div className="flex sm:gap-12 gap-6 flex-col sm:flex-row text-xs justify-between w-full">
                <div className="w-full flex flex-col gap-6">
                  <div className="flex-col flex w-full gap-2">
                    <label htmlFor={'MD'}>First Name</label>
                    <input type="text" id={'MD'} className="bg-[#f5f5f5] p-3 outline-none" placeholder={'MD'} />
                  </div>
                  <div className="flex-col flex w-full gap-2">
                    <label htmlFor={'Email'}>Email</label>
                    <input type="text" id={'Email'} className="bg-[#f5f5f5] p-3 outline-none" placeholder={'rimel1111@gmail.com'} />
                  </div>
                </div>

                <div className="w-full flex flex-col gap-6">
                  <div className="flex-col flex w-full gap-2">
                    <label htmlFor={'Rimel'}>Last Name</label>
                    <input type="text" id={'Rimel'} className="bg-[#f5f5f5] p-3 outline-none" placeholder={'Rimel'} />
                  </div>
                  <div className="flex-col flex w-full gap-2">
                    <label htmlFor={'Address'}>Address</label>
                    <input type="text" id={'Address'} className="bg-[#f5f5f5] p-3 outline-none" placeholder={'Kingston, 5236, United State'} />
                  </div>
                </div>
              </div>

              <div className="flex gap-12 xl:gap-20 text-xs justify-between w-full">
                <div className="w-full flex flex-col gap-6">
                  <div className="flex-col flex w-full gap-2">

                    <label htmlFor={'MD'}>Password Changes</label>
                    <input type="text" id={'MD'} className="bg-[#f5f5f5] p-3 outline-none" placeholder={'Current Password'} />
                  </div>

                  <div className="flex-col flex w-full gap-2">
                    <input type="text" className="bg-[#f5f5f5] p-3 outline-none" placeholder={'New Password'} />
                  </div>

                  <div className="flex-col flex w-full gap-2">
                    <input type="text" className="bg-[#f5f5f5] p-3 outline-none" placeholder={'Confirm New Password'} />
                  </div>
                </div>
              </div>


              <div className="flex self-end items-center gap-6">
                Cancel
                <Button mt={false} name="Save Changes" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Account