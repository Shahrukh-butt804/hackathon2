export default function Spinner() {
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        <div
          className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-black"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  