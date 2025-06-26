import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaStar, FaDirections, FaCommentDots, FaHeart } from 'react-icons/fa';

const FindToilets = () => {
  const [toilets, setToilets] = useState([]);
  const [city, setCity] = useState('Fetching...');
  const[feedback,setFeedback]=useState({});

  const fetchFeedback=async (toiletId)=>{
  try{
    const feedbackRes=await fetch(`/api/feedback/average/${toiletId}`)
    const feedbackData=await feedbackRes.json();
     console.log(`Feedback for ${toiletId}:`, feedbackData)
     setFeedback(prev => ({ ...prev, [toiletId]: feedbackData?.avgRating || 0 }));
  }
  catch(err)
  {
    console.error('Failed to fetch feedback',err);
  }
}

 useEffect(() => {
  navigator.geolocation.getCurrentPosition(
    async ({ coords }) => {
      const { latitude, longitude } = coords;

      // Fetch city
      try {
        const geoRes = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const geoData = await geoRes.json();
        setCity(
          geoData.address?.city ||
          geoData.address?.town ||
          geoData.address?.village ||
          geoData.address?.municipality ||
          geoData.address?.county ||
          geoData.address?.state ||
          'Unknown'
        );
      } catch (err) {
        console.error('City reverse geocode error:', err);
        setCity('Unknown');
      }

      // Fetch toilets
      try {
        const res = await fetch(`/api/toilet/nearby?lat=${latitude}&lng=${longitude}`);
        const data = await res.json();
        setToilets(data);
         data.forEach(toilet => {
            fetchFeedback(toilet._id);})
      } catch (err) {
        console.error('Failed to fetch toilets:', err);
      }
    },
    err => {
      console.error('Geolocation error:', err);
      setCity('Location Error');
    }
  );

}, []);

    console.log(toilets)

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-4xl font-bold">Find Public Toilets</h1>
          <p className="text-gray-400">Discover clean and accessible facilities near you</p>
        </div>
        <span className="text-indigo-400 border border-indigo-500 px-3 py-1 rounded-full text-sm">
          📍 {city}
        </span>
      </div>

      {/* Search Input Placeholder */}
      <div className="bg-neutral-900 border border-neutral-700 p-6 rounded-xl mb-10">
        <h2 className="font-semibold text-lg mb-3">Location Info</h2>
        <input
          className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 rounded-lg focus:outline-none"
          placeholder="🔍 Enter location or landmark..."
          disabled
        />
      </div>

      {/* Map Button */}
      <div className="text-right mb-6">
        <button className="border border-white px-4 py-2 rounded-lg hover:bg-neutral-800">
          <span className="mr-2">🧭</span> Open in Maps
        </button>
      </div>

      {/* Toilet Cards */}
      <h2 className="text-2xl font-semibold mb-4">Nearby Toilets ({toilets.length})</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {toilets.map(toilet => (
          
          <div
            key={toilet._id}
            className="bg-neutral-900 border border-neutral-700 p-5 rounded-xl hover:border-yellow-400 transition"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">{toilet.name}</h3>
              <div className="flex flex-col items-end gap-1">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    toilet.isFree == true ? 'bg-green-600' : 'bg-red-600'
                  }`}
                >
                  {toilet.isFree == true ? 'Free' : 'Paid'}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    toilet.cleanliness === true ? 'bg-green-700' : 'bg-red-700'
                  }`}
                >
                  {toilet.cleanliness === true ? '✅ Clean' : 'Needs Cleaning'}
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-2 flex items-center">
              <FaMapMarkerAlt className="mr-2" /> {toilet.address}
            </p>
            <p className="text-sm text-white">
              Distance: <strong>{toilet.distance}</strong>
            </p>
            <p className="text-sm text-gray-500 mb-4">
              ⏱ Last cleaned: {toilet.lastCleaned}
            </p>

            <div className="flex justify-between items-center mt-auto">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2">
                <FaDirections /> Navigate
              </button>
              <div className="flex items-center gap-3 text-lg">
                <FaCommentDots className="text-gray-400 hover:text-white cursor-pointer" />
                <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer" />
                <div className="flex items-center text-yellow-400 font-bold">
                  <FaStar className="mr-1" /> {feedback[toilet._id]?.toFixed(1) || 'N/A'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindToilets;
