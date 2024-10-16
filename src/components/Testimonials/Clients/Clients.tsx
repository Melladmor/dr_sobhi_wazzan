import { testimonialsData } from "../../../../localdata/testimonialsData";
import { ClientsT } from "../../../../localdata/type";
import ClientsCard from "./ClientsCard";

const Clients = () => {
  return (
    <div className="w-full inline-flex flex-nowrap mt-[100px] overflow-hidden mask_infitie">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {testimonialsData?.clients?.map((el: ClientsT) => {
          return <ClientsCard image={el?.image} key={el?.id} />;
        })}
        {testimonialsData?.clients?.map((el: ClientsT) => {
          return <ClientsCard image={el?.image} key={el?.id} />;
        })}
        {testimonialsData?.clients?.map((el: ClientsT) => {
          return <ClientsCard image={el?.image} key={el?.id} />;
        })}
      </ul>
    </div>
  );
};

export default Clients;
