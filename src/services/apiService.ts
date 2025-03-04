// API endpoints
const API_URL = 'https://api.gettradesonline.co.uk'; // Replace with your actual API base URL

// Interface for trade application
export interface TradeApplication {
  name: string;
  businessName: string;
  trade: string;
  email: string;
  phone: string;
  postcode: string;
  proofDescription: string;
  timestamp: number;
}

// Submit trade application
export const submitTradeApplication = async (applicationData: TradeApplication): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/trade-applications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicationData),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Error submitting trade application:', error);
    return false;
  }
};

// Update trade status
export const updateTradeStatus = async (tradeName: string, status: 'pending' | 'claimed'): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/trade-status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tradeName,
        status,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Error updating trade status:', error);
    return false;
  }
};

// Get all trades with their current status
export const getTrades = async (): Promise<{ name: string; claimed: boolean; pending: boolean }[]> => {
  try {
    const response = await fetch(`${API_URL}/trades`);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching trades:', error);
    // Return empty array on error
    return [];
  }
};

// Local storage keys
export const TRADES_STORAGE_KEY = 'getTradesOnline_trades';

// Save trades to local storage
export const saveTradesLocally = (trades: { name: string; claimed: boolean; pending: boolean }[]): void => {
  localStorage.setItem(TRADES_STORAGE_KEY, JSON.stringify(trades));
};

// Get trades from local storage
export const getTradesLocally = (): { name: string; claimed: boolean; pending: boolean }[] => {
  const storedTrades = localStorage.getItem(TRADES_STORAGE_KEY);
  return storedTrades ? JSON.parse(storedTrades) : null;
}; 