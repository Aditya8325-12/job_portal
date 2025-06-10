function NewsLeter() {
  return (
    <div className="bg-white w-full py-10">
      <div className="px-6 text-center lg:px-8">
        <h2 className="mx-auto text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Be the First to Explore New Career Opportunities!
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-lg leading-8 text-gray-600">
          Subscribe now to get early access to job listings, hiring trends, and
          career tips directly in your inbox.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row">
          <div
            className="flex flex-none items-center -space-x-3"
            role="group"
            aria-label="Subscriber profile pictures"
          >
            {/* Sample subscriber avatars */}
            <div className="relative -m-0.5 rounded-full bg-white p-0.5">
              <span
                aria-hidden="true"
                className="absolute inset-0.5 h-8 w-8 rounded-full ring-1 ring-inset ring-gray-900/10"
              />
              <img
                alt="Subscriber 1"
                className="h-8 w-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
              />
            </div>
            <div className="relative -m-0.5 rounded-full bg-white p-0.5">
              <span
                aria-hidden="true"
                className="absolute inset-0.5 h-8 w-8 rounded-full ring-1 ring-inset ring-gray-900/10"
              />
              <img
                alt="Subscriber 2"
                className="h-8 w-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1587397845856-e6cf49176c70?q=80&w=256&auto=format&fit=crop"
              />
            </div>
            <div className="relative -m-0.5 rounded-full bg-white p-0.5">
              <span
                aria-hidden="true"
                className="absolute inset-0.5 h-8 w-8 rounded-full ring-1 ring-inset ring-gray-900/10"
              />
              <img
                alt="Subscriber 3"
                className="h-8 w-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=256&auto=format&fit=crop"
              />
            </div>
            <div className="relative -m-0.5 rounded-full bg-white p-0.5">
              <span
                aria-hidden="true"
                className="absolute inset-0.5 h-8 w-8 rounded-full ring-1 ring-inset ring-gray-900/10"
              />
              <img
                alt="Subscriber 4"
                className="h-8 w-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop"
              />
            </div>
          </div>
          <p
            className="text-sm font-medium text-gray-600"
            aria-label="3,000 subscribers"
          >
            Join 3,000+ job seekers and recruiters
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLeter;
