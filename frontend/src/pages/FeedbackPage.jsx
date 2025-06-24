import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, Lock, Droplet, Lightbulb, RefreshCcw } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeedbackForm = () => {
  const [toiletOptions, setToiletOptions] = useState([]);
  const [formData, setFormData] = useState({
    toiletId: '',
    rating: '',
    cleanliness: '',
    soap: '',
    water: '',
    lock: '',
    light: '',
    flush: '',
    comments: ''
  });

  const [overallRating, setOverallRating] = useState(0);
  const [detailedRatings, setDetailedRatings] = useState({
    Cleanliness: 0,
    'Soap Availability': 0,
    'Water Supply': 0,
    'Door Lock': 0,
    Lighting: 0,
    'Flush System': 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(`/api/toilet/nearby?lat=${latitude}&lng=${longitude}`);
          const data = await res.json();
          setToiletOptions(data);
        } catch (err) {
          console.error('Failed to fetch toilets:', err);
        }
      },
      (err) => console.error('Geolocation error:', err)
    );
  }, []);

  const handleDetailedRating = (aspect, value) => {
    setDetailedRatings(prev => ({ ...prev, [aspect]: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      toilet: formData.toiletId,
      rating: overallRating,
      cleanliness: detailedRatings['Cleanliness'],
      soap: detailedRatings['Soap Availability'],
      water: detailedRatings['Water Supply'],
      lock: detailedRatings['Door Lock'],
      light: detailedRatings['Lighting'],
      flush: detailedRatings['Flush System'],
      comments: formData.comments
    };

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        toast.success('Feedback Submitted Successfully!');
        setFormData({
          toiletId: '',
          rating: '',
          cleanliness: '',
          soap: '',
          water: '',
          lock: '',
          light: '',
          flush: '',
          comments: ''
        });
        setOverallRating(0);
        setDetailedRatings({
          Cleanliness: 0,
          'Soap Availability': 0,
          'Water Supply': 0,
          'Door Lock': 0,
          Lighting: 0,
          'Flush System': 0,
        });
      } else {
        const errData = await res.json();
        toast.error(`Failed: ${errData.error}`);
      }
    } catch (err) {
      console.error('Submit error:', err);
      toast.error('An error occurred while submitting your feedback.');
    }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center py-10 px-4">
      <div className="w-full max-w-3xl space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#EAEAEA]">Give Detailed Feedback</h1>
          <p className="text-[#A9A9A9] mt-2">
            Help us maintain and improve toilet facilities by rating different aspects
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg bg-[#2E2E2E] border border-[#C0C0C0] p-6 space-y-4">
          <div>
            <label className="block text-[#EAEAEA] font-semibold">Select Toilet Location <span className="text-red-500">*</span></label>
            <select
              name="toiletId"
              value={formData.toiletId}
              onChange={handleChange}
              className="mt-1 w-full rounded-md bg-[#1C1C1C] border border-[#C0C0C0] p-2 text-[#EAEAEA]"
              required
            >
              <option value="">Choose a toilet you visited</option>
              {toiletOptions.map((toilet) => (
                <option key={toilet._id} value={toilet._id}>
                  {toilet.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h3 className="text-md font-semibold text-[#EAEAEA] mt-4">Overall Rating <span className="text-red-500">*</span></h3>
            <div className="flex items-center gap-1 mt-1">
              {[1, 2, 3, 4, 5].map(star => (
                <Star
                  key={star}
                  onClick={() => setOverallRating(star)}
                  className={`cursor-pointer ${
                    overallRating >= star ? 'fill-yellow-400 text-yellow-400' : 'text-[#C0C0C0]'
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold text-[#EAEAEA] mt-4">Detailed Ratings (Optional)</h3>
            {[
              { label: 'Cleanliness', icon: <CheckCircle size={16} /> },
              { label: 'Soap Availability', icon: <Droplet size={16} /> },
              { label: 'Water Supply', icon: <Droplet size={16} /> },
              { label: 'Door Lock', icon: <Lock size={16} /> },
              { label: 'Lighting', icon: <Lightbulb size={16} /> },
              { label: 'Flush System', icon: <RefreshCcw size={16} /> },
            ].map(item => (
              <div key={item.label} className="mt-2">
                <div className="flex items-center gap-2 text-[#EAEAEA]">
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star
                      key={star}
                      onClick={() => handleDetailedRating(item.label, star)}
                      className={`cursor-pointer ${
                        detailedRatings[item.label] >= star ? 'fill-yellow-400 text-yellow-400' : 'text-[#C0C0C0]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <label className="block text-[#EAEAEA] font-semibold">Additional Comments</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Share any additional feedback..."
              className="mt-1 w-full rounded-md bg-[#1C1C1C] border border-[#C0C0C0] p-2 text-[#EAEAEA]"
              rows="3"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-yellow-500 text-black py-2 font-semibold hover:bg-yellow-600 transition-all duration-300"
          >
            Submit Detailed Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
