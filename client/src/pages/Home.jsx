import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import { DisplayCampaigns } from "../components";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaign] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaign(data);
    setIsLoading(false);
  };
  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <DisplayCampaigns
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  );
};

export default Home;
