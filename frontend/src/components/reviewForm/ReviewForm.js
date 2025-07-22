const ReviewForm = ({handleSubmit, revText, labelText, defaultValue}) => {
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">
          {labelText}
        </label>
        <textarea 
          ref={revText}
          rows={4}
          defaultValue={defaultValue}
          placeholder="Write your review here..."
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 focus:outline-none transition-all duration-300 resize-none"
        />
      </div>
      <button 
        type="submit"
        className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-xl hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        Submit Review
      </button>
    </form>
  )
}

export default ReviewForm
