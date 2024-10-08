import styled from "styled-components";

const Logo = () => {
    return(
        <Container>
            <StyledImage />
        </Container>
    );
};

const Container = styled.div``;
const StyledImage = styled.div`
    background-image: url("./images/MNLogo.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 120px;
    height: 90px;
`;
export default Logo;