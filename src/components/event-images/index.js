export default function ImageShowingCard({ data }) {
  console.log(data[0].eventGallary, "eee");

  return (
    <>
      <div className="flex flex-col justify-between lg:p-24">
        <div className="text-2xl semibold p-3">
          Images Of {data[0]?.eventName}
        </div>
        <hr />
        <div className="flex flex-wrap gap-5 mt-6 mx-auto px-2">
          {data[0].eventGallary && data[0].eventGallary.length > 0 ? (
            <>
              {data[0].eventGallary.map((d, i) => {
                return (
                  <img
                    className="w-[300px] border h-[280px] p-auto lg:p-0"
                    key={i}
                    src={d}
                    alt="event image"
                  />
                );
              })}
            </>
          ) : (
            <div className="text-[20px]">Not found any Images</div>
          )}
        </div>
      </div>
    </>
  );
}
