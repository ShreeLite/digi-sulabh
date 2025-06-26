import React, { useState, useEffect } from 'react';
import { AlertTriangle, Upload, Send } from 'lucide-react';
import { toast } from 'react-toastify';

const ComplaintForm = () => {
  const [toiletOptions, setToiletOptions] = useState([]);
  const [formData, setFormData] = useState({
    toiletId: '',
    issueType: '',
    priorityLevel: '',
    description: '',
    contactInfo: '',
    photoUrls: []  // Assume you'll wire this up later with file upload
  });

  // Fetch nearby toilets on mount
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/complaint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
       toast.success('Complaint Submitted Successfully!')
        setFormData({
          toiletId: '',
          issueType: '',
          priorityLevel: '',
          description: '',
          contactInfo: '',
          photoUrls: []
        });
      } else {
        const errData = await res.json();
        toast.error(`Failed: ${errData.error}`);
      }
    } catch (err) {
      console.error('Submit error:', err);
      toast.error('An error occurred while submitting your complaint.');
    }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center py-10 px-4">
      <div className="w-full max-w-2xl space-y-6">

        {/* Icon + Title */}
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-900/30">
            <AlertTriangle className="text-red-500" size={20} />
          </div>
          <h1 className="text-4xl font-bold text-[#EAEAEA]">Submit a Complaint</h1>
          <p className="text-[#A9A9A9] mt-2">
            Help us improve public toilet facilities by reporting issues. Your feedback is valuable and helps maintain better sanitation standards for everyone.
          </p>
        </div>

        {/* Emergency Notice */}
        <div className="rounded-lg border border-yellow-700 bg-yellow-900/10 p-4 text-yellow-500">
          <div className="flex items-center gap-2">
            <AlertTriangle size={18} />
            <span className="font-semibold">Emergency Issues</span>
          </div>
          <p className="mt-1 text-sm text-yellow-300">
            For urgent health or safety concerns, please contact local authorities immediately. This form is for non-emergency facility issues.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-lg bg-[#2E2E2E] p-6 border border-[#C0C0C0]"
        >
          <div>
            <label className="block text-[#EAEAEA] font-semibold">Toilet Location <span className="text-red-500">*</span></label>
            <select
              name="toiletId"
              value={formData.toiletId}
              onChange={handleChange}
              className="mt-1 w-full rounded-md bg-[#1C1C1C] border border-[#C0C0C0] p-2 text-[#EAEAEA]"
              required
            >
              <option value="">Select nearby toilet</option>
              {toiletOptions.map((toilet) => (
                <option key={toilet._id} value={toilet._id}>
                  {toilet.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[#EAEAEA] font-semibold">Issue Type <span className="text-red-500">*</span></label>
            <select
              name="issueType"
              value={formData.issueType}
              onChange={handleChange}
              className="mt-1 w-full rounded-md bg-[#1C1C1C] border border-[#C0C0C0] p-2 text-[#EAEAEA]"
              required
            >
              <option value="">Select the type of issue</option>
              <option value="Cleanliness">Cleanliness</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-[#EAEAEA] font-semibold">Priority Level <span className="text-red-500">*</span></label>
            <select
              name="priorityLevel"
              value={formData.priorityLevel}
              onChange={handleChange}
              className="mt-1 w-full rounded-md bg-[#1C1C1C] border border-[#C0C0C0] p-2 text-[#EAEAEA]"
              required
            >
              <option value="">Select priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div>
            <label className="block text-[#EAEAEA] font-semibold">Detailed Description <span className="text-red-500">*</span></label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Please provide a detailed description of the issue..."
              className="mt-1 w-full rounded-md bg-[#1C1C1C] border border-[#C0C0C0] p-2 text-[#EAEAEA] placeholder-[#A9A9A9]"
              rows="4"
              minLength={20}
              required
            />
            <p className="text-xs text-[#A9A9A9] mt-1">Minimum 20 characters. Be specific about the problem for faster resolution.</p>
          </div>

          <div>
            <label className="block text-[#EAEAEA] font-semibold">Contact Information (Optional)</label>
            <input
              type="text"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              placeholder="Phone number or email for follow-up"
              className="mt-1 w-full rounded-md bg-[#1C1C1C] border border-[#C0C0C0] p-2 text-[#EAEAEA] placeholder-[#A9A9A9]"
            />
            <p className="text-xs text-[#A9A9A9] mt-1">We'll only contact you for clarification or updates on your complaint.</p>
          </div>

          <div>
            <label className="block text-[#EAEAEA] font-semibold">Attach Photos (Optional)</label>
            <div className="mt-1 flex flex-col items-center justify-center rounded-md border-2 border-dashed border-[#C0C0C0] p-6 text-center text-[#A9A9A9] hover:border-[#3F51B5]">
              <Upload size={24} className="mb-2" />
              <p className="text-sm">Drag and drop photos here, or click to select</p>
              <p className="text-xs">Photos help us understand the issue better. Max 5 files, 10MB each.</p>
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <button
              type="submit"
              className="flex items-center justify-center gap-1 rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 transition-all duration-300"
            >
              <Send size={16} /> Submit Complaint
            </button>
            <button
              type="reset"
              onClick={() =>
                setFormData({
                  toiletId: '',
                  issueType: '',
                  priorityLevel: '',
                  description: '',
                  contactInfo: '',
                  photoUrls: []
                })
              }
              className="rounded-md border border-[#C0C0C0] px-4 py-2 text-[#EAEAEA] hover:bg-[#2E2E2E] transition-all duration-300"
            >
              Clear Form
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;
