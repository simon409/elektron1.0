import React from 'react'

const ReviewsCard = () => {
  return (
    <div class="w-full max-w-sm p-4  rounded-lg border border-gray-100 bg-white shadow-md mx-auto">
      <div class="flex flex-wrap items-center cursor-pointer w-full bg-gray-700 p-2 rounded">
        <img src='https://readymadeui.com/team-1.webp' class="w-14 h-14 rounded-full" />
        <div class="ml-4 flex-1">
          <p class="text-base text-white font-semibold">John Doe</p>
        </div>
      </div>
      <div class="my-8">
        <div class="flex space-x-2">
          <svg class="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg class="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg class="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg class="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg class="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        </div>
        <p class="text-sm text-gray-300 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur nibh, a pharetra felis.</p>
      </div>
      <div class="flex items-center gap-2">
        <p class="text-sm text-gray-300">June 10, 2023</p>
      </div>
    </div>
  )
}

export default ReviewsCard