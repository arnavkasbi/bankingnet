import { Field } from "formik";

type IFormInputProps = {
  fieldName: string;
  name: string;
  displayName: string;
  as?: string;
  type?: string;
  placeholder?: string;
  readOnly?: boolean;
  error: boolean;
  errorMsg?: string;
  fieldOptions?: Array<any>;
  optionKey?: string;
  optionValue?: string;
};
export const FormInput: React.FC<IFormInputProps> = ({
  displayName,
  type = "text",
  fieldName,
  as = "",
  placeholder = "",
  readOnly = false,
  error = false,
  errorMsg = "",
  fieldOptions = [],
  optionKey = "",
  optionValue = "",
}) => {
  return (
    <div className="flex-column">
      <div className="display-flex">
        <label htmlFor={fieldName}>{displayName}: </label>
        <Field
          as={as}
          type={type}
          name={fieldName}
          placeholder={placeholder}
          readOnly={readOnly}
          autoComplete={`new-password`}
        >
          {as === "select" && fieldOptions.length > 0
            ? fieldOptions.map((o) => (
                <option value={o[optionKey]}>{o[optionValue]}</option>
              ))
            : null}
        </Field>
      </div>
      {error && <div className="input-feedback">{errorMsg}</div>}
    </div>
  );
};
