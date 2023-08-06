export default function SkeletonLoading() {
  return (
    <div className="m-3 my-5 w-full md:w-[18%] cursor-pointer bg-gray-900 p-5 rounded-md animate-pulse">
      <div className="block relative h-48 rounded overflow-hidden">
        <svg class="w-15 h-15 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
      </div>
      <div className="mt-4">
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/5"></div>
        <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mt-5 w-1/4"></div>
        <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 my-3 w-3/4"></div>
      </div>
    </div>
  );
};
