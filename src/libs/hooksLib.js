import { useState } from "react";
export function useFormFields(initialState) {
  const [fieldsTwo, setValues] = useState(initialState);
  return [
    fieldsTwo,
    function(event) {
      setValues({
        ...fieldsTwo,
        [event.target.id]: event.target.value
      });
    }
  ];
}
