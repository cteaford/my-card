import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Card>
        <LeftUpperCell>
          <MidText>
            614.499.9852
          </MidText>
        </LeftUpperCell>
        <CenterCell>
          Charles J. Teaford
          <SubText>
          President & CEO
          </SubText>
        </CenterCell>
        <BottomCell>
          direct inquiries to charles.teaford@gmail.com
        </BottomCell>
        <RightUpperCell>
          <MidText>
            Teasoft LLC.
          </MidText>
        </RightUpperCell>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  background: lightslategray;
  min-height: 100vh;
`

const Card = styled.header`
  position: relative;
  /* background: #F9F6EE; */
  background: gainsboro;
  background-size: 100%;
  min-height: 40vh;
  max-width: calc(40vh * 1.6180334);
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Copperplate;
  font-size: calc(10px + 2vmin);
  color: black;
  top: 25vh;
  text-shadow: 0 1px 0 grey;
  border-radius: 3px;
  box-shadow: 2px 1px 1px black;
`

const LeftUpperCell = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 1cm;
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: left;
`
const RightUpperCell = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 1cm;
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: left;
`

const CenterCell = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: left;
`
const BottomCell = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: left;
  bottom: 0;
  padding-bottom: 1em;
  font-size: calc(1px + 2vmin);
`
const SubText = styled.div`
  font-size: calc(1px + 2vmin);
`

const MidText = styled.div`
  font-size: calc(2px + 2vmin);
`

export default App;
