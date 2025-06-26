import React, { useState, useEffect } from 'react';
import {
  FaCalendarAlt, FaCheckCircle, FaStar, FaCommentDots,
  FaMapMarkerAlt, FaCamera, FaEye, FaCheck, FaImage
} from 'react-icons/fa';

const CleanerDashboard = () => {
     const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const res = await fetch('/api/complaint');  // Update URL as per your backend
        const data = await res.json();
        setComplaints(data);
      } catch (e) {
        console.error('Failed to fetch complaints:', e);
      }
    };
    fetchComplaints();
  }, []);
  const [cleaningStats] = useState([
    { icon: <FaCalendarAlt className="text-blue-500" />, value: 8, label: 'Cleanings Today' },
    { icon: <FaCheckCircle className="text-green-500" />, value: 156, label: 'Total Cleanings' },
    { icon: <FaStar className="text-yellow-400" />, value: 4.7, label: 'Average Rating' },
    { icon: <FaCommentDots className="text-red-500" />, value: 3, label: 'Pending Complaints' },
  ]);

  const [cleaningTasks] = useState([
    { id: 1, location: 'Metro Station - Miyapur', priority: 'high', lastCleaned: '2 hours ago' },
    { id: 2, location: 'HITEC City Bus Stop', priority: 'medium', lastCleaned: '4 hours ago' },
  ]);

 

  const priorityColors = {
    High: 'bg-red-500',
    Medium: 'bg-yellow-500',
    Low: 'bg-green-500',
  };

  const statusColors = {
    Open: 'bg-blue-500',
    'In Progress': 'bg-orange-500',
    Resolved: 'bg-green-500',
  };

  const handleResolve = async (id) => {
    try {
      await fetch(`/api/complaint/${id}`, { method: 'DELETE' }); 
      setComplaints(prev => prev.map(c => c._id === id ? { ...c, statusofComplaint: 'Resolved' } : c));
    } catch (e) {
      console.error('Error resolving complaint:', e);
    }
  };

  const handleTakePhoto = (id) => {
    alert(`Simulate photo upload for task ${id}`);
  };

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-4">Cleaner Dashboard</h1>
      <p className="text-center text-gray-400 mb-6">Welcome back, Rajesh! Ready to keep the city clean?</p>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {cleaningStats.map((stat, index) => (
          <div key={index} className="bg-neutral-900 p-6 rounded-lg border border-neutral-700 flex flex-col items-center hover:shadow-lg hover:border-yellow-400 transition duration-300">
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* CLEANING TASKS */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Daily Cleaning Tasks</h2>
        <p className="text-gray-400 mb-4">Upload photos after cleaning to verify completion</p>
        {cleaningTasks.map(task => (
          <div key={task.id} className="bg-neutral-900 p-6 rounded-lg mb-4 border border-neutral-700 hover:border-yellow-400 hover:shadow-xl transition duration-300 flex justify-between items-center">
            <div>
              <p className="font-semibold text-lg flex items-center">
                <FaMapMarkerAlt className="mr-2 text-yellow-400" /> {task.location}
              </p>
              <span className={`inline-block text-xs text-black font-bold px-2 py-1 rounded ${priorityColors[task.priority]} mt-2`}>
                {task.priority} priority
              </span>
              <p className="text-sm text-gray-500 mt-1">Last cleaned: {task.lastCleaned}</p>
            </div>
            <button
              onClick={() => handleTakePhoto(task.id)}
              className="flex items-center bg-yellow-400 text-black font-medium px-4 py-2 rounded hover:bg-yellow-500 transition duration-300"
            >
              <FaCamera className="mr-2" /> Take Photo
            </button>
          </div>
        ))}
      </section>

      {/* COMPLAINTS */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Assigned Complaints</h2>
        <p className="text-gray-400 mb-4">Issues reported by users that need your attention</p>

        {complaints.length === 0 ? (
          <p className="text-gray-500">No assigned complaints at the moment.</p>
        ) : (
          complaints.map(c => (
            <div key={c._id} className="bg-neutral-900 p-6 rounded-lg mb-4 border border-neutral-700 hover:border-yellow-400 hover:shadow-xl transition duration-300">
              <p className="font-semibold text-lg flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2 text-yellow-400" /> {c.toiletId?.locationName || 'Toilet location'}
              </p>

              <div className="flex gap-2 mb-2 flex-wrap">
                <span className={`inline-block text-xs font-bold px-2 py-1 rounded text-black ${priorityColors[c.priorityLevel]}`}>
                  {c.priorityLevel} Priority
                </span>
                <span className={`inline-block text-xs font-bold px-2 py-1 rounded text-white ${statusColors[c.statusofComplaint]}`}>
                  {c.statusofComplaint}
                </span>
                <span className="inline-block text-xs font-medium px-2 py-1 rounded border border-gray-600 text-gray-400">
                  {c.issueType}
                </span>
              </div>

              <p className="mb-2"><span className="font-bold">Description:</span> {c.description}</p>
              <p className="text-sm text-gray-500 mb-2">Submitted by: {c.submittedBy || 'Anonymous'} | {new Date(c.submittedAt).toLocaleString()}</p>

              {c.photoUrls && c.photoUrls.length > 0 && (
                <div className="flex gap-2 mb-2 flex-wrap">
                  {c.photoUrls.map((url, idx) => (
                    <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="text-yellow-400 text-sm flex items-center gap-1 hover:underline">
                      <FaImage /> View Photo
                    </a>
                  ))}
                </div>
              )}

              {c.statusofComplaint === 'resolved' && (
                <p className="text-green-400 text-sm mb-2">
                  Resolved at: {new Date(c.resolvedAt).toLocaleString()}<br />
                  <span className="italic">{c.resolutionNote}</span>
                </p>
              )}

              <div className="flex gap-2 mt-2 flex-wrap">
                <button className="flex items-center bg-neutral-700 text-white px-3 py-1 rounded hover:bg-neutral-600 transition duration-300">
                  <FaEye className="mr-1" /> View Details
                </button>
                {c.statusofComplaint !== 'resolved' && (
                  <button 
                    onClick={() => handleResolve(c._id)}
                    className="flex items-center bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition duration-300"
                  >
                    <FaCheck className="mr-1" /> Mark Resolved
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default CleanerDashboard;
