import { useContext } from 'react';
import CampaignContext from '../context/campaign/campaignContext';

const useCampaign = () => useContext(CampaignContext);

export default useCampaign;
