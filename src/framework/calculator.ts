
export const ENGINE_CONFIG: EngineConfig = {
  petrol: 'petrol',
  disel: 'disel',
  hybrid: 'hybrid',
  electro: 'electro',
}

export const AUCTIONS_CONFIG: AuctionConfig = {
  copart: 'copart',
  manheim: 'manheim',
  aiia: 'aiia',
}

export const CATEGORY_CONFIG: CategoryConfig = {
  first: 'first',
  second: 'second',
  third: 'third',
}

export const MAP_CONFIG: MapConfig = {
  usa: 'usa',
  canada: 'canada',
  german: 'german',
  poland: 'poland',
}


// auctions fee
export const auctionTaxCalculation = (lotCost: string, auction: string) => {
  if (auction) {
    const cost = Number(lotCost);
    const fixFee = 79;
    const extraFee = 10;
    const minCost = fixFee + extraFee;
  
    const costFee = {
      '99.99': 1,
      '199.99': 25 + 39,
      '299.99': 50 + 39,
      '399.99': 75 + 39,
      '499.99': 110 + 39,
      '549.99': 125 + 49,
      '599.99': 130 + 49,
      '699.99': 140 + 49,
      '799.99': 155 + 49,
      '899.99': 170 + 49,
      '999.99': 185 + 49,
      '1199.99': 200 + 69,
      '1299.99': 225 + 69,
      '1399.99': 240 + 69,
      '1499.99': 250 + 69,
      '1599.99': 260 + 79,
      '1699.99': 275 + 79,
      '1799.99': 285 + 79,
      '1999.99': 300 + 79,
      '2399.99': 325 + 89,
      '2499.99': 335 + 89,
      '2999.99': 350 + 89,
      '3499.99': 400 + 89,
      '3999.99': 450 + 89,
      '4499.99': 575 + 99,
      '4999.99': 600 + 99,
      '5999.99': 625 + 99,
      '7499.99': 650 + 119,
      '7999.99': 650 + 119,
      '9999.99': 675 + 129,
      '14999.99': 700 + 129,
    };
  
    if (cost === 0) {
      return 0;
    }
  
    if (cost >= 15000) {
      const percent = cost * 0.055;
      const auctionFee = minCost + percent + 129;
      return auctionFee;
    }
  
    for (const price in costFee) {
      if (cost <= Number(price)) {
        // @ts-ignore
        const lotFee: number = costFee[price];
        const auctionFee = minCost + lotFee;
        return auctionFee;
      }
    }
  }
}


// excise
export const exciseCalculation = (lotCost: string, auctionFee: number, engine: string, lotEngineVolume: string) => {
  if (lotCost && auctionFee && engine === ENGINE_CONFIG.electro) {
    return 0;
  }

  if (lotCost && auctionFee && engine && lotEngineVolume) {
    if (engine === ENGINE_CONFIG.petrol || engine === ENGINE_CONFIG.disel) {
      if (Number(lotEngineVolume) < 2) {
        const excise: number = (Number(lotCost) + auctionFee) * 0.031;
        return excise;
      }

      if (Number(lotEngineVolume) >= 2) {
        const excise: number = (Number(lotCost) + auctionFee) * 0.186;
        return excise;
      }
    }

    if (engine === ENGINE_CONFIG.hybrid) {
      if (Number(lotEngineVolume) < 2) {
        const excise: number = (Number(lotCost) + auctionFee) * 0.0155;
        return excise;
      }

      if (Number(lotEngineVolume) >= 2) {
        const excise: number = (Number(lotCost) + auctionFee) * 0.093;
        return excise;
      }
    }
  }
}


// insurance
export const insuranceCalculation = (lotCost: string, auction_fee: number, percent: string) => {
  if (lotCost && auction_fee && percent) {
    const insurance = (Number(lotCost) + auction_fee) * (Number(percent) / 100);

    return insurance;
  }
}


