import React, { useRef, useImperativeHandle } from 'react';
import Form, { IFormRef } from './Form';
  
  const App: React.FC = () => {
    const formRef = useRef<IFormRef>(null);

    function handleSubmit() {
      formRef.current?.submit();
    }

    return (
      <Form ref={formRef} />
    );
  
  }
  
  
  
export default App;
  