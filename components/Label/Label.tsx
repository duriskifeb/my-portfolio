type LabelProps = {
  label: string;
};

function Label({ label }: LabelProps) {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right, rgba(34, 139, 34, 0.6), rgba(34, 139, 34, 0.2))",
        border: "1px solid rgba(34, 139, 34, 0.4)",
        padding: "8px 12px",
        borderRadius: "9999px",
        width: "fit-content",
      }}
    >
      <p className="text-white font-medium">{label}</p>
    </div>
  );
}

export { Label };
