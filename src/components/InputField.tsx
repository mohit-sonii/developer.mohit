export const InputField = ({
  register,
  nameForRegister,
  label_text,
  classnames,
}: {
  register: any;
  nameForRegister: string;
  label_text: string;
  classnames?: string;
}) => {
  return (
    <div className={`${classnames} flex flex-col gap-2`}>
      <label
        style={{ color: "var(--textColor)" }}
        htmlFor="input-field"
        className="font-semibold text-lg"
      >
        {label_text}
      </label>
      <input
        id="input-field"
        {...register(nameForRegister)}
        type="text"
        className="font-semibold px-3 h-[35px] w-[200px] py-1 rounded-md shadow-md border border-gray-300 text-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white appearance-none"
      />
    </div>
  );
};

export const SelectField = ({
  values,
  register,
  nameForRegister,
  label,
  classnames,
}: {
  register: any;
  classnames?: string;
  nameForRegister: string;
  label: string;
  values: string[];
}) => {
  return (
    <div className={`${classnames} flex flex-col gap-2`}>
      <label
        htmlFor="option-field"
        className="font-semibold text-lg"
        style={{ color: "var(--textColor)" }}
      >
        {label}
      </label>
      <select
        id="option-field"
        className={`font-light h-[35px] w-[200px] text-lg rounded-md shadow-md px-3 py-1 border-none outline-none cursor-pointer`}
        {...register(nameForRegister)}
      >
        <option className="text-lg text-gray-500" value="">
          Select
        </option>
        {values.map((val) => (
          <option
            className="text-lg font-semibold text-gray-700"
            key={val}
            value={val}
          >
            {val}
          </option>
        ))}
      </select>
    </div>
  );
};
