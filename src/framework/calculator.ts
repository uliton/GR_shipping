
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

const USA_DELIVERY_CONFIG = {
  'AL': {
    copart: 425,
    aiia: 425,
    port: 'GA',
  },
  'AR': {
    copart: 500,
    aiia: 500,
    port: 'TX',
  },
  'AZ': {
    copart: 400,
    aiia: 400,
    port: 'CA',
  },
  'CA': {
    copart: 425,
    aiia: 425,
    port: 'CA',
  },
  'CO': {
    copart: 675,
    aiia: 675,
    port: 'TX',
  },
  'CT': {
    copart: 300,
    aiia: 300,
    port: 'NJ',
  },
  'DE': {
    copart: 350,
    aiia: 300,
    port: 'NJ',
  },
  'FL': {
    copart: 325,
    aiia: 325,
    port: 'GA',
  },
  'GA': {
    copart: 350,
    aiia: 350,
    port: 'GA',
  },
  'IA': {
    copart: 700,
    aiia: 700,
    port: 'NJ',
  },
  'ID': {
    copart: 850,
    aiia: 850,
    port: 'CA',
  },
  'IL': {
    copart: 575,
    aiia: 575,
    port: 'NJ',
  },
  'IN': {
    copart: 600,
    aiia: 600,
    port: 'NJ',
  },
  'KS': {
    copart: 575,
    aiia: 575,
    port: 'TX',
  },
  'KY': {
    copart: 625,
    aiia: 625,
    port: 'NJ',
  },
  'LA': {
    copart: 375,
    aiia: 375,
    port: 'TX',
  },
  'MA': {
    copart: 375,
    aiia: 375,
    port: 'NJ',
  },
  'MD': {
    copart: 325,
    aiia: 325,
    port: 'NJ',
  },
  'ME': {
    copart: 475,
    aiia: 475,
    port: 'NJ',
  },
  'MI': {
    copart: 675,
    aiia: 675,
    port: 'NJ',
  },
  'MN': {
    copart: 700,
    aiia: 700,
    port: 'NJ',
  },
  'MO': {
    copart: 675,
    aiia: 675,
    port: 'NJ',
  },
  'MS': {
    copart: 475,
    aiia: 475,
    port: 'GA',
  },
  'MT': {
    copart: 1100,
    aiia: 1100,
    port: 'CA',
  },
  'NC': {
    copart: 350,
    aiia: 350,
    port: 'GA',
  },
  'ND': {
    copart: 0, // немає
    aiia: 1150,
    port: 'NJ',
  },
  'NE': {
    copart: 700,
    aiia: 700,
    port: 'NJ',
  },
  'NH': {
    copart: 425,
    aiia: 425,
    port: 'NJ',
  },
  'NJ': {
    copart: 200,
    aiia: 225,
    port: 'NJ',
  },
  'NM': {
    copart: 675,
    aiia: 675,
    port: 'TX',
  },
  'NV': {
    copart: 440,
    aiia: 440,
    port: 'CA',
  },
  'NY': {
    copart: 375,
    aiia: 375,
    port: 'NJ',
  },
  'OH': {
    copart: 500,
    aiia: 500,
    port: 'NJ',
  },
  'OK': {
    copart: 450,
    aiia: 450,
    port: 'TX',
  },
  'OR': {
    copart: 600,
    aiia: 600,
    port: 'CA',
  },
  'PA': {
    copart: 350,
    aiia: 350,
    port: 'NJ',
  },
  'RI': {
    copart: 375,
    aiia: 375,
    port: 'NJ',
  },
  'SC': {
    copart: 325,
    aiia: 325,
    port: 'GA',
  },
  'SD': {
    copart: 1200,
    aiia: 1200,
    port: 'NJ',
  },
  'TN': {
    copart: 475,
    aiia: 475,
    port: 'GA',
  },
  'TX': {
    copart: 350,
    aiia: 350,
    port: 'TX',
  },
  'UT': {
    copart: 550,
    aiia: 550,
    port: 'CA',
  },
  'VA': {
    copart: 425,
    aiia: 425,
    port: 'NJ',
  },
  'VT': {
    copart: 550,
    aiia: 550,
    port: 'NJ',
  },
  'WA': {
    copart: 740,
    aiia: 740,
    port: 'CA',
  },
  'WI': {
    copart: 675,
    aiia: 675,
    port: 'NJ',
  },
  'WV': {
    copart: 575,
    aiia: 575,
    port: 'NJ',
  },
  'WY': {
    copart: 0,
    aiia: 0,
    port: '',
  }, //чекаю
  'DC': {
    copart: 0,
    aiia: 0,
    port: '',
  }, //чекаю
  'AK': {
    copart: 0,
    aiia: 0,
    port: 'CA',
  }, //по замовленню
  'HI': {
    copart: 0,
    aiia: 0,
    port: 'TX',
  }, //по замовленню
}


