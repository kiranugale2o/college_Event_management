import { getAllContributerList } from "@/actions";
import ListOfContibuter from "@/components/list-of-contributer";

export default async function getContributerList({ params }) {
  const { eventContributerId } = params;
  console.log(eventContributerId, "iff");

  const data = await getAllContributerList(eventContributerId);
  console.log(data);

  return (
    <div className="lg:p-20 flex flex-col">
      <div className="p-5 text-[25px] block lg:flex">
        A list of Contributors that Contribute In {"   "}
        {"   "}
        <u className="ml-3 text-sky-400">{data?.eventName}</u> .
      </div>
      <ListOfContibuter
        data={data.contributors}
        eventName={data.eventName}
        total={data.totalContributingAmount}
      />
    </div>
  );
}