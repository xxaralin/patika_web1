import React from 'react'
import { object, string, ref } from 'yup';

const validations = object({
   email: string().email("Geçerli bir email gir").required("zorunlu"),
   password: string().min(5, "parola zayıfmış biraz daha gir").required("zorunlu"),
   passwordConfirm : string().oneOf([ref('password')], "bunlar aynı mı sence").required("zorunlu")
  
});

export default validations;
