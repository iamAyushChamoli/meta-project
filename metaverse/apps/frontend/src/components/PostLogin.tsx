import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostLogin: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Welcome</h2>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => navigate('/user')}
            className="w-full bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Update User Metadata
          </button>
          <button
            onClick={() => navigate('/arena')}
            className="w-full bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Go to Arena
          </button>
          <button
            onClick={() => navigate('/space')}
            className="w-full bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Edit and Create Space
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostLogin;