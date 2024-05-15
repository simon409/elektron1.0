const ReviewsCard = ({comment, rating, createdAt, fullname}) => {
  return (
    <div className="w-full max-w-sm p-4  rounded-lg border border-gray-100 bg-white shadow-md mx-auto">
      <div className="flex flex-wrap items-center =w-full bg-white rounded">
        <img src='https://readymadeui.com/team-1.webp' className="w-14 h-14 rounded-full" />
        <div className="ml-4 flex-1">
          <p className="text-base text-black font-semibold">{fullname}</p>
        </div>
      </div>
      <div className="my-2">
        <div className="flex">
        {[...Array(5)].map((_, index) => (
            <svg key={index} aria-hidden="true" className={`h-5 w-5 ${index < Math.floor(rating) ? 'text-yellow-300' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
        ))}
        </div>
        <p className="text-sm text-gray-800 mt-4">
          {comment}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm text-gray-800">{createdAt}</p>
      </div>
    </div>
  )
}

export default ReviewsCard