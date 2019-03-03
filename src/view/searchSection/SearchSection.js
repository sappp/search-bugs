import React from "react";

import Label from './components/Label';
import Input from './components/Input';
import Button from './components/Button';


const SearchSection = ({ label, waterMark, btnName, inputError, btnDisabled, onInputChange, onSearchClick}) => (
  <div className="input-group mb-3">
    <Label label={label} />
    <Input waterMark={waterMark} onChange={onInputChange} error={inputError} />
    <Button name={btnName} disabled={btnDisabled} onclick={onSearchClick} />
  </div>
);

export default SearchSection;
