type LabelProps = {
  label: string;
};

function Label({ label }: LabelProps) {
  return (
    <div className="bg-gradient-to-r from-green-400 to-invert px-3 py-2 rounded-full w-fit">
      <p className="text-blue-900 font-medium">{label}</p>
    </div>
  );
}

export { Label };
