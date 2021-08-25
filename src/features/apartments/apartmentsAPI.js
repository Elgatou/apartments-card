import apartments from './Entites.json';

// A mock function to mimic making an async request for data
export function fetchApartments() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(apartments);
    }, 1500);
  });
}
