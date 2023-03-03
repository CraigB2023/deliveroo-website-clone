import Form from 'react-bootstrap/Form';

function SideForm(props) {
let labelArray = props.label;
    return (
      <Form>
        {labelArray.map((label) => (
          <div key={`default-${label}`} className="mb-2">
            <Form.Check 
              type={props.type}
              id={label}
              label={label}
              name={props.name}
            />
          </div>
        ))}
      </Form>
    );
  }
  
  export default SideForm;