// locale state delivery
export const stateDeliveryCalculation = (category: string, map: string, county: string) => {
  
  if (map === MAP_CONFIG.usa) {
    const states = {
      'AL': 425,
      'AR': 500,
      'AZ': 350,
      'CA': 275,
      'CO': 675,
      'CT': 300,
      'DE': 300,
      'FL': 250,
      'GA': 250,
      'IA': 700,
      'ID': 850,
      'IL': 575,
      'IN': 600,
      'KS': 575,
      'KY': 625,
      'LA': 375,
      'MA': 375,
      'MD': 325,
      'ME': 475,
      'MI': 675,
      'MN': 700,
      'MO': 675,
      'MS': 475,
      'MT': 1100,
      'NC': 325,
      'ND': 1150,
      'NE': 700,
      'NH': 425,
      'NJ': 175,
      'NM': 675,
      'NV': 400,
      'NY': 275,
      'OH': 500,
      'OK': 450,
      'OR': 600,
      'PA': 250,
      'RI': 375,
      'SC': 325,
      'SD': 1200,
      'TN': 475,
      'TX': 175,
      'UT': 550,
      'VA': 400,
      'VT': 550,
      'WA': 675,
      'WI': 675,
      'WV': 575,
    }

    if (category === CATEGORY_CONFIG.first) {
      // нужно добівить обработку порта
      let stateDelivery: number = 0;
      for (const state in states) {
        if (state === county) {
          // @ts-ignore
          stateDelivery = states[state];
        }
      }

      return stateDelivery;
    }

    if (category === CATEGORY_CONFIG.second) {
      // нужно добівить обработку порта
      let stateDelivery: number = 0;
      for (const state in states) {
        if (state === county) {
          // @ts-ignore
          stateDelivery = states[state];
        }
      }

      return stateDelivery;
    }

    if (category === CATEGORY_CONFIG.third) {
      // нужно добівить обработку порта
      let stateDelivery: number = 0;
      for (const state in states) {
        if (state === county) {
          // @ts-ignore
          stateDelivery = states[state];
        }
      }

      return stateDelivery;
    }
  }




  if (map === MAP_CONFIG.canada) {
    const states = {
      'YT': 500,
      'NT': 500,
      'NU': 500,
      'NL': 500,
      'BC': 500,
      'AB': 500,
      'SK': 500,
      'MB': 500,
      'ON': 500,
      'QC': 500,
      'PE': 500,
      'NB': 500,
      'NS': 500,
    }

    if (category === CATEGORY_CONFIG.first) {
      // нужно добівить обработку порта
      let stateDelivery: number = 0;
      for (const state in states) {
        if (state === county) {
          // @ts-ignore
          stateDelivery = states[state];
        }
      }

      return stateDelivery;
    }

    if (category === CATEGORY_CONFIG.second) {
      // нужно добівить обработку порта
      let stateDelivery: number = 0;
      for (const state in states) {
        if (state === county) {
          // @ts-ignore
          stateDelivery = states[state];
        }
      }

      return stateDelivery;
    }

    if (category === CATEGORY_CONFIG.third) {
      // нужно добівить обработку порта
      let stateDelivery: number = 0;
      for (const state in states) {
        if (state === county) {
          // @ts-ignore
          stateDelivery = states[state];
        }
      }

      return stateDelivery;
    }
  }

  return 0;
}


export const portDelivery = (port: string) => {
  if (port) {
    return 800;
  }
}

export const deliveryPriceCalculation = (localStateDelivery: number, toPortDelivery: number, documentsDelivery: number, complex: number) => {
  if (localStateDelivery && toPortDelivery) {
    const price = localStateDelivery + toPortDelivery + documentsDelivery + complex;

    return price;
  }
}

export const clearanceCalculation = (lotCost: string, auction_fee: number) => {
  if (lotCost && auction_fee) {
    const margin = 500;
    const extraMargin = 800;
    const percent = 35;
    const broker = 40;
    const clearance = (Number(lotCost) + margin + extraMargin) * (percent / 100) + broker;

    return clearance;
  }
}

export const totalCalculation = (totalCustomsPrice: number, totalDeliveryPrice: number, clearance: number) => {
  if (totalCustomsPrice && totalDeliveryPrice && clearance) {
    const total = totalCustomsPrice + totalDeliveryPrice + clearance;

    return total;
  }
}