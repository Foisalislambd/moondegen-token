import { RoadmapItem, TokenStat } from "./types";

export const TOKEN_NAME = "MoonDegen";
export const TICKER = "$MOON";
export const CONTRACT_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

export const STATS: TokenStat[] = [
  { label: "Price", value: "$0.0000420", trend: 69.5 },
  { label: "Market Cap", value: "$4.2M", trend: 12.0 },
  { label: "Holders", value: "6,969", trend: 5.4 },
  { label: "Burned", value: "42%", trend: 0 },
];

export const ROADMAP: RoadmapItem[] = [
  {
    phase: "Phase 1",
    title: "The Awakening",
    items: ["Token Launch", "Website Release", "1,000 Telegram Members", "Meme Contest"],
    done: true
  },
  {
    phase: "Phase 2",
    title: "The Shill",
    items: ["CoinGecko Listing", "Trust Wallet Logo", "Influencer Partnerships", "5,000 Holders"],
    done: false
  },
  {
    phase: "Phase 3",
    title: "The Moon",
    items: ["CEX Listing", "MoonDegen NFT Collection", "Merch Store", "Lambo Giveaway"],
    done: false
  }
];

export const TOKENOMICS_DATA = [
  { name: 'Liquidity Pool', value: 45, fill: '#39ff14' },
  { name: 'Marketing', value: 15, fill: '#b026ff' },
  { name: 'Community Airdrop', value: 20, fill: '#04d9ff' },
  { name: 'Dev Team (Locked)', value: 10, fill: '#ec4899' },
  { name: 'CEX Reserve', value: 10, fill: '#facc15' },
];