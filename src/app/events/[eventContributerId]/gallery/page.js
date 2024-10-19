import { getOneEvents } from "@/actions";
import ImageShowingCard from "@/components/event-images";

export default async function eventImages({ params }) {
  const { eventContributerId } = params;
  const data = await getOneEvents(eventContributerId);
  console.log(data, "gala");

  return <ImageShowingCard data={data} />;
}
