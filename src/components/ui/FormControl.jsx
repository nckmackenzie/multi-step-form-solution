const FormControl = props => {
  return (
    <div className={`${props.marginBottom ? 'mb-6' : 'mb-0'}`}>
      <div className="flex justify-between items-center">
        <label
          htmlFor={props.id}
          className="block text-marine-blue text-sm mb-2"
        >
          {props.label}
        </label>
        {props.isInvalid && (
          <span className="inline-flex text-strawberry-red font-medium text-sm">
            Field is required
          </span>
        )}
      </div>
      <input
        type={props.type || 'text'}
        name={props.name}
        id={props.id}
        value={props.value || ''}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
        className={`input-main ${
          props.isInvalid ? 'border-strawberry-red' : ''
        }`}
      />
    </div>
  );
};

export default FormControl;
