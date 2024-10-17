"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <div className=" flex flex-1 justify-center ">
        <div className="layout-content-container flex flex-col w-full flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("gsg.png")',
                }}
              >
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Next up: GSG Fest
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    Don't let what you cannot do interfere with what you can do.
                  </h2>
                </div>
                <button
                  onClick={() => {
                    router.push("/events");
                  }}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#338ae6] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                >
                  <span className="truncate">Events</span>
                </button>
              </div>
            </div>
          </div>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Featured events
          </h2>
          <div className="block lg:flex">
            <div className="p-4 w-[300px]  w-[300px] ">
              <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl "
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/d5e02eb1-b87e-41f1-879c-14d1ddd90deb.png")',
                  }}
                />
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                  <p className="text-[#637588] text-sm font-normal leading-normal">
                    Trending
                  </p>
                  <p className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
                    GSG Games: Summer Showdown
                  </p>
                  <div className="flex items-end gap-3 justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#637588] text-base font-normal leading-normal">
                        June 23-25 • 9:00 AM - 11:00 PM
                      </p>
                      <p className="text-[#637588] text-base font-normal leading-normal">
                        Open to all members
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 w-[300px]">
              <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/c6e82664-23a9-43fb-b0c1-d3fba350b2e0.png")',
                  }}
                />
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                  <p className="text-[#637588] text-sm font-normal leading-normal">
                    Trending
                  </p>
                  <p className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
                    GSG Eats: Taco Tuesday
                  </p>
                  <div className="flex items-end gap-3 justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#637588] text-base font-normal leading-normal">
                        June 28 • 5:00 PM - 7:00 PM
                      </p>
                      <p className="text-[#637588] text-base font-normal leading-normal">
                        Open to all members
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 w-[300px]">
              <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/c6e82664-23a9-43fb-b0c1-d3fba350b2e0.png")',
                  }}
                />
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                  <p className="text-[#637588] text-sm font-normal leading-normal">
                    Trending
                  </p>
                  <p className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
                    GSG Eats: Taco Tuesday
                  </p>
                  <div className="flex items-end gap-3 justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#637588] text-base font-normal leading-normal">
                        June 28 • 5:00 PM - 7:00 PM
                      </p>
                      <p className="text-[#637588] text-base font-normal leading-normal">
                        Open to all members
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 w-[300px]">
              <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/stability/6884234e-9561-4842-bc9c-b9b22e7d29f3.png")',
                  }}
                />
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                  <p className="text-[#637588] text-sm font-normal leading-normal">
                    New
                  </p>
                  <p className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
                    GSG Fitness: Morning Yoga
                  </p>
                  <div className="flex items-end gap-3 justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#637588] text-base font-normal leading-normal">
                        July 2 • 6:00 AM - 7:00 AM
                      </p>
                      <p className="text-[#637588] text-base font-normal leading-normal">
                        Open to all members
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Announcements
          </h2>
          <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/4d576cd1-406b-4cce-a03b-00aefdcfbeb5.png")',
              }}
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">
                GSG Fest: Volunteer Orientation
              </p>
              <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                Starts in 3 days
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/a59fa6a5-974d-43f2-90f2-99230ffdfd39.png")',
              }}
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">
                GSG Fest: Artist Meet &amp; Greet
              </p>
              <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                Starts in 5 days
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/42201a88-d270-47af-836c-e303605a55a9.png")',
              }}
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">
                GSG Fest: Community Clean-up
              </p>
              <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                Starts in 7 days
              </p>
            </div>
          </div>
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Join the GSG community
          </h3>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                placeholder="Enter your email address"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                defaultValue=""
              />
            </label>
          </div>
          <div className="flex px-4 py-3">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#338ae6] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Sign up</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
