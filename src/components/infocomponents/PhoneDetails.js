function PhoneDetails() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mt-4">
        <div className="flex items-center space-x-6">
          <img
            src="https://via.placeholder.com/200"
            alt="Phone"
            className="w-40 h-40 object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold">Samsung Galaxy A26 5G</h2>
            <p className="text-lg text-gray-500">₹24,999</p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default PhoneDetails;
  