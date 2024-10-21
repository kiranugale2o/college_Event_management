import { FiltergetAllContributerList, getAllContributerList } from "@/actions";
import ListOfContibuter from "@/components/list-of-contributer";

export default async function getContributerList({ params, searchParams }) {
  const { eventContributerId } = params;

  // Extract the specific search parameter

  const className = searchParams.class_Name; // Get the value of class_Name
  const amount = searchParams.amount;
  const filterParams = { class_Name: className, amount: amount }; // Create an object with the parameter

  // Logs: { class_Name: 'Bca-III' }

  // Fetch the filtered contributors list

  const filterListData = await FiltergetAllContributerList(
    eventContributerId,
    filterParams
  );
  const data = await getAllContributerList(eventContributerId);

  return (
    <div className="lg:p-20 flex flex-col">
      <div className="p-5 text-[25px] block lg:flex">
        A list of Contributors that Contribute In{" "}
        <u className="ml-3 text-sky-400">{data?.eventName}</u>.
      </div>
      <ListOfContibuter
        filterLists={filterListData.filteredContributors}
        data={data.contributors}
        eventDate={data.date}
        eventName={data.eventName}
        total={filterListData?.total}
      />
    </div>
  );
}
