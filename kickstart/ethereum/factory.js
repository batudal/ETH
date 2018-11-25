import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xa330e1e5467Fa99745cd914f334e3c695aB3fce5'
);

export default instance;
