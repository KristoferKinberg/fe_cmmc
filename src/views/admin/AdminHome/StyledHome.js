import styled from 'styled-components';
import Button from '../../../components/Button';
// import DatePicker from "react-datepicker";

const headerColor = '#07b2db';

export const StyledHomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: auto;
  padding: 40px;
`;

export const StyledDatePickerWrap = styled.div`
  display: flex; 
  padding: 20px;
  align-items: center;
      
  .react-datepicker__input-container input {
    width: 125px;
    color: #555;
    font-size: .9em;
    height: 30px;
    padding: 0 10px;
  }
`;

export const StyledDatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

export const SyledLabel = styled.span`
  text-align: left;
  font-weight: bold;
  color: #555;
`;

export const StyledYearActivator = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledBox = styled.div`
  margin-bottom: 20px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

export const StyledBoxHeader = styled.div`
  background: ${headerColor};
  height: 60px;
  width: 100%;
  border-top: 1px solid #bbb;
  border-left: 1px solid #bbb;
  border-right: 1px solid #bbb;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const StyledBoxHeaderTitle = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 1.2em;
`;

export const StyledBoxBody = styled.div`
  background: #fff;
  border: 1px solid #bbb;
  display: flex;
`;

export const StyledHeader = styled.h1`
  font-weight: 900;
  text-transform: uppercase;
  color: #444;
`;

export const StyledBody = styled.div`
  display: flex;
  margin: 0 -30px;
  flex-wrap: wrap;
`;

export const StyledSocialInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
    color: #555;
    font-size: .9em;
    height: 30px;
    padding: 0 10px;
`;

export const StyledSocialInputLabel = styled.label`
  font-weight: 900;
  margin: 0;
  text-transform: capitalize;
  color: #555;
`;

export const StyledButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledPaddedButtonWrap = styled(StyledButtonWrap)`
  padding: 0 20px;
  padding-bottom: 20px;
`;

export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledSaveButton = styled(Button)`
  margin-right: 10px;
`;

export const AddButton = styled.div`
  cursor: pointer;
`;

// export const ReStyledDatePicker = styled(DatePicker)`
//   width: 100%;
//   background: ${({ disabled }) => disabled
//     ? '#ebebeb'
//     : 'inherit'
//   };
// `;
