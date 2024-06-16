const Feedback = ({ feedback }) => {
  return (
    <div className="flex flex-col items-center mt-8">
      {feedback.map((item, index) => (
        <div
          key={index}
          className="my-2 p-2 bg-gray-200 border border-gray-300 rounded w-full text-center"
        >
          {item.join(' ')}
        </div>
      ))}
    </div>
  );
};

export default Feedback;
