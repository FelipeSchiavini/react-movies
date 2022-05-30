import React from "react"
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import Form from "./Form";
import makeAnimated from 'react-select/animated';
import { Button, customStyles, MultiSelect } from "./form.style";
import axios from 'axios'

//TODO: ADD FORM VALIDATION
// const schema = yup.object({
//     movieName: yup.string().required(),
//     movieKind: yup.string(),
//   }).required();
const animatedComponents = makeAnimated();


  const MovieForm :React.FC= () :JSX.Element=> {
    const { control, handleSubmit } = useForm({
      defaultValues: {
        select: ""
      }
    });
    const onSubmit = ( data:any ) => {
      console.log(data)
    };
  
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="select"
          control={control}
          render={({ field }) => 
          
          <MultiSelect 
            styles={customStyles}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            {...field} 
            options={[
     
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" }
            ]} 
          />
            }
        />
        <Button type="submit" value='Buscar Filme'/>
      </Form>
    );
}

export default MovieForm