// auctions fee
export const auctionTaxCalculation = (lotCost: string, auction: string) => {
  const cost = Number(lotCost);
  
  if (auction) {
    const fixFee = 79;
    const extraFee = 10;
    const hidenTax = 50;
    const minCost = fixFee + extraFee + hidenTax;
  
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
export const exciseCalculation = (lotYear: string, lotCost: string, auctionFee: number, engine: string, lotEngineVolume: string) => {
  if (lotYear) {
    const lotAge = new Date().getFullYear() - Number(lotYear);

    if (lotAge >= 25) {
      return 0;
    }
  }

  if (lotCost && auctionFee && engine === ENGINE_CONFIG.electro) {
    return 0;
  }

  if (lotCost && auctionFee && engine && lotEngineVolume) {
    if (engine === ENGINE_CONFIG.petrol || engine === ENGINE_CONFIG.disel) {
      if (Number(lotEngineVolume) < 2000) {
        const excise: number = (Number(lotCost) + auctionFee) * 0.031;
        return excise;
      }

      if (Number(lotEngineVolume) >= 2000) {
        const excise: number = (Number(lotCost) + auctionFee) * 0.186;
        return excise;
      }
    }

    if (engine === ENGINE_CONFIG.hybrid) {
      if (Number(lotEngineVolume) < 2000) {
        const excise: number = (Number(lotCost) + auctionFee) * 0.0155;
        return excise;
      }

      if (Number(lotEngineVolume) >= 2000) {
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
export const stateDeliveryCalculation = (auction: string, map: string, county: string) => {
  const extraCost = 100;

  // USA
  if (map === MAP_CONFIG.usa) {
    if (auction === AUCTIONS_CONFIG.copart) {
      for (const state in USA_DELIVERY_CONFIG) {
        if (state === county) {
          // @ts-ignore
          const stateDelivery = USA_DELIVERY_CONFIG[state][AUCTIONS_CONFIG.copart] + extraCost;

          return stateDelivery;
        }
      }
    }

    if (auction === AUCTIONS_CONFIG.aiia) {
      for (const state in USA_DELIVERY_CONFIG) {
        if (state === county) {
          // @ts-ignore
          const stateDelivery = USA_DELIVERY_CONFIG[state][AUCTIONS_CONFIG.aiia] + extraCost;

          return stateDelivery
        }
      }
    }
  }

  // CANADA
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

    for (const state in states) {
      if (state === county) {
        // @ts-ignore
        const stateDelivery = states[state] + extraCost;

        return stateDelivery;
      }
    }
  }

  return 0;
}


export const portDelivery = (category: string, county: string, port: string) => {
  if (county && port) {
    const ports = {
      NJ: 2200,
      GA: 2200,
      TX: 2600,
      CA: 5600,
    }

    // first category
    if (category === CATEGORY_CONFIG.first) {
      const placeInContainer = 4;

      for (const state in USA_DELIVERY_CONFIG) {
        if (state === county) {
          // @ts-ignore
          const deliveryPort = USA_DELIVERY_CONFIG[state].port;

          for (const port in ports) {
            if (port === deliveryPort) {
              // @ts-ignore
              const deliveryPrice = ports[port] / placeInContainer;

              return deliveryPrice;
            }
          }
        }
      }
    }

    // second category
    if (category === CATEGORY_CONFIG.second) {
      const placeInContainer = 3;

      for (const state in USA_DELIVERY_CONFIG) {
        if (state === county) {
          // @ts-ignore
          const deliveryPort = USA_DELIVERY_CONFIG[state].port;

          for (const port in ports) {
            if (port === deliveryPort) {
              // @ts-ignore
              const deliveryPrice = ports[port] / placeInContainer;

              return deliveryPrice;
            }
          }
        }
      }
    }

    // third category
    if (category === CATEGORY_CONFIG.third) {
      const placeInContainer = 2;

      for (const state in USA_DELIVERY_CONFIG) {
        if (state === county) {
          // @ts-ignore
          const deliveryPort = USA_DELIVERY_CONFIG[state].port;

          for (const port in ports) {
            if (port === deliveryPort) {
              // @ts-ignore
              const deliveryPrice = ports[port] / placeInContainer;

              return deliveryPrice;
            }
          }
        }
      }
    }
  }
}


export const releaseContainerAndBroker = (localStateDelivery: number, containerAndBroker: number) => {
  if (localStateDelivery && containerAndBroker) {
    const margin = 500;
    const broker = 50;
    const containerAndBroker = margin + broker;
    return containerAndBroker;
  }
}


// total delivery price
export const deliveryPriceCalculation = (localStateDelivery: number, toPortDelivery: number, containerAndBroker: number, documentsDelivery: number, complex: number) => {
  if (localStateDelivery && toPortDelivery) {
    const price = localStateDelivery + toPortDelivery + containerAndBroker + documentsDelivery + complex;

    return price;
  }
}


// --------------------------------- lotYear
export const clearanceCalculation = (lotYear:string, lotCost: string, auction_fee: number, localStateDelivery: number, toPortDelivery: number) => {
  if (lotYear && lotCost && auction_fee && localStateDelivery && toPortDelivery) {
    const lotAge = new Date().getFullYear() - Number(lotYear);
    const coefficient = 1; // was 0.9778
    const deliveryToWarsaw = 700;
    const forwarder = 120;

    if (lotAge < 25) {
      const percent = 35;
      const clearance = ((Number(lotCost) + auction_fee + localStateDelivery + toPortDelivery) / coefficient + deliveryToWarsaw) * (percent / 100) + forwarder;
  
      return clearance;
    }

    if (lotAge >= 25) {
      const percent = 8;
      const clearance = (Number(lotCost) + localStateDelivery + toPortDelivery + deliveryToWarsaw) * (percent / 100) + forwarder;
  
      return clearance;
    }
  }
}

export const totalCalculation = (totalCustomsPrice: number, totalDeliveryPrice: number, clearance: number, informService: number) => {
  if (totalCustomsPrice && totalDeliveryPrice && clearance) {
    // const bruttoInformService = informService * 1.23;
    const total = totalCustomsPrice + totalDeliveryPrice + clearance + informService;

    return total;
  }
}