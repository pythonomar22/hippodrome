import {
    StyledTitle, 
    StyledSubTitle, 
    Avatar, 
    StyledButton, 
    ButtonGroup,
    StyledFormArea,
    colors
        } from "./../components/Styles";


import Logo from "./../assets/logo.png";
import Chessboard from './../components/Chessboard/Chessboard';
//auth, redux
import {connect} from 'react-redux';
import {logoutUser} from './../auth/actions/userActions';
import {useNavigate} from 'react-router-dom';

const Dashboard = ({logoutUser}) => {
    const navigate = useNavigate();
    return (
        <div>
            <div style = {{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px", 
                display: "flex",
                justifyContent: "flex-start"
            }}>
                <Avatar image={Logo} />
            </div>
            <StyledFormArea bg={colors.dark2}>
                <StyledTitle size={65}>
                    Welcome, player!
                </StyledTitle>
                <Chessboard />
                <ButtonGroup>
                    <StyledButton to='/' onClick={() => logoutUser(navigate)}>
                        Logout
                    </StyledButton>
                </ButtonGroup>
            </StyledFormArea>
            
        </div>
    );
};

export default connect(null, {logoutUser})(Dashboard);