type TDigit = {
  value: string;
};

const SEGMENTS: Record<string, number[]> = {
  "0": [0, 1, 2, 4, 5, 6],
  "1": [2, 5],
  "2": [0, 2, 3, 4, 6],
  "3": [0, 2, 3, 5, 6],
  "4": [1, 2, 3, 5],
  "5": [0, 1, 3, 5, 6],
  "6": [0, 1, 3, 4, 5, 6],
  "7": [0, 2, 5],
  "8": [0, 1, 2, 3, 4, 5, 6],
  "9": [0, 1, 2, 3, 5],
  ":": [7, 8],
};

const SEGMENT_STYLES: string[] = [
  "top-0 left-2 w-8 h-2", // 0: top
  "top-2 left-0 w-2 h-8", // 1: top-left
  "top-2 right-0 w-2 h-8", // 2: top-right
  "top-10 left-2  w-8 h-2", // 3: middle
  "bottom-0 left-0 w-2 h-8", // 4: bottom-left
  "bottom-0 right-0 w-2 h-8", // 5: bottom-right
  "-bottom-2 left-2 w-8 h-2", // 6: bottom
  "top-5 left-5 w-2 h-2", // 7: upper dot
  "top-15 left-5 w-2 h-2", // 8: lower dot
];

const Digit = ({ value }: TDigit) => {
  const activeSegments = SEGMENTS[value] || [];

  return (
    <div className="mx-1 relative w-12 h-20">
      {SEGMENT_STYLES.map((style, i) => (
        <div
          key={style}
          className={`absolute rounded ${style} ${activeSegments.includes(i) ? "bg-red-500" : "bg-gray-100 opacity-10"}`}
        />
      ))}
    </div>
  );
};

export default Digit;
