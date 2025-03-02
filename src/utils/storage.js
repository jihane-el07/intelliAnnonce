// export const saveAd = (newAd) => {
//   const ads = JSON.parse(localStorage.getItem('ads')) || [];
//   ads.push(newAd);
//   localStorage.setItem('ads', JSON.stringify(ads));
// };
// export const saveAd = (ad, userId) => {
//   let ads = JSON.parse(localStorage.getItem('ads') || '[]');

//   if (ad.id) {
//     // Update existing ad
//     ads = ads.map(existingAd => 
//       existingAd.id === ad.id ? { ...existingAd, ...ad } : existingAd
//     );
//   } else {
//     // Create new ad
//     const newAd = { 
//       ...ad, 
//       id: Date.now(), 
//       userId 
//     };
//     ads.push(newAd);
//   }

//   localStorage.setItem('ads', JSON.stringify(ads));
// };

export const saveAd = (ad) => {
  let ads = JSON.parse(localStorage.getItem('ads') || '[]');

  if (ad.id && ads.some(existingAd => existingAd.id === ad.id)) {
    // Update existing ad
    ads = ads.map(existingAd => 
      existingAd.id === ad.id ? { ...existingAd, ...ad } : existingAd
    );
  } else {
    // Create new ad
    const newAd = { 
      ...ad, 
      id: ad.id || Date.now() // Keep existing ID for updates
    };
    ads.push(newAd);
  }

  localStorage.setItem('ads', JSON.stringify(ads));
};




export const getAds = () => {
  return JSON.parse(localStorage.getItem('ads')) || [];
};


export const deleteAd = (adId) => {
  const ads = getAds().filter((ad) => ad.id !== adId);
  localStorage.setItem('ads', JSON.stringify(ads));
};

export const updateAd = (adId, updatedAd) => {
  const ads = JSON.parse(localStorage.getItem('ads') || '[]');
  const updated = ads.map(ad => ad.id === adId ? {...ad, ...updatedAd} : ad);
  localStorage.setItem('ads', JSON.stringify(updated));
};

