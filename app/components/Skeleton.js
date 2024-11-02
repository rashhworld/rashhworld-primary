const Skeleton = () => (
  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
    <div className="flex gap-1">
      <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce [animation-delay:-0.3s]" />
      <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce [animation-delay:-0.15s]" />
      <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" />
    </div>
  </div>
);

export default Skeleton;
